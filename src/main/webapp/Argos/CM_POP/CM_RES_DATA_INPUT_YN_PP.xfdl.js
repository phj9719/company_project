(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COMMON_CODE");
            this.set_titletext("입소자 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEX\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"INT\" size=\"256\"/><Column id=\"JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"LONG_TERM_CARE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"MEAL1\" type=\"STRING\" size=\"256\"/><Column id=\"MEAL2\" type=\"STRING\" size=\"256\"/><Column id=\"MEAL3\" type=\"STRING\" size=\"256\"/><Column id=\"MEAL4\" type=\"STRING\" size=\"256\"/><Column id=\"MEAL5\" type=\"STRING\" size=\"256\"/><Column id=\"MEAL6\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC1\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC2\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC3\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC4\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC5\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC6\" type=\"STRING\" size=\"256\"/><Column id=\"DIET1\" type=\"STRING\" size=\"256\"/><Column id=\"DIET2\" type=\"STRING\" size=\"256\"/><Column id=\"DIET3\" type=\"STRING\" size=\"256\"/><Column id=\"DIET4\" type=\"STRING\" size=\"256\"/><Column id=\"DIET5\" type=\"STRING\" size=\"256\"/><Column id=\"DIET6\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MOR_SNACK_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"AFT_SNACK_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_COMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_sex", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location_temp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_room", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TABLE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENTER_GB\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("ds_enter_gb", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">A</Col><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">E</Col><Col id=\"CODE_NM\">입소자</Col></Row><Row><Col id=\"CODE\">R</Col><Col id=\"CODE_NM\">퇴소자</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static60","0","7","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색조건");
            obj.set_cssclass("lb01");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","30",null,"130","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("dragscrolltype").set("vert");
            obj.set_cssclass("s01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","277","10","80","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("조회");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_all_search","360","10","80","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("전체조회");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_user_nm","5","11","110","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("입소자성명");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_user_nm","120","12","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_area","5","41","110","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("층");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_location","215","41","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("생활실");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","310","41","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_codecolumn("LOC_CD");
            obj.set_datacolumn("LOC_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_location");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_area","120","41","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_codecolumn("ARE_CD");
            obj.set_datacolumn("ARE_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_area");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_area00","5","71","110","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("날짜별 입력 유무");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_yn","120","71","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_search_form_rdo_yn_innerdataset = new nexacro.NormalDataset("div_search_form_rdo_yn_innerdataset", obj);
            div_search_form_rdo_yn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">ALL</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_rdo_yn_innerdataset);
            obj.set_text("ALL");
            obj.set_value("A");
            obj.set_index("2");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_edate","265","71","110","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_age00","5","101","110","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_enter_gb","120","101","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_enter_gb");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","0","160",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static_mid_label","0","7","149","22",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("입소자 리스트");
            obj.set_cssclass("lb01");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"입력유무\"/><Cell col=\"3\" text=\"성별\"/><Cell col=\"4\" text=\"나이\"/><Cell col=\"5\" text=\"층\"/><Cell col=\"6\" text=\"생활실\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:NAME\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:INPUT_YN\"/><Cell col=\"3\" displaytype=\"combotext\" combodataset=\"ds_nu_sex\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:SEX\"/><Cell col=\"4\" text=\"bind:AGE\"/><Cell col=\"5\" text=\"bind:AREA\" displaytype=\"combotext\" combodataset=\"ds_area\" combocodecol=\"ARE_CD\" combodatacol=\"ARE_NM\"/><Cell col=\"6\" displaytype=\"combotext\" text=\"bind:LOCATION\" combodataset=\"ds_location_all\" combocodecol=\"LOC_CD\" combodatacol=\"LOC_NM\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",450,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_search.form.edt_user_nm","value","ds_search","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cmb_area","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cmb_location","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.cal_edate","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.rdo_yn","value","ds_search","INPUT_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.cmb_enter_gb","value","ds_search","ENTER_GB");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CM_RES_DATA_INPUT_YN_PP.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("CM_RES_DATA_INPUT_YN_PP.xfdl","lib::pgm_com.xjs");
        this.registerScript("CM_RES_DATA_INPUT_YN_PP.xfdl", function() {
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/

        //Multi 선택 여부
        this.fv_multiYn = false;
        var fv_companyCd = this.parent.COMPANY_CD;
        var fv_location = this.parent.LOCATION;
        var fv_area = this.parent.AREA;
        var fv_tableNm = this.parent.TABLE_NM;
        this.COMMON_CODE_onload = function (obj, e) {

        	this.form_onload_com(obj, e, false);
        	//Multi 선택 여부 파라미터 : MULTI_YN
        	if(this.parent.MULTI_YN == "Y") this.fv_multiYn = true;
        	else							this.div_cont.form.grd_list.setFormatColProperty(0, "size", 0);	//Single 선택인경우 체크박스 숨김
        	this.ds_search.setColumn(0, "COMPANY_CD", fv_companyCd);
        	this.ds_search.setColumn(0,"TABLE_NM",fv_tableNm);
        	this.ds_search.setColumn(0,"INPUT_YN","A");
        	this.ds_search.setColumn(0,"DATE",Sct.Util.getToday());
        	this.fn_setComboDs(obj);

        	this.ds_search.setColumn(0,"ENTER_GB","E");

        // 	this.ds_search.setColumn(0, "AREA", fv_area);
        // 	this.ds_search.setColumn(0, "LOCATION", fv_location);
        	this.fn_search();

        	// 오픈시 검색조건 첫번째 항목에 커서 이동
        	this.div_search.form.edt_user_nm.setFocus();
        };
        this.fn_searchBtn = function ()
        {
        	this.fn_search();
        };

        this.fn_search = function (obj, e) {
        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_search";
        	var outDatasets = "ds_list=output1";
        	var argument = "method=getList "
        		 + "sqlId=CM_RES_PP.CM_RES_PP_S ";
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
        			//multi체크가능한경우Dataset Column이 초기화되기떄문에 CHK컬럼 추가
        			//if(this.fv_multiYn)	this.ds_list.addColumn("CHK", "STRING", 1);
        		}
        	}
        	else
        	{
        		Sct.alert(this, "", strErrorMsg);
        	}
        };

        this.fn_setData = function (obj, e) {
        	this.ds_return.copyData(this.ds_list);
        	this.ds_return.clearData();
        	//Multi 선택인경우 체크한 ROW들 전체 return
        	if(this.fv_multiYn)
        	{
        		for(var i=0; i<this.ds_list.rowcount; i++)
        		{
        			if(this.ds_list.getColumn(i, "CHK") == "1")
        			{
        				var nRow = this.ds_return.addRow();
        				this.ds_return.copyRow(nRow, this.ds_list, i);
        			}
        		}
        	}
        	//Single 선택인경우 현재 rowposition인 row return
        	else
        	{
        		this.ds_return.addRow();
        		this.ds_return.copyRow(0, this.ds_list, this.ds_list.rowposition);
        	}

        	this.close(this.ds_return.saveXML());
        };

        this.div_search_btn_search_onclick = function(obj,e) {
        	this.fn_search();
        };

        this.div_search_btn_submit_onclick = function(obj,e) {
        	this.fn_setData();
        };

        this.div_cont_grd_list_oncelldblclick = function(obj,e){
        	//Single 선택인경우만 이벤트 on
        	if(!this.fv_multiYn)	this.fn_setData();
        };

        this.div_cont_grd_list_onheadclick = function(obj,e)
        {
        	//체크박스 헤더클릭시 이벤트
        	if(e.col == obj.getBindCellIndex("body", "CHK"))
        	{
        		var chkValue = obj.getCellProperty("head", e.col, "text");
        		var chk = "";
        		if(chkValue != "1")	chk = "1";
        		else				chk = "0";

        		//체크박스 설정
        		obj.setCellProperty("head", e.col, "text", chk);
        		for(var i=0; i<this.ds_list.rowcount; i++) this.ds_list.setColumn(i, "CHK", chk);
        	}
        };

        this.fn_setComboDs = function(obj)
        {
             var comboDsParamArr = [
        //                          { outDsName : "ds_location", sqlId : "NUA101CT.NUA101CT_DS_LOCATION_S", param : this.ds_search, bEmptyRow : true}
        //                        , { outDsName : "ds_room", sqlId : "NUA101CT.NUA101CT_DS_ROOM_S",param : this.ds_search, bEmptyRow : true}
        							{ outDsName : "ds_area", sqlId : "NUA101CT.NUA101CT_DS_AREA_S",param : {COMPANY_CD : fv_companyCd}, bEmptyRow : true} // 층 조회
        						  , { outDsName : "ds_location_all", sqlId : "NUA101CT.NUA101CT_DS_LOCATION_S",param : {COMPANY_CD : fv_companyCd}, bEmptyRow : true} // 생활실 전체 조회
                            ];
           this.gfn_setComboDs(obj, comboDsParamArr);
        }

        //생활실 조회(outDatasets, 층 데이터)
        this.fn_location_search = function (outDs, col)
        {
        	var svcId = "location_search";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = outDs+"=output1";
        	var argument = "method=getList "
        		+ "sqlId=NUA101CT.NUA101CT_DS_LOCATION_S "
        		+ " COMPANY_CD="+fv_companyCd
        		+ " AREA="+col;

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);
        };

        //검색조건 층 콤보박스 변경 이벤트
        this.div_search_cmb_area_onitemchanged = function(obj,e)
        {
        	var area = this.ds_search.getColumn(0, "AREA"); //층

        	this.ds_search.setColumn(0, "LOCATION", ""); // 생활실 값 초기화

        	if(!Sct.Util.isEmpty(area)){ //층에 해당되는 생활실 조회
        		this.fn_location_search("ds_location", area);

        		var nInsertRow = this.ds_location.insertRow();
        		this.ds_location.setColumn(nInsertRow,"ARE_CD","");
        	}else{
        		this.ds_location.clearData();
        	}
        };

        this.fn_input_data_search = function()
        {
        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_list=output1";
        	var argument = "method=getList "
        		 + "sqlId=CM_RES_PP.CM_RES_PP_S "
        		 + " COMPANY_CD="+fv_companyCd
        		 + " TABLE_NM="+fv_tableNm
        		 + " INPUT_YN="+this.div_search.form.rdo_yn.value
        		 + " DATE="+this.div_search.form.cal_edate.value;
        	var callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.div_search_btn_all_search_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"INPUT_YN","A");
        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_list=output1";
        	var argument = "method=getList "
        		 + "sqlId=CM_RES_PP.CM_RES_PP_S "
        		 + " COMPANY_CD="+fv_companyCd
        		 + " TABLE_NM="+fv_tableNm
        		 + " INPUT_YN="+this.div_search.form.rdo_yn.value
        		 + " DATE="+this.div_search.form.cal_edate.value;
        	var callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.COMMON_CODE_onload,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.div_search_btn_search_onclick,this);
            this.div_search.form.btn_all_search.addEventHandler("onclick",this.div_search_btn_all_search_onclick,this);
            this.div_search.form.sta_user_nm.addEventHandler("onclick",this.div_search_sta_user_nm_onclick,this);
            this.div_search.form.sta_area.addEventHandler("onclick",this.div_search_sta_area_onclick,this);
            this.div_search.form.cmb_location.addEventHandler("onitemchanged",this.fn_search,this);
            this.div_search.form.cmb_area.addEventHandler("onitemchanged",this.fn_search,this);
            this.div_search.form.sta_area00.addEventHandler("onclick",this.div_search_sta_area_onclick,this);
            this.div_search.form.rdo_yn.addEventHandler("canitemchange",this.div_search_rdo_yn_canitemchange,this);
            this.div_search.form.rdo_yn.addEventHandler("onitemchanged",this.fn_search,this);
            this.div_search.form.cal_edate.addEventHandler("onchanged",this.fn_search,this);
            this.div_search.form.sta_age00.addEventHandler("onclick",this.div_search_sta_age00_onclick,this);
            this.div_search.form.cmb_enter_gb.addEventHandler("onitemchanged",this.div_search_cmb_enter_gb_onitemchanged,this);
            this.div_cont.form.grd_list.addEventHandler("oncelldblclick",this.div_cont_grd_list_oncelldblclick,this);
            this.div_cont.form.grd_list.addEventHandler("onheadclick",this.div_cont_grd_list_onheadclick,this);
        };
        this.loadIncludeScript("CM_RES_DATA_INPUT_YN_PP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
