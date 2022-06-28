(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUB101CT");
            this.set_titletext("호실현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1180,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_resident", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEX\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"CONN_ST\" type=\"STRING\" size=\"256\"/><Column id=\"HUMI\" type=\"STRING\" size=\"256\"/><Column id=\"B_HUMI\" type=\"STRING\" size=\"256\"/><Column id=\"HUMI_RATE\" type=\"INT\" size=\"256\"/><Column id=\"B_HUMI_RATE\" type=\"INT\" size=\"256\"/><Column id=\"BAT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"BAT_RATE\" type=\"INT\" size=\"256\"/><Column id=\"HEART_RATE\" type=\"INT\" size=\"256\"/><Column id=\"BAND_CLEAR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BAN_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BAN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BAND_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DIAPER_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_use_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_air_quality", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AIR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MAC_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"MAC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PM_1_0\" type=\"FLOAT\" size=\"256\"/><Column id=\"PM_2_5\" type=\"FLOAT\" size=\"256\"/><Column id=\"PM_10_0\" type=\"FLOAT\" size=\"256\"/><Column id=\"TEMP_C\" type=\"FLOAT\" size=\"256\"/><Column id=\"TEMP_F\" type=\"STRING\" size=\"256\"/><Column id=\"HUMI\" type=\"FLOAT\" size=\"256\"/><Column id=\"TVOC\" type=\"FLOAT\" size=\"256\"/><Column id=\"CO_2\" type=\"FLOAT\" size=\"0\" datapath=\",A.DISEASE\"/><Column id=\"SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_air_quality", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"STR1\" type=\"STRING\" size=\"256\"/><Column id=\"STR2\" type=\"STRING\" size=\"256\"/><Column id=\"STR3\" type=\"STRING\" size=\"256\"/><Column id=\"STR4\" type=\"STRING\" size=\"256\"/><Column id=\"STR5\" type=\"STRING\" size=\"256\"/><Column id=\"STR6\" type=\"STRING\" size=\"256\"/><Column id=\"STR7\" type=\"STRING\" size=\"256\"/><Column id=\"STR8\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_test", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AIR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MAC_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"MAC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PM_1_0\" type=\"STRING\" size=\"256\"/><Column id=\"PM_2_5\" type=\"STRING\" size=\"256\"/><Column id=\"PM_10_0\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_F\" type=\"STRING\" size=\"256\"/><Column id=\"HUMI\" type=\"STRING\" size=\"256\"/><Column id=\"TVOC\" type=\"STRING\" size=\"256\"/><Column id=\"CO_2\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"BLE_RSSI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mac_add", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MAC_ADD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_mon_cycle", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"STR1\" type=\"STRING\" size=\"256\"/><Column id=\"STR2\" type=\"STRING\" size=\"256\"/><Column id=\"STR3\" type=\"STRING\" size=\"256\"/><Column id=\"STR4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_diaper_iot", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_resident","2.46%","125",null,"56%","3.39%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_air","2.5%","76%",null,null,"3.39%","8.29%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_background("#edf9ff");
            obj.set_borderRadius("10px");
            obj.set_boxShadow("0px 0px 7px #dddddd");
            this.addChild(obj.name, obj);

            obj = new Static("sta_temp","1.26%","0%","9%","40%",null,null,null,null,null,null,this.div_air.form);
            obj.set_taborder("0");
            obj.set_text("온도");
            obj.set_font("normal 700 16pt/normal \"Noto Sans KR\"");
            obj.set_cssclass("sta_gray");
            this.div_air.addChild(obj.name, obj);

            obj = new Static("sta_temp_unit",null,null,"2.16%","27.27%","86.77%","9.09%",null,null,null,null,this.div_air.form);
            obj.set_taborder("1");
            obj.set_text("ºC");
            obj.set_font("normal 500 16pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_tTxt1");
            this.div_air.addChild(obj.name, obj);

            obj = new Div("div_line1","14.04%","21.82%","2",null,null,"13.64%",null,null,null,null,this.div_air.form);
            obj.set_taborder("2");
            obj.set_background("#a3c3d9");
            this.div_air.addChild(obj.name, obj);

            obj = new Static("sta_humi","15.66%","0%","9%","40%",null,null,null,null,null,null,this.div_air.form);
            obj.set_taborder("3");
            obj.set_text("습도");
            obj.set_font("normal 700 16pt/normal \"Noto Sans KR\"");
            obj.set_cssclass("sta_gray");
            this.div_air.addChild(obj.name, obj);

            obj = new Static("sta_humi_unit",null,null,"2.16%","27.27%","71.47%","9.09%",null,null,null,null,this.div_air.form);
            obj.set_taborder("4");
            obj.set_text("%");
            obj.set_font("normal 500 16pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_tTxt1");
            this.div_air.addChild(obj.name, obj);

            obj = new Div("div_line2","29.34%","21.82%","2",null,null,"13.64%",null,null,null,null,this.div_air.form);
            obj.set_taborder("5");
            obj.set_background("#a3c3d9");
            this.div_air.addChild(obj.name, obj);

            obj = new Static("sta_dust","30.51%","0%","9.81%","40%",null,null,null,null,null,null,this.div_air.form);
            obj.set_taborder("6");
            obj.set_text("미세먼지");
            obj.set_font("normal 700 16pt/normal \"Noto Sans KR\"");
            obj.set_cssclass("sta_gray");
            this.div_air.addChild(obj.name, obj);

            obj = new Static("sta_dust_unit",null,null,"4.5%","29.09%","53.92%","9.09%",null,null,null,null,this.div_air.form);
            obj.set_taborder("7");
            obj.set_text("㎍/㎥");
            obj.set_font("normal 500 16pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_tTxt1");
            this.div_air.addChild(obj.name, obj);

            obj = new Div("div_line3","47.34%","21.82%","2",null,null,"13.64%",null,null,null,null,this.div_air.form);
            obj.set_taborder("8");
            obj.set_background("#a3c3d9");
            this.div_air.addChild(obj.name, obj);

            obj = new Static("sta_uDust","48.6%","0%","12.51%","40%",null,null,null,null,null,null,this.div_air.form);
            obj.set_taborder("9");
            obj.set_text("초미세먼지");
            obj.set_font("normal 700 16pt/normal \"Noto Sans KR\"");
            obj.set_cssclass("sta_gray");
            this.div_air.addChild(obj.name, obj);

            obj = new Static("sta_uDust_unit",null,null,"4.5%","29.09%","35.91%","9.09%",null,null,null,null,this.div_air.form);
            obj.set_taborder("10");
            obj.set_text("㎍/㎥");
            obj.set_font("normal 500 16pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_tTxt1");
            this.div_air.addChild(obj.name, obj);

            obj = new Div("div_line4","64.9%","21.82%","2",null,null,"13.64%",null,null,null,null,this.div_air.form);
            obj.set_taborder("11");
            obj.set_background("#a3c3d9");
            this.div_air.addChild(obj.name, obj);

            obj = new Static("sta_voc","67.06%","0%","9%","40%",null,null,null,null,null,null,this.div_air.form);
            obj.set_taborder("12");
            obj.set_text("VOC");
            obj.set_font("normal 700 16pt/normal \"Noto Sans KR\"");
            obj.set_cssclass("sta_gray");
            this.div_air.addChild(obj.name, obj);

            obj = new Static("sta_voc_unit",null,null,"4.5%","27.27%","18.81%","9.09%",null,null,null,null,this.div_air.form);
            obj.set_taborder("13");
            obj.set_text("ppb");
            obj.set_font("normal 500 16pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_tTxt1");
            this.div_air.addChild(obj.name, obj);

            obj = new Div("div_line5","82.18%","21.82%","2",null,null,"13.64%",null,null,null,null,this.div_air.form);
            obj.set_taborder("14");
            obj.set_background("#a3c3d9");
            this.div_air.addChild(obj.name, obj);

            obj = new Static("sta_carbon","83.71%","0%","12.51%","40%",null,null,null,null,null,null,this.div_air.form);
            obj.set_taborder("15");
            obj.set_text("이산화탄소");
            obj.set_font("normal 700 16pt/normal \"Noto Sans KR\"");
            obj.set_cssclass("sta_gray");
            this.div_air.addChild(obj.name, obj);

            obj = new Static("sta_carbon_unit",null,null,"4.5%","27.27%","1.26%","9.09%",null,null,null,null,this.div_air.form);
            obj.set_taborder("16");
            obj.set_text("ppm");
            obj.set_font("normal 500 16pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_tTxt1");
            this.div_air.addChild(obj.name, obj);

            obj = new Static("sta_temp_value","1.71%",null,"9%","36.36%",null,"9.09%",null,null,null,null,this.div_air.form);
            obj.set_taborder("17");
            obj.set_text("-");
            obj.set_textAlign("right");
            obj.set_font("normal 700 23pt/normal \"Noto Sans KR\"");
            obj.set_cssclass("sta_blue");
            this.div_air.addChild(obj.name, obj);

            obj = new Static("sta_humi_value",null,null,"9%","36.36%","73.9%","9.09%",null,null,null,null,this.div_air.form);
            obj.set_taborder("18");
            obj.set_text("-");
            obj.set_textAlign("right");
            obj.set_font("normal 700 23pt/normal \"Noto Sans KR\"");
            obj.set_cssclass("sta_blue");
            this.div_air.addChild(obj.name, obj);

            obj = new Static("sta_dust_value",null,null,"9%","36.36%","59.05%","9.09%",null,null,null,null,this.div_air.form);
            obj.set_taborder("19");
            obj.set_text("-");
            obj.set_textAlign("right");
            obj.set_font("normal 700 23pt/normal \"Noto Sans KR\"");
            obj.set_cssclass("sta_blue");
            this.div_air.addChild(obj.name, obj);

            obj = new Static("sta_uDust_value",null,null,"9%","36.36%","40.95%","9.09%",null,null,null,null,this.div_air.form);
            obj.set_taborder("20");
            obj.set_text("-");
            obj.set_textAlign("right");
            obj.set_font("normal 700 23pt/normal \"Noto Sans KR\"");
            obj.set_cssclass("sta_blue");
            this.div_air.addChild(obj.name, obj);

            obj = new Static("sta_voc_value",null,null,"10.35%","36.36%","22.95%","9.09%",null,null,null,null,this.div_air.form);
            obj.set_taborder("21");
            obj.set_text("-");
            obj.set_textAlign("right");
            obj.set_font("normal 700 23pt/normal \"Noto Sans KR\"");
            obj.set_cssclass("sta_blue");
            this.div_air.addChild(obj.name, obj);

            obj = new Static("sta_carbon_value",null,null,"10.35%","36.36%","5.85%","9.09%",null,null,null,null,this.div_air.form);
            obj.set_taborder("22");
            obj.set_text("-");
            obj.set_font("normal 700 23pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_blue");
            this.div_air.addChild(obj.name, obj);

            obj = new Div("div_quality","140",null,"366","25",null,"18",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("1111");
            this.addChild(obj.name, obj);

            obj = new Static("sta_blue","0","0","25","22",null,null,null,null,null,null,this.div_quality.form);
            obj.set_taborder("0");
            obj.set_text("■");
            obj.set_cssclass("sta_blue");
            obj.set_font("15pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_textAlign("center");
            this.div_quality.addChild(obj.name, obj);

            obj = new Static("sta_blue_name","25","0","46","25",null,null,null,null,null,null,this.div_quality.form);
            obj.set_taborder("1");
            obj.set_text("좋음");
            obj.set_font("normal 500 15pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_blue");
            this.div_quality.addChild(obj.name, obj);

            obj = new Static("sta_green","77","0","25","22",null,null,null,null,null,null,this.div_quality.form);
            obj.set_taborder("2");
            obj.set_text("■");
            obj.set_cssclass("sta_green");
            obj.set_font("15pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_textAlign("center");
            this.div_quality.addChild(obj.name, obj);

            obj = new Static("sta_green_name","103","0","46","25",null,null,null,null,null,null,this.div_quality.form);
            obj.set_taborder("3");
            obj.set_text("보통");
            obj.set_font("normal 500 15pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_green");
            this.div_quality.addChild(obj.name, obj);

            obj = new Static("sta_orange","155","0","25","22",null,null,null,null,null,null,this.div_quality.form);
            obj.set_taborder("4");
            obj.set_text("■");
            obj.set_cssclass("sta_orange");
            obj.set_font("15pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_textAlign("center");
            this.div_quality.addChild(obj.name, obj);

            obj = new Static("sta_orange_name","181","0","46","25",null,null,null,null,null,null,this.div_quality.form);
            obj.set_taborder("5");
            obj.set_text("나쁨");
            obj.set_font("normal 500 15pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_orange");
            this.div_quality.addChild(obj.name, obj);

            obj = new Static("sta_red","233","0","25","22",null,null,null,null,null,null,this.div_quality.form);
            obj.set_taborder("6");
            obj.set_text("■");
            obj.set_cssclass("sta_red");
            obj.set_font("15pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_textAlign("center");
            this.div_quality.addChild(obj.name, obj);

            obj = new Static("sta_red_name","259","0","88","25",null,null,null,null,null,null,this.div_quality.form);
            obj.set_taborder("7");
            obj.set_text("매우나쁨");
            obj.set_font("normal 500 15pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_red");
            this.div_quality.addChild(obj.name, obj);

            obj = new Static("sta_location","30","20","360","95",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("호실");
            obj.set_font("normal 700 30pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("center");
            obj.set_color("#ffffff");
            obj.set_background("#47afe1");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_airLine","31",null,"110","25",null,"17",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("※공기질기준 : ");
            obj.set_cssclass("sta_tTxt1");
            obj.set_font("normal 500 13pt/normal \"Noto Sans KR\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_info",null,null,"600","25","3.39%","17",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("-");
            obj.set_cssclass("sta_tTxt1");
            obj.set_font("normal 500 12pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Div("div_linkOut","402","20","260","95",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_background("#edf9ff");
            obj.set_borderRadius("10px");
            obj.set_boxShadow("0px 0px 7px #dddddd");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imv_diaperNot","20","40","50","45",null,null,null,null,null,null,this.div_linkOut.form);
            obj.set_taborder("0");
            obj.set_image("url(\'theme://images/ico_sta_diapernot.png\')");
            obj.set_background("transparent");
            this.div_linkOut.addChild(obj.name, obj);

            obj = new Static("sta_diaperNotCount","70","40","45","45",null,null,null,null,null,null,this.div_linkOut.form);
            obj.set_taborder("1");
            obj.set_text("-");
            obj.set_font("normal 700 25pt/normal \"Noto Sans KR\"");
            obj.set_color("#777777");
            this.div_linkOut.addChild(obj.name, obj);

            obj = new ImageViewer("imv_pulseNot","130","40","50","45",null,null,null,null,null,null,this.div_linkOut.form);
            obj.set_taborder("2");
            obj.set_image("url(\'theme://images/ico_star_pulsenot.png\')");
            obj.set_background("transparent");
            this.div_linkOut.addChild(obj.name, obj);

            obj = new Static("sta_pulseNotCount","180","40","45","45",null,null,null,null,null,null,this.div_linkOut.form);
            obj.set_taborder("3");
            obj.set_text("-");
            obj.set_font("normal 700 25pt/normal \"Noto Sans KR\"");
            obj.set_color("#777777");
            this.div_linkOut.addChild(obj.name, obj);

            obj = new Div("div_exchange","672","20","260","95",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_background("#edf9ff");
            obj.set_borderRadius("10px");
            obj.set_boxShadow("0px 0px 7px #dddddd");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imv_exDiaper","20","40","50","45",null,null,null,null,null,null,this.div_exchange.form);
            obj.set_taborder("0");
            obj.set_image("url(\'theme://images/ico_sta_diaper.png\')");
            obj.set_background("transparent");
            this.div_exchange.addChild(obj.name, obj);

            obj = new Static("sta_exDiaperCount","80","40","45","45",null,null,null,null,null,null,this.div_exchange.form);
            obj.set_taborder("1");
            obj.set_text("-");
            obj.set_font("normal 700 25pt/normal \"Noto Sans KR\"");
            obj.set_color("#f7841d");
            this.div_exchange.addChild(obj.name, obj);

            obj = new ImageViewer("imv_exBattery","130","40","50","45",null,null,null,null,null,null,this.div_exchange.form);
            obj.set_taborder("2");
            obj.set_image("url(\'theme://images/ico_sta_battery.png\')");
            obj.set_background("transparent");
            this.div_exchange.addChild(obj.name, obj);

            obj = new Static("sta_exBatteryCount","190","40","45","45",null,null,null,null,null,null,this.div_exchange.form);
            obj.set_taborder("3");
            obj.set_text("-");
            obj.set_font("normal 700 25pt/normal \"Noto Sans KR\"");
            obj.set_color("#33c481");
            this.div_exchange.addChild(obj.name, obj);

            obj = new Div("div_alert","942","20","195","95",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Div00");
            obj.set_background("#fef2f3");
            obj.set_borderRadius("10px");
            obj.set_boxShadow("0px 0px 7px #dddddd");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imv_alertBand","45","40","50","45",null,null,null,null,null,null,this.div_alert.form);
            obj.set_taborder("0");
            obj.set_image("url(\'theme://images/ico_sta_pulse.png\')");
            obj.set_background("transparent");
            this.div_alert.addChild(obj.name, obj);

            obj = new Static("sta_alertBandCount","105","40","45","45",null,null,null,null,null,null,this.div_alert.form);
            obj.set_taborder("1");
            obj.set_text("-");
            obj.set_font("normal 700 25pt/normal \"Noto Sans KR\"");
            obj.set_color("#f85464");
            this.div_alert.addChild(obj.name, obj);

            obj = new Button("btn_alert","942","20","195","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("긴급");
            obj.set_background("#f85464");
            obj.set_borderRadius("10px 10px 0px 0px");
            obj.set_font("normal 700 18pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_icon("url(\'theme://images/ico_sta_caution.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("sta_exchange","672","20","260","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("교환");
            obj.set_textAlign("center");
            obj.set_color("#ffffff");
            obj.set_font("normal 700 18pt/normal \"Noto Sans KR\"");
            obj.set_background("#47afe1");
            obj.set_borderRadius("10px 10px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_linkOut","402","20","260","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("연결끊김");
            obj.set_textAlign("center");
            obj.set_color("#ffffff");
            obj.set_font("normal 700 18pt/normal \"Noto Sans KR\"");
            obj.set_background("#47afe1");
            obj.set_borderRadius("10px 10px 0px 0px");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Tablet",1180,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_air.form.sta_temp_value","text","ds_air_quality","TEMP_C");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_air.form.sta_humi_value","text","ds_air_quality","HUMI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_air.form.sta_dust_value","text","ds_air_quality","PM_10_0");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_air.form.sta_uDust_value","text","ds_air_quality","PM_2_5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_air.form.sta_voc_value","text","ds_air_quality","TVOC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_air.form.sta_carbon_value","text","ds_air_quality","CO_2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUB101CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUB101CT.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUB101CT.xfdl","lib::tpgm_com.xjs");
        this.registerScript("NUB101CT.xfdl", function() {
        /***********************************************************************
         * 화면ID    	: NUB101CT
         * 화면명   	: 호실현황
         * 화면설명 	: 호실 입소자 선택에서 선택한 호실의
        				  입소자와 공기질을 확인하는 화면
         * 작성일    	: ?
         * 작성자   	: ?
         * 수정이력 	: ↓↓↓↓↓↓↓
         ***********************************************************************
         *     	수정일     	수정자   	내용
         *		2021-07-26		박한준		1차수정
         *		2021-12-10		조기종		모니터링 방식으로 변경
         *		2021-12-22		조기종		eval 함수 제거
         ***********************************************************************
         ***********************************************************************
         */

        /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        this.executeIncludeScript("lib::tpgm_com.xjs"); /*include "lib::tpgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_currentDS = "";
        this.fv_currentGrid = "";
        const company = nexacro.getApplication().gv_company;
        const areCode = nexacro.getApplication().gv_curAreCode; // 층코드
        const areName = nexacro.getApplication().gv_curAreName; // 층이름
        const locCode = nexacro.getApplication().gv_curLocCode; // 생활실코드
        const locName = nexacro.getApplication().gv_curLocName; // 생활실이름
        this.timeCycle = 0;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.NUB101CT_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	this.sta_location.set_text(locName);

        	this.timeCycle = this.ds_nu_mon_cycle.getColumn(1, "STR1") * 1000;

        	this.fn_search();
        };

        this.NUB101CT_ontimer = function(obj,e)
        {
        	if(e.timerid == 1)
        	{
        		this.fn_search();
        	}
        };

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	// 카드 새로 그리기 위해 그려져있는 카드 삭제
        	for (let i = this.div_resident.form.components.length - 1; i >= 0; i--)
        	{
        		const rmDiv = this.div_resident.removeChild(this.div_resident.form.components[i].name);
        		rmDiv.destroy();
        	}
        	return true;
        };

        // 저장 전 validation
        this.fn_save_pre = function ()
        {
        	return true;
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //조회
        this.fn_search = function()
        {
        	if(!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/NUB101CTController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_air_quality=output1 ds_resident=output2";
        	const argument = "method=select "
        				+ "COMPANY_CD=" + company + " "
        				+ "AREA=" + areCode + " "
        				+ "LOCATION=" + locCode + " ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			this.killTimer(1);
        			// 수급자 카드 만들기
        			this.set_enableevent(false);
        			this.fn_makeResident();
        			this.set_enableevent(true);
        			// 공기질현황 데이터별 색깔 변경
        			this.fn_setAirQuality();
        			// 우측 아래 정보 문구 세팅
        			const diaperLine = this.ds_nu_mon_cycle.getColumn(1, "STR3");	// 기저귀 이전 기준
        			const timeLine = this.ds_nu_mon_cycle.getColumn(1, "STR1");	// 모니터링 주기
        			const humiLine = this.ds_nu_diaper_iot.getColumn(1, "STR5");	// 기저귀 습도 알림 기준
        			const batteryLine = this.ds_nu_diaper_iot.getColumn(1, "STR6");	// 기저귀 배터리 알림 기준
        			const infoStr = "※ 기저귀 상태는 " + diaperLine + "분전 및 현재 상태를 표시합니다. 화면은 " + timeLine + "초 주기로 갱신됩니다.";
        			this.sta_info.set_text(infoStr);
        			// 기저귀 연결 끊긴 수
        			const dcDiaper = this.ds_resident.getCaseCount("DIAPER_YN == 'Y' && (CONN_ST == null || CONN_ST == undefined)");
        			this.div_linkOut.form.sta_diaperNotCount.set_text(dcDiaper);
        			// 밴드 연결 끊긴 수
        			const dcBand = this.ds_resident.getCaseCount("BAND_YN == 'Y' && (HEART_RATE == null || HEART_RATE == undefined)");
        			this.div_linkOut.form.sta_pulseNotCount.set_text(dcBand);
        			// 기저귀 교체 수 (습도)
        			const exDiaperH = this.ds_resident.getCaseCount("DIAPER_YN == 'Y' && (CONN_ST != null && CONN_ST != undefined) && (HUMI_RATE >= " + humiLine + " && B_HUMI_RATE >=" + humiLine + ")");
        			this.div_exchange.form.sta_exDiaperCount.set_text(exDiaperH);
        			// 기저귀 교체 수 (배터리)
        			const exDiaperB = this.ds_resident.getCaseCount("DIAPER_YN == 'Y' && (CONN_ST != null && CONN_ST != undefined) && BAT_RATE <= " + batteryLine);
        			this.div_exchange.form.sta_exBatteryCount.set_text(exDiaperB);
        			// 저심박 긴급 수
        			const alBand = this.ds_resident.getCaseCount("BAND_YN == 'Y' && BAND_CLEAR_YN == 'N'");
        			this.div_alert.form.sta_alertBandCount.set_text(alBand);

        			// 수급자 카드 선택 유지
        			if(nexacro.getApplication().gds_taCurRes.getColumn(0, "RES_ID") != "" && nexacro.getApplication().gds_taCurRes.getColumn(0, "RES_ID") != undefined)
        			{
        				const num = this.ds_resident.findRow("RES_ID", nexacro.getApplication().gds_taCurRes.getColumn(0, "RES_ID"));
        				this.div_resident.form.components[num].setFocus();
        			}
        			else
        			{
        				if (this.div_resident.form.components.length > 0)
        					this.div_resident.form.components[0].setFocus();
        			}

        			this.setTimer(1, this.timeCycle);
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
        // 수급자 카드 만들기
        this.fn_makeResident = function()
        {
        	let left;
        	let divLeft;
        	const top = 1.32;
        	const width = 32.33;
        	const height = 45.11;
        	let right;
        	let divTop = top + "%";
        	let divHgap = 48;
        	const divWidth = width + "%";
        	const divHeight = height + "%";
        	let arrDivTop;

        	for(let i = 0; i < this.ds_resident.rowcount; i++)
        	{
        		if(i == 0 || i % 3 == 0)
        		{
        			left = 0.3;
        			divLeft = left + "%";
        			right = null;
        		}
        		else
        		{
        			left = left + 33.3;
        			divLeft = left + "%";
        			right = null;
        		}

        		if(i > 0 && i % 3 == 0)
        		{
        			arrDivTop = divTop.split("%");
        			divTop = parseFloat(arrDivTop[0]) + divHgap + "%";
        		}

        		const divId = "div_res" + i;
        		const resId = this.ds_resident.getColumn(i, "RES_ID");	// 수급자 ID
        		const name = this.ds_resident.getColumn(i, "NAME");	// 수급자 이름
        		const age = this.ds_resident.getColumn(i, "AGE");	// 수급자 나이
        		const sex = this.ds_resident.getColumn(i, "SEX");	// 수급자 성별
        		const con = this.ds_resident.getColumn(i, "CONN_ST");	// 기저귀 연결 상태
        		const humiRateN = this.ds_resident.getColumn(i, "HUMI_RATE");	// 기저귀 현재 습도
        		const humiRateB = this.ds_resident.getColumn(i, "B_HUMI_RATE");	// 기저귀 이전 습도
        		const batRate = this.ds_resident.getColumn(i, "BAT_RATE");	// 기저귀 배터리
        		const heartRate = this.ds_resident.getColumn(i, "HEART_RATE");	// 심박수
        		const bandAlert = this.ds_resident.getColumn(i, "BAND_CLEAR_YN");	// 저심박 값이 들어올때는 N으로만 들어옴
        		const bandAlertTime = this.ds_resident.getColumn(i, "BAN_TIME");	// 맥박이상 발생시간
        		const location = this.ds_resident.getColumn(i, "LOCATION");	// 생활실
        		const bandYn = this.ds_resident.getColumn(i, "BAND_YN");	// 밴드 착용 유무
        		const diaperYn = this.ds_resident.getColumn(i, "DIAPER_YN");	// 기저귀 착용 유무
        		this.fn_makeDiv(divId, divLeft, divTop, divWidth, divHeight, right, resId, bandAlert);
        		this.fn_makeDivContents(i, divId, name, age, sex, con, humiRateN, humiRateB, batRate, heartRate, bandAlert, bandYn, diaperYn, resId, bandAlertTime, location);
        	}

        	if(arrDivTop == undefined)
        	{
        		return;
        	}
        	const objDumi = new Div();
        	const dTop = parseFloat(arrDivTop[0]) + (divHgap * 2) + "%";
        	objDumi.init("div_dumi", 3, dTop, "90%", 3);
        	this.div_resident.addChild("div_dumi", objDumi);
        	objDumi.show();

        	this.div_resident.form.resetScroll();
        };

        // 수급자 카드틀 만들기
        this.fn_makeDiv = function(id, left, top, width, height, right, resId, bandAlert)
        {
        	const objDiv = new Div();
        	objDiv.init(id, left, top, width, height, right);
        	objDiv.set_background("#ffffff");
        	objDiv.set_borderRadius("10px");
        	objDiv.set_boxShadow("0px 0px 7px #dddddd");
        	objDiv.addEventHandler("onsetfocus", this.div_res_onsetfocus, this);
        	objDiv.__resId = resId;
        	objDiv.__bandAlert = bandAlert;

        	this.div_resident.addChild(id, objDiv);

        	objDiv.show();
        };

        // 카드 포커스 이벤트
        this.div_res_onsetfocus = function(obj, e)
        {
        	this.div_res_nonSelect();

        	obj.set_background("#edf9ff");
        	obj.form.all["div_status"].set_background("#82c9eb");
        	const name = obj.form.components["sta_name"].text;
        	nexacro.getApplication().gds_taCurRes.setColumn(0, "NAME", name);
        	nexacro.getApplication().gds_taCurRes.setColumn(0, "RES_ID", obj.__resId);
        };

        // 카드 비선택 상태로 만들기
        this.div_res_nonSelect = function()
        {
        	let bandAlert;
        	if (this.div_resident.form.components.length < 5)
        	{
        		for(let i = this.div_resident.form.components.length - 1; i >= 0; i--)
        		{
        			// 저심박일 경우
        			bandAlert = this.div_resident.form.components[i].__bandAlert;
        			if (bandAlert != null && bandAlert != undefined)
        			{
        				this.div_resident.form.components[i].set_background("#fffaa7");
        				this.div_resident.form.components[i].form.all["div_status"].set_background("#f85464");
        			}
        			else
        			{
        				this.div_resident.form.components[i].set_background("#ffffff");
        				this.div_resident.form.components[i].form.all["div_status"].set_background("#ffffff");
        			}
        		}
        	}
        	else
        	{
        		for(let i = this.div_resident.form.components.length - 2; i >= 0; i--)
        		{
        			// 저심박일 경우
        			bandAlert = this.div_resident.form.components[i].__bandAlert;
        			if (bandAlert != null && bandAlert != undefined)
        			{
        				this.div_resident.form.components[i].set_background("#fffaa7");
        				this.div_resident.form.components[i].form.all["div_status"].set_background("#f85464");
        			}
        			else
        			{
        				this.div_resident.form.components[i].set_background("#ffffff");
        				this.div_resident.form.components[i].form.all["div_status"].set_background("#ffffff");
        			}
        		}
        	}
        };

        // 수급자 카드 내용 만들기
        this.fn_makeDivContents = function(i, divId, name, age, sex, con, humiRateN, humiRateB, batRate, heartRate, bandAlert, bandYn, diaperYn, resId, bandAlertTime, location)
        {
        	let left, top, width, height, right;

        	// 상단 div
        	const divSid = "div_status";
        	left = 0, top = 0, width = null, height = 15, right = 0;
        	const objSdiv = new Div();
        	objSdiv.init(divSid, left, top, width, height, right, null);
        	objSdiv.set_background("#ffffff");
        	objSdiv.addEventHandler("onclick", this.fn_contents_onclick, this);
        	this.div_resident.form.all[divId].addChild(divSid, objSdiv);
        	objSdiv.show();

        	// 이름
        	const nameId = "sta_name";
        	left = 17, top = 21, width = 98, height = 32;
        	const objName = new Static();
        	objName.init(nameId, left, top, width, height);
        	objName.set_text(name);
        	objName.set_textAlign("left");
        	objName.set_font("normal 700 18pt/normal 'Noto Sans KR'");
        	objName.addEventHandler("onclick", this.fn_contents_onclick, this);
        	this.div_resident.form.all[divId].addChild(nameId, objName);
        	objName.show();

        	// 성별/나이
        	const ageId = "sta_age";
        	left = 18, top = 47, width = 56, height = 26;
        	let sexText;
        	switch(sex)
        	{
        		case "M":
        			sexText = "남";
        			break;
        		case "F":
        			sexText = "여";
        			break;
        		default:
        			sexText = "";
        			break;
        	}
        	const ageText = sexText + "/" + age;
        	const objAge = new Static();
        	objAge.init(ageId, left, top, width, height);
        	objAge.set_text(ageText);
        	objAge.addEventHandler("onclick", this.fn_contents_onclick, this);
        	this.div_resident.form.all[divId].addChild(ageId, objAge);
        	objAge.show();

        	// 기저귀 착용자일 경우
        	if (diaperYn == "Y")
        	{
        		// 기저귀 현재 습도 이미지
        		const diaperNimvId = "imv_diaperN";
        		left = 169, top = 68, width = 63, height = 49;
        		const objDiaperNimv = new ImageViewer();
        		objDiaperNimv.init(diaperNimvId, left, top, width, height);
        		const diaperNimageStr = this.fn_diaperImageSet(con, humiRateN);
        		objDiaperNimv.set_image(diaperNimageStr);
        		objDiaperNimv.set_background("transparent");
        		objDiaperNimv.addEventHandler("onclick", this.fn_contents_onclick, this);
        		this.div_resident.form.all[divId].addChild(diaperNimvId, objDiaperNimv);
        		objDiaperNimv.show();

        		// 기저귀 배터리 이미지
        		const diaperBaImvId = "imv_dipaerBa";
        		left = 198, top = 24, width = 39, height = 24;
        		const objDiaperBaImv = new ImageViewer();
        		objDiaperBaImv.init(diaperBaImvId, left, top, width, height);
        		const diaperBaImageStr = this.fn_batteryImageSet(con, batRate);
        		objDiaperBaImv.set_image(diaperBaImageStr);
        		objDiaperBaImv.set_background("transparent");
        		objDiaperBaImv.addEventHandler("onclick", this.fn_contents_onclick, this);
        		this.div_resident.form.all[divId].addChild(diaperBaImvId, objDiaperBaImv);
        		objDiaperBaImv.show();

        		// 기저귀가 연결되어있지 않으면 수치 표시 안함
        		if (con == 0 || con == 0.0 || con == undefined)
        		{

        		}
        		else
        		{
        			// 기저귀 배터리 수치
        			const diaperBaStaId = "sta_diaperBa";
        			left = 148, top = 19, width = 44, height = 24;
        			const objDiaperBaSta = new Static();
        			objDiaperBaSta.init(diaperBaStaId, left, top, width, height);
        			let batRateStr;
        			if (batRate <= 0)
        				batRateStr = "0";
        			else if (batRate >= 100)
        				batRateStr = "100";
        			else
        				batRateStr = batRate;
        			objDiaperBaSta.set_text(batRateStr);
        			objDiaperBaSta.set_textAlign("right");
        			objDiaperBaSta.set_font("normal 700 18pt/normal 'Noto Sans KR'");
        			objDiaperBaSta.set_color("#33c481");
        			objDiaperBaSta.addEventHandler("onclick", this.fn_contents_onclick, this);
        			this.div_resident.form.all[divId].addChild(diaperBaStaId, objDiaperBaSta);
        			objDiaperBaSta.show();

        			// 기저귀 현재 습도 수치
        			const diaperNstaId = "sta_diaperN";
        			left = 175, top = 118, width = 42, height = 24;
        			const objDiaperNrate = new Static();
        			objDiaperNrate.init(diaperNstaId, left, top, width, height);
        			let humiRateNStr;
        			if (humiRateN <= 0)
        				humiRateNStr = "0";
        			else if (humiRateN >= 100)
        				humiRateNStr = "100";
        			else
        				humiRateNStr = humiRateN;
        			objDiaperNrate.set_text(humiRateNStr);
        			objDiaperNrate.set_font("normal 700 18pt/normal 'Noto Sans KR'");
        			objDiaperNrate.set_textAlign("right");
        			objDiaperNrate.addEventHandler("onclick", this.fn_contents_onclick, this);
        			this.div_resident.form.all[divId].addChild(diaperNstaId, objDiaperNrate);
        			objDiaperNrate.show();

        			// 기저귀 현재 습도 단위
        			const diaperNstaUid = "sta_diaperNunit";
        			left = 220, top = 124, width = 19, height = 22;
        			const objDiaperNrateUnit = new Static();
        			objDiaperNrateUnit.init(diaperNstaUid, left, top, width, height);
        			objDiaperNrateUnit.set_text("%");
        			objDiaperNrateUnit.addEventHandler("onclick", this.fn_contents_onclick, this);
        			this.div_resident.form.all[divId].addChild(diaperNstaUid, objDiaperNrateUnit);
        			objDiaperNrateUnit.show();

        			if (humiRateB != null && humiRateB != undefined)
        			{
        				// 기저귀 이전 습도 이미지
        				const diaperBimvId = "imv_diaperB";
        				left = 86, top = 74, width = 61, height = 51;
        				const objDiaperBimv = new ImageViewer();
        				objDiaperBimv.init(diaperBimvId, left, top, width, height);
        				const diaperBimageStr = this.fn_diaper5minImageSet(humiRateB);
        				objDiaperBimv.set_image(diaperBimageStr);
        				objDiaperBimv.set_background("transparent");
        				objDiaperBimv.addEventHandler("onclick", this.fn_contents_onclick, this);
        				this.div_resident.form.all[divId].addChild(diaperBimvId, objDiaperBimv);
        				objDiaperBimv.show();

        				// 기저귀 이전 습도 수치
        				const diaperBstaId = "sta_diaperB";
        				left = 85, top = 121, width = 38, height = 24;
        				const objDiaperBrate = new Static();
        				objDiaperBrate.init(diaperBstaId, left, top, width, height);
        				let humiRateBStr;
        				if (humiRateB <= 0)
        					humiRateBStr = "0";
        				else if (humiRateB >= 100)
        					humiRateBStr = "100";
        				else
        					humiRateBStr = humiRateB;
        				objDiaperBrate.set_text(humiRateBStr);
        				objDiaperBrate.set_font("normal 700 15pt/normal 'Noto Sans KR'");
        				objDiaperBrate.set_textAlign("right");
        				objDiaperBrate.addEventHandler("onclick", this.fn_contents_onclick, this);
        				this.div_resident.form.all[divId].addChild(diaperBstaId, objDiaperBrate);
        				objDiaperBrate.show();

        				// 기저귀 이전 습도 단위
        				const diaperBstaUid = "sta_diaperBunit";
        				left = 126, top = 123, width = 19, height = 22;
        				const objDiaperBrateUnit = new Static();
        				objDiaperBrateUnit.init(diaperBstaUid, left, top, width, height);
        				objDiaperBrateUnit.set_text("%");
        				objDiaperBrateUnit.addEventHandler("onclick", this.fn_contents_onclick, this);
        				this.div_resident.form.all[divId].addChild(diaperBstaUid, objDiaperBrateUnit);
        				objDiaperBrateUnit.show();

        				// 기저귀 화살표
        				const diaperChevImvId = "imv_chevDiaper";
        				left = 145, top = 77, width = 19, height = 24;
        				const objDiaperChevImv = new ImageViewer();
        				objDiaperChevImv.init(diaperChevImvId, left, top, width, height);
        				objDiaperChevImv.set_image("theme://images/ico_chev_diaper.png");
        				objDiaperChevImv.set_background("transparent");
        				objDiaperChevImv.addEventHandler("onclick", this.fn_contents_onclick, this);
        				this.div_resident.form.all[divId].addChild(diaperChevImvId, objDiaperChevImv);
        				objDiaperChevImv.show();
        			}
        		}
        	}

        	// 밴드 착용자일 경우
        	if (bandYn == "Y")
        	{
        		// 맥박 이미지
        		const pulseId = "imv_pulse";
        		left = 270, top = 25, width = 51, height = 40;
        		const objPulseImv = new ImageViewer();
        		objPulseImv.init(pulseId, left, top, width, height);
        		const pulseImageStr = this.fn_pulseImageSet(heartRate);
        		objPulseImv.set_image(pulseImageStr);
        		objPulseImv.set_background("transparent");
        		objPulseImv.addEventHandler("onclick", this.fn_contents_onclick, this);
        		this.div_resident.form.all[divId].addChild(pulseId, objPulseImv);
        		objPulseImv.show();

        		if (heartRate != null && heartRate != undefined)
        		{
        			// 맥박 수치
        			const heartRateId = "sta_heartRate";
        			left = 264, top = 65, width = 66, heigth = 44;
        			const objHeartRateSta = new Static();
        			objHeartRateSta.init(heartRateId, left, top, width, height);
        			objHeartRateSta.set_text(heartRate);
        			objHeartRateSta.set_font("normal 700 25pt/normal 'Noto Sans KR'");
        			objHeartRateSta.set_textAlign("center");
        			objHeartRateSta.addEventHandler("onclick", this.fn_contents_onclick, this);
        			this.div_resident.form.all[divId].addChild(heartRateId, objHeartRateSta);
        			objHeartRateSta.show();
        		}

        		if (bandAlert != null && bandAlert != undefined)
        		{
        			// 저심박 버튼
        			const pulseAlertBtnId = "btn_pulseAlert";
        			left = 259, top = 110, width = 77, height = 34;
        			const objPulseAlertBtn = new Button();
        			objPulseAlertBtn.init(pulseAlertBtnId, left, top, width, height);
        			objPulseAlertBtn.set_background("#f85464");
        			objPulseAlertBtn.set_borderRadius("5px");
        			objPulseAlertBtn.set_color("#ffffff");
        			objPulseAlertBtn.set_text("저심박");
        			objPulseAlertBtn.set_font("normal 700 15pt/normal 'Noto Sans KR'");
        			objPulseAlertBtn.addEventHandler("onclick", this.btn_pulseAlert_onclick, this);
        			// 팝업으로 넘길 값들 변수로 세팅
        			objPulseAlertBtn.__resId = resId;	// 입소자 ID
        			objPulseAlertBtn.__name = name;		// 입소자명
        			objPulseAlertBtn.__age = age;		// 나이
        			objPulseAlertBtn.__bandAlertTime = bandAlertTime;	// 맥박이상 발생시간
        			this.div_resident.form.all[divId].addChild(pulseAlertBtnId, objPulseAlertBtn);
        			objPulseAlertBtn.show();

        			// div 색 변경
        			this.div_resident.form.all[divId].set_background("#fffaa7");
        			this.div_resident.form.all[divId].form.all[divSid].set_background("#f85464");
        		}
        	}
        };

        // 기저귀 현재 이미지 세팅
        this.fn_diaperImageSet = function(con, humiRate)
        {
        	let imageStr;

        	if (con == 0 || con == 0.0 || con == undefined)
        		imageStr = "theme://images/ico_diaper_nocon.png";
        	else
        	{
        		if (humiRate < 0 || (humiRate >= 0 && humiRate < 10))
        			imageStr = "theme://images/ico_diapernow0.png";
        		else if (humiRate >= 10 && humiRate < 20)
        			imageStr = "theme://images/ico_diapernow1.png";
        		else if (humiRate >= 20 && humiRate < 30)
        			imageStr = "theme://images/ico_diapernow2.png";
        		else if (humiRate >= 30 && humiRate < 40)
        			imageStr = "theme://images/ico_diapernow3.png";
        		else if (humiRate >= 40 && humiRate < 50)
        			imageStr = "theme://images/ico_diapernow4.png";
        		else if (humiRate >= 50 && humiRate < 60)
        			imageStr = "theme://images/ico_diapernow5.png";
        		else if (humiRate >= 60 && humiRate < 70)
        			imageStr = "theme://images/ico_diapernow6.png";
        		else if (humiRate >= 70 && humiRate < 80)
        			imageStr = "theme://images/ico_diapernow7.png";
        		else if (humiRate >= 80 && humiRate < 90)
        			imageStr = "theme://images/ico_diapernow8.png";
        		else if (humiRate >= 90 && humiRate < 100)
        			imageStr = "theme://images/ico_diapernow9.png";
        		else if (humiRate >= 100)
        			imageStr = "theme://images/ico_diapernow10.png";
        	}

        	return imageStr;
        };

        // 기저귀 이전 이미지 세팅
        this.fn_diaper5minImageSet = function(humiRate)
        {
        	let imageStr;

        	if (humiRate < 0 || (humiRate >= 0 && humiRate < 10))
        		imageStr = "theme://images/ico_diaper5min0.png";
        	else if (humiRate >= 10 && humiRate < 20)
        		imageStr = "theme://images/ico_diaper5min1.png";
        	else if (humiRate >= 20 && humiRate < 30)
        		imageStr = "theme://images/ico_diaper5min2.png";
        	else if (humiRate >= 30 && humiRate < 40)
        		imageStr = "theme://images/ico_diaper5min3.png";
        	else if (humiRate >= 40 && humiRate < 50)
        		imageStr = "theme://images/ico_diaper5min4.png";
        	else if (humiRate >= 50 && humiRate < 60)
        		imageStr = "theme://images/ico_diaper5min5.png";
        	else if (humiRate >= 60 && humiRate < 70)
        		imageStr = "theme://images/ico_diaper5min6.png";
        	else if (humiRate >= 70 && humiRate < 80)
        		imageStr = "theme://images/ico_diaper5min7.png";
        	else if (humiRate >= 80 && humiRate < 90)
        		imageStr = "theme://images/ico_diaper5min8.png";
        	else if (humiRate >= 90 && humiRate < 100)
        		imageStr = "theme://images/ico_diaper5min9.png";
        	else if (humiRate >= 100)
        		imageStr = "theme://images/ico_diaper5min10.png";

        	return imageStr;
        };

        // 배터리 이미지 세팅
        this.fn_batteryImageSet = function(con, batRate)
        {
        	let imageStr;

        	if (con == 0 || con == 0.0 || con == undefined)
        		imageStr = "theme://images/ico_battery_nocon.png";
        	else
        	{
        		if (batRate < 0 || (batRate >= 0 && batRate < 10))
        			imageStr = "theme://images/ico_battery0.png";
        		else if (batRate >= 10 && batRate < 20)
        			imageStr = "theme://images/ico_battery1.png";
        		else if (batRate >= 20 && batRate < 30)
        			imageStr = "theme://images/ico_battery2.png";
        		else if (batRate >= 30 && batRate < 40)
        			imageStr = "theme://images/ico_battery3.png";
        		else if (batRate >= 40 && batRate < 50)
        			imageStr = "theme://images/ico_battery4.png";
        		else if (batRate >= 50 && batRate < 60)
        			imageStr = "theme://images/ico_battery5.png";
        		else if (batRate >= 60 && batRate < 70)
        			imageStr = "theme://images/ico_battery6.png";
        		else if (batRate >= 70 && batRate < 80)
        			imageStr = "theme://images/ico_battery7.png";
        		else if (batRate >= 80 && batRate < 90)
        			imageStr = "theme://images/ico_battery8.png";
        		else if (batRate >= 90 && batRate < 100)
        			imageStr = "theme://images/ico_battery9.png";
        		else if (batRate >= 100)
        			imageStr = "theme://images/ico_battery10.png";
        	}

        	return imageStr;
        };

        // 맥박 이미지 세팅
        this.fn_pulseImageSet = function(heartRate)
        {
        	let imageStr;

        	if (heartRate != null && heartRate != undefined)
        		imageStr = "theme://images/ico_pulse_red.png";
        	else
        		imageStr = "theme://images/ico_pulse_nocon.png";

        	return imageStr;
        };

        // 공기질현황 데이터 기준별 css 변경
        this.fn_setAirQuality = function ()
        {
        // 	const tempC = this.div_air.form.sta_temp_value.text; // 온도
        // 	const humi = this.div_air.form.sta_humi_value.text; // 습도
        // 	const dust = this.div_air.form.sta_dust_value.text; // 미세먼지
        // 	const Udust = this.div_air.form.sta_uDust_value.text // 초미세먼지
        // 	const voc = this.div_air.form.sta_voc_value.text; // 휘발성 유기화합물
        // 	const carbon = this.div_air.form.sta_carbon_value.text // 이산화탄소
        	const tempC = this.ds_air_quality.getColumn(0, "TEMP_C");
        	const humi = this.ds_air_quality.getColumn(0, "HUMI");
        	const dust = this.ds_air_quality.getColumn(0, "PM_10_0");
        	const Udust = this.ds_air_quality.getColumn(0, "PM_2_5");
        	const voc = this.ds_air_quality.getColumn(0, "TVOC");
        	const carbon = this.ds_air_quality.getColumn(0, "CO_2");

        	let sta = "";
        	let cmcd = "";

        	// 온도
        	sta = this.div_air.form.sta_temp_value;
        	const tempLineRow = this.ds_nu_air_quality.findRow("CMCD", "50");
        	const tempLine = this.ds_nu_air_quality.getColumn(tempLineRow, "STR1");

        	if(tempC >= tempLine) // 온도 21기준 상한, 하한
        	{
        		cmcd = "50"; // 온도상한
        		this.fn_setDivCss(tempC, sta, cmcd);
        	}
        	else
        	{
        		cmcd = "60"; // 온도하한
        		this.fn_setDivCss2(tempC, sta, cmcd);
        	}

        	// 습도
        	sta = this.div_air.form.sta_humi_value;
        	const humiLineRow = this.ds_nu_air_quality.findRow("CMCD", "70");
        	const humiLine = this.ds_nu_air_quality.getColumn(humiLineRow, "STR1");

        	if(humi >= humiLine) // 습도 50% 기준 상한, 하한
        	{
        		cmcd = "70"; // 습도상한
        		this.fn_setDivCss(humi, sta, cmcd);
        	}
        	else
        	{
        		cmcd = "80"; // 습도하한
        		this.fn_setDivCss2(humi, sta, cmcd);
        	}

        	// 미세먼지
        	sta = this.div_air.form.sta_dust_value;
        	cmcd = "10";
        	this.fn_setDivCss(dust, sta, cmcd);

        	// 초미세먼지
        	sta = this.div_air.form.sta_uDust_value;
        	cmcd = "20";
        	this.fn_setDivCss(Udust, sta, cmcd);

        	// VOC
        	sta = this.div_air.form.sta_voc_value;
        	cmcd = "40";
        	this.fn_setDivCss(voc, sta, cmcd);

        	// 이산화탄소
        	sta = this.div_air.form.sta_carbon_value;
        	cmcd = "30";
        	this.fn_setDivCss(carbon, sta, cmcd);
        };

        // 공기질현황 데이터 기준별 css 변경(값, div, static, 공기질현황 공통코드)
        this.fn_setDivCss = function (value, sta, cmcd)
        {
        	const fRow = this.ds_nu_air_quality.findRow("CMCD", cmcd);

        	let obj = {};

        	for (let i = 1; i <= 8; i++) // 배열 동적 STR1~STR8 변수 생성
        	{
        		try
        		{
        			obj["str" + i] = parseFloat(this.ds_nu_air_quality.getColumn(fRow, "STR" + i));
        		}
        		catch (e)
        		{
        			obj["str" + i] = this.ds_nu_air_quality.getColumn(fRow, "STR" + i);
        		}

        	}
        	if (!Sct.Util.isEmpty(value)) // 기준별 CSS 변경
        	{
        		if (obj["str1"] <= value && value <= obj["str2"])
        		{
        			sta.set_cssclass("sta_blue");
        		}
        		else if (obj["str3"] <= value && value <= obj["str4"])
        		{
        			sta.set_cssclass("sta_green");
        		}
        		else if (obj["str5"] <= value && value <= obj["str6"])
        		{
        			sta.set_cssclass("sta_orange");
        		}
        		else if (obj["str7"] <= value && value <= obj["str8"])
        		{
        			sta.set_cssclass("sta_red");
        		}
        		else if (value > obj["str8"])
        		{
        			sta.set_cssclass("sta_red");
        		}
        	}
        };

        //온도, 습도 하한
        this.fn_setDivCss2 = function (value, sta, cmcd)
        {
        	const fRow = this.ds_nu_air_quality.findRow("CMCD", cmcd); // 미세먼지

        	let obj = {};

        	for (let i = 1; i <= 8; i++)  // 배열 동적 STR1~STR8 변수 생성
        	{
        		try
        		{
        			obj["str" + i] = parseFloat(this.ds_nu_air_quality.getColumn(fRow, "STR" + i));
        		}
        		catch (e)
        		{
        			obj["str" + i] = this.ds_nu_air_quality.getColumn(fRow, "STR" + i);
        		}
        	}

        	if(!Sct.Util.isEmpty(value)) // 기준별 CSS 변경
        	{
        		if (obj["str1"] >= value && value >= obj["str2"])
        		{
        			sta.set_cssclass("sta_blue");
        		}
        		else if (obj["str3"] >= value && value >= obj["str4"])
        		{
        			sta.set_cssclass("sta_green");
        		}
        		else if (obj["str5"] >= value && value >= obj["str6"])
        		{
        			sta.set_cssclass("sta_orange");
        		}
        		else if (obj["str7"] >= value && value >= obj["str8"])
        		{
        			sta.set_cssclass("sta_red");
        		}
        		else if (value < obj["str8"])
        		{
        			sta.set_cssclass("sta_red");
        		}
        	}
        };

         /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 저심박 버튼 클릭 이벤트
        this.btn_pulseAlert_onclick = function(obj,e)
        {
        	const param = {
        			COMPANY_CD : company
        		,	RES_ID : obj.__resId
        		,	NAME : obj.__name
        		,	AGE : obj.__age
        		,	BAND_ALERT_TIME : obj.__bandAlertTime
        	};

        	Sct.tPopup(this, "pop1", 350, 350, param, "TabletPOP::NUB_BAND_EVENT_POP.xfdl", "fn_popCallback");

        	this.killTimer(1);
        };

        // 카드 내부 컴포넌트 클릭 이벤트
        this.fn_contents_onclick = function(obj,e)
        {
        	// 입소자 카드에 포커스 주기
        	obj.parent.setFocus();
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        // 	if(Sct.Util.isEmpty(strDs)) return;
        // 	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "pop1" : // 맥박이상 처리
        			this.fn_search();
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };

        this.sta_location_onclick = function(obj,e)
        {
        	this.reload();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.addEventHandler("onload",this.NUB101CT_onload,this);
            this.addEventHandler("ontimer",this.NUB101CT_ontimer,this);
            this.div_resident.addEventHandler("onclick",this.formClick,this);
            this.div_quality.form.sta_blue.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_quality.form.sta_blue_name.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_quality.form.sta_green.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_quality.form.sta_green_name.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_quality.form.sta_orange.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_quality.form.sta_orange_name.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_quality.form.sta_red.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_quality.form.sta_red_name.addEventHandler("onclick",this.Static00_onclick,this);
            this.sta_location.addEventHandler("onclick",this.sta_location_onclick,this);
        };
        this.loadIncludeScript("NUB101CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
