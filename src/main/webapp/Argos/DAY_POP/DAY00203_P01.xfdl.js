(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00203_P01");
            this.set_titletext("간호기록소독일지");
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
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"기구번호\" type=\"STRING\" size=\"256\"/><Column id=\"기구명\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_copy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"기구번호\" type=\"STRING\" size=\"256\"/><Column id=\"기구명\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","10","50",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"525\"/><Column size=\"60\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"연번\"/><Cell col=\"1\" text=\"소독기구명\"/><Cell col=\"2\" text=\"보유수량\"/><Cell col=\"3\" text=\"지움\"/></Band><Band id=\"body\"><Cell text=\"bind:기구번호\" cssclass=\"cellBWoman\"/><Cell col=\"1\" text=\"bind:기구명\" edittype=\"normal\" editmaxlength=\"15\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:수량\" maskeditformat=\"####\" displaytype=\"mask\" edittype=\"mask\" maskeditlimitbymask=\"both\" textAlign=\"right\"/><Cell col=\"3\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"지움\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_func","10","10",null,"30","10",null,null,null,null,null,this);
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
        this.addIncludeScript("DAY00203_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00203_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00203_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00203_P01
         * 화면명   	: 간호기구 목록조회팝업
         * 화면설명 	:
         * 작성일   	: 2022-06-16
         * 작성자   	: 이동관
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

        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 삽입, 수정 공통 함수를 사용하기 위해 gv_curWinKey를 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00203_P01";

        	this.ds_search.setColumn(0, "sicode", this.parent.SICODE);

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
        				   + "sqlId=DAY00203_P01.DAY00203_P01_DS_LIST_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

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
        this.div_func_btn_reset_onclick = function(obj,e){

        	this.ds_list_copy.copyData(this.ds_list);
        	this.ds_list.clearData();
        	for(let i = 0; i<this.ds_list_copy.rowcount; i++){
        		if(!Sct.Util.isEmpty(this.ds_list_copy.getColumn(i, "기구명"))){
        			let aRow = this.ds_list.addRow();
        			this.ds_list.copyRow(aRow, this.ds_list_copy, i, "sicode=sicode,기구명=기구명,수량=수량");
        			this.ds_list.setColumn(aRow, "기구번호", aRow+1);
        		}
        	}

         	for(let i = this.ds_list.rowcount; i<this.ds_list_copy.rowcount; i++){
         		let aRow = this.ds_list.addRow();
        		this.ds_list.setColumn(aRow, "sicode", this.parent.SICODE);
        		this.ds_list.setColumn(aRow, "기구번호", aRow+1);
         		this.ds_list.setColumn(aRow, "기구명", "");
         		this.ds_list.setColumn(aRow, "수량", 0);
         	}
         	this.ds_list_copy.clearData();

        	this.ds_list.set_updatecontrol(false);
        	for(let i = 0; i<this.ds_list.rowcount; i++){
        		this.ds_list.setRowType(i, Dataset.ROWTYPE_UPDATE);
        	}
        	this.ds_list.set_updatecontrol(true);

        };


        this.div_cont_grd_list_oncellclick = function(obj,e){

        	if(e.col == 3){
        		this.ds_list.setColumn(e.row, "기구명", "");
        		this.ds_list.setColumn(e.row, "수량", 0);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.grd_list.addEventHandler("oncellclick",this.div_cont_grd_list_oncellclick,this);
            this.div_func.form.btn_reset.addEventHandler("onclick",this.div_func_btn_reset_onclick,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_save,this);
        };
        this.loadIncludeScript("DAY00203_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
