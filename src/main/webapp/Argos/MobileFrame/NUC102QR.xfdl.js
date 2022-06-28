(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUC102QR");
            this.set_titletext("식사");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FROM\" type=\"STRING\" size=\"256\"/><Column id=\"TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MEA_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MOR_SNACK_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"AFT_SNACK_QTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_meal_amt", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_meal", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MEA_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MOR_SNACK_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"AFT_SNACK_QTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_weekTitle","5.00%","230",null,"40","5.00%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("지난 주간 식사정보");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Static("sta_weekRemark","5.00%","271",null,"30","5.00%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("지난 일주일간의 식사정보 입니다.");
            obj.set_cssclass("sta_txt");
            this.addChild(obj.name, obj);

            obj = new Div("div_mealToday","5.00%","70",null,"140","5.00%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#8cdd75");
            obj.set_borderRadius("6px");
            obj.set_formscrolltype("both");
            obj.set_formscrollbartype("indicator");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mealToday","2.78%","11",null,"26","2.78%",null,null,null,null,null,this.div_mealToday.form);
            obj.set_taborder("0");
            obj.set_text("금일식사현황");
            obj.set_font("normal 700 16pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            this.div_mealToday.addChild(obj.name, obj);

            obj = new Div("div_mealLine","2.78%","49",null,"2","2.78%",null,null,null,null,null,this.div_mealToday.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.div_mealToday.addChild(obj.name, obj);

            obj = new Static("sta_breH","2.78%","63","70","26",null,null,null,null,null,null,this.div_mealToday.form);
            obj.set_taborder("2");
            obj.set_text("아침식사");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            this.div_mealToday.addChild(obj.name, obj);

            obj = new Static("sta_lunH","21.53%","63","70","26",null,null,null,null,null,null,this.div_mealToday.form);
            obj.set_taborder("3");
            obj.set_text("점심식사");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            this.div_mealToday.addChild(obj.name, obj);

            obj = new Static("sta_dinH","41.44%","63","70","26",null,null,null,null,null,null,this.div_mealToday.form);
            obj.set_taborder("4");
            obj.set_text("저녁식사");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            this.div_mealToday.addChild(obj.name, obj);

            obj = new Static("sta_morSnackH","61.81%","63","70","26",null,null,null,null,null,null,this.div_mealToday.form);
            obj.set_taborder("5");
            obj.set_text("오전간식");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            this.div_mealToday.addChild(obj.name, obj);

            obj = new Static("sta_aftSnackH",null,"63","70","26","2.78%",null,null,null,null,null,this.div_mealToday.form);
            obj.set_taborder("6");
            obj.set_text("오후간식");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            this.div_mealToday.addChild(obj.name, obj);

            obj = new Static("sta_breVal","2.78%","97","70","26",null,null,null,null,null,null,this.div_mealToday.form);
            obj.set_taborder("7");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#3e8f2b");
            obj.set_textAlign("center");
            obj.set_text("-");
            this.div_mealToday.addChild(obj.name, obj);

            obj = new Static("sta_lunVal","21.30%","97","70","26",null,null,null,null,null,null,this.div_mealToday.form);
            obj.set_taborder("8");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#3e8f2b");
            obj.set_textAlign("center");
            obj.set_text("-");
            this.div_mealToday.addChild(obj.name, obj);

            obj = new Static("sta_dinVal","40.97%","97","70","26",null,null,null,null,null,null,this.div_mealToday.form);
            obj.set_taborder("9");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#3e8f2b");
            obj.set_textAlign("center");
            obj.set_text("-");
            this.div_mealToday.addChild(obj.name, obj);

            obj = new Static("sta_morSnackVal","61.11%","97","70","26",null,null,null,null,null,null,this.div_mealToday.form);
            obj.set_taborder("10");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#3e8f2b");
            obj.set_textAlign("center");
            obj.set_text("-");
            this.div_mealToday.addChild(obj.name, obj);

            obj = new Static("sta_aftSnackVal",null,"97","70","26","2.78%",null,null,null,null,null,this.div_mealToday.form);
            obj.set_taborder("11");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#3e8f2b");
            obj.set_textAlign("center");
            obj.set_text("-");
            this.div_mealToday.addChild(obj.name, obj);

            obj = new Static("sta_week","5.00%","310",null,"46","4.38%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2021.06.28(월)");
            obj.set_font("normal 700 16pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("center");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            obj.set_background("#8cdd75");
            obj.set_borderRadius("23px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_todayTitle","5%","20",null,"40","5.00%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("오늘 식사 현황");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","5.00%","365",null,null,"4.38%","4%",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_grin");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"일자&#13;&#10;(요일)\" background=\"#8cdd75\"/><Cell col=\"1\" colspan=\"3\" text=\"식사\" background=\"#8cdd75\" border=\"1px solid transparent,1px solid #ffffff,1px solid #ffffff\"/><Cell col=\"4\" colspan=\"2\" text=\"간식\" background=\"#8cdd75\" border=\"1px solid transparent,1px solid #ffffff,1px solid #ffffff\"/><Cell row=\"1\" col=\"1\" text=\"아침\" background=\"#8cdd75\"/><Cell row=\"1\" col=\"2\" text=\"점심\" background=\"#8cdd75\"/><Cell row=\"1\" col=\"3\" text=\"저녁\" background=\"#8cdd75\"/><Cell row=\"1\" col=\"4\" text=\"오전\" background=\"#8cdd75\"/><Cell row=\"1\" col=\"5\" text=\"오후\" background=\"#8cdd75\"/></Band><Band id=\"body\"><Cell text=\"bind:DATE\"/><Cell col=\"1\" combodisplaynulltext=\"X\" text=\"bind:BRE_QTY\" displaytype=\"combotext\" combodataset=\"ds_nu_meal_amt\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" combodisplaynulltype=\"nulltext\"/><Cell col=\"2\" text=\"bind:LUN_QTY\" displaytype=\"combotext\" combodisplaynulltext=\"X\" combodataset=\"ds_nu_meal_amt\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" combodisplaynulltype=\"nulltext\"/><Cell col=\"3\" text=\"bind:DIN_QTY\" displaytype=\"combotext\" combodisplaynulltext=\"X\" combodataset=\"ds_nu_meal_amt\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" combodisplaynulltype=\"nulltext\"/><Cell col=\"4\" text=\"bind:MOR_SNACK_QTY\" displaytype=\"combotext\" combodisplaynulltext=\"X\" combodataset=\"ds_nu_meal_amt\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" combodisplaynulltype=\"nulltext\"/><Cell col=\"5\" text=\"bind:AFT_SNACK_QTY\" displaytype=\"combotext\" combodisplaynulltext=\"X\" combodataset=\"ds_nu_meal_amt\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" combodisplaynulltype=\"nulltext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",480,768,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_mealToday.form.sta_breVal","text","ds_meal","BRE_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_mealToday.form.sta_lunVal","text","ds_meal","LUN_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_mealToday.form.sta_dinVal","text","ds_meal","DIN_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_mealToday.form.sta_morSnackVal","text","ds_meal","MOR_SNACK_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_mealToday.form.sta_aftSnackVal","text","ds_meal","AFT_SNACK_QTY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUC102QR.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUC102QR.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUC102QR.xfdl","lib::mpgm_com.xjs");
        this.registerScript("NUC102QR.xfdl", function() {
        /***********************************************************************
         * 화면ID    	: NUC102QR
         * 화면명   	: 식사
         * 화면설명 	: 모바일에서 입소자의 오늘 식사와 지난 주간 식사정보
        				  (식사량)를 조회하는 화면
         * 작성일    	: 2021-09-08
         * 작성자   	: 조기종
         * 수정이력 	: ↓↓↓↓↓↓↓
         ***********************************************************************
         *     	수정일     	수정자   	내용
         *
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
        this.NUC102QR_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e);

        	const today = Sct.Util.getToday();
        	const to = Sct.Util.addDate(today, -1);
        	const from = Sct.Util.addDate(to, -6);
        	const todayDdd = Sct.Util.getDayH(today, false);
        	const fromDay = Sct.Util.getDayH(from, false);
        	const toDay = Sct.Util.getDayH(to, false);

        	const todayStr = today.substr(0, 4) + "." + today.substr(4, 2) + "." + today.substr(6, 2) + "(" + todayDdd + ")";
        	const fromStr = from.substr(0, 4) + "." + from.substr(4, 2) + "." + from.substr(6, 2) + "(" + fromDay + ")";
        	const toStr = to.substr(0, 4) + "." + to.substr(4, 2) + "." + to.substr(6, 2) + "(" + toDay + ")";
        	const weekStr = fromStr + " ~ " + toStr;

        	this.div_mealToday.form.sta_mealToday.set_text(todayStr);
        	this.sta_week.set_text(weekStr);

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "COMPANY_CD", nexacro.getApplication().gds_mUserInfo.getColumn(0, "COMPANY_CD"));
        	this.ds_search.setColumn(0, "RES_ID", nexacro.getApplication().gds_mUserInfo.getColumn(0, "RES_ID"));
        	this.ds_search.setColumn(0, "DATE", today);
        	this.ds_search.setColumn(0, "FROM", from);
        	this.ds_search.setColumn(0, "TO", to);

        	this.fn_search();
        };

        // 모바일 디바이스 버튼 이벤트
        this.NUC102QR_ondevicebuttonup = function(obj,e)
        {
        	if(e.button == 2)
        	{
        		nexacro.getApplication().av_topFrame.form.btn_back.click();
        	}
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
        	if(!this.fn_search_pre()) return;

        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_search input2=ds_search";
        	var outDatasets = "ds_meal=output1 ds_list=output2";
        	var argument = "method=getList "
        		+ "sqlId='NUC102QR.NUC102QR_DS_MEAL_S NUC102QR.NUC102QR_DS_LIST_S '";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			if(this.ds_meal.rowcount < 1)
        			{
        				this.div_mealToday.form.sta_breVal.set_text('X');
        				this.div_mealToday.form.sta_lunVal.set_text('X');
        				this.div_mealToday.form.sta_dinVal.set_text('X');
        				this.div_mealToday.form.sta_morSnackVal.set_text('X');
        				this.div_mealToday.form.sta_aftSnackVal.set_text('X');
        			}
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
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.addEventHandler("onload",this.NUC102QR_onload,this);
            this.addEventHandler("ondevicebuttonup",this.NUC102QR_ondevicebuttonup,this);
        };
        this.loadIncludeScript("NUC102QR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
