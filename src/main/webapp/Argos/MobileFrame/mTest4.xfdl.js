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
            this.set_titletext("로봇인지훈련");
            this.set_color("#082c71");
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
            obj._setContents("<ColumnInfo><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE1\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE2\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DATE\">2021.06.27</Col><Col id=\"SCORE1\">90점</Col><Col id=\"SCORE2\">28점</Col><Col id=\"SCORE3\">9점</Col></Row><Row><Col id=\"DATE\">2021.06.24</Col><Col id=\"SCORE1\">79점</Col><Col id=\"SCORE2\">26점</Col><Col id=\"SCORE3\">10점</Col></Row><Row><Col id=\"DATE\">2021.06.21</Col><Col id=\"SCORE1\">88점</Col><Col id=\"SCORE2\">27점</Col><Col id=\"SCORE3\">12점</Col></Row><Row><Col id=\"DATE\">2021.06.18</Col><Col id=\"SCORE1\">60점</Col><Col id=\"SCORE2\">24점</Col><Col id=\"SCORE3\">13점</Col></Row><Row><Col id=\"DATE\">2021.06.15</Col><Col id=\"SCORE1\">52점</Col><Col id=\"SCORE2\">20점</Col><Col id=\"SCORE3\">14점</Col></Row><Row><Col id=\"DATE\">2021.06.12</Col><Col id=\"SCORE1\">72점</Col><Col id=\"SCORE2\">22점</Col><Col id=\"SCORE3\">10점</Col></Row><Row><Col id=\"DATE\">2021.06.09</Col><Col id=\"SCORE1\">50점</Col><Col id=\"SCORE2\">20점</Col><Col id=\"SCORE3\">12점</Col></Row><Row><Col id=\"DATE\">2021.06.06</Col><Col id=\"SCORE1\">40점</Col><Col id=\"SCORE2\">19점</Col><Col id=\"SCORE3\">11점</Col></Row><Row><Col id=\"DATE\">2021.06.03</Col><Col id=\"SCORE1\">30점</Col><Col id=\"SCORE2\">17점</Col><Col id=\"SCORE3\">17점</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chart", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE1\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE2\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DATE\">06.03</Col><Col id=\"SCORE1\">30</Col><Col id=\"SCORE2\">17</Col><Col id=\"SCORE3\">17</Col></Row><Row><Col id=\"DATE\">06.06</Col><Col id=\"SCORE1\">40</Col><Col id=\"SCORE2\">19</Col><Col id=\"SCORE3\">11</Col></Row><Row><Col id=\"DATE\">06.09</Col><Col id=\"SCORE1\">50</Col><Col id=\"SCORE2\">20</Col><Col id=\"SCORE3\">12</Col></Row><Row><Col id=\"DATE\">06.12</Col><Col id=\"SCORE1\">72</Col><Col id=\"SCORE2\">22</Col><Col id=\"SCORE3\">10</Col></Row><Row><Col id=\"DATE\">06.15</Col><Col id=\"SCORE1\">52</Col><Col id=\"SCORE2\">20</Col><Col id=\"SCORE3\">14</Col></Row><Row><Col id=\"DATE\">06.18</Col><Col id=\"SCORE1\">60</Col><Col id=\"SCORE2\">24</Col><Col id=\"SCORE3\">13</Col></Row><Row><Col id=\"DATE\">06.21</Col><Col id=\"SCORE1\">88</Col><Col id=\"SCORE2\">27</Col><Col id=\"SCORE3\">12</Col></Row><Row><Col id=\"DATE\">06.24</Col><Col id=\"SCORE1\">79</Col><Col id=\"SCORE2\">26</Col><Col id=\"SCORE3\">10</Col></Row><Row><Col id=\"DATE\">06.27</Col><Col id=\"SCORE1\">90</Col><Col id=\"SCORE2\">28</Col><Col id=\"SCORE3\">9</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","5%","250",null,"40","5%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("로봇인지훈련 내역");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","5.00%","291",null,"30","5.00%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("최근 30일간 홍길동님의 로봇인지훈련 정보입니다.");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_txt");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","5.00%","331",null,"311","5.00%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"날짜\"/><Cell col=\"1\" text=\"훈련점수\"/><Cell col=\"2\" text=\"인지점수\"/><Cell col=\"3\" text=\"우울점수\"/></Band><Band id=\"body\"><Cell text=\"bind:DATE\"/><Cell col=\"1\" text=\"bind:SCORE1\"/><Cell col=\"2\" text=\"bind:SCORE2\"/><Cell col=\"3\" text=\"bind:SCORE3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","5.00%","653",null,"30","5.00%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("※로봇인지훈련점수 설명글(범례) ......");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","5.00%","675",null,"70","5.00%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("※우울점수별 구분 : 1 ~ 13 정상, 14 ~ 18 경도 우울증,\r\n   19 ~ 21 중간정도 우울증, 22점이상 심한 우울증");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_txt");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","5%","20",null,"210","5%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_background("#eef3fa");
            obj.set_formscrollbartype("indicator");
            obj.set_borderRadius("6px");
            this.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart00","0","10","1000","190",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_chart");
            obj.set_boardspacing("0px 30px 0px 0px");
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
            		"titletextalign": "high",
            		"gap": "",
            		"labelgap": ""
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "훈련",
            			"barvisible": "false",
            			"barsize": "65",
            			"itemtextvisible": "true",
            			"itemtextcolor": "#3183f4",
            			"itemtextfont": "14pt/normal \"Noto Sans CJK KR Regular\"",
            			"valuecolumn": "bind:SCORE1",
            			"linevisible": "true",
            			"pointvisible": "false",
            			"pointitemtextposition": "centertop",
            			"pointitemtextgap": "10",
            			"lineitemtextposition": "centertop",
            			"lineitemtextgap": "5",
            			"lineareafillstyle": "#3183f4",
            			"linestyle": "1px solid #3183f4",
            			"pointlinestyle": "2px solid #3183f4",
            			"selectbarfillstyle": "#3183f4",
            			"selectlineareafillstyle": "#3183f4",
            			"selectpointfillstyle": "#3183f4",
            			"barfillstyle": "#082c71",
            			"barlinestyle": "1px solid #082c71"
            		},
            		{
            			"id": "series1",
            			"valuecolumn": "bind:SCORE2",
            			"barvisible": "false",
            			"linevisible": "true",
            			"itemtextvisible": "true",
            			"lineitemtextposition": "centertop",
            			"lineitemtextgap": "5",
            			"titletext": "인지",
            			"barfillstyle": "#082c71",
            			"barlinestyle": "1px solid #082c71",
            			"barsize": "65",
            			"itemtextcolor": "#ff7e45",
            			"itemtextfont": "14pt/normal \"Noto Sans CJK KR Regular\"",
            			"lineareafillstyle": "#ff7e45",
            			"linestyle": "1px solid #ff7e45",
            			"selectpointfillstyle": "#ff7e45",
            			"pointitemtextgap": "10"
            		},
            		{
            			"id": "series2",
            			"valuecolumn": "bind:SCORE3",
            			"barvisible": "false",
            			"linevisible": "true",
            			"itemtextvisible": "true",
            			"lineitemtextposition": "centertop",
            			"lineitemtextgap": "5",
            			"titletext": "우울",
            			"barfillstyle": "#082c71",
            			"barlinestyle": "1px solid #082c71",
            			"barsize": "65",
            			"itemtextcolor": "#8f2cea",
            			"itemtextfont": "14pt/normal \"Noto Sans CJK KR Regular\"",
            			"lineareafillstyle": "#8f2cea",
            			"linestyle": "1px solid #8f2cea",
            			"pointitemtextgap": "10",
            			"pointitemtextposition": "centertop",
            			"pointlinestyle": "2px solid #8f2cea",
            			"selectbarfillstyle": "#8f2cea",
            			"selectlineareafillstyle": "#8f2cea",
            			"selectpointfillstyle": "#8f2cea"
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
            			"tickmax": "100",
            			"autotickscale": "",
            			"titletext": "점수",
            			"titlegap": "10",
            			"titletextalign": "high",
            			"titlerotate": "0",
            			"tickmin": "0",
            			"ticks": "5",
            			"gap": "",
            			"labelgap": ""
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
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "14pt/normal \"Noto Sans CJK KR Regular\"",
            		"itemtextcolor": "#555555",
            		"horizontalitemgap": "14",
            		"align": "topcenter",
            		"left": "",
            		"itemtextwidth": "",
            		"markertextgap": "7"
            	}
            });
            obj.set_categorycolumn("bind:DATE");
            this.Div00.addChild(obj.name, obj);
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
        this.addIncludeScript("mTest4.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("mTest4.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("mTest4.xfdl","lib::mpgm_com.xjs");
        this.registerScript("mTest4.xfdl", function() {
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.ds_search.addEventHandler("onrowposchanged",this.ds_notice_onrowposchanged,this);
        };
        this.loadIncludeScript("mTest4.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
