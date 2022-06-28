(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00208");
            this.set_titletext("2-8 수급자 외출기록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"sex_nm\" type=\"STRING\" size=\"256\"/><Column id=\"grade_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"m_reday\" type=\"STRING\" size=\"256\"/><Column id=\"m_history\" type=\"STRING\" size=\"256\"/><Column id=\"m_liday1\" type=\"STRING\" size=\"256\"/><Column id=\"m_liday2\" type=\"STRING\" size=\"256\"/><Column id=\"m_regist\" type=\"STRING\" size=\"256\"/><Column id=\"m_jumin1\" type=\"STRING\" size=\"256\"/><Column id=\"m_juso1\" type=\"STRING\" size=\"256\"/><Column id=\"m_juso2\" type=\"STRING\" size=\"256\"/><Column id=\"m_post\" type=\"STRING\" size=\"256\"/><Column id=\"m_juso\" type=\"STRING\" size=\"256\"/><Column id=\"m_conname1\" type=\"STRING\" size=\"256\"/><Column id=\"m_conname2\" type=\"STRING\" size=\"256\"/><Column id=\"m_conname3\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"INT\" size=\"256\"/><Column id=\"b_birth\" type=\"STRING\" size=\"256\"/><Column id=\"sajin\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"M_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"sex_nm\" type=\"STRING\" size=\"256\"/><Column id=\"grade_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"m_reday\" type=\"STRING\" size=\"256\"/><Column id=\"m_history\" type=\"STRING\" size=\"256\"/><Column id=\"m_liday1\" type=\"STRING\" size=\"256\"/><Column id=\"m_liday2\" type=\"STRING\" size=\"256\"/><Column id=\"m_regist\" type=\"STRING\" size=\"256\"/><Column id=\"m_jumin1\" type=\"STRING\" size=\"256\"/><Column id=\"m_juso1\" type=\"STRING\" size=\"256\"/><Column id=\"m_juso2\" type=\"STRING\" size=\"256\"/><Column id=\"m_post\" type=\"STRING\" size=\"256\"/><Column id=\"m_juso\" type=\"STRING\" size=\"256\"/><Column id=\"m_conname1\" type=\"STRING\" size=\"256\"/><Column id=\"m_conname2\" type=\"STRING\" size=\"256\"/><Column id=\"m_conname3\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"INT\" size=\"256\"/><Column id=\"b_birth\" type=\"STRING\" size=\"256\"/><Column id=\"sajin\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_out", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"외출번호\" type=\"STRING\" size=\"256\"/><Column id=\"거주자명\" type=\"STRING\" size=\"256\"/><Column id=\"거주코드\" type=\"STRING\" size=\"256\"/><Column id=\"외출구분\" type=\"STRING\" size=\"256\"/><Column id=\"외출일\" type=\"STRING\" size=\"256\"/><Column id=\"외출시\" type=\"STRING\" size=\"256\"/><Column id=\"외출분\" type=\"STRING\" size=\"256\"/><Column id=\"복귀시\" type=\"STRING\" size=\"256\"/><Column id=\"복귀분\" type=\"STRING\" size=\"256\"/><Column id=\"행선지\" type=\"STRING\" size=\"256\"/><Column id=\"외출목적\" type=\"STRING\" size=\"256\"/><Column id=\"보호자명\" type=\"STRING\" size=\"256\"/><Column id=\"보호자관계\" type=\"STRING\" size=\"256\"/><Column id=\"보호자전화\" type=\"STRING\" size=\"256\"/><Column id=\"확인담당\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드\" type=\"STRING\" size=\"256\"/><Column id=\"org_외출번호\" type=\"STRING\" size=\"256\"/><Column id=\"외출시간\" type=\"STRING\" size=\"256\"/><Column id=\"진료금액\" type=\"STRING\" size=\"256\"/><Column id=\"진료청구\" type=\"STRING\" size=\"256\"/><Column id=\"투약금액\" type=\"STRING\" size=\"256\"/><Column id=\"투약청구\" type=\"STRING\" size=\"256\"/><Column id=\"filename1\" type=\"STRING\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/><Column id=\"writer\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search_out", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"M_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_out_select", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"외출번호\" type=\"STRING\" size=\"256\"/><Column id=\"거주자명\" type=\"STRING\" size=\"256\"/><Column id=\"거주코드\" type=\"STRING\" size=\"256\"/><Column id=\"외출구분\" type=\"STRING\" size=\"256\"/><Column id=\"외출일\" type=\"STRING\" size=\"256\"/><Column id=\"외출시\" type=\"STRING\" size=\"256\"/><Column id=\"외출분\" type=\"STRING\" size=\"256\"/><Column id=\"복귀시\" type=\"STRING\" size=\"256\"/><Column id=\"복귀분\" type=\"STRING\" size=\"256\"/><Column id=\"행선지\" type=\"STRING\" size=\"256\"/><Column id=\"외출목적\" type=\"STRING\" size=\"256\"/><Column id=\"보호자명\" type=\"STRING\" size=\"256\"/><Column id=\"보호자관계\" type=\"STRING\" size=\"256\"/><Column id=\"보호자전화\" type=\"STRING\" size=\"256\"/><Column id=\"확인담당\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드\" type=\"STRING\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/><Column id=\"writer\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"일반외출\" type=\"STRING\" size=\"256\"/><Column id=\"외출시간공제\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","49","1860","750",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","-10","2","445",null,null,"9",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","10","2","430","717",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"78\"/><Column size=\"50\"/><Column size=\"112\"/><Column size=\"48\"/><Column size=\"60\"/><Column size=\"84\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"현황\"/><Cell col=\"1\" text=\"그룹\"/><Cell col=\"2\" text=\"수급자명\"/><Cell col=\"3\" text=\"성별\"/><Cell col=\"4\" text=\"등급\"/><Cell col=\"5\" text=\"생활실\"/></Band><Band id=\"body\"><Cell text=\"bind:s_nm\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:m_group\" combodataset=\"ds_tp\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"2\" text=\"bind:m_name\" textAlign=\"center\" cssclass=\"cellBWoman\" cursor=\"pointer\" expandchar=\"dot\"/><Cell col=\"3\" text=\"bind:sex_nm\"/><Cell col=\"4\" text=\"bind:grade_nm\"/><Cell col=\"5\" text=\"bind:m_roomname\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right1","455","0","1377","130",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new ImageViewer("imv_00","10","4","121","126",null,null,null,null,null,null,this.div_cont.form.div_right1.form);
            obj.set_taborder("0");
            this.div_cont.form.div_right1.addChild(obj.name, obj);

            obj = new Static("sta_00","130","4","90","43",null,null,null,null,null,null,this.div_cont.form.div_right1.form);
            obj.set_taborder("1");
            obj.set_text("수급자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right1.addChild(obj.name, obj);

            obj = new Static("sta_00_00","130","46","90","42",null,null,null,null,null,null,this.div_cont.form.div_right1.form);
            obj.set_taborder("2");
            obj.set_text("생 활 실");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right1.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00","130","87","90","43",null,null,null,null,null,null,this.div_cont.form.div_right1.form);
            obj.set_taborder("3");
            obj.set_text("주요질환");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right1.addChild(obj.name, obj);

            obj = new Static("sta_01","219","4","1154","43",null,null,null,null,null,null,this.div_cont.form.div_right1.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right1.addChild(obj.name, obj);

            obj = new Static("sta_00_01","420","4","90","43",null,null,null,null,null,null,this.div_cont.form.div_right1.form);
            obj.set_taborder("5");
            obj.set_text("성별·나이");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right1.addChild(obj.name, obj);

            obj = new Static("sta_01_00","219","46","1154","42",null,null,null,null,null,null,this.div_cont.form.div_right1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right1.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00","219","87","1154","43",null,null,null,null,null,null,this.div_cont.form.div_right1.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right1.addChild(obj.name, obj);

            obj = new Static("sta_00_00_01","420","46","90","42",null,null,null,null,null,null,this.div_cont.form.div_right1.form);
            obj.set_taborder("8");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right1.addChild(obj.name, obj);

            obj = new Static("sta_00_00_01_00","700","46","90","42",null,null,null,null,null,null,this.div_cont.form.div_right1.form);
            obj.set_taborder("9");
            obj.set_text("퇴 소 일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right1.addChild(obj.name, obj);

            obj = new Static("sta_00_00_01_00_00","700","4","90","43",null,null,null,null,null,null,this.div_cont.form.div_right1.form);
            obj.set_taborder("10");
            obj.set_text("입 소 일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right1.addChild(obj.name, obj);

            obj = new Static("sta_00_00_01_00_00_00","1030","4","90","43",null,null,null,null,null,null,this.div_cont.form.div_right1.form);
            obj.set_taborder("11");
            obj.set_text("인정번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right1.addChild(obj.name, obj);

            obj = new Static("sta_00_00_01_00_00_00_00","1030","46","90","42",null,null,null,null,null,null,this.div_cont.form.div_right1.form);
            obj.set_taborder("12");
            obj.set_text("인정등급");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right1.addChild(obj.name, obj);

            obj = new Static("sta_02","222","4","92","43",null,null,null,null,null,null,this.div_cont.form.div_right1.form);
            obj.set_taborder("13");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_font("bold 10pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_right1.addChild(obj.name, obj);

            obj = new Static("sta_02_00","322","4","92","43",null,null,null,null,null,null,this.div_cont.form.div_right1.form);
            obj.set_taborder("14");
            obj.set_textAlign("left");
            this.div_cont.form.div_right1.addChild(obj.name, obj);

            obj = new Static("sta_02_02","222","46","198","42",null,null,null,null,null,null,this.div_cont.form.div_right1.form);
            obj.set_taborder("16");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right1.addChild(obj.name, obj);

            obj = new Static("sta_02_01","222","87","1148","43",null,null,null,null,null,null,this.div_cont.form.div_right1.form);
            obj.set_taborder("15");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_text("");
            this.div_cont.form.div_right1.addChild(obj.name, obj);

            obj = new Static("sta_02_03_00","555","4","139","43",null,null,null,null,null,null,this.div_cont.form.div_right1.form);
            obj.set_taborder("18");
            this.div_cont.form.div_right1.addChild(obj.name, obj);

            obj = new Static("sta_02_03","512","4","43","43",null,null,null,null,null,null,this.div_cont.form.div_right1.form);
            obj.set_taborder("17");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right1.addChild(obj.name, obj);

            obj = new Static("sta_02_03_01","512","46","188","42",null,null,null,null,null,null,this.div_cont.form.div_right1.form);
            obj.set_taborder("19");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right1.addChild(obj.name, obj);

            obj = new Static("sta_02_03_00_00","792","4","238","43",null,null,null,null,null,null,this.div_cont.form.div_right1.form);
            obj.set_taborder("22");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right1.addChild(obj.name, obj);

            obj = new Static("sta_02_03_01_00","792","46","238","42",null,null,null,null,null,null,this.div_cont.form.div_right1.form);
            obj.set_taborder("20");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_color("red");
            this.div_cont.form.div_right1.addChild(obj.name, obj);

            obj = new Static("sta_02_03_00_00_00","1122","4","249","43",null,null,null,null,null,null,this.div_cont.form.div_right1.form);
            obj.set_taborder("23");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_text("");
            this.div_cont.form.div_right1.addChild(obj.name, obj);

            obj = new Static("sta_02_03_01_00_00","1122","46","248","42",null,null,null,null,null,null,this.div_cont.form.div_right1.form);
            obj.set_taborder("21");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right1.addChild(obj.name, obj);

            obj = new Div("div_right3","468","457","1372","283",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_out","0","20","1360","244",null,null,null,null,null,null,this.div_cont.form.div_right3.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_out");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"183\"/><Column size=\"126\"/><Column size=\"189\"/><Column size=\"220\"/><Column size=\"439\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"외출일\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"외출시간\"/><Cell col=\"3\" text=\"행선지\"/><Cell col=\"4\" text=\"외출목적\"/></Band><Band id=\"body\"><Cell text=\"bind:외출일\" cursor=\"pointer\" cssclass=\"cellBWoman\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"1\" text=\"bind:외출구분\"/><Cell col=\"2\" text=\"bind:time\"/><Cell col=\"3\" text=\"bind:행선지\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:외출목적\" displaytype=\"normal\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right3.addChild(obj.name, obj);

            obj = new Static("sta_00","1241","-3","125","20",null,null,null,null,null,null,this.div_cont.form.div_right3.form);
            obj.set_taborder("1");
            obj.set_text("수정시 외출일 Click !");
            obj.set_color("purple");
            obj.set_font("bold 10pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_right3.addChild(obj.name, obj);

            obj = new Div("div_right2","460","141","1370","309",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("div_00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00","6","3","155","25",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("0");
            obj.set_text("외출기록 입력 수정");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Static("sta_01","5","29","93","31",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("1");
            obj.set_text("외출일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Static("sta_01_00","5","59","93","31",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("2");
            obj.set_text("외출시간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Static("sta_01_01","5","119","93","31",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Static("sta_01_02","5","149","93","31",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("4");
            obj.set_text("외출목적");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Static("sta_01_03","5","209","93","31",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("5");
            obj.set_text("관계");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Static("sta_01_04","5","239","93","31",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("6");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Static("sta_01_05","5","269","93","31",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Static("sta_02","97","29","1271","31",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Calendar("cal_00","107","33","108","23",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_tooltiptext("점검일");
            obj.set_innerdataset("ds_data");
            obj.set_datecolumn("점검일");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Calendar("cal_01","cal_00:-22","33","23","23",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_data");
            obj.set_datecolumn("점검일");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Static("sta_02_00","97","59","1271","31",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Static("sta_02_01","97","119","1271","31",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Static("sta_02_02","97","209","1271","31",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Static("sta_02_03","97","239","1271","31",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Static("sta_02_04","97","269","1271","31",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Static("sta_02_05","97","149","1271","31",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Button("btn_01","10","123","83","23",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("17");
            obj.set_text("행선지");
            obj.set_cssclass("btn_search");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Button("btn_01_00","10","273","83","23",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("18");
            obj.set_text("작성자");
            obj.set_cssclass("btn_worker");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new TextArea("txt_00","107","123","150","24",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("19");
            obj.set_scrolltype("none");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new TextArea("txt_01","107","152","760","24",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("20");
            obj.set_scrolltype("none");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Static("sta_03","266","63","33","27",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("21");
            obj.set_text("부터");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Static("sta_03_00","454","63","33","27",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("22");
            obj.set_text("까지");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Static("sta_04","107","273","200","25",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("23");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_01","107","62","75","24",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("24");
            obj.set_type("number");
            obj.set_textAlign("left");
            obj.set_format("#00");
            obj.set_padding("0px 0px 0px 15px");
            obj.set_postfixtext("시");
            obj.set_displaynulltext(" ");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Spin("spn_01","mae_01:-24","62","24","24",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("25");
            obj.set_type("normal");
            obj.set_circulation("false");
            obj.set_min("0");
            obj.set_max("23");
            obj.set_value("");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Static("sta_05_00","217","64","23","23",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("26");
            obj.set_text("시");
            obj.set_visible("false");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_01_00","187","62","75","24",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("27");
            obj.set_type("number");
            obj.set_textAlign("left");
            obj.set_format("#00");
            obj.set_padding("0px 0px 0px 15px");
            obj.set_postfixtext("분");
            obj.set_displaynulltext(" ");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Spin("spn_02","mae_01_00:-24","62","24","24",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("28");
            obj.set_type("normal");
            obj.set_min("0");
            obj.set_max("59");
            obj.set_value("");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_01_01","297","62","75","24",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("29");
            obj.set_type("number");
            obj.set_textAlign("left");
            obj.set_format("#00");
            obj.set_padding("0px 0px 0px 15px");
            obj.set_postfixtext("시");
            obj.set_displaynulltext(" ");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Spin("spn_03","mae_01_01:-24","62","24","24",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("30");
            obj.set_type("normal");
            obj.set_min("0");
            obj.set_max("23");
            obj.set_value("");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_01_02","377","62","75","24",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("31");
            obj.set_type("number");
            obj.set_textAlign("left");
            obj.set_format("#00");
            obj.set_padding("0px 0px 0px 15px");
            obj.set_postfixtext("분");
            obj.set_displaynulltext(" ");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Spin("spn_04","mae_01_02:-24","62","24","24",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("32");
            obj.set_type("normal");
            obj.set_min("0");
            obj.set_max("59");
            obj.set_value("");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00","5","89","93","31",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("33");
            obj.set_text("외출구분");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Static("sta_02_00_00","97","89","1271","31",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new CheckBox("chk_00","107","93","71","23",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("35");
            obj.set_text("일반외출");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_accessibilityenable("true");
            obj.set_accessibilityrole("checkbox");
            obj.set_value("0");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new CheckBox("chk_01","197","93","99","23",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("36");
            obj.set_text("외출시간공제");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Static("sta_01_02_00_00","5","179","93","31",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("37");
            obj.set_text("동행인");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Static("sta_02_02_00","97","179","1271","31",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new TextArea("txt_02","107","182","174","24",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("39");
            obj.set_scrolltype("none");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new TextArea("txt_02_00","107","212","174","24",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("40");
            obj.set_scrolltype("none");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new TextArea("txt_02_01","107","242","174","24",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("41");
            obj.set_scrolltype("none");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Button("btn_00","290","183","91","24",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("42");
            obj.set_text("동행인");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Button("btn_00_00","390","183","91","24",null,null,null,null,null,null,this.div_cont.form.div_right2.form);
            obj.set_taborder("43");
            obj.set_text("보호자동행");
            this.div_cont.form.div_right2.addChild(obj.name, obj);

            obj = new Div("div_search","-1","8","438","42",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grp_all","1","8","50","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("전체");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_grp_a","56","8","35","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("A");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_grp_b","96","8","35","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("B");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_grp_c","136","8","35","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("C");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_grp_d","176","8","35","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("D");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_grp_e","216","8","35","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("E");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_00","361","8","70","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","463","6","1397","37",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00","2","10","89","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("새로작성");
            obj.set_cssclass("btn_newdoc");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_01","1298","10","66","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_cont.form.div_right1.form.sta_02","text","ds_list_select","m_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_right1.form.sta_02_03_00","textAlign","ds_list_select","age");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_cont.form.div_right1.form.sta_02_00","text","ds_list_select","m_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right1.form.sta_02_02","text","ds_list_select","m_roomname");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right1.form.sta_02_01","text","ds_list_select","m_history");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_cont.form.div_right1.form.sta_02_03_01","text","ds_list_select","b_birth");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_cont.form.div_right1.form.sta_02_03","text","ds_list_select","sex_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_right1.form.sta_02_03_00","text","ds_list_select","age");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_right1.form.sta_02_03_00_00","text","ds_list_select","m_enday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right1.form.sta_02_03_01_00","text","ds_list_select","m_reday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_right1.form.sta_02_03_00_00_00","text","ds_list_select","m_regist");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_right1.form.sta_02_03_01_00_00","text","ds_list_select","grade_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_right2.form.cal_00","value","ds_out_select","date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_right2.form.cal_01","value","ds_out_select","date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.div_right2.form.txt_00","value","ds_out_select","행선지");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_right2.form.txt_01","value","ds_out_select","외출목적");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_right2.form.sta_04","text","ds_out_select","writer");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.form.div_right2.form.mae_01","value","ds_out_select","외출시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.div_right2.form.spn_01","value","ds_out_select","외출시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.div_right2.form.mae_01_00","value","ds_out_select","외출분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.div_right2.form.spn_02","value","ds_out_select","외출분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.div_right2.form.mae_01_01","value","ds_out_select","복귀시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.div_right2.form.spn_03","value","ds_out_select","복귀시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cont.form.div_right2.form.mae_01_02","value","ds_out_select","복귀분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_cont.form.div_right2.form.spn_04","value","ds_out_select","복귀분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.div_right2.form.txt_02_01","value","ds_out_select","보호자전화");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_cont.form.div_right2.form.txt_02_00","value","ds_out_select","보호자관계");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_cont.form.div_right2.form.txt_02","value","ds_out_select","보호자명");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_cont.form.div_right2.form.chk_00","value","ds_out_select","일반외출");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_cont.form.div_right2.form.chk_01","value","ds_out_select","외출시간공제");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00208.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00208.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00208.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00208
         * 화면명   	: 2-8 수급자 외출기록
         * 화면설명 	:
         * 작성일   	: 2022-06-15
         * 작성자   	: 성재영
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
        this.reSearchData = "";
        this.searchFlag = "";
        this.fileGroupId = "";
        this.grp_btns = [];
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.DAY00208_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e)

        	// 메인 그리드 설정
        	this.fn_setMainGrid();

        	// 아웃 그리드 설정
        	this.fn_setOutGrid();

        	// 버튼 그룹 입력
        	this.fn_make_grp_btns_array();

        	// 버튼 색 기본 설정
        	this.div_search.form.btn_grp_all.set_cssclass("btn_orange");
        	this.div_search.form.btn_grp_a.set_cssclass("btn_basic_gray");
        	this.div_search.form.btn_grp_b.set_cssclass("btn_basic_gray");
        	this.div_search.form.btn_grp_c.set_cssclass("btn_basic_gray");
        	this.div_search.form.btn_grp_d.set_cssclass("btn_basic_gray");
        	this.div_search.form.btn_grp_e.set_cssclass("btn_basic_gray");

        	// 조회
        	let nRow = this.ds_search.addRow();
        	let date = Sct.Util.today();
        	this.ds_search.setColumn(nRow, "SICODE", fv_sicode);
        	this.ds_search.setColumn(nRow, "M_GROUP", "전체");
        	this.ds_search.setColumn(nRow, "DATE", date);

        	this.fn_search();
        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 조회
        this.fn_search = function () {
        	//validation
        	if (!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00208.DAY00208_DS_LIST_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };
        // 저장
        this.fn_save = function () {
        	//validation
        	if (!this.fn_save_pre()) return;

        	const svcId = "save";
        	const params = "/DAY00208Controller.do";
        	const inDatasets = "input1=ds_out_select:U";
        	const outDatasets = "";
        	const argument = "method=save ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);

        }
        // 외출 정보 조회
        this.fn_search_out = function () {
        	//validation
        	if (!this.fn_search_pre()) return;

        	const svcId = "search_out";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search_out";
        	const outDatasets = "ds_out=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00208.DAY00208_DS_OUT_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 콜백 함수
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg){
        		if (nErrorCode == 0)
        		{
        			if (strSvcID == "search")
        			{
        				this.ds_list.set_rowposition(-1);

        			}
        			if (strSvcID == "search_out")
        			{
        				this.ds_out.set_rowposition(-1);
        			}
        			if (strSvcID == "save")
        			{
        				this.alert("저장되었습니다.")
        				this.fn_config();
        				this.fn_search_out();
        			}
        		}
        		else
        		{
        			this.alert(strErrorMsg);
        		}
        };
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
         // 조회 전 validation
        this.fn_search_pre = function (){
        	// 검색조건 필수 체크 (컴포넌트 tooltiptext 값 넣을 것)
        	if (!this.gfn_findSnull(this.div_search)) return false;

        	return true;
        };
        // 저장 전 Validation
        this.fn_save_pre = function ()
        {
        	if (Sct.Util.isEmpty(this.ds_out_select.getColumn(0, "외출구분")))
        	{
        		this.alert("외출구분을 체크해주세요.");
        		return false;
        	}

        	if (Sct.Util.isEmpty(this.ds_out_select.getColumn(0, "행선지")))
        	{
        		this.alert("행선지를 입력해주세요.");
        		return false;
        	}

        	if (Sct.Util.isEmpty(this.ds_out_select.getColumn(0, "외출목적")))
        	{
        		this.alert("외출목적을 입력해주세요.");
        		return false;
        	}

        	if (Sct.Util.isEmpty(this.ds_out_select.getColumn(0, "보호자명")))
        	{
        		this.alert("동행인을 입력해주세요.");
        		return false;
        	}

        	if (Sct.Util.isEmpty(this.ds_out_select.getColumn(0, "보호자관계")))
        	{
        		this.alert("관계를 입력해주세요.");
        		return false;
        	}

        	if (Sct.Util.isEmpty(this.ds_out_select.getColumn(0, "보호자전화")))
        	{
        		this.alert("연락처를 입력해주세요.");
        		return false;
        	}

        	if (Sct.Util.isEmpty(this.ds_out_select.getColumn(0, "writer")))
        	{
        		this.alert("작성자를 입력해주세요.");
        		return false;
        	}

        	this.ds_out_select.set_updatecontrol(false);
        	this.ds_out_select.setRowType(2);
        	this.ds_out_select.set_updatecontrol(true);

        	return true;
        };
        // 팝업 전 Validation
        this.fn_check = function ()
        {
        	if (this.ds_out_select.rowcount == 0) return true;
        	else {
        		return false;
        	}
        };
        /***********************************************************************
         * User Functions
         ***********************************************************************/
        // 메인 그리드 색 설정
        this.fn_setMainGrid = function()
        {
        	var grdMain = this.div_cont.form.div_left.form.grd_list;

        	var nameIdx = grdMain.getBindCellIndex("body","m_name");
        	var snmIdx = grdMain.getBindCellIndex("body","s_nm");

        	var nameCss = "expr:dataset.getColumn(currow,'sex_nm')=='남'?'cellBMan':'cellBWoman'";
        	var snmCss = "expr:dataset.getColumn(currow,'s_nm')=='퇴소자'?'cellBRetire':''";

        	grdMain.setCellProperty("body", nameIdx, "cssclass", nameCss);
        	grdMain.setCellProperty("body", snmIdx, "cssclass", snmCss);
        };
        // 외출 그리드 글자색 설정(안됨)
        this.fn_setOutGrid = function()
        {
        	var grdMain = this.div_cont.form.div_right3.form.grd_out;

        	var nameIdx = grdMain.getBindCellIndex("body","외출구분");

        	var nameCss = "expr:dataset.getColumn(currow,'외출구분')=='2'?'RedFontCell':''";

        	grdMain.setCellProperty("body", nameIdx, "cssclass", nameCss);

        };
        // 버튼 그룹 입력
        this.fn_make_grp_btns_array = function()
        {
        	var button_a = this.div_search.form.btn_grp_a;
        	var button_b = this.div_search.form.btn_grp_b;
        	var button_c = this.div_search.form.btn_grp_c;
        	var button_d = this.div_search.form.btn_grp_d;
        	var button_e = this.div_search.form.btn_grp_e;
        	var button_all = this.div_search.form.btn_grp_all;

        	this.grp_btns = [button_all,button_a,button_b,button_c,button_d,button_e];
        };
        //이미지 조회
        this.fn_getSignImage = function ()
        {
        	let imgUrl = "";
        	const fileGrp = this.ds_list_select.getColumn(0, "sajin");

        	if(!Sct.Util.isEmpty(fileGrp))
        	{
        		const webHost = nexacro.getEnvironment().services["svcurl"].url;
        		const path = "/FILES";
        		imgUrl = webHost + path + fileGrp;
        	}

        	this.div_cont.form.div_right1.form.imv_00.set_image(imgUrl);
        };
        // 외출 기록 입력 초기화
        this.fn_config = function ()
        {
        	this.ds_out_select.clearData();
        	this.ds_out_select.addRow();

        	let today = Sct.Util.today().substring(0,8);
        	this.ds_out_select.setColumn(0, "date", today);
        	this.ds_out_select.setColumn(0, "sicode", fv_sicode);
        	this.ds_out_select.setColumn(0, "거주자명", this.ds_list_select.getColumn(0, "m_name"));
        	this.ds_out_select.setColumn(0, "거주코드", this.ds_list_select.getColumn(0, "m_code"));

        	this.ds_out_select.setColumn(0, "확인담당", this.fv_staff_name);
        	this.ds_out_select.setColumn(0, "담당코드", this.fv_staff_id);
        	this.ds_out_select.setColumn(0, "writer", this.fv_staff_name + "/" + this.fv_staff_id);

        	this.ds_out_select.setColumn(0, "외출시", 0);
         	this.ds_out_select.setColumn(0, "외출분", 0);
         	this.ds_out_select.setColumn(0, "복귀시", 0);
         	this.ds_out_select.setColumn(0, "복귀분", 0);
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 조회 버튼 클릭
        this.div_search_btn_00_onclick = function(obj,e)
        {
        	this.fn_search();
        };
        // 저장버튼 클릭
        this.div_func_btn_01_onclick = function(obj,e)
        {
        	this.fn_save();
        };
        // 새로작성 버튼 클릭
        this.div_func_btn_00_onclick = function(obj,e)
        {
        	if (this.ds_list_select.rowcount == 0) {
        		this.alert("수급자를 선택해주세요");
        		return;
        	}
        	this.fn_config();
        };
        // 버튼 색 설정
        this.btn_group_onclick = function(obj,e)
        {
        	for (var i =0; i < this.grp_btns.length; i++) {
        		if (obj == this.grp_btns[i]) {
        			this.grp_btns[i].set_cssclass("btn_orange")
        		} else {
        			this.grp_btns[i].set_cssclass("btn_basic_gray");
        		}
        	}
        	// 선택된 버튼값 ds_search에 세팅
        	this.ds_search.setColumn(0,"M_GROUP", obj.text);	// A,B,C,D,E,전체 중 하나

        	this.fn_search();
        };
        // 그리드 내 이름 클릭 시 데이터 복사
        this.div_cont_div_left_grd_list_oncellclick = function(obj,e)
        {
        	let Idx = obj.getBindCellIndex("body", "m_name");

        	if (e.col == 2) {
        		this.ds_list_select.clearData();
        		let nRow = this.ds_list_select.addRow();
        		this.ds_list_select.copyRow(nRow, this.ds_list, e.row);

        		// 데이터 복사 시 사진 설정
        		this.fn_getSignImage();

        		// 우측 하단 그리드 조회
        		this.ds_search_out.clearData();
        		let mRow = this.ds_search_out.addRow();

        		this.ds_search_out.setColumn(mRow, "SICODE", fv_sicode);
        		this.ds_search_out.setColumn(mRow, "M_CODE", this.ds_list_select.getColumn(0, "m_code"));

        		this.fn_search_out();

        		// 외출기록 입력 초기화
        		this.fn_config();
        	}
        };
        // 시간 스핀
        this.div_cont_div_right2_spn_00_onspin = function(obj,e)
        {
        	let value1 = parseInt(this.ds_out_select.getColumn(0,"외출시"));
        	let value2 = parseInt(this.ds_out_select.getColumn(0,"외출분"));
        	let value3 = parseInt(this.ds_out_select.getColumn(0,"복귀시"));
        	let value4 = parseInt(this.ds_out_select.getColumn(0,"복귀분"));

        	switch(obj.id) {
        	case "spn_01":
        		if (e.up == true) {
        			this.ds_out_select.setColumn(0,"외출시", value1 + 1);
        		} else {
        			this.ds_out_select.setColumn(0,"외출시", value1 - 1);
        		}
        		break;
        	case "spn_02":
        		if (e.up == true) {
        			this.ds_out_select.setColumn(0,"외출분", value2 + 1);
        		} else {
        			this.ds_out_select.setColumn(0,"외출분", value2 - 1);
        		}
        		break;
        	case "spn_03":
        		if (e.up == true) {
        			this.ds_out_select.setColumn(0,"복귀시", value3 + 1);
        		} else {
        			this.ds_out_select.setColumn(0,"복귀시", value3 - 1);
        		}
        		break;
        	case "spn_04":
        		if (e.up == true) {
        			this.ds_out_select.setColumn(0,"복귀분", value4 + 1);
        		} else {
        			this.ds_out_select.setColumn(0,"복귀분", value4 - 1);
        		}
        		break;
        	default: break;
        	}
        };
        // 스핀 시간 값 제한 설정
        this.ds_out_select_oncolumnchanged = function(obj,e)
        {
        	let value1 = parseInt(this.ds_out_select.getColumn(0,"외출시"));
        	let value2 = parseInt(this.ds_out_select.getColumn(0,"외출분"));
        	let value3 = parseInt(this.ds_out_select.getColumn(0,"복귀시"));
        	let value4 = parseInt(this.ds_out_select.getColumn(0,"복귀분"));

        	if (value1 > 23) {
        		this.ds_out_select.setColumn(0, "외출시", 23);
        	}
        	if (value2 > 59) {
        		this.ds_out_select.setColumn(0, "외출분", 59);
        	}
        	if (value3 > 23) {
        		this.ds_out_select.setColumn(0, "복귀시", 23);
        	}
        	if (value4 > 59) {
        		this.ds_out_select.setColumn(0, "복귀분", 59);
        	}
        };
        // 체크박스 설정
        this.div_cont_div_right2_chk_onchanged = function(obj,e)
        {
        	switch(obj.id) {
        	case "chk_00":
        				this.ds_out_select.setColumn(0, "외출시간공제", 0);
        				this.ds_out_select.setColumn(0, "외출구분", 1);
        		break;
        	case "chk_01":
        				this.ds_out_select.setColumn(0, "일반외출", 0);
        				this.ds_out_select.setColumn(0, "외출구분", 2);
        		break;
        	default:
        	}
        };
        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 작성자 팝업
        this.div_cont_div_right2_btn_01_00_onclick = function(obj,e)
        {
        	if (this.fn_check()) {
        		return;
        	}
        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_out_select.getColumn(0, "date")
        	};

        	Sct.popup(this, "emp", 450, 400, "", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };
        // 동행인 팝업
        this.div_cont_div_right2_btn_00_onclick = function(obj,e)
        {
        	if (this.fn_check()) {
        		return;
        	}
        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_out_select.getColumn(0, "date")
        	};

        	Sct.popup(this, "emp_g", 450, 400, "", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };
        // 행선지 팝업
        this.div_cont_div_right2_btn_01_onclick = function(obj,e)
        {
        	if (this.fn_check()) {
        		return;
        	}
        	const param = {
        			SICODE : fv_sicode
        	};

        	Sct.popup(this, "dest", 450, 600, "", param, "DAY_POP::DAY00201_P08.xfdl", "fn_popCallback", true);
        };
        // 외출일 팝업
        this.div_cont_div_right3_grd_medi_oncellclick = function(obj,e)
        {
        	if (e.col == 0) {
        		const param = {
        			SICODE : fv_sicode
        		,	M_CODE : this.ds_out.getColumn(e.row, "거주코드")
        		,	M_NUM : this.ds_out.getColumn(e.row, "외출번호")
        		};

        	Sct.popup(this, "out", 450, 400, "", param, "DAY_POP::DAY00208_P02.xfdl", "fn_popCallback");
        	}
        };
        // 보호자동행 팝업
        this.div_cont_div_right2_btn_00_00_onclick = function(obj,e)
        {
        	if (this.fn_check()) {
        		return;
        	}
        	const param = {
        			SICODE : fv_sicode
        		,	M_CODE : this.ds_list_select.getColumn(0, "m_code")
        	};

        	Sct.popup(this, "guard", 450, 600, "", param, "DAY_POP::DAY00208_P01.xfdl", "fn_popCallback", true);
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
        				this.ds_out_select.setColumn(0, "확인담당", name);
        				this.ds_out_select.setColumn(0, "담당코드", staffid);
        				this.ds_out_select.setColumn(0, "writer", name + "/" + staffid);
        			}
        			else
        			{
        				this.ds_out_select.setColumn(0, "확인담당", "");
        				this.ds_out_select.setColumn(0, "담당코드", "");
        				this.ds_out_select.setColumn(0, "writer", "");
        			}
        			break;
        		case "emp_g" :
        		if (objDs.getColumn(0, "DEL") != "1")
        			{
        				const g_name = nexacro.trim(objDs.getColumn(0, "c_name"));
        				const g_job = objDs.getColumn(0, "담당직종");
        				const g_phone = objDs.getColumn(0, "c_phone1");
        				this.ds_out_select.setColumn(0, "보호자명", g_name);
        				this.ds_out_select.setColumn(0, "보호자관계", g_job);
        				this.ds_out_select.setColumn(0, "보호자전화", g_phone);
        			}
        			else
        			{
        				this.ds_out_select.setColumn(0, "보호자명", "");
        				this.ds_out_select.setColumn(0, "보호자관계", "");
        				this.ds_out_select.setColumn(0, "보호자전화", "");
        			}
        			break;
        		case "dest" :
        				const place = objDs.getColumn(0, "병의원명");
        				this.ds_out_select.setColumn(0, "행선지", place);
        			break;
        		case "out" :
        				this.fn_search_out();
        			break;
        		case "guard" :
        				const chkValue = objDs.getColumn(0, "chk");
        				if (chkValue == 1) {
        					this.ds_out_select.setColumn(0, "보호자명", objDs.getColumn(0, "m_conname"));
        					this.ds_out_select.setColumn(0, "보호자관계", objDs.getColumn(0, "m_conrele"));
        					this.ds_out_select.setColumn(0, "보호자전화", objDs.getColumn(0, "m_contel12"));
        				} else if (chkValue == 2) {
        					this.ds_out_select.setColumn(0, "보호자명", objDs.getColumn(0, "m_name1"));
        					this.ds_out_select.setColumn(0, "보호자관계", objDs.getColumn(0, "m_connect1"));
        					this.ds_out_select.setColumn(0, "보호자전화", objDs.getColumn(0, "m_phone12"));
        				} else if (chkValue == 3) {
        					this.ds_out_select.setColumn(0, "보호자명", objDs.getColumn(0, "m_name2"));
        					this.ds_out_select.setColumn(0, "보호자관계", objDs.getColumn(0, "m_connect2"));
        					this.ds_out_select.setColumn(0, "보호자전화", objDs.getColumn(0, "m_phone22"));
        				}
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DAY00208_onload,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("oncellclick",this.div_cont_div_left_grd_list_oncellclick,this);
            this.div_cont.form.div_right1.form.sta_00_01.addEventHandler("onclick",this.div_cont_div_right1_sta_00_01_onclick,this);
            this.div_cont.form.div_right3.form.grd_out.addEventHandler("oncellclick",this.div_cont_div_right3_grd_medi_oncellclick,this);
            this.div_cont.form.div_right2.form.cal_00.addEventHandler("onchanged",this.div_00_cal_00_onchanged,this);
            this.div_cont.form.div_right2.form.cal_01.addEventHandler("onchanged",this.div_00_cal_01_onchanged,this);
            this.div_cont.form.div_right2.form.btn_01.addEventHandler("onclick",this.div_cont_div_right2_btn_01_onclick,this);
            this.div_cont.form.div_right2.form.btn_01_00.addEventHandler("onclick",this.div_cont_div_right2_btn_01_00_onclick,this);
            this.div_cont.form.div_right2.form.spn_01.addEventHandler("onspin",this.div_cont_div_right2_spn_00_onspin,this);
            this.div_cont.form.div_right2.form.spn_02.addEventHandler("onspin",this.div_cont_div_right2_spn_00_onspin,this);
            this.div_cont.form.div_right2.form.spn_03.addEventHandler("onspin",this.div_cont_div_right2_spn_00_onspin,this);
            this.div_cont.form.div_right2.form.spn_04.addEventHandler("onspin",this.div_cont_div_right2_spn_00_onspin,this);
            this.div_cont.form.div_right2.form.chk_00.addEventHandler("onchanged",this.div_cont_div_right2_chk_onchanged,this);
            this.div_cont.form.div_right2.form.chk_01.addEventHandler("onchanged",this.div_cont_div_right2_chk_onchanged,this);
            this.div_cont.form.div_right2.form.btn_00.addEventHandler("onclick",this.div_cont_div_right2_btn_00_onclick,this);
            this.div_cont.form.div_right2.form.btn_00_00.addEventHandler("onclick",this.div_cont_div_right2_btn_00_00_onclick,this);
            this.div_search.form.btn_grp_all.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_search.form.btn_grp_a.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_search.form.btn_grp_b.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_search.form.btn_grp_c.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_search.form.btn_grp_d.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_search.form.btn_grp_e.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_search.form.btn_00.addEventHandler("onclick",this.div_search_btn_00_onclick,this);
            this.div_func.form.btn_00.addEventHandler("onclick",this.div_func_btn_00_onclick,this);
            this.div_func.form.btn_01.addEventHandler("onclick",this.div_func_btn_01_onclick,this);
            this.ds_out_select.addEventHandler("oncolumnchanged",this.ds_out_select_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00208.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
