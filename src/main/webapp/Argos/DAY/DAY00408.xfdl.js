(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00408");
            this.set_titletext("4-8 송영차량운행일지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"monalja\" type=\"DATE\" size=\"256\"/><Column id=\"mocode\" type=\"STRING\" size=\"256\"/><Column id=\"차번호\" type=\"STRING\" size=\"256\"/><Column id=\"mostart\" type=\"STRING\" size=\"256\"/><Column id=\"molast\" type=\"STRING\" size=\"256\"/><Column id=\"distant\" type=\"STRING\" size=\"256\"/><Column id=\"코드1\" type=\"STRING\" size=\"256\"/><Column id=\"내역1\" type=\"STRING\" size=\"256\"/><Column id=\"비용1\" type=\"STRING\" size=\"256\"/><Column id=\"코드2\" type=\"STRING\" size=\"256\"/><Column id=\"내역2\" type=\"STRING\" size=\"256\"/><Column id=\"비용2\" type=\"STRING\" size=\"256\"/><Column id=\"코드3\" type=\"STRING\" size=\"256\"/><Column id=\"내역3\" type=\"STRING\" size=\"256\"/><Column id=\"비용3\" type=\"STRING\" size=\"256\"/><Column id=\"조회\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"DATE\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report", this);
            obj._setContents("<ColumnInfo><Column id=\"SIGN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0","305","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pre_dt","0","3","80","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("◀ 전날");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date","85","3","110","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_yyyyMMddddd");
            obj.set_taborder("2");
            obj.set_cssclass("essential");
            obj.set_buttonsize("0 0");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_next_dt","224","3","80","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("앞날 ▶");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_pic","cal_date:-1","cal_date:-25","25","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","div_search:10","0",null,"31","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_sign","135","3","85","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("결재란표시");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report1","230","3","150","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("송영차량 운행일지");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_new","0","3","120","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("차량일지등록");
            this.div_func.addChild(obj.name, obj);

            obj = new Div("div_main","0","40",null,null,"0","10",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","30",null,null,"0","0",null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"운행일\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"차량번호\"/><Cell col=\"3\" text=\"시작거리\"/><Cell col=\"4\" text=\"종료거리\"/><Cell col=\"5\" text=\"운행거리\"/><Cell col=\"6\" text=\"구분1\"/><Cell col=\"7\" text=\"내역1\"/><Cell col=\"8\" text=\"금액1\"/><Cell col=\"9\" text=\"구분2\"/><Cell col=\"10\" text=\"내역2\"/><Cell col=\"11\" text=\"금액2\"/><Cell col=\"12\" text=\"구분3\"/><Cell col=\"13\" text=\"내역3\"/><Cell col=\"14\" text=\"금액3\"/><Cell col=\"15\" text=\"조회\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:monalja\" expandchar=\"dot\"/><Cell col=\"1\" text=\"bind:mocode\"/><Cell col=\"2\" text=\"bind:차번호\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:mostart\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:molast\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:distant\" textAlign=\"right\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" expr=\"dataset.getColumn(currow, 'distant') == 0 ? '' : dataset.getColumn(currow, 'distant')\"/><Cell col=\"6\" text=\"bind:코드1\"/><Cell col=\"7\" text=\"bind:내역1\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:비용1\" displaytype=\"number\" textAlign=\"right\" expr=\"dataset.getColumn(currow, '비용1') == 0 ? '' : dataset.getColumn(currow, '비용1')\"/><Cell col=\"9\" text=\"bind:코드2\"/><Cell col=\"10\" text=\"bind:내역2\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:비용2\" displaytype=\"number\" textAlign=\"right\" expr=\"dataset.getColumn(currow, '비용2') == 0 ? '' : dataset.getColumn(currow, '비용2')\"/><Cell col=\"12\" text=\"bind:코드3\"/><Cell col=\"13\" text=\"bind:내역3\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:비용3\" displaytype=\"number\" textAlign=\"right\" expr=\"dataset.getColumn(currow, '비용3') == 0 ? '' : dataset.getColumn(currow, '비용3')\"/><Cell col=\"15\" expandimage=\"url('theme://images/ico_search.png')\" expandshow=\"show\" expandsize=\"60\" text=\"bind:조회\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","230","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            obj.set_text("송영차량 운행일지");
            obj.set_cssclass("lb01");
            this.div_main.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cal_date","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_func.form.chk_sign","value","ds_report","SIGN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cal_date_pic","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00408.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00408.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00408.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00408
         * 화면명   	: 4-8 송영차량 운행일지
         * 화면설명 	: 차량일지를 작성·관리 하는 화면
         * 작성일   	: 2022-05-16
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용

         ***********************************************************************
         * 비고 :
         */
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        const fv_sicode = nexacro.getApplication().gds_userInfo.getColumn(0, "sicode");
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	const date = new Date();
        	const year = date.getFullYear();
        	const month = date.getMonth() + 1;

        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "DATE", Sct.Util.getToday());
        	this.ds_search.setColumn(0, "YEAR", year);
        	this.ds_search.setColumn(0, "MONTH", month);

        	// 리포트 출력 초기화
        	this.ds_report.setColumn(0, "SIGN", 1);

        	this.fn_search();
        };

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 조회
        this.fn_search = function()
        {
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList"
        				   + " sqlId=DAY00408.DAY00408_DS_LIST_S";
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
         * Popup Functions
         ***********************************************************************/
        // 출력
        this.fn_report = function(obj,e)
        {
        	const popupUrl = "DAY_POP::DAY00408_R01.xfdl";
        	const popupName = "송영차량 운행일지";
        	const dicompNm = " ";

        	const params = {
        		sicode : fv_sicode
        	,	date : this.ds_search.getColumn(0, "DATE")
        	,	sign : this.ds_report.getColumn(0, "SIGN") + ''
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        // 차량일지 등록
        this.div_func_btn_new_onclick = function(obj,e)
        {
        	const param = {
        		SICODE : fv_sicode
        	,	DATE : this.ds_search.getColumn(0, "DATE")
        	,	LIST : this.ds_list
        	};

        	Sct.popup(this, "new", 450, 400, "송영차량일지 입력", param, "DAY_POP::DAY00408_P01.xfdl", "fn_popCallback");
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if (popid != "new" && popid != "update")
        	{
        		if(Sct.Util.isEmpty(strDs)) return;
        	}
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "new" :
        		case "update" :
        			this.fn_search();
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 앞날
        this.div_search_btn_next_dt_onclick = function(obj,e)
        {
        	const searchDt = this.ds_search.getColumn(0, "DATE");
        	searchDt.setDate(searchDt.getDate() + 1);
        	this.ds_search.setColumn(0, "DATE", searchDt);
        	this.ds_search.setColumn(0, "YEAR", searchDt.getFullYear());
        	this.ds_search.setColumn(0, "MONTH", searchDt.getMonth() + 1);
        	this.fn_search();
        };

        // 전날
        this.div_search_btn_pre_dt_onclick = function(obj,e)
        {
        	const searchDt = this.ds_search.getColumn(0, "DATE");
        	searchDt.setDate(searchDt.getDate() - 1);
        	this.ds_search.setColumn(0, "DATE", searchDt);
        	this.ds_search.setColumn(0, "YEAR", searchDt.getFullYear());
        	this.ds_search.setColumn(0, "MONTH", searchDt.getMonth() + 1);
        	this.fn_search();
        };

        // 날짜 변경 이벤트
        this.div_search_cal_date_pic_onchanged = function(obj,e)
        {
        	const searchDt = this.ds_search.getColumn(0, "DATE");
        	this.ds_search.setColumn(0, "YEAR", searchDt.getFullYear());
        	this.ds_search.setColumn(0, "MONTH", searchDt.getMonth() + 1);
        	this.fn_search();
        };

        // 그리드 확장버튼 클릭 이벤트
        this.div_main_grd_list_onexpandup = function(obj,e)
        {
        	const updateIdx = obj.getBindCellIndex("body", "조회");
        	// 돋보기
        	if (e.col == updateIdx)
        	{
        		const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_list.getColumn(e.row, "monalja")
        		,	CODE : this.ds_list.getColumn(e.row, "mocode")
        		};

        		Sct.popup(this, "update", 450, 400, "송영차량일지 조회·수정", param, "DAY_POP::DAY00408_P02.xfdl", "fn_popCallback");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_search.form.btn_pre_dt.addEventHandler("onclick",this.div_search_btn_pre_dt_onclick,this);
            this.div_search.form.cal_date.addEventHandler("onchanged",this.div_search_cal_sdate_onchanged,this);
            this.div_search.form.btn_next_dt.addEventHandler("onclick",this.div_search_btn_next_dt_onclick,this);
            this.div_search.form.cal_date_pic.addEventHandler("onchanged",this.div_search_cal_date_pic_onchanged,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_new.addEventHandler("onclick",this.div_func_btn_new_onclick,this);
            this.div_main.form.grd_list.addEventHandler("oncelldblclick",this.div_main_grd_list_oncelldblclick,this);
            this.div_main.form.grd_list.addEventHandler("onexpandup",this.div_main_grd_list_onexpandup,this);
        };
        this.loadIncludeScript("DAY00408.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
