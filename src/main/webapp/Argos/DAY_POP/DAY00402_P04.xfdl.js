(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00402_P04");
            this.set_titletext("송영이용차량등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,660);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"K_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"M_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"gubun1\" type=\"STRING\" size=\"256\"/><Column id=\"no1\" type=\"STRING\" size=\"256\"/><Column id=\"gubun2\" type=\"STRING\" size=\"256\"/><Column id=\"no2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"차구분\" type=\"STRING\" size=\"256\"/><Column id=\"차번호\" type=\"STRING\" size=\"256\"/><Column id=\"차종\" type=\"STRING\" size=\"256\"/><Column id=\"운전자1\" type=\"STRING\" size=\"256\"/><Column id=\"운전자2\" type=\"STRING\" size=\"256\"/><Column id=\"운전자3\" type=\"STRING\" size=\"256\"/><Column id=\"지정\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list2", this);
            obj._setContents("<ColumnInfo><Column id=\"차구분\" type=\"STRING\" size=\"256\"/><Column id=\"차번호\" type=\"STRING\" size=\"256\"/><Column id=\"차종\" type=\"STRING\" size=\"256\"/><Column id=\"운전자1\" type=\"STRING\" size=\"256\"/><Column id=\"운전자2\" type=\"STRING\" size=\"256\"/><Column id=\"운전자3\" type=\"STRING\" size=\"256\"/><Column id=\"지정\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_main","10","35",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","11","9","260","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_text("송영차량 이용등록");
            obj.set_cssclass("lb01");
            this.div_main.addChild(obj.name, obj);

            obj = new Div("div_line","10","40",null,"2","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            obj.set_background("#000000");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1","10","47","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("2");
            obj.set_text("시작차량");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_background("#ebf1de");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1","92","47","477","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_background("#ebf1de");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2","10","327","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("종료차량");
            obj.set_background("#fdeada");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body2","92","327","477","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_background("#fdeada");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_car_gubun","99","55","69","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("4");
            obj.set_text("이동철");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_car_no","179","55","79","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("5");
            obj.set_text("20210004");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_car_gubun2","99","335","69","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("8");
            obj.set_text("이동철");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_car_no2","179","335","79","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("9");
            obj.set_text("20210004");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_list1","10","87",null,"234","9",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("10");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"차구분\"/><Cell col=\"1\" text=\"시작차번호\"/><Cell col=\"2\" text=\"차종\"/><Cell col=\"3\" text=\"운전자1\"/><Cell col=\"4\" text=\"운전자2\"/><Cell col=\"5\" text=\"운전자3\"/><Cell col=\"6\" text=\"지정\"/></Band><Band id=\"body\"><Cell text=\"bind:차구분\"/><Cell col=\"1\" text=\"bind:차번호\"/><Cell col=\"2\" text=\"bind:차종\"/><Cell col=\"3\" text=\"bind:운전자1\"/><Cell col=\"4\" text=\"bind:운전자2\"/><Cell col=\"5\" text=\"bind:운전자3\"/><Cell col=\"6\" text=\"bind:지정\" expandchar=\"지정\" expandshow=\"show\" expandsize=\"80\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_list2","10","367",null,"234","9",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("11");
            obj.set_binddataset("ds_list2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"차구분\"/><Cell col=\"1\" text=\"시작차번호\"/><Cell col=\"2\" text=\"차종\"/><Cell col=\"3\" text=\"운전자1\"/><Cell col=\"4\" text=\"운전자2\"/><Cell col=\"5\" text=\"운전자3\"/><Cell col=\"6\" text=\"지정\"/></Band><Band id=\"body\"><Cell text=\"bind:차구분\"/><Cell col=\"1\" text=\"bind:차번호\"/><Cell col=\"2\" text=\"bind:차종\"/><Cell col=\"3\" text=\"bind:운전자1\"/><Cell col=\"4\" text=\"bind:운전자2\"/><Cell col=\"5\" text=\"bind:운전자3\"/><Cell col=\"6\" text=\"bind:지정\" expandchar=\"지정\" expandshow=\"show\" expandsize=\"80\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Div("div_func","10","0",null,"35","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_refresh","0","5","90","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("새로고침");
            obj.set_cssclass("btn_refresh");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_set",null,"5","90","25","0",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("차량 지정");
            obj.set_tooltiptype("hover");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"5","90","25","95",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("지정 해제");
            obj.set_tooltiptype("hover");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,660,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_main.form.sta_car_gubun","text","ds_data","gubun1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_main.form.sta_car_no","text","ds_data","no1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_main.form.sta_car_gubun2","text","ds_data","gubun2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_main.form.sta_car_no2","text","ds_data","no2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00402_P04.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00402_P04.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00402_P04.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00402_P04
         * 화면명   	: 송영이용차량등록
         * 화면설명 	:
         * 작성일   	: 2022-05-03
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용

         ***********************************************************************
         비고 :
         */
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        const fv_sicode = nexacro.getApplication().gds_userInfo.getColumn(0, "sicode");
        const val1 = this.parent.VAL1;
        const val2 = this.parent.VAL2;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "SICODE", fv_sicode);

        	// 오픈시 조회
        	this.fn_search();
        };
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	return true;
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //조회
        this.fn_search = function ()
        {
        	//validation
        	if (!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList"
        				   + " sqlId=DAY00402_P04.DAY00402_P04_DS_LIST_S";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if (strSvcID == "search")
        		{
        			this.ds_list2.clearData();
        			this.ds_list2.copyData(this.ds_list);

        			this.ds_list.set_rowposition(-1);
        			this.ds_list2.set_rowposition(-1);

        			trace("val1 : " + val1);
        			trace("val2 : " + val2);

        			this.ds_data.setColumn(0, "gubun1", val1);
        			this.ds_data.setColumn(0, "gubun2", val2);

        			const fRow1 = this.ds_list.findRow("차구분", val1);
        			if (fRow1 > -1)
        			{
        				this.ds_data.setColumn(0, "no1", this.ds_list.getColumn(fRow1, "차번호"));
        			}
        			const fRow2 = this.ds_list2.findRow("차구분", val2);
        			if (fRow2 > -1)
        			{
        				this.ds_data.setColumn(0, "no2", this.ds_list2.getColumn(fRow2, "차번호"));
        			}

        			this.fn_setGridCellChange1(val1);
        			this.fn_setGridCellChange2(val2);
        		}
        	}
        	else
        	{
        		this.alert(strErrorMsg);
        		return false;
        	}
        };
        /***********************************************************************
         * User Functions
         ***********************************************************************/
        // 차량과 일치하는 행 배경색 변경하기
        this.fn_setGridCellChange1 = function(val1)
        {
        	for (let i = 0; i < this.div_main.form.grd_list1.getCellCount("body"); i++)
        	{
        		const expr1 = "expr:dataset.getColumn(currow, '차구분') == '" + val1 + "' ? 'CellYellow_C' : ''";
        		this.div_main.form.grd_list1.setCellProperty("body", i, "cssclass", expr1);
        	}
        };

        this.fn_setGridCellChange2 = function(val2)
        {
        	for (let i = 0; i < this.div_main.form.grd_list2.getCellCount("body"); i++)
        	{
        		const expr2 = "expr:dataset.getColumn(currow, '차구분') == '" + val2 + "' ? 'CellYellow_C' : ''";
        		this.div_main.form.grd_list2.setCellProperty("body", i, "cssclass", expr2);
        	}
        };

        // 부모창에 데이터 전송
        this.fn_setData = function(ds)
        {
        	this.ds_return.copyData(ds);
        	this.ds_return.clearData();

        	this.ds_return.addRow();
        	this.ds_return.copyRow(0, ds, 0);

        	this.close(this.ds_return.saveXML());
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 새로고침 버튼
        this.div_func_btn_refresh_onclick = function(obj,e)
        {
        	this.fn_search();
        };

        // 시 변경 이벤트
        this.edt_hour_onchanged = function(obj,e)
        {
        	if (e.postvalue > "23" || e.postvalue == "")
        	{
        		obj.set_value("00");
        	}
        	else if (e.postvalue.length == 1)
        	{
        		obj.set_value("0" + e.postvalue);
        	}
        };

        // 분 변경 이벤트
        this.edt_min_onchanged = function(obj,e)
        {
        	if (e.postvalue > "59" || e.postvalue == "")
        	{
        		obj.set_value("00");
        	}
        	else if (e.postvalue.length == 1)
        	{
        		obj.set_value("0" + e.postvalue);
        	}
        };

        // 그리드1 셀 클릭 이벤트
        this.div_main_grd_list1_oncellclick = function(obj,e)
        {
        	this.ds_list.set_rowposition(-1);
        };

        // 그리드2 셀 클릭 이벤트
        this.div_main_grd_list2_oncellclick = function(obj,e)
        {
        	this.ds_list2.set_rowposition(-1);
        };

        // 그리드1 확장버튼 클릭 이벤트
        this.div_main_grd_list1_onexpandup = function(obj,e)
        {
        	const idx = obj.getBindCellIndex("body", "지정");
        	if (e.col == idx)
        	{
        		const gubun1 = this.ds_list.getColumn(e.row, "차구분");
        		const no1 = this.ds_list.getColumn(e.row, "차번호");

        		this.ds_data.setColumn(0, "gubun1", gubun1);
        		this.ds_data.setColumn(0, "no1", no1);

        		this.fn_setGridCellChange1(gubun1);
        	}
        };

        // 그리드2 확장버튼 클릭 이벤트
        this.div_main_grd_list2_onexpandup = function(obj,e)
        {
        	const idx = obj.getBindCellIndex("body", "지정");
        	if (e.col == idx)
        	{
        		const gubun2 = this.ds_list2.getColumn(e.row, "차구분");
        		const no2 = this.ds_list2.getColumn(e.row, "차번호");

        		this.ds_data.setColumn(0, "gubun2", gubun2);
        		this.ds_data.setColumn(0, "no2", no2);

        		this.fn_setGridCellChange2(gubun2);
        	}
        };

        // 차량 지정 버튼
        this.div_func_btn_set_onclick = function(obj,e)
        {
        	this.fn_setData(this.ds_data);
        };

        // 지정 해제 버튼
        this.div_func_btn_cancel_onclick = function(obj,e)
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
            this.div_main.form.grd_list1.addEventHandler("oncellclick",this.div_main_grd_list1_oncellclick,this);
            this.div_main.form.grd_list1.addEventHandler("onexpandup",this.div_main_grd_list1_onexpandup,this);
            this.div_main.form.grd_list2.addEventHandler("oncellclick",this.div_main_grd_list2_oncellclick,this);
            this.div_main.form.grd_list2.addEventHandler("onexpandup",this.div_main_grd_list2_onexpandup,this);
            this.div_func.form.btn_refresh.addEventHandler("onclick",this.div_func_btn_refresh_onclick,this);
            this.div_func.form.btn_set.addEventHandler("onclick",this.div_func_btn_set_onclick,this);
            this.div_func.form.btn_cancel.addEventHandler("onclick",this.div_func_btn_cancel_onclick,this);
        };
        this.loadIncludeScript("DAY00402_P04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
