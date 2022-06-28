(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00202");
            this.set_titletext("2-2 일별 간호기록 조회.수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"DATE\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"date_string\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"sex_nm\" type=\"STRING\" size=\"256\"/><Column id=\"grade_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"시작시간\" type=\"STRING\" size=\"256\"/><Column id=\"종료시간\" type=\"STRING\" size=\"256\"/><Column id=\"송영시간\" type=\"STRING\" size=\"256\"/><Column id=\"혈압\" type=\"STRING\" size=\"256\"/><Column id=\"혈압01\" type=\"STRING\" size=\"256\"/><Column id=\"혈압02\" type=\"STRING\" size=\"256\"/><Column id=\"맥박\" type=\"STRING\" size=\"256\"/><Column id=\"혈당\" type=\"STRING\" size=\"256\"/><Column id=\"혈당2\" type=\"STRING\" size=\"256\"/><Column id=\"체온\" type=\"STRING\" size=\"256\"/><Column id=\"체온2\" type=\"STRING\" size=\"256\"/><Column id=\"체온3\" type=\"STRING\" size=\"256\"/><Column id=\"호흡\" type=\"STRING\" size=\"256\"/><Column id=\"체중\" type=\"STRING\" size=\"256\"/><Column id=\"투약\" type=\"STRING\" size=\"256\"/><Column id=\"진료\" type=\"STRING\" size=\"256\"/><Column id=\"간호일지\" type=\"STRING\" size=\"256\"/><Column id=\"담당자\" type=\"STRING\" size=\"256\"/><Column id=\"요양\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드\" type=\"STRING\" size=\"256\"/><Column id=\"seperator\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rowdupl", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_record_cnt", this);
            obj._setContents("<ColumnInfo><Column id=\"cnt\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_searchAndGrp","0","0","1840","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pre_dt","10","7","70","26",null,null,null,null,null,null,this.div_searchAndGrp.form);
            obj.set_taborder("0");
            obj.set_text("◀ 전날");
            obj.set_visible("true");
            this.div_searchAndGrp.addChild(obj.name, obj);

            obj = new Calendar("cal_date","85","7","110","26",null,null,null,null,null,null,this.div_searchAndGrp.form);
            obj.set_initvalueid("iv_cal_yyyyMMddddd");
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            obj.set_buttonsize("0 0");
            this.div_searchAndGrp.addChild(obj.name, obj);

            obj = new Button("btn_next_dt","225","7","70","26",null,null,null,null,null,null,this.div_searchAndGrp.form);
            obj.set_taborder("2");
            obj.set_text("앞날 ▶");
            obj.set_visible("true");
            this.div_searchAndGrp.addChild(obj.name, obj);

            obj = new Button("btn_grp_all","311","7","50","26",null,null,null,null,null,null,this.div_searchAndGrp.form);
            obj.set_taborder("3");
            obj.set_text("전체");
            this.div_searchAndGrp.addChild(obj.name, obj);

            obj = new Button("btn_grp_A","366","7","35","26",null,null,null,null,null,null,this.div_searchAndGrp.form);
            obj.set_taborder("4");
            obj.set_text("A");
            this.div_searchAndGrp.addChild(obj.name, obj);

            obj = new Button("btn_grp_B","406","7","35","26",null,null,null,null,null,null,this.div_searchAndGrp.form);
            obj.set_taborder("5");
            obj.set_text("B");
            this.div_searchAndGrp.addChild(obj.name, obj);

            obj = new Button("btn_grp_C","446","7","35","26",null,null,null,null,null,null,this.div_searchAndGrp.form);
            obj.set_taborder("6");
            obj.set_text("C");
            this.div_searchAndGrp.addChild(obj.name, obj);

            obj = new Button("btn_grp_D","486","7","35","26",null,null,null,null,null,null,this.div_searchAndGrp.form);
            obj.set_taborder("7");
            obj.set_text("D");
            this.div_searchAndGrp.addChild(obj.name, obj);

            obj = new Button("btn_grp_E","526","7","35","26",null,null,null,null,null,null,this.div_searchAndGrp.form);
            obj.set_taborder("8");
            obj.set_text("E");
            this.div_searchAndGrp.addChild(obj.name, obj);

            obj = new Button("btn_save","1760","7","70","26",null,null,null,null,null,null,this.div_searchAndGrp.form);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_searchAndGrp.addChild(obj.name, obj);

            obj = new Button("btn_report3","1610","7","140","26",null,null,null,null,null,null,this.div_searchAndGrp.form);
            obj.set_taborder("10");
            obj.set_text("일 간호일지(3단)");
            obj.set_cssclass("btn_print");
            this.div_searchAndGrp.addChild(obj.name, obj);

            obj = new Button("btn_report6","1460","7","140","26",null,null,null,null,null,null,this.div_searchAndGrp.form);
            obj.set_taborder("11");
            obj.set_text("일 간호일지(6단)");
            obj.set_cssclass("btn_print");
            this.div_searchAndGrp.addChild(obj.name, obj);

            obj = new Button("btn_report8","1310","7","140","26",null,null,null,null,null,null,this.div_searchAndGrp.form);
            obj.set_taborder("12");
            obj.set_text("일 간호일지(8단)");
            obj.set_cssclass("btn_print");
            this.div_searchAndGrp.addChild(obj.name, obj);

            obj = new Calendar("cal_date_pic","cal_date:-1","7","25","26",null,null,null,null,null,null,this.div_searchAndGrp.form);
            obj.set_taborder("13");
            this.div_searchAndGrp.addChild(obj.name, obj);

            obj = new Div("div_grd","0","40","1830","740",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","10","37","1820","700",null,null,null,null,null,null,this.div_grd.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"58\"/><Column size=\"70\"/><Column size=\"32\"/><Column size=\"5\"/><Column size=\"32\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"270\"/><Column size=\"57\"/><Column size=\"37\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"현황\"/><Cell col=\"1\" text=\"그룹\"/><Cell col=\"2\" text=\"수급자명\"/><Cell col=\"3\" text=\"성별\"/><Cell col=\"4\" text=\"등급\"/><Cell col=\"5\" text=\"생활실\"/><Cell col=\"6\" text=\"송영기록\"/><Cell col=\"7\" colspan=\"3\" text=\"혈압\"/><Cell col=\"10\" text=\"맥박\"/><Cell col=\"11\" text=\"혈당\"/><Cell col=\"12\" text=\"혈당2\"/><Cell col=\"13\" text=\"체온\"/><Cell col=\"14\" text=\"체온2\"/><Cell col=\"15\" text=\"체온3\"/><Cell col=\"16\" text=\"호흡\"/><Cell col=\"17\" text=\"체중\"/><Cell col=\"18\" text=\"투약\"/><Cell col=\"19\" text=\"진료\"/><Cell col=\"20\" text=\"간호일지\"/><Cell col=\"21\" text=\"작성자\"/><Cell col=\"22\" text=\"조회\"/><Cell col=\"23\" text=\"요양\" tooltiptext=\"bind:요양\"/></Band><Band id=\"body\"><Cell text=\"bind:s_nm\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:m_group\"/><Cell col=\"2\" text=\"bind:m_name\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:sex_nm\"/><Cell col=\"4\" text=\"bind:grade_nm\"/><Cell col=\"5\" text=\"bind:m_roomname\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:송영시간\"/><Cell col=\"7\" text=\"bind:혈압01\" editinputfilter=\"none\" editmaxlength=\"3\" editinputtype=\"number\" border=\"1px solid #e2e2e2,0px,1px solid #e2e2e2,1px solid #e2e2e2\" textAlign=\"right\" expandshow=\"hide\" expandsize=\"16\" suppressalign=\"first\" cssclass=\"''\" font=\"normal bold 10pt/normal &quot;Arial&quot;\" edittype=\"mask\" maskeditlimitbymask=\"both\" maskeditformat=\"###\" maskeditmaskchar=\" \" maskedittrimtype=\"both\"/><Cell col=\"8\" border=\"1px solid #e2e2e2,0px,1px solid #e2e2e2,1px solid #e2e2e2\" text=\"bind:seperator\" edittype=\"none\" font=\"normal bold 10pt/normal &quot;Arial&quot;\"/><Cell col=\"9\" text=\"bind:혈압02\" edittype=\"mask\" textAlign=\"left\" cssclass=\"''\" font=\"normal bold 10pt/normal &quot;Arial&quot;\" editmaxlength=\"3\" editinputtype=\"number\" editinputfilter=\"none\" maskeditformat=\"###\" maskeditlimitbymask=\"both\" maskeditmaskchar=\" \" maskedittrimtype=\"both\"/><Cell col=\"10\" text=\"bind:맥박\" edittype=\"mask\" editinputtype=\"number\" displaytype=\"normal\" editmaxlength=\"3\" maskedittype=\"number\" maskeditlimitbymask=\"both\" cssclass=\"''\" textAlign=\"right\" font=\"normal bold 10pt/normal &quot;Arial&quot;\" padding=\"0px 5px 0px 0px\" maskeditformat=\"###\" maskeditmaskchar=\" \" maskedittrimtype=\"both\"/><Cell col=\"11\" text=\"bind:혈당\" editinputtype=\"number\" edittype=\"mask\" cssclass=\"''\" textAlign=\"right\" font=\"normal bold 10pt/normal &quot;Arial&quot;\" padding=\"0px 5px 0px 0px\" editmaxlength=\"3\" maskeditlimitbymask=\"both\" maskeditformat=\"###\" maskeditmaskchar=\" \" maskedittrimtype=\"both\"/><Cell col=\"12\" text=\"bind:혈당2\" edittype=\"mask\" editinputtype=\"number\" cssclass=\"''\" textAlign=\"right\" font=\"normal bold 10pt/normal &quot;Arial&quot;\" padding=\"0px 5px 0px 0px\" editmaxlength=\"3\" maskeditformat=\"###\" maskeditlimitbymask=\"both\" maskeditmaskchar=\" \" maskedittrimtype=\"both\"/><Cell col=\"13\" text=\"bind:체온\" editinputtype=\"number\" edittype=\"mask\" cssclass=\"''\" textAlign=\"right\" font=\"normal bold 10pt/normal &quot;Arial&quot;\" padding=\"0px 5px 0px 0px\" maskeditformat=\"##.#\" maskeditautoselect=\"false\" maskedittype=\"number\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\" displaytype=\"normal\" maskeditmaskchar=\" \"/><Cell col=\"14\" text=\"bind:체온2\" editinputtype=\"number\" edittype=\"mask\" cssclass=\"''\" textAlign=\"right\" font=\"normal bold 10pt/normal &quot;Arial&quot;\" padding=\"0px 5px 0px 0px\" maskeditformat=\"##.#\" maskedittype=\"number\" editmaxlength=\"-1\" maskeditlimitbymask=\"both\" maskedittrimtype=\"both\" maskeditmaskchar=\" \"/><Cell col=\"15\" text=\"bind:체온3\" editinputtype=\"number\" edittype=\"mask\" cssclass=\"''\" textAlign=\"right\" font=\"normal bold 10pt/normal &quot;Arial&quot;\" padding=\"0px 5px 0px 0px\" maskeditformat=\"##.#\" maskeditlimitbymask=\"both\" maskedittrimtype=\"both\" maskedittype=\"number\" maskeditmaskchar=\" \"/><Cell col=\"16\" text=\"bind:호흡\" editinputtype=\"number\" edittype=\"mask\" cssclass=\"''\" textAlign=\"right\" font=\"normal bold 10pt/normal &quot;Arial&quot;\" padding=\"0px 5px 0px 0px\" editmaxlength=\"3\" calendardateformat=\"##.#\" calendareditformat=\"##.#\" calendardisplaynulltype=\"nulltext\" calendardaysize=\"0\" calendarbuttonsize=\"0\" calendardisplaynulltext=\"0.0\" calendardisplayinvalidtype=\"invalidtext\" calendardisplayinvalidtext=\"0.0\" maskeditformat=\"###\" maskeditlimitbymask=\"both\" maskeditmaskchar=\" \" maskedittrimtype=\"both\"/><Cell col=\"17\" text=\"bind:체중\" editinputtype=\"number\" edittype=\"mask\" cssclass=\"''\" textAlign=\"right\" font=\"normal bold 10pt/normal &quot;Arial&quot;\" padding=\"0px 5px 0px 0px\" maskeditformat=\"###.#\" maskeditlimitbymask=\"both\" maskedittrimtype=\"both\" maskedittype=\"number\" maskeditmaskchar=\" \"/><Cell col=\"18\" text=\"bind:투약\" edittype=\"none\"/><Cell col=\"19\" text=\"bind:진료\"/><Cell col=\"20\" text=\"bind:간호일지\" textAlign=\"left\"/><Cell col=\"21\" text=\"bind:담당자\" textAlign=\"left\"/><Cell col=\"22\" displaytype=\"buttoncontrol\" expandimage=\"url('theme://images/ico_search.png')\" edittype=\"button\" expandshow=\"show\" expandsize=\"50\" imagestretch=\"fixaspectratio\"/><Cell col=\"23\" text=\"bind:요양\"/></Band></Format></Formats>");
            this.div_grd.addChild(obj.name, obj);

            obj = new Static("sta_title","10","7","330","30",null,null,null,null,null,null,this.div_grd.form);
            obj.set_taborder("1");
            obj.set_text("일별 간호기록 조회.수정");
            obj.set_textAlign("left");
            obj.set_cssclass("lb01");
            this.div_grd.addChild(obj.name, obj);

            obj = new Static("sta_sub",null,"10","570","30","0",null,null,null,null,null,this.div_grd.form);
            obj.set_taborder("2");
            obj.set_text("혈압, 맥박, 혈당, 체온, 호흡, 체중 항목은 수정할 수 있습니다.");
            obj.set_color("purple");
            obj.set_textAlign("right");
            this.div_grd.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_searchAndGrp.form.cal_date","value","ds_search","date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_searchAndGrp.form.cal_date_pic","value","ds_search","date");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00202.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00202.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00202.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00202
         * 화면명   	: 2-2 일별간호기록 조회.수정
         * 화면설명 	: 일별 간호기록을 조회, 수정 및 입력
         * 작성일   	: 2022-06-08
         * 작성자   	: 정준우
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
        const fv_sicode = nexacro.getApplication().gds_userInfo.getColumn(0, "sicode");
        const fv_staffId = nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid");
        const fv_name = nexacro.trim(nexacro.getApplication().gds_userInfo.getColumn(0, "c_name"));
        const rowPosition = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // onload
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	//현재 날짜
        	const today = Sct.Util.getToday();
        	this.ds_search.setColumn(0,"sicode",fv_sicode);
        	this.ds_search.setColumn(0,"date",today);
        	this.ds_search.setColumn(0,"date_string",today);//날짜를 숫자 형태로
        	this.ds_search.setColumn(0,"m_group","all");
        	//버튼 초기 css 적용
        	/*
        	this.div_searchAndGrp.form.btn_grp_all.set_background("red");
        	this.div_searchAndGrp.form.btn_grp_A.set_background("darkgray");
        	this.div_searchAndGrp.form.btn_grp_B.set_background("darkgray");
        	this.div_searchAndGrp.form.btn_grp_C.set_background("darkgray");
        	this.div_searchAndGrp.form.btn_grp_D.set_background("darkgray");
        	this.div_searchAndGrp.form.btn_grp_E.set_background("darkgray");
        	*/
        	this.div_searchAndGrp.form.btn_grp_all.set_cssclass("btn_orange");
        	this.div_searchAndGrp.form.btn_grp_A.set_cssclass("btn_basic_gray");
        	this.div_searchAndGrp.form.btn_grp_B.set_cssclass("btn_basic_gray");
        	this.div_searchAndGrp.form.btn_grp_C.set_cssclass("btn_basic_gray");
        	this.div_searchAndGrp.form.btn_grp_D.set_cssclass("btn_basic_gray");
        	this.div_searchAndGrp.form.btn_grp_E.set_cssclass("btn_basic_gray");

        	//그리드 css 적용
        	var grd = this.div_grd.form.grd_list;

        	var nameIdx = grd.getBindCellIndex("body","m_name");
        	var snmIdx = grd.getBindCellIndex("body","s_nm");

        	var nameCss = "expr:sex_nm=='남'?'cellBMan':'cellBWoman'";
        	var snmCss = "expr:s_nm=='퇴소자'?'cellBRetire':''";

        	grd.setCellProperty("body", nameIdx, "cssclass", nameCss);
        	grd.setCellProperty("body", snmIdx, "cssclass", snmCss);

        	//그리드 표현 적용
        	const songIdx = grd.getBindCellIndex("body","송영시간");
        	const seperatorIdx = grd.getBindCellIndex("body","seperator");
        	const songExpr = "expr:송영시간 == '-' ? 'none':'normal'";
        	//둘 중 하나라도 값이 있으면 display 한다
        	const seperatorExpr = "expr:(혈압01 != '' && 혈압01 != undefined && 혈압01 != NULL) || (혈압02 != '' && 혈압02 != undefined  && 혈압02 != NULL) ? 'normal' : 'none'";

        	grd.setCellProperty("body", seperatorIdx, "displaytype", seperatorExpr);
        	grd.setCellProperty("body", songIdx, "displaytype", songExpr);
        	//조회
        	this.fn_search("search");
        };

        /************************************************************************
         *  Validation Check
         ************************************************************************/

        //조회 전 validation check
        this.fn_search_pre = function ()
        {
        	// 검색조건 필수 체크 (컴포넌트 tooltiptext 값 넣을 것)
        	if (!this.gfn_findSnull(this.div_searchAndGrp)) return false;
        	return true;
        };
        //저장 전 validation check
        this.fn_save_pre = function ()
        {
        	this.rowPosition = this.ds_list.rowposition;
        	return true;
        };
        /************************************************************************
         * Transaction Func
         ************************************************************************/

        //조회
        this.fn_search = function(flag)
        {
        	//validation check
         	if (!this.fn_search_pre())
         	{
         		return;
         	}

         	var svcId = flag;
         	var params = "/commonController.do";
         	var inDatasets = "input1=ds_search";
         	var outDatasets = "ds_list=output1";
         	var argument = "method=getList "
         				 + "sqlId=DAY00202.DAY00202_DS_LIST_S ";
         	var callbackFunc = "fn_callback";
         	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        }

        //리포트 레코드 카운트 조회
        this.fn_recordCnt = function ()
        {
        	var svcId = "recordCnt";
         	var params = "/DAY00202Controller.do";
         	var inDatasets = "input1=ds_search";
         	var outDatasets = "ds_record_cnt=output1";
         	var argument = "method=recordCnt "
         				 + "sqlId=DAY00202.DAY00202_DS_RECORD_CNT_S ";
         	var callbackFunc = "fn_callback";
        	//동기
         	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, false);
        };

        //저장
        this.fn_save = function()
        {
        	//validation check
        	if (!this.fn_save_pre())
        	{
        		return;
        	}

         	var svcId = "save";
         	var params = "/DAY00202Controller.do";
         	var inDatasets = "input1=ds_data:U";
         	var outDatasets = "";
         	var argument = "method=save ";
         	var callbackFunc = "fn_callback";
         	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        }

        //콜백
        this.fn_callback = function (strSvcId, nErrorCode, strErrorMsg)
        {	//0 이면 트랜잭션 성공
        	if (nErrorCode == 0)
        	{
        		if (strSvcId == "search")
        		{
        			this.ds_data.clearData();
        			//첫번째 row가 선택되도록 한다
        			this.ds_list.set_rowposition(0);
        		}
        		else if(strSvcId == "save")
        		{
        			this.ds_data.clearData();
        			this.alert("바이탈기록 저장완료 !");
        			this.fn_search("searchReturn");
        		}
        		else if(strSvcId == "searchReturn")
        		{
        			//rowposition을 세팅
        			this.ds_list.set_rowposition(this.rowPosition);
        		}
        	}
        	else
        	{
        		Sct.alert(this,"",strErrorMsg);
        	}
        };


        /************************************************************************
         * Component Event
         ************************************************************************/

        //달력 체인지 이벤트
        this.div_searchAndGrp_cal_date_pic_onchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0,"date", e.postvalue);
        	this.ds_search.setColumn(0,"date_string", e.postvalue);
        	this.fn_search("search");
        };

        //전날
        this.div_searchAndGrp_btn_pre_dt_onclick = function(obj,e)
        {
        	const pre = this.ds_search.getColumn(0,"date");
        	pre.setDate(pre.getDate()-1);
        	this.ds_search.setColumn(0,"date",pre);
        	this.ds_search.setColumn(0,"date_string",pre);
        	this.ds_search.setColumn(0,"m_group",'all');//그룹 전체 검색
        	this.fn_search("search");
        };
        //앞날
        this.div_searchAndGrp_btn_next_dt_onclick = function(obj,e)
        {
        	const next = this.ds_search.getColumn(0,"date");
        	next.setDate(next.getDate()+1);
        	this.ds_search.setColumn(0,"date",next);
        	this.ds_search.setColumn(0,"date_string",next);
        	this.ds_search.setColumn(0,"m_group",'all');
        	this.fn_search("search");
        };

        //버튼 클릭 이벤트(전체, A,B,C,D,E)
        this.Button_onclick = function(obj,e)
        {
        	this.fn_btnFilter(obj);
        };

        //버튼 클릭 함수
        this.fn_btnFilter = function (obj)
        {
        	/*
        	this.div_searchAndGrp.form.btn_grp_all.set_background("darkgray");
        	this.div_searchAndGrp.form.btn_grp_A.set_background("darkgray");
        	this.div_searchAndGrp.form.btn_grp_B.set_background("darkgray");
        	this.div_searchAndGrp.form.btn_grp_C.set_background("darkgray");
        	this.div_searchAndGrp.form.btn_grp_D.set_background("darkgray");
        	this.div_searchAndGrp.form.btn_grp_E.set_background("darkgray");
        	*/
        	this.div_searchAndGrp.form.btn_grp_all.set_cssclass("btn_basic_gray");
        	this.div_searchAndGrp.form.btn_grp_A.set_cssclass("btn_basic_gray");
        	this.div_searchAndGrp.form.btn_grp_B.set_cssclass("btn_basic_gray");
        	this.div_searchAndGrp.form.btn_grp_C.set_cssclass("btn_basic_gray");
        	this.div_searchAndGrp.form.btn_grp_D.set_cssclass("btn_basic_gray");
        	this.div_searchAndGrp.form.btn_grp_E.set_cssclass("btn_basic_gray");

        	const keyword = obj.id.substr(8);//btn_grp_A~E , all 에서 뒤의 단어만
        	trace("keyword : " + keyword);

        	if (obj.id == ("btn_grp_" + keyword))
        	{
        		//this.div_searchAndGrp.form.components[obj.id].set_background("red");
        		this.div_searchAndGrp.form.components[obj.id].set_cssclass("btn_orange");
        		this.ds_search.setColumn(0,"m_group",keyword);
        	}
        	this.fn_search("search");
        };

        //저장 버튼
        this.div_searchAndGrp_btn_save_onclick = function(obj,e)
        {
        	//변경 사항이 없으면 동작x
        	if (this.ds_data.rowcount == 0)
        	{
        		return;
        	}


        	//ds_save의 혈압 컬럼의 값을 '110/80' 의 형태로 변경
        	for(let i=0;i<this.ds_data.rowcount;i++)
        	{
        		let press01 = this.ds_data.getColumn(i,"혈압01");
        		let press02 = this.ds_data.getColumn(i,"혈압02");
        		//혈압에 둘 다 값이 있는 경우
        		/*
        		if (!Sct.Util.isEmpty(press01) && !Sct.Util.isEmpty(press02))
        		{
        			this.ds_data.setColumn(i,"혈압", press01 + "/" + press02);
        		}
        		else
        		{
        			this.ds_data.setColumn(i,"혈압", '');
        		}
        		*/
        		//값의 존재 유무와 무관하게 무조건 / 포함
        		this.ds_data.setColumn(i,"혈압", press01 + "/" + press02);
        			this.ds_data.set_updatecontrol(false);
        			this.ds_data.setRowType(i, Dataset.ROWTYPE_UPDATE);
        			this.ds_data.set_updatecontrol(true);
        	}
        	this.fn_save();
        };

        //ds_list change event
        this.ds_list_oncolumnchanged = function(obj,e)
        {

        	const flag = 0;
        	if (
        	e.columnid == "혈압01" || e.columnid == "혈압02" || e.columnid == "맥박" || e.columnid == "혈당" ||
        	e.columnid == "혈당2" || e.columnid == "체온" || e.columnid == "체온2" || e.columnid == "체온3" ||
        	e.columnid == "호흡" || e.columnid == "체중")
        	{
        		//include mask text
        		let grdText = this.div_grd.form.grd_list.getEditingText();
        		grdText = grdText.replace(/[^0-9\.]/g,"");
        		//mask
        		this.fn_postInput(e.columnid,e.row, grdText);

        		for(let i=0;i<this.ds_data.rowcount+1 ; i++)
        		{

        			if (this.ds_data.getColumn(i,"m_code") == this.ds_list.getColumn(e.row,"m_code"))
        			{
        				this.ds_data.setColumn(i,e.columnid, this.ds_list.getColumn(e.row,e.columnid) )
        				flag = 1;
        			}
        		}

        		if (flag != 1)
        		{
        			//혈압이 null인 경우 데이터를 지정해야 Data too long error 방지
        			let press01 = this.ds_list.getColumn(e.row,"혈압01");
        			let press02 = this.ds_list.getColumn(e.row,"혈압02");
        			if (Sct.Util.isEmpty(press01))
        			{
        				press01 = '';
        			}
        			if (Sct.Util.isEmpty(press02))
        			{
        				press02 = '';
        			}
        			this.ds_list.setColumn(e.row,"혈압01",press01);
        			this.ds_list.setColumn(e.row,"혈압02",press02);

        			this.ds_rowdupl.copyData(this.ds_list);
        			this.ds_rowdupl.clearData();
        			this.ds_rowdupl.addRow();
        			this.ds_rowdupl.copyRow(0,this.ds_list,e.row);
        			//담당자,담당코드가 비어있다면 현재 로그인한 사용자가 담당자
        			if (Sct.Util.isEmpty(this.ds_list.getColumn(e.row,"담당자")) && Sct.Util.isEmpty(this.ds_list.getColumn(e.row,"담당코드")))
        			{
        				this.ds_rowdupl.setColumn(0,"담당자", fv_name);
        				this.ds_rowdupl.setColumn(0,"담당코드", fv_staffId);
        			}


        			this.ds_rowdupl.addColumn("n_nalja","DATE");
        			this.ds_rowdupl.setColumn(0,"n_nalja", this.ds_search.getColumn(0,"date"));

        			this.ds_data.appendData(this.ds_rowdupl);

        		}
        	}
        };

        //그리드 조회 클릭 이벤트
        this.div_grd_grd_list_oncellclick = function(obj,e)
        {

        	//조회 버튼 컬럼 == col22
        	if (e.col == 22)
        	{
        		//현재 rowposition 저장
        		this.rowPosition = this.ds_list.rowposition;
        		this.fn_select_popup(e);
        	}
        };

        //mask edit
        this.fn_postInput = function (col,row,val)
        {
        	if (col == "체온" || col == "체온2" || col == "체온3" || col == "체중")
        	{
        		const str = this.fn_valChk(val);
        		this.ds_list.setColumn(row, col, str);
        	}
        };
        //mask edit chk
        this.fn_valChk = function (val)
        {
        	const num = Number(val);
        	let numStr = num.toString();
        	let str = numStr.slice(-2,-1);
        	if (str == '.')
        	{
        		str = numStr;
        	}
        	else
        	{
        		str = numStr + '.0';
        	}
        	return str;
        };
        /************************************************************************
         * Popup Func
         ************************************************************************/
        //조회 팝업창 오픈
        this.fn_select_popup = function (e)
        {
        	const nRow = e.row;
        	const charge_nm = Sct.Util.isEmpty(this.ds_list.getColumn(nRow, "담당자")) ? fv_name : this.ds_list.getColumn(nRow, "담당자");
        	const charge_code = Sct.Util.isEmpty(this.ds_list.getColumn(nRow, "담당코드")) ? fv_staffId : this.ds_list.getColumn(nRow, "담당코드");
        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_search.getColumn(0, "date_string")
        		,   M_CODE : this.ds_list.getColumn(nRow, "m_code")
        		,   CHARGE_NM : charge_nm
        		,   CHARGE_CODE : charge_code
        	};
        	Sct.popup(this, "nurse", 450, 400, "간호제공기록", param, "DAY_POP::DAY00202_P01.xfdl", "fn_popCallback");
        };

        //팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_return", strDs);
        	switch(popid)
        	{
        		// 간호제공기록
        		case "nurse" :
        			//팝업 콜백 후 재조회 및 현재 선택된 rowposition 유지
        			if (objDs.getColumn(0,"REFRESH") == "Y")
        			{
        				this.fn_search("searchReturn");
        			}
        			else
        			{
        				this.ds_list.deleteRow(this.rowPosition);
        				this.ds_list.set_rowposition(0);
        			}
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_return", strDs);
        	}
        };
        /************************************************************************
         * Report Func
         ************************************************************************/

        //일 간호일지(8단)
        this.div_searchAndGrp_btn_report8_onclick = function(obj,e)
        {

        	//데이터가 없으면 출력x
        	this.fn_recordCnt();
        	if (this.ds_record_cnt.getColumn(0,"cnt") < 1)
        	{
        		this.alert("해당되는 정보를 조회하지 못했습니다. !");
        		return false;
        	}


        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00202_R01.xfdl";
        	const popupName = "일일 간호일지(8단)";

        	//결재란 항상 존재
        	let sign = 1;

        	params = {
        		sicode : fv_sicode
        	,	date : this.ds_search.getColumn(0, "date_string")
        	,	sign : sign
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        //일 간호일지(6단)
        this.div_searchAndGrp_btn_report6_onclick = function(obj,e)
        {
        	this.fn_recordCnt();
        	if (this.ds_record_cnt.getColumn(0,"cnt") < 1)
        	{
        		this.alert("해당되는 정보를 조회하지 못했습니다. !");
        		return false;
        	}


        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00202_R02.xfdl";
        	const popupName = "일일 간호일지(6단)";

        	let sign = 1;
        	params = {
        		sicode : fv_sicode
        	,	date : this.ds_search.getColumn(0, "date_string")
        	,	sign : sign
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        //일 간호일지(3단)
        this.div_searchAndGrp_btn_report3_onclick = function(obj,e)
        {
        	this.fn_recordCnt();
        	if (this.ds_record_cnt.getColumn(0,"cnt") < 1)
        	{
        		this.alert("해당되는 정보를 조회하지 못했습니다. !");
        		return false;
        	}

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00202_R03.xfdl";
        	const popupName = "일일 간호일지(3단)";

        	let sign = 1;
        	params = {
        		sicode : fv_sicode
        	,	date : this.ds_search.getColumn(0, "date_string")
        	,	sign : sign
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_searchAndGrp.form.btn_pre_dt.addEventHandler("onclick",this.div_searchAndGrp_btn_pre_dt_onclick,this);
            this.div_searchAndGrp.form.btn_next_dt.addEventHandler("onclick",this.div_searchAndGrp_btn_next_dt_onclick,this);
            this.div_searchAndGrp.form.btn_grp_all.addEventHandler("onclick",this.Button_onclick,this);
            this.div_searchAndGrp.form.btn_grp_A.addEventHandler("onclick",this.Button_onclick,this);
            this.div_searchAndGrp.form.btn_grp_B.addEventHandler("onclick",this.Button_onclick,this);
            this.div_searchAndGrp.form.btn_grp_C.addEventHandler("onclick",this.Button_onclick,this);
            this.div_searchAndGrp.form.btn_grp_D.addEventHandler("onclick",this.Button_onclick,this);
            this.div_searchAndGrp.form.btn_grp_E.addEventHandler("onclick",this.Button_onclick,this);
            this.div_searchAndGrp.form.btn_save.addEventHandler("onclick",this.div_searchAndGrp_btn_save_onclick,this);
            this.div_searchAndGrp.form.btn_report3.addEventHandler("onclick",this.div_searchAndGrp_btn_report3_onclick,this);
            this.div_searchAndGrp.form.btn_report6.addEventHandler("onclick",this.div_searchAndGrp_btn_report6_onclick,this);
            this.div_searchAndGrp.form.btn_report8.addEventHandler("onclick",this.div_searchAndGrp_btn_report8_onclick,this);
            this.div_searchAndGrp.form.cal_date_pic.addEventHandler("onchanged",this.div_searchAndGrp_cal_date_pic_onchanged,this);
            this.div_grd.form.grd_list.addEventHandler("oncellclick",this.div_grd_grd_list_oncellclick,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00202.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
