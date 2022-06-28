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
            this.set_titletext("입소자등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_head", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEX\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"INT\" size=\"256\"/><Column id=\"BIRTHDAY2\" type=\"STRING\" size=\"256\"/><Column id=\"CELLPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"DEMENTIA_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FALL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BEDSORE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTER_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RETIRE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR3\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR4\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWNUM\" type=\"INT\" size=\"256\"/><Column id=\"SCH_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_REAL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LONG_TERM_CARE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CARE_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"POSTURE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISEASE\" type=\"STRING\" size=\"256\"/><Column id=\"MEAL1\" type=\"STRING\" size=\"256\"/><Column id=\"MEAL2\" type=\"STRING\" size=\"256\"/><Column id=\"MEAL3\" type=\"STRING\" size=\"256\"/><Column id=\"MEAL4\" type=\"STRING\" size=\"256\"/><Column id=\"MEAL5\" type=\"STRING\" size=\"256\"/><Column id=\"MEAL6\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC1\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC2\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC3\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC4\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC5\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC6\" type=\"STRING\" size=\"256\"/><Column id=\"DIET1\" type=\"STRING\" size=\"256\"/><Column id=\"DIET2\" type=\"STRING\" size=\"256\"/><Column id=\"DIET3\" type=\"STRING\" size=\"256\"/><Column id=\"DIET4\" type=\"STRING\" size=\"256\"/><Column id=\"JU1\" type=\"STRING\" size=\"256\"/><Column id=\"JU2\" type=\"STRING\" size=\"256\"/><Column id=\"FAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FAM_CON\" type=\"STRING\" size=\"256\"/><Column id=\"FAM_TEL1\" type=\"STRING\" size=\"256\"/><Column id=\"FAM_TEL2\" type=\"STRING\" size=\"256\"/><Column id=\"FAM_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"FAM_CON1\" type=\"STRING\" size=\"256\"/><Column id=\"FAM_TEL11\" type=\"STRING\" size=\"256\"/><Column id=\"FAM_TEL12\" type=\"STRING\" size=\"256\"/><Column id=\"FAM_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"FAM_CON2\" type=\"STRING\" size=\"256\"/><Column id=\"FAM_TEL21\" type=\"STRING\" size=\"256\"/><Column id=\"FAM_TEL22\" type=\"STRING\" size=\"256\"/><Column id=\"FAM_NM3\" type=\"STRING\" size=\"256\"/><Column id=\"FAM_CON3\" type=\"STRING\" size=\"256\"/><Column id=\"FAM_TEL31\" type=\"STRING\" size=\"256\"/><Column id=\"FAM_TEL32\" type=\"STRING\" size=\"256\"/><Column id=\"APP_PW\" type=\"STRING\" size=\"256\"/><Column id=\"TOS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"JU1_PW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_files", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ROWIDX\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"BLOB_FILE\" type=\"BLOB\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_download", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BLOB_FILE\" type=\"BLOB\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileGrp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"FILE_GRP_ID\" type=\"string\" size=\"12\"/><Column id=\"FILE_GRP_NM\" type=\"string\" size=\"100\"/><Column id=\"FILE_FOLDER\" type=\"string\" size=\"10\"/><Column id=\"REG_USER\" type=\"string\" size=\"32\"/><Column id=\"REG_DTM\" type=\"date\" size=\"7\"/><Column id=\"MOD_USER\" type=\"string\" size=\"32\"/><Column id=\"MOD_DTM\" type=\"date\" size=\"7\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileGrpId", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"FILE_GRP_ID\" type=\"string\" size=\"12\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"ENTER_GB\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_age_grade", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"STR1\" type=\"STRING\" size=\"256\"/><Column id=\"STR2\" type=\"STRING\" size=\"256\"/><Column id=\"STR3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_sex", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_grade", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CELLPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"CELLPHONE2\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR3\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR4\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_FAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_use_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_room", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_sch_grade", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area_i", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_TP\" type=\"STRING\" size=\"256\"/><Column id=\"UES_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location_i", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_TP\" type=\"STRING\" size=\"256\"/><Column id=\"UES_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location_all", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_TP\" type=\"STRING\" size=\"256\"/><Column id=\"UES_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_care_grp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_enter_gb", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">A</Col><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">E</Col><Col id=\"CODE_NM\">입소자</Col></Row><Row><Col id=\"CODE\">R</Col><Col id=\"CODE_NM\">퇴소자</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","120",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","443",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_border("0px solid rgba(0,0,0,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1)");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_head","0","30",null,null,"0","40",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_head");
            obj.set_autoenter("select");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell expandchar=\"status\"/><Cell col=\"1\" expandchar=\"delete\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"입소자성명\"/><Cell col=\"4\" text=\"성별\"/><Cell col=\"5\" text=\"생년월일\"/><Cell col=\"6\" text=\"나이\"/><Cell col=\"7\" text=\"생일\"/><Cell col=\"8\" text=\"전화번호\"/><Cell col=\"9\" text=\"등급\"/><Cell col=\"10\" text=\"치매전담\"/><Cell col=\"11\" text=\"낙상위험\"/><Cell col=\"12\" text=\"욕창위험\"/><Cell col=\"13\" text=\"자세변경\"/><Cell col=\"14\" text=\"주요질환\"/><Cell col=\"15\" text=\"층\"/><Cell col=\"16\" text=\"생활실\" displaytype=\"normal\"/><Cell col=\"17\" text=\"입소자코드\"/><Cell col=\"18\" text=\"입소일\"/><Cell col=\"19\" text=\"퇴소일\"/><Cell col=\"20\" text=\"장기요양인정번호\"/><Cell col=\"21\" text=\"케어그룹\"/><Cell col=\"22\" text=\"학력\"/><Cell col=\"23\" text=\"우편번호\"/><Cell col=\"24\" text=\"주소\"/><Cell col=\"25\" text=\"일반식\" displaytype=\"normal\"/><Cell col=\"26\" text=\"죽식\" displaytype=\"normal\"/><Cell col=\"27\" text=\"유동(경관)식\" displaytype=\"normal\"/><Cell col=\"28\" text=\"갈은식\" displaytype=\"normal\"/><Cell col=\"29\" text=\"다진식\" displaytype=\"normal\"/><Cell col=\"30\" text=\"미음\" displaytype=\"normal\"/><Cell col=\"31\" text=\"저작곤란\" displaytype=\"normal\"/><Cell col=\"32\" text=\"연하곤란\" displaytype=\"normal\"/><Cell col=\"33\" text=\"소화불량\" displaytype=\"normal\"/><Cell col=\"34\" text=\"당뇨\" displaytype=\"normal\"/><Cell col=\"35\" text=\"위관영양\" displaytype=\"normal\"/><Cell col=\"36\" text=\"기타장애\" displaytype=\"normal\"/><Cell col=\"37\" text=\"체중조절식\" displaytype=\"normal\"/><Cell col=\"38\" text=\"당뇨식\" displaytype=\"normal\"/><Cell col=\"39\" text=\"저염식\" displaytype=\"normal\"/><Cell col=\"40\" text=\"고단백식\" displaytype=\"normal\"/><Cell col=\"41\" text=\"등록자ID\"/><Cell col=\"42\" text=\"등록자명\"/><Cell col=\"43\" text=\"등록일자\"/><Cell col=\"44\" text=\"수정자명\"/><Cell col=\"45\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"bind:ROWNUM\"/><Cell col=\"3\" text=\"bind:NAME\"/><Cell col=\"4\" text=\"bind:SEX\" combodataset=\"ds_nu_sex\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" displaytype=\"combotext\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:BIRTHDAY\"/><Cell col=\"6\" text=\"bind:AGE\"/><Cell col=\"7\" text=\"bind:BIRTHDAY2\" displaytype=\"date\"/><Cell col=\"8\" text=\"bind:CELLPHONE\"/><Cell col=\"9\" text=\"bind:GRADE\" displaytype=\"combotext\" combodataset=\"ds_nu_grade\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"10\" text=\"bind:DEMENTIA_YN\" displaytype=\"combotext\" combodataset=\"ds_cm_use_yn\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"11\" text=\"bind:FALL_YN\" displaytype=\"combotext\" combodataset=\"ds_cm_use_yn\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"12\" displaytype=\"combotext\" text=\"bind:BEDSORE_YN\" combodataset=\"ds_cm_use_yn\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"13\" displaytype=\"combotext\" text=\"bind:POSTURE_YN\" combodataset=\"ds_cm_use_yn\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"14\" text=\"bind:DISEASE\"/><Cell col=\"15\" text=\"bind:AREA\" combocodecol=\"ARE_CD\" combodatacol=\"ARE_NM\" combodataset=\"ds_area\" displaytype=\"combotext\"/><Cell col=\"16\" text=\"bind:LOCATION\" combocodecol=\"LOC_CD\" combodatacol=\"LOC_NM\" combodataset=\"ds_location_all\" displaytype=\"combotext\"/><Cell col=\"17\" text=\"bind:RES_ID\"/><Cell col=\"18\" text=\"bind:ENTER_DT\" displaytype=\"date\"/><Cell col=\"19\" text=\"bind:RETIRE_DT\" displaytype=\"date\"/><Cell col=\"20\" text=\"bind:LONG_TERM_CARE_NO\"/><Cell col=\"21\" displaytype=\"combotext\" combodataset=\"ds_nu_care_grp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"22\" displaytype=\"combotext\" text=\"bind:SCH_GRADE\" combodataset=\"ds_nu_sch_grade\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"23\" text=\"bind:ZIP_CODE\"/><Cell col=\"24\" text=\"bind:ADDRESS\"/><Cell col=\"25\" displaytype=\"checkboxcontrol\" text=\"bind:MEAL1\"/><Cell col=\"26\" displaytype=\"checkboxcontrol\" text=\"bind:MEAL2\"/><Cell col=\"27\" displaytype=\"checkboxcontrol\" text=\"bind:MEAL3\"/><Cell col=\"28\" displaytype=\"checkboxcontrol\" text=\"bind:MEAL4\"/><Cell col=\"29\" displaytype=\"checkboxcontrol\" text=\"bind:MEAL5\"/><Cell col=\"30\" displaytype=\"checkboxcontrol\" text=\"bind:MEAL6\"/><Cell col=\"31\" displaytype=\"checkboxcontrol\" text=\"bind:FUNC1\"/><Cell col=\"32\" displaytype=\"checkboxcontrol\" text=\"bind:FUNC2\"/><Cell col=\"33\" displaytype=\"checkboxcontrol\" text=\"bind:FUNC3\"/><Cell col=\"34\" displaytype=\"checkboxcontrol\" text=\"bind:FUNC4\"/><Cell col=\"35\" displaytype=\"checkboxcontrol\" text=\"bind:FUNC5\"/><Cell col=\"36\" displaytype=\"checkboxcontrol\" text=\"bind:FUNC6\"/><Cell col=\"37\" displaytype=\"checkboxcontrol\" text=\"bind:DIET1\"/><Cell col=\"38\" displaytype=\"checkboxcontrol\" text=\"bind:DIET2\"/><Cell col=\"39\" displaytype=\"checkboxcontrol\" text=\"bind:DIET3\"/><Cell col=\"40\" displaytype=\"checkboxcontrol\" text=\"bind:DIET4\"/><Cell col=\"41\" text=\"bind:REG_USER\"/><Cell col=\"42\" text=\"bind:REG_USER_NM\"/><Cell col=\"43\" text=\"bind:REG_DT\" displaytype=\"date\"/><Cell col=\"44\" text=\"bind:MOD_USER_NM\"/><Cell col=\"45\" displaytype=\"date\" text=\"bind:MOD_DT\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("statc_divcont_title","0","7","200","22",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_text("입소자조회");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_addrow",null,"0","80","29","0",null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("2");
            obj.set_text("행추가");
            obj.set_visible("true");
            obj.set_cssclass("btn_com_add");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_paging","0",null,null,"30","0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("3");
            obj.set_url("CM_POP::CM_PAGING_DIV.xfdl");
            obj.set_text("");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_gMove","443","52.73%","25","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_icon("URL(\'imagerc::grid_horizontal.png\')");
            obj.set_background("transparent");
            obj.set_borderRadius("10px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_right","468","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_border("0px solid rgba(0,0,0,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1)");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_head","0","0",null,null,"30","0",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_DetailBg");
            obj.set_border("0px solid rgba(120,120,120,1)");
            obj.set_font("9pt \"Malgun Gothic\"");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","114","728","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("104");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_alert","97","9","422","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("85");
            obj.set_text("※퇴소일 등록시 보호자의 계정은 비활성화 됩니다.");
            obj.set_cssclass("sta_alert");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static07","0","225","728","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static04_00","0","197","728","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static02","0","30","728","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static00","0","58","728","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static01","0","86","728","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static04","0","169","728","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static05","0","142","728","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static06","0","253","728","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Button("btn_register","618","153","84","16",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("55");
            obj.set_text("등록");
            obj.set_visible("true");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new ImageViewer("imv_sign","591","30","137","123",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("69");
            obj.set_stretch("fixaspectratio");
            obj.set_visible("true");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_name","0","30","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("57");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_sex","232","30","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("58");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_age","232","58","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("59");
            obj.set_text("나이");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_wish_embark","464","30","128","140",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("61");
            obj.set_text("입소자 사진");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_fall","0","169","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("62");
            obj.set_text("낙상위험");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_birthday","0","58","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("68");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static60","0","7","100","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("74");
            obj.set_text("입소자등록");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_grade","0","141","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("75");
            obj.set_text("등급");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Calendar("cal_birthday","103","62","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_cssclass("essential");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_area_i","0","225","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("82");
            obj.set_text("층");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_birthday2","0","86","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("60");
            obj.set_text("생일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_dementia","232","141","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("76");
            obj.set_text("치매전담");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_bedsore","232","169","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("77");
            obj.set_text("욕창위험");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_location_i","232","225","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("79");
            obj.set_text("생활실");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_cellphone","232","86","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("81");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_name","103","34","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("0");
            obj.set_readonly("false");
            obj.set_cssclass("essential");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Calendar("cal_birthday2","103","90","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd ddd");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_age","335","62","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("3");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_cellphone","335","90","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("5");
            obj.set_readonly("false");
            obj.set_inputtype("normal");
            obj.set_inputfilter("comma,alpha,dot,sign,space,symbol");
            obj.set_maxlength("11");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Combo("cmb_dementia","335","145","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("9");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_innerdataset("ds_cm_use_yn");
            obj.set_index("-1");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Combo("cmb_bedsore","335","173","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("11");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_innerdataset("ds_cm_use_yn");
            obj.set_index("-1");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Combo("cmb_fall","103","173","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("10");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_innerdataset("ds_cm_use_yn");
            obj.set_index("-1");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Combo("cmb_grade","103","145","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("8");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_innerdataset("ds_nu_grade");
            obj.set_index("-1");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_emerency_phone00_00","464","225","128","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("84");
            obj.set_text("입소자코드");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_email00_01_00_00","595","229","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Radio("rdo_sex","338","32","120","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            obj.set_direction("horizontal");
            obj.set_columncount("0");
            var div_cont_form_div_right_form_div_head_form_rdo_sex_innerdataset = new nexacro.NormalDataset("div_cont_form_div_right_form_div_head_form_rdo_sex_innerdataset", obj);
            div_cont_form_div_right_form_div_head_form_rdo_sex_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남자</Col></Row><Row><Col id=\"codecolumn\">F</Col><Col id=\"datacolumn\">여자</Col></Row></Rows>");
            obj.set_innerdataset(div_cont_form_div_right_form_div_head_form_rdo_sex_innerdataset);
            obj.set_value("1");
            obj.set_index("0");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static06_00","0","281","728","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Combo("cmb_area_i","103","229","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("14");
            obj.set_datacolumn("ARE_NM");
            obj.set_type("filterlike");
            obj.set_cssclass("essential");
            obj.set_innerdataset("ds_area_i");
            obj.set_codecolumn("ARE_CD");
            obj.set_index("-1");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Combo("cmb_location_i","335","229","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("15");
            obj.set_codecolumn("LOC_CD");
            obj.set_datacolumn("LOC_NM");
            obj.set_type("filterlike");
            obj.set_cssclass("essential");
            obj.set_innerdataset("ds_location_i");
            obj.set_index("-1");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","0","309","728","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_enter_date","0","253","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("입소일");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_retire_dt","232","253","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("78");
            obj.set_text("퇴소일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Calendar("cal_enter_date","103","257","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_cssclass("essential");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Calendar("cal_retire_dt","335","257","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("18");
            obj.set_dateformat("yyyy-MM-dd ddd");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_emerency_phone00","464","253","128","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("83");
            obj.set_text("요양시스템 입소자코드");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 8pt/normal \"Noto Sans CJK KR Regular\"");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_email00_01_00_00_00","595","257","128","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("19");
            obj.set_readonly("false");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_sch_grade","464","281","128","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("학력");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Combo("cmb_sch_grade","595","285","128","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("22");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_innerdataset("ds_nu_sch_grade");
            obj.set_index("-1");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_addr","0","309","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("주소");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_cellphone00","0","281","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("88");
            obj.set_text("장기요양인정번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_addr4","405","313","318","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("25");
            obj.set_readonly("false");
            obj.set_displaynulltext("상세주소");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_addr1","252","313","150","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("24");
            obj.set_readonly("false");
            obj.set_displaynulltext("주소");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Button("btn_addr","228","313","21","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("54");
            obj.set_background("url(\'imagerc::btn_WF_SearchSmall_P.png\') no-repeat rgba(255,255,255,1)");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_zip_code","103","313","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("23");
            obj.set_readonly("false");
            obj.set_displaynulltext("우편번호");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_cellphone00","103","285","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("20");
            obj.set_readonly("false");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_posture","0","197","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("자세변경");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_retire_dt00","232","197","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("91");
            obj.set_text("주요질환");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Combo("cmb_posture","103","201","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("12");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_innerdataset("ds_cm_use_yn");
            obj.set_index("-1");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_addr4_00","335","201","389","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("13");
            obj.set_readonly("false");
            obj.set_textAlign("left");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_retire_dt01","232","281","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("92");
            obj.set_text("케어그룹");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Combo("cmb_bedsore00","335","285","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("21");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_innerdataset("ds_nu_care_grp");
            obj.set_index("-1");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00","0","337","728","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_addr00","0","337","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("식사종류");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00","0","365","728","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_addr00_00","0","365","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("기능장애");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00_00","0","393","728","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_addr00_00_00","0","393","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("치료식이");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new CheckBox("chk_meal1","106","341","86","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("26");
            obj.set_text("일반식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new CheckBox("chk_meal2","196","341","80","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("27");
            obj.set_text("죽식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new CheckBox("chk_meal3","286","341","86","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("28");
            obj.set_text("유동(경관)식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new CheckBox("chk_meal4","376","341","80","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("29");
            obj.set_text("갈은식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new CheckBox("chk_meal5","466","341","80","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("30");
            obj.set_text("다진식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new CheckBox("chk_meal6","556","341","86","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("31");
            obj.set_text("미음");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01","106","369","86","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("32");
            obj.set_text("저작곤란");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_01","196","369","80","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("33");
            obj.set_text("연하곤란");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00_01","286","369","86","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("34");
            obj.set_text("소화불량");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00_00_01","376","369","80","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("35");
            obj.set_text("당뇨");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00_00_00_01","466","369","80","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("36");
            obj.set_text("위관영양");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00_00_00_00_00","556","369","86","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("37");
            obj.set_text("기타장애");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01_00","106","397","86","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("38");
            obj.set_text("체중조절식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_01_00","196","397","80","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("39");
            obj.set_text("당뇨식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00_01_00","286","397","86","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("40");
            obj.set_text("저염식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00_00_01_00","376","397","80","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("41");
            obj.set_text("고단백식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","447","150","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("99");
            obj.set_text("보호자 및 가족");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static06_00_01","0","473","728","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_sch_grade00","464","473","128","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("101");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("연락처2");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_retire_dt01_00","232","473","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("102");
            obj.set_text("연락처1");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_cellphone00_00","0","473","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("103");
            obj.set_text("보호자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_cellphone00_00","103","477","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("42");
            obj.set_readonly("false");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_ju1","0","114","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("105");
            obj.set_text("주민번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_age00","190","118","22","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("106");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_ju1","103","118","90","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("6");
            obj.set_readonly("false");
            obj.set_inputtype("normal");
            obj.set_inputfilter("comma,alpha,dot,sign,space,symbol");
            obj.set_maxlength("6");
            obj.set_textAlign("center");
            obj.set_cssclass("essential");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_sch_grade00_00","464","501","128","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("107");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("연락처2");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static06_00_01_00","0","501","728","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("108");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_retire_dt01_00_00","232","501","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("109");
            obj.set_text("연락처1");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_cellphone00_00_00","103","505","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("45");
            obj.set_readonly("false");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_cellphone00_00_00","0","501","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("110");
            obj.set_text("가족명1");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_sch_grade00_00_00","464","529","128","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("111");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("연락처2");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static06_00_01_00_00","0","529","728","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("112");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_retire_dt01_00_00_00","232","529","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("113");
            obj.set_text("연락처1");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_cellphone00_00_00_00","103","533","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("48");
            obj.set_readonly("false");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_cellphone00_00_00_00","0","529","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("114");
            obj.set_text("가족명2");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_sch_grade00_00_00_00","464","557","128","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("115");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("연락처2");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static06_00_01_00_00_00","0","557","728","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_retire_dt01_00_00_00_00","232","557","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("116");
            obj.set_text("연락처1");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_cellphone00_00_00_00_00","103","561","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("51");
            obj.set_readonly("false");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_cellphone00_00_00_00_00","0","557","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("117");
            obj.set_text("가족명3");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_sch_grade00_01","464","501","128","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("118");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("연락처2");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_sch_grade00_01_00","464","529","128","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("119");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("연락처2");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_sch_grade00_01_00_00","464","557","128","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("120");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("연락처2");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_cellphone00_00_01","335","477","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("43");
            obj.set_readonly("false");
            obj.set_inputtype("number");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_cellphone00_00_01_00","335","505","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("46");
            obj.set_readonly("false");
            obj.set_inputtype("number");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_cellphone00_00_01_00_00","335","533","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("49");
            obj.set_readonly("false");
            obj.set_inputtype("number");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_cellphone00_00_01_00_00_00","335","561","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("52");
            obj.set_readonly("false");
            obj.set_inputtype("number");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_cellphone00_00_01_01","595","477","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("44");
            obj.set_readonly("false");
            obj.set_inputtype("number");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_cellphone00_00_01_01_00","595","505","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("47");
            obj.set_readonly("false");
            obj.set_inputtype("number");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_cellphone00_00_01_01_00_00","595","533","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("50");
            obj.set_readonly("false");
            obj.set_inputtype("number");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_cellphone00_00_01_01_00_00_00","595","561","127","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("53");
            obj.set_readonly("false");
            obj.set_inputtype("number");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ju2","212","118","120","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("7");
            obj.set_limitbymask("integer");
            obj.set_type("string");
            obj.set_format("#{######}");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_ju2","0","114","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("121");
            obj.set_text("주민번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Button("Button00","557","1","120","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("122");
            obj.set_text("report");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static60","0","-1","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색조건");
            obj.set_cssclass("lb01");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","22",null,"74","0.00%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("s01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_area","320","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_datacolumn("ARE_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_area");
            obj.set_codecolumn("ARE_CD");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","570","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_codecolumn("LOC_CD");
            obj.set_datacolumn("LOC_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_location");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_name","5","25","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("입소자성명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_age","720","25","80","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("나이");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_location","470","25","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("생활실");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_age","810","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_nu_age_grade");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_area","250","25","60","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("층");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_name","105","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_age00","960","25","80","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_enter_gb","1050","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_enter_gb");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_sMove","44.87%","96",null,"16","44.87%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("url(\'imagerc::search_open.png\') no-repeat transparent");
            obj.set_border("0px solid");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1250,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item18","div_cont.cal_validitystart","value","ds_head","VALID_PERIOD_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.cal_passwdExpire","value","ds_head","VALID_PASSWD_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_cont.form.div_right.form.div_head","value","ds_head","CUST_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_cont.form.div_right.form.div_head","image","ds_download","BLOB_FILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_cont.form.div_right.form.div_head.form.cmb_birth","value","ds_head","BIRTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_cont.form.div_right.form.div_head.form.cmb_hr_recruit_cnt","value","ds_head","RECRUIT_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_cont.form.div_right.form.div_head.form.cmb_hr_sal_class","value","ds_head","SAL_CLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","div_cont.form.div_right.form.div_head.form.cal_birthday","value","ds_head","BIRTHDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","div_cont.form.div_right.form.div_head.form.edt_zip_code","value","ds_head","ZIP_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_search.form.edt_name","value","ds_search","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_search.form.cmb_area","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_search.form.cmb_location","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_search.form.cmb_age","value","ds_search","AGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_cont.form.div_right.form.div_head.form.cal_enter_date","value","ds_head","ENTER_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_right.form.div_head.form.cal_birthday2","value","ds_head","BIRTHDAY2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_right.form.div_head.form.cal_retire_dt","value","ds_head","RETIRE_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_cont.form.div_right.form.div_head.form.edt_addr1","value","ds_head","ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_right.form.div_head.form.edt_addr4","value","ds_head","ADDR4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_right.form.div_head.form.rdo_sex","value","ds_head","SEX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right.form.div_head.form.edt_name","value","ds_head","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.div_head.form.edt_age","value","ds_head","AGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_right.form.div_head.form.edt_cellphone","value","ds_head","CELLPHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_right.form.div_head.form.cmb_grade","value","ds_head","GRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.div_right.form.div_head.form.cmb_dementia","value","ds_head","DEMENTIA_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.div_right.form.div_head.form.cmb_fall","value","ds_head","FALL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.div_right.form.div_head.form.cmb_bedsore","value","ds_head","BEDSORE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_right.form.div_head.form.edt_email00_01_00_00","value","ds_head","RES_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right.form.div_head.form.cmb_sch_grade","value","ds_head","SCH_GRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.div_right.form.div_head.form.edt_cellphone00","value","ds_head","LONG_TERM_CARE_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cont.form.div_right.form.div_head.form.edt_email00_01_00_00_00","value","ds_head","REF_SYS_RES_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_cont.form.div_right.form.div_head.form.cmb_area_i","value","ds_head","AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_cont.form.div_right.form.div_head.form.cmb_location_i","value","ds_head","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.div_right.form.div_head.form.cmb_posture","value","ds_head","POSTURE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_cont.form.div_right.form.div_head.form.edt_addr4_00","value","ds_head","DISEASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_cont.form.div_right.form.div_head.form.cmb_bedsore00","value","ds_head","CARE_GRP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_right.form.div_head.form.chk_meal1","value","ds_head","MEAL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_right.form.div_head.form.chk_meal2","value","ds_head","MEAL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_cont.form.div_right.form.div_head.form.chk_meal3","value","ds_head","MEAL3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.div_right.form.div_head.form.chk_meal4","value","ds_head","MEAL4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.div_right.form.div_head.form.chk_meal5","value","ds_head","MEAL5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cont.form.div_right.form.div_head.form.chk_meal6","value","ds_head","MEAL6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_cont.form.div_right.form.div_head.form.CheckBox00_01","value","ds_head","FUNC1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_cont.form.div_right.form.div_head.form.CheckBox00_00_01","value","ds_head","FUNC2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cont.form.div_right.form.div_head.form.CheckBox00_00_00_01","value","ds_head","FUNC3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_cont.form.div_right.form.div_head.form.CheckBox00_00_00_00_01","value","ds_head","FUNC4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_cont.form.div_right.form.div_head.form.CheckBox00_00_00_00_00_01","value","ds_head","FUNC5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_cont.form.div_right.form.div_head.form.CheckBox00_00_00_00_00_00_00","value","ds_head","FUNC6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_cont.form.div_right.form.div_head.form.CheckBox00_00_00_00_01_00","value","ds_head","DIET4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_cont.form.div_right.form.div_head.form.CheckBox00_00_00_01_00","value","ds_head","DIET3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_cont.form.div_right.form.div_head.form.CheckBox00_00_01_00","value","ds_head","DIET2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_cont.form.div_right.form.div_head.form.CheckBox00_01_00","value","ds_head","DIET1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_cont.form.div_right.form.div_head.form.edt_cellphone00_00","value","ds_head","FAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_cont.form.div_right.form.div_head.form.edt_ju1","value","ds_head","JU1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_cont.form.div_right.form.div_head.form.edt_cellphone00_00_00","value","ds_head","FAM_NM1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_cont.form.div_right.form.div_head.form.edt_cellphone00_00_00_00","value","ds_head","FAM_NM2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_cont.form.div_right.form.div_head.form.edt_cellphone00_00_00_00_00","value","ds_head","FAM_NM3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_cont.form.div_right.form.div_head.form.edt_cellphone00_00_01","value","ds_head","FAM_TEL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_cont.form.div_right.form.div_head.form.edt_cellphone00_00_01_00","value","ds_head","FAM_TEL11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_cont.form.div_right.form.div_head.form.edt_cellphone00_00_01_00_00","value","ds_head","FAM_TEL21");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_cont.form.div_right.form.div_head.form.edt_cellphone00_00_01_00_00_00","value","ds_head","FAM_TEL31");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_cont.form.div_right.form.div_head.form.edt_cellphone00_00_01_01","value","ds_head","FAM_TEL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_cont.form.div_right.form.div_head.form.edt_cellphone00_00_01_01_00","value","ds_head","FAM_TEL12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","div_cont.form.div_right.form.div_head.form.edt_cellphone00_00_01_01_00_00","value","ds_head","FAM_TEL22");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","div_cont.form.div_right.form.div_head.form.edt_cellphone00_00_01_01_00_00_00","value","ds_head","FAM_TEL32");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_cont.form.div_right.form.div_head.form.edt_ju2","value","ds_head","JU2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","div_search.form.cmb_enter_gb","value","ds_search","ENTER_GB");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM_POP::CM_PAGING_DIV.xfdl");
        };
        
        // User Script
        this.addIncludeScript("NUA101CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUA101CT.xfdl","lib::pgm_com.xjs");
        this.registerScript("NUA101CT.xfdl", function() {
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
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/

        var fv_Company = nexacro.getApplication().gds_userInfo.getColumn(0,"COMPANY_CD");
        var fv_ServiceTp = nexacro.getApplication().gds_userInfo.getColumn(0,"SERVICE_TP");
        var fv_appTp = nexacro.getApplication().gv_applicationTp;

        this.fv_currentDS = this.ds_head;
        this.fv_currentGrid = this.div_cont.form.div_left.form.grd_head;

        this.fileGroupId = "";
        this.fv_currentTab = 0;
        this.gv_NextEmpNo = "";
        var fileDownTrans = new nexacro.FileDownTransfer( "fileDownTrans", this );
        this.saveUrl = nexacro.getEnvironment().services["svcurl"].url + "/common/";
        this.pgmId = nexacro.getApplication().gv_curWinKey;
        this.fv_saveRefNo = "";
        this.scParam = this.gfn_getScreenParam();
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e, false);
        	this.ds_search.setColumn(0,"COMPANY_CD",fv_Company);
        	this.ds_search.setColumn(0,"SERVICE_TP",fv_ServiceTp);
        	this.ds_search.setColumn(0,"APPLICATION_TP",fv_appTp);

        	this.ds_search.setColumn(0,"ENTER_GB","E");

        	//상태삭제순번컬럼 고정
        	//this.div_cont.form.div_left.form.grd_head.setFormatColProperty(2, "band", "left");

        	//rowTypeValidation 설정
        	var dsArr = ["ds_head"];
        	this.gfn_rowTypeValidationDs(dsArr);
        	this.fn_setComboDs(obj);
        	this.ds_area_i.copyData(this.ds_area, true);
        	//페이징 처리 초기화
        	this.fn_initPageSet();

        	//drag 버튼 활성화
        	this.fn_setDivDrag();

        	if(!Sct.Util.isEmpty(this.scParam)) {
        		this.fn_getReqDataset();
        	}

        	// 오픈시 전체 조회
        	this.fn_search();

        	// 오픈시 검색조건 첫 항목에 커서 이동
        	this.div_search.form.edt_name.setFocus();
        };
        this.fn_getReqDataset = function(){
        	var name = this.scParam.name;
        	this.ds_search.setColumn(0,"NAME",name);
        }
        //페이징 처리 초기화
        this.fn_initPageSet = function()
        {
        	//페이징처리 초기화
        	this.ds_head.pageRowCount		= 50;											//조회될 row 갯수 (page Size)
            this.ds_head.pageCount			= 5;											//최대 페이지 갯수 (page Scale)
            this.ds_head.pageTotalVisible	= false;										//하단 page Size, pageScale 등 입력 div show YN
        	this.ds_head.pageNo				= 1;											//최초조회시 default 페이지 번호
        	this.ds_head.pageFunctionName	= "fn_search";									//페이지 버튼(1,2,3...)클릭시 조회할 function name
        	this.div_cont.form.div_left.form.div_paging.form.fn_init(this, this.ds_head);	//페이지 form 초기화
        }
        this.fn_setComboDs = function(obj)
        {
             var comboDsParamArr = [
                               //  { outDsName : "ds_location", sqlId : "NUA101CT.NUA101CT_DS_LOCATION_S", param : this.ds_search, bEmptyRow : true}
                               //  { outDsName : "ds_room", sqlId : "NUA101CT.NUA101CT_DS_ROOM_S",param : this.ds_search, bEmptyRow : true}
        						   { outDsName : "ds_area", sqlId : "NUA101CT.NUA101CT_DS_AREA_S",param : {COMPANY_CD : fv_Company}, bEmptyRow : true} // 층 조회
        						 , { outDsName : "ds_location_all", sqlId : "NUA101CT.NUA101CT_DS_LOCATION_S",param : {COMPANY_CD : fv_Company}, bEmptyRow : true} // 생활실 전체 조회
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
        /*this.fn_deleteBtn = function ()
        {
        	this.fn_delete();
        };
        */
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
             //조회전 그리드에 변경된 데이터가 있을경우 ..
             if(Sct.Grid.isUpdate(this.ds_head)
        		//|| Sct.Grid.isUpdate(this.ds_schdl)
        		){
                 //메세지로 변경된 데이터 여부와 상관없이 조회 할지 확인
                 if(!Sct.confirm(this,"000171","")){
                     return false;
                 }
             }

             //조회조건 필수여부확인
        	 if(!this.gfn_findSnull(this.div_search)) return false;

        	 //detail ClearData
        	this.div_cont.form.div_right.form.div_head.form.imv_sign.set_image('');
        	 return true;
        };

        //저장 전 validation
        this.fn_save_pre = function ()
        {
        	//변경여부
        	if (!Sct.Grid.hasInsertAndUpdateRow(this.fv_currentDS))
        	{
        		Sct.alert(this, "000240"); //추가한 데이터가 없습니다.
        		return false;
        	}

        	//입력 필수여부체크
        	//if(!this.gfn_chkGridEssential(this.fv_currentGrid)) return false;
        	if(!this.gfn_findSnull(this.div_cont.form.div_right.form.div_head)) return false;
        	//입력한값 중복 여부 체크
        	var keyArr ;
        	if(this.fv_currentDS.name == "ds_head"){
        		keyArr = ["COMPANY_CD", "RES_ID"];
        	}else{
        		keyArr = ["COMPANY_CD", "FAM_ID"];
        	}
        	if(!this.gfn_duplicateCheck(this.fv_currentDS, keyArr)) return false;
        	//저장하시겠습니까?
        	if(!Sct.confirm(this, "000038", "")) return false;

        	//데이터 저장전 저장할 key 값 dataset 변수에 저장
        	this.gfn_saveKeyArr(this.fv_currentDS, keyArr);
        	this.fv_saveRefNo = this.ds_head.getColumn(this.ds_head.rowposition, "RES_ID");
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
        	var outDatasets = "ds_head=output1";
        	var argument = "method=getListPaging "
        		+ "sqlId=NUA101CT.NUA101CT_DS_HEAD_S ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //저장
        this.fn_save = function ()
        {
        	//입력 필수여부체크
        	if(!this.fn_save_pre()) return false;
        	var svcId = "save";
        	var params = "/NUA101CTController.do";
        	var inDatasets = "input1=ds_head:U";
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

        	var sqlId = "NUA101CT.NUA101CT_DS_HEAD_D";

        	var svcId = "delete";
        	var params = "/commonController.do";
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
        			var count = this.ds_head.rowcount;
        			Sct.alert(this, "000175", count + "|");

        			//서비스 조회 시 return 받은 block count와 총 row 수 전달
        			this.div_cont.form.div_left.form.div_paging.form.fn_callAfter();
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
        		+ "sqlId=NUA101CT.NUA101CT_DS_LOCATION_S "
        		+ " COMPANY_CD="+fv_Company
        		+ " AREA="+col;

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/

        //drag 버튼 활성화
        this.fn_setDivDrag = function()
        {
        	//divCont
        	this.gfn_setDivDrag(this.div_cont.form.btn_gMove, this.div_cont.form.div_left, this.div_cont.form.div_right);
        	//this.gfn_setDivDrag(this.div_cont.form.div_right.form.btn_gVMove, this.div_cont.form.div_right.form.div_head, this.div_cont.form.div_right.form.div_detail);
        }

        // 작업후 작업 정보 조회
        this.fn_findMstRow = function(fv_saveRefNo) {
        	var sFindRow = this.ds_head.findRow("RES_ID", fv_saveRefNo);
        	if(sFindRow > -1) {
        		this.ds_head.set_rowposition(sFindRow);
        	}
        };

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        /***********************************************************************
         * FILE
         ***********************************************************************/

        //이미지 조회
        // this.fn_getSignImage = function ()
        // {
        // 	var imgUrl = "";
        // 	var sRow = this.ds_head.rowposition;
        // 	var fileGrp = this.ds_head.getColumn(sRow, "CREW_REAL_NAME");
        //
        // 	if(!Sct.Util.isEmpty(fileGrp))
        // 	{
        // 		var webHost = location.origin; //http://localhost:8080
        // 		var path = "/Argos/img";
        // 		imgUrl = webHost + path + fileGrp;
        // 	}
        //
        // 	this.div_cont.form.div_right.form.div_head.form.imv_sign.set_image(imgUrl);
        // };



        //주소조회 팝업
        this.fn_addressPop = function(obj,e)
        {
        	var param = {
        		MULTI_YN : "N",
        		COMPANY_CD : fv_Company,
        	};

        	Sct.popup(this, "readingAddress", 326, 226, "", param, "HR_POP::HR_ZIPCODE_PP.xfdl", "fn_popCallback");
        };

        //코드 팝업 CALLBACK
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	var objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        };

        //파일 팝업 콜백
        this.fn_fileUploadPopupCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	var objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);

        	switch(popid)
        	{
        		case "imgFILEUPLOAD" :
        			var sRow = this.ds_head.rowposition;
        			var dataGrpId = this.ds_head.getColumn(sRow, "FILE_GRP_ID");

        // 			if(Sct.Util.isEmpty(dataGrpId) && (!Sct.Util.isEmpty(this.fileGroupId))){}

        			if (this.ds_head.getColumn(sRow, "FILE_REAL_NAME") != objDs.getColumn(0, "FILE_REAL_NAME")) {
        				this.ds_head.setColumn(sRow, "FILE_GRP_ID", objDs.getColumn(0, "FILE_GRP_ID"));
        				this.ds_head.setColumn(sRow, "FILE_REAL_NAME", objDs.getColumn(0, "FILE_REAL_NAME"));
        				this.fn_getSignImage();
        			}

        			break;
        		case "fileDownload" :
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        this.ds_head_onrowposchanged = function (obj, e)
        {
        	//추가행인지 여부
        	var boolInserted = (obj.getRowType(e.newrow) == Dataset.ROWTYPE_INSERT);
        	//추가행일경우 키값 입력가능
        	//this.div_cont.form.div_right.form.div_head.form.edt_userid.set_readonly(!boolInserted);

        	//사원이미지 가져오기
        	this.fn_getSignImage();

        	//this.fn_chk_gb_chg(obj.getColumn(e.newrow,"USERKEY_TYPE"));

        	//생활실 데이터 조회
        	var nRow = this.ds_head.rowposition;
        	var area = this.ds_head.getColumn(nRow, "AREA"); //층

        	if(!Sct.Util.isEmpty(area)){ //층에 해당되는 생활실 조회
        		this.fn_location_search("ds_location_i", area);
        	}else{
        		this.ds_location_i.clearData();
        	}

        };

        //---------------------------------------행추가---------------------------------------------
        //master 행추가
        this.fn_head_addrow = function(obj,e)
        {
        	//보호자 추가행이 있을 경우
        // 	if((this.ds_detail.getRowType(this.ds_detail.rowposition) == Dataset.ROWTYPE_INSERT)
        // 		|| (this.ds_detail.getRowType(this.ds_detail.rowposition) == Dataset.ROWTYPE_UPDATE))
        // 	{
        // 		Sct.alert(this, "000179"); //저장 후 행추가 해주시기 바랍니다.
        // 		return ;
        // 	}

        	var nRow = this.ds_head.addRow();
        	//초기화
        	this.ds_head.setColumn(nRow, "COMPANY_CD",fv_Company);								//회사코드
        	this.ds_head.setColumn(nRow, "SEX","M");
        	this.ds_head.setColumn(nRow, "SCH_GRADE","10");
        	for(var i=1; i<7; i++){
        		this.ds_head.setColumn(nRow,"MEAL"+i,0);
        		this.ds_head.setColumn(nRow,"FUNC"+i,0);
        		this.ds_head.setColumn(nRow,"DIET"+i,0);
        	}
        	//포커스
        	//this.div_cont.form.div_right.form.div_head.form.edt_k_nm.setFocus(); //성명
        	this.div_cont.form.div_right.form.div_head.form.edt_name.setFocus();//성명

        };

        //이미지 조회
        this.fn_getSignImage = function ()
        {
        	var imgUrl = "";
        	var sRow = this.ds_head.rowposition;
        	var fileGrp = this.ds_head.getColumn(sRow, "FILE_REAL_NAME");

        	if(!Sct.Util.isEmpty(fileGrp))
        	{
        		var webHost = location.origin; //http://localhost:8080
        		var path = "/Argos/FILES";
        		//var path = "/Argos/img"; // 로컬테스트
        		imgUrl = webHost + path + fileGrp;
        	}

        	this.div_cont.form.div_right.form.div_head.form.imv_sign.set_image(imgUrl);
        };

        // 이미지 업로드
        this.fn_imgUpload = function(obj,e)
        {
        	//fileGroupId 설정
        	//alert(location.origin);
        	this.fileGroupId = Sct.Util.isEmpty(this.ds_head.getColumn(this.ds_head.rowposition, "FILE_GRP_ID")) ? "" : this.ds_head.getColumn(this.ds_head.rowposition, "FILE_GRP_ID");

        	if(this.ds_head.rowcount == 0) return;
        	var param = {
        		folderName:"NU/NUA101CT",
        		multiYn : "N"
        	};
        	Sct.popup(this, "imgFILEUPLOAD", 326, 226, "", param, "CM_POP::FILEUPLOAD.xfdl", "fn_fileUploadPopupCallback");
        };

        this.ds_detail_oncolumnchanged = function(obj,e)
        {
        	//입소자등록 상태가 등록이거나 수정일때
        // 	for(var i=0; i < this.ds_head.rowcount; i++){
        // 		if((this.ds_head.getRowType(i) == Dataset.ROWTYPE_INSERT)
        // 			|| (this.ds_head.getRowType(i) == Dataset.ROWTYPE_UPDATE))
        // 		{
        // 			//Sct.alert(this, "000179"); //저장 후 행추가 해주시기 바랍니다.
        // 			this.alert("보호자 등록 외 다른 상태값이 존재합니다.");
        //
        // 			obj.setColumn(e.row, e.columnid, e.oldvalue);
        // 			return;
        // 		}
        // 	}
        //
        // 	if(e.columnid == "PASSWORD"){
        // 		obj.setColumn(e.row,"PASSWORD",sha256_digest(obj.getColumn(e.row,"PASSWORD")));
        // 	}
        };


        this.ds_head_cancolumnchange = function(obj,e)
        {
        // 	if((this.ds_detail.getRowType(this.ds_detail.rowposition) == Dataset.ROWTYPE_INSERT)
        // 		|| (this.ds_detail.getRowType(this.ds_detail.rowposition) == Dataset.ROWTYPE_UPDATE))
        // 	{
        //
        // 		this.alert("입소자등록 외 다른 상태값이 존재합니다.");
        //
        // 		return false;
        // 	}

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

        //입소자등록 층 콤보박스 변경 이벤트
        this.div_cont_div_right_div_head_cmb_area_i_onitemchanged = function(obj,e)
        {
        	var nRow = this.ds_head.rowposition;
        	var area = this.ds_head.getColumn(nRow, "AREA"); //층

        	this.ds_head.setColumn(nRow, "LOCATION", ""); // 생활실 값 초기화

        	if(!Sct.Util.isEmpty(area)){ //층에 해당되는 생활실 조회
        		this.fn_location_search("ds_location_i", area);
        	}else{
        		this.ds_location_i.clearData();
        	}
        };

        this.CheckBox_onchanged = function(obj,e)
        {
        	/*
        	var column0;
        	var column1;
        	if(obj.value==1){
        		column1 = obj.name;
        	}

        	for(var i=1; i<7; i++){
        		column0 ="chk_meal"+i;
        		if(column0 != column1){
        			this.ds_head.setColumn(this.ds_head.rowposition,"MEAL"+i,0);
        		}
        	}
        	*/
        };


        this.ds_head_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "JU1"){
        		obj.setColumn(e.row,"JU1_PW",sha256_digest(obj.getColumn(e.row,"JU1")));
        	}
        };

        //
        this.fn_onkeyup = function(obj,e)
        {
        	if (e.keycode == "13")
        	{
        		if (obj.id == "edt_zip_code")
        		{
        			this.fn_addressPop();
        		}
        	}
        };

        this.fn_report = function()
        {
        	// validation
        	//if(!this.fn_report_pre()) return;

        	var nRow = this.ds_head.rowposition;
        	var params;
        	var dicompNm = " ";
        	var companyCd = fv_Company;
        	//var crewId = this.ds_head.getColumn(nRow, "CREWID");
        	var webhost = location.origin;

        	var popupUrl = "Test::HRA110CT_VIEWER1.xfdl";
        	var popupName = "선원인사카드";

        	params = {
        		companyCd : companyCd
        		, webhost : webhost
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        this.div_cont_div_right_div_head_Button00_onclick = function(obj,e)
        {
        	this.fn_report();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.div_cont.form.div_left.form.grd_head.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.statc_divcont_title.addEventHandler("onclick",this.div_cont_statc_divcont_title_onclick,this);
            this.div_cont.form.div_left.form.btn_addrow.addEventHandler("onclick",this.fn_head_addrow,this);
            this.div_cont.form.div_right.form.div_head.form.btn_register.addEventHandler("onclick",this.fn_imgUpload,this);
            this.div_cont.form.div_right.form.div_head.form.cal_birthday.addEventHandler("onchanged",this.div_cont_div_right_div_head_cal_birthday_onchanged,this);
            this.div_cont.form.div_right.form.div_head.form.cmb_area_i.addEventHandler("onitemchanged",this.div_cont_div_right_div_head_cmb_area_i_onitemchanged,this);
            this.div_cont.form.div_right.form.div_head.form.sta_sch_grade.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.div_head.form.sta_addr.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.div_head.form.btn_addr.addEventHandler("onclick",this.fn_addressPop,this);
            this.div_cont.form.div_right.form.div_head.form.edt_zip_code.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.div_cont.form.div_right.form.div_head.form.sta_addr00.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.div_head.form.sta_addr00_00.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.div_head.form.sta_addr00_00_00.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.div_head.form.chk_meal1.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.div_head.form.chk_meal2.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.div_head.form.chk_meal3.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.div_head.form.chk_meal4.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.div_head.form.chk_meal5.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.div_head.form.chk_meal6.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.div_head.form.sta_sch_grade00.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.div_head.form.edt_ju1.addEventHandler("canchange",this.div_cont_div_right_div_head_edt_ju1_canchange,this);
            this.div_cont.form.div_right.form.div_head.form.edt_ju1.addEventHandler("onkeydown",this.div_cont_div_right_div_head_edt_ju1_onkeydown,this);
            this.div_cont.form.div_right.form.div_head.form.sta_sch_grade00_00.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.div_head.form.sta_sch_grade00_00_00.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.div_head.form.sta_sch_grade00_00_00_00.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.div_head.form.sta_sch_grade00_01.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.div_head.form.sta_sch_grade00_01_00.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.div_head.form.sta_sch_grade00_01_00_00.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.div_head.form.Button00.addEventHandler("onclick",this.div_cont_div_right_div_head_Button00_onclick,this);
            this.div_search.form.cmb_area.addEventHandler("onitemchanged",this.div_search_cmb_area_onitemchanged,this);
            this.div_search.form.cmb_location.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_search.form.cmb_age.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.btn_sMove.addEventHandler("onclick",this.search_reset,this);
            this.btn_sMove.addEventHandler("ondrag",this.search_resize,this);
            this.ds_head.addEventHandler("onrowposchanged",this.ds_head_onrowposchanged,this);
            this.ds_head.addEventHandler("cancolumnchange",this.ds_head_cancolumnchange,this);
            this.ds_head.addEventHandler("oncolumnchanged",this.ds_head_oncolumnchanged,this);
            this.ds_detail.addEventHandler("oncolumnchanged",this.ds_detail_oncolumnchanged,this);
        };
        this.loadIncludeScript("NUA101CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
