(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00404");
            this.set_titletext("4-4 송영 일정표·제공계획서(매월)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ord1\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"거주현황\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"등급\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"일수\" type=\"STRING\" size=\"256\"/><Column id=\"아침\" type=\"STRING\" size=\"256\"/><Column id=\"점심\" type=\"STRING\" size=\"256\"/><Column id=\"저녁\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"m_reday\" type=\"STRING\" size=\"256\"/><Column id=\"입소일\" type=\"STRING\" size=\"256\"/><Column id=\"퇴소일\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"생일\" type=\"STRING\" size=\"256\"/><Column id=\"m_regist\" type=\"STRING\" size=\"256\"/><Column id=\"주소\" type=\"STRING\" size=\"256\"/><Column id=\"sajin\" type=\"STRING\" size=\"256\"/><Column id=\"월\" type=\"STRING\" size=\"256\"/><Column id=\"화\" type=\"STRING\" size=\"256\"/><Column id=\"수\" type=\"STRING\" size=\"256\"/><Column id=\"목\" type=\"STRING\" size=\"256\"/><Column id=\"금\" type=\"STRING\" size=\"256\"/><Column id=\"토\" type=\"STRING\" size=\"256\"/><Column id=\"일요일\" type=\"STRING\" size=\"256\"/><Column id=\"이용시간\" type=\"STRING\" size=\"256\"/><Column id=\"이용시작시\" type=\"STRING\" size=\"256\"/><Column id=\"이용시작분\" type=\"STRING\" size=\"256\"/><Column id=\"이용종료시\" type=\"STRING\" size=\"256\"/><Column id=\"이용종료분\" type=\"STRING\" size=\"256\"/><Column id=\"이용차량\" type=\"STRING\" size=\"256\"/><Column id=\"월요시간\" type=\"STRING\" size=\"256\"/><Column id=\"월요시작\" type=\"STRING\" size=\"256\"/><Column id=\"월요종료\" type=\"STRING\" size=\"256\"/><Column id=\"월요시작시\" type=\"STRING\" size=\"256\"/><Column id=\"월요시작분\" type=\"STRING\" size=\"256\"/><Column id=\"월요종료시\" type=\"STRING\" size=\"256\"/><Column id=\"월요종료분\" type=\"STRING\" size=\"256\"/><Column id=\"월요차량\" type=\"STRING\" size=\"256\"/><Column id=\"화요시간\" type=\"STRING\" size=\"256\"/><Column id=\"화요시작\" type=\"STRING\" size=\"256\"/><Column id=\"화요종료\" type=\"STRING\" size=\"256\"/><Column id=\"화요시작시\" type=\"STRING\" size=\"256\"/><Column id=\"화요시작분\" type=\"STRING\" size=\"256\"/><Column id=\"화요종료시\" type=\"STRING\" size=\"256\"/><Column id=\"화요종료분\" type=\"STRING\" size=\"256\"/><Column id=\"화요차량\" type=\"STRING\" size=\"256\"/><Column id=\"수요시간\" type=\"STRING\" size=\"256\"/><Column id=\"수요시작\" type=\"STRING\" size=\"256\"/><Column id=\"수요종료\" type=\"STRING\" size=\"256\"/><Column id=\"수요시작시\" type=\"STRING\" size=\"256\"/><Column id=\"수요시작분\" type=\"STRING\" size=\"256\"/><Column id=\"수요종료시\" type=\"STRING\" size=\"256\"/><Column id=\"수요종료분\" type=\"STRING\" size=\"256\"/><Column id=\"수요차량\" type=\"STRING\" size=\"256\"/><Column id=\"목요시간\" type=\"STRING\" size=\"256\"/><Column id=\"목요시작\" type=\"STRING\" size=\"256\"/><Column id=\"목요종료\" type=\"STRING\" size=\"256\"/><Column id=\"목요시작시\" type=\"STRING\" size=\"256\"/><Column id=\"목요시작분\" type=\"STRING\" size=\"256\"/><Column id=\"목요종료시\" type=\"STRING\" size=\"256\"/><Column id=\"목요종료분\" type=\"STRING\" size=\"256\"/><Column id=\"목요차량\" type=\"STRING\" size=\"256\"/><Column id=\"금요시간\" type=\"STRING\" size=\"256\"/><Column id=\"금요시작\" type=\"STRING\" size=\"256\"/><Column id=\"금요종료\" type=\"STRING\" size=\"256\"/><Column id=\"금요시작시\" type=\"STRING\" size=\"256\"/><Column id=\"금요시작분\" type=\"STRING\" size=\"256\"/><Column id=\"금요종료시\" type=\"STRING\" size=\"256\"/><Column id=\"금요종료분\" type=\"STRING\" size=\"256\"/><Column id=\"금요차량\" type=\"STRING\" size=\"256\"/><Column id=\"토요시간\" type=\"STRING\" size=\"256\"/><Column id=\"토요시작\" type=\"STRING\" size=\"256\"/><Column id=\"토요종료\" type=\"STRING\" size=\"256\"/><Column id=\"토요시작시\" type=\"STRING\" size=\"256\"/><Column id=\"토요시작분\" type=\"STRING\" size=\"256\"/><Column id=\"토요종료시\" type=\"STRING\" size=\"256\"/><Column id=\"토요종료분\" type=\"STRING\" size=\"256\"/><Column id=\"토요차량\" type=\"STRING\" size=\"256\"/><Column id=\"일요시간\" type=\"STRING\" size=\"256\"/><Column id=\"일요시작\" type=\"STRING\" size=\"256\"/><Column id=\"일요종료\" type=\"STRING\" size=\"256\"/><Column id=\"일요시작시\" type=\"STRING\" size=\"256\"/><Column id=\"일요시작분\" type=\"STRING\" size=\"256\"/><Column id=\"일요종료시\" type=\"STRING\" size=\"256\"/><Column id=\"일요종료분\" type=\"STRING\" size=\"256\"/><Column id=\"일요차량\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"DATE\" size=\"256\"/><Column id=\"DATE_TO\" type=\"DATE\" size=\"256\"/><Column id=\"MON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cal", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sun\" type=\"STRING\" size=\"256\"/><Column id=\"mon\" type=\"STRING\" size=\"256\"/><Column id=\"tue\" type=\"STRING\" size=\"256\"/><Column id=\"wed\" type=\"STRING\" size=\"256\"/><Column id=\"thu\" type=\"STRING\" size=\"256\"/><Column id=\"fri\" type=\"STRING\" size=\"256\"/><Column id=\"sat\" type=\"STRING\" size=\"256\"/><Column id=\"suntext1\" type=\"STRING\" size=\"256\"/><Column id=\"montext1\" type=\"STRING\" size=\"256\"/><Column id=\"tuetext1\" type=\"STRING\" size=\"256\"/><Column id=\"wedtext1\" type=\"STRING\" size=\"256\"/><Column id=\"thutext1\" type=\"STRING\" size=\"256\"/><Column id=\"fritext1\" type=\"STRING\" size=\"256\"/><Column id=\"sattext1\" type=\"STRING\" size=\"256\"/><Column id=\"suntext2\" type=\"STRING\" size=\"256\"/><Column id=\"montext2\" type=\"STRING\" size=\"256\"/><Column id=\"tuetext2\" type=\"STRING\" size=\"256\"/><Column id=\"wedtext2\" type=\"STRING\" size=\"256\"/><Column id=\"thutext2\" type=\"STRING\" size=\"256\"/><Column id=\"fritext2\" type=\"STRING\" size=\"256\"/><Column id=\"sattext2\" type=\"STRING\" size=\"256\"/><Column id=\"suncolor\" type=\"STRING\" size=\"256\"/><Column id=\"moncolor\" type=\"STRING\" size=\"256\"/><Column id=\"tuecolor\" type=\"STRING\" size=\"256\"/><Column id=\"wedcolor\" type=\"STRING\" size=\"256\"/><Column id=\"thucolor\" type=\"STRING\" size=\"256\"/><Column id=\"fricolor\" type=\"STRING\" size=\"256\"/><Column id=\"satcolor\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"m_jumin1\" type=\"STRING\" size=\"256\"/><Column id=\"생일\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"입소일\" type=\"STRING\" size=\"256\"/><Column id=\"퇴소일\" type=\"STRING\" size=\"256\"/><Column id=\"등급\" type=\"STRING\" size=\"256\"/><Column id=\"m_regist\" type=\"STRING\" size=\"256\"/><Column id=\"주소\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"이용일\" type=\"STRING\" size=\"256\"/><Column id=\"월\" type=\"STRING\" size=\"256\"/><Column id=\"화\" type=\"STRING\" size=\"256\"/><Column id=\"수\" type=\"STRING\" size=\"256\"/><Column id=\"목\" type=\"STRING\" size=\"256\"/><Column id=\"금\" type=\"STRING\" size=\"256\"/><Column id=\"토\" type=\"STRING\" size=\"256\"/><Column id=\"일요일\" type=\"STRING\" size=\"256\"/><Column id=\"이용시간\" type=\"STRING\" size=\"256\"/><Column id=\"이용시작시\" type=\"STRING\" size=\"256\"/><Column id=\"이용시작분\" type=\"STRING\" size=\"256\"/><Column id=\"이용종료시\" type=\"STRING\" size=\"256\"/><Column id=\"이용종료분\" type=\"STRING\" size=\"256\"/><Column id=\"이용차량\" type=\"STRING\" size=\"256\"/><Column id=\"월요시간\" type=\"STRING\" size=\"256\"/><Column id=\"월요시작시\" type=\"STRING\" size=\"256\"/><Column id=\"월요시작분\" type=\"STRING\" size=\"256\"/><Column id=\"월요종료시\" type=\"STRING\" size=\"256\"/><Column id=\"월요종료분\" type=\"STRING\" size=\"256\"/><Column id=\"월요차량\" type=\"STRING\" size=\"256\"/><Column id=\"화요시간\" type=\"STRING\" size=\"256\"/><Column id=\"화요시작시\" type=\"STRING\" size=\"256\"/><Column id=\"화요시작분\" type=\"STRING\" size=\"256\"/><Column id=\"화요종료시\" type=\"STRING\" size=\"256\"/><Column id=\"화요종료분\" type=\"STRING\" size=\"256\"/><Column id=\"화요차량\" type=\"STRING\" size=\"256\"/><Column id=\"수요시간\" type=\"STRING\" size=\"256\"/><Column id=\"수요시작시\" type=\"STRING\" size=\"256\"/><Column id=\"수요시작분\" type=\"STRING\" size=\"256\"/><Column id=\"수요종료시\" type=\"STRING\" size=\"256\"/><Column id=\"수요종료분\" type=\"STRING\" size=\"256\"/><Column id=\"수요차량\" type=\"STRING\" size=\"256\"/><Column id=\"목요시간\" type=\"STRING\" size=\"256\"/><Column id=\"목요시작시\" type=\"STRING\" size=\"256\"/><Column id=\"목요시작분\" type=\"STRING\" size=\"256\"/><Column id=\"목요종료시\" type=\"STRING\" size=\"256\"/><Column id=\"목요종료분\" type=\"STRING\" size=\"256\"/><Column id=\"목요차량\" type=\"STRING\" size=\"256\"/><Column id=\"금요시간\" type=\"STRING\" size=\"256\"/><Column id=\"금요시작시\" type=\"STRING\" size=\"256\"/><Column id=\"금요시작분\" type=\"STRING\" size=\"256\"/><Column id=\"금요종료시\" type=\"STRING\" size=\"256\"/><Column id=\"금요종료분\" type=\"STRING\" size=\"256\"/><Column id=\"금요차량\" type=\"STRING\" size=\"256\"/><Column id=\"토요시간\" type=\"STRING\" size=\"256\"/><Column id=\"토요시작시\" type=\"STRING\" size=\"256\"/><Column id=\"토요시작분\" type=\"STRING\" size=\"256\"/><Column id=\"토요종료시\" type=\"STRING\" size=\"256\"/><Column id=\"토요종료분\" type=\"STRING\" size=\"256\"/><Column id=\"토요차량\" type=\"STRING\" size=\"256\"/><Column id=\"일요시간\" type=\"STRING\" size=\"256\"/><Column id=\"일요시작시\" type=\"STRING\" size=\"256\"/><Column id=\"일요시작분\" type=\"STRING\" size=\"256\"/><Column id=\"일요종료시\" type=\"STRING\" size=\"256\"/><Column id=\"일요종료분\" type=\"STRING\" size=\"256\"/><Column id=\"일요차량\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"print\" type=\"STRING\" size=\"256\"/><Column id=\"totday\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_notIn", this);
            obj._setContents("<ColumnInfo><Column id=\"not1\" type=\"STRING\" size=\"256\"/><Column id=\"not2\" type=\"STRING\" size=\"256\"/><Column id=\"not3\" type=\"STRING\" size=\"256\"/><Column id=\"not4\" type=\"STRING\" size=\"256\"/><Column id=\"not5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","30","400",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","0",null,null,"0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"현황\"/><Cell col=\"1\" text=\"그룹\"/><Cell col=\"2\" text=\"수급자명\"/><Cell col=\"3\" text=\"성별\"/><Cell col=\"4\" text=\"등급\"/><Cell col=\"5\" text=\"생활실\"/></Band><Band id=\"body\"><Cell text=\"bind:거주현황\"/><Cell col=\"1\" text=\"bind:m_group\"/><Cell col=\"2\" text=\"bind:m_name\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:성별\"/><Cell col=\"4\" text=\"bind:등급\"/><Cell col=\"5\" text=\"bind:m_roomname\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","div_left:5","30",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_mate","0","0",null,"105","0",null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_text("div_00");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new ImageViewer("imv_pic","0","0","90","100",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mate.form);
            obj.set_taborder("0");
            this.div_cont.form.div_right.form.div_mate.addChild(obj.name, obj);

            obj = new Static("sta_head1","91","0","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mate.form);
            obj.set_taborder("1");
            obj.set_text("수급자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_mate.addChild(obj.name, obj);

            obj = new Static("sta_body1","173","0",null,"34","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_mate.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_mate.addChild(obj.name, obj);

            obj = new Static("sta_head2","91","33","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mate.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("생 활 실");
            this.div_cont.form.div_right.form.div_mate.addChild(obj.name, obj);

            obj = new Static("sta_body2","173","33",null,"34","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_mate.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_mate.addChild(obj.name, obj);

            obj = new Static("sta_head2_1","421","33","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mate.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("케어그룹");
            this.div_cont.form.div_right.form.div_mate.addChild(obj.name, obj);

            obj = new Static("sta_head1_1","421","0","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mate.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("성별·생일");
            this.div_cont.form.div_right.form.div_mate.addChild(obj.name, obj);

            obj = new Static("sta_roomname","191","41","119","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mate.form);
            obj.set_taborder("7");
            obj.set_text("생활실");
            this.div_cont.form.div_right.form.div_mate.addChild(obj.name, obj);

            obj = new Static("sta_group","521","41","69","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mate.form);
            obj.set_taborder("8");
            obj.set_text("A");
            this.div_cont.form.div_right.form.div_mate.addChild(obj.name, obj);

            obj = new Static("sta_sex","521","8","39","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mate.form);
            obj.set_taborder("9");
            obj.set_text("남");
            this.div_cont.form.div_right.form.div_mate.addChild(obj.name, obj);

            obj = new Static("sta_birth","601","8","79","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mate.form);
            obj.set_taborder("10");
            obj.set_text("38-08-11");
            this.div_cont.form.div_right.form.div_mate.addChild(obj.name, obj);

            obj = new Static("sta_mname","191","8","69","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mate.form);
            obj.set_taborder("11");
            obj.set_text("이동철");
            this.div_cont.form.div_right.form.div_mate.addChild(obj.name, obj);

            obj = new Static("sta_mcode","291","8","79","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mate.form);
            obj.set_taborder("12");
            obj.set_text("20210004");
            this.div_cont.form.div_right.form.div_mate.addChild(obj.name, obj);

            obj = new Static("sta_head3","91","66","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mate.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("자택주소");
            this.div_cont.form.div_right.form.div_mate.addChild(obj.name, obj);

            obj = new Static("sta_body3","173","66",null,"34","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_mate.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_mate.addChild(obj.name, obj);

            obj = new Static("sta_addr","191","74",null,"19","20",null,null,null,null,null,this.div_cont.form.div_right.form.div_mate.form);
            obj.set_taborder("15");
            obj.set_text("2022년 12월");
            this.div_cont.form.div_right.form.div_mate.addChild(obj.name, obj);

            obj = new Static("sta_head1_2","751","0","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mate.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("입 소 일");
            this.div_cont.form.div_right.form.div_mate.addChild(obj.name, obj);

            obj = new Static("sta_head1_3","1091","0","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mate.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("인정번호");
            this.div_cont.form.div_right.form.div_mate.addChild(obj.name, obj);

            obj = new Static("sta_head2_2","751","33","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mate.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("퇴 소 일");
            this.div_cont.form.div_right.form.div_mate.addChild(obj.name, obj);

            obj = new Static("sta_head2_3","1091","33","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mate.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("인정등급");
            this.div_cont.form.div_right.form.div_mate.addChild(obj.name, obj);

            obj = new Static("sta_enday","851","8","69","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mate.form);
            obj.set_taborder("20");
            obj.set_text("2021.10.12");
            this.div_cont.form.div_right.form.div_mate.addChild(obj.name, obj);

            obj = new Static("sta_reday","851","41","69","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mate.form);
            obj.set_taborder("21");
            obj.set_text("2021.10.12");
            obj.set_color("red");
            this.div_cont.form.div_right.form.div_mate.addChild(obj.name, obj);

            obj = new Static("sta_enday00","1191","8","129","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mate.form);
            obj.set_taborder("22");
            obj.set_text("L2106093441-100");
            this.div_cont.form.div_right.form.div_mate.addChild(obj.name, obj);

            obj = new Static("sta_group00","1191","41","69","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mate.form);
            obj.set_taborder("23");
            obj.set_text("5등급");
            this.div_cont.form.div_right.form.div_mate.addChild(obj.name, obj);

            obj = new Div("div_mon","0","105","900",null,null,"0",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            obj.set_text("div_mon");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_head1","0","0","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mon.form);
            obj.set_taborder("0");
            obj.set_text("미이용일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_mon.addChild(obj.name, obj);

            obj = new Static("sta_body1","82","0",null,"34","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_mon.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_mon.addChild(obj.name, obj);

            obj = new Static("sta_head2","0","33","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mon.form);
            obj.set_taborder("2");
            obj.set_text("년월");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_mon.addChild(obj.name, obj);

            obj = new Static("sta_body2","82","33",null,"34","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_mon.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_mon.addChild(obj.name, obj);

            obj = new Static("sta_head2_1","570","33","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mon.form);
            obj.set_taborder("4");
            obj.set_text("제공일수");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_mon.addChild(obj.name, obj);

            obj = new Edit("edt_notIn1","94","5","40","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mon.form);
            obj.set_taborder("5");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            this.div_cont.form.div_right.form.div_mon.addChild(obj.name, obj);

            obj = new Edit("edt_notIn2","139","5","40","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mon.form);
            obj.set_taborder("6");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            this.div_cont.form.div_right.form.div_mon.addChild(obj.name, obj);

            obj = new Edit("edt_notIn3","184","5","40","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mon.form);
            obj.set_taborder("7");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            this.div_cont.form.div_right.form.div_mon.addChild(obj.name, obj);

            obj = new Edit("edt_notIn4","229","5","40","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mon.form);
            obj.set_taborder("8");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            this.div_cont.form.div_right.form.div_mon.addChild(obj.name, obj);

            obj = new Edit("edt_notIn5","274","5","40","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mon.form);
            obj.set_taborder("9");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            this.div_cont.form.div_right.form.div_mon.addChild(obj.name, obj);

            obj = new Static("sta_remark","321","8","169","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mon.form);
            obj.set_taborder("10");
            obj.set_text("◀ 미이용일 - 5일까지 지정");
            obj.set_color("#400080");
            this.div_cont.form.div_right.form.div_mon.addChild(obj.name, obj);

            obj = new Static("sta_yearMon","191","38","189","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mon.form);
            obj.set_taborder("11");
            obj.set_text("년월");
            obj.set_textAlign("center");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            obj.set_background("#f7fcff");
            obj.set_border("1px solid #f2f2f1");
            this.div_cont.form.div_right.form.div_mon.addChild(obj.name, obj);

            obj = new Static("sta_day","771","38","50","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mon.form);
            obj.set_taborder("12");
            obj.set_text("30");
            obj.set_textAlign("center");
            obj.set_font("normal 700 11pt/normal \"Noto Sans KR\"");
            obj.set_background("#f7fcff");
            obj.set_border("1px solid #f2f2f1");
            this.div_cont.form.div_right.form.div_mon.addChild(obj.name, obj);

            obj = new Div("div_cal","0","70",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form.div_mon.form);
            obj.set_taborder("13");
            obj.set_text("div_cal");
            this.div_cont.form.div_right.form.div_mon.addChild(obj.name, obj);

            obj = new Grid("grd_cal","0","0",null,null,"0","30",null,null,null,null,this.div_cont.form.div_right.form.div_mon.form.div_cal.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_cal");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"25\"/><Row size=\"27\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"일요일\" background=\"#ffdbca\"/><Cell col=\"1\" text=\"월요일\" background=\"#fbfeff\"/><Cell col=\"2\" text=\"화요일\" background=\"#fbfeff\"/><Cell col=\"3\" text=\"수요일\" background=\"#fbfeff\"/><Cell col=\"4\" text=\"목요일\" background=\"#fbfeff\"/><Cell col=\"5\" text=\"금요일\" background=\"#fbfeff\"/><Cell col=\"6\" text=\"토요일\" background=\"#f7fcff\"/></Band><Band id=\"body\"><Cell rowspan=\"3\" cursor=\"pointer\"><Cell text=\"bind:sun\" textAlign=\"left\"/><Cell row=\"1\" text=\"bind:suntext1\" textAlign=\"left\"/><Cell row=\"2\" text=\"bind:suntext2\" textAlign=\"left\"/></Cell><Cell col=\"1\" rowspan=\"3\" cursor=\"pointer\"><Cell text=\"bind:mon\" textAlign=\"left\"/><Cell row=\"1\" text=\"bind:montext1\" textAlign=\"left\"/><Cell row=\"2\" text=\"bind:montext2\" textAlign=\"left\"/></Cell><Cell col=\"2\" rowspan=\"3\" cursor=\"pointer\"><Cell text=\"bind:tue\" textAlign=\"left\"/><Cell row=\"1\" text=\"bind:tuetext1\" textAlign=\"left\"/><Cell row=\"2\" text=\"bind:tuetext2\" textAlign=\"left\"/></Cell><Cell col=\"3\" rowspan=\"3\" cursor=\"pointer\"><Cell text=\"bind:wed\" textAlign=\"left\"/><Cell row=\"1\" text=\"bind:wedtext1\" textAlign=\"left\"/><Cell row=\"2\" text=\"bind:wedtext2\" textAlign=\"left\"/></Cell><Cell col=\"4\" rowspan=\"3\" cursor=\"pointer\"><Cell text=\"bind:thu\" textAlign=\"left\"/><Cell row=\"1\" text=\"bind:thutext1\" textAlign=\"left\"/><Cell row=\"2\" text=\"bind:thutext2\" textAlign=\"left\"/></Cell><Cell col=\"5\" rowspan=\"3\" cursor=\"pointer\"><Cell text=\"bind:fri\" textAlign=\"left\"/><Cell row=\"1\" text=\"bind:fritext1\" textAlign=\"left\"/><Cell row=\"2\" text=\"bind:fritext2\" textAlign=\"left\"/></Cell><Cell col=\"6\" rowspan=\"3\" cursor=\"pointer\"><Cell text=\"bind:sat\" textAlign=\"left\"/><Cell row=\"1\" text=\"bind:sattext1\" textAlign=\"left\"/><Cell row=\"2\" text=\"bind:sattext2\" textAlign=\"left\"/></Cell></Band></Format></Formats>");
            this.div_cont.form.div_right.form.div_mon.form.div_cal.addChild(obj.name, obj);

            obj = new Static("sta_remark","11","518","319","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_mon.form.div_cal.form);
            obj.set_taborder("1");
            obj.set_text("▲ 송영정보를 지우시려면 해당일 항목을 더블클릭 !");
            obj.set_color("#400080");
            this.div_cont.form.div_right.form.div_mon.form.div_cal.addChild(obj.name, obj);

            obj = new Div("div_plan","div_mon:5","105",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("2");
            obj.set_text("div_plan");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_head3","9","73","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("이용시간");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_body3","91","73","470","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_head4","9","106","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("월요일");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_body4","91","106","470","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_head5","9","139","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("화요일");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_body5","91","139","470","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_head3_1","379","73","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("이용차량");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_head6","9","172","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("수요일");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_body6","91","172","470","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_head7","9","205","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("목요일");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_body7","91","205","470","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_head8","9","238","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("금요일");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_body8","91","238","470","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_head4_1","379","106","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("월요차량");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_head5_1","379","139","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("화요차량");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_head6_1","379","172","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("수요차량");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_head7_1","379","205","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("목요차량");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_head8_1","379","238","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("금요차량");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_subTitle2","11","-1","260","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("18");
            obj.set_text("수급자 주간송영 운행일정");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Div("div_line00","10","30",null,"2","10",null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("19");
            obj.set_background("#000000");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_from_hour","177","77","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("20");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_timeColon1","210","78","10","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("21");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_from_min","220","77","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("22");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_timeColon2","260","78","10","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("23");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_to_hour","277","77","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("24");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_timeColon3","310","78","10","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("25");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_to_min","320","77","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("26");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_bighead1","9","40","371","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("송영서비스 이용시간");
            obj.set_background("#ebf1de");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_bighead2","379","40","182","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("이용차량");
            obj.set_background("#ebf1de");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_head9","9","271","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("토요일");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_body9","91","271","470","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_head9_1","379","271","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("토요차량");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_head10","9","304","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("일요일");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_body10","91","304","470","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_head10_1","379","304","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("일요차량");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_car","482","78","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_cssclass("readonly");
            obj.set_cursor("pointer");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_mon_from_hour","177","110","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("36");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_mon_timeColon1","210","111","10","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("37");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_mon_from_min","220","110","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("38");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_mon_timeColon2","260","111","10","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("39");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_mon_to_hour","277","110","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("40");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_mon_timeColon3","310","111","10","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("41");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_mon_to_min","320","110","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("42");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new CheckBox("chk_mon","115","110","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("43");
            obj.set_text("월");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new CheckBox("chk_tue","115","144","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("44");
            obj.set_text("화");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_tue_from_hour","177","143","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("45");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_tue_timeColon1","210","144","10","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("46");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_tue_from_min","220","143","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("47");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_tue_timeColon2","260","144","10","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("48");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_tue_to_hour","277","143","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("49");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_tie_timeColon3","310","144","10","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("50");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_tue_to_min","320","143","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("51");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new CheckBox("chk_wed","115","177","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("52");
            obj.set_text("수");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_wed_from_hour","177","176","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("53");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_wed_timeColon1","210","177","10","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("54");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_wed_from_min","220","176","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("55");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_wed_timeColon2","260","177","10","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("56");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_wed_to_hour","277","176","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("57");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_wed_timeColon3","310","177","10","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("58");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_wed_to_min","320","176","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("59");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new CheckBox("chk_thu","115","210","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("60");
            obj.set_text("목");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_thu_from_hour","177","209","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("61");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_thu_timeColon1","210","210","10","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("62");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_thu_from_min","220","209","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("63");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_thu_timeColon2","260","210","10","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("64");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_thu_to_hour","277","209","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("65");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_thu_timeColon3","310","210","10","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("66");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_thu_to_min","320","209","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("67");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new CheckBox("chk_fri","115","243","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("68");
            obj.set_text("금");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_fri_from_hour","177","242","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("69");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_fri_timeColon1","210","243","10","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("70");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_fri_from_min","220","242","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("71");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_fri_timeColon2","260","243","10","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("72");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_fri_to_hour","277","242","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("73");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_fri_timeColon3","310","243","10","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("74");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_fri_to_min","320","242","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("75");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new CheckBox("chk_sat","115","276","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("76");
            obj.set_text("토");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_sat_from_hour","177","275","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("77");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_sat_timeColon1","210","276","10","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("78");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_sat_from_min","220","275","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("79");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_sat_timeColon2","260","276","10","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("80");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_sat_to_hour","277","275","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("81");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_sat_timeColon3","310","276","10","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("82");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_sat_to_min","320","275","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("83");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new CheckBox("chk_sun","115","309","45","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("84");
            obj.set_text("일");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_sun_from_hour","177","308","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("85");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_sun_timeColon1","210","309","10","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("86");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_sun_from_min","220","308","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("87");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_sun_timeColon2","260","309","10","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("88");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_sun_to_hour","277","308","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("89");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_sun_timeColon3","310","309","10","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("90");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_sun_to_min","320","308","35","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("91");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_text("00");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_mon_car","482","111","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("92");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_cssclass("readonly");
            obj.set_cursor("pointer");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_tue_car","482","144","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("93");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_cssclass("readonly");
            obj.set_cursor("pointer");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_wed_car","482","177","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("94");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_cssclass("readonly");
            obj.set_cursor("pointer");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_thu_car","482","210","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("95");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_cssclass("readonly");
            obj.set_cursor("pointer");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_fri_car","482","243","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("96");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_cssclass("readonly");
            obj.set_cursor("pointer");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_sat_car","482","276","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("97");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_cssclass("readonly");
            obj.set_cursor("pointer");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Edit("edt_sun_car","482","309","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_plan.form);
            obj.set_taborder("98");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_cssclass("readonly");
            obj.set_cursor("pointer");
            this.div_cont.form.div_right.form.div_plan.addChild(obj.name, obj);

            obj = new Static("sta_subTitle1","0","0","220","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("월간 송영일정표·제공계획서");
            obj.set_cssclass("lb01");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","365","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","122","5","110","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","235","5","15","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","250","5","110","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date","0","5","90","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_yyyyMM");
            obj.set_taborder("0");
            obj.getSetter("calendarfunc").set("month");
            obj.set_buttonsize("0 0");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_pic","cal_date:-1","5","25","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_yyyyMM");
            obj.set_taborder("4");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","div_search:10","0",null,"36","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_report1","200","4","165","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("급여제공 계획서서식");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report2","370","4","135","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("급여제공 계획서");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report3","510","4","165","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("송영일정표(목욕일정)");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"5","70","25","0",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_report_body","0","2","195","30",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_print","8","8","95","19",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("5");
            obj.set_text("출력일자 설정 : ");
            this.div_func.addChild(obj.name, obj);

            obj = new MaskEdit("mae_print","110","4","74","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("6");
            obj.set_format("####.##.##");
            obj.set_type("string");
            obj.set_maskchar(" ");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_search.form.cal_date_from","value","ds_search","DATE_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_date_to","value","ds_search","DATE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.cal_date","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cal_date_pic","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_right.form.div_mate.form.sta_roomname","text","ds_data","m_roomname");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_right.form.div_mate.form.sta_group","text","ds_data","m_group");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_right.form.div_mate.form.sta_sex","text","ds_data","성별");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_right.form.div_mate.form.sta_birth","text","ds_data","생일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_right.form.div_mate.form.sta_mname","text","ds_data","m_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_right.form.div_mate.form.sta_mcode","text","ds_data","m_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right.form.div_mate.form.sta_addr","text","ds_data","주소");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_right.form.div_mate.form.sta_enday","text","ds_data","입소일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right.form.div_mate.form.sta_reday","text","ds_data","퇴소일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.div_right.form.div_plan.form.edt_from_hour","value","ds_data","이용시작시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cont.form.div_right.form.div_plan.form.edt_from_min","value","ds_data","이용시작분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_cont.form.div_right.form.div_plan.form.edt_to_hour","value","ds_data","이용종료시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_cont.form.div_right.form.div_plan.form.edt_to_min","value","ds_data","이용종료분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_cont.form.div_right.form.div_plan.form.edt_car","value","ds_data","이용차량");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_cont.form.div_right.form.div_plan.form.edt_mon_from_hour","value","ds_data","월요시작시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_cont.form.div_right.form.div_plan.form.edt_mon_from_min","value","ds_data","월요시작분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_cont.form.div_right.form.div_plan.form.edt_mon_to_hour","value","ds_data","월요종료시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.div_right.form.div_plan.form.edt_mon_to_min","value","ds_data","월요종료분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_cont.form.div_right.form.div_plan.form.chk_mon","value","ds_data","월");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.div_right.form.div_plan.form.chk_tue","value","ds_data","화");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.div_right.form.div_plan.form.edt_tue_from_hour","value","ds_data","화요시작시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cont.form.div_right.form.div_plan.form.edt_tue_from_min","value","ds_data","화요시작분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_cont.form.div_right.form.div_plan.form.edt_tue_to_hour","value","ds_data","화요종료시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_cont.form.div_right.form.div_plan.form.edt_tue_to_min","value","ds_data","화요종료분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_cont.form.div_right.form.div_plan.form.chk_wed","value","ds_data","수");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cont.form.div_right.form.div_plan.form.edt_wed_from_hour","value","ds_data","수요시작시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_cont.form.div_right.form.div_plan.form.edt_wed_from_min","value","ds_data","수요시작분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_cont.form.div_right.form.div_plan.form.edt_wed_to_hour","value","ds_data","수요종료시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_cont.form.div_right.form.div_plan.form.edt_wed_to_min","value","ds_data","수요종료분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_cont.form.div_right.form.div_plan.form.chk_thu","value","ds_data","목");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_cont.form.div_right.form.div_plan.form.edt_thu_from_hour","value","ds_data","목요시작시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_cont.form.div_right.form.div_plan.form.edt_thu_from_min","value","ds_data","목요시작분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_cont.form.div_right.form.div_plan.form.edt_thu_to_hour","value","ds_data","목요종료시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_cont.form.div_right.form.div_plan.form.edt_thu_to_min","value","ds_data","목요종료분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_cont.form.div_right.form.div_plan.form.chk_fri","value","ds_data","금");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_cont.form.div_right.form.div_plan.form.edt_fri_from_hour","value","ds_data","금요시작시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_cont.form.div_right.form.div_plan.form.edt_fri_from_min","value","ds_data","금요시작분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_cont.form.div_right.form.div_plan.form.edt_fri_to_hour","value","ds_data","금요종료시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_cont.form.div_right.form.div_plan.form.edt_fri_to_min","value","ds_data","금요종료분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_cont.form.div_right.form.div_plan.form.chk_sat","value","ds_data","토");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_cont.form.div_right.form.div_plan.form.edt_sat_from_hour","value","ds_data","토요시작시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_cont.form.div_right.form.div_plan.form.edt_sat_from_min","value","ds_data","토요시작분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_cont.form.div_right.form.div_plan.form.edt_sat_to_hour","value","ds_data","토요종료시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_cont.form.div_right.form.div_plan.form.edt_sat_to_min","value","ds_data","토요종료분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_cont.form.div_right.form.div_plan.form.chk_sun","value","ds_data","일요일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_cont.form.div_right.form.div_plan.form.edt_sun_from_hour","value","ds_data","일요시작시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_cont.form.div_right.form.div_plan.form.edt_sun_from_min","value","ds_data","일요시작분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","div_cont.form.div_right.form.div_plan.form.edt_sun_to_hour","value","ds_data","일요종료시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","div_cont.form.div_right.form.div_plan.form.edt_sun_to_min","value","ds_data","일요종료분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","div_cont.form.div_right.form.div_plan.form.edt_mon_car","value","ds_data","월요차량");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","div_cont.form.div_right.form.div_plan.form.edt_tue_car","value","ds_data","화요차량");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","div_cont.form.div_right.form.div_plan.form.edt_wed_car","value","ds_data","수요차량");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","div_cont.form.div_right.form.div_plan.form.edt_thu_car","value","ds_data","목요차량");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","div_cont.form.div_right.form.div_plan.form.edt_fri_car","value","ds_data","금요차량");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","div_cont.form.div_right.form.div_plan.form.edt_sat_car","value","ds_data","토요차량");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","div_cont.form.div_right.form.div_plan.form.edt_sun_car","value","ds_data","일요차량");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.div_mate.form.sta_group00","text","ds_data","등급");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.div_right.form.div_mate.form.sta_enday00","text","ds_data","m_regist");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_func.form.mae_print","value","ds_report","print");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_right.form.div_mon.form.sta_day","text","ds_report","totday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.div_right.form.div_mon.form.edt_notIn1","value","ds_notIn","not1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.form.div_right.form.div_mon.form.edt_notIn2","value","ds_notIn","not2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.div_right.form.div_mon.form.edt_notIn3","value","ds_notIn","not3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.div_right.form.div_mon.form.edt_notIn4","value","ds_notIn","not4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.div_right.form.div_mon.form.edt_notIn5","value","ds_notIn","not5");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00404.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00404.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00404.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00404
         * 화면명   	: 송영 일정표·제공계획서(매월)
         * 화면설명 	: 급여제공 계획서와 송영일정표를 출력하기 위한 화면
         * 작성일   	: 2022-05-10
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *
         ***********************************************************************
         * 비고 : 1. 사진 불러오는 기능 미구현
        			 파일관련 내용 구현후 이미지 세팅 부분 수정해야함
         */
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        const fv_sicode = nexacro.getApplication().gds_userInfo.getColumn(0, "sicode");
        this.reSearchData = "";
        const dbclArr = [];
        const notArr = [];
        const timeArr = [];
        this.daycount = 0;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	const date = new Date();
        	const year = date.getFullYear();
        	const month = date.getMonth();
        	const firstDay = new Date(year, month, 1);
        	const lastDay = new Date(year, month + 1, 0);
        	const firstString = this.fn_getDateString(firstDay);
        	const lastString = this.fn_getDateString(lastDay);
        	const yearMon = year + ((month + 1) + "").padStart(2, '0');

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "DATE", firstString);
        	this.ds_search.setColumn(0, "DATE_FROM", firstString);
        	this.ds_search.setColumn(0, "DATE_TO", lastString);
        	this.ds_search.setColumn(0, "MON", yearMon);

        	// 조회
        	this.fn_search("search");
        };

        // 그리드에 css 적용
        this.initGrid = function(grid)
        {
        	// 성별에 따라 이름 배경색 변경
        	const nameIdx = grid.getBindCellIndex("body", "m_name");
        	const nameCss = "expr:dataset.getColumn(currow, '성별') == '남' ? 'cellBMan' : 'cellBWoman'";
        	grid.setCellProperty("body", nameIdx, "cssclass", nameCss);

        	// 퇴소여부에 따라 수급상태 배경색 변경
        	const nowIdx = grid.getBindCellIndex("body", "거주현황");
        	const nowCss = "expr:dataset.getColumn(currow, '거주현황') == '퇴소자' ? 'cellBRetire' : ''";
        	grid.setCellProperty("body", nowIdx, "cssclass", nowCss);
        };

        this.initCalGrid = function(grid)
        {
        	// 날짜 컬러 값이 1이면 배경색 변경
        	const dayArr = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
        	for (let i = 0; i <= dayArr.length; i++)
        	{
        		let cssStr = "";
        		switch(i)
        		{
        			case 0 :
        				cssStr = "expr:dataset.getColumn(currow, '" + dayArr[i] + "color') == 1 ? 'CellBffdbca' : ''";
        				break;
        			case 6 :
        				cssStr = "expr:dataset.getColumn(currow, '" + dayArr[i] + "color') == 1 ? 'CellBf7fcff' : ''";
        				break;
        			default:
        				cssStr = "expr:dataset.getColumn(currow, '" + dayArr[i] + "color') == 1 ? 'CellBfbfeff' : ''";
        		}
        		grid.setCellProperty("body", i, "cssclass", cssStr);
        	}
        };
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	if (this.ds_data.rowcount > 0)
        		this.reSearchData = this.ds_data.getColumn(0, "m_code");

        	return true;
        };

        // 저장 전 validation
        this.fn_save_pre = function()
        {
        	const dayArr = ["이용", "월요", "화요", "수요", "금요", "토요", "일요"];

        	for (let i = 0; i < dayArr.length; i++)
        	{
        		const fullTime = this.ds_data.getColumn(0, dayArr[i] + "시작시")
        					   + ":"
        					   + this.ds_data.getColumn(0, dayArr[i] + "시작분")
        					   + "-"
        					   + this.ds_data.getColumn(0, dayArr[i] + "종료시")
        					   + ":"
        					   + this.ds_data.getColumn(0, dayArr[i] + "종료분");

        		if (fullTime == "00:00-00:00")
        			this.ds_data.setColumn(0, dayArr[i] + "시간", "");
        		else
        			this.ds_data.setColumn(0, dayArr[i] + "시간", fullTime);
        	}

        	const fullDay = this.ds_data.getColumn(0, "월")
        				  + this.ds_data.getColumn(0, "화")
        				  + this.ds_data.getColumn(0, "수")
        				  + this.ds_data.getColumn(0, "목")
        				  + this.ds_data.getColumn(0, "금")
        				  + this.ds_data.getColumn(0, "토");

        	this.ds_data.setColumn(0, "이용일", fullDay);

        	this.reSearchData = this.ds_data.getColumn(0, "m_code");

        	return true;
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 조회
        this.fn_search = function(flag)
        {
        	if (!this.fn_search_pre()) return;

        	if (Sct.Util.isEmpty(flag))
        		flag = "search";

        	const svcId = flag;
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search input2=ds_search input3=ds_search";
        	const outDatasets = "ds_list=output1 ds_cal=output2 ds_report=output3";
        	const argument = "method=getList"
        				   + " sqlId='DAY00404.DAY00404_DS_LIST_S DAY00404.DAY00404_DS_CAL_S DAY00404.DAY00404_DS_REPORT_S'";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 저장
        this.fn_save = function()
        {
        	if (!this.fn_save_pre()) return;

        	const svcId = "save";
        	const inDs = "ds_data";

        	this.fn_save_com(svcId, inDs);
        };

        //콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			const firstDay = this.ds_search.getColumn(0, "DATE_FROM");
        			const fYear = firstDay.getFullYear();
        			const mon = firstDay.getMonth() + 1;
        			const yearMonStr = fYear + "년 " + mon + "월";
        			this.div_cont.form.div_right.form.div_mon.form.sta_yearMon.set_text(yearMonStr);
        			this.initGrid(this.div_cont.form.div_left.form.grd_list);
        			this.div_cont.form.div_right.form.div_mon.form.div_cal.form.grd_cal.selectCell(0, 0, false);	// 달력그리드 셀 선택 해제
        			this.ds_list.set_rowposition(-1);
        		}
        		else if (strSvcID == "save")
        		{
        			this.alert("저장되었습니다.");
        			this.fn_search("search_save");
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
        /* 날짜 스트링 만들기
         *
         * @param date DATE
         * @return String yyyyMMdd
         */
        this.fn_getDateString = function(date)
        {
        	const year = date.getFullYear() + "";
        	const month = ((date.getMonth() + 1) + "").padStart(2, '0');
        	const day = (date.getDate() + "").padStart(2, '0');

        	return year + month + day;
        };

        // /* 배열에서 중복제거
        //  *
        //  * @param inArray ARRAY
        //  * @return ARRAY
        //  */
        // this.fn_removeDuplicatesArray = function(inArray)
        // {
        // 	const arr = inArray.concat();	// create a clone from inArray so not to change input array
        // 	// create the first cycle of the loop starting from element 0 or n
        // 	for (let i = 0; i < arr.length; ++i)
        // 	{
        // 		// create the second cycle of the loop from element n + 1
        // 		for (let j = i + 1; j < arr.length; ++j)
        // 		{
        // 			// if the two elements are equal, then they are duplicate
        // 			if (arr[i] == arr[j])
        // 			{
        // 				arr.splice(j, 1);	// remove the duplicated element
        // 			}
        // 		}
        // 	}
        // 	return arr;
        // };

        /* 배열 차집합 구하기
         *
         * @param arr1 ARRAY
         * @param arr2 ARRAY
         * @return ARRAY (arr1 - arr2)
         */
        this.fn_defferenceArray = function(arr1, arr2)
        {
        	let tmp={}, res=[];
        	for (let i = 0; i < arr1.length; i++)
        		tmp[arr1[i]] = 1;

        	for (let i = 0; i < arr2.length; i++)
        	{
        		if (tmp[arr2[i]])
        			delete tmp[arr2[i]];
        	}

        	for (let i in tmp)
        		res.push(i);

        	return res;
        };

        // 입력, 수정용 데이터셋에 데이터 복사
        this.fn_dataCopy = function(row)
        {
        	// 시간 배열 비우기
        	timeArr.splice(0);

        	// 더블클릭 배열 비우기
        	dbclArr.splice(0, dbclArr.length);

        	// 미이용일 배열로 만들기
        	notArr.splice(0, notArr.length);
        	for (let i = 1; i <= 5; i++)
        	{
        		const notIn = this.ds_notIn.getColumn(0, "not" + i);
        		if (notIn != undefined && notIn != null && notIn.trim() != "")
        			notArr.push(this.ds_notIn.getColumn(0, "not" + i));
        	}
        	trace(notArr);

        	// 리스트에서 데이터 복사
        	this.ds_data.clearData();
        	const nRow = this.ds_data.addRow();
        	this.ds_data.copyRow(nRow, this.ds_list, row);

        	// 이미지 세팅
        	this.fn_getImage();

        	// 수급자 주간송영 운행일자 시간 값이 없는경우 초기화
        	const dayArr = ["이용", "월요", "화요", "수요", "목요", "금요", "토요", "일요"];
        	for (let i = 0; i < dayArr.length; i++)
        	{
        		if (Sct.Util.isEmpty(nexacro.trim(this.ds_data.getColumn(0, dayArr[i] + "시간"))))
        		{
        			this.ds_data.setColumn(0, dayArr[i] + "시작시", "00");
        			this.ds_data.setColumn(0, dayArr[i] + "시작분", "00");
        			this.ds_data.setColumn(0, dayArr[i] + "종료시", "00");
        			this.ds_data.setColumn(0, dayArr[i] + "종료분", "00");
        		}
        	}

        	this.ds_data.set_updatecontrol(false);
        	this.ds_data.setRowType(nRow, 1);
        	this.ds_data.set_updatecontrol(true);

        	let count = 0;	// 제공일수를 구하기 위한 변수
        	this.daycount = 0;

        	// 달력에 시간 세팅
        	for (let i = 0; i < this.ds_cal.rowcount; i++)
        	{
        		const calArr = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
        		const dddArr = ["일요", "월요", "화요", "수요", "목요", "금요", "토요"];

        		for (let j = 0; j < calArr.length; j++)
        		{
        			const day = this.ds_cal.getColumn(i, calArr[j]);
        			const car = this.ds_list.getColumn(row, dddArr[j] + "차량");
        			const time = this.ds_list.getColumn(row, dddArr[j] + "시간");
        			// 날짜가 있는 셀에만 데이터 세팅
        			if (day != undefined && day != null && day.trim() != "")
        			{
        				this.daycount++;
        				const spl = day.split("일");
        				const dayInt = parseInt(spl[0]);
        				// 미이용인 날짜가 아닌경우 세팅
        				if (!notArr.includes(dayInt + ""))
        				{
        					this.ds_cal.setColumn(i, calArr[j] + "text1", this.ds_list.getColumn(row, dddArr[j] + "시작"));
        					this.ds_cal.setColumn(i, calArr[j] + "text2", this.ds_list.getColumn(row, dddArr[j] + "종료"));
        					// 차량정보가 있는경우 제공일수에 포함하고 배경색 변경
        					if (car != undefined && car != null && car.trim() != "")
        					{
        						count++;
        						this.ds_cal.setColumn(i, calArr[j] + "color", 1);
        					}
        					else
        					{
        						this.ds_cal.setColumn(i, calArr[j] + "color", 0);
        					}

        					if (time != undefined && time != null && time.trim() != "")
        					{
        						timeArr.push(dayInt);
        					}
        				}
        				else
        				{
        					this.ds_cal.setColumn(i, calArr[j] + "text1", "");
        					this.ds_cal.setColumn(i, calArr[j] + "text2", "");
        					this.ds_cal.setColumn(i, calArr[j] + "color", 0);
        				}
        			}
        		}
        	}
        	//trace("timeArr : " + timeArr);
        	//trace("this.daycount : " + this.daycount);

        	this.ds_report.setColumn(0, "totday", count);

        	this.initCalGrid(this.div_cont.form.div_right.form.div_mon.form.div_cal.form.grd_cal);
        };

        // 작업후 작업 정보 조회
        this.fn_findMstRow = function(fv_saveRefNo) {
        	const sFindRow = this.ds_list.findRow("m_code", fv_saveRefNo);
        	if (sFindRow > -1) {
        		this.ds_list.set_rowposition(sFindRow);
        		this.fn_dataCopy(sFindRow);
        	}
        	else
        	{
        		this.ds_data.clearData();
        	}

        	return sFindRow;
        };

        // 이미지 세팅
        this.fn_getImage = function()
        {
        	let imgUrl = "";
        	this.div_cont.form.div_right.form.div_mate.form.imv_pic.set_image("URL('imagerc::user_name_e.png')");
        };

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 리포트 출력
        this.fn_report = function(obj,e)
        {
        	if (this.ds_data.rowcount == 0)
        	{
        		this.alert("수급자를 선택해주세요.");
        		return false;
        	}

        	let popupUrl = "";
        	let popupName = "";
        	switch(obj.id)
        	{
        		case "btn_report1" :
        			popupUrl = "DAY_POP::DAY00404_R01.xfdl";
        			popupName = "급여제공 계획서서식";
        			break;
        		case "btn_report2" :
        			popupUrl = "DAY_POP::DAY00404_R02.xfdl";
        			popupName = "급여제공 계획서";
        			break;
        		case "btn_report3" :
        			popupUrl = "DAY_POP::DAY00404_R03.xfdl";
        			popupName = "송영일정표(목욕일정)";
        			break;
        		default:
        	}

        	let params;
        	const dicompNm = " ";

        	// 미이용일 배열로 만들기
        	notArr.splice(0, notArr.length);
        	for (let i = 1; i <= 5; i++)
        	{
        		const notIn = this.ds_notIn.getColumn(0, "not" + i);
        		if (notIn != undefined && notIn != null && notIn.trim() != "")
        			notArr.push(this.ds_notIn.getColumn(0, "not" + i));
        	}

        	let report2Arr = this.fn_defferenceArray(timeArr, dbclArr);
        	report2Arr = this.fn_defferenceArray(report2Arr, notArr);
        	//trace("dbclArr : " + dbclArr);
        	//trace("notArr : " + notArr);
        	//trace("report2Arr : " + report2Arr);

        	params = {
        		sicode : fv_sicode
        	,	notArr : notArr
        	,	notArr2 : dbclArr
        	,	timeArr : report2Arr
        	,	reportDay : this.ds_report.getColumn(0, "print")
        	,	code : this.ds_data.getColumn(0, "m_code")
        	,	from : this.ds_search.getColumn(0, "DATE_FROM")
        	,	daycount : this.daycount
        	,	totday : this.ds_report.getColumn(0, "totday")
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	//trace("popid : " + popid);
        	//trace("strDs : " + strDs);
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	const code1 = objDs.getColumn(0, "gubun1");
        	const code2 = objDs.getColumn(0, "gubun2");
        	let val1 = "";
        	let val2 = "";
        	if (Sct.Util.isEmpty(code1))
        		val1 = "  ";
        	else
        		val1 = code1;

        	if (Sct.Util.isEmpty(code2))
        		val2 = "  ";
        	else
        		val2 = code2;
        	switch(popid)
        	{
        		case "car" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				this.ds_data.setColumn(0, "이용차량", val1 + val2);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "이용차량", "");
        			}
        			break;
        		case "mon_car" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				this.ds_data.setColumn(0, "월요차량", val1 + val2);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "월요차량", "");
        			}
        			break;
        		case "tue_car" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				this.ds_data.setColumn(0, "화요차량", val1 + val2);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "화요차량", "");
        			}
        			break;
        		case "wed_car" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				this.ds_data.setColumn(0, "수요차량", val1 + val2);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "수요차량", "");
        			}
        			break;
        		case "thu_car" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				this.ds_data.setColumn(0, "목요차량", val1 + val2);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "목요차량", "");
        			}
        			break;
        		case "fri_car" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				this.ds_data.setColumn(0, "금요차량", val1 + val2);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "금요차량", "");
        			}
        			break;
        		case "sat_car" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				this.ds_data.setColumn(0, "토요차량", val1 + val2);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "토요차량", "");
        			}
        			break;
        		case "sun_car" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				this.ds_data.setColumn(0, "일요차량", val1 + val2);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "일요차량", "");
        			}
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 저장 버튼
        this.fn_saveBtn = function(obj,e)
        {
        	this.fn_save();
        };

        // 날짜 변경 이벤트
        this.div_search_cal_date_pic_onchanged = function(obj,e)
        {
        	// 선택월의 1일, 마지막일 구하기
        	const year = this.ds_search.getColumn(0, "DATE").substr(0,4);
        	const month = this.ds_search.getColumn(0, "DATE").substr(4);
        	const firstDay = new Date(year, month - 1 , 1);
        	const lastDay = new Date(year, month, 0);
        	const firstString = this.fn_getDateString(firstDay);
        	const lastString = this.fn_getDateString(lastDay);
        	const yearMonth = year + month;

        	// from to 날짜 셋팅
        	this.ds_search.setColumn(0, "DATE_FROM", firstString);
        	this.ds_search.setColumn(0, "DATE_TO", lastString);
        	this.ds_search.setColumn(0, "MON", yearMonth);

        	this.fn_search("search");
        };

        // 리스트 그리드 셀 클릭 이벤트
        this.div_cont_div_left_grd_list_oncellclick = function(obj,e)
        {
        	const nameIdx = obj.getBindCellIndex("body", "m_name");
        	// 수급자명 선택
        	if (e.col == nameIdx)
        	{
        		// 입력, 수정용 데이터셋에 데이터 복사
        		this.fn_dataCopy(e.row);
        	}
        };

        // 미이용 값 변경 이벤트
        this.edt_notIn_onchanged = function(obj,e)
        {
        	//trace(e.postvalue.indexOf("0"));
        	if (e.postvalue.indexOf("0") == 0)
        	{
        		obj.set_value(e.postvalue.substr(1));
        	}
        };

        // 달력 그리드 셀 더블클릭 이벤트
        this.div_cont_div_right_div_mon_div_cal_grd_cal_oncelldblclick = function(obj,e)
        {
        	// 셀의 내용과 배경색 제거
        	let day = "";
        	switch(e.col)
        	{
        		case 0 :
        			day = "sun";
        			break;
        		case 1 :
        			day = "mon";
        			break;
        		case 2 :
        			day = "tue";
        			break;
        		case 3 :
        			day = "wed";
        			break;
        		case 4 :
        			day = "thu";
        			break;
        		case 5 :
        			day = "fri";
        			break;
        		case 6 :
        			day = "sat";
        			break;
        		default:
        	}

        	this.ds_cal.setColumn(e.row, day + "text1", "");
        	this.ds_cal.setColumn(e.row, day + "text2", "");
        	this.ds_cal.setColumn(e.row, day + "color", 0);

        	const dayVal = this.ds_cal.getColumn(e.row, day);
        	if (dayVal != undefined && dayVal != null && dayVal.trim() != "")
        	{
        		const spl = dayVal.split("일");
        		const dayInt = parseInt(spl[0]);
        		dbclArr.push(dayInt);
        		//trace(dbclArr);
        	}
        	else
        	{
        		return;
        	}
        };

        // 달력 그리드 셀 클릭 이벤트
        this.div_cont_div_right_div_mon_div_cal_grd_cal_oncellclick = function(obj,e)
        {
        	// 셀 선택 취소 하기
        	obj.selectCell(e.row, e.col, false);
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
        };

        // 차량 에디트박스 클릭 이벤트
        this.edt_car_oneditclick = function(obj,e)
        {
        	let svcId = "";
        	switch(obj.id)
        	{
        		case "edt_car" :	// 이용차량
        			svcId = "car";
        			break;
        		case "edt_mon_car" :	// 월요차량
        			svcId = "mon_car";
        			break;
        		case "edt_tue_car" :	// 화요차량
        			svcId = "tue_car";
        			break;
        		case "edt_wed_car" :	// 수요차량
        			svcId = "wed_car";
        			break;
        		case "edt_thu_car" :	// 목요차량
        			svcId = "thu_car";
        			break;
        		case "edt_fri_car" :	// 금요차량
        			svcId = "fri_car";
        			break;
        		case "edt_sat_car" :	// 토요차량
        			svcId = "sat_car";
        			break;
        		case "edt_sun_car" :	// 일요차량
        			svcId = "sun_car";
        			break;
        		default:
        	}

        	const val = obj.value;
        	let val1 = "";
        	let val2 = "";

        	if (!Sct.Util.isEmpty(val))
        	{
        		val1 = val.substr(0, 2);
        		val2 = val.substr(2);
        	}

        	const param = {
        		SICODE : fv_sicode
        	,	VAL1 : val1
        	,	VAL2 : val2
        	};

        	Sct.popup(this, svcId, 450, 400, "송영차량지정", param, "DAY_POP::DAY00402_P04.xfdl", "fn_popCallback");
        };

        // 수급자 주간송영 운행일정 체크박스 체인지 이벤트
        this.chk_day_onchanged = function(obj,e)
        {
        	const startHour = this.ds_data.getColumn(0, "이용시작시");
        	const startMin = this.ds_data.getColumn(0, "이용시작분");
        	const endHour = this.ds_data.getColumn(0, "이용종료시");
        	const endMin = this.ds_data.getColumn(0, "이용종료분");
        	const car = this.ds_data.getColumn(0, "이용차량");

        	let ddd = "";
        	switch(obj.id)
        	{
        		case "chk_mon" :
        			ddd = "월";
        			break;
        		case "chk_tue" :
        			ddd = "화";
        			break;
        		case "chk_wed" :
        			ddd = "수";
        			break;
        		case "chk_thu" :
        			ddd = "목";
        			break;
        		case "chk_fri" :
        			ddd = "금";
        			break;
        		case "chk_sat" :
        			ddd = "토";
        			break;
        		case "chk_sun" :
        			ddd = "일";
        			break;
        		default:
        	}

        	if (e.postvalue == 0)
        	{
        		this.ds_data.setColumn(0, ddd + "요시작시", "00");
        		this.ds_data.setColumn(0, ddd + "요시작분", "00");
        		this.ds_data.setColumn(0, ddd + "요종료시", "00");
        		this.ds_data.setColumn(0, ddd + "요종료분", "00");
        		this.ds_data.setColumn(0, ddd + "요차량", "");
        	}
        	else
        	{
        		this.ds_data.setColumn(0, ddd + "요시작시", startHour);
        		this.ds_data.setColumn(0, ddd + "요시작분", startMin);
        		this.ds_data.setColumn(0, ddd + "요종료시", endHour);
        		this.ds_data.setColumn(0, ddd + "요종료분", endMin);
        		this.ds_data.setColumn(0, ddd + "요차량", car);
        	}
        };

        // 리포트 출력일자 설정 킬포커스 이벤트
        this.div_func_mae_print_onkillfocus = function(obj,e)
        {
        	if (obj.value.includes(" "))
        		obj.set_value("");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("oncellclick",this.div_cont_div_left_grd_list_oncellclick,this);
            this.div_cont.form.div_right.form.div_mon.form.edt_notIn1.addEventHandler("onchanged",this.edt_notIn_onchanged,this);
            this.div_cont.form.div_right.form.div_mon.form.edt_notIn2.addEventHandler("onchanged",this.edt_notIn_onchanged,this);
            this.div_cont.form.div_right.form.div_mon.form.edt_notIn3.addEventHandler("onchanged",this.edt_notIn_onchanged,this);
            this.div_cont.form.div_right.form.div_mon.form.edt_notIn4.addEventHandler("onchanged",this.edt_notIn_onchanged,this);
            this.div_cont.form.div_right.form.div_mon.form.edt_notIn5.addEventHandler("onchanged",this.edt_notIn_onchanged,this);
            this.div_cont.form.div_right.form.div_mon.form.div_cal.form.grd_cal.addEventHandler("oncelldblclick",this.div_cont_div_right_div_mon_div_cal_grd_cal_oncelldblclick,this);
            this.div_cont.form.div_right.form.div_mon.form.div_cal.form.grd_cal.addEventHandler("oncellclick",this.div_cont_div_right_div_mon_div_cal_grd_cal_oncellclick,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_from_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_from_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_to_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_to_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_car.addEventHandler("oneditclick",this.edt_car_oneditclick,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_mon_from_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_mon_from_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_mon_to_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_mon_to_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.chk_mon.addEventHandler("onchanged",this.chk_day_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.chk_tue.addEventHandler("onchanged",this.chk_day_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_tue_from_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_tue_from_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_tue_to_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_tue_to_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.chk_wed.addEventHandler("onchanged",this.chk_day_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_wed_from_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_wed_from_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_wed_to_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_wed_to_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.chk_thu.addEventHandler("onchanged",this.chk_day_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_thu_from_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_thu_from_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_thu_to_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_thu_to_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.chk_fri.addEventHandler("onchanged",this.chk_day_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_fri_from_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_fri_from_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_fri_to_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_fri_to_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.chk_sat.addEventHandler("onchanged",this.chk_day_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_sat_from_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_sat_from_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_sat_to_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_sat_to_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.chk_sun.addEventHandler("onchanged",this.chk_day_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_sun_from_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_sun_from_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_sun_to_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_sun_to_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_mon_car.addEventHandler("oneditclick",this.edt_car_oneditclick,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_tue_car.addEventHandler("oneditclick",this.edt_car_oneditclick,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_wed_car.addEventHandler("oneditclick",this.edt_car_oneditclick,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_thu_car.addEventHandler("oneditclick",this.edt_car_oneditclick,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_fri_car.addEventHandler("oneditclick",this.edt_car_oneditclick,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_sat_car.addEventHandler("oneditclick",this.edt_car_oneditclick,this);
            this.div_cont.form.div_right.form.div_plan.form.edt_sun_car.addEventHandler("oneditclick",this.edt_car_oneditclick,this);
            this.div_search.form.cal_date_pic.addEventHandler("onchanged",this.div_search_cal_date_pic_onchanged,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_report2.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_report3.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_func.form.mae_print.addEventHandler("onkillfocus",this.div_func_mae_print_onkillfocus,this);
        };
        this.loadIncludeScript("DAY00404.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
