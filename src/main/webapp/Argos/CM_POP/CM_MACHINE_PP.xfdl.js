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
            this.set_titletext("서비스 기기 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(720,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_TP\" type=\"STRING\" size=\"256\"/><Column id=\"MAC_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEST_COMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_sex", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_room", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MAC_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_TP\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_machine_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","100",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static_mid_label","0","22","149","20",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("기기정보");
            obj.set_cssclass("sta_WF_SubTitle1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","44",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell edittype=\"none\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"기기유형\"/><Cell col=\"3\" text=\"맥어드레스\"/><Cell col=\"4\" text=\"기기번호\"/><Cell col=\"5\" text=\"기기명\"/><Cell col=\"6\" text=\"제조사\"/><Cell col=\"7\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:MACH_TP\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"ds_cm_machine_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"3\" displaytype=\"normal\" combodataset=\"ds_nu_sex\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:MAC_ADD\"/><Cell col=\"4\" text=\"bind:MACH_NO\"/><Cell col=\"5\" text=\"bind:MACH_NM\" displaytype=\"normal\" maskedittype=\"number\"/><Cell col=\"6\" combodataset=\"ds_room\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" displaytype=\"normal\" text=\"bind:PRODUCT_NM\"/><Cell col=\"7\" text=\"bind:REMARK\" displaytype=\"textareacontrol\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_search","0","30",null,"74","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("dragscrolltype").set("vert");
            obj.set_cssclass("s01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"13","80","24","108",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_submit",null,"13","80","24","25",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("확인");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_user_nm","5","11","90","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("기기명");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_user_nm","110","11","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_location","245","11","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("기기유형");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_room","5","41","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("맥어드레스");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","350","13","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_cm_machine_tp");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_user_nm00","110","41","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_room00","245","41","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("기기번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_user_nm00_00","350","41","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static60","0","8","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색조건");
            obj.set_cssclass("lb01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",720,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.edt_user_nm","value","ds_search","MACH_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cmb_location","value","ds_search","MACH_TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.edt_user_nm00","value","ds_search","MAC_ADD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edt_user_nm00_00","value","ds_search","MACH_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CM_MACHINE_PP.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("CM_MACHINE_PP.xfdl","lib::pgm_com.xjs");
        this.registerScript("CM_MACHINE_PP.xfdl", function() {
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/

        //Multi 선택 여부
        this.fv_multiYn = false;
        var fv_companyCd = this.parent.COMPANY_CD;
        var fv_serviceTp = this.parent.SERVICE_TP;
        var fv_useTP = this.parent.USE_TP; //10: 입소 20: 구역
        var fv_useId = this.parent.USE_ID;
        this.COMMON_CODE_onload = function (obj, e) {

        	this.form_onload_com(obj, e, false);
        	//Multi 선택 여부 파라미터 : MULTI_YN
        	if(this.parent.MULTI_YN == "Y") this.fv_multiYn = true;
        	else							this.div_cont.form.grd_list.setFormatColProperty(0, "size", 0);	//Single 선택인경우 체크박스 숨김
        	this.ds_search.setColumn(0, "COMPANY_CD", fv_companyCd);
        	this.ds_search.setColumn(0, "SERVICE_TP", fv_serviceTp);
        	this.ds_search.setColumn(0, "USE_TP", fv_useTP);
        	this.ds_search.setColumn(0, "USE_ID", fv_useId);
        	this.fn_search();

        	// 오픈시 검색조건 첫번째 항목에 커서 이동
        	this.div_search.form.edt_user_nm.setFocus();
        };

        this.fn_search = function (obj, e) {
        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_search";
        	var outDatasets = "ds_list=output1";
        	var argument = "method=getList "
        		 + "sqlId=CM_MACHINE_PP.CM_MACHINE_PP_S ";
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
        //  2021-12-13 체크박스 헤더클릭시 이벤트 적용 해제
        // 	//체크박스 헤더클릭시 이벤트
        // 	if(e.col == obj.getBindCellIndex("body", "CHK"))
        // 	{
        // 		var chkValue = obj.getCellProperty("head", e.col, "text");
        // 		var chk = "";
        // 		if(chkValue != "1")	chk = "1";
        // 		else				chk = "0";
        //
        // 		//체크박스 설정
        // 		obj.setCellProperty("head", e.col, "text", chk);
        // 		for(var i=0; i<this.ds_list.rowcount; i++) this.ds_list.setColumn(i, "CHK", chk);
        // 	}
        };

        // 기기유형별 하나만 선택가능
        this.ds_list_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "CHK" && e.newvalue == "1"){
        		if(this.ds_list.getColumn(e.row, "MACH_TP") == "0100"){
        			this.fn_machchk("0100");
        		}else if(this.ds_list.getColumn(e.row, "MACH_TP") == "0200"){
        			this.fn_machchk("0200");
        		}else if(this.ds_list.getColumn(e.row, "MACH_TP") == "0300"){
        			this.fn_machchk("0300");
        		}else if(this.ds_list.getColumn(e.row, "MACH_TP") == "0400"){
        			this.fn_machchk("0400");
        		}else if(this.ds_list.getColumn(e.row, "MACH_TP") == "0500"){
        			this.fn_machchk("0500");
        		}else if(this.ds_list.getColumn(e.row, "MACH_TP") == "0600"){
        			this.fn_machchk("0600");
        		}else if(this.ds_list.getColumn(e.row, "MACH_TP") == "0700"){
        			this.fn_machchk("0700");
        		}else if(this.ds_list.getColumn(e.row, "MACH_TP") == "0800"){
        			this.fn_machchk("0800");
        		}else if(this.ds_list.getColumn(e.row, "MACH_TP") == "0900"){
        			this.fn_machchk("0900");
        		}else if(this.ds_list.getColumn(e.row, "MACH_TP") == "1000"){
        			this.fn_machchk("1000");
        		}else if(this.ds_list.getColumn(e.row, "MACH_TP") == "1100"){
        			this.fn_machchk("1100");
        		}else if(this.ds_list.getColumn(e.row, "MACH_TP") == "1200"){
        			this.fn_machchk("1200");
        		}else if(this.ds_list.getColumn(e.row, "MACH_TP") == "1300"){
        			this.fn_machchk("1300");
        		}else if(this.ds_list.getColumn(e.row, "MACH_TP") == "1400"){
        			this.fn_machchk("1400");
        		}else if(this.ds_list.getColumn(e.row, "MACH_TP") == "1500"){
        			this.fn_machchk("1500");
        		}
        	}
        };

        this.fn_machchk = function (machTp)
        {
        	for(var i = 0; i<this.ds_list.rowcount; i++) { // 데이터셋 전체 확인
        		if(this.ds_list.getColumn(i, "MACH_TP") == machTp && this.ds_list.rowposition != i){
        			this.ds_list.setColumn(i,"CHK","0");
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.COMMON_CODE_onload,this);
            this.div_cont.form.grd_list.addEventHandler("oncelldblclick",this.div_cont_grd_list_oncelldblclick,this);
            this.div_cont.form.grd_list.addEventHandler("onheadclick",this.div_cont_grd_list_onheadclick,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.div_search_btn_search_onclick,this);
            this.div_search.form.btn_submit.addEventHandler("onclick",this.div_search_btn_submit_onclick,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
        };
        this.loadIncludeScript("CM_MACHINE_PP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
