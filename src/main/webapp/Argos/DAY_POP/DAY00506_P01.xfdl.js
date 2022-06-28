(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00506_P01");
            this.set_titletext("월간 직원근무일지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"print_chk\" type=\"STRING\" size=\"256\"/><Column id=\"근무일\" type=\"DATE\" size=\"256\"/><Column id=\"작성자\" type=\"STRING\" size=\"256\"/><Column id=\"작성코드\" type=\"STRING\" size=\"256\"/><Column id=\"총인원\" type=\"STRING\" size=\"256\"/><Column id=\"근무자\" type=\"STRING\" size=\"256\"/><Column id=\"휴가자\" type=\"STRING\" size=\"256\"/><Column id=\"주간근무\" type=\"STRING\" size=\"256\"/><Column id=\"야간근무\" type=\"STRING\" size=\"256\"/><Column id=\"근무자a\" type=\"STRING\" size=\"256\"/><Column id=\"근무자b\" type=\"STRING\" size=\"256\"/><Column id=\"근무자c\" type=\"STRING\" size=\"256\"/><Column id=\"근무자d\" type=\"STRING\" size=\"256\"/><Column id=\"조회\" type=\"STRING\" size=\"256\"/><Column id=\"일지번호\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"STRING\" size=\"256\"/><Column id=\"date_to\" type=\"STRING\" size=\"256\"/><Column id=\"근무일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report", this);
            obj._setContents("<ColumnInfo><Column id=\"sign\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_00","0","0","1000","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","20","5","150","25",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_text("월간 직원근무일지");
            obj.set_cssclass("lb01");
            this.div_00.addChild(obj.name, obj);

            obj = new Calendar("cal_00","260","5","110","25",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_buttonsize("0");
            obj.set_readonly("true");
            this.div_00.addChild(obj.name, obj);

            obj = new Calendar("cal_01","390","5","110","25",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_buttonsize("0");
            obj.set_readonly("true");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_01","375","5","10","25",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("3");
            obj.set_text("~");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_00","690","5","130","25",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("4");
            obj.set_text("근무일지(선택)");
            obj.set_cssclass("btn_print");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_01","830","5","150","25",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("5");
            obj.set_text("발열측정 원간기록");
            obj.set_cssclass("btn_print");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_02","175","5","80","25",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("6");
            obj.set_text("□ 근무기간 :");
            this.div_00.addChild(obj.name, obj);

            obj = new Div("div_01","0","35","1000","665",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd","20","0","960","645",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"근무일지\" expandchar=\"rno\"/></Cell><Cell col=\"2\" text=\"근무일\"/><Cell col=\"3\" text=\"작성자\"/><Cell col=\"4\" text=\"총인원\"/><Cell col=\"5\" text=\"근무자\"/><Cell col=\"6\" text=\"휴가자\"/><Cell col=\"7\" text=\"주간근무\"/><Cell col=\"8\" text=\"야간근무\"/><Cell col=\"9\" text=\"부서A\"/><Cell col=\"10\" text=\"부서B\"/><Cell col=\"11\" text=\"부서C\"/><Cell col=\"12\" text=\"부서D\"/><Cell col=\"13\" text=\"조회\"/><Cell col=\"14\" text=\"기록\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" text=\"bind:print_chk\"/><Cell col=\"1\" text=\"출력\"/><Cell col=\"2\" text=\"bind:근무일\" displaytype=\"date\"/><Cell col=\"3\" text=\"bind:작성자\"/><Cell col=\"4\" text=\"bind:총인원\"/><Cell col=\"5\" text=\"bind:근무자\"/><Cell col=\"6\" text=\"bind:휴가자\"/><Cell col=\"7\" text=\"bind:주간근무\"/><Cell col=\"8\" text=\"bind:야간근무\"/><Cell col=\"9\" text=\"bind:근무자a\"/><Cell col=\"10\" text=\"bind:근무자b\"/><Cell col=\"11\" text=\"bind:근무자c\"/><Cell col=\"12\" text=\"bind:근무자d\"/><Cell col=\"13\" expandimage=\"url('theme://images/ico_search.png')\" expandshow=\"show\" expandsize=\"70\" text=\"bind:조회\"/><Cell col=\"14\" text=\"bind:일지번호\"/></Band></Format></Formats>");
            this.div_01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_00.form.cal_00","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_00.form.cal_01","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00506_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00506_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00506_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00506_P01
         * 화면명   	: 월간 직원근무일지
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
        this.fv_currentGrid = this.div_01.form.grd;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	nexacro.getApplication().gv_curWinKey = "DAY00506_P01";

        	this.fv_sicode = this.parent.SICODE;
        	this.fv_date_from = this.parent.DATE_FROM;
        	this.fv_date_to = this.parent.DATE_TO;

        	this.ds_search.setColumn(0, "sicode", this.parent.SICODE);
        	this.ds_search.setColumn(0, "date_from", this.parent.DATE_FROM);
        	this.ds_search.setColumn(0, "date_to", this.parent.DATE_TO);

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
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //조회
        this.fn_search = function()
        {
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00506_P01.DAY00506_P01_DS_LIST_S ";

        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {

        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        		}
        	}
        	else
        	{
        		this.alert(strErrorMsg);
        		return false;
        	}
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

        //그리드 셀 팝업
        this.div_01.form.grd_oncellclick = function (obj,e)
        {
        	//this.ds_search.setColumn(0, "row", e.row);
        	//const dayRecord = obj.getCellText(-1,e.col);
        	if (e.col == "13")
        	{
        	const param = {
        					SICODE : this.fv_sicode
        				,	DATE : this.ds_list.getColumn(e.row, "근무일")
        	}

        	Sct.popup(this, "dayRecord", 450, 400, "", param, "DAY_POP::DAY00506_P02.xfdl", "fn_popCallback")
        	}
        };

        //팝업 콜백
        this.fn_popCallback = function (popid, strDs)
        {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_return", strDs);
        	switch(popid)
        	{
        		case "dayRecord" :
        		if (objDs.getColumn(0, "REFRESH") == "Y"){
        				this.fn_search();
        			}
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_return", strDs);
        	}
        };

        // 근무일지(선택) 리포트
        this.fn_report_chk = function(obj,e)
        {
        	if (this.ds_list.rowcount < 1) {
        		alert("출력할 근무자를 선택하세요!");
        		return;
        	}
        	var chk = 0;

        	// 리스트 row 수만큼 for문 돌려서 체크된 row 찾기
        	for(var i=0; i < this.ds_list.rowcount; i++){
        		chk = (parseInt(this.ds_list.getColumn(i,"print_chk"))==1)? chk+1 : chk; // 체크된 경우 1 더한다.
        	}

        	// 체크박스 체크된 수급자가 없는 경우
        	if (chk == 0) {
        		alert("출력할 수급자를 선택하세요!");
        		return;
        	}

        	this.fn_call_report("print_chk");
        };

        //근무일지 리포트
        this.fn_call_report = function(arg)
        {
        	let pam = arg;
        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00506_R01.xfdl";
        	const popupName = "";

        	var mCodeStr = "";

        	// 출근자 한명 출력시
        	// 체크박스로 선택된 출근자 여러명 출력시
        	if (pam=="print_chk") {
        		//let _code = this.ds_list.getColumn(0, "근무일");
        		// mCodeStr += _code;
        		// 리스트 row 수만큼 for문 돌려서 체크된 row 찾기
        		for(var i=0; i < this.ds_list.rowcount; i++){
        			let _code = this.ds_list.getColumn(i, "근무일");
        			if(this.ds_list.getColumn(i,"print_chk") == 1){ // 체크된 출근자 코드 문자열로 이어붙이기
        				mCodeStr += (_code + ",");
        			}
        		}
        		// 마지막 콤마 제거
        		mCodeStr = mCodeStr.substring(0,mCodeStr.length-1);
        	}

        	params = {
        		SICODE : this.ds_search.getColumn(0, "sicode")
        	,	DATE : mCodeStr
        //	,	MCODESTR : mCodeStr
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        }

        //발열측정 월간기록 리포트
        this.fn_report = function()
        {
        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00506_R02.xfdl";
        	const popupName = "발열측정 월간기록";

        	params = {
        		SICODE : this.ds_search.getColumn(0, "sicode")
        	,	DATE_FROM : this.ds_search.getColumn(0, "date_from")
        	,	DATE_TO : this.ds_search.getColumn(0, "date_to")
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_00.form.btn_00.addEventHandler("onclick",this.fn_report_chk,this);
            this.div_00.form.btn_01.addEventHandler("onclick",this.fn_report,this);
            this.div_01.form.grd.addEventHandler("oncellclick",this.div_01.form.grd_oncellclick,this);
        };
        this.loadIncludeScript("DAY00506_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
