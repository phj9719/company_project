(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00210");
            this.set_titletext("2-10 자세변경·욕창간호기록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"거주현황\" type=\"STRING\" size=\"256\"/><Column id=\"b_offname\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"m_regist\" type=\"STRING\" size=\"256\"/><Column id=\"m_grade_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomno\" type=\"STRING\" size=\"256\"/><Column id=\"m_history\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"m_b_date\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"DATE\" size=\"256\"/><Column id=\"date_to\" type=\"DATE\" size=\"256\"/><Column id=\"yyyymm\" type=\"STRING\" size=\"256\"/><Column id=\"report_date_from\" type=\"STRING\" size=\"256\"/><Column id=\"report_date_to\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report", this);
            obj._setContents("<ColumnInfo><Column id=\"sign\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"so_number\" type=\"INT\" size=\"256\"/><Column id=\"so_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"nalja\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"so_code\" type=\"DATE\" size=\"256\"/><Column id=\"so_name\" type=\"STRING\" size=\"256\"/><Column id=\"욕창시점\" type=\"INT\" size=\"256\"/><Column id=\"상태\" type=\"STRING\" size=\"256\"/><Column id=\"방지도구\" type=\"STRING\" size=\"256\"/><Column id=\"욕창메모\" type=\"STRING\" size=\"256\"/><Column id=\"욕창담당\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드\" type=\"STRING\" size=\"256\"/><Column id=\"체위시08\" type=\"STRING\" size=\"256\"/><Column id=\"체위시09\" type=\"STRING\" size=\"256\"/><Column id=\"담당자08\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드08\" type=\"STRING\" size=\"256\"/><Column id=\"담당자09\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드09\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_chk", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"so_code\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0.00%","0%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","450",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","0",null,null,"0","10",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"30\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"112\"/><Column size=\"40\"/><Column size=\"65\"/><Column size=\"80\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"23\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cursor=\"pointer\"/><Cell col=\"1\" text=\"출력\"/><Cell col=\"2\" text=\"현황\"/><Cell col=\"3\" text=\"그룹\"/><Cell col=\"4\" text=\"수급자\"/><Cell col=\"5\" text=\"성별\"/><Cell col=\"6\" text=\"등급\"/><Cell col=\"7\" text=\"생활실\"/></Band><Band id=\"body\"><Cell colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" cursor=\"pointer\"/><Cell col=\"2\" text=\"bind:거주현황\"/><Cell col=\"3\" text=\"bind:m_group\"/><Cell col=\"4\" text=\"bind:m_name\" textAlign=\"left\" cssclass=\"cellBWoman\" expandchar=\"dot\" font=\"normal bold 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"5\" text=\"bind:성별\"/><Cell col=\"6\" text=\"bind:m_grade_nm\"/><Cell col=\"7\" text=\"bind:m_roomname\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","460","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_data","0","0",null,null,"10","10",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_data");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"300\"/><Column size=\"80\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"23\"/></Rows><Band id=\"head\"><Cell text=\"욕창간호일\"/><Cell col=\"1\" text=\"그룹\"/><Cell col=\"2\" text=\"수급자명\"/><Cell col=\"3\" text=\"자세변경_8\"/><Cell col=\"4\" text=\"자세변경_9\"/><Cell col=\"5\" text=\"상태\"/><Cell col=\"6\" text=\"방지도구\"/><Cell col=\"7\" text=\"간호처치 및 내용\"/><Cell col=\"8\" text=\"욕창담당\"/></Band><Band id=\"body\"><Cell text=\"bind:nalja\" expandchar=\"dot\" displaytype=\"date\"/><Cell col=\"1\" text=\"bind:m_group\"/><Cell col=\"2\" text=\"bind:so_name\" textAlign=\"left\" font=\"bold 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"3\" text=\"bind:담당자08\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:담당자09\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:상태\"/><Cell col=\"6\" text=\"bind:방지도구\" textAlign=\"left\" font=\"bold 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"7\" text=\"bind:욕창메모\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:욕창담당\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Div("div_func","460","0",null,"40","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_report1",null,"5","150","26","365",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("자세변경 욕창간호");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report3",null,"5","100","26","155",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("욕창간호");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","7","180","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("자세변경.욕창간호기록");
            obj.set_cssclass("lb01");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report2",null,"5","100","26","260",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_text("자세변경");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report4",null,"5","150","26","0",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("4");
            obj.set_text("자세변경 기록서식");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Calendar("cal_report_date_from_pic","325","7","25","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("5");
            this.div_func.addChild(obj.name, obj);

            obj = new Calendar("cal_report_date_from","235","7","90","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_initvalueid("iv_cal_yyyyMMddddd");
            obj.set_taborder("6");
            obj.set_cssclass("essential");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            obj.set_buttonsize("0 0");
            obj.set_dateformat("yyyy.MM.dd");
            this.div_func.addChild(obj.name, obj);

            obj = new Calendar("cal_report_date_to","370","7","90","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_initvalueid("iv_cal_yyyyMMddddd");
            obj.set_taborder("7");
            obj.set_cssclass("essential");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            obj.set_buttonsize("0 0");
            obj.set_dateformat("yyyy.MM.dd");
            this.div_func.addChild(obj.name, obj);

            obj = new Calendar("cal_report_date_to_pic","460","7","25","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("8");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_sign",null,"5","65","26","520",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("9");
            obj.set_text("결재란");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_no","180","8","55","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("10");
            obj.set_text("출력기간");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_no00","355","8","10","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("11");
            obj.set_text("~");
            this.div_func.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","450","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_yyyymm","41","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_yyyyMM");
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.getSetter("calendarfunc").set("month");
            obj.set_buttonsize("0 0");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","174","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","267","12","8","17",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","280","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0 0");
            obj.set_cssclass("essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"7","70","26","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_yyyymm_pic","130","7","26","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_yyyyMM");
            obj.set_taborder("5");
            this.div_search.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_search.form.cal_date_from","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_date_to","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cal_yyyymm_pic","value","ds_search","yyyymm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_func.form.cal_report_date_from_pic","value","ds_search","report_date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_func.form.cal_report_date_from","value","ds_search","report_date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.cal_date_pic","value","ds_search","date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_func.form.cal_report_date_to","value","ds_search","report_date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_func.form.cal_report_date_to_pic","value","ds_search","report_date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_func.form.sta_no_value","text","ds_data","점검번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.cal_yyyymm","value","ds_search","yyyymm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00210.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00210.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00210.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00210
         * 화면명   	: 2-10 자세변경.욕창간호기록
         * 화면설명 	:
         * 작성일   	: 2022-06-21
         * 작성자   	: 박한준
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
        this.fv_currentDS = this.ds_list;
        this.fv_currentGrid = this.div_cont.form.div_left.form.grd_list;
        const fv_sicode = nexacro.getApplication().gds_userInfo.getColumn(0, "sicode");
        //this.grp_btns = [];	// 그룹 버튼 A,B,C,D,E,전체 배열
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 현재월의 1일, 마지막일 구하기
        	const date = new Date();
        	const year = date.getFullYear();
        	const month = date.getMonth();
        	var firstDay = new Date(year, month, 1);
        	var lastDay = new Date(year, month + 1, 0);

        	var yymm = date.getFullYear() + ((date.getMonth() + 1) + "").padLeft(2, '0');

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "sicode", fv_sicode);
        	this.div_search.form.cal_yyyymm.set_value(yymm);
        	this.ds_search.setColumn(0, "date_from", firstDay);
        	this.ds_search.setColumn(0, "date_to", lastDay);

        	// 그리드 설정
        	this.fn_setMainGrid();

        	this.fn_search();
        };

        this.fn_setMainGrid = function()
        {
        	var grdMain = this.div_cont.form.div_left.form.grd_list;

        	var nameIdx = grdMain.getBindCellIndex("body","m_name");
        	var snmIdx = grdMain.getBindCellIndex("body","거주현황");

        	var nameCss = "expr:dataset.getColumn(currow,'성별') == '남' ? 'cellBMan' : 'cellBWoman'";
        	var snmCss = "expr:dataset.getColumn(currow,'거주현황')== '퇴소자' ? 'cellBRetire': '' ";

        	grdMain.setCellProperty("body", nameIdx, "cssclass", nameCss);
        	grdMain.setCellProperty("body", snmIdx, "cssclass", snmCss);
        };


        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	// 검색조건 필수 체크 (컴포넌트 tooltiptext 값 넣을 것)
        	if (!this.gfn_findSnull(this.div_search)) return false;
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
        	const inDatasets = "input1=ds_search input2=ds_search";
        	const outDatasets = "ds_list=output1 ds_data=output2";
        	const argument = "method=getList "
        				   + "sqlId='DAY00210.DAY00210_DS_LIST_S DAY00210.DAY00210_DS_DATA_S' ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg){
        	if (nErrorCode == 0){
        		if (strSvcID == "search"){
        			this.ds_list.set_rowposition(-1);
        			this.ds_data.set_rowposition(-1);

        			// 출력기간 세팅
        			var dtfrom = this.ds_search.getColumn(0,"date_from");
        			var dtto = this.ds_search.getColumn(0,"date_to");
        			this.div_func.form.cal_report_date_from.set_value(dtfrom);
        			this.div_func.form.cal_report_date_to.set_value(dtto);

        			//this.div_cont.form.div_left.form.grd_list.setCellProperty("head", 0, "text", "0");
        		}
        	}
        	else{
        		this.alert(strErrorMsg);
        	}
        };
        /***********************************************************************
         * User Functions
         ***********************************************************************/
        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        //출력 전
        this.fn_report_pre = function(chkname)
        {
        	// 리스트 선택된거 배열에 담기
        	var listArr = [];
        	var listArrStr = "";
        	for(var i=0; i<this.ds_list.rowcount; i++){
        		if(this.ds_list.getColumn(i,"chk") == "1"){
        			//listArr.push("\'"+this.ds_list.getColumn(i,"m_code")+"\'");
        			listArr.push(this.ds_list.getColumn(i,"m_code"));
        			//listArrStr += "\'"+this.ds_list.getColumn(i,"m_code")+"\'";
        		}
        	}

        	if(listArr == ""){
        		this.alert("출력할 항목을 선택해주세요.");
        		return false;
        	}

        	var datefrom = this.ds_search.getColumn(0,"report_date_from");
        	var dateto = this.ds_search.getColumn(0,"report_date_to");
        	//var dfrom = new Date(+datefrom + 3240 * 10000).toISOString().split("T")[0];
        	//var dto = new Date(+dateto + 3240 * 10000).toISOString().split("T")[0];

        	// 자세변경,욕창간호 posAndsore
        	// 자세변경 posture
        	// 욕창 bedsore
        	// 기록서식 form
        	// 수급자 데이터 존재여부 체크
        	const svcId = "report_pre";
        	const transactionParams = "/DAY00210Controller.do";
        	const inDatasets = "";
        	const outDatasets = "ds_list_chk=output1";
        	const argument = "method=getRecordCnt "
        				   + "sqlId='DAY00210.DAY00210_DS_LIST_CHK_S' "
        				   + " sicode="+fv_sicode
        				   + " date_from="+datefrom
         				   + " date_to="+dateto
        				   + " listArr="+listArr
        				   + " chkname="+chkname;

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, transactionParams, inDatasets, outDatasets, argument, callbackFunc, null, false);

        	return true;
        }

        // 출력
        this.fn_report = function(obj,e)
        {
        	var chkname = "";
        	var popupUrl = "";
        	var popupName = "";
        	if(obj.id == "btn_report1"){ // 자세변경,욕창간호
        		chkname = "posAndsore";
        		popupUrl = "DAY_POP::DAY00210_R01.xfdl"
        		popupName = "자세변경.욕창간호기록"
        		//this.ubiReportFile = "DAY00210_R01.jrf";
        	}else if(obj.id == "btn_report2"){ // 자세변경
        		chkname = "posture";
        		popupUrl = "DAY_POP::DAY00210_R02.xfdl";
        		popupName = "자세변경기록";
        		//this.ubiReportFile = "DAY00210_R02.jrf";
        	}else if(obj.id == "btn_report3"){ // 욕창간호
        		chkname = "bedsore";
        		popupUrl = "DAY_POP::DAY00210_R03.xfdl";
        		popupName = "욕창간호기록";
        		//this.ubiReportFile = "DAY00210_R03.jrf";
        	}

        	// 출력전 체크
        	if (!this.fn_report_pre(chkname)) return;

        	if(this.ds_list_chk.rowcount < 1){
        		this.alert("데이터가 존재하지 않습니다.");
        		return;
        	}
        	// 데이터 있는 수급자 배열에 담기
        	var codeArr = [];
        	for(var i=0; i<this.ds_list_chk.rowcount; i++){
        		codeArr.push(this.ds_list_chk.getColumn(i,"so_code"));
        	}

        	let params;
        	const dicompNm = " ";

        	var reDtfrom = this.ds_search.getColumn(0,"report_date_from");
        	var reDtto = this.ds_search.getColumn(0,"report_date_to");
        	//var reDtfrom = new Date(+reDtfrom + 3240 * 10000).toISOString().split("T")[0];
        	//var reDtto = new Date(+reDtto + 3240 * 10000).toISOString().split("T")[0];
        	trace(this.div_func.form.chk_sign.value);
        	params = {
        		sicode : fv_sicode
        		, dateFrom : reDtfrom
        		, dateTo : reDtto
        		, codes : codeArr
        		, sign : this.div_func.form.chk_sign.value
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");


        	/*
        	 * ubireport 용 변수
        	 * this.ubiDataType : 리포트 데이타 유형 ( 0:SQL, 1:Nexacro 데이터셋, 2:화면 내 Grid(자동리포트) )
        	 *				  	  정의하지 않을경우 0으로 자동 세팅
        	 * this.ubiReportFile : 리포트 파일명
        	 * this.ubiLocalDs : Nexacro 데이터셋 정보 ( 데이터셋을 사용한 리포트 호출시 필요 )
        	 * this.ubiGridObj : 자동 리포트에서 사용하는 그리드 객체 ( 데이타 유형이 2일 경우 필요 )
        	 * this.ubiArg : 리포트 아규먼트 (세팅 예 : COMPANY#유비디시전#HOMEPAGE#http://www.ubireport.com# )
        	 * this.ubiIsMul : 멀티리포트 여부 ( 멀티리포트 사용시 true로 세팅 )
        	 * this.ubiMulCount : 멀티리포트 사용시 리포트 반복횟수 설정 숫자형태의 문자열
        	 * this.ubiIsPdf : pdf 프린트 바로 열기 여부 모달로 띄울시 false
        	 */

        	//this.ubiReportFile = "DAY00210_R01.jrf";
        // 	this.ubiArg = "P_SICODE#" + fv_sicode + "#"
        // 				+ "P_DATE_FROM#" + reDtfrom + "#"
        // 				+ "P_DATE_TO#" + reDtto + "#"
        // 				+ "P_M_CODE#" + codeArr + "#"
        // 				+ "P_SIGN#" + this.div_func.form.chk_sign.value + "#";
        //
        //
        // 	// 리포트 div 내용 갱신
        // 	this.components["UbiDiv"].form.ubiPreview();

        };
        // 자세변경 기록서식
        this.fn_report4 = function()
        {
        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00210_R04.xfdl";
        	const popupName = "자세변경 기록서식";

        	params = {
        		sicode : fv_sicode
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        }

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 조회 버튼
        this.fn_searchBtn = function(obj,e)
        {
        	this.fn_search();
        };

        // 달력 변경
        this.div_search_cal_yyyymm_pic_onchanged = function(obj,e)
        {
        	//선택월의 1일, 마지막일 구하기
        	var year = this.ds_search.getColumn(0,"yyyymm").substr(0,4);
        	var month = this.ds_search.getColumn(0,"yyyymm").substr(4);

        	var firstDay = new Date(year, month-1 , 1);
        	var lastDay = new Date(year, month, 0);

        	// from to 날짜 셋팅
        	this.ds_search.setColumn(0, "date_from", firstDay);
        	this.ds_search.setColumn(0, "date_to", lastDay);

        	//조회
        	this.fn_search();
        };

        // 출력기간 캘린더 변경이벤트
        this.report_date_pic_onchanged = function(obj,e)
        {
        	// 해당월만 선택가능, to보다 날짜가 크면 안됨
        	var datefrom = this.ds_search.getColumn(0,"date_from");
        	var dateto = this.ds_search.getColumn(0,"date_to");
        	var dfrom = new Date(+datefrom + 3240 * 10000).toISOString().split("T")[0];
        	var dto = new Date(+dateto + 3240 * 10000).toISOString().split("T")[0];
        	trace(">> "+dfrom.replace("-","."));
        	trace(">>> "+dto.replace("-","."));

        	var redatefrom = this.ds_search.getColumn(0,"report_date_from");
        	var redateto = this.ds_search.getColumn(0,"report_date_to");

         	var fromMonth = datefrom.getMonth() + 1; // 검색조건의 월
        	var selectMonth = nexacro.toNumber(e.postvalue.substr(4,2)) // 선택날짜의 월

         	if(selectMonth != fromMonth || redatefrom > redateto){
         		this.alert(dfrom + " 부터 " + dto +" 기간내에서 지정할 수 있습니다.");

        		if(obj.id == "cal_report_date_from_pic"){ // 출력기간 from
        			this.ds_search.setColumn(0,"report_date_from",e.prevalue);
        		}else if(obj.id == "cal_report_date_to_pic"){ // 출력기간 to
        			this.ds_search.setColumn(0,"report_date_to",e.prevalue);
        		}
        		return;
         	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_report3.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_report2.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_report4.addEventHandler("onclick",this.fn_report4,this);
            this.div_func.form.cal_report_date_from_pic.addEventHandler("onchanged",this.report_date_pic_onchanged,this);
            this.div_func.form.cal_report_date_to_pic.addEventHandler("onchanged",this.report_date_pic_onchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.cal_yyyymm_pic.addEventHandler("onchanged",this.div_search_cal_yyyymm_pic_onchanged,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00210.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
