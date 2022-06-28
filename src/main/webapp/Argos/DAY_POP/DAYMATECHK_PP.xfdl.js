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
            this.set_titletext("수급자선택(체크박스)");
            this.set_locale("ko_KR");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_autoid\" type=\"INT\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"m_jumin1\" type=\"STRING\" size=\"256\"/><Column id=\"수급생일\" type=\"DATE\" size=\"256\"/><Column id=\"거주현황\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomno\" type=\"INT\" size=\"256\"/><Column id=\"m_step\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"30\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cursor=\"pointer\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\" text=\"0\"/><Cell col=\"1\" text=\"참여\" expandchar=\"rno\"/></Cell><Cell col=\"2\" text=\"현황\"/><Cell col=\"3\" text=\"그룹\"/><Cell col=\"4\" text=\"수급자명\"/><Cell col=\"5\" text=\"성별\"/><Cell col=\"6\" text=\"생일\"/><Cell col=\"7\" text=\"생활실\"/></Band><Band id=\"body\"><Cell colspan=\"2\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:거주현황\"/><Cell col=\"3\" textAlign=\"center\" cursor=\"pointer\" text=\"bind:m_group\"/><Cell col=\"4\" combodataset=\"ds_cm_rank_cd\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:m_name\"/><Cell col=\"5\" text=\"bind:성별\"/><Cell col=\"6\" text=\"bind:수급생일\" maskeditformat=\"##-##-##\" displaytype=\"date\"/><Cell col=\"7\" expandchar=\"dot\" text=\"bind:m_roomname\"/></Band></Format></Formats>");
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
            obj = new Layout("default","",450,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAYMATECHK_PP.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAYMATECHK_PP.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAYMATECHK_PP.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAYMATECHK_PP
         * 화면명   	: 수급자 선택(체크박스)
         * 화면설명 	: 각 화면에서 수급자를 선택하는 팝업(체크박스)
         * 작성일   	: 2022-03-11
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
        	const dd = dateCol.getDate() + "";

        	const date = yyyy + "." + mm.padStart(2, "0") + "." + dd.padStart(2, "0");
        	this.div_cont.form.sta_date.set_text(date);

        	this.fn_search();
        };

        this.initGrid = function(grid)
        {
        	const nameIdx = grid.getBindCellIndex("body", "m_name");
        	const nowIdx = grid.getBindCellIndex("body", "거주현황");

        	const nameCss = "expr:dataset.getColumn(currow, '성별') == '남' ? 'cellBMan' : 'cellBWoman'";
        	const nowCss = "expr:dataset.getColumn(currow, '거주현황') == '퇴소자' ? 'cellBRetire' : ''";

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
        				   + "sqlId=DAYMATECHK_PP.DAYMATECHK_PP_DS_LIST_S ";
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

        this.div_cont_grd_list_oncellclick = function(obj,e)
        {
        	if (e.cell == 1)
        	{
        		trace(obj.getCellPropertyValue(e.row, e.cell, "cssclass"));
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.grd_list.addEventHandler("oncellclick",this.div_cont_grd_list_oncellclick,this);
            this.div_cont.form.btn_set_data.addEventHandler("onclick",this.div_cont_btn_set_data_onclick,this);
        };
        this.loadIncludeScript("DAYMATECHK_PP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
