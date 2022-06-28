(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00702_P02");
            this.set_titletext("식단메뉴추가");
            if (Form == this.constructor)
            {
                this._setFormPosition(980,660);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"식단번호\" type=\"STRING\" size=\"256\"/><Column id=\"식단구분\" type=\"STRING\" size=\"256\"/><Column id=\"식단구분명\" type=\"STRING\" size=\"256\"/><Column id=\"식단이름\" type=\"STRING\" size=\"256\"/><Column id=\"일회제공\" type=\"STRING\" size=\"256\"/><Column id=\"칼로리\" type=\"STRING\" size=\"256\"/><Column id=\"재료구성\" type=\"STRING\" size=\"256\"/><Column id=\"org_식단번호\" type=\"STRING\" size=\"256\"/><Column id=\"findname\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">F01</Col><Col id=\"CMNM\">주식[밥,죽]</Col></Row><Row><Col id=\"CMCD\">F02</Col><Col id=\"CMNM\">국,탕,찌개</Col></Row><Row><Col id=\"CMCD\">F03</Col><Col id=\"CMNM\">찜,조림,볶음</Col></Row><Row><Col id=\"CMCD\">F04</Col><Col id=\"CMNM\">전,부침,튀김</Col></Row><Row><Col id=\"CMCD\">F05</Col><Col id=\"CMNM\">나물,무침</Col></Row><Row><Col id=\"CMCD\">F06</Col><Col id=\"CMNM\">구이,젓갈</Col></Row><Row><Col id=\"CMCD\">F07</Col><Col id=\"CMNM\">기타</Col></Row><Row><Col id=\"CMCD\">F08</Col><Col id=\"CMNM\">김치외 장류</Col></Row><Row><Col id=\"CMCD\">G01</Col><Col id=\"CMNM\">간식류</Col></Row><Row><Col id=\"CMCD\">G02</Col><Col id=\"CMNM\">과일,음료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"식단번호\" type=\"STRING\" size=\"256\"/><Column id=\"식단구분\" type=\"STRING\" size=\"256\"/><Column id=\"식단구분명\" type=\"STRING\" size=\"256\"/><Column id=\"식단이름\" type=\"STRING\" size=\"256\"/><Column id=\"일회제공\" type=\"STRING\" size=\"256\"/><Column id=\"칼로리\" type=\"STRING\" size=\"256\"/><Column id=\"재료구성\" type=\"STRING\" size=\"256\"/><Column id=\"org_식단번호\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_func","0","0",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none");
            obj.set_text("");
            obj.set_border("1px solid #e2e2e2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"4","70","26","85",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"4","70","26","10",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_delete");
            this.div_func.addChild(obj.name, obj);

            obj = new Div("div_conf","0","40",null,"620","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","10","0","530",null,null,"10",null,null,null,null,this.div_conf.form);
            obj.set_taborder("1");
            this.div_conf.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","60","512","540",null,null,null,null,null,null,this.div_conf.form.div_left.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"식단구분\"/><Cell col=\"2\" text=\"식단메뉴\"/><Cell col=\"3\" text=\"1회제공\"/><Cell col=\"4\" text=\"kcal\"/></Band><Band id=\"body\"><Cell text=\"bind:식단구분\"/><Cell col=\"1\" text=\"bind:식단구분명\"/><Cell col=\"2\" text=\"bind:식단이름\"/><Cell col=\"3\" text=\"bind:일회제공\"/><Cell col=\"4\" text=\"bind:칼로리\"/></Band></Format></Formats>");
            this.div_conf.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_btn","0","0","520","60",null,null,null,null,null,null,this.div_conf.form.div_left.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.div_conf.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_g01","309","29","100","26",null,null,null,null,null,null,this.div_conf.form.div_left.form.div_btn.form);
            obj.set_taborder("0");
            obj.set_text("간식류");
            this.div_conf.form.div_left.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_f07","103","29","100","26",null,null,null,null,null,null,this.div_conf.form.div_left.form.div_btn.form);
            obj.set_taborder("1");
            obj.set_text("기타");
            this.div_conf.form.div_left.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_f05","412","0","100","26",null,null,null,null,null,null,this.div_conf.form.div_left.form.div_btn.form);
            obj.set_taborder("2");
            obj.set_text("나물,무침");
            this.div_conf.form.div_left.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_f03","206","0","100","26",null,null,null,null,null,null,this.div_conf.form.div_left.form.div_btn.form);
            obj.set_taborder("3");
            obj.set_text("찜,조림,볶음");
            this.div_conf.form.div_left.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_f01","0","0","100","26",null,null,null,null,null,null,this.div_conf.form.div_left.form.div_btn.form);
            obj.set_taborder("4");
            obj.set_text("주식[밥,죽]");
            this.div_conf.form.div_left.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_f08","206","29","100","26",null,null,null,null,null,null,this.div_conf.form.div_left.form.div_btn.form);
            obj.set_taborder("5");
            obj.set_text("김치외 장류");
            this.div_conf.form.div_left.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_f04","309","0","100","26",null,null,null,null,null,null,this.div_conf.form.div_left.form.div_btn.form);
            obj.set_taborder("6");
            obj.set_text("전,부침,튀김");
            this.div_conf.form.div_left.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_f06","0","29","100","26",null,null,null,null,null,null,this.div_conf.form.div_left.form.div_btn.form);
            obj.set_taborder("7");
            obj.set_text("구이,젓갈");
            this.div_conf.form.div_left.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_f02","103","0","100","26",null,null,null,null,null,null,this.div_conf.form.div_left.form.div_btn.form);
            obj.set_taborder("8");
            obj.set_text("국,탕,찌개");
            this.div_conf.form.div_left.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_g02","412","29","100","26",null,null,null,null,null,null,this.div_conf.form.div_left.form.div_btn.form);
            obj.set_taborder("9");
            obj.set_text("과일,음료");
            this.div_conf.form.div_left.form.div_btn.addChild(obj.name, obj);

            obj = new Div("div_right","540","0",null,null,"10","10",null,null,null,null,this.div_conf.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.div_conf.addChild(obj.name, obj);

            obj = new Div("div_main","0","0",null,null,"0","11",null,null,null,null,this.div_conf.form.div_right.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_border("1px solid #e2e2e2");
            obj.set_background("#ffffff");
            this.div_conf.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","163","7","105","26",null,null,null,null,null,null,this.div_conf.form.div_right.form.div_main.form);
            obj.set_taborder("0");
            obj.set_text("식단메뉴추가");
            obj.set_cssclass("lb01");
            this.div_conf.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_line","20","40",null,"1","20",null,null,null,null,null,this.div_conf.form.div_right.form.div_main.form);
            obj.set_taborder("1");
            obj.set_background("#e2e2e2");
            this.div_conf.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num1","20","58","80","40",null,null,null,null,null,null,this.div_conf.form.div_right.form.div_main.form);
            obj.set_taborder("2");
            obj.set_text("식단번호");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_conf.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1","99","58","310","40",null,null,null,null,null,null,this.div_conf.form.div_right.form.div_main.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_conf.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_gubun","20","97","80","40",null,null,null,null,null,null,this.div_conf.form.div_right.form.div_main.form);
            obj.set_taborder("4");
            obj.set_text("식단구분");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_conf.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body2","99","97","310","40",null,null,null,null,null,null,this.div_conf.form.div_right.form.div_main.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_conf.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_name","20","136","80","40",null,null,null,null,null,null,this.div_conf.form.div_right.form.div_main.form);
            obj.set_taborder("8");
            obj.set_text("식단이름");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_conf.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","99","136","310","40",null,null,null,null,null,null,this.div_conf.form.div_right.form.div_main.form);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_conf.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4","99","175","310","40",null,null,null,null,null,null,this.div_conf.form.div_right.form.div_main.form);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_conf.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_serv","20","175","80","40",null,null,null,null,null,null,this.div_conf.form.div_right.form.div_main.form);
            obj.set_taborder("11");
            obj.set_text("1회제공량");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_conf.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body5","99","214","310","40",null,null,null,null,null,null,this.div_conf.form.div_right.form.div_main.form);
            obj.set_taborder("15");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_conf.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_cal","20","214","80","40",null,null,null,null,null,null,this.div_conf.form.div_right.form.div_main.form);
            obj.set_taborder("14");
            obj.set_text("제공열량");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_conf.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_refresh","272","102","130","30",null,null,null,null,null,null,this.div_conf.form.div_right.form.div_main.form);
            obj.set_taborder("7");
            obj.set_text("식단명 새로입력");
            this.div_conf.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_name","106","141","296","30",null,null,null,null,null,null,this.div_conf.form.div_right.form.div_main.form);
            obj.set_taborder("10");
            obj.set_maxlength("20");
            obj.set_cssclass("essential");
            this.div_conf.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_serv","106","180","159","30",null,null,null,null,null,null,this.div_conf.form.div_right.form.div_main.form);
            obj.set_taborder("13");
            obj.set_maxlength("10");
            this.div_conf.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_kcal","184","219","30","30",null,null,null,null,null,null,this.div_conf.form.div_right.form.div_main.form);
            obj.set_taborder("16");
            obj.set_text("kcal");
            this.div_conf.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun","106","102","159","30",null,null,null,null,null,null,this.div_conf.form.div_right.form.div_main.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_gubun");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("essential");
            obj.set_text("");
            this.div_conf.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00","106","219","70","30",null,null,null,null,null,null,this.div_conf.form.div_right.form.div_main.form);
            obj.set_taborder("17");
            obj.set_format("###");
            obj.set_limitbymask("integer");
            this.div_conf.form.div_right.form.div_main.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",980,660,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_cont.form.div_right.form.div_main.form.sta_no_value","text","ds_data","전기번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_conf.form.div_right.form.div_main.form.sta_body1","text","ds_data","식단번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_conf.form.div_right.form.div_main.form.edt_name","value","ds_data","식단이름");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_conf.form.div_right.form.div_main.form.edt_serv","value","ds_data","일회제공");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_conf.form.div_right.form.div_main.form.cmb_gubun","value","ds_data","식단구분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_conf.form.div_right.form.div_main.form.mae_00","value","ds_data","칼로리");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00702_P02.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00702_P02.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00702_P02.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00702_P02
         * 화면명   	: 식단메뉴 추가
         * 화면설명 	: 식단메뉴 추가
         * 작성일   	: 2022-03-30
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
        //const fv_date = this.parent.DATE;
        this.reSearchData = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 삽입, 수정 공통 함수를 사용하기 위해 gv_curWinKey를 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00702_P02";

        	this.ds_search.setColumn(0, "SICODE", fv_sicode);

        	this.fn_search("search");
        };
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	// 검색조건 필수 체크 (컴포넌트 tooltiptext 값 넣을 것)
        	//if (!this.gfn_findSnull(this.div_search)) return false;

        // 	if (this.ds_data.rowcount > 0)
        // 		this.reSearchData = this.ds_data.getColumn(0, "식단번호");

        	return true;
        };

        // 저장 전 validation
        this.fn_save_pre = function()
        {
        	//입력 필수여부체크
        	//if(!this.gfn_findSnull(this.div_conf.form.div_right.form.div_main)) return false;
        	var gubun = this.ds_data.getColumn(0,"식단구분");
        	var name = this.ds_data.getColumn(0,"식단이름");
        	if(gubun == "" || gubun == null) {
        		this.alert("식단구분은 필수 항목입니다.");
        		return false;
        	}else if(name == "" || name == null){
        		this.alert("식단이름은 필수 항목입니다.");
        		return false;
        	}

        	if (!this.confirm("저장 하시겠습니까?"))
        		return false;

        	return true;
        };

        // 삭제 전 validation
        this.fn_delete_pre = function()
        {
        	if(this.ds_data.getColumn(0,"식단번호") == "" || this.ds_data.getColumn(0,"식단번호") == null){
        		this.alert("삭제할 항목이 없습니다.");
        		return false;
        	}

         	if (!this.confirm("삭제 하시겠습니까?"))
         		return false;

         	this.ds_data.set_updatecontrol(false);
         	this.ds_data.setRowType(0, Dataset.ROWTYPE_DELETE);
         	this.ds_data.set_updatecontrol(true);

        	return true;
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 조회
        this.fn_search = function(flag)
        {
        	const svcId = flag;
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search ";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00702_P02.DAY00702_P02_DS_LIST_S '";
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

        // 삭제
        this.fn_delete = function()
        {
        	// validation
        	if (!this.fn_delete_pre()) return;

        	const svcId = "delete";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_data:U";
        	const outDatasets = "";
        	const argument = "method=delete "
        				   + "sqlId=DAY00702_P02.DAY00702_P02_DS_DATA_D ";

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
        			// 데이터 클리어 후 세팅
        			this.ds_data.clearData();
        			var aRow = this.ds_data.addRow();
        			this.ds_data.setColumn(aRow, "sicode", fv_sicode);
        			this.ds_data.setColumn(aRow, "일회제공", "");
        			this.ds_data.setColumn(aRow, "칼로리", 0);
        			this.ds_data.setColumn(aRow, "재료구성", "");
        			this.ds_list.set_rowposition(-1);

        		}
        		else if (strSvcID == "save")
        		{
        			// 식단구분, 식단이름으로 ROW 찾기
        			this.reSearchData = this.ds_data.getColumn(0,"식단구분") + this.ds_data.getColumn(0,"식단이름");
        			this.alert("저장되었습니다.");

        			this.ds_search.setColumn(0, "GUBUN", "");
        			this.fn_search("search_save");

        		}
        		else if (strSvcID == "delete")
        		{
        			this.alert("삭제되었습니다.");
        			this.ds_search.setColumn(0, "GUBUN", "");
        			this.fn_search("search");
        		}
        		else if (strSvcID == "search_save")
        		{
        			this.fn_findMstRow(this.reSearchData);
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
        // 입력, 수정용 데이터셋에 데이터 복사
        this.fn_dataCopy = function(row)
        {
        	this.ds_data.clearData();
        	const nRow = this.ds_data.addRow();
        	this.ds_data.copyRow(nRow, this.ds_list, row);

        	this.ds_data.set_updatecontrol(false);
        	this.ds_data.setRowType(nRow, 1);
        	this.ds_data.set_updatecontrol(true);
        };

        // 작업후 작업 정보 조회
        this.fn_findMstRow = function(fv_saveRefNo) {
        	const sFindRow = this.ds_list.findRow("findname", fv_saveRefNo);

        	if (sFindRow > -1) {
        		this.ds_list.set_rowposition(sFindRow);
        		this.fn_dataCopy(sFindRow);
        	}

        	return sFindRow;
        };
        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 팝업 콜백
        // this.fn_popCallback = function (popid, strDs) {
        // 	if(Sct.Util.isEmpty(strDs)) return;
        // 	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        // 	switch(popid)
        // 	{
        // 		case "emp" :
        //
        // 			break;
        // 		case "con" :
        //
        // 			break;
        // 		default :
        // 			this.gfn_createReturnDs(this, "ds_Return", strDs);
        // 	}
        // };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 저장 버튼
        this.fn_saveBtn = function(obj,e)
        {
        	this.fn_save();
        };

        // 삭제 버튼
        this.fn_deleteBtn = function()
        {
        	this.fn_delete();
        };

        // 식단명 새로입력
        this.btn_refresh_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0, "GUBUN", "");
        	//this.ds_search.setColumn(0, "NAME", "");
        	this.fn_search("search");
        };

        // 식단패널 선택 이벤트
        this.btn_select_onclick = function(obj,e)
        {
        	//this.ds_search.setColumn(0, "NAME", "");
        	var objid = obj.id.substr(4);
        	switch(objid)
        	{
        		case "all" : // 식단명 새로입력
        			this.ds_search.setColumn(0,"GUBUN","");
        			break;
        		case "f01" : // 주식[밥,죽]
        			this.ds_search.setColumn(0,"GUBUN","F01");
        			break;
        		case "f02" : // 국,탕,찌개
        			this.ds_search.setColumn(0,"GUBUN","F02");
        			break;
        		case "f03" : // 찜,조림,볶음
        			this.ds_search.setColumn(0,"GUBUN","F03");
        			break;
        		case "f04" : // 전,부침,튀김
        			this.ds_search.setColumn(0,"GUBUN","F04");
        			break;
        		case "f05" : // 나물,무침
        			this.ds_search.setColumn(0,"GUBUN","F05");
        			break;
        		case "f06" : // 구이,젓갈
        			this.ds_search.setColumn(0,"GUBUN","F06");
        			break;
        		case "f07" : // 기타
        			this.ds_search.setColumn(0,"GUBUN","F07");
        			break;
        		case "f08" : // 김치외 장류
        			this.ds_search.setColumn(0,"GUBUN","F08");
        			break;
        		case "g01" : // 간식류
        			this.ds_search.setColumn(0,"GUBUN","G01");
        			break;
        		case "g02" : // 과일,음료
        			this.ds_search.setColumn(0,"GUBUN","G02");
        			break;
        		default :
        			break;
        	}
        	// 조회
        	this.fn_search("search");
        };


        // 그리드 클릭 이벤트
        this.div_conf_div_left_grd_list_oncellclick = function(obj,e)
        {
        	this.fn_dataCopy(e.row);
        };


        // 콤보박스 변경시 식단구분명 변경
        this.div_conf_div_right_div_main_cmb_gubun_canitemchange = function(obj,e)
        {
        	this.ds_data.setColumn(0,"식단구분명",e.posttext);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_func.form.btn_delete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.div_conf.form.div_left.form.grd_list.addEventHandler("oncellclick",this.div_conf_div_left_grd_list_oncellclick,this);
            this.div_conf.form.div_left.form.div_btn.form.btn_g01.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_conf.form.div_left.form.div_btn.form.btn_f07.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_conf.form.div_left.form.div_btn.form.btn_f05.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_conf.form.div_left.form.div_btn.form.btn_f03.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_conf.form.div_left.form.div_btn.form.btn_f01.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_conf.form.div_left.form.div_btn.form.btn_f08.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_conf.form.div_left.form.div_btn.form.btn_f04.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_conf.form.div_left.form.div_btn.form.btn_f06.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_conf.form.div_left.form.div_btn.form.btn_f02.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_conf.form.div_left.form.div_btn.form.btn_g02.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_conf.form.div_right.form.div_main.form.btn_refresh.addEventHandler("onclick",this.btn_refresh_onclick,this);
            this.div_conf.form.div_right.form.div_main.form.cmb_gubun.addEventHandler("canitemchange",this.div_conf_div_right_div_main_cmb_gubun_canitemchange,this);
        };
        this.loadIncludeScript("DAY00702_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
