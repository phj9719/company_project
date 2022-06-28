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
            this.set_titletext("입소자현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_head", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEX\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"INT\" size=\"256\"/><Column id=\"BIRTHDAY2\" type=\"STRING\" size=\"256\"/><Column id=\"CELLPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"DEMENTIA_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FALL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BEDSORE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTER_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RETIRE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR3\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR4\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWNUM\" type=\"INT\" size=\"256\"/><Column id=\"SCH_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"LONG_TERM_CARE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"POSTURE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISEASE\" type=\"STRING\" size=\"256\"/><Column id=\"CARE_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"MEAL1\" type=\"STRING\" size=\"256\"/><Column id=\"MEAL2\" type=\"STRING\" size=\"256\"/><Column id=\"MAEL3\" type=\"STRING\" size=\"256\"/><Column id=\"MEAL4\" type=\"STRING\" size=\"256\"/><Column id=\"MEAL5\" type=\"STRING\" size=\"256\"/><Column id=\"MEAL6\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC1\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC2\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC3\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC4\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC5\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC6\" type=\"STRING\" size=\"256\"/><Column id=\"DIET1\" type=\"STRING\" size=\"256\"/><Column id=\"DIET2\" type=\"STRING\" size=\"256\"/><Column id=\"DIET3\" type=\"STRING\" size=\"256\"/><Column id=\"DIET4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CELLPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR3\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR4\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_use_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location_temp", this);
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


            obj = new Dataset("ds_location", this);
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
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","0",null,null,"30","830","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_url("CM_POP::CM_PAGING_DIV.xfdl");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_head","0","30",null,null,"0","40",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_head");
            obj.set_autoenter("select");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell expandchar=\"status\"/><Cell col=\"1\" expandchar=\"delete\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"입소자성명\"/><Cell col=\"4\" text=\"성별\"/><Cell col=\"5\" text=\"생년월일\"/><Cell col=\"6\" text=\"나이\"/><Cell col=\"7\" text=\"생일\"/><Cell col=\"8\" text=\"등급\"/><Cell col=\"9\" text=\"치매전담\"/><Cell col=\"10\" text=\"낙상위험\"/><Cell col=\"11\" text=\"욕창위험\"/><Cell col=\"12\" text=\"자세변경\"/><Cell col=\"13\" text=\"주요질환\"/><Cell col=\"14\" text=\"층\"/><Cell col=\"15\" text=\"생활실\"/><Cell col=\"16\" text=\"입소자코드\"/><Cell col=\"17\" text=\"요양시스템 입소자코드\"/><Cell col=\"18\" text=\"입소일\"/><Cell col=\"19\" text=\"퇴소일\"/><Cell col=\"20\" text=\"장기요양인정번호\"/><Cell col=\"21\" text=\"케어그룹\"/><Cell col=\"22\" text=\"학력\"/><Cell col=\"23\" text=\"전화번호\"/><Cell col=\"24\" text=\"우편번호\"/><Cell col=\"25\" text=\"주소\"/><Cell col=\"26\" text=\"일반식\"/><Cell col=\"27\" text=\"죽식\"/><Cell col=\"28\" text=\"유동(경관)식\"/><Cell col=\"29\" text=\"갈은식\"/><Cell col=\"30\" text=\"다진식\"/><Cell col=\"31\" text=\"미음\"/><Cell col=\"32\" text=\"저작곤란\"/><Cell col=\"33\" text=\"연하곤란\"/><Cell col=\"34\" text=\"소화불량\"/><Cell col=\"35\" text=\"당뇨\"/><Cell col=\"36\" text=\"위관영양\"/><Cell col=\"37\" text=\"기타장애\"/><Cell col=\"38\" text=\"체중조절식\"/><Cell col=\"39\" text=\"당뇨식\"/><Cell col=\"40\" text=\"저염식\"/><Cell col=\"41\" text=\"고단백식\"/><Cell col=\"42\" text=\"등록자ID\"/><Cell col=\"43\" text=\"등록자명\"/><Cell col=\"44\" text=\"등록일자\"/><Cell col=\"45\" text=\"수정자명\"/><Cell col=\"46\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" displaytype=\"normal\"/><Cell col=\"2\" text=\"bind:ROWNUM\"/><Cell col=\"3\" text=\"bind:NAME\"/><Cell col=\"4\" text=\"bind:SEX\" combodataset=\"ds_nu_sex\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" displaytype=\"combotext\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:BIRTHDAY\"/><Cell col=\"6\" text=\"bind:AGE\"/><Cell col=\"7\" text=\"bind:BIRTHDAY2\" displaytype=\"date\"/><Cell col=\"8\" text=\"bind:GRADE\" displaytype=\"combotext\" combodataset=\"ds_nu_grade\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"9\" text=\"bind:DEMENTIA_YN\" displaytype=\"combotext\" combodataset=\"ds_cm_use_yn\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"10\" text=\"bind:FALL_YN\" displaytype=\"combotext\" combodataset=\"ds_cm_use_yn\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"11\" displaytype=\"combotext\" text=\"bind:BEDSORE_YN\" combodataset=\"ds_cm_use_yn\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"12\" displaytype=\"combotext\" combodataset=\"ds_cm_use_yn\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:POSTURE_YN\"/><Cell col=\"13\" text=\"bind:DISEASE\"/><Cell col=\"14\" text=\"bind:AREA\" combocodecol=\"ARE_CD\" combodatacol=\"ARE_NM\" combodataset=\"ds_area\" displaytype=\"combotext\"/><Cell col=\"15\" text=\"bind:LOCATION\" combocodecol=\"LOC_CD\" combodatacol=\"LOC_NM\" combodataset=\"ds_location_all\" displaytype=\"combotext\"/><Cell col=\"16\" text=\"bind:RES_ID\"/><Cell col=\"17\" text=\"bind:REF_SYS_RES_ID\"/><Cell col=\"18\" text=\"bind:ENTER_DT\" displaytype=\"date\"/><Cell col=\"19\" text=\"bind:RETIRE_DT\" displaytype=\"date\"/><Cell col=\"20\" text=\"bind:LONG_TERM_CARE_NO\"/><Cell col=\"21\" displaytype=\"combotext\" text=\"bind:CARE_GRP\" combodataset=\"ds_nu_care_grp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"22\" text=\"bind:SCH_GRADE\" displaytype=\"combotext\" combodataset=\"ds_nu_sch_grade\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"23\" text=\"bind:CELLPHONE\"/><Cell col=\"24\" text=\"bind:ZIP_CODE\"/><Cell col=\"25\" text=\"bind:ADDRESS\"/><Cell col=\"26\" displaytype=\"checkboxcontrol\" text=\"bind:MEAL1\"/><Cell col=\"27\" displaytype=\"checkboxcontrol\" text=\"bind:MEAL2\"/><Cell col=\"28\" displaytype=\"checkboxcontrol\" text=\"bind:MAEL3\"/><Cell col=\"29\" displaytype=\"checkboxcontrol\" text=\"bind:MEAL4\"/><Cell col=\"30\" displaytype=\"checkboxcontrol\" text=\"bind:MEAL5\"/><Cell col=\"31\" displaytype=\"checkboxcontrol\" text=\"bind:MEAL6\"/><Cell col=\"32\" displaytype=\"checkboxcontrol\" text=\"bind:FUNC1\"/><Cell col=\"33\" displaytype=\"checkboxcontrol\" text=\"bind:FUNC2\"/><Cell col=\"34\" displaytype=\"checkboxcontrol\" text=\"bind:FUNC3\"/><Cell col=\"35\" displaytype=\"checkboxcontrol\" text=\"bind:FUNC4\"/><Cell col=\"36\" displaytype=\"checkboxcontrol\" text=\"bind:FUNC5\"/><Cell col=\"37\" displaytype=\"checkboxcontrol\" text=\"bind:FUNC6\"/><Cell col=\"38\" displaytype=\"checkboxcontrol\" text=\"bind:DIET1\"/><Cell col=\"39\" displaytype=\"checkboxcontrol\" text=\"bind:DIET2\"/><Cell col=\"40\" displaytype=\"checkboxcontrol\" text=\"bind:DIET3\"/><Cell col=\"41\" displaytype=\"checkboxcontrol\" text=\"bind:DIET4\"/><Cell col=\"42\" text=\"bind:REG_USER\"/><Cell col=\"43\" text=\"bind:REG_USER_NM\"/><Cell col=\"44\" text=\"bind:REG_DT\" displaytype=\"date\"/><Cell col=\"45\" text=\"bind:MOD_USER_NM\"/><Cell col=\"46\" displaytype=\"date\" text=\"bind:MOD_DT\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("statc_divcont_title","0","7","200","22",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("입소자조회");
            obj.set_cssclass("lb01");
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

            obj = new Combo("cmb_age","810","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_nu_age_grade");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_name","105","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_area","250","25","60","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("층");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_area","320","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_datacolumn("ARE_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_area");
            obj.set_codecolumn("ARE_CD");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_location","470","25","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("생활실");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","570","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_codecolumn("LOC_CD");
            obj.set_datacolumn("LOC_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_location");
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

            obj = new BindItem("item33","div_search.form.cmb_age","value","ds_search","AGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.cmb_area","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cmb_location","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cmb_enter_gb","value","ds_search","ENTER_GB");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM_POP::CM_PAGING_DIV.xfdl");
        };
        
        // User Script
        this.addIncludeScript("NUA102QR.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUA102QR.xfdl","lib::pgm_com.xjs");
        this.registerScript("NUA102QR.xfdl", function() {
        /***********************************************************************
         * 화면ID   : NUA102QR.xfdl
         * 화면명   :
         * 화면설명 : 입소자현황
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

        this.fv_currentDS = this.ds_head;
        this.fv_currentGrid = this.div_cont.form.grd_head;

        this.fileGroupId = "";
        this.fv_currentTab = 0;
        this.gv_NextEmpNo = "";
        var fileDownTrans = new nexacro.FileDownTransfer( "fileDownTrans", this );
        this.saveUrl = nexacro.getEnvironment().services["svcurl"].url + "/common/";
        this.pgmId = nexacro.getApplication().gv_curWinKey;
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

        	this.ds_search.setColumn(0,"ENTER_GB","E");

        	//상태삭제순번컬럼 고정
        	//this.div_cont.form.div_left.form.grd_head.setFormatColProperty(2, "band", "left");


        	//rowTypeValidation 설정
        	var dsArr = ["ds_head"];
        	this.gfn_rowTypeValidationDs(dsArr);
        	this.fn_setComboDs(obj);
        	//페이징 처리 초기화
        	this.fn_initPageSet();

        	// 오픈시 전체 조회
        	this.fn_search();

        	// 오픈시 검색조건 첫 항목에 커서 이동
        	this.div_search.form.edt_name.setFocus();
        };

        //페이징 처리 초기화
        this.fn_initPageSet = function()
        {
        	//페이징처리 초기화
        	this.ds_head.pageRowCount		= 50;											//조회될 row 갯수 (page Size)
            this.ds_head.pageCount			= 5;											//최대 페이지 갯수 (page Scale)
            this.ds_head.pageTotalVisible	= false;										//하단 page Size, pageScale 등 입력 div show YN
        	this.ds_head.pageNo				= 1;											//최초조회시 default 페이지 번호
        	this.ds_head.pageFunctionName	= "fn_search";									//페이지 버튼(1,2,3...)클릭시 조회할 function name
        	this.div_cont.form.div_paging.form.fn_init(this, this.ds_head);	//페이지 form 초기화
        }
        this.fn_setComboDs = function(obj)
        {
             var comboDsParamArr = [
        //                          { outDsName : "ds_location", sqlId : "NUA102QR.NUA102QR_DS_LOCATION_S", param : this.ds_search, bEmptyRow : true}
        //                        , { outDsName : "ds_room", sqlId : "NUA102QR.NUA102QR_DS_ROOM_S",param : this.ds_search, bEmptyRow : true}
        							{ outDsName : "ds_area", sqlId : "NUA102QR.NUA102QR_DS_AREA_S",param : {COMPANY_CD : fv_Company}, bEmptyRow : true} // 층 조회
        						  , { outDsName : "ds_location_all", sqlId : "NUA102QR.NUA102QR_DS_LOCATION_S",param : {COMPANY_CD : fv_Company}, bEmptyRow : true} // 생활실 전체 조회
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
        		+ "sqlId=NUA102QR.NUA102QR_DS_HEAD_S ";

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
        			this.div_cont.form.div_paging.form.fn_callAfter();
        			//저장후 조회후 변경된 row로 rowposition 설정
        			//this.gfn_saveAfterFindRow(this.ds_head);
        			//this.fn_findMstRow(this.fv_saveRefNo);

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
        		+ "sqlId=NUA102QR.NUA102QR_DS_LOCATION_S "
        		+ " COMPANY_CD="+fv_Company
        		+ " AREA="+col;

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        /***********************************************************************
         * FILE
         ***********************************************************************/

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/

        this.div_cont_grd_head_oncelldblclick = function(obj,e)
        {
        	var menuCd = "01000100"; //메뉴코드
        	var param = {
        		companyCd : this.ds_head.getColumn(e.row,"COMPANY_CD")
        		,name : this.ds_head.getColumn(e.row,"NAME")
        	};
        	//메뉴 open
        	Sct.chkOpenMenu(menuCd, param);
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

        this.div_search_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.div_cont.form.grd_head.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.grd_head.addEventHandler("oncelldblclick",this.div_cont_grd_head_oncelldblclick,this);
            this.div_cont.form.statc_divcont_title.addEventHandler("onclick",this.div_cont_statc_divcont_title_onclick,this);
            this.div_search.addEventHandler("onclick",this.div_search_onclick,this);
            this.div_search.form.cmb_age.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_search.form.cmb_area.addEventHandler("onitemchanged",this.div_search_cmb_area_onitemchanged,this);
            this.div_search.form.cmb_location.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.btn_sMove.addEventHandler("onclick",this.search_reset,this);
            this.btn_sMove.addEventHandler("ondrag",this.search_resize,this);
            this.ds_head.addEventHandler("oncolumnchanged",this.ds_head_oncolumnchanged,this);
            this.ds_head.addEventHandler("onrowposchanged",this.ds_head_onrowposchanged,this);
            this.ds_detail.addEventHandler("oncolumnchanged",this.ds_detail_oncolumnchanged,this);
        };
        this.loadIncludeScript("NUA102QR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
