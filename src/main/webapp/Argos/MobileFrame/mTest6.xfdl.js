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
            this.set_titletext("체성분분석");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRESIDENT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SMM\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"HEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"BFM\" type=\"STRING\" size=\"256\"/><Column id=\"BFB\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DATE\">2021.06.10</Col><Col id=\"SMM\">28kg</Col><Col id=\"WEIGHT\">70kg</Col><Col id=\"HEIGHT\">175cm</Col><Col id=\"BFM\">30kg</Col><Col id=\"BFB\">30%</Col></Row><Row><Col id=\"DATE\">2021.05.10</Col><Col id=\"SMM\">30kg</Col><Col id=\"WEIGHT\">68kg</Col><Col id=\"HEIGHT\">175cm</Col><Col id=\"BFM\">29kg</Col><Col id=\"BFB\">29%</Col></Row><Row><Col id=\"DATE\">2021.04.10</Col><Col id=\"SMM\">27kg</Col><Col id=\"WEIGHT\">65kg</Col><Col id=\"HEIGHT\">176cm</Col><Col id=\"BFM\">27kg</Col><Col id=\"BFB\">25%</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chart", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SMM\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"HEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"BFM\" type=\"STRING\" size=\"256\"/><Column id=\"BFB\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DATE\">04.10</Col><Col id=\"SMM\">27</Col><Col id=\"WEIGHT\">65</Col><Col id=\"HEIGHT\">176</Col><Col id=\"BFM\">27</Col><Col id=\"BFB\">25</Col></Row><Row><Col id=\"DATE\">05.10</Col><Col id=\"SMM\">30</Col><Col id=\"WEIGHT\">68</Col><Col id=\"HEIGHT\">175</Col><Col id=\"BFM\">29</Col><Col id=\"BFB\">29</Col></Row><Row><Col id=\"DATE\">06.10</Col><Col id=\"SMM\">28</Col><Col id=\"WEIGHT\">70</Col><Col id=\"HEIGHT\">175</Col><Col id=\"BFM\">30</Col><Col id=\"BFB\">30</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","5.00%","10",null,"40","5.00%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("체성분 분석 내역");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","5.00%","111",null,"30","5.00%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("최근 30일간 홍길동님의 물리치료 정보입니다.");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_txt");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","5.00%","545",null,"131","5.00%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"날짜\"/><Cell col=\"1\" text=\"골격근량\"/><Cell col=\"2\" text=\"체중\"/><Cell col=\"3\" text=\"신장\"/><Cell col=\"4\" text=\"체지방량\"/><Cell col=\"5\" text=\"체지방률\"/></Band><Band id=\"body\"><Cell text=\"bind:DATE\"/><Cell col=\"1\" text=\"bind:SMM\"/><Cell col=\"2\" text=\"bind:WEIGHT\"/><Cell col=\"3\" text=\"bind:HEIGHT\"/><Cell col=\"4\" text=\"bind:BFM\"/><Cell col=\"5\" text=\"bind:BFB\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","5.00%","59",null,"40","5.00%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","90","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("분기별");
            obj.set_cssclass("btn_3month");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","88","0","90","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("반기별");
            obj.set_cssclass("btn_6month");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","176","0","90","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("연도별");
            obj.set_cssclass("btn_12month");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("div_chart","5.00%","152",null,"220","5.00%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_background("#eef3fa");
            obj.set_borderRadius("6px");
            obj.set_formscrollbartype("indicator");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart00","0","10","430","200",null,null,null,null,null,null,this.div_chart.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_chart");
            obj.set_boardspacing("0px 5px 0px 0px");
            obj._setContents({
            	"board": {
            		"id": "board"
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#082c71",
            		"titletextfont": "14pt/normal \"Noto Sans CJK KR Regular\"",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "14pt/normal \"Noto Sans CJK KR Regular\"",
            		"axislinestyle": "1px solid #afc3e8",
            		"ticklinestyle": "1px solid #afc3e8",
            		"boardlinestyle": "1px solid #afc3e8",
            		"visible": true,
            		"axistype": "normal",
            		"labelgap": "",
            		"titletextalign": "high"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "골격근량",
            			"barvisible": "false",
            			"barsize": "65",
            			"itemtextvisible": "true",
            			"itemtextcolor": "#f5b9d1",
            			"itemtextfont": "14pt/normal \"Noto Sans CJK KR Regular\"",
            			"valuecolumn": "bind:SMM",
            			"linevisible": "true",
            			"pointvisible": "false",
            			"pointitemtextposition": "centertop",
            			"pointitemtextgap": "10",
            			"lineitemtextposition": "centertop",
            			"lineitemtextgap": "5",
            			"barfillstyle": "#082c71",
            			"barlinestyle": "1px solid #082c71",
            			"lineareafillstyle": "#f5b9d1",
            			"linestyle": "1px solid #f5b9d1",
            			"pointlinestyle": "2px solid #f5b9d1",
            			"selectbarfillstyle": "#f5b9d1",
            			"selectlineareafillstyle": "#f5b9d1",
            			"selectpointfillstyle": "#f5b9d1"
            		},
            		{
            			"id": "series1",
            			"valuecolumn": "bind:WEIGHT",
            			"barvisible": "false",
            			"linevisible": "true",
            			"itemtextvisible": "true",
            			"lineitemtextposition": "centertop",
            			"lineitemtextgap": "5",
            			"titletext": "체중",
            			"barfillstyle": "#082c71",
            			"barlinestyle": "1px solid #082c71",
            			"barsize": "65",
            			"itemtextcolor": "#ffae93",
            			"itemtextfont": "14pt/normal \"Noto Sans CJK KR Regular\"",
            			"lineareafillstyle": "#ffae93",
            			"linestyle": "1px solid #ffae93",
            			"pointitemtextgap": "10",
            			"pointitemtextposition": "centertop",
            			"pointlinestyle": "2px solid #ffae93",
            			"selectbarfillstyle": "#ffae93",
            			"selectlineareafillstyle": "#ffae93"
            		},
            		{
            			"id": "series2",
            			"valuecolumn": "bind:HEIGHT",
            			"barvisible": "false",
            			"linevisible": "true",
            			"itemtextvisible": "true",
            			"lineitemtextposition": "centertop",
            			"lineitemtextgap": "5",
            			"titletext": "신장",
            			"barfillstyle": "#082c71",
            			"barlinestyle": "1px solid #082c71",
            			"barsize": "65",
            			"itemtextcolor": "#ffcc41",
            			"itemtextfont": "14pt/normal \"Noto Sans CJK KR Regular\"",
            			"lineareafillstyle": "#ffcc41",
            			"linestyle": "1px solid #ffcc41",
            			"pointitemtextgap": "10",
            			"pointitemtextposition": "centertop",
            			"pointlinestyle": "2px solid #ffcc41",
            			"selectbarfillstyle": "#ffcc41",
            			"selectlineareafillstyle": "#ffcc41",
            			"selectpointfillstyle": "#ffcc41"
            		},
            		{
            			"id": "series3",
            			"valuecolumn": "bind:BFM",
            			"barvisible": "false",
            			"linevisible": "true",
            			"itemtextvisible": "true",
            			"lineitemtextposition": "centertop",
            			"lineitemtextgap": "5",
            			"titletext": "체지방량",
            			"barfillstyle": "#082c71",
            			"barlinestyle": "1px solid #082c71",
            			"barsize": "65",
            			"itemtextcolor": "#86d1de",
            			"itemtextfont": "14pt/normal \"Noto Sans CJK KR Regular\"",
            			"lineareafillstyle": "#86d1de",
            			"linestyle": "1px solid #86d1de",
            			"pointitemtextgap": "10",
            			"pointitemtextposition": "centertop",
            			"pointlinestyle": "2px solid #86d1de",
            			"selectlineareafillstyle": "#86d1de",
            			"selectlinestyle": "#86d1de"
            		},
            		{
            			"id": "series4",
            			"valuecolumn": "bind:BFB",
            			"barvisible": "false",
            			"itemtextvisible": "true",
            			"linevisible": "true",
            			"lineitemtextposition": "centertop",
            			"lineitemtextgap": "5",
            			"titletext": "체지방률",
            			"barfillstyle": "#082c71",
            			"barlinestyle": "1px solid #082c71",
            			"barsize": "65",
            			"itemtextcolor": "#a88eff",
            			"itemtextfont": "14pt/normal \"Noto Sans CJK KR Regular\"",
            			"lineareafillstyle": "#a88eff",
            			"linestyle": "1px solid #a88eff",
            			"pointitemtextgap": "10",
            			"pointitemtextposition": "centertop",
            			"pointlinestyle": "2px solid #a88eff",
            			"selectbarfillstyle": "#a88eff",
            			"selectlineareafillstyle": "#a88eff",
            			"selectpointfillstyle": "#a88eff"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": "false",
            			"boardlinestyle": "1px solid #cccccc",
            			"labeltextcolor": "#555555",
            			"labeltextfont": "14pt/normal \"Noto Sans CJK KR Regular\"",
            			"titletextcolor": "#082c71",
            			"titletextfont": "14pt/normal \"Noto Sans CJK KR Regular\"",
            			"ticklinestyle": "1px solid #afc3e8",
            			"axislinestyle": "1px solid #afc3e8",
            			"tickmax": "200",
            			"autotickscale": "",
            			"tickinterval": "50",
            			"ticks": "4",
            			"titletext": "수치",
            			"titlegap": "10",
            			"titletextalign": "high",
            			"titlerotate": "0"
            		}
            	],
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "white",
            		"textfont": "14pt/normal \"Noto Sans CJK KR Regular\"",
            		"padding": "5px"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 0px 20px",
            		"itemtextfont": "14pt/normal \"Noto Sans CJK KR Regular\"",
            		"itemtextcolor": "#555555",
            		"align": "topcenter",
            		"markertextgap": "3",
            		"horizontalitemgap": "5",
            		"itemcolumncount": "5",
            		"verticalitemgap": "",
            		"top": ""
            	}
            });
            obj.set_categorycolumn("bind:DATE");
            this.div_chart.addChild(obj.name, obj);

            obj = new Div("Div01","5%","392",null,"133","5%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","0%","0","18%","133",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("Div03");
            obj.set_edge("url(\'theme://images/bg_diary_bc1.png\') 0px 0px");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","100%","24",null,null,null,null,null,null,this.Div01.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("골격근량");
            obj.set_font("bold 15pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_textAlign("center");
            obj.set_color("#fcecf2");
            obj.set_verticalAlign("middle");
            this.Div01.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","0","50","100%","40",null,null,null,null,null,null,this.Div01.form.Div03.form);
            obj.set_taborder("1");
            obj.set_text("28");
            obj.set_textAlign("center");
            obj.set_font("normal 700 25pt/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-1px");
            this.Div01.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","0","80","100%","40",null,null,null,null,null,null,this.Div01.form.Div03.form);
            obj.set_taborder("2");
            obj.set_text("㎏");
            obj.set_textAlign("center");
            obj.set_color("#ffffff");
            obj.set_font("17pt/normal \"Noto Sans CJK KR Bold\"");
            this.Div01.form.Div03.addChild(obj.name, obj);

            obj = new Div("Div03_00","20.5%","0","18.00%","133",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("Div03");
            obj.set_edge("url(\'theme://images/bg_diary_bc2.png\') 0px 0px");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","100%","24",null,null,null,null,null,null,this.Div01.form.Div03_00.form);
            obj.set_taborder("0");
            obj.set_text("체중");
            obj.set_font("bold 15pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_textAlign("center");
            obj.set_color("#ffe9e2");
            obj.set_verticalAlign("middle");
            this.Div01.form.Div03_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50","100%","40",null,null,null,null,null,null,this.Div01.form.Div03_00.form);
            obj.set_taborder("1");
            obj.set_text("28");
            obj.set_textAlign("center");
            obj.set_font("normal 700 25pt/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-1px");
            this.Div01.form.Div03_00.addChild(obj.name, obj);

            obj = new Static("Static02","0","80","100%","40",null,null,null,null,null,null,this.Div01.form.Div03_00.form);
            obj.set_taborder("2");
            obj.set_text("㎏");
            obj.set_textAlign("center");
            obj.set_color("#ffffff");
            obj.set_font("17pt/normal \"Noto Sans CJK KR Bold\"");
            this.Div01.form.Div03_00.addChild(obj.name, obj);

            obj = new Div("Div03_01","41%","0","18.00%","133",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("Div03");
            obj.set_edge("url(\'theme://images/bg_diary_bc3.png\') 0px 0px");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","100%","24",null,null,null,null,null,null,this.Div01.form.Div03_01.form);
            obj.set_taborder("0");
            obj.set_text("신장");
            obj.set_font("bold 15pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_textAlign("center");
            obj.set_color("#fff2d6");
            obj.set_verticalAlign("middle");
            this.Div01.form.Div03_01.addChild(obj.name, obj);

            obj = new Static("Static01","0","50","100%","40",null,null,null,null,null,null,this.Div01.form.Div03_01.form);
            obj.set_taborder("1");
            obj.set_text("28");
            obj.set_textAlign("center");
            obj.set_font("normal 700 25pt/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-1px");
            this.Div01.form.Div03_01.addChild(obj.name, obj);

            obj = new Static("Static02","0","80","100%","40",null,null,null,null,null,null,this.Div01.form.Div03_01.form);
            obj.set_taborder("2");
            obj.set_text("㎝");
            obj.set_textAlign("center");
            obj.set_color("#ffffff");
            obj.set_font("17pt/normal \"Noto Sans CJK KR Bold\"");
            this.Div01.form.Div03_01.addChild(obj.name, obj);

            obj = new Div("Div03_02","61.5%","0","18.00%","133",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("Div03");
            obj.set_edge("url(\'theme://images/bg_diary_bc4.png\') 0px 0px");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","100%","24",null,null,null,null,null,null,this.Div01.form.Div03_02.form);
            obj.set_taborder("0");
            obj.set_text("체지방량");
            obj.set_font("bold 15pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_textAlign("center");
            obj.set_color("#dff2f5");
            obj.set_verticalAlign("middle");
            this.Div01.form.Div03_02.addChild(obj.name, obj);

            obj = new Static("Static01","0","50","100%","40",null,null,null,null,null,null,this.Div01.form.Div03_02.form);
            obj.set_taborder("1");
            obj.set_text("28");
            obj.set_textAlign("center");
            obj.set_font("normal 700 25pt/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-1px");
            this.Div01.form.Div03_02.addChild(obj.name, obj);

            obj = new Static("Static02","0","80","100%","40",null,null,null,null,null,null,this.Div01.form.Div03_02.form);
            obj.set_taborder("2");
            obj.set_text("㎏");
            obj.set_textAlign("center");
            obj.set_color("#ffffff");
            obj.set_font("17pt/normal \"Noto Sans CJK KR Bold\"");
            this.Div01.form.Div03_02.addChild(obj.name, obj);

            obj = new Div("Div03_03","82%","0","18.00%","133",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("Div03");
            obj.set_edge("url(\'theme://images/bg_diary_bc5.png\') 0px 0px");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","100%","24",null,null,null,null,null,null,this.Div01.form.Div03_03.form);
            obj.set_taborder("0");
            obj.set_text("체지방률");
            obj.set_font("bold 15pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_textAlign("center");
            obj.set_color("#e7e1ff");
            obj.set_verticalAlign("middle");
            this.Div01.form.Div03_03.addChild(obj.name, obj);

            obj = new Static("Static01","0","50","100%","40",null,null,null,null,null,null,this.Div01.form.Div03_03.form);
            obj.set_taborder("1");
            obj.set_text("28");
            obj.set_textAlign("center");
            obj.set_font("normal 700 25pt/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-1px");
            this.Div01.form.Div03_03.addChild(obj.name, obj);

            obj = new Static("Static02","0","80","100%","40",null,null,null,null,null,null,this.Div01.form.Div03_03.form);
            obj.set_taborder("2");
            obj.set_text("％");
            obj.set_textAlign("center");
            obj.set_color("#ffffff");
            obj.set_font("17pt/normal \"Noto Sans CJK KR Bold\"");
            this.Div01.form.Div03_03.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",480,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("mTest6.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("mTest6.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("mTest6.xfdl","lib::mpgm_com.xjs");
        this.registerScript("mTest6.xfdl", function() {
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
        			var count = this.ds_head.rowcount;
        			Sct.alert(this, "000175", count + "|");
        		}
        		else if(strSvcID == "insert" || strSvcID == "update" || strSvcID == "delete")
        		{
        			this.fn_search();
        		}
        		else if(strSvcID == "readUserInfoUpdate")
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

        this.Div01_Div03_01_Static02_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.Div01.form.Div03_01.form.Static02.addEventHandler("onclick",this.Div01_Div03_01_Static02_onclick,this);
            this.ds_search.addEventHandler("onrowposchanged",this.ds_notice_onrowposchanged,this);
        };
        this.loadIncludeScript("mTest6.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
