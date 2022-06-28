(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00506_P02");
            this.set_titletext("직원근무일지");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"근무일\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"근무일\" type=\"DATE\" size=\"256\"/><Column id=\"작성자\" type=\"STRING\" size=\"256\"/><Column id=\"작성코드\" type=\"STRING\" size=\"256\"/><Column id=\"총인원\" type=\"STRING\" size=\"256\"/><Column id=\"근무자\" type=\"STRING\" size=\"256\"/><Column id=\"휴가자\" type=\"STRING\" size=\"256\"/><Column id=\"외출자\" type=\"STRING\" size=\"256\"/><Column id=\"주간인원\" type=\"STRING\" size=\"256\"/><Column id=\"야간인원\" type=\"STRING\" size=\"256\"/><Column id=\"근무자a\" type=\"STRING\" size=\"256\"/><Column id=\"근무자b\" type=\"STRING\" size=\"256\"/><Column id=\"근무자c\" type=\"STRING\" size=\"256\"/><Column id=\"근무자d\" type=\"STRING\" size=\"256\"/><Column id=\"일지번호\" type=\"STRING\" size=\"256\"/><Column id=\"업무내용\" type=\"STRING\" size=\"256\"/><Column id=\"기타내용\" type=\"STRING\" size=\"256\"/><Column id=\"부서명a\" type=\"STRING\" size=\"256\"/><Column id=\"부서명b\" type=\"STRING\" size=\"256\"/><Column id=\"부서명c\" type=\"STRING\" size=\"256\"/><Column id=\"부서명d\" type=\"STRING\" size=\"256\"/><Column id=\"view_manager\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_00","0","0","700","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","10","5","110","25",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_text("직원근무일지");
            obj.set_cssclass("lb01");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_save","620","5","70","25",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_01","515","5","95","25",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_text("근무일지");
            obj.set_cssclass("btn_print");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_01","230","5","60","25",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("3");
            obj.set_text("기록번호 :");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_02","295","5","100","25",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("4");
            obj.set_text("sta_02");
            this.div_00.addChild(obj.name, obj);

            obj = new Calendar("cal_00","120","5","90","25",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("5");
            obj.set_buttonsize("0");
            obj.set_readonly("true");
            this.div_00.addChild(obj.name, obj);

            obj = new Div("div_01","0","35","700","650",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_01");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","10","0","390","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_text("직원 근무 현황");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_00_00","400","0","290","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_text("부서별 근무 현황");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01","10","25","65","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_text("총인원");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01_00","75","25","65","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("3");
            obj.set_text("근무자");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00","140","25","65","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("4");
            obj.set_text("휴가자");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01_00_01","205","25","65","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("5");
            obj.set_text("외출자");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01_00_02","335","25","65","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("6");
            obj.set_text("야간근무");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01_00_03","270","25","65","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("7");
            obj.set_text("주간근무");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01_00_02_00","400","25","72","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01_00_02_00_00","472","25","72","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01_00_02_00_00_00","544","25","73","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01_00_02_00_00_01","617","25","73","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01_01","10","50","65","35",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01_00_04","75","50","65","35",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00","140","50","65","35",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01_00_01_00","205","50","65","35",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01_00_03_00","270","50","65","35",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01_00_02_01","335","50","65","35",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01_00_02_00_01","400","50","72","35",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01_00_02_00_00_02","472","50","72","35",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01_00_02_00_00_00_00","544","50","73","35",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01_00_02_00_00_01_00","617","50","73","35",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_02","10","85","65","300",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("22");
            obj.set_text("업무내용");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_02_00","75","85","615","300",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_02_01","10","615","680","35",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_02_00_01","75","385","615","230",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_02_02","10","385","65","230",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("26");
            obj.set_text("기타사항");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_01.addChild(obj.name, obj);

            obj = new TextArea("txt_00","85","95","595","280",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("27");
            obj.set_scrollbartype("fixed");
            obj.set_scrolltype("vertical");
            obj.set_maxlength("500");
            obj.set_wordWrap("char");
            this.div_01.addChild(obj.name, obj);

            obj = new TextArea("txt_00_00","85","395","595","210",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("28");
            obj.set_maxlength("500");
            obj.set_scrollbartype("fixed");
            obj.set_scrolltype("vertical");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btn_manager","15","620","75","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("29");
            obj.set_text("작성자");
            obj.set_cssclass("btn_worker");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_03","100","620","150","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("30");
            this.div_01.addChild(obj.name, obj);

            obj = new TextArea("txt_01_00","80","55","55","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("31");
            obj.set_maxlength("3");
            obj.set_inputtype("number");
            obj.set_autoselect("false");
            this.div_01.addChild(obj.name, obj);

            obj = new TextArea("txt_01_01","145","55","55","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("32");
            obj.set_maxlength("3");
            obj.set_inputtype("number");
            obj.set_autoselect("false");
            this.div_01.addChild(obj.name, obj);

            obj = new TextArea("txt_01_02","210","55","55","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("33");
            obj.set_maxlength("3");
            obj.set_inputtype("number");
            obj.set_autoselect("false");
            this.div_01.addChild(obj.name, obj);

            obj = new TextArea("txt_01_03","275","55","55","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("34");
            obj.set_maxlength("3");
            obj.set_inputtype("number");
            obj.set_autoselect("false");
            this.div_01.addChild(obj.name, obj);

            obj = new TextArea("txt_01_04","340","55","55","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("35");
            obj.set_maxlength("3");
            obj.set_inputtype("number");
            obj.set_autoselect("false");
            this.div_01.addChild(obj.name, obj);

            obj = new TextArea("txt_01_05","409","55","55","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("36");
            obj.set_maxlength("3");
            obj.set_inputtype("number");
            obj.set_autoselect("false");
            this.div_01.addChild(obj.name, obj);

            obj = new TextArea("txt_01_06","481","55","55","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("37");
            obj.set_maxlength("3");
            obj.set_inputtype("number");
            obj.set_autoselect("false");
            this.div_01.addChild(obj.name, obj);

            obj = new TextArea("txt_01_07","552","55","55","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("38");
            obj.set_maxlength("3");
            obj.set_inputtype("number");
            obj.set_autoselect("false");
            this.div_01.addChild(obj.name, obj);

            obj = new TextArea("txt_01_08","625","55","55","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("39");
            obj.set_maxlength("3");
            obj.set_inputtype("number");
            obj.set_autoselect("false");
            this.div_01.addChild(obj.name, obj);

            obj = new TextArea("txt_01","15","55","55","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("40");
            obj.set_inputtype("number");
            obj.set_maxlength("3");
            obj.set_readonly("true");
            this.div_01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_00.form.sta_02","text","ds_list","일지번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_01.form.txt_00","value","ds_list","업무내용");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_01.form.txt_00_00","value","ds_list","기타내용");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_01.form.sta_03","text","ds_list","view_manager");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_00.form.cal_00","value","ds_list","근무일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_01.form.txt_01_00","value","ds_list","근무자");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_01.form.txt_01_01","value","ds_list","휴가자");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_01.form.txt_01_02","value","ds_list","외출자");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_01.form.txt_01_03","value","ds_list","주간인원");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_01.form.txt_01_04","value","ds_list","야간인원");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_01.form.txt_01_05","value","ds_list","근무자a");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_01.form.txt_01_06","value","ds_list","근무자b");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_01.form.txt_01_07","value","ds_list","근무자c");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_01.form.txt_01_08","value","ds_list","근무자d");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_01.form.txt_01","value","ds_list","총인원");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00506_P02.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00506_P02.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00506_P02.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00506_P02
         * 화면명   	: 직원근무일지
         * 화면설명 	:
         * 작성일   	:
         * 작성자   	: 이성탄
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *	2022-00-00
         ***********************************************************************
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_currentDS = this.ds_list;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	this.fv_sicode = this.parent.SICODE;
        	this.fv_date = this.parent.DATE;

        	nexacro.getApplication().gv_curWinKey = "DAY00506_P02";

        	this.ds_search.setColumn(0, "sicode", this.parent.SICODE);
        	this.ds_search.setColumn(0, "근무일", this.parent.DATE);

        	this.fn_search();
        };

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	// 검색조건 필수 체크 (컴포넌트 tooltiptext 값 넣을 것)
        	if (!this.gfn_findSnull(this.div_search)) return false;

        	return true;
        };

        //저장 전 validation
        this.fn_save_pre = function()
        {
        // 	if(Sct.Util.inEmpty(this.ds_list.getColumn(0, "")) {
        // 		this.ds_list.setColumn(0, "", "");
        // 	}
        // 	if(Sct.Util.inEmpty(this.ds_list.getColumn(0, "")) {
        // 		this.ds_list.setColumn(0, "", "");
        // 	}
        	return true;
        }

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //조회
        this.fn_search = function()
        {
        	//if (!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00506_P02.DAY00506_P02_DS_LIST_S ";

        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 저장
        this.fn_save = function()
        {
        	if (!this.fn_save_pre()) return;

        	const svcId = "save";
         	const inDs = "ds_list";
        	this.fn_save_com(svcId, inDs);
        };

        //콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if (strSvcID == "search")
        		{
        			if (this.ds_list.getRowCount() < 1) {
        			let nRow = this.ds_list.addRow();
        			this.ds_list.setColumn(nRow, "sicode", this.fv_sicode);
        			this.ds_list.setColumn(nRow, "작성자", this.parent.name);
        			this.ds_list.setColumn(nRow, "작성코드", this.parent.staffid);
        			this.ds_list.setColumn(nRow, "근무일", this.fv_date);
        			this.ds_list.setColumn(nRow, "근무자", 0);
        			this.ds_list.setColumn(nRow, "휴가자", 0);
        			this.ds_list.setColumn(nRow, "외출자", 0);
        			this.ds_list.setColumn(nRow, "주간인원", 0);
        			this.ds_list.setColumn(nRow, "야간인원", 0);
        			this.ds_list.setColumn(nRow, "근무자a", 0);
        			this.ds_list.setColumn(nRow, "근무자b", 0);
        			this.ds_list.setColumn(nRow, "근무자c", 0);
        			this.ds_list.setColumn(nRow, "근무자d", 0);
        			this.ds_list.setColumn(nRow, "업무내용", "");
        			this.ds_list.setColumn(nRow, "기타내용", "");
        			this.ds_list.setColumn(nRow, "view_manager", this.parent.name + "/" + this.parent.staffid);
        			}
        			else {
        					this.ds_list.setColumn(this.ds_list.rowposition, "view_manager",
        					this.ds_list.getColumn(this.ds_list.rowposition, "작성자") + "/" +
        					this.ds_list.getColumn(this.ds_list.rowposition, "작성코드"));

        			}
        		}
        		else if (strSvcID == "save")
        		{
        			alert("근무기록 저장완료!");
        			this.ds_return.clearData();
        			this.ds_return.addColumn("REFRESH", "STRING");
        			var nRow = this.ds_return.addRow();
        			this.ds_return.setColumn(nRow, "REFRESH", "Y");

        			this.close(this.ds_return.saveXML());
        		}
        	}
        	else
        	{
        		this.alert(strErrorMsg);
        	}
        };

        this.fn_saveBtn = function()
        {
        	this.fn_save();
        };


        /***********************************************************************
         * User Functions
         ***********************************************************************/

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/


        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
         //근무일지 리포트
        this.fn_report1 = function()
        {
        	if (this.ds_list.rowcount == 0)
        	{
        		return false;
        	}

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00506_R01.xfdl";
        	const popupName = "직원근무일지";

        	params = {
        		SICODE : this.ds_search.getColumn(0, "sicode")
        	,	DATE : this.ds_list.getColumn(0, "근무일")
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        // 작성자
        this.btn_manager_onclick = function(obj,e)
        {
        	const param = {
        			SICODE : this.fv_sicode
        		,	DATE : this.ds_list.getColumn(0, "근무일")
        	};

        	Sct.popup(this, "emp", 450, 400, "작성자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };

        // 작성자 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "emp" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				const name = nexacro.trim(objDs.getColumn(0, "c_name"));
        				const dutyname = objDs.getColumn(0, "담당직종");
        				const staffid = objDs.getColumn(0, "c_staffid");
        				this.ds_list.setColumn(0, "작성자", name);
        				this.ds_list.setColumn(0, "작성코드", staffid);
        				this.ds_list.setColumn(0, "view_manager", name + "/" + staffid);
        			}
        			else
        			{
        				this.ds_list.setColumn(0, "작성자", "");
        				this.ds_list.setColumn(0, "작성코드", "");
        				this.ds_list.setColumn(0, "view_manager", "");
        			}
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };

        this.ds_list_oncolumnchanged = function(obj,e)
        {
        	let a = parseInt(this.ds_list.getColumn(0, "근무자"));
        	let b = parseInt(this.ds_list.getColumn(0, "휴가자"));

        	this.ds_list.setColumn(0, "총인원", a+b);

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_00.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_00.form.btn_01.addEventHandler("onclick",this.fn_report1,this);
            this.div_01.form.btn_manager.addEventHandler("onclick",this.btn_manager_onclick,this);
            this.div_01.form.sta_03.addEventHandler("onclick",this.div_01_sta_03_onclick,this);
            this.div_01.form.txt_01.addEventHandler("onchanged",this.div_01_txt_01_onchanged,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00506_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
