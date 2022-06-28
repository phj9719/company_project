(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00202_P01");
            this.set_titletext("간호제공기록");
            if (Form == this.constructor)
            {
                this._setFormPosition(698,433);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"search_day\" type=\"STRING\" size=\"256\"/><Column id=\"sex_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"n_number\" type=\"STRING\" size=\"256\"/><Column id=\"n_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"혈압1\" type=\"STRING\" size=\"256\"/><Column id=\"혈압2\" type=\"STRING\" size=\"256\"/><Column id=\"맥박\" type=\"STRING\" size=\"256\"/><Column id=\"혈당\" type=\"STRING\" size=\"256\"/><Column id=\"혈당2\" type=\"STRING\" size=\"256\"/><Column id=\"체온\" type=\"STRING\" size=\"256\"/><Column id=\"체온2\" type=\"STRING\" size=\"256\"/><Column id=\"체온3\" type=\"STRING\" size=\"256\"/><Column id=\"호흡\" type=\"STRING\" size=\"256\"/><Column id=\"체중\" type=\"STRING\" size=\"256\"/><Column id=\"간호일지\" type=\"STRING\" size=\"256\"/><Column id=\"담당자\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"charge_code\" type=\"STRING\" size=\"256\"/><Column id=\"charge_nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_prev", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"n_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"혈압1\" type=\"STRING\" size=\"256\"/><Column id=\"혈압2\" type=\"STRING\" size=\"256\"/><Column id=\"맥박\" type=\"STRING\" size=\"256\"/><Column id=\"혈당\" type=\"STRING\" size=\"256\"/><Column id=\"혈당2\" type=\"STRING\" size=\"256\"/><Column id=\"체온\" type=\"STRING\" size=\"256\"/><Column id=\"체온2\" type=\"STRING\" size=\"256\"/><Column id=\"체온3\" type=\"STRING\" size=\"256\"/><Column id=\"호흡\" type=\"STRING\" size=\"256\"/><Column id=\"체중\" type=\"STRING\" size=\"256\"/><Column id=\"간호일지\" type=\"STRING\" size=\"256\"/><Column id=\"담당자\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_body1","0","34","678","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_m_name","0","34","83","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("수급자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_m_name_txt","86","38","90","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00","225","38","35","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00","265","38","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_01","179","38","35","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01","0","67","678","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_date","0","67","83","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("7");
            obj.set_text("제공일자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00_00_01_00","64","5","224","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("8");
            obj.set_textAlign("left");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body10","0","166","678","247",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_content","43","170","631","239",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("10");
            obj.set_maxlength("500");
            obj.set_wordWrap("char");
            obj.set_scrollbartype("fixed");
            obj.set_scrolltype("vertical");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_journal","0","166","40","247",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("간\r\n호\r\n일\r\n지");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body8","0","100","678","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager","393","71","80","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("13");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00","-1","5","63","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("15");
            obj.set_text("기록번호  :");
            obj.set_textAlign("left");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_delete","607","4","70","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("16");
            obj.set_text("삭제");
            obj.set_cssclass("btn_delete");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_save","532","4","70","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("17");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1_01","119","100","70","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("맥박(분)");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager","313","71","75","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("14");
            obj.set_text("작성자");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_date_txt","86","71","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("19");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_searchPrev","407","4","120","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("20");
            obj.set_text("전날기록조회");
            obj.set_cssclass("btn_search");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager00","480","71","113","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("21");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_date00","0","100","120","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("22");
            obj.set_text("혈압(mm/Hg)");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body8_00","0","133","678","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_sugar1_la","188","100","70","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("혈당-①");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_sugar2_la","257","100","70","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("혈당-②");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_temp2_la","395","100","70","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("체온-②");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_temp1_la","326","100","70","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("체온-①");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_temp3_la","464","100","70","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("체온-③");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_breath_la","533","100","70","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("호흡(분)");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_weight_la","601","100","77","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("체중(kg)");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_slash","49","138","20","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("31");
            obj.set_text("/");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_m_name_txt00_00_00_00","119","133","70","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("32");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_m_name_txt00_00_00_00_00","188","133","70","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("33");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_m_name_txt00_00_00_00_00_00","257","133","70","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("34");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_m_name_txt00_00_00_00_00_01","326","133","70","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("35");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_m_name_txt00_00_00_00_00_01_00","395","133","70","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("36");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_m_name_txt00_00_00_00_00_01_00_00","464","133","70","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("37");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_m_name_txt00_00_00_00_00_01_00_00_00","533","133","70","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("38");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_m_name_txt00_00_00_00_00_01_00_00_00_00","601","133","77","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("39");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_weight","617","138","46","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("40");
            obj.set_format("###.#");
            obj.set_limitbymask("both");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_blood1","11","138","40","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("41");
            obj.set_limitbymask("both");
            obj.set_format("###");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_blood2","68","138","40","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("42");
            obj.set_limitbymask("both");
            obj.set_format("###");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_pulse","134","138","40","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("43");
            obj.set_limitbymask("both");
            obj.set_format("###");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_sugar1","203","138","40","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("44");
            obj.set_limitbymask("both");
            obj.set_format("###");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_sugar2","272","138","40","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("45");
            obj.set_limitbymask("both");
            obj.set_format("###");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_temp1","341","138","40","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("46");
            obj.set_limitbymask("both");
            obj.set_format("##.#");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_temp2","410","138","40","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("47");
            obj.set_limitbymask("both");
            obj.set_format("##.#");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_temp3","479","138","40","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("48");
            obj.set_limitbymask("both");
            obj.set_format("##.#");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_breath","548","138","40","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("49");
            obj.set_limitbymask("both");
            obj.set_format("###");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",698,433,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_cont.form.sta_m_name_txt","text","ds_list","m_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.sta_body1_00_00_00","text","ds_list","m_group");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.sta_body1_00_00","text","ds_list","m_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.sta_body1_00_01","text","ds_list","sex_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.txt_content","value","ds_list","간호일지");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.sta_manager","text","ds_list","담당자");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.sta_body1_00_00_01_00_00_01_00","text","ds_list","n_number");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cont.form.sta_date_txt","text","ds_list","n_nalja");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_cont.form.sta_manager00","text","ds_list","담당코드");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.sta_slash","text","ds_item","sc_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.mae_weight","value","ds_list","체중");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_cont.form.mae_blood1","value","ds_list","혈압1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.mae_blood2","value","ds_list","혈압2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.mae_pulse","value","ds_list","맥박");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.mae_sugar1","value","ds_list","혈당");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.mae_sugar2","value","ds_list","혈당2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.form.mae_temp1","value","ds_list","체온");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.mae_temp2","value","ds_list","체온2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.mae_temp3","value","ds_list","체온3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cont.form.mae_breath","value","ds_list","호흡");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00202_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00202_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00202_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00202_P01
         * 화면명   	: 간호제공기록
         * 화면설명 	: 간호제공기록을 조회하고 입력/저장 및 삭제
         * 작성일   	: 2022-06-09
         * 작성자   	: 박영주
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *	2022-06-14		정준우		삭제후 refresh 'N'
         *	2022-06-15		정준우		저장전 혈압01,혈압02 데이터 null 일 경우 처리
         ***********************************************************************
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/

        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	this.ds_search.setColumn(0, "sicode", this.parent.SICODE);
        	this.ds_search.setColumn(0, "m_code", this.parent.M_CODE);
        	this.ds_search.setColumn(0, "date", this.parent.DATE);
        	this.ds_search.setColumn(0, "charge_code", this.parent.CHARGE_CODE);
        	this.ds_search.setColumn(0, "charge_nm", this.parent.CHARGE_NM);

        	this.fn_search();
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	return true;
        };

        this.fn_save_pre = function()
        {
        	if (this.ds_list.getRowType(0)==1) {
        		alert("변경사항이 없습니다.");
        		return false;
        	}

        	//혈압이 null인 경우 데이터를 지정해야 Data too long error 방지
        	let press01 = this.ds_list.getColumn(0,"혈압01");
        	let press02 = this.ds_list.getColumn(0,"혈압02");
        	if (Sct.Util.isEmpty(press01))
        	{
        		press01 = '';
        	}
        	if (Sct.Util.isEmpty(press02))
        	{
        		press02 = '';
        	}
        	this.ds_list.setColumn(0,"혈압01",press01);
        	this.ds_list.setColumn(0,"혈압02",press02);

        	// 작성자가 지정되지 않은 경우
        	if (!Sct.Util.isEmpty(this.ds_list.getColumn(0,"간호일지")) && Sct.Util.isEmpty(this.ds_list.getColumn(0, "담당코드")))
        	{
        		this.alert("간호일지 작성자를 지정하세요.");
        		return false;
        	}

        	return true;
        }

        this.fn_delete_pre = function()
        {
        	var resp = confirm("간호일지 삭제시 투약기록도 함께 삭제됩니다. 그래도 삭제하시겠습니까?");
        	if (!resp) return false;
        	resp = confirm("간호일지를 삭제하면 다시 작성해야 합니다. 그래도 삭제하시겠습니까?");
        	if (!resp) return false;

        	this.ds_list.set_updatecontrol(false);
        	this.ds_list.setRowType(0, Dataset.ROWTYPE_DELETE);
        	this.ds_list.set_updatecontrol(true);

        	return true;
        }

        //조회
        this.fn_search = function ()
        {
        	//validation
        	if (!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00202_P01.DAY00202_P01_DS_LIST_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.fn_save = function()
        {
        	// validation
        	if (!this.fn_save_pre()) return;

        	const svcId = "save";
        	const params = "/DAY00202PPController.do";
        	const inDatasets = "input1=ds_list";
        	const outDatasets = "";
        	const argument = "method=save ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 삭제. kmdosagea, kmnurse 두 테이블에서 해당 데이터 삭제
        this.fn_delete = function()
        {
        	if (!this.fn_delete_pre()) return;

        	const svcId = "delete";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_list:U input2=ds_list:U";
        	const outDatasets = "";
        	const argument = "method=delete "
        					+ "sqlId='DAY00202_P01.DAY00202_P01_KMDOSAGEA_D DAY00202_P01.DAY00202_P01_KMNURSE_D' ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.fn_searchPrev = function()
        {
        	const svcId = "searchPrev";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list_prev=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00202_P01.DAY00202_P01_DS_PREV_DAY_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        }

        //콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{

        		} else if(strSvcID == "save")
        		{
        			alert("간호기록 저장완료!");
        			this.ds_return.clearData();
        			this.ds_return.addColumn("REFRESH", "STRING");
        			var nRow = this.ds_return.addRow();
        			this.ds_return.setColumn(nRow, "REFRESH", "Y");

        			this.close(this.ds_return.saveXML());

        		} else if(strSvcID == "delete")
        		{
        			alert("간호기록 삭제완료!");
        			this.ds_return.clearData();
        			this.ds_return.addColumn("REFRESH", "STRING");
        			var nRow = this.ds_return.addRow();
        			//this.ds_return.setColumn(nRow, "REFRESH", "Y");
        			this.ds_return.setColumn(nRow, "REFRESH", "N");
        			this.close(this.ds_return.saveXML());
        		} else if(strSvcID == "searchPrev")
        		{
        			if (this.ds_list_prev.rowcount == 0) return;

        			var ganho = this.ds_list_prev.getColumn(0,"간호일지");
        			if (!Sct.Util.isEmpty(ganho)) {
        				this.ds_list.setColumn(0,"간호일지", ganho);
        			}

        			this.ds_list.setColumn(0,"혈압1", this.ds_list_prev.getColumn(0,"혈압1"));
        			this.ds_list.setColumn(0,"혈압2", this.ds_list_prev.getColumn(0,"혈압2"));
        			this.ds_list.setColumn(0,"맥박", this.ds_list_prev.getColumn(0,"맥박"));
        			this.ds_list.setColumn(0,"혈당", this.ds_list_prev.getColumn(0,"혈당"));
        			this.ds_list.setColumn(0,"혈당2", this.ds_list_prev.getColumn(0,"혈당2"));
        			this.ds_list.setColumn(0,"체온", this.ds_list_prev.getColumn(0,"체온"));
        			this.ds_list.setColumn(0,"체온2", this.ds_list_prev.getColumn(0,"체온2"));
        			this.ds_list.setColumn(0,"체온3", this.ds_list_prev.getColumn(0,"체온3"));
        			this.ds_list.setColumn(0,"호흡", this.ds_list_prev.getColumn(0,"호흡"));
        			this.ds_list.setColumn(0,"체중", this.ds_list_prev.getColumn(0,"체중"));
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

        this.btn_manager_onclick = function(obj,e)
        {
        	const param = {
        			SICODE : this.ds_list.getColumn(0,"sicode")
        		,	DATE : this.ds_list.getColumn(0, "n_nalja")
        		,	FLAG : ""
        	};

        	Sct.popup(this, "employee", 450, 400, "작성자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };


        /***********************************************************************
         * Popup Functions
         ***********************************************************************/

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
        				this.ds_list.setColumn(0, "담당자", name);
        				this.ds_list.setColumn(0, "담당코드", staffid);
        			}
        			else
        			{
        				this.ds_list.setColumn(0, "담당자", "");
        				this.ds_list.setColumn(0, "담당코드", "");
        			}
        			break;
        	}
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.btn_delete.addEventHandler("onclick",this.fn_delete,this);
            this.div_cont.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_cont.form.btn_manager.addEventHandler("onclick",this.btn_manager_onclick,this);
            this.div_cont.form.btn_searchPrev.addEventHandler("onclick",this.fn_searchPrev,this);
        };
        this.loadIncludeScript("DAY00202_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
