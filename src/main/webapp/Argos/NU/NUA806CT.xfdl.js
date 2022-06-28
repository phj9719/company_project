(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUA806CT");
            this.set_titletext("낙상이력관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"CLEAR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_TP\" type=\"STRING\" size=\"256\"/><Column id=\"UES_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_use_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DIA_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"MAC_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"MAC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"X_COOR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Y_COOR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Z_COOR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONN_ST\" type=\"STRING\" size=\"256\"/><Column id=\"HUMI\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BAT_QTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TEMP_C\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"POSTURE\" type=\"STRING\" size=\"256\"/><Column id=\"FALL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ACT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BLE_RSSI\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"IOT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FALL_TP\" type=\"STRING\" size=\"256\"/><Column id=\"FALL_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"CLEAR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"CLEAR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"MINUTE\" type=\"STRING\" size=\"256\"/><Column id=\"CLEAR_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_fall_event_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location_all", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_TP\" type=\"STRING\" size=\"256\"/><Column id=\"UES_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_manager", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_hour", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_minute", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","120",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_readonly("false");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"400\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell expandchar=\"status\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"낙상일시\"/><Cell col=\"3\" text=\"입소자성명\"/><Cell col=\"4\" text=\"층\"/><Cell col=\"5\" text=\"생활실\"/><Cell col=\"6\" text=\"낙상유형\" cssclass=\"CellEssential\"/><Cell col=\"7\" text=\"낙상사유 및 조치\"/><Cell col=\"8\" text=\"처리자\"/><Cell col=\"9\" text=\"낙상처리여부\"/><Cell col=\"10\" colspan=\"3\" text=\"처리일시\"/><Cell col=\"13\" text=\"수정자명\"/><Cell col=\"14\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" expr=\"currow + 1\"/><Cell col=\"2\" text=\"bind:DIA_TIME\" displaytype=\"date\" expandchar=\"missff3\"/><Cell col=\"3\" text=\"bind:NAME\"/><Cell col=\"4\" text=\"bind:AREA\" combocodecol=\"ARE_CD\" combodatacol=\"ARE_NM\" combodataset=\"ds_area\" displaytype=\"combotext\"/><Cell col=\"5\" text=\"bind:LOCATION\" combocodecol=\"LOC_CD\" combodatacol=\"LOC_NM\" combodataset=\"ds_location_all\" displaytype=\"combotext\"/><Cell col=\"6\" text=\"bind:FALL_TP\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"ds_nu_fall_event_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"7\" text=\"bind:FALL_DESC\" edittype=\"textarea\" textareaacceptsenter=\"true\" textareaautoselect=\"true\" displaytype=\"textareacontrol\"/><Cell col=\"8\" text=\"bind:MANAGER_ID\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"ds_manager\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"9\" text=\"bind:CLEAR_YN\" combodataset=\"ds_cm_use_yn\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" displaytype=\"combotext\"/><Cell col=\"10\" displaytype=\"calendarcontrol\" edittype=\"date\" text=\"bind:CLEAR_DATE\"/><Cell col=\"11\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:HOUR\" combodataset=\"ds_nu_hour\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"12\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:MINUTE\" combodataset=\"ds_nu_minute\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"13\" text=\"bind:MOD_USER_NM\"/><Cell col=\"14\" displaytype=\"date\" text=\"bind:MOD_DT\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("statc_divcont_title","0","7","200","22",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("낙상이력조회");
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

            obj = new Static("sta_dt_to","5","13","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_text("일자");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_dt_from","140","13","110","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static26","254","13","16","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.set_font("8pt \"Malgun Gothic\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_dt_to","265","13","110","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_dt_from","5","13","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("일자");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_clear_yn","45","41","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("낙상처리여부");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_clear_yn","140","41","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_cm_use_yn");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_area","390","13","60","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("층");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_area","460","13","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_datacolumn("ARE_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_area");
            obj.set_codecolumn("ARE_CD");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_location","610","13","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("생활실");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","710","13","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_codecolumn("LOC_CD");
            obj.set_datacolumn("LOC_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_location");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_name","850","13","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("입소자성명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_name","950","13","110","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_res_pp","1066","13","25","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_background("url(\'imagerc::btn_WF_SearchSmall_P.png\') no-repeat rgba(255,255,255,1)");
            obj.set_tabstop("false");
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
            obj = new BindItem("item0","div_search.form.cal_dt_from","value","ds_search","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_dt_to","value","ds_search","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.cmb_clear_yn","value","ds_search","CLEAR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cmb_area","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cmb_location","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.edt_name","value","ds_search","NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUA806CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUA806CT.xfdl","lib::pgm_com.xjs");
        this.registerScript("NUA806CT.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: NUA806CT
         * 화면명   	: 낙상이력관리
         * 화면설명 	: 낙상관련 처리를 하는 화면
         * 작성일   	: 2021-08-27 14:00
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
        var fv_Company = nexacro.getApplication().gds_userInfo.getColumn(0,"COMPANY_CD");
        var fv_ServiceTp = nexacro.getApplication().gds_userInfo.getColumn(0,"SERVICE_TP");
        var fv_appTp = nexacro.getApplication().gv_applicationTp;

        this.fv_currentDS = this.ds_list;
        this.fv_currentGrid = this.div_cont.form.grd_list;
        this.fv_saveRefNo = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.NUA806CT_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 검색조건 초기화
        	this.ds_search.setColumn(0, "COMPANY_CD", fv_Company);
        	this.ds_search.setColumn(0, "SERVICE_TP", fv_ServiceTp);
        	this.ds_search.setColumn(0, "APPLICATION_TP", fv_appTp);
        	this.ds_search.setColumn(0, "DT_FROM", Sct.Util.getFirstDay());
        	this.ds_search.setColumn(0, "DT_TO", Sct.Util.getToday());
        	this.ds_search.setColumn(0, "CLEAR_YN", "N");

        	// rowTypeValidation 설정
        	const dsArr = ["ds_list"];
        	this.gfn_rowTypeValidationDs(dsArr);

        	// 콤보데이터 세팅
        	this.fn_setComboDs(obj);

        	// 오픈시 전체 조회
        	this.fn_search();

        	// 오픈시 검색조건 첫 항목에 커서 이동
        	this.div_search.form.cal_dt_from.setFocus();
        };

        // 콤보데이터 세팅 함수
        this.fn_setComboDs = function(obj)
        {
             const comboDsParamArr = [
        							{ outDsName : "ds_manager", sqlId : "NUA806CT.NUA806CT_DS_MANAGER_S",param : this.ds_search, bEmptyRow : true}
        						  , { outDsName : "ds_area", sqlId : "NUA102QR.NUA102QR_DS_AREA_S",param : {COMPANY_CD : fv_Company}, bEmptyRow : true} // 층 조회
        						  , { outDsName : "ds_location_all", sqlId : "NUA102QR.NUA102QR_DS_LOCATION_S",param : {COMPANY_CD : fv_Company}, bEmptyRow : true} // 생활실 전체 조회
                            ];
           this.gfn_setComboDs(obj, comboDsParamArr);
        }
        /***********************************************************************
         * Common Button Functions
         ************************************************************************/
        // 조회 버튼
        this.fn_searchBtn = function ()
        {
        	this.fn_search();
        };

        // 저장 버튼
        this.fn_saveBtn = function()
        {
        	this.fn_save();
        };

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        // 조회 전 validation
        this.fn_search_pre = function ()
        {
             // 조회전 그리드에 변경된 데이터가 있을경우 ..
             if(Sct.Grid.isUpdate(this.ds_list))
        	 {
                 //메세지로 변경된 데이터 여부와 상관없이 조회 할지 확인
                 if(!Sct.confirm(this,"000171",""))
        		 {
                     return false;
                 }
             }

             // 조회조건 필수여부확인
        	 if(!this.gfn_findSnull(this.div_search)) return false;

        	 // 조회기간 체크
        	 const diffMonth = Sct.Util.getMonthDiff(this.ds_search.getColumn(0, "DT_FROM"), this.ds_search.getColumn(0, "DT_TO"));
        	 if(diffMonth > 11)
        	 {
        		//Sct.alert(this, "000532", "6");	// 조회기간은 {0}개월 이내여야 합니다.
        		Sct.alert(this, "000565"); //1년 이상 조회할 수 없습니다.
        		return false;
        	 }

        	 return true;
        };

        // 저장 전 validation
        this.fn_save_pre = function()
        {
        	// 저장여부
        	if (!Sct.Grid.hasInsertAndUpdateRow(this.fv_currentDS))
        	{
        		Sct.alert(this, "000240"); //추가나 수정한 데이터가 없습니다.
        		return false;
        	}

        	// 입력 필수여부체크
        	if(!this.gfn_chkGridEssential(this.fv_currentGrid)) return false;

        	// 저장하시겠습니까?
        	if(!Sct.confirm(this, "000038", "")) return false;

        	this.fv_saveRefNo = this.ds_list.getColumn(this.ds_list.rowposition, "RES_ID");

        	return true;
        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 조회
        this.fn_search = function ()
        {
        	//validation
        	if(!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        		+ "sqlId=NUA806CT.NUA806CT_DS_LIST_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 수정
        this.fn_save = function()
        {
        	if(!this.fn_save_pre()) return;

        	const svcId = "save";
        	const inDs = "ds_list";
        	this.fn_save_com(svcId, inDs);
        }

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			const count = this.ds_list.rowcount;
        			Sct.alert(this, "000175", count + "|");

        			this.fn_findMstRow(this.fv_saveRefNo);
        		}
        		else if(strSvcID == "save")
        		{
        			Sct.alert(this, "000050");	// 정상적으로 저장되었습니다.
        			this.fn_search();
        		}
        	}
        	else
        	{
        		Sct.alert(this, "", strErrorMsg);
        	}
        };

        //생활실 조회(outDatasets, 층 데이터)
        this.fn_location_search = function (outDs, col)
        {
        	const svcId = "location_search";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = outDs+"=output1";
        	const argument = "method=getList "
        		+ "sqlId=NUA806CT.NUA806CT_DS_LOCATION_S "
        		+ " COMPANY_CD=" + fv_Company
        		+ " AREA=" + col;

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/
        // 작업후 작업 정보 조회
        this.fn_findMstRow = function(fv_saveRefNo)
        {
        	const sFindRow = this.ds_list.findRow("RES_ID", fv_saveRefNo);
        	if(sFindRow > -1)
        	{
        		this.ds_list.set_rowposition(sFindRow);
        	}
        };
        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 팝업 콜백
        this.fn_popCallback = function(popid, strDs)
        {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "RES_NM" :
        			this.ds_search.setColumn(0, "NAME", objDs.getColumn(0, "NAME"));
        			this.ds_search.setColumn(0, "AREA", objDs.getColumn(0, "AREA"));

        			const area = this.ds_search.getColumn(0, "AREA"); //층
        			if(!Sct.Util.isEmpty(area)) //층에 해당되는 생활실 조회
        			{
        				this.fn_location_search("ds_location", area);
        			}
        			this.ds_search.setColumn(0, "LOCATION", objDs.getColumn(0, "LOCATION"));
        			break;
        	}
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 검색조건 층 콤보박스 변경 이벤트
        this.div_search_cmb_area_onitemchanged = function(obj,e)
        {
        	const area = this.ds_search.getColumn(0, "AREA"); //층

        	this.ds_search.setColumn(0, "LOCATION", ""); // 생활실 값 초기화

        	//층에 해당되는 생활실 조회
        	if(!Sct.Util.isEmpty(area))
        	{
        		this.fn_location_search("ds_location", area);

        		const nInsertRow = this.ds_location.insertRow();
        		this.ds_location.setColumn(nInsertRow,"ARE_CD","");
        	}
        	else
        	{
        		this.ds_location.clearData();
        	}
        };

        // 입소자성명 검색 버튼
        this.div_search_btn_res_pp_onclick = function(obj,e)
        {
        	const param = {
        		MULTI_YN : "N",
        		COMPANY_CD : fv_Company
        	};
        	Sct.popup(this, "RES_NM", 326, 226, "", param, "CM_POP::CM_RES_PP.xfdl", "fn_popCallback");
        };


        this.div_search_edt_name_onkeyup = function(obj,e)
        {
        	if (e.keycode == "13")
        	{
        		this.div_search.form.btn_res_pp.click();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onload",this.NUA806CT_onload,this);
            this.div_cont.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.statc_divcont_title.addEventHandler("onclick",this.div_cont_statc_divcont_title_onclick,this);
            this.div_search.form.cmb_area.addEventHandler("onitemchanged",this.div_search_cmb_area_onitemchanged,this);
            this.div_search.form.edt_name.addEventHandler("onkeyup",this.div_search_edt_name_onkeyup,this);
            this.div_search.form.btn_res_pp.addEventHandler("onclick",this.div_search_btn_res_pp_onclick,this);
            this.btn_sMove.addEventHandler("onclick",this.search_reset,this);
            this.btn_sMove.addEventHandler("ondrag",this.search_resize,this);
        };
        this.loadIncludeScript("NUA806CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
