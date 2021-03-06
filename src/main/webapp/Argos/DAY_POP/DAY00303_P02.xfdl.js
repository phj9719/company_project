(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00303_P02");
            this.set_titletext("물리(작업)치료·기능회복훈련 급여계획");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,553);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"수급자\" type=\"STRING\" size=\"256\"/><Column id=\"작성일\" type=\"STRING\" size=\"256\"/><Column id=\"계획기간\" type=\"STRING\" size=\"256\"/><Column id=\"작성자명\" type=\"STRING\" size=\"256\"/><Column id=\"기록번호\" type=\"STRING\" size=\"256\"/><Column id=\"운동관절1\" type=\"STRING\" size=\"256\"/><Column id=\"운동관절2\" type=\"STRING\" size=\"256\"/><Column id=\"운동관절3\" type=\"STRING\" size=\"256\"/><Column id=\"운동관절4\" type=\"STRING\" size=\"256\"/><Column id=\"운동관절5\" type=\"STRING\" size=\"256\"/><Column id=\"운동관절6\" type=\"STRING\" size=\"256\"/><Column id=\"운동관절7\" type=\"STRING\" size=\"256\"/><Column id=\"운동관절8\" type=\"STRING\" size=\"256\"/><Column id=\"운동관절9\" type=\"STRING\" size=\"256\"/><Column id=\"운동관절10\" type=\"STRING\" size=\"256\"/><Column id=\"운동점수1\" type=\"STRING\" size=\"256\"/><Column id=\"운동점수2\" type=\"STRING\" size=\"256\"/><Column id=\"운동점수3\" type=\"STRING\" size=\"256\"/><Column id=\"운동점수4\" type=\"STRING\" size=\"256\"/><Column id=\"운동점수5\" type=\"STRING\" size=\"256\"/><Column id=\"운동점수6\" type=\"STRING\" size=\"256\"/><Column id=\"운동점수7\" type=\"STRING\" size=\"256\"/><Column id=\"운동점수8\" type=\"STRING\" size=\"256\"/><Column id=\"운동점수9\" type=\"STRING\" size=\"256\"/><Column id=\"운동점수10\" type=\"STRING\" size=\"256\"/><Column id=\"신체통증\" type=\"STRING\" size=\"256\"/><Column id=\"운동점수\" type=\"STRING\" size=\"256\"/><Column id=\"운동비고\" type=\"STRING\" size=\"256\"/><Column id=\"근력우상1\" type=\"STRING\" size=\"256\"/><Column id=\"근력우상2\" type=\"STRING\" size=\"256\"/><Column id=\"근력우상3\" type=\"STRING\" size=\"256\"/><Column id=\"근력우상4\" type=\"STRING\" size=\"256\"/><Column id=\"근력우상5\" type=\"STRING\" size=\"256\"/><Column id=\"근력우상6\" type=\"STRING\" size=\"256\"/><Column id=\"근력좌상1\" type=\"STRING\" size=\"256\"/><Column id=\"근력좌상2\" type=\"STRING\" size=\"256\"/><Column id=\"근력좌상3\" type=\"STRING\" size=\"256\"/><Column id=\"근력좌상4\" type=\"STRING\" size=\"256\"/><Column id=\"근력좌상5\" type=\"STRING\" size=\"256\"/><Column id=\"근력좌상6\" type=\"STRING\" size=\"256\"/><Column id=\"근력우하1\" type=\"STRING\" size=\"256\"/><Column id=\"근력우하2\" type=\"STRING\" size=\"256\"/><Column id=\"근력우하3\" type=\"STRING\" size=\"256\"/><Column id=\"근력우하4\" type=\"STRING\" size=\"256\"/><Column id=\"근력우하5\" type=\"STRING\" size=\"256\"/><Column id=\"근력우하6\" type=\"STRING\" size=\"256\"/><Column id=\"근력좌하1\" type=\"STRING\" size=\"256\"/><Column id=\"근력좌하2\" type=\"STRING\" size=\"256\"/><Column id=\"근력좌하3\" type=\"STRING\" size=\"256\"/><Column id=\"근력좌하4\" type=\"STRING\" size=\"256\"/><Column id=\"근력좌하5\" type=\"STRING\" size=\"256\"/><Column id=\"근력좌하6\" type=\"STRING\" size=\"256\"/><Column id=\"근력비고\" type=\"STRING\" size=\"256\"/><Column id=\"기본동작1\" type=\"STRING\" size=\"256\"/><Column id=\"기본동작2\" type=\"STRING\" size=\"256\"/><Column id=\"기본동작3\" type=\"STRING\" size=\"256\"/><Column id=\"기본동작4\" type=\"STRING\" size=\"256\"/><Column id=\"기본동작5\" type=\"STRING\" size=\"256\"/><Column id=\"기본동작6\" type=\"STRING\" size=\"256\"/><Column id=\"기본동작7\" type=\"STRING\" size=\"256\"/><Column id=\"기본동작8\" type=\"STRING\" size=\"256\"/><Column id=\"동작비고\" type=\"STRING\" size=\"256\"/><Column id=\"평정척도\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT1\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT2\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT3\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT4\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT5\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT6\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT7\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT8\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT9\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT10\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT11\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT12\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT13\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT14\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT15\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT16\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT17\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT18\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT19\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT20\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT1\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT2\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT3\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT4\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT5\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT6\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT7\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT8\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT9\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT10\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT11\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT12\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT13\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT14\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT15\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT16\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT17\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT18\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT19\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT20\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT1\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT2\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT3\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT4\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT5\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT6\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT7\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT8\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT9\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT10\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT11\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT12\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT13\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT14\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT15\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT16\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT17\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT18\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT19\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT20\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT1\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT2\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT3\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT4\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT5\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT6\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT7\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT8\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT9\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT10\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT11\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT12\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT13\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT14\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT15\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT16\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT17\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT18\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT19\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT20\" type=\"STRING\" size=\"256\"/><Column id=\"평균통증\" type=\"STRING\" size=\"256\"/><Column id=\"통증비고\" type=\"STRING\" size=\"256\"/><Column id=\"균형감1\" type=\"STRING\" size=\"256\"/><Column id=\"균형감2\" type=\"STRING\" size=\"256\"/><Column id=\"균형감3\" type=\"STRING\" size=\"256\"/><Column id=\"균형감4\" type=\"STRING\" size=\"256\"/><Column id=\"균형감5\" type=\"STRING\" size=\"256\"/><Column id=\"균형감6\" type=\"STRING\" size=\"256\"/><Column id=\"균형감7\" type=\"STRING\" size=\"256\"/><Column id=\"균형감8\" type=\"STRING\" size=\"256\"/><Column id=\"균형감9\" type=\"STRING\" size=\"256\"/><Column id=\"균형감10\" type=\"STRING\" size=\"256\"/><Column id=\"균형감합계\" type=\"INT\" size=\"256\"/><Column id=\"걸음걸이1\" type=\"STRING\" size=\"256\"/><Column id=\"걸음걸이2\" type=\"STRING\" size=\"256\"/><Column id=\"걸음걸이3\" type=\"STRING\" size=\"256\"/><Column id=\"걸음걸이4\" type=\"STRING\" size=\"256\"/><Column id=\"걸음걸이5\" type=\"STRING\" size=\"256\"/><Column id=\"걸음걸이6\" type=\"STRING\" size=\"256\"/><Column id=\"걸음걸이7\" type=\"STRING\" size=\"256\"/><Column id=\"걸음걸이8\" type=\"STRING\" size=\"256\"/><Column id=\"걸음걸이9\" type=\"STRING\" size=\"256\"/><Column id=\"걸음걸이10\" type=\"STRING\" size=\"256\"/><Column id=\"걸음합계\" type=\"INT\" size=\"256\"/><Column id=\"총점\" type=\"INT\" size=\"256\"/><Column id=\"균형비고\" type=\"STRING\" size=\"256\"/><Column id=\"romrt1\" type=\"STRING\" size=\"256\"/><Column id=\"romrt2\" type=\"STRING\" size=\"256\"/><Column id=\"romrt3\" type=\"STRING\" size=\"256\"/><Column id=\"romrt4\" type=\"STRING\" size=\"256\"/><Column id=\"romrt5\" type=\"STRING\" size=\"256\"/><Column id=\"romrt6\" type=\"STRING\" size=\"256\"/><Column id=\"romrt7\" type=\"STRING\" size=\"256\"/><Column id=\"romrt8\" type=\"STRING\" size=\"256\"/><Column id=\"romrt9\" type=\"STRING\" size=\"256\"/><Column id=\"romrt10\" type=\"STRING\" size=\"256\"/><Column id=\"romrt11\" type=\"STRING\" size=\"256\"/><Column id=\"romrt12\" type=\"STRING\" size=\"256\"/><Column id=\"romrt13\" type=\"STRING\" size=\"256\"/><Column id=\"romrt14\" type=\"STRING\" size=\"256\"/><Column id=\"romrt15\" type=\"STRING\" size=\"256\"/><Column id=\"romrt16\" type=\"STRING\" size=\"256\"/><Column id=\"romrt17\" type=\"STRING\" size=\"256\"/><Column id=\"romrt18\" type=\"STRING\" size=\"256\"/><Column id=\"romrt19\" type=\"STRING\" size=\"256\"/><Column id=\"romrt20\" type=\"STRING\" size=\"256\"/><Column id=\"romrt21\" type=\"STRING\" size=\"256\"/><Column id=\"romrt22\" type=\"STRING\" size=\"256\"/><Column id=\"romrt23\" type=\"STRING\" size=\"256\"/><Column id=\"romrt\" type=\"STRING\" size=\"256\"/><Column id=\"romlt1\" type=\"STRING\" size=\"256\"/><Column id=\"romlt2\" type=\"STRING\" size=\"256\"/><Column id=\"romlt3\" type=\"STRING\" size=\"256\"/><Column id=\"romlt4\" type=\"STRING\" size=\"256\"/><Column id=\"romlt5\" type=\"STRING\" size=\"256\"/><Column id=\"romlt6\" type=\"STRING\" size=\"256\"/><Column id=\"romlt7\" type=\"STRING\" size=\"256\"/><Column id=\"romlt8\" type=\"STRING\" size=\"256\"/><Column id=\"romlt9\" type=\"STRING\" size=\"256\"/><Column id=\"romlt10\" type=\"STRING\" size=\"256\"/><Column id=\"romlt11\" type=\"STRING\" size=\"256\"/><Column id=\"romlt12\" type=\"STRING\" size=\"256\"/><Column id=\"romlt13\" type=\"STRING\" size=\"256\"/><Column id=\"romlt14\" type=\"STRING\" size=\"256\"/><Column id=\"romlt15\" type=\"STRING\" size=\"256\"/><Column id=\"romlt16\" type=\"STRING\" size=\"256\"/><Column id=\"romlt17\" type=\"STRING\" size=\"256\"/><Column id=\"romlt18\" type=\"STRING\" size=\"256\"/><Column id=\"romlt19\" type=\"STRING\" size=\"256\"/><Column id=\"romlt20\" type=\"STRING\" size=\"256\"/><Column id=\"romlt21\" type=\"STRING\" size=\"256\"/><Column id=\"romlt22\" type=\"STRING\" size=\"256\"/><Column id=\"romlt23\" type=\"STRING\" size=\"256\"/><Column id=\"romlt\" type=\"STRING\" size=\"256\"/><Column id=\"rom비고\" type=\"STRING\" size=\"256\"/><Column id=\"adl점수1\" type=\"STRING\" size=\"256\"/><Column id=\"adl점수2\" type=\"STRING\" size=\"256\"/><Column id=\"adl점수3\" type=\"STRING\" size=\"256\"/><Column id=\"adl점수4\" type=\"STRING\" size=\"256\"/><Column id=\"adl점수5\" type=\"STRING\" size=\"256\"/><Column id=\"adl점수6\" type=\"STRING\" size=\"256\"/><Column id=\"adl총점\" type=\"STRING\" size=\"256\"/><Column id=\"진단\" type=\"STRING\" size=\"256\"/><Column id=\"문제점\" type=\"STRING\" size=\"256\"/><Column id=\"장기계획\" type=\"STRING\" size=\"256\"/><Column id=\"단기계획\" type=\"STRING\" size=\"256\"/><Column id=\"치료01\" type=\"STRING\" size=\"256\"/><Column id=\"치료02\" type=\"STRING\" size=\"256\"/><Column id=\"치료03\" type=\"STRING\" size=\"256\"/><Column id=\"치료04\" type=\"STRING\" size=\"256\"/><Column id=\"치료05\" type=\"STRING\" size=\"256\"/><Column id=\"치료06\" type=\"STRING\" size=\"256\"/><Column id=\"치료07\" type=\"STRING\" size=\"256\"/><Column id=\"치료08\" type=\"STRING\" size=\"256\"/><Column id=\"치료시간\" type=\"STRING\" size=\"256\"/><Column id=\"치료시작시\" type=\"STRING\" size=\"256\"/><Column id=\"치료시작분\" type=\"STRING\" size=\"256\"/><Column id=\"치료종료시\" type=\"STRING\" size=\"256\"/><Column id=\"치료종료분\" type=\"STRING\" size=\"256\"/><Column id=\"월요일\" type=\"STRING\" size=\"256\"/><Column id=\"화요일\" type=\"STRING\" size=\"256\"/><Column id=\"수요일\" type=\"STRING\" size=\"256\"/><Column id=\"목요일\" type=\"STRING\" size=\"256\"/><Column id=\"금요일\" type=\"STRING\" size=\"256\"/><Column id=\"토요일\" type=\"STRING\" size=\"256\"/><Column id=\"일요일\" type=\"STRING\" size=\"256\"/><Column id=\"중단시작\" type=\"STRING\" size=\"256\"/><Column id=\"중단종료\" type=\"STRING\" size=\"256\"/><Column id=\"변경내역\" type=\"STRING\" size=\"256\"/><Column id=\"치부위1\" type=\"STRING\" size=\"256\"/><Column id=\"치부위2\" type=\"STRING\" size=\"256\"/><Column id=\"치부위3\" type=\"STRING\" size=\"256\"/><Column id=\"치부위4\" type=\"STRING\" size=\"256\"/><Column id=\"치부위5\" type=\"STRING\" size=\"256\"/><Column id=\"치부위6\" type=\"STRING\" size=\"256\"/><Column id=\"치부위7\" type=\"STRING\" size=\"256\"/><Column id=\"치부위8\" type=\"STRING\" size=\"256\"/><Column id=\"치부위9\" type=\"STRING\" size=\"256\"/><Column id=\"치부위10\" type=\"STRING\" size=\"256\"/><Column id=\"치부위11\" type=\"STRING\" size=\"256\"/><Column id=\"치부위12\" type=\"STRING\" size=\"256\"/><Column id=\"치부위13\" type=\"STRING\" size=\"256\"/><Column id=\"치부위14\" type=\"STRING\" size=\"256\"/><Column id=\"치부위15\" type=\"STRING\" size=\"256\"/><Column id=\"치부위16\" type=\"STRING\" size=\"256\"/><Column id=\"치부위17\" type=\"STRING\" size=\"256\"/><Column id=\"치부위18\" type=\"STRING\" size=\"256\"/><Column id=\"치부위19\" type=\"STRING\" size=\"256\"/><Column id=\"치부위20\" type=\"STRING\" size=\"256\"/><Column id=\"치부위21\" type=\"STRING\" size=\"256\"/><Column id=\"치부위22\" type=\"STRING\" size=\"256\"/><Column id=\"치부위23\" type=\"STRING\" size=\"256\"/><Column id=\"추가부위\" type=\"STRING\" size=\"256\"/><Column id=\"기능시a\" type=\"STRING\" size=\"256\"/><Column id=\"시작시a\" type=\"STRING\" size=\"256\"/><Column id=\"시작분a\" type=\"STRING\" size=\"256\"/><Column id=\"종료시a\" type=\"STRING\" size=\"256\"/><Column id=\"종료분a\" type=\"STRING\" size=\"256\"/><Column id=\"기능시b\" type=\"STRING\" size=\"256\"/><Column id=\"시작시b\" type=\"STRING\" size=\"256\"/><Column id=\"시작분b\" type=\"STRING\" size=\"256\"/><Column id=\"종료시b\" type=\"STRING\" size=\"256\"/><Column id=\"종료분b\" type=\"STRING\" size=\"256\"/><Column id=\"기능시c\" type=\"STRING\" size=\"256\"/><Column id=\"시작시c\" type=\"STRING\" size=\"256\"/><Column id=\"시작분c\" type=\"STRING\" size=\"256\"/><Column id=\"종료시c\" type=\"STRING\" size=\"256\"/><Column id=\"종료분c\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련a\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련a1\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련a2\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련a3\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련a4\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련a5\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련a6\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련a7\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련a8\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련b\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련b1\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련b2\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련b3\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련b4\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련b5\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련b6\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련b7\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련b8\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련b9\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련b10\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련b11\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련c\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련c1\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련c2\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련c3\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련c4\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련c5\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련c6\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련c7\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련c8\" type=\"STRING\" size=\"256\"/><Column id=\"훈련비고\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","30",null,null,"0","20",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"170\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"작성일\"/><Cell col=\"1\" text=\"계획기간\"/><Cell col=\"2\" text=\"작성자명\"/><Cell col=\"3\" text=\"기록번호\"/></Band><Band id=\"body\"><Cell text=\"bind:작성일\" displaytype=\"date\" expandchar=\"dot\" cssclass=\"CellBd9ffb3\"/><Cell col=\"1\" text=\"bind:계획기간\"/><Cell col=\"2\" text=\"bind:작성자명\"/><Cell col=\"3\" text=\"bind:기록번호\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_title","145","0","140","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_cssclass("lb01");
            obj.set_text("수급자");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body8_00","10","grd_list:1","179","19",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("▲ 선택시 작성일자 클릭");
            obj.set_font("normal 9pt/normal \"Noto Sans KR\"");
            obj.set_color("#400080");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",450,553,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00303_P02.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00303_P02.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00303_P02.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00303_P02
         * 화면명   	: 물리(작업)치료·기능회복훈련 급여계획
         * 화면설명 	: 물리(작업)치료·기능회복훈련 새로작성시
                          기존 물리(작업)치료·기능회복훈련 내용을 불러오기 위한 팝업
         * 작성일   	: 2022-06-16
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *
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
        const fv_sicode = this.parent.SICODE;
        const fv_code = this.parent.CODE;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	this.ds_search.setColumn(0, "sicode", fv_sicode);
        	this.ds_search.setColumn(0, "code", fv_code);

        	this.fn_search();
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
        	const argument = "method=getList"
        				   + " sqlId=DAY00303_P02.DAY00303_P02_DS_LIST_S";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if (strSvcID == "search")
        		{
        			const name = this.ds_list.getColumn(0, "수급자");
        			this.div_cont.form.sta_title.set_text(name.trim() + " " + this.div_cont.form.sta_title.text);
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
        // 데이터 보내기
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
        	const dateIdx = obj.getBindCellIndex("body", "작성일");

        	if (e.cell == dateIdx)
        	{
        		this.fn_setData(this.ds_list, e.row);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.grd_list.addEventHandler("oncellclick",this.div_cont_grd_list_oncellclick,this);
        };
        this.loadIncludeScript("DAY00303_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
