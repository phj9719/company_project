(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00208_P01");
            this.set_titletext("보호자동행");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,184);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"M_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_guard", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_grade\" type=\"INT\" size=\"256\"/><Column id=\"등급\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"m_conname\" type=\"STRING\" size=\"256\"/><Column id=\"m_conrele\" type=\"STRING\" size=\"256\"/><Column id=\"m_contel11\" type=\"STRING\" size=\"256\"/><Column id=\"m_contel12\" type=\"STRING\" size=\"256\"/><Column id=\"m_name1\" type=\"STRING\" size=\"256\"/><Column id=\"m_connect1\" type=\"STRING\" size=\"256\"/><Column id=\"m_phone11\" type=\"STRING\" size=\"256\"/><Column id=\"m_phone12\" type=\"STRING\" size=\"256\"/><Column id=\"m_name2\" type=\"STRING\" size=\"256\"/><Column id=\"m_connect2\" type=\"STRING\" size=\"256\"/><Column id=\"m_phone21\" type=\"STRING\" size=\"256\"/><Column id=\"m_phone22\" type=\"STRING\" size=\"256\"/><Column id=\"chk00\" type=\"STRING\" size=\"256\"/><Column id=\"chk01\" type=\"STRING\" size=\"256\"/><Column id=\"chk02\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","3","5","694","176",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","84","5","241","35",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00","4","5","81","35",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("수급자명");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00_00","4","39","81","28",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00_01","4","66","81","35",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("대 리 인");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00_02","4","100","81","35",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_text("가 족 ①");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00_03","4","134","81","35",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            obj.set_text("가 족 ②");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_00","84","39","607","28",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00","84","66","607","35",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00","84","100","607","35",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_01","84","134","607","35",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_00","602","6","86","27",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("10");
            obj.set_text("확인");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00","84","39","121","28",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("11");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("성  명");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00","204","39","121","28",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("12");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("관  계");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_01","324","39","301","28",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("13");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("연 락 처");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_01_00","624","39","67","28",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("14");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("선택");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00_01_00","84","66","121","35",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("15");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_font("bold 10pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00_01_01","204","66","121","35",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("16");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00_01_02","324","66","150","35",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("17");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00_01_03","473","66","152","35",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("18");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00_02_00","84","100","121","35",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("19");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_font("bold 10pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00_03_00","84","134","121","35",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("20");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_font("bold 10pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00_02_01","204","100","121","35",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("21");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00_03_01","204","134","121","35",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("22");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00_02_02","324","100","150","35",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("23");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00_03_02","324","134","150","35",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("24");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00_02_03","473","100","152","35",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("25");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00_03_03","473","134","152","35",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("26");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_00","650","71","19","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("27");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_readonly("false");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_01","650","104","19","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("28");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_02","650","139","19","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("29");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_02","85","5","89","35",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("30");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_font("bold 10pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_02_00","181","5","39","35",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("31");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_02_01","230","5","89","35",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("32");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,184,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_cont.form.sta_02","text","ds_guard","m_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_cont.form.sta_02_00","text","ds_guard","성별");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_cont.form.sta_02_01","text","ds_guard","m_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_cont.form.sta_00_01_00","text","ds_guard","m_conname");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.sta_00_01_01","text","ds_guard","m_conrele");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.sta_00_01_02","text","ds_guard","m_contel11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.sta_00_01_03","text","ds_guard","m_contel12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.sta_00_02_00","text","ds_guard","m_name1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.sta_00_02_01","text","ds_guard","m_connect1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.sta_00_02_02","text","ds_guard","m_phone11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.sta_00_02_03","text","ds_guard","m_phone12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.sta_00_03_00","text","ds_guard","m_name2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.sta_00_03_01","text","ds_guard","m_connect2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.sta_00_03_02","text","ds_guard","m_phone21");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.sta_00_03_03","text","ds_guard","m_phone22");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.chk_00","value","ds_guard","chk00");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.chk_01","value","ds_guard","chk01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.chk_02","value","ds_guard","chk02");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00208_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00208_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00208_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00208_P01
         * 화면명   	: 보호자동행
         * 화면설명 	:
         * 작성일   	: 2022-06-16
         * 작성자   	: 성재영
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용

         ***********************************************************************/
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
         const fv_sicode = this.parent.SICODE;
         const fv_m_code = this.parent.M_CODE;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.DAY00208_P01_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "M_CODE", fv_m_code);

        	this.fn_search();
        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 조회
        this.fn_search = function ()
        {
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_guard=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00208_P01.DAY00208_P01_DS_GUARD_S ";
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
        			if (Sct.Util.isEmpty(nexacro.trim(this.ds_guard.getColumn(0, "m_conname")))) {
        				this.div_cont.form.chk_00.set_readonly(true);
        				}
        			if (Sct.Util.isEmpty(nexacro.trim(this.ds_guard.getColumn(0, "m_name1")))) {
        				this.div_cont.form.chk_01.set_readonly(true);
        				}
        			if (Sct.Util.isEmpty(nexacro.trim(this.ds_guard.getColumn(0, "m_name2")))) {
        				this.div_cont.form.chk_02.set_readonly(true);
        				}
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
        // 데이터셋 복사 후 클로즈
        this.fn_setData = function(ds)
        {
        	this.ds_return.copyData(ds);
        	this.ds_return.clearData();

        	this.ds_return.addRow();
        	this.ds_return.copyRow(0, ds, 0);

        	this.close(this.ds_return.saveXML());
        };
         /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 확인 버튼 클릭
        this.div_cont_btn_00_onclick = function(obj,e)
        {
        	this.fn_setData(this.ds_guard);
        };

        // 버튼 중복체크
        this.div_cont_chk_onchanged = function(obj,e)
        {
        	switch(obj.id) {
        	case "chk_00":
        		for (var i = 0; i < 4; i++) {
        			this.div_cont.form.components["sta_00_01_0" + i].set_background("#ecc9dc");
        			this.div_cont.form.components["sta_00_02_0" + i].set_background("");
        			this.div_cont.form.components["sta_00_03_0" + i].set_background("");
        		}
        		this.ds_guard.setColumn(0, "chk01", 0);
        		this.ds_guard.setColumn(0, "chk02", 0);
        		this.ds_guard.setColumn(0, "chk", 1);

        		if (this.ds_guard.getColumn(0, "chk00") == 0) {
        			for (var i = 0; i < 4; i++) {
        				this.div_cont.form.components["sta_00_01_0" + i].set_background("");
        			}
        			this.ds_guard.setColumn(0, "chk", 0);
        		}
        		break;
        	case "chk_01":
        		for (var i = 0; i < 4; i++) {
        			this.div_cont.form.components["sta_00_01_0" + i].set_background("");
        			this.div_cont.form.components["sta_00_02_0" + i].set_background("#ecc9dc");
        			this.div_cont.form.components["sta_00_03_0" + i].set_background("");
        		}
        		this.ds_guard.setColumn(0, "chk00", 0);
        		this.ds_guard.setColumn(0, "chk02", 0);
        		this.ds_guard.setColumn(0, "chk", 2);

        		if (this.ds_guard.getColumn(0, "chk01") == 0) {
        			for (var i = 0; i < 4; i++) {
        				this.div_cont.form.components["sta_00_02_0" + i].set_background("");
        			}
        		this.ds_guard.setColumn(0, "chk", 0);
        		}

        		break;
        	case "chk_02":
        		for (var i = 0; i < 4; i++) {
        			this.div_cont.form.components["sta_00_01_0" + i].set_background("");
        			this.div_cont.form.components["sta_00_02_0" + i].set_background("");
        			this.div_cont.form.components["sta_00_03_0" + i].set_background("#ecc9dc");
        		}

        		this.ds_guard.setColumn(0, "chk00", 0);
        		this.ds_guard.setColumn(0, "chk01", 0);
        		this.ds_guard.setColumn(0, "chk", 3);

        		if (this.ds_guard.getColumn(0, "chk02") == 0) {
        			for (var i = 0; i < 4; i++) {
        				this.div_cont.form.components["sta_00_03_0" + i].set_background("");
        			}
        		this.ds_guard.setColumn(0, "chk", 0);
        		}
        		break;
        	default: break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DAY00208_P01_onload,this);
            this.div_cont.form.btn_00.addEventHandler("onclick",this.div_cont_btn_00_onclick,this);
            this.div_cont.form.chk_00.addEventHandler("onchanged",this.div_cont_chk_onchanged,this);
            this.div_cont.form.chk_01.addEventHandler("onchanged",this.div_cont_chk_onchanged,this);
            this.div_cont.form.chk_02.addEventHandler("onchanged",this.div_cont_chk_onchanged,this);
        };
        this.loadIncludeScript("DAY00208_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
