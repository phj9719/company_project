(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAYEMP_PP");
            this.set_titletext("직원선택");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"c_staffid\" type=\"STRING\" size=\"256\"/><Column id=\"c_group\" type=\"STRING\" size=\"256\"/><Column id=\"c_name\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"근무현황\" type=\"STRING\" size=\"256\"/><Column id=\"c_become\" type=\"STRING\" size=\"256\"/><Column id=\"c_retire\" type=\"STRING\" size=\"256\"/><Column id=\"c_dutyname\" type=\"STRING\" size=\"256\"/><Column id=\"담당직종\" type=\"STRING\" size=\"256\"/><Column id=\"근무종료일\" type=\"STRING\" size=\"256\"/><Column id=\"c_phone1\" type=\"STRING\" size=\"256\"/><Column id=\"c_phone2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"DATE\" size=\"256\"/><Column id=\"FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"그룹\"/><Cell col=\"1\" text=\"직원성명\"/><Cell col=\"2\" text=\"성\"/><Cell col=\"3\" text=\"담당직종\"/><Cell col=\"4\" text=\"현황\"/><Cell col=\"5\" text=\"입사일\"/><Cell col=\"6\" text=\"퇴사일\"/></Band><Band id=\"body\"><Cell text=\"bind:c_group\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:c_name\" cursor=\"pointer\"/><Cell col=\"2\" combodataset=\"ds_cm_rank_cd\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:성별\"/><Cell col=\"3\" text=\"bind:c_dutyname\"/><Cell col=\"4\" text=\"bind:근무현황\"/><Cell col=\"5\" text=\"bind:c_become\" displaytype=\"date\" expandchar=\"dot\"/><Cell col=\"6\" text=\"bind:c_retire\" displaytype=\"date\" expandchar=\"dot\" color=\"tomato\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00","7","6","250","20",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("■ 선택시 직원성명을 클릭 하세요.");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"4","70","22","0",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,450,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAYEMP_PP.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAYEMP_PP.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAYEMP_PP.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAYEMP_PP
         * 화면명   	: 직원 선택
         * 화면설명 	: 각 화면에서 입력 담당자를 선택하는 팝업
         * 작성일   	: 2022-02-28
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *	2022-03-07		조기종		지움 버튼 추가
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
        const fv_date = this.parent.DATE;
        const fv_flag = this.parent.FLAG;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "DATE", fv_date);
        	this.ds_search.setColumn(0, "FLAG", fv_flag);

        	this.fn_search();
        };

        this.initGrid = function(grid)
        {
        	const nameIdx = grid.getBindCellIndex("body", "c_name");
        	const nowIdx = grid.getBindCellIndex("body", "근무현황");

        	const nameCss = "expr:dataset.getColumn(currow, '성별') == '남' ? 'cellBMan' : 'cellBWoman'";
        	const nowCss = "expr:dataset.getColumn(currow, '근무현황') == '퇴사자' ? 'cellBRetire' : ''";

        	grid.setCellProperty("body", nameIdx, "cssclass", nameCss);
        	grid.setCellProperty("body", nowIdx, "cssclass", nowCss);
        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        this.fn_search = function()
        {
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAYEMP_PP.DAYEMP_PP_DS_LIST_S ";
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
        			this.initGrid(this.div_cont.form.grd_list);
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
        this.fn_setData = function(ds, row)
        {
        	this.ds_return.copyData(ds);
        	this.ds_return.clearData();

        	this.ds_return.addRow();
        	this.ds_return.copyRow(0, ds, row);

        	this.close(this.ds_return.saveXML());
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 그리드 셀 클릭 이벤트
        this.div_cont_grd_list_oncellclick = function(obj,e)
        {
        	const nameIdx = obj.getBindCellIndex("body", "c_name");

        	// 직원성명
        	if (e.col == nameIdx)
        	{
        		this.fn_setData(this.ds_list, e.row);
        	}
        };

        // 지움
        this.div_cont_btn_del_onclick = function(obj,e)
        {
        	this.ds_return.clearData();
        	this.ds_return.addColumn("DEL", "STRING");
        	const nRow = this.ds_return.addRow();
        	this.ds_return.setColumn(nRow, "DEL", 1);

        	this.close(this.ds_return.saveXML());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.grd_list.addEventHandler("oncellclick",this.div_cont_grd_list_oncellclick,this);
            this.div_cont.form.btn_del.addEventHandler("onclick",this.div_cont_btn_del_onclick,this);
        };
        this.loadIncludeScript("DAYEMP_PP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
