(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00205_P01");
            this.set_titletext("의료기기목록조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(560,590);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"기기번호\" type=\"STRING\" size=\"256\"/><Column id=\"기기명\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"INT\" size=\"256\"/><Column id=\"구입일\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_copy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"기기번호\" type=\"STRING\" size=\"256\"/><Column id=\"기기명\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"INT\" size=\"256\"/><Column id=\"구입일\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","10","50",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","0",null,null,"0","30",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"382\"/><Column size=\"60\"/><Column size=\"57\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"연번\"/><Cell col=\"1\" text=\"의료(응급)기기명\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"지움\"/></Band><Band id=\"body\"><Cell text=\"bind:기기번호\" cssclass=\"cellBWoman\"/><Cell col=\"1\" text=\"bind:기기명\" edittype=\"normal\" editmaxlength=\"15\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:수량\" maskeditformat=\"###\" displaytype=\"mask\" edittype=\"mask\" maskeditlimitbymask=\"both\" textAlign=\"right\"/><Cell col=\"3\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"지움\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_info","113","516","238","19",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("▲ 의료(응급)기기명, 보유수량 수정가능");
            obj.set_color("purple");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_func","10","10",null,"30","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reset","393","4","70","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("재정렬");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_save","468","4","70","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",560,590,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00205_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00205_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00205_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00205_P01
         * 화면명   	: 의료기기 목록조회
         * 화면설명 	:
         * 작성일   	: 2022-06-21
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

        	// 삽입, 수정 공통 함수를 사용하기 위해 gv_curWinKey를 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00205_P01";

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

        this.fn_save_pre = function()
        {
        	return true;
        }

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
        				   + "sqlId=DAY00205_P01.DAY00205_P01_DS_LIST_S ";

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
        			this.ds_list.set_rowposition(-1);
        		} else if(strSvcID == "save"){
        			this.fn_search();
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
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
         // 재정렬 버튼 클릭
        this.div_func_btn_reset_onclick = function(obj,e){

        	this.ds_list_copy.copyData(this.ds_list);
        	this.ds_list.clearData();
        	for(let i = 0; i<this.ds_list_copy.rowcount; i++){
        		if(!Sct.Util.isEmpty(this.ds_list_copy.getColumn(i, "기기명"))){
        			let aRow = this.ds_list.addRow();
        			this.ds_list.copyRow(aRow, this.ds_list_copy, i, "sicode=sicode,기기번호=기기번호,기기명=기기명,수량=수량,구입일=구입일 ");
        			this.ds_list.setColumn(aRow, "기기번호", aRow+1);
        		}
        	}

         	for(let i = this.ds_list.rowcount; i<this.ds_list_copy.rowcount; i++){
         		let aRow = this.ds_list.addRow();
        		this.ds_list.setColumn(aRow, "sicode", fv_sicode);
        		this.ds_list.setColumn(aRow, "기기번호", aRow+1);
         		this.ds_list.setColumn(aRow, "기기명", "");
         		this.ds_list.setColumn(aRow, "수량", 0);
        		this.ds_list.setColumn(aRow, "구입일", "");
         	}
         	this.ds_list_copy.clearData();

        	this.ds_list.set_updatecontrol(false);
        	for(let i = 0; i<this.ds_list.rowcount; i++){
        		this.ds_list.setRowType(i, Dataset.ROWTYPE_UPDATE);
        	}
        	this.ds_list.set_updatecontrol(true);

        };
        // 지움 버튼 클릭
        this.div_cont_grd_list_oncellclick = function(obj,e){

        	if(e.col == 3){
        		this.ds_list.setColumn(e.row, "기기명", "");
        		this.ds_list.setColumn(e.row, "수량", 0);
        		this.ds_list.setColumn(e.row, "구입일", "");
        	}
        };
        // 의료기기명 바이트수 30제한
        this.div_cont_grd_list_onkeydown = function(obj,e)
        {
        	if (obj.currentcol == 1) {
        		let edit_value = this.div_cont.form.grd_list.getEditingValue();
        		let edit_value_byte_length = edit_value.byteLength();
        		let byte_value = 0;
        		console.log(edit_value_byte_length);

        		if (obj.currentcol == 1) byte_value = 30;

        		this.div_cont.form.grd_list.setEditValue(edit_value);

        		if(edit_value_byte_length > byte_value){
        			while(edit_value_byte_length > byte_value){
        				edit_value = edit_value.slice(0, -1);
        				edit_value_byte_length = edit_value.byteLength();
        			}
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.grd_list.addEventHandler("oncellclick",this.div_cont_grd_list_oncellclick,this);
            this.div_cont.form.grd_list.addEventHandler("onkeydown",this.div_cont_grd_list_onkeydown,this);
            this.div_func.form.btn_reset.addEventHandler("onclick",this.div_func_btn_reset_onclick,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.ds_list.addEventHandler("onvaluechanged",this.ds_list_onvaluechanged,this);
        };
        this.loadIncludeScript("DAY00205_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
