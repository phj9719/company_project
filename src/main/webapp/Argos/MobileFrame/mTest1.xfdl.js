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
            this.set_titletext("물리치료");
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
            obj._setContents("<ColumnInfo><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"A\" type=\"STRING\" size=\"256\"/><Column id=\"TIME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DATE\">2021.06.30</Col><Col id=\"A\">양쪽다리</Col><Col id=\"TIME\">50분</Col></Row><Row><Col id=\"DATE\">2021.06.28</Col><Col id=\"A\">양쪽다리</Col><Col id=\"TIME\">50분</Col></Row><Row><Col id=\"DATE\">2021.06.27</Col><Col id=\"A\">등</Col><Col id=\"TIME\">50분</Col></Row><Row><Col id=\"DATE\">2021.06.24</Col><Col id=\"A\">등</Col><Col id=\"TIME\">50분</Col></Row><Row><Col id=\"DATE\">2021.06.21</Col><Col id=\"A\">양쪽무릎</Col><Col id=\"TIME\">50분</Col></Row><Row><Col id=\"DATE\">2021.06.19</Col><Col id=\"A\">양쪽무릎</Col><Col id=\"TIME\">50분</Col></Row><Row><Col id=\"DATE\">2021.06.15</Col><Col id=\"A\">양쪽무릎</Col><Col id=\"TIME\">50분</Col></Row><Row><Col id=\"DATE\">2021.06.12</Col><Col id=\"A\">양쪽어깨관절</Col><Col id=\"TIME\">50분</Col></Row><Row><Col id=\"DATE\">2021.06.09</Col><Col id=\"A\">양쪽어깨관절</Col><Col id=\"TIME\">50분</Col></Row><Row><Col id=\"DATE\">2021.06.01</Col><Col id=\"A\">양쪽어깨관절</Col><Col id=\"TIME\">50분</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chart", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TIME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DATE\">06.01</Col><Col id=\"TIME\">50</Col></Row><Row><Col id=\"DATE\">06.09</Col><Col id=\"TIME\">50</Col></Row><Row><Col id=\"DATE\">06.12</Col><Col id=\"TIME\">50</Col></Row><Row><Col id=\"DATE\">06.15</Col><Col id=\"TIME\">50</Col></Row><Row><Col id=\"DATE\">06.19</Col><Col id=\"TIME\">50</Col></Row><Row><Col id=\"DATE\">06.21</Col><Col id=\"TIME\">50</Col></Row><Row><Col id=\"DATE\">06.24</Col><Col id=\"TIME\">50</Col></Row><Row><Col id=\"DATE\">06.27</Col><Col id=\"TIME\">50</Col></Row><Row><Col id=\"DATE\">06.28</Col><Col id=\"TIME\">50</Col></Row><Row><Col id=\"DATE\">06.30</Col><Col id=\"TIME\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","5.00%","250",null,"40","5.00%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("물리치료 내역");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","5.00%","291",null,"30","5.00%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("최근 30일간 홍길동님의 물리치료 정보입니다.");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_txt");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","5.00%","331",null,"401","5.00%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"130\"/><Column size=\"90\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell text=\"날짜\"/><Cell col=\"1\" text=\"부위\"/><Cell col=\"2\" text=\"시간\"/></Band><Band id=\"body\"><Cell text=\"bind:DATE\"/><Cell col=\"1\" text=\"bind:A\"/><Cell col=\"2\" text=\"bind:TIME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","5.00%","20",null,"210","5.00%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_background("#eef3fa");
            obj.set_borderRadius("6px");
            obj.set_formscrollbartype("indicator");
            this.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart00","0%","10","1000","190",null,null,null,null,null,null,this.Div00.form);
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
            		"visible": "true",
            		"axistype": "normal",
            		"titletextalign": "high",
            		"gap": "",
            		"labelgap": ""
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"barvisible": "false",
            			"barsize": "65",
            			"itemtextvisible": "true",
            			"itemtextcolor": "#082c71",
            			"itemtextfont": "14pt/normal \"Noto Sans CJK KR Regular\"",
            			"valuecolumn": "bind:TIME",
            			"linevisible": "true",
            			"pointvisible": "true",
            			"pointitemtextposition": "centertop",
            			"pointitemtextgap": "10",
            			"pointfillstyle": "#082c71",
            			"pointlinestyle": "2px solid #082c71",
            			"lineareavisible": "false",
            			"selecttype": "bind",
            			"stacktype": "none",
            			"selectpointfillstyle": "#082c71",
            			"lineitemtextposition": "",
            			"lineareaopacity": "1",
            			"selectbarfillstyle": "#082c71",
            			"selectlineareafillstyle": "#082c71",
            			"pointshape": "circle",
            			"barlinestyle": "1px solid #082c71",
            			"linestyle": "1px solid #082c71",
            			"lineareafillstyle": "#082c71",
            			"barfillstyle": "#082c71",
            			"pointsize": "8"
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
            			"autotickscale": "",
            			"tickmin": "0",
            			"titletext": "시간(분)",
            			"tickmax": "80",
            			"titletextalign": "high",
            			"gap": "",
            			"labelgap": "",
            			"ticklineopacity": "1",
            			"titlerotate": "0",
            			"ticks": "4",
            			"titlegap": "10"
            		}
            	],
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "white",
            		"textfont": "14pt/normal \"Noto Sans CJK KR Regular\"",
            		"padding": "5px"
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
        this.addIncludeScript("mTest1.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("mTest1.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("mTest1.xfdl","lib::mpgm_com.xjs");
        this.registerScript("mTest1.xfdl", function() {
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
        this.loadIncludeScript("mTest1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
