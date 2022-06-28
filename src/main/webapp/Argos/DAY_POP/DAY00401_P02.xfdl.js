(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00401_P02");
            this.set_titletext("미이용 수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(775,540);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"K_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"M_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"k_number\" type=\"STRING\" size=\"256\"/><Column id=\"k_code\" type=\"STRING\" size=\"256\"/><Column id=\"k_name\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"k_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"날짜\" type=\"STRING\" size=\"256\"/><Column id=\"시작시간\" type=\"STRING\" size=\"256\"/><Column id=\"시작시\" type=\"STRING\" size=\"256\"/><Column id=\"시작분\" type=\"STRING\" size=\"256\"/><Column id=\"종료시간\" type=\"STRING\" size=\"256\"/><Column id=\"종료시\" type=\"STRING\" size=\"256\"/><Column id=\"종료분\" type=\"STRING\" size=\"256\"/><Column id=\"총시간\" type=\"STRING\" size=\"256\"/><Column id=\"요양일지\" type=\"STRING\" size=\"256\"/><Column id=\"미이용\" type=\"STRING\" size=\"256\"/><Column id=\"covid\" type=\"STRING\" size=\"256\"/><Column id=\"covid1\" type=\"STRING\" size=\"256\"/><Column id=\"covid2\" type=\"STRING\" size=\"256\"/><Column id=\"covid3\" type=\"STRING\" size=\"256\"/><Column id=\"covid4\" type=\"STRING\" size=\"256\"/><Column id=\"covid5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_main","10","35","755","495",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","11","9","260","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("11");
            obj.set_text("미이용일 지정");
            obj.set_cssclass("lb01");
            this.div_main.addChild(obj.name, obj);

            obj = new Div("div_line","10","40",null,"2","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("12");
            obj.set_background("#000000");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1","9","47","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("13");
            obj.set_text("미이용일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1","91","47","651","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2","9","80","245","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("시작시간");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body2","9","113","245","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_date_value","99","55","119","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("17");
            obj.set_text("2022.04.07");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body5","9","146","733","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5","9","248","245","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("미이용일 지정사유");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body6","253","248","488","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_1","253","47","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("수급자명");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_start_hour","87","117","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_value("00");
            obj.set_displaynulltext("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_timeColon1","126","118","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("22");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_start_min","140","117","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_value("00");
            obj.set_displaynulltext("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_sdriver_name","439","55","29","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("23");
            obj.set_text("남");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_mname","343","55","89","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("24");
            obj.set_text("이동철");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_mcode","483","55","79","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("25");
            obj.set_text("20210004");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_why","268","253","459","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("9");
            obj.set_maxlength("2000");
            obj.set_cssclass("essential");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_subTitle2","11","319","260","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("26");
            obj.set_text("코로나-19 특례 적용시 표시");
            obj.set_cssclass("lb01");
            this.div_main.addChild(obj.name, obj);

            obj = new Div("div_line00","10","350",null,"2","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("27");
            obj.set_background("#000000");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3","253","80","245","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("종료시간");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4","497","80","245","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("산정시간");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","253","113","245","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4","497","113","245","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_end_hour","332","117","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("2");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_value("00");
            obj.set_displaynulltext("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_timeColon1_00","370","118","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("32");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_end_min","385","117","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("3");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_value("00");
            obj.set_displaynulltext("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_00","10","185","719","56",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("33");
            obj.set_text("▶ 평일기준 09:00 부터 17:00 까지 예정된 송영시간 입력 (일 최대 8시간)\r\n    수급자의 해당일 등급기준으로 일수가의 50% 산정\r\n    월기준 5일까지 지정할 수 있습니다.");
            this.div_main.addChild(obj.name, obj);

            obj = new Div("div_covid","11","365",null,"125","11",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("10");
            this.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_covid1","0","0","300","20",null,null,null,null,null,null,this.div_main.form.div_covid.form);
            obj.set_taborder("0");
            obj.set_text("60%(본인부담금포함) 정원 30% 이하");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.div_covid.addChild(obj.name, obj);

            obj = new CheckBox("chk_covid2","0","25","300","20",null,null,null,null,null,null,this.div_main.form.div_covid.form);
            obj.set_taborder("1");
            obj.set_text("50%(본인부담금제외) 정원 30% 초과");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            this.div_main.form.div_covid.addChild(obj.name, obj);

            obj = new CheckBox("chk_covid3","0","50","300","20",null,null,null,null,null,null,this.div_main.form.div_covid.form);
            obj.set_taborder("2");
            obj.set_text("40%(본인부담금제외) 정원 30% 초과 50% 이하");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            this.div_main.form.div_covid.addChild(obj.name, obj);

            obj = new CheckBox("chk_covid4","0","75","300","20",null,null,null,null,null,null,this.div_main.form.div_covid.form);
            obj.set_taborder("3");
            obj.set_text("20%(본인부담금제외) 정원 50% 초과 70% 이하");
            obj.set_falsevalue("0");
            obj.set_truevalue("4");
            this.div_main.form.div_covid.addChild(obj.name, obj);

            obj = new CheckBox("chk_covid5","0","100","350","20",null,null,null,null,null,null,this.div_main.form.div_covid.form);
            obj.set_taborder("4");
            obj.set_text("60%(본인부담금제외) 확진자·자가격리(21.07.01)");
            obj.set_falsevalue("0");
            obj.set_truevalue("5");
            this.div_main.form.div_covid.addChild(obj.name, obj);

            obj = new Button("btn_3hour_under","148","151","110","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("5");
            obj.set_text("3시간미만");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_3hour_over","266","151","110","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("6");
            obj.set_text("3시간이상");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_6hour","384","151","110","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("7");
            obj.set_text("6시간기준");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_8hour","502","151","110","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("8");
            obj.set_text("8시간기준");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_total_hour","580","118","78","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            obj.set_value("00:00");
            obj.set_textAlign("center");
            obj.set_displaynulltext("00:00");
            obj.set_text("00:00");
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

            obj = new Button("btn_save",null,"5","70","25","0",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"5","90","25","75",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("미이용 취소");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",775,540,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_main.form.sta_date_value","text","ds_data","날짜");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_main.form.sta_mname","text","ds_data","k_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_main.form.sta_sdriver_name","text","ds_data","성별");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_main.form.sta_mcode","text","ds_data","k_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_main.form.edt_start_hour","value","ds_data","시작시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_main.form.edt_start_min","value","ds_data","시작분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_main.form.edt_end_hour","value","ds_data","종료시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_main.form.edt_end_min","value","ds_data","종료분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_main.form.edt_total_hour","value","ds_data","총시간");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_main.form.edt_why","value","ds_data","요양일지");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_main.form.div_covid.form.chk_covid1","value","ds_data","covid1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_main.form.div_covid.form.chk_covid2","value","ds_data","covid2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_main.form.div_covid.form.chk_covid3","value","ds_data","covid3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_main.form.div_covid.form.chk_covid4","value","ds_data","covid4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_main.form.div_covid.form.chk_covid5","value","ds_data","covid5");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00401_P02.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00401_P02.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00401_P02.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00401_P02
         * 화면명   	: 미이용 수정
         * 화면설명 	: 이동서비스 송영기록에서 미이용을 수정하는 팝업
         * 작성일   	: 2022-04-28
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용

         ***********************************************************************
         * 비고 :
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
        const fv_knumber = this.parent.K_NUMBER;
        const fv_mcode = this.parent.M_CODE;
        const fv_mname = this.parent.M_NAME;
        const fv_date = this.parent.DATE;
        const fv_sex = this.parent.SEX;
        this.carFlag = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 저장을 위한 gv_curWinKey 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00401_P02";

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "K_NUMBER", fv_knumber);
        	this.ds_search.setColumn(0, "M_CODE", fv_mcode);

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

        // 저장 전 validation
        this.fn_save_pre = function()
        {
        	if (Sct.Util.isEmpty(this.ds_data.getColumn(0, "요양일지")))
        	{
        		this.alert("미이용일 지정 사유를 기록해야 합니다.");
        		this.div_main.form.edt_why.setFocus();
        		return false;
        	}

        	if (this.ds_data.getColumn(0, "총시간") < "01:00")
        	{
        		this.alert("예정된 입퇴소 시간을 기록해야 합니다.");
        		this.div_main.form.edt_start_hour.setFocus();
        		return false;
        	}

        	const sHour = this.ds_data.getColumn(0, "시작시");
        	const sMin = this.ds_data.getColumn(0, "시작분");
        	const eHour = this.ds_data.getColumn(0, "종료시");
        	const eMin = this.ds_data.getColumn(0, "종료분");
        	let sFullTime = sHour + ":" + sMin;
        	let eFullTime = eHour + ":" + eMin;

        	if (sFullTime == "00:00")
        		sFullTime = "";

        	if (eFullTime == "00:00")
        		eFullTime = "";

        	this.ds_data.setColumn(0, "시작시간", sFullTime);
        	this.ds_data.setColumn(0, "종료시간", eFullTime);

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
        	const outDatasets = "ds_data=output1";
        	const argument = "method=getList"
        				   + " sqlId=DAY00401_P02.DAY00401_P02_DS_DATA_S";

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

        // 미이용 취소
        this.fn_notIn_cancel = function()
        {
        	const sTime = this.ds_data.getColumn(0, "시작시간");
        	const eTime = this.ds_data.getColumn(0, "종료시간");
        	if ((sTime == undefined || nexacro.trim(sTime) == "")
        		&& (eTime == undefined || nexacro.trim(eTime) == ""))
        		this.close();
        	else
        	{
        		if (!this.confirm("미이용 취소시 요양기록도 함께 삭제됩니다.\n 확인 후 처리하세요!")) return;

        		const svcId = "cancel";
        		const params = "/commonController.do";
        		const inDatasets = "input1=ds_data:U";
        		const outDatasets = "";
        		const argument = "method=update"
        					   + " sqlId=DAY00401_P02.DAY00401_P02_DS_DATA_CANCEL_U";

        		const callbackFunc = "fn_callback";
        		Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        	}
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if (strSvcID == "search")
        		{
        			const day = fv_date.getDay();
        			const dayList = ["(일)", "(월)", "(화)", "(수)", "(목)", "(금)", "(토)"];
        			const ddd = dayList[day];
        			const date = fv_date.getFullYear() + "." + ((fv_date.getMonth() + 1) + "").padStart(2, '0') + "." + (fv_date.getDate() + "").padStart(2, '0') + " " + ddd;
        			if (this.ds_data.rowcount == 0)
        			{
        				const nRow = this.ds_data.addRow();
        				this.ds_data.setColumn(nRow, "sicode", fv_sicode);
        				this.ds_data.setColumn(nRow, "k_code", fv_mcode);
        				this.ds_data.setColumn(nRow, "k_name", fv_mname);
        				this.ds_data.setColumn(nRow, "k_nalja", fv_date);
        				this.ds_data.setColumn(nRow, "성별", fv_sex);
        				this.ds_data.setColumn(nRow, "날짜", date);
        				this.ds_data.setColumn(nRow, "시작시", "00");
        				this.ds_data.setColumn(nRow, "시작분", "00");
        				this.ds_data.setColumn(nRow, "종료시", "00");
        				this.ds_data.setColumn(nRow, "종료분", "00");
        				this.ds_data.setColumn(nRow, "총시간", "00:00");
        				this.ds_data.setColumn(nRow, "요양일지", "");
        				this.ds_data.setColumn(nRow, "미이용", "0");
        				this.ds_data.setColumn(nRow, "covid", "0");
        			}
        			else
        			{
        				const startTime = this.ds_data.getColumn(0, "시작시간");
        				const endTime = this.ds_data.getColumn(0, "종료시간");
        				const number = this.ds_data.getColumn(0, "k_number");
        				const covid = this.ds_data.getColumn(0, "covid");
        				//trace("startTime : " + startTime);
        				//trace("endTime : " + endTime);

        				if (startTime == undefined || nexacro.trim(startTime) == "")
        				{
        					this.ds_data.setColumn(0, "시작시", "00");
        					this.ds_data.setColumn(0, "시작분", "00");
        				}

        				if (endTime == undefined || nexacro.trim(endTime) == "")
        				{
        					this.ds_data.setColumn(0, "종료시", "00");
        					this.ds_data.setColumn(0, "종료분", "00");
        				}

        				if ((startTime == undefined || nexacro.trim(startTime) == "")
        					&& (endTime == undefined || nexacro.trim(endTime) == ""))
        				{
        					this.ds_data.setColumn(0, "총시간", "00:00");
        				}

        				switch(covid)
        				{
        					case "1" :
        						this.ds_data.setColumn(0, "covid1", 1);
        						break;
        					case "2" :
        						this.ds_data.setColumn(0, "covid2", 2);
        						break;
        					case "3" :
        						this.ds_data.setColumn(0, "covid3", 3);
        						break;
        					case "4" :
        						this.ds_data.setColumn(0, "covid4", 4);
        						break;
        					case "5" :
        						this.ds_data.setColumn(0, "covid5", 5);
        						break;
        					default:
        				}

        				if (Sct.Util.isEmpty(number))
        					this.ds_data.setRowType(0, Dataset.ROWTYPE_INSERT);
        				else
        					this.ds_data.setRowType(0, Dataset.ROWTYPE_UPDATE);
        			}
        		}
        		else if (strSvcID == "save")
        		{
        			this.alert("미이용일 지정완료!");
        			this.close();
        		}
        		else if (strSvcID == "cancel")
        		{
        			this.alert("미이용일 지정취소!");
        			this.close();
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
        /* 함수 명 : fn_timeDiff
         * 시간 차이 구하기
         * 입력 : 	time1	비교 시작일자 ex)19901010115000
         *			time2	비교 종료일자
         * 반환 :  HH:MM 형식의 시간 차이 (단 8시간 이상 차이나면 08:00으로만 표현한다.)
         */
        this.fn_timeDiff = function(time1, time2)
        {
        	let diffTime = "";
        	// 문자열 날짜를 Date타입으로 변환
        	const date1 = Sct.Util.stringToDate(time1);
        	const date2 = Sct.Util.stringToDate(time2);

        	// 두 날짜의 간격을 구함(초단위)
        	const diff = (date2 - date1) / 1000;

        	// 간격 값을 시간 추출
        	let hour = diff / 3600;
        	// 시간의 자리수가 1자리일때 앞에 0 붙이기
        	if (0 <= hour && hour < 9) hour = "0" + Math.floor(hour);
        	// 시간이 음수일때 00으로
        	else if (hour < 0) hour = "00";
        	else if (hour > 8) hour = "08";
        	else hour = Math.floor(hour);

        	// 간격 값에서 분 추출
        	let minute = (diff % 3600) / 60;
        	if (hour > 7) minute = "00";
        	else if(0 <= minute && minute < 10) minute = "0" + Math.floor(minute);
        	else if(minute < 0) minute = "00";
        	else minute = Math.floor(minute);

        	// 간격 값에서 초 추출
        	let second = (diff % 3600) % 60;
        	if (0 <= second && second < 10) second = "0" + Math.floor(second);
        	else if (second < 0) second = "00";
        	else second = Math.floor(second);

        	// 간격 값이 음수일때
        	if (diff <= 0) diffTime = "00:00";

        	// HHMM 형식으로 붙임
        	diffTime = hour + ":" + minute;

        	return diffTime;
        };

        // 시간 변경시 총시간 세팅
        this.fn_time_set = function()
        {
        	const sHour = this.ds_data.getColumn(0, "시작시");
        	const sMin = this.ds_data.getColumn(0, "시작분");
        	const eHour = this.ds_data.getColumn(0, "종료시");
        	const eMin = this.ds_data.getColumn(0, "종료분");
        	const sFullTime = Sct.Util.getToday() + sHour + sMin + "00";
        	const eFullTime = Sct.Util.getToday() + eHour + eMin + "00";

        	const diffTime = this.fn_timeDiff(sFullTime, eFullTime);

        	return diffTime;
        };
        /***********************************************************************
         * Popup Functions
         ***********************************************************************/

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
        	let rtnVal = "";
        	if (e.postvalue > "23" || e.postvalue == "")
        	{
        		rtnVal = "00";
        		obj.set_value(rtnVal);
        	}
        	else if (e.postvalue.length == 1)
        	{
        		rtnVal = "0" + e.postvalue;
        		obj.set_value(rtnVal);
        	}

        	const diffTime = this.fn_time_set();
        	const notIn = parseInt(diffTime.substr(0, 2)) + "";
        	this.ds_data.setColumn(0, "총시간", diffTime);
        	this.ds_data.setColumn(0, "미이용", notIn);
        };

        // 분 변경 이벤트
        this.edt_min_onchanged = function(obj,e)
        {
        	let rtnVal = "";
        	if (e.postvalue > "59" || e.postvalue == "")
        	{
        		rtnVal = "00";
        		obj.set_value(rtnVal);
        	}
        	else if (e.postvalue.length == 1)
        	{
        		rtnVal = "0" + e.postvalue;
        		obj.set_value(rtnVal);
        	}

        	const diffTime = this.fn_time_set();
        	const notIn = parseInt(diffTime.substr(0, 2)) + "";
        	this.ds_data.setColumn(0, "총시간", diffTime);
        	this.ds_data.setColumn(0, "미이용", notIn);
        };

        // 시간 버튼 선택
        this.btn_hour_onclick = function(obj,e)
        {
        	let str = "";
        	let str2 = "";
        	let str3 = "";

        	switch(obj.id) {
        		case "btn_3hour_under" :
        			str = "11";
        			str2 = "02";
        			str3 = "2";
        			break;
        		case "btn_3hour_over" :
        			str = "13";
        			str2 = "04";
        			str3 = "4";
        			break;
        		case "btn_6hour" :
        			str = "15";
        			str2 = "06";
        			str3 = "6";
        			break;
        		case "btn_8hour" :
        			str = "17";
        			str2 = "08";
        			str3 = "8";
        			break;
        		default:
        	}

        	const why = this.ds_data.getColumn(0, "요양일지");
        	this.ds_data.setColumn(0, "시작시간", "09:00");
        	this.ds_data.setColumn(0, "시작시", "09");
        	this.ds_data.setColumn(0, "시작분", "00");
        	this.ds_data.setColumn(0, "종료시간", str + ":00");
        	this.ds_data.setColumn(0, "종료시", str);
        	this.ds_data.setColumn(0, "종료분", "00");
        	this.ds_data.setColumn(0, "총시간", str2 + ":00");
        	this.ds_data.setColumn(0, "미이용", str3);

        	if (Sct.Util.isEmpty(nexacro.trim(why)))
        		this.ds_data.setColumn(0, "요양일지", "개인사정");
        };

        // 코로나 특례 체크박스 체인지 이벤트
        this.chk_covid_onchanged = function(obj,e)
        {
        	switch(e.postvalue)
        	{
        		case "0" :
        			this.ds_data.setColumn(0, "covid", e.postvalue);
        			break;
        		case "1" :
        			this.ds_data.setColumn(0, "covid2", 0);
        			this.ds_data.setColumn(0, "covid3", 0);
        			this.ds_data.setColumn(0, "covid4", 0);
        			this.ds_data.setColumn(0, "covid5", 0);
        			this.ds_data.setColumn(0, "covid", e.postvalue);
        			break;
        		case "2" :
        			this.ds_data.setColumn(0, "covid1", 0);
        			this.ds_data.setColumn(0, "covid3", 0);
        			this.ds_data.setColumn(0, "covid4", 0);
        			this.ds_data.setColumn(0, "covid5", 0);
        			this.ds_data.setColumn(0, "covid", e.postvalue);
        			break;
        		case "3" :
        			this.ds_data.setColumn(0, "covid1", 0);
        			this.ds_data.setColumn(0, "covid2", 0);
        			this.ds_data.setColumn(0, "covid4", 0);
        			this.ds_data.setColumn(0, "covid5", 0);
        			this.ds_data.setColumn(0, "covid", e.postvalue);
        			break;
        		case "4" :
        			this.ds_data.setColumn(0, "covid1", 0);
        			this.ds_data.setColumn(0, "covid2", 0);
        			this.ds_data.setColumn(0, "covid3", 0);
        			this.ds_data.setColumn(0, "covid5", 0);
        			this.ds_data.setColumn(0, "covid", e.postvalue);
        			break;
        		case "5" :
        			this.ds_data.setColumn(0, "covid1", 0);
        			this.ds_data.setColumn(0, "covid2", 0);
        			this.ds_data.setColumn(0, "covid3", 0);
        			this.ds_data.setColumn(0, "covid4", 0);
        			this.ds_data.setColumn(0, "covid", e.postvalue);
        			break;
        		default:
        	}
        };

        // 저장 버튼
        this.btn_save_onclick = function(obj,e)
        {
        	this.fn_save();
        };

        // 미이용 취소
        this.div_func_btn_cancel_onclick = function(obj,e)
        {
        	this.fn_notIn_cancel();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_main.form.edt_start_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_main.form.edt_start_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_main.form.edt_end_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_main.form.edt_end_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_main.form.div_covid.form.chk_covid1.addEventHandler("onchanged",this.chk_covid_onchanged,this);
            this.div_main.form.div_covid.form.chk_covid2.addEventHandler("onchanged",this.chk_covid_onchanged,this);
            this.div_main.form.div_covid.form.chk_covid3.addEventHandler("onchanged",this.chk_covid_onchanged,this);
            this.div_main.form.div_covid.form.chk_covid4.addEventHandler("onchanged",this.chk_covid_onchanged,this);
            this.div_main.form.div_covid.form.chk_covid5.addEventHandler("onchanged",this.chk_covid_onchanged,this);
            this.div_main.form.btn_3hour_under.addEventHandler("onclick",this.btn_hour_onclick,this);
            this.div_main.form.btn_3hour_over.addEventHandler("onclick",this.btn_hour_onclick,this);
            this.div_main.form.btn_6hour.addEventHandler("onclick",this.btn_hour_onclick,this);
            this.div_main.form.btn_8hour.addEventHandler("onclick",this.btn_hour_onclick,this);
            this.div_func.form.btn_refresh.addEventHandler("onclick",this.div_func_btn_refresh_onclick,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.div_func.form.btn_cancel.addEventHandler("onclick",this.div_func_btn_cancel_onclick,this);
        };
        this.loadIncludeScript("DAY00401_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
