(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00301_P03");
            this.set_titletext("물리치료 운영일지 삭제");
            if (Form == this.constructor)
            {
                this._setFormPosition(560,360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"KM_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"km_number\" type=\"STRING\" size=\"256\"/><Column id=\"일지번호\" type=\"STRING\" size=\"256\"/><Column id=\"제공일\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"STRING\" size=\"256\"/><Column id=\"제공그룹\" type=\"STRING\" size=\"256\"/><Column id=\"담당자01\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드01\" type=\"STRING\" size=\"256\"/><Column id=\"근무내용\" type=\"STRING\" size=\"256\"/><Column id=\"특이사항\" type=\"STRING\" size=\"256\"/><Column id=\"count\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_main","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","180","9","180","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_text("물리치료 운영일지 삭제");
            obj.set_cssclass("lb01");
            this.div_main.addChild(obj.name, obj);

            obj = new Div("div_line","10","40",null,"2","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            obj.set_background("#000000");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1","9","47","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("2");
            obj.set_text("일지번호");
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
            obj.set_text("운 영 일");
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
            obj.set_text("치료그룹");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","91","113",null,"34","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_group","99","121","79","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("10");
            obj.set_text("치료그룹");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4","9","146","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("작성자명");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4","91","146",null,"34","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_worker_name","99","154","79","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("13");
            obj.set_text("작성자명");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_worker_code","199","154","79","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("14");
            obj.set_text("작성코드");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5","9","179","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("제공인원");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body5","91","179",null,"34","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_count","99","187","39","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("17");
            obj.set_text("숫자");
            obj.set_textAlign("right");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_count00","149","187","39","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("18");
            obj.set_text("명");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_rmk","229","88","299","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("19");
            obj.set_text("▶ 일지를 삭제하면 제공기록도 함께 삭제됩니다.");
            obj.set_color("red");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head6","9","212","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("근무내용");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body6","91","212",null,"34","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_work","99","220","409","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("22");
            obj.set_text("내용");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head7","9","245","83","84",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("특이사항");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body7","91","245",null,"84","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_remark","99","252","420","70",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("25");
            obj.set_scrollbartype("none fixed");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"6","70","26","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("26");
            obj.set_text("삭제");
            obj.set_cssclass("btn_delete");
            this.div_main.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",560,360,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_main.form.sta_no","text","ds_data","일지번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_main.form.sta_date","text","ds_data","운영일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_main.form.sta_group","text","ds_data","제공그룹");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_main.form.sta_worker_name","text","ds_data","담당자01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_main.form.sta_worker_code","text","ds_data","담당코드01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_main.form.sta_count","text","ds_data","count");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_main.form.sta_work","text","ds_data","근무내용");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_main.form.txt_remark","value","ds_data","특이사항");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00301_P03.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00301_P03.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00301_P03.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00301_P03
         * 화면명   	: 물리치료 운영일지 삭제
         * 화면설명 	:
         * 작성일   	: 2022-05-25
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
        const fv_number = this.parent.KM_NUMBER;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "KM_NUMBER", fv_number);

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
        	if (!this.confirm("물리치료 일지와 제공기록 모두를 삭제합니다.\n확인 후 선택하세요 !"))
        		return false;

        	if (!this.confirm("일지를 삭제하면 다시 작성해야 합니다.\n확인 후 선택하세요 !"))
        		return false

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
        				   + " sqlId=DAY00301_P03.DAY00301_P03_DS_DATA_S";

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
        				   + " sqlId=DAY00301_P03.DAY00301_P03_DS_DATA_D";

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

        		}
        		else if (strSvcID == "delete")
        		{
        			this.alert("물리치료일지 삭제완료");
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
            this.div_main.form.btn_delete.addEventHandler("onclick",this.fn_deleteBtn,this);
        };
        this.loadIncludeScript("DAY00301_P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
