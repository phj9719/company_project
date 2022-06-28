(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00104");
            this.set_titletext("1-4 월간 요양급여 제공현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"sex_nm\" type=\"STRING\" size=\"256\"/><Column id=\"grade_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"m_reday\" type=\"STRING\" size=\"256\"/><Column id=\"m_history\" type=\"STRING\" size=\"256\"/><Column id=\"m_liday1\" type=\"STRING\" size=\"256\"/><Column id=\"m_liday2\" type=\"STRING\" size=\"256\"/><Column id=\"m_regist\" type=\"STRING\" size=\"256\"/><Column id=\"m_jumin1\" type=\"STRING\" size=\"256\"/><Column id=\"m_juso1\" type=\"STRING\" size=\"256\"/><Column id=\"m_juso2\" type=\"STRING\" size=\"256\"/><Column id=\"m_post\" type=\"STRING\" size=\"256\"/><Column id=\"m_juso\" type=\"STRING\" size=\"256\"/><Column id=\"m_conname1\" type=\"STRING\" size=\"256\"/><Column id=\"m_conname2\" type=\"STRING\" size=\"256\"/><Column id=\"m_conname3\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"INT\" size=\"256\"/><Column id=\"b_date\" type=\"STRING\" size=\"256\"/><Column id=\"등급\" type=\"STRING\" size=\"256\"/><Column id=\"today\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"religion\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"STRING\" size=\"256\"/><Column id=\"date_to\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"sign\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"STRING\" size=\"256\"/><Column id=\"date_to\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_person", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"sex_nm\" type=\"STRING\" size=\"256\"/><Column id=\"grade_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"m_reday\" type=\"STRING\" size=\"256\"/><Column id=\"m_history\" type=\"STRING\" size=\"256\"/><Column id=\"m_liday1\" type=\"STRING\" size=\"256\"/><Column id=\"m_liday2\" type=\"STRING\" size=\"256\"/><Column id=\"m_regist\" type=\"STRING\" size=\"256\"/><Column id=\"m_jumin1\" type=\"STRING\" size=\"256\"/><Column id=\"m_conname\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"INT\" size=\"256\"/><Column id=\"b_date\" type=\"STRING\" size=\"256\"/><Column id=\"등급\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"cal_date\" type=\"STRING\" size=\"256\"/><Column id=\"cal_week\" type=\"STRING\" size=\"256\"/><Column id=\"mr_move\" type=\"STRING\" size=\"256\"/><Column id=\"b_type_nm\" type=\"STRING\" size=\"256\"/><Column id=\"l_type_nm\" type=\"STRING\" size=\"256\"/><Column id=\"d_type_nm\" type=\"STRING\" size=\"256\"/><Column id=\"b_amt\" type=\"STRING\" size=\"256\"/><Column id=\"l_amt\" type=\"STRING\" size=\"256\"/><Column id=\"d_amt\" type=\"STRING\" size=\"256\"/><Column id=\"a_type_nm\" type=\"STRING\" size=\"256\"/><Column id=\"p_type_nm\" type=\"STRING\" size=\"256\"/><Column id=\"sc07_nm\" type=\"STRING\" size=\"256\"/><Column id=\"cr_u_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"cr_b_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"cr_c_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"b_nm\" type=\"STRING\" size=\"256\"/><Column id=\"t_nm\" type=\"STRING\" size=\"256\"/><Column id=\"ba_time\" type=\"STRING\" size=\"256\"/><Column id=\"ba_type_nm\" type=\"STRING\" size=\"256\"/><Column id=\"ba_nm\" type=\"STRING\" size=\"256\"/><Column id=\"kr_contents\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">2021</Col><Col id=\"CMNM\">2021년</Col></Row><Row><Col id=\"CMCD\">2022</Col><Col id=\"CMNM\">2022년</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_month", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_cnt", this);
            obj._setContents("<ColumnInfo><Column id=\"cnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report_cnt", this);
            obj._setContents("<ColumnInfo><Column id=\"cnt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0.00%","0%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","450",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","38","450","715",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"78\"/><Column size=\"50\"/><Column size=\"112\"/><Column size=\"48\"/><Column size=\"60\"/><Column size=\"84\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"현황\"/><Cell col=\"1\" text=\"그룹\"/><Cell col=\"2\" text=\"수급자명\"/><Cell col=\"3\" text=\"성별\"/><Cell col=\"4\" text=\"등급\"/><Cell col=\"5\" text=\"생활실\"/></Band><Band id=\"body\"><Cell text=\"bind:s_nm\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:m_group\" combodataset=\"ds_tp\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"2\" text=\"bind:m_name\" textAlign=\"center\" cssclass=\"cellBWoman\" cursor=\"pointer\" expandchar=\"dot\"/><Cell col=\"3\" text=\"bind:sex_nm\"/><Cell col=\"4\" text=\"bind:grade_nm\"/><Cell col=\"5\" text=\"bind:m_roomname\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_grp_a","56","3","35","26",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_text("A");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_grp_b","96","3","35","26",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("2");
            obj.set_text("B");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_grp_c","136","3","35","26",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("3");
            obj.set_text("C");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_grp_d","176","3","35","26",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("4");
            obj.set_text("D");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_grp_e","216","3","35","26",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("5");
            obj.set_text("E");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_grp_all","1","3","50","26",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("6");
            obj.set_text("전체");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","460","35",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_main","0","0","1400","138",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new ImageViewer("imv_pic","20","3","100","100",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("0");
            obj.set_tabstop("false");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1","122","3","1241","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body2","122","36","1241","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","122","69","1241","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00","207","7","81","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("4");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00","308","7","81","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("5");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1","120","3","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("6");
            obj.set_text("수급자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2","120","36","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("7");
            obj.set_text("생활실");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3","120","69","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("8");
            obj.set_text("주요질환");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00","422","3","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("9");
            obj.set_text("성별 나이");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_01","509","7","35","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("10");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00","548","7","55","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("11");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00","422","36","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("12");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_01","636","3","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("13");
            obj.set_text("입소일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_00","636","36","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("14");
            obj.set_text("퇴소일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_01_00","860","3","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("15");
            obj.set_text("인정번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_01_00_00","860","36","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("16");
            obj.set_text("인정기간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_01_00_00_00","860","69","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("17");
            obj.set_text("인정등급");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00_00_01_00","947","7","250","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("18");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00_00_01_01","947","74","114","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("19");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_01_00","1043","41","15","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("20");
            obj.set_text("-");
            obj.set_textAlign("center");
            obj.set_padding("0px");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_02","207","41","212","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("21");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_02_00","207","74","416","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("22");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00_00_00_00","509","41","114","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("23");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00_00_00_00_00","723","7","114","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("24");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00_00_00_00_00_00","723","41","114","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("25");
            obj.set_color("red");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00_00_00_00_00_01","947","41","84","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("26");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00_00_00_00_00_01_00","1073","41","114","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("27");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_down","0","111","1400",null,null,"0",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_detail","20","28","1343","579",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_detail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"72\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"25\"/></Rows><Band id=\"head\"><Cell text=\"제공일\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"요일\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"송영시간\" verticalAlign=\"middle\" textAlign=\"center\"/><Cell col=\"3\" text=\"아침식사\" verticalAlign=\"middle\" textAlign=\"center\"/><Cell col=\"4\" text=\"점심식사\" verticalAlign=\"middle\" textAlign=\"center\"/><Cell col=\"5\" text=\"저녁식사\" verticalAlign=\"middle\" textAlign=\"center\"/><Cell col=\"6\" text=\"간식\" verticalAlign=\"middle\" textAlign=\"center\"/><Cell col=\"7\" text=\"식사도움\" verticalAlign=\"middle\" textAlign=\"center\"/><Cell col=\"8\" text=\"소변\" verticalAlign=\"middle\" textAlign=\"center\"/><Cell col=\"9\" text=\"대변\" verticalAlign=\"middle\" textAlign=\"center\"/><Cell col=\"10\" text=\"기저귀\" verticalAlign=\"middle\" textAlign=\"center\"/><Cell col=\"11\" text=\"배설관찰\" verticalAlign=\"middle\" textAlign=\"center\"/><Cell col=\"12\" text=\"구강점검\" verticalAlign=\"middle\" textAlign=\"center\"/><Cell col=\"13\" text=\"목욕시간\" verticalAlign=\"middle\" textAlign=\"center\"/><Cell col=\"14\" text=\"목욕방법\" verticalAlign=\"middle\" textAlign=\"center\"/><Cell col=\"15\" text=\"목욕제공\" verticalAlign=\"middle\" textAlign=\"center\"/><Cell col=\"16\" text=\"일지\" verticalAlign=\"middle\" textAlign=\"center\"/></Band><Band id=\"body\"><Cell text=\"bind:cal_date\" calendardateformat=\"yyyy.MM.dd\"/><Cell col=\"1\" text=\"bind:cal_week\"/><Cell col=\"2\" text=\"bind:mr_move\"/><Cell col=\"3\" expr=\"b_type_nm + '  ' + b_amt\"/><Cell col=\"4\" expr=\"l_type_nm + '  ' + l_amt\"/><Cell col=\"5\" expr=\"d_type_nm + '  ' + d_amt\"/><Cell col=\"6\" expr=\"a_type_nm + '   ' + p_type_nm\"/><Cell col=\"7\" text=\"bind:sc07_nm\"/><Cell col=\"8\" text=\"bind:cr_u_cnt\" expr=\"cr_u_cnt == '0'? '' : cr_u_cnt\"/><Cell col=\"9\" text=\"bind:cr_b_cnt\" expr=\"cr_b_cnt == '0'? '' : cr_b_cnt\"/><Cell col=\"10\" text=\"bind:cr_c_cnt\" expr=\"cr_c_cnt == '0'? '' : cr_c_cnt\"/><Cell col=\"11\" text=\"bind:b_nm\"/><Cell col=\"12\" text=\"bind:t_nm\"/><Cell col=\"13\" text=\"bind:ba_time\"/><Cell col=\"14\" text=\"bind:ba_type_nm\"/><Cell col=\"15\" text=\"bind:ba_nm\"/><Cell col=\"16\" text=\"bind:kr_contents\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","20","2","260","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("1");
            obj.set_text("월간 식사.구강.배설.목욕.요양일지");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","450","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","242","12","8","17",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_year","1","7","79","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_month","79","7","63","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_month");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","147","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","255","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","460","35","1400","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_sign","367","7","85","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("결재란표시");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report7","1212","7","151","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("월 기저귀사용 집계");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report6","1079","7","129","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("기저귀사용대장");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","117","7","90","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_func.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from_pic","206","7","25","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("4");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_00","235","12","8","17",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("5");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_func.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","247","7","90","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_func.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic","336","7","25","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("7");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_gigan","17","7","90","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("8");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_text("출력기간 설정");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report1","459","7","120","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("9");
            obj.set_text("요양일지(3단)");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report2","584","7","120","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("10");
            obj.set_text("요양일지(2칸)");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report3","709","7","121","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("11");
            obj.set_text("일지.식사.배설");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report4","835","7","117","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("12");
            obj.set_text("구강위생기록");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report5","956","7","118","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("13");
            obj.set_text("목욕제공기록");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_cont.form.div_right.form.div_main.form.sta_body1_00","text","ds_person","m_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_right.form.div_main.form.sta_body1_00_00","text","ds_person","m_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_right.form.div_main.form.sta_body1_00_01","text","ds_person","sex_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_right.form.div_main.form.sta_body1_00_02","text","ds_person","m_roomname");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right.form.div_main.form.sta_body1_00_02_00","text","ds_person","m_history");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_01_01","text","ds_person","grade_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_01_00","text","ds_person","m_regist");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_date_from","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.cal_date_to","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00_00_00","text","ds_person","m_enday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00_00","text","ds_person","b_date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00_00_00_00","text","ds_person","m_reday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00_00_00_01","text","ds_person","m_liday1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00_00_00_01_00","text","ds_person","m_liday2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_00_00","text","ds_person","age");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_func.form.chk_sign","value","ds_report","sign");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_func.form.cal_date_from","value","ds_report","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_search.form.cal_date_from_pic","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_func.form.cal_date_from_pic","value","ds_report","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_func.form.cal_date_to","value","ds_report","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_search.form.cal_date_to_pic","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_func.form.cal_date_to_pic","value","ds_report","date_to");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00104.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00104.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00104.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00104
         * 화면명   	: 1-4 월간 요양급여 제공현황
         * 화면설명 	:
         * 작성일   	: 2022-05-16
         * 작성자   	: 박영주
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

        	// 콤보 세팅
        	this.fn_setComboDs(obj);
        	this.fn_setMonth();

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "sicode", fv_sicode);
        	var today = Sct.Util.getToday();
        	var ym = today.substring(0,6);
        	var date_from = ym + '01';
        	var date_to = Sct.Util.getLastDay(ym);
        	this.ds_search.setColumn(0,"date_from", date_from);
        	this.ds_search.setColumn(0,"date_to", date_to);
        	// 출력기간에도 동일 날짜로 세팅
        	this.ds_report.setColumn(0,"date_from", date_from);
        	this.ds_report.setColumn(0,"date_to", date_to);

        	// 콤보에 현재년, 현재월 세팅
        	this.div_search.form.cmb_year.set_value(today.substring(0,4));
        	this.div_search.form.cmb_month.set_value(parseInt(today.substring(4,6)));

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
        	var snmIdx = grdMain.getBindCellIndex("body","s_nm");

        	var nameCss = "expr:dataset.getColumn(currow,'sex_nm')=='남'?'cellBMan':'cellBWoman'";
        	var snmCss = "expr:dataset.getColumn(currow,'s_nm')=='퇴소자'?'cellBRetire':''";

        	grdMain.setCellProperty("body", nameIdx, "cssclass", nameCss);
        	grdMain.setCellProperty("body", snmIdx, "cssclass", snmCss);
        }

        this.fn_setDetailGrid = function()
        {
        	var grdDetail = this.div_cont.form.div_right.form.div_down.form.grd_detail;

        	var weekIdx = grdDetail.getBindCellIndex("body","cal_week");
        	var weekCss = "expr:cal_week=='(토)'?'BlueFontCell':cal_week=='(일)'?'RedFontCell':''";

        	grdDetail.setCellProperty("body", weekIdx, "cssclass", weekCss);
        }

        // 콤보에 값 세팅
        this.fn_setComboDs = function(obj)
        {
             var comboDsParamArr = [
                                  { outDsName : "ds_year", sqlId : "DAY00104.DAY00104_DS_YEAR_S", param : '', bEmptyRow : false}
                            ];
           this.gfn_setComboDs(obj, comboDsParamArr);
        }

        this.fn_setMonth = function()
        {
        	// 월 콤보박스 세팅 (1-12월)
        	this.ds_month.set_enableevent(false);
        	this.ds_month.clearData();
        	let nRow;
        	for (let i = 1; i <= 12; i++)
        	{
        		nRow = this.ds_month.addRow();
        		this.ds_month.setColumn(nRow, "CMCD", i);
        		this.ds_month.setColumn(nRow, "CMNM", i + "월");
        	}

        	this.ds_month.set_enableevent(true);
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
        				   + "sqlId=DAY00104.DAY00104_DS_LIST_CNT_S ";

        	const callbackFunc = "fn_callback";
        	var async = false;
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, async);

        	if (this.ds_list_cnt.getColumn(0,"cnt")<1) {
        		alert("수급자를 조회할 수 없습니다.");
        		return false;
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
        	const argument = "method=getList "
        				   + "sqlId=DAY00104.DAY00104_DS_LIST_S ";

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
        				   + "sqlId=DAY00104.DAY00104_DS_PERSON_S "
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
        				   + "sqlId=DAY00104.DAY00104_DS_DETAIL_S "
        				   + "sicode=" + fv_sicode + " "
        				   + "m_code=" + m_code + " "
        				   + "date_from=" + date_from + " "
        				   + "date_to=" + date_to + " ";

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
        			this.ds_list.set_rowposition(-1);
        		}
        		else if (strSvcID == "searchDetail")
        		{}
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
        // 출력
        this.fn_report_pre = function(button)
        {
        	var m_code = this.ds_person.getColumn(0,"m_code");
        	this.ds_report.setColumn(0,"sicode", fv_sicode);
        	this.ds_report.setColumn(0,"m_code", m_code);

        	if (this.ds_person.rowcount != 1 || this.ds_person.getColumn(0,"m_code") == "") {
        		alert("먼저 수급자를 선택하세요");
        		return false;
        	}

        	var msg = "";
        	if (button.id == "btn_report1" || button.id == "btn_report2") {
        		msg = "요양일지가 기록되어 있지 않습니다.";
        	} else if (button.id == "btn_report3") {
        		msg = "일지.식사.배설 기록을 조회할 수 없습니다.";
        	} else if (button.id == "btn_report4") {
        		msg = "구강위생 도움기록이 기록되어 있지 않습니다.";
        	}  else if (button.id == "btn_report5") {
        		msg = "목욕서비스 제공기록이 조회되지 않습니다.";
        	}  else if (button.id == "btn_report6") {
        		msg = "기저귀 사용대장이 기록되어 있지 않습니다.";
        	}

        	this.fn_check_report_cnt(button);
        	if (this.ds_report_cnt.getColumn(0,"cnt") < 1) {
        		alert(msg);
        		return false;
        	}

        	return true;
        }

        this.fn_check_report_cnt = function(button)
        {
        	var sqlId  = "";
        	if (button.id == "btn_report1" || button.id == "btn_report2") {
        		sqlId = "DAY00104_DS_REPORT_CNT1";
        	} else if (button.id == "btn_report3") {
        		sqlId = "DAY00104_DS_REPORT_CNT3";
        	} else if (button.id == "btn_report4") {
        		sqlId = "DAY00104_DS_REPORT_CNT4";
        	}  else if (button.id == "btn_report5") {
        		sqlId = "DAY00104_DS_REPORT_CNT5";
        	}  else if (button.id == "btn_report6") {
        		sqlId = "DAY00104_DS_REPORT_CNT6";
        	}

        	const svcId = "report_cnt";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_report";
        	const outDatasets = "ds_report_cnt=output1";
        	const argument = "method=getList "
        				   + "sqlId=" + sqlId + " ";

        	const callbackFunc = "fn_callback";
        	var async = false;
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, async);

        	trace("report_cnt: " + this.ds_report_cnt.getColumn(0,"cnt"));
        }

        // 리포트
        this.fn_report1 = function(obj,e)
        {
        	// 7번 리포트는 항목 존재 여부 사전체크 패스
        	if(obj.id != "btn_report7") {
        		if(!this.fn_report_pre(obj)) return;
        	}

        	let params;
        	const dicompNm = " ";
        	let popupUrl = "";
        	if(obj.text == "요양일지(3단)") {
        		popupUrl = "DAY_POP::DAY00104_R01.xfdl";
        	} else if (obj.text == "요양일지(2칸)") {
        		popupUrl = "DAY_POP::DAY00104_R02.xfdl";
        	} else if (obj.text == "일지.식사.배설") {
        		popupUrl = "DAY_POP::DAY00104_R03.xfdl";
        	} else if (obj.text == "구강위생기록") {
        		popupUrl = "DAY_POP::DAY00104_R04.xfdl";
        	} else if (obj.text == "목욕제공기록") {
        		popupUrl = "DAY_POP::DAY00104_R05.xfdl";
        	} else if (obj.text == "기저귀사용대장") {
        		popupUrl = "DAY_POP::DAY00104_R06.xfdl";
        	} else if (obj.text == "월 기저귀사용 집계") {
        		popupUrl = "DAY_POP::DAY00104_R07.xfdl"
        	}
        	const popupName = "";

        	var m_code = this.ds_person.getColumn(0,"m_code");
        	var sign = this.ds_report.getColumn(0,"sign");
        	var date_from = this.ds_report.getColumn(0,"date_from");
        	var date_to = this.ds_report.getColumn(0,"date_to");

        	params = {
        		sicode : fv_sicode
        	,	m_code : m_code
        	,	sign : sign
        	,	date_from : date_from
        	,	date_to : date_to
        	,	reserv_yn : "N"		// 목욕제공기록에만 넘겨지는 파라메터. 예약항목(제공방법 0)은 출력 않도록 함
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        }



        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{}
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 그리드 셀클릭 이벤트
        this.div_cont_div_left_grd_list_oncellclick = function(obj,e)
        {
        	const selIdx = obj.getBindCellIndex("body", "m_name");

        	// 수급자명 컬럼인 경우
        	if (e.col == 2)
        	{
        		var selRow = this.ds_list.rowposition;
        		var m_code = this.ds_list.getColumn(selRow,"m_code");

        		// 우상단 수급자 조회 div 내용표시
        		this.fn_person();
        		this.fn_searchDetail();
        	}
        };


        this.cmb_year_onitemchanged = function(obj,e)
        {
        	this.div_search.form.cmb_month.set_value('');
        	this.ds_list.clearData();
        	this.ds_detail.clearData();
        	this.ds_person.clearData();
        	this.ds_report.setColumn(0,"date_from","");
        	this.ds_report.setColumn(0,"date_to","");
        	// 그룹버튼 선택 초기화
        	this.btn_group_init();
        };


        this.cmb_month_onitemchanged = function(obj,e)
        {
        	this.ds_person.clearData();
        	this.ds_detail.clearData();
        	// 그룹버튼 선택 초기화
        	this.btn_group_init();

        	var year = this.div_search.form.cmb_year.value;
        	var month = this.div_search.form.cmb_month.value;
        	month = month.padStart(2,'0');
        	var date_from_str = year + month + '01';
        	var date_to_str = Sct.Util.getLastDay(year+month);
        	this.div_search.form.cal_date_from.set_value(date_from_str);
        	this.div_search.form.cal_date_to.set_value(date_to_str);
        	this.ds_report.setColumn(0,"date_from",date_from_str);
        	this.ds_report.setColumn(0,"date_to",date_to_str);

        	this.fn_search();
        };

        // A,B,C,D,E,전체 버튼 중 하나 클릭시
        this.btn_group_onclick = function(obj,e)
        {
        	// 우측 화면의 데이터 초기화
        	this.ds_person.clearData();
        	this.ds_detail.clearData();

        	//  선택 버튼 다른 색으로, 그 외는 기본색으로
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
            this.div_cont.form.div_right.form.div_down.form.grd_detail.addEventHandler("oncellclick",this.grd_detail_oncellclick,this);
            this.div_search.form.cmb_year.addEventHandler("onitemchanged",this.cmb_year_onitemchanged,this);
            this.div_search.form.cmb_month.addEventHandler("onitemchanged",this.cmb_month_onitemchanged,this);
            this.div_func.form.btn_report7.addEventHandler("onclick",this.fn_report1,this);
            this.div_func.form.btn_report6.addEventHandler("onclick",this.fn_report1,this);
            this.div_func.form.cal_date_from_pic.addEventHandler("onchanged",this.report_cal_date_pic_onchanged,this);
            this.div_func.form.cal_date_to_pic.addEventHandler("onchanged",this.report_cal_date_pic_onchanged,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.fn_report1,this);
            this.div_func.form.btn_report2.addEventHandler("onclick",this.fn_report1,this);
            this.div_func.form.btn_report3.addEventHandler("onclick",this.fn_report1,this);
            this.div_func.form.btn_report4.addEventHandler("onclick",this.fn_report1,this);
            this.div_func.form.btn_report5.addEventHandler("onclick",this.fn_report1,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00104.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
