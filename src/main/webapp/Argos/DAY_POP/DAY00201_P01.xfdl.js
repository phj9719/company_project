(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00201_P01");
            this.set_titletext("간호일지내용검색");
            if (Form == this.constructor)
            {
                this._setFormPosition(649,820);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"copy_text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"DATE\" size=\"256\"/><Column id=\"s_date\" type=\"STRING\" size=\"256\"/><Column id=\"keyword1\" type=\"STRING\" size=\"256\"/><Column id=\"keyword2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"n_number\" type=\"STRING\" size=\"256\"/><Column id=\"n_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"n_code\" type=\"STRING\" size=\"256\"/><Column id=\"n_name\" type=\"STRING\" size=\"256\"/><Column id=\"간호일지\" type=\"STRING\" size=\"256\"/><Column id=\"담당자\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_op", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">1</Col><Col id=\"CMNM\">또는</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_interval", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"gigan\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_border","0","1","629","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","75","629","725",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"350\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"230\"/></Rows><Band id=\"head\"><Cell text=\"작성일\"/><Cell col=\"1\" text=\"수급자명\"/><Cell col=\"2\" text=\"간호일지\"/><Cell col=\"3\" text=\"작성자명\"/></Band><Band id=\"body\"><Cell text=\"bind:n_nalja\"/><Cell col=\"1\" text=\"bind:n_name\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"textareacontrol\" edittype=\"readonly\" textareascrollbarsize=\"15\" textareascrollbartype=\"default\" textareascrolltype=\"vertical\" text=\"bind:간호일지\"/><Cell col=\"3\" text=\"bind:담당자\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_title","5","5","340","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_cssclass("lb01");
            obj.set_text("간호일지 내용검색");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_border00","0","38","629","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_keyword1","10","40","74","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_text("■ 검색어1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_keyword2","245","43","74","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_text("■ 검색어2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_keyword1","96","42","134","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_keyword2","331","42","134","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("7");
            this.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_operator","469","42","80","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_op");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"42","70","26","5",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("9");
            obj.set_text("검색");
            obj.set_cssclass("btn_search");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",649,820,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_cont.form.edt_keyword1","value","ds_search","keyword1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_cont.form.edt_keyword2","value","ds_search","keyword2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00201_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00201_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00201_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00201_P01
         * 화면명   	: 간호일지내용검색
         * 화면설명 	:
         * 작성일   	: 2022-06-21
         * 작성자   	: 박영주
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

        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	this.ds_search.set_enableevent(false);
        	this.ds_search.setColumn(0, "sicode", this.parent.SICODE);
        	this.ds_search.setColumn(0, "s_date", this.parent.S_DATE);
        	this.ds_search.set_enableevent(true);

        	this.fn_searchInterval();
        	//this.fn_setTitleInterval();
        };

        // Javascript로 계산시 가령 2022-01-31 기준일 때
        // date_from 2021-10-31
        // date_to 2022-03-03 로 나옴
        // 너싱홈 as-is 시스템과 MariaDB로는 각각 2021-10-31, 2022-02-28로 나옴
        // => 쿼리로 가져오는 걸로
        this.fn_setTitleInterval = function()
        {	// 문자열(s_date)로부터 Date 객체(date) 생성
        	var s_date = this.ds_search.getColumn(0, "s_date");

        	var y = s_date.substring(0,4);
        	var m = s_date.substring(4,6);
        	var m_i = parseInt(m, 10);
        	var d = s_date.substring(6,8);
        	var date_from = new Date(y, (m_i-1)+'', d);
        	var date_to = new Date(y, (m_i-1)+'', d);

        	// 3달 전과 1달 후 계산
        	date_from.setMonth(date_from.getMonth()-3);
        	trace(date_from);
        	date_to.setMonth(date_to.getMonth()+1);
        	trace(date_to);
        }
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        this.fn_search_pre = function()
        {
        	return true;
        }

        this.fn_search = function()
        {
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00201_P01.DAY00201_P01_DS_LIST_S ";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.fn_searchInterval = function()
        {
        	const svcId = "search_interval";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_interval=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00201_P01.DAY00201_P01_DS_INTERVAL_S ";
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
        		}
        		else if(strSvcID == "search_interval")
        		{
        			var title = "간호일지 내용검색 ( "
        					+ this.ds_interval.getColumn(0,"gigan")
        					+ " )";
        			this.div_cont.form.sta_title.set_text(title);
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
        this.fn_searchBtn = function()
        {
        	this.fn_search();
        }

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.sta_title.addEventHandler("onclick",this.div_cont_sta_title_onclick,this);
            this.div_cont.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
        };
        this.loadIncludeScript("DAY00201_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
