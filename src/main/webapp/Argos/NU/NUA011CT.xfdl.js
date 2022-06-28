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
            this.set_titletext("PC&Tablet권한관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RANK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ROLE1\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ROLE2\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ROLE3\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ROLE4\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ROLE5\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ROLE6\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ROLE7\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ROLE8\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ROLE9\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ROLE10\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ROLE11\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ROLE12\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ROLE13\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ROLE14\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ROLE15\" type=\"STRING\" size=\"256\"/><Column id=\"TAB_ROLE1\" type=\"STRING\" size=\"256\"/><Column id=\"TAB_ROLE2\" type=\"STRING\" size=\"256\"/><Column id=\"TAB_ROLE3\" type=\"STRING\" size=\"256\"/><Column id=\"TAB_ROLE4\" type=\"STRING\" size=\"256\"/><Column id=\"TAB_ROLE5\" type=\"STRING\" size=\"256\"/><Column id=\"TAB_ROLE6\" type=\"STRING\" size=\"256\"/><Column id=\"TAB_ROLE7\" type=\"STRING\" size=\"256\"/><Column id=\"TAB_ROLE8\" type=\"STRING\" size=\"256\"/><Column id=\"TAB_ROLE9\" type=\"STRING\" size=\"256\"/><Column id=\"TAB_ROLE10\" type=\"STRING\" size=\"256\"/><Column id=\"TAB_ROLE11\" type=\"STRING\" size=\"256\"/><Column id=\"TAB_ROLE12\" type=\"STRING\" size=\"256\"/><Column id=\"TAB_ROLE13\" type=\"STRING\" size=\"256\"/><Column id=\"TAB_ROLE14\" type=\"STRING\" size=\"256\"/><Column id=\"TAB_ROLE15\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_use_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"STR1\" type=\"STRING\" size=\"256\"/><Column id=\"STR2\" type=\"STRING\" size=\"256\"/><Column id=\"STR3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location_temp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_room", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_nu_sleep_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"STR1\" type=\"STRING\" size=\"256\"/><Column id=\"STR2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_sleep_time", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"STR1\" type=\"STRING\" size=\"256\"/><Column id=\"STR2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_TP\" type=\"STRING\" size=\"256\"/><Column id=\"UES_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location_all", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_TP\" type=\"STRING\" size=\"256\"/><Column id=\"UES_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_role", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"USEYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_rank_cd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","120",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_right","468","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_border("0px solid rgba(0,0,0,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1)");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","30",null,null,"0","10",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autoenter("select");
            obj.set_readonly("false");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj.set_extendsizetype("none");
            obj.set_cellclickbound("control");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" expandchar=\"status\"/><Cell col=\"1\" rowspan=\"2\" text=\"순번\"/><Cell col=\"2\" rowspan=\"2\" text=\"사용자ID\"/><Cell col=\"3\" rowspan=\"2\" text=\"사용자명\"/><Cell col=\"4\" rowspan=\"2\" text=\"담당직종\"/><Cell col=\"5\" colspan=\"9\" text=\"PC\" background=\"#e6fee6\"/><Cell col=\"14\" colspan=\"8\" text=\"Tablet\" background=\"#ecc2ba\"/><Cell row=\"1\" col=\"5\" text=\"입소자&#13;&#10;관리\" background=\"#e6fee6\"/><Cell row=\"1\" col=\"6\" text=\"간호&#13;&#10;관리\" background=\"#e6fee6\"/><Cell row=\"1\" col=\"7\" text=\"요양&#13;&#10;관리\" background=\"#e6fee6\"/><Cell row=\"1\" col=\"8\" text=\"재활&#13;&#10;관리\" background=\"#e6fee6\"/><Cell row=\"1\" col=\"9\" text=\"인지&#13;&#10;훈련\" background=\"#e6fee6\"/><Cell row=\"1\" col=\"10\" text=\"촉탁의료&#13;&#10;관리\" background=\"#e6fee6\"/><Cell row=\"1\" col=\"11\" text=\"공지 및 &#13;&#10;방문예약\" background=\"#e6fee6\"/><Cell row=\"1\" col=\"12\" text=\"모니터링\" background=\"#e6fee6\"/><Cell row=\"1\" col=\"13\" text=\"공통&#13;&#10;관리\" background=\"#e6fee6\"/><Cell row=\"1\" col=\"14\" text=\"호실&#13;&#10;현황\" background=\"#ecc2ba\"/><Cell row=\"1\" col=\"15\" text=\"간호&#13;&#10;일지\" background=\"#ecc2ba\"/><Cell row=\"1\" col=\"16\" text=\"요양&#13;&#10;일지\" background=\"#ecc2ba\"/><Cell row=\"1\" col=\"17\" text=\"물리&#13;&#10;치료\" background=\"#ecc2ba\"/><Cell row=\"1\" col=\"18\" text=\"인지&#13;&#10;훈련\" background=\"#ecc2ba\"/><Cell row=\"1\" col=\"19\" text=\"모니터링\" background=\"#ecc2ba\"/><Cell row=\"1\" col=\"20\" text=\"챗봇\" background=\"#ecc2ba\"/><Cell row=\"1\" col=\"21\" text=\"낙상&#13;&#10;알림\" background=\"#ecc2ba\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"expr:currow + 1\"/><Cell col=\"2\" text=\"bind:USER_ID\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:USER_NM_KOR\" expandshow=\"hide\"/><Cell col=\"4\" text=\"bind:RANK_CD\" displaytype=\"combotext\" combodataset=\"ds_cm_rank_cd\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"5\" text=\"bind:PC_ROLE1\" displaytype=\"checkboxcontrol\" combodataset=\"ds_location_all\" combodatacol=\"LOC_NM\" combocodecol=\"LOC_CD\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"6\" text=\"bind:PC_ROLE2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" combodataset=\"ds_manager\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" textAlign=\"center\" editautoselect=\"true\" combotype=\"filterlike\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"7\" text=\"bind:PC_ROLE3\" edittype=\"checkbox\" editautoselect=\"true\" textareaautoselect=\"true\" wordWrap=\"none\" displaytype=\"checkboxcontrol\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"8\" text=\"bind:PC_ROLE4\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"9\" text=\"bind:PC_ROLE5\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"10\" text=\"bind:PC_ROLE6\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"11\" text=\"bind:PC_ROLE7\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"12\" displaytype=\"checkboxcontrol\" text=\"bind:PC_ROLE8\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"13\" text=\"bind:PC_ROLE9\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"14\" text=\"bind:TAB_ROLE1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"15\" text=\"bind:TAB_ROLE2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"16\" text=\"bind:TAB_ROLE3\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"17\" text=\"bind:TAB_ROLE4\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"18\" text=\"bind:TAB_ROLE5\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"19\" text=\"bind:TAB_ROLE6\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"20\" text=\"bind:TAB_ROLE7\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"21\" text=\"bind:TAB_ROLE8\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("statc_divcont_title","0","7","200","22",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("사용자별 권한 설정리스트");
            obj.set_cssclass("lb01");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static60","0","0","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("lb01");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","22",null,"74","0.00%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("s01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_name","10","26","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("사용자ID");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_name","110","26","110","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_name00","220","26","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("사원명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_name00","320","26","110","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
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

            obj = new BindItem("item14","div_search.form.edt_name","value","ds_search","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.edt_name00","value","ds_search","NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUA011CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUA011CT.xfdl","lib::pgm_com.xjs");
        this.registerScript("NUA011CT.xfdl", function() {
        /***********************************************************************
         * 화면ID   : NUA011CT.xfdl
         * 화면명   :
         * 화면설명 : PC & TABLET 권한관리
         * 작성일   : 2021-06-24 10:32
         * 작성자   : SOOIM
         * 수정이력 :
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *	2021.08.20		SOOIM		최초작성
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

        this.fv_currentDS = this.ds_list;
        this.fv_currentGrid = this.div_cont.form.grd_list;

        this.fileGroupId = "";
        this.fv_currentTab = 0;
        this.gv_NextEmpNo = "";

        this.saveUrl = nexacro.getEnvironment().services["svcurl"].url + "/common/";

        this.fv_saveRefNo = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e, false);

        	this.ds_search.setColumn(0,"COMPANY_CD",fv_Company);
        	this.ds_search.setColumn(0,"SERVICE_TP",fv_ServiceTp);
        	this.ds_search.setColumn(0,"APPLICATION_TP",fv_appTp);
        	this.ds_search.setColumn(0,"DT_FROM",Sct.Util.getFirstDay());
        	this.ds_search.setColumn(0,"DT_TO",Sct.Util.getToday());
        	//상태삭제순번컬럼 고정
        	//this.div_cont.form.div_left.form.grd_head.setFormatColProperty(2, "band", "left");

        	//rowTypeValidation 설정
        	var dsArr = ["ds_list"];
        	this.gfn_rowTypeValidationDs(dsArr);
        	this.fn_setComboDs(obj);

        	for(var i=0; i<this.ds_role.rowcount; i++){
        		if(this.ds_role.getColumn(i,"USEYN")=="N"){
        			this.div_cont.form.grd_list.setFormatColProperty(this.div_cont.form.grd_list.getBindCellIndex("body",this.ds_role.getColumn(i,"CMCD")),"size",0);
        		}
        	}

        	// 오픈시 전체 조회
        	this.fn_search();

        	// 오픈시 검색조건 첫 항목에 커서 이동
        	this.div_search.form.edt_name.setFocus();
        };


        this.fn_setComboDs = function(obj)
        {
             var comboDsParamArr = [
        					     { outDsName : "ds_role", sqlId : "NUA011CT.NUA011CT_DS_ROLE_S",param : this.ds_search, bEmptyRow : false}
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
        this.fn_saveBtn = function ()
        {
        	this.fn_save();
        };


        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
             //조회전 그리드에 변경된 데이터가 있을경우 ..
        	if(Sct.Grid.isUpdate(this.ds_list)){
        	//메세지로 변경된 데이터 여부와 상관없이 조회 할지 확인
        		if(!Sct.confirm(this,"000171","")){
        			return false;
        		}
        	}

             //조회조건 필수여부확인
        	if(!this.gfn_findSnull(this.div_search)) return false;
        	return true;
        };

        //저장 전 validation
        this.fn_save_pre = function ()
        {
        	//저장여부
        	if (!Sct.Grid.hasInsertAndUpdateRow(this.fv_currentDS))
        	{
        		Sct.alert(this, "000240"); //추가나 수정한 데이터가 없습니다.
        		return false;
        	}

        	//입력 필수여부체크
        	if(!this.gfn_chkGridEssential(this.fv_currentGrid)) return false;

        	//입력한값 중복 여부 체크
        	var keyArr ;
        	if(this.fv_currentDS.name == "ds_list"){
        		keyArr = ["COMPANY_CD", "USER_ID"];
        	}
        	if(!this.gfn_duplicateCheck(this.fv_currentDS, keyArr)) return false;

        	//저장하시겠습니까?
        	if(!Sct.confirm(this, "000038", "")) return false;

        	//데이터 저장전 저장할 key 값 dataset 변수에 저장
        	this.gfn_saveKeyArr(this.fv_currentDS, keyArr);
        	this.fv_saveRefNo = this.ds_list.getColumn(this.ds_list.rowposition, "USER_ID");
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
        	var outDatasets = "ds_list=output1";
        	var argument = "method=getList "
        		+ "sqlId=NUA011CT.NUA011CT_DS_LIST_S ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };
        //저장
        this.fn_save = function ()
        {
        	//입력 필수여부체크
        	if(!this.fn_save_pre()) return false;
        	var svcId = "save";
        	var params = "/NUA011CTController.do";
        	var inDatasets = "input1=ds_list:U";
        	var outDatasets = "";
        	var argument = "method=save ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };
        //삭제
        this.fn_delete = function ()
        {
        	//validation
        	if(!this.fn_delete_pre()) return;

        	var sqlId = "";
        	if(this.fv_currentDS.name == "ds_list")	sqlId = "NUA011CT.NUA011CT_DS_LIST_D";

        	var svcId = "delete";
        	var params = "/commonController.do";
        	var inDatasets = "input1=" +  this.fv_currentDS.name + ":U";
        	var outDatasets = "";
        	var argument = "method=delete "
        		+ "sqlId=" + sqlId + " ";

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
        			var count = this.ds_list.rowcount;
        			Sct.alert(this, "000175", count + "|");

        			//서비스 조회 시 return 받은 block count와 총 row 수 전달
        			//this.div_cont.form.div_paging.form.fn_callAfter();
        			//저장후 조회후 변경된 row로 rowposition 설정
        			//this.gfn_saveAfterFindRow(this.ds_head);
        			this.fn_findMstRow(this.fv_saveRefNo);

        		}else if(strSvcID == "save" || strSvcID == "delete")
        		{
        			this.fn_search();
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

        // 작업후 작업 정보 조회
        this.fn_findMstRow = function(fv_saveRefNo) {
        	var sFindRow = this.ds_list.findRow("RES_ID", fv_saveRefNo);
        	if(sFindRow > -1) {
        		this.ds_list.set_rowposition(sFindRow);
        	}
        };

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/

        this.div_cont_grd_list_onexpandup = function(obj,e)
        {
        	var param = {
        		MULTI_YN : "N",
        		COMPANY_CD : fv_Company
        	};
        	Sct.popup(this, "RES_ID", 326, 226, "", param, "CM_POP::CM_RES_PP.xfdl", "fn_popCallback");
        };
         this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	var objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid){
        		case "RES_ID" : this.ds_list.setColumn(this.ds_list.rowposition, "RES_ID", objDs.getColumn(0, "RES_ID"));
        						this.ds_list.setColumn(this.ds_list.rowposition, "RES_NM", objDs.getColumn(0, "NAME"));
        						this.ds_list.setColumn(this.ds_list.rowposition, "AREA", objDs.getColumn(0, "AREA"));
        						this.ds_list.setColumn(this.ds_list.rowposition, "LOCATION", objDs.getColumn(0, "LOCATION"));
        		break;
        		case "RES_NM" : this.ds_search.setColumn(0, "NAME", objDs.getColumn(0, "NAME"));
        						this.ds_search.setColumn(0, "AREA", objDs.getColumn(0, "AREA"));
        						var area = this.ds_search.getColumn(0, "AREA"); //층
        						if(!Sct.Util.isEmpty(area)){ //층에 해당되는 생활실 조회
        							this.fn_location_search("ds_location", area);
        						}
        						this.ds_search.setColumn(0, "LOCATION", objDs.getColumn(0, "LOCATION"));
        		break;
        	}

        };

        this.div_search_btn_res_pp_onclick = function(obj,e)
        {
        	var param = {
        		MULTI_YN : "N",
        		COMPANY_CD : fv_Company
        	};
        	Sct.popup(this, "RES_NM", 326, 226, "", param, "CM_POP::CM_RES_PP.xfdl", "fn_popCallback");
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.div_cont.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.grd_list.addEventHandler("onexpandup",this.div_cont_grd_list_onexpandup,this);
            this.div_cont.form.statc_divcont_title.addEventHandler("onclick",this.div_cont_statc_divcont_title_onclick,this);
            this.btn_sMove.addEventHandler("onclick",this.search_reset,this);
            this.btn_sMove.addEventHandler("ondrag",this.search_resize,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
        };
        this.loadIncludeScript("NUA011CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
