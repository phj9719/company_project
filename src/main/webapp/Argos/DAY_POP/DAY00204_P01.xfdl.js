(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00204_P01");
            this.set_titletext("상비약품목록조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,690);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"homenum\" type=\"STRING\" size=\"256\"/><Column id=\"num\" type=\"STRING\" size=\"256\"/><Column id=\"nalja\" type=\"STRING\" size=\"256\"/><Column id=\"약품명\" type=\"STRING\" size=\"256\"/><Column id=\"효능\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"INT\" size=\"256\"/><Column id=\"규격\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_copy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"homenum\" type=\"STRING\" size=\"256\"/><Column id=\"num\" type=\"STRING\" size=\"256\"/><Column id=\"nalja\" type=\"STRING\" size=\"256\"/><Column id=\"약품명\" type=\"STRING\" size=\"256\"/><Column id=\"효능\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"INT\" size=\"256\"/><Column id=\"규격\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","10","50",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","0",null,null,"0","30",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"155\"/><Column size=\"164\"/><Column size=\"55\"/><Column size=\"82\"/><Column size=\"127\"/><Column size=\"56\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"연번\"/><Cell col=\"1\" text=\"상비약품명\"/><Cell col=\"2\" text=\"약품효능\"/><Cell col=\"3\" text=\"수량\"/><Cell col=\"4\" text=\"규격\"/><Cell col=\"5\" text=\"유효기간\"/><Cell col=\"6\" text=\"지움\"/></Band><Band id=\"body\"><Cell text=\"bind:num\" cssclass=\"cellBWoman\"/><Cell col=\"1\" text=\"bind:약품명\" edittype=\"text\" textAlign=\"left\" displaytype=\"normal\" maskedittype=\"string\"/><Cell col=\"2\" text=\"bind:효능\" displaytype=\"normal\" edittype=\"text\" maskeditlimitbymask=\"decimal\" textAlign=\"left\" maskedittype=\"string\"/><Cell col=\"3\" text=\"bind:수량\" edittype=\"mask\" maskeditformat=\"#,##0\" maskeditlimitbymask=\"integer\" displaytype=\"mask\"/><Cell col=\"4\" text=\"bind:규격\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:유통기한\" edittype=\"date\" displaytype=\"mask\" maskedittype=\"string\" maskeditmaskchar=\" \" maskeditpostfixtext=\" \" calendareditformat=\"yyyy.MM.dd\" calendardateformat=\"yyyy.MM.dd\" maskeditformat=\"####.##.##\" calendarshowmonthspin=\"true\" calendarshowyearspin=\"true\"/><Cell col=\"6\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"지움\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_info","113","606","268","19",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("▲ 상비약품명, 효능, 수량, 유효기간 수정가능");
            obj.set_color("purple");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_func","10","10",null,"40","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reset","533","4","70","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("재정렬");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_save","608","4","70","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_00","0","17","83","22",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("기준점검일 :");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_01","75","17","110","22",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,690,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00204_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00204_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00204_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00204_P01
         * 화면명   	: 상비약품목록조회팝업
         * 화면설명 	:
         * 작성일   	: 2022-06-17
         * 작성자   	: 성재영
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용

         ***********************************************************************
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

        	// 그리드 수량 값 0일 때 안보이게 설정
        	this.fn_setGrid();

        	// 삽입, 수정 공통 함수를 사용하기 위해 gv_curWinKey를 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00204_P01";

        	this.ds_search.setColumn(0, "sicode", fv_sicode);

        	this.fn_search();
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	return true;
        };
        //저장 전 validation
        this.fn_save_pre = function()
        {
         	for(let i = 0; i < this.ds_list.getRowCount(); i++) {
         		if(Sct.Util.isEmpty(this.ds_list.getColumn(i, "유통기한"))) {
         			this.ds_list.setColumn(i, "유통기한", "20000101");
        		}
         	}

        	return true;
        }
        //삭제 전 validation
        this.fn_delete_pre = function ()
        {
        	return true;
        };

        //조회
        this.fn_search = function ()
        {
        	//validation
        	if (!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00204_P01.DAY00204_P01_DS_LIST_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };
        // 저장
        this.fn_save = function()
        {
        	// validation
        	if (!this.fn_save_pre()) return;

        	const svcId = "save";
         	const inDs = "ds_list";
        	this.fn_save_com(svcId, inDs);
        };
        //콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search"){
        			this.div_func.form.sta_01.set_text(this.ds_list.getColumn(0, "nalja"));


        		} else if(strSvcID == "save"){
        			for(let i = 0; i < this.ds_list.getRowCount(); i++) {
        				if(this.ds_list.getColumn(i, "유통기한") == "20000101") {
        				this.ds_list.setColumn(i, "유통기한", "");
        				}
        			}
        		}
        	}

        	else
        	{
        		this.alert(strErrorMsg);
        	}
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/
         //그리드 수량 설정
         this.fn_setGrid = function ()
         {
         	let grdMain = this.div_cont.form.grd_list;
        	let nameIdx = grdMain.getBindCellIndex("body","수량");
        	let value = "expr:dataset.getColumn(currow,'수량')=='0'?'none':'mask'";

        	this.div_cont.form.grd_list.setCellProperty("body", nameIdx, "displaytype", value);
         };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
         // 재정렬 버튼 클릭
        this.div_func_btn_reset_onclick = function(obj,e){

        	this.ds_list_copy.copyData(this.ds_list);
        	this.ds_list.clearData();
        	for(let i = 0; i<this.ds_list_copy.rowcount; i++){
        		if(!Sct.Util.isEmpty(this.ds_list_copy.getColumn(i, "약품명"))){
        			let aRow = this.ds_list.addRow();
        			this.ds_list.copyRow(aRow, this.ds_list_copy, i, "sicode=sicode, homenum=homenum, num=num, 약품명=약품명,효능=효능,수량=수량,규격=규격,유통기한=유통기한");
        			this.ds_list.setColumn(aRow, "homenum", aRow+1);
        			this.ds_list.setColumn(aRow, "num", aRow+1);
        		}
        	}

         	for(let i = this.ds_list.rowcount; i<this.ds_list_copy.rowcount; i++){
         		let aRow = this.ds_list.addRow();
        		this.ds_list.setColumn(aRow, "sicode", fv_sicode);
        		this.ds_list.setColumn(aRow, "num", aRow+1);
        		this.ds_list.setColumn(aRow, "homenum", aRow+1);
         		this.ds_list.setColumn(aRow, "약품명", "");
        		this.ds_list.setColumn(aRow, "효능", "");
         		this.ds_list.setColumn(aRow, "수량", 0);
        		this.ds_list.setColumn(aRow, "규격", "");
        		this.ds_list.setColumn(aRow, "유통기한","");
         	}
         	this.ds_list_copy.clearData();

        	this.ds_list.set_updatecontrol(false);
        	for(let i = 0; i<this.ds_list.rowcount; i++){
        		this.ds_list.setRowType(i, Dataset.ROWTYPE_UPDATE);
        	}
        	this.ds_list.set_updatecontrol(true);

        };

        // 지움 버튼 클릭, 입력시 커서 맨 앞으로 이동
        this.div_cont_grd_list_oncellclick = function(obj,e){

        	if(e.col == 6){
        		this.ds_list.setColumn(e.row, "약품명", "");
        		this.ds_list.setColumn(e.row, "효능", "");
        		this.ds_list.setColumn(e.row, "규격", "");
        		this.ds_list.setColumn(e.row, "수량", 0);
        		this.ds_list.setColumn(e.row, "유통기한", "");
        	}
        };

        // 그리드 바이트 수 제한
        this.div_cont_grd_list_onkeydown = function(obj,e)
        {
        	if (obj.currentcol == 1 || obj.currentcol == 2) {
        		let edit_value = this.div_cont.form.grd_list.getEditingValue();
        		let edit_value_byte_length = edit_value.byteLength();
        		let byte_value = 0;
        		console.log(edit_value_byte_length);

        		if (obj.currentcol == 1) byte_value = 30;
        		else if (obj.currentcol == 2) byte_value = 20;

        		if(edit_value_byte_length > byte_value){
        			while(edit_value_byte_length > byte_value){
        				edit_value = edit_value.slice(0, -1);
        				edit_value_byte_length = edit_value.byteLength();
        			}
        		}
        		this.div_cont.form.grd_list.setEditValue(edit_value);
        	}
        };
        //사용자 입력시 원본 데이터의 값을 고정되게 셋팅
        this.div_cont_grd_list_oninput = function(obj,e)
        {
        	if (e.col == 5) {

        	let curRow = obj.getSelectedDatasetRows();
        	let cell_Index = this.div_cont.form.grd_list.currentcell;

        	var oriValue = this.ds_list.getColumn(curRow ,"유통기한");

        	this.ds_list.setColumn(curRow,"유통기한", oriValue);

        	obj.setEditingValue(oriValue);
        	}
        };
        // 달력 팝업 닫을 때 값 입력
        this.div_cont_grd_list_oncloseup = function(obj,e)
        {
        	if (e.col == 5) {
         		let curRow = obj.getSelectedDatasetRows();
        		this.ds_list.setColumn(curRow,"유통기한",e.value);

        	}
        };
        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.grd_list.addEventHandler("onkeydown",this.div_cont_grd_list_onkeydown,this);
            this.div_cont.form.grd_list.addEventHandler("oninput",this.div_cont_grd_list_oninput,this);
            this.div_cont.form.grd_list.addEventHandler("oncloseup",this.div_cont_grd_list_oncloseup,this);
            this.div_cont.form.grd_list.addEventHandler("oncellclick",this.div_cont_grd_list_oncellclick,this);
            this.div_func.form.btn_reset.addEventHandler("onclick",this.div_func_btn_reset_onclick,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00204_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
