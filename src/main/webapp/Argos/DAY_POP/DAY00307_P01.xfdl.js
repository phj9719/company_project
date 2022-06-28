(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00307_P01");
            this.set_titletext("물리(작업)치료 제공기록 오류내역");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,465);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"MULNUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"mulnumber\" type=\"STRING\" size=\"256\"/><Column id=\"mulday\" type=\"STRING\" size=\"256\"/><Column id=\"제공일\" type=\"STRING\" size=\"256\"/><Column id=\"mulgroup\" type=\"STRING\" size=\"256\"/><Column id=\"serv_time\" type=\"STRING\" size=\"256\"/><Column id=\"mulname\" type=\"STRING\" size=\"256\"/><Column id=\"mulcode\" type=\"STRING\" size=\"256\"/><Column id=\"치료명01\" type=\"STRING\" size=\"256\"/><Column id=\"치료명02\" type=\"STRING\" size=\"256\"/><Column id=\"치료명03\" type=\"STRING\" size=\"256\"/><Column id=\"치료명04\" type=\"STRING\" size=\"256\"/><Column id=\"치료명05\" type=\"STRING\" size=\"256\"/><Column id=\"치료명06\" type=\"STRING\" size=\"256\"/><Column id=\"치료명07\" type=\"STRING\" size=\"256\"/><Column id=\"치료명08\" type=\"STRING\" size=\"256\"/><Column id=\"참여01\" type=\"STRING\" size=\"256\"/><Column id=\"참여02\" type=\"STRING\" size=\"256\"/><Column id=\"참여03\" type=\"STRING\" size=\"256\"/><Column id=\"참여04\" type=\"STRING\" size=\"256\"/><Column id=\"참여05\" type=\"STRING\" size=\"256\"/><Column id=\"참여06\" type=\"STRING\" size=\"256\"/><Column id=\"참여07\" type=\"STRING\" size=\"256\"/><Column id=\"참여08\" type=\"STRING\" size=\"256\"/><Column id=\"plan_reason\" type=\"STRING\" size=\"256\"/><Column id=\"out_reason\" type=\"STRING\" size=\"256\"/><Column id=\"mat_reason\" type=\"STRING\" size=\"256\"/><Column id=\"plan_desc\" type=\"STRING\" size=\"256\"/><Column id=\"out_desc\" type=\"STRING\" size=\"256\"/><Column id=\"mat_desc\" type=\"STRING\" size=\"256\"/><Column id=\"reason\" type=\"STRING\" size=\"256\"/><Column id=\"desc\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_main","10","40",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","10","9","280","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_text("물리(작업)치료 제공기록 오류확인");
            obj.set_cssclass("lb01");
            this.div_main.addChild(obj.name, obj);

            obj = new Div("div_line","10","40",null,"2","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            obj.set_background("#000000");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1","9","47","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("2");
            obj.set_text("기록번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1","91","47",null,"34","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2","9","80","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("제 공 일");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body2","91","80",null,"34","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_date","99","88","79","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("7");
            obj.set_text("날짜");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_no","99","55","69","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("4");
            obj.set_text("0000000");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3","9","113","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("제공시간");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","91","113",null,"34","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_serv_time","99","121","119","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("10");
            obj.set_text("제공시간");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4","9","146","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("수급자명");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4","91","146",null,"34","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_mate_name","99","154","79","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("13");
            obj.set_text("수급자명");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_mate_code","199","154","79","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("14");
            obj.set_text("수급코드");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head7","9","179","83","67",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("치료내용");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body7_1","91","179",null,"34","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body7_2","91","212",null,"34","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_heal1","99","184","112","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("18");
            obj.set_text("치료01표시영역");
            obj.set_cssclass("chk_d9ffb3");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_heal2","239","184","112","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("19");
            obj.set_text("치료02표시영역");
            obj.set_cssclass("chk_d9ffb3");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_heal3","379","184","112","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("20");
            obj.set_text("치료03표시영역");
            obj.set_cssclass("chk_d9ffb3");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_heal4","519","184","112","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("21");
            obj.set_text("치료04표시영역");
            obj.set_cssclass("chk_d9ffb3");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_heal5","99","217","112","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("22");
            obj.set_text("치료05표시영역");
            obj.set_cssclass("chk_d9ffb3");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_heal6","239","217","112","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("23");
            obj.set_text("치료06표시영역");
            obj.set_cssclass("chk_d9ffb3");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_heal7","379","217","112","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("24");
            obj.set_text("치료07표시영역");
            obj.set_cssclass("chk_d9ffb3");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_heal8","519","217","112","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("25");
            obj.set_text("치료08표시영역");
            obj.set_cssclass("chk_d9ffb3");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head8","9","245","83","77",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("오류원인");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body8","91","245",null,"77","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head9","9","321","83","77",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("오류내역");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body9","91","321",null,"77","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_reason","100","252","529","59",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("30");
            obj.set_text("오류원인");
            obj.set_verticalAlign("top");
            obj.set_color("#400080");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_desc","100","329","529","59",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("31");
            obj.set_text("오류내역");
            obj.set_verticalAlign("top");
            obj.set_color("#400080");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_group","189","88","79","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("32");
            obj.set_text("그룹");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Div("div_func","10","0",null,"35","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"6","70","26","0",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_delete");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,465,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_main.form.sta_no","text","ds_data","mulnumber");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_main.form.sta_date","text","ds_data","제공일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_main.form.sta_serv_time","text","ds_data","serv_time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_main.form.sta_mate_name","text","ds_data","mulname");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_main.form.sta_mate_code","text","ds_data","mulcode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_main.form.chk_heal1","value","ds_data","참여01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_main.form.chk_heal2","value","ds_data","참여02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_main.form.chk_heal3","value","ds_data","참여03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_main.form.chk_heal4","value","ds_data","참여04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_main.form.chk_heal5","value","ds_data","참여05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_main.form.chk_heal6","value","ds_data","참여06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_main.form.chk_heal7","value","ds_data","참여07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_main.form.chk_heal8","value","ds_data","참여08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_main.form.chk_heal1","text","ds_data","치료명01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_main.form.chk_heal2","text","ds_data","치료명02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_main.form.chk_heal3","text","ds_data","치료명03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_main.form.chk_heal4","text","ds_data","치료명04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_main.form.chk_heal5","text","ds_data","치료명05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_main.form.chk_heal6","text","ds_data","치료명06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_main.form.chk_heal7","text","ds_data","치료명07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_main.form.chk_heal8","text","ds_data","치료명08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_main.form.sta_reason","text","ds_data","reason");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_main.form.sta_desc","text","ds_data","desc");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_main.form.sta_group","text","ds_data","mulgroup");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00307_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00307_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00307_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00307_P01
         * 화면명   	: 물리(작업)치료 제공기록 오류내역
         * 화면설명 	: 수급자의 물리(작업)치료 제공기록 오류내역 조회, 삭제
         * 작성일   	: 2022-06-07
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
        const fv_number = this.parent.MULNUMBER;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "MULNUMBER", fv_number);

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

        // 삭제 전 validation
        this.fn_delete_pre = function()
        {
        	if (!this.confirm("물리치료 제공기록을 삭제합니다 ! 확인 후 진행하세요 !"))
        		return false;

        	if (!this.confirm("물리치료 제공기록을 삭제합니다 ! 확인 후 진행하세요 !"))
        		return false;

        	this.ds_data.set_updatecontrol(false);
        	this.ds_data.setRowType(0, Dataset.ROWTYPE_DELETE);
        	this.ds_data.set_updatecontrol(true);

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
        				   + " sqlId=DAY00307_P01.DAY00307_P01_DS_DATA_S";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 삭제
        this.fn_delete = function()
        {
        	//validation
        	if (!this.fn_delete_pre()) return;

        	const svcId = "delete";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_data:U";
        	const outDatasets = "";
        	const argument = "method=delete"
        				   + " sqlId=DAY00307_P01.DAY00307_P01_DS_DATA_D";

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
        			if (this.ds_data.rowcount > 0)
        			{
        				const pReason = this.ds_data.getColumn(0, "plan_reason");
        				const oReason = this.ds_data.getColumn(0, "out_reason");
        				const mReason = this.ds_data.getColumn(0, "mat_reason");
        				const pDesc = this.ds_data.getColumn(0, "plan_desc");
        				const oDesc = this.ds_data.getColumn(0, "out_desc");
        				const mDesc = this.ds_data.getColumn(0, "mat_desc");

        // 				trace("pReason : " + pReason);
        // 				trace("oReason : " + oReason);
        // 				trace("mReason : " + mReason);
        // 				trace("pDesc : " + pDesc);
        // 				trace("oDesc : " + oDesc);
        // 				trace("mDesc : " + mDesc);

        				const reason = pReason + "\n" + oReason + "\n" + mReason;
        				const desc = (pDesc == "" ? "" : pDesc + "\n")
        				           + (oDesc == "" || oDesc == undefined ? "" : oDesc + "\n")
        						   + mDesc;

        				this.ds_data.setColumn(0, "reason", reason);
        				this.ds_data.setColumn(0, "desc", desc);
        			}
        		}
        		else if (strSvcID == "delete")
        		{
        			this.alert("물리치료 제공기록 삭제완료");
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

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 삭제 버튼
        this.fn_deleteBtn = function(obj,e)
        {
        	this.fn_delete();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_func.form.btn_delete.addEventHandler("onclick",this.fn_deleteBtn,this);
        };
        this.loadIncludeScript("DAY00307_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
