(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00201");
            this.set_titletext("2-1 간호.투약전달기록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/><Column id=\"sex_nm\" type=\"STRING\" size=\"256\"/><Column id=\"grade_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"m_reday\" type=\"STRING\" size=\"256\"/><Column id=\"b_date\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"pr_nm\" type=\"STRING\" size=\"256\"/><Column id=\"pr_css\" type=\"STRING\" size=\"256\"/><Column id=\"move_cont\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"DATE\" size=\"256\"/><Column id=\"s_date\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"sign\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"STRING\" size=\"256\"/><Column id=\"date_to\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_person", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"sex_nm\" type=\"STRING\" size=\"256\"/><Column id=\"grade_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"m_reday\" type=\"STRING\" size=\"256\"/><Column id=\"b_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"nalja\" type=\"STRING\" size=\"256\"/><Column id=\"시작시간\" type=\"STRING\" size=\"256\"/><Column id=\"송영\" type=\"STRING\" size=\"256\"/><Column id=\"요양일지\" type=\"STRING\" size=\"256\"/><Column id=\"l_type_nm\" type=\"STRING\" size=\"256\"/><Column id=\"drugtime\" type=\"STRING\" size=\"256\"/><Column id=\"cret_type1\" type=\"STRING\" size=\"256\"/><Column id=\"cret_type2\" type=\"STRING\" size=\"256\"/><Column id=\"cret_kit\" type=\"STRING\" size=\"256\"/><Column id=\"eat_type_nm\" type=\"STRING\" size=\"256\"/><Column id=\"km_contents\" type=\"STRING\" size=\"256\"/><Column id=\"out_type1\" type=\"STRING\" size=\"256\"/><Column id=\"out_type2\" type=\"STRING\" size=\"256\"/><Column id=\"sore_exist1\" type=\"STRING\" size=\"256\"/><Column id=\"sore_exist2\" type=\"STRING\" size=\"256\"/><Column id=\"cret_exist\" type=\"STRING\" size=\"256\"/><Column id=\"tooth_type\" type=\"STRING\" size=\"256\"/><Column id=\"ke_contents\" type=\"STRING\" size=\"256\"/><Column id=\"약품명\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_nurse", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"n_code\" type=\"STRING\" size=\"256\"/><Column id=\"n_name\" type=\"STRING\" size=\"256\"/><Column id=\"n_number\" type=\"STRING\" size=\"256\"/><Column id=\"n_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"혈압1\" type=\"STRING\" size=\"256\"/><Column id=\"혈압2\" type=\"STRING\" size=\"256\"/><Column id=\"맥박\" type=\"STRING\" size=\"256\"/><Column id=\"혈당\" type=\"STRING\" size=\"256\"/><Column id=\"혈당2\" type=\"STRING\" size=\"256\"/><Column id=\"체온\" type=\"STRING\" size=\"256\"/><Column id=\"체온2\" type=\"STRING\" size=\"256\"/><Column id=\"체온3\" type=\"STRING\" size=\"256\"/><Column id=\"호흡\" type=\"STRING\" size=\"256\"/><Column id=\"체중\" type=\"STRING\" size=\"256\"/><Column id=\"기침\" type=\"STRING\" size=\"256\"/><Column id=\"인후통\" type=\"STRING\" size=\"256\"/><Column id=\"호흡곤란\" type=\"STRING\" size=\"256\"/><Column id=\"객담\" type=\"STRING\" size=\"256\"/><Column id=\"기타\" type=\"STRING\" size=\"256\"/><Column id=\"간호일지\" type=\"STRING\" size=\"256\"/><Column id=\"담당자\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dosage", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"donumber\" type=\"STRING\" size=\"256\"/><Column id=\"docode\" type=\"STRING\" size=\"256\"/><Column id=\"row_num\" type=\"STRING\" size=\"256\"/><Column id=\"투약종류\" type=\"STRING\" size=\"256\"/><Column id=\"투약담당\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드\" type=\"STRING\" size=\"256\"/><Column id=\"투약명\" type=\"STRING\" size=\"256\"/><Column id=\"투약방법\" type=\"STRING\" size=\"256\"/><Column id=\"투약량\" type=\"STRING\" size=\"256\"/><Column id=\"투약량_orig\" type=\"STRING\" size=\"256\"/><Column id=\"아침전\" type=\"STRING\" size=\"256\"/><Column id=\"아침후\" type=\"STRING\" size=\"256\"/><Column id=\"점심전\" type=\"STRING\" size=\"256\"/><Column id=\"점심후\" type=\"STRING\" size=\"256\"/><Column id=\"저녁전\" type=\"STRING\" size=\"256\"/><Column id=\"저녁후\" type=\"STRING\" size=\"256\"/><Column id=\"취침전\" type=\"STRING\" size=\"256\"/><Column id=\"필요시\" type=\"STRING\" size=\"256\"/><Column id=\"del\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nurse_prev", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"혈압1\" type=\"STRING\" size=\"256\"/><Column id=\"혈압2\" type=\"STRING\" size=\"256\"/><Column id=\"맥박\" type=\"STRING\" size=\"256\"/><Column id=\"혈당\" type=\"STRING\" size=\"256\"/><Column id=\"혈당2\" type=\"STRING\" size=\"256\"/><Column id=\"체온\" type=\"STRING\" size=\"256\"/><Column id=\"체온2\" type=\"STRING\" size=\"256\"/><Column id=\"체온3\" type=\"STRING\" size=\"256\"/><Column id=\"호흡\" type=\"STRING\" size=\"256\"/><Column id=\"체중\" type=\"STRING\" size=\"256\"/><Column id=\"간호일지\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dosage_head", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"donumber\" type=\"STRING\" size=\"256\"/><Column id=\"docode\" type=\"STRING\" size=\"256\"/><Column id=\"doname\" type=\"STRING\" size=\"256\"/><Column id=\"donalja\" type=\"STRING\" size=\"256\"/><Column id=\"투약시간\" type=\"STRING\" size=\"256\"/><Column id=\"투약종류\" type=\"STRING\" size=\"256\"/><Column id=\"투약담당\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delivery_time", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"drugtime\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dosage_head_prev", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"투약시간\" type=\"STRING\" size=\"256\"/><Column id=\"투약종류\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dosage_prev", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"row_num\" type=\"STRING\" size=\"256\"/><Column id=\"투약명\" type=\"STRING\" size=\"256\"/><Column id=\"투약방법\" type=\"STRING\" size=\"256\"/><Column id=\"투약량\" type=\"STRING\" size=\"256\"/><Column id=\"아침전\" type=\"STRING\" size=\"256\"/><Column id=\"아침후\" type=\"STRING\" size=\"256\"/><Column id=\"점심전\" type=\"STRING\" size=\"256\"/><Column id=\"점심후\" type=\"STRING\" size=\"256\"/><Column id=\"저녁전\" type=\"STRING\" size=\"256\"/><Column id=\"저녁후\" type=\"STRING\" size=\"256\"/><Column id=\"취침전\" type=\"STRING\" size=\"256\"/><Column id=\"필요시\" type=\"STRING\" size=\"256\"/><Column id=\"del\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0.00%","0%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_right","440","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_head","0","0","1440","40",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1","22","3","1403","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_m_name","107","7","81","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("1");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00","234","7","81","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("2");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_head1","20","3","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("3");
            obj.set_text("수급자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_head2","586","3","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("4");
            obj.set_text("생 활 실");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_head1_00","322","3","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("5");
            obj.set_text("성별.생일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_sex_nm","409","7","35","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("6");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_b_date","468","7","85","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("7");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_01","1020","3","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("8");
            obj.set_text("입.퇴소일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_01_00_00_00","810","3","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("9");
            obj.set_text("인정등급");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_grade_nm","897","7","84","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("10");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_roomname","673","7","132","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("11");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_enday","1110","7","94","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("12");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_group","195","7","20","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("13");
            obj.set_padding("0px");
            obj.set_text("A");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_reday","1220","7","114","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("14");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_color("red");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_slash","1206","7","20","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_head.form);
            obj.set_taborder("15");
            obj.set_text("/");
            this.div_cont.form.div_right.form.div_head.addChild(obj.name, obj);

            obj = new Div("div_down","0","511","1440","235",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_dosage","20","37","1404","198",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_dosage");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"350\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"40\"/><Column size=\"55\"/><Column size=\"40\"/><Column size=\"55\"/><Column size=\"40\"/><Column size=\"55\"/><Column size=\"40\"/><Column size=\"55\"/><Column size=\"40\"/><Column size=\"55\"/><Column size=\"40\"/><Column size=\"55\"/><Column size=\"40\"/><Column size=\"55\"/><Column size=\"40\"/><Column size=\"55\"/><Column size=\"40\"/><Column size=\"55\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"25\"/></Rows><Band id=\"head\"><Cell text=\"투약명\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"투약량\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"투약방법\" verticalAlign=\"middle\" textAlign=\"center\"/><Cell col=\"3\" colspan=\"2\" text=\"아침-전\" verticalAlign=\"middle\" textAlign=\"center\"/><Cell col=\"5\" colspan=\"2\" text=\"아침-후\" verticalAlign=\"middle\" textAlign=\"center\"/><Cell col=\"7\" colspan=\"2\" text=\"점심-전\" verticalAlign=\"middle\" textAlign=\"center\"/><Cell col=\"9\" colspan=\"2\" text=\"점심-후\" verticalAlign=\"middle\" textAlign=\"center\"/><Cell col=\"11\" colspan=\"2\" text=\"저녁-전\" verticalAlign=\"middle\" textAlign=\"center\"/><Cell col=\"13\" colspan=\"2\" text=\"저녁-후\" verticalAlign=\"middle\" textAlign=\"center\"/><Cell col=\"15\" colspan=\"2\" text=\"취침-전\" verticalAlign=\"middle\" textAlign=\"center\"/><Cell col=\"17\" colspan=\"2\" text=\"필요시\" verticalAlign=\"middle\" textAlign=\"center\"/><Cell col=\"19\" colspan=\"2\" text=\"지움\" verticalAlign=\"middle\" textAlign=\"center\"/></Band><Band id=\"body\"><Cell text=\"bind:투약명\" calendardateformat=\"yyyy.MM.dd\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:투약량\"/><Cell col=\"2\" text=\"bind:투약방법\"/><Cell col=\"3\" colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:아침전\"><Cell text=\"bind:아침전\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" padding=\"0px 0px 0px 25px\"/><Cell col=\"1\" text=\"투약\" textAlign=\"left\"/></Cell><Cell col=\"5\" colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:아침후\"><Cell text=\"bind:아침후\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" padding=\"0px 0px 0px 25px\"/><Cell col=\"1\" text=\"투약\" textAlign=\"left\"/></Cell><Cell col=\"7\" colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:점심전\"><Cell text=\"bind:점심전\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" padding=\"0px 0px 0px 25px\"/><Cell col=\"1\" text=\"투약\" textAlign=\"left\"/></Cell><Cell col=\"9\" colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:점심후\"><Cell text=\"bind:점심후\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" padding=\"0px 0px 0px 25px\"/><Cell col=\"1\" text=\"투약\" textAlign=\"left\"/></Cell><Cell col=\"11\" colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:저녁전\"><Cell text=\"bind:저녁전\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" padding=\"0px 0px 0px 25px\"/><Cell col=\"1\" text=\"투약\" textAlign=\"left\"/></Cell><Cell col=\"13\" colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:저녁후\"><Cell text=\"bind:저녁후\" color=\"darkgreen\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" padding=\"0px 0px 0px 25px\"/><Cell col=\"1\" text=\"투약\" textAlign=\"left\"/></Cell><Cell col=\"15\" colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:취침전\"><Cell text=\"bind:취침전\" color=\"deeppink\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" padding=\"0px 0px 0px 25px\"/><Cell col=\"1\" text=\"투약\" textAlign=\"left\"/></Cell><Cell col=\"17\" colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:필요시\"><Cell text=\"bind:필요시\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" padding=\"0px 0px 0px 25px\"/><Cell col=\"1\" text=\"투약\" textAlign=\"left\"/></Cell><Cell col=\"19\" colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:del\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" padding=\"0px 0px 0px 25px\" text=\"bind:del\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"지움\" textAlign=\"left\"/></Cell></Band></Format></Formats>");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00","20","0","1404","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_manager00_00","201","3","113","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("2");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_manager01","114","3","80","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("3");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Button("btn_med_manager","24","4","85","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("4");
            obj.set_text("투약전달");
            obj.set_cssclass("btn_worker");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Button("btn_bathlist00_00_00_00_00_00_00_00_00_00","899","4","170","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("5");
            obj.set_text("투약명 추가등록");
            obj.set_cssclass("btn_list");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Button("btn_all","1074","4","170","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("6");
            obj.set_text("복용약 불러오기");
            obj.set_cssclass("btn_search");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Button("btn_dosage_prev","1249","4","170","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("7");
            obj.set_text("전날투약기록");
            obj.set_cssclass("btn_search");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Button("btn_delivery","314","4","120","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("8");
            obj.set_text("전달시간확인");
            obj.set_cssclass("btn_search");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_delivery_original","439","4","455","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("10");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_delivery","439","4","455","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("9");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Div("div_main","0","44","1440","465",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("2");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_m_name_txt00_00_00_00_00_01_01_00","839","63","81","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("121");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","20","2","180","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("0");
            obj.set_text("간호.투약전달기록");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body8","20","30","678","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01","139","30","70","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("맥박(분)");
            obj.set_background("lightblue");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_date00","20","30","120","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("3");
            obj.set_text("혈압(mm/Hg)");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_background("lightblue");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body8_00","20","63","678","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_sugar1_la","208","30","70","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("혈당-①");
            obj.set_background("lightblue");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_sugar2_la","277","30","70","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("혈당-②");
            obj.set_background("lightblue");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_temp2_la","415","30","70","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("체온-②");
            obj.set_background("lightblue");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_temp1_la","346","30","70","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("체온-①");
            obj.set_background("lightblue");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_temp3_la","484","30","70","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("체온-③");
            obj.set_background("lightblue");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_breath_la","553","30","70","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("호흡(분)");
            obj.set_background("lightblue");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_weight_la","621","30","77","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("체중(kg)");
            obj.set_background("lightblue");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_slash","69","68","20","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("12");
            obj.set_text("/");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_m_name_txt00_00_00_00","139","63","70","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("13");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_m_name_txt00_00_00_00_00","208","63","70","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("14");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_m_name_txt00_00_00_00_00_00","277","63","70","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("15");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_m_name_txt00_00_00_00_00_01","346","63","70","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("16");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_m_name_txt00_00_00_00_00_01_00","415","63","70","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("17");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_m_name_txt00_00_00_00_00_01_00_00","484","63","70","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("18");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_m_name_txt00_00_00_00_00_01_00_00_00","553","63","70","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("19");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_m_name_txt00_00_00_00_00_01_00_00_00_00","621","63","77","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("20");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_weight","637","68","46","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("21");
            obj.set_format("###.#");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_blood1","31","68","40","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("22");
            obj.set_limitbymask("both");
            obj.set_format("###");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_blood2","88","68","40","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("23");
            obj.set_limitbymask("both");
            obj.set_format("###");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_pulse","154","68","40","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("24");
            obj.set_limitbymask("both");
            obj.set_format("###");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_sugar1","223","68","40","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("25");
            obj.set_limitbymask("both");
            obj.set_format("###");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_sugar2","292","68","40","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("26");
            obj.set_limitbymask("both");
            obj.set_format("###");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_temp1","361","68","40","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("27");
            obj.set_limitbymask("both");
            obj.set_format("##.#");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_temp2","430","68","40","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("28");
            obj.set_limitbymask("both");
            obj.set_format("##.#");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_temp3","499","68","40","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("29");
            obj.set_limitbymask("both");
            obj.set_format("##.#");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_breath","568","68","40","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("30");
            obj.set_limitbymask("both");
            obj.set_format("###");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body10","20","96","678","177",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_content","63","100","631","169",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("32");
            obj.set_maxlength("500");
            obj.set_wordWrap("char");
            obj.set_scrollbartype("fixed");
            obj.set_scrolltype("vertical");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_journal","20","96","40","177",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("간\r\n호\r\n일\r\n지");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body10_00","20","305","678","160",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_content00","63","309","631","152",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("35");
            obj.set_maxlength("500");
            obj.set_wordWrap("char");
            obj.set_scrollbartype("fixed");
            obj.set_scrolltype("vertical");
            obj.set_readonly("true");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_journal00","20","305","40","160",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("요\r\n양\r\n일\r\n지");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1","20","272","678","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_nurse_manager","24","276","85","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("38");
            obj.set_text("간호담당");
            obj.set_cssclass("btn_worker");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_manager","114","275","80","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("39");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_manager00","201","275","103","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("40");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00","702","30","70","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("기침");
            obj.set_background("lightblue");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_sugar1_la00","771","30","70","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("인후통");
            obj.set_background("lightblue");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_sugar2_la00","840","30","80","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("호흡곤란");
            obj.set_background("lightblue");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_temp1_la00","919","30","70","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("객담");
            obj.set_background("lightblue");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_temp2_la00","988","30","257","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("기타");
            obj.set_background("lightblue");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_m_name_txt00_00_00_00_01","702","63","70","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("46");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_m_name_txt00_00_00_00_00_02","771","63","70","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("47");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_m_name_txt00_00_00_00_00_01_01","919","63","70","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("48");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_m_name_txt00_00_00_00_00_01_00_01","988","63","257","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("49");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_1","717","68","38","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("50");
            obj.set_text("유");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_1_00","787","68","38","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("51");
            obj.set_text("유");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_1_01","862","68","38","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("52");
            obj.set_text("유");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_1_02","935","68","38","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("53");
            obj.set_text("유");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_01","702","100","543","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00","702","100","110","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("식사종류");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00","702","133","543","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00","702","133","110","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("비위관");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_00","702","166","543","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_00","702","166","110","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("뇨의.변의장애");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_01","702","199","543","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_01","702","199","110","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("배설보조기구");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_02","702","232","543","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_02","702","232","110","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("진료기록");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_02_00","702","265","543","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_02_00","702","265","110","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("외출기록");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_02_01","702","298","543","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_02_01","702","298","110","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("자세.욕창");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_02_02","702","331","543","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_02_02","702","331","110","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("배설간호");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_02_03","702","364","543","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_02_03","702","364","110","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("상비약품");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_02_03_00","702","397","543","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_02_03_00","702","397","110","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("구강간호");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_02_03_01","702","430","543","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_02_03_01","702","430","110","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("응급상황");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_00","993","68","247","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("76");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_roomname","815","104","130","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("77");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_text("유동(미음) ½미만");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_roomname00","948","104","168","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("78");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_text("일반식");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_roomname00_00","1120","104","120","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("79");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_text("송영 : 08:20-17:30");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_background("lightblue");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_roomname01","813","137","112","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("80");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_03","948","133","110","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("도뇨관");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_roomname01_00","1061","138","112","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("82");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_roomname01_01","815","170","130","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("83");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_text("있다");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_roomname01_01_00","948","170","130","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("84");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_text("있다");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_roomname01_01_01","813","203","172","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("85");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_text("도뇨관+기저귀");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_roomname01_01_01_00","813","236","322","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("86");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_roomname01_01_01_00_00","813","269","322","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("87");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_roomname01_01_01_00_00_00","815","302","130","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("88");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_roomname01_01_01_00_00_00_00","813","335","152","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("89");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_roomname01_01_01_00_00_00_01","813","367","252","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("90");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_roomname01_01_01_00_00_00_01_00","813","401","252","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("91");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_color("red");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_roomname01_01_01_00_00_00_01_00_00","813","435","322","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("92");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_color("red");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_02_03_01_00","1244","430","180","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_02_03_00_00","1244","397","180","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_02_03_02","1244","364","180","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_02_02_00","1244","331","180","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_02_01_00","1244","298","180","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_02_00_00","1244","265","180","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_02_04","1244","232","180","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_01_00","1244","199","180","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_00_00","1244","166","180","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("101");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_00_00_00","1244","63","180","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_01_00_00","1244","100","180","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("103");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_02_04_00","1244","133","180","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("104");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_vital","1249","68","170","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("105");
            obj.set_text("일 바이탈기록");
            obj.set_cssclass("btn_list");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_bathlist00_00_00_00_00_00_00","1249","104","170","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("106");
            obj.set_text("식사도움기록");
            obj.set_cssclass("btn_list");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_bathlist00_00_00_00_00_00_00_00_00_00_00","1249","170","170","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("107");
            obj.set_text("수급자상태설정");
            obj.set_cssclass("btn_list");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_bathlist00_00","1249","236","170","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("108");
            obj.set_text("진료기록입력");
            obj.set_cssclass("btn_list");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_bathlist00_00_00","1249","269","170","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("109");
            obj.set_text("외출기록입력");
            obj.set_cssclass("btn_list");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_bathlist00_00_00_00","1249","302","170","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("110");
            obj.set_text("욕창간호기록");
            obj.set_cssclass("btn_list");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_bathlist00_00_00_00_00","1249","335","170","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("111");
            obj.set_text("배설간호");
            obj.set_cssclass("btn_list");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_bathlist00_00_00_00_00_00_00_00","1249","368","170","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("112");
            obj.set_text("상비약제공기록");
            obj.set_cssclass("btn_list");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_bathlist00_00_00_00_00_00_00_00_00","1249","401","170","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("113");
            obj.set_text("월별구강간호");
            obj.set_cssclass("btn_list");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_bathlist00_00_00_00_00_00","1070","401","170","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("114");
            obj.set_text("구강간호(월1회)");
            obj.set_cssclass("btn_list");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_emerg","1249","434","170","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("115");
            obj.set_text("응급상황기록");
            obj.set_cssclass("btn_list");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_01_00_01","1244","30","180","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("116");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_roomname01_01_01_00_00_00_02","948","302","130","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("117");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_manager00_00","311","275","113","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("118");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_prev","429","276","120","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("119");
            obj.set_text("전날간호기록");
            obj.set_cssclass("btn_search");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_nurse_search","554","276","140","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("120");
            obj.set_text("간호일지내용검색");
            obj.set_cssclass("btn_search");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","440","750",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","40","3","400",null,null,"0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"48\"/><Column size=\"60\"/><Column size=\"84\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"현황\"/><Cell col=\"1\" text=\"그룹\"/><Cell col=\"2\" text=\"수급자명\"/><Cell col=\"3\" text=\"성별\"/><Cell col=\"4\" text=\"등급\"/><Cell col=\"5\" text=\"생활실\"/><Cell col=\"6\" text=\"구분\"/></Band><Band id=\"body\"><Cell text=\"bind:s_nm\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:m_group\" combodataset=\"ds_tp\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"2\" text=\"bind:m_name\" textAlign=\"center\" cssclass=\"cellBWoman\" cursor=\"pointer\" expandchar=\"dot\"/><Cell col=\"3\" text=\"bind:sex_nm\"/><Cell col=\"4\" text=\"bind:grade_nm\"/><Cell col=\"5\" text=\"bind:m_roomname\"/><Cell col=\"6\" text=\"bind:pr_nm\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_A","10","47","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_text("A");
            obj.set_visible("true");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_B","10","80","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("2");
            obj.set_text("B");
            obj.set_visible("true");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_C","10","113","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("3");
            obj.set_text("C");
            obj.set_visible("true");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_D","10","146","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("4");
            obj.set_text("D");
            obj.set_visible("true");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_E","10","179","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("5");
            obj.set_text("E");
            obj.set_visible("true");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_F","10","212","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("6");
            obj.set_text("F");
            obj.set_visible("true");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_G","10","245","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("7");
            obj.set_text("G");
            obj.set_visible("true");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_H","10","278","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("8");
            obj.set_text("H");
            obj.set_visible("true");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_I","10","311","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("9");
            obj.set_text("I");
            obj.set_visible("true");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_J","10","344","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("10");
            obj.set_text("J");
            obj.set_visible("true");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_K","10","377","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("11");
            obj.set_text("K");
            obj.set_visible("true");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_L","10","410","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("12");
            obj.set_text("L");
            obj.set_visible("true");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_P","10","542","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("13");
            obj.set_text("P");
            obj.set_visible("true");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_O","10","509","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("14");
            obj.set_text("O");
            obj.set_visible("true");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_N","10","476","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("15");
            obj.set_text("N");
            obj.set_visible("true");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_M","10","443","25","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("16");
            obj.set_text("M");
            obj.set_visible("true");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_ALL","10","3","25","40",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("17");
            obj.set_text("전\r\n체");
            obj.set_visible("true");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_func","520","0","1350","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_sign","350","7","85","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("결재란표시");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report1","440","7","150","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("건강상태기록지");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report2","595","7","150","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("코로나-19 문진표");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_save","1275","7","70","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_corona","750","7","170","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("4");
            obj.set_text("코로나19 임상증상기록");
            obj.set_cssclass("btn_list");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_bathlist00","925","7","170","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("5");
            obj.set_text("종사자 검사관리대장");
            obj.set_cssclass("btn_list");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_bathlist00_00","1100","7","170","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("6");
            obj.set_text("종사자 건강모니터링");
            obj.set_cssclass("btn_list");
            this.div_func.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","440","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
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
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_cont.form.div_right.form.div_head.form.sta_m_name","text","ds_person","m_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_right.form.div_head.form.sta_sex_nm","text","ds_person","sex_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_right.form.div_head.form.sta_roomname","text","ds_person","m_roomname");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.div_right.form.div_head.form.sta_grade_nm","text","ds_person","grade_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_cont.form.div_right.form.div_head.form.sta_enday","text","ds_person","m_enday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.div_head.form.sta_b_date","text","ds_person","b_date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_func.form.chk_sign","value","ds_report","sign");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_date","value","ds_search","s_date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.cal_date_pic","value","ds_search","s_date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_right.form.div_head.form.sta_group","text","ds_person","m_group");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_right.form.sta_body1_00_00_00_00","text","ds_data","jumin");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_right.form.div_head.form.sta_reday","text","ds_person","m_reday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right.form.div_main.form.mae_weight","value","ds_nurse","체중");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.div_right.form.div_main.form.mae_blood1","value","ds_nurse","혈압1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_right.form.div_main.form.mae_blood2","value","ds_nurse","혈압2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_right.form.div_main.form.mae_pulse","value","ds_nurse","맥박");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.div_right.form.div_main.form.mae_sugar1","value","ds_nurse","혈당");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.form.div_right.form.div_main.form.mae_sugar2","value","ds_nurse","혈당2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.div_right.form.div_main.form.mae_temp1","value","ds_nurse","체온");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.div_right.form.div_main.form.mae_temp2","value","ds_nurse","체온2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.div_right.form.div_main.form.mae_temp3","value","ds_nurse","체온3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.div_right.form.div_main.form.mae_breath","value","ds_nurse","호흡");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cont.form.div_right.form.div_main.form.txt_content","value","ds_nurse","간호일지");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_cont.form.div_right.form.div_main.form.txt_content00","value","ds_detail","요양일지");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_right.form.div_main.form.sta_manager","text","ds_nurse","담당자");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_cont.form.sta_manager00","text","ds_list","담당코드");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_cont.form.div_right.form.div_main.form.sta_manager00","text","ds_nurse","담당코드");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_cont.form.div_right.form.div_down.form.sta_manager00_00","text","ds_dosage_head","담당코드");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_cont.form.div_right.form.div_down.form.sta_manager01","text","ds_dosage_head","투약담당");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right.form.div_main.form.edt_00","value","ds_nurse","기타");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_cont.form.div_right.form.div_main.form.sta_roomname","text","ds_detail","l_type_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.div_right.form.div_main.form.sta_roomname00","text","ds_detail","eat_type_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_cont.form.div_right.form.div_main.form.sta_roomname00_00","text","ds_detail","송영");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.div_right.form.div_main.form.sta_roomname01","text","ds_detail","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.div_right.form.div_main.form.sta_roomname01_00","text","ds_detail","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cont.form.div_right.form.div_main.form.sta_roomname01_01","text","ds_detail","cret_type1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_cont.form.div_right.form.div_main.form.sta_roomname01_01_00","text","ds_detail","cret_type2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_cont.form.div_right.form.div_main.form.sta_roomname01_01_01","text","ds_detail","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_cont.form.div_right.form.div_main.form.sta_roomname01_01_01_00_00_00_01_00_00","text","ds_detail","ke_contents");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cont.form.div_right.form.div_main.form.sta_roomname01_01_01_00_00_00_01_00","text","ds_detail","tooth_type");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_cont.form.div_right.form.div_main.form.sta_roomname01_01_01_00_00_00_01","text","ds_detail","약품명");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_cont.form.div_right.form.div_main.form.sta_roomname01_01_01_00_00_00_00","text","ds_detail","cret_exist");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_cont.form.div_right.form.div_main.form.sta_roomname01_01_01_00_00_00","text","ds_detail","sore_exist2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_cont.form.div_right.form.div_main.form.sta_roomname01_01_01_00_00","text","ds_detail","out_type1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_cont.form.div_right.form.div_main.form.sta_roomname01_01_01_00","text","ds_detail","km_contents");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_cont.form.div_right.form.div_main.form.sta_roomname01_01_01_00_00_00_02","text","ds_detail","sore_exist1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_cont.form.div_right.form.div_head.form.sta_body1_00_00","text","ds_person","m_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_cont.form.div_right.form.div_main.form.sta_manager00_00","text","ds_nurse","n_number");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_cont.form.div_right.form.div_main.form.chk_1","value","ds_nurse","기침");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_cont.form.div_right.form.div_main.form.chk_1_00","value","ds_nurse","인후통");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_cont.form.div_right.form.div_main.form.chk_1_01","value","ds_nurse","호흡곤란");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_cont.form.div_right.form.div_main.form.chk_1_02","value","ds_nurse","객담");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_cont.form.div_right.form.div_down.form.edt_delivery_original","value","ds_dosage_head","투약시간");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_cont.form.div_right.form.div_down.form.edt_delivery","value","ds_dosage_head","투약시간");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00201.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00201.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00201.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00201
         * 화면명   	: 2-1 간호.투약전달기록
         * 화면설명 	:
         * 작성일   	: 2022-06-14
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
        this.fv_staff_id = nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid");
        this.fv_staff_name = nexacro.trim(nexacro.getApplication().gds_userInfo.getColumn(0, "c_name"));
        this.reSearchData = "";
        this.searchFlag = "";
        this.fileGroupId = "";
        this.grp_btns = [];	// 그룹 버튼 A,B,C,D,E,전체 배열
        this.reSearchCode = ""; // 선택한 수급자 row
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 그리드 설정
        	this.fn_setMainGrid();
        	//this.fn_setDetailGrid();
        	this.fn_setDosageGrid();

        	// 리포트 출력 초기화
        	this.ds_report.setColumn(0, "sign", 1);

        	// 검색조건 세팅
        	var today = Sct.Util.getToday();

        	this.ds_search.setColumn(0, "sicode", fv_sicode);
        	this.ds_search.setColumn(0, "s_date", today);
        	this.ds_search.setColumn(0, "date", today);

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
        	var prnmIdx = grdMain.getBindCellIndex("body", "pr_nm"); // 구분

        	var nameCss = "expr:dataset.getColumn(currow,'sex_nm')=='남'?'cellBMan':'cellBWoman'";
        	var snmCss = "expr:dataset.getColumn(currow,'s_nm')=='퇴소자'?'cellBRetire':''";
        	var prnmCss = "expr:dataset.getColumn(currow, 'pr_css') == '1' ? 'cellBRetire' : dataset.getColumn(currow, 'pr_css') == '2' ? 'cellBRetireFontRed' : dataset.getColumn(currow, 'pr_css') == '3' ? 'RedFontCell' : ''";

        	grdMain.setCellProperty("body", nameIdx, "cssclass", nameCss);
        	grdMain.setCellProperty("body", snmIdx, "cssclass", snmCss);

        	/* pr_css가 1 : 미이용 + 주간 -> 백그라운드
        				2 : 미미용 + 주단,단기 -> 백그라운드 + 컬러
        				3 : 단기,주단 -> 컬러
        				0 : 주간 -> X
        	*/
         	// 미이용 백그라운드 설정
        	const moveArr = ["m_group", "sex_nm", "grade_nm", "m_roomname", "pr_nm"];
        	for (let i = 0; i < moveArr.length; i++)
        	{
        		const moveIdx = grdMain.getBindCellIndex("body", moveArr[i]);
        		const moveCss = "expr:dataset.getColumn(currow, 'move_cont') != '' ? 'cellBRetire' : ''";

        		grdMain.setCellProperty("body", moveIdx, "cssclass", moveCss);
        	}

        	grdMain.setCellProperty("body", prnmIdx, "cssclass", prnmCss);
        }

        this.fn_setDetailGrid = function()
        {
        	var grdDetail = this.div_cont.form.div_right.form.div_down.form.grd_detail;

        	var allDayzIdx = grdDetail.getBindCellIndex("body","all_dayz");
        	var weekCss = "expr:week=='7'?'BlueFontCell':week=='1'?'RedFontCell':''";

        	grdDetail.setCellProperty("body", allDayzIdx, "cssclass", weekCss);
        }

        this.fn_setDosageGrid = function()
        {
        	// 지움 체크시 색깔 표시
        	var grdDosage = this.div_cont.form.div_right.form.div_down.form.grd_dosage;
        	const delArr = ["투약명", "투약량", "투약방법"];

        	for (let i = 0; i < delArr.length; i++)
        	{
        		const delIdx = grdDosage.getBindCellIndex("body", delArr[i]);
        		const delCss = "expr:dataset.getColumn(currow, 'del') == '1' ? 'CellBa9a9a9' : ''";

        		grdDosage.setCellProperty("body", delIdx, "cssclass", delCss);
        	}

        	// 투약 체크시 색깔 표시
        	const selArr = ["아침전", "아침후", "점심전", "점심후", "저녁전", "저녁후", "취침전", "필요시"];

        	for (let i = 0; i < selArr.length; i++)
        	{
        		const selIdx = grdDosage.getBindCellIndex("body", selArr[i]);
        		const selCss = "expr:dataset.getColumn(currow, '" + selArr[i] + "') == '1' ? 'chk' : ''";

        		grdDosage.setCellProperty("body", selIdx, "cssclass", selCss);
        	}
        }

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

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	return true;
        };

        this.fn_searchDetail_pre = function()
        {
        	this.ds_delivery_time.clearData();

        	return true;
        }

        this.fn_save_pre = function()
        {

        	if (!Sct.Grid.hasUpdatedRow(this.ds_nurse) && !Sct.Grid.hasInsertedRow(this.ds_nurse) &&
        		!Sct.Grid.hasUpdatedRow(this.ds_dosage_head) && !Sct.Grid.hasInsertedRow(this.ds_dosage_head) &&
        		!Sct.Grid.hasUpdatedRow(this.ds_dosage) && !Sct.Grid.hasInsertedRow(this.ds_dosage)
        	) {
        		alert("저장할 항목이 없습니다.");
        		return "STOP";
        	}

        	// 투약행이 0일 경우는 ds_nurse만 기준으로 변경여부 판단
        	if (this.ds_dosage.rowcount==0) {
        		if (!Sct.Grid.hasUpdatedRow(this.ds_nurse) && !Sct.Grid.hasInsertedRow(this.ds_nurse)) {
        			alert("저장할 항목이 없습니다.");
        			return "STOP";
        		}
        	}

        	// 작성자가 지정되지 않은 경우
        	if (!Sct.Util.isEmpty(this.ds_nurse.getColumn(0,"간호일지")) && Sct.Util.isEmpty(this.ds_nurse.getColumn(0, "담당코드")))
        	{
        		this.alert("간호일지 작성자를 지정하세요.");
        		return "STOP";
        	}

        	// kmnurse
        	var nurse_flag = "";
        	if (this.ds_nurse.getColumn(0,"n_number")=="")	{	// 테이블에 해당 날짜와 수급자로 데이터 없는 경우
        		if (this.ds_nurse.getRowType(0)==Dataset.ROWTYPE_UPDATE) {	// 변경 O
        			nurse_flag = "I";	// INSERT
        		}
        	} else {	// 테이블 해당 날짜와 수급자로 데이터가 존재해서 가져온 경우
        		if (this.ds_nurse.getRowType(0)==Dataset.ROWTYPE_UPDATE) {	// 변경 O
        			nurse_flag = "U";	// UPDATE
        		}
        	}
        	if (nurse_flag=="") nurse_flag="N";	// I나 U가 아닌 경우 N으로 NO CHANGE

        	// kmdosage
        	var dosage_flag = "";
        	var chkSum = this.ds_dosage.getSum("del");	// 삭제 선택 개수
        	var donumber = this.ds_dosage_head.getColumn(0,"donumber");

        	if (donumber=="") {	// kmdosage 테이블에 해당 날짜와 수급자로 데이터 없는 경우
        		if (this.ds_dosage.rowcount-chkSum>0) {
        			dosage_flag = "I";
        		} else { // 투약 그리드 행개수 0
        			dosage_flag = "N";
        		}
        	} else {	// kmdosage 테이블에 데이터가 있고 가져온 경우
        		if (this.ds_dosage.rowcount-chkSum==0) {	// 투약행이 0개가 될 예정
        			dosage_flag = "D";	// DELETE
        		} else {	// 투약행이 1개 이상
        			if (this.ds_dosage_head.getRowType(0)==Dataset.ROWTYPE_NORMAL &&
        				!Sct.Grid.hasUpdatedRow(this.ds_dosage) &&
        				!Sct.Grid.hasInsertedRow(this.ds_dosage)) {	// kmdosage 테이블에서 가져온 정보에 전혀 변경이 없는 경우

        				dosage_flag = "N";	// NO CHANGE
        			} else { // 변경이 있는 경우
        				dosage_flag = "U";	// DELETE + INSERT
        			}
        		}
        	}


        	// 지움 체크행 삭제
        	for (var i=this.ds_dosage.rowcount-1; i>=0; i--) {
        		if (this.ds_dosage.getColumn(i,"del") == 1) {
        			this.ds_dosage.deleteRow(i);
        		}
        	}
        	this.ds_dosage_head.setColumn(0,"투약종류", this.ds_dosage.rowcount);

        	return nurse_flag + dosage_flag;
        }

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //조회
        this.fn_search = function (flag)
        {
        	//validation
        	if (!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00201.DAY00201_DS_LIST_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //
        this.fn_person = function ()
        {
        	var hrow = this.ds_list.rowposition;
        	this.ds_person.clearData();
        	this.ds_person.addRow();
        	this.ds_person.copyRow(0, this.ds_list, hrow);
        };


        this.fn_searchDetail = function ()
        {
        	if (!this.fn_searchDetail_pre()) return;

        	const svcId = "searchDetail";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search input2=ds_search input3=ds_search input4=ds_search";
        	const outDatasets = "ds_nurse=output1 ds_detail=output2 ds_dosage_head=output3 ds_dosage=output4";
        	const argument = "method=getList "
        				   + "sqlId='DAY00201.DAY00201_DS_NURSE_S DAY00201.DAY00201_DS_DETAIL_S DAY00201.DAY00201_DS_DOSAGE_HEAD_S DAY00201.DAY00201_DS_DOSAGE_S' "

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.fn_save = function()
        {
        	// validation + 플래그 반환
        	var flag = this.fn_save_pre();
        	if (flag=="STOP") { // 메세지 처리했으므로 바로 중단
        		return;
        	} else if (flag=="NN") {
        		alert("저장할 항목이 없습니다.");
        		return;
        	}

        	const svcId = "save";
        	const params = "/DAY00201Controller.do";
        	const inDatasets = "input1=ds_nurse input2=ds_dosage_head input3=ds_dosage";
        	const outDatasets = "";
        	const argument = "method=save "
        					+ "flag=" + flag + " ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 전날간호기록
        this.fn_nursePrev = function()
        {
        	const svcId = "nursePrev";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_nurse_prev=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00201.DAY00201_DS_NURSE_PREV_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        }

        // 전날투약기록
        this.fn_dosagePrev = function()
        {
        	const svcId = "dosagePrev";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search input2=ds_search";
        	const outDatasets = "ds_dosage_head_prev=output1 ds_dosage_prev=output2";
        	const argument = "method=getList "
        				   + "sqlId='DAY00201.DAY00201_DS_DOSAGE_HEAD_PREV_S DAY00201.DAY00201_DS_DOSAGE_PREV_S'";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        }


        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if (strSvcID == "search")
        		{
        			var m_code = this.ds_search.getColumn(0,"m_code");
        			if (m_code == "" || m_code == null) {
        				this.ds_list.set_rowposition(-1);
        				trace("m_code: '' or null");
        			} else {
        				var hrow = this.ds_list.findRow("m_code", m_code);
        				trace("hrow: " + hrow);
        				if (hrow > -1) {
        					this.ds_list.set_rowposition(hrow);
        					this.fn_person();
        					this.fn_searchDetail();
        				} else {
        					this.ds_list.set_rowposition(-1);
        				}
        			}

        		}
        		else if (strSvcID == "searchDetail")
        		{	// kmnurse 테이블에 해당 날짜와 수급자로 검색 정보가 없을 시
        			// 값 입력할 수 있도록 기본값 세팅 & 초기행 상태로
        			if (this.ds_nurse.rowcount==0) {
        				this.ds_nurse.addRow();
        				this.ds_nurse.setColumn(0,"sicode", fv_sicode);
        				this.ds_nurse.setColumn(0,"n_code", this.ds_search.getColumn(0,"m_code"));
        				this.ds_nurse.setColumn(0,"n_name", this.ds_person.getColumn(0,"m_name"));
        				this.ds_nurse.setColumn(0,"n_nalja", this.ds_search.getColumn(0,"s_date"));
        				this.ds_nurse.setColumn(0,"담당코드", this.fv_staff_id);
        				this.ds_nurse.setColumn(0,"담당자", this.fv_staff_name);
        				this.ds_nurse.setColumn(0,"n_number", "");
        				this.ds_nurse.set_updatecontrol(false);
        				this.ds_nurse.setRowType(0, Dataset.ROWTYPE_NORMAL);
        				this.ds_nurse.set_updatecontrol(true);
        			}
        			// kmdosage 테이블에 해당 날짜와 수급자로 검색 정보가 없을 시
        			// 값 입력할 수 있도록 기본값 세팅 & 초기행 상태로
        			if (this.ds_dosage_head.rowcount==0) {
        				this.ds_dosage_head.addRow();
        				this.ds_dosage_head.setColumn(0,"sicode", fv_sicode);
        				this.ds_dosage_head.setColumn(0,"docode", this.ds_search.getColumn(0,"m_code"));
        				this.ds_dosage_head.setColumn(0,"doname", this.ds_person.getColumn(0,"m_name"));
        				this.ds_dosage_head.setColumn(0,"donalja", this.ds_search.getColumn(0,"s_date"));
        				this.ds_dosage_head.setColumn(0,"담당코드", this.fv_staff_id);
        				this.ds_dosage_head.setColumn(0,"투약담당", this.fv_staff_name);
        				this.ds_dosage_head.setColumn(0,"donumber", "");
        				this.ds_dosage_head.set_updatecontrol(false);
        				this.ds_dosage_head.setRowType(0, Dataset.ROWTYPE_NORMAL);
        				this.ds_dosage_head.set_updatecontrol(true);
        			}
        		}
        		else if (strSvcID == "save")
        		{
        			alert("간호기록 저장완료");
        			this.fn_searchDetail();
        		}
        		else if (strSvcID == "nursePrev")
        		{
        			this.ds_nurse.copyRow(0, this.ds_nurse_prev, 0);
        		}
        		else if (strSvcID == "dosagePrev")
        		{
        			this.ds_dosage_head.copyRow(0, this.ds_dosage_head_prev, 0);

        			this.ds_dosage.clearData();
        			for(var i=0; i<this.ds_dosage_prev.rowcount; i++) {
        				var hrow = this.ds_dosage.addRow();
        				this.ds_dosage.copyRow(i, this.ds_dosage_prev, hrow);
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

        	this.div_cont.form.div_right.form.div_head.form.imv_pic.set_image(imgUrl);
        };

        // 작업후 작업 정보 조회
        this.fn_findMstRow = function(fv_saveRefNo) {
        	const sFindRow = this.ds_list.findRow("m_code", fv_saveRefNo);
        	if (sFindRow > -1) {
        		this.ds_list.set_rowposition(sFindRow);
        		this.fn_datasearch();
        	}

        	return sFindRow;
        };

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
         // 일 바이탈기록 팝업
        this.btn_vital_onclick = function(obj,e)
        {
        	const param = {
        			SICODE : this.ds_search.getColumn(0, "sicode")
        		,	S_DATE : this.ds_search.getColumn(0, "s_date")
        	};
        	Sct.popup(this, "vital", 450, 400, "", param, "DAY_POP::DAY00201_P06.xfdl", "fn_popCallback");
        };

        // 응급상황기록 팝업
        this.btn_emerg_onclick = function(obj,e)
        {
        	if (this.ds_person.rowcount < 1) {
        		alert("수급자를 지정하세요.");
        		return;
        	}

        	const param = {
        			SICODE : this.ds_search.getColumn(0, "sicode")
        		,	S_DATE : this.ds_search.getColumn(0, "s_date")
        		,	M_CODE : this.ds_search.getColumn(0, "m_code")
        	};
        	Sct.popup(this, "emergency", 450, 400, "", param, "DAY_POP::DAY00201_P27.xfdl", "fn_popCallback");
        };

        // 코로나19 임상증상기록 팝업
        this.btn_corona_onclick = function(obj,e)
        {
        	var m_group = this.ds_search.getColumn(0,"m_group");
        	if (m_group=="") m_group = "전체";

        	const param = {
        			SICODE : this.ds_search.getColumn(0, "sicode")
        		,	S_DATE : this.ds_search.getColumn(0, "s_date")
        		,	M_GROUP : m_group
        	};
        	Sct.popup(this, "corona", 450, 400, "", param, "DAY_POP::DAY00201_P02.xfdl", "fn_popCallback");
        };

        // 간호일지내용검색
        this.btn_nurse_search_onclick = function(obj,e)
        {
        	const param = {
        			SICODE : fv_sicode
        		,	S_DATE : this.ds_search.getColumn(0, "s_date")
        	};

        	Sct.popup(this, "nurse_search", 450, 400, "간호일지내용검색테스트", param, "DAY_POP::DAY00201_P01.xfdl", "fn_popCallback");
        };

        this.btn_nurse_manager_onclick = function(obj,e)
        {
        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_search.getColumn(0, "s_date")
        		,	FLAG : ""
        	};

        	Sct.popup(this, "nurse_manager", 450, 400, "작성자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };

        this.btn_med_manager_onclick = function(obj,e)
        {
        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_search.getColumn(0, "s_date")
        		,	FLAG : ""
        	};

        	Sct.popup(this, "med_manager", 450, 400, "작성자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "nurse_manager" :
        			this.ds_nurse.setColumn(0, "담당코드", objDs.getColumn(0,"c_staffid"));
        			this.ds_nurse.setColumn(0, "담당자", objDs.getColumn(0,"c_name"));
        			break;
        		case "med_manager" :
        			this.ds_dosage_head.setColumn(0, "담당코드", objDs.getColumn(0,"c_staffid"));
        			this.ds_dosage_head.setColumn(0, "투약담당", objDs.getColumn(0,"c_name"));
        			break;
        	}
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        this.fn_saveBtn = function(obj,e)
        {
        	this.fn_save();
        };

        this.btn_nurse_prev_onclick = function(obj,e)
        {
        	this.fn_nursePrev();
        };

        this.btn_dosage_prev_onclick = function(obj,e)
        {
        	this.fn_dosagePrev();
        };


        // 그리드 셀클릭 이벤트
        this.div_cont_div_left_grd_list_oncellclick = function(obj,e)
        {
        	const selIdx = obj.getBindCellIndex("body", "m_name");

        	// 수급자명 컬럼인 경우
        	if (e.col == selIdx)
        	{
        		var selRow = this.ds_list.rowposition;
        		var m_code = this.ds_list.getColumn(selRow,"m_code");
        		this.ds_search.setColumn(0,"m_code",m_code);
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

        // A-P 또는 전체 버튼 중 하나 클릭시
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

        	// 선택된 버튼의 text값 ds_search에 세팅. 단, 전체 버튼은 빈문자열로
        	var m_group = obj.id=="btn_ALL"? "": obj.text; // A,B,C...P, 전체 중 하나
        	this.ds_search.setColumn(0,"m_group", m_group);

        	this.fn_search();
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

        this.pre_next_btn_onclick = function(obj,e)
        {
        	const searchDt = this.ds_search.getColumn(0, "date");

        	if (obj.text == "◀ 전날") {
        		searchDt.setDate(searchDt.getDate() - 1);
        	} else if (obj.text == "앞날 ▶") {
        		searchDt.setDate(searchDt.getDate() + 1);
        	}
        	this.ds_search.setColumn(0, "date", searchDt);
        	this.ds_search.setColumn(0, "s_date", searchDt);
        	this.fn_clearDataset("main"); // 데이터셋 클리어
        	this.fn_search();
        };


        // 일자변경시 데이터셋 클리어
        this.fn_clearDataset = function (flag)
        {
        	if(flag == "main"){
        		this.ds_list.clearData();
        	}

        	this.ds_person.clearData();
        	this.ds_detail.clearData();
        	this.ds_nurse.clearData();
        	this.ds_dosage.clearData();
        }

        this.div_search_cal_date_pic_onchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0, "date", e.postvalue);
        	this.ds_search.setColumn(0, "s_date", e.postvalue);
        	this.fn_clearDataset("main"); // 데이터셋 클리어
        	this.fn_search();
        };


        // 투약시간 표시
        this.btn_delivery_onclick = function(obj,e)
        {
        	if (this.ds_search.getColumn(0,"m_code")==null || this.ds_search.getColumn(0,"m_code") == "" ) {
        		alert("수급자를 지정하세요");
        		return;
        	}

        	const svcId = "delivery_time";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_delivery_time=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00201.DAY00201_DS_DELIVERY_TIME_S ";

        	const callbackFunc = "fn_callback";
        	var aSync = false;
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, aSync);

        	this.ds_dosage_head.setColumn(0,"투약시간",this.ds_delivery_time.getColumn(0,"drugtime"));

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_right.form.div_down.form.grd_dosage.addEventHandler("onexpandup",this.grd_detail_onexpandup,this);
            this.div_cont.form.div_right.form.div_down.form.btn_med_manager.addEventHandler("onclick",this.btn_med_manager_onclick,this);
            this.div_cont.form.div_right.form.div_down.form.btn_bathlist00_00_00_00_00_00_00_00_00_00.addEventHandler("onclick",this.btn_popup_onclick,this);
            this.div_cont.form.div_right.form.div_down.form.btn_all.addEventHandler("onclick",this.btn_nurse_onclick,this);
            this.div_cont.form.div_right.form.div_down.form.btn_dosage_prev.addEventHandler("onclick",this.btn_dosage_prev_onclick,this);
            this.div_cont.form.div_right.form.div_down.form.btn_delivery.addEventHandler("onclick",this.btn_delivery_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.txt_content.addEventHandler("onchanged",this.div_cont_div_right_div_main_txt_content_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.btn_nurse_manager.addEventHandler("onclick",this.btn_nurse_manager_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_vital.addEventHandler("onclick",this.btn_vital_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_bathlist00_00_00_00_00_00_00.addEventHandler("onclick",this.btn_popup_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_bathlist00_00_00_00_00_00_00_00_00_00_00.addEventHandler("onclick",this.btn_popup_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_bathlist00_00.addEventHandler("onclick",this.btn_popup_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_bathlist00_00_00.addEventHandler("onclick",this.btn_popup_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_bathlist00_00_00_00.addEventHandler("onclick",this.btn_popup_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_bathlist00_00_00_00_00.addEventHandler("onclick",this.btn_popup_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_bathlist00_00_00_00_00_00_00_00.addEventHandler("onclick",this.btn_popup_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_bathlist00_00_00_00_00_00_00_00_00.addEventHandler("onclick",this.btn_popup_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_bathlist00_00_00_00_00_00.addEventHandler("onclick",this.btn_popup_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_emerg.addEventHandler("onclick",this.btn_emerg_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_prev.addEventHandler("onclick",this.btn_nurse_prev_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_nurse_search.addEventHandler("onclick",this.btn_nurse_search_onclick,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("oncellclick",this.div_cont_div_left_grd_list_oncellclick,this);
            this.div_cont.form.div_left.form.btn_A.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_cont.form.div_left.form.btn_B.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_cont.form.div_left.form.btn_C.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_cont.form.div_left.form.btn_D.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_cont.form.div_left.form.btn_E.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_cont.form.div_left.form.btn_F.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_cont.form.div_left.form.btn_G.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_cont.form.div_left.form.btn_H.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_cont.form.div_left.form.btn_I.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_cont.form.div_left.form.btn_J.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_cont.form.div_left.form.btn_K.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_cont.form.div_left.form.btn_L.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_cont.form.div_left.form.btn_P.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_cont.form.div_left.form.btn_O.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_cont.form.div_left.form.btn_N.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_cont.form.div_left.form.btn_M.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_cont.form.div_left.form.btn_ALL.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.fn_report1,this);
            this.div_func.form.btn_report2.addEventHandler("onclick",this.fn_report1,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_func.form.btn_corona.addEventHandler("onclick",this.btn_corona_onclick,this);
            this.div_func.form.btn_bathlist00.addEventHandler("onclick",this.btn_popup_onclick,this);
            this.div_func.form.btn_bathlist00_00.addEventHandler("onclick",this.btn_popup_onclick,this);
            this.div_search.form.cal_date_pic.addEventHandler("onchanged",this.div_search_cal_date_pic_onchanged,this);
            this.div_search.form.btn_pre_dt.addEventHandler("onclick",this.pre_next_btn_onclick,this);
            this.div_search.form.cal_date.addEventHandler("onchanged",this.div_search_cal_date_onchanged,this);
            this.div_search.form.btn_next_dt.addEventHandler("onclick",this.pre_next_btn_onclick,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00201.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
