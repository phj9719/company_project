(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00211");
            this.set_titletext("2-11 월간간호제공기록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"거주현황\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"cr_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"g_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"hd_cnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"STRING\" size=\"256\"/><Column id=\"date_to\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"yyyymm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"sign\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"STRING\" size=\"256\"/><Column id=\"date_to\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_person", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"sex_nm\" type=\"STRING\" size=\"256\"/><Column id=\"grade_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"m_reday\" type=\"STRING\" size=\"256\"/><Column id=\"m_history\" type=\"STRING\" size=\"256\"/><Column id=\"m_liday1\" type=\"STRING\" size=\"256\"/><Column id=\"m_liday2\" type=\"STRING\" size=\"256\"/><Column id=\"m_regist\" type=\"STRING\" size=\"256\"/><Column id=\"m_jumin1\" type=\"STRING\" size=\"256\"/><Column id=\"m_conname\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"INT\" size=\"256\"/><Column id=\"b_date\" type=\"STRING\" size=\"256\"/><Column id=\"등급\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"n_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_all_day\" type=\"STRING\" size=\"256\"/><Column id=\"week\" type=\"STRING\" size=\"256\"/><Column id=\"n_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"혈압\" type=\"STRING\" size=\"256\"/><Column id=\"맥박\" type=\"STRING\" size=\"256\"/><Column id=\"혈당\" type=\"STRING\" size=\"256\"/><Column id=\"혈당2\" type=\"STRING\" size=\"256\"/><Column id=\"체온\" type=\"STRING\" size=\"256\"/><Column id=\"체온2\" type=\"STRING\" size=\"256\"/><Column id=\"체온3\" type=\"STRING\" size=\"256\"/><Column id=\"호흡\" type=\"STRING\" size=\"256\"/><Column id=\"do_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"so_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"g_type1\" type=\"STRING\" size=\"256\"/><Column id=\"cr_type1\" type=\"STRING\" size=\"256\"/><Column id=\"hd_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"km_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"cr_a_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"cr_b_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"cr_c_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"간호일지\" type=\"STRING\" size=\"256\"/><Column id=\"담당자\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_cnt", this);
            obj._setContents("<ColumnInfo><Column id=\"cnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report_cnt", this);
            obj._setContents("<ColumnInfo><Column id=\"cnt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"그룹\" type=\"STRING\" size=\"256\"/><Column id=\"수급코드\" type=\"STRING\" size=\"256\"/><Column id=\"수급자명\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"나이\" type=\"STRING\" size=\"256\"/><Column id=\"입소일\" type=\"STRING\" size=\"256\"/><Column id=\"퇴소일\" type=\"STRING\" size=\"256\"/><Column id=\"제공일\" type=\"STRING\" size=\"256\"/><Column id=\"혈압\" type=\"STRING\" size=\"256\"/><Column id=\"혈압1\" type=\"STRING\" size=\"256\"/><Column id=\"혈압2\" type=\"STRING\" size=\"256\"/><Column id=\"맥박\" type=\"STRING\" size=\"256\"/><Column id=\"혈당\" type=\"STRING\" size=\"256\"/><Column id=\"체온\" type=\"STRING\" size=\"256\"/><Column id=\"호흡\" type=\"STRING\" size=\"256\"/><Column id=\"체중\" type=\"STRING\" size=\"256\"/><Column id=\"담당자\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel_cnt", this);
            obj._setContents("<ColumnInfo><Column id=\"cnt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0.00%","0%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","440",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","38","440","715",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_autoenter("none");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"22\"/><Column size=\"36\"/><Column size=\"60\"/><Column size=\"45\"/><Column size=\"73\"/><Column size=\"90\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"출력\"/><Cell col=\"2\" text=\"현황\"/><Cell col=\"3\" text=\"그룹\"/><Cell col=\"4\" text=\"수급자명\"/><Cell col=\"5\" text=\"생활실\"/><Cell col=\"6\" text=\"배설\"/><Cell col=\"7\" text=\"구강\"/><Cell col=\"8\" text=\"상비약\"/></Band><Band id=\"body\"><Cell colspan=\"2\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"2\" text=\"bind:거주현황\"/><Cell col=\"3\" textAlign=\"center\" text=\"bind:m_group\" combodataset=\"ds_tp\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"4\" text=\"bind:m_name\" textAlign=\"left\" cssclass=\"cellBWoman\" cursor=\"pointer\" expandchar=\"dot\"/><Cell col=\"5\" text=\"bind:m_roomname\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:cr_cnt\"/><Cell col=\"7\" text=\"bind:g_cnt\"/><Cell col=\"8\" text=\"bind:hd_cnt\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_grp_a","55","3","35","26",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_text("A");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_grp_b","95","3","35","26",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("2");
            obj.set_text("B");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_grp_c","135","3","35","26",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("3");
            obj.set_text("C");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_grp_d","175","3","35","26",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("4");
            obj.set_text("D");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_grp_e","215","3","35","26",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("5");
            obj.set_text("E");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_grp_all","0","3","50","26",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("6");
            obj.set_text("전체");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("sta_00","330","0","110","33",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new CheckBox("chk_sign","340","4","98","26",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("8");
            obj.set_text("◀결재란표시");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","450","35",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_main","0","0","1420","108",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1","12","3","1398","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body2","12","36","1398","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","12","69","1398","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_m_name","97","7","81","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("3");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00","198","7","81","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("4");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1","10","3","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("5");
            obj.set_text("수급자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2","10","36","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("6");
            obj.set_text("생 활 실");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3","10","69","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("7");
            obj.set_text("주요질환");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00","312","3","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("8");
            obj.set_text("성별 나이");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_sex_nm","399","7","35","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("9");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_age","438","7","55","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("10");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00","312","36","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("11");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_01","526","3","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("12");
            obj.set_text("입 소 일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_00","526","36","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("13");
            obj.set_text("퇴 소 일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_01_00","750","3","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("14");
            obj.set_text("인정등급");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_01_00_00","750","36","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("15");
            obj.set_text("인정기간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_01_00_00_00","750","69","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("16");
            obj.set_text("인정번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_m_regist","837","74","250","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("17");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_grade_nm","837","7","114","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("18");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_01_00","933","41","15","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("19");
            obj.set_text("-");
            obj.set_textAlign("center");
            obj.set_padding("0px");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_roomname","147","41","162","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("20");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_m_history","97","74","416","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("21");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00_00_00_00","399","41","114","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("22");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_enday","613","7","114","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("23");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_reday","613","41","114","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("24");
            obj.set_color("red");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_liday1","837","41","84","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("25");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_liday2","963","41","114","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("26");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_m_group","99","41","34","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("27");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_down","0","111","1410",null,null,"0",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_detail","10","38","1400","569",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_detail");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"간호제공일\"/><Cell col=\"1\" text=\"혈압(mm/Hg)\"/><Cell col=\"2\" text=\"맥박(분)\"/><Cell col=\"3\" text=\"혈당①\"/><Cell col=\"4\" text=\"혈당②\"/><Cell col=\"5\" text=\"체온(℃)\"/><Cell col=\"6\" text=\"호흡\"/><Cell col=\"7\" text=\"투약\"/><Cell col=\"8\" text=\"욕창\"/><Cell col=\"9\" text=\"구강\"/><Cell col=\"10\" text=\"배설\"/><Cell col=\"11\" text=\"상비약\"/><Cell col=\"12\" text=\"진료\"/><Cell col=\"13\" text=\"배뇨\"/><Cell col=\"14\" text=\"배변\"/><Cell col=\"15\" text=\"기저귀\"/><Cell col=\"16\" text=\"간호일지\"/></Band><Band id=\"body\"><Cell text=\"bind:m_all_day\"/><Cell col=\"1\" text=\"bind:혈압\"/><Cell col=\"2\" text=\"bind:맥박\"/><Cell col=\"3\" text=\"bind:혈당\"/><Cell col=\"4\" text=\"bind:혈당2\"/><Cell col=\"5\" text=\"bind:체온\"/><Cell col=\"6\" text=\"bind:호흡\" color=\"red\"/><Cell col=\"7\" text=\"bind:do_cnt\" cssclass=\"cellBWoman\"/><Cell col=\"8\" text=\"bind:so_cnt\"/><Cell col=\"9\" text=\"bind:g_type1\"/><Cell col=\"10\" text=\"bind:cr_type1\"/><Cell col=\"11\" text=\"bind:hd_cnt\" color=\"red\"/><Cell col=\"12\" text=\"bind:km_cnt\"/><Cell col=\"13\" text=\"bind:cr_a_cnt\"/><Cell col=\"14\" text=\"bind:cr_b_cnt\"/><Cell col=\"15\" text=\"bind:cr_c_cnt\"/><Cell col=\"16\" text=\"bind:간호일지\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","10","12","180","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("1");
            obj.set_text("월간 간호제공기록");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Div("div_report_detail","556","0","850","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Button("btn_report6","730","7","120","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form.div_report_detail.form);
            obj.set_taborder("0");
            obj.set_text("당뇨관리기록");
            obj.set_cssclass("btn_print");
            this.div_cont.form.div_right.form.div_down.form.div_report_detail.addChild(obj.name, obj);

            obj = new Button("btn_report5","600","7","120","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form.div_report_detail.form);
            obj.set_taborder("1");
            obj.set_text("건강상태기록");
            obj.set_cssclass("btn_print");
            this.div_cont.form.div_right.form.div_down.form.div_report_detail.addChild(obj.name, obj);

            obj = new Button("btn_report4","470","7","120","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form.div_report_detail.form);
            obj.set_taborder("2");
            obj.set_text("투약전달기록");
            obj.set_cssclass("btn_print");
            this.div_cont.form.div_right.form.div_down.form.div_report_detail.addChild(obj.name, obj);

            obj = new Button("btn_report3","330","7","130","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form.div_report_detail.form);
            obj.set_taborder("3");
            obj.set_text("간호기록(통합)");
            obj.set_cssclass("btn_print");
            this.div_cont.form.div_right.form.div_down.form.div_report_detail.addChild(obj.name, obj);

            obj = new Button("btn_report2","190","7","130","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form.div_report_detail.form);
            obj.set_taborder("4");
            obj.set_text("간호기록(3단)");
            obj.set_cssclass("btn_print");
            this.div_cont.form.div_right.form.div_down.form.div_report_detail.addChild(obj.name, obj);

            obj = new Button("btn_report1","50","7","130","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form.div_report_detail.form);
            obj.set_taborder("5");
            obj.set_text("간호기록(8단)");
            obj.set_cssclass("btn_print");
            this.div_cont.form.div_right.form.div_down.form.div_report_detail.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","450","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","242","12","8","17",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","147","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","255","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search","373","7","66","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_yyyymm","0","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_yyyyMM");
            obj.set_taborder("4");
            obj.set_cssclass("essential");
            obj.set_buttonsize("0 0");
            obj.set_accessibilityrole("calendar");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_yyyymm_pic","cal_yyyymm:-1","7","26","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_yyyyMM");
            obj.set_taborder("5");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","460","0","1400","80",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_report10","1240","12","160","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_print");
            obj.set_text("상비약품제공리스트");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report9","1080","12","150","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_print");
            obj.set_text("상비약품제공집계");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report8","950","12","120","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_print");
            obj.set_text("배뇨관찰집계");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report7","790","12","150","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_print");
            obj.set_text("월간배설간호기록");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_excel","1240","44","160","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_excel");
            obj.set_text("월간바이탈 엑셀파일");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report15","1080","44","150","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_print");
            obj.set_text("건강상태기록[선택]");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report14","920","44","150","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_print");
            obj.set_text("투약전달기록[선택]");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report13","750","44","160","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_print");
            obj.set_text("간호기록(통합)[선택]");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report12","580","44","160","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_print");
            obj.set_text("간호기록(3단)[선택]");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report11","410","44","160","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_print");
            obj.set_text("간호기록(8단)[선택]");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_02","0","39","378","36",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_func.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","127","44","90","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_func.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from_pic","216","44","25","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("12");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_00","245","49","8","17",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("13");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_func.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","257","44","90","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_func.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic","346","44","25","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("15");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_01","6","47","115","21",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("16");
            obj.set_text("간호일지 출력기간");
            this.div_func.addChild(obj.name, obj);

            obj = new Grid("grd_excel","-493","46","413","296",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_excel");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"그룹\" textAlign=\"left\" background=\"white\"/><Cell col=\"1\" text=\"수급코드\" textAlign=\"left\" background=\"white\"/><Cell col=\"2\" text=\"수급자명\" textAlign=\"left\" background=\"white\"/><Cell col=\"3\" text=\"성별\" textAlign=\"left\" background=\"white\"/><Cell col=\"4\" text=\"나이\" textAlign=\"left\" background=\"white\"/><Cell col=\"5\" text=\"입소일\" textAlign=\"left\" background=\"white\"/><Cell col=\"6\" text=\"퇴소일\" textAlign=\"left\" background=\"white\"/><Cell col=\"7\" text=\"제공일\" textAlign=\"left\" background=\"white\"/><Cell col=\"8\" text=\"혈압1\" textAlign=\"left\" background=\"white\"/><Cell col=\"9\" text=\"혈압2\" textAlign=\"left\" background=\"white\"/><Cell col=\"10\" text=\"맥박\" textAlign=\"left\" background=\"white\"/><Cell col=\"11\" text=\"혈당\" textAlign=\"left\" background=\"white\"/><Cell col=\"12\" text=\"체온\" textAlign=\"left\" background=\"white\"/><Cell col=\"13\" text=\"호흡\" textAlign=\"left\" background=\"white\"/><Cell col=\"14\" text=\"체중\" textAlign=\"left\" background=\"white\"/><Cell col=\"15\" text=\"담당자\" textAlign=\"left\" background=\"white\"/><Cell col=\"16\" text=\"담당코드\" textAlign=\"left\" background=\"white\"/></Band><Band id=\"body\"><Cell text=\"bind:그룹\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:수급코드\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:수급자명\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:성별\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:나이\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:입소일\" textAlign=\"left\" calendardateformat=\"yyyy.MM.dd\" calendareditformat=\"yyyy.MM.dd\"/><Cell col=\"6\" text=\"bind:퇴소일\" textAlign=\"left\" calendardateformat=\"yyyy.MM.dd\" calendareditformat=\"yyyy.MM.dd\"/><Cell col=\"7\" text=\"bind:제공일\" textAlign=\"left\" calendardateformat=\"yyyy.MM.dd\" calendareditformat=\"yyyy.MM.dd\"/><Cell col=\"8\" text=\"bind:혈압1\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:혈압2\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:맥박\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:혈당\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:체온\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:호흡\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:체중\" textAlign=\"right\"/><Cell col=\"15\" text=\"bind:담당자\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:담당코드\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_cont.form.div_right.form.div_main.form.sta_m_name","text","ds_person","m_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_right.form.div_main.form.sta_body1_00_00","text","ds_person","m_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_right.form.div_main.form.sta_sex_nm","text","ds_person","sex_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_right.form.div_main.form.sta_roomname","text","ds_person","m_roomname");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right.form.div_main.form.sta_m_history","text","ds_person","m_history");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.div_right.form.div_main.form.sta_grade_nm","text","ds_person","grade_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.div_right.form.div_main.form.sta_m_regist","text","ds_person","m_regist");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_date_from","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.cal_date_to","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_cont.form.div_right.form.div_main.form.sta_enday","text","ds_person","m_enday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00_00","text","ds_person","b_date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_right.form.div_main.form.sta_reday","text","ds_person","m_reday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_right.form.div_main.form.sta_liday1","text","ds_person","m_liday1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right.form.div_main.form.sta_liday2","text","ds_person","m_liday2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.div_main.form.sta_age","text","ds_person","age");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_search.form.cal_date_from_pic","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_search.form.cal_date_to_pic","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.div_right.form.div_main.form.sta_m_group","text","ds_person","m_group");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_cont.form.div_left.form.chk_sign","value","ds_report","sign");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_func.form.cal_date_from","value","ds_report","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_func.form.cal_date_from_pic","value","ds_report","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_func.form.cal_date_to","value","ds_report","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_func.form.cal_date_to_pic","value","ds_report","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_search.form.cal_yyyymm_pic","value","ds_search","yyyymm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_search.form.cal_yyyymm","value","ds_search","yyyymm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00211.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00211.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00211.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00211
         * 화면명   	: 2-11 월간간호제공기록
         * 화면설명 	:
         * 작성일   	: 2022-06-08
         * 작성자   	: 박영주
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *	2022-06-17		정준우		설계서 내용이 변경되어 전체적으로 수정
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
        this.reSearchData = "";
        this.searchFlag = "";
        this.fileGroupId = "";
        this.grp_btns = [];	// 그룹 버튼 A,B,C,D,E,전체 배열
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 그리드 설정
        	this.fn_setMainGrid();
        	this.fn_setDetailGrid();

        	// 리포트 출력 초기화
        	this.ds_report.setColumn(0, "sign", 1);

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "sicode", fv_sicode);
        	var today = Sct.Util.getToday();
        	var ym = today.substring(0,6);
        	this.ds_search.setColumn(0,"yyyymm",ym);
        	var date_from = ym + '01';
        	var date_to = Sct.Util.getLastDay(ym);
        	this.ds_search.setColumn(0,"date_from", date_from);
        	this.ds_search.setColumn(0,"date_to", date_to);
        	// 출력기간에도 동일 날짜로 세팅
        	this.ds_report.setColumn(0,"date_from", date_from);
        	this.ds_report.setColumn(0,"date_to", date_to);


        	//체크박스 css적용
        	let grd = this.div_cont.form.div_left.form.grd_list;
        	let chkExpr = "expr:chk==0? '' : 'cellBWoman'";
        	grd.setCellProperty("body", 0, "cssclass", chkExpr);

        	// 그룹 버튼을 배열로 세팅
        	this.fn_make_grp_btns_array();
        	// '전체' 버튼 선택 상태로 세팅
        	this.btn_group_init();

        	// 오픈시 조회
        	this.fn_search();
        };

        this.fn_setMainGrid = function()
        {
        	var grdMain = this.div_cont.form.div_left.form.grd_list;

        	var nameIdx = grdMain.getBindCellIndex("body","m_name");
        	var snmIdx = grdMain.getBindCellIndex("body","거주현황");

        	var nameCss = "expr:dataset.getColumn(currow,'성별')=='남'?'cellBMan':'cellBWoman'";
        	var snmCss = "expr:dataset.getColumn(currow,'거주현황')=='퇴소자'?'cellBRetire':''";

        	grdMain.setCellProperty("body", nameIdx, "cssclass", nameCss);
        	grdMain.setCellProperty("body", snmIdx, "cssclass", snmCss);
        }

        this.fn_setDetailGrid = function()
        {
        	var grdDetail = this.div_cont.form.div_right.form.div_down.form.grd_detail;

        	var allDayzIdx = grdDetail.getBindCellIndex("body","m_all_day");
        	const doCntIdx = grdDetail.getBindCellIndex("body","do_cnt");
        	var weekCss = "expr:week=='7'?'BlueFontCell':week=='1'?'RedFontCell':''";
        	const doCntCss = "expr:do_cnt == '' ? '':'cellBWoman'";
        	grdDetail.setCellProperty("body", allDayzIdx, "cssclass", weekCss);
        	grdDetail.setCellProperty("body", doCntIdx, "cssclass", doCntCss);
        }

        this.fn_make_grp_btns_array = function()
        {
        	var button_a = this.div_cont.form.div_left.form.btn_grp_a;
        	var button_b = this.div_cont.form.div_left.form.btn_grp_b;
        	var button_c = this.div_cont.form.div_left.form.btn_grp_c;
        	var button_d = this.div_cont.form.div_left.form.btn_grp_d;
        	var button_e = this.div_cont.form.div_left.form.btn_grp_e;
        	var button_all = this.div_cont.form.div_left.form.btn_grp_all;

        	this.grp_btns = [button_all,button_a,button_b,button_c,button_d,button_e];
        }

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	const svcId = "search_pre";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list_cnt=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00211.DAY00211_DS_LIST_CNT_S ";

        	const callbackFunc = "fn_callback";
        	var async = false;
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, async);

        	if (this.ds_list_cnt.getColumn(0,"cnt")<1) {
        		alert("수급자를 조회할 수 없습니다.");
        		return false;
        	}

        	return true;
        };
        //excel pre
        this.fn_excel_pre = function ()
        {
        	let rows = new Array();
        	let j=0;
        	for(let i=0;i<this.ds_list.rowcount;i++)
        	{
        		if (this.ds_list.getColumn(i,"chk") == 1)
        			rows[j++] = i;
        	}
        	if (rows.length < 1)
        	{
        		this.alert("출력할 수급자를 지정해야 출력됩니다. !");
        		return;
        	}

        	j=0;
        	let m_code = new Array();
        	for(let i=0;i<rows.length;i++) {
        		let tempMcode = this.ds_list.getColumn(rows[i],"m_code");
        		//this.ds_report.setColumn(0,"m_code",tempMcode);
        		//this.fn_report_valid(objId);
        		//if (this.ds_excel_cnt.getColumn(0,"cnt")>0)
        		//{
        			m_code[j++] = tempMcode;
        		//}
        	}
        	if (m_code.length<1) {
        		this.alert("조회할 데이터가 없습니다.");
        		return;
        	}
        	return m_code;
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
        	const argument = "method=getList "
        				   + "sqlId=DAY00211.DAY00211_DS_LIST_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //
        this.fn_person = function ()
        {
        	var hrow = this.ds_list.rowposition;
        	var m_code = this.ds_list.getColumn(hrow,"m_code");
        	var date_to= this.ds_search.getColumn(0,"date_to");		// date_to가 수급자 등급 기준일
        	const svcId = "person";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_person=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00211.DAY00211_DS_PERSON_S "
        				   + "sicode=" + fv_sicode + " "
        				   + "m_code=" + m_code + " "
        				   + "date_to=" + date_to;

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };


        this.fn_searchDetail = function ()
        {
        	var hrow = this.ds_list.rowposition;
        	var m_code = this.ds_list.getColumn(hrow,"m_code");
        	var date_from = this.ds_search.getColumn(0,"date_from");
        	var date_to = this.ds_search.getColumn(0,"date_to");

        	const svcId = "searchDetail";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_detail=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00211.DAY00211_DS_DETAIL_S "
        				   + "sicode=" + fv_sicode + " "
        				   + "m_code=" + m_code + " "
        				   + "date_from=" + date_from + " "
        				   + "date_to=" + date_to + " ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //엑셀 조회
        this.div_func_btn_excel_onclick = function(obj,e)
        {
        	//validation
        	let m_code = this.fn_excel_pre();
        	if (m_code.length<1) return;
        	//'yyyy-mm'
        	let yyyymm = this.ds_search.getColumn(0,"yyyymm");
        	let yyyy = yyyymm.substr(0,4);
        	let mm = yyyymm.substr(4,2);
        	let ym = yyyy+ "-" + mm;
        	trace("m_code : " + m_code);
        	var svcId = "excel";
         	var params = "/DAY00211Controller.do";
         	var inDatasets = "";
         	var outDatasets = "ds_excel=output1";
         	var argument = "method=excel "
         				 + "sqlId=DAY00211.DAY00211_DS_EXCEL_S "
        				 + "sicode=" + fv_sicode + " "
        				 + "yyyymm=" + ym + " "
        				 + "m_code=" + m_code + " ";
         	var callbackFunc = "fn_callback";
         	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if (strSvcID == "search")
        		{
        			this.ds_list.set_rowposition(-1);
        			this.ds_person.clearData();
        		}
        		else if (strSvcID == "searchDetail")
        		{}
        		else if(strSvcID == "excel")
        		{
        			let strFileName = "월간바이탈_";
        			const date = this.ds_search.getColumn(0, "yyyymm");

        			strFileName += date;
        			Sct.Grid.exportExcel(this, this.grd_excel, strFileName);
        		}
        	}
        	else
        	{
        		this.alert(strErrorMsg);
        	}
        };
        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        //그리드 클릭 report pre
        this.fn_report_pre = function(objId)
        {
        	if (this.ds_person.rowcount != 1 || this.ds_person.getColumn(0,"m_code") == "") {
        		alert("먼저 수급자를 선택하세요");
        		return false;
        	}

        	let msg = "";
        	if (objId == 1 || objId== 2 || objId == 3) {
        		msg = "간호일지가 기록되어 있지 않습니다.";
        	} else if (objId == 4) {
        		msg = "투약전달기록이 없습니다";
        	} else if (objId == 5) {
        		msg = "건강상태기록이 없습니다";
        	}  else if (objId == 6) {
        		msg = "해당 당뇨관리기록을 조회하지 못했습니다.";
        	}

        	this.fn_report_valid(objId);
        	if (this.ds_report_cnt.getColumn(0,"cnt") < 1) {
        		alert(msg);
        		return false;
        	}
        	return true;
        }

        //chk pre
        this.fn_report_chk_pre = function(objId)
        {
        	let msg = "";
        	if (objId == 11 || objId== 12 || objId == 13) {
        		msg = "간호일지가 기록되어 있지 않습니다.";
        	} else if (objId == 14) {
        		msg = "투약전달기록이 없습니다";
        	} else if (objId == 15) {
        		msg = "건강상태기록이 없습니다";
        	}

        	let rows = new Array();
        	let j=0;
        	for(let i=0;i<this.ds_list.rowcount;i++)
        	{
        		if (this.ds_list.getColumn(i,"chk") == 1)
        			rows[j++] = i;
        	}
        	if (rows.length < 1)
        	{
        		this.alert("출력할 수급자를 지정해야 출력됩니다. !");
        		return;
        	}

        	j=0;
        	let m_code = new Array();
        	for(let i=0;i<rows.length;i++) {
        		let tempMcode = this.ds_list.getColumn(rows[i],"m_code");
        		this.ds_report.setColumn(0,"m_code",tempMcode);
        		this.fn_report_valid(objId);
        		if (this.ds_report_cnt.getColumn(0,"cnt")>0)
        		{
        			m_code[j++] = tempMcode;
        		}
        	}
        	if (m_code.length<1) {
        		this.alert(msg);
        		return;
        	}
        	return m_code;
        }

        //report else pre
        this.fn_report_else_pre = function(objId)
        {
        	let msg = "";
        	if (objId == 7) {
        		msg = "정보를 조회하지 못했습니다. !";
        	} else if (objId == 8) {
        		msg = "배뇨관찰기록이 없습니다";
        	} else if (objId == 9) {
        		msg = "상비약품제공집계 정보를 조회하지 못했습니다.";
        	}  else if (objId == 10) {
        		msg = "상비약품제공집계 리스트 정보를 조회하지 못했습니다.";
        	}

        	this.fn_report_valid(objId);
        	if (this.ds_report_cnt.getColumn(0,"cnt") < 1) {
        		alert(msg);
        		return false;
        	}
        	return true;
        }
        this.fn_report_valid = function(objId)
        {
        	let sqlId  = "";
        	switch(objId) {
        	case "1":
        	case "2":
        	case "3":
        	case "5":
        	case "6":
        	case "11":
        	case "12":
        	case "13":
        	case "15":
        		sqlId = "DAY00211_DS_REPORT_CNT1";
        		break;
        	case "4":
        	case "14":
        		sqlId = "DAY00211_DS_REPORT_CNT4";
        		break;
        	case "7":
        		sqlId = "DAY00211_DS_REPORT_CNT7";
        		break;
        	case "8":
        		sqlId = "DAY00211_DS_REPORT_CNT8";
        		break;
        	case "9":
        		sqlId = "DAY00211_DS_REPORT_CNT9";
        		break;
        	case "10":
        		sqlId = "DAY00211_DS_REPORT_CNT10";
        		break;
        	default:
        	}

        	const svcId = "report_valid";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_report";
        	const outDatasets = "ds_report_cnt=output1";
        	const argument = "method=getList "
        				   + "sqlId=" + sqlId + " ";

        	const callbackFunc = "fn_callback";
        	let async = false;
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, async);
        }

        // 리포트
        this.fn_report1 = function(obj,e)
        {
        	this.ds_report.setColumn(0,"sicode", fv_sicode);
        	this.ds_report.setColumn(0,"m_code", this.ds_person.getColumn(0,"m_code"));
        	let sign = this.ds_report.getColumn(0,"sign");
        	let date_from = this.ds_report.getColumn(0,"date_from");
        	let date_to = this.ds_report.getColumn(0,"date_to");

        	let objId = obj.id.substr(10);
        	//1~6 : 수급자
        	//7~10 : else
        	//11~15 : chk
        	let m_code;
        	let flag = "";
        	//수급자 클릭
        	if(objId <= 6) {
        		if(!this.fn_report_pre(objId)) return;
        		flag = "0";
        		m_code = this.ds_person.getColumn(0,"m_code");
        	//선택 체크
        	} else if(objId >=11 ) {
        		m_code = this.fn_report_chk_pre(objId);
        		if (m_code.length<1) return;
        		flag = "1";
        	} else {
        		if(!this.fn_report_else_pre(objId)) return;
        	}


        	let params;
        	const dicompNm = " ";
        	let popupUrl = "";

        	switch(obj.text) {
        	case "간호기록(8단)":
        		popupUrl = "DAY_POP::DAY00211_R01.xfdl";
        		break;
        	case "간호기록(3단)":
        		popupUrl = "DAY_POP::DAY00211_R02.xfdl";
        		break;
        	case "간호기록(통합)":
        		popupUrl = "DAY_POP::DAY00211_R03.xfdl";
        		break;
        	case "건강상태기록":
        		popupUrl = "DAY_POP::DAY00211_R04.xfdl";
        		break;
        	case "투약전달기록":
        		popupUrl = "DAY_POP::DAY00211_R05.xfdl";
        		break;
        	case "간호기록(8단)[선택]":
        		popupUrl = "DAY_POP::DAY00211_R01.xfdl";
        		break;
        	case "간호기록(3단)[선택]":
        		popupUrl = "DAY_POP::DAY00211_R02.xfdl";
        		break;
        	case "간호기록(통합)[선택]":
        		popupUrl = "DAY_POP::DAY00211_R03.xfdl";
        		break;
        	case "건강상태기록[선택]":
        		popupUrl = "DAY_POP::DAY00211_R04.xfdl";
        		break;
        	case "투약전달기록[선택]":
        		popupUrl = "DAY_POP::DAY00211_R05.xfdl";
        		break;
        	case "당뇨관리기록":
        		popupUrl = "DAY_POP::DAY00211_R06.xfdl";
        		break;
        	case "배뇨관찰집계":
        		popupUrl = "DAY_POP::DAY00211_R07.xfdl";
        		break;
        	case "월간배설간호기록":
        		popupUrl = "DAY_POP::DAY00211_R08.xfdl";
        		break;
        	case "상비약품제공집계":
        		popupUrl = "DAY_POP::DAY00211_R09.xfdl";
        		break;
        	case "상비약품제공리스트":
        		popupUrl = "DAY_POP::DAY00211_R10.xfdl";
        		break;
        	default:
        	}

        	const popupName = "";

        	let m_group = this.ds_search.getColumn(0,"m_group");

        	params = {
        		sicode : fv_sicode
        	,	m_code : m_code
        	,	sign : sign
        	,	date_from : date_from
        	,	date_to : date_to
        	,	flag : flag
        	,   m_group : m_group
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        }

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        //조회 버튼
        this.div_search_btn_search_onclick = function(obj,e)
        {
        	this.ds_detail.clearData();
        	this.fn_search();
        	this.btn_group_init();
        };

        //달력 체인지
        this.div_search_cal_yyyymm_pic_onchanged = function(obj,e)
        {
        	let yyyymm = this.ds_search.getColumn(0,"yyyymm");
        	let year = yyyymm.substr(0,4);
        	let month = yyyymm.substr(4,2);
        	let lastDate = new Date(year,month,0).getDate();
        	this.ds_search.setColumn(0,"date_from",yyyymm + "01");
        	this.ds_search.setColumn(0,"date_to",yyyymm.toString() + lastDate.toString());
        	this.ds_report.setColumn(0,"date_from",yyyymm + "01");
        	this.ds_report.setColumn(0,"date_to",yyyymm.toString() + lastDate.toString());
        	this.ds_detail.clearData();
        	this.fn_search();
        	this.btn_group_init();
        };

        // 그리드 셀클릭 이벤트
        this.div_cont_div_left_grd_list_oncellclick = function(obj,e)
        {
        	const selIdx = obj.getBindCellIndex("body", "m_name");

        	// 수급자명 컬럼인 경우
        	if (e.col == 4)
        	{
        		var selRow = this.ds_list.rowposition;
        		var m_code = this.ds_list.getColumn(selRow,"m_code");
        		// 우상단 수급자 조회 div 내용표시
        		this.fn_person();
        		this.fn_searchDetail();
        	}
        };

        // A,B,C,D,E,전체 버튼 중 하나 클릭시
        this.btn_group_onclick = function(obj,e)
        {
        	// 우측 화면의 데이터 초기화
        	this.ds_person.clearData();
        	this.ds_detail.clearData();

        	//  선택 버튼 빨간색으로, 그 외는 기본색으로
        	for(var i=0; i<this.grp_btns.length; i++) {
        		if (obj == this.grp_btns[i]) {
        			this.grp_btns[i].set_cssclass("btn_orange");
        		} else {
        			this.grp_btns[i].set_cssclass("btn_basic_gray");
        		}
        	}

        	// 선택된 버튼값 ds_search에 세팅
        	this.ds_search.setColumn(0,"m_group", obj.text);	// A,B,C,D,E,전체 중 하나

        	this.fn_search();
        };


        // 그룹 버튼 초기화 ('전체' 버튼이 선택된 상태)
        this.btn_group_init = function()
        {
        	for(var i=0; i<this.grp_btns.length; i++) {
        		if (this.grp_btns[i].text == "전체") {
        			this.grp_btns[i].set_cssclass("btn_orange");
        		} else {
        			this.grp_btns[i].set_cssclass("btn_basic_gray");
        		}
        	}

        	this.ds_search.setColumn(0,"m_group","전체");
        }

        this.report_cal_date_pic_onchanged = function(obj,e)
        {
        	var ds_search_from = this.ds_search.getColumn(0,"date_from");
        	var ds_search_to = this.ds_search.getColumn(0,"date_to");
        	var regex = /^(\d{4})(\d{2})(\d{2})$/;
        	var date_from = ds_search_from.replace(regex, "$1.$2.$3");
        	var date_to = ds_search_to.replace(regex, "$1.$2.$3");

        	if (e.postvalue >= ds_search_from && e.postvalue <= ds_search_to) {
        		/* 알맞은 범위 */
        		var ds_filter_from = this.ds_report.getColumn(0,"date_from");
        		var ds_filter_to = this.ds_report.getColumn(0,"date_to");

        		if(ds_filter_from > ds_filter_to) {
        			alert("날짜 지정이 잘못되었습니다.");
        			obj.set_value(e.prevalue);
        		}
        	} else {
        		alert(date_from + "부터 " + date_to + "까지 기간 내에서 지정할 수 있습니다.");
        		obj.set_value(e.prevalue);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("oncellclick",this.div_cont_div_left_grd_list_oncellclick,this);
            this.div_cont.form.div_left.form.btn_grp_a.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_cont.form.div_left.form.btn_grp_b.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_cont.form.div_left.form.btn_grp_c.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_cont.form.div_left.form.btn_grp_d.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_cont.form.div_left.form.btn_grp_e.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_cont.form.div_left.form.btn_grp_all.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.sta_head1_00_01_00.addEventHandler("onclick",this.div_cont_div_right_div_main_sta_head1_00_01_00_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.sta_m_history.addEventHandler("onclick",this.div_cont_div_right_div_main_sta_m_history_onclick,this);
            this.div_cont.form.div_right.form.div_down.form.div_report_detail.form.btn_report6.addEventHandler("onclick",this.fn_report1,this);
            this.div_cont.form.div_right.form.div_down.form.div_report_detail.form.btn_report5.addEventHandler("onclick",this.fn_report1,this);
            this.div_cont.form.div_right.form.div_down.form.div_report_detail.form.btn_report4.addEventHandler("onclick",this.fn_report1,this);
            this.div_cont.form.div_right.form.div_down.form.div_report_detail.form.btn_report3.addEventHandler("onclick",this.fn_report1,this);
            this.div_cont.form.div_right.form.div_down.form.div_report_detail.form.btn_report2.addEventHandler("onclick",this.fn_report1,this);
            this.div_cont.form.div_right.form.div_down.form.div_report_detail.form.btn_report1.addEventHandler("onclick",this.fn_report1,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.div_search_btn_search_onclick,this);
            this.div_search.form.cal_yyyymm_pic.addEventHandler("onchanged",this.div_search_cal_yyyymm_pic_onchanged,this);
            this.div_func.form.btn_report10.addEventHandler("onclick",this.fn_report1,this);
            this.div_func.form.btn_report9.addEventHandler("onclick",this.fn_report1,this);
            this.div_func.form.btn_report8.addEventHandler("onclick",this.fn_report1,this);
            this.div_func.form.btn_report7.addEventHandler("onclick",this.fn_report1,this);
            this.div_func.form.btn_excel.addEventHandler("onclick",this.div_func_btn_excel_onclick,this);
            this.div_func.form.btn_report15.addEventHandler("onclick",this.fn_report1,this);
            this.div_func.form.btn_report14.addEventHandler("onclick",this.fn_report1,this);
            this.div_func.form.btn_report13.addEventHandler("onclick",this.fn_report1,this);
            this.div_func.form.btn_report12.addEventHandler("onclick",this.fn_report1,this);
            this.div_func.form.btn_report11.addEventHandler("onclick",this.fn_report1,this);
            this.div_func.form.cal_date_from_pic.addEventHandler("onchanged",this.report_cal_date_pic_onchanged,this);
            this.div_func.form.cal_date_to_pic.addEventHandler("onchanged",this.report_cal_date_pic_onchanged,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00211.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
