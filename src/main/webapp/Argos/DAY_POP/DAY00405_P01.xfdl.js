(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00405_P01");
            this.set_titletext("월간 수급자 송영·식사 기록");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"K_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"DATE\" size=\"256\"/><Column id=\"DATE_TO\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"k_nalja\" type=\"DATE\" size=\"256\"/><Column id=\"요일\" type=\"STRING\" size=\"256\"/><Column id=\"시작차량\" type=\"STRING\" size=\"256\"/><Column id=\"송영시간\" type=\"STRING\" size=\"256\"/><Column id=\"종료차량\" type=\"STRING\" size=\"256\"/><Column id=\"아침종류\" type=\"STRING\" size=\"256\"/><Column id=\"점심종류\" type=\"STRING\" size=\"256\"/><Column id=\"저녁종류\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"k_code\" type=\"STRING\" size=\"256\"/><Column id=\"sex\" type=\"STRING\" size=\"256\"/><Column id=\"birth\" type=\"STRING\" size=\"256\"/><Column id=\"mon\" type=\"STRING\" size=\"256\"/><Column id=\"tot\" type=\"STRING\" size=\"256\"/><Column id=\"enday\" type=\"STRING\" size=\"256\"/><Column id=\"reday\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_main","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","11","9","260","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_text("수급자 정보");
            obj.set_cssclass("lb01");
            this.div_main.addChild(obj.name, obj);

            obj = new Div("div_line","10","40",null,"2","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            obj.set_background("#000000");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1","9","47","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("2");
            obj.set_text("수급자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1","91","47",null,"34","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2","9","80","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("제공년월");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body2","91","80",null,"34","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2_1","339","80","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("입·퇴소일");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_1","339","47","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("성별·생일");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_yearMon","99","88","79","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("11");
            obj.set_text("2022년 12월");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_enday","429","88","69","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("13");
            obj.set_text("2021.10.12");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_sex","429","55","39","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("7");
            obj.set_text("남");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_birth","479","55","79","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("8");
            obj.set_text("38-08-11");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_mname","99","55","69","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("4");
            obj.set_text("이동철");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_mcode","179","55","79","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("5");
            obj.set_text("20210004");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_reday","549","88","69","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("14");
            obj.set_text("2021.10.12");
            obj.set_color("red");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_list","10","120",null,null,"10","10",null,null,null,null,this.div_main.form);
            obj.set_taborder("15");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"송영일\"/><Cell col=\"1\" text=\"요일\"/><Cell col=\"2\" text=\"시작차량\"/><Cell col=\"3\" text=\"송영시간\"/><Cell col=\"4\" text=\"종료차량\"/><Cell col=\"5\" text=\"아침종류\"/><Cell col=\"6\" text=\"점심종류\"/><Cell col=\"7\" text=\"저녁종류\"/></Band><Band id=\"body\"><Cell text=\"bind:k_nalja\" displaytype=\"date\" expandchar=\"dot\"/><Cell col=\"1\" text=\"bind:요일\"/><Cell col=\"2\" text=\"bind:시작차량\"/><Cell col=\"3\" text=\"bind:송영시간\"/><Cell col=\"4\" text=\"bind:종료차량\"/><Cell col=\"5\" text=\"bind:아침종류\"/><Cell col=\"6\" text=\"bind:점심종류\"/><Cell col=\"7\" text=\"bind:저녁종류\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_tot","219","88","39","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("16");
            obj.set_text("22 일");
            obj.set_textAlign("center");
            obj.set_background("#f7fcff");
            this.div_main.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_main.form.sta_mname","text","ds_data","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_main.form.sta_mcode","text","ds_data","k_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_main.form.sta_sex","text","ds_data","sex");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_main.form.sta_birth","text","ds_data","birth");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_main.form.sta_yearMon","text","ds_data","mon");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_main.form.sta_enday","text","ds_data","enday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_main.form.sta_reday","text","ds_data","reday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_main.form.sta_tot","text","ds_data","tot");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00405_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00405_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00405_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00405_P01
         * 화면명   	: 월간 수급자 송영·식사 기록
         * 화면설명 	:
         * 작성일   	: 2022-05-03
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용

         ***********************************************************************
         비고 :
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
        const fv_name = this.parent.NAME;
        const fv_code = this.parent.CODE;
        const fv_sex = this.parent.SEX;
        const fv_birth = this.parent.BIRTH;
        const fv_enday = this.parent.ENDAY;
        const fv_reday = this.parent.REDAY;
        const fv_tot = this.parent.TOT;
        const fv_from = this.parent.FROM;
        const fv_to = this.parent.TO;
        const fv_mon = this.parent.YEARMON;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 수급자 정보 세팅
        	this.ds_data.setColumn(0, "name", fv_name);
        	this.ds_data.setColumn(0, "k_code", fv_code);
        	this.ds_data.setColumn(0, "sex", fv_sex);
        	this.ds_data.setColumn(0, "birth", fv_birth);

        	const year = fv_mon.substr(0, 4);
        	const mon = parseInt(fv_mon.substr(4));
        	const yearMon = year + "년 " + mon + "월";
        	this.ds_data.setColumn(0, "mon", yearMon);

        	const tot = fv_tot.padStart(2, '0') + " 일";
        	this.ds_data.setColumn(0, "tot", tot);

        	const enYear = fv_enday.substr(0, 4);
        	const enMon = fv_enday.substr(4, 2);
        	const enDay = fv_enday.substr(6, 2);
        	const fullEnday = enYear + "." + enMon + "." + enDay;
        	this.ds_data.setColumn(0, "enday", fullEnday);
        	this.ds_data.setColumn(0, "reday", fv_reday);

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "K_CODE", fv_code);
        	this.ds_search.setColumn(0, "DATE_FROM", fv_from);
        	this.ds_search.setColumn(0, "DATE_TO", fv_to);

        	// 오픈시 조회
        	this.fn_search();
        };

        // 그리드에 css 적용
        this.initGrid = function(grid)
        {
        	// 요일에 따라 송영일 색 변경
        	const dayIdx = grid.getBindCellIndex("body", "k_nalja");
        	const dayCss = "expr:dataset.getColumn(currow, '요일') == '(일)' ? 'RedFontCell' : "
        				 + "dataset.getColumn(currow, '요일') == '(토)' ? 'BlueFontCell' : ''";
        	grid.setCellProperty("body", dayIdx, "cssclass", dayCss);

        	// 요일에 따라 요일 색 변경
        	const dddIdx = grid.getBindCellIndex("body", "요일");
        	const dddCss = "expr:dataset.getColumn(currow, '요일') == '(일)' ? 'RedFontCell' : "
        				 + "dataset.getColumn(currow, '요일') == '(토)' ? 'BlueFontCell' : ''";
        	grid.setCellProperty("body", dddIdx, "cssclass", dddCss);
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
        //조회
        this.fn_search = function ()
        {
        	//validation
        	if (!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList"
        				   + " sqlId=DAY00405_P01.DAY00405_P01_DS_LIST_S";

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
        			this.initGrid(this.div_main.form.grd_list);
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("DAY00405_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
