(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUA810QR");
            this.set_titletext("기저귀사용량조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1112,620);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"YYYYMM\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_SUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","32",null,"74","0.00%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("s01");
            this.addChild(obj.name, obj);

            obj = new Static("sta_yyyy","2","25","100","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new MaskEdit("mdt_yyyy","112","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("essential");
            obj.set_textAlign("right");
            obj.set_format("####");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","0","120",null,null,"0.00%","0.00%",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_gHMove","400","40%","26","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_icon("URL(\'imagerc::grid_horizontal.png\')");
            obj.set_background("transparent");
            obj.set_borderRadius("10px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","400",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left01","0","15","194","22",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_text("기저귀사용량 조회");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","39",null,null,"0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_border("3px solid rgba(119,119,119,1), 1px solid rgba(229,229,229,1), 1px solid rgba(229,229,229,1), 1px solid rgba(229,229,229,1)");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"90\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"년월\"/><Cell col=\"2\" text=\"일반기저귀사용량\"/><Cell col=\"3\" text=\"스마트기저귀사용량\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:YYYYMM\" expandchar=\"month\"/><Cell col=\"2\" text=\"bind:N_DIAPER_SUM\" textAlign=\"right\"/><Cell col=\"3\" combocodecol=\"CMCD\" combodatacol=\"CMNM\" combodataset=\"ds_nu_area_tp\" text=\"bind:S_DIAPER_SUM\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","426","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            this.div_cont.addChild(obj.name, obj);

            obj = new BasicChart("cha_diaper","0","15",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "기저귀사용량",
            		"textfont": "normal 700 20pt/normal \"Noto Sans KR\"",
            		"padding": "0px 0px 5px"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "normal 400 9pt/normal \"Noto Sans KR\"",
            		"itemtextcolor": "#4c4c4c",
            		"visible": true,
            		"align": "bottomcenter"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "#ffffff",
            		"textfont": "normal 400 10pt/normal \"Noto Sans KR\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board"
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#4c4c4c",
            		"titletextfont": "bold 12pt \"맑은 고딕\"",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "11pt \"맑은 고딕\"",
            		"axislinestyle": "1px solid #525252",
            		"ticklinestyle": "1px solid #525252",
            		"boardlinestyle": "1px solid #d0d0d0",
            		"titletextalign": "high",
            		"labelmask": "####년 ##월",
            		"labeltextwidth": "50",
            		"tickstartgap": "50px",
            		"tickendgap": "50px"
            	},
            	"valueaxes": [
            		{
            			"id": "sum",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #d0d0d0",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "10pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt \"맑은 고딕\"",
            			"ticklinestyle": "1px solid #525252",
            			"axislinestyle": "1px solid #525252",
            			"titletextalign": "high",
            			"tickmax": "60000",
            			"tickmin": "0",
            			"ticksize": "0"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "n_diaper",
            			"titletext": "일반기저귀사용량",
            			"barvisible": "false",
            			"barsize": "65",
            			"barlinestyle": "0px none",
            			"barfillstyle": "#5bbbff",
            			"linevisible": true,
            			"linestyle": "1px solid #0172c3",
            			"linefillstyle": "#1a22bf",
            			"pointvisible": true,
            			"pointsize": "15",
            			"pointlinestyle": "1px solid #0172c3",
            			"pointfillstyle": "#0172c3",
            			"lineareafillstyle": "rgba(0,148,253,0.3)",
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt \"맑은 고딕\"",
            			"autogradation": "none",
            			"barradius": "0",
            			"valuecolumn": "bind:N_DIAPER_SUM",
            			"tooltiptext": "bind:N_DIAPER_SUM",
            			"pointitemtextposition": "righttop",
            			"pointitemtextgap": "5"
            		},
            		{
            			"id": "s_diaper",
            			"barvisible": "false",
            			"valuecolumn": "bind:S_DIAPER_SUM",
            			"titletext": "스마트기저귀사용량",
            			"linevisible": "true",
            			"pointvisible": "true",
            			"tooltiptext": "bind:S_DIAPER_SUM",
            			"pointitemtextposition": "lefttop",
            			"itemtextcolor": "#ff7f0e",
            			"pointitemtextgap": "5"
            		}
            	]
            });
            obj.set_categorycolumn("bind:YYYYMM");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static60","0","9","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색조건");
            obj.set_cssclass("lb01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sMove","44.69%","106",null,"16","44.69%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("url(\'imagerc::search_open.png\') no-repeat transparent");
            obj.set_border("0px solid");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1112,620,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.mdt_yyyy","value","ds_search","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUA810QR.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUA810QR.xfdl","lib::pgm_com.xjs");
        this.registerScript("NUA810QR.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: NUA810QR
         * 화면명   	: 기저귀사용량조회
         * 화면설명 	: 년월별 기저귀 사용량을 파악하기 위한 화면
         * 작성일   	: 2021-08-25 13:40
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *  수정일				수정자			내용
         *
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
        this.fv_currentGrid = this.div_cont.form.div_left.form.grd_list;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e, false);

        	// 기본 검색조건 세팅
        	this.ds_search.setColumn(0, "COMPANY_CD", nexacro.getApplication().gds_userInfo.getColumn(0, "COMPANY_CD"));
        	this.ds_search.setColumn(0, "SERVICE_TP", nexacro.getApplication().gds_userInfo.getColumn(0, "SERVICE_TP"));
        	this.ds_search.setColumn(0, "APPLICATION_TP", nexacro.getApplication().gv_applicationTp);

        	// 검색조건에 년도 올해로 세팅
        	const date = new Date();
        	const nYear = date.getFullYear();
        	this.ds_search.setColumn(0, "YYYY", nYear);

        	//drag 버튼 활성화
        	this.fn_setDivDrag();

        	// 오픈시 전체 조회
        	this.fn_search();

        	// 오픈시 검색조건 첫 항목에 커서 이동
        	this.div_search.form.mdt_yyyy.setFocus();
        };

        /***********************************************************************
         * Common Button Functions
         ************************************************************************/
        // 조회 버튼
        this.fn_searchBtn = function ()
        {
        	this.fn_search();
        };

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	//조회조건 필수여부확인
        	if(!this.gfn_findSnull(this.div_search)) return false;

        	// 조회전에 년도가 올해면 현재월까지만 검색되도록 월 조건 추가
        	const date = new Date();
        	const nYear = date.getFullYear();
        	if(this.ds_search.getColumn(0, "YYYY") == nYear)
        	{
        		const nMonth = (date.getMonth() + 1 + "").padLeft(2, '0');
        		this.ds_search.setColumn(0, "MM", nMonth);
        	}
        	else
        	{
        		this.ds_search.setColumn(0, "MM", "");
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
        		+ "sqlId=NUA810QR.NUA810QR_DS_LIST_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			const count = this.ds_list.rowcount;
        			Sct.alert(this, "000175", count + "|");
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
         * Popup Functions
         ***********************************************************************/
        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{

        	}
        };

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        //drag 버튼 활성화
        this.fn_setDivDrag = function()
        {
        	//divCont
        	this.gfn_setDivDrag(this.div_cont.form.btn_gHMove, this.div_cont.form.div_left, this.div_cont.form.div_right);
        };

        // 차트 클릭시 팝업 띄우기
        this.cha_diaper_onclick = function(obj,e)
        {
        	// 차트 팝업에서 사용할 데이터셋(ds)과 차트 하위컨트롤(contents)과 카테고리컬럼(cateCol)
        	const param = {
        		ds : this.ds_list,
        		cateCol : "bind:YYYYMM",
        		contents : {
        					"title": {
        						"id": "title",
        						"text": "기저귀사용량",
        						"textfont": "20pt/normal \"맑은 고딕\"",
        						"padding": "0px 0px 5px"
        					},
        					"legend": {
        						"id": "legend",
        						"padding": "3px 10px 3px 10px",
        						"itemtextfont": "9pt \"맑은 고딕\"",
        						"itemtextcolor": "#4c4c4c",
        						"visible": true,
        						"align": "bottomcenter"
        					},
        					"tooltip": {
        						"id": "tooltip",
        						"background": "#4b4b4b",
        						"linestyle": "0px none",
        						"textcolor": "#ffffff",
        						"textfont": "10pt/normal \"맑은 고딕\"",
        						"padding": "5px"
        					},
        					"board": {
        						"id": "board"
        					},
        					"categoryaxis": {
        						"id": "categoryaxis",
        						"titletextcolor": "#4c4c4c",
        						"titletextfont": "bold 12pt \"맑은 고딕\"",
        						"labeltextcolor": "#6f6f6f",
        						"labeltextfont": "11pt \"맑은 고딕\"",
        						"axislinestyle": "1px solid #525252",
        						"ticklinestyle": "1px solid #525252",
        						"boardlinestyle": "1px solid #d0d0d0",
        						"titletextalign": "high",
        						"labelmask": "####년##월",
        						"labeltextwidth": "50",
        						"tickstartgap": "50px",
        						"tickendgap": "50px"
        					},
        					"valueaxes": [
        						{
        							"id": "sum",
        							"boardlinevisible": true,
        							"boardlinestyle": "1px solid #d0d0d0",
        							"labeltextcolor": "#6f6f6f",
        							"labeltextfont": "10pt/normal \"맑은 고딕\"",
        							"titletextcolor": "#4c4c4c",
        							"titletextfont": "bold 12pt \"맑은 고딕\"",
        							"ticklinestyle": "1px solid #525252",
        							"axislinestyle": "1px solid #525252",
        							"titletextalign": "high",
        							"tickmin": "0",
        							"ticksize": "0"
        						}
        					],
        					"seriesset": [
        						{
        							"id": "n_diaper",
        							"titletext": "일반기저귀사용량",
        							"barvisible": "false",
        							"barsize": "65",
        							"barlinestyle": "0px none",
        							"barfillstyle": "#5bbbff",
        							"linevisible": true,
        							"linestyle": "1px solid #0172c3",
        							"linefillstyle": "#1a22bf",
        							"pointvisible": true,
        							"pointsize": "15",
        							"pointlinestyle": "1px solid #0172c3",
        							"pointfillstyle": "#0172c3",
        							"lineareafillstyle": "rgba(0,148,253,0.3)",
        							"itemtextvisible": "true",
        							"itemtextcolor": "#003860",
        							"itemtextfont": "bold 12pt \"맑은 고딕\"",
        							"autogradation": "none",
        							"barradius": "0",
        							"valuecolumn": "bind:N_DIAPER_SUM",
        							"tooltiptext": "bind:N_DIAPER_SUM",
        							"pointitemtextposition": "righttop",
        							"pointitemtextgap": "5"
        						},
        						{
        							"id": "s_diaper",
        							"barvisible": "false",
        							"valuecolumn": "bind:S_DIAPER_SUM",
        							"titletext": "스마트기저귀사용량",
        							"linevisible": "true",
        							"pointvisible": "true",
        							"tooltiptext": "bind:S_DIAPER_SUM",
        							"pointitemtextposition": "lefttop",
        							"itemtextvisible": "true",
        							"itemtextcolor": "#ff7f0e",
        							"pointitemtextgap": "5"
        						}
        					]
        				}
        	};
        	Sct.popup(this, "CHART", 326, 226, "", param, "CM_POP::NU_CHART_PP.xfdl", "fn_popCallback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("oncelldblclick",this.div_cont_grd_head_oncelldblclick,this);
            this.div_cont.form.div_right.form.cha_diaper.addEventHandler("onclick",this.cha_diaper_onclick,this);
            this.div_cont.form.div_right.form.cha_diaper.addEventHandler("onboardclick",this.cha_diaper_onclick,this);
            this.div_cont.form.div_right.form.cha_diaper.addEventHandler("onaxisclick",this.cha_diaper_onclick,this);
            this.btn_sMove.addEventHandler("onclick",this.search_reset,this);
            this.btn_sMove.addEventHandler("ondrag",this.search_resize,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_head_oncolumnchanged,this);
            this.ds_list.addEventHandler("onrowposchanged",this.ds_head_onrowposchanged,this);
        };
        this.loadIncludeScript("NUA810QR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
