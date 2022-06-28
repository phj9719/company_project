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
            this.set_titletext("기저귀 로그 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_head", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"SEX\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DIA_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MAC_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"BLE_RSSI\" type=\"STRING\" size=\"256\"/><Column id=\"FALL\" type=\"STRING\" size=\"256\"/><Column id=\"HUMI\" type=\"STRING\" size=\"256\"/><Column id=\"SLEEP_POSTURE\" type=\"STRING\" size=\"256\"/><Column id=\"SLEEP_LEFT_SIDE\" type=\"STRING\" size=\"256\"/><Column id=\"SLEEP_UP_SIDE\" type=\"STRING\" size=\"256\"/><Column id=\"SLEEP_RIGHT_SIDE\" type=\"STRING\" size=\"256\"/><Column id=\"SLEEP_UPSIDE_DOWN\" type=\"STRING\" size=\"256\"/><Column id=\"INVERTED\" type=\"STRING\" size=\"256\"/><Column id=\"UPRIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"BAT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"INACTIVITY_MONITOR\" type=\"STRING\" size=\"256\"/><Column id=\"CONN_ST\" type=\"STRING\" size=\"256\"/><Column id=\"X_COOR\" type=\"STRING\" size=\"256\"/><Column id=\"Y_COOR\" type=\"STRING\" size=\"256\"/><Column id=\"Z_COOR\" type=\"STRING\" size=\"256\"/><Column id=\"IR_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DT\" type=\"STRING\" size=\"256\"/><Column id=\"HOUR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_company_cd_s", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_log_hour", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","120",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_head","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_head");
            obj.set_autoenter("select");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"법인\"/><Cell col=\"2\" text=\"입소자성명\"/><Cell col=\"3\" text=\"생년월일\"/><Cell col=\"4\" text=\"나이\"/><Cell col=\"5\" text=\"성별\"/><Cell col=\"6\" text=\"입소자코드\"/><Cell col=\"7\" text=\"시간\"/><Cell col=\"8\" text=\"맥주소\"/><Cell col=\"9\" text=\"수신강도\"/><Cell col=\"10\" text=\"낙상여부\"/><Cell col=\"11\" text=\"활동중여부\"/><Cell col=\"12\" text=\"연결상태\"/><Cell col=\"13\" text=\"X좌표\"/><Cell col=\"14\" text=\"Y좌표\"/><Cell col=\"15\" text=\"Z좌표\"/><Cell col=\"16\" text=\"습도\"/><Cell col=\"17\" text=\"배터리양\"/><Cell col=\"18\" text=\"섭씨온도\"/><Cell col=\"19\" text=\"자세\"/><Cell col=\"20\" text=\"왼쪽으로 누움\"/><Cell col=\"21\" text=\"오른쪽으로 누움\"/><Cell col=\"22\" text=\"똑바로 누움\"/><Cell col=\"23\" text=\"엎드려 누움\"/><Cell col=\"24\" text=\"물구나무\"/><Cell col=\"25\" text=\"똑바로 섬\"/><Cell col=\"26\" text=\"기기이름\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:COMPANY_NM\"/><Cell col=\"2\" text=\"bind:NAME\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:BIRTHDAY\"/><Cell col=\"4\" text=\"bind:AGE\"/><Cell col=\"5\" text=\"bind:SEX\"/><Cell col=\"6\" text=\"bind:RES_ID\"/><Cell col=\"7\" text=\"bind:DIA_TIME\"/><Cell col=\"8\" text=\"bind:MAC_ADD\"/><Cell col=\"9\" text=\"bind:BLE_RSSI\"/><Cell col=\"10\" text=\"bind:FALL\"/><Cell col=\"11\" text=\"bind:INACTIVITY_MONITOR\"/><Cell col=\"12\" text=\"bind:CONN_ST\"/><Cell col=\"13\" text=\"bind:X_COOR\"/><Cell col=\"14\" text=\"bind:Y_COOR\"/><Cell col=\"15\" text=\"bind:Z_COOR\"/><Cell col=\"16\" text=\"bind:HUMI\"/><Cell col=\"17\" text=\"bind:BAT_QTY\"/><Cell col=\"18\" text=\"bind:TEMP_C\"/><Cell col=\"19\" text=\"bind:SLEEP_POSTURE\"/><Cell col=\"20\" text=\"bind:SLEEP_LEFT_SIDE\"/><Cell col=\"21\" text=\"bind:SLEEP_RIGHT_SIDE\"/><Cell col=\"22\" text=\"bind:SLEEP_UP_SIDE\"/><Cell col=\"23\" text=\"bind:SLEEP_UPSIDE_DOWN\"/><Cell col=\"24\" text=\"bind:INVERTED\"/><Cell col=\"25\" text=\"bind:UPRIGHT\"/><Cell col=\"26\" text=\"bind:IR_NAME\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("statc_divcont_title","0","7","200","22",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("기저귀 로그 조회");
            obj.set_cssclass("lb01");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static60","0","-1","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("lb01");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","22",null,"74","0.00%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("s01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dt","265","25","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("일자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_dt","360","25","110","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_company_nm","15","25","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("법인명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_company","110","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_company_cd_s");
            obj.set_codecolumn("COMPANY_CD");
            obj.set_datacolumn("COMPANY_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_cssclass("essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_hour","505","25","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("시간");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_hour","600","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_nu_log_hour");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_cssclass("essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_sMove","44.87%","96",null,"16","44.87%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("url(\'imagerc::search_open.png\') no-repeat transparent");
            obj.set_border("0px solid");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1250,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item18","div_cont.cal_validitystart","value","ds_head","VALID_PERIOD_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.cal_passwdExpire","value","ds_head","VALID_PASSWD_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.cal_dt","value","ds_search","DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cmb_company","value","ds_search","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cmb_hour","value","ds_search","HOUR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUA013QR.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUA013QR.xfdl","lib::pgm_com.xjs");
        this.registerScript("NUA013QR.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: NUA013QR
         * 화면명   	: 기저귀 로그 조회
         * 화면설명 	:
         * 작성일   	: 2021-11-04 15:35
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
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        var fv_Company = nexacro.getApplication().gds_userInfo.getColumn(0,"COMPANY_CD");
        var fv_ServiceTp = nexacro.getApplication().gds_userInfo.getColumn(0,"SERVICE_TP");
        var fv_appTp = nexacro.getApplication().gv_applicationTp;
        this.fv_currentDS = this.ds_head;
        this.fv_currentGrid = this.div_cont.form.grd_head;
        this.pgmId = nexacro.getApplication().gv_curWinKey;
        this.fv_saveRefNo = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e, false);

        	this.ds_search.setColumn(0,"COMPANY_CD",fv_Company);
        	this.ds_search.setColumn(0, "DT", Sct.Util.getToday());

        	this.fn_setComboDs(obj);

        	this.ds_head.set_enableevent(false);
        	this.div_cont.form.grd_head.set_enableevent(false);
        	this.div_cont.form.grd_head.set_enableredraw(false);
        	//this.fn_search();

        	// 오픈시 검색조건 첫 항목에 커서 이동
        	this.div_search.form.cmb_company.setFocus();
        };

        this.fn_setComboDs = function(obj)
        {
           const comboDsParamArr = [
        							{ outDsName : "ds_company_cd_s", sqlId : "CMA002CT.CMA002CT_COMPANY_CD_S",param : "", bEmptyRow : true}
                            ];
           this.gfn_setComboDs(obj, comboDsParamArr);
        }
        /***********************************************************************
         * Common Button Functions
         ************************************************************************/
        // 조회 버튼
        this.fn_searchBtn = function ()
        {
        	this.ds_head.set_enableevent(false);
        	this.div_cont.form.grd_head.set_enableevent(false);
        	this.div_cont.form.grd_head.set_enableredraw(false);

        	this.fn_search();

        };

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
             //조회전 그리드에 변경된 데이터가 있을경우 ..
             if(Sct.Grid.isUpdate(this.ds_head)
        		//|| Sct.Grid.isUpdate(this.ds_schdl)
        		){
                 //메세지로 변경된 데이터 여부와 상관없이 조회 할지 확인
                 if(!Sct.confirm(this,"000171","")){
                     return false;
                 }
             }

             //조회조건 필수여부확인
        	 if(!this.gfn_findSnull(this.div_search)) return false;
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

        	const hRow = this.ds_nu_log_hour.findRow("CMCD", this.ds_search.getColumn(0, "HOUR"));
        	const shour = this.ds_nu_log_hour.getColumn(hRow, "STR1");
        	const ehour = this.ds_nu_log_hour.getColumn(hRow, "STR2");

        	const svcId = "search";
        	const params = "/NUA013QRController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_head=output1";
        	const argument = "method=select "
        		+ "sqlId=NUA013QR.NUA013QR_DS_HEAD_S "
        		+ "COMPANY_CD=" + this.ds_search.getColumn(0, "COMPANY_CD") + " "
        		+ "DT=" + this.ds_search.getColumn(0, "DT") + " "
        		+ "S_HOUR=" + shour + " "
        		+ "E_HOUR=" + ehour + " ";

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
        			this.div_cont.form.grd_head.set_enableredraw(true);
        			this.div_cont.form.grd_head.set_enableevent(true);
        			this.ds_head.set_enableevent(true);

        			const count = this.ds_head.rowcount;
        			Sct.alert(this, "000175", count + "|");
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
         * Popup Functions
         ***********************************************************************/
        /***********************************************************************
         * FILE
         ***********************************************************************/

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.div_cont.form.grd_head.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.statc_divcont_title.addEventHandler("onclick",this.div_cont_statc_divcont_title_onclick,this);
            this.div_search.form.sta_company_nm.addEventHandler("onclick",this.div_search_sta_doc_no_onclick,this);
            this.div_search.form.cmb_company.addEventHandler("onitemchanged",this.div_search_cmb_company_onitemchanged,this);
            this.div_search.form.sta_hour.addEventHandler("onclick",this.div_search_sta_doc_no_onclick,this);
            this.btn_sMove.addEventHandler("onclick",this.search_reset,this);
            this.btn_sMove.addEventHandler("ondrag",this.search_resize,this);
            this.ds_head.addEventHandler("oncolumnchanged",this.ds_head_oncolumnchanged,this);
            this.ds_head.addEventHandler("onrowposchanged",this.ds_head_onrowposchanged,this);
        };
        this.loadIncludeScript("NUA013QR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
