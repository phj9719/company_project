(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUC104QR");
            this.set_titletext("로봇훈련점수");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FROM\" type=\"STRING\" size=\"256\"/><Column id=\"TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHART_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_PT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bomi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT_ID_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_LVL_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_PT\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chart", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHART_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_PT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_bomi_cont", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_bomi_level", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_weekTitle","5.00%","230",null,"40","5.00%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("지난 30일간 훈련내역");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Div("div_lastBomi","5.00%","70",null,"140","5.00%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#6a8ed3");
            obj.set_borderRadius("6px");
            obj.set_formscrolltype("both");
            obj.set_formscrollbartype("indicator");
            this.addChild(obj.name, obj);

            obj = new Static("sta_day","2.78%","11",null,"26","2.78%",null,null,null,null,null,this.div_lastBomi.form);
            obj.set_taborder("0");
            obj.set_text("DAY");
            obj.set_font("normal 700 16pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            this.div_lastBomi.addChild(obj.name, obj);

            obj = new Div("div_line","2.78%","49",null,"2","2.78%",null,null,null,null,null,this.div_lastBomi.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.div_lastBomi.addChild(obj.name, obj);

            obj = new Static("sta_contH","62","62","120","26",null,null,null,null,null,null,this.div_lastBomi.form);
            obj.set_taborder("2");
            obj.set_text("프로그램");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            this.div_lastBomi.addChild(obj.name, obj);

            obj = new Static("sta_ptH",null,"62","120","26","62",null,null,null,null,null,this.div_lastBomi.form);
            obj.set_taborder("3");
            obj.set_text("점수");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            this.div_lastBomi.addChild(obj.name, obj);

            obj = new Static("sta_contVal","62","97","120","26",null,null,null,null,null,null,this.div_lastBomi.form);
            obj.set_taborder("4");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#bfd5ff");
            obj.set_textAlign("center");
            obj.set_text("-");
            this.div_lastBomi.addChild(obj.name, obj);

            obj = new Static("sta_ptVal",null,"97","120","26","62",null,null,null,null,null,this.div_lastBomi.form);
            obj.set_taborder("5");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#bfd5ff");
            obj.set_textAlign("center");
            obj.set_text("-");
            this.div_lastBomi.addChild(obj.name, obj);

            obj = new Static("sta_todayTitle","5%","20",null,"40","5.00%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("마지막 측정정보");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","5.00%","510",null,"200","4.38%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"130\"/><Column size=\"80\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"날짜\"/><Cell col=\"1\" text=\"프로그램\" border=\"1px solid transparent,1px solid #ffffff,1px solid #ffffff\"/><Cell col=\"2\" text=\"점수\"/></Band><Band id=\"body\"><Cell text=\"bind:BOM_DT\" expandchar=\"dot\" displaytype=\"date\"/><Cell col=\"1\" text=\"bind:PROGRAM_NM\" displaytype=\"combotext\" combodataset=\"ds_nu_bomi_cont\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"2\" text=\"bind:CONT_PT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new BasicChart("cha_bomi","5.00%","275",null,"220","5.00%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#eef3fa");
            obj.set_borderRadius("6px");
            obj.set_binddataset("ds_chart");
            obj.set_boardspacing("10px 10px 0px 0px");
            obj._setContents({
            	"board": {
            		"id": "board"
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#4c4c4c",
            		"titletextfont": "bold 12pt '맑은 고딕'",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "normal 12/normal \"Noto Sans CJK KR Regular\"",
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
            			"itemtextfont": "normal 12/normal \"Noto Sans CJK KR Regular\"",
            			"valuecolumn": "bind:CONT_PT",
            			"linevisible": "true",
            			"lineitemtextposition": "centertop"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": "false",
            			"boardlinestyle": "1px solid #cccccc",
            			"labeltextcolor": "#555555",
            			"labeltextfont": "normal 12/normal \"Noto Sans CJK KR Regular\"",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt '맑은 고딕'",
            			"ticklinestyle": "1px solid #afc3e8",
            			"axislinestyle": "1px solid #afc3e8",
            			"autotickscale": "5",
            			"tickmax": "100",
            			"ticksize": "3",
            			"labelgap": "0"
            		}
            	]
            });
            obj.set_categorycolumn("bind:CHART_DATE");
            this.addChild(obj.name, obj);

            obj = new Div("div_dummy","5.00%","743",null,"5","5.00%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",480,768,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_lastBomi.form.sta_contVal","text","ds_bomi","CONTENT_ID_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_lastBomi.form.sta_ptVal","text","ds_bomi","SCORE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUC104QR.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUC104QR.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUC104QR.xfdl","lib::mpgm_com.xjs");
        this.registerScript("NUC104QR.xfdl", function() {
        /***********************************************************************
         * 화면ID    	: NUC104QR
         * 화면명   	: 로봇훈련점수
         * 화면설명 	: 모바일에서 입소자의 로봇훈련점수를 확인하는 화면
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
        this.NUC104QR_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e);

        	const today = Sct.Util.getToday();					// 오늘 날짜
        	const from = Sct.Util.addDate(today, -29);			// 30일전 날짜

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "COMPANY_CD", nexacro.getApplication().gds_mUserInfo.getColumn(0, "COMPANY_CD"));
        	this.ds_search.setColumn(0, "RES_ID", nexacro.getApplication().gds_mUserInfo.getColumn(0, "RES_ID"));
        	this.ds_search.setColumn(0, "FROM", from);
        	this.ds_search.setColumn(0, "TO", today);

        	this.fn_search();
        };

        // 모바일 디바이스 버튼 이벤트
        this.NUC104QR_ondevicebuttonup = function(obj,e)
        {
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
        	const inDatasets = "input1=ds_search input2=ds_search input3=ds_search";
        	const outDatasets = "ds_bomi=output1 ds_list=output2 ds_chart=output3";
        	const argument = "method=getList "
        		+ "sqlId='NUC104QR.NUC104QR_DS_BOMI_S NUC104QR.NUC104QR_DS_LIST_S NUC104QR.NUC104QR_DS_CHART_S' ";

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
        			if(this.ds_bomi.rowcount < 1)
        			{
        				this.div_lastBomi.form.sta_day.set_text("측정 정보 없음");
        				this.div_lastBomi.form.sta_contVal.set_text("-");
        				this.div_lastBomi.form.sta_lvlVal.set_text("-");
        				this.div_lastBomi.form.sta_ptVal.set_text("-");
        			}
        			else
        			{
        				const bomDt = this.ds_bomi.getColumn(0, "BOM_DT");
        				const day = Sct.Util.getDayH(bomDt, false);
        				const bomDate = bomDt.substr(0, 4) + "." + bomDt.substr(4, 2) + "." + bomDt.substr(6, 2) + "(" + day + ")";
        				this.div_lastBomi.form.sta_day.set_text(bomDate);
        			}

        			if(this.ds_list.rowcount > 0)
        			{
        // 				this.ds_chart.set_enableevent(false);
        // 				for(let i = this.ds_list.rowcount-1; i >= 0; i--)
        // 				{
        // 					const nRow = this.ds_chart.addRow();
        // 					this.ds_chart.copyRow(nRow, this.ds_list, i);
        // 				}
        // 				this.ds_chart.set_enableevent(true);
        // 				this.cha_bomi.set_binddataset("ds_chart");
        // 				this.cha_bomi.set_categorycolumn("BIND:CHART_DATE");
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


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.addEventHandler("ondevicebuttonup",this.NUC104QR_ondevicebuttonup,this);
            this.addEventHandler("onload",this.NUC104QR_onload,this);
        };
        this.loadIncludeScript("NUC104QR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
