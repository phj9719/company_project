(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("작업치료관리");
            this.set_background("#f4f9fc");
            if (Form == this.constructor)
            {
                this._setFormPosition(1180,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TIME\" type=\"STRING\" size=\"256\"/><Column id=\"P1\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ETC\" type=\"STRING\" size=\"256\"/><Column id=\"P2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DATE\">2021-01-31</Col><Col id=\"TIME\">10:00</Col><Col id=\"P1\">홍길순</Col><Col id=\"TYPE\">기본동작훈련 10분</Col><Col id=\"ETC\">특이사항 내용</Col><Col id=\"P2\">김물리</Col></Row><Row><Col id=\"DATE\">2021-01-31</Col><Col id=\"TIME\">11:30</Col><Col id=\"P1\">홍길순</Col><Col id=\"TYPE\">일상생활동작훈련 5분</Col><Col id=\"P2\">이물리</Col></Row><Row><Col id=\"DATE\">2021-01-31</Col><Col id=\"TIME\">13:30</Col><Col id=\"P1\">홍길순</Col><Col id=\"TYPE\">일상생활동작훈련 5분</Col><Col id=\"P2\">이물리</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_room", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resident", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_menuTitle","30","10",null,"30","2.97%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("메뉴명");
            obj.set_cssclass("sta_tMenuTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","2.46%","55",null,"40","3.39%",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_date","0","0","150","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_locale("ko_KR");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","160","0","120","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_location");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_itemheight("36");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_room","290","0","120","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_room");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_itemheight("36");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSearch","550","0","80","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("검색");
            obj.set_cssclass("btn_tSearch");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tDelete",null,"0","80","40","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("btn_tDelete");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSave",null,"0","80","40","90",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_tSave");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_resident","420","0","120","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_resident");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_itemheight("36");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","2.46%","97",null,null,"3.39%","5%",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_name","0","11","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("입소자성명 :");
            obj.set_cssclass("sta_tTxt1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name00","100","11","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("홍길순(87)");
            obj.set_cssclass("sta_tTxt2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name01","200","11","80","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("| 입소일 :");
            obj.set_cssclass("sta_tTxt1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name01_00","280","11","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("2017.01.01");
            obj.set_cssclass("sta_tTxt2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name01_00_00","390","11","80","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_text("| 생활실 :");
            obj.set_cssclass("sta_tTxt1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name01_00_00_00","470","11","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            obj.set_text("1층/101호");
            obj.set_cssclass("sta_tTxt2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name01_00_00_01","560","11","80","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            obj.set_text("| 작성일 :");
            obj.set_cssclass("sta_tTxt1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name01_00_01","640","11","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("7");
            obj.set_text("2021.01.31");
            obj.set_cssclass("sta_tTxt2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01","0","205","370","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("Grid00","0%","336",null,null,"0%","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("12");
            obj.set_cssclass("grd_DataList");
            obj.set_binddataset("ds_list");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"날짜\"/><Cell col=\"2\" text=\"시간\"/><Cell col=\"3\" text=\"입소자\"/><Cell col=\"4\" text=\"훈련항목\"/><Cell col=\"5\" text=\"기타(특이사항)\"/><Cell col=\"6\" text=\"처리자\"/><Cell col=\"7\" expandchar=\"delete\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:DATE\"/><Cell col=\"2\" text=\"bind:TIME\"/><Cell col=\"3\" text=\"bind:P1\"/><Cell col=\"4\" text=\"bind:TYPE\" wordWrap=\"char\"/><Cell col=\"5\" text=\"bind:ETC\" wordWrap=\"char\"/><Cell col=\"6\" text=\"bind:P2\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","0","55","740","150",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02","0","205","370","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("17");
            obj.set_text("기본동작훈련");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_00","370","205","370","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","55","740","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("16");
            obj.set_text("입소자 훈련항목");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","740","205","370","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_tDataBForm3");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02_00","370","205","370","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("13");
            obj.set_text("일상생활훈련");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","740","55","250","150",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","990","55","120","150",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_tDataBForm3");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02_00_01","740","205","370","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("19");
            obj.set_text("신체기능훈련");
            obj.set_cssclass("sta_tDataHForm2");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00_00","760","110","210","80",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("21");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00","740","55","250","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("15");
            obj.set_text("기타(특이사항)");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Combo("Combo00","1003","129","95","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("22");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_itemheight("36");
            var div_cont_form_Combo00_innerdataset = new nexacro.NormalDataset("div_cont_form_Combo00_innerdataset", obj);
            div_cont_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">김물리</Col></Row></Rows>");
            obj.set_innerdataset(div_cont_form_Combo00_innerdataset);
            obj.set_text("김물리");
            obj.set_value("01");
            obj.set_index("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00","990","55","120","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("15");
            obj.set_text("처리자");
            obj.set_cssclass("sta_tDataHForm2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Radio("Radio01","25","105","160","83",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("23");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_cont_form_Radio01_innerdataset = new nexacro.NormalDataset("div_cont_form_Radio01_innerdataset", obj);
            div_cont_form_Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">기본동작훈련 10분</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">일상생활훈련 5분</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">신체기능훈련 5분</Col></Row></Rows>");
            obj.set_innerdataset(div_cont_form_Radio01_innerdataset);
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static00","190","108","500","20",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("24");
            obj.set_text("(일 1회 제공) : 침상 90도로 세워서 앉아있기 동작을 훈련합니다.");
            obj.set_cssclass("sta_tTxt1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static00_00","180","135","550","20",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("25");
            obj.set_text("(일 3회 제공) : 물수건으로 양손과 양손사이사이를 닦는 동작을 유도합니다.");
            obj.set_cssclass("sta_tTxt1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","180","163","550","20",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("26");
            obj.set_text("(일 2회 제공) : 깍지끼고 팔 들어 귀에 붙이기 및 만세하기를 5회 반복합니다.");
            obj.set_cssclass("sta_tTxt1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static03","155","255","50","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("27");
            obj.set_text("1/1");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static03_00","525","255","50","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("28");
            obj.set_text("2/3");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","895","255","50","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("29");
            obj.set_text("0/2");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Tablet",1180,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cal_date","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cmb_location","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cmb_room","value","ds_search","ROOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cmb_resident","value","ds_search","RES_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUB403CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUB403CT.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUB403CT.xfdl","lib::tpgm_com.xjs");
        this.registerScript("NUB403CT.xfdl", function() {
        /***********************************************************************
         * 화면ID    : CMA001CT
         * 화면명   :
         * 화면설명 :
         * 작성일    : 2020-07-08
         * 작성자   :  배영걸
         * 수정이력 :
         ***********************************************************************
         *     	수정일     	수정자   	내용
         *		2020-07-08		배영걸		1차수정
         ***********************************************************************
         ***********************************************************************
         */

        /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        this.executeIncludeScript("lib::tpgm_com.xjs"); /*include "lib::tpgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_currentDS = "";
        this.fv_currentGrid = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e, false);

        	this.sta_menuTitle.set_text(this.getOwnerFrame().arguments["menuTitle"]);

        	// 검색조건 세팅
        	this.taSearchDataSetting(obj);
        };

        /***********************************************************************
         * Common Button Functions
         ************************************************************************/
        // 검색 버튼
        this.fn_searchBtn = function ()
        {
        	//this.fn_search();
        };

        // 저장 버튼
        this.fn_saveBtn = function ()
        {
        	//this.fn_save();
        };

        //삭제 버튼
        this.fn_deleteBtn = function ()
        {
        	//this.fn_delete();
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
        this.fn_save_pre = function ()
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
        	if(!this.fn_search_pre()) return;

        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_search";
        	var outDatasets = "ds_head=output1";
        	var argument = "method=getList "
        		+ "sqlId=CMA001CT.CMA001CT_DS_HEAD_S ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //저장
        this.fn_save = function ()
        {
        	//입력 필수여부체크
        	if(!this.gfn_chkGridEssential(this.fv_currentGrid)) return false;

        	let svcId = "save";
        	let inDs = "ds_head"
        	this.fn_save_com(svcId, inDs);
        };

        // 콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{

        		}
        		else if(strSvcID == "save" || strSvcID == "delete")
        		{
        			//this.fn_search();
        		}
        	}
        	else
        	{

        	}
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/

         /***********************************************************************
         * Component Event Functions
         ***********************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.addEventHandler("onclick",this.formClick,this);
            this.sta_menuTitle.addEventHandler("onclick",this.formClick,this);
            this.div_search.addEventHandler("onclick",this.formClick,this);
            this.div_search.form.cmb_location.addEventHandler("onitemchanged",this.cmb_location_onitemchanged,this);
            this.div_search.form.cmb_room.addEventHandler("onitemchanged",this.cmb_room_onitemchanged,this);
            this.div_search.form.btn_tSearch.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.btn_tDelete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.div_search.form.btn_tSave.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_cont.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_name.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_name00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_name01.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_name01_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_name01_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_name01_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_name01_00_00_01.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_name01_00_01.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01_01_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static02.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static02_01_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01_00_01.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static02_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01_01_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01_01_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static02_00_01.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static02_01_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static02_01_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static03.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static03_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static03_00_00.addEventHandler("onclick",this.formClick,this);
            this.ds_search.addEventHandler("onrowposchanged",this.ds_notice_onrowposchanged,this);
        };
        this.loadIncludeScript("NUB403CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
