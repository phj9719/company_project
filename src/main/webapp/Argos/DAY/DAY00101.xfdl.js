(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00101");
            this.set_titletext("1-1 요양급여기록(매일)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"kmmark\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_autoid\" type=\"STRING\" size=\"256\"/><Column id=\"m_regist\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"m_reday\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"sex_gb\" type=\"STRING\" size=\"256\"/><Column id=\"나이\" type=\"STRING\" size=\"256\"/><Column id=\"m_jumin1\" type=\"STRING\" size=\"256\"/><Column id=\"jumin\" type=\"STRING\" size=\"256\"/><Column id=\"m_grade\" type=\"STRING\" size=\"256\"/><Column id=\"grade_nm\" type=\"STRING\" size=\"256\"/><Column id=\"식사종류명\" type=\"STRING\" size=\"256\"/><Column id=\"m_level\" type=\"STRING\" size=\"256\"/><Column id=\"수급\" type=\"STRING\" size=\"256\"/><Column id=\"m_type\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomno\" type=\"STRING\" size=\"256\"/><Column id=\"m_step\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"pr_cd\" type=\"STRING\" size=\"256\"/><Column id=\"pr_nm\" type=\"STRING\" size=\"256\"/><Column id=\"pr_css\" type=\"STRING\" size=\"256\"/><Column id=\"수급생일\" type=\"STRING\" size=\"256\"/><Column id=\"move_cont\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"DATE\" size=\"256\"/><Column id=\"s_date\" type=\"STRING\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_kinds", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">1</Col><Col id=\"CMNM\">일반식</Col></Row><Row><Col id=\"CMCD\">2</Col><Col id=\"CMNM\">죽</Col></Row><Row><Col id=\"CMCD\">3</Col><Col id=\"CMNM\">유동.미음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_amount", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">1</Col><Col id=\"CMNM\">1</Col></Row><Row><Col id=\"CMCD\">2</Col><Col id=\"CMNM\">½상</Col></Row><Row><Col id=\"CMCD\">3</Col><Col id=\"CMNM\">½하</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"k_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"k_number\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_regist\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"m_reday\" type=\"STRING\" size=\"256\"/><Column id=\"m_jumin1\" type=\"STRING\" size=\"256\"/><Column id=\"jumin\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"grade_nm\" type=\"STRING\" size=\"256\"/><Column id=\"cr_state1\" type=\"STRING\" size=\"256\"/><Column id=\"cr_state2\" type=\"STRING\" size=\"256\"/><Column id=\"cr_state3\" type=\"STRING\" size=\"256\"/><Column id=\"식사종류\" type=\"STRING\" size=\"256\"/><Column id=\"식사종류명\" type=\"STRING\" size=\"256\"/><Column id=\"아침양\" type=\"STRING\" size=\"256\"/><Column id=\"아침종류\" type=\"STRING\" size=\"256\"/><Column id=\"점심양\" type=\"STRING\" size=\"256\"/><Column id=\"점심종류\" type=\"STRING\" size=\"256\"/><Column id=\"저녁양\" type=\"STRING\" size=\"256\"/><Column id=\"저녁종류\" type=\"STRING\" size=\"256\"/><Column id=\"오전간식\" type=\"STRING\" size=\"256\"/><Column id=\"오후간식\" type=\"STRING\" size=\"256\"/><Column id=\"아침시간\" type=\"STRING\" size=\"256\"/><Column id=\"점심시간\" type=\"STRING\" size=\"256\"/><Column id=\"저녁시간\" type=\"STRING\" size=\"256\"/><Column id=\"아침시\" type=\"STRING\" size=\"256\"/><Column id=\"아침분\" type=\"STRING\" size=\"256\"/><Column id=\"점심시\" type=\"STRING\" size=\"256\"/><Column id=\"점심분\" type=\"STRING\" size=\"256\"/><Column id=\"저녁시\" type=\"STRING\" size=\"256\"/><Column id=\"저녁분\" type=\"STRING\" size=\"256\"/><Column id=\"요양일지\" type=\"STRING\" size=\"256\"/><Column id=\"일지담당\" type=\"STRING\" size=\"256\"/><Column id=\"일지코드\" type=\"STRING\" size=\"256\"/><Column id=\"구강담당\" type=\"STRING\" size=\"256\"/><Column id=\"구강코드\" type=\"STRING\" size=\"256\"/><Column id=\"구강상태\" type=\"STRING\" size=\"256\"/><Column id=\"구강내용\" type=\"STRING\" size=\"256\"/><Column id=\"b_time\" type=\"STRING\" size=\"256\"/><Column id=\"b_time1\" type=\"STRING\" size=\"256\"/><Column id=\"b_time2\" type=\"STRING\" size=\"256\"/><Column id=\"l_time\" type=\"STRING\" size=\"256\"/><Column id=\"l_time1\" type=\"STRING\" size=\"256\"/><Column id=\"l_time2\" type=\"STRING\" size=\"256\"/><Column id=\"d_time\" type=\"STRING\" size=\"256\"/><Column id=\"d_time1\" type=\"STRING\" size=\"256\"/><Column id=\"d_time2\" type=\"STRING\" size=\"256\"/><Column id=\"am_time\" type=\"STRING\" size=\"256\"/><Column id=\"pm_time\" type=\"STRING\" size=\"256\"/><Column id=\"구강메모\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER1\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER2\" type=\"STRING\" size=\"256\"/><Column id=\"traning_a\" type=\"STRING\" size=\"256\"/><Column id=\"traning_b\" type=\"STRING\" size=\"256\"/><Column id=\"traning_c\" type=\"STRING\" size=\"256\"/><Column id=\"move_cont\" type=\"STRING\" size=\"256\"/><Column id=\"시작시간\" type=\"STRING\" size=\"256\"/><Column id=\"시작코스\" type=\"STRING\" size=\"256\"/><Column id=\"시작거주지\" type=\"STRING\" size=\"256\"/><Column id=\"종료시간\" type=\"STRING\" size=\"256\"/><Column id=\"종료코스\" type=\"STRING\" size=\"256\"/><Column id=\"종료거주지\" type=\"STRING\" size=\"256\"/><Column id=\"timediff\" type=\"STRING\" size=\"256\"/><Column id=\"간호일지\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_actday", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"ac_num\" type=\"STRING\" size=\"256\"/><Column id=\"ac_day\" type=\"STRING\" size=\"256\"/><Column id=\"ac_name\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"ac_code\" type=\"STRING\" size=\"256\"/><Column id=\"날씨\" type=\"STRING\" size=\"256\"/><Column id=\"기분\" type=\"STRING\" size=\"256\"/><Column id=\"오전활동1\" type=\"STRING\" size=\"256\"/><Column id=\"오전활동2\" type=\"STRING\" size=\"256\"/><Column id=\"오전활동3\" type=\"STRING\" size=\"256\"/><Column id=\"오후활동1\" type=\"STRING\" size=\"256\"/><Column id=\"오후활동2\" type=\"STRING\" size=\"256\"/><Column id=\"오후활동3\" type=\"STRING\" size=\"256\"/><Column id=\"오전점검\" type=\"STRING\" size=\"256\"/><Column id=\"오후점검\" type=\"STRING\" size=\"256\"/><Column id=\"인지관리\" type=\"STRING\" size=\"256\"/><Column id=\"작성자\" type=\"STRING\" size=\"256\"/><Column id=\"작성코드\" type=\"STRING\" size=\"256\"/><Column id=\"org_ac_num\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_record", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"k_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"k_code\" type=\"STRING\" size=\"256\"/><Column id=\"k_name\" type=\"STRING\" size=\"256\"/><Column id=\"요양일지\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mealtime", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"아침식사\" type=\"STRING\" size=\"256\"/><Column id=\"점심식사\" type=\"STRING\" size=\"256\"/><Column id=\"저녁식사\" type=\"STRING\" size=\"256\"/><Column id=\"오전간식\" type=\"STRING\" size=\"256\"/><Column id=\"오후간식\" type=\"STRING\" size=\"256\"/><Column id=\"b_time\" type=\"STRING\" size=\"256\"/><Column id=\"l_time\" type=\"STRING\" size=\"256\"/><Column id=\"d_time\" type=\"STRING\" size=\"256\"/><Column id=\"am_time\" type=\"STRING\" size=\"256\"/><Column id=\"pm_time\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Return", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_posture", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"so_number\" type=\"STRING\" size=\"256\"/><Column id=\"so_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"so_code\" type=\"STRING\" size=\"256\"/><Column id=\"so_name\" type=\"STRING\" size=\"256\"/><Column id=\"체위시08\" type=\"STRING\" size=\"256\"/><Column id=\"체위시09\" type=\"STRING\" size=\"256\"/><Column id=\"체위시10\" type=\"STRING\" size=\"256\"/><Column id=\"체위시11\" type=\"STRING\" size=\"256\"/><Column id=\"체위시12\" type=\"STRING\" size=\"256\"/><Column id=\"체위시13\" type=\"STRING\" size=\"256\"/><Column id=\"체위시14\" type=\"STRING\" size=\"256\"/><Column id=\"체위시15\" type=\"STRING\" size=\"256\"/><Column id=\"체위시16\" type=\"STRING\" size=\"256\"/><Column id=\"체위시17\" type=\"STRING\" size=\"256\"/><Column id=\"체위시18\" type=\"STRING\" size=\"256\"/><Column id=\"담당자08\" type=\"STRING\" size=\"256\"/><Column id=\"담당자09\" type=\"STRING\" size=\"256\"/><Column id=\"담당자10\" type=\"STRING\" size=\"256\"/><Column id=\"담당자11\" type=\"STRING\" size=\"256\"/><Column id=\"담당자12\" type=\"STRING\" size=\"256\"/><Column id=\"담당자13\" type=\"STRING\" size=\"256\"/><Column id=\"담당자14\" type=\"STRING\" size=\"256\"/><Column id=\"담당자15\" type=\"STRING\" size=\"256\"/><Column id=\"담당자16\" type=\"STRING\" size=\"256\"/><Column id=\"담당자17\" type=\"STRING\" size=\"256\"/><Column id=\"담당자18\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excretion", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"cr_number\" type=\"STRING\" size=\"256\"/><Column id=\"cr_nalja\" type=\"DATE\" size=\"256\"/><Column id=\"nalja\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"jumin1\" type=\"STRING\" size=\"256\"/><Column id=\"주간담당\" type=\"STRING\" size=\"256\"/><Column id=\"주간코드\" type=\"STRING\" size=\"256\"/><Column id=\"야간담당\" type=\"STRING\" size=\"256\"/><Column id=\"야간코드\" type=\"STRING\" size=\"256\"/><Column id=\"관찰분\" type=\"STRING\" size=\"256\"/><Column id=\"cr_08\" type=\"STRING\" size=\"256\"/><Column id=\"cr_09\" type=\"STRING\" size=\"256\"/><Column id=\"cr_10\" type=\"STRING\" size=\"256\"/><Column id=\"cr_11\" type=\"STRING\" size=\"256\"/><Column id=\"cr_12\" type=\"STRING\" size=\"256\"/><Column id=\"cr_13\" type=\"STRING\" size=\"256\"/><Column id=\"cr_14\" type=\"STRING\" size=\"256\"/><Column id=\"cr_15\" type=\"STRING\" size=\"256\"/><Column id=\"cr_16\" type=\"STRING\" size=\"256\"/><Column id=\"cr_17\" type=\"STRING\" size=\"256\"/><Column id=\"cr_18\" type=\"STRING\" size=\"256\"/><Column id=\"cr_19\" type=\"STRING\" size=\"256\"/><Column id=\"cr_20\" type=\"STRING\" size=\"256\"/><Column id=\"소변관찰\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_08\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_09\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_10\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_11\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_12\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_13\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_14\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_15\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_16\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_17\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_18\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_19\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_20\" type=\"STRING\" size=\"256\"/><Column id=\"배변관찰\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_08\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_09\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_10\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_11\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_12\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_13\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_14\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_15\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_16\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_17\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_18\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_19\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_20\" type=\"STRING\" size=\"256\"/><Column id=\"기저귀교환\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_08\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_09\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_10\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_11\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_12\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_13\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_14\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_15\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_16\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_17\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_18\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_19\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_20\" type=\"STRING\" size=\"256\"/><Column id=\"옷교환\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_08\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_09\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_10\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_11\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_12\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_13\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_14\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_15\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_16\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_17\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_18\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_19\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_20\" type=\"STRING\" size=\"256\"/><Column id=\"cr_t_08\" type=\"STRING\" size=\"256\"/><Column id=\"cr_t_09\" type=\"STRING\" size=\"256\"/><Column id=\"cr_t_10\" type=\"STRING\" size=\"256\"/><Column id=\"cr_t_11\" type=\"STRING\" size=\"256\"/><Column id=\"cr_t_12\" type=\"STRING\" size=\"256\"/><Column id=\"cr_t_13\" type=\"STRING\" size=\"256\"/><Column id=\"cr_t_14\" type=\"STRING\" size=\"256\"/><Column id=\"cr_t_15\" type=\"STRING\" size=\"256\"/><Column id=\"cr_t_16\" type=\"STRING\" size=\"256\"/><Column id=\"cr_t_17\" type=\"STRING\" size=\"256\"/><Column id=\"cr_t_18\" type=\"STRING\" size=\"256\"/><Column id=\"cr_t_19\" type=\"STRING\" size=\"256\"/><Column id=\"cr_t_20\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER1\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bath", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"ba_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"ba_number\" type=\"STRING\" size=\"256\"/><Column id=\"ba_code\" type=\"STRING\" size=\"256\"/><Column id=\"ba_name\" type=\"STRING\" size=\"256\"/><Column id=\"목욕시간\" type=\"STRING\" size=\"256\"/><Column id=\"sh\" type=\"STRING\" size=\"256\"/><Column id=\"sm\" type=\"STRING\" size=\"256\"/><Column id=\"eh\" type=\"STRING\" size=\"256\"/><Column id=\"em\" type=\"STRING\" size=\"256\"/><Column id=\"minute\" type=\"STRING\" size=\"256\"/><Column id=\"제공방법\" type=\"STRING\" size=\"256\"/><Column id=\"ba_memo\" type=\"STRING\" size=\"256\"/><Column id=\"담당자01\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드01\" type=\"STRING\" size=\"256\"/><Column id=\"담당직종01\" type=\"STRING\" size=\"256\"/><Column id=\"담당자02\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드02\" type=\"STRING\" size=\"256\"/><Column id=\"담당직종02\" type=\"STRING\" size=\"256\"/><Column id=\"org_ba_number\" type=\"STRING\" size=\"256\"/><Column id=\"등록일시\" type=\"STRING\" size=\"256\"/><Column id=\"등록자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일시\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bathlist_pre", this);
            obj._setContents("<ColumnInfo><Column id=\"cnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_kmdaily25", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"kmnumber\" type=\"STRING\" size=\"256\"/><Column id=\"kmdaily\" type=\"STRING\" size=\"256\"/><Column id=\"kmcode\" type=\"STRING\" size=\"256\"/><Column id=\"kmname\" type=\"STRING\" size=\"256\"/><Column id=\"km바코드\" type=\"STRING\" size=\"256\"/><Column id=\"km직원명\" type=\"STRING\" size=\"256\"/><Column id=\"km직원코드\" type=\"STRING\" size=\"256\"/><Column id=\"km제공시간\" type=\"STRING\" size=\"256\"/><Column id=\"km저장일시\" type=\"STRING\" size=\"256\"/><Column id=\"km평가\" type=\"STRING\" size=\"256\"/><Column id=\"org_kmnumber\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_kmdaily25_record", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"kmnumber\" type=\"STRING\" size=\"256\"/><Column id=\"kmdaily\" type=\"STRING\" size=\"256\"/><Column id=\"kmcode\" type=\"STRING\" size=\"256\"/><Column id=\"kmname\" type=\"STRING\" size=\"256\"/><Column id=\"km바코드\" type=\"STRING\" size=\"256\"/><Column id=\"km직원명\" type=\"STRING\" size=\"256\"/><Column id=\"km직원코드\" type=\"STRING\" size=\"256\"/><Column id=\"km제공시간\" type=\"STRING\" size=\"256\"/><Column id=\"km저장일시\" type=\"STRING\" size=\"256\"/><Column id=\"km평가\" type=\"STRING\" size=\"256\"/><Column id=\"org_kmnumber\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dtrecord", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"k_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"k_number\" type=\"STRING\" size=\"256\"/><Column id=\"k_code\" type=\"STRING\" size=\"256\"/><Column id=\"k_name\" type=\"STRING\" size=\"256\"/><Column id=\"아침양\" type=\"STRING\" size=\"256\"/><Column id=\"아침종류\" type=\"STRING\" size=\"256\"/><Column id=\"점심양\" type=\"STRING\" size=\"256\"/><Column id=\"점심종류\" type=\"STRING\" size=\"256\"/><Column id=\"저녁양\" type=\"STRING\" size=\"256\"/><Column id=\"저녁종류\" type=\"STRING\" size=\"256\"/><Column id=\"오전간식\" type=\"STRING\" size=\"256\"/><Column id=\"오후간식\" type=\"STRING\" size=\"256\"/><Column id=\"아침시간\" type=\"STRING\" size=\"256\"/><Column id=\"점심시간\" type=\"STRING\" size=\"256\"/><Column id=\"저녁시간\" type=\"STRING\" size=\"256\"/><Column id=\"아침시\" type=\"STRING\" size=\"256\"/><Column id=\"아침분\" type=\"STRING\" size=\"256\"/><Column id=\"점심시\" type=\"STRING\" size=\"256\"/><Column id=\"점심분\" type=\"STRING\" size=\"256\"/><Column id=\"저녁시\" type=\"STRING\" size=\"256\"/><Column id=\"저녁분\" type=\"STRING\" size=\"256\"/><Column id=\"구강담당\" type=\"STRING\" size=\"256\"/><Column id=\"구강코드\" type=\"STRING\" size=\"256\"/><Column id=\"구강상태\" type=\"STRING\" size=\"256\"/><Column id=\"구강내용\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","440",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","40","3","400",null,null,"10",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"48\"/><Column size=\"60\"/><Column size=\"84\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"현황\"/><Cell col=\"1\" text=\"그룹\"/><Cell col=\"2\" text=\"수급자명\"/><Cell col=\"3\" text=\"성별\"/><Cell col=\"4\" text=\"등급\"/><Cell col=\"5\" text=\"생활실\"/><Cell col=\"6\" text=\"구분\"/></Band><Band id=\"body\"><Cell text=\"bind:m_type\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:m_group\" combodataset=\"ds_tp\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"2\" text=\"bind:m_name\" textAlign=\"center\" cssclass=\"cellBWoman\" cursor=\"pointer\" expandchar=\"dot\"/><Cell col=\"3\" text=\"bind:sex_gb\"/><Cell col=\"4\" text=\"bind:등급\"/><Cell col=\"5\" text=\"bind:m_roomname\"/><Cell col=\"6\" text=\"bind:pr_nm\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_A","10","47","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_text("A");
            obj.set_visible("true");
            obj.set_cssclass("btn_basic_gray");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_B","10","80","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("2");
            obj.set_text("B");
            obj.set_visible("true");
            obj.set_cssclass("btn_basic_gray");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_C","10","113","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("3");
            obj.set_text("C");
            obj.set_visible("true");
            obj.set_cssclass("btn_basic_gray");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_D","10","146","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("4");
            obj.set_text("D");
            obj.set_visible("true");
            obj.set_cssclass("btn_basic_gray");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_E","10","179","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("5");
            obj.set_text("E");
            obj.set_visible("true");
            obj.set_cssclass("btn_basic_gray");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_F","10","212","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("6");
            obj.set_text("F");
            obj.set_visible("true");
            obj.set_cssclass("btn_basic_gray");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_G","10","245","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("7");
            obj.set_text("G");
            obj.set_visible("true");
            obj.set_cssclass("btn_basic_gray");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_H","10","278","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("8");
            obj.set_text("H");
            obj.set_visible("true");
            obj.set_cssclass("btn_basic_gray");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_I","10","311","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("9");
            obj.set_text("I");
            obj.set_visible("true");
            obj.set_cssclass("btn_basic_gray");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_J","10","344","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("10");
            obj.set_text("J");
            obj.set_visible("true");
            obj.set_cssclass("btn_basic_gray");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_K","10","377","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("11");
            obj.set_text("K");
            obj.set_visible("true");
            obj.set_cssclass("btn_basic_gray");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_L","10","410","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("12");
            obj.set_text("L");
            obj.set_visible("true");
            obj.set_cssclass("btn_basic_gray");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_P","10","542","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("13");
            obj.set_text("P");
            obj.set_visible("true");
            obj.set_cssclass("btn_basic_gray");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_O","10","509","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("14");
            obj.set_text("O");
            obj.set_visible("true");
            obj.set_cssclass("btn_basic_gray");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_N","10","476","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("15");
            obj.set_text("N");
            obj.set_visible("true");
            obj.set_cssclass("btn_basic_gray");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_M","10","443","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("16");
            obj.set_text("M");
            obj.set_visible("true");
            obj.set_cssclass("btn_basic_gray");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_ALL","10","3","25","40",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("17");
            obj.set_text("전\r\n체");
            obj.set_visible("true");
            obj.set_cssclass("btn_basic_gray");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","460","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1","0","3","1405","33",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_00","90","7","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            obj.set_padding("0px");
            obj.set_text("강옥주");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00","180","7","65","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("2");
            obj.set_padding("0px");
            obj.set_text("A103002");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00","155","7","20","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("3");
            obj.set_padding("0px");
            obj.set_text("A");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_head1","0","3","80","33",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("4");
            obj.set_text("수급자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_head2","430","3","80","33",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("5");
            obj.set_text("생활실");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_head1_00","250","3","80","33",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("6");
            obj.set_text("성별·생일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_01","340","7","20","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("7");
            obj.set_padding("0px");
            obj.set_text("여");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00","365","7","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("8");
            obj.set_padding("0px");
            obj.set_text("35-08-28");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_01","625","3","80","33",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("9");
            obj.set_text("입·퇴소일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_01_00","1045","3","80","33",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("10");
            obj.set_text("인정번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_01_00_00_00","890","3","80","33",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("11");
            obj.set_text("인정등급");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00_00_01_00","1135","7","260","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("12");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_text("L1710093441-101");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_02","520","7","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("13");
            obj.set_padding("0px");
            obj.set_text("생활실입니다");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_02_00","715","8","80","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("14");
            obj.set_padding("0px");
            obj.set_text("2022.11.01");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_02_00_00","805","8","80","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("15");
            obj.set_padding("0px");
            obj.set_text("2022.12.01");
            obj.set_color("red");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_02_00_00_00","980","8","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("16");
            obj.set_padding("0px");
            obj.set_text("3등급");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Div("div_main","0","41",null,null,"0","10",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("17");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Div("div_help","633","0",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_01","446","61","35","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("0");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_kinds","0","32","98","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_background("#32cd32");
            obj.set_textAlign("center");
            obj.set_color("white");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_time","0","62","98","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("2");
            obj.set_text("식사시간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_b","97","32","177","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("아침");
            obj.set_textAlign("center");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_l","273","32","177","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("점심");
            obj.set_textAlign("center");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_d","449","32","177","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("저녁");
            obj.set_textAlign("center");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_s","625","32","147","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("오전,오후간식");
            obj.set_textAlign("center");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_b_time","97","62","177","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_l_time","273","62","177","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_d_time","449","62","177","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_s_time1","625","62","74","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("10");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_00","0","92","98","118",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("11");
            obj.set_text("식사종류\r\n식사량");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_01_00","97","92","177","89",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_00_01_00","273","92","177","89",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_00_00_01_00","449","92","177","89",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_00_00_00_00_00","625","92","147","89",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Radio("rdo_b","103","97","95","78",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("16");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_kinds");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Radio("rdo_ba","203","97","65","78",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("17");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("radioselect");
            obj.set_innerdataset("ds_amount");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_01_01","97","179","177","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_00_01_01","273","179","177","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_00_00_01_01","449","179","177","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_00_00_00_00_01","625","179","147","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Button("btn_bd","178","182","90","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("22");
            obj.set_text("아침지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Radio("rdo_l","279","97","95","78",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("23");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("radioselect");
            obj.set_innerdataset("ds_kinds");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Radio("rdo_la","379","97","65","78",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("24");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("radioselect");
            obj.set_innerdataset("ds_amount");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Radio("rdo_d","455","97","95","78",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("25");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("radioselect");
            obj.set_innerdataset("ds_kinds");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Radio("rdo_da","555","97","65","78",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("26");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("radioselect");
            obj.set_innerdataset("ds_amount");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Radio("rdo_sa2","701","97","65","78",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("27");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("radioselect");
            obj.set_innerdataset("ds_amount");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Button("btn_ld","355","182","90","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("28");
            obj.set_text("점심지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Button("btn_sd","676","182","90","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("29");
            obj.set_text("간식지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Button("btn_dd","530","182","90","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("30");
            obj.set_text("저녁지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_s_time2","698","62","74","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Radio("rdo_sa1","631","97","65","78",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("32");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("radioselect");
            obj.set_innerdataset("ds_amount");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_body10","0","269","772","120",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new TextArea("txt_content2","103","274","663","111",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("34");
            obj.set_maxlength("2000");
            obj.set_wordWrap("char");
            obj.set_scrollbartype("none fixed");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_head10","0","269","98","120",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("요양일지");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_body8_00","0","209","772","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_state","0","209","98","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("37");
            obj.set_text("구강상태");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_01_01","290","209","78","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("38");
            obj.set_text("처리내용");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_body8_00_00_00","0","239","772","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_01","0","239","98","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_body8_00_00_00_00","0","388","772","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_01_00","0","388","98","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Edit("edt_content","373","213","393","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("43");
            obj.set_maxlength("40");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Button("btn_state_delete","656","242","110","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("44");
            obj.set_text("구강상태지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Button("btn_record","451","391","155","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("45");
            obj.set_text("전날 요양일지 조회");
            obj.set_cssclass("btn_search");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new CheckBox("chk_state2","200","213","80","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("46");
            obj.set_text("입안 행굼");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_x");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new CheckBox("chk_state1","103","213","90","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("47");
            obj.set_text("양치질도움");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_x");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_manager_value","108","242","174","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("48");
            obj.set_text("요양보호사 / 20210000");
            obj.set_textAlign("left");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_manager_value2","108","391","174","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("49");
            obj.set_text("요양보호사 / 20210000");
            obj.set_textAlign("left");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Button("btn_manager1","4","242","90","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("50");
            obj.set_text("구강점검");
            obj.set_cssclass("btn_worker");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Button("btn_manager2","4","391","90","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("51");
            obj.set_text("작성자");
            obj.set_cssclass("btn_worker");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","3","170","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("52");
            obj.set_text("식사도움 관찰기록");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Button("btn_mealtime","652","0","120","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("53");
            obj.set_text("식사시간조회");
            obj.set_cssclass("btn_search");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_body8_00_00_00_01","0","418","772","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_body8_00_00_00_02","0","448","772","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_body8_00_00_00_02_00","0","538","772","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_body8_00_00_00_02_01","0","508","772","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_body8_00_00_00_02_02","0","568","772","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_body8_00_00_00_02_03","0","478","772","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_body8_00_00_00_02_02_00","0","598","772","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_state00","0","418","98","31",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("61");
            obj.set_text("외출기록");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Edit("edt_content00","103","422","663","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("62");
            obj.set_maxlength("40");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Edit("edt_traning1","103","452","663","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("63");
            obj.set_maxlength("40");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Edit("edt_traning2","103","482","663","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("64");
            obj.set_maxlength("40");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Edit("edt_traning3","103","512","663","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("65");
            obj.set_maxlength("40");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Edit("edt_act1","103","542","663","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("66");
            obj.set_maxlength("40");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Edit("edt_act2","103","572","663","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("67");
            obj.set_maxlength("40");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Edit("edt_act3","103","602","663","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("68");
            obj.set_maxlength("40");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_01_00_00","0","448","98","91",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_01_00_00_00","0","538","98","91",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Button("btn_traning","4","451","90","85",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("71");
            obj.set_text("기능\r\n회복\r\n훈련");
            obj.set_cssclass("btn_chart");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Button("btn_act","4","541","90","85",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("72");
            obj.set_text("인지활동\r\n관리지원");
            obj.set_cssclass("btn_eldery");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_body10_00","0","628","772","79",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new TextArea("txt_content2_00","103","632","663","70",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("75");
            obj.set_maxlength("2000");
            obj.set_wordWrap("char");
            obj.set_background("#ffffff");
            obj.set_color("#222222");
            obj.set_readonly("true");
            obj.set_scrollbartype("none fixed");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Static("sta_head10_00","0","628","98","79",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("간호일지");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Button("btn_recordex","4","359","90","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("76");
            obj.set_text("일지예문");
            obj.set_cssclass("btn_search");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Button("btn_recordsr","611","391","155","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("77");
            obj.set_text("요양일지 내용검색");
            obj.set_cssclass("btn_search");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new MaskEdit("mae_time1","160","65","50","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("78");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new MaskEdit("mae_time1_00","336","65","50","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("79");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new MaskEdit("mae_time1_01","512","65","50","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("80");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new MaskEdit("mae_time1_01_00","637","65","50","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("81");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_visible("false");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new MaskEdit("mae_time1_01_00_00","710","65","50","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_help.form);
            obj.set_taborder("82");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_visible("false");
            this.div_cont.form.div_right.form.div_main.form.div_help.addChild(obj.name, obj);

            obj = new Div("div_activity","0","32","623","614",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_activity2","0","32","206","33",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_activity3","0","64","206","33",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_activity4","0","96","206","33",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_activity5","0","128","206","33",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_activity6","0","160","206","33",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_activity7","0","192","206","33",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_activity9","0","255","206","43",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_activity8","0","223","206","33",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_activity11","0","329","206","33",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_activity10","0","297","206","33",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_activity13","0","449","206","33",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_bath_time1","0","481","206","33",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_activity16","0","545","206","33",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_activity17","0","577","206","33",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_select1","10","36","145","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("31");
            obj.set_text("세면도움");
            obj.set_cssclass("btn_basic_gray");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_select2","10","67","145","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("32");
            obj.set_text("구강관리");
            obj.set_cssclass("btn_basic_gray");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_select5","10","163","145","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("33");
            obj.set_text("옷갈아 입히기");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("btn_basic_gray");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_select3","10","99","145","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("34");
            obj.set_text("머리감기기");
            obj.set_cssclass("btn_basic_gray");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_posture","10","195","145","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("35");
            obj.set_text("자세변경");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("btn_basic_gray");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_select8","10","258","145","36",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("36");
            obj.set_text("신체기능의 유지.증진\r\n(관절운동지원)");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("btn_basic_gray");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_excretion","10","332","145","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("37");
            obj.set_text("화장실이용(배설관찰)");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("btn_basic_gray");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_select9","10","300","145","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("38");
            obj.set_text("식사도움");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("btn_basic_gray");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_select4","10","131","145","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("39");
            obj.set_text("몸단장");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("btn_basic_gray");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_select7","10","226","145","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("40");
            obj.set_text("이동도움(낙상예방)");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("btn_basic_gray");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_bath","10","452","145","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("41");
            obj.set_text("목욕도움");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("btn_basic_gray");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_select12","10","548","145","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("42");
            obj.set_text("산책시동행");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("btn_basic_gray");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_select13","10","580","145","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("43");
            obj.set_text("의사소통도움");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("btn_basic_gray");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","1","4","170","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("0");
            obj.set_text("신체활동지원");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_activity12","0","361","206","89",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_kinds","30","365","65","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_background("#32cd32");
            obj.set_textAlign("center");
            obj.set_color("white");
            obj.set_text("변의장애");
            obj.set_padding("0px");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_kinds00","30","393","65","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_background("#32cd32");
            obj.set_textAlign("center");
            obj.set_color("white");
            obj.set_text("뇨의장애");
            obj.set_padding("0px");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_kinds01","30","421","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_background("#32cd32");
            obj.set_textAlign("center");
            obj.set_color("white");
            obj.set_text("도뇨관+기저귀");
            obj.set_padding("0px");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_activity2_00","205","32",null,"33","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_activity3_00","205","64",null,"33","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_activity4_00","205","96",null,"33","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_activity5_00","205","128",null,"33","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_activity6_00","205","160",null,"33","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_activity7_00","205","192",null,"33","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_activity8_00","205","223",null,"33","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_activity10_00","205","297",null,"33","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_activity9_00","205","255",null,"43","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_activity11_00","205","329",null,"33","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_activity12_00","205","361",null,"89","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_activity13_00","205","449",null,"65","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_activity16_00","205","545",null,"33","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_activity17_00","205","577",null,"33","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_manager1_1","210","36","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_del1_1","305","36","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("60");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_manager1_2","385","36","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_del1_2","480","36","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("62");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_manager2_1","210","68","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_del2_1","305","68","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("64");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_manager2_2","385","68","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_del2_2","480","68","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("66");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_manager3_1","210","100","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_del3_1","305","100","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("68");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_manager3_2","385","100","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_del3_2","480","100","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("70");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_manager4_1","210","132","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_del4_1","305","132","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("72");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_manager4_2","385","132","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_del4_2","480","132","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("74");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_manager5_1","210","164","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_del5_1","305","164","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("76");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_manager5_2","385","164","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_del5_2","480","164","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("78");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_manager6_1","210","196","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_manager6_2","385","196","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_manager7_1","210","227","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_del7_1","305","227","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("82");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_manager7_2","385","227","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_del7_2","480","227","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("84");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_crt09","374","371","42","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("15");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_crt");
            obj.set_padding("0px");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_crt13","210","393","42","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("16");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_crt");
            obj.set_padding("0px");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_crt10","415","371","42","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("17");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_crt");
            obj.set_padding("0px");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_crt14","251","393","42","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("18");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_crt");
            obj.set_padding("0px");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_crt11","456","371","42","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("19");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_crt");
            obj.set_padding("0px");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_crt15","292","393","42","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("20");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_crt");
            obj.set_padding("0px");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_crt12","497","371","42","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("21");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_crt");
            obj.set_padding("0px");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_crt16","333","393","42","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("22");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_crt");
            obj.set_padding("0px");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_crt17","374","393","42","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("23");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_crt");
            obj.set_padding("0px");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_crt18","415","393","42","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("24");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_crt");
            obj.set_padding("0px");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_crt19","456","393","42","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("25");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_crt");
            obj.set_padding("0px");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_crt20","497","393","42","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("26");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_crt");
            obj.set_padding("0px");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_crt08","333","371","42","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("27");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_crt");
            obj.set_padding("0px");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_cr1","130","365","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_color("red");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_cr2","130","393","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_color("red");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_bath_min","160","453","40","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00","1","516","170","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("88");
            obj.set_text("인지관리 및 의사소통");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_posture_cnt","160","196","40","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_color("red");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_bath_time","100","485","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_manager8_1","210","264","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_del8_1","305","264","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("92");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_manager8_2","385","264","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_del8_2","480","264","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("94");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_manager9_1","210","301","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_del9_1","305","301","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("96");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_manager9_2","385","301","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_del9_2","480","301","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("98");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_manager10_1","210","333","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_manager10_2","385","333","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_manager11_1","210","453","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("101");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_manager11_2","385","453","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_manager12_1","210","549","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("103");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_del12_1","305","549","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("104");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_manager12_2","385","549","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("105");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_del12_2","480","549","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("106");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_manager13_1","210","581","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("107");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_del13_1","305","581","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("108");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Static("sta_manager13_2","385","581","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("109");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Button("btn_del13_2","480","581","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_activity.form);
            obj.set_taborder("110");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.form.div_right.form.div_main.form.div_activity.addChild(obj.name, obj);

            obj = new Div("div_pickup","0","0","623","33",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1","0","0","203","33",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_pickup.form);
            obj.set_taborder("0");
            obj.set_text("송영시작");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right.form.div_main.form.div_pickup.addChild(obj.name, obj);

            obj = new Static("sta_b","74","4","50","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_pickup.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_right.form.div_main.form.div_pickup.addChild(obj.name, obj);

            obj = new Static("sta_b00","128","4","38","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_pickup.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_right.form.div_main.form.div_pickup.addChild(obj.name, obj);

            obj = new Static("sta_b00_00","170","4","28","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_pickup.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_right.form.div_main.form.div_pickup.addChild(obj.name, obj);

            obj = new Static("sta_head1_00","205","0","264","33",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_pickup.form);
            obj.set_taborder("4");
            obj.set_text("송영종료");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right.form.div_main.form.div_pickup.addChild(obj.name, obj);

            obj = new Static("sta_b01","279","4","50","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_pickup.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_right.form.div_main.form.div_pickup.addChild(obj.name, obj);

            obj = new Static("sta_b00_01","333","4","38","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_pickup.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_right.form.div_main.form.div_pickup.addChild(obj.name, obj);

            obj = new Static("sta_b00_00_00","375","4","28","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_pickup.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_right.form.div_main.form.div_pickup.addChild(obj.name, obj);

            obj = new Button("btn_pickup","470","0","70","33",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_pickup.form);
            obj.set_taborder("8");
            obj.set_text("송영");
            obj.set_cssclass("btn_clock");
            this.div_cont.form.div_right.form.div_main.form.div_pickup.addChild(obj.name, obj);

            obj = new Static("sta_move","541","0",null,"33","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_pickup.form);
            obj.set_taborder("9");
            obj.set_textAlign("center");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_color("#ffffff");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_main.form.div_pickup.addChild(obj.name, obj);

            obj = new Static("sta_timediff","411","4","50","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form.div_pickup.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_right.form.div_main.form.div_pickup.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","440","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_date_pic","195","7","25","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_pre_dt","10","7","70","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("◀ 전날");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date","85","7","110","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_yyyyMMddddd");
            obj.set_taborder("2");
            obj.set_cssclass("essential");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            obj.set_buttonsize("0 0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_next_dt","225","7","70","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("앞날 ▶");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_subdisc","307","7","130","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("전체:21 남:2 여:19");
            obj.set_textAlign("right");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","460","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","1335","7","70","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report","1160","7","170","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("제공기록지서식(19.12)");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_dtrecord","640","7","120","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("전날기록조회");
            obj.set_cssclass("btn_search");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_mate","765","7","130","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_text("수급자상태설정");
            obj.set_cssclass("btn_eldery");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_bind","900","7","120","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("4");
            obj.set_text("신체보호기록");
            obj.set_cssclass("btn_list");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_bathlist","1025","7","130","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("5");
            obj.set_text("일목욕제공기록");
            obj.set_cssclass("btn_list");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_no","0","8","58","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("6");
            obj.set_text("기록번호 : ");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_no_value","64","8","80","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("7");
            obj.set_text("00000000");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cal_date","value","ds_search","date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cal_date_pic","value","ds_search","date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.div_right.form.sta_body1_00","text","ds_data","m_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cont.form.div_right.form.sta_body1_00_00_00","text","ds_data","m_group");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_cont.form.div_right.form.sta_body1_00_01","text","ds_data","성별");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_cont.form.div_right.form.sta_body1_00_00_00_00","text","ds_data","jumin");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_cont.form.div_right.form.sta_body1_00_00_01_00_00_01_00","text","ds_data","m_regist");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_cont.form.div_right.form.sta_body1_00_02","text","ds_data","m_roomname");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.div_right.form.div_main.form.cal_date_to_pic","value","ds_state_desc","sc_nalja");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.sta_no_value","text","ds_data","cr_number");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.div_right.form.sta_body1_00_02_00","text","ds_data","m_enday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_cont.form.div_right.form.sta_body1_00_02_00_00","text","ds_data","m_reday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.div_right.form.sta_body1_00_02_00_00_00","text","ds_data","grade_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body1_00_00","text","ds_list","m_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body1_00_00_00","text","ds_list","m_group");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body1_00_01","text","ds_list","sex_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body1_00_00_00_00","text","ds_list","age");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body1_00_00_01","text","ds_list","m_jumin1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body1_00_00_01_00","text","ds_list","m_enday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00","text","ds_list","m_reday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00","text","ds_list","m_conname");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_01","text","ds_list","m_liday1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_01_00","text","ds_list","m_regist");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_01_01","text","ds_list","grade_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_01_02","text","ds_list","m_liday2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body1_00_02","text","ds_list","m_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body1_00_02_00","text","ds_list","m_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body1_00_02_00_00","text","ds_list","m_juso1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body1_00_02_00_01","text","ds_list","m_juso2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body1_00_02_00_01_00","text","ds_list","m_post");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body1_00_00_01_01","text","ds_state_desc","view_manager");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body1_00","text","ds_list","m_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body16","text","ds_data","din02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body11","text","ds_data","lun04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body12","text","ds_data","lun05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body13","text","ds_data","lun06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body15","text","ds_data","din01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body17","text","ds_data","din03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body18","text","ds_data","din04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body19","text","ds_data","din05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.mae_00_00","value","ds_list","m_reday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.mae_00_01","value","ds_list","m_liday1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.mae_00_01_00","value","ds_list","m_liday2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00_00_00_00","text","ds_list_copy","m_reday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00_00_00_01","text","ds_list_copy","m_liday1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00_00_00_01_00","text","ds_list_copy","m_liday2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","div_cont.form.div_right.form.div_main.form.div_help.form.sta_kinds","text","ds_data","식사종류명");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","div_cont.form.div_right.form.div_main.form.div_help.form.sta_b_time","text","ds_data","b_time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","div_cont.form.div_right.form.div_main.form.div_help.form.sta_l_time","text","ds_data","l_time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","div_cont.form.div_right.form.div_main.form.div_help.form.sta_d_time","text","ds_data","d_time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","div_cont.form.div_right.form.div_main.form.div_help.form.sta_s_time1","text","ds_data","am_time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","div_cont.form.div_right.form.div_main.form.div_help.form.sta_s_time2","text","ds_data","pm_time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","div_cont.form.div_right.form.div_main.form.div_help.form.rdo_b","value","ds_data","아침종류");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","div_cont.form.div_right.form.div_main.form.div_help.form.rdo_ba","value","ds_data","아침양");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","div_cont.form.div_right.form.div_main.form.div_help.form.rdo_l","value","ds_data","점심종류");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","div_cont.form.div_right.form.div_main.form.div_help.form.rdo_la","value","ds_data","점심양");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","div_cont.form.div_right.form.div_main.form.div_help.form.rdo_d","value","ds_data","저녁종류");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","div_cont.form.div_right.form.div_main.form.div_help.form.rdo_da","value","ds_data","저녁양");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","div_cont.form.div_right.form.div_main.form.div_help.form.rdo_sa2","value","ds_data","오후간식");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","div_cont.form.div_right.form.div_main.form.div_help.form.rdo_sa1","value","ds_data","오전간식");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","div_cont.form.div_right.form.div_main.form.div_help.form.txt_content2","value","ds_data","요양일지");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","div_cont.form.div_right.form.div_main.form.div_help.form.edt_content","value","ds_data","구강내용");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","div_cont.form.div_right.form.div_main.form.div_help.form.chk_state2","value","ds_data","구강상태");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","div_cont.form.div_right.form.div_main.form.div_help.form.chk_state1","value","ds_data","구강상태");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","div_cont.form.div_right.form.div_main.form.div_help.form.sta_manager_value","text","ds_data","VIEW_MANAGER1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item92","div_cont.form.div_right.form.div_main.form.div_help.form.sta_manager_value2","text","ds_data","VIEW_MANAGER2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item93","div_cont.form.div_right.form.div_main.form.div_help.form.div_right.form.div_main.form.sta_no_value","text","ds_data","식사번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_activity2","text","ds_data","b_time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_activity3","text","ds_data","b_time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_activity4","text","ds_data","b_time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_activity5","text","ds_data","b_time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_activity6","text","ds_data","b_time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_activity7","text","ds_data","b_time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_activity9","text","ds_data","b_time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_activity8","text","ds_data","b_time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_kinds","text","ds_data","cr_state1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.sta_kinds00","text","ds_data","cr_state2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.sta_kinds01","text","ds_data","cr_state3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_kinds00","text","ds_data","cr_state2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_kinds01","text","ds_data","cr_state3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_crt09","text","ds_excretion","cr_t_09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_crt13","text","ds_excretion","cr_t_13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_crt10","text","ds_excretion","cr_t_10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_crt14","text","ds_excretion","cr_t_14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_crt11","text","ds_excretion","cr_t_11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_crt15","text","ds_excretion","cr_t_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_crt12","text","ds_excretion","cr_t_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_crt16","text","ds_excretion","cr_t_16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_crt17","text","ds_excretion","cr_t_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_crt18","text","ds_excretion","cr_t_18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_crt19","text","ds_excretion","cr_t_19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item97","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_crt20","text","ds_excretion","cr_t_20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item98","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_crt08","text","ds_excretion","cr_t_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item99","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_activity2_00","text","ds_data","b_time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item100","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_activity3_00","text","ds_data","b_time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item101","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_activity4_00","text","ds_data","b_time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item102","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_activity5_00","text","ds_data","b_time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item105","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_activity6_00","text","ds_data","b_time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item106","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_activity7_00","text","ds_data","b_time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item107","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_activity8_00","text","ds_data","b_time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item109","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_activity9_00","text","ds_data","b_time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item128","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_bath_min","text","ds_bath","minute");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_right.form.div_main.form.div_help.form.edt_content00","value","ds_data","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right.form.div_main.form.div_help.form.edt_traning1","value","ds_data","traning_a");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.div_right.form.div_main.form.div_help.form.edt_traning2","value","ds_data","traning_b");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item103","div_cont.form.div_right.form.div_main.form.div_help.form.edt_traning3","value","ds_data","traning_c");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item104","div_cont.form.div_right.form.div_main.form.div_help.form.edt_act1","value","ds_actday","인지관리");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item108","div_cont.form.div_right.form.div_main.form.div_help.form.edt_act2","value","ds_actday","오전활동1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item110","div_cont.form.div_right.form.div_main.form.div_help.form.edt_act3","value","ds_actday","오후활동1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item134","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_manager10_1","text","ds_excretion","주간담당");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item135","div_cont.form.div_right.form.div_main.form.div_activity.form.sta_manager10_2","text","ds_excretion","야간담당");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item139","div_cont.form.div_right.form.sta_no_value","text","ds_data","cr_number");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_func.form.sta_no_value","text","ds_data","k_number");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item138","div_cont.form.div_right.form.div_main.form.div_help.form.txt_content2_00","value","ds_data","간호일지");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.div_right.form.sta_body1_00_00","text","ds_data","m_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","div_cont.form.div_right.form.div_main.form.div_help.form.mae_time1","value","ds_data","아침시간");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item140","div_cont.form.div_right.form.div_main.form.div_help.form.mae_time1_00","value","ds_data","점심시간");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item141","div_cont.form.div_right.form.div_main.form.div_help.form.mae_time1_01","value","ds_data","저녁시간");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item142","div_cont.form.div_right.form.div_main.form.div_help.form.mae_time1_01_00","value","ds_data","am_time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item143","div_cont.form.div_right.form.div_main.form.div_help.form.mae_time1_01_00_00","value","ds_data","pm_time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item144","div_cont.form.div_right.form.div_main.form.div_pickup.form.sta_b","text","ds_data","시작시간");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item145","div_cont.form.div_right.form.div_main.form.div_pickup.form.sta_b00","text","ds_data","시작코스");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item146","div_cont.form.div_right.form.div_main.form.div_pickup.form.sta_b00_00","text","ds_data","시작거주지");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item147","div_cont.form.div_right.form.div_main.form.div_pickup.form.sta_b01","text","ds_data","종료시간");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item148","div_cont.form.div_right.form.div_main.form.div_pickup.form.sta_b00_01","text","ds_data","종료코스");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item149","div_cont.form.div_right.form.div_main.form.div_pickup.form.sta_b00_00_00","text","ds_data","종료거주지");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item111","div_cont.form.div_right.form.div_main.form.div_pickup.form.sta_timediff","text","ds_data","timediff");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00101.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00101.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00101.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00101
         * 화면명   	: 1-1 요양급여기록(매일)
         * 화면설명 	:
         * 작성일   	: 2022-05-16
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
        this.fv_staff_id = nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid");
        this.fv_staff_name = nexacro.getApplication().gds_userInfo.getColumn(0, "c_name").trim();
        this.reSearchData = "";
        this.searchFlag = "";
        this.fileGroupId = "";
        this.reSearchCode = ""; // 선택한 수급자 로우
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 검색조건 세팅
        	let today = Sct.Util.getToday(); // 현재날짜

        	this.ds_search.setColumn(0, "sicode", fv_sicode);
        	this.ds_search.setColumn(0, "date", today);
        	this.ds_search.setColumn(0, "s_date", today);

        	// 그룹버튼 배열로 세팅
        	this.fn_make_grp_btns_array();
        	// '전체' 버튼 선택 상태로 세팅
        	this.btn_group_init();

        	// 오픈시 조회
        	//this.fn_search("search");
        	this.fn_search("search");
        };

        // 현황, 수급자, 미이용 백그라운드 설정
        this.initGrid = function(grid)
        {
        	const nameIdx = grid.getBindCellIndex("body", "m_name"); // 수급자명
        	const nowIdx = grid.getBindCellIndex("body", "m_type"); // 현황
        	const prnmIdx = grid.getBindCellIndex("body", "pr_nm"); // 구분

        	const nameCss = "expr:dataset.getColumn(currow, 'sex_gb') == '남' ? 'cellBMan' : 'cellBWoman'";
        	const nowCss = "expr:dataset.getColumn(currow, 'm_type') == '퇴소자' ? 'cellBRetire' : ''";
        	const prnmCss = "expr:dataset.getColumn(currow, 'pr_css') == '1' ? 'cellBRetire' : dataset.getColumn(currow, 'pr_css') == '2' ? 'cellBRetireFontRed' : dataset.getColumn(currow, 'pr_css') == '3' ? 'RedFontCell' : ''";

        	/* pr_css가 1 : 미이용 + 주간 -> 백그라운드
        				2 : 미미용 + 주단,단기 -> 백그라운드 + 컬러
        				3 : 단기,주단 -> 컬러
        				0 : 주간 -> X
        	*/
        	grid.setCellProperty("body", nameIdx, "cssclass", nameCss);
        	grid.setCellProperty("body", nowIdx, "cssclass", nowCss);

         	// 미이용 백그라운드 설정
        	const moveArr = ["m_group", "sex_gb", "등급", "m_roomname", "pr_nm"];
        	for (let i = 0; i < moveArr.length; i++)
        	{
        		const moveIdx = grid.getBindCellIndex("body", moveArr[i]);
        		const moveCss = "expr:dataset.getColumn(currow, 'move_cont') != '' ? 'cellBRetire' : ''";

        		grid.setCellProperty("body", moveIdx, "cssclass", moveCss);
        	}

        	grid.setCellProperty("body", prnmIdx, "cssclass", prnmCss);

        }

        // 그룹버튼 배열로 세팅
        this.fn_make_grp_btns_array = function()
        {
        	var button_all = this.div_cont.form.div_left.form.btn_ALL;
        	var button_a = this.div_cont.form.div_left.form.btn_A;
        	var button_b = this.div_cont.form.div_left.form.btn_B;
        	var button_c = this.div_cont.form.div_left.form.btn_C;
        	var button_d = this.div_cont.form.div_left.form.btn_D;
        	var button_e = this.div_cont.form.div_left.form.btn_E;
        	var button_f = this.div_cont.form.div_left.form.btn_F;
        	var button_g = this.div_cont.form.div_left.form.btn_G;
        	var button_h = this.div_cont.form.div_left.form.btn_H;
        	var button_i = this.div_cont.form.div_left.form.btn_I;
        	var button_j = this.div_cont.form.div_left.form.btn_J;
        	var button_k = this.div_cont.form.div_left.form.btn_K;
        	var button_l = this.div_cont.form.div_left.form.btn_L;
        	var button_m = this.div_cont.form.div_left.form.btn_M;
        	var button_n = this.div_cont.form.div_left.form.btn_N;
        	var button_o = this.div_cont.form.div_left.form.btn_O;
        	var button_p = this.div_cont.form.div_left.form.btn_P;

        	this.grp_btns = [button_all,button_a,button_b,button_c,button_d,button_e,button_f,button_g,button_h,button_i,button_j,button_k,button_l,button_m,button_n,button_o,button_p];
        }

        // this.fn_setDetailGrid = function()
        // {
        // 	var grdDetail = this.div_cont.form.div_right.form.div_down.form.grd_detail;
        // 	var  index = -1;
        //
        // 	index = grdDetail.getBindCellIndex("body", "week");
        // 	grdDetail.setCellProperty("body", index, "cssclass", "expr:week=='(토)'?'BlueFontCell':week=='(일)'?'CellRed_B':" +Sct.Grid.getCellDefaultCss()); //ok
        // }
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

        // 저장 전 validation
        this.fn_save_pre = function()
        {
        	if (this.ds_data.rowcount < 1) {
        		//alert("먼저 수급자를 선택해 주세요.");
        		return false;
        	}

        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"k_number"))){ // 기록번호 없을시 rowtype 2(추가행)
        		this.ds_data.set_updatecontrol(false);
        		this.ds_data.setRowType(0,2);
        		this.ds_data.set_updatecontrol(true);
        	}

        	// 식사종류 빈값 식사량 존재일때, 식사종류 존재 식사량 빈값일때 체크
        	var b_kind = this.ds_data.getColumn(0,"아침종류");
        	var b_amount = this.ds_data.getColumn(0,"아침양");
        	var l_kind = this.ds_data.getColumn(0,"점심종류");
        	var l_amount = this.ds_data.getColumn(0,"점심양");
        	var d_kind = this.ds_data.getColumn(0,"저녁종류");
        	var d_amount = this.ds_data.getColumn(0,"저녁양");

        	if((b_kind == 0 && b_amount != 0) || (b_kind != 0 && b_amount == 0)){
        		this.alert("아침식사 기록을 정확하게 입력해야합니다.")
        		return false;
        	}else if((l_kind == 0 && l_amount != 0) || (l_kind != 0 && l_amount == 0)){
        		this.alert("점심식사 기록을 정확하게 입력해야합니다.")
        		return false;
        	}else if((d_kind == 0 && d_amount != 0) || (d_kind != 0 && d_amount == 0)){
        		this.alert("저녁식사 기록을 정확하게 입력해야합니다.")
        		return false;
        	}

        	// 구강상태 값이 있거나 처리내용이 있거나 둘 다 있으면 구강점검자 체크
        	if((this.ds_data.getColumn(0,"구강상태") != 0 || !Sct.Util.isEmpty(this.ds_data.getColumn(0,"구강내용")))){
        		if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"구강담당"))){
        			this.alert("구강점검자를 지정해야합니다.");
        			return false;
        		}
        	}

        	// 요양일지가 빈값이 아닐때 작성자 빈값 체크
        	if(!Sct.Util.isEmpty(this.ds_data.getColumn(0,"요양일지"))){
        		if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"일지담당")) || nexacro.trim(this.ds_data.getColumn(0,"일지담당")) == ""){
        			this.alert("작성자를 지정해야합니다.");
        			return false;
        		}
        	}

        	if (!this.confirm("저장 하시겠습니까?"))
        		return false;

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
        	const inDatasets = "input1=ds_search input2=ds_search";
        	const outDatasets = "ds_list=output1 ds_mealtime=output2";
        	const argument = "method=getList "
        				   + "sqlId='DAY00101.DAY00101_DS_LIST_S DAY00101.DAY00101_DS_MEALTIME_S' ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 저장
        this.fn_save = function()
        {
        	//validation
        	if (!this.fn_save_pre()) return;

        	const svcId = "save";
        	const params = "/DAY00101Controller.do";
        	const inDatasets = "input1=ds_data:a input2=ds_kmdaily25:a";
        	const outDatasets = "";
        	const argument = "method=save";

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
        			var people = this.ds_list.rowcount;
        			var men = 0;
        			var woman = 0;
        			for(var i=0; i<this.ds_list.rowcount; i++){
        				if(this.ds_list.getColumn(i, "sex_gb") == "남"){
        					men += 1;
        				}else if(this.ds_list.getColumn(i, "sex_gb") == "여"){
        					woman += 1;
        				}
        			}
        			//전체:21 남:2 여:19
        			this.div_search.form.sta_subdisc.set_text("전체:"+people+" 남:"+men+" 여:"+woman);

        			this.initGrid(this.div_cont.form.div_left.form.grd_list);
        		}
        		else if (strSvcID == "datasearch")
        		{
        			// 날짜 빈값이면 해당날짜 세팅
        			if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"k_nalja"))){
        				this.ds_data.setColumn(0,"k_nalja",this.ds_search.getColumn(0,"date"));
        			}
        			// 데이터 세팅
        			this.fn_dataCopy(); // 식사도움
        			this.fn_kmdaily(); // 신체활동지원 요양보호사 값 세팅
        			this.fn_excretionsearch(); // 배설관찰
        			this.fn_posturesearch(); // 자세변경
        			this.fn_bathsearch(); // 목욕도움
        		}
        		else if (strSvcID == "save")
        		{
        // 			this.alert("상태변화 기록 저장완료.");
        // 			this.ds_state_desc.setColumn(0,"상태변화","");
        // 			this.fn_searchDetail();
        			this.alert("저장되었습니다.");
        			this.fn_datasearch();
        		}
        		else if (strSvcID == "search_dt")
        		{
        			// 저장 후 선택한 수급자로 이동
        			//trace(">> " + this.reSearchCode);
        			const sRow = this.fn_findMstRow(this.reSearchCode);
        			if(sRow > -1){
        				this.fn_listclick(sRow);
        			}else{
        				this.ds_list.set_rowposition(-1);
        				this.reSearchCode = "";
        			}
        		}
        		else if (strSvcID == "mealtime") // 식사시간조회
        		{
        			var btime = this.ds_data.getColumn(0,"아침시간");
        			var ltime = this.ds_data.getColumn(0,"점심시간");
        			var dtime = this.ds_data.getColumn(0,"저녁시간");
        			//var amtime = this.ds_data.getColumn(0,"am_time");
        			//var pmtime = this.ds_data.getColumn(0,"pm_time");

        			if(btime.replace(" ", "").length < 4){
        				this.ds_data.setColumn(0,"아침시간", this.ds_mealtime.getColumn(0,"b_time"));
        			}
        			if(ltime.replace(" ", "").length < 4){
        				this.ds_data.setColumn(0,"점심시간", this.ds_mealtime.getColumn(0,"l_time"));
        			}
        			if(dtime.replace(" ", "").length < 4){
        				this.ds_data.setColumn(0,"저녁시간", this.ds_mealtime.getColumn(0,"d_time"));
        			}
        // 			if(amtime.replace(" ", "").length < 4){
        // 				this.ds_data.setColumn(0,"am_time", this.ds_mealtime.getColumn(0,"am_time"));
        // 			}
        // 			if(pmtime.replace(" ", "").length < 4){
        // 				this.ds_data.setColumn(0,"pm_time", this.ds_mealtime.getColumn(0,"pm_time"));
        // 			}
        		}
        		else if(strSvcID == "record_search") // 전날 요양일지
        		{
        			if(this.ds_record.rowcount > 0) {
        				var record = this.ds_record.getColumn(0,"요양일지").trim(); // 요양일지
        				if(record != "") this.ds_data.setColumn(0,"요양일지",record + "\n" + this.ds_data.getColumn(0,"요양일지"));
        			}
        		}
        		else if(strSvcID == "excretion_search") // 배설관찰
        		{
        			this.fn_setExcretion(); // 배설관찰 횟수, 시간 세팅
        		}
        		else if(strSvcID == "posture_search") // 자세변경
        		{
        			this.fn_setPosture(); // 자세변경 횟수, 관찰자 세팅
        		}
        		else if(strSvcID == "bath_search") // 목욕도움
        		{
        			this.fn_setBath(); // 목욕도움 시간, 관찰자 세팅
        		}
        		else if(strSvcID == "dtrecord_search") // 전날기록조회
        		{
        			this.fn_setDtRecord();
        		}
        	}
        	else
        	{
        		this.alert(strErrorMsg);
        	}
        };

        // 데이터조회
        this.fn_datasearch = function ()
        {
        	//validation
        	//if (!this.fn_search_pre()) return;

        	const svcId = "datasearch";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search input2=ds_search input3=ds_search input4=ds_search";
        	const outDatasets = "ds_data=output1 ds_actday=output2 ds_excretion=output3 ds_kmdaily25=output4";
        	const argument = "method=getList "
        				   + "sqlId='DAY00101.DAY00101_DS_DATA_S DAY00101.DAY00101_DS_ACTDAY_S DAY00101_P02.DAY00101_P02_DS_DATA_S DAY00101.DAY00101_DS_KMDAILY25_S'";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 식사시간조회 버튼
        this.div_cont_div_right_div_main_div_help_btn_mealtime_onclick = function(obj,e)
        {
        	if(this.ds_data.rowcount < 1){
        		return;
        	}

        	const svcId = "mealtime";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_mealtime=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00101.DAY00101_DS_MEALTIME_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 전날 요양일지 조회
        this.div_cont_btn_record_onclick = function(obj,e)
        {
        	if(this.ds_data.rowcount < 1){
        		return false;
        	}
        	const svcId = "record_search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_data";
        	const outDatasets = "ds_record=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00101.DAY00101_DS_RECORD_S '";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 전날기록조회
        this.div_func_btn_dtrecord_onclick = function(obj,e)
        {
        	if(this.ds_data.rowcount < 1){
        		return false;
        	}
         	const svcId = "dtrecord_search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_data input2=ds_data";
        	const outDatasets = "ds_dtrecord=output1 ds_kmdaily25_record=output2";
        	const argument = "method=getList "
        				   + "sqlId='DAY00101.DAY00101_DS_DTRECORD_S DAY00101.DAY00101_DS_KMDAILY25_RECORD_S'";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 배설관찰 조회
        this.fn_excretionsearch = function()
        {
        	const svcId = "excretion_search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search ";
        	const outDatasets = "ds_excretion=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00101_P02.DAY00101_P02_DS_DATA_S '";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 자세변경 조회
        this.fn_posturesearch = function()
        {
        	const svcId = "posture_search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search ";
        	const outDatasets = "ds_posture=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00101_P01.DAY00101_P01_DS_DATA_S '";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 목욕도움 조회
        this.fn_bathsearch = function()
        {
        	const svcId = "bath_search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search ";
        	const outDatasets = "ds_bath=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00101.DAY00101_DS_BATH_S '";
        	const callbackFunc = "fn_callback";
        	//비동기
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, false);
        };

        // 일 목욕제공기록 조회
        this.fn_bathlistsearch = function()
        {
        	const svcId = "bathlist_search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_bathlist_pre=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00101.DAY00101_DS_BATHLIST_PRE_S '";
        	const callbackFunc = "fn_callback";
        	//비동기
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, false);
        };



        // 앞날
        this.div_search_btn_next_dt_onclick = function(obj,e)
        {
        	const searchDt = this.ds_search.getColumn(0, "date");
        	searchDt.setDate(searchDt.getDate() + 1);
        	this.ds_search.setColumn(0, "date", searchDt);
        	this.ds_search.setColumn(0, "s_date", searchDt);
        	this.fn_clearDataset("dt"); // 데이터셋 클리어
        	this.fn_search("search_dt");
        };

        // 전날
        this.div_search_btn_pre_dt_onclick = function(obj,e)
        {
        	const searchDt = this.ds_search.getColumn(0, "date");
        	searchDt.setDate(searchDt.getDate() - 1);
        	this.ds_search.setColumn(0, "date", searchDt);
        	this.ds_search.setColumn(0, "s_date", searchDt);
        	this.fn_clearDataset("dt"); // 데이터셋 클리어
        	this.fn_search("search_dt");
        };

        // 데이터 조회
        this.fn_searchAll = function ()
        {
        	this.fn_search("search");
        	this.fn_excretionsearch();
        };
        /***********************************************************************
         * User Functions
         ***********************************************************************/
        // 작업후 작업 정보 조회
        this.fn_findMstRow = function(fv_saveRefNo) {
        	const sFindRow = this.ds_list.findRow("m_code", fv_saveRefNo);
        	if (sFindRow > -1) {
        		this.ds_list.set_rowposition(sFindRow);
        		this.fn_datasearch();
        	}

        	return sFindRow;
        };

        /* 함수 명 : fn_timeDiff
         * 시간 차이 구하기
         * 입력 : 	time1	비교 시작일자 ex)19901010115000
         *			time2	비교 종료일자
        			type    hhmm 시간,분, mm 분
         * 반환 :  타입에 따라 반환
         */
        this.fn_timeDiff = function(time1, time2, type) {
        	// 문자열 날짜를 Date타입으로 변환
        	var date1 = Sct.Util.stringToDate(time1);
        	var date2 = Sct.Util.stringToDate(time2);

        	// 리턴값 변수
        	var returnValue = "";
        	// 두 날짜의 간격을 구함(초단위)
        	var diff = (date2 - date1) / 1000;
        	// 분 구하기
        	var mm = diff / 60;

        	// 간격 값을 시간 추출
        	var hour = diff / 3600;
        	// 시간의 자리수가 1자리일때 앞에 0 붙이기
        	if(0 <= hour && hour < 10) hour = "0" + Math.floor(hour);
        	// 시간이 음수일때 000으로
        	else if(hour < 0) hour = "00";
        	else hour = Math.floor(hour);

        	//간격 값에서 분 추출
        	var minute = (diff % 3600) / 60;
        	if(0 <= minute && minute < 10) minute = "0" + Math.floor(minute);
        	else if(minute < 0) minute = "00";
        	else minute = Math.floor(minute);

        	// 간격 값에서 초 추출
        	var second = (diff % 3600) % 60;
        	if(0 <= second && second < 10) second = "0" + Math.floor(second);
        	else if(second < 0) second = "00";
        	else second = Math.floor(second);

        	// 간격 값이 음수일때
        	if(diff <= 0) diffTime = "";

        	// HH:MM 형식
        	if(type == "hhmm"){
        		returnValue = hour + ":" + minute;
        	}
        	// 분 형식
        	if(type == "mm"){
        		returnValue = mm;
        	}

        	return returnValue;
        };

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

        // 소,대변관찰 데이터 세팅
        this.fn_setExcretion = function ()
        {
        	var cr1 = 0; // 소변관찰
        	var cr2 = 0; // 배변관찰
        	this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_excretion.set_cssclass("btn_basic_gray");

        	// 횟수 초기화
        	this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_cr1.set_text("");
        	this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_cr2.set_text("");
        	// 백그라운드 초기화
        	for(var i=0; i<13; i++){
        		if(i < 2){
        			this.div_cont.form.div_right.form.div_main.form.div_activity.form.components["sta_crt0" + (i+8)].set_cssclass("sta_crt");
        		}else{
        			this.div_cont.form.div_right.form.div_main.form.div_activity.form.components["sta_crt" + (i+8)].set_cssclass("sta_crt");
        		}
        	}

        	// 기록번호 존재시 세팅
        	if(!Sct.Util.isEmpty(this.ds_excretion.getColumn(0,"cr_number"))) {
        		for(var i=0; i<13; i++){
        			if(i < 2){
        				// 배뇨,배설 데이터 존재시 sta_crt_yellow 세팅, 기저귀 교환시 sta_crt_lightcyan
        				if(this.div_cont.form.div_right.form.div_main.form.div_activity.form.components["sta_crt0" + (i+8)].text != ""){
        					if(this.ds_excretion.getColumn(0,"cr_3_0"+(i+8)) == "1"){ // 기저귀 교환 존재
        						this.div_cont.form.div_right.form.div_main.form.div_activity.form.components["sta_crt0" + (i+8)].set_cssclass("sta_crt_lightcyan");
        					}else{
        						this.div_cont.form.div_right.form.div_main.form.div_activity.form.components["sta_crt0" + (i+8)].set_cssclass("sta_crt_yellow");
        					}
        				}
        				// 소변관찰값이 1이 아니면 소변관찰 횟수 증가
        				if(this.ds_excretion.getColumn(0,"cr_1_0"+(i+8)) == "2"
        				|| this.ds_excretion.getColumn(0,"cr_1_0"+(i+8)) == "3"){
        					cr1 += 1;
        				}
        				// 배변관찰값이 빈값이 아니면 배변관찰 횟수 증가
        				//if(!Sct.Util.isEmpty(this.ds_excretion.getColumn(0,"cr_2_0"+(i+8))) || this.ds_excretion.getColumn(0,"cr_2_0"+(i+8)) != 0){
        				if(this.ds_excretion.getColumn(0,"cr_2_0"+(i+8)) == "1"
        				|| this.ds_excretion.getColumn(0,"cr_2_0"+(i+8)) == "2"
        				|| this.ds_excretion.getColumn(0,"cr_2_0"+(i+8)) == "3" ){
        					cr2 += 1;
        				}
        			}else{
        				if(this.div_cont.form.div_right.form.div_main.form.div_activity.form.components["sta_crt" + (i+8)].text != ""){
        					if(this.ds_excretion.getColumn(0,"cr_3_"+(i+8)) == "1"){
        						this.div_cont.form.div_right.form.div_main.form.div_activity.form.components["sta_crt" + (i+8)].set_cssclass("sta_crt_lightcyan");
        					}else{
        						this.div_cont.form.div_right.form.div_main.form.div_activity.form.components["sta_crt" + (i+8)].set_cssclass("sta_crt_yellow");
        					}
        				}
        				// 소변관찰값이 1이 아니면 소변관찰 횟수 증가
        				if(this.ds_excretion.getColumn(0,"cr_1_"+(i+8)) == "2"
        				|| this.ds_excretion.getColumn(0,"cr_1_"+(i+8)) == "3"){
        					cr1 += 1;
        				}
        				// 배변관찰값이 빈값이 아니면 배변관찰 횟수 증가
        				//if(!Sct.Util.isEmpty(this.ds_excretion.getColumn(0,"cr_2_"+(i+8))) && this.ds_excretion.getColumn(0,"cr_2_"+(i+8)) != 0){
        				if(this.ds_excretion.getColumn(0,"cr_2_"+(i+8)) == "1"
        				|| this.ds_excretion.getColumn(0,"cr_2_"+(i+8)) == "2"
        				|| this.ds_excretion.getColumn(0,"cr_2_"+(i+8)) == "3" ){
        					cr2 += 1;
        				}

        			}

        		}
        		// 소변,대변 관찰횟수 세팅
        		this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_cr1.set_text("소변:"+cr1+"회");
        		this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_cr2.set_text("대변:"+cr2+"회");
        		if(cr1 > 0 || cr2 > 0){
        			this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_excretion.set_cssclass("btn_orange");
        		}
        	}else{ // 기록번호 존재안하고 0이면 빈값
        		if(cr1 != 0){
        			this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_cr1.set_text("소변:"+cr1+"회");
        		}
        		if(cr2 != 0){
        			this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_cr2.set_text("대변:"+cr2+"회");
        		}
        	}

        };

        // 자세변경 데이터 세팅
        this.fn_setPosture = function ()
        {
        	var cnt = 0;
        	var managerArr = [];
        	var manager1 = "";
        	var manager2 = "";
        	this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_posture.set_cssclass("btn_basic_gray");
        	// 변경후자세 횟수 세팅
        	if(this.ds_posture.rowcount > 0){
        		for(var i=0; i<11; i++){
        			if(i < 2){
        				if(this.ds_posture.getColumn(0,"체위시0"+(i+8)) != 0){
        					// 담당자 빈값이 아니면 배열에 담기
        					if(this.ds_posture.getColumn(0,"담당자0"+(i+8))){
        						managerArr.push(this.ds_posture.getColumn(0,"담당자0"+(i+8)));
        					}
        					cnt += 1;
        				}
        			}else{
        				if(this.ds_posture.getColumn(0,"체위시"+(i+8)) != 0){
        					if(this.ds_posture.getColumn(0,"담당자"+(i+8))){
        						managerArr.push(this.ds_posture.getColumn(0,"담당자"+(i+8)));
        					}
        					cnt += 1;
        				}
        			}
        		}

        		// 배열 중복제거
        		// ele : 배열값, pos : 배열 인덱스
        		// 배열값의 인덱스 = 배열인덱스로 필터링
        		const filteredArray = managerArr.filter(function(ele , pos){
        			return managerArr.indexOf(ele) == pos;
        		})

        		manager1 = filteredArray[0];
        		manager2 = filteredArray[1];
        		if(cnt != 0){ // 횟수가 0이 아니면 백그라운드 설정
        			this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_posture.set_cssclass("btn_orange");
        			this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_posture_cnt.set_text(cnt);
        		}else{
        			this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_posture_cnt.set_text("");
        		}

        		this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_manager6_1.set_text(manager1);
        		this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_manager6_2.set_text(manager2);
        	}
        };

        // 목욕도움 데이터 세팅
        this.fn_setBath = function ()
        {
        	if(Sct.Util.isEmpty(this.ds_bath.getColumn(0,"ba_number"))){ // 목욕도움 기록번호가 존재하면 백그라운드 설정
        		this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_bath.set_cssclass("btn_basic_gray");
        	}else{
        		this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_bath.set_cssclass("btn_orange");
        	}
        	var manager1 = this.ds_bath.getColumn(0,"담당자01");
        	var manager2 = this.ds_bath.getColumn(0,"담당자02");
        	var time = this.ds_bath.getColumn(0,"목욕시간");
        	if(this.ds_bath.getColumn(0,"목욕시간") == "  :  -  :  "){
        		time = "";
        	}else{
        		time = this.ds_bath.getColumn(0,"목욕시간");
        	}
        	this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_manager11_1.set_text(manager1);
        	this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_manager11_2.set_text(manager2);
        	this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_bath_time.set_text(time);
        };

        // 전날기록조회 데이터 세팅
        this.fn_setDtRecord = function ()
        {
        	this.ds_data.setColumn(0,"아침시간",this.ds_dtrecord.getColumn(0,"아침시간"));
        	this.ds_data.setColumn(0,"점심시간",this.ds_dtrecord.getColumn(0,"점심시간"));
        	this.ds_data.setColumn(0,"저녁시간",this.ds_dtrecord.getColumn(0,"저녁시간"));
        	this.ds_data.setColumn(0,"아침시", this.ds_dtrecord.getColumn(0,"아침시"));
        	this.ds_data.setColumn(0,"아침분", this.ds_dtrecord.getColumn(0,"아침분"));
        	this.ds_data.setColumn(0,"점심시", this.ds_dtrecord.getColumn(0,"점심시"));
        	this.ds_data.setColumn(0,"점심분", this.ds_dtrecord.getColumn(0,"점심분"));
        	this.ds_data.setColumn(0,"저녁시", this.ds_dtrecord.getColumn(0,"저녁시"));
        	this.ds_data.setColumn(0,"저녁분", this.ds_dtrecord.getColumn(0,"저녁분"));
        	this.ds_data.setColumn(0,"아침종류",this.ds_dtrecord.getColumn(0,"아침종류"));
        	this.ds_data.setColumn(0,"아침양", this.ds_dtrecord.getColumn(0,"아침양") );
        	this.ds_data.setColumn(0,"점심종류",this.ds_dtrecord.getColumn(0,"점심종류"));
        	this.ds_data.setColumn(0,"점심양", this.ds_dtrecord.getColumn(0,"점심양") );
        	this.ds_data.setColumn(0,"저녁종류",this.ds_dtrecord.getColumn(0,"저녁종류"));
        	this.ds_data.setColumn(0,"저녁양", this.ds_dtrecord.getColumn(0,"저녁양") );
        	this.ds_data.setColumn(0,"오전간식",this.ds_dtrecord.getColumn(0,"오전간식"));
        	this.ds_data.setColumn(0,"오후간식",this.ds_dtrecord.getColumn(0,"오후간식"));

        	if(this.ds_data.getColumn(0,"구강상태") == "0"){ // 구강상태가 빈값이면 전날기록 데이터 세팅
        		this.ds_data.setColumn(0,"구강상태",this.ds_dtrecord.getColumn(0,"구강상태"));
        		// 구강상태 체크박스, 1 : 양치질도움, 2 : 입안행굼
        		if(this.ds_dtrecord.getColumn(0,"구강상태") == "1"){
        			this.div_cont.form.div_right.form.div_main.form.div_help.form.chk_state2.set_value(0);
        			this.div_cont.form.div_right.form.div_main.form.div_help.form.chk_state1.set_value(1);
        		}else if(this.ds_dtrecord.getColumn(0,"구강상태") == "2"){
        			this.div_cont.form.div_right.form.div_main.form.div_help.form.chk_state1.set_value(0);
        			this.div_cont.form.div_right.form.div_main.form.div_help.form.chk_state2.set_value(2);
        		}
        		this.ds_data.setColumn(0,"구강내용",this.ds_dtrecord.getColumn(0,"구강내용"));
        		this.ds_data.setColumn(0,"구강코드",this.fv_staff_id);
        		this.ds_data.setColumn(0,"구강담당",this.fv_staff_name);
        		this.ds_data.setColumn(0,"VIEW_MANAGER1",this.fv_staff_name + "/" + this.fv_staff_id);
        	}

        	//신체활동지원 담당자 세팅
        	for(var i=0; i<this.ds_kmdaily25_record.rowcount; i++){
        		var barcode = this.ds_kmdaily25_record.getColumn(i,"km바코드");
        		//var aRow = this.ds_kmdaily25.addRow();
        		if(barcode == "SC0100"){ // 세면도움
        			// 첫번째 담당자 값이 빈값이면 세팅
        			if(Sct.Util.isEmpty(this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_manager1_1.text)){
        				this.fn_setManager("sta_manager1","SC0100");
        			}
        		}else if(barcode == "SC0200"){ // 구강관리
        			if(Sct.Util.isEmpty(this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_manager2_1.text)){
        				this.fn_setManager("sta_manager2","SC0200");
        			}
        		}else if(barcode == "SC0300"){ // 머리감기기
        			if(Sct.Util.isEmpty(this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_manager3_1.text)){
        				this.fn_setManager("sta_manager3","SC0300");
        			}
        		}else if(barcode == "SC0400"){ // 몸단장
        			if(Sct.Util.isEmpty(this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_manager4_1.text)){
        				this.fn_setManager("sta_manager4","SC0400");
        			}
        		}else if(barcode == "SC0500"){ // 옷갈아입히기
        			if(Sct.Util.isEmpty(this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_manager5_1.text)){
        				this.fn_setManager("sta_manager5","SC0500");
        			}
        		}else if(barcode == "SC0900"){ // 이동도움
        			if(Sct.Util.isEmpty(this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_manager7_1.text)){
        				this.fn_setManager("sta_manager7","SC0900");
        			}
        		}else if(barcode == "SC1000"){ // 신체기능유지
        			if(Sct.Util.isEmpty(this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_manager8_1.text)){
        				this.fn_setManager("sta_manager8","SC1000");
        			}
        		}else if(barcode == "SC0700"){ // 식사도움
        			if(Sct.Util.isEmpty(this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_manager9_1.text)){
        				this.fn_setManager("sta_manager9","SC0700");
        			}
        		}
        	}
        };

        // 신체보호활동 요양보호사 값 세팅
        this.fn_kmdaily = function ()
        {
        	if(this.ds_kmdaily25.rowcount < 1){
        		//this.ds_kmdaily25.copyData(this.ds_kmdaily25_copy);
        		this.ds_kmdaily25.addRow();
        		this.ds_kmdaily25.clearData();
        	}else{
        		var activityForm = this.div_cont.form.div_right.form.div_main.form.div_activity.form;
        		for(var i=1; i<=13; i++){
        			if(i != "6" || i != "10" || i != "11"){
        				activityForm.components["sta_manager"+i+"_1"].set_text("");
        				activityForm.components["sta_manager"+i+"_2"].set_text("");
        			}
        		}
        		for(var i=0; i<this.ds_kmdaily25.rowcount; i++){
        			var barcode = this.ds_kmdaily25.getColumn(i,"km바코드");
        			var manager = this.ds_kmdaily25.getColumn(i,"km직원명");
        			if(barcode == "SC0100"){ // 세면도움
        				if(Sct.Util.isEmpty(activityForm.sta_manager1_1.text)){ // 첫번째칸이 빈칸일때 세팅
        					if(!Sct.Util.isEmpty(manager)){ // 직원명이 존재하면 백그라운드 및 이름 세팅
        						this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select1.set_cssclass("btn_orange");
        						activityForm.sta_manager1_1.set_text(manager);
        					}
        				}else{
        					if(activityForm.sta_manager1_1.text != manager){ // 두명인 경우 세팅
        						activityForm.sta_manager1_2.set_text(manager);
        					}
        				}
        			}else if(barcode == "SC0200"){ // 구강관리
        				if(Sct.Util.isEmpty(activityForm.sta_manager2_1.text)){
        					if(!Sct.Util.isEmpty(manager)){ // 직원명이 존재하면 백그라운드 및 이름 세팅
        						this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select2.set_cssclass("btn_orange");
        						activityForm.sta_manager2_1.set_text(manager);
        					}
        				}else{
        					if(activityForm.sta_manager2_1.text != manager){ // 두명인 경우 세팅
        						activityForm.sta_manager2_2.set_text(manager);
        					}
        				}
        			}else if(barcode == "SC0300"){ // 머리감기기
        				if(Sct.Util.isEmpty(activityForm.sta_manager3_1.text)){
        					if(!Sct.Util.isEmpty(manager)){ // 직원명이 존재하면 백그라운드 및 이름 세팅
        						this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select3.set_cssclass("btn_orange");
        						activityForm.sta_manager3_1.set_text(manager);
        					}
        				}else{
        					if(activityForm.sta_manager3_1.text != manager){ // 두명인 경우 세팅
        						activityForm.sta_manager3_2.set_text(manager);
        					}
        				}
        			}else if(barcode == "SC0400"){ // 몸단장
        				if(Sct.Util.isEmpty(activityForm.sta_manager4_1.text)){
        					if(!Sct.Util.isEmpty(manager)){ // 직원명이 존재하면 백그라운드 및 이름 세팅
        						this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select4.set_cssclass("btn_orange");
        						activityForm.sta_manager4_1.set_text(manager);
        					}
        				}else{
        					if(activityForm.sta_manager4_1.text != manager){ // 두명인 경우 세팅
        						activityForm.sta_manager4_2.set_text(manager);
        					}
        				}
        			}else if(barcode == "SC0500"){ // 옷갈아입히기
        				if(Sct.Util.isEmpty(activityForm.sta_manager5_1.text)){
        					if(!Sct.Util.isEmpty(manager)){ // 직원명이 존재하면 백그라운드 및 이름 세팅
        						this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select5.set_cssclass("btn_orange");
        						activityForm.sta_manager5_1.set_text(manager);
        					}
        				}else{
        					if(activityForm.sta_manager5_1.text != manager){ // 두명인 경우 세팅
        						activityForm.sta_manager5_2.set_text(manager);
        					}
        				}
        			}else if(barcode == "SC0900"){ // 이동도움
        				if(Sct.Util.isEmpty(activityForm.sta_manager7_1.text)){
        					if(!Sct.Util.isEmpty(manager)){ // 직원명이 존재하면 백그라운드 및 이름 세팅
        						this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select7.set_cssclass("btn_orange");
        						activityForm.sta_manager7_1.set_text(manager);
        					}
        				}else{
        					if(activityForm.sta_manager7_1.text != manager){ // 두명인 경우 세팅
        						activityForm.sta_manager7_2.set_text(manager);
        					}
        				}
        			}else if(barcode == "SC1000"){ // 신체기능유지
        				if(Sct.Util.isEmpty(activityForm.sta_manager8_1.text)){
        					if(!Sct.Util.isEmpty(manager)){ // 직원명이 존재하면 백그라운드 및 이름 세팅
        						this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select8.set_cssclass("btn_orange");
        						activityForm.sta_manager8_1.set_text(manager);
        					}
        				}else{
        					if(activityForm.sta_manager8_1.text != manager){ // 두명인 경우 세팅
        						activityForm.sta_manager8_2.set_text(manager);
        					}
        				}
        			}else if(barcode == "SC0700"){ // 식사도움
        				if(Sct.Util.isEmpty(activityForm.sta_manager9_1.text)){
        					if(!Sct.Util.isEmpty(manager)){ // 직원명이 존재하면 백그라운드 및 이름 세팅
        						this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select9.set_cssclass("btn_orange");
        						activityForm.sta_manager9_1.set_text(manager);
        					}
        				}else{
        					if(activityForm.sta_manager9_1.text != manager){ // 두명인 경우 세팅
        						activityForm.sta_manager9_2.set_text(manager);
        					}
        				}
        			}else if(barcode == "SC2400"){ // 산책시동행
        				if(Sct.Util.isEmpty(activityForm.sta_manager12_1.text)){
        					if(!Sct.Util.isEmpty(manager)){ // 직원명이 존재하면 백그라운드 및 이름 세팅
        						this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select12.set_cssclass("btn_orange");
        						activityForm.sta_manager12_1.set_text(manager);
        					}
        				}else{
        					if(activityForm.sta_manager12_1.text != manager){ // 두명인 경우 세팅
        						activityForm.sta_manager12_2.set_text(manager);
        					}
        				}
        			}else if(barcode == "SC2500"){ // 의사소통도움
        				if(Sct.Util.isEmpty(activityForm.sta_manager13_1.text)){
        					if(!Sct.Util.isEmpty(manager)){ // 직원명이 존재하면 백그라운드 및 이름 세팅
        						this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select13.set_cssclass("btn_orange");
        						activityForm.sta_manager13_1.set_text(manager);
        					}
        				}else{
        					if(activityForm.sta_manager13_1.text != manager){ // 두명인 경우 세팅
        						activityForm.sta_manager13_2.set_text(manager);
        					}
        				}
        			}
        		}
        	}
        };
        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 출력
        // 상태변화기록 서식 리포트
        this.fn_report = function()
        {
        	if (this.ds_data.rowcount < 1) {
        		alert("먼저 수급자를 선택해 주세요.");
        		return false;
        	}

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00101_R02.xfdl";
        	const popupName = "";

        	params = {
        		sicode : fv_sicode,
        		mcode : this.ds_data.getColumn(0, "m_code"),
        		date : this.ds_search.getColumn(0,"date"),
        		sign : "1"
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        }

        // 선택된 복수의 수급자 또는 한 명의 수급자에 대해
        // 검색조건 기간에 상태변화기록이 존재하는지 여부를 반환
        // 매개값 : 수급자 코드. 두명 이상일 경우 콤마로 구분됨

        // 작성자 선택 팝업
        this.btn_manager_onclick = function(obj,e)
        {
         	if (this.ds_data.rowcount < 1) {
        		//alert("먼저 수급자를 선택해 주세요.");
        		return;
        	}

        	if(obj.id == "btn_manager1"){ // 구강점검
        		var popid = "employee1";
        	}if(obj.id == "btn_manager2"){ // 작성자
        		var popid = "employee2";
        	}

        	const param = {
        			SICODE : fv_sicode
        		,	DATE :	this.ds_search.getColumn(0, "date")
        	};

        	Sct.popup(this, popid, 450, 400, "입력담당자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };

        // 기능회복, 인지활동 버튼 클릭
        this.btn_popup_onclick = function(obj,e)
        {
        	if(obj.id != "btn_bathlist"){ // 일 목욕제공기록은 수급자 체크x
        		if (this.ds_data.rowcount < 1) {
        			alert("먼저 수급자를 선택해 주세요.");
        			return false;
        		}
        	}else{ // 일 목욕제공기록 데이터 조회
        		this.fn_bathlistsearch();
        	}

        	var param;
        	var popupName;
        	var popupUrl;

        	var k_number = this.ds_data.getColumn(0,"k_number");
        	var m_code = this.ds_data.getColumn(0,"m_code");
        	var m_name = this.ds_data.getColumn(0,"m_name");
        	var m_group = this.ds_data.getColumn(0,"m_group");
        	var sexgb = this.ds_data.getColumn(0, "성별");
        	var jumin = this.ds_data.getColumn(0, "jumin");
        	var m_roomname = this.ds_data.getColumn(0, "m_roomname");
        	var pdate = this.ds_search.getColumn(0,"date");

        	if(obj.id == "btn_traning"){ // 기능회복훈련
        		// 급여제공기록이 존재여부 확인
        		if(Sct.Util.isEmpty(this.ds_data.getColumn(0, "k_number"))){
        			this.alert("급여제공기록이 존재하지 않습니다.");
        			return false;
        		}
        		param = {
        				SICODE : fv_sicode
        			,	DATE : pdate
        			,   MCODE : m_code
        		};
        		popupName = "traning";
        		popupUrl = "DAY_POP::DAY00101_P09.xfdl";
        	}

        	if(obj.id == "btn_act"){ // 인지활동 관리지원
        		param = {
        				SICODE : fv_sicode
        			,	DATE : pdate
        			,   NAME : m_name
        			,   MGROUP : m_group
        			,   MCODE : m_code
        		};
        		popupName = "act";
        		popupUrl = "DAY_POP::DAY00101_P10.xfdl";
        	}

        	if(obj.id == "btn_recordex"){ // 일지예문
        		param = {
        				sicode : fv_sicode
        				};
        		popupName = "recordex";
        		popupUrl = "DAY_POP::DAY00101_P07.xfdl";
        	}

        	if(obj.id == "btn_recordsr"){ // 요양일지 내용검색
        		var date = this.ds_search.getColumn(0,"date") + "";
        		var sdate = Sct.Util.addMonth(date, -3); // 선택날짜의 3개월 전
        		var edate = Sct.Util.addMonth(date, 1); // 선택날짜의 1개월 후

        		param = {
        				sicode : fv_sicode,
        				sdate : sdate,
        				edate : edate
        				};
        		popupName = "recordsr";
        		popupUrl = "DAY_POP::DAY00101_P08.xfdl";
        	}

        	if(obj.id == "btn_pickup"){ // 송영
        		if(Sct.Util.isEmpty(k_number)){
        			this.alert("급여제공기록이 존재하지 않습니다.")
        			return false;
        		}
        		param = {
        				sicode : fv_sicode,
        				k_number : k_number,
        				m_code : m_code
        				};
        		popupName = "pickup";
        		popupUrl = "DAY_POP::DAY00101_P12.xfdl";
        	}

        	if(obj.id == "btn_posture"){ // 자세변경
        		param = {
        				sicode : fv_sicode,
        				date : pdate,
        				mcode : m_code,
        			    mname : m_name,
        			    mgroup : m_group,
        				sexgb : sexgb,
        				jumin : jumin,
        				mroomname : m_roomname
        				};
        		popupName = "posture";
        		popupUrl = "DAY_POP::DAY00101_P01.xfdl";
        	}

        	if(obj.id == "btn_excretion"){ // 화장실이용(배설관찰)
        		var param = {
        				SICODE : fv_sicode,
        				DATE : pdate,
        			    NAME : m_name,
        			    MJUMIN : jumin,
        			    SEXGB : sexgb,
        			    MCODE : m_code
        		};

        		popupName = "excretion";
        		popupUrl = "DAY_POP::DAY00101_P02.xfdl";
        	}

        	if(obj.id == "btn_bath"){ // 목욕도움
        		this.ds_bath.clearData();
        		this.fn_bathsearch();
        		if(this.ds_bath.rowcount < 1){
        			this.alert("목욕일정표에 예약되어 있어야 기록이 가능합니다.");
        			return false;
        		}

        		var param = {
        				sicode : fv_sicode,
        				date : pdate,
        			    mname : m_name,
        				mcode : m_code,
        			    jumin : jumin,
        			    sexgb : sexgb,
        				mgroup : m_group
        		};

        		popupName = "bath";
        		popupUrl = "DAY_POP::DAY00101_P03.xfdl";
        	}

        	if(obj.id == "btn_bathlist"){ // 일 목욕제공기록
        		if(this.ds_bathlist_pre.getColumn(0,"cnt") < 1){
        			this.alert("일 목욕제공기록이 존재하지 않습니다.");
        			return false;
        		}

        		var param = {
        				sicode : fv_sicode,
        				date : pdate,
        		};

        		popupName = "bathlist";
        		popupUrl = "DAY_POP::DAY00101_P06.xfdl";
        	}

        	if(obj.id == "btn_mate"){ // 수급자 상태설정
        		var param = {
        				sicode : fv_sicode,
        				m_code : m_code
        		};

        		popupName = "mate";
        		popupUrl = "DAY_POP::DAY00101_P04.xfdl";
        	}

        	if(obj.id == "btn_bind"){ // 신체보호기록
        		var param = {
        				sicode : fv_sicode,
        				date : pdate,
        				mcode : m_code,
        			    mname : m_name,
        			    mgroup : m_group,
        				sexgb : sexgb,
        				jumin : jumin,
        				mroomname : m_roomname
        		};

        		popupName = "bind";
        		popupUrl = "DAY_POP::DAY00101_P05.xfdl";
        	}



        	Sct.popup(this, popupName, 450, 400, "", param, popupUrl, "fn_popCallback");
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);

        	switch(popid)
        	{
        		// 구강점검
        		case "employee1" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				const name1 = nexacro.trim(objDs.getColumn(0, "c_name"));
        				const staffid1 = objDs.getColumn(0, "c_staffid");
        				this.ds_data.setColumn(0, "구강담당", name1);
        				this.ds_data.setColumn(0, "구강코드", staffid1);
        				this.ds_data.setColumn(0, "VIEW_MANAGER1", name1 + "/" + staffid1);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "구강담당", "");
        				this.ds_data.setColumn(0, "구강코드", "");
        				this.ds_data.setColumn(0, "VIEW_MANAGER1", "");
        			}
        			break;
        		// 점검자
        		case "employee2" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				const name2 = nexacro.trim(objDs.getColumn(0, "c_name"));
        				const staffid2 = objDs.getColumn(0, "c_staffid");
        				this.ds_data.setColumn(0, "일지담당", name2);
        				this.ds_data.setColumn(0, "일지코드", staffid2);
        				this.ds_data.setColumn(0, "VIEW_MANAGER2", name2 + "/" + staffid2);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "일지담당", "");
        				this.ds_data.setColumn(0, "일지코드", "");
        				this.ds_data.setColumn(0, "VIEW_MANAGER2", "");
        			}
        			break;
        		case "traning" : // 기능회복훈련
        		    // 기능회복훈련 callback 값 세팅
         			var tr_a1 = objDs.getColumn(0,"sh1") + ":" + objDs.getColumn(0,"sm1") + "-" + objDs.getColumn(0,"eh1") +  ":" + objDs.getColumn(0,"em1");
        			var tr_b1 = objDs.getColumn(0,"sh2") + ":" + objDs.getColumn(0,"sm2") + "-" + objDs.getColumn(0,"eh2") +  ":" + objDs.getColumn(0,"em2");
        			var tr_c1 = objDs.getColumn(0,"sh3") + ":" + objDs.getColumn(0,"sm3") + "-" + objDs.getColumn(0,"eh3") +  ":" + objDs.getColumn(0,"em3");

        			if(tr_a1 == ":-:") tr_a1 = "  :  -  :  ";
        			if(tr_b1 == ":-:") tr_b1 = "  :  -  :  ";
        			if(tr_c1 == ":-:") tr_c1 = "  :  -  :  ";

         			var tr_a2 = objDs.getColumn(0,"기능훈련a");
         			var tr_b2 = objDs.getColumn(0,"기능훈련b");
         			var tr_c2 = objDs.getColumn(0,"기능훈련c");
         			var tr_manager = objDs.getColumn(0,"훈련담당");

        			this.ds_data.setColumn(0,"traning_a", tr_a1 + " " + tr_manager + " " + tr_a2);
        			this.ds_data.setColumn(0,"traning_b", tr_b1 + " " + tr_manager + " " + tr_b2);
        			this.ds_data.setColumn(0,"traning_c", tr_c1 + " " + tr_manager + " " + tr_c2);
        			break;
        		case "act" : // 인지활동관리지원
        			if(this.ds_actday.rowcount < 1){
        				//this.ds_actday.copyData(this.ds_actday_copy);
        				this.ds_actday.addRow();
        			}
        			this.ds_actday.setColumn(0,"인지관리", objDs.getColumn(0,"인지관리"));
        			this.ds_actday.setColumn(0,"오전활동1", objDs.getColumn(0,"오전활동1"));
        			this.ds_actday.setColumn(0,"오후활동1", objDs.getColumn(0,"오후활동1"));
        			break;
        		case "recordex" : // 일지예문
        			var cont = this.ds_data.getColumn(0,"요양일지");
        			var record = "";

        			if(Sct.Util.isEmpty(cont)){ //
        				record = objDs.getColumn(0, "value");
        			}else{
        				record = cont + "\n" + objDs.getColumn(0, "value");
        			}

        			this.ds_data.setColumn(0, "요양일지", record);
        			break;
        		case "pickup" : // 송영
        			this.ds_data.setColumn(0,"시작시간",objDs.getColumn(0,"시작시간"));
        			this.ds_data.setColumn(0,"시작코스",objDs.getColumn(0,"시작코스"));
        			this.ds_data.setColumn(0,"시작거주지",objDs.getColumn(0,"시작거주지"));
        			this.ds_data.setColumn(0,"종료시간",objDs.getColumn(0,"종료시간"));
        			this.ds_data.setColumn(0,"종료코스",objDs.getColumn(0,"종료코스"));
        			this.ds_data.setColumn(0,"종료거주지",objDs.getColumn(0,"종료거주지"));

        			var stime = objDs.getColumn(0,"시작시간").split(":");
        			var etime = objDs.getColumn(0,"종료시간").split(":");
         			var sFullTime = Sct.Util.getToday() + stime[0] + stime[1] + "00";
         			//trace("sFullTime : " + sFullTime);
         			var eFullTime = Sct.Util.getToday() + etime[0] + etime[1] + "00";
         			//trace("eFullTime : " + eFullTime);
         			var diffTime = this.fn_timeDiff(sFullTime, eFullTime, "hhmm");
         			//trace("diffTime : " + diffTime);
        			if(diffTime == "00:00") diffTime = "";
         			this.div_cont.form.div_right.form.div_main.form.div_pickup.form.sta_timediff.set_text(diffTime);
        			break;
        		case "posture" : // 자세변경
        			this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_posture_cnt.set_text(objDs.getColumn(0,"cnt"));
        			if(objDs.getColumn(0,"cnt") != 0){ // 0이 아니면 백그라운드 설정
        				this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_posture.set_cssclass("btn_orange");
        			}else{ // 0이면 다크크레이
        				this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_posture.set_cssclass("btn_basic_gray");
        			}
        			this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_manager6_1.set_text(objDs.getColumn(0,"manager1"));
        			this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_manager6_2.set_text(objDs.getColumn(0,"manager2"));

        			break;
        		case "excretion" : // 화장실이용(배설관찰)
        			this.fn_excretionsearch();

        			break;
        		case "bath" : // 목욕도움
        			this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_posture_cnt.set_text(objDs.getColumn(0,"cnt"));
        			if(objDs.getColumn(0,"목욕시간") != "  :  -  :  "){
        				this.ds_bath.setColumn(0,"목욕시간",objDs.getColumn(0,"목욕시간"));
        			}else{
        				this.ds_bath.setColumn(0,"목욕시간","");
        			}
        			this.ds_bath.setColumn(0,"담당자01",objDs.getColumn(0,"담당자01"));
        			this.ds_bath.setColumn(0,"담당자02",objDs.getColumn(0,"담당자02"));

        			var manager1 = this.ds_bath.getColumn(0,"담당자01");
        			var manager2 = this.ds_bath.getColumn(0,"담당자02");
        			var time = this.ds_bath.getColumn(0,"목욕시간");
        			this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_manager11_1.set_text(manager1);
        			this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_manager11_2.set_text(manager2);
        			this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_bath_time.set_text(time);

        			var stime = objDs.getColumn(0,"목욕시간").substr(0,5).split(":");
        			var etime = objDs.getColumn(0,"목욕시간").substr(6,5).split(":");
        			var sFullTime = Sct.Util.getToday() + stime[0] + stime[1] + "00";
        			//trace("sFullTime : " + sFullTime);
        			var eFullTime = Sct.Util.getToday() + etime[0] + etime[1] + "00";
        			//trace("eFullTime : " + eFullTime);
        			var diffTime = this.fn_timeDiff(sFullTime, eFullTime, "mm");
        			//trace("diffTime : " + diffTime);

        			if(!Sct.Util.isEmpty(diffTime)){ // 시간비교 빈값확인
        				this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_bath_min.set_text(diffTime);
        			}else{
        				this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_bath_min.set_text("");
        			}
        			break;
        		case "bathlist" : // 일 목욕도움 제공리스트
        			// objDs에서 선택된 수급자의 row 찾기
        			var fRow = objDs.findRow("ba_code", this.ds_data.getColumn(0,"m_code"));
        			if(this.ds_data.rowcount > 0 && fRow > -1){ // 선택된 수급자가 있고, 변경된 데이터가 있으면 변경
        				if(objDs.getColumn(fRow,"목욕시간") != "  :  -  :  "){
        					this.ds_bath.setColumn(0,"목욕시간",objDs.getColumn(fRow,"목욕시간"));
        				}else{
        					this.ds_bath.setColumn(0,"목욕시간","");
        				}
        				this.ds_bath.setColumn(0,"담당자01",objDs.getColumn(fRow,"담당자01"));
        				this.ds_bath.setColumn(0,"담당자02",objDs.getColumn(fRow,"담당자02"));

        				var stime = objDs.getColumn(fRow,"목욕시간").substr(0,5).split(":");
        				var etime = objDs.getColumn(fRow,"목욕시간").substr(6,5).split(":");
        				var sFullTime = Sct.Util.getToday() + stime[0] + stime[1] + "00";
        				//trace("sFullTime : " + sFullTime);
        				var eFullTime = Sct.Util.getToday() + etime[0] + etime[1] + "00";
        				//trace("eFullTime : " + eFullTime);
        				var diffTime = this.fn_timeDiff(sFullTime, eFullTime, "mm");
        				//trace("diffTime : " + diffTime);
        				if(!Sct.Util.isEmpty(diffTime)){ // 시간비교 빈값확인
        					this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_bath_min.set_text(diffTime);
        				}else{
        					this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_bath_min.set_text("");
        				}

        				var manager1 = this.ds_bath.getColumn(0,"담당자01");
        				var manager2 = this.ds_bath.getColumn(0,"담당자02");
        				var time = this.ds_bath.getColumn(0,"목욕시간");
        				this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_manager11_1.set_text(manager1);
        				this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_manager11_2.set_text(manager2);
        				this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_bath_time.set_text(time);
        			}
        			break;
        		case "mate" : // 수급자 상태설정
        			if(objDs.getColumn(0,"배설변의") == 1){
        				this.ds_data.setColumn(0,"cr_state1","변의장애");
        			}else{
        				this.ds_data.setColumn(0,"cr_state1","");
        			}

        			if(objDs.getColumn(0,"배설뇨의") == 1){
        				this.ds_data.setColumn(0,"cr_state2","뇨의장애");
        			}else{
        				this.ds_data.setColumn(0,"cr_state2","");
        			}

        			var cr3 = objDs.getColumn(0,"배설보조");
        			if(cr3 == 1){
        				this.ds_data.setColumn(0,"cr_state3","인공장루(요루)");
        			}else if(cr3 == 2){
        				this.ds_data.setColumn(0,"cr_state3","유치도뇨관");
        			}else if(cr3 == 3){
        				this.ds_data.setColumn(0,"cr_state3","기저귀착용");
        			}else if(cr3 == 4){
        				this.ds_data.setColumn(0,"cr_state3","도뇨관+기저귀");
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
        	//this.ds_search.setColumn(0,"s_nm","사용중");	// 초기값은 수급자만 리스팅
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

        // 그리드 셀클릭 이벤트
        this.div_cont_div_left_grd_list_oncellclick = function(obj,e)
        {
        	const celIdx = obj.getBindCellIndex("body", "m_name");

        	//this.reCode = e.row;

        	// 수급자명 컬럼인 경우
        	if (e.col == celIdx)
        	{
        		this.fn_listclick(e.row);
        // 		this.ds_search.setColumn(0,"m_code", this.ds_list.getColumn(e.row,"m_code"));
        // 		this.ds_search.setColumn(0,"m_name", this.ds_list.getColumn(e.row,"m_name"));
        // 		this.ds_search.setColumn(0,"m_group", this.ds_list.getColumn(e.row,"m_group"));
        // 		// 데이터셋클리어
        // 		this.ds_data.clearData();
        // 		this.ds_actday.clearData();
        // 		this.ds_excretion.clearData();
        // 		// 자세변경 데이터 클리어
        // 		this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_posture_cnt.set_text("");
        // 		this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_manager6_1.set_text("");
        // 		this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_manager6_2.set_text("");
        // 		// 배설관찰 데이터 클리어
        // 		this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_cr1.set_text("");
        // 		this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_cr2.set_text("");
        //
        // 		// 빈값 및 백그라운드 다크그레이로 변경
        // 		for(var i=1; i<=13; i++){
        // 			if(i != 6 || i !=10 || i !=11)
        // 			this.div_cont.form.div_right.form.div_main.form.div_activity.form.components["sta_manager"+i+"_1"].set_text("");
        // 			this.div_cont.form.div_right.form.div_main.form.div_activity.form.components["sta_manager"+i+"_2"].set_text("");
        // 			//this.div_cont.form.div_right.form.div_main.form.div_activity.form.components["btn_select"+i].set_cssclass("btn_basic_gray");
        // 		}
        // 		this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select1.set_cssclass("btn_basic_gray");
        // 		this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select2.set_cssclass("btn_basic_gray");
        // 		this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select3.set_cssclass("btn_basic_gray");
        // 		this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select4.set_cssclass("btn_basic_gray");
        // 		this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select5.set_cssclass("btn_basic_gray");
        // 		this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select7.set_cssclass("btn_basic_gray");
        // 		this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select8.set_cssclass("btn_basic_gray");
        // 		this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select9.set_cssclass("btn_basic_gray");
        // 		this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select12.set_cssclass("btn_basic_gray");
        //  		this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select13.set_cssclass("btn_basic_gray");
        //
        // 		this.reSearchCode = this.ds_list.getColumn(e.row,"m_code");
        // 		this.fn_datasearch();
        	}
        };

        this.fn_listclick = function (row)
        {
        	this.ds_search.setColumn(0,"m_code", this.ds_list.getColumn(row,"m_code"));
        	this.ds_search.setColumn(0,"m_name", this.ds_list.getColumn(row,"m_name"));
        	this.ds_search.setColumn(0,"m_group", this.ds_list.getColumn(row,"m_group"));

        	this.fn_clearDataset("list");
        	// 데이터셋클리어
        // 	this.ds_data.clearData();
        // 	this.ds_actday.clearData();
        // 	this.ds_excretion.clearData();
        // 	// 자세변경 데이터 클리어
        // 	this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_posture_cnt.set_text("");
        // 	this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_manager6_1.set_text("");
        // 	this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_manager6_2.set_text("");
        // 	// 배설관찰 데이터 클리어
        // 	this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_cr1.set_text("");
        // 	this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_cr2.set_text("");
        //
        // 	// 빈값 및 백그라운드 다크그레이로 변경
        // 	for(var i=1; i<=13; i++){
        // 		if(i != 6 || i !=10 || i !=11)
        // 		this.div_cont.form.div_right.form.div_main.form.div_activity.form.components["sta_manager"+i+"_1"].set_text("");
        // 		this.div_cont.form.div_right.form.div_main.form.div_activity.form.components["sta_manager"+i+"_2"].set_text("");
        // 		//this.div_cont.form.div_right.form.div_main.form.div_activity.form.components["btn_select"+i].set_cssclass("btn_basic_gray");
        // 	}
        // 	this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select1.set_cssclass("btn_basic_gray");
        // 	this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select2.set_cssclass("btn_basic_gray");
        // 	this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select3.set_cssclass("btn_basic_gray");
        // 	this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select4.set_cssclass("btn_basic_gray");
        // 	this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select5.set_cssclass("btn_basic_gray");
        // 	this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select7.set_cssclass("btn_basic_gray");
        // 	this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select8.set_cssclass("btn_basic_gray");
        // 	this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select9.set_cssclass("btn_basic_gray");
        // 	this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select12.set_cssclass("btn_basic_gray");
        // 	this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select13.set_cssclass("btn_basic_gray");

        	this.reSearchCode = this.ds_list.getColumn(row,"m_code");
        	this.fn_datasearch();
        };

        // 등급 클릭 이벤트
        this.btn_grade_onclick = function(obj,e)
        {
        	//  선택 버튼 빨간색으로, 그 외는 기본색으로
        	for(var i=0; i<this.grp_btns.length; i++) {
        		if (obj == this.grp_btns[i]) {
        			//this.grp_btns[i].set_background("red");
        			this.grp_btns[i].set_cssclass("btn_orange");
        		} else {
        			//this.grp_btns[i].set_background("darkgray");
        			this.grp_btns[i].set_cssclass("btn_basic_gray");
        		}
        	}

        	var objtext;
        	if(obj.id == "btn_ALL"){
        		objtext = "";
        	}else{
        		objtext = obj.text;
        	}

        	this.ds_search.setColumn(0, "m_group", objtext);

        	this.fn_search("search");
        };

        // 일자 변경 시 데이터셋 클리어, 조회
        this.div_search_cal_date_pic_onchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0, "date", e.postvalue);
        	this.ds_search.setColumn(0, "s_date", e.postvalue);
        	this.fn_clearDataset("dt"); // 데이터셋 클리어
        	this.fn_search("search_dt");

        };

        // 일자변경시 데이터셋 클리어
        this.fn_clearDataset = function (flag)
        {
        	if(flag == "dt"){
        		this.ds_list.clearData();
        	}
        	this.ds_data.clearData();
        	this.ds_actday.clearData();
        	this.ds_excretion.clearData();

        // 	this.ds_data.clearData();
        // 	this.ds_actday.clearData();
        // 	this.ds_excretion.clearData();
        	// 자세변경 데이터 클리어
        	this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_posture_cnt.set_text("");
        	this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_manager6_1.set_text("");
        	this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_manager6_2.set_text("");
        	// 배설관찰 데이터 클리어
        	this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_cr1.set_text("");
        	this.div_cont.form.div_right.form.div_main.form.div_activity.form.sta_cr2.set_text("");

        	// 빈값 및 백그라운드 다크그레이로 변경
        	for(var i=1; i<=13; i++){
        		if(i != 6 || i !=10 || i !=11){
        			//trace(i);
        			this.div_cont.form.div_right.form.div_main.form.div_activity.form.components["sta_manager"+i+"_1"].set_text("");
        			this.div_cont.form.div_right.form.div_main.form.div_activity.form.components["sta_manager"+i+"_2"].set_text("");
        		}
        	}
        	this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select1.set_cssclass("btn_basic_gray");
        	this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select2.set_cssclass("btn_basic_gray");
        	this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select3.set_cssclass("btn_basic_gray");
        	this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select4.set_cssclass("btn_basic_gray");
        	this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select5.set_cssclass("btn_basic_gray");
        	this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select7.set_cssclass("btn_basic_gray");
        	this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select8.set_cssclass("btn_basic_gray");
        	this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select9.set_cssclass("btn_basic_gray");
        	this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select12.set_cssclass("btn_basic_gray");
        	this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select13.set_cssclass("btn_basic_gray");
        };

        // 그룹 버튼 초기화 ('전체' 버튼이 선택된 상태)
        this.btn_group_init = function()
        {
        	for(var i=0; i<this.grp_btns.length; i++) {
        		if (this.grp_btns[i].id == "btn_ALL") {
        			this.grp_btns[i].set_cssclass("btn_orange");
        		} else {
        			this.grp_btns[i].set_cssclass("btn_basic_gray");
        		}
        	}

        	this.ds_search.setColumn(0,"m_group","");
        }

        // 입력, 수정용 데이터셋에 데이터 복사
        this.fn_dataCopy = function()
        {
        	// 데이터 존재
        	var knumber = this.ds_data.getColumn(0,"k_number");
        	if(!Sct.Util.isEmpty(knumber)){
        		var managerStr1 = nexacro.trim(this.ds_data.getColumn(0, "구강담당"))
        					 + "/"
        					 + this.ds_data.getColumn(0, "구강코드");
        		if(!Sct.Util.isEmpty(nexacro.trim(this.ds_data.getColumn(0, "구강담당")))){
        			this.ds_data.setColumn(0, "VIEW_MANAGER1", managerStr1);
        		}else{
        			this.ds_data.setColumn(0, "VIEW_MANAGER1", "");
        		}

        		var managerStr2 = nexacro.trim(this.ds_data.getColumn(0, "일지담당"))
        					 + "/"
        					 + this.ds_data.getColumn(0, "일지코드");

        		if(!Sct.Util.isEmpty(nexacro.trim(this.ds_data.getColumn(0, "일지담당")))){
        			this.ds_data.setColumn(0, "VIEW_MANAGER2", managerStr2);
        		}else{
        			this.ds_data.setColumn(0, "VIEW_MANAGER2", "");
        		}

        		var btime = this.ds_data.getColumn(0,"아침시간");
        		var ltime = this.ds_data.getColumn(0,"점심시간");
        		var dtime = this.ds_data.getColumn(0,"저녁시간");

        		if(btime == "0000"){
        			this.ds_data.setColumn(0,"아침시간", this.ds_mealtime.getColumn(0,"b_time"));
        		}
        		if(ltime == "0000"){
        			this.ds_data.setColumn(0,"점심시간", this.ds_mealtime.getColumn(0,"l_time"));
        		}
        		if(dtime == "0000"){
        			this.ds_data.setColumn(0,"저녁시간", this.ds_mealtime.getColumn(0,"d_time"));
        		}
        	}else{ // 새로작성
        		// 식사시간 세팅
        		this.ds_data.setColumn(0,"아침시간", this.ds_mealtime.getColumn(0,"b_time"));
        		this.ds_data.setColumn(0,"점심시간", this.ds_mealtime.getColumn(0,"l_time"));
        		this.ds_data.setColumn(0,"저녁시간", this.ds_mealtime.getColumn(0,"d_time"));
        		this.ds_data.setColumn(0,"am_time", this.ds_mealtime.getColumn(0,"am_time"));
        		this.ds_data.setColumn(0,"pm_time", this.ds_mealtime.getColumn(0,"pm_time"));

        		this.ds_data.setColumn(0, "구강담당", nexacro.trim(nexacro.getApplication().gds_userInfo.getColumn(0, "c_name")));
        		this.ds_data.setColumn(0, "구강코드", nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid"));

        		var managerStr1 = this.ds_data.getColumn(0, "구강담당")
        						 + "/"
        						 + this.ds_data.getColumn(0, "구강코드");
        		this.ds_data.setColumn(0, "VIEW_MANAGER1", managerStr1);

        		this.ds_data.setColumn(0, "일지담당", nexacro.trim(nexacro.getApplication().gds_userInfo.getColumn(0, "c_name")));
        		this.ds_data.setColumn(0, "일지코드", nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid"));

        		var managerStr2 = this.ds_data.getColumn(0, "일지담당")
        						 + "/"
        						 + this.ds_data.getColumn(0, "일지코드");
        		this.ds_data.setColumn(0, "VIEW_MANAGER2", managerStr2);
        	}


        	// 미이용 여부
        	if(!Sct.Util.isEmpty(this.ds_data.getColumn(0,"move_cont"))){
        		this.div_cont.form.div_right.form.div_main.form.div_pickup.form.sta_move.set_background("red");
        		this.div_cont.form.div_right.form.div_main.form.div_pickup.form.sta_move.set_color("#ffffff");
        		this.div_cont.form.div_right.form.div_main.form.div_pickup.form.sta_move.set_text("미입소");
        	}else{
        		this.div_cont.form.div_right.form.div_main.form.div_pickup.form.sta_move.set_background("#ffffff");
        		this.div_cont.form.div_right.form.div_main.form.div_pickup.form.sta_move.set_color("#ffffff");
        		this.div_cont.form.div_right.form.div_main.form.div_pickup.form.sta_move.set_text("");
        	}

        	this.ds_data.set_updatecontrol(false);
        	this.ds_data.setRowType(0, 1);
        	this.ds_data.set_updatecontrol(true);
        };

        // 지움버튼 이벤트
        this.btn_del = function(obj,e)
        {
        	var objid = obj.id.substr(4);
        	if(this.ds_data.rowcount  < 1){
        		return false;
        	}

        	if(objid == "bd"){ // 아침지움
        		this.ds_data.setColumn(0,"아침종류",0);
        		this.ds_data.setColumn(0,"아침양",0);
        	}else if(objid == "ld"){ // 점심지움
        		this.ds_data.setColumn(0,"점심종류",0);
        		this.ds_data.setColumn(0,"점심양",0);
        	}else if(objid == "dd"){ // 저녁지움
        		this.ds_data.setColumn(0,"저녁종류",0);
        		this.ds_data.setColumn(0,"저녁양",0);
        	}else if(objid == "sd"){ // 간식지움
        		this.ds_data.setColumn(0,"오전간식",0);
        		this.ds_data.setColumn(0,"오후간식",0);
        	}else if(objid == "state_delete"){ // 구강상태지움
        		this.ds_data.setColumn(0,"구강상태",0);
        		this.ds_data.setColumn(0,"구강내용","");
        		this.ds_data.setColumn(0,"구강담당","");
        		this.ds_data.setColumn(0,"구강코드","");
        		this.ds_data.setColumn(0,"VIEW_MANAGER1","");
        	}

        	// 신체활동지원 담당자 지움
        	var delnum = obj.id.substr(7); // btn_del1_1 > 1_1
        	var delnum2 = "";
        	if(delnum.length == 3){
        		delnum2 = obj.id.substr(7,1); // btn_del1_1 > 1
        	}else{
        		delnum2 = obj.id.substr(7,2); // btn_del12_1 > 12
        	}
        	var activityForm = this.div_cont.form.div_right.form.div_main.form.div_activity.form;
        	switch(obj.id) {
        		case "btn_del"+delnum:
        			var barcode = "";
        			if(delnum2 == "1") barcode = "SC0100";
        			else if(delnum2 == "1") barcode = "SC0100";
        			else if(delnum2 == "2") barcode = "SC0200";
        			else if(delnum2 == "3") barcode = "SC0300";
        			else if(delnum2 == "4") barcode = "SC0400";
        			else if(delnum2 == "5") barcode = "SC0500";
        			else if(delnum2 == "7") barcode = "SC0900";
        			else if(delnum2 == "8") barcode = "SC1000";
        			else if(delnum2 == "9") barcode = "SC0700";
        			else if(delnum2 == "12") barcode = "SC2400";
        			else if(delnum2 == "13") barcode = "SC2500";

        			var manager = activityForm.components["sta_manager"+delnum].text;
        			// 바코드 + 직원명의 row
        			var searchRow = this.ds_kmdaily25.findRowExpr( "km바코드 =='" +barcode +"'" +"&& km직원명 =='" +manager +"'");

        			if(searchRow > -1) {
        				if(this.ds_kmdaily25.getRowType(searchRow) == "2"){	// 추가행 상태에선 로우 삭제
        					this.ds_kmdaily25.deleteRow(searchRow);
        				}else{ // rowType 삭제행으로 변경
        					this.ds_kmdaily25.set_updatecontrol(false);
        					this.ds_kmdaily25.setRowType(searchRow, 4);
        					this.ds_kmdaily25.set_updatecontrol(true);
        				}
        			}

        			activityForm.components["sta_manager"+delnum].set_text(""); // 컴포넌트 빈값처리
        			var man1 = activityForm.components["sta_manager"+delnum2+"_1"].text;
        			var man2 = activityForm.components["sta_manager"+delnum2+"_2"].text;
        			if(Sct.Util.isEmpty(man1) && Sct.Util.isEmpty(man2)){ // 담당자 둘 다 빈값이면 버튼 회색처리
        				activityForm.components["btn_select"+delnum2].set_cssclass("btn_basic_gray");
        			}
        			break;
        	}
        };

        // 구강상태 체크박스 이벤트
        this.chk_state_canchange = function(obj,e)
        {
        	// 구강내용 빈값 시 base_info 구강메모 가져오기
        	if(e.postvalue != "0" && nexacro.trim(this.ds_data.getColumn(0,"구강내용")) == ""){
        		this.ds_data.setColumn(0,"구강내용", this.ds_data.getColumn(0,"구강메모"));
        	}
        	// 1 : 양치질도움, 2 : 입안행굼
        	if(e.postvalue == "1"){
        		this.div_cont.form.div_right.form.div_main.form.div_help.form.chk_state2.set_value(0);
        	}else if(e.postvalue == "2"){
        		this.div_cont.form.div_right.form.div_main.form.div_help.form.chk_state1.set_value(0);
        	}
        };

        // 신체활동지원 버튼 클릭 이벤트
        this.btn_activity_onclick = function(obj,e)
        {
        	if (this.ds_data.rowcount < 1) {
        		//alert("먼저 수급자를 선택해 주세요.");
        		return false;
        	}
        	switch(obj.id) {
        		case "btn_select1":
        			this.fn_setManager("sta_manager1","SC0100");
        			break;
        		case "btn_select2":
        			this.fn_setManager("sta_manager2","SC0200");
        			break;
        		case "btn_select3":
        			this.fn_setManager("sta_manager3","SC0300");
        			break;
        		case "btn_select4":
        			this.fn_setManager("sta_manager4","SC0400");
        			break;
        		case "btn_select5":
        			this.fn_setManager("sta_manager5","SC0500");
        			break;
        		case "btn_select7":
        			this.fn_setManager("sta_manager7","SC0900");
        			break;
        		case "btn_select8":
        			this.fn_setManager("sta_manager8","SC1000");
        			break;
        		case "btn_select9":
        			this.fn_setManager("sta_manager9","SC0700");
        			break;
        		case "btn_select12":
        			this.fn_setManager("sta_manager12","SC2400");
        			break;
        		case "btn_select13":
        			this.fn_setManager("sta_manager13","SC2500");
        			break;
        		default:
        	}
        };

        // 신체활동지원 담당자 세팅
        // comp : 해당 컴포넌트, kmcode : km바코드
        this.fn_setManager = function (comp, kmcode)
        {
        	//this.div_cont.form.div_right.form.div_main.form.div_activity.form.components["btn_select" + comp.substr(11)].set_cssclass("btn_orange");  // #ffa07a //
        	this.div_cont.form.div_right.form.div_main.form.div_activity.form.components["btn_select" + comp.substr(11)].set_cssclass("btn_orange");

        	//this.div_cont.form.div_right.form.div_main.form.div_activity.form.components["btn_select" + comp.substr(11)].set_cssclass("btn_basic_gray");
        	var activityForm = this.div_cont.form.div_right.form.div_main.form.div_activity.form;
        	if(Sct.Util.isEmpty(activityForm.components[comp+"_1"].text)){ // 첫번째 빈값이면 입력
        		var aRow = this.ds_kmdaily25.addRow();
        		this.ds_kmdaily25.setColumn(aRow,"sicode",fv_sicode);
        		this.ds_kmdaily25.setColumn(aRow,"kmdaily",this.ds_search.getColumn(0,"date"));
        		this.ds_kmdaily25.setColumn(aRow,"kmcode",this.ds_data.getColumn(0,"m_code"));
        		this.ds_kmdaily25.setColumn(aRow,"kmname",this.ds_data.getColumn(0,"m_name"));
        		this.ds_kmdaily25.setColumn(aRow,"km바코드", kmcode);
        		this.ds_kmdaily25.setColumn(aRow,"km직원코드",this.fv_staff_id);
        		this.ds_kmdaily25.setColumn(aRow,"km직원명",this.fv_staff_name);
        		activityForm.components[comp+"_1"].set_text(this.fv_staff_name);
        	}else if(Sct.Util.isEmpty(activityForm.components[comp+"_2"].text)){ // 두번째 빈값이면 입력
        		if(activityForm.components[comp+"_1"].text == this.fv_staff_name){ // 첫번째 담당자와 로그인한 담당자가 같으면 입력불가
        			return false;
        		}else{
        			var aRow = this.ds_kmdaily25.addRow();
        			this.ds_kmdaily25.setColumn(aRow,"sicode",fv_sicode);
        			this.ds_kmdaily25.setColumn(aRow,"kmdaily",this.ds_search.getColumn(0,"date"));
        			this.ds_kmdaily25.setColumn(aRow,"kmcode",this.ds_data.getColumn(0,"m_code"));
        			this.ds_kmdaily25.setColumn(aRow,"kmname",this.ds_data.getColumn(0,"m_name"));
        			this.ds_kmdaily25.setColumn(aRow,"km바코드", kmcode);
        			this.ds_kmdaily25.setColumn(aRow,"km직원코드",this.fv_staff_id);
        			this.ds_kmdaily25.setColumn(aRow,"km직원명",this.fv_staff_name);
        			activityForm.components[comp+"_2"].set_text(this.fv_staff_name);
        		}
        	}else{
        		return false;
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("oncellclick",this.div_cont_div_left_grd_list_oncellclick,this);
            this.div_cont.form.div_left.form.btn_A.addEventHandler("onclick",this.btn_grade_onclick,this);
            this.div_cont.form.div_left.form.btn_B.addEventHandler("onclick",this.btn_grade_onclick,this);
            this.div_cont.form.div_left.form.btn_C.addEventHandler("onclick",this.btn_grade_onclick,this);
            this.div_cont.form.div_left.form.btn_D.addEventHandler("onclick",this.btn_grade_onclick,this);
            this.div_cont.form.div_left.form.btn_E.addEventHandler("onclick",this.btn_grade_onclick,this);
            this.div_cont.form.div_left.form.btn_F.addEventHandler("onclick",this.btn_grade_onclick,this);
            this.div_cont.form.div_left.form.btn_G.addEventHandler("onclick",this.btn_grade_onclick,this);
            this.div_cont.form.div_left.form.btn_H.addEventHandler("onclick",this.btn_grade_onclick,this);
            this.div_cont.form.div_left.form.btn_I.addEventHandler("onclick",this.btn_grade_onclick,this);
            this.div_cont.form.div_left.form.btn_J.addEventHandler("onclick",this.btn_grade_onclick,this);
            this.div_cont.form.div_left.form.btn_K.addEventHandler("onclick",this.btn_grade_onclick,this);
            this.div_cont.form.div_left.form.btn_L.addEventHandler("onclick",this.btn_grade_onclick,this);
            this.div_cont.form.div_left.form.btn_P.addEventHandler("onclick",this.btn_grade_onclick,this);
            this.div_cont.form.div_left.form.btn_O.addEventHandler("onclick",this.btn_grade_onclick,this);
            this.div_cont.form.div_left.form.btn_N.addEventHandler("onclick",this.btn_grade_onclick,this);
            this.div_cont.form.div_left.form.btn_M.addEventHandler("onclick",this.btn_grade_onclick,this);
            this.div_cont.form.div_left.form.btn_ALL.addEventHandler("onclick",this.btn_grade_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.rdo_b.addEventHandler("onitemchanged",this.div_cont_rdo_b_onitemchanged,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.rdo_ba.addEventHandler("onitemchanged",this.div_cont_rdo_b_onitemchanged,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.btn_bd.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.rdo_l.addEventHandler("onitemchanged",this.div_cont_rdo_b_onitemchanged,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.rdo_la.addEventHandler("onitemchanged",this.div_cont_rdo_b_onitemchanged,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.rdo_d.addEventHandler("onitemchanged",this.div_cont_rdo_b_onitemchanged,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.rdo_da.addEventHandler("onitemchanged",this.div_cont_rdo_b_onitemchanged,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.rdo_sa2.addEventHandler("onitemchanged",this.div_cont_rdo_b_onitemchanged,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.btn_ld.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.btn_sd.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.btn_dd.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.rdo_sa1.addEventHandler("onitemchanged",this.div_cont_rdo_b_onitemchanged,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.btn_state_delete.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.btn_record.addEventHandler("onclick",this.div_cont_btn_record_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.chk_state2.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.chk_state1.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.btn_manager1.addEventHandler("onclick",this.btn_manager_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.btn_manager2.addEventHandler("onclick",this.btn_manager_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.btn_mealtime.addEventHandler("onclick",this.div_cont_div_right_div_main_div_help_btn_mealtime_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.sta_body8_00_00_00_02_01.addEventHandler("onclick",this.div_cont_div_right_div_main_div_help_sta_body8_00_00_00_02_01_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.edt_traning2.addEventHandler("onchanged",this.div_cont_div_right_div_main_div_help_edt_content00_01_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.btn_traning.addEventHandler("onclick",this.btn_popup_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.btn_act.addEventHandler("onclick",this.btn_popup_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.sta_head10_00.addEventHandler("onclick",this.div_cont_div_right_div_main_div_help_sta_head10_00_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.btn_recordex.addEventHandler("onclick",this.btn_popup_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.btn_recordsr.addEventHandler("onclick",this.btn_popup_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.mae_time1.addEventHandler("oneditclick",this.mae_time_from_oneditclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.mae_time1.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.mae_time1_00.addEventHandler("oneditclick",this.mae_time_from_oneditclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.mae_time1_00.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.mae_time1_01.addEventHandler("oneditclick",this.mae_time_from_oneditclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.mae_time1_01.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.mae_time1_01_00.addEventHandler("oneditclick",this.mae_time_from_oneditclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.mae_time1_01_00.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.mae_time1_01_00_00.addEventHandler("oneditclick",this.mae_time_from_oneditclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_help.form.mae_time1_01_00_00.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select1.addEventHandler("onclick",this.btn_activity_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select2.addEventHandler("onclick",this.btn_activity_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select5.addEventHandler("onclick",this.btn_activity_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select3.addEventHandler("onclick",this.btn_activity_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_posture.addEventHandler("onclick",this.btn_popup_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select8.addEventHandler("onclick",this.btn_activity_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_excretion.addEventHandler("onclick",this.btn_popup_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select9.addEventHandler("onclick",this.btn_activity_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select4.addEventHandler("onclick",this.btn_activity_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select7.addEventHandler("onclick",this.btn_activity_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_bath.addEventHandler("onclick",this.btn_popup_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select12.addEventHandler("onclick",this.btn_activity_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_select13.addEventHandler("onclick",this.btn_activity_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_del1_1.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_del1_2.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_del2_1.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_del2_2.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_del3_1.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_del3_2.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_del4_1.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_del4_2.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_del5_1.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_del5_2.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_del7_1.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_del7_2.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_del8_1.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_del8_2.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_del9_1.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_del9_2.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_del12_1.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_del12_2.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_del13_1.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.div_right.form.div_main.form.div_activity.form.btn_del13_2.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.div_right.form.div_main.form.div_pickup.form.sta_b01.addEventHandler("onclick",this.div_cont_div_right_div_main_div_pickup_sta_b01_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_pickup.form.btn_pickup.addEventHandler("onclick",this.btn_popup_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.div_pickup.form.sta_timediff.addEventHandler("onclick",this.div_cont_div_right_div_main_div_pickup_sta_b01_onclick,this);
            this.div_search.form.cal_date_pic.addEventHandler("onchanged",this.div_search_cal_date_pic_onchanged,this);
            this.div_search.form.btn_pre_dt.addEventHandler("onclick",this.div_search_btn_pre_dt_onclick,this);
            this.div_search.form.cal_date.addEventHandler("onchanged",this.div_search_cal_date_onchanged,this);
            this.div_search.form.btn_next_dt.addEventHandler("onclick",this.div_search_btn_next_dt_onclick,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_func.form.btn_report.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_dtrecord.addEventHandler("onclick",this.div_func_btn_dtrecord_onclick,this);
            this.div_func.form.btn_mate.addEventHandler("onclick",this.btn_popup_onclick,this);
            this.div_func.form.btn_bind.addEventHandler("onclick",this.btn_popup_onclick,this);
            this.div_func.form.btn_bathlist.addEventHandler("onclick",this.btn_popup_onclick,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00101.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
