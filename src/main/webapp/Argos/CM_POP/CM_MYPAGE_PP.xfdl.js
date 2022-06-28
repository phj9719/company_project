(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CM_MYPAGE_PP");
            this.set_titletext("마이페이지");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PASSWD\" type=\"STRING\" size=\"256\"/><Column id=\"RANK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SAL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM_CHI\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INOUT_USER_TP\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO2\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"DEF_LANG\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH1\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH2\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH3\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH4\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH5\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTH_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HIRE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RETIRE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CARE_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"VALID_PERIOD_FR\" type=\"STRING\" size=\"256\"/><Column id=\"VALID_PERIOD_TO\" type=\"STRING\" size=\"256\"/><Column id=\"VALID_PASSWD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_REAL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_REAL_NAME2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_fileGrp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"FILE_GRP_ID\" type=\"string\" size=\"12\"/><Column id=\"FILE_GRP_NM\" type=\"string\" size=\"100\"/><Column id=\"FILE_FOLDER\" type=\"string\" size=\"10\"/><Column id=\"REG_USER\" type=\"string\" size=\"32\"/><Column id=\"REG_DTM\" type=\"date\" size=\"7\"/><Column id=\"MOD_USER\" type=\"string\" size=\"32\"/><Column id=\"MOD_DTM\" type=\"date\" size=\"7\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileGrpId", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"FILE_GRP_ID\" type=\"string\" size=\"12\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_care_grp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_main","0","11",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sign","541","330","134","18",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("21");
            obj.set_text("사인 등록");
            obj.set_visible("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static60","20","16","120","22",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("24");
            obj.set_text("나의 정보");
            obj.set_cssclass("lb01");
            this.div_main.addChild(obj.name, obj);

            obj = new ImageViewer("imv_sign","541","194","134","135",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("23");
            obj.set_stretch("fixaspectratio");
            obj.set_visible("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static05_00","20","235","519","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00","20","39","519","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00","20","67","519","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00_00","20","95","519","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00_00_00","20","123","519","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00_00_00_00","20","151","519","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00_00_00_00_00","20","179","519","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_user_passwd","20","95","106","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("32");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_user_passwd","131","99","144","21",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("4");
            obj.set_cssclass("essential");
            obj.set_password("false");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_chgpass","239","98","36","23",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("19");
            obj.set_text("변경");
            obj.set_visible("false");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_user_nm_kor","280","95","106","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("33");
            obj.set_text("성명(한글)");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_user_nm_kor","390","99","144","21",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("5");
            obj.set_cssclass("essential");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_user_id","20","67","106","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("34");
            obj.set_text("유저ID");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_user_no","20","123","106","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("35");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00_00_00_00_00_00","20","207","519","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static05_00_00","20","263","519","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_address","131","267","403","21",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("15");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_address","20","263","106","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("38");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01","20","291","519","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_hire_dt","20","291","106","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("40");
            obj.set_text("입사일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_visible("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_retire_dt","280","291","106","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("41");
            obj.set_text("퇴사일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_visible("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Calendar("cal_hire_dt","131","295","144","21",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_visible("true");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Calendar("cal_retire_dt","390","295","144","21",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_visible("true");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static05_00_01","20","319","519","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("cmb_use_yn","131","323","144","21",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("18");
            obj.set_innerdataset("ds_use_yn");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_cssclass("essential");
            obj.set_readonly("true");
            obj.set_index("-1");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_use_yn","20","319","106","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("43");
            obj.set_text("사용유무");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_rank_cd","20","151","106","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("44");
            obj.set_text("담당직종");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_tel_no","280","179","106","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("45");
            obj.set_text("연락처1");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_birth_dt","20","207","106","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("46");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_zip_code","20","235","106","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("47");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_userpasswd00_00","20","39","106","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("48");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_ref_user_id","280","67","106","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("49");
            obj.set_text("타운영시스템ID");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_service_tp","280","39","106","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("50");
            obj.set_text("서비스유형");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("cmb_service_tp","390","43","144","21",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_cm_service_tp");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_cssclass("essential");
            obj.set_readonly("true");
            obj.set_index("-1");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("cmb_sal_cd","390","155","144","21",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_cm_sal_cd");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_readonly("true");
            obj.set_index("-1");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("cmb_rank_cd","131","155","144","21",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_cm_rank_cd");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_readonly("true");
            obj.set_index("-1");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_dept_nm","280","123","106","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("51");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_sal_cd","280","151","106","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("52");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_tel_no2","280","207","106","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("53");
            obj.set_text("연락처2");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_zip_code","131","239","144","21",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("14");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_ref_user_id","390","71","144","21",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_company_cd","131","43","144","21",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_cssclass("essential");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_user_id","131","71","144","21",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("2");
            obj.set_cssclass("essential");
            obj.set_readonly("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_user_no","131","127","144","21",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("6");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_dept_nm","390","127","144","21",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("7");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_tel_no","390","183","144","21",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("11");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_tel_no2","390","211","144","21",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("13");
            this.div_main.addChild(obj.name, obj);

            obj = new Calendar("cal_birth_dt","131","211","144","21",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_visible("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_rank_cd00","20","179","106","29",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("54");
            obj.set_text("케어그룹");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("cmb_care_grp","131","183","144","21",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_nu_care_grp");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_readonly("true");
            obj.set_index("-1");
            this.div_main.addChild(obj.name, obj);

            obj = new ImageViewer("imv_photo","541","39","134","135",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("55");
            obj.set_stretch("fixaspectratio");
            obj.set_visible("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_sign00","541","175","134","18",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("20");
            obj.set_text("사진 등록");
            obj.set_visible("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_save","603","13","71","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("22");
            obj.set_text("수정");
            obj.set_cssclass("btn_com_update");
            this.div_main.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_main.form.edt_user_passwd","value","ds_list","USER_PASSWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_main.form.edt_address","value","ds_list","ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_main.form.edt_user_nm_kor","value","ds_list","USER_NM_KOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_main.form.cal_hire_dt","value","ds_list","HIRE_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_main.form.cal_retire_dt","value","ds_list","RETIRE_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_main.form.cmb_use_yn","value","ds_list","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_main.form.cmb_service_tp","value","ds_list","SERVICE_TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_main.form.cmb_sal_cd","value","ds_list","SAL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_main.form.cmb_rank_cd","value","ds_list","RANK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_main.form.edt_zip_code","value","ds_list","ZIP_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_main.form.edt_ref_user_id","value","ds_list","REF_USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_main.form.edt_company_cd","value","ds_list","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_main.form.edt_user_id","value","ds_list","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_main.form.edt_user_no","value","ds_list","USER_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_main.form.edt_dept_nm","value","ds_list","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_main.form.edt_tel_no","value","ds_list","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_main.form.edt_tel_no2","value","ds_list","TEL_NO2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_main.form.cal_birth_dt","value","ds_list","BIRTH_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_main.form.cmb_care_grp","value","ds_list","CARE_GRP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CM_MYPAGE_PP.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("CM_MYPAGE_PP.xfdl","lib::pgm_com.xjs");
        this.registerScript("CM_MYPAGE_PP.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: CM_MYPAGE_PP
         * 화면명   	: 마이페이지
         * 화면설명 	: 관리자웹에서 자신의 정보를 수정하기 위한 마이페이지
         * 작성일   	: 2021-11-03 09:00
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *  수정일				수정자			내용
         *
         ***********************************************************************
        /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.CM_MYPAGE_PP_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);
        	nexacro.getApplication().gv_curWinKey = "CM_MYPAGE_PP";
        	this.ds_search.setColumn(0, "COMPANY_CD", nexacro.getApplication().gds_userInfo.getColumn(0, "COMPANY_CD"));
        	this.ds_search.setColumn(0, "USER_ID", nexacro.getApplication().gds_userInfo.getColumn(0, "USER_ID"));
        	this.fn_search();

        	// 오픈시 사번에 커서 이동
        	this.div_main.form.edt_user_no.setFocus();
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //조회
        this.fn_search = function ()
        {
        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_search";
        	var outDatasets = "ds_list=output1";
        	var argument = "method=getList "
        		+ "sqlId=CM_MYPAGE_PP.CM_MYPAGE_PP_DS_LIST_S ";


        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //저장
        this.fn_save = function ()
        {
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

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			this.fn_passWdEnabled(false);
        			this.fn_getSignImage();
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
        		this.div_main.form.imv_sign.set_image(imgUrl);
        	}
        	if(!Sct.Util.isEmpty(fileGrp2))
        	{
        		var webHost = location.origin; //http://localhost:8080
        		var path = "/Argos/FILES";
        		imgUrl = webHost + path + fileGrp2;
        		this.div_main.form.imv_photo.set_image(imgUrl);
        	}

        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/
        //비밀번호 관련 Component 제어
        this.fn_passWdEnabled = function(bool)
        {
        	//bool = true  : 입력모드
        	//bool = false : 수정모드
        	this.div_main.form.edt_user_passwd.set_enable(bool);
        	this.div_main.form.btn_chgpass.set_visible(!bool);
        	if(bool)	this.div_main.form.edt_user_passwd.set_width(144);
        	else		this.div_main.form.edt_user_passwd.set_width(100);
        };

        // 수정버튼
        this.div_main_btn_save_onclick = function(obj,e)
        {
        	this.fn_save();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CM_MYPAGE_PP_onload,this);
            this.div_main.form.btn_sign.addEventHandler("onclick",this.fn_signUpload,this);
            this.div_main.form.btn_chgpass.addEventHandler("onclick",this.fn_chgPass,this);
            this.div_main.form.sta_user_nm_kor.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_main.form.sta_address.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_main.form.sta_ref_user_id.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_main.form.sta_service_tp.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_main.form.sta_dept_nm.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_main.form.sta_sal_cd.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_main.form.sta_tel_no2.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_main.form.btn_sign00.addEventHandler("onclick",this.fn_imgUpload,this);
            this.div_main.form.btn_save.addEventHandler("onclick",this.div_main_btn_save_onclick,this);
            this.ds_search.addEventHandler("onrowposchanged",this.ds_notice_onrowposchanged,this);
        };
        this.loadIncludeScript("CM_MYPAGE_PP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
