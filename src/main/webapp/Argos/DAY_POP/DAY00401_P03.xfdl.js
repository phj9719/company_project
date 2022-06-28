(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00701_P03");
            this.set_titletext("차량별송영일지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ord1\" type=\"STRING\" size=\"256\"/><Column id=\"k_number\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"거주현황\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"시작코스\" type=\"STRING\" size=\"256\"/><Column id=\"시작차번호\" type=\"STRING\" size=\"256\"/><Column id=\"시작시간\" type=\"STRING\" size=\"256\"/><Column id=\"시작거주지\" type=\"STRING\" size=\"256\"/><Column id=\"시작기사\" type=\"STRING\" size=\"256\"/><Column id=\"시작동승\" type=\"STRING\" size=\"256\"/><Column id=\"종료코스\" type=\"STRING\" size=\"256\"/><Column id=\"종료차번호\" type=\"STRING\" size=\"256\"/><Column id=\"종료시간\" type=\"STRING\" size=\"256\"/><Column id=\"종료거주지\" type=\"STRING\" size=\"256\"/><Column id=\"종료기사\" type=\"STRING\" size=\"256\"/><Column id=\"종료동승\" type=\"STRING\" size=\"256\"/><Column id=\"이용구분\" type=\"STRING\" size=\"256\"/><Column id=\"제공시간\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_car", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"combocode\" type=\"STRING\" size=\"256\"/><Column id=\"comboname\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","10","40",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"현황\"/><Cell col=\"1\" text=\"수급자명\"/><Cell col=\"2\" text=\"성별\"/><Cell col=\"3\" text=\"오전차\"/><Cell col=\"4\" text=\"차번호\"/><Cell col=\"5\" text=\"시작시간\"/><Cell col=\"6\" text=\"실거주\"/><Cell col=\"7\" text=\"시작운전\"/><Cell col=\"8\" text=\"시작동승\"/><Cell col=\"9\" text=\"오후차\"/><Cell col=\"10\" text=\"차번호\"/><Cell col=\"11\" text=\"종료시간\"/><Cell col=\"12\" text=\"실거주\"/><Cell col=\"13\" text=\"종료운전\"/><Cell col=\"14\" text=\"종료동승\"/><Cell col=\"15\" text=\"이용\"/><Cell col=\"16\" text=\"제공시분\"/></Band><Band id=\"body\"><Cell text=\"bind:거주현황\"/><Cell col=\"1\" text=\"bind:m_name\"/><Cell col=\"2\" text=\"bind:성별\"/><Cell col=\"3\" text=\"bind:시작코스\"/><Cell col=\"4\" text=\"bind:시작차번호\"/><Cell col=\"5\" text=\"bind:시작시간\"/><Cell col=\"6\" text=\"bind:시작거주지\"/><Cell col=\"7\" text=\"bind:시작기사\"/><Cell col=\"8\" text=\"bind:시작동승\"/><Cell col=\"9\" text=\"bind:종료코스\"/><Cell col=\"10\" text=\"bind:종료차번호\"/><Cell col=\"11\" text=\"bind:종료시간\"/><Cell col=\"12\" text=\"bind:종료거주지\"/><Cell col=\"13\" text=\"bind:종료기사\"/><Cell col=\"14\" text=\"bind:종료동승\"/><Cell col=\"15\" text=\"bind:이용구분\"/><Cell col=\"16\" text=\"bind:제공시간\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","655","3","170","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("차량별 송영일지 출력");
            obj.set_cssclass("lb01");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_search","0","0",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_head1","10","3","90","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("송영일자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_body1","sta_head1:-1","3","150","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_head2","248","3","90","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("차량구분");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_body2","337","3","220","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun","350","6","190","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_car");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_date","108","6","122","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("송영일자");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_report2",null,"6","140","25","10",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("차량별 송영일지");
            obj.set_cssclass("btn_print");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_report1",null,"6","170","25","155",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("차량별 송영일지(운행)");
            obj.set_cssclass("btn_print");
            this.div_search.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,520,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00401_P03.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00401_P03.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00401_P03.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00401_P03
         * 화면명   	: 차량별송영일지
         * 화면설명 	: 차량별 송영일지를 출력하기 위한 팝업
         * 작성일   	: 2022-04-29
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
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
        const fv_sicode = this.parent.SICODE;
        const fv_date = this.parent.DATE;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "DATE", fv_date);

        	// 콤보
        	this.fn_set_car_combo();

        	this.fn_search();
        };

        // 그리드에 css 적용
        this.initGrid = function(grid)
        {
        	// 성별에 따라 이름 배경색 변경
        	const nameIdx = grid.getBindCellIndex("body", "m_name");
        	const nameCss = "expr:dataset.getColumn(currow, '성별') == '남' ? 'cellBMan' : 'cellBWoman'";
        	grid.setCellProperty("body", nameIdx, "cssclass", nameCss);
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
        // 조회
        this.fn_search = function()
        {
        	if (!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00401_P03.DAY00401_P03_DS_LIST_S ";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 차량 조회
        this.fn_car_search = function()
        {
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_car=output1";
        	const argument = "method=getList"
        				   + " sqlId=DAY00401_P03.DAY00401_P03_DS_CAR_S";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, false);
        };

        //콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			const date = this.ds_search.getColumn(0, "DATE");
        			const fDate = date.getFullYear() + "." + ((date.getMonth() + 1) + "").padStart(2, '0') + "." + (date.getDate() + "").padStart(2, '0');
        			this.div_search.form.sta_date.set_text(fDate);

        			// 그리드에 css 적용
        			this.initGrid(this.div_cont.form.grd_list);
        		}
        	}
        	else
        	{
        		this.alert(strErrorMsg);
        	}
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/
        // 차량 콤보 세팅
        this.fn_set_car_combo = function()
        {
        	this.ds_car.clearData();

        	this.fn_car_search();

        	const firstRowValue = this.ds_car.getColumn(0, "combocode");
        	this.div_search.form.cmb_gubun.set_value(firstRowValue);
        };

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 리포트 출력
        this.fn_report = function(obj,e)
        {
        	let popupUrl = "";
        	let popupName = "";
        	switch(obj.id) {
        		case "btn_report1" :	// 차량별 송영일지(운행) 버튼
        			popupUrl = "DAY_POP::DAY00401_R03.xfdl";
        			popupName = "차량별송영일지(운행)";
        			break;
        		case "btn_report2" :	// 차량별 송영일지 버튼
        			popupUrl = "DAY_POP::DAY00401_R04.xfdl";
        			popupName = "차량별송영일지";
        			break;
        		default:
        	}

        	let params;
        	const dicompNm = " ";

        	const gubun = this.div_search.form.cmb_gubun.value;
        	const fRow = this.ds_car.findRow("combocode", gubun);
        	const cName = this.ds_car.getColumn(fRow, "comboname");
        	const cNameArr = cName.split("-");
        	const no = cNameArr[1];

        	params = {
        		sicode : fv_sicode
        	,	date : this.ds_search.getColumn(0, "DATE")
        	,	gubun : gubun
        	,	no : no
        	,	flag : "1"
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 검색 버튼
        this.fn_searchBtn = function(obj,e)
        {
        	this.fn_search();
        };

        // 콤보 아이템 변경 이벤트
        this.div_search_cmb_gubun_onitemchanged = function(obj,e)
        {
        	let fRow = this.ds_list.findRowExpr("시작코스 == " + e.postvalue);
        	if (fRow == -1)
        	{
        		fRow = this.ds_list.findRowExpr("종료코스 == " + e.postvalue);
        		if (fRow == -1)
        			fRow = 0;
        	}
        	this.ds_list.set_rowposition(fRow);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_search.form.cmb_gubun.addEventHandler("onitemchanged",this.div_search_cmb_gubun_onitemchanged,this);
            this.div_search.form.btn_report2.addEventHandler("onclick",this.fn_report,this);
            this.div_search.form.btn_report1.addEventHandler("onclick",this.fn_report,this);
        };
        this.loadIncludeScript("DAY00401_P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
