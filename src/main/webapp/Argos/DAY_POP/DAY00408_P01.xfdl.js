(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00408_P01");
            this.set_titletext("송영차량일지 입력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"차구분\" type=\"STRING\" size=\"256\"/><Column id=\"차번호\" type=\"STRING\" size=\"256\"/><Column id=\"차종\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"mocode\" type=\"STRING\" size=\"256\"/><Column id=\"차번호\" type=\"STRING\" size=\"256\"/><Column id=\"monalja\" type=\"DATE\" size=\"256\"/><Column id=\"운행일\" type=\"STRING\" size=\"256\"/><Column id=\"mostart\" type=\"STRING\" size=\"256\"/><Column id=\"molast\" type=\"STRING\" size=\"256\"/><Column id=\"distant\" type=\"STRING\" size=\"256\"/><Column id=\"코드1\" type=\"STRING\" size=\"256\"/><Column id=\"내역1\" type=\"STRING\" size=\"256\"/><Column id=\"비용1\" type=\"STRING\" size=\"256\"/><Column id=\"결제1\" type=\"STRING\" size=\"256\"/><Column id=\"코드2\" type=\"STRING\" size=\"256\"/><Column id=\"내역2\" type=\"STRING\" size=\"256\"/><Column id=\"비용2\" type=\"STRING\" size=\"256\"/><Column id=\"결제2\" type=\"STRING\" size=\"256\"/><Column id=\"코드3\" type=\"STRING\" size=\"256\"/><Column id=\"내역3\" type=\"STRING\" size=\"256\"/><Column id=\"비용3\" type=\"STRING\" size=\"256\"/><Column id=\"결제3\" type=\"STRING\" size=\"256\"/><Column id=\"작성자\" type=\"STRING\" size=\"256\"/><Column id=\"작성코드\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gubun", this);
            obj._setContents("<ColumnInfo><Column id=\"combocode\" type=\"STRING\" size=\"256\"/><Column id=\"comboname\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"combocode\">01</Col><Col id=\"comboname\">주유비</Col></Row><Row><Col id=\"combocode\">02</Col><Col id=\"comboname\">오일교환</Col></Row><Row><Col id=\"combocode\">03</Col><Col id=\"comboname\">정비료</Col></Row><Row><Col id=\"combocode\">04</Col><Col id=\"comboname\">부품비</Col></Row><Row><Col id=\"combocode\">05</Col><Col id=\"comboname\">세차비</Col></Row><Row><Col id=\"combocode\">06</Col><Col id=\"comboname\">주차비</Col></Row><Row><Col id=\"combocode\">07</Col><Col id=\"comboname\">검사비</Col></Row><Row><Col id=\"combocode\">08</Col><Col id=\"comboname\">보험료</Col></Row><Row><Col id=\"combocode\">09</Col><Col id=\"comboname\">범칙금</Col></Row><Row><Col id=\"combocode\">10</Col><Col id=\"comboname\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_payment", this);
            obj._setContents("<ColumnInfo><Column id=\"combocode\" type=\"STRING\" size=\"256\"/><Column id=\"comboname\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"combocode\">1</Col><Col id=\"comboname\">현금</Col></Row><Row><Col id=\"combocode\">2</Col><Col id=\"comboname\">이체</Col></Row><Row><Col id=\"combocode\">3</Col><Col id=\"comboname\">카드</Col></Row><Row><Col id=\"combocode\">4</Col><Col id=\"comboname\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_parent", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","10","0","270",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","30",null,null,"0","30",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"차번호\"/><Cell col=\"2\" text=\"차종\"/></Band><Band id=\"body\"><Cell text=\"bind:차구분\"/><Cell col=\"1\" text=\"bind:차번호\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" textAlign=\"left\" cursor=\"pointer\"/><Cell col=\"2\" text=\"bind:차종\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","260","24",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_text("송영차량 목록");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("sta_remark","71","333","139","19",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("2");
            obj.set_text("▲ 선택시 차번호 클릭");
            obj.set_color("#400080");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","div_left:10","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_main","0","0",null,null,"10","20",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","325","0","150","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("24");
            obj.set_text("송영차량일지 입력");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_line","0","30",null,"2","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("25");
            obj.set_background("#000000");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1","0","37","103","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1","102","37","698","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2","0","sta_head1:-1","103","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("운행일");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body2","102","70","272","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3","0","sta_head2:-1","103","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("30");
            obj.set_text("운행거리");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","102","103","169","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4","0","136","103","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("지출구분");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4_1","sta_head4:-1","136","418","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_text("내역");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4_00","0","169","103","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4_00","102","169","418","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5","0","202","103","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body5","102","202","418","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head6","0","235","103","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body6","102","235","418","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_worker","10","41","83","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("0");
            obj.set_text("작성자");
            obj.set_cssclass("btn_worker");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun1","10","174","83","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_gubun");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            obj.set_value("");
            obj.set_index("-1");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_history1","113","174","394","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("10");
            obj.set_maxlength("60");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3_1","270","103","103","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("40");
            obj.set_text("시작거리");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2_1","373","70","103","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("차번호");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body2_1","475","70","325","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3_2","519","103","103","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("43");
            obj.set_text("종료거리");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4_2","519","136","103","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("지출금액");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4_3","621","136","103","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("결제");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4_3_00","723","136","77","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("지움");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3_1","372","103","148","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3_2","621","103","179","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4_1","519","169","103","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4_2","621","169","103","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4_3","723","169","77","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body5_1","519","202","103","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body5_2","621","202","103","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body5_3","723","202","77","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body6_1","519","235","103","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body6_2","621","235","103","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body6_3","723","235","77","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Combo("cmb_payment1","631","174","83","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_payment");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            obj.set_value("");
            obj.set_index("-1");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_delete1","731","174","61","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("13");
            obj.set_text("지움");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_distant","115","107","137","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("6");
            obj.set_textAlign("right");
            obj.set_text("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_date","115","74","127","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("3");
            obj.set_text("2022.04.28");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_worker_name","115","45","69","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("1");
            obj.set_text("이동철");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_worker_code","199","45","79","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("2");
            obj.set_text("20210004");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_car_gubun","489","78","19","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("4");
            obj.set_text("01");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_car_code","529","78","89","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("5");
            obj.set_text("72도1079");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun2","10","207","83","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_gubun");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            obj.set_value("");
            obj.set_index("-1");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_history2","113","207","394","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("15");
            obj.set_maxlength("60");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Combo("cmb_payment2","631","207","83","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_payment");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            obj.set_value("");
            obj.set_index("-1");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_delete2","731","207","61","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("18");
            obj.set_text("지움");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun3","10","240","83","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_gubun");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            obj.set_value("");
            obj.set_index("-1");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_history3","113","240","394","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("20");
            obj.set_maxlength("60");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Combo("cmb_payment3","631","240","83","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("22");
            obj.set_innerdataset("ds_payment");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            obj.set_value("");
            obj.set_index("-1");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_delete3","731","240","61","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("23");
            obj.set_text("지움");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_end","630","108","124","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("8");
            obj.set_format("#,###,##0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_start","384","108","124","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("7");
            obj.set_format("#,###,##0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_expense1","523","174","94","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("11");
            obj.set_format("#,###,##0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_expense2","523","207","94","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("16");
            obj.set_format("#,###,##0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_expense3","523","240","94","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("21");
            obj.set_format("#,###,##0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_func","0","0",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_refresh","10","5","90","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("새로고침");
            obj.set_cssclass("btn_refresh");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"5","70","25","10",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1100,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_cont.form.div_right.form.div_main.form.sta_worker_name","text","ds_data","작성자");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_cont.form.div_right.form.div_main.form.sta_worker_code","text","ds_data","작성코드");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_cont.form.div_right.form.div_main.form.sta_date","text","ds_data","운행일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_cont.form.div_right.form.div_main.form.sta_car_gubun","text","ds_data","mocode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_right.form.div_main.form.sta_car_code","text","ds_data","차번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_right.form.div_main.form.sta_distant","text","ds_data","distant");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_right.form.div_main.form.mae_start","value","ds_data","mostart");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_right.form.div_main.form.mae_end","value","ds_data","molast");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_right.form.div_main.form.cmb_gubun1","value","ds_data","코드1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_right.form.div_main.form.edt_history1","value","ds_data","내역1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_right.form.div_main.form.mae_expense1","value","ds_data","비용1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right.form.div_main.form.cmb_payment1","value","ds_data","결제1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right.form.div_main.form.cmb_gubun2","value","ds_data","코드2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.div_main.form.edt_history2","value","ds_data","내역2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.div_right.form.div_main.form.mae_expense2","value","ds_data","비용2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_right.form.div_main.form.cmb_payment2","value","ds_data","결제2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_right.form.div_main.form.cmb_gubun3","value","ds_data","코드3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.div_right.form.div_main.form.edt_history3","value","ds_data","내역3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.form.div_right.form.div_main.form.mae_expense3","value","ds_data","비용3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.div_right.form.div_main.form.cmb_payment3","value","ds_data","결제3");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00408_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00408_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00408_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00408_P01
         * 화면명   	: 송영차량일지 입력
         * 화면설명 	: 차량일지를 등록하는 팝업
         * 작성일   	: 2022-05-16
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *
         ***********************************************************************/
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        const fv_sicode = nexacro.getApplication().gds_userInfo.getColumn(0, "sicode");
        const fv_date = this.parent.DATE;
        const fv_list = this.parent.LIST;
        this.fv_currentDS = this.ds_list;
        this.fv_currentGrid = this.div_cont.form.div_left.form.grd_list;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 저장을 위한 gv_curWinKey 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00408_P01";

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "DATE", fv_date);

        	// 부모 리스트 가져오기
        	this.ds_parent.copyData(fv_list);

        	// 입력패널 초기화
        	const nRow = this.ds_data.addRow();
        	this.ds_data.setColumn(nRow, "sicode", fv_sicode);
        	this.ds_data.setColumn(nRow, "작성자", nexacro.getApplication().gds_userInfo.getColumn(0, "c_name").trim());
        	this.ds_data.setColumn(nRow, "작성코드", nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid"));
        	const year = fv_date.getFullYear();
        	const mon = ((fv_date.getMonth() + 1) + "").padStart(2, '0');
        	const day = (fv_date.getDate() + "").padStart(2, '0');
        	const dateDot = year + "." + mon + "." + day;
        	this.ds_data.setColumn(nRow, "monalja", fv_date);
        	this.ds_data.setColumn(nRow, "운행일", dateDot);

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

        // 저장 전 validation
        this.fn_save_pre = function()
        {
        	if (this.ds_data.rowcount == 0)
        	{
        		this.alert("저장할 항목이 없습니다.");
        		return false;
        	}

        	const code = this.ds_data.getColumn(0, "mocode");
        	if (Sct.Util.isEmpty(code))
        	{
        		this.alert("운행차량을 지정하세요.");
        		return false;
        	}

        	const worker = this.ds_data.getColumn(0, "작성코드");
        	if (Sct.Util.isEmpty(worker))
        	{
        		this.alert("작성자를 입력하세요.");
        		return false;
        	}

        // 	if (!this.confirm("저장 하시겠습니까?"))
        // 		return false;

        	const arr = ["mostart", "molast", "비용1", "비용2", "비용3"];
        	for (let i = 0; i < arr.length; i++)
        	{
        		const val = this.ds_data.getColumn(0, arr[i]);
        		if (Sct.Util.isEmpty(val))
        		{
        			this.ds_data.setColumn(0, arr[i], 0);
        		}
        	}

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
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList"
        				   + " sqlId=DAY00408_P01.DAY00408_P01_DS_LIST_S";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 저장
        this.fn_save = function()
        {
        	// validation
        	if (!this.fn_save_pre()) return;

        	const svcId = "save";
         	const inDs = "ds_data";
        	this.fn_save_com(svcId, inDs);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if (strSvcID == "search")
        		{

        		}
        		else if (strSvcID == "save")
        		{
        			this.alert("저장되었습니다.");
        			this.close();
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
        // 입력, 수정용 데이터셋에 데이터 복사
        this.fn_dataCopy = function(row)
        {
        	const gubun = this.ds_list.getColumn(row, "차구분");
        	const no = this.ds_list.getColumn(row, "차번호");
        	const fRow = this.ds_parent.findRow("mocode", gubun);
        	if (fRow > -1)
        	{
        		this.alert("이미 입력된 차량입니다.");
        		return;
        	}

        	if (no.indexOf("미차량") > -1)
        	{
        		return;
        	}

        	this.ds_data.setColumn(0, "mocode", gubun);
        	this.ds_data.setColumn(0, "차번호", no);
        	this.div_cont.form.div_right.form.div_main.form.mae_start.setFocus();
        };

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 작성자 선택
        this.div_cont_div_right_div_main_btn_worker_onclick = function(obj,e)
        {
        	if (this.ds_data.rowcount < 1)
        		return;

        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_data.getColumn(0, "monalja")
        	};

        	Sct.popup(this, "emp", 450, 400, "입력담당자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "emp" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				const name = nexacro.trim(objDs.getColumn(0, "c_name"));
        				const staffid = objDs.getColumn(0, "c_staffid");
        				this.ds_data.setColumn(0, "작성자", name);
        				this.ds_data.setColumn(0, "작성코드", staffid);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "작성자", "");
        				this.ds_data.setColumn(0, "작성코드", "");
        			}
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 저장 버튼
        this.fn_saveBtn = function()
        {
        	this.fn_save();
        };

        // 그리드 셀클릭 이벤트
        this.div_cont_div_left_grd_list_oncellclick = function(obj,e)
        {
        	const noIdx = obj.getBindCellIndex("body", "차번호");
        	// 차번호 선택
        	if (e.col == noIdx)
        	{
        		// 입력, 수정용 데이터셋에 데이터 복사
        		this.fn_dataCopy(e.row);
        	}
        };

        // 새로고침
        this.div_func_btn_refresh_onclick = function(obj,e)
        {
        	// 입력패널 초기화
        	this.ds_data.setColumn(0, "sicode", fv_sicode);
        	this.ds_data.setColumn(0, "작성자", nexacro.getApplication().gds_userInfo.getColumn(0, "c_name").trim());
        	this.ds_data.setColumn(0, "작성코드", nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid"));
        	const year = fv_date.getFullYear();
        	const mon = ((fv_date.getMonth() + 1) + "").padStart(2, '0');
        	const day = (fv_date.getDate() + "").padStart(2, '0');
        	const dateDot = year + "." + mon + "." + day;
        	this.ds_data.setColumn(0, "monalja", fv_date);
        	this.ds_data.setColumn(0, "운행일", dateDot);
        	this.ds_data.setColumn(0, "mocode", "");
        	this.ds_data.setColumn(0, "차번호", "");
        	this.ds_data.setColumn(0, "mostart", 0);
        	this.ds_data.setColumn(0, "molast", 0);
        	this.ds_data.setColumn(0, "distant", 0);
        	this.ds_data.setColumn(0, "코드1", "");
        	this.ds_data.setColumn(0, "내역1", "");
        	this.ds_data.setColumn(0, "비용1", 0);
        	this.ds_data.setColumn(0, "결제1", "0");
        	this.ds_data.setColumn(0, "코드2", "");
        	this.ds_data.setColumn(0, "내역2", "");
        	this.ds_data.setColumn(0, "비용2", 0);
        	this.ds_data.setColumn(0, "결제2", "0");
        	this.ds_data.setColumn(0, "코드3", "");
        	this.ds_data.setColumn(0, "내역3", "");
        	this.ds_data.setColumn(0, "비용3", 0);
        	this.ds_data.setColumn(0, "결제3", "0");
        };

        // 시작거리 값 변경 이벤트
        this.div_cont_div_right_div_main_mae_start_onchanged = function(obj,e)
        {
        	const lastVal = this.ds_data.getColumn(0, "molast");
        	if (Sct.Util.isEmpty(lastVal) || e.postvalue > lastVal)
        	{
        		this.ds_data.setColumn(0, "molast", e.postvalue);
        	}

        	const dist = parseInt(this.ds_data.getColumn(0, "molast")) - parseInt(e.postvalue);
        	this.ds_data.setColumn(0, "distant", dist);
        };

        // 종료거리 값 변경 이벤트
        this.div_cont_div_right_div_main_mae_end_onchanged = function(obj,e)
        {
        	const firstVal = this.ds_data.getColumn(0, "mostart");
        	if (Sct.Util.isEmpty(firstVal))
        	{
        		this.ds_data.setColumn(0, "mostart", 0);
        	}
        	else if (firstVal > e.postvalue)
        	{
        		this.ds_data.setColumn(0, "molast", firstVal);
        	}

        	const dist = parseInt(this.ds_data.getColumn(0, "molast")) - parseInt(this.ds_data.getColumn(0, "mostart"));
        	this.ds_data.setColumn(0, "distant", dist);
        };

        // 지움 버튼
        this.btn_delete_onclick = function(obj,e)
        {
        	switch(obj.id) {
        		case "btn_delete1" :
        			this.ds_data.setColumn(0, "코드1", "");
        			this.ds_data.setColumn(0, "내역1", "");
        			this.ds_data.setColumn(0, "비용1", 0);
        			this.ds_data.setColumn(0, "결제1", "");
        			break;
        		case "btn_delete2" :
        			this.ds_data.setColumn(0, "코드2", "");
        			this.ds_data.setColumn(0, "내역2", "");
        			this.ds_data.setColumn(0, "비용2", 0);
        			this.ds_data.setColumn(0, "결제2", "");
        			break;
        		case "btn_delete3" :
        			this.ds_data.setColumn(0, "코드3", "");
        			this.ds_data.setColumn(0, "내역3", "");
        			this.ds_data.setColumn(0, "비용3", 0);
        			this.ds_data.setColumn(0, "결제3", "");
        			break;
        		default:
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("oncellclick",this.div_cont_div_left_grd_list_oncellclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_worker.addEventHandler("onclick",this.div_cont_div_right_div_main_btn_worker_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_delete1.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_delete2.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_delete3.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.mae_end.addEventHandler("onchanged",this.div_cont_div_right_div_main_mae_end_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.mae_start.addEventHandler("onchanged",this.div_cont_div_right_div_main_mae_start_onchanged,this);
            this.div_func.form.btn_refresh.addEventHandler("onclick",this.div_func_btn_refresh_onclick,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
        };
        this.loadIncludeScript("DAY00408_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
