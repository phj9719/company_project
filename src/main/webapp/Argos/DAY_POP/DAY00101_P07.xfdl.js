(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00101_P07");
            this.set_titletext("요양일지 예시문");
            if (Form == this.constructor)
            {
                this._setFormPosition(550,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"row_num\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_body1","0","36","530","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1","0","36","35","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("①");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"0","70","26","0",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("복사");
            obj.set_cssclass("btn_save");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body2","0","95","530","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body4","0","213","530","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body3","0","154","530","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_cont1","40","41","400","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_color("#222222");
            obj.set_wordWrap("char");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body5","0","272","530","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body6","0","331","530","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body7","0","390","530","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head3","0","154","35","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("10");
            obj.set_text("③");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head2","0","95","35","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("11");
            obj.set_text("②");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head4","0","213","35","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("12");
            obj.set_text("④");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head5","0","272","35","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("13");
            obj.set_text("⑤");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head6","0","331","35","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("14");
            obj.set_text("⑥");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head7","0","390","35","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("15");
            obj.set_text("⑦");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_cont3","40","159","400","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("16");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_color("#222222");
            obj.set_wordWrap("char");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_cont4","40","218","400","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("17");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_color("#222222");
            obj.set_wordWrap("char");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_cont5","40","277","400","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("18");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_color("#222222");
            obj.set_wordWrap("char");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_cont6","40","336","400","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("19");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_color("#222222");
            obj.set_wordWrap("char");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_cont7","40","395","400","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("20");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_color("#222222");
            obj.set_wordWrap("char");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_cont2","40","100","400","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("21");
            obj.set_enable("false");
            obj.set_color("#222222");
            obj.set_wordWrap("char");
            obj.set_background("#ffffff");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body8","0","449","530","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body9","0","508","530","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head8","0","449","35","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("24");
            obj.set_text("⑧");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head9","0","508","35","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("25");
            obj.set_text("⑨");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_cont8","40","454","400","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("26");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_color("#222222");
            obj.set_wordWrap("char");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_cont9","40","513","400","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("27");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_color("#222222");
            obj.set_wordWrap("char");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body10","0","567","530","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head10","0","567","35","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("29");
            obj.set_text("⑩");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_cont10","40","572","400","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("30");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_color("#222222");
            obj.set_wordWrap("char");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cont1","445","48","80","36",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("31");
            obj.set_text("내용추가");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cont2","445","108","80","36",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("32");
            obj.set_text("내용추가");
            obj.set_background("");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cont3","445","166","80","36",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("33");
            obj.set_text("내용추가");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cont4","445","225","80","36",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("34");
            obj.set_text("내용추가");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cont5","445","284","80","36",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("35");
            obj.set_text("내용추가");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cont6","445","343","80","36",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("36");
            obj.set_text("내용추가");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cont7","445","402","80","36",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("37");
            obj.set_text("내용추가");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cont8","445","461","80","36",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("38");
            obj.set_text("내용추가");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cont9","445","520","80","36",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("39");
            obj.set_text("내용추가");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cont10","445","579","80","36",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("40");
            obj.set_text("내용추가");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",550,650,this,function(p){});
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

            obj = new BindItem("item69","div_search.form.cal_date_pic","value","ds_search","date");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00101_P07.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00101_P07.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00101_P07.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00101_P07
         * 화면명   	: 요양일지 예시문
         * 화면설명 	: 요양일지 예시문
         * 작성일   	: 2022-05-18
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

        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 삽입, 수정 공통 함수를 사용하기 위해 gv_curWinKey를 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00101_P07";

        	this.ds_search.setColumn(0, "sicode", fv_sicode);

        	this.fn_search();

        };

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/


        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 조회
        this.fn_search = function()
        {
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search ";
        	const outDatasets = "ds_data=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00101_P07.DAY00101_P07_DS_DATA_S '";
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
        			this.fn_dataCopy();

        		} else if(strSvcID == "save")
        		{

        		} else if(strSvcID == "delete") // 전날 요양일지 조회
        		{

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
        // 데이터세팅
        this.fn_dataCopy = function ()
        {
        	for(var i=0; i < 10; i++){
        		this.div_cont.form.components["txt_cont"+(i+1)].set_value(this.ds_data.getColumn(i,"value"));
        	}
        };

        // 체크박스 선택 이벤트
        this.chk_cont_onchanged = function(obj,e)
        {
        	var num = obj.id.substr(8);
        	switch(obj.id) {
        	case "chk_cont"+num:
        			if(e.postvalue == "1"){
        				this.ds_data.setColumn((num-1), "chk", e.postvalue);
        				this.div_cont.form.components["chk_cont"+num].set_background("#f0ffff");
        				this.div_cont.form.components["txt_cont"+num].set_background("#f0ffff");
        			}else{
        				this.ds_data.setColumn((num-1), "chk", e.postvalue);
        				this.div_cont.form.components["chk_cont"+num].set_background("#ffffff");
        				this.div_cont.form.components["txt_cont"+num].set_background("#ffffff");

        			}
        		break;
        	default:
        	}
        };

        // 복사 버튼
        this.div_cont_btn_save_onclick = function(obj,e)
        {
        	var setdata = "";
        	for(var i=0; i<this.ds_data.rowcount; i++){
        		// 체크된 데이터 담기
        		if(this.ds_data.getColumn(i,"chk") == "1"){
        			setdata += this.ds_data.getColumn(i,"value");
        		}
        	}
        	this.fn_setData(this.ds_data, setdata);
        };

        // 리턴값 세팅
        this.fn_setData = function(ds, data)
        {
        	this.ds_return.copyData(ds);
        	this.ds_return.clearData();

        	this.ds_return.setColumn(this.ds_return.addRow(), "value", data);

        	this.close(this.ds_return.saveXML());
        };

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.DAY00101_P07_onclose,this);
            this.div_cont.form.btn_save.addEventHandler("onclick",this.div_cont_btn_save_onclick,this);
            this.div_cont.form.chk_cont1.addEventHandler("onchanged",this.chk_cont_onchanged,this);
            this.div_cont.form.chk_cont2.addEventHandler("onchanged",this.chk_cont_onchanged,this);
            this.div_cont.form.chk_cont3.addEventHandler("onchanged",this.chk_cont_onchanged,this);
            this.div_cont.form.chk_cont4.addEventHandler("onchanged",this.chk_cont_onchanged,this);
            this.div_cont.form.chk_cont5.addEventHandler("onchanged",this.chk_cont_onchanged,this);
            this.div_cont.form.chk_cont6.addEventHandler("onchanged",this.chk_cont_onchanged,this);
            this.div_cont.form.chk_cont7.addEventHandler("onchanged",this.chk_cont_onchanged,this);
            this.div_cont.form.chk_cont8.addEventHandler("onchanged",this.chk_cont_onchanged,this);
            this.div_cont.form.chk_cont9.addEventHandler("onchanged",this.chk_cont_onchanged,this);
            this.div_cont.form.chk_cont10.addEventHandler("onchanged",this.chk_cont_onchanged,this);
        };
        this.loadIncludeScript("DAY00101_P07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
