(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00204");
            this.set_titletext("2-04 상비약품점검");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"hd_number\" type=\"STRING\" size=\"256\"/><Column id=\"hd_date\" type=\"DATE\" size=\"256\"/><Column id=\"점검자\" type=\"STRING\" size=\"256\"/><Column id=\"점검코드\" type=\"STRING\" size=\"256\"/><Column id=\"점검직종\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"year\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"DATE\" size=\"256\"/><Column id=\"date_to\" type=\"DATE\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"점검번호\" type=\"STRING\" size=\"256\"/><Column id=\"점검일\" type=\"DATE\" size=\"256\"/><Column id=\"점검확인01\" type=\"STRING\" size=\"256\"/><Column id=\"점검확인02\" type=\"STRING\" size=\"256\"/><Column id=\"점검확인03\" type=\"STRING\" size=\"256\"/><Column id=\"점검자\" type=\"STRING\" size=\"256\"/><Column id=\"점검코드\" type=\"STRING\" size=\"256\"/><Column id=\"점검직종\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보01\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보02\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보03\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보04\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보05\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보06\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보07\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보08\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보09\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보10\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보11\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보12\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보13\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보14\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보15\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보16\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보17\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보18\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보19\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보20\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보21\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보22\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보23\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보24\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보25\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보26\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보27\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보28\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보29\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보30\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보31\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보32\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보33\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보34\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보35\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보36\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보37\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보38\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보39\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보40\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보41\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보42\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보43\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보44\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보45\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보46\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보47\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보48\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보49\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보50\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보51\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보52\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보53\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보54\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보55\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보56\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보57\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보58\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보59\" type=\"STRING\" size=\"256\"/><Column id=\"약품정보60\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량1\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량01\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량02\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량03\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량04\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량05\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량06\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량07\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량08\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량09\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량10\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량2\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량11\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량12\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량13\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량14\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량15\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량16\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량17\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량18\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량19\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량20\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량3\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량21\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량22\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량23\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량24\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량25\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량26\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량27\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량28\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량29\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량30\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량4\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량31\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량32\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량33\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량34\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량35\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량36\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량37\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량38\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량39\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량40\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량5\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량41\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량42\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량43\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량44\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량45\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량46\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량47\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량48\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량49\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량50\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량6\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량51\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량52\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량53\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량54\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량55\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량56\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량57\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량58\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량59\" type=\"STRING\" size=\"256\"/><Column id=\"약품수량60\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한1\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한01\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한02\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한03\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한04\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한05\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한06\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한07\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한08\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한09\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한10\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한2\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한11\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한12\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한13\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한14\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한15\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한16\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한17\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한18\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한19\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한20\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한3\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한21\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한22\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한23\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한24\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한25\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한26\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한27\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한28\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한29\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한30\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한4\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한31\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한32\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한33\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한34\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한35\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한36\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한37\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한38\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한39\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한40\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한5\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한41\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한42\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한43\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한44\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한45\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한46\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한47\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한48\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한49\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한50\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한6\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한51\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한52\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한53\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한54\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한55\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한56\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한57\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한58\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한59\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한60\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능1\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능01\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능02\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능03\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능04\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능05\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능06\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능07\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능08\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능09\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능10\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능2\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능11\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능12\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능13\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능14\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능15\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능16\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능17\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능18\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능19\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능20\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능3\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능21\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능22\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능23\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능24\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능25\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능26\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능27\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능28\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능29\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능30\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능4\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능31\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능32\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능33\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능34\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능35\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능36\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능37\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능38\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능39\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능40\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능5\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능41\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능42\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능43\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능44\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능45\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능46\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능47\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능48\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능49\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능50\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능6\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능51\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능52\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능53\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능54\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능55\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능56\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능57\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능58\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능59\" type=\"STRING\" size=\"256\"/><Column id=\"약품효능60\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data_chk", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"점검일\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_homedrug", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"num\" type=\"STRING\" size=\"256\"/><Column id=\"homenum\" type=\"STRING\" size=\"256\"/><Column id=\"약품명\" type=\"STRING\" size=\"256\"/><Column id=\"효능\" type=\"STRING\" size=\"256\"/><Column id=\"제조사\" type=\"STRING\" size=\"256\"/><Column id=\"규격\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/><Column id=\"유통기한\" type=\"STRING\" size=\"256\"/><Column id=\"보관상태\" type=\"STRING\" size=\"256\"/><Column id=\"확인일\" type=\"STRING\" size=\"256\"/><Column id=\"org_homenum\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"약품점검일\"/><Cell col=\"1\" text=\"점검자\"/></Band><Band id=\"body\"><Cell text=\"bind:hd_date\" displaytype=\"date\" expandchar=\"dot\"/><Cell col=\"1\" text=\"bind:점검자\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","450","0","1230",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_up","20","0",null,"150","0",null,null,null,null,null,this.div_cont.form.div_right.form);
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

            obj = new Button("btn_manager","600","0","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("2");
            obj.set_text("점검자");
            obj.set_cssclass("btn_worker");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Static("sta_manager_value","690","5","198","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("3");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Button("btn_record02","875","113","165","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("4");
            obj.set_text("② 약품목록 가져오기");
            obj.set_cssclass("btn_search");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Button("btn_record03","1045","113","165","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("5");
            obj.set_text("③ 약품목록 재고확인");
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

            obj = new Static("sta_body1_00","0","33","1210","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Static("sta_head1_00","0","33","230","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("9");
            obj.set_text("보관함 잠금장치 작동유무 확인");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00","0","66","1210","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00","0","66","230","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("11");
            obj.set_text("상비약품 재고수량확인");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Edit("edt_00_01","230","35","370","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("12");
            obj.set_textAlign("left");
            obj.set_maxlength("50");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_01","601","33","230","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("13");
            obj.set_text("상비약품 목록수 확인");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Static("sta_manager_value00","606","72","534","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("14");
            obj.set_text("※ 점검사항 확인후 상비약품 점검일지를 출력, 작성자 서명후 보관해야 합니다.");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00","230","68","370","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("15");
            obj.set_textAlign("left");
            obj.set_maxlength("50");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00","831","35","378","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("16");
            obj.set_textAlign("left");
            obj.set_maxlength("50");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Button("btn_record01","705","113","165","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("17");
            obj.set_text("① 상비약품 목록조회");
            obj.set_cssclass("btn_search");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Div("div_down","20","150",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_01_00_00_00","0","580","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_01_00_00","0","551","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1","0","0","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00","0","sta_body1:-1","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00","0","sta_body1_00:-1","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00","0","sta_body1_00_00:-1","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00","0","sta_body1_00_00_00:-1","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_00","0","sta_body1_00_00_00_00:-1","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_00_00","0","sta_body1_00_00_00_00_00:-1","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_01","0","sta_body1_00_00_00_00_00_00:-1","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_01","0","sta_body1_01:-1","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01","0","sta_body1_00_01:-1","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_01","0","sta_body1_00_00_01:-1","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_01","0","sta_body1_00_00_00_01:-1","1210","36",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_00_01","0","sta_body1_00_00_00_00_01:-1","1210","36",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_00_00_00","0","sta_body1_00_00_00_01:-1","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_01_00","0","522","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00","0","435","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00","0","sta_body1_01_00:-1","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_01_00","0","493","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_00_02","0","406","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_00_00_01","0","sta_body1_00_00_00_00_00_00_00:-1","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_02","0","sta_body1_00_00_00_00_00_00_01:-1","1210","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_head1_00","0","0","50","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("21");
            obj.set_text("번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00","0","29","50","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("22");
            obj.set_textAlign("center");
            obj.set_value("[01]");
            obj.set_readonly("true");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","0","58","50","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("23");
            obj.set_textAlign("center");
            obj.set_value("[02]");
            obj.set_readonly("true");
            obj.set_text("[02]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","0","87","50","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("24");
            obj.set_textAlign("center");
            obj.set_value("[03]");
            obj.set_readonly("true");
            obj.set_text("[03]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00","0","116","50","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("25");
            obj.set_textAlign("center");
            obj.set_value("[04]");
            obj.set_readonly("true");
            obj.set_text("[04]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00","0","145","50","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("26");
            obj.set_textAlign("center");
            obj.set_value("[05]");
            obj.set_readonly("true");
            obj.set_text("[05]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00","0","174","50","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("27");
            obj.set_textAlign("center");
            obj.set_value("[06]");
            obj.set_readonly("true");
            obj.set_text("[06]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00","0","203","50","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("28");
            obj.set_textAlign("center");
            obj.set_value("[07]");
            obj.set_readonly("true");
            obj.set_text("[07]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00","0","232","50","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("29");
            obj.set_textAlign("center");
            obj.set_value("[08]");
            obj.set_readonly("true");
            obj.set_text("[08]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00","0","261","50","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("30");
            obj.set_textAlign("center");
            obj.set_value("[09]");
            obj.set_readonly("true");
            obj.set_text("[09]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00","0","290","50","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("31");
            obj.set_textAlign("center");
            obj.set_value("[10]");
            obj.set_readonly("true");
            obj.set_text("[10]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00","0","319","50","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("32");
            obj.set_textAlign("center");
            obj.set_value("[11]");
            obj.set_readonly("true");
            obj.set_text("[11]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00","0","348","50","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("33");
            obj.set_textAlign("center");
            obj.set_value("[12]");
            obj.set_readonly("true");
            obj.set_text("[12]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00","0","377","50","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("34");
            obj.set_textAlign("center");
            obj.set_value("[13]");
            obj.set_readonly("true");
            obj.set_text("[13]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","406","50","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("35");
            obj.set_textAlign("center");
            obj.set_value("[14]");
            obj.set_readonly("true");
            obj.set_text("[14]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","435","50","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("36");
            obj.set_textAlign("center");
            obj.set_value("[15]");
            obj.set_readonly("true");
            obj.set_text("[15]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","464","50","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("37");
            obj.set_textAlign("center");
            obj.set_value("[16]");
            obj.set_readonly("true");
            obj.set_text("[16]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","493","50","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("38");
            obj.set_textAlign("center");
            obj.set_value("[17]");
            obj.set_readonly("true");
            obj.set_text("[17]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","522","50","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("39");
            obj.set_textAlign("center");
            obj.set_value("[18]");
            obj.set_readonly("true");
            obj.set_text("[18]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","551","50","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("40");
            obj.set_textAlign("center");
            obj.set_value("[19]");
            obj.set_readonly("true");
            obj.set_text("[19]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","580","50","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("41");
            obj.set_textAlign("center");
            obj.set_value("[20]");
            obj.set_readonly("true");
            obj.set_text("[20]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00","495","0","110","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("42");
            obj.set_text("유효기한");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_00","445","0","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("43");
            obj.set_text("수량");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_00_00","49","0","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("44");
            obj.set_text("상비약품명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01","49","29","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("45");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00","49","58","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("46");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00","49","87","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("47");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00","49","116","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("48");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00","49","145","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("49");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00","49","174","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("50");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00","49","203","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("51");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00","49","232","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("52");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00","49","261","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("53");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00","49","290","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("54");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00","49","319","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("55");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00","49","348","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("56");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00","49","377","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("57");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00","49","406","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("58");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","49","435","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("59");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","49","464","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("60");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","49","493","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("61");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","49","522","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("62");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","49","551","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("63");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","49","580","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("64");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01","445","58","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("65");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00","445","87","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("66");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00","445","116","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("67");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00","445","145","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("68");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00","445","174","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("69");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00","445","203","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("70");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00","445","232","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("71");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00","445","261","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("72");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00","445","290","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("73");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00","445","319","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("74");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00","445","348","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("75");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00","445","377","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("76");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00","445","406","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("77");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00","445","435","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("78");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","445","464","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("79");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","445","493","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("80");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","445","522","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("81");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","445","551","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("82");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","445","580","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("83");
            obj.set_limitbymask("both");
            obj.set_format("9,999");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_01","445","29","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("84");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_01","604","0","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("87");
            obj.set_text("번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_00_00_00","285","0","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("88");
            obj.set_text("약품효능");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_01","285","29","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("89");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_01","285","58","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("90");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_01","285","87","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("91");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_01","285","116","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("92");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_01","285","145","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("93");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_01","285","174","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("94");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_01","285","203","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("95");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_01","285","232","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("96");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_01","285","261","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("97");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_01","285","290","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("98");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_01","285","319","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("99");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_01","285","348","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("100");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_01","285","377","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("101");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_01","285","406","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("102");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","285","435","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("103");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","285","464","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("104");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","285","493","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("105");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","285","522","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("106");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","285","551","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("107");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","285","580","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("108");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_00_00_01","654","0","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("109");
            obj.set_text("상비약품명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_02","654","29","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("110");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_00_00_00_00","890","0","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("111");
            obj.set_text("약품효능");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_01_00","890","29","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("112");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_00_01","1050","0","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("113");
            obj.set_text("수량");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_01_00","1050","29","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("114");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_01","1100","0","110","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("115");
            obj.set_text("유효기한");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_02","654","58","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("116");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_01_00","890","58","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("117");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_02","1050","58","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("118");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_01","1050","87","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("119");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_01_00","890","87","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("120");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_02","654","87","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("121");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_02","654","116","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("122");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_01_00","890","116","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("123");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_01","1050","116","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("124");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_01","1050","145","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("125");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_01_00","890","145","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("126");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_02","654","145","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("127");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_02","654","174","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("128");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_01_00","890","174","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("129");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_01","1050","174","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("130");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_01","1050","203","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("131");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_01_00","890","203","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("132");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_02","654","203","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("133");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_02","654","232","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("134");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_01_00","890","232","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("135");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_01","1050","232","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("136");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_01","1050","261","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("137");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_01_00","890","261","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("138");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_02","654","261","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("139");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_02","654","290","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("140");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_01_00","890","290","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("141");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_01","1050","290","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("142");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_01","1050","319","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("143");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_01_00","890","319","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("144");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_02","654","319","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("145");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_02","654","348","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("146");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_01_00","890","348","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("147");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_01","1050","348","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("148");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_01","1050","377","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("149");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_01_00","890","377","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("150");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_02","654","377","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("151");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_02","654","406","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("152");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00","890","435","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("153");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00","890","406","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("154");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_01","1050","406","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("155");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_01","1050","435","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("156");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_02","654","435","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("157");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_02","654","464","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("158");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00","890","464","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("159");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","1050","464","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("160");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","1050","493","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("161");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00","890","493","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("162");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_02","654","493","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("163");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_02","654","522","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("164");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00","890","522","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("165");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","1050","522","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("166");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","1050","551","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("167");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00","890","551","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("168");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_02","654","551","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("169");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","654","580","237","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("170");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","890","580","161","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("171");
            obj.set_textAlign("left");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1050","580","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("172");
            obj.set_limitbymask("both");
            obj.set_format("9,999");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_02","604","29","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("173");
            obj.set_textAlign("center");
            obj.set_value("[21]");
            obj.set_readonly("true");
            obj.set_text("[21]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_01","604","58","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("174");
            obj.set_textAlign("center");
            obj.set_value("[22]");
            obj.set_readonly("true");
            obj.set_text("[22]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_01","604","87","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("175");
            obj.set_textAlign("center");
            obj.set_value("[23]");
            obj.set_readonly("true");
            obj.set_text("[23]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_01","604","116","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("176");
            obj.set_textAlign("center");
            obj.set_value("[24]");
            obj.set_readonly("true");
            obj.set_text("[24]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_01","604","145","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("177");
            obj.set_textAlign("center");
            obj.set_value("[25]");
            obj.set_readonly("true");
            obj.set_text("[25]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_01","604","174","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("178");
            obj.set_textAlign("center");
            obj.set_value("[26]");
            obj.set_readonly("true");
            obj.set_text("[26]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_01","604","203","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("179");
            obj.set_textAlign("center");
            obj.set_value("[27]");
            obj.set_readonly("true");
            obj.set_text("[27]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_01","604","232","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("180");
            obj.set_textAlign("center");
            obj.set_value("[28]");
            obj.set_readonly("true");
            obj.set_text("[28]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_01","604","261","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("181");
            obj.set_textAlign("center");
            obj.set_value("[29]");
            obj.set_readonly("true");
            obj.set_text("[29]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_01","604","290","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("182");
            obj.set_textAlign("center");
            obj.set_value("[30]");
            obj.set_readonly("true");
            obj.set_text("[30]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_01","604","319","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("183");
            obj.set_textAlign("center");
            obj.set_value("[31]");
            obj.set_readonly("true");
            obj.set_text("[31]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_01","604","348","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("184");
            obj.set_textAlign("center");
            obj.set_value("[32]");
            obj.set_readonly("true");
            obj.set_text("[32]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_01","604","377","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("185");
            obj.set_textAlign("center");
            obj.set_value("[33]");
            obj.set_readonly("true");
            obj.set_text("[33]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","604","406","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("186");
            obj.set_textAlign("center");
            obj.set_value("[34]");
            obj.set_readonly("true");
            obj.set_text("[34]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","604","435","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("187");
            obj.set_textAlign("center");
            obj.set_value("[35]");
            obj.set_readonly("true");
            obj.set_text("[35]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","604","464","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("188");
            obj.set_textAlign("center");
            obj.set_value("[36]");
            obj.set_readonly("true");
            obj.set_text("[36]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","604","493","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("189");
            obj.set_textAlign("center");
            obj.set_value("[37]");
            obj.set_readonly("true");
            obj.set_text("[37]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","604","522","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("190");
            obj.set_textAlign("center");
            obj.set_value("[38]");
            obj.set_readonly("true");
            obj.set_text("[38]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","604","551","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("191");
            obj.set_textAlign("center");
            obj.set_value("[39]");
            obj.set_readonly("true");
            obj.set_text("[39]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","604","580","51","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("192");
            obj.set_textAlign("center");
            obj.set_value("[40]");
            obj.set_readonly("true");
            obj.set_text("[40]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","495","29","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("193");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic","580","29","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("194");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00","495","58","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("195");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00","580","58","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("196");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00","495","87","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("197");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00","580","87","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("198");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00","495","116","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("199");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00","580","116","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("200");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00","495","145","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("201");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00","580","145","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("202");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00","495","174","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("203");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00","580","174","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("204");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_00","495","203","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("205");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_00","580","203","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("206");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_00_00","495","232","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("207");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_00_00","580","232","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("208");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_00_00_00","495","261","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("209");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_00_00_00","580","261","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("210");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_00_00_00_00","495","290","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("211");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_00_00_00_00","580","290","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("212");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_00_00_00_00_00","495","319","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("213");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_00_00_00_00_00","580","319","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("214");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_00_00_00_00_00_00","495","348","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("215");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00","580","348","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("216");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_00_00_00_00_00_00_00","495","377","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("217");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00","580","377","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("218");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_00","495","406","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("219");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_00","580","406","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("220");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_00_00","495","435","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("221");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_00_00","580","435","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("222");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","495","464","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("223");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","580","464","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("224");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","495","493","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("225");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","580","493","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("226");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","495","522","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("227");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","580","522","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("228");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","495","551","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("229");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","580","551","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("230");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","495","580","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("231");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","580","580","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("232");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to01","1100","29","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("233");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic01","1185","29","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("234");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_01","1100","58","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("235");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_01","1185","58","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("236");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_01","1100","87","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("237");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_01","1185","87","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("238");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_01","1100","116","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("239");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_01","1185","116","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("240");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_01","1100","145","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("241");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_01","1185","145","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("242");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_01","1100","174","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("243");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_01","1185","174","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("244");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_00_01","1100","203","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("245");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_00_01","1185","203","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("246");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_00_00_01","1100","232","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("247");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_00_00_01","1185","232","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("248");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_00_00_00_01","1100","261","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("249");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_00_00_00_01","1185","261","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("250");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_00_00_00_00_01","1100","290","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("251");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_00_00_00_00_01","1185","290","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("252");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_00_00_00_00_00_01","1100","319","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("253");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_00_00_00_00_00_01","1185","319","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("254");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_00_00_00_00_00_00_01","1100","348","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("255");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_01","1185","348","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("256");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_01","1100","377","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("257");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_01","1185","377","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("258");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_00_01","1100","406","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("259");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_00_01","1185","406","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("260");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","1100","435","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("261");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","1185","435","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("262");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","1100","464","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("263");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","1185","464","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("264");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","1100","493","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("265");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","1185","493","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("266");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","1100","522","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("267");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","1185","522","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("268");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","1100","551","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("269");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","1185","551","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("270");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1100","580","86","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("271");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_displayinvalidtext("    .  .  ");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1185","580","25","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("272");
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

            obj = new CheckBox("chk_sign","759","7","65","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("결재란");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report1","830","7","150","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("상비약품 점검일지");
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

            obj = new BindItem("item14","div_cont.form.div_right.form.div_down.form.edt_00_01","value","ds_data","약품정보01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_right.form.div_down.form.edt_00_01_00","value","ds_data","약품정보02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00","value","ds_data","약품정보03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00","value","ds_data","약품정보04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00","value","ds_data","약품정보05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00","value","ds_data","약품정보06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00","value","ds_data","약품정보07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00","value","ds_data","약품정보08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00","value","ds_data","약품정보09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00","value","ds_data","약품정보10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00","value","ds_data","약품정보11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","약품정보12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","약품정보13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","약품정보14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","약품정보15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","약품정보16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","약품정보17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","약품정보18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","약품정보19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","약품정보20");
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

            obj = new BindItem("item13","div_cont.form.div_right.form.div_down.form.mae_00_01_01","value","ds_data","약품수량01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_cont.form.div_right.form.div_down.form.mae_00_01","value","ds_data","약품수량02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_cont.form.div_right.form.div_down.form.mae_00_01_00","value","ds_data","약품수량03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00","value","ds_data","약품수량04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00","value","ds_data","약품수량05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00","value","ds_data","약품수량06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00","value","ds_data","약품수량07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00","value","ds_data","약품수량08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00","value","ds_data","약품수량09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00","value","ds_data","약품수량10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00","value","ds_data","약품수량11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00","value","ds_data","약품수량12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","약품수량13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","약품수량14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","약품수량15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","약품수량16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","약품수량17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","약품수량18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","약품수량19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","약품수량20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","div_cont.form.div_right.form.div_up.form.edt_00_01","value","ds_data","점검확인01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","div_cont.form.div_right.form.div_up.form.edt_00_01_00","value","ds_data","점검확인03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item92","div_cont.form.div_right.form.div_up.form.edt_00_01_00_00","value","ds_data","점검확인02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_cont.form.div_right.form.div_down.form.edt_00_01_01","value","ds_data","약품효능01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_cont.form.div_right.form.div_down.form.edt_00_01_00_01","value","ds_data","약품효능02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_01","value","ds_data","약품효능03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_01","value","ds_data","약품효능04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_01","value","ds_data","약품효능05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_01","value","ds_data","약품효능06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_01","value","ds_data","약품효능07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_01","value","ds_data","약품효능08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_01","value","ds_data","약품효능09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_01","value","ds_data","약품효능10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","약품효능11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","약품효능12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","약품효능13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","약품효능14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","약품효능15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","약품효능16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","약품효능17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","약품효능18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","약품효능19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","약품효능20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","div_cont.form.div_right.form.div_down.form.edt_00_01_02","value","ds_data","약품정보21");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","div_cont.form.div_right.form.div_down.form.edt_00_01_01_00","value","ds_data","약품효능21");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","div_cont.form.div_right.form.div_down.form.mae_00_01_01_00","value","ds_data","약품수량21");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","div_cont.form.div_right.form.div_down.form.edt_00_01_00_02","value","ds_data","약품정보22");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","div_cont.form.div_right.form.div_down.form.edt_00_01_00_01_00","value","ds_data","약품효능22");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","div_cont.form.div_right.form.div_down.form.mae_00_01_02","value","ds_data","약품수량22");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","div_cont.form.div_right.form.div_down.form.mae_00_01_00_01","value","ds_data","약품수량23");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_01_00","value","ds_data","약품효능23");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_02","value","ds_data","약품정보23");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_02","value","ds_data","약품정보24");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_01_00","value","ds_data","약품효능24");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_01","value","ds_data","약품수량24");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item97","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_01","value","ds_data","약품수량25");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item98","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_01_00","value","ds_data","약품효능25");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item99","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_02","value","ds_data","약품정보25");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item100","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_02","value","ds_data","약품정보26");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item101","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_01_00","value","ds_data","약품효능26");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item102","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_01","value","ds_data","약품수량26");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item103","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_01","value","ds_data","약품수량27");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item104","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_01_00","value","ds_data","약품효능27");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item105","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_02","value","ds_data","약품정보27");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item106","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_02","value","ds_data","약품정보28");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item107","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_01_00","value","ds_data","약품효능28");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item108","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_01","value","ds_data","약품수량28");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item109","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_01","value","ds_data","약품수량29");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item110","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_01_00","value","ds_data","약품효능29");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item111","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_02","value","ds_data","약품정보29");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item112","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_02","value","ds_data","약품정보30");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item113","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_01_00","value","ds_data","약품효능30");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item114","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_01","value","ds_data","약품수량30");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item115","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_01","value","ds_data","약품수량31");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item116","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_01_00","value","ds_data","약품효능31");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item117","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_02","value","ds_data","약품정보31");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item118","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_02","value","ds_data","약품정보32");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item119","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_01_00","value","ds_data","약품효능32");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item120","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","약품수량32");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item121","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","약품수량33");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item122","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_01_00","value","ds_data","약품효능33");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item123","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_02","value","ds_data","약품정보33");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item124","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_02","value","ds_data","약품정보34");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item125","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00","value","ds_data","약품효능35");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item126","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00","value","ds_data","약품효능34");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item127","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","약품수량34");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item128","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","약품수량35");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item129","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_02","value","ds_data","약품정보35");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item130","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_02","value","ds_data","약품정보36");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item131","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00","value","ds_data","약품효능36");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item132","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","약품수량36");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item133","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","약품수량37");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item134","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00","value","ds_data","약품효능37");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item135","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_02","value","ds_data","약품정보37");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item136","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_02","value","ds_data","약품정보38");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item137","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00","value","ds_data","약품효능38");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item138","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","약품수량38");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item139","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","약품수량39");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item140","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00","value","ds_data","약품효능39");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item141","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_02","value","ds_data","약품정보39");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item142","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","약품정보40");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item143","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","약품효능40");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item144","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","약품수량40");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","div_cont.form.div_right.form.div_down.form.cal_date_to","value","ds_data","유통기한01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","div_cont.form.div_right.form.div_down.form.cal_date_to_pic","value","ds_data","유통기한01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","div_cont.form.div_right.form.div_down.form.cal_date_to00","value","ds_data","유통기한02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00","value","ds_data","유통기한02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item145","div_cont.form.div_right.form.div_down.form.cal_date_to00_00","value","ds_data","유통기한03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item146","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00","value","ds_data","유통기한03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item147","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00","value","ds_data","유통기한04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item148","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00","value","ds_data","유통기한04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item149","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00","value","ds_data","유통기한05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item150","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00","value","ds_data","유통기한05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item151","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00","value","ds_data","유통기한06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item152","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00","value","ds_data","유통기한06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item153","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_00","value","ds_data","유통기한07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item154","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_00","value","ds_data","유통기한07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item155","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_00_00","value","ds_data","유통기한08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item156","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_00_00","value","ds_data","유통기한08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item157","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_00_00_00","value","ds_data","유통기한09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item158","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_00_00_00","value","ds_data","유통기한09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item159","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_00_00_00_00","value","ds_data","유통기한10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item160","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_00_00_00_00","value","ds_data","유통기한10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item161","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_00_00_00_00_00","value","ds_data","유통기한11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item162","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_00_00_00_00_00","value","ds_data","유통기한11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item163","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_00_00_00_00_00_00","value","ds_data","유통기한12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item164","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00","value","ds_data","유통기한12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item165","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","유통기한13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item166","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","유통기한13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item167","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","유통기한14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item168","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","유통기한14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item169","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","유통기한15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item170","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","유통기한15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item171","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","유통기한16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item172","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","유통기한16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item173","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","유통기한17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item174","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","유통기한17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item175","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","유통기한18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item176","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","유통기한18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item177","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","유통기한19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item178","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","유통기한19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item179","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","유통기한20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item180","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","유통기한20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item181","div_cont.form.div_right.form.div_down.form.cal_date_to01","value","ds_data","유통기한21");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item182","div_cont.form.div_right.form.div_down.form.cal_date_to_pic01","value","ds_data","유통기한21");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item183","div_cont.form.div_right.form.div_down.form.cal_date_to00_01","value","ds_data","유통기한22");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item184","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_01","value","ds_data","유통기한22");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item185","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_01","value","ds_data","유통기한23");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item186","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_01","value","ds_data","유통기한23");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item187","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_01","value","ds_data","유통기한24");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item188","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_01","value","ds_data","유통기한24");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item189","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_01","value","ds_data","유통기한25");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item190","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_01","value","ds_data","유통기한25");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item191","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_01","value","ds_data","유통기한26");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item192","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_01","value","ds_data","유통기한26");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item193","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_00_01","value","ds_data","유통기한27");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item194","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_00_01","value","ds_data","유통기한27");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item195","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_00_00_01","value","ds_data","유통기한28");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item196","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_00_00_01","value","ds_data","유통기한28");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item197","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_00_00_00_01","value","ds_data","유통기한29");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item198","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_00_00_00_01","value","ds_data","유통기한29");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item199","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_00_00_00_00_01","value","ds_data","유통기한30");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item200","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_00_00_00_00_01","value","ds_data","유통기한30");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item201","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_00_00_00_00_00_01","value","ds_data","유통기한31");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item202","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_00_00_00_00_00_01","value","ds_data","유통기한31");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item203","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","유통기한32");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item204","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","유통기한32");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item205","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","유통기한33");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item206","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","유통기한33");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item207","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","유통기한34");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item208","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","유통기한34");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item209","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","유통기한35");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item210","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","유통기한35");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item211","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","유통기한36");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item212","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","유통기한36");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item213","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","유통기한37");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item214","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","유통기한37");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item215","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","유통기한38");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item216","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","유통기한38");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item217","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","유통기한39");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item218","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","유통기한39");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item219","div_cont.form.div_right.form.div_down.form.cal_date_to00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","유통기한40");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item220","div_cont.form.div_right.form.div_down.form.cal_date_to_pic00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","유통기한40");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00204.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00204.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00204.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00203
         * 화면명   	: 2-04 간호기록소독일지
         * 화면설명 	:
         * 작성일   	: 2022-06-17
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

        	if(Sct.Util.isEmpty(this.ds_data.getColumn(this.ds_data.rowposition, "점검확인01"))){
        		alert("보관함 잠금장치 작동유무 확인를 기록하세요!");
        		return false;
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(this.ds_data.rowposition, "점검확인02"))){
        		alert("상비약품 목록수 확인을 기록하세요!");
        		return false;
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(this.ds_data.rowposition, "점검확인03"))){
        		alert("상비약품 재고수량 확인을 기록하세요!");
        		return false;
        	}

        	for(let i = 0; i<40; i++){
        		let test_number = String(i+1).padStart(2, "0");
        		if(!Sct.Util.isEmpty(this.ds_data.getColumn(this.ds_data.rowposition,"약품정보" + test_number))){
        			if(new Date() > new Date(this.ds_data.getColumn(this.ds_data.rowposition,"유통기한" + test_number))){
        				alert("약품유효기간을 확인하세요!")
        				return false;
        			}
        		}
        	}


        	if(this.ds_data.getRowType(this.ds_data.rowposition) == 2){
        		const svcId = "searchChk";
        		const params = "/commonController.do";
        		const inDatasets = "";
        		const outDatasets = "ds_data_chk=output1";
        		const argument = "method=getList "
        					   + "sqlId=DAY00204.DAY00204_DS_DATA_CHK "
        					   + "sicode=" + this.ds_data.getColumn(0, "sicode") + " "
        					   + "hd_date=" + this.ds_data.getColumn(0, "점검일") + " ";

        		const callbackFunc = "fn_callback";
        		Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);

        		if(this.ds_data_chk.rowcount > 0){
        			alert("기록되어있습니다. 점검일을 수정하세요!");
        			return false;
        		}
        	}

        	this.fn_make_data();

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
        				   + "sqlId=DAY00204.DAY00204_DS_LIST_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.fn_searchDetail = function (row){

        	const svcId = "searchDetail";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_data=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00204.DAY00204_DS_DATA_S' "
        				   + "sicode=" + this.ds_list.getColumn(row, "sicode") + " "
        				   + "hd_number=" + this.ds_list.getColumn(row, "hd_number") + " "
        				   + "hd_date=" + this.ds_list.getColumn(row, "hd_date") + " ";

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
        				   + "sqlId=DAY00204.DAY00204_DS_DATA_D ";

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
        			const name = this.ds_data.getColumn(0, "점검자");
        			const id = this.ds_data.getColumn(0, "점검코드");
        			const dutyname = this.ds_data.getColumn(0, "점검직종");
        			this.ds_data.setColumn(0, "VIEW_MANAGER", name + "/" + dutyname + "/" + id);
        		}else if(strSvcID == "save"){
        			this.div_cont.form.div_right.form.div_up.form.cal_date_pic.set_readonly(true);
        			this.fn_search();
        			this.row = 0;
        		}else if(strSvcID == "delete"){
        			this.fn_search();
        		}else if(strSvcID == "searchHomeDrug"){

        			for(let i = 0; i<this.ds_homedrug.rowcount; i++){
        				let row_number = String(i+1).padStart(2, "0");
        				this.ds_data.setColumn(this.ds_data.rowposition, "약품정보"+row_number, this.ds_homedrug.getColumn(i, "약품명"));
        				this.ds_data.setColumn(this.ds_data.rowposition, "약품효능"+row_number, this.ds_homedrug.getColumn(i, "효능"));
        				this.ds_data.setColumn(this.ds_data.rowposition, "약품수량"+row_number, this.ds_homedrug.getColumn(i, "수량"));
        				this.ds_data.setColumn(this.ds_data.rowposition, "유통기한"+row_number, this.ds_homedrug.getColumn(i, "유통기한"));
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
        				this.ds_data.setColumn(0, "점검자", name1);
        				this.ds_data.setColumn(0, "점검코드", staffid1);
        				this.ds_data.setColumn(0, "점검직종", dutyname1);
        				this.ds_data.setColumn(0, "VIEW_MANAGER", name1 + "/" + dutyname1 +"/" + staffid1);
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
        this.div_cont_div_left_grd_list_oncellclick = function(obj,e)
        {
        	if(this.ds_data.getRowType(this.ds_data.rowposition) == 2){		return;
        	}
        	this.row = e.row;
        	this.fn_searchDetail(this.row);
        };

        this.div_func_btn_new_onclick = function(obj,e)
        {
        	this.ds_data.clearData();
        	this.div_cont.form.div_right.form.div_up.form.cal_date_pic.set_readonly(false);
        	const aRow = this.ds_data.addRow();
        	this.ds_data.setColumn(aRow, "sicode", fv_sicode);
        	this.ds_data.setColumn(aRow, "점검일", Sct.Util.getToday());
        	this.ds_data.setColumn(aRow, "점검자", this.fv_staff_name);
        	this.ds_data.setColumn(aRow, "점검코드", this.fv_staff_id);
        	this.ds_data.setColumn(aRow, "점검직종", this.fv_staff_dutyname);
        	this.ds_data.setColumn(aRow, "VIEW_MANAGER", this.fv_staff_name + "/" + this.fv_staff_dutyname + "/" + this.fv_staff_id);

        	for(let i = 0; i<60; i++){
        		const i_number = String(i+1).padStart(2, "0");
        		this.ds_data.setColumn(aRow, "약품정보"+ i_number, "");
        		this.ds_data.setColumn(aRow, "약품효능"+ i_number, "");
        	}

        	this.div_cont.form.div_right.form.div_up.form.edt_00_01.set_value("잠금장치 이상무");
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

        this.div_cont_div_right_div_up_btn_record_onclick = function(obj,e){

        	const param = {
        			SICODE : fv_sicode
        	};

        	Sct.popup(this, "", 450, 600, "", param, "DAY_POP::DAY00204_P01.xfdl", "fn_popCallback");

        };

        this.div_func_btn_report1_onclick = function(obj,e)
        {
        	if (Sct.Util.isEmpty(this.ds_data.getColumn(0, "점검번호"))) return;

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00204_R01.xfdl";
        	const popupName = "상비약품점검일지";

        	trace(this.div_func.form.chk_sign.value);

        	params = {
        		sicode : fv_sicode
        	,	chknum : this.ds_data.getColumn(0, "점검번호")
        	,	sign : this.div_func.form.chk_sign.value
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };


        this.div_cont_div_right_div_up_btn_record02_onclick = function(obj,e)
        {
        	const svcId = "searchHomeDrug";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_homedrug=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00204.DAY00204_DS_HOMEDRUG_S' ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.div_cont_div_right_div_up_btn_record03_onclick = function(obj,e)
        {
        	let list = 0;
        	let qty = 0;

        	//정규식
        	let pattern1 = /[0-9]{2,}/; //숫자
        	let pattern2 = /[a-zA-Z]{3,}/; //영어
        	let pattern3 = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,}/; //한글

        	for(let i = 0; i<60; i++){
        		const list_number = String(i+1).padStart(2, "0");
        		const sub_value = this.ds_data.getColumn(this.ds_data.rowposition, "약품정보"+ list_number);

        		if(!Sct.Util.isEmpty(sub_value)){
        			if(pattern1.test(sub_value) || pattern2.test(sub_value) || pattern3.test(sub_value) ){
        				list += 1;
        				const sub_qty = this.ds_data.getColumn(this.ds_data.rowposition, "약품수량"+ list_number);
        				qty += Number(sub_qty);
        			}
        		}
        	}

        	this.div_cont.form.div_right.form.div_up.form.edt_00_01.set_value("잠금장치 이상무");
        	this.div_cont.form.div_right.form.div_up.form.edt_00_01_00_00.set_value("약품목록수 = "+ list + " 가지");
        	this.div_cont.form.div_right.form.div_up.form.edt_00_01_00.set_value("약품총재고량 = "+ qty + " 개");

        };

        this.div_search_cmb_year_onitemchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0, "date_from", e.postvalue + '0101');
        	this.ds_search.setColumn(0, "date_to", e.postvalue + '1231');
        	this.ds_list.clearData();

        	this.fn_search();
        };

        this.fn_make_data = function(){
        	for(let i = 0; i<40; i++){
        		let p_number = String(i+1).padStart(2, "0");
        			let value = this.ds_data.getColumn(this.ds_data.rowposition, "약품효능"+ p_number);
        			let byte_length = value.byteLength();
        			if(byte_length <= 20){
        				let number = 20 - Number(byte_length)
        				for(let k = 0; k<number; k++){
        					value += " ";
        				}
        			}else{
        				while(byte_length > 20){
        					value = value.slice(0, -1);
        					byte_length = value.byteLength();
        				}
        			}
        		this.ds_data.setColumn(this.ds_data.rowposition, "약품효능"+ p_number, value);
        	}

        	for(let i = 0; i<60; i++){
        		const d_number = String(i+1).padStart(2, "0");
        		const d_value = this.ds_data.getColumn(this.ds_data.rowposition, "유통기한"+ d_number);
        		trace("d_value==="+d_value);
        		if(!Sct.Util.isEmpty(d_value)){
        			if(d_value.length == 8){
        				let year = String(d_value).substr(0,4);
        				let month = String(d_value).substr(4,2);
        				let day = String(d_value).substr(6,2);
        				const yyyymmdd = year + "." + month + "." + day;
        				this.ds_data.setColumn(this.ds_data.rowposition, "유통기한"+ d_number, yyyymmdd);
        			}
        		}
        	}
        }

        this.make_byte_30_edit = function(obj,e)
        {
        	let edit_value = String(e.postvalue);
        	let edit_value_byte_length = edit_value.byteLength();
        	if(edit_value_byte_length > 30){
        		while(edit_value_byte_length > 30){
        			edit_value = edit_value.slice(0, -1);
        			edit_value_byte_length = edit_value.byteLength();
        		}
        	}
        	obj.set_value(edit_value);
        };

        this.make_byte_20_edit = function(obj,e)
        {
        	let edit_value = String(e.postvalue);
        	let edit_value_byte_length = edit_value.byteLength();
        	if(edit_value_byte_length > 20){
        		while(edit_value_byte_length > 20){
        			edit_value = edit_value.slice(0, -1);
        			edit_value_byte_length = edit_value.byteLength();
        		}
        	}
        	obj.set_value(edit_value);
        };

        this.set_caret_0 = function(obj,e)
        {
        	obj.setCaretPos(0);
        };

        //this.set_date = function(obj:nexacro.MaskEdit,e:nexacro.ChangeEventInfo)
        //{
        //	for(let i = 0; i<e.postvalue.length; i++){
        //		if(Sct.Util.isEmpty(e.postvalue[i]) || e.postvalue[i] == " "){
        //			obj.set_value(null)
        //		}
        //	}
        //};




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("oncellclick",this.div_cont_div_left_grd_list_oncellclick,this);
            this.div_cont.form.div_right.form.div_up.form.btn_manager.addEventHandler("onclick",this.btn_manager_onclick,this);
            this.div_cont.form.div_right.form.div_up.form.btn_record02.addEventHandler("onclick",this.div_cont_div_right_div_up_btn_record02_onclick,this);
            this.div_cont.form.div_right.form.div_up.form.btn_record03.addEventHandler("onclick",this.div_cont_div_right_div_up_btn_record03_onclick,this);
            this.div_cont.form.div_right.form.div_up.form.btn_record01.addEventHandler("onclick",this.div_cont_div_right_div_up_btn_record_onclick,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_01.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_01.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_01.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_01.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_01.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_01.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_01.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_01.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_01.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_01.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_01.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_01.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_01.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_01.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_01.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_01.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_01.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_01.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_01.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_01.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_01.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_01.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_01.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_01.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_01.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_01.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_01.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_01.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_02.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_02.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_01_00.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_01_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_02.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_02.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_01_00.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_01_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_01_00.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_01_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_02.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_02.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_02.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_02.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_01_00.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_01_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_01_00.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_01_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_02.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_02.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_02.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_02.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_01_00.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_01_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_01_00.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_01_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_02.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_02.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_02.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_02.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_01_00.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_01_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_01_00.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_01_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_02.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_02.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_02.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_02.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_01_00.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_01_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_01_00.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_01_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_02.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_02.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_02.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_02.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_01_00.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_01_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_01_00.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_01_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_02.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_02.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_02.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_02.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_02.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_02.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_02.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_02.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_02.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_02.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_02.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_02.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_02.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_02.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01.addEventHandler("onchanged",this.make_byte_30_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("onchanged",this.make_byte_20_edit,this);
            this.div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("oneditclick",this.set_caret_0,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.cmb_year.addEventHandler("onitemchanged",this.div_search_cmb_year_onitemchanged,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.div_func_btn_report1_onclick,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_func.form.btn_delete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.div_func.form.btn_new.addEventHandler("onclick",this.div_func_btn_new_onclick,this);
        };
        this.loadIncludeScript("DAY00204.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
