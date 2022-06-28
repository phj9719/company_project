(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00101_P08");
            this.set_titletext("요양일지 내용검색");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"sdate\" type=\"STRING\" size=\"256\"/><Column id=\"edate\" type=\"STRING\" size=\"256\"/><Column id=\"value1\" type=\"STRING\" size=\"256\"/><Column id=\"value2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"k_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"k_code\" type=\"STRING\" size=\"256\"/><Column id=\"k_name\" type=\"STRING\" size=\"256\"/><Column id=\"요양일지\" type=\"STRING\" size=\"256\"/><Column id=\"일지담당\" type=\"STRING\" size=\"256\"/><Column id=\"일지코드\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_or", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">1</Col><Col id=\"CMNM\">또는</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","10","81",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","0",null,"700","0",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_data");
            obj.set_scrollbartype("fixed");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"370\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"210\"/></Rows><Band id=\"head\"><Cell text=\"작성일\"/><Cell col=\"1\" text=\"수급자명\"/><Cell col=\"2\" text=\"요양일지\"/><Cell col=\"3\" text=\"작성자명\"/></Band><Band id=\"body\"><Cell text=\"bind:k_nalja\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"1\" text=\"bind:k_name\"/><Cell col=\"2\" text=\"bind:요양일지\" textAlign=\"left\" wordWrap=\"char\" verticalAlign=\"top\" displaytype=\"textareacontrol\" edittype=\"readonly\" textareascrollbartype=\"none fixed\"/><Cell col=\"3\" text=\"bind:일지담당\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_search","10","10",null,"66","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0",null,"26","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("요양일지 내용검색 ( 2022.01.12 ~2022.05.12 )");
            obj.set_textAlign("left");
            obj.set_cssclass("lb01");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_body8_00","0","33",null,"33","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_01_01","0","33","78","33",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("검색어1");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_value1","82","37","170","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_maxlength("40");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_01_01_00","256","33","78","33",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("검색어2");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_value2","338","37","170","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_maxlength("40");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_or","512","37","80","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_or");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"37","77","25","6",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("검색");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_cont.form.div_right.form.div_main.form.sta_body1_00_00","text","ds_list","m_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_00","text","ds_list","m_group");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_cont.form.div_right.form.div_main.form.sta_body1_00_01","text","ds_list","sex_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_00_00","text","ds_list","age");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01","text","ds_list","m_jumin1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00","text","ds_list","m_enday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00","text","ds_list","m_reday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00","text","ds_list","m_conname");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_01","text","ds_list","m_liday1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_01_00","text","ds_list","m_regist");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_01_01","text","ds_list","grade_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_01_02","text","ds_list","m_liday2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.div_main.form.sta_body1_00_02","text","ds_list","m_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.div_right.form.div_main.form.sta_body1_00_02_00","text","ds_list","m_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_right.form.div_main.form.sta_body1_00_02_00_00","text","ds_list","m_juso1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_right.form.div_main.form.sta_body1_00_02_00_01","text","ds_list","m_juso2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.div_right.form.div_main.form.sta_body1_00_02_00_01_00","text","ds_list","m_post");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_01","text","ds_state_desc","view_manager");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.div_right.form.div_main.form.sta_body1_00","text","ds_list","m_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.div_right.form.div_main.form.sta_body16","text","ds_data","din02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cont.form.div_right.form.div_main.form.sta_body11","text","ds_data","lun04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_cont.form.div_right.form.div_main.form.sta_body12","text","ds_data","lun05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_cont.form.div_right.form.div_main.form.sta_body13","text","ds_data","lun06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_cont.form.div_right.form.div_main.form.sta_body15","text","ds_data","din01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_cont.form.div_right.form.div_main.form.sta_body17","text","ds_data","din03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_cont.form.div_right.form.div_main.form.sta_body18","text","ds_data","din04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_cont.form.div_right.form.div_main.form.sta_body19","text","ds_data","din05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_cont.form.div_right.form.div_main.form.mae_00_00","value","ds_list","m_reday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_cont.form.div_right.form.div_main.form.mae_00_01","value","ds_list","m_liday1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_cont.form.div_right.form.div_main.form.mae_00_01_00","value","ds_list","m_liday2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00_00_00_00","text","ds_list_copy","m_reday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00_00_00_01","text","ds_list_copy","m_liday1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00_00_00_01_00","text","ds_list_copy","m_liday2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.div_right.form.div_main.form.div_help.form.edt_content00","value","ds_data","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.div_right.form.div_main.form.div_help.form.edt_content00_00","value","ds_data","traning_a");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.div_right.form.div_main.form.div_help.form.edt_content00_01","value","ds_data","traning_b");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.div_right.form.div_main.form.div_help.form.edt_content00_02","value","ds_data","traning_c");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_cont.form.div_right.form.div_main.form.div_help.form.edt_content00_03","value","ds_actday","인지관리");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.div_right.form.div_main.form.div_help.form.edt_content00_04","value","ds_actday","오전활동1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.div_right.form.div_main.form.div_help.form.edt_content00_04_00","value","ds_actday","오후활동1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.edt_value1","value","ds_search","value1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_search.form.edt_value2","value","ds_search","value2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00101_P08.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00101_P08.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00101_P08.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00101_P08
         * 화면명   	: 요양일지 내용검색
         * 화면설명 	: 요양일지 내용검색
         * 작성일   	: 2022-05-19
         * 작성자   	: 박한준
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *	2022-00-00
         ***********************************************************************
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        //const fv_flag = this.parent.FLAG;
        const fv_sicode = this.parent.sicode;
        const fv_sdate = this.parent.sdate;
        const fv_edate = this.parent.edate;

        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 삽입, 수정 공통 함수를 사용하기 위해 gv_curWinKey를 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00101_P08";

        	this.ds_search.setColumn(0, "sicode", fv_sicode);
        	this.ds_search.setColumn(0, "sdate", fv_sdate);
        	this.ds_search.setColumn(0, "edate", fv_edate);

        	var sdate = fv_sdate.substr(0,4) + "." + fv_sdate.substr(4,2) + "." + fv_sdate.substr(6,2);
        	var edate = fv_edate.substr(0,4) + "." + fv_edate.substr(4,2) + "." + fv_edate.substr(6,2);
        	this.div_search.form.sta_subTitle.set_text("요양일지 내용검색 ( "+ sdate + " ~ "+ edate +")");
        	this.div_search.form.cmb_or.set_value(1);


        	//this.fn_search();

        };

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	// 검색조건 필수 체크 (컴포넌트 tooltiptext 값 넣을 것)
        	//if (!this.gfn_findSnull(this.div_search)) return false;
        	// 둘 다 빈값 또는 2글자 이하면 메시지
        	// 0 0 이면 체크
        	// 2 0 이면 체크x
        	// 0 2 이면 체크x
        	// 2 2 이면 체크x
        	// 2 1 이면 체크
        	// 1 2 이면 체크
        	// 1 1 이면 체크
        	var value1 = this.ds_search.getColumn(0,"value1");
        	var value2 = this.ds_search.getColumn(0,"value2");

        	if(Sct.Util.isEmpty(value1)) value1 = "";
        	if(Sct.Util.isEmpty(value2)) value2 = "";

        	if ((Sct.Util.isEmpty(value1) && Sct.Util.isEmpty(value2))
        	|| (value1.length < 2 && value2.length < 2)
        	|| (value1.length > 1 && value2.length == 1)
        	|| (value1.length == 1 && value2.length > 1)) {
         		this.alert("두 글자 이상 입력하세요");
        		return false;
        	}

        	return true;
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 조회
        this.fn_search = function()
        {
        	//validation
        	if (!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search ";
        	const outDatasets = "ds_data=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00101_P08.DAY00101_P08_DS_DATA_S '";
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
        			// 데이터 세팅
        			//this.fn_dataCopy();
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
        // 조회 버튼
        this.fn_searchBtn = function ()
        {
        	this.fn_search();
        };
        /***********************************************************************
         * Popup Functions
         ***********************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
        };
        this.loadIncludeScript("DAY00101_P08.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
