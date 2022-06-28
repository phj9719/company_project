(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00306_P01");
            this.set_titletext("연간 물리치료 제공집계");
            if (Form == this.constructor)
            {
                this._setFormPosition(840,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"tot\" type=\"STRING\" size=\"256\"/><Column id=\"mon01\" type=\"STRING\" size=\"256\"/><Column id=\"mon02\" type=\"STRING\" size=\"256\"/><Column id=\"mon03\" type=\"STRING\" size=\"256\"/><Column id=\"mon04\" type=\"STRING\" size=\"256\"/><Column id=\"mon05\" type=\"STRING\" size=\"256\"/><Column id=\"mon06\" type=\"STRING\" size=\"256\"/><Column id=\"mon07\" type=\"STRING\" size=\"256\"/><Column id=\"mon08\" type=\"STRING\" size=\"256\"/><Column id=\"mon09\" type=\"STRING\" size=\"256\"/><Column id=\"mon10\" type=\"STRING\" size=\"256\"/><Column id=\"mon11\" type=\"STRING\" size=\"256\"/><Column id=\"mon12\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"DATE\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"물리치료종류\"/><Cell col=\"1\" text=\"1월\"/><Cell col=\"2\" text=\"2월\"/><Cell col=\"3\" text=\"3월\"/><Cell col=\"4\" text=\"4월\"/><Cell col=\"5\" text=\"5월\"/><Cell col=\"6\" text=\"6월\"/><Cell col=\"7\" text=\"7월\"/><Cell col=\"8\" text=\"8월\"/><Cell col=\"9\" text=\"9월\"/><Cell col=\"10\" text=\"10월\"/><Cell col=\"11\" text=\"11월\"/><Cell col=\"12\" text=\"12월\"/><Cell col=\"13\" text=\"합계\"/></Band><Band id=\"body\"><Cell text=\"bind:value\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"1\" text=\"bind:mon01\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"2\" text=\"bind:mon02\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"3\" text=\"bind:mon03\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"4\" text=\"bind:mon04\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"5\" text=\"bind:mon05\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"6\" text=\"bind:mon06\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"7\" text=\"bind:mon07\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"8\" text=\"bind:mon08\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"9\" text=\"bind:mon09\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"10\" text=\"bind:mon10\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"11\" text=\"bind:mon11\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"12\" text=\"bind:mon12\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"13\" text=\"bind:tot\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","3","240","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("yyyy년 물리치료 제공집계현황");
            obj.set_cssclass("lb01");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_search","0","0",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_year","16","5","90","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search","113","4","70","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_report1_00","190","4","185","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("연간 물리치료 제공집계");
            obj.set_cssclass("btn_print");
            this.div_search.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",840,520,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cmb_year","value","ds_search","YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00306_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00306_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00306_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00306_P01
         * 화면명   	: 연간 물리치료 제공집계
         * 화면설명 	: 연도별 물리치료 제공집계 조회
         * 작성일   	: 2022-06-02
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
        	this.ds_search.setColumn(0, "YEAR", year);

        	this.fn_search();
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
        				   + " sqlId=DAY00306_P01.DAY00306_P01_DS_LIST_S";
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
        			const year = this.ds_search.getColumn(0, "YEAR");
        			const titleStr = year + "년 물리치료 제공집계현황";
        			this.div_cont.form.sta_subTitle.set_text(titleStr);
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
        	/*
        	 * ubireport 용 변수
        	 * this.ubiDataType : 리포트 데이타 유형 ( 0:SQL, 1:Nexacro 데이터셋, 2:화면 내 Grid(자동리포트) )
        	 *				  	  정의하지 않을경우 0으로 자동 세팅
        	 * this.ubiReportFile : 리포트 파일명
        	 * this.ubiLocalDs : Nexacro 데이터셋 정보 ( 데이터셋을 사용한 리포트 호출시 필요 )
        	 * this.ubiGridObj : 자동 리포트에서 사용하는 그리드 객체 ( 데이타 유형이 2일 경우 필요 )
        	 * this.ubiArg : 리포트 아규먼트 (세팅 예 : COMPANY#유비디시전#HOMEPAGE#http://www.ubireport.com# )
        	 * this.ubiIsMul : 멀티리포트 여부 ( 멀티리포트 사용시 true로 세팅 )
        	 * this.ubiMulCount : 멀티리포트 사용시 리포트 반복횟수 설정 숫자형태의 문자열
        	 * this.ubiIsPdf : pdf 프린트 바로 열기 여부 모달로 띄울시 false
        	 */
        	this.ubiReportFile = "DAY00306_R03.jrf";

        	this.ubiArg = "P_SICODE#" + fv_sicode + "#"
        				+ "P_YEAR#" + this.ds_search.getColumn(0, "YEAR") + "#"
        				+ "P_OFFNAME#" + nexacro.getApplication().gds_userInfo.getColumn(0, "b_offname") + "#";

        	this.components["UbiDiv"].form.ubiPreview();
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
        	// 값 변경시 조회
        	this.fn_search();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_search.form.cmb_year.addEventHandler("onitemchanged",this.div_search_cmb_year_onitemchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.btn_report1_00.addEventHandler("onclick",this.fn_report,this);
        };
        this.loadIncludeScript("DAY00306_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
