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
            this.set_titletext("(고객용)사용자관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1500,610);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PASSWD\" type=\"STRING\" size=\"256\"/><Column id=\"RANK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SAL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM_CHI\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INOUT_USER_TP\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO2\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"DEF_LANG\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH1\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH2\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH3\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH4\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH5\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTH_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HIRE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RETIRE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"VALID_PERIOD_FR\" type=\"STRING\" size=\"256\"/><Column id=\"VALID_PERIOD_TO\" type=\"STRING\" size=\"256\"/><Column id=\"VALID_PASSWD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_REAL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_REAL_NAME2\" type=\"STRING\" size=\"256\"/><Column id=\"CARE_GRP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_use_yn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dup", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_1\" type=\"STRING\" size=\"256\"/><Column id=\"COL_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_files", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ROWIDX\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"BLOB_FILE\" type=\"BLOB\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_download", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BLOB_FILE\" type=\"BLOB\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_service_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_rank_cd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_sal_cd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_care_grp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","22",null,"74","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("s01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_userId","15","11","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("사용자ID");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_use_yn","110","42","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_use_yn");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_user_id","110","11","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_user_nm","245","11","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_user_nm","340","11","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_use_yn","15","42","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","0","100",null,null,"0.00%","0.00%",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("div_cont","0","20",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_DetailBg");
            obj.set_border("0px solid rgba(120,120,120,1)");
            obj.set_font("9pt \"Malgun Gothic\"");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_right","520","-9",null,"479","0",null,null,null,null,null,this.div_cont.form.div_cont.form);
            obj.set_taborder("3");
            this.div_cont.form.div_cont.addChild(obj.name, obj);

            obj = new Static("Static60","37","16","120","22",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("22");
            obj.set_text("사용자 등록");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static05_00","37","235","519","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00","37","39","519","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00","37","67","519","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00_00","37","95","519","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00_00_00","37","123","519","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00_00_00_00","37","151","519","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00_00_00_00_00","37","179","519","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_user_passwd","37","95","106","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("30");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_user_passwd","148","99","144","21",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("4");
            obj.set_cssclass("essential");
            obj.set_password("false");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_chgpass","256","98","36","23",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("19");
            obj.set_text("변경");
            obj.set_visible("false");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_user_nm_kor","297","95","106","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("31");
            obj.set_text("성명(한글)");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_user_nm_kor","407","99","144","21",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("5");
            obj.set_cssclass("essential");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_user_id","37","67","106","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("32");
            obj.set_text("유저ID");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_user_no","37","123","106","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("33");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00_00_00_00_00_00","37","207","519","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static05_00_00","37","263","519","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_address","148","267","403","21",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("15");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_address","37","263","106","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("36");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01","37","291","519","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_hire_dt","37","291","106","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("38");
            obj.set_text("입사일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_visible("true");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_retire_dt","297","291","106","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("39");
            obj.set_text("퇴사일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_visible("true");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Calendar("cal_hire_dt","148","295","144","21",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_visible("true");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Calendar("cal_retire_dt","407","295","144","21",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_visible("true");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static05_00_01","37","319","519","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_use_yn","148","323","144","21",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("18");
            obj.set_innerdataset("ds_use_yn");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_cssclass("essential");
            obj.set_index("-1");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_use_yn","37","319","106","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("41");
            obj.set_text("사용유무");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_rank_cd","37","151","106","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("42");
            obj.set_text("담당직종");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_tel_no","297","179","106","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("43");
            obj.set_text("연락처1");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_birth_dt","37","207","106","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("44");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_zip_code","37","235","106","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("45");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_userpasswd00_00","37","39","106","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("46");
            obj.set_text("회사코드");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_ref_user_id","297","67","106","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("47");
            obj.set_text("타운영시스템ID");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_service_tp","297","39","106","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("48");
            obj.set_text("서비스유형");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_service_tp","407","43","144","21",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_cm_service_tp");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_cssclass("essential");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_index("-1");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_sal_cd","407","155","144","21",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_cm_sal_cd");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_index("-1");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_rank_cd","148","155","144","21",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_cm_rank_cd");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_index("-1");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_dept_nm","297","123","106","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("49");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_sal_cd","297","151","106","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("50");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_tel_no2","297","207","106","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("51");
            obj.set_text("연락처2");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_zip_code","148","239","144","21",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("14");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_ref_user_id","407","71","144","21",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("3");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_company_cd","148","43","144","21",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_cssclass("essential");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_user_id","148","71","144","21",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("2");
            obj.set_cssclass("essential");
            obj.set_autoselect("true");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_user_no","148","127","144","21",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("6");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_dept_nm","407","127","144","21",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("7");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_tel_no","407","183","144","21",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("11");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_tel_no2","407","211","144","21",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("13");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Calendar("cal_birth_dt","148","211","144","21",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_visible("true");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_care_grp","37","179","106","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("52");
            obj.set_text("케어그룹");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_care_grp","148","183","144","21",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_nu_care_grp");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_index("-1");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new ImageViewer("imv_photo","558","39","134","135",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("53");
            obj.set_stretch("fixaspectratio");
            obj.set_visible("true");
            obj.set_image("url(\'localhost:8080/Argos/img/Img_Delete16.png\')");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_sign00","558","175","134","18",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("20");
            obj.set_text("사진 등록");
            obj.set_visible("true");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new ImageViewer("imv_sign","558","194","134","135",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("54");
            obj.set_stretch("fixaspectratio");
            obj.set_visible("true");
            obj.set_image("url(\'localhost:8080/Argos/img/Img_Delete16.png\')");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_sign","558","330","134","18",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("21");
            obj.set_text("사인 등록");
            obj.set_visible("true");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Div("div_left","0","-3","532",null,null,"0",null,null,null,null,this.div_cont.form.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.form.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","33",null,null,"0","0",null,null,null,null,this.div_cont.form.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autosizebandtype("body");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"95\"/><Column size=\"86\"/><Column size=\"77\"/><Column size=\"88\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"111\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"60\"/><Column size=\"89\"/><Column size=\"83\"/><Column size=\"86\"/><Column size=\"86\"/><Column size=\"86\"/><Column size=\"95\"/><Column size=\"75\"/><Column size=\"73\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell expandchar=\"status\"/><Cell col=\"1\" expandchar=\"delete\"/><Cell col=\"2\" text=\"NO\"/><Cell col=\"3\" text=\"성명(한글)\"/><Cell col=\"4\" text=\"유저ID\" cssclass=\"CellEssential\"/><Cell col=\"5\" text=\"담당직종\"/><Cell col=\"6\" text=\"회사코드\" cssclass=\"CellEssential\"/><Cell col=\"7\" text=\"사업장\"/><Cell col=\"8\" displaytype=\"normal\" text=\"공장\"/><Cell col=\"9\" text=\"서비스유형\"/><Cell col=\"10\" text=\"타운영시스템ID\"/><Cell col=\"11\" text=\"비밀번호\"/><Cell col=\"12\" text=\"기타권한1\"/><Cell col=\"13\" text=\"기타권한2\"/><Cell col=\"14\" text=\"기타권한3\"/><Cell col=\"15\" text=\"기타권한4\"/><Cell col=\"16\" text=\"기타권한5\"/><Cell col=\"17\" text=\"최초등록자ID\"/><Cell col=\"18\" text=\"최초등록시간\"/><Cell col=\"19\" text=\"최초등록스탬프\"/><Cell col=\"20\" text=\"최초등록로컬스탬프\"/><Cell col=\"21\" text=\"최초등록IP\"/><Cell col=\"22\" text=\"수정 프로그램ID\"/><Cell col=\"23\" text=\"수정등록자\"/><Cell col=\"24\" text=\"수정등록시간\"/><Cell col=\"25\" text=\"수정등록스탬프\"/><Cell col=\"26\" text=\"수정등록로컬스탬프\"/><Cell col=\"27\" text=\"사번\"/><Cell col=\"28\" text=\"부서\"/><Cell col=\"29\" text=\"직급\"/><Cell col=\"30\" text=\"케어그룹\"/><Cell col=\"31\" text=\"연락처1\"/><Cell col=\"32\" text=\"연락처2\"/><Cell col=\"33\" text=\"생년월일\"/><Cell col=\"34\" text=\"우편번호\"/><Cell col=\"35\" text=\"주소\"/><Cell col=\"36\" text=\"입사일\"/><Cell col=\"37\" text=\"퇴사일\"/><Cell col=\"38\" text=\"사용유무\"/><Cell col=\"39\" text=\"등록자ID\"/><Cell col=\"40\" text=\"등록자명\"/><Cell col=\"41\" text=\"등록일자\"/><Cell col=\"42\" text=\"수정자명\"/><Cell col=\"43\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"expr:currow + 1\"/><Cell col=\"3\" text=\"bind:USER_NM_KOR\"/><Cell col=\"4\" text=\"bind:USER_ID\"/><Cell col=\"5\" text=\"bind:RANK_CD\" displaytype=\"combotext\" combodataset=\"ds_cm_rank_cd\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"6\" displaytype=\"normal\" text=\"bind:COMPANY_CD\" combodataset=\"gds_company\" combocodecol=\"COMPANY_CD\" combodatacol=\"COMPANY_NM\" combotype=\"filterlike\" cssclass=\"CellEssential\"/><Cell col=\"7\" displaytype=\"combotext\" text=\"bind:BIZ_CD\" combodataset=\"gds_biz\" combocodecol=\"BIZ_CD\" combodatacol=\"BIZ_NM\" combotype=\"filterlike\"/><Cell col=\"8\" displaytype=\"combotext\" text=\"bind:PLANT_CD\" combodataset=\"gds_plant\" combocodecol=\"PLANT_CD\" combodatacol=\"PLANT_NM\" combotype=\"filterlike\"/><Cell col=\"9\" text=\"bind:SERVICE_TP\" displaytype=\"combotext\" combodataset=\"ds_cm_service_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"10\" text=\"bind:REF_USER_ID\"/><Cell col=\"11\" text=\"bind:USER_PASSWD\"/><Cell col=\"12\" edittype=\"none\" text=\"bind:AUTH1\"/><Cell col=\"13\" edittype=\"none\" text=\"bind:AUTH2\"/><Cell col=\"14\" edittype=\"none\" text=\"bind:AUTH3\"/><Cell col=\"15\" edittype=\"none\" text=\"bind:AUTH4\"/><Cell col=\"16\" edittype=\"none\" text=\"bind:AUTH5\"/><Cell col=\"17\" text=\"bind:REG_USER\"/><Cell col=\"18\" text=\"bind:REG_DT\"/><Cell col=\"19\" text=\"bind:REG_DT_CURR\"/><Cell col=\"20\" text=\"bind:REG_DT_LOC\"/><Cell col=\"21\" text=\"bind:REG_IP\"/><Cell col=\"22\" text=\"bind:MOD_PGM_ID\"/><Cell col=\"23\" text=\"bind:MOD_USER\"/><Cell col=\"24\" text=\"bind:MOD_DT\"/><Cell col=\"25\" text=\"bind:MOD_DT_CURR\"/><Cell col=\"26\" text=\"bind:MOD_DT_LOC\"/><Cell col=\"27\" text=\"bind:USER_NO\"/><Cell col=\"28\" text=\"bind:DEPT_NM\"/><Cell col=\"29\" text=\"bind:SAL_CD\" displaytype=\"combotext\" combodataset=\"ds_cm_sal_cd\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"30\" text=\"bind:CARE_GRP\" displaytype=\"combotext\" combodataset=\"ds_nu_care_grp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"31\" text=\"bind:TEL_NO\"/><Cell col=\"32\" text=\"bind:TEL_NO2\"/><Cell col=\"33\" text=\"bind:BIRTH_DT\" displaytype=\"date\"/><Cell col=\"34\" text=\"bind:ZIP_CODE\"/><Cell col=\"35\" text=\"bind:ADDRESS\"/><Cell col=\"36\" text=\"bind:HIRE_DT\" displaytype=\"date\"/><Cell col=\"37\" text=\"bind:RETIRE_DT\" displaytype=\"date\"/><Cell col=\"38\" text=\"bind:USE_YN\"/><Cell col=\"39\" text=\"bind:REG_USER\"/><Cell col=\"40\" text=\"bind:REG_USER_NM\"/><Cell col=\"41\" text=\"bind:REG_DT\" displaytype=\"date\"/><Cell col=\"42\" text=\"bind:MOD_USER_NM\"/><Cell col=\"43\" text=\"bind:MOD_DT\" displaytype=\"date\"/></Band></Format></Formats>");
            this.div_cont.form.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left01","0","10","194","22",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_text("사용자 조회");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_addrow",null,"3","80","29","0",null,null,null,null,null,this.div_cont.form.div_cont.form.div_left.form);
            obj.set_taborder("2");
            obj.set_text("행추가");
            obj.set_visible("true");
            obj.set_cssclass("btn_com_add");
            this.div_cont.form.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_gHMove","532","45.31%","25","50",null,null,null,null,null,null,this.div_cont.form.div_cont.form);
            obj.set_taborder("2");
            obj.set_icon("URL(\'imagerc::grid_horizontal.png\')");
            obj.set_background("transparent");
            obj.set_borderRadius("10px");
            this.div_cont.form.div_cont.addChild(obj.name, obj);

            obj = new Static("Static60","0","-1","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색조건");
            obj.set_cssclass("lb01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sMove","44.78%","96",null,"16","44.78%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("url(\'imagerc::search_open.png\') no-repeat transparent");
            obj.set_border("0px solid");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1500,610,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_cont.form.div_cont","value","ds_list","GRADE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_cont.form.div_cont","value","ds_list","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_cont.form.div_cont","value","ds_list","USER_NM_KOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_cont","value","ds_list","WORK_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_cont","value","ds_list","USER_PASSWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_cont","value","ds_list","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_cont","value","ds_list","USER_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_cont","value","ds_list","DEF_LANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_cont","value","ds_list","USER_NM_ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_cont","value","ds_list","USER_NM_CHI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.div_cont","value","ds_list","INOUT_USER_TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_cont","value","ds_list","SRM_TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_cont","value","ds_list","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.div_cont","value","ds_list","CELL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_cont","value","ds_list","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_cont","value","ds_list","BIZ_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.div_cont","value","ds_list","PLANT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.cal_validitystart","value","ds_list","VALID_PERIOD_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.cal_passwdExpire","value","ds_list","VALID_PASSWD_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_cont.form.div_cont","value","ds_list","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.div_cont","value","ds_list","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.div_cont","value","ds_list","VALID_PERIOD_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cont.form.div_cont","image","ds_download","BLOB_FILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_cont.form.div_cont","value","ds_list","WC_GROUP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_cont.form.div_cont","value","ds_list","WC_GROUP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_cont.form.div_cont","value","ds_list","VALID_PERIOD_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_cont.form.div_cont","value","ds_list","VALID_PASSWD_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_cont.form.div_cont","value","ds_list","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_cont.form.div_cont","value","ds_list","CUST_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_cont.form.div_right.form.edt_user_passwd","value","ds_list","USER_PASSWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.div_cont.form.div_right.form.edt_address","value","ds_list","ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.div_cont.form.div_right.form.edt_user_nm_kor","value","ds_list","USER_NM_KOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_cont.form.div_cont.form.div_right.form.cal_hire_dt","value","ds_list","HIRE_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.div_cont.form.div_right.form.cal_retire_dt","value","ds_list","RETIRE_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.div_cont.form.div_right.form.cmb_use_yn","value","ds_list","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cont.form.div_cont.form.div_right.form.cmb_service_tp","value","ds_list","SERVICE_TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_cont.form.div_cont.form.div_right.form.cmb_sal_cd","value","ds_list","SAL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_cont.form.div_cont.form.div_right.form.cmb_rank_cd","value","ds_list","RANK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_cont.form.div_cont.form.div_right.form.edt_zip_code","value","ds_list","ZIP_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_cont.form.div_cont.form.div_right.form.edt_ref_user_id","value","ds_list","REF_USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_cont.form.div_cont.form.div_right.form.edt_company_cd","value","ds_list","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_cont.form.div_cont.form.div_right.form.edt_user_id","value","ds_list","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_cont.form.div_cont.form.div_right.form.edt_user_no","value","ds_list","USER_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_cont.form.div_cont.form.div_right.form.edt_dept_nm","value","ds_list","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_cont.form.div_cont.form.div_right.form.edt_tel_no","value","ds_list","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_cont.form.div_cont.form.div_right.form.edt_tel_no2","value","ds_list","TEL_NO2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_search.form.edt_user_id","value","ds_search","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_search.form.edt_user_nm","value","ds_search","USER_NM_KOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_search.form.cmb_use_yn","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_cont.form.div_cont.form.div_right.form.cal_birth_dt","value","ds_list","BIRTH_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cont.form.div_cont.form.div_right.form.cmb_care_grp","value","ds_list","CARE_GRP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUA002CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUA002CT.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUA002CT.xfdl","lib::lib_SHA256.xjs");
        this.registerScript("NUA002CT.xfdl", function() {
        /***********************************************************************
         * 화면ID   : NUA002CT.xfdl
         * 화면명   : 사용자등록
         * 화면설명 :
         * 작성일   : 2021-06-14 10:32
         * 작성자   : SOOIM
         * 수정이력 :
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *  2021.06.14		SOOIM		유저정보로 해당 고객사만 조회
         ***********************************************************************
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/
        this.executeIncludeScript("lib::lib_SHA256.xjs"); /*include "lib::lib_SHA256.xjs"*/
        //include "lib::sct_file.xjs"
        this.fileGroupId = "";
        this.pgmId = nexacro.getApplication().gv_curWinKey;
        this.updateCheck = "";
        this.insertCheck = "";
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_currentDS = this.ds_list;
        this.fv_currentGrid = this.div_cont.form.div_cont.form.div_left.form.grd_list;
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
        	//상태삭제순번컬럼 고정
        	this.div_cont.form.div_cont.form.div_left.form.grd_list.setFormatColProperty(2, "band", "left");

        	//rowTypeValidation 설정
        	var dsArr = ["ds_list"];
        	this.gfn_rowTypeValidationDs(dsArr);


        	//drag 버튼 활성화
        	this.gfn_setDivDrag(this.div_cont.form.div_cont.form.btn_gHMove, this.div_cont.form.div_cont.form.div_left, this.div_cont.form.div_cont.form.div_right);

        	this.div_search.form.edt_user_id.setFocus();
        };

        /***********************************************************************
         * Common Button Functions
         ************************************************************************/
        // 조회 버튼
        this.fn_searchBtn = function ()
        {
        	this.fn_search();
        };
        //삭제 버튼
        this.fn_deleteBtn = function ()
        {
        	this.fn_delete();
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
             if(Sct.Grid.isUpdate(this.div_cont.form.div_cont.form.div_left.form.grd_list)){
                 //메세지로 변경된 데이터 여부와 상관없이 조회 할지 확인
                 if(!Sct.confirm(this,"000171","")){
        			this.div_cont.form.div_cont.form.div_right.setFocus();
                     return false;
                 }
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
        	var keyArr = ["COMPANY_CD", "USER_ID","SERVICE_TP"];
        	if(!this.gfn_duplicateCheck(this.ds_list, keyArr)) return false;

        	//저장하시겠습니까?
        	if(!Sct.confirm(this, "000038", "")) return false;

        	//데이터 저장전 저장할 key 값 dataset 변수에 저장
        	this.gfn_saveKeyArr(this.ds_list, keyArr);

        	return true;
        };


        // 삭제 전 validation
        this.fn_delete_pre = function ()
        {
        	//변경여부
        	if (!Sct.Grid.hasDeletedRow(this.ds_list))
        	{
        		Sct.alert(this, "000150"); //삭제할 데이터가 없습니다.
        		return false;
        	}

        	//다른상태값 존재여부
        	if(!Sct.Grid.hasDifferentRowType(this.ds_list, Dataset.ROWTYPE_DELETE))
        	{
        		Sct.alert(this, "000239"); //삭제작업 외 다른 작업상태가 존재합니다.
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
        	var argument = "method=getList "
        		+ "sqlId=NUA002CT.NUA002CT_DS_LIST_S ";


        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //저장
        this.fn_save = function ()
        {
        	//validation
        	if(!this.fn_save_pre()) return;

        	for(var i=0; i<this.ds_list.rowcount; i++){
        		if(this.ds_list.getRowType(i)==2){
        			this.ds_list.setColumn(i,"USER_PASSWD",sha256_digest(this.ds_list.getColumn(this.ds_list.rowposition,"USER_PASSWD")));
        		}
        	}

        	var svcId = "save";
        	var params = "/NUA002CTController.do";
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

        	var svcId = "delete";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_list:U";
        	var outDatasets = "";
        	var argument = "method=delete "
        		+ "sqlId=CMA002CT.CMA002CT_DS_LIST_D ";

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
        			//저장후 조회후 변경된 row로 rowposition 설정

        			this.gfn_saveAfterFindRow(this.ds_list);
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
         * Popup Functions
         ***********************************************************************/
        this.fn_chgPass = function (obj, e)
        {
        	Sct.popup(this, "SMD060CT_PP", 326, 226, "", "", "SM_POP::SMD060CT_PP.xfdl", "fn_popCallback2");

        };
        this.fn_popCallback2 = function (popid) {


        	var keyArr = ["COMPANY_CD", "USER_ID"];
        	this.gfn_saveKeyArrCurrentRow(this.ds_list, keyArr);
        	this.fn_search();

        };



        /***********************************************************************
         * User Functions
         ***********************************************************************/
        //비밀번호 관련 Component 제어
        this.fn_passWdEnabled = function(bool)
        {

        	//bool = true  : 입력모드
        	//bool = false : 수정모드
        	this.div_cont.form.div_cont.form.div_right.form.edt_user_passwd.set_enable(bool);
        	this.div_cont.form.div_cont.form.div_right.form.btn_chgpass.set_visible(!bool);
        	if(bool)	this.div_cont.form.div_cont.form.div_right.form.edt_user_passwd.set_width(144);
        	else		this.div_cont.form.div_cont.form.div_right.form.edt_user_passwd.set_width(100);
        }

        // 기본정보의 사원번호, 직급명, 소속선박, 소속부서의 cssclass 변경
        this.fn_setCsscalss = function(v)
        {
        	this.div_cont.form.div_head.form.edt_user_no.set_cssclass(v);
        	this.div_cont.form.div_head.form.cmb_grade_cd.set_cssclass(v);
        	this.div_cont.form.div_head.form.cmb_vessel.set_cssclass(v);
        	this.div_cont.form.div_head.form.edt_dept_nm.set_cssclass(v);
        };

        // id체크
        this.fn_checkId = function(sValue)
        {
        	var sRtn = "N";

        	// Regular expression pattern
        	var sRegExp = "[A-za-z0-9]{0,}";

        	// Create regular expression object
        	var objRegExp = new RegExp(sRegExp, "i");

        	// Validate ID
        	var objResult = objRegExp.exec(sValue);

        	if(objResult == null)
        	{
        		sRtn = "N";
        	}
        	else
        	{
        		if((objResult.index == 0) && (objResult == sValue)) sRtn = "Y";
        		else sRtn = "N";
        	}

        	return sRtn;
        };

        // Email 체크(미완)
        this.fn_checkEmail = function(sValue)
        {
        	var sRtn = "N";

        	// Regular expression pattern
        	var sRegExp = "[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$";

        	// Create regular expression object
        	var objRegExp = new RegExp(sRegExp, "i");

        	// Validate ID
        	var objResult = objRegExp.exec(sValue);

        	if(objResult == null)
        	{
        		sRtn = "N";
        	}
        	else
        	{
        		if((objResult.index == 0) && (objResult == sValue)) sRtn = "Y";
        		else sRtn = "N";
        	}

        	return sRtn;
        };
        /***********************************************************************
         * FILE
         ***********************************************************************/
        //사인 업로드
        this.fn_signUpload = function(obj,e){

        	if(this.ds_list.rowcount == 0) return;
        	this.fileGroupId = Sct.Util.isEmpty(this.ds_list.getColumn(this.ds_list.rowposition, "FILE_GRP_ID")) ? "" : this.ds_list.getColumn(this.ds_list.rowposition, "FILE_GRP_ID");
        	var param = {
        		folderName:"SIGN",
        		multiYn : "N"
        	};
        	Sct.popup(this, "SIGN", 326, 226, "", param, "CM_POP::FILEUPLOAD.xfdl", "fn_fileUploadPopupCallback");
        }
        //사진 업로드
        this.fn_imgUpload = function(obj,e)
        {
        	if(this.ds_list.rowcount == 0) return;
        	this.fileGroupId = Sct.Util.isEmpty(this.ds_list.getColumn(this.ds_list.rowposition, "FILE_GRP_ID2")) ? "" : this.ds_list.getColumn(this.ds_list.rowposition, "FILE_GRP_ID2");

        	var param = {
        		folderName:"PHOTO",
        		multiYn : "N"
        	};

        	Sct.popup(this, "PHOTO", 326, 226, "", param, "CM_POP::FILEUPLOAD.xfdl", "fn_fileUploadPopupCallback");
        };
        //파일팝업 콜백
        this.fn_fileUploadPopupCallback = function (popid, strDs)
        {
        	var objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	var sRow = this.ds_list.rowposition;
        	if(popid == "SIGN"){
        		var dataGrpId = this.ds_list.getColumn(sRow, "FILE_GRP_ID");
        		if (this.ds_list.getColumn(sRow, "FILE_REAL_NAME") != objDs.getColumn(0, "FILE_REAL_NAME")) {
        			this.ds_list.setColumn(sRow, "FILE_GRP_ID", objDs.getColumn(0, "FILE_GRP_ID"));
        			this.ds_list.setColumn(sRow, "FILE_REAL_NAME", objDs.getColumn(0, "FILE_REAL_NAME"));
        			this.fn_getSignImage();
        		}
        	}
        	if(popid == "PHOTO"){
        		var dataGrpId = this.ds_list.getColumn(sRow, "FILE_GRP_ID2");
        		if (this.ds_list.getColumn(sRow, "FILE_REAL_NAME2") != objDs.getColumn(0, "FILE_REAL_NAME")) {
        			this.ds_list.setColumn(sRow, "FILE_GRP_ID2", objDs.getColumn(0, "FILE_GRP_ID"));
        			this.ds_list.setColumn(sRow, "FILE_REAL_NAME2", objDs.getColumn(0, "FILE_REAL_NAME"));
        			this.fn_getSignImage();
        		}
        	}
        }

        //이미지 조회
        this.fn_getSignImage = function ()
        {
        	var imgUrl = "";
        	var sRow = this.ds_list.rowposition;
        	var fileGrp = this.ds_list.getColumn(sRow, "FILE_REAL_NAME");
        	var fileGrp2 = this.ds_list.getColumn(sRow, "FILE_REAL_NAME2");
        	if(!Sct.Util.isEmpty(fileGrp))
        	{
        		var webHost = location.origin; //http://localhost:8080
        		var path = "/Argos/FILES";
        		imgUrl = webHost + path + fileGrp;
        		this.div_cont.form.div_cont.form.div_right.form.imv_sign.set_image(imgUrl);
        	}
        	if(!Sct.Util.isEmpty(fileGrp2))
        	{
        		var webHost = location.origin; //http://localhost:8080
        		var path = "/Argos/FILES";
        		imgUrl = webHost + path + fileGrp2;
        		this.div_cont.form.div_cont.form.div_right.form.imv_photo.set_image(imgUrl);
        	}

        };

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        this.ds_list_oncolumnchanged = function (obj, e)
        {

        	var columnId = e.columnid;
        	if (columnId == "USER_NO")
        	{
        		obj.setColumn(obj.rowposition, "USER_NO_TEMP", e.oldvalue);
        	}

        };

        this.ds_list_onrowposchanged = function (obj, e)
        {


        	//추가행인지 여부
        	var boolInserted = (obj.getRowType(e.newrow) == Dataset.ROWTYPE_INSERT);
        	//추가행일경우 키값 입력가능
        	this.div_cont.form.div_cont.form.div_right.form.edt_user_id.set_readonly(!boolInserted);
        	//추가행일경우 비밀번호 입력가능
        	this.fn_passWdEnabled(boolInserted);
        	//fileGroupId 설정
        	//this.fileGroupId = Sct.Util.isEmpty(this.ds_list.getColumn(e.newrow, "FILE_GRP_ID")) ? "" : this.ds_list.getColumn(e.newrow, "FILE_GRP_ID");
        	//사인이미지 가져오기
        	this.div_cont.form.div_cont.form.div_right.form.imv_photo.set_image("");
        	this.div_cont.form.div_cont.form.div_right.form.imv_sign.set_image("");
        	this.fn_getSignImage();

        	var inoutUserTp = obj.getColumn(e.newrow, "INOUT_USER_TP")



        };

        //행추가
        this.fn_addRow = function(obj,e)
        {
        	var nRow = this.ds_list.addRow();

        	//초기값 설정
        	this.ds_list.setColumn(nRow, "COMPANY_CD",fv_Company);
        	this.ds_list.setColumn(nRow, "SERVICE_TP",fv_ServiceTp);
        	this.ds_list.setColumn(nRow,  'USE_YN', 'Y');
        	this.ds_list.setColumn(nRow, "HIRE_DT", Sct.Util.getToday());

        	//USER ID FOCUS
        	this.div_cont.form.div_head.form.edt_userid.setFocus();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.div_search.form.cmb_use_yn.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_cont.form.div_right.form.btn_chgpass.addEventHandler("onclick",this.fn_chgPass,this);
            this.div_cont.form.div_cont.form.div_right.form.sta_user_nm_kor.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_cont.form.div_right.form.sta_address.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_cont.form.div_right.form.sta_ref_user_id.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_cont.form.div_right.form.sta_service_tp.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_cont.form.div_right.form.sta_dept_nm.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_cont.form.div_right.form.sta_sal_cd.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_cont.form.div_right.form.sta_tel_no2.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_cont.form.div_right.form.btn_sign00.addEventHandler("onclick",this.fn_imgUpload,this);
            this.div_cont.form.div_cont.form.div_right.form.btn_sign.addEventHandler("onclick",this.fn_signUpload,this);
            this.div_cont.form.div_cont.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_cont.form.div_left.form.btn_addrow.addEventHandler("onclick",this.fn_addRow,this);
            this.btn_sMove.addEventHandler("onclick",this.search_reset,this);
            this.btn_sMove.addEventHandler("ondrag",this.search_resize,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
            this.ds_list.addEventHandler("onrowposchanged",this.ds_list_onrowposchanged,this);
            this.ds_search.addEventHandler("onrowposchanged",this.ds_notice_onrowposchanged,this);
        };
        this.loadIncludeScript("NUA002CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
