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
            this.set_titletext("건강기록일지 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HEA_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HEA_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_H\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_L\" type=\"STRING\" size=\"256\"/><Column id=\"PULSE\" type=\"STRING\" size=\"256\"/><Column id=\"BREATH\" type=\"STRING\" size=\"256\"/><Column id=\"TEMPERATURE1\" type=\"STRING\" size=\"256\"/><Column id=\"TEMPERATURE2\" type=\"STRING\" size=\"256\"/><Column id=\"TEMPERATURE3\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"SUGAR_FBS\" type=\"STRING\" size=\"256\"/><Column id=\"SUGAR_PP2\" type=\"STRING\" size=\"256\"/><Column id=\"COUGH\" type=\"STRING\" size=\"256\"/><Column id=\"THROAT\" type=\"STRING\" size=\"256\"/><Column id=\"BREATHING_DIFF\" type=\"STRING\" size=\"256\"/><Column id=\"SPUTUM\" type=\"STRING\" size=\"256\"/><Column id=\"ETC\" type=\"STRING\" size=\"256\"/><Column id=\"INJECTION\" type=\"STRING\" size=\"256\"/><Column id=\"DRUG\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWNUM\" type=\"INT\" size=\"256\"/><Column id=\"REF_SYS_RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_COMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SUG_FBS_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SUG_PP2_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"TEM_TIME1\" type=\"STRING\" size=\"256\"/><Column id=\"TEM_TIME2\" type=\"STRING\" size=\"256\"/><Column id=\"TEM_TIME3\" type=\"STRING\" size=\"256\"/><Column id=\"IR_PRE_H\" type=\"STRING\" size=\"256\"/><Column id=\"IR_PRE_L\" type=\"STRING\" size=\"256\"/><Column id=\"IR_PULSE\" type=\"STRING\" size=\"256\"/><Column id=\"IR_PRE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"IR_TEMP1\" type=\"STRING\" size=\"256\"/><Column id=\"IR_TEMP_TIME1\" type=\"STRING\" size=\"256\"/><Column id=\"IR_TEMP2\" type=\"STRING\" size=\"256\"/><Column id=\"IR_TEM_TIME2\" type=\"STRING\" size=\"256\"/><Column id=\"IR_TEMP3\" type=\"STRING\" size=\"256\"/><Column id=\"IR_TEMP_TIME3\" type=\"STRING\" size=\"256\"/><Column id=\"IR_SUGAR_FBS\" type=\"STRING\" size=\"256\"/><Column id=\"IR_SUGAR_FBS_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"IR_SUGAR_PP2\" type=\"STRING\" size=\"256\"/><Column id=\"IR_SUGAR_PP2_TIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_dose_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"STR1\" type=\"STRING\" size=\"256\"/><Column id=\"STR2\" type=\"STRING\" size=\"256\"/><Column id=\"STR3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_time", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_use_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"STR1\" type=\"STRING\" size=\"256\"/><Column id=\"STR2\" type=\"STRING\" size=\"256\"/><Column id=\"STR3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location_temp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_room", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_vas", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_TP\" type=\"STRING\" size=\"256\"/><Column id=\"UES_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location_all", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_TP\" type=\"STRING\" size=\"256\"/><Column id=\"UES_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pre_remark", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","120",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_right","468","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_border("0px solid rgba(0,0,0,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1)");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","30",null,null,"0","40",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autoenter("select");
            obj.set_readonly("false");
            obj.set_extendsizetype("row");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"일자\" cssclass=\"CellEssential\"/><Cell col=\"2\" text=\"입소자성명\" cssclass=\"CellEssential\"/><Cell col=\"3\" text=\"층\"/><Cell col=\"4\" text=\"생활실\"/><Cell col=\"5\" text=\"혈압(H)\" cssclass=\"CellEssential\"/><Cell col=\"6\" text=\"혈압(L)\" cssclass=\"CellEssential\"/><Cell col=\"7\" text=\"맥박\" cssclass=\"CellEssential\"/><Cell col=\"8\" text=\"체온1(오전)\" cssclass=\"CellEssential\"/><Cell col=\"9\" text=\"체온2(오후)\" cssclass=\"CellEssential\"/><Cell col=\"10\" text=\"체온3(저녁)\" cssclass=\"CellEssential\"/><Cell col=\"11\" text=\"혈당1\" cssclass=\"CellEssential\"/><Cell col=\"12\" text=\"혈당2\" cssclass=\"CellEssential\"/><Cell col=\"13\" text=\"호흡\" cssclass=\"CellEssential\"/><Cell col=\"14\" text=\"몸무게\" cssclass=\"CellEssential\"/><Cell col=\"15\" text=\"기침\"/><Cell col=\"16\" text=\"인후통\"/><Cell col=\"17\" text=\"호흡곤란\"/><Cell col=\"18\" text=\"객담\"/><Cell col=\"19\" text=\"기타\"/><Cell col=\"20\" text=\"주사제투여\"/><Cell col=\"21\" text=\"약물투여\"/><Cell col=\"22\" text=\"간호일지\"/><Cell col=\"23\" text=\"처리자\"/><Cell col=\"24\" text=\"등록자ID\"/><Cell col=\"25\" text=\"등록자명\"/><Cell col=\"26\" text=\"등록일자\"/><Cell col=\"27\" text=\"수정자명\"/><Cell col=\"28\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell text=\"bind:ROWNUM\"/><Cell col=\"1\" text=\"bind:HEA_DT\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"2\" text=\"bind:RES_NM\" expandshow=\"show\"/><Cell col=\"3\" displaytype=\"combotext\" text=\"bind:AREA\" combocodecol=\"ARE_CD\" combodatacol=\"ARE_NM\" combodataset=\"ds_area\"/><Cell col=\"4\" text=\"bind:LOCATION\" displaytype=\"combotext\" combodataset=\"ds_location_all\" combodatacol=\"LOC_NM\" combocodecol=\"LOC_CD\"/><Cell col=\"5\" text=\"bind:PRE_H\" editinputtype=\"number\" editautoselect=\"true\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:PRE_L\" editinputtype=\"number\" editautoselect=\"true\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:PULSE\" editinputtype=\"number\" editautoselect=\"true\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:TEMPERATURE1\" editinputtype=\"number\" maskeditformat=\"#0.#\" displaytype=\"mask\" editautoselect=\"true\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:TEMPERATURE2\" editinputtype=\"number\" maskeditformat=\"#0.#\" displaytype=\"mask\" editautoselect=\"true\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:TEMPERATURE3\" editinputtype=\"number\" maskeditformat=\"#0.#\" displaytype=\"mask\" editautoselect=\"true\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:SUGAR_FBS\" editinputtype=\"number\" editautoselect=\"true\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:SUGAR_PP2\" editinputtype=\"number\" editautoselect=\"true\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:BREATH\" editinputtype=\"number\" editautoselect=\"true\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:WEIGHT\" editinputtype=\"number\" editautoselect=\"true\" textAlign=\"right\"/><Cell col=\"15\" text=\"bind:COUGH\" displaytype=\"checkboxcontrol\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"16\" text=\"bind:THROAT\" displaytype=\"checkboxcontrol\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"17\" text=\"bind:BREATHING_DIFF\" displaytype=\"checkboxcontrol\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"18\" text=\"bind:SPUTUM\" displaytype=\"checkboxcontrol\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"19\" text=\"bind:ETC\"/><Cell col=\"20\" text=\"bind:INJECTION\"/><Cell col=\"21\" text=\"bind:DRUG\"/><Cell col=\"22\" text=\"bind:REMARK\" displaytype=\"textareacontrol\" wordWrap=\"char\" textareaacceptsenter=\"true\" textareaautoselect=\"true\"/><Cell col=\"23\" text=\"bind:MANAGER_NM\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"24\" text=\"bind:REG_USER\"/><Cell col=\"25\" text=\"bind:REG_USER_NM\"/><Cell col=\"26\" text=\"bind:REG_DT\" displaytype=\"date\"/><Cell col=\"27\" text=\"bind:MOD_USER_NM\"/><Cell col=\"28\" displaytype=\"date\" text=\"bind:MOD_DT\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_addrow",null,"0","80","29","0",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("행추가");
            obj.set_visible("true");
            obj.set_cssclass("btn_com_add");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("statc_divcont_title","0","7","200","22",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("일일 건강측정리스트");
            obj.set_cssclass("lb01");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_paging","0",null,null,"30","830","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_url("CM_POP::CM_PAGING_DIV.xfdl");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static60","0","-1","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("lb01");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","22",null,"74","0.00%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("s01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_name","800","25","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("입소자성명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_name","900","25","110","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static26","204","25","16","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_font("8pt \"Malgun Gothic\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_dt_to","215","25","110","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_dt_from","90","25","110","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_dt_from","-45","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("일자");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_res_pp","1016","25","25","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_background("url(\'imagerc::btn_WF_SearchSmall_P.png\') no-repeat rgba(255,255,255,1)");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_dt_to","-45","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("일자");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_area","340","25","60","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("층");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_area","410","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_datacolumn("ARE_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_area");
            obj.set_codecolumn("ARE_CD");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_location","560","25","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("생활실");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","660","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_codecolumn("LOC_CD");
            obj.set_datacolumn("LOC_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_location");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_sMove","44.87%","96",null,"16","44.87%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("url(\'imagerc::search_open.png\') no-repeat transparent");
            obj.set_border("0px solid");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1250,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item18","div_cont.cal_validitystart","value","ds_head","VALID_PERIOD_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.cal_passwdExpire","value","ds_head","VALID_PASSWD_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_search.form.edt_name","value","ds_search","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.cal_dt_to","value","ds_search","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cal_dt_from","value","ds_search","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cmb_area","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cmb_location","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM_POP::CM_PAGING_DIV.xfdl");
        };
        
        // User Script
        this.addIncludeScript("NUA201QR.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUA201QR.xfdl","lib::pgm_com.xjs");
        this.registerScript("NUA201QR.xfdl", function() {
        /***********************************************************************
         * 화면ID   : NUA101CT.xfdl
         * 화면명   :
         * 화면설명 : 입소자등록
         * 작성일   : 2021-06-16 10:32
         * 작성자   : SOOIM
         * 수정이력 :
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *	2021.06.16		SOOIM		최초작성
         ***********************************************************************
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/
        /***********************************************************************
         * Form Variables
         ***********************************************************************/

        var fv_Company = nexacro.getApplication().gds_userInfo.getColumn(0,"COMPANY_CD");
        var fv_ServiceTp = nexacro.getApplication().gds_userInfo.getColumn(0,"SERVICE_TP");
        var fv_appTp = nexacro.getApplication().gv_applicationTp;

        this.fv_currentDS = this.ds_list;
        this.fv_currentGrid = this.div_cont.form.grd_list;

        this.fileGroupId = "";
        this.fv_currentTab = 0;
        this.gv_NextEmpNo = "";

        this.saveUrl = nexacro.getEnvironment().services["svcurl"].url + "/common/";

        this.fv_saveRefNo = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e, false);

        	this.ds_search.setColumn(0,"COMPANY_CD",fv_Company);
        	this.ds_search.setColumn(0,"SERVICE_TP",fv_ServiceTp);
        	this.ds_search.setColumn(0,"APPLICATION_TP",fv_appTp);
        	this.ds_search.setColumn(0,"DT_FROM",Sct.Util.getFirstDay());
        	//this.ds_search.setColumn(0,"DT_FROM",Sct.Util.getToday()); // 11-09 현재날짜로 변경
        	this.ds_search.setColumn(0,"DT_TO",Sct.Util.getToday());
        	//상태삭제순번컬럼 고정
        	//this.div_cont.form.div_left.form.grd_head.setFormatColProperty(2, "band", "left");

        	//rowTypeValidation 설정
        	var dsArr = ["ds_list"];
        	this.gfn_rowTypeValidationDs(dsArr);
        	this.fn_setComboDs(obj);
        	//페이징 처리 초기화
        	this.fn_initPageSet();

        	// 오픈시 전체 조회
        	this.fn_search();

        	// 오픈시 검색조건 첫 항목에 커서 이동
        	this.div_search.form.cal_dt_from.setFocus();
        };

        //페이징 처리 초기화
        this.fn_initPageSet = function()
        {
        	//페이징처리 초기화
        	this.ds_list.pageRowCount		= 50;											//조회될 row 갯수 (page Size)
            this.ds_list.pageCount			= 10;											//최대 페이지 갯수 (page Scale)
            this.ds_list.pageTotalVisible	= false;										//하단 page Size, pageScale 등 입력 div show YN
        	this.ds_list.pageNo				= 1;											//최초조회시 default 페이지 번호
        	this.ds_list.pageFunctionName	= "fn_search";									//페이지 버튼(1,2,3...)클릭시 조회할 function name
        	this.div_cont.form.div_paging.form.fn_init(this, this.ds_list);	//페이지 form 초기화

        }
        this.fn_setComboDs = function(obj)
        {
             var comboDsParamArr = [
        //                          { outDsName : "ds_location", sqlId : "NUA201CT.NUA201CT_DS_LOCATION_S", param : this.ds_search, bEmptyRow : true}
        //                        , { outDsName : "ds_room", sqlId : "NUA201CT.NUA201CT_DS_ROOM_S",param : this.ds_search, bEmptyRow : true}
        					     /*{ outDsName : "ds_manager", sqlId : "NUA201CT.NUA201CT_DS_MANAGER_S",param : this.ds_search, bEmptyRow : true}*/
        					    { outDsName : "ds_area", sqlId : "NUA201CT.NUA201CT_DS_AREA_S",param : {COMPANY_CD : fv_Company}, bEmptyRow : true} // 층 조회
        					   , { outDsName : "ds_location_all", sqlId : "NUA201CT.NUA201CT_DS_LOCATION_S",param : {COMPANY_CD : fv_Company}, bEmptyRow : true} // 생활실 전체 조회
                            ];
           this.gfn_setComboDs(obj, comboDsParamArr);
        }
        /***********************************************************************
         * Common Button Functions
         ************************************************************************/
        // 조회 버튼
        this.fn_searchBtn = function ()
        {
        	this.fn_search();
        };

        // 저장 버튼
        this.fn_saveBtn = function ()
        {
        	this.fn_save();
        };

        //삭제 버튼
        this.fn_deleteBtn = function ()
        {
        	this.fn_delete();
        };

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
             //조회전 그리드에 변경된 데이터가 있을경우 ..
             if(Sct.Grid.isUpdate(this.ds_list)
        		//|| Sct.Grid.isUpdate(this.ds_schdl)
        		){
                 //메세지로 변경된 데이터 여부와 상관없이 조회 할지 확인
                 if(!Sct.confirm(this,"000171","")){
                     return false;
                 }
             }

             //조회조건 필수여부확인
        	 if(!this.gfn_findSnull(this.div_search)) return false;

        	 var mm = Sct.Util.getMonthDiff(this.ds_search.getColumn(0,"DT_FROM"),this.ds_search.getColumn(0,"DT_TO"));

        	 if(mm>11){
        		Sct.alert(this, "000565"); //1년 이상 조회할 수 없습니다.
        		return;
        	 }

        	 return true;

        };

        //저장 전 validation
        this.fn_save_pre = function ()
        {
        	//저장여부
        	if (!Sct.Grid.hasInsertAndUpdateRow(this.fv_currentDS))
        	{
        		Sct.alert(this, "000240"); //추가나 수정한 데이터가 없습니다.
        		return false;
        	}

        	//입력 필수여부체크
        	if(!this.gfn_chkGridEssential(this.fv_currentGrid)) return false;

        	//입력한값 중복 여부 체크
        	var keyArr ;
        	if(this.fv_currentDS.name == "ds_list"){
        		keyArr = ["COMPANY_CD", "RES_ID","HEA_DT"];
        	}
        	if(!this.gfn_duplicateCheck(this.fv_currentDS, keyArr)) return false;

        	//저장하시겠습니까?
        	if(!Sct.confirm(this, "000038", "")) return false;

        	//데이터 저장전 저장할 key 값 dataset 변수에 저장
        	this.gfn_saveKeyArr(this.fv_currentDS, keyArr);
        	this.fv_saveRefNo = this.ds_list.getColumn(this.ds_list.rowposition, "RES_ID");
        	return true;
        };


        // 삭제 전 validation
        this.fn_delete_pre = function ()
        {
        	if (!Sct.Grid.hasDeletedRow(this.fv_currentDS))
        	{
        		Sct.alert(this, "000150"); //삭제할 데이터가 없습니다.
        		return false;
        	}
        	//삭제하시겠습니까?
        	if(!Sct.confirm(this, "000152", "")) return false;

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
        	var outDatasets = "ds_list=output1";
        	var argument = "method=getListPaging "
        		+ "sqlId=NUA201CT.NUA201CT_DS_LIST_S ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };



        //저장
        this.fn_save = function ()
        {
        	//입력 필수여부체크
        	if(!this.fn_save_pre()) return false;

        // 	let svcId = "save";
        // 	let inDs = "ds_list";
        // 	this.fn_save_com(svcId, inDs);
        	var svcId = "save";
        	var params = "/NUA201CTController.do";
        	var inDatasets = "input1=ds_list:U";
        	var outDatasets = "";
        	var argument = "method=save ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };
        //삭제
        this.fn_delete = function ()
        {
        	//validation
        	if(!this.fn_delete_pre()) return;

        	var sqlId = "";
        	if(this.fv_currentDS.name == "ds_list")	sqlId = "NUA201CT.NUA201CT_DS_LIST_D";

        	var svcId = "delete";
        	var params = "/NUA201CTController.do";
        	var inDatasets = "input1=" +  this.fv_currentDS.name + ":U";
        	var outDatasets = "";
        	var argument = "method=delete "
        		+ "sqlId=" + sqlId + " ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			var count = this.ds_list.rowcount;
        			Sct.alert(this, "000175", count + "|");

        			//서비스 조회 시 return 받은 block count와 총 row 수 전달
        			this.div_cont.form.div_paging.form.fn_callAfter();
        			//저장후 조회후 변경된 row로 rowposition 설정
        			//this.gfn_saveAfterFindRow(this.ds_head);
        			this.fn_findMstRow(this.fv_saveRefNo);

        		}else if(strSvcID == "save" || strSvcID == "delete")
        		{
        			this.fn_search();
        		}
        	}
        	else
        	{
        		Sct.alert(this, "", strErrorMsg);
        	}
        };

        //생활실 조회(outDatasets, 층 데이터)
        this.fn_location_search = function (outDs, col)
        {
        	var svcId = "location_search";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = outDs+"=output1";
        	var argument = "method=getList "
        		+ "sqlId=NUA201CT.NUA201CT_DS_LOCATION_S "
        		+ " COMPANY_CD="+fv_Company
        		+ " AREA="+col;

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/

        // 작업후 작업 정보 조회
        this.fn_findMstRow = function(fv_saveRefNo) {
        	var sFindRow = this.ds_list.findRow("RES_ID", fv_saveRefNo);
        	if(sFindRow > -1) {
        		this.ds_list.set_rowposition(sFindRow);
        	}
        };

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/


        //코드 팝업 CALLBACK
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	var objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        };


        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/


        //---------------------------------------행추가---------------------------------------------
        //master 행추가
        this.fn_head_addrow = function(obj,e)
        {
        	var nRow = this.ds_list.addRow();
        	//초기화
        	this.ds_list.setColumn(nRow, "COMPANY_CD",fv_Company);								//회사코드
        	this.ds_list.setColumn(nRow, "PRE_H",0);
        	this.ds_list.setColumn(nRow, "PRE_L",0);
        	this.ds_list.setColumn(nRow, "PULSE",0);
        	this.ds_list.setColumn(nRow, "BREATH",0);
        	this.ds_list.setColumn(nRow, "TEMPERATURE1",0);
        	this.ds_list.setColumn(nRow, "TEMPERATURE2",0);
        	this.ds_list.setColumn(nRow, "TEMPERATURE3",0);
        	this.ds_list.setColumn(nRow, "WEIGHT",0);
        	this.ds_list.setColumn(nRow, "SUGAR_FBS",0);
        	this.ds_list.setColumn(nRow, "SUGAR_PP2",0);

        	this.ds_list.setColumn(nRow, "COUGH","0");
        	this.ds_list.setColumn(nRow, "THROAT","0");
        	this.ds_list.setColumn(nRow, "BREATHING_DIFF","0");
        	this.ds_list.setColumn(nRow, "SPUTUM","0");

        	this.ds_list.setColumn(nRow, "ACTION","N");
        	this.ds_list.setColumn(nRow, "FALL","N");
        	this.ds_list.setColumn(nRow, "DEHYDRATE","N");
        	this.ds_list.setColumn(nRow, "FECES","N");
        	this.ds_list.setColumn(nRow, "VAS","10");
        	this.ds_list.setColumn(nRow, "SORE","N");
        	this.ds_list.setColumn(nRow, "DELIRIUM","N");

        	// 접속자를 처리자에 저장
        	var userId = nexacro.getApplication().gds_userInfo.getColumn(0,"USER_ID");
        	var userNm = nexacro.getApplication().gds_userInfo.getColumn(0,"USER_NM_KOR");
        	this.ds_list.setColumn(nRow, "MANAGER_ID",userId);
        	this.ds_list.setColumn(nRow, "MANAGER_NM",userNm);

        };


        this.div_cont_grd_list_onexpandup = function(obj,e)
        {
        	if(e.col==obj.getBindCellIndex("body","RES_NM")){
        		var param = {
        			MULTI_YN : "N",
        			COMPANY_CD : fv_Company
        		};
        		Sct.popup(this, "RES_ID", 326, 226, "", param, "CM_POP::CM_RES_PP.xfdl", "fn_popCallback");
        	}
        	if(e.col==obj.getBindCellIndex("body","MANAGER_NM")){
        		var param = {
        			MULTI_YN : "N",
        			COMPANY_CD : fv_Company
        		};
        		Sct.popup(this, "MANAGER_ID", 326, 226, "", param, "CM_POP::CM_MANAGER_PP.xfdl", "fn_popCallback");
        	}
        };
         this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	var objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid){
        		case "RES_ID" : this.ds_list.setColumn(this.ds_list.rowposition, "RES_ID", objDs.getColumn(0, "RES_ID"));
        						this.ds_list.setColumn(this.ds_list.rowposition, "RES_NM", objDs.getColumn(0, "NAME"));
        						this.ds_list.setColumn(this.ds_list.rowposition, "AREA", objDs.getColumn(0, "AREA"));
        						this.ds_list.setColumn(this.ds_list.rowposition, "LOCATION", objDs.getColumn(0, "LOCATION"));
        						this.ds_list.setColumn(this.ds_list.rowposition, "REF_SYS_COMP_CD", objDs.getColumn(0, "REF_SYS_COMP_CD"));
        		break;
        		case "RES_NM" : this.ds_search.setColumn(0, "NAME", objDs.getColumn(0, "NAME"));
        						this.ds_search.setColumn(0, "AREA", objDs.getColumn(0, "AREA"));

        						var area = this.ds_search.getColumn(0, "AREA"); //층
        						if(!Sct.Util.isEmpty(area)){ //층에 해당되는 생활실 조회
        							this.fn_location_search("ds_location", area);
        						}

        						this.ds_search.setColumn(0, "LOCATION", objDs.getColumn(0, "LOCATION"));
        		break;
        		case "MANAGER_ID" : this.ds_list.setColumn(this.ds_list.rowposition,"MANAGER_ID",objDs.getColumn(0,"USER_ID"));
        							this.ds_list.setColumn(this.ds_list.rowposition,"MANAGER_NM",objDs.getColumn(0,"USER_NM_KOR"));
        		break;
        	}

        };
        this.ds_list_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid=="SORE"){
        		if(obj.getColumn(e.row,"SORE")=="N"){
        			obj.setColumn(e.row,"SORE_DESC",null);
        		}
        	}

        	var time = Sct.Util.getHour()+Sct.Util.getMin(); // 현재시간
        	// 혈압,맥박 변경시 현재시간 적용
        	if(e.columnid == "PRE_H" || e.columnid == "PRE_L" || e.columnid == "PULSE"){
        		obj.setColumn(e.row,"PRE_TIME", time);
        	}else if(e.columnid == "SUGAR_FBS"){ // 혈당1
        		obj.setColumn(e.row,"SUG_FBS_TIME", time);
        	}else if(e.columnid == "SUGAR_PP2"){ // 혈당2
        		obj.setColumn(e.row,"SUG_PP2_TIME", time);
        	}else if(e.columnid == "TEMPERATURE1"){ // 체온1
        		obj.setColumn(e.row,"TEM_TIME1", time);
        	}else if(e.columnid == "TEMPERATURE2"){ // 체온2
        		obj.setColumn(e.row,"TEM_TIME2", time);
        	}else if(e.columnid == "TEMPERATURE3"){ // 체온3
        		obj.setColumn(e.row,"TEM_TIME3", time);
        	}
        };

        this.div_search_btn_res_pp_onclick = function(obj,e)
        {
        	var param = {
        		MULTI_YN : "N",
        		COMPANY_CD : fv_Company,
        		TABLE_NM : "T_NU_HEALTH_CHECK"
        	};
        	Sct.popup(this, "RES_NM", 326, 226, "", param, "CM_POP::CM_RES_DATA_INPUT_YN_PP.xfdl", "fn_popCallback");
        };

        //검색조건 층 콤보박스 변경 이벤트
        this.div_search_cmb_area_onitemchanged = function(obj,e)
        {
        	var area = this.ds_search.getColumn(0, "AREA"); //층

        	this.ds_search.setColumn(0, "LOCATION", ""); // 생활실 값 초기화

        	if(!Sct.Util.isEmpty(area)){ //층에 해당되는 생활실 조회
        		this.fn_location_search("ds_location", area);

        		var nInsertRow = this.ds_location.insertRow();
        		this.ds_location.setColumn(nInsertRow,"ARE_CD","");
        	}else{
        		this.ds_location.clearData();
        	}
        };

        this.div_cont_grd_list_oncellclick = function(obj,e)
        {
        	// 2021-11-17 전날내용 버튼 추가
        	if(obj.getCellText(e.row, e.col) == "전날내용") {
        		if(this.gfn_isNull(this.ds_list.getColumn(e.row, "RES_ID"))) {
        			Sct.alert(this, "000076", "입소자"+"|"); // {0} 항목은 필수 입력값입니다.
        			return;
        		}
        		if(!this.gfn_isNull(this.ds_list.getColumn(e.row, "REMARK"))) {
        			if(!Sct.confirm(this, "000582", "간호일지"+"|")) { // {0} 항목이 초기화됩니다. 계속하시겠습니까?
        				return;
        			} else {
        				this.ds_list.setColumn(e.row, "REMARK", "");
        			}
        		}

        		// 전날 간호일지 조회
        		var svcId = "searchRemark";
        		var params = "/commonController.do";
        		var inDatasets = "";
        		var outDatasets = "ds_pre_remark=output1";
        		var argument = "method=getList "
        			+ "sqlId=NUA201CT.NUA201CT_DS_PRE_REMARK_S "
        			+ "COMPANY_CD=" + this.ds_list.getColumn(e.row, "COMPANY_CD") + " "
        			+ "RES_ID=" + this.ds_list.getColumn(e.row, "RES_ID") + " "
        			;

        		var callbackFunc = "fn_callback";
        		Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);

        		// 전날 간호일지 세팅
        		this.ds_list.setColumn(e.row, "REMARK", this.ds_pre_remark.getColumn(0, "REMARK"));
        	}
        };

        this.div_cont_grd_list_oncelldblclick = function(obj,e)
        {
        	var menuCd = "02000100";
        	var param = {
        		pCompanyCd : this.ds_list.getColumn(e.row,"COMPANY_CD")
        		,pResName : this.ds_list.getColumn(e.row,"RES_NM")
        		,pArea : this.ds_list.getColumn(e.row,"AREA")
        		,pLocation : this.ds_list.getColumn(e.row,"LOCATION")
        		,pDt : this.ds_list.getColumn(e.row,"HEA_DT")
        	};
        	trace("pCompanyCd : " + this.ds_list.getColumn(e.row,"COMPANY_CD"));
        	trace("pResName : " + this.ds_list.getColumn(e.row,"RES_NM"));
        	trace("pArea : " + this.ds_list.getColumn(e.row,"AREA"));
        	trace("pLocation : " + this.ds_list.getColumn(e.row,"LOCATION"));
        	trace("pDt : " + this.ds_list.getColumn(e.row,"HEA_DT"));
        	//메뉴 open
        	Sct.chkOpenMenu(menuCd, param);
        };

        this.div_search_edt_name_onkeyup = function(obj,e)
        {
        	if (e.keycode == "13")
        	{
        		this.div_search.form.btn_res_pp.click();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.div_cont.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.grd_list.addEventHandler("onexpandup",this.div_cont_grd_list_onexpandup,this);
            this.div_cont.form.grd_list.addEventHandler("oncellclick",this.div_cont_grd_list_oncellclick,this);
            this.div_cont.form.grd_list.addEventHandler("oncelldblclick",this.div_cont_grd_list_oncelldblclick,this);
            this.div_cont.form.btn_addrow.addEventHandler("onclick",this.fn_head_addrow,this);
            this.div_cont.form.statc_divcont_title.addEventHandler("onclick",this.div_cont_statc_divcont_title_onclick,this);
            this.div_search.form.edt_name.addEventHandler("onkeyup",this.div_search_edt_name_onkeyup,this);
            this.div_search.form.btn_res_pp.addEventHandler("onclick",this.div_search_btn_res_pp_onclick,this);
            this.div_search.form.cmb_area.addEventHandler("onitemchanged",this.div_search_cmb_area_onitemchanged,this);
            this.btn_sMove.addEventHandler("onclick",this.search_reset,this);
            this.btn_sMove.addEventHandler("ondrag",this.search_resize,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
            this.ds_pre_remark.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
        };
        this.loadIncludeScript("NUA201QR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
