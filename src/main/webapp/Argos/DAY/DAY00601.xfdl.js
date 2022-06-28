(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00601");
            this.set_titletext("6-1 프로그램 의견수렴현황 화면설계서");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"year\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"DATE\" size=\"256\"/><Column id=\"date_to\" type=\"DATE\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"기록번호\" type=\"STRING\" size=\"256\"/><Column id=\"수렴일\" type=\"DATE\" size=\"256\"/><Column id=\"수급코드\" type=\"STRING\" size=\"256\"/><Column id=\"수급자명\" type=\"STRING\" size=\"256\"/><Column id=\"영역구분\" type=\"STRING\" size=\"256\"/><Column id=\"영역구분명\" type=\"STRING\" size=\"256\"/><Column id=\"수렴내용\" type=\"STRING\" size=\"256\"/><Column id=\"반영내용\" type=\"STRING\" size=\"256\"/><Column id=\"작성코드\" type=\"STRING\" size=\"256\"/><Column id=\"작성자명\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","32","1881","761",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_grid","0","29","1874","721",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_00","11","9","1852","708",null,null,null,null,null,null,this.div_cont.form.div_grid.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\"/><Column size=\"28\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"523\"/><Column size=\"384\"/><Column size=\"97\"/><Column size=\"76\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"61\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"출력\"/></Cell><Cell col=\"2\" text=\"의견수렴일\"/><Cell col=\"3\" text=\"수급자명\"/><Cell col=\"4\" text=\"영역구분\"/><Cell col=\"5\" text=\"의견수렴\"/><Cell col=\"6\" text=\"반영내용\"/><Cell col=\"7\" text=\"작성자명\"/><Cell col=\"8\" text=\"조회\"/></Band><Band id=\"body\"><Cell colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" text=\"bind:chk\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"mask\" text=\"bind:수렴일\" calendardateformat=\"yyyy.MM.dd\" calendareditformat=\"yyyy-MM-dd\" cssclass=\"essential\" maskeditformat=\"####.##.##\" maskedittype=\"string\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:수급자명\" textAlign=\"left\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:영역구분명\"/><Cell col=\"5\" displaytype=\"textareacontrol\" textareascrolltype=\"vertical\" textareamaxlength=\"500\" text=\"bind:수렴내용\" verticalAlign=\"top\" textAlign=\"left\"/><Cell col=\"6\" displaytype=\"textareacontrol\" textareascrolltype=\"vertical\" textareamaxlength=\"200\" text=\"bind:반영내용\" verticalAlign=\"top\" textAlign=\"left\"/><Cell col=\"7\" displaytype=\"text\" text=\"bind:작성자명\" textAlign=\"left\"/><Cell col=\"8\" displaytype=\"buttoncontrol\" edittype=\"button\" expandimage=\"url('theme://images/ico_search.png')\" expandshow=\"show\" expandsize=\"92\" autosizecol=\"limitmax\"/></Band></Format></Formats>");
            this.div_cont.form.div_grid.addChild(obj.name, obj);

            obj = new Static("sta_00","832","3","225","27",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text(" 건강개선프로그램 의견수렴");
            obj.set_cssclass("lb01");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","530","64",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"5","70","26","100",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_year","10","5","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","112","5","110","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","240","5","110","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","226","5","10","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_search","20","37","79","27",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("수급자 검색 :");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_00","112","35","89","27",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_01","215","35","55","27",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("1분기");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_02","272","35","55","27",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("2분기");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_03","329","35","55","27",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("3분기");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_04","386","35","55","27",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("4분기");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_00","443","35","55","27",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("1년");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","433","0","1435","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_report","101","5","141","27",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("의견수렴 리스트");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_new","5","5","88","27",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("새로작성");
            obj.set_cssclass("btn_newdoc");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cmb_year","value","ds_search","year");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cal_date_from","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_date_to","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edt_00","value","ds_search","name");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00601.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00601.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00601.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00601
         * 화면명   	: 6-1 프로그램 의견수렴현황
         * 화면설명 	:
         * 작성일   	: 2022-06-23
         * 작성자   	: 성재영
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *
         ***********************************************************************/
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_sicode = nexacro.getApplication().gds_userInfo.getColumn(0, "sicode");
        this.fv_staff_id = nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid");
        this.fv_staff_name = nexacro.getApplication().gds_userInfo.getColumn(0, "c_name").trim();
        this.fv_staff_dutyname = nexacro.getApplication().gds_userInfo.getColumn(0, "c_dutyname");
        // this.fv_currentDS = this.ds_list;
        // this.fv_currentGrid = this.div_cont.form.div_left.form.grd_list;
        this.reSearchData = "";
        this.searchFlag = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 현재 년도 구하기
        	const date = new Date();
        	const thisYear = date.getFullYear();

         	// 년도 콤보박스 세팅
         	this.ds_year.clearData();
          	let nRow;
         		for (let i = 10; i > 0; i--) {
         			nRow = this.ds_year.addRow();
         			this.ds_year.setColumn(nRow, "CMCD", thisYear - i);
          		this.ds_year.setColumn(nRow, "CMNM", (thisYear - i) + "년");
         		}
          	for (let i = 0; i < 11; i++) {
          		nRow = this.ds_year.addRow();
          		this.ds_year.setColumn(nRow, "CMCD", thisYear + i);
          		this.ds_year.setColumn(nRow, "CMNM", (thisYear + i) + "년");
          	}

         	this.ds_search.setColumn(0, "sicode", this.fv_sicode);
         	this.ds_search.setColumn(0, "year", thisYear);
        	this.ds_search.setColumn(0, "date_from", thisYear + "0101");
        	this.ds_search.setColumn(0, "date_to", thisYear +"1231");
        	this.ds_search.setColumn(0, "name", "");
        };
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
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
        				   + "sqlId=DAY00601.DAY00601_DS_LIST_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };
        // 조회버튼 클릭
        this.fn_searchBtn = function(obj,e)
        {
        	this.fn_search();
        };
        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if (strSvcID == "search")
        		{
        			this.ds_list.set_rowposition(-1);
        		}
        	}
        	else
        	{
        		this.alert(strErrorMsg);
        	}
        };
        // 수급자 검색창 클릭
        this.div_search_edt_00_oneditclick = function(obj,e)
        {
        	this.ds_search.setColumn(0 ,"name", "");
        };
        // 1분기
        this.div_search_btn_01_onclick = function(obj,e)
        {
        	let year = this.div_search.form.cmb_year.value;
        	this.ds_search.setColumn(0, "date_from", year + "0101");
        	this.ds_search.setColumn(0, "date_to", year + "0331");

        	this.fn_search();
        };
        // 2분기
        this.div_search_btn_02_onclick = function(obj,e)
        {
        	let year = this.div_search.form.cmb_year.value;
        	this.ds_search.setColumn(0, "date_from", year + "0401");
        	this.ds_search.setColumn(0, "date_to", year + "0630");

        	this.fn_search();
        };
        // 3분기
        this.div_search_btn_03_onclick = function(obj,e)
        {
        	let year = this.div_search.form.cmb_year.value;
        	this.ds_search.setColumn(0, "date_from", year + "0701");
        	this.ds_search.setColumn(0, "date_to", year + "0931");

        	this.fn_search();
        };
        // 4분기
        this.div_search_btn_04_onclick = function(obj,e)
        {
        	let year = this.div_search.form.cmb_year.value;
        	this.ds_search.setColumn(0, "date_from", year + "1001");
        	this.ds_search.setColumn(0, "date_to", year + "1231");

        	this.fn_search();
        };
        // 1년
        this.div_search_btn_00_onclick = function(obj,e)
        {
        	let year = this.div_search.form.cmb_year.value;
        	this.ds_search.setColumn(0, "date_from", year + "0101");
        	this.ds_search.setColumn(0, "date_to", year + "1231");

        	this.fn_search();
        };
        // 그리드 셀 클릭(체크, 팝업)
        this.div_cont_div_grid_grd_00_oncellclick = function(obj,e)
        {
        	if (e.col == 0) {
        		if (this.ds_list.getColumn(e.row, "chk") != 1) {
        			this.ds_list.setColumn(e.row, "chk", 1);
        		} else {
        			this.ds_list.setColumn(e.row, "chk", 0);
        		}
        	}

        	if (e.col == 8) {
        	const param = {
        			SICODE : this.ds_list.getColumn(e.row, "sicode")
        		,	BPNUM : this.ds_list.getColumn(e.row, "기록번호")
        	};
        	Sct.popup(this, "popup", 450, 400, "", param, "DAY_POP::DAY00601_P01.xfdl", "fn_popCallback");
        	}
        };

        // 새로작성 버튼 클릭
        this.div_func_btn_new_onclick = function(obj,e)
        {
        	if (this.ds_list.getRowCount() < 1) return;
        	const param = {
        			SICODE : this.fv_sicode
        		,	BPNUM : ""
        	};
        	Sct.popup(this, "popup", 450, 400, "", param, "DAY_POP::DAY00601_P01.xfdl", "fn_popCallback");

        };
        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "popup" :
        				this.fn_search();
        			break;
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_grid.form.grd_00.addEventHandler("oncellclick",this.div_cont_div_grid_grd_00_oncellclick,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.edt_00.addEventHandler("oneditclick",this.div_search_edt_00_oneditclick,this);
            this.div_search.form.btn_01.addEventHandler("onclick",this.div_search_btn_01_onclick,this);
            this.div_search.form.btn_02.addEventHandler("onclick",this.div_search_btn_02_onclick,this);
            this.div_search.form.btn_03.addEventHandler("onclick",this.div_search_btn_03_onclick,this);
            this.div_search.form.btn_04.addEventHandler("onclick",this.div_search_btn_04_onclick,this);
            this.div_search.form.btn_00.addEventHandler("onclick",this.div_search_btn_00_onclick,this);
            this.div_func.form.btn_new.addEventHandler("onclick",this.div_func_btn_new_onclick,this);
        };
        this.loadIncludeScript("DAY00601.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
