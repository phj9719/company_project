(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00702_P04");
            this.set_titletext("주간식단 불러오기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1222,770);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rnum\" type=\"STRING\" size=\"256\"/><Column id=\"color\" type=\"STRING\" size=\"256\"/><Column id=\"식단제공\" type=\"STRING\" size=\"256\"/><Column id=\"DAY1\" type=\"STRING\" size=\"256\"/><Column id=\"DAY2\" type=\"STRING\" size=\"256\"/><Column id=\"DAY3\" type=\"STRING\" size=\"256\"/><Column id=\"DAY4\" type=\"STRING\" size=\"256\"/><Column id=\"DAY5\" type=\"STRING\" size=\"256\"/><Column id=\"DAY6\" type=\"STRING\" size=\"256\"/><Column id=\"DAY7\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_week", this);
            obj._setContents("<ColumnInfo><Column id=\"SUN\" type=\"STRING\" size=\"256\"/><Column id=\"MON\" type=\"STRING\" size=\"256\"/><Column id=\"TUE\" type=\"STRING\" size=\"256\"/><Column id=\"WED\" type=\"STRING\" size=\"256\"/><Column id=\"THU\" type=\"STRING\" size=\"256\"/><Column id=\"FRI\" type=\"STRING\" size=\"256\"/><Column id=\"SAT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_func","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_refresh","180","7","70","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_00","7","7","48","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("기준일");
            obj.set_textAlign("center");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_call","255","7","146","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("주간 식단 적용하기");
            this.div_func.addChild(obj.name, obj);

            obj = new Calendar("cal_date_pic","150","7","25","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            this.div_func.addChild(obj.name, obj);

            obj = new Calendar("cal_date","61","7","90","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            this.div_func.addChild(obj.name, obj);

            obj = new Div("div_conf","10","40",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Div("div_main","20","0",null,null,"20","10",null,null,null,null,this.div_conf.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.div_conf.addChild(obj.name, obj);

            obj = new Grid("grd_head","0","39","107","655",null,null,null,null,null,null,this.div_conf.form.div_main.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj.set_enableevent("false");
            obj.set_enable("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"35\"/></Columns><Rows><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"구분\" background=\"#ffffff\" border=\"1px solid #cccccc,1px solid #cccccc,1px solid #696969\"/><Cell col=\"1\" text=\"행\" background=\"#ffffff\" border=\"1px solid #cccccc,1px solid #cccccc,1px solid #696969\"/><Cell row=\"1\" rowspan=\"6\" text=\"아침식단\" background=\"#ffffff\"/><Cell row=\"1\" col=\"1\" text=\"1\" background=\"#ffffff\"/><Cell row=\"2\" col=\"1\" text=\"2\" background=\"#ffffff\"/><Cell row=\"3\" col=\"1\" text=\"3\" background=\"#ffffff\"/><Cell row=\"4\" col=\"1\" text=\"4\" background=\"#ffffff\"/><Cell row=\"5\" col=\"1\" text=\"5\" background=\"#ffffff\"/><Cell row=\"6\" col=\"1\" text=\"6\" background=\"#ffffff\"/><Cell row=\"7\" rowspan=\"6\" text=\"점심식단\" background=\"#e6e6fa\"/><Cell row=\"7\" col=\"1\" text=\"1\" background=\"#e6e6fa\"/><Cell row=\"8\" col=\"1\" text=\"2\" background=\"#e6e6fa\"/><Cell row=\"9\" col=\"1\" text=\"3\" background=\"#e6e6fa\"/><Cell row=\"10\" col=\"1\" text=\"4\" background=\"#e6e6fa\"/><Cell row=\"11\" col=\"1\" text=\"5\" background=\"#e6e6fa\"/><Cell row=\"12\" col=\"1\" text=\"6\" background=\"#e6e6fa\"/><Cell row=\"13\" rowspan=\"6\" text=\"저녁식단\" background=\"#ffffff\"/><Cell row=\"13\" col=\"1\" text=\"1\" background=\"#ffffff\"/><Cell row=\"14\" col=\"1\" text=\"2\" background=\"#ffffff\"/><Cell row=\"15\" col=\"1\" text=\"3\" background=\"#ffffff\"/><Cell row=\"16\" col=\"1\" text=\"4\" background=\"#ffffff\"/><Cell row=\"17\" col=\"1\" text=\"5\" background=\"#ffffff\"/><Cell row=\"18\" col=\"1\" text=\"6\" background=\"#ffffff\"/><Cell row=\"19\" rowspan=\"3\" text=\"오전간식\" background=\"#e6e6fa\"/><Cell row=\"19\" col=\"1\" text=\"1\" background=\"#e6e6fa\"/><Cell row=\"20\" col=\"1\" text=\"2\" background=\"#e6e6fa\"/><Cell row=\"21\" col=\"1\" text=\"3\" background=\"#e6e6fa\"/><Cell row=\"22\" rowspan=\"3\" text=\"오후간식\" background=\"#ffffff\"/><Cell row=\"22\" col=\"1\" text=\"1\" background=\"#ffffff\"/><Cell row=\"23\" col=\"1\" text=\"2\" background=\"#ffffff\"/><Cell row=\"24\" col=\"1\" text=\"3\" background=\"#ffffff\"/><Cell row=\"25\" rowspan=\"3\" text=\"기능식이\" background=\"#e6e6fa\"/><Cell row=\"25\" col=\"1\" text=\"1\" background=\"#e6e6fa\"/><Cell row=\"26\" col=\"1\" text=\"2\" background=\"#e6e6fa\"/><Cell row=\"27\" col=\"1\" text=\"3\" background=\"#e6e6fa\"/><Cell row=\"28\" text=\"당뇨\" background=\"#ffffff\"/><Cell row=\"28\" col=\"1\" text=\"1\" background=\"#ffffff\"/><Cell row=\"29\" text=\"유동\" background=\"#ffffff\"/><Cell row=\"29\" col=\"1\" text=\"1\" background=\"#ffffff\"/><Cell row=\"30\" text=\"저염\" background=\"#ffffff\"/><Cell row=\"30\" col=\"1\" text=\"1\" background=\"#ffffff\"/></Band></Format></Formats>");
            this.div_conf.form.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_list","106","60","1053","634",null,null,null,null,null,null,this.div_conf.form.div_main.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"21\"/></Rows><Band id=\"body\"><Cell text=\"bind:DAY1\"/><Cell col=\"1\" text=\"bind:DAY2\"/><Cell col=\"2\" text=\"bind:DAY3\"/><Cell col=\"3\" text=\"bind:DAY4\"/><Cell col=\"4\" text=\"bind:DAY5\"/><Cell col=\"5\" text=\"bind:DAY6\"/><Cell col=\"6\" text=\"bind:DAY7\"/></Band></Format></Formats>");
            this.div_conf.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_date","0","7","68","26",null,null,null,null,null,null,this.div_conf.form.div_main.form);
            obj.set_taborder("3");
            obj.set_text("주간식단일");
            obj.set_textAlign("center");
            this.div_conf.form.div_main.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","77","7","90","26",null,null,null,null,null,null,this.div_conf.form.div_main.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            this.div_conf.form.div_main.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","183","7","90","26",null,null,null,null,null,null,this.div_conf.form.div_main.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0 0");
            this.div_conf.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_00","170","12","8","17",null,null,null,null,null,null,this.div_conf.form.div_main.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_conf.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_diet","290","7","68","26",null,null,null,null,null,null,this.div_conf.form.div_main.form);
            obj.set_taborder("7");
            obj.set_text("식단제공처");
            obj.set_textAlign("center");
            this.div_conf.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_diet","370","7","150","26",null,null,null,null,null,null,this.div_conf.form.div_main.form);
            obj.set_taborder("8");
            obj.set_enable("false");
            this.div_conf.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","575","7","117","26",null,null,null,null,null,null,this.div_conf.form.div_main.form);
            obj.set_taborder("9");
            obj.set_text("주간식단표");
            obj.set_cssclass("lb01");
            this.div_conf.form.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_week","106","39","1053","24",null,null,null,null,null,null,this.div_conf.form.div_main.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_week");
            obj.set_enableevent("false");
            obj.set_enable("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"21\"/></Rows><Band id=\"body\"><Cell text=\"bind:SUN\" color=\"red\"/><Cell col=\"1\" text=\"bind:MON\"/><Cell col=\"2\" text=\"bind:TUE\"/><Cell col=\"3\" text=\"bind:WED\"/><Cell col=\"4\" text=\"bind:THU\"/><Cell col=\"5\" text=\"bind:FRI\"/><Cell col=\"6\" text=\"bind:SAT\"/></Band></Format></Formats>");
            this.div_conf.form.div_main.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1222,770,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","div_search.form.cal_date_from_pic","value","ds_search","DATE_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_func.form.cal_date","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_func.form.cal_date_pic","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00702_P04.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00702_P04.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00702_P04.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00702_P04
         * 화면명   	: 주간식단 간편입력
         * 화면설명 	: 주간식단 간편입력
         * 작성일   	: 2022-03-31
         * 작성자   	: 박한준
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
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 삽입, 수정 공통 함수를 사용하기 위해 gv_curWinKey를 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00702_P04";

        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "DATE", fv_date);

        	this.fn_search();
        };

        // 그리드 css 적용
        this.initGrid = function(grid)
        {
        	// 점심식단, 오전간식, 기능식이 background - ligtblue

        	const monArr = ["DAY1", "DAY2", "DAY3", "DAY4", "DAY5", "DAY6", "DAY7"];
        	for (let i = 0; i < monArr.length; i++)
        	{
        		const monIdx = grid.getBindCellIndex("body", monArr[i]);
        		const monCss = "expr:dataset.getColumn(currow, 'color') == '1' ? 'liteBlue' : ''";

        		grid.setCellProperty("body", monIdx, "cssclass", monCss);
        	}

        	// #e6e6fa
        };
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        // 저장 전 validation
        this.fn_save_pre = function()
        {
        // 	if (this.ds_list.rowcount == 0)
        // 	{
        // 		this.alert("저장할 항목이 없습니다.");
        // 		return false;
        // 	}
        	// 저장전 ds_data에 데이터 담기
        	//this.ds_data.clear();
        // 	this.ds_data.clearData();
        // 	for(var i=1; i<=10; i++){
        // 		var aRow = this.ds_data.addRow();
        // 		this.ds_data.copyRow(aRow, this.all["ds_temp"+i], 0);
        //
        // 		if(this.ds_datalist.getColumn(i-1,"temp_id") == this.ds_data.getColumn(i-1,"temp_id")){
        // 			this.ds_data.set_updatecontrol(false);
        // 			this.ds_data.setRowType(i-1, Dataset.ROWTYPE_UPDATE);
        // 			this.ds_data.set_updatecontrol(true);
        // 		}
        // 	}

        	if (!this.confirm("저장 하시겠습니까?"))
        		return false;

        	return true;
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 조회
        this.fn_search = function()
        {
        	// 템플릿, 그리드 데이터 조회
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search input2=ds_search ";
        	const outDatasets = "ds_list=output1 ds_week=output2";
        	const argument = "method=getList "
        				   + "sqlId='DAY00702_P04.DAY00702_P04_DS_LIST_S DAY00702_P04.DAY00702_P04_DS_WEEK_S '";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 저장
        this.fn_save = function()
        {
        	if (!this.fn_save_pre()) return;

        	const svcId = "save";
        	const inDs = "ds_data";

        	this.fn_save_com(svcId, inDs);
        };

        //콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			// 주간식단일 시작일, 종료일, 식사제공 세팅
        			var sday = this.ds_week.getColumn(0, "SUN");
        			var eday = this.ds_week.getColumn(0, "SAT");

        			this.div_conf.form.div_main.form.cal_date_from.set_value(sday);
        			this.div_conf.form.div_main.form.cal_date_to.set_value(eday);
        			this.div_conf.form.div_main.form.edt_diet.set_value(this.ds_list.getColumn(0,"식단제공"));
        			this.ds_list.set_rowposition(-1);

        			// 그리드 css 적용
        			this.initGrid(this.div_conf.form.div_main.form.grd_list);
        		}
        		else if (strSvcID == "save")
        		{
        			this.alert("저장되었습니다.");
        			this.fn_search("");
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
        /**
         * 특정위치의 문자열 바꾸기
         *
         * @param str 원본 문자열
         * @param character 바꿀 문자값
         * @param index 바꿀 위치
         */
        this.stringReplaceAt = function(str, character, index)
        {
        	return str.substr(0, index) + character + str.substr(index + character.length);
        };

        /**
         * DB입력용 String 만들기
         *
         * @param cRow 바꿀 문자 index
         * @param str1 원본 문자열
         * @param col 데이터셋 컬럼명
         * @param value 바꿀 문자값
         * @param offset 문자 간격
         * @ds dataset 데이터셋
         */
        this.fn_valueSet = function(cRow, str1, col, value, offset, ds)
        {
        	let index;
        	if(offset == null || offset == 0)
        	{
        		str1 = this.stringReplaceAt(str1, value, cRow);
        		ds.setColumn(0, col, str1);
        	}
        	else
        	{
        		index = cRow * offset;
        		str1 = this.stringReplaceAt(str1, value, index);
        		ds.setColumn(0, col, str1);
        	}
        };

        /*
        this.fn_setData = function(ds, row)
        {
        	this.ds_return.copyData(ds);
        	this.ds_return.clearData();

        	this.ds_return.addRow();
        	this.ds_return.copyRow(0, ds, row);

        	this.close(this.ds_return.saveXML());
        };
        */
        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;

        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 저장 버튼
        this.fn_saveBtn = function(obj,e)
        {
        	this.fn_save();
        };

        // 새로고침, 조회 기능
        this.btn_refresh_onclick = function(obj,e)
        {
        	//this.ds_search.clearData(); // 검색창 클리어
        	this.ds_search.setColumn(0, "GUBUN", "");
        	this.ds_search.setColumn(0, "NAME", "");
        	this.fn_search();
        };

        // 캘린더 변경 이벤트
        this.div_func_cal_date_onchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0,"DATE",e.postvalue);
        	//조회
        	this.fn_search();
        };

        // 주간식단 적용하기 이벤트
        this.div_func_btn_call_onclick = function(obj,e)
        {
         	this.ds_return.clearData();
        	this.ds_return.copyData(this.ds_list);

         	this.close(this.ds_return.saveXML());

        // 	this.ds_return.clearData();
        // 	this.ds_return.addColumn("DEL", "STRING");
        // 	const nRow = this.ds_return.addRow();
        // 	this.ds_return.setColumn(nRow, "DEL", 1);
        //
        // 	this.close(this.ds_return.saveXML());
        };

        // 캘린더 변경 이벤트
        this.div_func_cal_date_from_pic_onchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0,"DATE",e.postvalue);
        	//조회
        	this.fn_search();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_func.form.btn_refresh.addEventHandler("onclick",this.btn_refresh_onclick,this);
            this.div_func.form.btn_call.addEventHandler("onclick",this.div_func_btn_call_onclick,this);
            this.div_func.form.cal_date_pic.addEventHandler("onchanged",this.div_func_cal_date_from_pic_onchanged,this);
            this.div_func.form.cal_date.addEventHandler("onchanged",this.div_func_cal_date_onchanged,this);
        };
        this.loadIncludeScript("DAY00702_P04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
