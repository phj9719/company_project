(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUA803QR_D");
            this.set_titletext("기저귀 모니터링 (2분할)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1500,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"CONN_ST\" type=\"STRING\" size=\"256\"/><Column id=\"B_HUMI_RATE\" type=\"INT\" size=\"256\"/><Column id=\"B_HUMI_RATE_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"HUMI_RATE\" type=\"INT\" size=\"256\"/><Column id=\"HUMI_RATE_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"BAT_RATE\" type=\"INT\" size=\"256\"/><Column id=\"BAT_RATE_VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"MON_AREA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_left", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"CONN_ST\" type=\"STRING\" size=\"256\"/><Column id=\"B_HUMI_RATE\" type=\"INT\" size=\"256\"/><Column id=\"B_HUMI_RATE_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"HUMI_RATE\" type=\"INT\" size=\"256\"/><Column id=\"HUMI_RATE_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"BAT_RATE\" type=\"INT\" size=\"256\"/><Column id=\"BAT_RATE_VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_right", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"CONN_ST\" type=\"STRING\" size=\"256\"/><Column id=\"B_HUMI_RATE\" type=\"INT\" size=\"256\"/><Column id=\"B_HUMI_RATE_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"HUMI_RATE\" type=\"INT\" size=\"256\"/><Column id=\"HUMI_RATE_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"BAT_RATE\" type=\"INT\" size=\"256\"/><Column id=\"BAT_RATE_VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mon_area", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_mon_cycle", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"STR1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_etc_list", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DIAPER_ALL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"HUMI_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"BAT_LINE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("dragscrolltype").set("vert");
            obj.set_cssclass("s01");
            obj.set_background("#2d5dbb");
            this.addChild(obj.name, obj);

            obj = new Static("sta_area","28.6%","12","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("모니터링 지역");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("#ffffff");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_area","sta_area:15","12","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_codecolumn("ARE_CD");
            obj.set_datacolumn("ARE_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_mon_area");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_location","cmb_area:6","12","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("층");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("#ffffff");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","sta_location:5","12","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_codecolumn("ARE_CD");
            obj.set_datacolumn("ARE_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_area");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search","cmb_location:10","10","80","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("검색");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"10","80","24","10",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("닫기");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_4div",null,"10","80","24","btn_close:10",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("4분할");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_mainTitle","8","0","28.10%","45",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("모니터링 시스템");
            obj.set_color("#ffffff");
            obj.set_font("normal 700 18pt/normal \"Noto Sans KR\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","0%","50",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","1.5%",null,null,"30","692","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_url("CM_POP::CM_PAGING_DIV.xfdl");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_left","1.5%","20",null,null,"50.5%","46",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_left");
            obj.set_autosizingtype("none");
            obj.set_background("");
            obj.set_readonly("false");
            obj.set_selecttype("row");
            obj.set_enable("true");
            obj.set_useselcolor("false");
            obj.set_cssclass("grd_DataList_h2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"130\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"20\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"41\"/></Rows><Band id=\"head\"><Cell text=\"층/호실\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\"/><Cell col=\"1\" text=\"입소자\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\"/><Cell col=\"2\"/><Cell col=\"3\" colspan=\"5\" text=\"기저귀상태(5분전)\"/><Cell col=\"8\"/><Cell col=\"9\" colspan=\"2\" text=\"기저귀배터리\"/><Cell col=\"11\"/></Band><Band id=\"body\"><Cell text=\"bind:LOCATION\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"normal\" combodataset=\"ds_nu_sex\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:RESIDENT\" font=\"normal bold 15pt/normal &quot;Noto Sans KR&quot;\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\" cssclass=\"expr:dataset.getColumn(currow,&quot;FALL_CLEAR_YN&quot;) == 'N' ? 'CellYellow' : 'CellYellow' \"/><Cell col=\"2\"/><Cell col=\"3\" displaytype=\"imagecontrol\" padding=\"0px 0px 0px 7px\"/><Cell col=\"4\" text=\"bind:B_HUMI_RATE_VALUE\"/><Cell col=\"5\" displaytype=\"imagecontrol\"/><Cell col=\"6\" displaytype=\"imagecontrol\" imagestretch=\"fixaspectratio\"/><Cell col=\"7\" text=\"bind:HUMI_RATE_VALUE\" font=\"normal 500 16pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"8\"/><Cell col=\"9\" displaytype=\"imagecontrol\"/><Cell col=\"10\" text=\"bind:BAT_RATE_VALUE\"/><Cell col=\"11\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_right","50.5%","20",null,null,"1.5%","46",null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_background("");
            obj.set_readonly("false");
            obj.set_selecttype("row");
            obj.set_enable("true");
            obj.set_useselcolor("false");
            obj.set_binddataset("ds_right");
            obj.set_cssclass("grd_DataList_h2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"130\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"20\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"41\"/></Rows><Band id=\"head\"><Cell text=\"층/호실\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\"/><Cell col=\"1\" text=\"입소자\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\"/><Cell col=\"2\"/><Cell col=\"3\" colspan=\"5\" text=\"기저귀상태(5분전)\"/><Cell col=\"8\"/><Cell col=\"9\" colspan=\"2\" text=\"기저귀배터리\"/><Cell col=\"11\"/></Band><Band id=\"body\"><Cell text=\"bind:LOCATION\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"normal\" combodataset=\"ds_nu_sex\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:RESIDENT\" font=\"normal bold 15pt/normal &quot;Noto Sans KR&quot;\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\" cssclass=\"expr:dataset.getColumn(currow,&quot;FALL_CLEAR_YN&quot;) == 'N' ? 'CellYellow' : 'CellYellow' \"/><Cell col=\"2\"/><Cell col=\"3\" displaytype=\"imagecontrol\" padding=\"0px 0px 0px 7px\"/><Cell col=\"4\" text=\"bind:B_HUMI_RATE_VALUE\"/><Cell col=\"5\" displaytype=\"imagecontrol\"/><Cell col=\"6\" displaytype=\"imagecontrol\" imagestretch=\"fixaspectratio\"/><Cell col=\"7\" text=\"bind:HUMI_RATE_VALUE\" font=\"normal 500 16pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"8\"/><Cell col=\"9\" displaytype=\"imagecontrol\"/><Cell col=\"10\" text=\"bind:BAT_RATE_VALUE\"/><Cell col=\"11\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1500,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","div_search.form.cmb_area","value","ds_search","MON_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cmb_location","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM_POP::CM_PAGING_DIV.xfdl");
        };
        
        // User Script
        this.addIncludeScript("NUA803QR_D.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUA803QR_D.xfdl","lib::pgm_com.xjs");
        this.registerScript("NUA803QR_D.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: NUA803QR_D
         * 화면명   	: 기저귀 모니터링(2분할)
         * 화면설명 	: 기저귀 착용자들의 기저귀 상태를 주기적으로 나타내는 화면
         * 작성일   	: 2021-12-17 14:30
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *  수정일				수정자			내용
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
        const fv_companyCd = nexacro.getApplication().gds_userInfo.getColumn(0,"COMPANY_CD");
        this.newObj;
        this.timeCycle = 0;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.NUA803QR_D_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 검색 조건 세팅
        	this.ds_search.setColumn(0, "COMPANY_CD", fv_companyCd);

        	this.fn_initPageSet();

        	this.newObj = obj;

        	this.fn_setComboDs(obj);

        	this.timeCycle = this.ds_nu_mon_cycle.getColumn(1, "STR1") * 1000;

        	this.fn_search();

        	// 오픈시 검색조건 첫 항목에 커서 이동
        	this.div_search.form.cmb_area.setFocus();
        };

        // 타이머
        this.NUA803QR_D_ontimer = function(obj,e)
        {
        	if(e.timerid == 1)
        	{
        		// 페이징 순차적으로 검색되게 하기
        		this.div_cont.form.div_paging.form.fn_autoSearch("Y");
        	}
        };

        //페이징 처리 초기화
        this.fn_initPageSet = function()
        {
        	//페이징처리 초기화
        	this.ds_list.pageRowCount		= 38;								//조회될 row 갯수 (page Size)
            this.ds_list.pageCount			= 10;								//최대 페이지 갯수 (page Scale)
            this.ds_list.pageTotalVisible	= false;							//하단 page Size, pageScale 등 입력 div show YN
        	this.ds_list.pageNo				= 1;								//최초조회시 default 페이지 번호
        	this.ds_list.pageFunctionName	= "fn_search";						//페이지 버튼(1,2,3...)클릭시 조회할 function name
        	this.div_cont.form.div_paging.form.fn_init(this, this.ds_list);		//페이지 form 초기화
        };

        // 콤보 세팅
        this.fn_setComboDs = function(obj)
        {
        	const comboDsParamArr = [
        			{ outDsName : "ds_area", sqlId : "CM_MONITOR_PP.CM_MOTITOR_PP_DS_AREA_S", param : { COMPANY_CD : fv_companyCd }, bEmptyRow : true } // 층 조회
        		,	{ outDsName : "ds_mon_area", sqlId : "CM_MONITOR_PP.CM_MOTITOR_PP_DS_MON_AREA_S", param : { COMPANY_CD : fv_companyCd }, bEmptyRow : true } // 생활실 전체 조회
        	];
        	this.gfn_setComboDs(obj, comboDsParamArr);
        };

        // 그리드 expr 세팅
        this.fn_initGrid = function(grid)
        {
        	// 기저귀 5분전 습도 expr
        	const beHumiImg = "expr:(dataset.getColumn(currow, 'CONN_ST') == 1 || dataset.getColumn(currow, 'CONN_ST') == 1.0) ? "
        					+ "(dataset.getColumn(currow, 'B_HUMI_RATE') != null && dataset.getColumn(currow, 'B_HUMI_RATE') != undefined) ? "
        					+ "(dataset.getColumn(currow, 'B_HUMI_RATE') >= 100 ? 'imagerc::ico_diaper2_10.png' : "
        					+ "(dataset.getColumn(currow, 'B_HUMI_RATE') <= 99 && dataset.getColumn(currow, 'B_HUMI_RATE') >= 90) ? 'imagerc::ico_diaper2_9.png' : "
        					+ "(dataset.getColumn(currow, 'B_HUMI_RATE') <= 89 && dataset.getColumn(currow, 'B_HUMI_RATE') >= 80) ? 'imagerc::ico_diaper2_8.png' : "
        					+ "(dataset.getColumn(currow, 'B_HUMI_RATE') <= 79 && dataset.getColumn(currow, 'B_HUMI_RATE') >= 70) ? 'imagerc::ico_diaper2_7.png' : "
        					+ "(dataset.getColumn(currow, 'B_HUMI_RATE') <= 69 && dataset.getColumn(currow, 'B_HUMI_RATE') >= 60) ? 'imagerc::ico_diaper2_6.png' : "
        					+ "(dataset.getColumn(currow, 'B_HUMI_RATE') <= 59 && dataset.getColumn(currow, 'B_HUMI_RATE') >= 50) ? 'imagerc::ico_diaper2_5.png' : "
        					+ "(dataset.getColumn(currow, 'B_HUMI_RATE') <= 49 && dataset.getColumn(currow, 'B_HUMI_RATE') >= 40) ? 'imagerc::ico_diaper2_4.png' : "
        					+ "(dataset.getColumn(currow, 'B_HUMI_RATE') <= 39 && dataset.getColumn(currow, 'B_HUMI_RATE') >= 30) ? 'imagerc::ico_diaper2_3.png' : "
        					+ "(dataset.getColumn(currow, 'B_HUMI_RATE') <= 29 && dataset.getColumn(currow, 'B_HUMI_RATE') >= 20) ? 'imagerc::ico_diaper2_2.png' : "
        					+ "(dataset.getColumn(currow, 'B_HUMI_RATE') <= 19 && dataset.getColumn(currow, 'B_HUMI_RATE') >= 10) ? 'imagerc::ico_diaper2_1.png' : "
        					+ "'imagerc::ico_diaper2_0.png') : "
        					+ "'' : "
        					+ "''";

        	// 화살표 expr
        	const arrowImg = "expr:(dataset.getColumn(currow, 'CONN_ST') == 1 || dataset.getColumn(currow, 'CONN_ST') == 1.0) ? "
        					+ "((dataset.getColumn(currow, 'B_HUMI_RATE') != null && dataset.getColumn(currow, 'B_HUMI_RATE') != undefined) ? 'imagerc::ico_chev_diaper.png' : '') : "
        					+ "''";

        	// 기저귀 현재 습도 expr
        	const humiImg = "expr:(dataset.getColumn(currow, 'CONN_ST') == 1 || dataset.getColumn(currow, 'CONN_ST') == 1.0) ? "
        					+ "(dataset.getColumn(currow, 'HUMI_RATE') >= 100 ? 'imagerc::ico_diaper2_10.png' : "
        					+ "(dataset.getColumn(currow, 'HUMI_RATE') <= 99 && dataset.getColumn(currow, 'HUMI_RATE') >= 90) ? 'imagerc::ico_diaper2_9.png' : "
        					+ "(dataset.getColumn(currow, 'HUMI_RATE') <= 89 && dataset.getColumn(currow, 'HUMI_RATE') >= 80) ? 'imagerc::ico_diaper2_8.png' : "
        					+ "(dataset.getColumn(currow, 'HUMI_RATE') <= 79 && dataset.getColumn(currow, 'HUMI_RATE') >= 70) ? 'imagerc::ico_diaper2_7.png' : "
        					+ "(dataset.getColumn(currow, 'HUMI_RATE') <= 69 && dataset.getColumn(currow, 'HUMI_RATE') >= 60) ? 'imagerc::ico_diaper2_6.png' : "
        					+ "(dataset.getColumn(currow, 'HUMI_RATE') <= 59 && dataset.getColumn(currow, 'HUMI_RATE') >= 50) ? 'imagerc::ico_diaper2_5.png' : "
        					+ "(dataset.getColumn(currow, 'HUMI_RATE') <= 49 && dataset.getColumn(currow, 'HUMI_RATE') >= 40) ? 'imagerc::ico_diaper2_4.png' : "
        					+ "(dataset.getColumn(currow, 'HUMI_RATE') <= 39 && dataset.getColumn(currow, 'HUMI_RATE') >= 30) ? 'imagerc::ico_diaper2_3.png' : "
        					+ "(dataset.getColumn(currow, 'HUMI_RATE') <= 29 && dataset.getColumn(currow, 'HUMI_RATE') >= 20) ? 'imagerc::ico_diaper2_2.png' : "
        					+ "(dataset.getColumn(currow, 'HUMI_RATE') <= 19 && dataset.getColumn(currow, 'HUMI_RATE') >= 10) ? 'imagerc::ico_diaper2_1.png' : "
        					+ "'imagerc::ico_diaper2_0.png') : "
        					+ "'imagerc::ico_diaper_uncont.png'";

        	// 배터리 expr
        	const batImg = "expr:(dataset.getColumn(currow, 'CONN_ST') == 1 || dataset.getColumn(currow, 'CONN_ST') == 1.0) ? "
        					+ "(dataset.getColumn(currow, 'BAT_RATE') >= 100 ? 'imagerc::ico_battery_10.png' : "
        					+ "(dataset.getColumn(currow, 'BAT_RATE') <= 99 && dataset.getColumn(currow, 'BAT_RATE') >= 90) ? 'imagerc::ico_battery_9.png' : "
        					+ "(dataset.getColumn(currow, 'BAT_RATE') <= 89 && dataset.getColumn(currow, 'BAT_RATE') >= 80) ? 'imagerc::ico_battery_8.png' : "
        					+ "(dataset.getColumn(currow, 'BAT_RATE') <= 79 && dataset.getColumn(currow, 'BAT_RATE') >= 70) ? 'imagerc::ico_battery_7.png' : "
        					+ "(dataset.getColumn(currow, 'BAT_RATE') <= 69 && dataset.getColumn(currow, 'BAT_RATE') >= 60) ? 'imagerc::ico_battery_6.png' : "
        					+ "(dataset.getColumn(currow, 'BAT_RATE') <= 59 && dataset.getColumn(currow, 'BAT_RATE') >= 50) ? 'imagerc::ico_battery_5.png' : "
        					+ "(dataset.getColumn(currow, 'BAT_RATE') <= 49 && dataset.getColumn(currow, 'BAT_RATE') >= 40) ? 'imagerc::ico_battery_4.png' : "
        					+ "(dataset.getColumn(currow, 'BAT_RATE') <= 39 && dataset.getColumn(currow, 'BAT_RATE') >= 30) ? 'imagerc::ico_battery_3.png' : "
        					+ "(dataset.getColumn(currow, 'BAT_RATE') <= 29 && dataset.getColumn(currow, 'BAT_RATE') >= 20) ? 'imagerc::ico_battery_2.png' : "
        					+ "(dataset.getColumn(currow, 'BAT_RATE') <= 19 && dataset.getColumn(currow, 'BAT_RATE') >= 10) ? 'imagerc::ico_battery_1.png' : "
        					+ "'imagerc::ico_battery_0.png') : "
        					+ "'imagerc::ico_battery_0.png'";

        	grid.setCellProperty("body", 3, "expr", beHumiImg);	// 5분전 기저귀 이미지
        	grid.setCellProperty("body", 5, "expr", arrowImg);	// 화살표
        	grid.setCellProperty("body", 6, "expr", humiImg);	// 현재 기저귀 이미지
        	grid.setCellProperty("body", 9, "expr", batImg);	// 배터리 이미지
        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 검색
        this.fn_search = function()
        {
        	const svcId = "search";
        	const params = "/NUA803QR_DController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1 ds_etc_list=output2";
        	const argument = "method=select ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if (strSvcID == "search")
        		{
        			this.killTimer(1);
        			const companyNm = this.ds_etc_list.getColumn(0, "COMPANY_NM");	// 업체명
        			this.div_search.form.sta_mainTitle.set_text(companyNm + " 모니터링 시스템");

        			this.ds_left.clearData();
        			this.ds_right.clearData();

        			this.div_cont.form.div_paging.form.fn_callAfter();
        			// 데이터셋 내용 2개의 그리드에 나눠서 표시
        			for (let i = 0; i < this.ds_list.rowcount; i++)
        			{
        				if (i % 2 == 0)
        				{
        					const lRow = this.ds_left.addRow();
        					this.ds_left.copyRow(lRow, this.ds_list, i);
        				}
        				else
        				{
        					const rRow = this.ds_right.addRow();
        					this.ds_right.copyRow(rRow, this.ds_list, i);
        				}
        			}
        			this.ds_left.applyChange();
        			this.ds_right.applyChange();

        			this.fn_initGrid(this.div_cont.form.grd_left);
        			this.fn_initGrid(this.div_cont.form.grd_right);

        			this.setTimer(1, this.timeCycle);
        		}
        	}
        	else
        	{
        		Sct.alert(this, "", strErrorMsg);
        	}
        };

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 검색조건 모니터링 지역 콤보박스 변경 이벤트
        this.div_search_cmb_area_onitemchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0, "AREA", "");
        };

        // 검색조건 층 콤보박스 변경 이벤트
        this.div_search_cmb_location_onitemchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0, "MON_AREA", "");
        };

        // 검색 버튼
        this.div_search_btn_search_onclick = function(obj,e)
        {
        	this.fn_search();
        };

        // 4분할 버튼
        this.div_search_btn_4div_onclick = function(obj,e)
        {
        	this.newObj.getOwnerFrame().set_formurl("NU::NUA804QR_D.xfdl");
        };

        // 닫기 버튼
        this.div_search_btn_close_onclick = function(obj,e)
        {
        	this.close();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.NUA803QR_D_onload,this);
            this.addEventHandler("ontimer",this.NUA803QR_D_ontimer,this);
            this.div_search.form.cmb_area.addEventHandler("onitemchanged",this.div_search_cmb_area_onitemchanged,this);
            this.div_search.form.cmb_location.addEventHandler("onitemchanged",this.div_search_cmb_location_onitemchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.div_search_btn_search_onclick,this);
            this.div_search.form.btn_close.addEventHandler("onclick",this.div_search_btn_close_onclick,this);
            this.div_search.form.btn_4div.addEventHandler("onclick",this.div_search_btn_4div_onclick,this);
            this.div_cont.form.div_paging.addEventHandler("onclick",this.div_cont_div_paging_onclick,this);
        };
        this.loadIncludeScript("NUA803QR_D.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
