(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAYEMPCHK_PP");
            this.set_titletext("직원선택(체크박스)");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"c_staffid\" type=\"STRING\" size=\"256\"/><Column id=\"c_group\" type=\"STRING\" size=\"256\"/><Column id=\"c_name\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"근무현황\" type=\"STRING\" size=\"256\"/><Column id=\"c_become\" type=\"STRING\" size=\"256\"/><Column id=\"c_dutyname\" type=\"STRING\" size=\"256\"/><Column id=\"담당직종\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"30\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cursor=\"pointer\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\" text=\"0\"/><Cell col=\"1\" text=\"참여\" expandchar=\"rno\"/></Cell><Cell col=\"2\" text=\"현황\"/><Cell col=\"3\" text=\"그룹\"/><Cell col=\"4\" text=\"직원명\"/><Cell col=\"5\" text=\"성별\"/><Cell col=\"6\" text=\"담당직종\"/><Cell col=\"7\" text=\"입사일\"/></Band><Band id=\"body\"><Cell colspan=\"2\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:근무현황\"/><Cell col=\"3\" textAlign=\"center\" cursor=\"pointer\" text=\"bind:c_group\"/><Cell col=\"4\" combodataset=\"ds_cm_rank_cd\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:c_name\"/><Cell col=\"5\" text=\"bind:성별\"/><Cell col=\"6\" text=\"bind:담당직종\"/><Cell col=\"7\" displaytype=\"date\" expandchar=\"dot\" text=\"bind:c_become\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_date_title","7","6","90","20",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("■ 조회기준일 : ");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_date","104","6","150","20",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("2022.01.01");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_set_data",null,"4","90","22","0",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("확인");
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
        this.addIncludeScript("DAYEMPCHK_PP.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAYEMPCHK_PP.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAYEMPCHK_PP.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAYEMPCHK_PP
         * 화면명   	: 직원 선택(체크박스)
         * 화면설명 	: 각 화면에서 직원을 선택하는 팝업(체크박스)
         * 작성일   	: 2022-03-07
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *
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
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "DATE", fv_date);


        	const dateCol = this.ds_search.getColumn(0, "DATE");
        	const yyyy = dateCol.getFullYear();
        	const mm = (dateCol.getMonth() + 1) + "";
        	const dd = dateCol.getDate();

        	const date = yyyy + "." + mm.padStart(2, "0") + "." + dd;
        	this.div_cont.form.sta_date.set_text(date);

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
        				   + "sqlId=DAYEMPCHK_PP.DAYEMPCHK_PP_DS_LIST_S ";
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
        this.fn_setData = function(ds)
        {
        	this.ds_return.copyData(ds);
        	this.ds_return.clearData();

        	for (let i = 0; i < ds.rowcount; i++)
        	{
        		if (ds.getColumn(i, "CHK") == "1")
        		{
        			const nRow = this.ds_return.addRow();
        			this.ds_return.copyRow(nRow, ds, i);
        		}
        	}

        	this.close(this.ds_return.saveXML());
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 확인
        this.div_cont_btn_set_data_onclick = function(obj,e)
        {
        	this.fn_setData(this.ds_list);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.btn_set_data.addEventHandler("onclick",this.div_cont_btn_set_data_onclick,this);
        };
        this.loadIncludeScript("DAYEMPCHK_PP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
