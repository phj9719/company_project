(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00703");
            this.set_titletext("7-3 위생점검일지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"YYYYMM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"DATE\" size=\"256\"/><Column id=\"DATE_TO\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">2021</Col><Col id=\"CMNM\">2021년</Col></Row><Row><Col id=\"CMCD\">2022</Col><Col id=\"CMNM\">2022년</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_emp", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"c_staffid\" type=\"STRING\" size=\"256\"/><Column id=\"c_group\" type=\"STRING\" size=\"256\"/><Column id=\"c_name\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"c_become\" type=\"STRING\" size=\"256\"/><Column id=\"c_dutyname\" type=\"STRING\" size=\"256\"/><Column id=\"담당직종\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"KH_sicode\" type=\"STRING\" size=\"256\"/><Column id=\"위생번호\" type=\"INT\" size=\"256\"/><Column id=\"작성\" type=\"STRING\" size=\"256\"/><Column id=\"점검일\" type=\"DATE\" size=\"256\"/><Column id=\"점검요일\" type=\"STRING\" size=\"256\"/><Column id=\"위생담당\" type=\"STRING\" size=\"256\"/><Column id=\"위생코드\" type=\"STRING\" size=\"256\"/><Column id=\"위생평가\" type=\"STRING\" size=\"256\"/><Column id=\"항목01\" type=\"STRING\" size=\"256\"/><Column id=\"항목02\" type=\"STRING\" size=\"256\"/><Column id=\"항목03\" type=\"STRING\" size=\"256\"/><Column id=\"항목04\" type=\"STRING\" size=\"256\"/><Column id=\"항목05\" type=\"STRING\" size=\"256\"/><Column id=\"항목06\" type=\"STRING\" size=\"256\"/><Column id=\"항목07\" type=\"STRING\" size=\"256\"/><Column id=\"항목08\" type=\"STRING\" size=\"256\"/><Column id=\"항목09\" type=\"STRING\" size=\"256\"/><Column id=\"항목10\" type=\"STRING\" size=\"256\"/><Column id=\"항목11\" type=\"STRING\" size=\"256\"/><Column id=\"항목12\" type=\"STRING\" size=\"256\"/><Column id=\"항목13\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"항목14\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"항목15\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"항목16\" type=\"STRING\" size=\"256\"/><Column id=\"항목17\" type=\"STRING\" size=\"256\"/><Column id=\"항목18\" type=\"STRING\" size=\"256\"/><Column id=\"항목19\" type=\"STRING\" size=\"256\"/><Column id=\"항목20\" type=\"STRING\" size=\"256\"/><Column id=\"항목21\" type=\"STRING\" size=\"256\"/><Column id=\"항목22\" type=\"STRING\" size=\"256\"/><Column id=\"소독온도조\" type=\"STRING\" size=\"256\"/><Column id=\"소독온도중\" type=\"STRING\" size=\"256\"/><Column id=\"소독온도석\" type=\"STRING\" size=\"256\"/><Column id=\"냉동온도\" type=\"STRING\" size=\"256\"/><Column id=\"냉장온도\" type=\"STRING\" size=\"256\"/><Column id=\"냉동고\" type=\"STRING\" size=\"256\"/><Column id=\"냉장고\" type=\"STRING\" size=\"256\"/><Column id=\"소독기아\" type=\"STRING\" size=\"256\"/><Column id=\"소독기점\" type=\"STRING\" size=\"256\"/><Column id=\"소독기저\" type=\"STRING\" size=\"256\"/><Column id=\"소독방법\" type=\"STRING\" size=\"256\"/><Column id=\"org_위생번호\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"KH_sicode\" type=\"STRING\" size=\"256\"/><Column id=\"위생번호\" type=\"INT\" size=\"256\"/><Column id=\"작성\" type=\"STRING\" size=\"256\"/><Column id=\"점검일\" type=\"DATE\" size=\"256\"/><Column id=\"점검요일\" type=\"STRING\" size=\"256\"/><Column id=\"위생담당\" type=\"STRING\" size=\"256\"/><Column id=\"위생코드\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"위생평가\" type=\"STRING\" size=\"256\"/><Column id=\"항목01\" type=\"STRING\" size=\"256\"/><Column id=\"항목02\" type=\"STRING\" size=\"256\"/><Column id=\"항목03\" type=\"STRING\" size=\"256\"/><Column id=\"항목04\" type=\"STRING\" size=\"256\"/><Column id=\"항목05\" type=\"STRING\" size=\"256\"/><Column id=\"항목06\" type=\"STRING\" size=\"256\"/><Column id=\"항목07\" type=\"STRING\" size=\"256\"/><Column id=\"항목08\" type=\"STRING\" size=\"256\"/><Column id=\"항목09\" type=\"STRING\" size=\"256\"/><Column id=\"항목10\" type=\"STRING\" size=\"256\"/><Column id=\"항목11\" type=\"STRING\" size=\"256\"/><Column id=\"항목12\" type=\"STRING\" size=\"256\"/><Column id=\"항목13\" type=\"STRING\" size=\"256\"/><Column id=\"항목14\" type=\"STRING\" size=\"256\"/><Column id=\"항목15\" type=\"STRING\" size=\"256\"/><Column id=\"항목16\" type=\"STRING\" size=\"256\"/><Column id=\"항목17\" type=\"STRING\" size=\"256\"/><Column id=\"항목18\" type=\"STRING\" size=\"256\"/><Column id=\"항목19\" type=\"STRING\" size=\"256\"/><Column id=\"항목20\" type=\"STRING\" size=\"256\"/><Column id=\"항목21\" type=\"STRING\" size=\"256\"/><Column id=\"항목22\" type=\"STRING\" size=\"256\"/><Column id=\"소독온도조\" type=\"STRING\" size=\"256\"/><Column id=\"소독온도중\" type=\"STRING\" size=\"256\"/><Column id=\"소독온도석\" type=\"STRING\" size=\"256\"/><Column id=\"냉동온도\" type=\"STRING\" size=\"256\"/><Column id=\"냉장온도\" type=\"STRING\" size=\"256\"/><Column id=\"냉동고\" type=\"STRING\" size=\"256\"/><Column id=\"냉장고\" type=\"STRING\" size=\"256\"/><Column id=\"소독기아\" type=\"STRING\" size=\"256\"/><Column id=\"소독기점\" type=\"STRING\" size=\"256\"/><Column id=\"소독기저\" type=\"STRING\" size=\"256\"/><Column id=\"소독방법\" type=\"STRING\" size=\"256\"/><Column id=\"org_위생번호\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_disinfect", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">살균</Col><Col id=\"CMNM\">1-살균</Col></Row><Row><Col id=\"CMCD\">세척제</Col><Col id=\"CMNM\">2-세척제</Col></Row><Row><Col id=\"CMCD\">열탕</Col><Col id=\"CMNM\">3-열탕</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","450",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","0","450","748",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"30\"/><Column size=\"110\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"80\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"23\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cursor=\"pointer\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" text=\"0\"/><Cell col=\"1\" text=\"출력\" expandchar=\"rno\"/></Cell><Cell col=\"2\" text=\"위생점검일\"/><Cell col=\"3\" text=\"요일\"/><Cell col=\"4\" text=\"작성자\"/><Cell col=\"5\" text=\"작성(O)\"/></Band><Band id=\"body\"><Cell colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"2\" text=\"bind:점검일\" cursor=\"pointer\" displaytype=\"date\" expandchar=\"dot\" cssclass=\"cellBWoman\"/><Cell col=\"3\" text=\"bind:점검요일\"/><Cell col=\"4\" text=\"bind:위생담당\"/><Cell col=\"5\" text=\"bind:작성\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","470","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_main","0","0","1260","748",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e2e2e2");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","582","7","97","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("0");
            obj.set_text("위생점검일지");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_no","24","10","58","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("1");
            obj.set_text("기록번호 : ");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_no_value","87","10","60","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("2");
            obj.set_text("00000000");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_line","20","40",null,"1","20",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("3");
            obj.set_background("#e2e2e2");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1","20","89","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("9");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2","sta_head1:-1","89","328","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("10");
            obj.set_text("세 부 점 검 사 항");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3","sta_head2:-1","89","208","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("11");
            obj.set_text("점검사항");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num1","20","sta_head1:-1","70","140",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("12");
            obj.set_text("식당\r\n내부\r\n청결\r\n상태");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1","sta_num1:-1","sta_head2:-1","328","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("13");
            obj.set_text("바닥, 유리창");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1","sta_body1:-1","sta_head3:-1","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1","sta_o1:68","sta_head3:-1","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o01","sta_o1:-58","sta_o1:-30","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("15");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x01","sta_x1:-57","sta_x1:-30","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("19");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body2","89","sta_body1:-1","328","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("20");
            obj.set_text("식탁");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o2","sta_body2:-1","sta_o1:-1","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x2","sta_o2:68","sta_x1:-1","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o02","sta_o2:-58","sta_o2:-30","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("22");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x02","sta_x2:-57","sta_x2:-30","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("26");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","89","sta_body2:-1","328","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("배식대");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o3","sta_body3:-1","sta_o2:-1","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x3","sta_o3:68","sta_x2:-1","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o03","sta_o3:-58","sta_o3:-30","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("29");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x03","sta_x3:-57","sta_x3:-30","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("33");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4","89","sta_body3:-1","328","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("식수대");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o4","sta_body4:-1","sta_o3:-1","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x4","sta_o4:68","sta_x3:-1","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o04","sta_o4:-58","sta_o4:-30","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("36");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x04","sta_x4:-57","sta_x4:-30","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("40");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num2","20","259","70","210",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("41");
            obj.set_text("조리실\r\n청결\r\n상태");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body5","sta_num2:-1","sta_body4:-1","328","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("42");
            obj.set_text("바닥");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o5","sta_body5:-1","sta_o4:-1","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x5","sta_o5:68","sta_x4:-1","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o05","sta_o5:-58","sta_o5:-30","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("44");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x05","sta_x5:-57","sta_x5:-30","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("48");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body6","89","sta_body5:-1","328","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("49");
            obj.set_text("조리기구, 기계의 청결 및 정돈");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o6","sta_body6:-1","sta_o5:-1","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x6","sta_o6:68","sta_x5:-1","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o06","sta_o6:-58","sta_o6:-30","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("51");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x06","sta_x6:-57","sta_x6:-30","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("55");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body7","89","sta_body6:-1","328","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("56");
            obj.set_text("식기 보관소");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o7","sta_body7:-1","sta_o6:-1","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x7","sta_o7:68","sta_x6:-1","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o07","sta_o7:-58","sta_o7:-30","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("58");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x07","sta_x7:-57","sta_x7:-30","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("62");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body8","89","sta_body7:-1","328","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("63");
            obj.set_text("도마의 세척 및 소독");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o8","sta_body8:-1","sta_o7:-1","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x8","sta_o8:68","sta_x7:-1","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o08","sta_o8:-58","sta_o8:-30","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("65");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x08","sta_x8:-57","sta_x8:-30","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("69");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body9","89","sta_body8:-1","328","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("70");
            obj.set_text("씽크대 (개수구)");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o","sta_body9:-1","sta_o8:-1","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body10","89","sta_body9:-1","328","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("77");
            obj.set_text("음식물 쓰레기 분리수거통");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_info1","20","44","212","48",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_SearchTxt");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_date","24","52","60","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("5");
            obj.set_text("위생점검일");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Calendar("cal_date","94","52","90","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_tooltiptext("점검일");
            obj.set_buttonsize("0 0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_manager","214","52","80","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("7");
            obj.set_text("점검자");
            obj.set_cssclass("btn_worker");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_manager_value","304","52","174","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("8");
            obj.set_text("너싱홈/ 요양보호사 / 20210007");
            obj.set_textAlign("left");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num3","20","463","70","140",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("84");
            obj.set_text("식품\r\n취급");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body11","89","463","328","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("85");
            obj.set_text("전 처리과정의 위생 (생선, 야채 등)");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o11","416","463","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x11","554","463","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o11","428","468","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("87");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x11","567","468","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("91");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body12","89","497","328","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("92");
            obj.set_text("조리 후 식품 보관");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o12","416","497","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x12","554","497","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o12","428","502","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("94");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x12","567","502","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("98");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body13","89","531","328","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("99");
            obj.set_text("배식 시 식품 보관");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o13","416","531","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x13","554","531","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("104");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o13","428","536","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("101");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x13","567","536","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("105");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body14","89","565","328","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("106");
            obj.set_text("식품의 유통기한 확인");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o14","416","565","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("107");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x14","554","565","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("111");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o14","428","570","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("108");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x14","567","570","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("112");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num4","20","599","70","137",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("113");
            obj.set_text("냉  동\r\n냉장고");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body15","89","599","328","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("114");
            obj.set_text("물품의 정리");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o15","416","599","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("115");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x15","554","599","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("119");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o15","428","604","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("116");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x15","567","604","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("120");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body16","89","633","328","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("121");
            obj.set_text("바닥의 청결");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o16","416","633","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("122");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x16","554","633","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("126");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o16","428","638","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("123");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x16","567","638","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("127");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body18","169","667","248","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("129");
            obj.set_text("냉동  :                    ℃");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_tem1","416","667","208","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("131");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body19","169","701","248","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("130");
            obj.set_text("냉장  :                    ℃");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_tem2","416","701","208","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("134");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1","485","123","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_v01","498","128","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("17");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v2","485","157","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_v02","498","162","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("24");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v3","485","191","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_v03","498","196","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("31");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v4","485","225","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_v04","498","230","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("38");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v5","485","259","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_v05","498","264","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("46");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v6","485","293","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_v06","498","298","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("53");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v7","485","327","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_v07","498","332","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("60");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v8","485","361","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_v08","498","366","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("67");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v9","485","395","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v10","485","429","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_v10","498","434","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("81");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v11","485","463","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_v11","498","468","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("89");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v12","485","497","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_v12","498","502","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("96");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v13","485","531","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_v13","498","536","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("103");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v14","485","565","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("109");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_v14","498","570","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("110");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v15","485","599","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("117");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_v15","498","604","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("118");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v16","485","633","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("124");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_v16","498","638","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("125");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body17","89","667","81","69",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("128");
            obj.set_text("온도");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00","633","89","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("139");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2_00","702","89","328","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("140");
            obj.set_text("세 부 점 검 사 항");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3_00","1029","89","208","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("141");
            obj.set_text("점검사항");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num5","633","123","70","205",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("142");
            obj.set_text("세  척");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body20","702","123","328","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("143");
            obj.set_text("식기 기구의 세척·소독");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o17","1029","123","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("144");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x17","1167","123","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("148");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o17","1041","128","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("145");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x17","1180","128","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("149");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body21","702","157","328","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("150");
            obj.set_text("행주의 청결·소독");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o18","1029","157","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("151");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x18","1167","157","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("155");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o18","1041","162","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("152");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x18","1180","162","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("156");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_tem3","1029","191","208","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("161");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num6","633","327","70","103",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("173");
            obj.set_text("창   고");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_tem5","1029","259","208","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("169");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body26","702","293","328","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("174");
            obj.set_text("주방 세척소독 방법");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o6_00","1029","293","208","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("175");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body27","702","327","328","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("178");
            obj.set_text("물품의 정리, 정돈");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o19","1029","327","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("179");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x19","1167","327","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("183");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o19","1041","332","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("180");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x19","1180","332","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("184");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body28","702","361","328","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("185");
            obj.set_text("쥐, 곤충류의 유무");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o20","1029","361","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("186");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x20","1167","361","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("190");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o20","1041","366","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("187");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x20","1180","366","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("191");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body29","702","395","328","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("192");
            obj.set_text("통풍, 습기의 상태");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o21","1029","395","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("193");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x21","1167","395","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("197");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o21","1041","400","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("194");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x21","1180","400","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("198");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body30","702","429","328","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("199");
            obj.set_text("조리사 손과 복장의 청결");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o22","1029","429","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("200");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x22","1167","429","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("204");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o22","1041","434","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("201");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x22","1180","434","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("205");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num7","633","429","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("206");
            obj.set_text("조리사");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body31","702","463","535","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("207");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v17","1098","123","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("146");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_v17","1111","128","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("147");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v18","1098","157","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("153");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_v18","1111","162","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("154");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v19","1098","327","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("181");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_v19","1111","332","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("182");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v20","1098","361","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("188");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_v20","1111","366","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("189");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v21","1098","395","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("195");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_v21","1111","400","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("196");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v22","1098","429","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("202");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_v22","1111","434","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("203");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Spin("spn_tem1","526","671","20","27",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("133");
            obj.set_type("spinonly");
            obj.set_increment("1");
            obj.set_enable("false");
            obj.set_min("-99");
            obj.set_max("999");
            obj.set_value("");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body22","702","191","81","103",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("157");
            obj.set_text("소독기\r\n온도");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body23","782","191","248","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("158");
            obj.set_text("아침  :                  ℃");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body24","782","225","248","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("159");
            obj.set_text("점심  :                  ℃");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body25","782","259","248","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("160");
            obj.set_text("저녁  :                  ℃");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_tem4","1029","225","208","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("165");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Spin("spn_tem2","526","705","20","27",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("136");
            obj.set_type("spinonly");
            obj.set_enable("false");
            obj.set_min("-99");
            obj.set_max("999");
            obj.set_value("");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Combo("cmb_26","1136","297","90","27",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("177");
            obj.set_innerdataset("ds_disinfect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_enable("false");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o10","416","429","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o10","428","434","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("79");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o09","428","400","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("72");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x10","554","429","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x10","567","434","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("83");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_tem4","1039","229","100","27",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("166");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_value("55");
            obj.set_padding("0px 25px 2px 0px");
            obj.set_format("0.0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Spin("spn_tem4","1139","229","20","27",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("168");
            obj.set_increment("1");
            obj.set_buttonposition("right");
            obj.set_type("spinonly");
            obj.set_enable("false");
            obj.set_min("0");
            obj.set_max("999");
            obj.set_value("");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Spin("spn_tem3","1139","195","20","27",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("164");
            obj.set_increment("1");
            obj.set_buttonposition("right");
            obj.set_type("spinonly");
            obj.set_enable("false");
            obj.set_min("0");
            obj.set_max("999");
            obj.set_value("");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_tem3","1039","195","100","27",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("162");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_value("55");
            obj.set_format("0.0");
            obj.set_padding("0px 25px 2px 0px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Spin("spn_tem5","1139","263","20","27",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("172");
            obj.set_increment("1");
            obj.set_buttonposition("right");
            obj.set_type("spinonly");
            obj.set_enable("false");
            obj.set_min("0");
            obj.set_max("999");
            obj.set_value("");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_tem5","1039","263","100","27",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("170");
            obj.set_format("0.0");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_value("55");
            obj.set_padding("0px 25px 2px 0px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_00","1118","195","19","27",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("163");
            obj.set_text("℃");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_00_00","1118","230","19","27",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("167");
            obj.set_text("℃");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00","1118","263","19","27",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("171");
            obj.set_text("℃");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_tem1","426","671","100","27",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("132");
            obj.set_format("0.0");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_padding("0px 25px 2px 0px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00","506","671","19","27",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("137");
            obj.set_text("℃");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_tem2","426","705","100","27",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("135");
            obj.set_format("0.0");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_padding("0px 25px 2px 0px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00","507","705","19","27",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("138");
            obj.set_text("℃");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_00","710","467","520","27",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("208");
            obj.set_maxlength("40");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_26","1039","297","90","27",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("176");
            obj.set_maxlength("10");
            obj.set_enable("false");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x9","554","395","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_v09","499","400","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("74");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x09","567","400","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("76");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num8","633","463","70","35",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("209");
            obj.set_text("조치사항");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","450","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_yyyymm","41","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_yyyyMM");
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.getSetter("calendarfunc").set("month");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","174","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","267","12","8","17",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","280","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"7","70","26","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_yyyymm_pic","cal_yyyymm:-1","7","26","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_yyyyMM");
            obj.set_taborder("5");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","470","0","1260","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_sign","0","7","55","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("결재란");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"7","70","26","0",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_delete");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","70","26","btn_delete:5",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_report_body","76","2","310","40",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_SearchTxt");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_report_body00","64","5","265","30",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_repo1","69","7","67","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("4");
            obj.set_text("일지서식");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_repo2","146","7","105","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("5");
            obj.set_text("점검일지(7일)");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report1","253","7","70","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("6");
            obj.set_text("출력");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","div_cont.form.div_right.form.div_main.form.sta_no_value","text","ds_data","위생번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_right.form.div_main.form.cal_date","value","ds_data","점검일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_right.form.div_main.form.sta_manager_value","text","ds_data","VIEW_MANAGER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_right.form.div_main.form.chk_o01","value","ds_data","항목01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_right.form.div_main.form.chk_x01","value","ds_data","항목01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_right.form.div_main.form.chk_o02","value","ds_data","항목02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_right.form.div_main.form.chk_x02","value","ds_data","항목02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_right.form.div_main.form.chk_o3","value","ds_data","항목03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right.form.div_main.form.chk_x3","value","ds_data","항목03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right.form.div_main.form.chk_o4","value","ds_data","항목04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.div_main.form.chk_x4","value","ds_data","항목04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.div_right.form.div_main.form.chk_o5","value","ds_data","항목05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_right.form.div_main.form.chk_x5","value","ds_data","항목05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_right.form.div_main.form.chk_o6","value","ds_data","항목06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.div_right.form.div_main.form.chk_x6","value","ds_data","항목06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.form.div_right.form.div_main.form.chk_o7","value","ds_data","항목07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.div_right.form.div_main.form.chk_x7","value","ds_data","항목07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.div_right.form.div_main.form.chk_o8","value","ds_data","항목08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.div_right.form.div_main.form.chk_x8","value","ds_data","항목08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.div_right.form.div_main.form.chk_o11","value","ds_data","항목11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.div_right.form.div_main.form.chk_x11","value","ds_data","항목11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cont.form.div_right.form.div_main.form.chk_o12","value","ds_data","항목12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_cont.form.div_right.form.div_main.form.chk_x12","value","ds_data","항목12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_cont.form.div_right.form.div_main.form.chk_o13","value","ds_data","항목13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_cont.form.div_right.form.div_main.form.chk_x13","value","ds_data","항목13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_cont.form.div_right.form.div_main.form.chk_o14","value","ds_data","항목14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_cont.form.div_right.form.div_main.form.chk_x14","value","ds_data","항목14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_cont.form.div_right.form.div_main.form.chk_o15","value","ds_data","항목15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.div_right.form.div_main.form.chk_x15","value","ds_data","항목15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_cont.form.div_right.form.div_main.form.chk_o16","value","ds_data","항목16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.div_right.form.div_main.form.chk_x16","value","ds_data","항목16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.div_right.form.div_main.form.chk_v01","value","ds_data","항목01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cont.form.div_right.form.div_main.form.chk_v02","value","ds_data","항목02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_cont.form.div_right.form.div_main.form.chk_v3","value","ds_data","항목03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_cont.form.div_right.form.div_main.form.chk_v4","value","ds_data","항목04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_cont.form.div_right.form.div_main.form.chk_v5","value","ds_data","항목05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cont.form.div_right.form.div_main.form.chk_v6","value","ds_data","항목06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_cont.form.div_right.form.div_main.form.chk_v7","value","ds_data","항목07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_cont.form.div_right.form.div_main.form.chk_v8","value","ds_data","항목08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_cont.form.div_right.form.div_main.form.chk_v9","value","ds_data","항목09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_cont.form.div_right.form.div_main.form.chk_v10","value","ds_data","항목10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_cont.form.div_right.form.div_main.form.chk_v11","value","ds_data","항목11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_cont.form.div_right.form.div_main.form.chk_v12","value","ds_data","항목12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_cont.form.div_right.form.div_main.form.chk_v13","value","ds_data","항목13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_cont.form.div_right.form.div_main.form.chk_v14","value","ds_data","항목14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_cont.form.div_right.form.div_main.form.chk_v15","value","ds_data","항목15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_cont.form.div_right.form.div_main.form.chk_v16","value","ds_data","항목16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_cont.form.div_right.form.div_main.form.chk_o17","value","ds_data","항목17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_cont.form.div_right.form.div_main.form.chk_x17","value","ds_data","항목17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_cont.form.div_right.form.div_main.form.chk_o18","value","ds_data","항목18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_cont.form.div_right.form.div_main.form.chk_x18","value","ds_data","항목18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_cont.form.div_right.form.div_main.form.chk_o19","value","ds_data","항목19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_cont.form.div_right.form.div_main.form.chk_x19","value","ds_data","항목19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_cont.form.div_right.form.div_main.form.chk_o20","value","ds_data","항목20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_cont.form.div_right.form.div_main.form.chk_x20","value","ds_data","항목20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_cont.form.div_right.form.div_main.form.chk_o21","value","ds_data","항목21");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_cont.form.div_right.form.div_main.form.chk_x21","value","ds_data","항목21");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_cont.form.div_right.form.div_main.form.chk_o22","value","ds_data","항목22");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","div_cont.form.div_right.form.div_main.form.chk_x22","value","ds_data","항목22");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","div_cont.form.div_right.form.div_main.form.chk_v17","value","ds_data","항목17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","div_cont.form.div_right.form.div_main.form.chk_v18","value","ds_data","항목18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","div_cont.form.div_right.form.div_main.form.chk_v19","value","ds_data","항목19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","div_cont.form.div_right.form.div_main.form.chk_v20","value","ds_data","항목20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","div_cont.form.div_right.form.div_main.form.chk_v21","value","ds_data","항목21");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","div_cont.form.div_right.form.div_main.form.chk_v22","value","ds_data","항목22");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","div_cont.form.div_right.form.div_main.form.chk_o10","value","ds_data","항목10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","div_cont.form.div_right.form.div_main.form.chk_o09","value","ds_data","항목09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","div_cont.form.div_right.form.div_main.form.chk_x10","value","ds_data","항목10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","div_cont.form.div_right.form.div_main.form.chk_o03","value","ds_data","항목03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","div_cont.form.div_right.form.div_main.form.chk_v03","value","ds_data","항목03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","div_cont.form.div_right.form.div_main.form.chk_x03","value","ds_data","항목03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","div_cont.form.div_right.form.div_main.form.chk_o04","value","ds_data","항목04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","div_cont.form.div_right.form.div_main.form.chk_v04","value","ds_data","항목04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","div_cont.form.div_right.form.div_main.form.chk_x04","value","ds_data","항목04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","div_cont.form.div_right.form.div_main.form.chk_o05","value","ds_data","항목05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","div_cont.form.div_right.form.div_main.form.chk_v05","value","ds_data","항목05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","div_cont.form.div_right.form.div_main.form.chk_x05","value","ds_data","항목05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","div_cont.form.div_right.form.div_main.form.chk_o06","value","ds_data","항목06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","div_cont.form.div_right.form.div_main.form.chk_v06","value","ds_data","항목06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","div_cont.form.div_right.form.div_main.form.chk_x06","value","ds_data","항목06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","div_cont.form.div_right.form.div_main.form.chk_o07","value","ds_data","항목07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","div_cont.form.div_right.form.div_main.form.chk_v07","value","ds_data","항목07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","div_cont.form.div_right.form.div_main.form.chk_x07","value","ds_data","항목07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","div_cont.form.div_right.form.div_main.form.chk_o08","value","ds_data","항목08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","div_cont.form.div_right.form.div_main.form.chk_v08","value","ds_data","항목08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","div_cont.form.div_right.form.div_main.form.chk_x08","value","ds_data","항목08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item93","div_cont.form.div_right.form.div_main.form.mae_tem4","value","ds_data","소독기점");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","div_cont.form.div_right.form.div_main.form.mae_tem3","value","ds_data","소독기아");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","div_cont.form.div_right.form.div_main.form.mae_tem5","value","ds_data","소독기저");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","div_cont.form.div_right.form.div_main.form.mae_tem1","value","ds_data","냉동고");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item97","div_cont.form.div_right.form.div_main.form.mae_tem2","value","ds_data","냉장고");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.cal_yyyymm","value","ds_search","YYYYMM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cal_date_from","value","ds_search","DATE_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_date_to","value","ds_search","DATE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","div_cont.form.div_right.form.div_main.form.edt_00","value","ds_data","위생평가");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item98","div_cont.form.div_right.form.div_main.form.edt_26","value","ds_data","소독방법");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","div_cont.form.div_right.form.div_main.form.chk_v09","value","ds_data","항목09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","div_cont.form.div_right.form.div_main.form.chk_x09","value","ds_data","항목09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item92","div_search.form.cal_yyyymm_pic","value","ds_search","YYYYMM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00703.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00703.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00703.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00703
         * 화면명   	: 7-3 위생점검일지
         * 화면설명 	: 위생점검일지를 작성하는 화면
         * 작성일   	: 2022-03-07
         * 작성자   	: 박한준
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *	2022-04-04		조기종		단위테스트 오류 수정
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
        this.fv_currentDS = this.ds_list;
        this.fv_currentGrid = this.div_cont.form.div_left.form.grd_list;
        this.reSearchData = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 현재월의 1일, 마지막일 구하기
        	const date = new Date();
        	const year = date.getFullYear();
        	const month = date.getMonth();
        	var firstDay = new Date(year, month, 1);
        	var lastDay = new Date(year, month + 1, 0);

        	var yymm = date.getFullYear() + ((date.getMonth() + 1) + "").padLeft(2, '0');

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	//this.ds_search.setColumn(0, "YYYYMM", yymm);
        	this.div_search.form.cal_yyyymm.set_value(yymm);
        	this.ds_search.setColumn(0, "DATE_FROM", firstDay);
        	this.ds_search.setColumn(0, "DATE_TO", lastDay);

        	// 냉장고, 소독기 온도 세팅
        	this.fn_tempset(nexacro.getApplication().gds_userInfo,0);

        	this.div_func.form.chk_sign.set_value(1); // 결재란 체크
        	this.div_func.form.chk_repo1.set_value(1); // 일지서식 체크

        	// 오픈시 조회
        	this.fn_search("search");

        };

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	// 검색조건 필수 체크 (컴포넌트 tooltiptext 값 넣을 것)
        	if (!this.gfn_findSnull(this.div_search)) return false;

        // 	if (this.ds_data.rowcount > 0)
        // 		this.reSearchData = this.ds_data.getColumn(0, "점검일");

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

        	// 저장 내용 체크
        	if (!Sct.Grid.hasInsertAndUpdateRow(this.ds_data))
        	{
        		this.alert("저장할 내용이 없습니다.");
        		return false;
        	}

        	// 주방 세척소독방법 null 체크
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"소독방법"))){
        		this.alert("주방 세척소독 방법을 기술하세요");
        		return false;
        	}

        	// 작성자가 지정되지 않은 경우
        	if (Sct.Util.isEmpty(this.ds_data.getColumn(0, "위생코드")))
        	{
        		this.alert("점검직원을 지정해야합니다.");
        		return false;
        	}

        	if (!this.confirm("저장 하시겠습니까?"))
        		return false;

        // 	let str2String = "";
        // 	for (let i = 0; i < 13; i++)
        // 	{
        // 		str2String += this.ds_data.getColumn(0, "조치" + (i + 1)) + "\r\n";
        // 	}
        // 	this.ds_data.setColumn(0, "조치사항", str2String);

        	this.reSearchData = this.ds_data.getColumn(0, "점검일");

        	return true;
        };

        // 삭제 전 validation
        this.fn_delete_pre = function()
        {
        	if (this.ds_data.rowcount == 0)
        	{
        		this.alert("삭제할 항목이 없습니다.");
        		return false;
        	}

        	// 데이터셋 상태가 추가상태이면 데이터셋 비우기
        	if(this.ds_data.getRowType(0) == 2)
        	{
        		this.ds_data.clearData();
        		return false;
        	}

        	if (!this.confirm("삭제 하시겠습니까?"))
        		return false;

        	this.reSearchData = "";

        	this.ds_data.set_updatecontrol(false);
        	this.ds_data.setRowType(0, Dataset.ROWTYPE_DELETE);
        	this.ds_data.set_updatecontrol(true);

        	return true;
        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //조회
        this.fn_search = function (flag)
        {
        	//validation
        	if (!this.fn_search_pre()) return;

        	var datefrom = this.ds_search.getColumn(0,"DATE_FROM");
        	var dateto = this.ds_search.getColumn(0,"DATE_TO");
        	var dfrom = new Date(+datefrom + 3240 * 10000).toISOString().split("T")[0];
        	var dto = new Date(+dateto + 3240 * 10000).toISOString().split("T")[0];

        	const svcId = flag;
        	const params = "/commonController.do";
        	//const inDatasets = "input1=ds_search";
        	const inDatasets = "";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00703.DAY00703_DS_LIST_S "
        				   + "SICODE="+this.ds_search.getColumn(0,"SICODE")
        				   + " DATE_FROM="+dfrom
         				   + " DATE_TO="+dto;

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

        // 삭제
        this.fn_delete = function()
        {
        	// validation
        	if (!this.fn_delete_pre()) return;

        	const svcId = "delete";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_data:U";
        	const outDatasets = "";
        	const argument = "method=delete "
        				   + "sqlId=DAY00703.DAY00703_DS_DATA_D ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if (strSvcID == "search")
        		{
        			this.ds_data.clearData();
        			this.ds_list.set_rowposition(-1);
        		}
        		else if (strSvcID == "save")
        		{
        			this.alert("저장되었습니다.");
        			this.fn_search("search_save");
        		}
        		else if (strSvcID == "delete")
        		{
        			this.alert("삭제되었습니다.");
        			//this.ds_data.clearData();
        			this.fn_search("search");
        		}
        		else if (strSvcID == "search_save")
        		{
        			const sRow = this.fn_findMstRow(this.reSearchData);
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
        	this.ds_data.clearData();
        	const nRow = this.ds_data.addRow();
        	this.ds_data.copyRow(nRow, this.ds_list, row);

        	this.div_cont.form.div_right.form.div_main.form.edt_26.set_enable(true);
        	this.div_cont.form.div_right.form.div_main.form.cmb_26.set_enable(true);

        	const managerStr = this.ds_data.getColumn(nRow, "위생담당")
        					 + "/"
        					 + this.ds_data.getColumn(nRow, "위생코드");

        	this.ds_data.setColumn(nRow, "VIEW_MANAGER", managerStr);

        	this.fn_tempset(this.ds_list, row);

        	this.ds_data.set_updatecontrol(false);
        	this.ds_data.setRowType(nRow, 1);
        	this.ds_data.set_updatecontrol(true);
        };

        // 작업후 작업 정보 조회
        this.fn_findMstRow = function(fv_saveRefNo) {
        	const sFindRow = this.ds_list.findRow("점검일", fv_saveRefNo);
        	if (sFindRow > -1) {
        		this.ds_list.set_rowposition(sFindRow);
        		this.fn_dataCopy(sFindRow);
        	}

        	return sFindRow;
        };

        this.fn_tempset = function (ds, row)
        {
        	var temp1 = ds.getColumn(row,"냉동온도");
        	var temp2 = ds.getColumn(row,"냉장온도");
        	var temp3 = ds.getColumn(row,"소독온도조");
        	var temp4 = ds.getColumn(row,"소독온도중");
        	var temp5 = ds.getColumn(row,"소독온도석");
        	this.div_cont.form.div_right.form.div_main.form.sta_body18.set_text("냉동  :         "+temp1+"    ℃");
        	this.div_cont.form.div_right.form.div_main.form.sta_body19.set_text("냉장  :            "+temp2+"    ℃");
        	this.div_cont.form.div_right.form.div_main.form.sta_body23.set_text("아침  :         "+temp3+"    ℃");
        	this.div_cont.form.div_right.form.div_main.form.sta_body24.set_text("점심  :         "+temp4+"    ℃");
        	this.div_cont.form.div_right.form.div_main.form.sta_body25.set_text("저녁  :         "+temp5+"    ℃");
        };
        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 리포트 팝업
        this.fn_report = function()
        {
        	var repo1 = this.div_func.form.chk_repo1.value;
        	var repo2 = this.div_func.form.chk_repo2.value;

        	var popupUrl = "";
        	var popupName = "";
        	var chk = 0; // 체크된 갯수 확인
        	var arrDate = []; // 선택된 점검일 (파라미터)
        	var minmaxDate = []; // 시작, 마지막날짜 구하는 배열

         	if(repo1 == 1){
         		popupUrl = "DAY_POP::DAY00703_R01.xfdl";
        		popupName = "위생점검일지서식";

         	}else if(repo2 == 1){ // 점검일지(7일) 선택
        		popupUrl = "DAY_POP::DAY00703_R02.xfdl";
        		popupName = "위생점검일지(7일)";

        		// 리스트 row 수만큼 for문 돌려서 체크된 row 찾기
        		for(var i=0; i < this.ds_list.rowcount; i++){
        			chk += parseInt(this.ds_list.getColumn(i,"CHK")); // 체크된거 + 1 더한다.

        			if(this.ds_list.getColumn(i,"CHK") == 1){ // 체크된 점검일 배열에 담기
        				var sdate = this.ds_list.getColumn(i,"점검일").toString(); // 날짜를 string으로 변환
        				arrDate.push(sdate); // arrDate 배열에 담기
        				// minmaxDate에 2022-03-11 형식으로 담기
        				minmaxDate.push(new Date(sdate.substr(0,4) + "-" + sdate.substr(4,2) + "-" + sdate.substr(6,2)));
        			}
        		}

        		// 체크된게 없으면 메시지 출력
        		if(chk < 1){
        			this.alert("출력할 항목을 선택해주세요");
        			return false;
        		}
        	}else{
        		this.alert("출력할 레포트를 선택해주세요.")
        		return false;
        	}

        	// 날짜비교
         	var maxDate = new Date(Math.max.apply(null, minmaxDate)); // 선택한 날짜 중 시작날짜
         	var minDate = new Date(Math.min.apply(null, minmaxDate)); // 선택한 날짜 중 마지막날짜
        	// 2022-03-11 포맷으로 다시 변환,
        	// 월,일은 00+숫자 뒤에서 2자리 자르기
        	maxDate = maxDate.getFullYear()+"-"+(("00"+(maxDate.getMonth()+1)).slice(-2))+"-"+(("00"+maxDate.getDate()).slice(-2));
        	minDate = minDate.getFullYear()+"-"+(("00"+(minDate.getMonth()+1)).slice(-2))+"-"+(("00"+minDate.getDate()).slice(-2));

        	let params;
        	const dicompNm = " ";

        	// 레포트의 시작날짜와 끝날짜도 넘김
        	params = {
        		sicode : fv_sicode
        	,	date : arrDate
        	,   mindate : minDate
        	,   maxdate : maxDate
        	,	sign : this.div_func.form.chk_sign.value
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        // 점검자 선택 팝업
        this.div_cont_div_right_div_main_btn_manager_onclick = function(obj,e)
        {
        	if (this.ds_data.rowcount < 1)
        		return;

        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_data.getColumn(0, "점검일")
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
        			if (objDs.getColumn(0, "DEL") != "1"){
        				const name = nexacro.trim(objDs.getColumn(0, "c_name"));
        				const dutyname = objDs.getColumn(0, "담당직종");
        				const staffid = objDs.getColumn(0, "c_staffid");
        				this.ds_data.setColumn(0, "위생담당", name);
        				this.ds_data.setColumn(0, "위생코드", staffid);
        				this.ds_data.setColumn(0, "VIEW_MANAGER", name + "/" + staffid);
        			}else{
        				this.ds_data.setColumn(0, "위생담당", "");
        				this.ds_data.setColumn(0, "위생코드", "");
        				this.ds_data.setColumn(0, "VIEW_MANAGER", "");
        			}
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 조회 버튼
        this.fn_searchBtn = function ()
        {
        	this.fn_search("search");
        };

        // 저장 버튼
        this.fn_saveBtn = function()
        {
        	this.fn_save();
        };

        // 삭제 버튼
        this.fn_deleteBtn = function()
        {
        	this.fn_delete();
        };

        // 리포트 버튼
        this.fn_reportBtn = function()
        {
        	this.fn_report();
        };

        // 그리드 셀클릭 이벤트
        this.div_cont_div_left_grd_list_oncellclick = function(obj,e)
        {
        	// 주방 세척소독 방법 edit, combo, 온도 스핀 활성화
        	this.div_cont.form.div_right.form.div_main.form.edt_26.set_enable(true);
        	this.div_cont.form.div_right.form.div_main.form.cmb_26.set_enable(true);
        	this.div_cont.form.div_right.form.div_main.form.spn_tem1.set_enable(true);
        	this.div_cont.form.div_right.form.div_main.form.spn_tem2.set_enable(true);
        	this.div_cont.form.div_right.form.div_main.form.spn_tem3.set_enable(true);
        	this.div_cont.form.div_right.form.div_main.form.spn_tem4.set_enable(true);
        	this.div_cont.form.div_right.form.div_main.form.spn_tem5.set_enable(true);

        	const dateIdx = obj.getBindCellIndex("body", "점검일") + 1;
        	// 점검일 선택
        	if (e.col == dateIdx)
        	{
        		if(this.ds_list.getColumn(e.row, "작성") == "O"){ // 작성 O이면 데이터셋 복사
        			// 입력, 수정용 데이터셋에 데이터 복사
        			this.fn_dataCopy(e.row);
        		}else{ // 작성 빈값이면 새로작성
        			this.ds_data.clearData();
        			const nRow = this.ds_data.addRow();
        			this.ds_data.setColumn(nRow, "sicode", this.ds_list.getColumn(e.row, "sicode"));
        			this.ds_data.setColumn(nRow, "점검일", this.ds_list.getColumn(e.row, "점검일"));
        			this.ds_data.setColumn(nRow, "위생담당", nexacro.trim(nexacro.getApplication().gds_userInfo.getColumn(0, "c_name")));
        			this.ds_data.setColumn(nRow, "위생코드", nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid"));
        			const managerStr = this.ds_data.getColumn(nRow, "위생담당")
        							+ "/"
        							+ this.ds_data.getColumn(nRow, "위생코드");
        			this.ds_data.setColumn(nRow, "VIEW_MANAGER", managerStr);

        			//점검사항
        			for(var i=1; i<23; i++){
        				if(i<10){
        					this.ds_data.setColumn(nRow, "항목0" + i, 1);
        				}else{
        					this.ds_data.setColumn(nRow, "항목" + i, 1);
        				}
        			}

        			//
        			var temp1 = nexacro.getApplication().gds_userInfo.getColumn(0,"냉동온도");
        			var temp2 = nexacro.getApplication().gds_userInfo.getColumn(0,"냉장온도");
        			var temp3 = nexacro.getApplication().gds_userInfo.getColumn(0,"소독온도조");
        			var temp4 = nexacro.getApplication().gds_userInfo.getColumn(0,"소독온도중");
        			var temp5 = nexacro.getApplication().gds_userInfo.getColumn(0,"소독온도석");
        			this.div_cont.form.div_right.form.div_main.form.sta_body18.set_text("냉동  :         "+temp1+"    ℃");
        			this.div_cont.form.div_right.form.div_main.form.sta_body19.set_text("냉장  :            "+temp2+"    ℃");
        			this.div_cont.form.div_right.form.div_main.form.sta_body23.set_text("아침  :         "+temp3+"    ℃");
        			this.div_cont.form.div_right.form.div_main.form.sta_body24.set_text("점심  :         "+temp4+"    ℃");
        			this.div_cont.form.div_right.form.div_main.form.sta_body25.set_text("저녁  :         "+temp5+"    ℃");

        			// 온도 DB 세팅
        			this.ds_data.setColumn(nRow,"냉동온도", temp1);
        			this.ds_data.setColumn(nRow,"냉장온도", temp2);
        			this.ds_data.setColumn(nRow,"소독온도조", temp3);
        			this.ds_data.setColumn(nRow,"소독온도중", temp4);
        			this.ds_data.setColumn(nRow,"소독온도석", temp5);

        			// 온도 입력폼 세팅
        			this.ds_data.setColumn(nRow,"냉동고", temp1);
        			this.ds_data.setColumn(nRow,"냉장고", temp2);
        			this.ds_data.setColumn(nRow,"소독기아", temp3);
        			this.ds_data.setColumn(nRow,"소독기점", temp4);
        			this.ds_data.setColumn(nRow,"소독기저", temp5);
        			this.ds_data.setColumn(nRow,"소독방법", "");
        			this.ds_data.setColumn(nRow,"위생평가","살균(열탕소독), 바닥청소(표백제, 락스)");
        		}

        	}

        };

        // O,△,X 체크박스 값 변경 이벤트
        this.mainChk_onchanged = function(obj,e)
        {
        	const num = obj.id.substr(5);

        	//const cRow = parseInt(num) - 1;
        	//const offset = 0;

        	const value = e.postvalue;

        	switch (obj.id)
        	{
        		case "chk_o" + num:
        			if(value == 1)
        			{
        				this.div_cont.form.div_right.form.div_main.form.components["chk_v" + num].set_value(0);
        				this.div_cont.form.div_right.form.div_main.form.components["chk_x" + num].set_value(0);
        				this.ds_data.setColumn(0,"항목"+num, 1);
        			}
        			break;
        		case "chk_v" + num:
        			if(value == 2)
        			{
        				this.div_cont.form.div_right.form.div_main.form.components["chk_o" + num].set_value(0);
        				this.div_cont.form.div_right.form.div_main.form.components["chk_x" + num].set_value(0);
        				this.ds_data.setColumn(0,"항목"+num, 2);
        			}
        			break;
        		case "chk_x" + num:
        			if(value == 3)
        			{
        				this.div_cont.form.div_right.form.div_main.form.components["chk_o" + num].set_value(0);
        				this.div_cont.form.div_right.form.div_main.form.components["chk_v" + num].set_value(0);
        				this.ds_data.setColumn(0,"항목"+num, 3);
        			}
        			break;
        	}
        };

        // 소독방법 변경 이벤트
        this.div_cont_div_right_div_main_cmb_26_onitemchanged = function(obj,e)
        {
        	const disinfect = e.posttext.substr(2); // 콤보박스 텍스트 앞 2자리 자르기

        	this.div_cont.form.div_right.form.div_main.form.edt_26.set_value(disinfect);

        	this.div_cont.form.div_right.form.div_main.form.cmb_26.set_value(""); // 콤보 선택 후 빈값으로 변경
        };

        // 캘린더 변경 이벤트
        this.div_search_cal_yyyymm_pic_onchanged = function(obj,e)
        {
        	// 선택월의 1일, 마지막일 구하기
        	var year = this.ds_search.getColumn(0,"YYYYMM").substr(0,4);
        	var month = this.ds_search.getColumn(0,"YYYYMM").substr(4);
        	var firstDay = new Date(year, month-1 , 1);
        	var lastDay = new Date(year, month, 0);

        	// from to 날짜 셋팅
        	this.ds_search.setColumn(0, "DATE_FROM", firstDay);
        	this.ds_search.setColumn(0, "DATE_TO", lastDay);

        	this.ds_data.clearData();
        	// 조회
        	this.fn_search("search");
        };

        // 온도 스핀이벤트
        this.spn_onspin = function(obj,e)
        {
        	const idStr = obj.id.substr(4);
        	//기본값 또는 DB값
        	const prevalue = this.div_cont.form.div_right.form.div_main.form.components["mae_" + idStr].value;

        	let pm = 0;
        	if(e.up == true){ // 증가
        		pm = 1;
        	}else{ // 감소
        		pm = -1;
        	}

        	const value = parseFloat(prevalue) + pm;

        // 	if(idStr == "tem1" || idStr == "tem2" ){ // 1:냉동고, 2:냉장고
        // 		if(value > 999 || value < -99){ // 입력값이 999이상 또는 -99이하 입력안되게 설정
        // 			return false;
        // 		}
        // 	}else if(idStr == "tem3" || idStr == "tem4" || idStr == "tem5"){ // 3,4,5 소독기 아,점,저
        // 		if(value > 999 || value < 0){ // 입력값이 999이상 또는 0이하입력안되게 설정
        // 			return false;
        // 		}
        // 	}

        	this.div_cont.form.div_right.form.div_main.form.components["mae_" + idStr].set_value(value);
        };

        // 온도 maskedit 변경 이벤트
        this.mae_tem_onchanged = function(obj,e)
        {
        	const idStr = obj.id.substr(4);

        	if(idStr == "tem1" || idStr == "tem2" ){ // 1:냉동고, 2:냉장고
        		if(e.postvalue > 999 || e.postvalue < -99){ // 입력값이 999이상 또는 -99이하이면 0으로 세팅
        			this.div_cont.form.div_right.form.div_main.form.components["mae_" + idStr].set_value(0);
        		}
        	}else if(idStr == "tem3" || idStr == "tem4" || idStr == "tem5"){ // 3,4,5 소독기 아,점,저
        		if(e.postvalue > 999 || e.postvalue < 0){ // 입력값이 999이상 또는 0이하이면 0으로 세팅
        			this.div_cont.form.div_right.form.div_main.form.components["mae_" + idStr].set_value(0);
        		}
        	}
        };


        // 방향키 위,아래 누를때
        this.mae_tem_onkeydown = function(obj,e)
        {
        	const idStr = obj.id.substr(4);
        	const prevalue = this.div_cont.form.div_right.form.div_main.form.components["mae_" + idStr].value;

        	let pm = 0;
        	// 위 38, 아래 40
        	if(e.keycode == 38){
        		pm = 1;
        	}else if(e.keycode == 40){
        		pm = -1;
        	}

        	const value = parseFloat(prevalue) + pm;

        	if(idStr == "tem1" || idStr == "tem2" ){ // 1:냉동고, 2:냉장고
        		if(value > 999 || value < -99){ // 입력값이 999이상 또는 -99이하 입력안되게 설정
        			return false;
        		}
        	}else if(idStr == "tem3" || idStr == "tem4" || idStr == "tem5"){ // 3,4,5 소독기 아,점,저
        		if(value > 999 || value < 0){ // 입력값이 999이상 또는 0이하입력안되게 설정
        			return false;
        		}
        	}

        	// 값 세팅
        	this.div_cont.form.div_right.form.div_main.form.components["mae_" + idStr].set_value(value);

        };

        // 출력 체크박스 이벤트
        this.chk_repo_canchange = function(obj,e)
        {
        // 	var repo1 = this.div_func.form.chk_repo1.value;
        // 	var repo2 = this.div_func.form.chk_repo2.value;
        	if(e.postvalue == 1){ //
        		switch (obj.id)
        		{
        			case "chk_repo1":
        				this.div_func.form.chk_repo2.set_value(0);
        				break;
        			case "chk_repo2":
        				this.div_func.form.chk_repo1.set_value(0);
        				break;
        		}
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("oncellclick",this.div_cont_div_left_grd_list_oncellclick,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o01.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x01.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o02.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x02.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o03.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x03.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o04.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x04.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o05.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x05.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o06.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x06.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o07.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x07.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o08.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x08.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.btn_manager.addEventHandler("onclick",this.div_cont_div_right_div_main_btn_manager_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o11.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x11.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o12.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x12.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o13.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x13.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o14.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x14.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o15.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x15.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o16.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x16.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.sta_body18.addEventHandler("onclick",this.div_cont_div_right_div_main_sta_body13_02_00_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.chk_v01.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_v02.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_v03.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_v04.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_v05.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_v06.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_v07.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_v08.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_v10.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_v11.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_v12.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_v13.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_v14.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_v15.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_v16.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o17.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x17.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o18.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x18.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o19.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x19.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o20.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x20.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o21.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x21.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o22.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x22.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_v17.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_v18.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_v19.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_v20.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_v21.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_v22.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.spn_tem1.addEventHandler("onspin",this.spn_onspin,this);
            this.div_cont.form.div_right.form.div_main.form.spn_tem1.addEventHandler("onchanged",this.div_cont_div_right_div_main_spn_tem1_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.sta_body23.addEventHandler("onclick",this.div_cont_div_right_div_main_sta_body13_02_00_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.spn_tem2.addEventHandler("onspin",this.spn_onspin,this);
            this.div_cont.form.div_right.form.div_main.form.cmb_26.addEventHandler("onitemchanged",this.div_cont_div_right_div_main_cmb_26_onitemchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o10.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o09.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x10.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.mae_tem4.addEventHandler("onchanged",this.mae_tem_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.mae_tem4.addEventHandler("onkeydown",this.mae_tem_onkeydown,this);
            this.div_cont.form.div_right.form.div_main.form.spn_tem4.addEventHandler("onspin",this.spn_onspin,this);
            this.div_cont.form.div_right.form.div_main.form.spn_tem4.addEventHandler("onchanged",this.div_cont_div_right_div_main_spn_tem4_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.spn_tem3.addEventHandler("onspin",this.spn_onspin,this);
            this.div_cont.form.div_right.form.div_main.form.mae_tem3.addEventHandler("onchanged",this.mae_tem_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.mae_tem3.addEventHandler("onkeydown",this.mae_tem_onkeydown,this);
            this.div_cont.form.div_right.form.div_main.form.spn_tem5.addEventHandler("onspin",this.spn_onspin,this);
            this.div_cont.form.div_right.form.div_main.form.mae_tem5.addEventHandler("onchanged",this.mae_tem_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.mae_tem5.addEventHandler("onkeydown",this.mae_tem_onkeydown,this);
            this.div_cont.form.div_right.form.div_main.form.mae_tem1.addEventHandler("onchanged",this.mae_tem_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.mae_tem1.addEventHandler("onkeydown",this.mae_tem_onkeydown,this);
            this.div_cont.form.div_right.form.div_main.form.mae_tem2.addEventHandler("onchanged",this.mae_tem_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.mae_tem2.addEventHandler("onkeydown",this.mae_tem_onkeydown,this);
            this.div_cont.form.div_right.form.div_main.form.chk_v09.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x09.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.cal_yyyymm_pic.addEventHandler("onchanged",this.div_search_cal_yyyymm_pic_onchanged,this);
            this.div_func.form.btn_delete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_func.form.chk_repo1.addEventHandler("canchange",this.chk_repo_canchange,this);
            this.div_func.form.chk_repo2.addEventHandler("canchange",this.chk_repo_canchange,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.fn_report,this);
        };
        this.loadIncludeScript("DAY00703.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
