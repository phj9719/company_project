(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00402_P03");
            this.set_titletext("연간 수급자별 송영집계");
            if (Form == this.constructor)
            {
                this._setFormPosition(1700,850);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"거주현황\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_regist\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"송영요일\" type=\"STRING\" size=\"256\"/><Column id=\"mon01\" type=\"STRING\" size=\"256\"/><Column id=\"mon02\" type=\"STRING\" size=\"256\"/><Column id=\"mon03\" type=\"STRING\" size=\"256\"/><Column id=\"mon04\" type=\"STRING\" size=\"256\"/><Column id=\"mon05\" type=\"STRING\" size=\"256\"/><Column id=\"mon06\" type=\"STRING\" size=\"256\"/><Column id=\"mon07\" type=\"STRING\" size=\"256\"/><Column id=\"mon08\" type=\"STRING\" size=\"256\"/><Column id=\"mon09\" type=\"STRING\" size=\"256\"/><Column id=\"mon10\" type=\"STRING\" size=\"256\"/><Column id=\"mon11\" type=\"STRING\" size=\"256\"/><Column id=\"mon12\" type=\"STRING\" size=\"256\"/><Column id=\"tot\" type=\"STRING\" size=\"256\"/><Column id=\"미입소\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"DATE\" size=\"256\"/><Column id=\"DATE_TO\" type=\"DATE\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_car", this);
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"수급상태\"/><Cell col=\"1\" text=\"그룹\"/><Cell col=\"2\" text=\"인정번호\"/><Cell col=\"3\" text=\"수급자명\"/><Cell col=\"4\" text=\"성별\"/><Cell col=\"5\" text=\"생활실\"/><Cell col=\"6\" text=\"송영요일\"/><Cell col=\"7\" text=\"1월\"/><Cell col=\"8\" text=\"2월\"/><Cell col=\"9\" text=\"3월\"/><Cell col=\"10\" text=\"4월\"/><Cell col=\"11\" text=\"5월\"/><Cell col=\"12\" text=\"6월\"/><Cell col=\"13\" text=\"7월\"/><Cell col=\"14\" text=\"8월\"/><Cell col=\"15\" text=\"9월\"/><Cell col=\"16\" text=\"10월\"/><Cell col=\"17\" text=\"11월\"/><Cell col=\"18\" text=\"12월\"/><Cell col=\"19\" text=\"연간합\"/><Cell col=\"20\" text=\"미이용\"/><Cell col=\"21\" text=\"수급자코드\"/></Band><Band id=\"body\"><Cell text=\"bind:거주현황\"/><Cell col=\"1\" text=\"bind:m_group\"/><Cell col=\"2\" text=\"bind:m_regist\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:m_name\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:성별\"/><Cell col=\"5\" text=\"bind:m_roomname\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:송영요일\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:mon01\"/><Cell col=\"8\" text=\"bind:mon02\"/><Cell col=\"9\" text=\"bind:mon03\"/><Cell col=\"10\" text=\"bind:mon04\"/><Cell col=\"11\" text=\"bind:mon05\"/><Cell col=\"12\" text=\"bind:mon06\"/><Cell col=\"13\" text=\"bind:mon07\"/><Cell col=\"14\" text=\"bind:mon08\"/><Cell col=\"15\" text=\"bind:mon09\"/><Cell col=\"16\" text=\"bind:mon10\"/><Cell col=\"17\" text=\"bind:mon11\"/><Cell col=\"18\" text=\"bind:mon12\"/><Cell col=\"19\" text=\"bind:tot\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"20\" text=\"bind:미입소\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"21\" text=\"bind:m_code\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","640","3","200","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("연간 수급자별 송영집계");
            obj.set_cssclass("lb01");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_search","0","0",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_year","10","5","90","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search","357","5","70","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","112","5","110","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","225","5","15","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","240","5","110","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_report","435","5","185","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("연간 수급자별 송영집계");
            obj.set_cssclass("btn_print");
            this.div_search.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1700,850,this,function(p){});
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
        this.addIncludeScript("DAY00402_P03.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00402_P03.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00402_P03.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00402_P03
         * 화면명   	: 연간 수급자별 송영집계
         * 화면설명 	:
         * 작성일   	: 2022-05-04
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
        const fv_sicode = this.parent.SICODE;
        const fv_year = this.parent.YEAR;
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
        	this.ds_search.setColumn(0, "YEAR", fv_year);
        	this.ds_search.setColumn(0, "DATE_FROM", fv_year + "0101");
        	this.ds_search.setColumn(0, "DATE_TO", fv_year + "1231");

        	this.fn_search();
        };

        // 그리드에 css 적용
        this.initGrid = function(grid)
        {
        	// 성별에 따라 이름 배경색 변경
        	const nameIdx = grid.getBindCellIndex("body", "m_name");
        	const nameCss = "expr:dataset.getColumn(currow, '성별') == '남' ? 'cellBMan' : 'cellBWoman'";
        	grid.setCellProperty("body", nameIdx, "cssclass", nameCss);

        	// 퇴소여부에 따라 수급상태 배경색 변경
        	const nowIdx = grid.getBindCellIndex("body", "거주현황");
        	const nowCss = "expr:dataset.getColumn(currow, '거주현황') == '퇴소자' ? 'cellBRetire' : ''";
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
        	const argument = "method=getList "
        				   + "sqlId=DAY00402_P03.DAY00402_P03_DS_LIST_S ";
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

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 리포트 출력
        this.fn_report = function(obj,e)
        {
        	const popupUrl = "DAY_POP::DAY00402_R09.xfdl";
        	const popupName = "연간 수급자별 송영집계";
        	let params;
        	const dicompNm = " ";
        	const year = this.ds_search.getColumn(0, "YEAR");

        	params = {
        		sicode : fv_sicode
        	,	date : this.ds_search.getColumn(0, "DATE")
        	,	year : year
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
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_search.form.cmb_year.addEventHandler("onitemchanged",this.div_search_cmb_year_onitemchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.btn_report.addEventHandler("onclick",this.fn_report,this);
        };
        this.loadIncludeScript("DAY00402_P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
