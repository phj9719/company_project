(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUA808QR");
            this.set_titletext("이상상태현황모니터링조회");
            this.set_background("#f4f9fc");
            if (Form == this.constructor)
            {
                this._setFormPosition(1500,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"MON_AREA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mon_area", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_air_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"AIR_NOW\" type=\"STRING\" size=\"256\"/><Column id=\"AIR_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"AIR_GREATEST_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_diaper_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"DIAPER_NOW\" type=\"STRING\" size=\"256\"/><Column id=\"BATTERY\" type=\"STRING\" size=\"256\"/><Column id=\"HUMI_RATE\" type=\"INT\" size=\"256\"/><Column id=\"B_HUMI_RATE\" type=\"INT\" size=\"256\"/><Column id=\"BAT_RATE\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_band_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"RESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"BAN_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"SEX\" type=\"STRING\" size=\"256\"/><Column id=\"BAN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"AGE_SEX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_diaper_iot", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_etc_list", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BAND_ALL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"AIR_ALL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DIAPER_ALL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"HUMI_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"BAT_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"PULSE_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"AIR_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"AIR_LINE_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_HIGH\" type=\"STRING\" size=\"256\"/><Column id=\"HUMI_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"HUMI_HIGH\" type=\"STRING\" size=\"256\"/><Column id=\"FD_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"UFD_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"CARB_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_LINE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_air_status", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_mon_cycle", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"STR1\" type=\"STRING\" size=\"256\"/><Column id=\"STR2\" type=\"STRING\" size=\"256\"/><Column id=\"STR3\" type=\"STRING\" size=\"256\"/><Column id=\"STR4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_air_list_temp", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"AIR_NOW\" type=\"STRING\" size=\"256\"/><Column id=\"AIR_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"AIR_GREATEST_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_diaper_list_temp", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"DIAPER_NOW\" type=\"STRING\" size=\"256\"/><Column id=\"BATTERY\" type=\"STRING\" size=\"256\"/><Column id=\"HUMI_RATE\" type=\"INT\" size=\"256\"/><Column id=\"B_HUMI_RATE\" type=\"INT\" size=\"256\"/><Column id=\"BAT_RATE\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("dragscrolltype").set("vert");
            obj.set_cssclass("s01");
            obj.set_background("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("sta_area","28.67%","12","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("모니터링 지역");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_color("#ffffff");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_area","sta_area:10","12","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_codecolumn("ARE_CD");
            obj.set_datacolumn("ARE_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_mon_area");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"10","80","24","10",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("닫기");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_location","cmb_area:6","12","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("층");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("#ffffff");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","sta_location:5","12","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_codecolumn("ARE_CD");
            obj.set_datacolumn("ARE_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_area");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search","cmb_location:8","10","60","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("검색");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_mainTitle","8","0","28.17%","45",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("모니터링 시스템");
            obj.set_color("#ffffff");
            obj.set_font("normal 700 18pt/normal \"Noto Sans KR\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","0%","50",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("div_airCard","1.33%","12","26%","200",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_card");
            this.div_cont.addChild(obj.name, obj);

            obj = new ImageViewer("imv_ico","21","79","80","80",null,null,null,null,null,null,this.div_cont.form.div_airCard.form);
            obj.set_taborder("0");
            obj.set_image("url(\'imagerc::ico_sta_air.png\')");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_stretch("fixaspectratio");
            this.div_cont.form.div_airCard.addChild(obj.name, obj);

            obj = new Static("sta_airCount","60.82%","72","20.62%","80",null,null,null,null,null,null,this.div_cont.form.div_airCard.form);
            obj.set_taborder("1");
            obj.set_text("-");
            obj.set_font("normal 700 50pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("right");
            obj.set_color("#2e86e2");
            this.div_cont.form.div_airCard.addChild(obj.name, obj);

            obj = new Static("sta_airAllCount","81.19%","110","63","40",null,null,null,null,null,null,this.div_cont.form.div_airCard.form);
            obj.set_taborder("2");
            obj.set_text("/-");
            obj.set_font("normal 700 25pt/normal \"Noto Sans KR\"");
            obj.set_color("#cacaca");
            this.div_cont.form.div_airCard.addChild(obj.name, obj);

            obj = new Static("sta_title","0","0",null,"45","0",null,null,null,null,null,this.div_cont.form.div_airCard.form);
            obj.set_taborder("3");
            obj.set_text("공기질 확인");
            obj.set_background("#2e86e2");
            obj.set_color("#ffffff");
            obj.set_font("normal 700 18pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("center");
            this.div_cont.form.div_airCard.addChild(obj.name, obj);

            obj = new Div("div_diaperCard","28.67%","12","26%","200",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_card");
            this.div_cont.addChild(obj.name, obj);

            obj = new ImageViewer("imv_ico","21","79","80","80",null,null,null,null,null,null,this.div_cont.form.div_diaperCard.form);
            obj.set_taborder("1");
            obj.set_image("url(\'imagerc::ico_sta_diaper.png\')");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_stretch("fixaspectratio");
            this.div_cont.form.div_diaperCard.addChild(obj.name, obj);

            obj = new Static("sta_batCount","63.4%","72","20.62%","80",null,null,null,null,null,null,this.div_cont.form.div_diaperCard.form);
            obj.set_taborder("2");
            obj.set_text("-");
            obj.set_font("normal 700 50pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("right");
            obj.set_color("#159258");
            this.div_cont.form.div_diaperCard.addChild(obj.name, obj);

            obj = new Static("sta_diaperAllCount2","83.51%","110","63","40",null,null,null,null,null,null,this.div_cont.form.div_diaperCard.form);
            obj.set_taborder("3");
            obj.set_text("/-");
            obj.set_font("normal 700 25pt/normal \"Noto Sans KR\"");
            obj.set_color("#cacaca");
            this.div_cont.form.div_diaperCard.addChild(obj.name, obj);

            obj = new Static("sta_HumiCount","24.74%","72","20.62%","80",null,null,null,null,null,null,this.div_cont.form.div_diaperCard.form);
            obj.set_taborder("4");
            obj.set_text("-");
            obj.set_font("normal 700 50pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("right");
            obj.set_color("#fb8c35");
            this.div_cont.form.div_diaperCard.addChild(obj.name, obj);

            obj = new Static("sta_diaperAllCount1","44.85%","110","63","40",null,null,null,null,null,null,this.div_cont.form.div_diaperCard.form);
            obj.set_taborder("5");
            obj.set_text("/-");
            obj.set_font("normal 700 25pt/normal \"Noto Sans KR\"");
            obj.set_color("#cacaca");
            this.div_cont.form.div_diaperCard.addChild(obj.name, obj);

            obj = new Static("sta_title","0","0",null,"45","0",null,null,null,null,null,this.div_cont.form.div_diaperCard.form);
            obj.set_taborder("0");
            obj.set_text("기저귀 확인(교환/배터리)");
            obj.set_background("#fb8c35");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_font("normal 700 18pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_diaperCard.addChild(obj.name, obj);

            obj = new Div("div_bandCard","56%","12","26%","200",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_card");
            this.div_cont.addChild(obj.name, obj);

            obj = new ImageViewer("imv_ico","21","79","80","80",null,null,null,null,null,null,this.div_cont.form.div_bandCard.form);
            obj.set_taborder("1");
            obj.set_image("url(\'imagerc::ico_sta_pulse.png\')");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_stretch("fixaspectratio");
            this.div_cont.form.div_bandCard.addChild(obj.name, obj);

            obj = new Static("sta_pulseAlertCount","60.82%","72","20.62%","80",null,null,null,null,null,null,this.div_cont.form.div_bandCard.form);
            obj.set_taborder("2");
            obj.set_text("-");
            obj.set_font("normal 700 50pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("right");
            obj.set_color("#f85968");
            this.div_cont.form.div_bandCard.addChild(obj.name, obj);

            obj = new Static("sta_bandAllCount","81.19%","110","63","40",null,null,null,null,null,null,this.div_cont.form.div_bandCard.form);
            obj.set_taborder("3");
            obj.set_text("/-");
            obj.set_font("normal 700 25pt/normal \"Noto Sans KR\"");
            obj.set_color("#cacaca");
            this.div_cont.form.div_bandCard.addChild(obj.name, obj);

            obj = new Static("sta_title","0","0",null,"45","0",null,null,null,null,null,this.div_cont.form.div_bandCard.form);
            obj.set_taborder("0");
            obj.set_text("맥박알림");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_font("normal 700 18pt/normal \"Noto Sans KR\"");
            obj.set_background("#f85968");
            this.div_cont.form.div_bandCard.addChild(obj.name, obj);

            obj = new Static("Static00","1.27%","221","165","32",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("호실 공기질 현황");
            obj.set_cssclass("lb01");
            obj.set_font("normal 700 15pt/normal \'Noto Sans KR");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_air_list","1.33%","256","26%",null,null,"30",null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_air_list");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj.set_useselcolor("false");
            obj.set_cssclass("grd_DataList_h2");
            obj.set_borderRadius("10px 10px 0px 0px");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"110\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"층/호실\"/><Cell col=\"1\" text=\"공기질 상황\"/><Cell col=\"2\" text=\"상태\"/></Band><Band id=\"body\"><Cell text=\"bind:LOCATION\"/><Cell col=\"1\" text=\"bind:AIR_NOW\" autosizerow=\"limitmin\" wordWrap=\"char\"/><Cell col=\"2\" displaytype=\"combotext\" text=\"bind:AIR_GREATEST_STATUS\" wordWrap=\"char\" combodataset=\"ds_nu_air_status\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static00_00","28.6%","221","165","32",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            obj.set_text("기저귀 교환 현황");
            obj.set_cssclass("lb01");
            obj.set_font("normal 700 15pt/normal \'Noto Sans KR");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_diaper_list","28.67%","256","26%",null,null,"30",null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_diaper_list");
            obj.set_useselcolor("false");
            obj.set_cssclass("grd_DataList_h2");
            obj.set_borderRadius("10px 10px 0px 0px");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"80\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"층/호실\"/><Cell col=\"1\" text=\"입소자\"/><Cell col=\"2\" text=\"기저귀(5분전)\"/><Cell col=\"3\" text=\"배터리\"/></Band><Band id=\"body\"><Cell text=\"bind:LOCATION\"/><Cell col=\"1\" text=\"bind:RESIDENT\"/><Cell col=\"2\" text=\"bind:DIAPER_NOW\"/><Cell col=\"3\" text=\"bind:BATTERY\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","55.93%","221","165","32",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("7");
            obj.set_text("맥박 위험 알림");
            obj.set_cssclass("lb01");
            obj.set_font("normal 700 15pt/normal \'Noto Sans KR");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_band_list","56%","256","26%",null,null,"30",null,null,null,null,this.div_cont.form);
            obj.set_taborder("8");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_band_list");
            obj.set_useselcolor("false");
            obj.set_cssclass("grd_DataList_h2");
            obj.set_borderRadius("10px 10px 0px 0px");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"180\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"층/호실\"/><Cell col=\"1\" text=\"입소자\"/><Cell col=\"2\" text=\"일시\"/></Band><Band id=\"body\"><Cell text=\"bind:LOCATION\" background=\"#fee9e9\"/><Cell col=\"1\" text=\"bind:RESIDENT\" background=\"#fee9e9\"/><Cell col=\"2\" text=\"bind:BAN_TIME\" displaytype=\"date\" background=\"#fee9e9\" expandchar=\"fullTime\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_info","83.33%","12",null,null,"1.33%","30",null,null,null,null,this.div_cont.form);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_cssclass("div_card");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_airTitle","20","11",null,"41","20",null,null,null,null,null,this.div_cont.form.div_info.form);
            obj.set_taborder("0");
            obj.set_text("공기질 확인");
            obj.set_font("normal 700 16pt/normal \"Noto Sans KR\"");
            obj.set_color("#2e86e2");
            this.div_cont.form.div_info.addChild(obj.name, obj);

            obj = new Static("sta_airText","21","40",null,"92","20",null,null,null,null,null,this.div_cont.form.div_info.form);
            obj.set_taborder("1");
            obj.set_text("공기질 항목별로 XXXX 이상 일때 표시됩니다. 공기질이 개선되면 현황에서 없어집니다.");
            obj.set_wordWrap("char");
            obj.set_font("normal 500 11pt/normal \"Noto Sans KR\"");
            obj.set_usedecorate("true");
            this.div_cont.form.div_info.addChild(obj.name, obj);

            obj = new Static("sta_airLineTitle","20","128",null,"26","21",null,null,null,null,null,this.div_cont.form.div_info.form);
            obj.set_taborder("2");
            obj.set_text("공기질 적정범위 기준");
            obj.set_font("normal 600 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#2e86e2");
            this.div_cont.form.div_info.addChild(obj.name, obj);

            obj = new Div("div_temp","20","160",null,"40","20",null,null,null,null,null,this.div_cont.form.div_info.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.div_cont.form.div_info.addChild(obj.name, obj);

            obj = new ImageViewer("imv_ico","2","0","45","40",null,null,null,null,null,null,this.div_cont.form.div_info.form.div_temp.form);
            obj.set_taborder("0");
            obj.set_image("url(\'imagerc::ico_info_tem.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            this.div_cont.form.div_info.form.div_temp.addChild(obj.name, obj);

            obj = new Static("sta_unit","65","-2",null,"20","10",null,null,null,null,null,this.div_cont.form.div_info.form.div_temp.form);
            obj.set_taborder("1");
            obj.set_text("온도(℃)");
            obj.set_font("normal 500 11pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_info.form.div_temp.addChild(obj.name, obj);

            obj = new Static("sta_value","65","18",null,"20","20",null,null,null,null,null,this.div_cont.form.div_info.form.div_temp.form);
            obj.set_taborder("2");
            obj.set_text("-");
            obj.set_font("normal 600 12pt/normal \"Noto Sans KR\"");
            obj.set_color("#2e86e2");
            this.div_cont.form.div_info.form.div_temp.addChild(obj.name, obj);

            obj = new Div("div_humi","20","208",null,"40","20",null,null,null,null,null,this.div_cont.form.div_info.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            this.div_cont.form.div_info.addChild(obj.name, obj);

            obj = new ImageViewer("imv_ico","2","0","45","40",null,null,null,null,null,null,this.div_cont.form.div_info.form.div_humi.form);
            obj.set_taborder("0");
            obj.set_image("url(\'imagerc::ico_info_hum.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            this.div_cont.form.div_info.form.div_humi.addChild(obj.name, obj);

            obj = new Static("sta_unit","65","-2",null,"20","10",null,null,null,null,null,this.div_cont.form.div_info.form.div_humi.form);
            obj.set_taborder("1");
            obj.set_text("습도(％)");
            obj.set_font("normal 500 11pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_info.form.div_humi.addChild(obj.name, obj);

            obj = new Static("sta_value","65","18",null,"20","20",null,null,null,null,null,this.div_cont.form.div_info.form.div_humi.form);
            obj.set_taborder("2");
            obj.set_text("-");
            obj.set_font("normal 600 12pt/normal \"Noto Sans KR\"");
            obj.set_color("#2e86e2");
            this.div_cont.form.div_info.form.div_humi.addChild(obj.name, obj);

            obj = new Div("div_fd","20","257",null,"40","20",null,null,null,null,null,this.div_cont.form.div_info.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.div_cont.form.div_info.addChild(obj.name, obj);

            obj = new ImageViewer("imv_ico","2","0","45","40",null,null,null,null,null,null,this.div_cont.form.div_info.form.div_fd.form);
            obj.set_taborder("0");
            obj.set_image("url(\'imagerc::ico_info_fd.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            this.div_cont.form.div_info.form.div_fd.addChild(obj.name, obj);

            obj = new Static("sta_unit","65","-2",null,"20","10",null,null,null,null,null,this.div_cont.form.div_info.form.div_fd.form);
            obj.set_taborder("1");
            obj.set_text("미세먼지(㎍/㎥)");
            obj.set_font("normal 500 11pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_info.form.div_fd.addChild(obj.name, obj);

            obj = new Static("sta_value","65","18",null,"20","20",null,null,null,null,null,this.div_cont.form.div_info.form.div_fd.form);
            obj.set_taborder("2");
            obj.set_text("-");
            obj.set_font("normal 600 12pt/normal \"Noto Sans KR\"");
            obj.set_color("#2e86e2");
            this.div_cont.form.div_info.form.div_fd.addChild(obj.name, obj);

            obj = new Div("div_ufd","20","307",null,"40","20",null,null,null,null,null,this.div_cont.form.div_info.form);
            obj.set_taborder("6");
            obj.set_text("Div00");
            this.div_cont.form.div_info.addChild(obj.name, obj);

            obj = new ImageViewer("imv_ico","2","0","45","40",null,null,null,null,null,null,this.div_cont.form.div_info.form.div_ufd.form);
            obj.set_taborder("0");
            obj.set_image("url(\'imagerc::ico_info_ufd.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            this.div_cont.form.div_info.form.div_ufd.addChild(obj.name, obj);

            obj = new Static("sta_unit","65","-2",null,"20","10",null,null,null,null,null,this.div_cont.form.div_info.form.div_ufd.form);
            obj.set_taborder("1");
            obj.set_text("초미세먼지(㎍/㎥)");
            obj.set_font("normal 500 11pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_info.form.div_ufd.addChild(obj.name, obj);

            obj = new Static("sta_value","65","18",null,"20","20",null,null,null,null,null,this.div_cont.form.div_info.form.div_ufd.form);
            obj.set_taborder("2");
            obj.set_text("-");
            obj.set_font("normal 600 12pt/normal \"Noto Sans KR\"");
            obj.set_color("#2e86e2");
            this.div_cont.form.div_info.form.div_ufd.addChild(obj.name, obj);

            obj = new Div("div_voc","20","356",null,"40","20",null,null,null,null,null,this.div_cont.form.div_info.form);
            obj.set_taborder("7");
            obj.set_text("Div00");
            this.div_cont.form.div_info.addChild(obj.name, obj);

            obj = new ImageViewer("imv_ico","2","0","45","40",null,null,null,null,null,null,this.div_cont.form.div_info.form.div_voc.form);
            obj.set_taborder("0");
            obj.set_image("url(\'imagerc::ico_info_voc.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            this.div_cont.form.div_info.form.div_voc.addChild(obj.name, obj);

            obj = new Static("sta_unit","65","-2",null,"20","10",null,null,null,null,null,this.div_cont.form.div_info.form.div_voc.form);
            obj.set_taborder("1");
            obj.set_text("VOC(ppb)");
            obj.set_font("normal 500 11pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_info.form.div_voc.addChild(obj.name, obj);

            obj = new Static("sta_value","65","18",null,"20","20",null,null,null,null,null,this.div_cont.form.div_info.form.div_voc.form);
            obj.set_taborder("2");
            obj.set_text("-");
            obj.set_font("normal 600 12pt/normal \"Noto Sans KR\"");
            obj.set_color("#2e86e2");
            this.div_cont.form.div_info.form.div_voc.addChild(obj.name, obj);

            obj = new Div("div_carb","20","406",null,"40","20",null,null,null,null,null,this.div_cont.form.div_info.form);
            obj.set_taborder("8");
            obj.set_text("Div00");
            this.div_cont.form.div_info.addChild(obj.name, obj);

            obj = new ImageViewer("imv_ico","2","0","45","40",null,null,null,null,null,null,this.div_cont.form.div_info.form.div_carb.form);
            obj.set_taborder("0");
            obj.set_image("url(\'imagerc::ico_info_carb.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            this.div_cont.form.div_info.form.div_carb.addChild(obj.name, obj);

            obj = new Static("sta_unit","65","-2",null,"20","10",null,null,null,null,null,this.div_cont.form.div_info.form.div_carb.form);
            obj.set_taborder("1");
            obj.set_text("이산화탄소(ppm)");
            obj.set_font("normal 500 11pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_info.form.div_carb.addChild(obj.name, obj);

            obj = new Static("sta_value","65","18",null,"20","20",null,null,null,null,null,this.div_cont.form.div_info.form.div_carb.form);
            obj.set_taborder("2");
            obj.set_text("-");
            obj.set_font("normal 600 12pt/normal \"Noto Sans KR\"");
            obj.set_color("#2e86e2");
            this.div_cont.form.div_info.form.div_carb.addChild(obj.name, obj);

            obj = new Div("div_line1","20","469",null,"3","20",null,null,null,null,null,this.div_cont.form.div_info.form);
            obj.set_taborder("9");
            obj.set_background("#dddddd");
            this.div_cont.form.div_info.addChild(obj.name, obj);

            obj = new Static("sta_diaTitle","20","481",null,"41","20",null,null,null,null,null,this.div_cont.form.div_info.form);
            obj.set_taborder("10");
            obj.set_text("기저귀 확인");
            obj.set_font("normal 700 16pt/normal \"Noto Sans KR\"");
            obj.set_color("#fb8c35");
            this.div_cont.form.div_info.addChild(obj.name, obj);

            obj = new Static("sta_diaText","20","510",null,"110","20",null,null,null,null,null,this.div_cont.form.div_info.form);
            obj.set_taborder("11");
            obj.set_text("현재 기저귀 상태가 XX% 이상이거나 배터리가 XX% 이하일 때 알림이 표시되고, 기저귀를 교환하거나 배터리 교체시 현황에서 없어집니다.");
            obj.set_wordWrap("char");
            obj.set_font("normal 500 11pt/normal \"Noto Sans KR\"");
            obj.set_usedecorate("true");
            this.div_cont.form.div_info.addChild(obj.name, obj);

            obj = new Div("div_line2","20","629",null,"3","20",null,null,null,null,null,this.div_cont.form.div_info.form);
            obj.set_taborder("12");
            obj.set_background("#dddddd");
            this.div_cont.form.div_info.addChild(obj.name, obj);

            obj = new Static("sta_pulseTitle","20","641",null,"41","20",null,null,null,null,null,this.div_cont.form.div_info.form);
            obj.set_taborder("13");
            obj.set_text("맥박알림");
            obj.set_font("normal 700 16pt/normal \"Noto Sans KR\"");
            obj.set_color("#f85968");
            this.div_cont.form.div_info.addChild(obj.name, obj);

            obj = new Static("sta_pulseText","20","670",null,"110","20",null,null,null,null,null,this.div_cont.form.div_info.form);
            obj.set_taborder("14");
            obj.set_text("스마트밴드에서 저심박(XXbpm 미만) 감지 시 알림이력이 남으며 처리현황 작성이 필요합니다. 셀을 클릭하면 처리결과를 작성할 수 있습니다.");
            obj.set_wordWrap("char");
            obj.set_font("normal 500 11pt/normal \"Noto Sans KR\"");
            obj.set_usedecorate("true");
            this.div_cont.form.div_info.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1500,900,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","div_search.form.cmb_area","value","ds_search","MON_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cmb_location","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUA808QR.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUA808QR.xfdl","lib::pgm_com.xjs");
        this.registerScript("NUA808QR.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: NUA808QR
         * 화면명   	: 이상상태현황모니터링조회
         * 화면설명 	: 이상상태가 있는 공기질, 기저귀, 맥박 모니터링
         * 작성일   	: 2021-12-14 14:40
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
         * Form Variables
         ***********************************************************************/
        const fv_companyCd = nexacro.getApplication().gds_userInfo.getColumn(0,"COMPANY_CD");
        this.timeCycle = 0;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.NUA808QR_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	this.ds_search.setColumn(0, "COMPANY_CD", fv_companyCd);

        	this.fn_setComboDs(obj);

        	this.timeCycle = this.ds_nu_mon_cycle.getColumn(1, "STR1") * 1000;

        	this.fn_search();

        	// 오픈시 검색조건 첫 항목에 커서 이동
        	this.div_search.form.cmb_area.setFocus();
        };

        this.NUA808QR_ontimer = function(obj,e)
        {
        	if(e.timerid == 1)
        	{
        		this.fn_search();
        	}
        };

        // 공기질 그리드 css 변경
        this.fn_airGridInit = function(grid)
        {
        	// 상태 글자색 바꾸기
        	const statusIdx = grid.getBindCellIndex("body", "AIR_GREATEST_STATUS");

        	const statCss = "expr:dataset.getColumn(currow, 'AIR_GREATEST_STATUS') == 400 ? 'RedFontCell' : "
        				  + "dataset.getColumn(currow, 'AIR_GREATEST_STATUS') == 300 ? 'OrangeFontCell' : "
        				  + "dataset.getColumn(currow, 'AIR_GREATEST_STATUS') == 200 ? 'GreenFontCell' : "
        				  + "dataset.getColumn(currow, 'AIR_GREATEST_STATUS') == 100 ? 'BlueFontCell' : ''";

        	grid.setCellProperty("body", statusIdx, "cssclass", statCss);
        };

        // 기저귀 그리드 css 변경
        this.fn_diaperGridInit = function(grid, humiLine, batteryLine)
        {
        	// 습도, 배터리 이상상태 배경색 바꾸기
        	const diaperIdx = grid.getBindCellIndex("body", "DIAPER_NOW");
        	const batteryIdx = grid.getBindCellIndex("body", "BATTERY");

        	const diaperCss = "expr:dataset.getColumn(currow, 'HUMI_RATE') >= "
        					+ humiLine
        					+ " && dataset.getColumn(currow, 'B_HUMI_RATE') >="
        					+ humiLine
        					+ " ? 'diaperHumiAlert' : ''";

        	const batteryCss = "expr:dataset.getColumn(currow, 'BAT_RATE') <= " + batteryLine + " ? 'diaperBatAlert' : ''";

        	grid.setCellProperty("body", diaperIdx, "cssclass", diaperCss);
        	grid.setCellProperty("body", batteryIdx, "cssclass", batteryCss);
        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 검색
        this.fn_search = function()
        {
        	const svcId = "search";
        	const params = "/NUA808QRController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_air_list=output1 ds_diaper_list=output2 ds_band_list=output3 ds_etc_list=output4";
        	const argument = "method=select ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			this.killTimer(1);
        			const companyNm = this.ds_etc_list.getColumn(0, "COMPANY_NM");	// 업체명
        			const bandAllCount = this.ds_etc_list.getColumn(0, "BAND_ALL_COUNT");	// 밴드 총 개수
        			const airAllCount = this.ds_etc_list.getColumn(0, "AIR_ALL_COUNT");		// 공기질 총 개수
        			const diaperAllCount = this.ds_etc_list.getColumn(0, "DIAPER_ALL_COUNT");	// 기저귀 총 개수
        			const humiLine = this.ds_etc_list.getColumn(0, "HUMI_LINE");	// 기저귀 습도 알림 기준
        			const batteryLine = this.ds_etc_list.getColumn(0, "BAT_LINE");	// 기저귀 배터리 알림 기준
        			const pulseLine = this.ds_etc_list.getColumn(0, "PULSE_LINE");	// 맥박 알림 기준
        			const airLineCode = this.ds_etc_list.getColumn(0, "AIR_LINE");	// 공기질 알림 기준 코드
        			const airLineText = this.ds_etc_list.getColumn(0, "AIR_LINE_TEXT");	// 공기질 알림 기준 텍스트
        			const tempMin = this.ds_etc_list.getColumn(0, "TEMP_MIN");		// 온도 적정 기준 MIN
        			const tempHigh = this.ds_etc_list.getColumn(0, "TEMP_HIGH");	// 온도 적정 기준 HIGH
        			const humiMin = this.ds_etc_list.getColumn(0, "HUMI_MIN");		// 습도 적정 기준 MIN
        			const humiHigh = this.ds_etc_list.getColumn(0, "HUMI_HIGH");	// 습도 적정 기준 HIGH
        			const fdLine = this.ds_etc_list.getColumn(0, "FD_LINE");		// 미세먼지 적정 기준
        			const ufdLine = this.ds_etc_list.getColumn(0, "UFD_LINE");		// 초미세먼지 적정 기준
        			const carbLine = this.ds_etc_list.getColumn(0, "CARB_LINE");	// 이산화탄소 적정 기준
        			const vocLine = this.ds_etc_list.getColumn(0, "VOC_LINE");		// VOC 적정 기준

        			// 이상상태 개수
        			const airRowCnt = this.ds_air_list.rowcount;
        			const diaperHumiRowCnt = this.ds_diaper_list.getCaseCount("HUMI_RATE >= " + humiLine +  "&& B_HUMI_RATE >= " + humiLine);
        			const diaperBatRowCnt = this.ds_diaper_list.getCaseCount("BAT_RATE < " + batteryLine);
        			const bandRowCnt = this.ds_band_list.rowcount;

        			// 업체명 및 공기질, 기저귀, 밴드 총수 세팅
        			this.div_search.form.sta_mainTitle.set_text(companyNm + " 모니터링 시스템");
        			const airCountText = airAllCount == undefined ? 0 : airAllCount;
        			this.div_cont.form.div_airCard.form.sta_airAllCount.set_text("/" + airCountText);
        			const diaperCountText = diaperAllCount == undefined ? 0 : diaperAllCount;
        			this.div_cont.form.div_diaperCard.form.sta_diaperAllCount1.set_text("/" + diaperCountText);
        			this.div_cont.form.div_diaperCard.form.sta_diaperAllCount2.set_text("/" + diaperCountText);
        			const bandCountText = bandAllCount == undefined ? 0 : bandAllCount;
        			this.div_cont.form.div_bandCard.form.sta_bandAllCount.set_text("/" + bandCountText);

        			// 이상상태 개수 세팅
        			this.div_cont.form.div_airCard.form.sta_airCount.set_text(airRowCnt);
        			this.div_cont.form.div_diaperCard.form.sta_HumiCount.set_text(diaperHumiRowCnt);
        			this.div_cont.form.div_diaperCard.form.sta_batCount.set_text(diaperBatRowCnt);
        			this.div_cont.form.div_bandCard.form.sta_pulseAlertCount.set_text(bandRowCnt);

        			// 공기질 확인 공기질 알림 기준 텍스트 세팅
        			let airCtext;
        			switch(airLineCode) {
        			case "400":
        				airCtext = "<fc v='red'>" + airLineText + "</fc>"
        				break;
        			case "300":
        				airCtext = "<fc v='orange'>" + airLineText + "</fc>"
        				break;
        			case "200":
        				airCtext = "<fc v='green'>" + airLineText + "</fc>"
        				break;
        			case "100":
        				airCtext = "<fc v='blue'>" + airLineText + "</fc>"
        				break;
        			}
        			const airText = "공기질 항목별로 " + airCtext + " 이상 일때 표시됩니다. 공기질이 개선되면 현황에서 없어집니다.";
        			this.div_cont.form.div_info.form.sta_airText.set_text(airText);

        			// 공기질 기준 세팅
        			this.div_cont.form.div_info.form.div_temp.form.sta_value.set_text(tempMin + " ~ " + tempHigh);
        			this.div_cont.form.div_info.form.div_humi.form.sta_value.set_text(humiMin + " ~ " + humiHigh);
        			this.div_cont.form.div_info.form.div_fd.form.sta_value.set_text(fdLine + " 이하");
        			this.div_cont.form.div_info.form.div_ufd.form.sta_value.set_text(ufdLine + " 이하");
        			this.div_cont.form.div_info.form.div_voc.form.sta_value.set_text(vocLine + " 이하");
        			this.div_cont.form.div_info.form.div_carb.form.sta_value.set_text(carbLine + " 이하");

        			// 기저귀 확인 기준 숫자 세팅
        			const diaText = "현재 기저귀 상태와 5분전 기저귀 상태가 \n"
        						  + "<fc v='#fb8c35'>" + humiLine + "</fc>"
        						  + "% 이상 이거나 배터리가 "
        						  + "<fc v='#159258'>" + batteryLine + "</fc>"
        						  + "% 이하일 때 알림이 표시되고, "
        						  + "기저귀를 교환하거나 배터리 교체 시 현황에서 없어집니다.";
        			this.div_cont.form.div_info.form.sta_diaText.set_text(diaText);

        			// 맥박알림 기준 숫자 세팅
        			const pulseText = "스마트밴드에서 저심박("
        							+ "<fc v='#f85968'>" + pulseLine + "</fc>"
        							+ "bpm 미만) 감지 시 알림이력이 남으며 처리현황 작성이 필요합니다."
        							+ " 셀을 클릭하면 처리결과를 작성할 수 있습니다.";
        			this.div_cont.form.div_info.form.sta_pulseText.set_text(pulseText);

        			this.fn_airGridInit(this.div_cont.form.grd_air_list);
        			this.fn_diaperGridInit(this.div_cont.form.grd_diaper_list, humiLine, batteryLine);

        			this.setTimer(1, this.timeCycle);
        		}
        	}
        	else
        	{
        		Sct.alert(this, "", strErrorMsg);
        	}
        };

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 콤보 세팅
        this.fn_setComboDs = function(obj)
        {
        	const comboDsParamArr = [
        			{ outDsName : "ds_area", sqlId : "CM_MONITOR_PP.CM_MOTITOR_PP_DS_AREA_S",param : {COMPANY_CD : fv_companyCd}, bEmptyRow : true} // 층 조회
        		  , { outDsName : "ds_mon_area", sqlId : "CM_MONITOR_PP.CM_MOTITOR_PP_DS_MON_AREA_S",param : {COMPANY_CD : fv_companyCd}, bEmptyRow : true} // 생활실 전체 조회
        	];
        	this.gfn_setComboDs(obj, comboDsParamArr);
        };

        // 검색조건 모니터링 지역 콤보박스 변경 이벤트
        this.div_search_cmb_area_onitemchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0, "AREA", "");
        };

        // 검색조건 층 콤보박스 변경 이벤트
        this.div_search_cmb_location_onitemchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0, "MON_AREA", "");
        };

        // 검색 버튼
        this.div_search_btn_search_onclick = function(obj,e)
        {
        	this.fn_search();
        };

        // 닫기 버튼
        this.div_search_btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        // 맥박이상 그리드 셀 클릭 이벤트
        this.div_cont_grd_band_list_oncellclick = function(obj,e)
        {
        	// 셀 클릭시 맥박이상 처리 팝업 오픈
        	const param = {
        			RES_ID : this.ds_band_list.getColumn(e.row, "RES_ID")
        		,	RES_NM : this.ds_band_list.getColumn(e.row, "NAME")
        		,	AGE : this.ds_band_list.getColumn(e.row, "AGE_SEX")
        		,	AREA : this.ds_band_list.getColumn(e.row, "AREA")
        		,	TM : this.ds_band_list.getColumn(e.row, "BAN_TIME")
        		,	DTTM : this.ds_band_list.getColumn(e.row, "BAN_DT")
        	};
        	Sct.popup(this, "BAND_PP", 326, 226, "", param, "CM_POP::CM_BAND_PP.xfdl", "fn_popCallback");

        	this.killTimer(1);
        };

        // 팝업 콜백
        this.fn_popCallback = function()
        {
        	this.fn_search();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.NUA808QR_onload,this);
            this.addEventHandler("ontimer",this.NUA808QR_ontimer,this);
            this.div_search.form.cmb_area.addEventHandler("onitemchanged",this.div_search_cmb_area_onitemchanged,this);
            this.div_search.form.btn_close.addEventHandler("onclick",this.div_search_btn_close_onclick,this);
            this.div_search.form.cmb_location.addEventHandler("onitemchanged",this.div_search_cmb_location_onitemchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.div_search_btn_search_onclick,this);
            this.div_cont.form.div_bandCard.addEventHandler("onclick",this.Common_onclick,this);
            this.div_cont.form.grd_band_list.addEventHandler("oncellclick",this.div_cont_grd_band_list_oncellclick,this);
        };
        this.loadIncludeScript("NUA808QR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
