(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00601_P01");
            this.set_titletext("프로그램 의견수렴");
            if (Form == this.constructor)
            {
                this._setFormPosition(488,490);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"기록번호\" type=\"STRING\" size=\"256\"/><Column id=\"수렴일\" type=\"DATE\" size=\"256\"/><Column id=\"수급코드\" type=\"STRING\" size=\"256\"/><Column id=\"수급자명\" type=\"STRING\" size=\"256\"/><Column id=\"영역구분\" type=\"STRING\" size=\"256\"/><Column id=\"영역구분명\" type=\"STRING\" size=\"256\"/><Column id=\"수렴내용\" type=\"STRING\" size=\"256\"/><Column id=\"반영내용\" type=\"STRING\" size=\"256\"/><Column id=\"작성코드\" type=\"STRING\" size=\"256\"/><Column id=\"작성자명\" type=\"STRING\" size=\"256\"/><Column id=\"writer\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"s_code\" type=\"STRING\" size=\"256\"/><Column id=\"s_value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"s_code\">SC20</Col><Col id=\"s_value\">신체기능</Col></Row><Row><Col id=\"s_code\">SC21</Col><Col id=\"s_value\">인지기능</Col></Row><Row><Col id=\"s_code\">SC26</Col><Col id=\"s_value\">여가활동</Col></Row><Row><Col id=\"s_code\">SC27</Col><Col id=\"s_value\">가족지지</Col></Row><Row><Col id=\"s_code\">SC28</Col><Col id=\"s_value\">특화프로</Col></Row><Row><Col id=\"s_code\">SC29</Col><Col id=\"s_value\">사회적응</Col></Row><Row><Col id=\"s_code\">SC30</Col><Col id=\"s_value\">맞춤형</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"bpnum\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"copy_text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40","479","447",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","10","1","60","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("기록번호 :");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00_00","73","1","84","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00_01","188","-8","152","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("프로그램 의견수렴");
            obj.set_cssclass("lb01");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01","9","30","85","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("수급자명");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_00","9","59","85","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("수렴일");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_01","9","88","85","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            obj.set_text("영역구분");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_02","9","117","85","180",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            obj.set_text("수렴내용");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_03","9","296","85","120",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("7");
            obj.set_text("반영내용");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_04","9","415","85","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_05","93","30","386","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_05_00","93","59","386","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_05_00_00","93","88","386","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_05_00_01","93","117","386","180",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_05_00_02","93","296","386","120",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_05_00_03","93","415","386","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name","93","30","85","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("15");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_code","183","30","85","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("16");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_00_00","281","34","103","23",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("17");
            obj.set_text("수급자조회");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_00","96","90","147","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("18");
            obj.set_innerdataset("ds_combo");
            obj.set_codecolumn("s_code");
            obj.set_datacolumn("s_value");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_00","96","120","380","174",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("19");
            obj.set_maxlength("500");
            obj.set_scrolltype("vertical");
            obj.set_wordWrap("char");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_01","96","299","380","114",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("20");
            obj.set_maxlength("200");
            obj.set_wordWrap("char");
            obj.set_scrolltype("vertical");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_00_01","12","418","79","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("21");
            obj.set_text("작성자");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Calendar("cal_date","96","62","90","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_tooltiptext("점검일");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_cont.addChild(obj.name, obj);

            obj = new Calendar("cal_date_pic","185","62","25","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("23");
            obj.set_enable("false");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_writer","99","417","161","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("24");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_func","3","2","481","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","333","4","70","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_delete","406","4","70","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_delete");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",488,490,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_cont.form.cal_date","value","ds_list","수렴일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_cont.form.div_right.form.div_main.form.cal_date_pic","value","ds_data","점검일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_cont.form.cal_date_pic","value","ds_list","수렴일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_cont.form.sta_00_00","text","ds_list","기록번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.sta_name","text","ds_list","수급자명");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.sta_code","text","ds_list","수급코드");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.cmb_00","value","ds_list","영역구분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.txt_00","value","ds_list","수렴내용");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.txt_01","value","ds_list","반영내용");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.sta_writer","text","ds_list","writer");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00601_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00601_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00601_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00601_P01
         * 화면명   	: 상비약품목록조회팝업
         * 화면설명 	:
         * 작성일   	: 2022-06-23
         * 작성자   	: 성재영
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용

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
         const fv_bpnum = this.parent.BPNUM;
         this.fv_staff_id = nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid");
         this.fv_staff_name = nexacro.getApplication().gds_userInfo.getColumn(0, "c_name").trim();
         this.value = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.DAY00601_P01_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 삽입, 수정 공통 함수를 사용하기 위해 gv_curWinKey를 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00601_P01";

        	this.ds_search.setColumn(0, "sicode", fv_sicode);
        	this.ds_search.setColumn(0, "bpnum", fv_bpnum);

        	if (!Sct.Util.isEmpty(fv_bpnum)) {
        		this.fn_search();
        	} else {
        		let nRow = this.ds_list.addRow();
        		let today = Sct.Util.today();
        		this.ds_list.setColumn(nRow, "수렴일", today);
        		this.div_cont.form.cal_date_pic.set_enable(true);
        		this.ds_list.setColumn(nRow, "작성자명", this.fv_staff_name);
        		this.ds_list.setColumn(nRow, "작성코드", this.fv_staff_id);
        		this.ds_list.setColumn(nRow, "writer", this.fv_staff_name + "/" + this.fv_staff_id);

        	}

        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	return true;
        };
        //저장 전 validation
        this.fn_save_pre = function () {

        	if (Sct.Util.isEmpty(this.ds_list.getColumn(0, "수급자명"))) {
        		this.alert("수급자를 선택해주세요.");
        	}

        	else if (Sct.Util.isEmpty(this.ds_list.getColumn(0, "영역구분"))) {
        		this.alert("영역구분을 선택해주세요.");
        	}

        	else if (!this.value) {
        		this.alert("수렴내용을 최소 2글자 이상 입력을 해주세요.");
        	}

        	else if (Sct.Util.isEmpty(this.ds_list.getColumn(0, "작성자명"))) {
        		this.alert("작성자를 선택해주세요.");
        	}

        	if (Sct.Util.isEmpty(this.ds_list.getColumn(0, "반영내용"))) {
        		this.ds_list.setColumn(0, "반영내용", "");
        	}

        	this.ds_list.setColumn(0, "sicode", fv_sicode);
        	return true;
        };
        // 조회
        this.fn_search = function ()
        {
        	//validation
        	if (!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00601_P01.DAY00601_P01_DS_LIST_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };
        // 저장
        this.fn_save = function(obj,e)
        {
        	// validation
        	if (!this.fn_save_pre()) return;

        	const svcId = "save";
         	const inDs = "ds_list";
        	this.fn_save_com(svcId, inDs);
        };

        //콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search"){
        			let name = this.ds_list.getColumn(0, "작성자명");
        			let id = this.ds_list.getColumn(0, "작성코드");

        			this.ds_list.setColumn(0, "writer", name + "/" + id);
        		} else if (strSvcID == "save") {
        			this.alert("저장되었습니다.");
        			this.close(this.ds_return.saveXML());
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
         // 수렴내용 최소 바이트 제한 설정
        this.div_cont_txt_00_onchanged = function(obj,e)
        {
        		let edit_value = obj.value;
        		let edit_value_byte_length = edit_value.byteLength();
        		let byte_value = 3;

        		if(edit_value_byte_length <= byte_value){
        			this.value = false;
        		}else {
        			this.value = true;
        		}
        };
        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 수급자 선택 팝업
        this.div_cont_btn_00_00_onclick = function(obj,e)
        {
        	if (!Sct.Util.isEmpty(this.ds_list.getColumn(0, "기록번호"))) return;

        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_list.getColumn(0, "수렴일")
        	};
        	Sct.popup(this, "matechk", 450, 400, "", param, "DAY_POP::DAYMATECHK_PP.xfdl", "fn_popCallback");

        };
        // 작성자 팝업
        this.div_cont_btn_00_01_onclick = function(obj,e)
        {
        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_list.getColumn(0, "수렴일")
        		,	FLAG : ""
        	};

        	Sct.popup(this, "employee", 450, 400, "", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };
        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		// 작성자
        		case "employee" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				const name = nexacro.trim(objDs.getColumn(0, "c_name"));
        				const staffid = objDs.getColumn(0, "c_staffid");
        				this.ds_list.setColumn(0, "작성자명", name);
        				this.ds_list.setColumn(0, "작성코드", staffid);
        				this.ds_list.setColumn(0, "writer", name + "/" + staffid);
        			}
        			else
        			{
        				this.ds_list.setColumn(0, "작성자명", "");
        				this.ds_list.setColumn(0, "작성코드", "");
        				this.ds_list.setColumn(0, "writer", "");
        			}
        			break;
         		case "matechk" :
          			const m_name = nexacro.trim(objDs.getColumn(0, "m_name"));
          			const m_code = objDs.getColumn(0, "m_code");

          			this.ds_list.setColumn(0, "수급자명", m_name);
          			this.ds_list.setColumn(0, "수급코드", m_code);
         			break;
         	}
        }
        // 삭제
        this.div_func_btn_delete_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DAY00601_P01_onload,this);
            this.div_cont.form.btn_00_00.addEventHandler("onclick",this.div_cont_btn_00_00_onclick,this);
            this.div_cont.form.txt_00.addEventHandler("onchanged",this.div_cont_txt_00_onchanged,this);
            this.div_cont.form.btn_00_01.addEventHandler("onclick",this.div_cont_btn_00_01_onclick,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_func.form.btn_delete.addEventHandler("onclick",this.div_func_btn_delete_onclick,this);
        };
        this.loadIncludeScript("DAY00601_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
