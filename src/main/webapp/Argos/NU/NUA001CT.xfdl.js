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
            this.set_titletext("(고객용)법인등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,730);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRESIDENT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_service_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_sub_service_tp1", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_sub_service_tp2", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_SERVICE1\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_SERVICE2\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"PRESIDENT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO2\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO\" type=\"STRING\" size=\"256\"/><Column id=\"START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HOMEPAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_TP\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_TP\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_COMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_use_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_sys_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_head", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_SERVICE1\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_SERVICE2\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"PRESIDENT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO2\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO\" type=\"STRING\" size=\"256\"/><Column id=\"START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HOMEPAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_TP\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_TP\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_COMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_FR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_FR_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_FR_MINUTE\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_TO_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_TO_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_TO_MINUTE\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_FR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_FR_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_FR_MINUTE\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_TO_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_TO_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_TO_MINUTE\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_FR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_FR_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_FR_MINUTE\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_TO_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_TO_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_TO_MINUTE\" type=\"STRING\" size=\"256\"/><Column id=\"MOR_SNACK_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MOR_SNACK_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"MOR_SNACK_MINUTE\" type=\"STRING\" size=\"256\"/><Column id=\"AFT_SNACK_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"AFT_SNACK_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"AFT_SNACK_MINUTE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MOR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"AFT_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CAMERA_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CAMERA_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CAMERA_PW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_hour", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_minute", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","4",null,null,"10","130",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_right","0","0","740","560",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static04_00","0","26","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","0","54","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_01","0","82","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00","0","110","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00","0","138","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00_00","0","278","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_01","0","250","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01","0","222","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","0","194","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_02","0","166","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm","0","26","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("50");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_prd_nm","0","54","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("51");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_phone2","0","82","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("52");
            obj.set_text("전화번호2");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_number","0","110","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("53");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_ut","0","138","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("54");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_post","0","166","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("55");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_address","0","194","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("56");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00","0","306","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_01_00","0","334","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_serv_tp","0","222","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("59");
            obj.set_text("서비스유형");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_00_00_00_00_00","0","250","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("60");
            obj.set_text("부가서비스1");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_00_00_00_00_00_00","0","278","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("61");
            obj.set_text("연결시스템");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_start_date","0","306","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("62");
            obj.set_text("유효기간 from");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_00_00_00_00_00_00_00_00","0","334","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("63");
            obj.set_text("홈페이지");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_end_date","365","306","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("64");
            obj.set_text("유효기간 to");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_00_00_00_00_00_00_01","365","278","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("65");
            obj.set_text("연결시스템CD");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_00_00_00_00_00_01","365","250","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("66");
            obj.set_text("부가서비스2");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_use_yn","365","222","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("67");
            obj.set_text("사용유무");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_event_tp","365","138","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("68");
            obj.set_text("종목");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_nu_num","365","110","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("69");
            obj.set_text("장기요양기관번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_fax","365","82","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("70");
            obj.set_text("팩스번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_phone1","365","54","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("71");
            obj.set_text("전화번호1");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_cmp_nm","365","26","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("72");
            obj.set_text("법인명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_com_cd","133","30","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_cssclass("essential");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_cmp_nm","496","30","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_prd_nm","133","58","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("2");
            obj.set_cssclass("essential");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_phone1","496","58","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("3");
            obj.set_cssclass("essential");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_serv_tp","133","226","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_cm_service_tp");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_cssclass("essential");
            obj.set_readonly("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_use_yn","496","226","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("13");
            obj.set_innerdataset("ds_cm_use_yn");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_cssclass("essential");
            obj.set_readonly("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Calendar("cal_start_date","133","310","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("18");
            obj.getSetter("calendarfunc").set("calendar");
            obj.set_headformat("yyyy.MM-dd");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Calendar("cal_end_date","496","310","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("19");
            obj.getSetter("calendarfunc").set("calendar");
            obj.set_headformat("yyyy.MM-dd");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_phone2","133","86","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("4");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_fax","496","86","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("5");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_number","133","114","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("6");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_nu_num","496","114","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("7");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_post","133","170","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("10");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_address","133","198","592","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("11");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_sub_serv1","133","254","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_cm_sub_service_tp1");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_sub_serv2","496","254","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_cm_sub_service_tp2");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_home","133","338","592","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("20");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_ut","133","141","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("8");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_event_tp","496","141","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("9");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_sys_tp","133","284","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("16");
            obj.set_innerdataset("ds_cm_sys_tp");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("cmb_sys_tp_cd","496","282","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("17");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            obj.set_inputtype("alpha,space,number,sign,dot,digit,comma");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("statc_divcont_title","0","3","200","22",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("73");
            obj.set_text("법인관리");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_01_00_00_00_00_00_00","0","474","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_01_00_00_00_00_00","0","446","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_01_00_00_00_00","0","418","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_01_00_00_00","0","390","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_01_00_00","0","362","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_00_00_00_00_00_00_00_00_00","0","362","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("79");
            obj.set_text("아침식사시간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_00_00_00_00_00_00_00_00_00_00","0","390","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("80");
            obj.set_text("점심식사시간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","418","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("81");
            obj.set_text("저녁식사시간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","446","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("82");
            obj.set_text("오전간식시간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","474","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("83");
            obj.set_text("오후간식시간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_aft_start_hour","133","478","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("35");
            obj.set_innerdataset("ds_nu_hour");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_aft_start_minute","201","478","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("36");
            obj.set_innerdataset("ds_nu_minute");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_mor_start_hour","133","450","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("33");
            obj.set_innerdataset("ds_nu_hour");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_mor_start_minute","201","450","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("34");
            obj.set_innerdataset("ds_nu_minute");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_din_start_hour","133","422","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("29");
            obj.set_innerdataset("ds_nu_hour");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_din_start_minute","201","422","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("30");
            obj.set_innerdataset("ds_nu_minute");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00","267","422","16","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("84");
            obj.set_text("~");
            obj.set_font("8pt \"Malgun Gothic\"");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_din_end_hour","277","422","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("31");
            obj.set_innerdataset("ds_nu_hour");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_din_end_minute","345","422","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("32");
            obj.set_innerdataset("ds_nu_minute");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_lun_start_hour","133","394","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("25");
            obj.set_innerdataset("ds_nu_hour");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_lun_start_minute","201","394","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("26");
            obj.set_innerdataset("ds_nu_minute");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static26_01_00","267","394","16","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("85");
            obj.set_text("~");
            obj.set_font("8pt \"Malgun Gothic\"");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_lun_end_hour","277","394","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("27");
            obj.set_innerdataset("ds_nu_hour");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_lun_end_minute","345","394","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("28");
            obj.set_innerdataset("ds_nu_minute");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_bre_start_hour","133","366","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_nu_hour");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_bre_start_minute","201","366","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("22");
            obj.set_innerdataset("ds_nu_minute");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static26_01","267","366","16","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("86");
            obj.set_text("~");
            obj.set_font("8pt \"Malgun Gothic\"");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_bre_end_hour","277","366","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_nu_hour");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_bre_end_minute","345","366","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("24");
            obj.set_innerdataset("ds_nu_minute");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_01_00_00_00_00_00_00_00","0","502","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_camera_pw","602","506","124","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("39");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_camera00_00","470","502","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("88");
            obj.set_text("낙상카메라 P/W");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_camera_id","332","506","136","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("38");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_camera00","200","502","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("89");
            obj.set_text("낙상카메라 ID");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_camera_yn","133","506","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("37");
            obj.set_innerdataset("ds_cm_use_yn");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_camera_yn","0","502","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("90");
            obj.set_text("낙상카메라 Y/N");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,730,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","div_cont.form.div_head.form.edt_userid00","value","ds_list","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_cont.form.div_head.form.edt_userid00_00","value","ds_list","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_head.form.edt_userid00_00_00","value","ds_list","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_head.form.edt_userid00_00_00_00","value","ds_list","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_head.form.cmb_company_cd00","value","ds_list","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_head.form.cmb_company_cd00_00","value","ds_list","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_head.form.cmb_company_cd00_00_00","value","ds_list","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.edt_com_cd","value","ds_head","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.div_right.form.edt_cmp_nm","value","ds_head","COMPANY_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_right.form.edt_prd_nm","value","ds_head","PRESIDENT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_right.form.edt_phone1","value","ds_head","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.div_right.form.edt_phone2","value","ds_head","TEL_NO2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.form.div_right.form.edt_fax","value","ds_head","FAX_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.div_right.form.edt_number","value","ds_head","REG_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.div_right.form.edt_nu_num","value","ds_head","CORP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.div_right.form.edt_ut","value","ds_head","BUSINESS_CONDITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.div_right.form.edt_event_tp","value","ds_head","BIZ_ITM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.div_right.form.edt_post","value","ds_head","ZIP_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cont.form.div_right.form.edt_address","value","ds_head","ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_cont.form.div_right.form.cmb_serv_tp","value","ds_head","SERVICE_TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_cont.form.div_right.form.cmb_use_yn","value","ds_head","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_cont.form.div_right.form.cmb_sub_serv1","value","ds_head","SUB_SERVICE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_cont.form.div_right.form.cmb_sub_serv2","value","ds_head","SUB_SERVICE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_cont.form.div_right.form.cmb_sys_tp","value","ds_head","REF_SYS_TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_cont.form.div_right.form.cmb_sys_tp_cd","value","ds_head","REF_SYS_COMP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.div_right.form.cal_start_date","value","ds_head","START_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_cont.form.div_right.form.cal_end_date","value","ds_head","END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.div_right.form.edt_home","value","ds_head","HOMEPAGE_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_cont.form.div_right.form.cmb_aft_start_hour","value","ds_head","AFT_SNACK_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_cont.form.div_right.form.cmb_aft_start_minute","value","ds_head","AFT_SNACK_MINUTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_right.form.cmb_mor_start_hour","value","ds_head","MOR_SNACK_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_right.form.cmb_mor_start_minute","value","ds_head","MOR_SNACK_MINUTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right.form.cmb_din_start_hour","value","ds_head","DIN_FR_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right.form.cmb_din_start_minute","value","ds_head","DIN_FR_MINUTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.div_right.form.cmb_din_end_hour","value","ds_head","DIN_TO_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cont.form.div_right.form.cmb_din_end_minute","value","ds_head","DIN_TO_MINUTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_cont.form.div_right.form.cmb_lun_start_hour","value","ds_head","LUN_FR_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_cont.form.div_right.form.cmb_lun_start_minute","value","ds_head","LUN_FR_MINUTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_cont.form.div_right.form.cmb_lun_end_hour","value","ds_head","LUN_TO_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cont.form.div_right.form.cmb_lun_end_minute","value","ds_head","LUN_TO_MINUTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_cont.form.div_right.form.cmb_bre_start_hour","value","ds_head","BRE_FR_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_cont.form.div_right.form.cmb_bre_start_minute","value","ds_head","BRE_FR_MINUTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_cont.form.div_right.form.cmb_bre_end_hour","value","ds_head","BRE_TO_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_cont.form.div_right.form.cmb_bre_end_minute","value","ds_head","BRE_TO_MINUTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_cont.form.div_right.form.edt_camera_pw","value","ds_head","CAMERA_PW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_cont.form.div_right.form.edt_camera_id","value","ds_head","CAMERA_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_cont.form.div_right.form.cmb_camera_yn","value","ds_head","CAMERA_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUA001CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUA001CT.xfdl","lib::pgm_com.xjs");
        this.registerScript("NUA001CT.xfdl", function() {
        /***********************************************************************
         * 화면ID    : NUA001CT
         * 화면명   : 고객 법인관리
         * 화면설명 :
         * 작성일    : 2021-06-10
         * 작성자   :  SOOIM
         * 수정이력 :
         ***********************************************************************
         *     	수정일     	수정자   	내용
         *		2021-06-10		SOOIM		해당 업체만 내용만 조회 가능
         ***********************************************************************
         ***********************************************************************
         */

        /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_currentDS = this.ds_head;
        //this.fv_currentGrid = this.div_cont.form.div_left.form.grd_head;
        this.nMoveX;
        this.nMoveY;
        this.fv_flag;
        // 서비스 단에서 받는 variable, 초기화 필요함
        this.outvar = "";
        this.fileGroupId = "";
        var fv_Company = nexacro.getApplication().gds_userInfo.getColumn(0,"COMPANY_CD");
        var fv_ServiceTp = nexacro.getApplication().gds_userInfo.getColumn(0,"SERVICE_TP");
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e);
        	this.ds_search.setColumn(0,"COMPANY_CD",fv_Company);
        	this.ds_search.setColumn(0,"SERVICE_TP",fv_ServiceTp);

        	//조회
        	this.fn_search();

        };

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


        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	//조회전 그리드에 변경된 데이터가 있을경우 ..
        	if(Sct.Grid.isUpdate(this.ds_notice) || Sct.Grid.isUpdate(this.ds_read_user)){
        		if(!Sct.confirm(this,"000171","")){ //변경된 데이터가 있습니다. 무시하겠습니까?
        			return;
        		}
        	}

        	return true;
        };

        //저장 전 validation
        this.fn_save_pre = function ()
        {
        	//입력 필수여부체크
        	if(!this.gfn_findSnull(this.div_cont.form.div_right)) return false;

        	//저장하시겠습니까?
        	if(!Sct.confirm(this, "000038", "")) return false;

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
        		+ "sqlId=NUA001CT.NUA001CT_DS_HEAD_S ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };



        //저장
        this.fn_save = function ()
        {
        	if(!this.fn_save_pre()) return false;
        	let svcId = "save";
        	let inDs = "ds_head"
        	this.fn_save_com(svcId, inDs);
        };


        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			var count = this.ds_head.rowcount;
        			Sct.alert(this, "000175", count + "|");

        			this.div_cont.form.div_right.form.edt_cmp_nm.setFocus();
        		}
        		else if(strSvcID == "save")
        		{
        			this.fn_search();
        		}
        	}
        	else
        	{
        		Sct.alert(this, "", strErrorMsg);
        	}
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/

         /***********************************************************************
         * Component Event Functions
         ***********************************************************************/

        this.ds_head_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "CAMERA_YN"){
        		if(e.newvalue != "Y"){
        			this.div_cont.form.div_right.form.edt_camera_id.set_enable(false);
        			this.div_cont.form.div_right.form.edt_camera_pw.set_enable(false);
        			obj.setColumn(e.row,"CAMERA_ID",null);
        			obj.setColumn(e.row,"CAMERA_PW",null);
        		}else{
        			this.div_cont.form.div_right.form.edt_camera_id.set_enable(true);
        			this.div_cont.form.div_right.form.edt_camera_pw.set_enable(true);
        		}
        	}
        };

        this.ds_head_onrowposchanged = function(obj,e)
        {
        	if(obj.getColumn(e.newrow,"CAMERA_YN")!="Y"){
        		this.div_cont.form.div_right.form.edt_camera_id.set_enable(false);
        		this.div_cont.form.div_right.form.edt_camera_pw.set_enable(false);
        	}else{
        		this.div_cont.form.div_right.form.edt_camera_id.set_enable(true);
        		this.div_cont.form.div_right.form.edt_camera_pw.set_enable(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.div_cont.form.div_right.form.cmb_serv_tp.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_use_yn.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_sub_serv1.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_sub_serv2.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_sys_tp.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.statc_divcont_title.addEventHandler("onclick",this.div_cont_statc_divcont_title_onclick,this);
            this.div_cont.form.div_right.form.cmb_aft_start_hour.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_aft_start_minute.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_mor_start_hour.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_mor_start_minute.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_din_start_hour.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_din_start_minute.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_din_end_hour.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_din_end_minute.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_lun_start_hour.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_lun_start_minute.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_lun_end_hour.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_lun_end_minute.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_bre_start_hour.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_bre_start_minute.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_bre_end_hour.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_bre_end_minute.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_camera_yn.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.ds_search.addEventHandler("onrowposchanged",this.ds_notice_onrowposchanged,this);
            this.ds_head.addEventHandler("onrowposchanged",this.ds_head_onrowposchanged,this);
            this.ds_head.addEventHandler("oncolumnchanged",this.ds_head_oncolumnchanged,this);
        };
        this.loadIncludeScript("NUA001CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
