(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COMMON_CODE");
            this.set_titletext("차트 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chart", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HEA_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_H\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_L\" type=\"STRING\" size=\"256\"/><Column id=\"SUGAR_FBS\" type=\"STRING\" size=\"256\"/><Column id=\"SUGAR_PP2\" type=\"STRING\" size=\"256\"/><Column id=\"PULSE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","0",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new BasicChart("cha_care","0","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_chart");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "건강측정 추이차트",
            		"textfont": "normal 700 20pt/normal \"Noto Sans KR\"",
            		"padding": "0px 0px 5px"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "normal 400 9pt/normal \"Noto Sans KR\"",
            		"itemtextcolor": "#4c4c4c"
            	},
            	"hrangebar": {
            		"id": "hrangebar",
            		"trackbarpadding": "1px",
            		"background": "#eaeaea",
            		"linestyle": "1px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "12",
            		"visible": false
            	},
            	"vrangebar": {
            		"id": "vrangebar",
            		"trackbarpadding": "1px",
            		"background": "#eaeaea",
            		"linestyle": "1px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "12",
            		"visible": false
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "white",
            		"textfont": "normal 400 10pt/normal \"Noto Sans KR\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"visible": true
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#4c4c4c",
            		"titletextfont": "bold 12pt '맑은 고딕'",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "9pt '맑은 고딕'",
            		"axislinestyle": "1px solid #525252",
            		"ticklinestyle": "1px solid #525252",
            		"boardlinestyle": "1px solid #d0d0d0"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "고혈압",
            			"barvisible": "false",
            			"barsize": "65",
            			"itemtextvisible": "true",
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:PRE_H",
            			"highlightlinevisible": "false",
            			"linevisible": "true",
            			"itemtexttype": "normal",
            			"tooltiptext": "bind:PRE_H",
            			"pointvisible": "false",
            			"pointsize": "5"
            		},
            		{
            			"id": "series1",
            			"titletext": "저혈압",
            			"barvisible": "false",
            			"barsize": "65",
            			"itemtextvisible": "true",
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:PRE_L",
            			"highlightlinevisible": "false",
            			"linevisible": "true",
            			"pointvisible": "false",
            			"pointsize": "5"
            		},
            		{
            			"id": "series2",
            			"titletext": "식전혈당",
            			"barvisible": "false",
            			"barsize": "65",
            			"itemtextvisible": "true",
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:SUGAR_FBS",
            			"highlightlinevisible": "false",
            			"linevisible": "true",
            			"pointvisible": "false",
            			"pointsize": "5"
            		},
            		{
            			"id": "series3",
            			"titletext": "식후 2시간 혈당",
            			"barvisible": "false",
            			"barsize": "65",
            			"itemtextvisible": "true",
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:SUGAR_PP2",
            			"highlightlinevisible": "false",
            			"linevisible": "true",
            			"pointvisible": "false",
            			"pointsize": "5"
            		},
            		{
            			"id": "series4",
            			"titletext": "맥박",
            			"valuecolumn": "bind:PULSE",
            			"barvisible": "false",
            			"highlightlinevisible": "false",
            			"linevisible": "true",
            			"pointvisible": "false",
            			"pointsize": "5",
            			"itemtextvisible": "true"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #d0d0d0",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "10pt/normal '맑은 고딕'",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt '맑은 고딕'",
            			"ticklinestyle": "1px solid #525252",
            			"axislinestyle": "1px solid #525252"
            		}
            	]
            });
            obj.set_categorycolumn("bind:HEA_DT");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUA601CT_CHART_PP.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUA601CT_CHART_PP.xfdl","lib::pgm_com.xjs");
        this.registerScript("NUA601CT_CHART_PP.xfdl", function() {
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/
        var fv_ds = this.parent.ds;
        this.COMMON_CODE_onload = function (obj, e) {

        	this.form_onload_com(obj, e, false);
        	this.div_cont.form.cha_care.set_binddataset(fv_ds);

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.COMMON_CODE_onload,this);
            this.div_cont.form.cha_care.addEventHandler("onclick",this.div_cont_div_right_div_right_up_cha_care_onclick,this);
        };
        this.loadIncludeScript("NUA601CT_CHART_PP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
