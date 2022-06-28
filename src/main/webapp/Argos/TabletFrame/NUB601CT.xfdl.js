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
            this.set_titletext("모니터링");
            this.set_background("#f4f9fc");
            if (Form == this.constructor)
            {
                this._setFormPosition(1180,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"DIAPER_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"P1\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"BED_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DIAPER_POLLUTION\" type=\"STRING\" size=\"256\"/><Column id=\"CONNECTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"DIAPER_BATTERY\" type=\"STRING\" size=\"256\"/><Column id=\"BAND_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"BAND_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SLEEP_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"REM_SLEEP\" type=\"STRING\" size=\"256\"/><Column id=\"NREM_SLEEP\" type=\"STRING\" size=\"256\"/><Column id=\"PULSE\" type=\"STRING\" size=\"256\"/><Column id=\"BAND_BATTERY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DIAPER_STAT\">3</Col><Col id=\"P1\">홍길순</Col><Col id=\"ROOM\">101호</Col><Col id=\"BED_ID\">4</Col><Col id=\"CONNECTION\">-</Col><Col id=\"DIAPER_POLLUTION\">100</Col><Col id=\"USE_TIME\">10일 11:00</Col><Col id=\"DIAPER_BATTERY\">100</Col><Col id=\"BAND_STAT\">1</Col><Col id=\"BAND_ID\">30</Col><Col id=\"SLEEP_TIME\">8시간 03분</Col><Col id=\"REM_SLEEP\">2시간 13분</Col><Col id=\"NREM_SLEEP\">5시간 50분</Col><Col id=\"PULSE\">99</Col><Col id=\"BAND_BATTERY\">87</Col></Row><Row><Col id=\"DIAPER_STAT\">2</Col><Col id=\"P1\">홍길동</Col><Col id=\"ROOM\">105호</Col><Col id=\"BED_ID\">2</Col><Col id=\"CONNECTION\">연결오류</Col><Col id=\"DIAPER_POLLUTION\">90</Col><Col id=\"USE_TIME\">12일 10:59</Col><Col id=\"DIAPER_BATTERY\">90</Col><Col id=\"BAND_STAT\">1</Col><Col id=\"BAND_ID\">62</Col><Col id=\"SLEEP_TIME\">10시간 00분</Col><Col id=\"REM_SLEEP\">3시간 20분</Col><Col id=\"NREM_SLEEP\">5시간50분</Col><Col id=\"PULSE\">95</Col><Col id=\"BAND_BATTERY\">61</Col></Row><Row><Col id=\"DIAPER_STAT\">2</Col><Col id=\"P1\">김인수</Col><Col id=\"ROOM\">303호</Col><Col id=\"BED_ID\">3</Col><Col id=\"CONNECTION\">이탈</Col><Col id=\"DIAPER_POLLUTION\">60</Col><Col id=\"DIAPER_BATTERY\">80</Col><Col id=\"BAND_STAT\">1</Col><Col id=\"BAND_ID\">77</Col><Col id=\"SLEEP_TIME\">6시간 51분</Col><Col id=\"REM_SLEEP\">1시간 30분</Col><Col id=\"NREM_SLEEP\">5시간 50분</Col><Col id=\"PULSE\">94</Col><Col id=\"USE_TIME\">10일 10:30</Col><Col id=\"BAND_BATTERY\">55</Col></Row><Row><Col id=\"DIAPER_STAT\">2</Col><Col id=\"P1\">김순이</Col><Col id=\"ROOM\">210호</Col><Col id=\"BED_ID\">4</Col><Col id=\"CONNECTION\">이탈</Col><Col id=\"DIAPER_BATTERY\">70</Col><Col id=\"BAND_STAT\">2</Col><Col id=\"BAND_ID\">1</Col><Col id=\"SLEEP_TIME\">7시간 13분</Col><Col id=\"REM_SLEEP\">2시간 00분</Col><Col id=\"NREM_SLEEP\">5시간 50분</Col><Col id=\"PULSE\">120</Col><Col id=\"DIAPER_POLLUTION\">35</Col><Col id=\"USE_TIME\">9일 10:00</Col><Col id=\"BAND_BATTERY\">23</Col></Row><Row><Col id=\"DIAPER_STAT\">1</Col><Col id=\"P1\">박인수</Col><Col id=\"ROOM\">106호</Col><Col id=\"BED_ID\">2</Col><Col id=\"CONNECTION\">-</Col><Col id=\"DIAPER_BATTERY\">60</Col><Col id=\"BAND_STAT\">2</Col><Col id=\"BAND_ID\">45</Col><Col id=\"SLEEP_TIME\">8시간 32분</Col><Col id=\"REM_SLEEP\">2시간 50분</Col><Col id=\"NREM_SLEEP\">5시간 50분</Col><Col id=\"PULSE\">110</Col><Col id=\"DIAPER_POLLUTION\">25</Col><Col id=\"USE_TIME\">9일 12:05</Col><Col id=\"BAND_BATTERY\">37</Col></Row><Row><Col id=\"DIAPER_STAT\">1</Col><Col id=\"P1\">박길동</Col><Col id=\"ROOM\">102호</Col><Col id=\"BED_ID\">1</Col><Col id=\"CONNECTION\">-</Col><Col id=\"DIAPER_BATTERY\">5</Col><Col id=\"BAND_STAT\">1</Col><Col id=\"BAND_ID\">55</Col><Col id=\"SLEEP_TIME\">6시간 12분</Col><Col id=\"REM_SLEEP\">1시간 05분</Col><Col id=\"NREM_SLEEP\">5시간 50분</Col><Col id=\"PULSE\">85</Col><Col id=\"DIAPER_POLLUTION\">15</Col><Col id=\"USE_TIME\">12일 7:05</Col><Col id=\"BAND_BATTERY\">31</Col></Row><Row><Col id=\"DIAPER_STAT\">1</Col><Col id=\"P1\">이인수</Col><Col id=\"ROOM\">107호</Col><Col id=\"BED_ID\">3</Col><Col id=\"CONNECTION\">-</Col><Col id=\"DIAPER_BATTERY\">40</Col><Col id=\"BAND_STAT\">1</Col><Col id=\"BAND_ID\">20</Col><Col id=\"SLEEP_TIME\">7시간 05분</Col><Col id=\"REM_SLEEP\">2시간 07분</Col><Col id=\"NREM_SLEEP\">5시간 50분</Col><Col id=\"PULSE\">70</Col><Col id=\"DIAPER_POLLUTION\">10</Col><Col id=\"USE_TIME\">10일 11:08</Col><Col id=\"BAND_BATTERY\">100</Col></Row><Row><Col id=\"DIAPER_STAT\">1</Col><Col id=\"P1\">김철수</Col><Col id=\"ROOM\">104호</Col><Col id=\"BED_ID\">1</Col><Col id=\"CONNECTION\">-</Col><Col id=\"DIAPER_BATTERY\">0</Col><Col id=\"BAND_STAT\">1</Col><Col id=\"BAND_ID\">10</Col><Col id=\"SLEEP_TIME\">9시간 10분</Col><Col id=\"REM_SLEEP\">3시간 09분</Col><Col id=\"NREM_SLEEP\">5시간 50분</Col><Col id=\"PULSE\">70</Col><Col id=\"DIAPER_POLLUTION\">0</Col><Col id=\"USE_TIME\">5일 12:00</Col><Col id=\"BAND_BATTERY\">45</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_menuTitle","30","10",null,"30","3%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("메뉴명");
            obj.set_cssclass("sta_tMenuTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_main","2.46%","60",null,null,"3.39%","5%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_page");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","2.7%","30",null,"40","2.7%",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("cmb_room","0","0","120","40",null,null,null,null,null,null,this.div_main.form.div_search.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_location");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_itemheight("36");
            obj.set_text("Combo00");
            this.div_main.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSearch","130","0","80","40",null,null,null,null,null,null,this.div_main.form.div_search.form);
            obj.set_taborder("1");
            obj.set_text("검색");
            obj.set_cssclass("btn_tSearch");
            this.div_main.form.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","2.7%","85",null,null,"2.7%","4%",null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_room","0","11","50","25",null,null,null,null,null,null,this.div_main.form.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("장소 :");
            obj.set_cssclass("sta_tTxt1");
            this.div_main.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_room_value","50","11","100","25",null,null,null,null,null,null,this.div_main.form.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("생활실");
            obj.set_cssclass("sta_tTxt2");
            this.div_main.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_time","120","11","100","25",null,null,null,null,null,null,this.div_main.form.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("| 현재시간 :");
            obj.set_cssclass("sta_tTxt1");
            this.div_main.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_time_value","220","11","180","25",null,null,null,null,null,null,this.div_main.form.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("2021.01.31 12:00");
            obj.set_cssclass("sta_tTxt2");
            this.div_main.form.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_monitor","0%","54",null,null,"0%","0%",null,null,null,null,this.div_main.form.div_cont.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_list");
            obj.set_cssclass("grd_Monitor");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"45\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"70\"/><Column size=\"45\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"70\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell colspan=\"7\" text=\"기저귀 모니터링\" background=\"#d9eaf3\"/><Cell col=\"7\" colspan=\"7\" text=\"수면 모니터링\" background=\"#d5e6ec\"/><Cell row=\"1\" text=\"순번\" background=\"#d9eaf3\"/><Cell row=\"1\" col=\"1\" text=\"상태\" background=\"#d9eaf3\"/><Cell row=\"1\" col=\"2\" text=\"입소자\" background=\"#d9eaf3\"/><Cell row=\"1\" col=\"3\" text=\"호실/침상ID\" background=\"#d9eaf3\"/><Cell row=\"1\" col=\"4\" text=\"기저귀상태\" background=\"#d9eaf3\"/><Cell row=\"1\" col=\"5\" text=\"사용기간\" background=\"#d9eaf3\"/><Cell row=\"1\" col=\"6\" text=\"배터리\" background=\"#d9eaf3\"/><Cell row=\"1\" col=\"7\" text=\"상태\" background=\"#d5e6ec\"/><Cell row=\"1\" col=\"8\" text=\"밴드ID\" background=\"#d5e6ec\"/><Cell row=\"1\" col=\"9\" text=\"총수면시간\" background=\"#d5e6ec\"/><Cell row=\"1\" col=\"10\" text=\"렘수면\" background=\"#d5e6ec\"/><Cell row=\"1\" col=\"11\" text=\"비렘수면\" background=\"#d5e6ec\"/><Cell row=\"1\" col=\"12\" text=\"맥박\" background=\"#d5e6ec\"/><Cell row=\"1\" col=\"13\" text=\"배터리\" background=\"#d5e6ec\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" displaytype=\"imagecontrol\"/><Cell col=\"2\" text=\"bind:P1\"/><Cell col=\"3\" expr=\"dataset.getColumn(currow, &quot;ROOM&quot;) + &quot;/&quot; + dataset.getColumn(currow, &quot;BED_ID&quot;)\"/><Cell col=\"4\" text=\"bind:CONNECTION\" font=\"normal normal 12pt/normal &quot;Noto Sans CJK KR Medium&quot;\"/><Cell col=\"5\" text=\"bind:USE_TIME\" font=\"normal normal 12pt/normal &quot;Noto Sans CJK KR Medium&quot;\"/><Cell col=\"6\" text=\"bind:DIAPER_BATTERY\" expr=\"dataset.getColumn(currow, &quot;DIAPER_BATTERY&quot;) + &quot;%&quot;\"/><Cell col=\"7\" displaytype=\"imagecontrol\"/><Cell col=\"8\" text=\"bind:BAND_ID\"/><Cell col=\"9\" text=\"bind:SLEEP_TIME\"/><Cell col=\"10\" text=\"bind:REM_SLEEP\"/><Cell col=\"11\" text=\"bind:NREM_SLEEP\"/><Cell col=\"12\" text=\"bind:PULSE\"/><Cell col=\"13\" expr=\"dataset.getColumn(currow, &quot;BAND_BATTERY&quot;) + &quot;%&quot;\" text=\"bind:BAND_BATTERY\"/></Band></Format></Formats>");
            this.div_main.form.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Tablet",1180,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_main.form.div_search.form.cmb_room","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUB601CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUB601CT.xfdl","lib::pgm_com.xjs");
        this.registerScript("NUB601CT.xfdl", function() {
        /***********************************************************************
         * 화면ID    : CMA001CT
         * 화면명   :
         * 화면설명 :
         * 작성일    : 2020-07-08
         * 작성자   :  배영걸
         * 수정이력 :
         ***********************************************************************
         *     	수정일     	수정자   	내용
         *		2020-07-08		배영걸		1차수정
         ***********************************************************************
         ***********************************************************************
         */

        /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_currentDS = this.ds_list;
        this.fv_currentGrid = this.div_main.form.div_cont.form.grd_monitor;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e, false);

        	this.sta_menuTitle.set_text(this.getOwnerFrame().arguments["menuTitle"]);

        	this.ds_search.setColumn(0, "COMPANY_CD", nexacro.getApplication().gv_company);
        	this.ds_search.setColumn(0, "SERVICE_TP", nexacro.getApplication().gv_serviceTp);
        	this.ds_search.setColumn(0, "APPLICATION_TP", nexacro.getApplication().gv_applicationTp);
        	this.ds_search.setColumn(0, "LOCATION", nexacro.getApplication().gds_taCurRes.getColumn(0, "LOCATION"));

        	this.fn_setComboDs(obj);

        	const todayString = Sct.Util.getToday();
        	const todayFormat = Sct.Util.getDateFormat(todayString, ".");
        	const hh = Sct.Util.getHour();
        	const mm = Sct.Util.getMin();
        	const time = hh + ":" + mm;
        	const curTime = todayFormat + " " + time;

        	this.div_main.form.div_cont.form.sta_time_value.set_text(curTime);

        	this.TEST5_initGrid(this.fv_currentGrid);
        };

        this.TEST5_initGrid = function(grid)
        {
        	const diaSIdx = grid.getBindCellIndex("body", "DIAPER_STAT");
        	const conIdx = grid.getBindCellIndex("body", "CONNECTION");
        	const diaBaIdx = grid.getBindCellIndex("body", "DIAPER_BATTERY");
        	const bandBaIdx = grid.getBindCellIndex("body", "BAND_BATTERY");

        	const diaStat = "dataset.getColumn(currow, 'DIAPER_STAT') == 1 ? 'theme://images/ico_diaper_on.png' : "
        				   + "dataset.getColumn(currow, 'DIAPER_STAT') == 2 ? 'theme://images/ico_diaper_off.png' : "
        				   + "'theme://images/ico_diaper_alert.png'";

        	const diaPoll = "expr:dataset.getColumn(currow, 'DIAPER_POLLUTION') == 0 ? 'dPollution_0' : "
        				  + "dataset.getColumn(currow, 'DIAPER_POLLUTION') == 100 ? 'dPollution_100' : "
        				  + "dataset.getColumn(currow, 'DIAPER_POLLUTION') <= 10 ? 'dPollution_10' : "
        				  + "dataset.getColumn(currow, 'DIAPER_POLLUTION') <= 20 ? 'dPollution_20' : "
        				  + "dataset.getColumn(currow, 'DIAPER_POLLUTION') <= 30 ? 'dPollution_30' : "
        				  + "dataset.getColumn(currow, 'DIAPER_POLLUTION') <= 40 ? 'dPollution_40' : "
        				  + "dataset.getColumn(currow, 'DIAPER_POLLUTION') <= 50 ? 'dPollution_50' : "
        				  + "dataset.getColumn(currow, 'DIAPER_POLLUTION') <= 60 ? 'dPollution_60' : "
        				  + "dataset.getColumn(currow, 'DIAPER_POLLUTION') <= 70 ? 'dPollution_70' : "
        				  + "dataset.getColumn(currow, 'DIAPER_POLLUTION') <= 80 ? 'dPollution_80' : "
        				  + "'dPollution_90'";

        	const diaBattery = "expr:dataset.getColumn(currow, 'DIAPER_BATTERY') == 100 ? 'battery100' : "
        					  + "dataset.getColumn(currow, 'DIAPER_BATTERY') == 0 ? 'battery0' : "
        					  + "dataset.getColumn(currow, 'DIAPER_BATTERY') <= 10 ? 'battery10' : "
        					  + "dataset.getColumn(currow, 'DIAPER_BATTERY') <= 20 ? 'battery20' : "
        					  + "dataset.getColumn(currow, 'DIAPER_BATTERY') <= 30 ? 'battery30' : "
        					  + "dataset.getColumn(currow, 'DIAPER_BATTERY') <= 40 ? 'battery40' : "
        					  + "dataset.getColumn(currow, 'DIAPER_BATTERY') <= 50 ? 'battery50' : "
        					  + "dataset.getColumn(currow, 'DIAPER_BATTERY') <= 60 ? 'battery60' : "
        					  + "dataset.getColumn(currow, 'DIAPER_BATTERY') <= 70 ? 'battery70' : "
        					  + "dataset.getColumn(currow, 'DIAPER_BATTERY') <= 80 ? 'battery80' : "
        					  + "'battery90'";

        	const bandStat = "dataset.getColumn(currow, 'BAND_STAT') == 1 ? 'theme://images/ico_pulse_on.png' : "
        				   + "'theme://images/ico_pulse_alert.png'";

        	const bandBattery = "expr:dataset.getColumn(currow, 'BAND_BATTERY') == 100 ? 'battery100' : "
        					  + "dataset.getColumn(currow, 'BAND_BATTERY') == 0 ? 'battery0' : "
        					  + "dataset.getColumn(currow, 'BAND_BATTERY') <= 10 ? 'battery10' : "
        					  + "dataset.getColumn(currow, 'BAND_BATTERY') <= 20 ? 'battery20' : "
        					  + "dataset.getColumn(currow, 'BAND_BATTERY') <= 30 ? 'battery30' : "
        					  + "dataset.getColumn(currow, 'BAND_BATTERY') <= 40 ? 'battery40' : "
        					  + "dataset.getColumn(currow, 'BAND_BATTERY') <= 50 ? 'battery50' : "
        					  + "dataset.getColumn(currow, 'BAND_BATTERY') <= 60 ? 'battery60' : "
        					  + "dataset.getColumn(currow, 'BAND_BATTERY') <= 70 ? 'battery70' : "
        					  + "dataset.getColumn(currow, 'BAND_BATTERY') <= 80 ? 'battery80' : "
        					  + "'battery90'";

        	grid.setCellProperty("body", 1, "expr", diaStat);
        	grid.setCellProperty("body", conIdx, "cssclass", diaPoll);
        	grid.setCellProperty("body", diaBaIdx, "cssclass", diaBattery);
        	grid.setCellProperty("body", 7, "expr", bandStat);
        	grid.setCellProperty("body", bandBaIdx, "cssclass", bandBattery);
        };

        this.fn_setComboDs = function(obj)
        {
           const comboDsParamArr = [{ outDsName : "ds_location", sqlId : "TABLET_COMMON.TCOMMON_DS_LOCATION_S", param : this.ds_search}];
           this.gfn_setComboDs(obj, comboDsParamArr);
        }

        /***********************************************************************
         * Common Button Functions
         ************************************************************************/
        // 검색 버튼
        this.fn_searchBtn = function ()
        {
        	//this.fn_search();
        };

        // 저장 버튼
        this.fn_saveBtn = function ()
        {
        	//this.fn_save();
        };

        //삭제 버튼
        this.fn_deleteBtn = function ()
        {
        	//this.fn_delete();
        };
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	return true;
        };

        // 저장 전 validation
        this.fn_save_pre = function ()
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
        	var inDatasets = "input1=ds_search";
        	var outDatasets = "ds_head=output1";
        	var argument = "method=getList "
        		+ "sqlId=CMA001CT.CMA001CT_DS_HEAD_S ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
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

        // 콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{

        		}
        		else if(strSvcID == "save" || strSvcID == "delete")
        		{
        			//this.fn_search();
        		}
        	}
        	else
        	{

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
            this.sta_menuTitle.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_main.form.div_search.form.btn_tSearch.addEventHandler("onclick",this.fn_searchBtn,this);
            this.ds_search.addEventHandler("onrowposchanged",this.ds_notice_onrowposchanged,this);
        };
        this.loadIncludeScript("NUB601CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
