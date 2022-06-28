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
            this.set_titletext("처리자팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RANK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM_KOR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_room", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RANK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_rank_cd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static60","0","7","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색조건");
            obj.set_cssclass("lb01");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","30",null,"74","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("dragscrolltype").set("vert");
            obj.set_cssclass("s01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","257","10","80","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_submit","340","10","80","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_user_nm","5","11","90","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("처리자 성명");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_user_nm","100","12","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_rank","5","41","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("담당직종");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_rank","100","41","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_cm_rank_cd");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","0","114",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static_mid_label","0","7","149","22",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("사용자 리스트");
            obj.set_cssclass("lb01");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"처리자성명\"/><Cell col=\"2\" text=\"담당직종\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:USER_NM_KOR\" textAlign=\"center\"/><Cell col=\"2\" displaytype=\"combotext\" combodataset=\"ds_cm_rank_cd\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:RANK_CD\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",450,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_search.form.edt_user_nm","value","ds_search","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cmb_rank","value","ds_search","RANK_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CM_MANAGER_PP.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("CM_MANAGER_PP.xfdl","lib::pgm_com.xjs");
        this.registerScript("CM_MANAGER_PP.xfdl", function() {
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/

        //Multi 선택 여부
        this.fv_multiYn = false;
        var fv_companyCd = this.parent.COMPANY_CD;
        var fv_location = this.parent.LOCATION;
        var fv_area = this.parent.AREA;

        this.COMMON_CODE_onload = function (obj, e) {

        	this.form_onload_com(obj, e, false);
        	//Multi 선택 여부 파라미터 : MULTI_YN
        	if(this.parent.MULTI_YN == "Y") this.fv_multiYn = true;
        	else							this.div_cont.form.grd_list.setFormatColProperty(0, "size", 0);	//Single 선택인경우 체크박스 숨김
        	this.ds_search.setColumn(0, "COMPANY_CD", fv_companyCd);


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
        		 + "sqlId=CM_MANAGER_PP.CM_MANAGER_PP_S ";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.COMMON_CODE_onload,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.div_search_btn_search_onclick,this);
            this.div_search.form.btn_submit.addEventHandler("onclick",this.div_search_btn_submit_onclick,this);
            this.div_search.form.sta_rank.addEventHandler("onclick",this.div_search_sta_area_onclick,this);
            this.div_search.form.cmb_rank.addEventHandler("onitemchanged",this.div_search_cmb_area_onitemchanged,this);
            this.div_cont.form.grd_list.addEventHandler("oncelldblclick",this.div_cont_grd_list_oncelldblclick,this);
            this.div_cont.form.grd_list.addEventHandler("onheadclick",this.div_cont_grd_list_onheadclick,this);
        };
        this.loadIncludeScript("CM_MANAGER_PP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
