(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00203");
            this.set_titletext("2-03 간호기록소독일지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"d_number\" type=\"STRING\" size=\"256\"/><Column id=\"d_date\" type=\"DATE\" size=\"256\"/><Column id=\"소독담당\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드\" type=\"STRING\" size=\"256\"/><Column id=\"소독방법\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"year\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"DATE\" size=\"256\"/><Column id=\"date_to\" type=\"DATE\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_kind", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">1</Col><Col id=\"CMNM\">1-고압증기멸균</Col></Row><Row><Col id=\"CMCD\">2</Col><Col id=\"CMNM\">2-건열멸균소독</Col></Row><Row><Col id=\"CMCD\">3</Col><Col id=\"CMNM\">3-약품침적</Col></Row><Row><Col id=\"CMCD\">4</Col><Col id=\"CMNM\">4-자비소독</Col></Row><Row><Col id=\"CMCD\">5</Col><Col id=\"CMNM\">5-자외선소독</Col></Row><Row><Col id=\"CMCD\">6</Col><Col id=\"CMNM\">6-적외선소독</Col></Row><Row><Col id=\"CMCD\">7</Col><Col id=\"CMNM\">7-열탕소독</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"소독번호\" type=\"STRING\" size=\"256\"/><Column id=\"소독일\" type=\"DATE\" size=\"256\"/><Column id=\"소독담당\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드\" type=\"STRING\" size=\"256\"/><Column id=\"소독방법\" type=\"STRING\" size=\"256\"/><Column id=\"보관장소\" type=\"STRING\" size=\"256\"/><Column id=\"disin_list_1\" type=\"STRING\" size=\"256\"/><Column id=\"j_qty_1\" type=\"INT\" size=\"256\"/><Column id=\"s_qty_1\" type=\"INT\" size=\"256\"/><Column id=\"disin_list_2\" type=\"STRING\" size=\"256\"/><Column id=\"j_qty_2\" type=\"INT\" size=\"256\"/><Column id=\"s_qty_2\" type=\"INT\" size=\"256\"/><Column id=\"disin_list_3\" type=\"STRING\" size=\"256\"/><Column id=\"j_qty_3\" type=\"INT\" size=\"256\"/><Column id=\"s_qty_3\" type=\"INT\" size=\"256\"/><Column id=\"disin_list_4\" type=\"STRING\" size=\"256\"/><Column id=\"j_qty_4\" type=\"INT\" size=\"256\"/><Column id=\"s_qty_4\" type=\"INT\" size=\"256\"/><Column id=\"disin_list_5\" type=\"STRING\" size=\"256\"/><Column id=\"j_qty_5\" type=\"INT\" size=\"256\"/><Column id=\"s_qty_5\" type=\"INT\" size=\"256\"/><Column id=\"disin_list_6\" type=\"STRING\" size=\"256\"/><Column id=\"j_qty_6\" type=\"INT\" size=\"256\"/><Column id=\"s_qty_6\" type=\"INT\" size=\"256\"/><Column id=\"disin_list_7\" type=\"STRING\" size=\"256\"/><Column id=\"j_qty_7\" type=\"INT\" size=\"256\"/><Column id=\"s_qty_7\" type=\"INT\" size=\"256\"/><Column id=\"disin_list_8\" type=\"STRING\" size=\"256\"/><Column id=\"j_qty_8\" type=\"INT\" size=\"256\"/><Column id=\"s_qty_8\" type=\"INT\" size=\"256\"/><Column id=\"disin_list_9\" type=\"STRING\" size=\"256\"/><Column id=\"j_qty_9\" type=\"INT\" size=\"256\"/><Column id=\"s_qty_9\" type=\"INT\" size=\"256\"/><Column id=\"disin_list_10\" type=\"STRING\" size=\"256\"/><Column id=\"j_qty_10\" type=\"INT\" size=\"256\"/><Column id=\"s_qty_10\" type=\"INT\" size=\"256\"/><Column id=\"disin_list_11\" type=\"STRING\" size=\"256\"/><Column id=\"j_qty_11\" type=\"INT\" size=\"256\"/><Column id=\"s_qty_11\" type=\"INT\" size=\"256\"/><Column id=\"disin_list_12\" type=\"STRING\" size=\"256\"/><Column id=\"j_qty_12\" type=\"INT\" size=\"256\"/><Column id=\"s_qty_12\" type=\"INT\" size=\"256\"/><Column id=\"disin_list_13\" type=\"STRING\" size=\"256\"/><Column id=\"j_qty_13\" type=\"INT\" size=\"256\"/><Column id=\"s_qty_13\" type=\"INT\" size=\"256\"/><Column id=\"disin_list_14\" type=\"STRING\" size=\"256\"/><Column id=\"j_qty_14\" type=\"INT\" size=\"256\"/><Column id=\"s_qty_14\" type=\"INT\" size=\"256\"/><Column id=\"disin_list_15\" type=\"STRING\" size=\"256\"/><Column id=\"j_qty_15\" type=\"INT\" size=\"256\"/><Column id=\"s_qty_15\" type=\"INT\" size=\"256\"/><Column id=\"disin_list_16\" type=\"STRING\" size=\"256\"/><Column id=\"j_qty_16\" type=\"INT\" size=\"256\"/><Column id=\"s_qty_16\" type=\"INT\" size=\"256\"/><Column id=\"disin_list_17\" type=\"STRING\" size=\"256\"/><Column id=\"j_qty_17\" type=\"INT\" size=\"256\"/><Column id=\"s_qty_17\" type=\"INT\" size=\"256\"/><Column id=\"disin_list_18\" type=\"STRING\" size=\"256\"/><Column id=\"j_qty_18\" type=\"INT\" size=\"256\"/><Column id=\"s_qty_18\" type=\"INT\" size=\"256\"/><Column id=\"disin_list_19\" type=\"STRING\" size=\"256\"/><Column id=\"j_qty_19\" type=\"INT\" size=\"256\"/><Column id=\"s_qty_19\" type=\"INT\" size=\"256\"/><Column id=\"disin_list_20\" type=\"STRING\" size=\"256\"/><Column id=\"j_qty_20\" type=\"INT\" size=\"256\"/><Column id=\"s_qty_20\" type=\"INT\" size=\"256\"/><Column id=\"disin_list_21\" type=\"STRING\" size=\"256\"/><Column id=\"j_qty_21\" type=\"INT\" size=\"256\"/><Column id=\"s_qty_21\" type=\"INT\" size=\"256\"/><Column id=\"disin_list_22\" type=\"STRING\" size=\"256\"/><Column id=\"j_qty_22\" type=\"INT\" size=\"256\"/><Column id=\"s_qty_22\" type=\"INT\" size=\"256\"/><Column id=\"disin_list_23\" type=\"STRING\" size=\"256\"/><Column id=\"j_qty_23\" type=\"INT\" size=\"256\"/><Column id=\"s_qty_23\" type=\"INT\" size=\"256\"/><Column id=\"disin_list_24\" type=\"STRING\" size=\"256\"/><Column id=\"j_qty_24\" type=\"INT\" size=\"256\"/><Column id=\"s_qty_24\" type=\"INT\" size=\"256\"/><Column id=\"disin_list_25\" type=\"STRING\" size=\"256\"/><Column id=\"j_qty_25\" type=\"INT\" size=\"256\"/><Column id=\"s_qty_25\" type=\"INT\" size=\"256\"/><Column id=\"VIEW_MANAGER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data_chk", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"소독일\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_disincode", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"기구번호\" type=\"STRING\" size=\"256\"/><Column id=\"기구명\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_chk", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"d_number\" type=\"STRING\" size=\"256\"/><Column id=\"d_date\" type=\"DATE\" size=\"256\"/><Column id=\"소독담당\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드\" type=\"STRING\" size=\"256\"/><Column id=\"소독방법\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_background("##ff8d00");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"출력\"/><Cell col=\"2\" text=\"소독일\"/><Cell col=\"3\" text=\"점검자\"/><Cell col=\"4\" text=\"소독방법\"/></Band><Band id=\"body\"><Cell colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"2\" text=\"bind:d_date\" displaytype=\"date\" expandchar=\"dot\"/><Cell col=\"3\" text=\"bind:소독담당\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:소독방법\"/></Band></Format></Formats>");
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
            obj.set_text("소독일");
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
            obj.set_text("① 간호기구 목록조회");
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

            obj = new Static("sta_body1","0","0","1210","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00","0","sta_body1:-1","1210","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00","0","sta_body1_00:-1","1210","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00","0","sta_body1_00_00:-1","1210","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00","0","sta_body1_00_00_00:-1","1210","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_00","0","sta_body1_00_00_00_00:-1","1210","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_00_00","0","sta_body1_00_00_00_00_00:-1","1210","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_01","0","sta_body1_00_00_00_00_00_00:-1","1210","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_01","0","sta_body1_01:-1","1210","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01","0","sta_body1_00_01:-1","1210","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_01","0","sta_body1_00_00_01:-1","1210","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_01","0","sta_body1_00_00_00_01:-1","1210","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_00_01","0","sta_body1_00_00_00_00_01:-1","1210","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_00_00_00","0","sta_body1_00_00_00_00_00_01:-1","1210","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_00_00_00_01_00_00","0","600","1210","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_00_01_00","0","628","1210","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_00_00_00_00","0","661","1210","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_00_00_00_01","0","552","1210","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_00_01_01","0","528","1210","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_01_00","0","504","1210","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_01_00","0","480","1210","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00","0","456","1210","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_01_00","0","432","1210","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00","0","408","1210","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_00_00_01","0","384","1210","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_02","0","sta_body1_00_00_00_00_00_00_00:-1","1210","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_00_02","0","sta_body1_00_00_00_00_02:-1","1210","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_00_00_00_01_00","0","576","1210","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_head1_00","0","0","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("27");
            obj.set_text("번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00","0","24","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("28");
            obj.set_textAlign("center");
            obj.set_value("[01]");
            obj.set_readonly("true");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","0","48","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("29");
            obj.set_textAlign("center");
            obj.set_value("[02]");
            obj.set_readonly("true");
            obj.set_text("[02]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","0","72","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("30");
            obj.set_textAlign("center");
            obj.set_value("[03]");
            obj.set_readonly("true");
            obj.set_text("[03]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00","0","96","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("31");
            obj.set_textAlign("center");
            obj.set_value("[04]");
            obj.set_readonly("true");
            obj.set_text("[04]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00","0","120","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("32");
            obj.set_textAlign("center");
            obj.set_value("[05]");
            obj.set_readonly("true");
            obj.set_text("[05]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00","0","144","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("33");
            obj.set_textAlign("center");
            obj.set_value("[06]");
            obj.set_readonly("true");
            obj.set_text("[06]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00","0","168","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("34");
            obj.set_textAlign("center");
            obj.set_value("[07]");
            obj.set_readonly("true");
            obj.set_text("[07]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00","0","192","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("35");
            obj.set_textAlign("center");
            obj.set_value("[08]");
            obj.set_readonly("true");
            obj.set_text("[08]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00","0","216","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("36");
            obj.set_textAlign("center");
            obj.set_value("[09]");
            obj.set_readonly("true");
            obj.set_text("[09]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00","0","240","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("37");
            obj.set_textAlign("center");
            obj.set_value("[10]");
            obj.set_readonly("true");
            obj.set_text("[10]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00","0","264","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("38");
            obj.set_textAlign("center");
            obj.set_value("[11]");
            obj.set_readonly("true");
            obj.set_text("[11]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00","0","288","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("39");
            obj.set_textAlign("center");
            obj.set_value("[12]");
            obj.set_readonly("true");
            obj.set_text("[12]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00","0","312","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("40");
            obj.set_textAlign("center");
            obj.set_value("[13]");
            obj.set_readonly("true");
            obj.set_text("[13]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","336","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("41");
            obj.set_textAlign("center");
            obj.set_value("[14]");
            obj.set_readonly("true");
            obj.set_text("[14]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","360","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("42");
            obj.set_textAlign("center");
            obj.set_value("[15]");
            obj.set_readonly("true");
            obj.set_text("[15]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","384","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("43");
            obj.set_textAlign("center");
            obj.set_value("[16]");
            obj.set_readonly("true");
            obj.set_text("[16]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","408","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("44");
            obj.set_textAlign("center");
            obj.set_value("[17]");
            obj.set_readonly("true");
            obj.set_text("[17]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","432","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("45");
            obj.set_textAlign("center");
            obj.set_value("[18]");
            obj.set_readonly("true");
            obj.set_text("[18]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","456","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("46");
            obj.set_textAlign("center");
            obj.set_value("[19]");
            obj.set_readonly("true");
            obj.set_text("[19]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","480","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("47");
            obj.set_textAlign("center");
            obj.set_value("[20]");
            obj.set_readonly("true");
            obj.set_text("[20]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","504","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("48");
            obj.set_textAlign("center");
            obj.set_value("[21]");
            obj.set_readonly("true");
            obj.set_text("[21]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","528","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("49");
            obj.set_textAlign("center");
            obj.set_value("[22]");
            obj.set_readonly("true");
            obj.set_text("[22]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","552","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("50");
            obj.set_textAlign("center");
            obj.set_value("[23]");
            obj.set_readonly("true");
            obj.set_text("[23]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","576","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("51");
            obj.set_textAlign("center");
            obj.set_value("[24]");
            obj.set_readonly("true");
            obj.set_text("[24]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","600","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("52");
            obj.set_textAlign("center");
            obj.set_value("[25]");
            obj.set_readonly("true");
            obj.set_text("[25]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_head1","0","628","100","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("54");
            obj.set_text("소독방법");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_head1_01","0","661","100","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("55");
            obj.set_text("소독장소");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00","1110","0","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("56");
            obj.set_text("소독수량");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_00","1010","0","101","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("57");
            obj.set_text("재고수량");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_00_00","99","0","912","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("58");
            obj.set_text("소독기구명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01","99","24","912","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("59");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00","99","48","912","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("60");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00","99","72","912","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("61");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00","99","96","912","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("62");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00","99","120","912","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("63");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00","99","144","912","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("64");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00","99","168","912","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("65");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00","99","192","912","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("66");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00","99","216","912","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("67");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00","99","240","912","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("68");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00","99","264","912","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("69");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00","99","288","912","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("70");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00","99","312","912","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("71");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00","99","336","912","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("72");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","99","360","912","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("73");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","99","384","912","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("74");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","99","408","912","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("75");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","99","432","912","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("76");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","99","456","912","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("77");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","99","480","912","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("78");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","99","504","912","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("79");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","99","528","912","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("80");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","99","552","912","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("81");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","99","576","912","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("82");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","99","600","912","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("83");
            obj.set_textAlign("left");
            obj.set_maxlength("15");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","99","630","280","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("84");
            obj.set_textAlign("left");
            obj.set_maxlength("20");
            obj.set_tooltiptext("소독방법");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","99","663","840","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("85");
            obj.set_textAlign("left");
            obj.set_maxlength("60");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Combo("cmb_00","381","630","150","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("86");
            obj.set_innerdataset("ds_kind");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_s_1","1110","24","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("87");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01","1010","48","101","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("88");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_s_2","1110","48","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("89");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00","1010","72","101","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("90");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_s_3","1110","72","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("91");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00","1010","96","101","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("92");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_s_4","1110","96","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("93");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_s_5","1110","120","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("94");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00","1010","120","101","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("95");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_s_6","1110","144","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("96");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00","1010","144","101","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("97");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00","1010","168","101","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("98");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_s_7","1110","168","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("99");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_s_8","1110","192","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("100");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00","1010","192","101","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("101");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_s_9","1110","216","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("102");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00","1010","216","101","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("103");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_s_10","1110","240","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("104");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00","1010","240","101","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("105");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_s_11","1110","264","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("106");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00","1010","264","101","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("107");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_s_12","1110","288","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("108");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00","1010","288","101","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("109");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_s_13","1110","312","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("110");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00","1010","312","101","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("111");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_s_14","1110","336","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("112");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00","1010","336","101","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("113");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_s_15","1110","360","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("114");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00","1010","360","101","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("115");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_s_16","1110","384","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("116");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1010","384","101","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("117");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_s_17","1110","408","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("118");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1010","408","101","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("119");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_s_18","1110","432","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("120");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1010","432","101","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("121");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_s_19","1110","456","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("122");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1010","456","101","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("123");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_s_20","1110","480","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("124");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1010","480","101","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("125");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_s_21","1110","504","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("126");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1010","504","101","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("127");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_s_22","1110","528","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("128");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1010","528","101","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("129");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_s_23","1110","552","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("130");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1010","552","101","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("131");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_s_24","1110","576","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("132");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1010","576","101","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("133");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_s_25","1110","600","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("134");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1010","600","101","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("135");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01_01","1010","24","101","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("136");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
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

            obj = new CheckBox("chk_sign","403","7","65","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("결재란");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report1","470","7","175","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("간호기구소독일지(7일)");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report2","650","7","180","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("월간 간호기구소독집계");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_no_value","85","8","80","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_no","20","8","58","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("4");
            obj.set_text("기록번호 : ");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_save","1085","7","70","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_delete","1160","7","70","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_cssclass("btn_delete");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_new","985","7","95","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("7");
            obj.set_text("새로작성");
            obj.set_cssclass("btn_newdoc");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_manager_value","838","7","130","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("8");
            obj.set_text("조회시작일의 월집계");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cmb_year","value","ds_search","year");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_func.form.sta_no_value","text","ds_data","소독번호");
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

            obj = new BindItem("item14","div_cont.form.div_right.form.div_down.form.edt_00_01","value","ds_data","disin_list_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_right.form.div_down.form.edt_00_01_00","value","ds_data","disin_list_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00","value","ds_data","disin_list_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00","value","ds_data","disin_list_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00","value","ds_data","disin_list_5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00","value","ds_data","disin_list_6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00","value","ds_data","disin_list_7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00","value","ds_data","disin_list_8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00","value","ds_data","disin_list_9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00","value","ds_data","disin_list_10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00","value","ds_data","disin_list_11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","disin_list_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","disin_list_13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","disin_list_14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","disin_list_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","disin_list_16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","disin_list_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","disin_list_18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","disin_list_19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","disin_list_20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","disin_list_21");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","disin_list_22");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","disin_list_23");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","disin_list_24");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","disin_list_25");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","소독방법");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item92","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","보관장소");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item93","div_cont.form.div_right.form.div_up.form.cal_date_pic","value","ds_data","소독일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","div_cont.form.div_right.form.div_up.form.cal_date","value","ds_data","소독일");
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

            obj = new BindItem("item13","div_cont.form.div_right.form.div_down.form.mae_00_01_01","value","ds_data","j_qty_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_cont.form.div_right.form.div_down.form.mae_00_01","value","ds_data","j_qty_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_cont.form.div_right.form.div_down.form.mae_00_01_00","value","ds_data","j_qty_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00","value","ds_data","j_qty_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00","value","ds_data","j_qty_5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00","value","ds_data","j_qty_6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00","value","ds_data","j_qty_7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00","value","ds_data","j_qty_8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00","value","ds_data","j_qty_9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00","value","ds_data","j_qty_10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00","value","ds_data","j_qty_11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00","value","ds_data","j_qty_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","j_qty_13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","j_qty_14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","j_qty_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","j_qty_16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","j_qty_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","j_qty_18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","j_qty_19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","j_qty_20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","j_qty_21");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","j_qty_22");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","j_qty_23");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","j_qty_24");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","div_cont.form.div_right.form.div_down.form.mae_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","j_qty_25");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","div_cont.form.div_right.form.div_down.form.mae_s_1","value","ds_data","s_qty_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","div_cont.form.div_right.form.div_down.form.mae_s_2","value","ds_data","s_qty_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","div_cont.form.div_right.form.div_down.form.mae_s_3","value","ds_data","s_qty_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","div_cont.form.div_right.form.div_down.form.mae_s_4","value","ds_data","s_qty_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","div_cont.form.div_right.form.div_down.form.mae_s_5","value","ds_data","s_qty_5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","div_cont.form.div_right.form.div_down.form.mae_s_6","value","ds_data","s_qty_6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","div_cont.form.div_right.form.div_down.form.mae_s_7","value","ds_data","s_qty_7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","div_cont.form.div_right.form.div_down.form.mae_s_8","value","ds_data","s_qty_8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","div_cont.form.div_right.form.div_down.form.mae_s_9","value","ds_data","s_qty_9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","div_cont.form.div_right.form.div_down.form.mae_s_10","value","ds_data","s_qty_10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","div_cont.form.div_right.form.div_down.form.mae_s_11","value","ds_data","s_qty_11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","div_cont.form.div_right.form.div_down.form.mae_s_12","value","ds_data","s_qty_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","div_cont.form.div_right.form.div_down.form.mae_s_13","value","ds_data","s_qty_13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","div_cont.form.div_right.form.div_down.form.mae_s_14","value","ds_data","s_qty_14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","div_cont.form.div_right.form.div_down.form.mae_s_15","value","ds_data","s_qty_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","div_cont.form.div_right.form.div_down.form.mae_s_16","value","ds_data","s_qty_16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","div_cont.form.div_right.form.div_down.form.mae_s_17","value","ds_data","s_qty_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","div_cont.form.div_right.form.div_down.form.mae_s_18","value","ds_data","s_qty_18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","div_cont.form.div_right.form.div_down.form.mae_s_19","value","ds_data","s_qty_19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","div_cont.form.div_right.form.div_down.form.mae_s_20","value","ds_data","s_qty_20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","div_cont.form.div_right.form.div_down.form.mae_s_21","value","ds_data","s_qty_21");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","div_cont.form.div_right.form.div_down.form.mae_s_22","value","ds_data","s_qty_22");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","div_cont.form.div_right.form.div_down.form.mae_s_23","value","ds_data","s_qty_23");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","div_cont.form.div_right.form.div_down.form.mae_s_24","value","ds_data","s_qty_24");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","div_cont.form.div_right.form.div_down.form.mae_s_25","value","ds_data","s_qty_25");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00203.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00203.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00203.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00203
         * 화면명   	: 2-03 간호기록소독일지
         * 화면설명 	:
         * 작성일   	: 2022-06-14
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

        	if(Sct.Util.isEmpty(this.ds_data.getColumn(this.ds_data.rowposition, "소독일"))){
        		alert("소독일은 필수사항입니다!");
        		return false;
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(this.ds_data.rowposition, "소독담당"))){
        		alert("점검자는 필수사항입니다!");
        		return false;
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(this.ds_data.rowposition, "소독방법"))){
        		alert("소독방법은 필수사항입니다!");
        		return false;
        	}

        	if(this.ds_data.getRowType(this.ds_data.rowposition) == 2){
        		const svcId = "searchChk";
        		const params = "/commonController.do";
        		const inDatasets = "";
        		const outDatasets = "ds_data_chk=output1";
        		const argument = "method=getList "
        					   + "sqlId=DAY00203.DAY00203_DS_DATA_CHK "
        					   + "sicode=" + this.ds_data.getColumn(0, "sicode") + " "
        					   + "disin_date=" + this.ds_data.getColumn(0, "소독일") + " ";

        		const callbackFunc = "fn_callback";
        		Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);

        		if(this.ds_data_chk.rowcount > 0){
        			alert("기록되어있습니다. 소독일을 수정하세요!");
        			return false;
        		}
        	}

        	return true;
        };

        // 삭제 전 validation
        this.fn_delete_pre = function(){

        	// 소독번호 없을 시
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"소독번호"))){
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
        				   + "sqlId=DAY00203.DAY00203_DS_LIST_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.fn_searchDetail = function (row){

        	const svcId = "searchDetail";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_data=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00203.DAY00203_DS_DATA_S' "
        				   + "sicode=" + this.ds_list.getColumn(row, "sicode") + " "
        				   + "d_number=" + this.ds_list.getColumn(row, "d_number") + " "
        				   + "d_date=" + this.ds_list.getColumn(row, "d_date") + " ";

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
        				   + "sqlId=DAY00203.DAY00203_DS_DATA_D ";

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
        			const name = this.ds_data.getColumn(0, "소독담당");
        			const id = this.ds_data.getColumn(0, "담당코드");
        			this.ds_data.setColumn(0, "VIEW_MANAGER", name + "/" + id);

        			//단어가 포함되어야한다.
        			this.div_cont.form.div_right.form.div_down.form.cmb_00.set_index(-1);
        			for(let i = 0; i<this.ds_kind.rowcount; i++){
        				let cmnm = String(this.ds_kind.getColumn(i,"CMNM"));
        				let result = String(this.ds_data.getColumn(0, "소독방법")).indexOf(cmnm.substr(2, cmnm.length));
        				if(result == 0){
        					this.div_cont.form.div_right.form.div_down.form.cmb_00.set_index(i);
        					break;
        				}else{
        					continue;
        				}
        			}
        		}else if(strSvcID == "save"){
        			this.div_cont.form.div_right.form.div_up.form.cal_date_pic.set_readonly(true);
        			this.fn_search();
        			this.row = 0;
        		}else if(strSvcID == "delete"){
        			this.fn_search();
        		}else if(strSvcID == "searchDisincode"){
        			for(i = 0; i<this.ds_disincode.rowcount; i++){
        				this.ds_data.setColumn(0, "disin_list_"+(i+1), this.ds_disincode.getColumn(i, "기구명"));
        				this.ds_data.setColumn(0, "j_qty_"+(i+1), this.ds_disincode.getColumn(i, "수량"));
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
        				this.ds_data.setColumn(0, "소독담당", name1);
        				this.ds_data.setColumn(0, "담당코드", staffid1);
        				this.ds_data.setColumn(0, "VIEW_MANAGER", name1 + "/" + staffid1);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "작성자", "");
        				this.ds_data.setColumn(0, "작성코드", "");
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
        this.ds_search_oncolumnchanged = function(obj,e)
        {
        //	if(e.columnid == "year"){
        //		this.ds_search.setColumn(0, "date_from", e.newvalue + '0101');
        //		this.ds_search.setColumn(0, "date_to", e.newvalue + '1231');
        //		this.ds_list.clearData();
        //	}
        //	this.fn_search();
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
        	this.ds_data.setColumn(aRow, "소독일", Sct.Util.getToday());
        	this.ds_data.setColumn(aRow, "소독담당", this.fv_staff_name);
        	this.ds_data.setColumn(aRow, "담당코드", this.fv_staff_id);
        	this.ds_data.setColumn(aRow, "보관장소", "");
        	this.ds_data.setColumn(aRow, "VIEW_MANAGER", this.fv_staff_name + "/" + this.fv_staff_id);

        	this.div_cont.form.div_right.form.div_down.form.cmb_00.set_value(2);
        };

        this.div_cont_div_right_div_down_cmb_00_onitemchanged = function(obj,e){

        	this.ds_data.setColumn(0, "소독방법", String(e.posttext).substr(2, String(e.posttext).length))
        };

        this.btn_manager_onclick = function(obj,e){

        	if(this.ds_data.rowcount < 1){
        		return;
        	}

        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_data.getColumn(0, "소독일")
        	};

        	Sct.popup(this, "employee", 450, 400, "입력담당자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };

        this.div_cont_div_right_div_up_btn_record00_onclick = function(obj,e){

        	const svcId = "searchDisincode";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_disincode=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00203.DAY00203_DS_DISINCODE_S' ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.ds_data_oncolumnchanged = function(obj,e){

        	if(e.columnid == "s_qty_1" || e.columnid == "s_qty_2" || e.columnid == "s_qty_3" || e.columnid == "s_qty_4" || e.columnid == "s_qty_5"
        	|| e.columnid == "s_qty_6" || e.columnid == "s_qty_7" || e.columnid == "s_qty_8" || e.columnid == "s_qty_9" || e.columnid == "s_qty_10"
        	|| e.columnid == "s_qty_11" || e.columnid == "s_qty_12" || e.columnid == "s_qty_13" || e.columnid == "s_qty_14" || e.columnid == "s_qty_15"
        	|| e.columnid == "s_qty_16" || e.columnid == "s_qty_17" || e.columnid == "s_qty_18" || e.columnid == "s_qty_19" || e.columnid == "s_qty_20"
        	|| e.columnid == "s_qty_21" || e.columnid == "s_qty_22" || e.columnid == "s_qty_23" || e.columnid == "s_qty_24" || e.columnid == "s_qty_25"){

        		const s_qty_number = String(e.columnid).substr(6, String(e.columnid).length);
        		const mae_id = "mae_s_" + s_qty_number;
        		if(e.newvalue == 0){
        			this.div_cont.form.div_right.form.div_down.form.all[mae_id].set_background("#ffffff");
        		}else {
        			this.div_cont.form.div_right.form.div_down.form.all[mae_id].set_background("#ff8d00");
        		}
        	}
        };

        this.div_cont_div_right_div_up_btn_record_onclick = function(obj,e){

        	const param = {
        			SICODE : fv_sicode
        	};

        	Sct.popup(this, "disin_list_search", 450, 600, "", param, "DAY_POP::DAY00203_P01.xfdl", "fn_popCallback");

        };

        this.div_func_btn_report1_onclick = function(obj,e)
        {
        	let chk = 0;
        	for(let i = 0; i<this.ds_list.rowcount; i++){
        		if(this.ds_list.getColumn(i,"chk") == 1){
        			chk += 1;
        		}
        	}

        	if(chk == 0){
        		alert("소독일을 선택해주세요!")
        		return;
        	}

        	this.ds_list_chk.clearData();

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00203_R01.xfdl";
        	const popupName = "간호기구소독일지(7일)";

        	let dDate = "";
        	for(let i = 0; i<this.ds_list.rowcount; i++){
        		if(this.ds_list.getColumn(i, "chk") == 1){
        			let _date = get_date_str(this.ds_list.getColumn(i,"d_date"));
        			let aRow = this.ds_list_chk.addRow();
        			this.ds_list_chk.copyRow(aRow, this.ds_list, i);
        			dDate += (_date + ",");
        		}
        	}
        	dDate = dDate.substring(0, dDate.length-1);

        	const maxDate = get_date_str(this.ds_list_chk.getMax("d_date"));
        	const minDate = get_date_str(this.ds_list_chk.getMin("d_date"));

        	params = {
        		sicode : this.ds_data.getColumn(0, "sicode")
        	,	d_date : dDate
        	,   max_date : maxDate
        	,   min_date : minDate
        	,   sign : this.div_func.form.chk_sign.value

        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        this.div_func_btn_report2_onclick = function(obj,e)
        {
        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00203_R02.xfdl";
        	const popupName = "월간 간호기구소독집계";

        	const thisday = this.ds_search.getColumn(0,"date_from");
        	const thismonth = thisday.getMonth();

        	let dDateArr = new Array();
        	let dDate = "";

        	for(let i = 0; i<this.ds_list.rowcount; i++){
        		if(thismonth == this.ds_list.getColumn(i, "d_date").getMonth()){
        			dDateArr.push(get_date_str(this.ds_list.getColumn(i, "d_date")));
        		}
        	}

        	dDate = Math.max.apply(null, dDateArr);

        	const maxDate = get_date_str(new Date(thisday.getYear(), thisday.getMonth()+1, 0))
        	const minDate = get_date_str(new Date(thisday.getYear(), thisday.getMonth(), 1))

        	params = {
        		sicode : this.ds_data.getColumn(0, "sicode")
        	,	d_date : dDate
        	,   max_date : maxDate
        	,   min_date : minDate
        	,   sign : this.div_func.form.chk_sign.value

        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };


        function get_date_str(date)
        {
            var sYear = date.getFullYear();
            var sMonth = date.getMonth() + 1;
            var sDate = date.getDate();

            sMonth = sMonth > 9 ? sMonth : "0" + sMonth;
            sDate  = sDate > 9 ? sDate : "0" + sDate;
            return sYear + sMonth + sDate;
        }

        this.div_search_cmb_year_onitemchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0, "date_from", e.postvalue + '0101');
        	this.ds_search.setColumn(0, "date_to", e.postvalue + '1231');
        	this.ds_list.clearData();

        	this.fn_search();
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
            this.div_cont.form.div_right.form.div_down.form.cmb_00.addEventHandler("onitemchanged",this.div_cont_div_right_div_down_cmb_00_onitemchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.cmb_year.addEventHandler("onitemchanged",this.div_search_cmb_year_onitemchanged,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.div_func_btn_report1_onclick,this);
            this.div_func.form.btn_report2.addEventHandler("onclick",this.div_func_btn_report2_onclick,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_func.form.btn_delete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.div_func.form.btn_new.addEventHandler("onclick",this.div_func_btn_new_onclick,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
            this.ds_data.addEventHandler("oncolumnchanged",this.ds_data_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00203.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
