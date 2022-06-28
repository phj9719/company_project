(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00207_P03");
            this.set_titletext("병의원 추가등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(650,470);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"병원번호\" type=\"STRING\" size=\"256\"/><Column id=\"병의원명\" type=\"STRING\" size=\"256\"/><Column id=\"주소\" type=\"STRING\" size=\"256\"/><Column id=\"전화번호\" type=\"STRING\" size=\"256\"/><Column id=\"비고\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hosp", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOSP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HOSP_AR\" type=\"STRING\" size=\"256\"/><Column id=\"HOSP_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"HOSP_INDEX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","3","145","645","320",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","295","-2","329","22",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("병의원명을 클릭하면 병·의원정보를 수정할 수 있습니다.");
            obj.set_color("purple");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","21","20","602","290",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"49\"/><Column size=\"148\"/><Column size=\"89\"/><Column size=\"202\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"병의원명\"/><Cell col=\"2\" text=\"전화번호\"/><Cell col=\"3\" text=\"주 소\"/></Band><Band id=\"body\"><Cell text=\"bind:병원번호\"/><Cell col=\"1\" text=\"bind:병의원명\" cssclass=\"cellBWoman\" cursor=\"pointer\"/><Cell col=\"2\" text=\"bind:전화번호\"/><Cell col=\"3\" text=\"bind:주소\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_search","22","0","605","152",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03","16","18","61","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("기록번호 :");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_01","0","42","87","33",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("병의원명");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_01_00","0","74","87","33",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("소 재 지");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_01_01","0","106","87","33",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_03_00","78","18","61","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_00","382","14","87","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("새로입력");
            obj.set_cssclass("btn_newdoc");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_01","471","14","64","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_02","537","14","64","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_cssclass("btn_delete");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_02","86","42","515","33",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_02_00","86","74","515","33",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_search.addChild(obj.name, obj);

            obj = new TextArea("txt_00_00","89","77","509","27",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_02_01","86","106","515","33",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_search.addChild(obj.name, obj);

            obj = new TextArea("txt_00","89","45","303","27",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_cssclass("cellBWoman");
            this.div_search.addChild(obj.name, obj);

            obj = new TextArea("txt_00_01","89","109","163","27",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            this.div_search.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",650,470,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_cont.form.sta_03_00","text","ds_search","HOSP_INDEX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_cont.form.txt_00_00","value","ds_search","HOSP_AR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.txt_00_01","value","ds_search","HOSP_NUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.sta_03_00","text","ds_hosp","HOSP_INDEX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.txt_00","value","ds_hosp","HOSP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.txt_00_00","value","ds_hosp","HOSP_AR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.txt_00_01","value","ds_hosp","HOSP_NUM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00207_P03.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00207_P03.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00207_P03.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00207_P03
         * 화면명   	: 병·의원 추가등록
         * 화면설명 	:
         * 작성일   	: 2022-06-13
         * 작성자   	: 성재영
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용

         ***********************************************************************/
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
         const fv_sicode = this.parent.SICODE;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);
        	// 저장을 위한 gv_curWinKey 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00207_P03";

        	this.ds_hosp.addRow();
        	this.ds_hosp.setColumn(0, "SICODE", fv_sicode);

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "SICODE", fv_sicode);

        	this.fn_search();
        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 조회
        this.fn_search = function()
        {
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00207_P03.DAY00207_P03_DS_LIST_S ";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };
        // 저장
        this.fn_save = function ()
        {
        	if (!this.fn_save_pre()) return;
        	console.log("rowType: " + this.ds_hosp.getRowType(0));

        	const svcId = "save";
         	const inDs = "ds_hosp";
        	this.fn_save_com(svcId, inDs);
        };
        // 삭제
        this.fn_delete = function()
        {
        	// validation
        	if (!this.fn_delete_pre()) return;

        	const svcId = "delete";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_hosp:U";
        	const outDatasets = "";
        	const argument = "method=delete "
        				   + "sqlId=DAY00207_P03.DAY00207_P03_DS_HOSP_D ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			this.ds_list.set_rowposition(-1);
        		}
        		else if (strSvcID == "save")
        		{
        			this.alert("저장되었습니다.");
        			this.ds_hosp.clearData();
        			this.ds_hosp.addRow();
        			this.ds_hosp.setColumn(0, "SICODE", fv_sicode);
        			this.fn_search();
        		}
        		else if (strSvcID == "delete")
        		{
        			this.alert("삭제가 되었습니다.");
        			this.ds_hosp.clearData();
        			this.ds_hosp.addRow();
        			this.ds_hosp.setColumn(0, "SICODE", fv_sicode);
        			this.fn_search();
        		}
        	}
        	else
        	{
        		this.alert(strErrorMsg);
        	}
        };
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        // 저장 전 Validation
        this.fn_save_pre = function ()
        {
        	if (Sct.Util.isEmpty(this.ds_hosp.getColumn(0, "HOSP_NAME")))
        	{
        		this.alert("병의원명을 입력해야 합니다.");
        		return false;
        	}

        	for (var i = 0; i < this.ds_list.rowcount; i++) {
        		if (this.ds_list.getColumn(i, "병의원명") == this.ds_hosp.getColumn(0, "HOSP_NAME")) {
        			this.alert("동일한 병의원명이 존재합니다. 병의원명 변경 후 저장하세요.");
        			return false;
         		}
         	}
        	if (!Sct.Util.isEmpty(this.ds_hosp.getColumn(0,"HOSP_INDEX"))){
        		this.ds_hosp.set_updatecontrol(false);
        		this.ds_hosp.setRowType(0,4);
        		this.ds_hosp.set_updatecontrol(true);
        	}
        	return true;
        };
        // 삭제 전 validation
        this.fn_delete_pre = function()
        {
        	// 병원번호 없을 시
        	if (Sct.Util.isEmpty(this.ds_hosp.getColumn(0,"HOSP_NUM")))
        	{
        		this.alert("삭제할 항목이 없습니다.");
        		return false;
        	}

        	if (!this.confirm("삭제 하시겠습니까?"))
        		return false;

        	this.ds_hosp.set_updatecontrol(false);
        	this.ds_hosp.setRowType(0, Dataset.ROWTYPE_DELETE);
        	this.ds_hosp.set_updatecontrol(true);

        	return true;
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/
        this.fn_setData = function(row)
        {
        	this.ds_hosp.deleteRow(0);
        	this.ds_hosp.clearData();
        	this.ds_hosp.addRow();

        	this.ds_hosp.setColumn(0, "SICODE", fv_sicode);
        	this.ds_hosp.setColumn(0, "HOSP_NAME", this.ds_list.getColumn(row,"병의원명"));
        	this.ds_hosp.setColumn(0, "HOSP_AR", this.ds_list.getColumn(row,"주소"));
        	this.ds_hosp.setColumn(0, "HOSP_NUM", this.ds_list.getColumn(row,"전화번호"));
        	this.ds_hosp.setColumn(0, "HOSP_INDEX", this.ds_list.getColumn(row,"병원번호"));

        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 저장버튼 클릭
        this.div_search_btn_01_onclick = function(obj,e)
        {
        	this.fn_save();
        };
        // 삭제버튼 클릭
        this.div_search_btn_02_onclick = function(obj,e)
        {
        	this.fn_delete();
        };
        // 병의원명 클릭
        this.div_cont_grd_list_oncellclick = function(obj,e)
        {
        	const nameIdx = obj.getBindCellIndex("body", "병의원명");

        	// 직원성명
        	if (e.col == nameIdx)
        	{
        		this.fn_setData(e.row);
        	}
        };
        // 새로입력 버튼 클릭
        this.div_search_btn_00_onclick = function(obj,e)
        {
        	this.ds_hosp.clearData();
        	this.ds_hosp.addRow();
        	this.ds_hosp.setColumn(0, "SICODE", fv_sicode);
        };
        // 병의원명 검색 중복 셀 색 변환
        // this.div_search_txt_00_onchanged = function(obj:nexacro.TextArea,e:nexacro.ChangeEventInfo)
        // {
        // 	var grdMain = this.div_cont.form.grd_list;
        // 	var nameIdx = grdMain.getBindCellIndex("body","병의원명");
        //
        // 	if (this.div_search.form.txt_00.value == null || this.div_search.form.txt_00.value == "") {
        // 	grdMain.setCellProperty("body",nameIdx,"cssclass","expr:'cellBWoman'");
        // 	return;
        // 	}
        //
        //     const text = this.div_search.form.txt_00.value;
        //     const length = this.div_search.form.txt_00.value.length;
        //
        //     var arg = new Array();
        //     let j=0;
        //
        //     for(var i = 0; i <this.ds_list.rowcount; i++) {
        //        this.ds_list.set_updatecontrol(false);
        //        this.ds_list.setRowType(i,0);
        //        this.ds_list.set_updatecontrol(true);
        //        let check = this.ds_list.getColumn(i, "병의원명").substr(0,length);
        //        if (check == text) {
        //           arg[j++] = i;
        //           this.ds_list.set_updatecontrol(false);
        //           this.ds_list.setRowType(i,2);
        //           this.ds_list.set_updatecontrol(true);
        //         }
        //       }
        // 	grdMain.setCellProperty("body",nameIdx,"cssclass","expr:dataset.getRowType(currow)==2 ?'cellBMan':'cellBWoman'");
        // };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.sta_00.addEventHandler("onclick",this.div_cont_sta_00_onclick,this);
            this.div_cont.form.grd_list.addEventHandler("oncellclick",this.div_cont_grd_list_oncellclick,this);
            this.div_search.form.btn_00.addEventHandler("onclick",this.div_search_btn_00_onclick,this);
            this.div_search.form.btn_01.addEventHandler("onclick",this.div_search_btn_01_onclick,this);
            this.div_search.form.btn_02.addEventHandler("onclick",this.div_search_btn_02_onclick,this);
            this.div_search.form.sta_02_00.addEventHandler("onclick",this.div_cont_sta_02_00_onclick,this);
            this.div_search.form.txt_00.addEventHandler("onchanged",this.div_search_txt_00_onchanged,this);
            this.div_search.form.txt_00.addEventHandler("onkeyup",this.div_search_txt_00_onchanged,this);
        };
        this.loadIncludeScript("DAY00207_P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
