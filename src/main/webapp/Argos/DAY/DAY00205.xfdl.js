(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00205");
            this.set_titletext("2-05 의료기기점검");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"e_number\" type=\"STRING\" size=\"256\"/><Column id=\"e_date\" type=\"DATE\" size=\"256\"/><Column id=\"점검담당\" type=\"STRING\" size=\"256\"/><Column id=\"점검코드\" type=\"STRING\" size=\"256\"/><Column id=\"점검직종\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"year\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"DATE\" size=\"256\"/><Column id=\"date_to\" type=\"DATE\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"점검번호\" type=\"STRING\" size=\"256\"/><Column id=\"점검일\" type=\"DATE\" size=\"256\"/><Column id=\"점검담당\" type=\"STRING\" size=\"256\"/><Column id=\"점검코드\" type=\"STRING\" size=\"256\"/><Column id=\"점검직종\" type=\"STRING\" size=\"256\"/><Column id=\"점검비고\" type=\"STRING\" size=\"256\"/><Column id=\"점검\" type=\"STRING\" size=\"256\"/><Column id=\"점검01\" type=\"STRING\" size=\"256\"/><Column id=\"점검02\" type=\"STRING\" size=\"256\"/><Column id=\"점검03\" type=\"STRING\" size=\"256\"/><Column id=\"점검04\" type=\"STRING\" size=\"256\"/><Column id=\"점검05\" type=\"STRING\" size=\"256\"/><Column id=\"점검06\" type=\"STRING\" size=\"256\"/><Column id=\"점검07\" type=\"STRING\" size=\"256\"/><Column id=\"점검08\" type=\"STRING\" size=\"256\"/><Column id=\"점검09\" type=\"STRING\" size=\"256\"/><Column id=\"점검10\" type=\"STRING\" size=\"256\"/><Column id=\"점검11\" type=\"STRING\" size=\"256\"/><Column id=\"점검12\" type=\"STRING\" size=\"256\"/><Column id=\"점검13\" type=\"STRING\" size=\"256\"/><Column id=\"점검14\" type=\"STRING\" size=\"256\"/><Column id=\"점검15\" type=\"STRING\" size=\"256\"/><Column id=\"점검16\" type=\"STRING\" size=\"256\"/><Column id=\"점검17\" type=\"STRING\" size=\"256\"/><Column id=\"점검18\" type=\"STRING\" size=\"256\"/><Column id=\"점검19\" type=\"STRING\" size=\"256\"/><Column id=\"점검20\" type=\"STRING\" size=\"256\"/><Column id=\"점검21\" type=\"STRING\" size=\"256\"/><Column id=\"점검22\" type=\"STRING\" size=\"256\"/><Column id=\"점검23\" type=\"STRING\" size=\"256\"/><Column id=\"점검24\" type=\"STRING\" size=\"256\"/><Column id=\"점검25\" type=\"STRING\" size=\"256\"/><Column id=\"점검26\" type=\"STRING\" size=\"256\"/><Column id=\"점검27\" type=\"STRING\" size=\"256\"/><Column id=\"점검28\" type=\"STRING\" size=\"256\"/><Column id=\"점검29\" type=\"STRING\" size=\"256\"/><Column id=\"점검30\" type=\"STRING\" size=\"256\"/><Column id=\"수량1\" type=\"STRING\" size=\"256\"/><Column id=\"수량01\" type=\"STRING\" size=\"256\"/><Column id=\"수량02\" type=\"STRING\" size=\"256\"/><Column id=\"수량03\" type=\"STRING\" size=\"256\"/><Column id=\"수량04\" type=\"STRING\" size=\"256\"/><Column id=\"수량05\" type=\"STRING\" size=\"256\"/><Column id=\"수량06\" type=\"STRING\" size=\"256\"/><Column id=\"수량07\" type=\"STRING\" size=\"256\"/><Column id=\"수량08\" type=\"STRING\" size=\"256\"/><Column id=\"수량09\" type=\"STRING\" size=\"256\"/><Column id=\"수량10\" type=\"STRING\" size=\"256\"/><Column id=\"수량2\" type=\"STRING\" size=\"256\"/><Column id=\"수량11\" type=\"STRING\" size=\"256\"/><Column id=\"수량12\" type=\"STRING\" size=\"256\"/><Column id=\"수량13\" type=\"STRING\" size=\"256\"/><Column id=\"수량14\" type=\"STRING\" size=\"256\"/><Column id=\"수량15\" type=\"STRING\" size=\"256\"/><Column id=\"수량16\" type=\"STRING\" size=\"256\"/><Column id=\"수량17\" type=\"STRING\" size=\"256\"/><Column id=\"수량18\" type=\"STRING\" size=\"256\"/><Column id=\"수량19\" type=\"STRING\" size=\"256\"/><Column id=\"수량20\" type=\"STRING\" size=\"256\"/><Column id=\"수량3\" type=\"STRING\" size=\"256\"/><Column id=\"수량21\" type=\"STRING\" size=\"256\"/><Column id=\"수량22\" type=\"STRING\" size=\"256\"/><Column id=\"수량23\" type=\"STRING\" size=\"256\"/><Column id=\"수량24\" type=\"STRING\" size=\"256\"/><Column id=\"수량25\" type=\"STRING\" size=\"256\"/><Column id=\"수량26\" type=\"STRING\" size=\"256\"/><Column id=\"수량27\" type=\"STRING\" size=\"256\"/><Column id=\"수량28\" type=\"STRING\" size=\"256\"/><Column id=\"수량29\" type=\"STRING\" size=\"256\"/><Column id=\"수량30\" type=\"STRING\" size=\"256\"/><Column id=\"기기명01\" type=\"STRING\" size=\"256\"/><Column id=\"기기명02\" type=\"STRING\" size=\"256\"/><Column id=\"기기명03\" type=\"STRING\" size=\"256\"/><Column id=\"기기명04\" type=\"STRING\" size=\"256\"/><Column id=\"기기명05\" type=\"STRING\" size=\"256\"/><Column id=\"기기명06\" type=\"STRING\" size=\"256\"/><Column id=\"기기명07\" type=\"STRING\" size=\"256\"/><Column id=\"기기명08\" type=\"STRING\" size=\"256\"/><Column id=\"기기명09\" type=\"STRING\" size=\"256\"/><Column id=\"기기명10\" type=\"STRING\" size=\"256\"/><Column id=\"기기명11\" type=\"STRING\" size=\"256\"/><Column id=\"기기명12\" type=\"STRING\" size=\"256\"/><Column id=\"기기명13\" type=\"STRING\" size=\"256\"/><Column id=\"기기명14\" type=\"STRING\" size=\"256\"/><Column id=\"기기명15\" type=\"STRING\" size=\"256\"/><Column id=\"기기명16\" type=\"STRING\" size=\"256\"/><Column id=\"기기명17\" type=\"STRING\" size=\"256\"/><Column id=\"기기명18\" type=\"STRING\" size=\"256\"/><Column id=\"기기명19\" type=\"STRING\" size=\"256\"/><Column id=\"기기명20\" type=\"STRING\" size=\"256\"/><Column id=\"기기명21\" type=\"STRING\" size=\"256\"/><Column id=\"기기명22\" type=\"STRING\" size=\"256\"/><Column id=\"기기명23\" type=\"STRING\" size=\"256\"/><Column id=\"기기명24\" type=\"STRING\" size=\"256\"/><Column id=\"기기명25\" type=\"STRING\" size=\"256\"/><Column id=\"기기명26\" type=\"STRING\" size=\"256\"/><Column id=\"기기명27\" type=\"STRING\" size=\"256\"/><Column id=\"기기명28\" type=\"STRING\" size=\"256\"/><Column id=\"기기명29\" type=\"STRING\" size=\"256\"/><Column id=\"기기명30\" type=\"STRING\" size=\"256\"/><Column id=\"org_점검번호\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data_chk", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"소독일\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_equipcode", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"기기번호\" type=\"STRING\" size=\"256\"/><Column id=\"기기명\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/><Column id=\"구입일\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","450",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","0",null,null,"0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"점검일자\"/><Cell col=\"1\" text=\"점검자\"/></Band><Band id=\"body\"><Cell text=\"bind:e_date\" displaytype=\"date\" expandchar=\"dot\"/><Cell col=\"1\" text=\"bind:점검담당\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","450","0","1230",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_up","20","0",null,"65","0",null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1","0","0","1210","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Static("sta_head1","0","0","100","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("0");
            obj.set_text("점검일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Button("btn_manager","657","0","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("2");
            obj.set_text("점검자");
            obj.set_cssclass("btn_worker");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Static("sta_manager_value","750","5","198","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("3");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Button("btn_record","875","36","165","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("4");
            obj.set_text("① 의료기기 목록조회");
            obj.set_cssclass("btn_search");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Button("btn_record00","1045","36","165","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("5");
            obj.set_text("② 기구목록 가져오기");
            obj.set_cssclass("btn_search");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Calendar("cal_date_pic","199","5","25","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("6");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Calendar("cal_date","110","5","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("7");
            obj.set_buttonsize("0 0");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Div("div_down","20","65",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1","0","0","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00","0","29","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00","0","58","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00","0","87","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00","0","116","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_00","0","145","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_00_00","0","174","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_01","0","203","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_01","0","232","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01","0","261","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_01","0","290","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_01","0","319","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_00_01","0","348","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_00_00_00","0","377","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_00_00_00_00","0","609","1210","86",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_01_00","0","580","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00","0","551","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_01_00","0","493","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00","0","435","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_00_00_01","0","406","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_02","0","464","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_00_02","0","522","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_head1_00","0","0","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("22");
            obj.set_text("번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00","0","29","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("23");
            obj.set_textAlign("center");
            obj.set_value("[01]");
            obj.set_readonly("true");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","0","58","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("24");
            obj.set_textAlign("center");
            obj.set_value("[02]");
            obj.set_readonly("true");
            obj.set_text("[02]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","0","87","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("25");
            obj.set_textAlign("center");
            obj.set_value("[03]");
            obj.set_readonly("true");
            obj.set_text("[03]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00","0","116","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("26");
            obj.set_textAlign("center");
            obj.set_value("[04]");
            obj.set_readonly("true");
            obj.set_text("[04]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00","0","145","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("27");
            obj.set_textAlign("center");
            obj.set_value("[05]");
            obj.set_readonly("true");
            obj.set_text("[05]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00","0","174","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("28");
            obj.set_textAlign("center");
            obj.set_value("[06]");
            obj.set_readonly("true");
            obj.set_text("[06]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00","0","203","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("29");
            obj.set_textAlign("center");
            obj.set_value("[07]");
            obj.set_readonly("true");
            obj.set_text("[07]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00","0","232","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("30");
            obj.set_textAlign("center");
            obj.set_value("[08]");
            obj.set_readonly("true");
            obj.set_text("[08]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00","0","261","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("31");
            obj.set_textAlign("center");
            obj.set_value("[09]");
            obj.set_readonly("true");
            obj.set_text("[09]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00","0","290","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("32");
            obj.set_textAlign("center");
            obj.set_value("[10]");
            obj.set_readonly("true");
            obj.set_text("[10]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00","0","319","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("33");
            obj.set_textAlign("center");
            obj.set_value("[11]");
            obj.set_readonly("true");
            obj.set_text("[11]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00","0","348","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("34");
            obj.set_textAlign("center");
            obj.set_value("[12]");
            obj.set_readonly("true");
            obj.set_text("[12]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00","0","377","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("35");
            obj.set_textAlign("center");
            obj.set_value("[13]");
            obj.set_readonly("true");
            obj.set_text("[13]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","406","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("36");
            obj.set_textAlign("center");
            obj.set_value("[14]");
            obj.set_readonly("true");
            obj.set_text("[14]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","435","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("37");
            obj.set_textAlign("center");
            obj.set_value("[15]");
            obj.set_readonly("true");
            obj.set_text("[15]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","464","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("38");
            obj.set_textAlign("center");
            obj.set_value("[16]");
            obj.set_readonly("true");
            obj.set_text("[16]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","493","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("39");
            obj.set_textAlign("center");
            obj.set_value("[17]");
            obj.set_readonly("true");
            obj.set_text("[17]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","522","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("40");
            obj.set_textAlign("center");
            obj.set_value("[18]");
            obj.set_readonly("true");
            obj.set_text("[18]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","551","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("41");
            obj.set_textAlign("center");
            obj.set_value("[19]");
            obj.set_readonly("true");
            obj.set_text("[19]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","580","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("42");
            obj.set_textAlign("center");
            obj.set_value("[20]");
            obj.set_readonly("true");
            obj.set_text("[20]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_head1_01","0","609","100","86",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("43");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00","1110","0","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("44");
            obj.set_text("점검확인");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_00","1010","0","101","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("45");
            obj.set_text("수량");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_00_00","99","0","912","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("46");
            obj.set_text("의료기기명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01","99","29","912","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("47");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00","99","58","912","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("48");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00","99","87","912","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("49");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00","99","116","912","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("50");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00","99","145","912","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("51");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00","99","174","912","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("52");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00","99","203","912","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("53");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00","99","232","912","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("54");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00","99","261","912","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("55");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00","99","290","912","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("56");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00","99","319","912","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("57");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00","99","348","912","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("58");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00","99","377","912","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("59");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00","99","406","912","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("60");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","99","435","912","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("61");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","99","464","912","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("62");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","99","493","912","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("63");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","99","522","912","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("64");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","99","551","912","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("65");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","99","580","912","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("66");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","100","611","1109","82",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("67");
            obj.set_textAlign("left");
            obj.set_maxlength("60");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01","1010","58","101","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("68");
            obj.set_format("999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00","1010","87","101","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("69");
            obj.set_format("999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00","1010","116","101","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("70");
            obj.set_format("999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00","1010","145","101","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("71");
            obj.set_format("999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00","1010","174","101","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("72");
            obj.set_format("999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00","1010","203","101","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("73");
            obj.set_format("999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00","1010","232","101","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("74");
            obj.set_format("999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00","1010","261","101","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("75");
            obj.set_format("999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00","1010","290","101","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("76");
            obj.set_format("999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00","1010","319","101","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("77");
            obj.set_format("999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00","1010","348","101","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("78");
            obj.set_format("999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00","1010","377","101","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("79");
            obj.set_format("999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00","1010","406","101","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("80");
            obj.set_format("999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00","1010","435","101","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("81");
            obj.set_format("999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1010","464","101","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("82");
            obj.set_format("999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1010","493","101","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("83");
            obj.set_format("999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1010","522","101","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("84");
            obj.set_format("999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1010","551","101","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("85");
            obj.set_format("999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1010","580","101","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("86");
            obj.set_format("999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_01","1010","29","101","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("87");
            obj.set_format("999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new CheckBox("chk_01","1110","29","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("88");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new CheckBox("chk_02","1110","58","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("89");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new CheckBox("chk_03","1110","87","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("90");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new CheckBox("chk_04","1110","116","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("91");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new CheckBox("chk_05","1110","145","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("92");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new CheckBox("chk_06","1110","174","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("93");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new CheckBox("chk_07","1110","203","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("94");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new CheckBox("chk_08","1110","233","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("95");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new CheckBox("chk_09","1110","261","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("96");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new CheckBox("chk_10","1110","291","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("97");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new CheckBox("chk_11","1110","320","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("98");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new CheckBox("chk_12","1110","349","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("99");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new CheckBox("chk_13","1110","377","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("100");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new CheckBox("chk_14","1110","406","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("101");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new CheckBox("chk_15","1110","435","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("102");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new CheckBox("chk_16","1110","464","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("103");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new CheckBox("chk_17","1110","493","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("104");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new CheckBox("chk_18","1110","522","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("105");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new CheckBox("chk_19","1110","551","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("106");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new CheckBox("chk_20","1110","580","100","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("107");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_padding("0px 0px 0px 10px");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","450","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","360","7","70","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","227","12","8","17",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_year","10","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","108","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from_pic","197","7","25","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","238","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic","327","7","25","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","450","0","1230","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_sign","760","7","65","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("결재란");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report1","830","7","150","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("의료기기 점검일지");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_no_value","85","8","80","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_no","20","8","58","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_text("기록번호 : ");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_save","1085","7","70","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_delete","1160","7","70","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("5");
            obj.set_text("삭제");
            obj.set_cssclass("btn_delete");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_new","985","7","95","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("6");
            obj.set_text("새로작성");
            obj.set_cssclass("btn_newdoc");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cmb_year","value","ds_search","year");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_func.form.sta_no_value","text","ds_data","점검번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_up.form.div_right.form.sta_body1_m_name","text","ds_data","수급자명");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_up.form.div_right.form.sta_body1_m_code","text","ds_data","수급코드");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_up.form.div_right.form.sta_body1_m_group","text","ds_data","m_group");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_up.form.div_right.form.sta_body1_sex_nm","text","ds_list_copy","sex_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_up.form.div_right.form.sta_body1_age","text","ds_data","성별");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_up.form.div_right.form.sta_body1_grade_nm","text","ds_data","grade_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_up.form.div_right.form.sta_body1_m_enday","text","ds_data","입소일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_up.form.div_right.form.sta_body1_age00","text","ds_data","생일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right.form.div_up.form.sta_manager_value","text","ds_data","VIEW_MANAGER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.div_right.form.div_down.form.edt_00_01","value","ds_data","기기명01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_right.form.div_down.form.edt_00_01_00","value","ds_data","기기명02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00","value","ds_data","기기명03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00","value","ds_data","기기명04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00","value","ds_data","기기명05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00","value","ds_data","기기명06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00","value","ds_data","기기명07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00","value","ds_data","기기명08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00","value","ds_data","기기명09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00","value","ds_data","기기명10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00","value","ds_data","기기명11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","기기명12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","기기명13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","기기명14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","기기명15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","기기명16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","기기명17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","기기명18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","기기명19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","기기명20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item93","div_cont.form.div_right.form.div_up.form.cal_date_pic","value","ds_data","점검일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","div_cont.form.div_right.form.div_up.form.cal_date","value","ds_data","점검일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","div_search.form.cal_date_pic","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cal_date_from","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_date_from_pic","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_search.form.cal_date_to","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_search.form.cal_date_to_pic","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.div_down.form.mae_00_01_01","value","ds_data","수량01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_cont.form.div_right.form.div_down.form.mae_00_01","value","ds_data","수량02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_cont.form.div_right.form.div_down.form.mae_00_01_00","value","ds_data","수량03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00","value","ds_data","수량04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00","value","ds_data","수량05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00","value","ds_data","수량06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00","value","ds_data","수량07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00","value","ds_data","수량08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00","value","ds_data","수량09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00","value","ds_data","수량10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00","value","ds_data","수량11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00","value","ds_data","수량12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","수량13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","수량14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","수량15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","수량16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","수량17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","수량18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","수량19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","수량20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병08_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병08_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병09_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병09_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_cont.form.div_right.form.div_down.form.chk_01","value","ds_data","점검01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_cont.form.div_right.form.div_down.form.chk_02","value","ds_data","점검02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","div_cont.form.div_right.form.div_down.form.chk_03","value","ds_data","점검03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","div_cont.form.div_right.form.div_down.form.chk_04","value","ds_data","점검04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","div_cont.form.div_right.form.div_down.form.chk_05","value","ds_data","점검05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","div_cont.form.div_right.form.div_down.form.chk_06","value","ds_data","점검06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","div_cont.form.div_right.form.div_down.form.chk_07","value","ds_data","점검07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","div_cont.form.div_right.form.div_down.form.chk_08","value","ds_data","점검08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","div_cont.form.div_right.form.div_down.form.chk_09","value","ds_data","점검09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","div_cont.form.div_right.form.div_down.form.chk_10","value","ds_data","점검10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","div_cont.form.div_right.form.div_down.form.chk_11","value","ds_data","점검11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","div_cont.form.div_right.form.div_down.form.chk_12","value","ds_data","점검12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","div_cont.form.div_right.form.div_down.form.chk_13","value","ds_data","점검13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","div_cont.form.div_right.form.div_down.form.chk_14","value","ds_data","점검14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","div_cont.form.div_right.form.div_down.form.chk_15","value","ds_data","점검15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","div_cont.form.div_right.form.div_down.form.chk_16","value","ds_data","점검16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","div_cont.form.div_right.form.div_down.form.chk_17","value","ds_data","점검17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","div_cont.form.div_right.form.div_down.form.chk_18","value","ds_data","점검18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","div_cont.form.div_right.form.div_down.form.chk_19","value","ds_data","점검19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","div_cont.form.div_right.form.div_down.form.chk_20","value","ds_data","점검20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","점검비고");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00205.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00205.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00205.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00205
         * 화면명   	: 2-05 의료기기점검
         * 화면설명 	:
         * 작성일   	: 2022-06-21
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
        this.fv_staff_dutyname = nexacro.getApplication().gds_userInfo.getColumn(0, "c_dutyname");
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
        	const year = 2012;
        	const thisYear = date.getFullYear();

        	// 년도 콤보박스 세팅 (현재년 기준 ~ 19?20?년 후까지)
        	this.ds_year.set_enableevent(false);
        	this.ds_year.clearData();
        	let nRow;
        	for (let i = 0; i <= (thisYear-year) + 9; i++){
        		nRow = this.ds_year.addRow();
        		this.ds_year.setColumn(nRow, "CMCD", year + i);
        		this.ds_year.setColumn(nRow, "CMNM", (year + i) + "년");
        	}
        	this.ds_year.set_enableevent(true);

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "sicode", fv_sicode);
        	this.ds_search.setColumn(0, "year", thisYear);
        	this.ds_search.setColumn(0, "date_from", thisYear + '0101');
        	this.ds_search.setColumn(0, "date_to", thisYear + '1231');

        	// 오픈시 조회
        	this.fn_search();

        };

        // 조회 버튼
        this.fn_searchBtn = function ()
        {
        	this.fn_search();
        };

        this.fn_saveBtn = function(obj,e)
        {
        	this.fn_save();
        };

        this.fn_deleteBtn = function(obj,e)
        {
        	this.fn_delete();
        };

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

        this.fn_save_pre = function (){

        	if(Sct.Util.isEmpty(this.ds_data.getColumn(this.ds_data.rowposition, "점검일"))){
        		alert("점검일은 필수사항입니다!");
        		return false;
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(this.ds_data.rowposition, "점검담당"))){
        		alert("점검자는 필수사항입니다!");
        		return false;
        	}

        	if(this.ds_data.getRowType(this.ds_data.rowposition) == 2){
        		const svcId = "searchChk";
        		const params = "/commonController.do";
        		const inDatasets = "";
        		const outDatasets = "ds_data_chk=output1";
        		const argument = "method=getList "
        					   + "sqlId=DAY00205.DAY00205_DS_DATA_CHK "
        					   + "sicode=" + this.ds_data.getColumn(0, "sicode") + " "
        					   + "e_date=" + this.ds_data.getColumn(0, "점검일") + " ";

        		const callbackFunc = "fn_callback";
        		Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);

        		if(this.ds_data_chk.rowcount > 0){
        			alert("기록되어있습니다. 점검일을 수정하세요!");
        			return false;
        		}
        	}

        	return true;
        };

        // 삭제 전 validation
        this.fn_delete_pre = function(){

        	// 소독번호 없을 시
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"점검번호"))){
        		this.alert("삭제할 항목이 없습니다.");
        		return false;
        	}

        	if(!this.confirm("삭제 하시겠습니까?")) return false;

        	this.ds_data.set_updatecontrol(false);
        	this.ds_data.setRowType(0, Dataset.ROWTYPE_DELETE);
        	this.ds_data.set_updatecontrol(true);

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
        				   + "sqlId=DAY00205.DAY00205_DS_LIST_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.fn_searchDetail = function (row){

        	const svcId = "searchDetail";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_data=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00205.DAY00205_DS_DATA_S' "
        				   + "sicode=" + this.ds_list.getColumn(row, "sicode") + " "
        				   + "e_number=" + this.ds_list.getColumn(row, "e_number") + " "
        				   + "e_date=" + this.ds_list.getColumn(row, "e_date") + " ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.fn_save = function(){

        	// validation
        	if(!this.fn_save_pre()) return;

        	const svcId = "save";
         	const inDs = "ds_data";
        	this.fn_save_com(svcId, inDs);

        }

        // 삭제
        this.fn_delete = function(){

        	// validation
        	if (!this.fn_delete_pre()) return;

        	const svcId = "delete";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_data:U";
        	const outDatasets = "";
        	const argument = "method=delete "
        				   + "sqlId=DAY00205.DAY00205_DS_DATA_D ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if (strSvcID == "search"){
        			this.div_cont.form.div_right.form.div_up.form.cal_date_pic.set_readonly(true);
        			this.fn_searchDetail(this.row);
        			this.row = 0;
        		}else if (strSvcID == "searchDetail"){
        			const name = this.ds_data.getColumn(0, "점검담당");
        			const id = this.ds_data.getColumn(0, "점검코드");
        			const dutyname = this.ds_data.getColumn(0, "점검직종");
        			this.ds_data.setColumn(0, "VIEW_MANAGER", name + "/"+ dutyname + "/" + id);

        			for(let i = 0; i<20; i++){
        				const s_number = String(i+1).padStart(2, "0");
        				const e_number = this.ds_data.getColumn(this.ds_data.rowposition, "점검"+s_number);
        				if(e_number == 1){
        					const chkbox = "chk_" + s_number;
        					this.div_cont.form.div_right.form.div_down.form.all[chkbox].set_text("      O")
        				}else{
        					const unchkbox = "chk_" + s_number;
        					this.div_cont.form.div_right.form.div_down.form.all[unchkbox].set_text("")
        				}
        			}
        		}else if(strSvcID == "save"){
        			this.div_cont.form.div_right.form.div_up.form.cal_date_pic.set_readonly(true);
        			this.fn_search();
        			this.row = 0;
        		}else if(strSvcID == "delete"){
        			this.fn_search();
        		}else if(strSvcID == "searchEquipcode"){
        			for(let i = 0; i<this.ds_equipcode.rowcount; i++){
        				const ec_number = String(i+1).padStart(2, "0");
        				this.ds_data.setColumn(this.ds_data.rowposition, "기기명"+ec_number, this.ds_equipcode.getColumn(i, "기기명"));
        				this.ds_data.setColumn(this.ds_data.rowposition, "수량"+ec_number, this.ds_equipcode.getColumn(i, "수량"));
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

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "employee" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				const name1 = nexacro.trim(objDs.getColumn(0, "c_name"));
        				const staffid1 = objDs.getColumn(0, "c_staffid");
        				const dutyname1 = objDs.getColumn(0, "담당직종");
        				this.ds_data.setColumn(0, "점검담당", name1);
        				this.ds_data.setColumn(0, "점검코드", staffid1);
        				this.ds_data.setColumn(0, "점검직종", dutyname1);
        				this.ds_data.setColumn(0, "VIEW_MANAGER", name1 + "/" + dutyname1 + "/" + staffid1);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "점검담당", "");
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
         this.div_search_cmb_year_onitemchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0, "date_from", e.postvalue + '0101');
        	this.ds_search.setColumn(0, "date_to", e.postvalue + '1231');
        	this.ds_list.clearData();

        	this.fn_search();
        };

        this.div_cont_div_left_grd_list_oncellclick = function(obj,e)
        {
        	if(this.ds_data.getRowType(this.ds_data.rowposition) == 2){
        		return;
        	}
        	this.fn_searchDetail(e.row);
        	this.row = e.row;
        };

        this.div_func_btn_new_onclick = function(obj,e)
        {
        	this.ds_data.clearData();
        	this.div_cont.form.div_right.form.div_up.form.cal_date_pic.set_readonly(false);
        	const aRow = this.ds_data.addRow();
        	this.ds_data.setColumn(aRow, "sicode", fv_sicode);
        	this.ds_data.setColumn(aRow, "점검일", Sct.Util.getToday());
        	this.ds_data.setColumn(aRow, "점검담당", this.fv_staff_name);
        	this.ds_data.setColumn(aRow, "점검코드", this.fv_staff_id);
        	this.ds_data.setColumn(aRow, "점검직종", this.fv_staff_dutyname);
        	this.ds_data.setColumn(aRow, "점검비고", "");
        	this.ds_data.setColumn(aRow, "VIEW_MANAGER", this.fv_staff_name + "/" + this.fv_staff_dutyname + "/" + this.fv_staff_id);

        	for(let i = 0; i<30; i++){
        		const i_number = String(i+1).padStart(2, "0");
        		this.ds_data.setColumn(aRow, "기기명"+ i_number, "");
        	}

        };

        this.btn_manager_onclick = function(obj,e){

        	if(this.ds_data.rowcount < 1){
        		return;
        	}

        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_data.getColumn(0, "점검일")
        	};

        	Sct.popup(this, "employee", 450, 400, "입력담당자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };

        this.div_cont_div_right_div_up_btn_record00_onclick = function(obj,e){

        	const svcId = "searchEquipcode";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_equipcode=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00205.DAY00205_DS_EQUIPCODE_S' ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.div_cont_div_right_div_up_btn_record_onclick = function(obj,e){

        	const param = {
        			SICODE : fv_sicode
        	};

        	Sct.popup(this, "disin_list_search", 450, 600, "", param, "DAY_POP::DAY00205_P01.xfdl", "fn_popCallback");

        };

        this.div_func_btn_report1_onclick = function(obj,e)
        {
        	if (Sct.Util.isEmpty(this.ds_data.getColumn(0, "점검번호"))) return;

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00205_R01.xfdl";
        	const popupName = "의료기기 점검일지l";

        	trace(this.div_func.form.chk_sign.value);

        	params = {
        		sicode : fv_sicode
        	,	sign : this.div_func.form.chk_sign.value
        	,	chknum : this.ds_data.getColumn(0, "점검번호")
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        this.ds_data_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "점검01" || e.columnid == "점검02" || e.columnid == "점검03" || e.columnid == "점검04" || e.columnid == "점검05"
        	|| e.columnid == "점검06" || e.columnid == "점검07" || e.columnid == "점검08" || e.columnid == "점검09" || e.columnid == "점검10"
        	|| e.columnid == "점검11" || e.columnid == "점검12" || e.columnid == "점검13" || e.columnid == "점검14" || e.columnid == "점검15"
        	|| e.columnid == "점검16" || e.columnid == "점검17" || e.columnid == "점검18" || e.columnid == "점검19" || e.columnid == "점검20"){
        		if(e.newvalue == "1"){
        			const chkbox = "chk_" + String(e.columnid).substr(2,2);
        			this.div_cont.form.div_right.form.div_down.form.all[chkbox].set_text("      O")
        		}else{
        			const unchkbox = "chk_" + String(e.columnid).substr(2,2);
        			this.div_cont.form.div_right.form.div_down.form.all[unchkbox].set_text("")
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
            this.div_cont.form.div_right.form.div_up.form.btn_manager.addEventHandler("onclick",this.btn_manager_onclick,this);
            this.div_cont.form.div_right.form.div_up.form.btn_record.addEventHandler("onclick",this.div_cont_div_right_div_up_btn_record_onclick,this);
            this.div_cont.form.div_right.form.div_up.form.btn_record00.addEventHandler("onclick",this.div_cont_div_right_div_up_btn_record00_onclick,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.cmb_year.addEventHandler("onitemchanged",this.div_search_cmb_year_onitemchanged,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.div_func_btn_report1_onclick,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_func.form.btn_delete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.div_func.form.btn_new.addEventHandler("onclick",this.div_func_btn_new_onclick,this);
            this.ds_data.addEventHandler("oncolumnchanged",this.ds_data_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00205.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
