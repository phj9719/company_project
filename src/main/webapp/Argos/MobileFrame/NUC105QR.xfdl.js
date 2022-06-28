(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUC105QR");
            this.set_titletext("CIST검사");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,1000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FROM\" type=\"STRING\" size=\"256\"/><Column id=\"TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CIS_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHART_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"CIS_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"PT1\" type=\"STRING\" size=\"256\"/><Column id=\"PT2\" type=\"STRING\" size=\"256\"/><Column id=\"PT3\" type=\"STRING\" size=\"256\"/><Column id=\"PT4\" type=\"STRING\" size=\"256\"/><Column id=\"PT5\" type=\"STRING\" size=\"256\"/><Column id=\"PT6\" type=\"STRING\" size=\"256\"/><Column id=\"PT7\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cist", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CIS_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PT1_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PT2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PT3_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PT4_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PT5_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PT6_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PT7_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"CIS_GRADE_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chart", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CIS_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHART_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"CIS_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"PT1\" type=\"STRING\" size=\"256\"/><Column id=\"PT2\" type=\"STRING\" size=\"256\"/><Column id=\"PT3\" type=\"STRING\" size=\"256\"/><Column id=\"PT4\" type=\"STRING\" size=\"256\"/><Column id=\"PT5\" type=\"STRING\" size=\"256\"/><Column id=\"PT6\" type=\"STRING\" size=\"256\"/><Column id=\"PT7\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_cist_pt", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_cist_grade", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_weekTitle","5%","333",null,"40","5.63%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("지난 1년간 검사정보");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Div("div_lastCist","5.00%","70",null,"240","5.00%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#6a8ed3");
            obj.set_borderRadius("6px");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_day","2.78%","11",null,"26","2.78%",null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("0");
            obj.set_text("DAY");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_font("normal 700 16pt/normal \"Noto Sans KR\"");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Div("div_line","2.78%","49",null,"2","2.78%",null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_background("#bfd5ff");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtH1","10%","62","19.91%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("2");
            obj.set_text("지남력");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtH2","40%","62","20%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("3");
            obj.set_text("주의력");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtH3","70%","62","20%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("4");
            obj.set_text("시공간기능");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtVal1","10%","87","19.91%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("5");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#bfd5ff");
            obj.set_text("-");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtVal2","40%","87","19.91%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("6");
            obj.set_color("#bfd5ff");
            obj.set_text("-");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtVal3","70%","87","19.91%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("7");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#bfd5ff");
            obj.set_text("-");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtH4","10%","122","19.91%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("8");
            obj.set_text("집행기능");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtVal4","10%","147","19.91%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("9");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#bfd5ff");
            obj.set_text("-");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtH5","40%","122","19.91%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("10");
            obj.set_text("기억력");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtVal5","40%","147","19.91%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("11");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#bfd5ff");
            obj.set_text("-");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtH6","70%","122","19.91%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("12");
            obj.set_text("언어기능");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtVal6","70%","147","19.91%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("13");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#bfd5ff");
            obj.set_text("-");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Div("div_line00","2.78%","189",null,"2","2.78%",null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_background("#bfd5ff");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtH7","14.58%","202","12.73%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("15");
            obj.set_text("총점 : ");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtVal7","27.55%","202","17.59%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("16");
            obj.set_text("-");
            obj.set_font("normal 700 16pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_color("#ffffff");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistGradeH","47.92%","202","12.50%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("17");
            obj.set_text("판정 : ");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistGradeVal","59.72%","202","32.64%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("18");
            obj.set_text("-");
            obj.set_font("normal 700 16pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_color("#ffffff");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_todayTitle","5%","20",null,"40","5.00%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("마지막 검사정보");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","5.00%","612",null,"200","5.00%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"80\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"날짜\"/><Cell col=\"1\" text=\"총점\" border=\"1px solid transparent,1px solid #ffffff,1px solid #ffffff\"/><Cell col=\"2\" text=\"판정\"/><Cell col=\"3\" text=\"상세\"/></Band><Band id=\"body\"><Cell text=\"bind:CIS_DT\" expandchar=\"dot\" displaytype=\"date\"/><Cell col=\"1\" text=\"bind:TOTAL_VAL\" combodataset=\"ds_nu_bomi_cont\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"2\" text=\"bind:CIS_GRADE\" displaytype=\"combotext\" combodataset=\"ds_nu_cist_grade\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"3\" text=\"확인\" color=\"#6a8ed3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new BasicChart("cha_cist","5.00%","378",null,"220","5.00%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#eef3fa");
            obj.set_borderRadius("6px");
            obj.set_binddataset("ds_chart");
            obj.set_boardspacing("0px 10px 0px 0px");
            obj._setContents({
            	"board": {
            		"id": "board"
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#4c4c4c",
            		"titletextfont": "bold 12pt '맑은 고딕'",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "normal 500 12pt/normal \"Noto Sans KR\"",
            		"axislinestyle": "1px solid #afc3e8",
            		"ticklinestyle": "1px solid #afc3e8",
            		"boardlinestyle": "1px solid #cccccc",
            		"tickendgap": "20px",
            		"tickstartgap": "20px",
            		"ticksize": "3",
            		"labeltextwidth": "23"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"barvisible": "false",
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "normal 500 12pt/normal \"Noto Sans KR\"",
            			"valuecolumn": "bind:PT1",
            			"linevisible": "true",
            			"lineitemtextposition": "lefttop",
            			"titletext": "지남력",
            			"lineitemtextgap": "3"
            		},
            		{
            			"id": "series1",
            			"valuecolumn": "bind:PT2",
            			"titletext": "주의력",
            			"barvisible": "false",
            			"itemtextvisible": "true",
            			"linevisible": "true",
            			"itemtextfont": "normal 500 12pt/normal \"Noto Sans KR\"",
            			"itemtextcolor": "#ff7f0e",
            			"lineitemtextposition": "righttop",
            			"lineitemtextgap": "3"
            		},
            		{
            			"id": "series2",
            			"valuecolumn": "bind:PT3",
            			"titletext": "시공간기능",
            			"barvisible": "false",
            			"itemtextvisible": "true",
            			"linevisible": "true",
            			"itemtextfont": "normal 500 12pt/normal \"Noto Sans KR\"",
            			"lineitemtextposition": "centerbottom",
            			"itemtextcolor": "#2ca02c",
            			"lineitemtextgap": "3"
            		},
            		{
            			"id": "series3",
            			"valuecolumn": "bind:PT4",
            			"titletext": "집행기능",
            			"barvisible": "false",
            			"itemtextvisible": "true",
            			"linevisible": "true",
            			"itemtextfont": "normal 500 12pt/normal \"Noto Sans KR\"",
            			"lineitemtextposition": "leftbottom",
            			"itemtextcolor": "#d62728",
            			"lineitemtextgap": "3"
            		},
            		{
            			"id": "series4",
            			"valuecolumn": "bind:PT5",
            			"titletext": "기억력",
            			"barvisible": "false",
            			"itemtextvisible": "true",
            			"linevisible": "true",
            			"itemtextfont": "normal 500 12pt/normal \"Noto Sans KR\"",
            			"lineitemtextposition": "centertop",
            			"itemtextcolor": "#9467bd",
            			"lineitemtextgap": "3"
            		},
            		{
            			"id": "series5",
            			"valuecolumn": "bind:PT6",
            			"titletext": "언어기능",
            			"barvisible": "false",
            			"itemtextvisible": "true",
            			"linevisible": "true",
            			"itemtextfont": "normal 500 12pt/normal \"Noto Sans KR\"",
            			"lineitemtextposition": "rightbottom",
            			"itemtextcolor": "#8c564b",
            			"lineitemtextgap": "3"
            		},
            		{
            			"id": "series6",
            			"valuecolumn": "bind:PT7",
            			"titletext": "총점",
            			"barvisible": "false",
            			"itemtextvisible": "true",
            			"linevisible": "true",
            			"itemtextfont": "normal 500 12pt/normal \"Noto Sans KR\"",
            			"lineitemtextposition": "centertop",
            			"itemtextcolor": "#e377c2",
            			"lineitemtextgap": "3"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": "false",
            			"boardlinestyle": "1px solid #cccccc",
            			"labeltextcolor": "#555555",
            			"labeltextfont": "normal 500 12pt/normal \"Noto Sans KR\"",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt '맑은 고딕'",
            			"ticklinestyle": "1px solid #afc3e8",
            			"axislinestyle": "1px solid #afc3e8",
            			"tickmax": "30",
            			"ticksize": "3",
            			"labelgap": "0"
            		}
            	],
            	"legend": {
            		"id": "legend",
            		"padding": "5px 0px 10px",
            		"itemtextfont": "normal 500 10pt/normal \"Noto Sans KR\"",
            		"itemtextcolor": "#555555",
            		"align": "topcenter",
            		"useiteminvisible": "false",
            		"itemautofit": "false"
            	}
            });
            obj.set_categorycolumn("bind:CHART_DATE");
            this.addChild(obj.name, obj);

            obj = new Div("div_dummy","5.00%","863",null,"5","5.00%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",480,1000,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_lastCist.form.sta_cistPtVal1","text","ds_cist","PT1_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_lastCist.form.sta_cistPtVal2","text","ds_cist","PT2_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_lastCist.form.sta_cistPtVal3","text","ds_cist","PT3_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_lastCist.form.sta_cistPtVal4","text","ds_cist","PT4_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_lastCist.form.sta_cistPtVal5","text","ds_cist","PT5_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_lastCist.form.sta_cistPtVal6","text","ds_cist","PT6_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_lastCist.form.sta_cistPtVal7","text","ds_cist","PT7_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_lastCist.form.sta_cistGradeVal","text","ds_cist","CIS_GRADE_VAL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUC105QR.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUC105QR.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUC105QR.xfdl","lib::mpgm_com.xjs");
        this.registerScript("NUC105QR.xfdl", function() {
        /***********************************************************************
         * 화면ID    	: NUC105QR
         * 화면명   	: CIST검사
         * 화면설명 	: 모바일에서 입소자의 CIST검사 결과를 확인하는 화면
         * 작성일    	: 2021-09-09
         * 작성자   	: 조기종
         * 수정이력 	: ↓↓↓↓↓↓↓
         ***********************************************************************
         *     	수정일     	수정자   	내용
         *
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
        this.NUC105QR_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e);

        	const today = Sct.Util.getToday();					// 오늘 날짜
        	const from = Sct.Util.addMonth(today, -12);			// 1년전 날짜

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "COMPANY_CD", nexacro.getApplication().gds_mUserInfo.getColumn(0, "COMPANY_CD"));
        	this.ds_search.setColumn(0, "RES_ID", nexacro.getApplication().gds_mUserInfo.getColumn(0, "RES_ID"));
        	this.ds_search.setColumn(0, "FROM", from);
        	this.ds_search.setColumn(0, "TO", today);

        	this.fn_search();
        };

        // 모바일 디바이스 버튼 이벤트
        this.NUC105QR_ondevicebuttonup = function(obj,e)
        {
        	// 뒤로가기
        	if(e.button == 2)
        	{
        		nexacro.getApplication().av_topFrame.form.btn_back.click();
        	}
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

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search input2=ds_search";
        	const outDatasets = "ds_cist=output1 ds_list=output2";
        	const argument = "method=getList "
        		+ "sqlId='NUC105QR.NUC105QR_DS_CIST_S NUC105QR.NUC105QR_DS_LIST_S '";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			// 마지막 측정 결과가 없을 경우
        			if(this.ds_cist.rowcount < 1)
        			{
        				// 빈값 세팅
        				this.div_lastCist.form.sta_day.set_text("측정 정보 없음");
        				for(let i = 1; i <= 7; i++)
        				{
        					const name = "sta_cistPtVal" + i;
        					this.div_lastCist.form.all[name].set_text("-");
        				}
        				this.div_lastCist.form.sta_cistGradeVal.set_text("-");
        			}
        			else
        			{
        				// 마지막 측정 날짜 세팅
        				const cisDt = this.ds_cist.getColumn(0, "CIS_DT");
        				const day = Sct.Util.getDayH(cisDt, false);
        				const cisDate = cisDt.substr(0, 4) + "." + cisDt.substr(4, 2) + "." + cisDt.substr(6, 2) + "(" + day + ")";
        				this.div_lastCist.form.sta_day.set_text(cisDate);
        			}

        			// 30일간 데이터가 있는 경우
        			if(this.ds_list.rowcount > 0)
        			{
        				// 차트에 그리드와 반대순서로 데이터 세팅
        				this.ds_chart.set_enableevent(false);
        				for(let i = this.ds_list.rowcount-1; i >= 0; i--)
        				{
        					const nRow = this.ds_chart.addRow();
        					this.ds_chart.copyRow(nRow, this.ds_list, i);
        				}
        				this.ds_chart.set_enableevent(true);
        				this.cha_cist.set_binddataset("ds_chart");
        				this.cha_cist.set_categorycolumn("BIND:CHART_DATE");
        			}
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
        // 그리드 셀 클릭 이벤트
        this.grd_list_oncellclick = function(obj,e)
        {
        	// 그리드의 상세 셀
        	if(e.cell == 3)
        	{
        		const rIdx = e.row;

        		const param = {
        				companyCd : this.ds_list.getColumn(rIdx, "COMPANY_CD")
        			,	resId : this.ds_list.getColumn(rIdx, "RES_ID")
        			,	cisDt : this.ds_list.getColumn(rIdx, "CIS_DT")
        		};

        		Sct.tPopup(this, "NUC_CIST_DETAIL_POP", 460, 700, param, "MobilePOP::NUC_CIST_DETAIL_POP.xfdl", "fn_popCallback");
        	}
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "NUC_CIST_DETAIL_POP" :
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.addEventHandler("ondevicebuttonup",this.NUC105QR_ondevicebuttonup,this);
            this.addEventHandler("onload",this.NUC105QR_onload,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
        };
        this.loadIncludeScript("NUC105QR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
