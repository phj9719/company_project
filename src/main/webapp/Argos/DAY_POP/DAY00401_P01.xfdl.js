(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00401_P01");
            this.set_titletext("송영기록 수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(785,540);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"K_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"M_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"k_number\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"k_code\" type=\"STRING\" size=\"256\"/><Column id=\"k_name\" type=\"STRING\" size=\"256\"/><Column id=\"k_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"시작코스\" type=\"STRING\" size=\"256\"/><Column id=\"시작차번호\" type=\"STRING\" size=\"256\"/><Column id=\"시작기사\" type=\"STRING\" size=\"256\"/><Column id=\"시작기코드\" type=\"STRING\" size=\"256\"/><Column id=\"시작거주지\" type=\"STRING\" size=\"256\"/><Column id=\"시작시간\" type=\"STRING\" size=\"256\"/><Column id=\"시작시\" type=\"STRING\" size=\"256\"/><Column id=\"시작분\" type=\"STRING\" size=\"256\"/><Column id=\"시작동승\" type=\"STRING\" size=\"256\"/><Column id=\"오전거리\" type=\"STRING\" size=\"256\"/><Column id=\"오전장소\" type=\"STRING\" size=\"256\"/><Column id=\"종료코스\" type=\"STRING\" size=\"256\"/><Column id=\"종료차번호\" type=\"STRING\" size=\"256\"/><Column id=\"종료기사\" type=\"STRING\" size=\"256\"/><Column id=\"종료기코드\" type=\"STRING\" size=\"256\"/><Column id=\"종료거주지\" type=\"STRING\" size=\"256\"/><Column id=\"종료시간\" type=\"STRING\" size=\"256\"/><Column id=\"종료시\" type=\"STRING\" size=\"256\"/><Column id=\"종료분\" type=\"STRING\" size=\"256\"/><Column id=\"종료동승\" type=\"STRING\" size=\"256\"/><Column id=\"오후거리\" type=\"STRING\" size=\"256\"/><Column id=\"오후장소\" type=\"STRING\" size=\"256\"/><Column id=\"단기시간\" type=\"STRING\" size=\"256\"/><Column id=\"단기시작시\" type=\"STRING\" size=\"256\"/><Column id=\"단기시작분\" type=\"STRING\" size=\"256\"/><Column id=\"단기종료시\" type=\"STRING\" size=\"256\"/><Column id=\"단기종료분\" type=\"STRING\" size=\"256\"/><Column id=\"단기사유\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_use_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">Y</Col><Col id=\"CMNM\">Y</Col></Row><Row><Col id=\"CMCD\">N</Col><Col id=\"CMNM\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_remark", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">01</Col><Col id=\"CMNM\">보호자의휴식</Col></Row><Row><Col id=\"CMCD\">02</Col><Col id=\"CMNM\">사망</Col></Row><Row><Col id=\"CMCD\">03</Col><Col id=\"CMNM\">휴식</Col></Row><Row><Col id=\"CMCD\">04</Col><Col id=\"CMNM\">서비스거부</Col></Row><Row><Col id=\"CMCD\">05</Col><Col id=\"CMNM\">전월연계</Col></Row><Row><Col id=\"CMCD\">06</Col><Col id=\"CMNM\">익월연계</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dist", this);
            obj._setContents("<ColumnInfo><Column id=\"combocode\" type=\"STRING\" size=\"256\"/><Column id=\"comboname\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_car", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"차구분\" type=\"STRING\" size=\"256\"/><Column id=\"차종\" type=\"STRING\" size=\"256\"/><Column id=\"차번호\" type=\"STRING\" size=\"256\"/><Column id=\"운전자\" type=\"STRING\" size=\"256\"/><Column id=\"운전코드\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_car_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"combocode\" type=\"STRING\" size=\"256\"/><Column id=\"comboname\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_main","10","35","765",null,null,"10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","11","9","260","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("28");
            obj.set_text("송영기록조회수정");
            obj.set_cssclass("lb01");
            this.div_main.addChild(obj.name, obj);

            obj = new Div("div_line","10","40",null,"2","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("29");
            obj.set_background("#000000");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1","9","77","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("30");
            obj.set_text("송영일자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1","91","77","660","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2","9","110","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("시작차량");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body2","91","110","660","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3","9","143","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","91","143","660","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4","9","176","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("실거주지");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4","91","176","660","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_date_value","99","85","119","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("38");
            obj.set_text("2022.04.07");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5","9","209","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("시작시간");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body5","91","209","660","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2_1","389","110","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("종료차량");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3_1","389","143","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head6","9","242","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body6","91","242","660","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head7","9","275","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("시작거리");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body7","91","275","660","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head8","9","308","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("시작장소");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body8","91","308","660","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_1","389","77","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("수급자명");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4_1","389","176","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("실거주지");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5_1","389","209","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("종료시간");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head6_1","389","242","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head7_1","389","275","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("종료거리");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head8_1","389","308","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("종료장소");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_scar_gubun","99","118","19","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("55");
            obj.set_text("01");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("cmb_scar_select","250","114","121","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_car_combo");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            obj.set_text("cmb_00");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_sDriver","14","147","73","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("2");
            obj.set_text("운전자");
            obj.set_cssclass("btn_worker");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_eDriver","394","147","73","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("13");
            obj.set_text("운전자");
            obj.set_cssclass("btn_worker");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_eHelper","394","246","73","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("17");
            obj.set_text("동승자");
            obj.set_cssclass("btn_worker");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_sHelper","14","246","73","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("6");
            obj.set_text("동승자");
            obj.set_cssclass("btn_worker");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_scar_code","139","118","79","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("56");
            obj.set_text("72도1079");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_ecar_gubun","479","118","19","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("57");
            obj.set_text("01");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_ecar_code","519","118","79","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("58");
            obj.set_text("72도1079");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("cmb_ecar_select","613","114","121","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_car_combo");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            obj.set_text("cmb_00");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("cmb_slive","97","181","48","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_use_yn");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("cmb_elive","477","181","48","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_use_yn");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_start_hour","97","213","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("4");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_timeColon1","130","214","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("59");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_start_min","140","213","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_end_hour00","477","213","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("15");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_timeColon2","510","214","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("60");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_end_min","520","213","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("16");
            obj.set_value("00");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_sdriver_name","99","151","69","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("61");
            obj.set_text("이동철");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_sdriver_code","179","151","79","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("62");
            obj.set_text("20210004");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_edriver_name","479","151","69","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("63");
            obj.set_text("이동철");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_edriver_code","559","151","79","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("64");
            obj.set_text("20210004");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_mname","479","85","69","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("65");
            obj.set_text("이동철");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_mcode","559","85","79","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("66");
            obj.set_text("20210004");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("cmb_sdist_select","250","280","121","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_dist");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            obj.set_text("");
            obj.set_index("-1");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("cmb_edist_select","613","280","121","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_dist");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            obj.set_text("");
            obj.set_index("-1");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_shelper","97","247","79","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("7");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_ehelper","477","247","79","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("18");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_splace","97","313","189","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("10");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_eplace","477","313","189","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("21");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_no","14","50","58","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("67");
            obj.set_text("기록번호 : ");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_no_value","77","50","60","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("68");
            obj.set_text("00000000");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_startErase","276","51","112","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_text("시작송영지움");
            obj.set_cssclass("btn_eraser");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_endErase","638","51","112","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("11");
            obj.set_text("종료송영지움");
            obj.set_cssclass("btn_eraser");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_subTitle2","11","369","260","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("69");
            obj.set_text("단기보호");
            obj.set_cssclass("lb01");
            this.div_main.addChild(obj.name, obj);

            obj = new Div("div_line00","10","400",null,"2","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("70");
            obj.set_background("#000000");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head9","9","408","83","64",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("단기보호\r\n야간시간");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body9","91","408","660","64",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head9_1","389","408","83","64",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("이용사유");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_from_hour","97","418","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("22");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_timeColon3","130","419","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("74");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_from_min","140","418","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("23");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_no02","98","450","279","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("75");
            obj.set_text("▲ 단기보호 야간시간 익일까지 표시 예시) 22:00 - 08:00");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_timeColon1_01_00","180","419","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("76");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_to_hour","197","418","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("24");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_timeColon1_01_01","230","419","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("77");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_to_min","240","418","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("25");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("cmb_remark_select","613","419","121","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("27");
            obj.set_innerdataset("ds_remark");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_text("보호자의휴식");
            obj.set_index("0");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_remark","477","419","129","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("26");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_sdist","97","280","40","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("9");
            obj.set_format("#0.#");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_edist","477","280","40","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("20");
            obj.set_format("#0.#");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new Div("div_func","10","0",null,"35","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_refresh","0","5","90","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("새로고침");
            obj.set_cssclass("btn_refresh");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_set",null,"5","70","25","0",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.div_func.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_car_combo","-340","71","321","255",null,null,null,null,null,null,this);
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_carList","0","0",null,null,"0","0",null,null,null,null,this.pdiv_car_combo.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_car");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:차구분\"/><Cell col=\"1\" text=\"bind:차종\"/><Cell col=\"2\" text=\"bind:차번호\"/><Cell col=\"3\" text=\"bind:운전자\"/></Band></Format></Formats>");
            this.pdiv_car_combo.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",785,540,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_main.form.sta_no_value","text","ds_data","k_number");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_main.form.sta_date_value","text","ds_data","date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_main.form.sta_scar_gubun","text","ds_data","시작코스");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_main.form.sta_scar_code","text","ds_data","시작차번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_main.form.sta_sdriver_name","text","ds_data","시작기사");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_main.form.sta_sdriver_code","text","ds_data","시작기코드");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_main.form.cmb_slive","value","ds_data","시작거주지");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_main.form.edt_start_hour","value","ds_data","시작시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_main.form.edt_start_min","value","ds_data","시작분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_main.form.edt_shelper","value","ds_data","시작동승");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_main.form.edt_splace","value","ds_data","오전장소");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_main.form.sta_mname","text","ds_data","k_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_main.form.sta_mcode","text","ds_data","k_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_main.form.sta_ecar_gubun","text","ds_data","종료코스");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_main.form.sta_ecar_code","text","ds_data","종료차번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_main.form.sta_edriver_name","text","ds_data","종료기사");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_main.form.sta_edriver_code","text","ds_data","종료기코드");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_main.form.cmb_elive","value","ds_data","종료거주지");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_main.form.edt_end_hour00","value","ds_data","종료시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_main.form.edt_end_min","value","ds_data","종료분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_main.form.edt_ehelper","value","ds_data","종료동승");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_main.form.edt_eplace","value","ds_data","오후장소");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_main.form.edt_from_hour","value","ds_data","단기시작시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_main.form.edt_from_min","value","ds_data","단기시작분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_main.form.edt_to_hour","value","ds_data","단기종료시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_main.form.edt_to_min","value","ds_data","단기종료분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_main.form.edt_remark","value","ds_data","단기사유");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_main.form.mae_sdist","value","ds_data","오전거리");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_main.form.mae_edist","value","ds_data","오후거리");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00401_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00401_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00401_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00401_P01
         * 화면명   	: 송영기록 수정
         * 화면설명 	: 이동서비스 송영기록에서 송영기록을 수정하는 팝업
         * 작성일   	: 2022-04-27
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용

         ***********************************************************************
         비고 : - 좌표계에 차량선택 콤보용 popupdiv 컴포넌트 배치중
         */
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        const fv_sicode = nexacro.getApplication().gds_userInfo.getColumn(0, "sicode");
        const fv_knumber = this.parent.K_NUMBER;
        const fv_mcode = this.parent.M_CODE;
        const fv_mname = this.parent.M_NAME;
        const fv_date = this.parent.DATE;
        this.carFlag = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 저장을 위한 gv_curWinKey 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00401_P01";

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "K_NUMBER", fv_knumber);
        	this.ds_search.setColumn(0, "M_CODE", fv_mcode);

        	// 콤보
         	this.fn_setComboDs(obj);
        	this.fn_set_car_combo();

        	// 오픈시 조회
        	this.fn_search();
        };
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	return true;
        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //조회
        this.fn_search = function ()
        {
        	//validation
        	if (!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_data=output1";
        	const argument = "method=getList"
        				   + " sqlId=DAY00401_P01.DAY00401_P01_DS_DATA_S";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 차량 조회
        this.fn_car_search = function()
        {
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_car=output1";
        	const argument = "method=getList"
        				   + " sqlId=DAY00401_P01.DAY00401_P01_DS_CAR_S";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, false);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if (strSvcID == "search")
        		{
        			if (this.ds_data.rowcount == 0)
        			{
        				const nRow = this.ds_data.addRow();
        				this.ds_data.setColumn(nRow, "sicode", fv_sicode);
        				const date = fv_date.getFullYear() + "." + ((fv_date.getMonth() + 1) + "").padStart(2, '0') + "." + (fv_date.getDate() + "").padStart(2, '0');
        				this.ds_data.setColumn(nRow, "date", date);
        				this.ds_data.setColumn(nRow, "k_nalja", fv_date);
        				this.ds_data.setColumn(nRow, "k_code", fv_mcode);
        				this.ds_data.setColumn(nRow, "k_name", fv_mname);
        				this.ds_data.setColumn(nRow, "시작시", "00");
        				this.ds_data.setColumn(nRow, "시작분", "00");
        				this.ds_data.setColumn(nRow, "종료시", "00");
        				this.ds_data.setColumn(nRow, "종료분", "00");
        				this.ds_data.setColumn(nRow, "단기시작시", "00");
        				this.ds_data.setColumn(nRow, "단기시작분", "00");
        				this.ds_data.setColumn(nRow, "단기종료시", "00");
        				this.ds_data.setColumn(nRow, "단기종료분", "00");
        			}
        			else
        			{

        			}
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
        // 콤보 세팅
        this.fn_setComboDs = function(obj)
        {
        	const comboDsParamArr = [
        		{ outDsName : "ds_dist", sqlId : "DAY00401_P01.DAY00401_P01_DS_DIST_S", param : this.ds_search, bEmptyRow : false }
        	];
        	this.gfn_setComboDs(obj, comboDsParamArr);
        };

        // 차량 콤보 세팅
        this.fn_set_car_combo = function()
        {
        	this.ds_car_combo.clearData();

        	this.fn_car_search();

        	if (this.ds_car.rowcount > 0)
        	{
        		for (let i = 0; i < this.ds_car.rowcount; i++)
        		{
        			let combonameStr = "";
        			const nRow = this.ds_car_combo.addRow();
        			const gubun = this.ds_car.getColumn(i, "차구분");

        			this.ds_car_combo.setColumn(nRow, "combocode", gubun);
        			this.ds_car_combo.setColumn(nRow, "comboname", gubun);
        		}
        	}
        };

        // 데이터 세팅
        this.fn_setData = function () {
        	let sHour = this.ds_data.getColumn(0, "시작시");
        	let sMin = this.ds_data.getColumn(0, "시작분");
        	let eHour = this.ds_data.getColumn(0, "종료시");
        	let eMin = this.ds_data.getColumn(0, "종료분");
        	let nsHour = this.ds_data.getColumn(0, "단기시작시");
        	let nsMin = this.ds_data.getColumn(0, "단기시작분");
        	let neHour = this.ds_data.getColumn(0, "단기종료시");
        	let neMin = this.ds_data.getColumn(0, "단기종료분");

        	if (Sct.Util.isEmpty(sHour))
        		sHour = "00";
        	if (Sct.Util.isEmpty(sMin))
        		sMin = "00";
        	if (Sct.Util.isEmpty(eHour))
        		eHour = "00";
        	if (Sct.Util.isEmpty(eMin))
        		eMin = "00";
        	if (Sct.Util.isEmpty(nsHour.trim()))
        		nsHour = "00";
        	if (Sct.Util.isEmpty(nsMin.trim()))
        		nsMin = "00";
        	if (Sct.Util.isEmpty(neHour.trim()))
        		neHour = "00";
        	if (Sct.Util.isEmpty(neMin.trim()))
        		neMin = "00";

        	if (nsHour < "18" && nsHour > "00")
        	{
        		this.alert("야간시간을 확인 하세요.");
        		return false;
        	}

        	if (neHour > "08")
        	{
        		this.alert("야간시간을 확인 하세요.");
        		return false;
        	}

        	if (nsHour == "00" && neHour == "00")
        	{
        		nsMin = "00";
        		neMin = "00";
        	}

        	this.ds_data.setColumn(0, "시작시간", sHour + ":" + sMin);
        	this.ds_data.setColumn(0, "종료시간", eHour + ":" + eMin);
        	this.ds_data.setColumn(0, "단기시간", nsHour + ":" + nsMin + "-" + neHour + ":" + neMin);

        	this.ds_return.clear();

        	this.ds_return.copyData(this.ds_data);

        	this.close(this.ds_return.saveXML());
        };
        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 운전자 선택 팝업
        this.btn_driver_select = function(obj,e)
        {
        	let svcId = "";

        	switch(obj.id) {
        		case "btn_sDriver" :	// 시작운전자
        			svcId = "sDriver";
        			break;
        		case "btn_sHelper" :	// 시작동승자
        			svcId = "sHelper";
        			break;
        		case "btn_eDriver" :	// 종료운전자
        			svcId = "eDriver";
        			break;
        		case "btn_eHelper" :	// 종료동승자
        			svcId = "eHelper";
        			break;
        		default:
        	}

        	const param = {
        		SICODE : fv_sicode
        	,	DATE : this.ds_data.getColumn(0, "k_nalja")
        	};

        	Sct.popup(this, svcId, 450, 400, "입력담당자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "sDriver" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				this.ds_data.setColumn(0, "시작기사", nexacro.trim(objDs.getColumn(0, "c_name")));
        				this.ds_data.setColumn(0, "시작기코드", objDs.getColumn(0, "c_staffid"));
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "시작기사", "");
        				this.ds_data.setColumn(0, "시작기코드", "");
        			}
        			break;
        		case "sHelper" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				this.ds_data.setColumn(0, "시작동승", nexacro.trim(objDs.getColumn(0, "c_name")));
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "시작동승", "");
        			}
        			break;
        		case "eDriver" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				this.ds_data.setColumn(0, "종료기사", nexacro.trim(objDs.getColumn(0, "c_name")));
        				this.ds_data.setColumn(0, "종료기코드", objDs.getColumn(0, "c_staffid"));
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "종료기사", "");
        				this.ds_data.setColumn(0, "종료기코드", "");
        			}
        			break;
        		case "eHelper" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				this.ds_data.setColumn(0, "종료동승", nexacro.trim(objDs.getColumn(0, "c_name")));
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "종료동승", "");
        			}
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 송영지움
        this.btn_erase_onclick = function(obj,e)
        {
        	if (this.ds_data.rowcount < 1)
        		return;

        	let str = "";
        	let str2 = "";
        	let cmbStr = "";

        	switch(obj.id) {
        		case "btn_startErase" :
        			str = "시작";
        			str2 = "오전";
        			cmbStr = "cmb_scar_select";
        			break;
        		case "btn_endErase" :
        			str = "종료";
        			str2 = "오후";
        			cmbStr = "cmb_ecar_select";
        			break;
        		default:
        	}

        	this.ds_data.setColumn(0, str + "코스", "");
        	this.ds_data.setColumn(0, str + "차번호", "");
        	this.ds_data.setColumn(0, str + "기사", "");
        	this.ds_data.setColumn(0, str + "기코드", "");
        	this.ds_data.setColumn(0, str + "거주지", "");
        	this.ds_data.setColumn(0, str + "시", "00");
        	this.ds_data.setColumn(0, str + "분", "00");
        	this.ds_data.setColumn(0, str + "동승", "");
        	this.ds_data.setColumn(0, str2 + "거리", "");
        	this.ds_data.setColumn(0, str2 + "장소", "");
        	this.div_main.form.components[cmbStr].set_value("");
        };

        // 새로고침 버튼
        this.div_func_btn_refresh_onclick = function(obj,e)
        {
        	this.fn_search();
        };

        // 차량선택 콤보 클릭 이벤트
        this.cmb_car_select_onlbuttondown = function(obj,e)
        {
        	e.preventDefault();

        	switch(obj.id) {
        		case "cmb_scar_select" :
        			this.carFlag = "1";
        			break;
        		case "cmb_ecar_select" :
        			this.carFlag = "2";
        			break;
        		default:
        	}

        	this.pdiv_car_combo.trackPopupByComponent(obj, 0, obj.height);
        };

        // 차량 콤보 아이템(그리드) 셀 클릭 이벤트
        this.pdiv_car_combo_grd_carList_oncellclick = function(obj,e)
        {
        	const gubun = this.ds_car.getColumn(e.row, "차구분");
        	const no = this.ds_car.getColumn(e.row, "차번호");
        	const driver = this.ds_car.getColumn(e.row, "운전자");
        	const driverCode = this.ds_car.getColumn(e.row, "운전코드");

        	let live = "";
        	if (no.indexOf("미차량") > -1)
        		live = "N";
        	else
        		live = "Y";

        	switch(this.carFlag) {
        		case "1":
        			this.ds_data.setColumn(0, "시작코스", gubun);
        			this.ds_data.setColumn(0, "시작차번호", no);
        			this.ds_data.setColumn(0, "시작기사", driver);
        			this.ds_data.setColumn(0, "시작기코드", driverCode);
        			this.ds_data.setColumn(0, "시작거주지", live);
        			this.div_main.form.cmb_scar_select.set_value(gubun);
        			break;
        		case "2":
        			this.ds_data.setColumn(0, "종료코스", gubun);
        			this.ds_data.setColumn(0, "종료차번호", no);
        			this.ds_data.setColumn(0, "종료기사", driver);
        			this.ds_data.setColumn(0, "종료기코드", driverCode);
        			this.ds_data.setColumn(0, "종료거주지", live);
        			this.div_main.form.cmb_ecar_select.set_value(gubun);
        			break;
        		default:
        	}

        	this.pdiv_car_combo.closePopup();
        };

        // 거리 콤보 아이템변경 이벤트
        this.cmb_dist_select_onitemchanged = function(obj,e)
        {
        	let str = "";

        	switch(obj.id) {
        		case "cmb_sdist_select" :
        			str = "오전";
        			break;
        		case "cmb_edist_select" :
        			str = "오후";
        			break;
        		default:
        	}

        	const textArr = e.posttext.split("-");
        	this.ds_data.setColumn(0, str + "거리", textArr[0]);
        	this.ds_data.setColumn(0, str + "장소", textArr[1]);
        };

        // 이용사유 콤보 아이템변경 이벤트
        this.div_main_cmb_remark_select_onitemchanged = function(obj,e)
        {
        	this.ds_data.setColumn(0, "단기사유", e.posttext);
        };

        // 시 변경 이벤트
        this.edt_hour_onchanged = function(obj,e)
        {
        	if (e.postvalue > "23" || e.postvalue == "")
        	{
        		obj.set_value("00");
        	}
        	else if (e.postvalue.length == 1)
        	{
        		obj.set_value("0" + e.postvalue);
        	}
        };

        // 분 변경 이벤트
        this.edt_min_onchanged = function(obj,e)
        {
        	if (e.postvalue > "59" || e.postvalue == "")
        	{
        		obj.set_value("00");
        	}
        	else if (e.postvalue.length == 1)
        	{
        		obj.set_value("0" + e.postvalue);
        	}
        };

        // 확인 버튼
        this.div_func_btn_set_onclick = function(obj,e)
        {
        	this.fn_setData();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_main.form.cmb_scar_select.addEventHandler("onlbuttondown",this.cmb_car_select_onlbuttondown,this);
            this.div_main.form.btn_sDriver.addEventHandler("onclick",this.btn_driver_select,this);
            this.div_main.form.btn_eDriver.addEventHandler("onclick",this.btn_driver_select,this);
            this.div_main.form.btn_eHelper.addEventHandler("onclick",this.btn_driver_select,this);
            this.div_main.form.btn_sHelper.addEventHandler("onclick",this.btn_driver_select,this);
            this.div_main.form.cmb_ecar_select.addEventHandler("onlbuttondown",this.cmb_car_select_onlbuttondown,this);
            this.div_main.form.edt_start_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_main.form.edt_start_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_main.form.edt_end_hour00.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_main.form.edt_end_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_main.form.cmb_sdist_select.addEventHandler("onitemchanged",this.cmb_dist_select_onitemchanged,this);
            this.div_main.form.cmb_edist_select.addEventHandler("onitemchanged",this.cmb_dist_select_onitemchanged,this);
            this.div_main.form.btn_startErase.addEventHandler("onclick",this.btn_erase_onclick,this);
            this.div_main.form.btn_endErase.addEventHandler("onclick",this.btn_erase_onclick,this);
            this.div_main.form.edt_from_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_main.form.edt_from_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_main.form.edt_to_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_main.form.edt_to_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_main.form.cmb_remark_select.addEventHandler("onitemchanged",this.div_main_cmb_remark_select_onitemchanged,this);
            this.div_func.form.btn_refresh.addEventHandler("onclick",this.div_func_btn_refresh_onclick,this);
            this.div_func.form.btn_set.addEventHandler("onclick",this.div_func_btn_set_onclick,this);
            this.pdiv_car_combo.form.grd_carList.addEventHandler("oncellclick",this.pdiv_car_combo_grd_carList_oncellclick,this);
        };
        this.loadIncludeScript("DAY00401_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
