(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUC103QR");
            this.set_titletext("체성분분석");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FROM\" type=\"STRING\" size=\"256\"/><Column id=\"TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHART_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"HEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"SMM\" type=\"STRING\" size=\"256\"/><Column id=\"BFM\" type=\"STRING\" size=\"256\"/><Column id=\"PBF\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_composition", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"SMM\" type=\"STRING\" size=\"256\"/><Column id=\"BFM\" type=\"STRING\" size=\"256\"/><Column id=\"PBF\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chart", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHART_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"HEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"SMM\" type=\"STRING\" size=\"256\"/><Column id=\"BFM\" type=\"STRING\" size=\"256\"/><Column id=\"PBF\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_lastComposition","5.00%","10",null,"40","5.00%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("마지막 체성분 측정 정보");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Static("sta_lastComDt","5.00%","51",null,"30","5.00%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("측정일 : ");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_txt");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","5.00%","574",null,"160","5.00%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"날짜\" font=\"normal 700 13pt/normal &quot;Noto Sans CJK KR Bold&quot;\"/><Cell col=\"1\" text=\"골격근량\" font=\"normal 700 13pt/normal &quot;Noto Sans CJK KR Bold&quot;\"/><Cell col=\"2\" text=\"체중\" font=\"normal 700 13pt/normal &quot;Noto Sans CJK KR Bold&quot;\"/><Cell col=\"3\" text=\"신장\" font=\"normal 700 13pt/normal &quot;Noto Sans CJK KR Bold&quot;\"/><Cell col=\"4\" text=\"체지방량\" font=\"normal 700 13pt/normal &quot;Noto Sans CJK KR Bold&quot;\"/><Cell col=\"5\" text=\"체지방률\" font=\"normal 700 13pt/normal &quot;Noto Sans CJK KR Bold&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:COM_DT\" displaytype=\"date\" font=\"normal 12pt/normal &quot;Noto Sans CJK KR Medium&quot;\" expandchar=\"dot\"/><Cell col=\"1\" text=\"bind:SMM\" expr=\"dataset.getColumn(currow, 'SMM') + &quot;kg&quot;\" font=\"normal 12pt/normal &quot;Noto Sans CJK KR Medium&quot;\"/><Cell col=\"2\" text=\"bind:WEIGHT\" expr=\"dataset.getColumn(currow, 'WEIGHT') + &quot;kg&quot;\" font=\"normal 12pt/normal &quot;Noto Sans CJK KR Medium&quot;\"/><Cell col=\"3\" text=\"bind:HEIGHT\" expr=\"dataset.getColumn(currow, 'HEIGHT') + &quot;cm&quot;\" font=\"normal 12pt/normal &quot;Noto Sans CJK KR Medium&quot;\"/><Cell col=\"4\" text=\"bind:BFM\" expr=\"dataset.getColumn(currow, 'BFM') + &quot;kg&quot;\" font=\"normal 12pt/normal &quot;Noto Sans CJK KR Medium&quot;\"/><Cell col=\"5\" text=\"bind:PBF\" expr=\"dataset.getColumn(currow, 'PBF') + &quot;%&quot;\" font=\"normal 12pt/normal &quot;Noto Sans CJK KR Medium&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_chart","5.00%","340",null,"220","5.00%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_background("#eef3fa");
            obj.set_borderRadius("6px");
            this.addChild(obj.name, obj);

            obj = new BasicChart("cha_composition","0","0",null,null,"0","0",null,null,null,null,this.div_chart.form);
            obj.set_taborder("0");
            obj.set_boardspacing("0px 5px 0px 0px");
            obj.set_binddataset("ds_chart");
            obj._setContents({
            	"board": {
            		"id": "board"
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#082c71",
            		"titletextfont": "14pt/normal \"Noto Sans CJK KR Regular\"",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "normal 500 12pt/normal \"Noto Sans KR\"",
            		"axislinestyle": "1px solid #afc3e8",
            		"ticklinestyle": "1px solid #afc3e8",
            		"boardlinestyle": "1px solid #afc3e8",
            		"axistype": "normal",
            		"labelgap": "0",
            		"titletextalign": "high",
            		"visible": "true",
            		"tickendgap": "20px",
            		"tickstartgap": "20px",
            		"titlegap": "0",
            		"ticksize": "3",
            		"labeltextwidth": "23"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "골격근량",
            			"barvisible": "false",
            			"barsize": "65",
            			"itemtextcolor": "#f5b9d1",
            			"itemtextfont": "normal 500 12pt/normal \"Noto Sans KR\"",
            			"valuecolumn": "bind:SMM",
            			"linevisible": "true",
            			"pointitemtextposition": "centertop",
            			"pointitemtextgap": "10",
            			"lineitemtextposition": "righttop",
            			"lineitemtextgap": "5",
            			"barfillstyle": "#082c71",
            			"barlinestyle": "1px solid #082c71",
            			"lineareafillstyle": "#f5b9d1",
            			"linestyle": "1px solid #f5b9d1",
            			"pointlinestyle": "2px solid #f5b9d1",
            			"selectbarfillstyle": "#f5b9d1",
            			"selectlineareafillstyle": "#f5b9d1",
            			"selectpointfillstyle": "#f5b9d1",
            			"itemtextvisible": "true"
            		},
            		{
            			"id": "series1",
            			"valuecolumn": "bind:WEIGHT",
            			"barvisible": "false",
            			"linevisible": "true",
            			"itemtextvisible": "true",
            			"lineitemtextposition": "rightmiddle",
            			"lineitemtextgap": "5",
            			"titletext": "체중",
            			"barfillstyle": "#082c71",
            			"barlinestyle": "1px solid #082c71",
            			"barsize": "65",
            			"itemtextcolor": "#ffae93",
            			"itemtextfont": "normal 500 12pt/normal \"Noto Sans KR\"",
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
            			"lineitemtextposition": "centerbottom",
            			"lineitemtextgap": "5",
            			"titletext": "신장",
            			"barfillstyle": "#082c71",
            			"barlinestyle": "1px solid #082c71",
            			"barsize": "65",
            			"itemtextcolor": "#ffcc41",
            			"itemtextfont": "normal 500 12pt/normal \"Noto Sans KR\"",
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
            			"lineitemtextposition": "rightbottom",
            			"lineitemtextgap": "5",
            			"titletext": "체지방량",
            			"barfillstyle": "#082c71",
            			"barlinestyle": "1px solid #082c71",
            			"barsize": "65",
            			"itemtextcolor": "#86d1de",
            			"itemtextfont": "normal 500 12pt/normal \"Noto Sans KR\"",
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
            			"valuecolumn": "bind:PBF",
            			"barvisible": "false",
            			"itemtextvisible": "true",
            			"linevisible": "true",
            			"lineitemtextposition": "leftbottom",
            			"lineitemtextgap": "5",
            			"titletext": "체지방률",
            			"barfillstyle": "#082c71",
            			"barlinestyle": "1px solid #082c71",
            			"barsize": "65",
            			"itemtextcolor": "#a88eff",
            			"itemtextfont": "normal 500 12pt/normal \"Noto Sans KR\"",
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
            			"labeltextfont": "normal 500 12pt/normal \"Noto Sans KR\"",
            			"titletextcolor": "#082c71",
            			"titletextfont": "14pt/normal \"Noto Sans CJK KR Regular\"",
            			"ticklinestyle": "1px solid #afc3e8",
            			"axislinestyle": "1px solid #afc3e8",
            			"autotickscale": "5",
            			"tickinterval": "50",
            			"ticks": "4",
            			"titlegap": "0",
            			"titletextalign": "high",
            			"titlerotate": "0",
            			"ticksize": "3",
            			"gap": "0"
            		}
            	],
            	"legend": {
            		"id": "legend",
            		"padding": "3px 0px 0px",
            		"itemtextfont": "normal 500 10pt/normal \"Noto Sans KR\"",
            		"itemtextcolor": "#555555",
            		"align": "topcenter",
            		"markertextgap": "3",
            		"horizontalitemgap": "5",
            		"itemcolumncount": "5",
            		"verticalitemgap": "",
            		"top": "",
            		"visible": true
            	}
            });
            obj.set_categorycolumn("bind:CHART_DATE");
            this.div_chart.addChild(obj.name, obj);

            obj = new Static("sta_yearComposition","5%","260",null,"40","5.00%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("연간 체성분 분석 내역");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Static("sta_yearDate","5%","301",null,"30","5.00%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_txt");
            obj.set_text("---------");
            this.addChild(obj.name, obj);

            obj = new Div("div_smm","5.00%","94","16.25%","133",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div03");
            obj.set_borderRadius("6px");
            obj.set_edge("url(\'theme://images/bg_diary_bc1.png\') 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_smmTitle","0","10","100%","24",null,null,null,null,null,null,this.div_smm.form);
            obj.set_taborder("0");
            obj.set_text("골격근량");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("center");
            obj.set_color("#fcecf2");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-0.5px");
            this.div_smm.addChild(obj.name, obj);

            obj = new Static("sta_smmVal","0","50","100%","40",null,null,null,null,null,null,this.div_smm.form);
            obj.set_taborder("1");
            obj.set_text("VAL");
            obj.set_textAlign("center");
            obj.set_font("normal 700 23pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-1px");
            this.div_smm.addChild(obj.name, obj);

            obj = new Static("sta_unit","0","80","100%","40",null,null,null,null,null,null,this.div_smm.form);
            obj.set_taborder("2");
            obj.set_text("㎏");
            obj.set_textAlign("center");
            obj.set_font("normal 700 17pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            this.div_smm.addChild(obj.name, obj);

            obj = new Div("div_weight","23.13%","94","16.25%","133",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div03");
            obj.set_borderRadius("6px");
            obj.set_edge("url(\'theme://images/bg_diary_bc2.png\') 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_weightTitle","0","10","100%","24",null,null,null,null,null,null,this.div_weight.form);
            obj.set_taborder("0");
            obj.set_text("체중");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("center");
            obj.set_color("#ffe9e2");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-0.5px");
            this.div_weight.addChild(obj.name, obj);

            obj = new Static("sta_weightVal","0","50","100%","40",null,null,null,null,null,null,this.div_weight.form);
            obj.set_taborder("1");
            obj.set_text("VAL");
            obj.set_textAlign("center");
            obj.set_font("normal 700 23pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-1px");
            this.div_weight.addChild(obj.name, obj);

            obj = new Static("sta_unit","0","80","100%","40",null,null,null,null,null,null,this.div_weight.form);
            obj.set_taborder("2");
            obj.set_text("㎏");
            obj.set_textAlign("center");
            obj.set_font("normal 700 17pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            this.div_weight.addChild(obj.name, obj);

            obj = new Div("div_height","41.67%","94","16.25%","133",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div03");
            obj.set_borderRadius("6px");
            obj.set_edge("url(\'theme://images/bg_diary_bc3.png\') 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_heightTitle","0","10","100%","24",null,null,null,null,null,null,this.div_height.form);
            obj.set_taborder("0");
            obj.set_text("신장");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("center");
            obj.set_color("#fff2d6");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-0.5px");
            this.div_height.addChild(obj.name, obj);

            obj = new Static("sta_heightVal","0","50","100%","40",null,null,null,null,null,null,this.div_height.form);
            obj.set_taborder("1");
            obj.set_text("VAL");
            obj.set_textAlign("center");
            obj.set_font("normal 700 23pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-1px");
            this.div_height.addChild(obj.name, obj);

            obj = new Static("sta_unit","0","80","100%","40",null,null,null,null,null,null,this.div_height.form);
            obj.set_taborder("2");
            obj.set_text("㎝");
            obj.set_textAlign("center");
            obj.set_font("normal 700 17pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            this.div_height.addChild(obj.name, obj);

            obj = new Div("div_bfm","60.00%","94","16.25%","133",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div03");
            obj.set_borderRadius("6px");
            obj.set_edge("url(\'theme://images/bg_diary_bc4.png\') 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bfmTitle","0","10","100%","24",null,null,null,null,null,null,this.div_bfm.form);
            obj.set_taborder("0");
            obj.set_text("체지방량");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("center");
            obj.set_color("#dff2f5");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-0.5px");
            this.div_bfm.addChild(obj.name, obj);

            obj = new Static("sta_bfmVal","0","50","100%","40",null,null,null,null,null,null,this.div_bfm.form);
            obj.set_taborder("1");
            obj.set_text("VAL");
            obj.set_textAlign("center");
            obj.set_font("normal 700 23pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-1px");
            this.div_bfm.addChild(obj.name, obj);

            obj = new Static("sta_unit","0","80","100%","40",null,null,null,null,null,null,this.div_bfm.form);
            obj.set_taborder("2");
            obj.set_text("㎏");
            obj.set_textAlign("center");
            obj.set_font("normal 700 17pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            this.div_bfm.addChild(obj.name, obj);

            obj = new Div("div_pbf","78.13%","94",null,"133","5.00%",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Div03");
            obj.set_borderRadius("6px");
            obj.set_edge("url(\'theme://images/bg_diary_bc5.png\') 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pbfTitle","0","10","100%","24",null,null,null,null,null,null,this.div_pbf.form);
            obj.set_taborder("0");
            obj.set_text("체지방률");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("center");
            obj.set_color("#e7e1ff");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-0.5px");
            this.div_pbf.addChild(obj.name, obj);

            obj = new Static("sta_pbfVal","0","50","100%","40",null,null,null,null,null,null,this.div_pbf.form);
            obj.set_taborder("1");
            obj.set_text("VAL");
            obj.set_textAlign("center");
            obj.set_font("normal 700 23pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-1px");
            this.div_pbf.addChild(obj.name, obj);

            obj = new Static("sta_unit","0","80","100%","40",null,null,null,null,null,null,this.div_pbf.form);
            obj.set_taborder("2");
            obj.set_text("％");
            obj.set_textAlign("center");
            obj.set_font("normal 700 17pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            this.div_pbf.addChild(obj.name, obj);

            obj = new Div("div_dummy","22","777","441","6",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",480,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_smm.form.sta_smmVal","text","ds_composition","SMM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_weight.form.sta_weightVal","text","ds_composition","WEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_height.form.sta_heightVal","text","ds_composition","HEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_bfm.form.sta_bfmVal","text","ds_composition","BFM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_pbf.form.sta_pbfVal","text","ds_composition","PBF");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUC103QR.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUC103QR.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUC103QR.xfdl","lib::mpgm_com.xjs");
        this.registerScript("NUC103QR.xfdl", function() {
        /***********************************************************************
         * 화면ID    	: NUC103QR
         * 화면명   	: 체성분분석
         * 화면설명 	: 모바일에서 입소자의 체성분분석 내역을 확인하는 화면
         * 작성일    	: 2021-09-08
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
        this.NUC103QR_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e);

        	const to = Sct.Util.getToday();
        	const from = Sct.Util.addMonth(to, -12);

        	const fromStr = from.substr(0, 4) + "." + from.substr(4, 2) + "." + from.substr(6, 2);
        	const toStr = to.substr(0, 4) + "." + to.substr(4, 2) + "." + to.substr(6, 2);
        	const yearStr = fromStr + " ~ " + toStr;

        	this.sta_yearDate.set_text(yearStr);

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "COMPANY_CD", nexacro.getApplication().gds_mUserInfo.getColumn(0, "COMPANY_CD"));
        	this.ds_search.setColumn(0, "RES_ID", nexacro.getApplication().gds_mUserInfo.getColumn(0, "RES_ID"));
        	this.ds_search.setColumn(0, "FROM", from);
        	this.ds_search.setColumn(0, "TO", to);

        	this.fn_search();
        };

        // 모바일 디바이스 버튼 이벤트
        this.NUC103QR_ondevicebuttonup = function(obj,e)
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

        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_search input2=ds_search";
        	var outDatasets = "ds_composition=output1 ds_list=output2";
        	var argument = "method=getList "
        		+ "sqlId='NUC103QR.NUC103QR_DS_COMPOSITION_S NUC103QR.NUC103QR_DS_LIST_S' ";

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
        			if(this.ds_composition.rowcount < 1)
        			{
        				this.sta_lastComDt.set_text("최근 측정일 : 없음");
        			}
        			else
        			{
        				const comDt = this.ds_composition.getColumn(0, "COM_DT");
        				const day = Sct.Util.getDayH(comDt, false);
        				const comDate = comDt.substr(0, 4) + "." + comDt.substr(4, 2) + "." + comDt.substr(6, 2);
        				this.sta_lastComDt.set_text("최근 측정일 : " + comDate);
        			}

        			if(this.ds_list.rowcount > 0)
        			{
        				this.ds_chart.set_enableevent(false);
        				for(let i = this.ds_list.rowcount-1; i >= 0; i--)
        				{
        					const nRow = this.ds_chart.addRow();
        					this.ds_chart.copyRow(nRow, this.ds_list, i);
        				}
        				this.ds_chart.set_enableevent(true);
        				this.div_chart.form.cha_composition.set_binddataset("ds_chart");
        				this.div_chart.form.cha_composition.set_categorycolumn("BIND:CHART_DATE");

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
            this.addEventHandler("onload",this.NUC103QR_onload,this);
            this.addEventHandler("ondevicebuttonup",this.NUC103QR_ondevicebuttonup,this);
        };
        this.loadIncludeScript("NUC103QR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
