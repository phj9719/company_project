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
            this.set_titletext("코드팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static60","3","2","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("검색조건");
            obj.set_cssclass("lb01");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","22",null,"44","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("dragscrolltype").set("vert");
            obj.set_cssclass("s01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"11","80","24","103",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_submit",null,"11","80","24","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_cd_val","15","11","90","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("코드");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_cd_val","110","11","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_cd_name","255","11","90","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("코드명");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_cd_name","350","11","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","0","80",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static_mid_label","3","6","149","20",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("코드정보");
            obj.set_cssclass("sta_WF_SubTitle1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"300\"/><Column size=\"450\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"코드명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:CD_VAL\"/><Cell col=\"2\" text=\"bind:CD_NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CM_CODE_PP.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("CM_CODE_PP.xfdl","lib::pgm_com.xjs");
        this.registerScript("CM_CODE_PP.xfdl", function() {
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/

        //Multi 선택 여부
        this.fv_multiYn = false;

        this.COMMON_CODE_onload = function (obj, e) {

        	this.div_search.form.edt_cd_val.set_value(this.parent.CD_VAL);
        	this.div_search.form.edt_cd_name.set_value(this.parent.CD_NAME);

        	//Multi 선택 여부 파라미터 : MULTI_YN
        	if(this.parent.MULTI_YN == "Y") this.fv_multiYn = true;
        	else							this.div_cont.form.grd_list.setFormatColProperty(0, "size", 0);	//Single 선택인경우 체크박스 숨김

        	//this.fn_search(); // 자동조회 안되게 요청받음(12/31 수정)

        	// 오픈시 검색조건 첫번째 항목에 커서 이동
        	this.div_search.form.edt_cd_val.setFocus();
        };

        this.fn_search = function (obj, e) {
        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_list=output1";
        	var argument = "method=getList "
        		 + "sqlId=" + this.parent.SQL_ID + " ";
        	var callbackFunc = "fn_callback";

        	var args = this.gfn_getSearchArgu(this.div_search);

        	for (var i = 0; i < args.length; i++) {
        		argument += args[i];
        	}

        	argument += "PARAM1="  + this.parent.PARAM1  + " ";
        	argument += "PARAM2="  + this.parent.PARAM2  + " ";
        	argument += "PARAM3="  + this.parent.PARAM3  + " ";

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
        			if(this.fv_multiYn)	this.ds_list.addColumn("CHK", "STRING", 1);
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
            this.div_cont.form.grd_list.addEventHandler("oncelldblclick",this.div_cont_grd_list_oncelldblclick,this);
            this.div_cont.form.grd_list.addEventHandler("onheadclick",this.div_cont_grd_list_onheadclick,this);
        };
        this.loadIncludeScript("CM_CODE_PP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
