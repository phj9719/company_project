(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00713");
            this.set_titletext("7-14 전기안전점검");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"전기번호\" type=\"INT\" size=\"256\"/><Column id=\"점검일\" type=\"DATE\" size=\"256\"/><Column id=\"점검시간\" type=\"STRING\" size=\"256\"/><Column id=\"점검자\" type=\"STRING\" size=\"256\"/><Column id=\"점검코드\" type=\"STRING\" size=\"256\"/><Column id=\"점검직종\" type=\"STRING\" size=\"256\"/><Column id=\"점검항목\" type=\"STRING\" size=\"256\"/><Column id=\"조치사항\" type=\"STRING\" size=\"2000\"/><Column id=\"특이사항\" type=\"STRING\" size=\"2000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"DATE\" size=\"256\"/><Column id=\"DATE_TO\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">2021</Col><Col id=\"CMNM\">2021년</Col></Row><Row><Col id=\"CMCD\">2022</Col><Col id=\"CMNM\">2022년</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"전기번호\" type=\"INT\" size=\"256\"/><Column id=\"점검일\" type=\"DATE\" size=\"256\"/><Column id=\"점검시간\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"TO_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"TO_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"점검자\" type=\"STRING\" size=\"256\"/><Column id=\"점검코드\" type=\"STRING\" size=\"256\"/><Column id=\"점검직종\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"점검항목\" type=\"STRING\" size=\"256\"/><Column id=\"O1\" type=\"STRING\" size=\"256\"/><Column id=\"X1\" type=\"STRING\" size=\"256\"/><Column id=\"O2\" type=\"STRING\" size=\"256\"/><Column id=\"X2\" type=\"STRING\" size=\"256\"/><Column id=\"O3\" type=\"STRING\" size=\"256\"/><Column id=\"X3\" type=\"STRING\" size=\"256\"/><Column id=\"O4\" type=\"STRING\" size=\"256\"/><Column id=\"X4\" type=\"STRING\" size=\"256\"/><Column id=\"O5\" type=\"STRING\" size=\"256\"/><Column id=\"X5\" type=\"STRING\" size=\"256\"/><Column id=\"O6\" type=\"STRING\" size=\"256\"/><Column id=\"X6\" type=\"STRING\" size=\"256\"/><Column id=\"O7\" type=\"STRING\" size=\"256\"/><Column id=\"X7\" type=\"STRING\" size=\"256\"/><Column id=\"O8\" type=\"STRING\" size=\"256\"/><Column id=\"X8\" type=\"STRING\" size=\"256\"/><Column id=\"O9\" type=\"STRING\" size=\"256\"/><Column id=\"X9\" type=\"STRING\" size=\"256\"/><Column id=\"O10\" type=\"STRING\" size=\"256\"/><Column id=\"X10\" type=\"STRING\" size=\"256\"/><Column id=\"O11\" type=\"STRING\" size=\"256\"/><Column id=\"X11\" type=\"STRING\" size=\"256\"/><Column id=\"O12\" type=\"STRING\" size=\"256\"/><Column id=\"X12\" type=\"STRING\" size=\"256\"/><Column id=\"O13\" type=\"STRING\" size=\"256\"/><Column id=\"X13\" type=\"STRING\" size=\"256\"/><Column id=\"조치사항\" type=\"STRING\" size=\"2000\"/><Column id=\"조치1\" type=\"STRING\" size=\"256\"/><Column id=\"조치2\" type=\"STRING\" size=\"256\"/><Column id=\"조치3\" type=\"STRING\" size=\"256\"/><Column id=\"조치4\" type=\"STRING\" size=\"256\"/><Column id=\"조치5\" type=\"STRING\" size=\"256\"/><Column id=\"조치6\" type=\"STRING\" size=\"256\"/><Column id=\"조치7\" type=\"STRING\" size=\"256\"/><Column id=\"조치8\" type=\"STRING\" size=\"256\"/><Column id=\"조치9\" type=\"STRING\" size=\"256\"/><Column id=\"조치10\" type=\"STRING\" size=\"256\"/><Column id=\"조치11\" type=\"STRING\" size=\"256\"/><Column id=\"조치12\" type=\"STRING\" size=\"256\"/><Column id=\"조치13\" type=\"STRING\" size=\"256\"/><Column id=\"특이사항\" type=\"STRING\" size=\"2000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dupl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"전기번호\" type=\"STRING\" size=\"256\"/><Column id=\"점검일\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"110\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"점검일\"/><Cell col=\"1\" text=\"점검시간\"/><Cell col=\"2\" text=\"점검자\"/></Band><Band id=\"body\"><Cell text=\"bind:점검일\" cursor=\"pointer\" displaytype=\"date\" expandchar=\"dot\" cssclass=\"cellBWoman\"/><Cell col=\"1\" text=\"bind:점검시간\"/><Cell col=\"2\" text=\"bind:점검자\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","470","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_main","0","0","1130","748",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e2e2e2");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","493","7","145","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("0");
            obj.set_text("전기안전관리 점검표");
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

            obj = new Static("sta_head1","20","89","50","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("20");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2","sta_head1:-1","89","328","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("21");
            obj.set_text("점 검 내 용");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3","sta_head2:-1","89","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("22");
            obj.set_text("적합");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4","sta_head3:-1","89","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("23");
            obj.set_text("부적합");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num1","20","sta_head1:-1","50","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("25");
            obj.set_text("1.");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1","sta_num1:-1","sta_head2:-1","328","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("26");
            obj.set_text("전기개폐기(차단기) 상태");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1","sta_body1:-1","sta_head3:-1","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1","sta_o1:-1","sta_head4:-1","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o1","sta_o1:-58","sta_o1:-30","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("28");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x1","sta_x1:-57","sta_x1:-30","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("30");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num2","20","sta_num1:-1","50","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("33");
            obj.set_text("2.");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body2","sta_num2:-1","sta_body1:-1","328","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("34");
            obj.set_text("전기 누전차단기 상태");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o2","sta_body2:-1","sta_o1:-1","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x2","sta_o2:-1","sta_x1:-1","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o2","sta_o2:-58","sta_o2:-30","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("36");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x2","sta_x2:-57","sta_x2:-30","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("38");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num3","20","sta_num2:-1","50","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("41");
            obj.set_text("3.");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","sta_num3:-1","sta_body2:-1","328","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("전기분전함 이상 점검");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o3","sta_body3:-1","sta_o2:-1","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x3","sta_o3:-1","sta_x2:-1","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o3","sta_o3:-58","sta_o3:-31","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("44");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x3","sta_x3:-57","sta_x3:-31","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("46");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num4","20","sta_num3:-1","50","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("49");
            obj.set_text("4.");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4","sta_num4:-1","sta_body3:-1","328","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("전선 배선 상태");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o4","sta_body4:-1","sta_o3:-1","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x4","sta_o4:-1","sta_x3:-1","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o4","sta_o4:-58","sta_o4:-30","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("52");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x4","sta_x4:-57","sta_x4:-30","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("54");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num5","20","sta_num4:-1","50","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("57");
            obj.set_text("5.");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body5","sta_num5:-1","sta_body4:-1","328","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("58");
            obj.set_text("전선 노출 상태");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o5","sta_body5:-1","sta_o4:-1","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x5","sta_o5:-1","sta_x4:-1","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o5","sta_o5:-58","sta_o5:-30","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("60");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x5","sta_x5:-57","sta_x5:-30","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("62");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num6","20","sta_num5:-1","50","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("65");
            obj.set_text("6.");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body6","sta_num6:-1","sta_body5:-1","328","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("66");
            obj.set_text("전기 합선 여부");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o6","sta_body6:-1","sta_o5:-1","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x6","sta_o6:-1","sta_x5:-1","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o6","sta_o6:-58","sta_o6:-30","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("68");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x6","sta_x6:-57","sta_x6:-30","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("70");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num7","20","sta_num6:-1","50","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("73");
            obj.set_text("7.");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body7","sta_num7:-1","sta_body6:-1","328","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("74");
            obj.set_text("전기 누전(절연) 상태");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o7","sta_body7:-1","sta_o6:-1","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x7","sta_o7:-1","sta_x6:-1","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o7","sta_o7:-58","sta_o7:-30","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("76");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x7","sta_x7:-57","sta_x7:-30","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("78");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num8","20","sta_num7:-1","50","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("81");
            obj.set_text("8.");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body8","sta_num8:-1","sta_body7:-1","328","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("82");
            obj.set_text("접지 상태");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o8","sta_body8:-1","sta_o7:-1","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x8","sta_o8:-1","sta_x7:-1","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o8","sta_o8:-58","sta_o8:-30","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("84");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x8","sta_x8:-57","sta_x8:-30","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("86");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num9","20","sta_num8:-1","50","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("89");
            obj.set_text("9.");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body9","sta_num9:-1","sta_body8:-1","328","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("90");
            obj.set_text("전선의 피복 상태");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o9","sta_body9:-1","sta_o8:-1","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x9","sta_o9:-1","sta_x8:-1","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o9","sta_o9:-58","sta_o9:-30","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("92");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x9","sta_x9:-57","sta_x9:-30","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("94");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num10","20","sta_num9:-1","50","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("97");
            obj.set_text("10.");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body10","sta_num10:-1","sta_body9:-1","328","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("98");
            obj.set_text("전선의 노출, 손상 상태");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o10","sta_body10:-1","sta_o9:-1","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x10","sta_o10:-1","sta_x9:-1","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("101");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o10","sta_o10:-58","sta_o10:-30","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("100");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x10","sta_x10:-57","sta_x10:-30","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("102");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head_rmk","20","640","1088","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("129");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_rmk","20","669","1088",null,null,"10",null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("130");
            obj.set_displaynulltext("내용을 입력하세요.");
            obj.set_scrollbartype("fixed");
            obj.set_scrolltype("vertical");
            obj.set_wordWrap("char");
            obj.set_maxlength("2000");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_info1","20","44","182","48",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_SearchTxt");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_info2","201","44","332","48",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_SearchTxt");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_info3","532","44","282","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_SearchTxt");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_date","24","52","36","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("5");
            obj.set_text("점검일");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Calendar("cal_date","70","52","90","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_tooltiptext("점검일");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_time","214","52","48","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("9");
            obj.set_text("점검시간");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_from_hour","272","52","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("10");
            obj.set_value("10");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_text("10");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_timeColon1","308","52","10","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("131");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_from_min","318","52","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("11");
            obj.set_value("00");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_time_from","358","52","24","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("12");
            obj.set_text("부터");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_to_hour","392","52","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("13");
            obj.set_value("10");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("종료시간");
            obj.set_text("10");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_timeColon2","428","52","10","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("14");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_to_min","438","52","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("15");
            obj.set_value("00");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("종료분");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_time_to","478","52","24","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("16");
            obj.set_text("까지");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_manager","532","52","80","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("18");
            obj.set_text("점검자");
            obj.set_cssclass("btn_worker");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_manager_value","623","52","174","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("19");
            obj.set_text("너싱홈/ 요양보호사 / 20210007");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_ManagerInfo");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5","sta_head4:-1","89","574","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("24");
            obj.set_text("조치사항");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_etc1","sta_x1:-1","sta_head5:-1","574","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_etc1","sta_etc1:-559","sta_etc1:-33","545","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("32");
            obj.set_displaynulltext("내용을 입력하세요.");
            obj.set_maxlength("41");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_etc2","sta_x2:-1","sta_etc1:-1","574","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_etc2","sta_etc2:-559","sta_etc2:-33","545","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("40");
            obj.set_displaynulltext("내용을 입력하세요.");
            obj.set_maxlength("41");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_etc3","sta_x3:-1","sta_etc2:-1","574","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_etc3","sta_etc3:-559","sta_etc3:-33","545","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("48");
            obj.set_displaynulltext("내용을 입력하세요.");
            obj.set_maxlength("41");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_etc4","sta_x4:-1","sta_etc3:-1","574","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_etc4","sta_etc4:-559","sta_etc4:-33","545","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("56");
            obj.set_displaynulltext("내용을 입력하세요.");
            obj.set_maxlength("41");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_etc5","sta_x5:-1","sta_etc4:-1","574","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_etc5","sta_etc5:-559","sta_etc5:-33","545","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("64");
            obj.set_displaynulltext("내용을 입력하세요.");
            obj.set_maxlength("41");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_etc6","sta_x6:-1","sta_etc5:-1","574","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_etc6","sta_etc6:-559","sta_etc6:-33","545","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("72");
            obj.set_displaynulltext("내용을 입력하세요.");
            obj.set_maxlength("41");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_etc7","sta_x7:-1","sta_etc6:-1","574","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_etc7","sta_etc7:-559","sta_etc7:-33","545","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("80");
            obj.set_displaynulltext("내용을 입력하세요.");
            obj.set_maxlength("41");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_etc8","sta_x8:-1","sta_etc7:-1","574","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_etc8","sta_etc8:-559","sta_etc8:-33","545","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("88");
            obj.set_displaynulltext("내용을 입력하세요.");
            obj.set_maxlength("41");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_etc9","sta_x9:-1","sta_etc8:-1","574","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_etc9","sta_etc9:-559","sta_etc9:-33","545","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("96");
            obj.set_displaynulltext("내용을 입력하세요.");
            obj.set_maxlength("41");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_etc10","sta_x10:-1","sta_etc9:-1","574","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("103");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_etc10","sta_etc10:-559","sta_etc10:-33","545","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("104");
            obj.set_displaynulltext("내용을 입력하세요.");
            obj.set_maxlength("41");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num11","20","518","50","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("105");
            obj.set_text("11.");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body11","69","518","328","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("106");
            obj.set_text("전기플러그, 콘센트 손상 상태");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o11","396","518","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("107");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x11","465","518","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("109");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o11","408","528","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("108");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x11","478","528","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("110");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_etc11","534","518","574","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("111");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_etc11","549","525","545","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("112");
            obj.set_displaynulltext("내용을 입력하세요.");
            obj.set_maxlength("41");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num12","20","557","50","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("113");
            obj.set_text("12.");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body12","69","557","328","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("114");
            obj.set_text("전기콘센트 안전막음 점검");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o10_00_00","396","557","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("115");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x10_00_00","465","557","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("117");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o12","408","567","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("116");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x12","478","567","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("118");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_etc12","534","557","574","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("119");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_etc12","549","564","545","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("120");
            obj.set_displaynulltext("내용을 입력하세요.");
            obj.set_maxlength("41");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num13","20","596","50","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("121");
            obj.set_text("13.");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body13","69","596","328","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("122");
            obj.set_text("전기사용제품 점검");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o13","396","596","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("123");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x13","465","596","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("125");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o13","408","606","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("124");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x13","478","606","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("126");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_etc13","534","596","574","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("127");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_etc13","549","603","545","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("128");
            obj.set_displaynulltext("내용을 입력하세요.");
            obj.set_maxlength("41");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Calendar("cal_date_pic","cal_date:-1","cal_date:-26","25","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("7");
            obj.set_enable("false");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","450","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_year","23","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"7","70","26","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","123","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","241","12","8","17",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","256","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from_pic","cal_date_from:-1","cal_date_from:-26","25","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic","cal_date_to:-1","cal_date_to:-26","25","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","470","0","1130","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_new","0","7","90","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("새로작성");
            obj.set_cssclass("btn_newdoc");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_sign","112","7","55","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("결재란");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"7","70","26","0",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("btn_delete");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","70","26","btn_delete:5",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report","170","7","140","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("가스안전 점검표");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cmb_year","value","ds_search","YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cal_date_from","value","ds_search","DATE_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_date_to","value","ds_search","DATE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_cont.form.div_right.form.div_main.form.sta_no_value","text","ds_data","전기번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_right.form.div_main.form.cal_date","value","ds_data","점검일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_right.form.div_main.form.edt_from_hour","value","ds_data","FROM_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_right.form.div_main.form.edt_from_min","value","ds_data","FROM_MIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_right.form.div_main.form.edt_to_hour","value","ds_data","TO_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_right.form.div_main.form.edt_to_min","value","ds_data","TO_MIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_right.form.div_main.form.sta_manager_value","text","ds_data","VIEW_MANAGER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_right.form.div_main.form.chk_o1","value","ds_data","O1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right.form.div_main.form.chk_x1","value","ds_data","X1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right.form.div_main.form.chk_o2","value","ds_data","O2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.div_main.form.chk_x2","value","ds_data","X2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.div_right.form.div_main.form.chk_o3","value","ds_data","O3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_right.form.div_main.form.chk_x3","value","ds_data","X3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_right.form.div_main.form.chk_o4","value","ds_data","O4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.div_right.form.div_main.form.chk_x4","value","ds_data","X4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.form.div_right.form.div_main.form.chk_o5","value","ds_data","O5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.div_right.form.div_main.form.chk_x5","value","ds_data","X5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.div_right.form.div_main.form.chk_o6","value","ds_data","O6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.div_right.form.div_main.form.chk_x6","value","ds_data","X6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.div_right.form.div_main.form.chk_o7","value","ds_data","O7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.div_right.form.div_main.form.chk_x7","value","ds_data","X7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cont.form.div_right.form.div_main.form.chk_o8","value","ds_data","O8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_cont.form.div_right.form.div_main.form.chk_x8","value","ds_data","X8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_cont.form.div_right.form.div_main.form.chk_o9","value","ds_data","O9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_cont.form.div_right.form.div_main.form.chk_x9","value","ds_data","X9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_cont.form.div_right.form.div_main.form.chk_o10","value","ds_data","O10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_cont.form.div_right.form.div_main.form.chk_x10","value","ds_data","X10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_cont.form.div_right.form.div_main.form.txt_rmk","value","ds_data","특이사항");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_cont.form.div_right.form.div_main.form.edt_etc1","value","ds_data","조치1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.div_right.form.div_main.form.edt_etc2","value","ds_data","조치2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.div_right.form.div_main.form.edt_etc3","value","ds_data","조치3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.div_right.form.div_main.form.edt_etc4","value","ds_data","조치4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cont.form.div_right.form.div_main.form.edt_etc5","value","ds_data","조치5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_cont.form.div_right.form.div_main.form.edt_etc6","value","ds_data","조치6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_cont.form.div_right.form.div_main.form.edt_etc7","value","ds_data","조치7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_cont.form.div_right.form.div_main.form.edt_etc8","value","ds_data","조치8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cont.form.div_right.form.div_main.form.edt_etc9","value","ds_data","조치9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_cont.form.div_right.form.div_main.form.edt_etc10","value","ds_data","조치10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_cont.form.div_right.form.div_main.form.chk_o11","value","ds_data","O11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_cont.form.div_right.form.div_main.form.chk_x11","value","ds_data","X11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_cont.form.div_right.form.div_main.form.edt_etc11","value","ds_data","조치11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_cont.form.div_right.form.div_main.form.chk_o12","value","ds_data","O12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_cont.form.div_right.form.div_main.form.chk_x12","value","ds_data","X12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_cont.form.div_right.form.div_main.form.edt_etc12","value","ds_data","조치12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_cont.form.div_right.form.div_main.form.chk_o13","value","ds_data","O13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_cont.form.div_right.form.div_main.form.chk_x13","value","ds_data","X13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_cont.form.div_right.form.div_main.form.edt_etc13","value","ds_data","조치13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_search.form.cal_date_from_pic","value","ds_search","DATE_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_search.form.cal_date_to_pic","value","ds_search","DATE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_cont.form.div_right.form.div_main.form.cal_date_pic","value","ds_data","점검일");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00714.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00714.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00714.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00714
         * 화면명   	: 7-14 전기안전점검
         * 화면설명 	: 전기안전점검 점검내역을 작성하는 화면
         * 작성일   	: 2022-03-07
         * 작성자   	: 박한준
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

        	// 현재 년도 구하기
        	const date = new Date();
        	const year = date.getFullYear();

        	// 년도 콤보박스 세팅
        	this.ds_year.clearData();
        	let nRow;
        	for (let i = 10; i > 0; i--)
        	{
        		nRow = this.ds_year.addRow();
        		this.ds_year.setColumn(nRow, "CMCD", year - i);
        		this.ds_year.setColumn(nRow, "CMNM", (year - i) + "년");
        	}
        	for (let i = 0; i < 11; i++)
        	{
        		nRow = this.ds_year.addRow();
        		this.ds_year.setColumn(nRow, "CMCD", year + i);
        		this.ds_year.setColumn(nRow, "CMNM", (year + i) + "년");
        	}

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "YEAR", year);
        	this.ds_search.setColumn(0, "DATE_FROM", year + '0101');
        	this.ds_search.setColumn(0, "DATE_TO", year + '1231');

        	// 리포트 출력 초기화
        	this.div_func.form.chk_sign.set_value(1);

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

        	if (this.ds_data.rowcount > 0)
        		this.reSearchData = this.ds_data.getColumn(0, "점검일");

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

        	if (Sct.Util.isEmpty(this.ds_data.getColumn(0, "점검코드")))
        	{
        		this.alert("안전점검 관리자를 입력해야 합니다.");
        		return false;
        	}

        	if (!this.confirm("저장 하시겠습니까?"))
        		return false;

        	let str2String = "";
        	for (let i = 0; i < 13; i++)
        	{
        		str2String += this.ds_data.getColumn(0, "조치" + (i + 1)) + "\r\n";
        	}
        	this.ds_data.setColumn(0, "조치사항", str2String);

        	let cont = "";
        	for (let i = 0; i < 13; i++)
        	{
        		if (this.ds_data.getColumn(0, "O" + (i + 1)) == "1")
        			cont += "1";
        		else if (this.ds_data.getColumn(0, "X" + (i + 1)) == "2")
        			cont += "2";
        		else
        			cont += "0";
        	}
        	this.ds_data.setColumn(0, "점검항목", cont);

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
        		this.div_cont.form.div_right.form.div_main.form.cal_date_pic.set_enable(false);
        		return false;
        	}

        	if (!this.confirm("삭제 하시겠습니까?"))
        		return false;

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

        	const svcId = flag;
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00714.DAY00714_DS_LIST_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 저장
        this.fn_save = function()
        {
        	// validation
        	if (!this.fn_save_pre()) return;

        	const svcId = "save";
         	const params = "/DAY00714Controller.do";
        	const inDatasets = "input1=ds_data:U";
        	const outDatasets = "";
        	const argument = "method=save ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 삭제
        this.fn_delete = function()
        {
        	// validation
        	if (!this.fn_delete_pre()) return;

        	const svcId = "delete";
        	const params = "/DAY00714Controller.do";
        	const inDatasets = "input1=ds_data:U";
        	const outDatasets = "";
        	const argument = "method=delete ";

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
        /**
         * 특정위치의 문자열 바꾸기
         *
         * @param str 원본 문자열
         * @param character 바꿀 문자값
         * @param index 바꿀 위치
         */
        this.stringReplaceAt = function(str, character, index)
        {
        	return str.substr(0, index) + character + str.substr(index + character.length);
        };

        /**
         * 집중배설관찰 DB입력용 String 만들기
         *
         * @param cRow 바꿀 문자 index
         * @param str1 원본 문자열
         * @param col 데이터셋 컬럼명
         * @param value 바꿀 문자값
         * @param offset 문자 간격
         * @ds dataset 데이터셋
         */
        this.fn_valueSet = function(cRow, str1, col, value, offset, ds)
        {
        	let index;
        	if(offset == null || offset == 0)
        	{
        		str1 = this.stringReplaceAt(str1, value, cRow);
        		ds.setColumn(0, col, str1);
        	}
        	else
        	{
        		index = cRow * offset;
        		str1 = this.stringReplaceAt(str1, value, index);
        		ds.setColumn(0, col, str1);
        	}
        };

        // 입력, 수정용 데이터셋에 데이터 복사
        this.fn_dataCopy = function(row)
        {
        	this.ds_data.clearData();
        	const nRow = this.ds_data.addRow();
        	this.ds_data.copyRow(nRow, this.ds_list, row);

        	this.div_cont.form.div_right.form.div_main.form.cal_date_pic.set_enable(false);

        	const timeStr = this.ds_data.getColumn(nRow, "점검시간");
        	this.ds_data.setColumn(nRow, "FROM_HOUR", timeStr.substr(0, 2));
        	this.ds_data.setColumn(nRow, "FROM_MIN", timeStr.substr(3, 2));
        	this.ds_data.setColumn(nRow, "TO_HOUR", timeStr.substr(6, 2));
        	this.ds_data.setColumn(nRow, "TO_MIN", timeStr.substr(9, 2));

        	const managerStr = this.ds_data.getColumn(nRow, "점검자")
        					 + "/"
        					 + this.ds_data.getColumn(nRow, "점검직종")
        					 + "/"
        					 + this.ds_data.getColumn(nRow, "점검코드");
        	this.ds_data.setColumn(nRow, "VIEW_MANAGER", managerStr);

        	const str1 = this.ds_data.getColumn(nRow, "점검항목");
        	for (let i = 0; i < 13; i++)
        	{
        		const val = str1.substr(i, 1);
        		if (val == 1 || val == 0)
        		{
        			this.ds_data.setColumn(nRow, "O" + (i + 1), 1);
        		}
        		else
        		{
        			this.ds_data.setColumn(nRow, "X" + (i + 1), 2);
        		}
        	}

        	const str2 = this.ds_data.getColumn(nRow, "조치사항");
        	const str2Array = str2.split("\r");
        	for (let i = 0; i < 13; i++)
        	{
        		this.ds_data.setColumn(nRow, "조치" + (i + 1), nexacro.trim(str2Array[i], "\n"));
        	}

        	this.ds_data.set_updatecontrol(false);
        	this.ds_data.setRowType(nRow, 1);
        	this.ds_data.set_updatecontrol(true);
        };

        // 작업후 작업 정보 조회
        this.fn_findMstRow = function(fv_saveRefNo) {
        	trace("fv_saveRefNo : " + fv_saveRefNo);
        	const sFindRow = this.ds_list.findRow("점검일", fv_saveRefNo);
        	if (sFindRow > -1) {
        		this.ds_list.set_rowposition(sFindRow);
        		this.fn_dataCopy(sFindRow);
        	}

        	return sFindRow;
        };
        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 리포트 팝업
        this.fn_report = function()
        {
        	if (this.ds_data.rowcount == 0)
        	{
        		this.alert("출력할 항목을 선택해주세요.");
        		return false;
        	}

        	if (this.ds_data.getRowType(0) == 2)
        	{
        		return false;
        	}

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00714_R01.xfdl";
        	const popupName = "전기안전관리 점검표";

        	trace(this.div_func.form.chk_sign.value);

        	params = {
        		sicode : fv_sicode
        	,	date : this.ds_data.getColumn(0, "점검일")
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
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				const name = nexacro.trim(objDs.getColumn(0, "c_name"));
        				const dutyname = objDs.getColumn(0, "담당직종");
        				const staffid = objDs.getColumn(0, "c_staffid");
        				this.ds_data.setColumn(0, "점검자", name);
        				this.ds_data.setColumn(0, "점검코드", staffid);
        				this.ds_data.setColumn(0, "점검직종", dutyname);
        				this.ds_data.setColumn(0, "VIEW_MANAGER", name + "/" + dutyname + "/" + staffid);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "점검자", "");
        				this.ds_data.setColumn(0, "점검코드", "");
        				this.ds_data.setColumn(0, "점검직종", "");
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

        // 조회조건 년도 값 변경 이벤트
        this.div_search_cmb_year_onitemchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0, "DATE_FROM", e.postvalue + '0101');
        	this.ds_search.setColumn(0, "DATE_TO", e.postvalue + '1231');

        	// 값 변경시 조회
        	this.fn_search("search");
        };

        // 검색조건 날짜 변경 이벤트
        this.cal_date_pic_onchanged = function(obj,e)
        {
        	// 캘린더 범위가 콤보 박스의 년도를 넘지 못하도록 하기
        	const nYear = this.ds_search.getColumn(0, "YEAR");
        	switch(obj.id)
        	{
        		case "cal_date_from_pic" :
        			if (e.postvalue < nYear + "0101")
        			{
        				this.ds_search.setColumn(0, "DATE_FROM", nYear + '0101');
        			}
        			break;
        		case "cal_date_to_pic" :
        			if (e.postvalue > nYear + "1231")
        			{
        				this.ds_search.setColumn(0, "DATE_TO", nYear + '1231');
        			}
        			break;
        		default:
        	}
        };

        // 그리드 셀클릭 이벤트
        this.div_cont_div_left_grd_list_oncellclick = function(obj,e)
        {
        	const dateIdx = obj.getBindCellIndex("body", "점검일");
        	// 점검일 선택
        	if (e.col == dateIdx)
        	{
        		// 입력, 수정용 데이터셋에 데이터 복사
        		this.fn_dataCopy(e.row);
        	}
        };

        // 새로작성
        this.div_func_btn_new_onclick = function(obj,e)
        {
        	this.ds_list.set_rowposition(-1);
        	this.ds_data.clearData();
        	const nRow = this.ds_data.addRow();

        	this.ds_data.setColumn(nRow, "sicode", fv_sicode);

        	const today = Sct.Util.getToday();
        	this.ds_data.setColumn(nRow, "점검일", today);
        	this.div_cont.form.div_right.form.div_main.form.cal_date_pic.set_enable(true);

        	this.ds_data.setColumn(nRow, "점검시간", "10:00-11:00");
        	const timeStr = this.ds_data.getColumn(nRow, "점검시간");
        	this.ds_data.setColumn(nRow, "FROM_HOUR", timeStr.substr(0, 2));
        	this.ds_data.setColumn(nRow, "FROM_MIN", timeStr.substr(3, 2));
        	this.ds_data.setColumn(nRow, "TO_HOUR", timeStr.substr(6, 2));
        	this.ds_data.setColumn(nRow, "TO_MIN", timeStr.substr(9, 2));

        	this.ds_data.setColumn(nRow, "점검자", nexacro.trim(nexacro.getApplication().gds_userInfo.getColumn(0, "c_name")));
        	this.ds_data.setColumn(nRow, "점검코드", nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid"));
        	this.ds_data.setColumn(nRow, "점검직종", nexacro.getApplication().gds_userInfo.getColumn(0, "c_dutyname"));

        	const managerStr = this.ds_data.getColumn(nRow, "점검자")
        					 + "/"
        					 + this.ds_data.getColumn(nRow, "점검직종")
        					 + "/"
        					 + this.ds_data.getColumn(nRow, "점검코드");
        	this.ds_data.setColumn(nRow, "VIEW_MANAGER", managerStr);

        	this.ds_data.setColumn(nRow, "점검항목", "1111111111111");
        	const str1 = this.ds_data.getColumn(nRow, "점검항목");
        	for (let i = 0; i < 13; i++)
        	{
        		const val = str1.substr(i, 1);
        		trace("i : " + i + ' '+ val);
        		if (val == 1)
        		{
        			this.ds_data.setColumn(nRow, "O" + (i + 1), 1);
        		}
        		else
        		{
        			this.ds_data.setColumn(nRow, "X" + (i + 1), 2);
        		}
        	}

        	for (let i = 0; i < 13; i++)
        	{
        		this.ds_data.setColumn(nRow, "조치" + (i + 1), "");
        	}

        	this.ds_data.setColumn(nRow, "특이사항", "");

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

        	let cRow;
        	const offset = 0;
        	const value = obj.value;
        	const str1 = this.ds_data.getColumn(0, "점검시간");

        	switch (obj.id)
        	{
        		case "edt_from_hour":
        			cRow = 0;
        			break;
        		case "edt_to_hour":
        			cRow = 6;
        			break;
        	}

        	this.fn_valueSet(cRow, str1, "점검시간", value, offset, this.ds_data);
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

        	let cRow;
        	const offset = 0;
        	const value = obj.value;
        	const str1 = this.ds_data.getColumn(0, "점검시간");

        	switch (obj.id)
        	{
        		case "edt_from_min":
        			cRow = 3;
        			break;
        		case "edt_to_min":
        			cRow = 9;
        			break;
        	}

        	this.fn_valueSet(cRow, str1, "점검시간", value, offset, this.ds_data);
        };

        // 양호, 불량 체크박스 값 변경 이벤트
        this.mainChk_onchanged = function(obj,e)
        {
        	const num = obj.id.substr(5);

        	const cRow = parseInt(num) - 1;
        	const offset = 0;
        	const value = e.postvalue;
        	const str1 = this.ds_data.getColumn(0, "점검항목");

        	switch (obj.id)
        	{
        		// 양호
        		case "chk_o" + num:
        			if (value == 1)
        			{
        				this.div_cont.form.div_right.form.div_main.form.components["chk_x" + num].set_value(0);
        				//this.fn_valueSet(cRow, str1, "점검항목", value, offset, this.ds_data);
        			}
        			break;
        		// 불량
        		case "chk_x" + num:
        			if (value == 2)
        			{
        				this.div_cont.form.div_right.form.div_main.form.components["chk_o" + num].set_value(0);
        				//this.fn_valueSet(cRow, str1, "점검항목", value, offset, this.ds_data);
        			}
        			break;
        	}
        };

        // 조치사항 키 업 이벤트
        this.edt_etc_onkeyup = function(obj,e)
        {
        	const num = parseInt(obj.id.substr(7));

        	// Enter Key
        	if (e.keycode == 13)
        	{
        		if (num != 13)
        		{
        			this.div_cont.form.div_right.form.div_main.form.components["edt_etc" + (num + 1)].setFocus();
        		}
        		else if (num == 13)
        		{
        			this.div_cont.form.div_right.form.div_main.form.txt_rmk.setFocus();
        		}
        	}
        };

        // 조치사항 키 다운 이벤트
        this.edt_etc_onkeydown = function(obj,e)
        {
        	const num = parseInt(obj.id.substr(7));

        	// backspace
        	if (obj.getCaretPos() == 0)
        	{
        		if (e.keycode == 8)
        		{
        			if (num != 1)
        			{
        				this.div_cont.form.div_right.form.div_main.form.components["edt_etc" + (num - 1)].setFocus();
        			}
        		}
        	}
        	else
        	{
        		if (obj.value.length == obj.maxlength)
        		{
        			if (num != 13)
        			{
        				this.div_cont.form.div_right.form.div_main.form.components["edt_etc" + (num + 1)].setFocus();
        			}
        			else if (num == 13)
        			{
        				this.div_cont.form.div_right.form.div_main.form.txt_rmk.setFocus();
        			}
        		}
        	}
        };

        // 특이사항 키 다운 이벤트
        this.txt_rmk_onkeydown = function(obj,e)
        {
        	// backspace
        	if (e.keycode == 8)
        	{
        		if (obj.getCaretPos() == 0)
        		{
        			this.div_cont.form.div_right.form.div_main.form.edt_etc13.setFocus();
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
            this.div_cont.form.div_right.form.div_main.form.chk_o1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o7.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x7.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o8.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x8.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o9.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x9.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o10.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x10.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.txt_rmk.addEventHandler("onkeydown",this.txt_rmk_onkeydown,this);
            this.div_cont.form.div_right.form.div_main.form.txt_rmk.addEventHandler("onchanged",this.div_cont_div_right_div_main_txt_rmk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.edt_from_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.edt_from_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.edt_to_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.edt_to_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.btn_manager.addEventHandler("onclick",this.div_cont_div_right_div_main_btn_manager_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.edt_etc1.addEventHandler("onkeyup",this.edt_etc_onkeyup,this);
            this.div_cont.form.div_right.form.div_main.form.edt_etc1.addEventHandler("onkeydown",this.edt_etc_onkeydown,this);
            this.div_cont.form.div_right.form.div_main.form.edt_etc1.addEventHandler("ondrag",this.div_cont_div_right_div_main_edt_etc1_ondrag,this);
            this.div_cont.form.div_right.form.div_main.form.edt_etc2.addEventHandler("onkeyup",this.edt_etc_onkeyup,this);
            this.div_cont.form.div_right.form.div_main.form.edt_etc2.addEventHandler("onkeydown",this.edt_etc_onkeydown,this);
            this.div_cont.form.div_right.form.div_main.form.edt_etc3.addEventHandler("onkeyup",this.edt_etc_onkeyup,this);
            this.div_cont.form.div_right.form.div_main.form.edt_etc3.addEventHandler("onkeydown",this.edt_etc_onkeydown,this);
            this.div_cont.form.div_right.form.div_main.form.edt_etc4.addEventHandler("onkeyup",this.edt_etc_onkeyup,this);
            this.div_cont.form.div_right.form.div_main.form.edt_etc4.addEventHandler("onkeydown",this.edt_etc_onkeydown,this);
            this.div_cont.form.div_right.form.div_main.form.edt_etc5.addEventHandler("onkeyup",this.edt_etc_onkeyup,this);
            this.div_cont.form.div_right.form.div_main.form.edt_etc5.addEventHandler("onkeydown",this.edt_etc_onkeydown,this);
            this.div_cont.form.div_right.form.div_main.form.edt_etc6.addEventHandler("onkeyup",this.edt_etc_onkeyup,this);
            this.div_cont.form.div_right.form.div_main.form.edt_etc6.addEventHandler("onkeydown",this.edt_etc_onkeydown,this);
            this.div_cont.form.div_right.form.div_main.form.edt_etc7.addEventHandler("onkeyup",this.edt_etc_onkeyup,this);
            this.div_cont.form.div_right.form.div_main.form.edt_etc7.addEventHandler("onkeydown",this.edt_etc_onkeydown,this);
            this.div_cont.form.div_right.form.div_main.form.edt_etc8.addEventHandler("onkeyup",this.edt_etc_onkeyup,this);
            this.div_cont.form.div_right.form.div_main.form.edt_etc8.addEventHandler("onkeydown",this.edt_etc_onkeydown,this);
            this.div_cont.form.div_right.form.div_main.form.edt_etc9.addEventHandler("onkeyup",this.edt_etc_onkeyup,this);
            this.div_cont.form.div_right.form.div_main.form.edt_etc9.addEventHandler("onkeydown",this.edt_etc_onkeydown,this);
            this.div_cont.form.div_right.form.div_main.form.edt_etc10.addEventHandler("onkeyup",this.edt_etc_onkeyup,this);
            this.div_cont.form.div_right.form.div_main.form.edt_etc10.addEventHandler("onkeydown",this.edt_etc_onkeydown,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o11.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x11.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.edt_etc11.addEventHandler("onkeyup",this.edt_etc_onkeyup,this);
            this.div_cont.form.div_right.form.div_main.form.edt_etc11.addEventHandler("onkeydown",this.edt_etc_onkeydown,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o12.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x12.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.edt_etc12.addEventHandler("onkeyup",this.edt_etc_onkeyup,this);
            this.div_cont.form.div_right.form.div_main.form.edt_etc12.addEventHandler("onkeydown",this.edt_etc_onkeydown,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o13.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x13.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.edt_etc13.addEventHandler("onkeyup",this.edt_etc_onkeyup,this);
            this.div_cont.form.div_right.form.div_main.form.edt_etc13.addEventHandler("onkeydown",this.edt_etc_onkeydown,this);
            this.div_search.form.cmb_year.addEventHandler("onitemchanged",this.div_search_cmb_year_onitemchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.cal_date_from_pic.addEventHandler("onchanged",this.cal_date_pic_onchanged,this);
            this.div_search.form.cal_date_to_pic.addEventHandler("onchanged",this.cal_date_pic_onchanged,this);
            this.div_func.form.btn_new.addEventHandler("onclick",this.div_func_btn_new_onclick,this);
            this.div_func.form.btn_delete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_func.form.btn_report.addEventHandler("onclick",this.fn_reportBtn,this);
        };
        this.loadIncludeScript("DAY00714.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
