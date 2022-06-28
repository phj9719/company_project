(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00407");
            this.set_titletext("4-7 연간 운전자 송영집계표");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"c_staffid\" type=\"STRING\" size=\"256\"/><Column id=\"근무현황\" type=\"STRING\" size=\"256\"/><Column id=\"c_name\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"c_group\" type=\"STRING\" size=\"256\"/><Column id=\"담당직종\" type=\"STRING\" size=\"256\"/><Column id=\"입사일\" type=\"STRING\" size=\"256\"/><Column id=\"퇴사일\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"DATE\" size=\"256\"/><Column id=\"DATE_TO\" type=\"DATE\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"mon\" type=\"STRING\" size=\"256\"/><Column id=\"송영월\" type=\"STRING\" size=\"256\"/><Column id=\"월인원\" type=\"INT\" size=\"256\"/><Column id=\"차번호1\" type=\"STRING\" size=\"256\"/><Column id=\"인원1\" type=\"INT\" size=\"256\"/><Column id=\"차번호2\" type=\"STRING\" size=\"256\"/><Column id=\"인원2\" type=\"INT\" size=\"256\"/><Column id=\"차번호3\" type=\"STRING\" size=\"256\"/><Column id=\"인원3\" type=\"INT\" size=\"256\"/><Column id=\"차번호4\" type=\"STRING\" size=\"256\"/><Column id=\"인원4\" type=\"INT\" size=\"256\"/><Column id=\"차번호5\" type=\"STRING\" size=\"256\"/><Column id=\"인원5\" type=\"INT\" size=\"256\"/><Column id=\"차번호6\" type=\"STRING\" size=\"256\"/><Column id=\"인원6\" type=\"INT\" size=\"256\"/><Column id=\"차번호7\" type=\"STRING\" size=\"256\"/><Column id=\"인원7\" type=\"INT\" size=\"256\"/><Column id=\"기타인원\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report", this);
            obj._setContents("<ColumnInfo><Column id=\"e_code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","510",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_subTitle1","0","0","220","25",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_text("운전자 목록");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"현황\"/><Cell col=\"1\" text=\"직원성명\"/><Cell col=\"2\" text=\"성별\"/><Cell col=\"3\" text=\"그룹\"/><Cell col=\"4\" text=\"담당직종\"/><Cell col=\"5\" text=\"입사일\"/><Cell col=\"6\" text=\"퇴사일\"/></Band><Band id=\"body\"><Cell text=\"bind:근무현황\"/><Cell col=\"1\" text=\"bind:c_name\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:성별\"/><Cell col=\"3\" text=\"bind:c_group\"/><Cell col=\"4\" text=\"bind:담당직종\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:입사일\" displaytype=\"date\" expandchar=\"dot\"/><Cell col=\"6\" text=\"bind:퇴사일\" expandchar=\"dot\" color=\"red\" displaytype=\"date\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","div_left:10","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_subTitle2","0","0","190","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_text("연간 운전자 송영집계");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_detail","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_detail");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"송영월\"/><Cell col=\"1\" text=\"월인원\"/><Cell col=\"2\" text=\"송영차량_1\"/><Cell col=\"3\" text=\"인원\"/><Cell col=\"4\" text=\"송영차량_2\"/><Cell col=\"5\" text=\"인원\"/><Cell col=\"6\" text=\"송영차량_3\"/><Cell col=\"7\" text=\"인원\"/><Cell col=\"8\" text=\"송영차량_4\"/><Cell col=\"9\" text=\"인원\"/><Cell col=\"10\" text=\"송영차량_5\"/><Cell col=\"11\" text=\"인원\"/><Cell col=\"12\" text=\"송영차량_6\"/><Cell col=\"13\" text=\"인원\"/><Cell col=\"14\" text=\"송영차량_7\"/><Cell col=\"15\" text=\"인원\"/><Cell col=\"16\" text=\"기타\"/></Band><Band id=\"body\"><Cell text=\"bind:송영월\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"1\" text=\"bind:월인원\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:차번호1\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:인원1\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" expr=\"dataset.getColumn(currow, '인원1') == 0 ? '' : dataset.getColumn(currow, '인원1')\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:차번호2\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:인원2\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" expr=\"dataset.getColumn(currow, '인원2') == 0 ? '' : dataset.getColumn(currow, '인원2')\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:차번호3\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:인원3\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" expr=\"dataset.getColumn(currow, '인원3') == 0 ? '' : dataset.getColumn(currow, '인원3')\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:차번호4\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:인원4\" expr=\"dataset.getColumn(currow, '인원4') == 0 ? '' : dataset.getColumn(currow, '인원4')\" textAlign=\"right\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"10\" text=\"bind:차번호5\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:인원5\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" expr=\"dataset.getColumn(currow, '인원5') == 0 ? '' : dataset.getColumn(currow, '인원5')\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:차번호6\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:인원6\" expr=\"dataset.getColumn(currow, '인원6') == 0 ? '' : dataset.getColumn(currow, '인원6')\" textAlign=\"right\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"14\" text=\"bind:차번호7\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:인원7\" expr=\"dataset.getColumn(currow, '인원7') == 0 ? '' : dataset.getColumn(currow, '인원7')\" textAlign=\"right\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"16\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","345","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","102","5","110","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","215","5","15","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","230","5","110","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_year","0","4","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","div_search:10","0","868","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_report1","0","4","175","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("연간 운전자 송영집계");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cmb_year","value","ds_search","YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cal_date_from","value","ds_search","DATE_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_date_to","value","ds_search","DATE_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00407.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00407.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00407.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00407
         * 화면명   	: 연간 운전자 송영집계표
         * 화면설명 	: 연간 운전자별 송영내역을 집계하는 화면
         * 작성일   	: 2022-05-13
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *
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

        	// 현재 년도 구하기
        	const date = new Date();
        	const year = date.getFullYear();

        	// 년도 콤보박스 세팅
        	this.ds_year.clearData();
        	let nRow;
        	for (let i = 10; i > 0; i--)
        	{
        		nRow = this.ds_year.addRow();
        		this.ds_year.setColumn(nRow, "CMCD", year - i);
        		this.ds_year.setColumn(nRow, "CMNM", (year - i) + "년");
        	}
        	for (let i = 0; i < 11; i++)
        	{
        		nRow = this.ds_year.addRow();
        		this.ds_year.setColumn(nRow, "CMCD", year + i);
        		this.ds_year.setColumn(nRow, "CMNM", (year + i) + "년");
        	}

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "DATE_FROM", year + "0101");
        	this.ds_search.setColumn(0, "DATE_TO", year + "1231");
        	this.ds_search.setColumn(0, "YEAR", year);

        	// 조회
        	this.fn_search();
        };

        // 그리드에 css 적용
        this.initGrid = function(grid)
        {
        	// 성별에 따라 이름 배경색 변경
        	const nameIdx = grid.getBindCellIndex("body", "c_name");
        	const nameCss = "expr:dataset.getColumn(currow, '성별') == '남' ? 'cellBMan' : 'cellBWoman'";
        	grid.setCellProperty("body", nameIdx, "cssclass", nameCss);

        	// 퇴사여부에 따라 근무상태 배경색 변경
        	const nowIdx = grid.getBindCellIndex("body", "근무현황");
        	const nowCss = "expr:dataset.getColumn(currow, '근무현황') == '퇴사자' ? 'cellBRetire' : ''";
        	grid.setCellProperty("body", nowIdx, "cssclass", nowCss);
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
        	const argument = "method=getList"
        				   + " sqlId=DAY00407.DAY00407_DS_LIST_S";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.fn_searchDetail = function(code)
        {
        	const svcId = "searchDetail";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_detail=output1";
        	const argument = "method=getList"
        				   + " sqlId=DAY00407.DAY00407_DS_DETAIL_S"
        				   + " SICODE=" + fv_sicode
        				   + " YEAR=" + this.ds_search.getColumn(0, "YEAR")
        				   + " CODE=" + code;

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
        			this.initGrid(this.div_cont.form.div_left.form.grd_list);
        		}
        		else if (strSvcID == "searchDetail")
        		{
        			//trace(this.ds_detail.getSum("월인원"));
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

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 리포트 출력
        this.fn_report = function(obj,e)
        {
        	const driver = this.ds_report.getColumn(0, "e_code");
        	if (Sct.Util.isEmpty(driver))
        	{
        		this.alert("운전자를 선택해주세요");
        		return;
        	}

        	const sum = this.ds_detail.getSum("월인원");
        	if (sum < 1)
        	{
        		this.alert("송영정보가 없는 운전자 입니다.");
        		return;
        	}

        	const popupUrl = "DAY_POP::DAY00407_R01.xfdl";
        	const popupName = "연간 운전자 송영집계";
        	const dicompNm = " ";
        	const params = {
        		sicode : fv_sicode
        	,	year : this.ds_search.getColumn(0, "YEAR")
        	,	code : this.ds_report.getColumn(0, "e_code")
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

        // 조회조건 년도 값 변경 이벤트
        this.div_search_cmb_year_onitemchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0, "DATE_FROM", e.postvalue + '0101');
        	this.ds_search.setColumn(0, "DATE_TO", e.postvalue + '1231');

        	// 값 변경시 조회
        	this.fn_search();
        };

        // 운전자 목록 그리드 셀 클릭 이벤트
        this.div_cont_div_left_grd_list_oncellclick = function(obj,e)
        {
        	const nameIdx = obj.getBindCellIndex("body", "c_name");
        	//trace("nameIdx : " + nameIdx);
        	//trace("e.col : " + e.col);
        	//trace("e.cell : " + e.cell);
        	if (e.cell == nameIdx)
        	{
        		const code = this.ds_list.getColumn(e.row, "c_staffid");
        		this.ds_report.setColumn(0, "e_code", code);
        		this.fn_searchDetail(code);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("oncellclick",this.div_cont_div_left_grd_list_oncellclick,this);
            this.div_search.form.cmb_year.addEventHandler("onitemchanged",this.div_search_cmb_year_onitemchanged,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.fn_report,this);
        };
        this.loadIncludeScript("DAY00407.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
