(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00212");
            this.set_titletext("2-12 간호.건강수준평가");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"sex_nm\" type=\"STRING\" size=\"256\"/><Column id=\"grade_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"m_reday\" type=\"STRING\" size=\"256\"/><Column id=\"m_history\" type=\"STRING\" size=\"256\"/><Column id=\"m_regist\" type=\"STRING\" size=\"256\"/><Column id=\"m_conname\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"INT\" size=\"256\"/><Column id=\"b_date\" type=\"STRING\" size=\"256\"/><Column id=\"사정시작\" type=\"STRING\" size=\"256\"/><Column id=\"사정종료\" type=\"STRING\" size=\"256\"/><Column id=\"최근적용기간\" type=\"STRING\" size=\"256\"/><Column id=\"만료일\" type=\"STRING\" size=\"256\"/><Column id=\"real_b_date\" type=\"STRING\" size=\"256\"/><Column id=\"height\" type=\"STRING\" size=\"256\"/><Column id=\"weight\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"year\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"STRING\" size=\"256\"/><Column id=\"date_to\" type=\"STRING\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"수급코드\" type=\"STRING\" size=\"256\"/><Column id=\"수급자명\" type=\"STRING\" size=\"256\"/><Column id=\"n_number\" type=\"STRING\" size=\"256\"/><Column id=\"사정일\" type=\"STRING\" size=\"256\"/><Column id=\"사정일dot\" type=\"STRING\" size=\"256\"/><Column id=\"사정시작\" type=\"DATE\" size=\"256\"/><Column id=\"사정종료\" type=\"DATE\" size=\"256\"/><Column id=\"GIGAN\" type=\"STRING\" size=\"256\"/><Column id=\"작성자\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"수급코드\" type=\"STRING\" size=\"256\"/><Column id=\"수급자명\" type=\"STRING\" size=\"256\"/><Column id=\"n_number\" type=\"STRING\" size=\"256\"/><Column id=\"사정일\" type=\"STRING\" size=\"256\"/><Column id=\"사정일dot\" type=\"STRING\" size=\"256\"/><Column id=\"사정시작\" type=\"STRING\" size=\"256\"/><Column id=\"사정종료\" type=\"STRING\" size=\"256\"/><Column id=\"GIGAN\" type=\"STRING\" size=\"256\"/><Column id=\"작성자\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"sex_nm\" type=\"STRING\" size=\"256\"/><Column id=\"grade_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"m_reday\" type=\"STRING\" size=\"256\"/><Column id=\"m_history\" type=\"STRING\" size=\"256\"/><Column id=\"m_regist\" type=\"STRING\" size=\"256\"/><Column id=\"m_conname\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"INT\" size=\"256\"/><Column id=\"b_date\" type=\"STRING\" size=\"256\"/><Column id=\"사정시작\" type=\"STRING\" size=\"256\"/><Column id=\"사정종료\" type=\"STRING\" size=\"256\"/><Column id=\"최근적용기간\" type=\"STRING\" size=\"256\"/><Column id=\"만료일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","550",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","0",null,null,"0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"170\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"현황\"/><Cell col=\"1\" text=\"그룹\"/><Cell col=\"2\" text=\"수급자명\"/><Cell col=\"3\" text=\"성별\"/><Cell col=\"4\" text=\"등급\"/><Cell col=\"5\" text=\"생활실\"/><Cell col=\"6\" text=\"최근적용기간\"/></Band><Band id=\"body\"><Cell text=\"bind:s_nm\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:m_group\" combodataset=\"ds_tp\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"2\" text=\"bind:m_name\" textAlign=\"left\" cssclass=\"cellBWoman\" cursor=\"pointer\" expandchar=\"dot\"/><Cell col=\"3\" text=\"bind:sex_nm\"/><Cell col=\"4\" text=\"bind:grade_nm\"/><Cell col=\"5\" text=\"bind:m_roomname\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:최근적용기간\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","550","0","1330",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_main","0","0",null,"110","0",null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1","122","3","1208","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body2","122","sta_body1:-1","1208","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","122","sta_body2:-1","1208","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new ImageViewer("imv_pic","20","3","100","100",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("6");
            obj.set_tabstop("false");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00","207","7","81","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("7");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00","328","7","81","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("8");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00","291","7","34","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("9");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1","120","3","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("0");
            obj.set_text("수급자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2","120","36","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("2");
            obj.set_text("생활실");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3","120","69","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("4");
            obj.set_text("만료일자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00","422","3","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("10");
            obj.set_text("성별 나이");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_01","509","7","35","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("11");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00","515","7","55","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("12");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00","422","36","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("13");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_01","686","3","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("14");
            obj.set_text("입소일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_00","686","36","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("15");
            obj.set_text("퇴소일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_00_00","422","69","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("16");
            obj.set_text("주요질환");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00_00_00","509","74","811","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("17");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_01_00","950","3","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("18");
            obj.set_text("인정번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_01_00_00_00","950","36","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("19");
            obj.set_text("인정등급");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00_00_01_00","1043","7","268","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("20");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00_00_01_01","1043","41","114","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("21");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_02","207","41","212","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("22");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_02_00","207","74","212","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("23");
            obj.set_text("");
            obj.set_font("normal 700 11pt/normal \"Arial\"");
            obj.set_color("blue");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00_00_00_00","515","41","114","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("24");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00_00_00_00_00","778","7","114","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("25");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00_00_00_00_00_00","778","41","114","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("26");
            obj.set_color("red");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_00","565","7","55","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("27");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_down","0","110",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Div("div_right","675","0",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("0");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Grid("grd_detail_list","20","30",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form.div_down.form.div_right.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_detail_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"적용기간\"/><Cell col=\"1\" text=\"수급자명\"/><Cell col=\"2\" text=\"작성자\"/><Cell col=\"3\" text=\"작성번호\"/><Cell col=\"4\" text=\"조회\"/></Band><Band id=\"body\"><Cell text=\"bind:GIGAN\" calendardateformat=\"yyyy.MM.dd\"/><Cell col=\"1\" text=\"bind:수급자명\" textAlign=\"left\" font=\"normal bold 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"2\" textAlign=\"left\" text=\"bind:작성자\"/><Cell col=\"3\" text=\"bind:n_number\"/><Cell col=\"4\" expandshow=\"show\" expandsize=\"60\" cursor=\"pointer\" expandimage=\"url('theme://images/ico_search.png')\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.form.div_down.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","20","3","250","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form.div_right.form);
            obj.set_taborder("1");
            obj.set_text("최근 간호.건강수준평가 리스트");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_down.form.div_right.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","675",null,null,"0",null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("1");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Button("btn_new","578","3","97","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form.div_left.form);
            obj.set_taborder("0");
            obj.set_text("새로작성");
            obj.set_cssclass("btn_newdoc");
            this.div_cont.form.div_right.form.div_down.form.div_left.addChild(obj.name, obj);

            obj = new Grid("grd_detail","20","30",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form.div_down.form.div_left.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_detail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"작성일\"/><Cell col=\"1\" text=\"작성자\"/><Cell col=\"2\" text=\"수급자명\"/><Cell col=\"3\" text=\"적용기간\"/><Cell col=\"4\" text=\"작성번호\"/><Cell col=\"5\" text=\"조회\"/></Band><Band id=\"body\"><Cell text=\"bind:사정일dot\" calendardateformat=\"yyyy.MM.dd\" displaytype=\"date\" expandchar=\"dot\" font=\"normal bold 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"1\" text=\"bind:작성자\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:수급자명\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:GIGAN\" font=\"normal bold 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"4\" text=\"bind:n_number\"/><Cell col=\"5\" expandshow=\"show\" expandsize=\"60\" cursor=\"pointer\" expandimage=\"url('theme://images/ico_search.png')\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.form.div_down.form.div_left.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","20","3","250","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form.div_left.form);
            obj.set_taborder("2");
            obj.set_text("간호사정.건강수준평가");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_down.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","550","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","480","7","70","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","229","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","347","12","8","17",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","359","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from_pic","318","7","25","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic","448","7","25","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_mate","0","7","75","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("수급자");
            obj.set_cssclass("btn_eldery");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_retiree","80","7","75","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("퇴소자");
            obj.set_cssclass("btn_eldery");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_all","161","7","62","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("전체");
            obj.set_cssclass("btn_eldery");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","550","0","1330","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_sign","773","7","65","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("결재란");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_visible("false");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report1","918","7","120","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("간호사정서식");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report2","1047","7","120","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("건강평가서식");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report3","1175","7","155","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_text("포괄평가기록서식");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_search.form.cal_date_from","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_date_to","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_search.form.cal_date_from_pic","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_search.form.cal_date_to_pic","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_right.form.div_main.form.sta_body1_00","text","ds_list_select","m_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_right.form.div_main.form.sta_body1_00_00","text","ds_list_select","m_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_00","text","ds_list_select","m_group");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.div_right.form.div_main.form.sta_body1_00_01","text","ds_list_copy","sex_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_00_00","text","ds_list_select","sex_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_cont.form.div_right.form.div_main.form.sta_body1_00_02","text","ds_list_select","m_roomname");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.div_right.form.div_main.form.sta_body1_00_02_00","text","ds_list_select","만료일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00_00_00","text","ds_list_select","m_enday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00_00_00_00","text","ds_list_select","m_reday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00_00","text","ds_list_select","b_date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00","text","ds_list_select","m_history");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_01_01","text","ds_list_select","grade_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_01_00","text","ds_list_select","m_regist");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_00_00_00","text","ds_list_select","age");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00212.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00212.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00212.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00212
         * 화면명   	: 2-12 상태변화기록(매주)
         * 화면설명 	:
         * 작성일   	: 2022-05-30
         * 작성자   	: 이동관
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
        this.fv_staff_id = nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid");
        this.fv_staff_name = nexacro.trim(nexacro.getApplication().gds_userInfo.getColumn(0, "c_name"));
        this.fileGroupId = "";
        this.row = 0;
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

        	// 검색조건 세팅
        	let today = Sct.Util.getToday();
        	this.ds_search.setColumn(0, "sicode", fv_sicode);
        	this.ds_search.setColumn(0, "date_from", year + '0101');
        	this.ds_search.setColumn(0, "date_to", year+"1231");
        	this.ds_search.setColumn(0,"s_nm","사용중");	// 초기값은 수급자만 리스팅

        	// 그리드 설정
        	this.fn_setMainGrid();

        	// 오픈시 조회
        	this.fn_search("searchAndDetail");
        };

        this.fn_setMainGrid = function()
        {
        	var grdMain = this.div_cont.form.div_left.form.grd_list;

        	var nameIdx = grdMain.getBindCellIndex("body","m_name");
        	var snmIdx = grdMain.getBindCellIndex("body","s_nm");

        	var nameCss = "expr:dataset.getColumn(currow,'sex_nm')=='남'?'cellBMan':'cellBWoman'";
        	var snmCss = "expr:dataset.getColumn(currow,'s_nm')=='퇴소자'?'cellBRetire':''";

        	grdMain.setCellProperty("body", nameIdx, "cssclass", nameCss);
        	grdMain.setCellProperty("body", snmIdx, "cssclass", snmCss);
        }
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	// 검색조건 필수 체크 (컴포넌트 tooltiptext 값 넣을 것)
        	if (!this.gfn_findSnull(this.div_search)) return false;

        	return true;
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //조회
        this.fn_search = function (svcIdName)
        {
        	//validation
        	if (!this.fn_search_pre()) return;

        	const svcId = svcIdName;
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search input2=ds_search";
        	const outDatasets = "ds_list=output1 ds_detail_list=output2";
        	const argument = "method=getList "
        				   + "sqlId='DAY00212.DAY00212_DS_LIST_S DAY00212.DAY00212_DS_DETAIL_LIST_S' ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.fn_searchDetail = function (row)
        {
        	const svcId = "searchDetail";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_detail=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00212.DAY00212_DS_DETAIL_S' "
        				   + "sicode=" + this.ds_list.getColumn(row, "sicode") + " "
        				   + "m_code=" + this.ds_list.getColumn(row, "m_code") + " ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);

        	this.ds_list.set_rowposition(row);
        	this.row = 0;
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if (strSvcID == "search")
        		{

        		}
        		else if (strSvcID == "searchAndDetail")
        		{
        			this.fn_searchDetail(this.row);
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
        //이미지 조회
        this.fn_getSignImage = function ()
        {
        	let imgUrl = "";
        	const fileGrp = this.ds_data.getColumn(0, "FILE_REAL_NAME");

        	if(!Sct.Util.isEmpty(fileGrp))
        	{
        		const webHost = nexacro.getEnvironment().services["svcurl"].url;
        		const path = "/FILES";
        		imgUrl = webHost + path + fileGrp;
        	}

        	this.div_cont.form.div_right.form.div_main.form.imv_pic.set_image(imgUrl);
        };
        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "evaluation" :
        			if (objDs.getColumn(0, "REFRESH") == "Y"){
        				this.row = this.ds_list.rowposition;
        				this.fn_search("searchAndDetail");
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
        	this.fn_search("searchAndDetail");
        };

        // ds_search에 시작일, 종료일 받아서 세팅
        this.set_ds_search_date = function(from_d, to_d)
        {
        	this.ds_search.setColumn(0, "date_from", from_d);
        	this.ds_search.setColumn(0, "date_to", to_d);
        }

        // 년도 콤보에 년도값 적용
        this.combo_set_year = function (fDay)
        {
        	var yearStr = fDay.substr(0,4);
        	this.div_search.form.cmb_year.set_value(yearStr);
        }

        // 수급자 버튼
        this.btn_mate_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"s_nm","사용중");
        	this.clearAndSearch();
        };

        // 퇴소자 버튼
        this.btn_retiree_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"s_nm","퇴소자");
        	this.clearAndSearch();
        };

        // 전체 버튼
        this.btn_all_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"s_nm","");
        	this.clearAndSearch();
        };

        this.clearAndSearch = function()
        {
        	this.ds_list.clearData();
        	this.ds_list_select.clearData();
        	this.ds_detail.clearData();
        	this.ds_detail_list.clearData();

        	this.fn_search("searchAndDetail");
        }

        // 수급자,퇴소자,전체 버튼 선택에 따라 버튼 배경색 바꾸기
        this.ds_search_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid != "s_nm") return;

        	let s_nm = this.ds_search.getColumn(0,"s_nm");
        	let btn_all = this.div_search.form.btn_all;
        	let btn_mate = this.div_search.form.btn_mate;
        	let btn_retiree = this.div_search.form.btn_retiree;

        	switch (s_nm) {
        		case "" :
        			btn_all.set_cssclass("btn_eldery2");
        			btn_mate.set_cssclass("btn_eldery");
        			btn_retiree.set_cssclass("btn_eldery");
        			break;
        		case "사용중" :
        			btn_all.set_cssclass("btn_eldery");
        			btn_mate.set_cssclass("btn_eldery2");
        			btn_retiree.set_cssclass("btn_eldery");
        			break;
        		case "퇴소자" :
        			btn_all.set_cssclass("btn_eldery");
        			btn_mate.set_cssclass("btn_eldery");
        			btn_retiree.set_cssclass("btn_eldery2");
        			break;

        		default:
        	}
        };
        this.div_func_btn_report1_onclick = function(obj,e)
        {
        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00212_R01.xfdl";
        	const popupName = "간호사정서식";

        	params = {
        		sicode : this.ds_search.getColumn(0, "sicode")
        	,   sign : "1"

        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        this.div_func_btn_report2_onclick = function(obj,e)
        {
        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00212_R02.xfdl";
        	const popupName = "건강평가서식";

        	params = {
        		sicode : this.ds_search.getColumn(0, "sicode")
        	,   sign : "1"

        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        this.div_func_btn_report3_onclick = function(obj,e)
        {
        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00212_R03.xfdl";
        	const popupName = "포괄평가기록서식";

        	params = {
        		sicode : this.ds_search.getColumn(0, "sicode")
        	,   sign : "0"

        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        this.div_cont_div_right_div_down_div_left_btn_new_onclick = function(obj,e)
        {
        	if (this.ds_list.rowcount < 1) return;

        	if (this.ds_detail.rowcount < 1){
        		alert("수급자를 선택해주세요");
        		return;
        	}
        	const param = {
        			SICODE : fv_sicode
        		,	M_CODE : this.ds_list.getColumn(this.ds_list.rowposition, "m_code")
        		,   M_NAME : this.ds_list.getColumn(this.ds_list.rowposition, "m_name")
        		,   M_GROUP : this.ds_list.getColumn(this.ds_list.rowposition, "m_group")
        		,   SEX_NM : this.ds_list.getColumn(this.ds_list.rowposition, "sex_nm")
        		,   AGE : this.ds_list.getColumn(this.ds_list.rowposition, "age")
        		,   B_DATE : this.ds_list.getColumn(this.ds_list.rowposition, "b_date")
        		,   REAL_B_DATE : this.ds_list.getColumn(this.ds_list.rowposition, "real_b_date")
        		,   GRADE_NM : this.ds_list.getColumn(this.ds_list.rowposition, "grade_nm")
        		,   M_REGIST : this.ds_list.getColumn(this.ds_list.rowposition, "m_regist")
        		,   M_ENDAY : this.ds_list.getColumn(this.ds_detail.rowposition, "m_enday")
        		,   N_DATE : this.ds_detail.getColumn(0, "사정종료")
        		,   HEIGHT : this.ds_list.getColumn(this.ds_list.rowposition, "height")
        		,   WEIGHT : this.ds_list.getColumn(this.ds_list.rowposition, "weight")
        	};

        	Sct.popup(this, "evaluation", 450, 400, "간호.건강수준평가", param, "DAY_POP::DAY00212_P01.xfdl", "fn_popCallback");
        };

        this.div_cont_div_right_div_down_div_left_grd_detail_onexpandup = function(obj,e)
        {
        	if(e.col == 5){
        		const param = {
        			SICODE : fv_sicode
        		,	M_CODE : this.ds_detail.getColumn(this.ds_detail.rowposition, "수급코드")
        		,   N_NUMBER : this.ds_detail.getColumn(this.ds_detail.rowposition, "n_number")
        		};

        	Sct.popup(this, "evaluation", 450, 400, "간호.건강수준평가", param, "DAY_POP::DAY00212_P01.xfdl", "fn_popCallback");
        	}
        };

        this.div_cont_div_right_div_down_div_right_grd_detail_list_onexpandup = function(obj,e)
        {
        	if(e.col == 4){
        		const param = {
        			SICODE : fv_sicode
        		,	M_CODE : this.ds_detail_list.getColumn(this.ds_detail_list.rowposition, "수급코드")
        		,   N_NUMBER : this.ds_detail_list.getColumn(this.ds_detail_list.rowposition, "n_number")
        		};

        	Sct.popup(this, "evaluation", 450, 400, "간호.건강수준평가", param, "DAY_POP::DAY00212_P01.xfdl", "fn_popCallback");
        	}
        };

        this.div_cont_div_left_grd_list_oncellclick = function(obj,e)
        {
        	const celIdx = obj.getBindCellIndex("body", "m_name");

        	if (e.col == celIdx){
        		this.fn_listclick(e.row);
        	}
        };
        this.fn_listclick = function (row)
        {
        	this.ds_search.setColumn(0,"m_code", this.ds_list.getColumn(row,"m_code"));
        	this.ds_search.setColumn(0,"m_name", this.ds_list.getColumn(row,"m_name"));
        	this.ds_search.setColumn(0,"m_group", this.ds_list.getColumn(row,"m_group"));

        	this.ds_list_select.clearData();
        	const aRow = this.ds_list_select.addRow();
        	this.ds_list_select.copyRow(aRow,this.ds_list, row);

        	this.fn_searchDetail(row);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("oncellclick",this.div_cont_div_left_grd_list_oncellclick,this);
            this.div_cont.form.div_right.form.div_down.form.div_right.form.grd_detail_list.addEventHandler("onexpandup",this.div_cont_div_right_div_down_div_right_grd_detail_list_onexpandup,this);
            this.div_cont.form.div_right.form.div_down.form.div_left.form.btn_new.addEventHandler("onclick",this.div_cont_div_right_div_down_div_left_btn_new_onclick,this);
            this.div_cont.form.div_right.form.div_down.form.div_left.form.grd_detail.addEventHandler("onexpandup",this.div_cont_div_right_div_down_div_left_grd_detail_onexpandup,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.btn_mate.addEventHandler("onclick",this.btn_mate_onclick,this);
            this.div_search.form.btn_retiree.addEventHandler("onclick",this.btn_retiree_onclick,this);
            this.div_search.form.btn_all.addEventHandler("onclick",this.btn_all_onclick,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.div_func_btn_report1_onclick,this);
            this.div_func.form.btn_report2.addEventHandler("onclick",this.div_func_btn_report2_onclick,this);
            this.div_func.form.btn_report3.addEventHandler("onclick",this.div_func_btn_report3_onclick,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00212.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
