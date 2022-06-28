(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00401_P04");
            this.set_titletext("운전자지정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1150,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"차구분\" type=\"STRING\" size=\"256\"/><Column id=\"차종\" type=\"STRING\" size=\"256\"/><Column id=\"차번호\" type=\"STRING\" size=\"256\"/><Column id=\"운전자1\" type=\"STRING\" size=\"256\"/><Column id=\"운전코드1\" type=\"STRING\" size=\"256\"/><Column id=\"운전자2\" type=\"STRING\" size=\"256\"/><Column id=\"운전코드2\" type=\"STRING\" size=\"256\"/><Column id=\"운전자3\" type=\"STRING\" size=\"256\"/><Column id=\"운전코드3\" type=\"STRING\" size=\"256\"/><Column id=\"지정\" type=\"STRING\" size=\"256\"/><Column id=\"차표시\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"차구분\" type=\"STRING\" size=\"256\"/><Column id=\"차종\" type=\"STRING\" size=\"256\"/><Column id=\"차번호\" type=\"STRING\" size=\"256\"/><Column id=\"운전자1\" type=\"STRING\" size=\"256\"/><Column id=\"운전코드1\" type=\"STRING\" size=\"256\"/><Column id=\"운전자2\" type=\"STRING\" size=\"256\"/><Column id=\"운전코드2\" type=\"STRING\" size=\"256\"/><Column id=\"운전자3\" type=\"STRING\" size=\"256\"/><Column id=\"운전코드3\" type=\"STRING\" size=\"256\"/><Column id=\"지정\" type=\"STRING\" size=\"256\"/><Column id=\"지정1\" type=\"STRING\" size=\"256\"/><Column id=\"지정2\" type=\"STRING\" size=\"256\"/><Column id=\"지정3\" type=\"STRING\" size=\"256\"/><Column id=\"차표시\" type=\"STRING\" size=\"256\"/><Column id=\"표시1\" type=\"STRING\" size=\"256\"/><Column id=\"표시2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","10","0","590",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","30",null,null,"0","20",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"차종\"/><Cell col=\"2\" text=\"차번호\"/><Cell col=\"3\" text=\"운전자1\"/><Cell col=\"4\" text=\"운전자2\"/><Cell col=\"5\" text=\"운전자3\"/><Cell col=\"6\" text=\"지정\"/><Cell col=\"7\" text=\"운행유무\"/></Band><Band id=\"body\"><Cell text=\"bind:차구분\"/><Cell col=\"1\" text=\"bind:차종\"/><Cell col=\"2\" text=\"bind:차번호\"/><Cell col=\"3\" text=\"bind:운전자1\"/><Cell col=\"4\" text=\"bind:운전자2\"/><Cell col=\"5\" text=\"bind:운전자3\"/><Cell col=\"6\" text=\"bind:지정\"/><Cell col=\"7\" text=\"bind:차표시\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","260","24",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_text("송영차량 리스트");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","div_left:20","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_main","0","0",null,null,"10","20",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","260","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("11");
            obj.set_text("송영차량 운전자지정");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_line","0","30",null,"2","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("12");
            obj.set_background("#000000");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1","0","37","103","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("13");
            obj.set_text("차량코드");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1","sta_head1:-1","sta_head1:-34","418","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2","0","sta_head1:-1","103","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("차종");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body2","sta_head2:-1","sta_body1:-1","418","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3","0","sta_head2:-1","103","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("17");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","sta_head3:-1","sta_body2:-1","418","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4","0","136","103","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4","sta_head4:-1","136","418","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_car_kind","sta_body2:-407","sta_body2:-30","170","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("1");
            obj.set_maxlength("24");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_car_no","sta_body3:-407","sta_body3:-30","124","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("2");
            obj.set_maxlength("14");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4_00","0","169","103","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4_00","102","169","418","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4_00_00","0","202","103","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4_00_00","102","202","418","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4_00_00_00","0","235","103","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("운행유무");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4_00_00_00","102","235","418","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_driver1","5","140","93","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("3");
            obj.set_text("운전자①");
            obj.set_cssclass("btn_worker");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_driver1_name","115","144","69","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("27");
            obj.set_text("이동철");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_driver1_code","199","144","79","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("28");
            obj.set_text("20210004");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_default1","333","141","20","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("4");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_default1","311","141","19","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("29");
            obj.set_text(".");
            obj.set_textAlign("right");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_driver2","5","173","93","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("5");
            obj.set_text("운전자②");
            obj.set_cssclass("btn_worker");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_driver2_name","115","177","69","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("30");
            obj.set_text("이동철");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_driver2_code","199","177","79","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("31");
            obj.set_text("20210004");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_default2","311","174","19","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("32");
            obj.set_text(".");
            obj.set_textAlign("right");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_default2","333","174","20","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("6");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_driver3","5","206","93","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("7");
            obj.set_text("운전자③");
            obj.set_cssclass("btn_worker");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_driver3_name","115","210","69","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("33");
            obj.set_text("이동철");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_driver3_code","199","210","79","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("34");
            obj.set_text("20210004");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_default3","311","207","19","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("35");
            obj.set_text(".");
            obj.set_textAlign("right");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_default3","333","207","20","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("8");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_visible1","114","242","100","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("9");
            obj.set_text("운행표시");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_visible2","224","242","100","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("10");
            obj.set_text("표시안함");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_car_gubun","113","42","40","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("0");
            obj.set_maxlength("30");
            obj.set_readonly("true");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_func","0","0",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_refresh","10","5","90","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("새로고침");
            obj.set_cssclass("btn_refresh");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"5","70","25","10",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report","460","5","140","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("송영차량 리스트");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1150,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_cont.form.div_right.form.div_main.form.edt_car_gubun","value","ds_data","차구분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_cont.form.div_right.form.div_main.form.edt_car_kind","value","ds_data","차종");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_cont.form.div_right.form.div_main.form.edt_car_no","value","ds_data","차번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_cont.form.div_right.form.div_main.form.sta_driver1_name","text","ds_data","운전자1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_right.form.div_main.form.sta_driver1_code","text","ds_data","운전코드1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_right.form.div_main.form.sta_driver2_name","text","ds_data","운전자2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_right.form.div_main.form.sta_driver2_code","text","ds_data","운전코드2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_right.form.div_main.form.sta_driver3_name","text","ds_data","운전자3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_right.form.div_main.form.sta_driver3_code","text","ds_data","운전코드3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_right.form.div_main.form.chk_default1","value","ds_data","지정1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_right.form.div_main.form.chk_default2","value","ds_data","지정2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right.form.div_main.form.chk_default3","value","ds_data","지정3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right.form.div_main.form.chk_visible1","value","ds_data","표시1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.div_main.form.chk_visible2","value","ds_data","표시2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00401_P04.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00401_P04.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00401_P04.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00401_P04
         * 화면명   	: 운전자지정 팝업
         * 화면설명 	: 차량별 운전자를 지정하는 팝업
         * 작성일   	: 2022-05-02
         * 작성자   	: 조기종
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
        const fv_date = this.parent.DATE;
        this.fv_currentDS = this.ds_list;
        this.fv_currentGrid = this.div_cont.form.div_left.form.grd_list;
        this.reSearchData = "";
        this.searchFlag = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 저장을 위한 gv_curWinKey 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00401_P04";

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "SICODE", fv_sicode);

        	// 오픈시 조회
        	this.fn_search();
        };

        // 그리드 css 적용
        this.initGrid = function(grid)
        {
        	// 차표시 값에 따라 차번호 색변경
        	const noIdx = grid.getBindCellIndex("body", "차번호");
        	const noCss = "expr:dataset.getColumn(currow, '차표시') == 1 ? 'CellBe6ffff' : ''";
        	grid.setCellProperty("body", noIdx, "cssclass", noCss);

        	// 지정에 따라 운전자 배경색 변경
        	const nameIdx1 = grid.getBindCellIndex("body", "운전자1");
        	const nameIdx2 = grid.getBindCellIndex("body", "운전자2");
        	const nameIdx3 = grid.getBindCellIndex("body", "운전자3");
        	const nameCss1 = "expr:dataset.getColumn(currow, '지정') == 1 ? 'CellBLightSky' : ''";
        	const nameCss2 = "expr:dataset.getColumn(currow, '지정') == 2 ? 'CellBLightSky' : ''";
        	const nameCss3 = "expr:dataset.getColumn(currow, '지정') == 3 ? 'CellBLightSky' : ''";
        	grid.setCellProperty("body", nameIdx1, "cssclass", nameCss1);
        	grid.setCellProperty("body", nameIdx2, "cssclass", nameCss2);
        	grid.setCellProperty("body", nameIdx3, "cssclass", nameCss3);

        	// 차표시 값에 따라 차표시 색변경
        	const viIdx = grid.getBindCellIndex("body", "차표시");
        	const viCss = "expr:dataset.getColumn(currow, '차표시') == 1 ? 'CellBLightSky' : ''";
        	grid.setCellProperty("body", viIdx, "cssclass", viCss);
        };
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	if (this.ds_data.rowcount > 0)
        		this.reSearchData = this.ds_data.getColumn(0, "차구분");

        	return true;
        };

        // 저장 전 validation
        this.fn_save_pre = function()
        {
        	if (this.ds_data.rowcount == 0)
        	{
        		this.alert("저장할 항목이 없습니다.");
        		return false;
        	}

        	if (!this.confirm("저장 하시겠습니까?"))
        		return false;

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
        	const argument = "method=getList"
        				   + " sqlId=DAY00401_P04.DAY00401_P04_DS_LIST_S";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 저장
        this.fn_save = function()
        {
        	// validation
        	if (!this.fn_save_pre()) return;

        	const svcId = "save";
         	const inDs = "ds_data";
        	this.fn_save_com(svcId, inDs);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if (strSvcID == "search")
        		{
        			const sRow = this.fn_findMstRow(this.reSearchData, this.searchFlag);
        			this.searchFlag = "";

        			this.initGrid(this.div_cont.form.div_left.form.grd_list);
        		}
        		else if (strSvcID == "save")
        		{
        			this.alert("저장되었습니다.");
        			this.fn_search();
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
        // 입력, 수정용 데이터셋에 데이터 복사
        this.fn_dataCopy = function(row)
        {
        	this.ds_data.clearData();
        	const nRow = this.ds_data.addRow();
        	this.ds_data.copyRow(nRow, this.ds_list, row);

        	const dValue = this.ds_data.getColumn(nRow, "지정");
        	switch(dValue)
        	{
        		case "1" :
        			this.ds_data.setColumn(nRow, "지정1", "1");
        			break;
        		case "2" :
        			this.ds_data.setColumn(nRow, "지정2", "2");
        			break;
        		case "3" :
        			this.ds_data.setColumn(nRow, "지정3", "3");
        			break;
        	}

        	const vValue = this.ds_data.getColumn(nRow, "차표시");
        	switch(vValue)
        	{
        		case "1" :
        			this.ds_data.setColumn(nRow, "표시1", "1");
        			break;
        		case "0" :
        			this.ds_data.setColumn(nRow, "표시2", "2");
        			break;
        	}

        	this.ds_data.set_updatecontrol(false);
        	this.ds_data.setRowType(nRow, 1);
        	this.ds_data.set_updatecontrol(true);
        };

        // 작업후 작업 정보 조회
        this.fn_findMstRow = function(fv_saveRefNo, flag) {
        	let sFindRow = this.ds_list.findRow("차구분", fv_saveRefNo);

        	if (sFindRow > -1) {
        		this.ds_list.set_rowposition(sFindRow);
        		this.fn_dataCopy(sFindRow);
        	}

        	return sFindRow;
        };

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 운전자 선택 팝업
        this.btn_driver_select = function(obj,e)
        {
        	let svcId = "";

        	switch(obj.id) {
        		case "btn_driver1" :	// 운전자①
        			svcId = "driver1";
        			break;
        		case "btn_driver2" :	// 운전자②
        			svcId = "driver2";
        			break;
        		case "btn_driver3" :	// 운전자③
        			svcId = "driver3";
        			break;
        		default:
        	}

        	const param = {
        		SICODE : fv_sicode
        	,	DATE : fv_date
        	};

        	Sct.popup(this, svcId, 450, 400, "입력담당자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };

        // 리포트 출력
        this.fn_report = function(obj,e)
        {
        	if (this.ds_list.rowcount == 0)
        	{
        		this.alert("차량목록이 없습니다.");
        		return;
        	}

        	let params;
        	const popupUrl = "DAY_POP::DAY00401_R07.xfdl";
        	const popupName = "송영차량 리스트";
        	const dicompNm = " ";

        	params = {
        		sicode : fv_sicode
        	,	date : fv_date
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "driver1" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				this.ds_data.setColumn(0, "운전자1", nexacro.trim(objDs.getColumn(0, "c_name")));
        				this.ds_data.setColumn(0, "운전코드1", objDs.getColumn(0, "c_staffid"));
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "운전자1", "");
        				this.ds_data.setColumn(0, "운전코드1", "");
        			}
        			break;
        		case "driver2" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				this.ds_data.setColumn(0, "운전자2", nexacro.trim(objDs.getColumn(0, "c_name")));
        				this.ds_data.setColumn(0, "운전코드2", objDs.getColumn(0, "c_staffid"));
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "운전자2", "");
        				this.ds_data.setColumn(0, "운전코드2", "");
        			}
        			break;
        		case "driver3" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				this.ds_data.setColumn(0, "운전자3", nexacro.trim(objDs.getColumn(0, "c_name")));
        				this.ds_data.setColumn(0, "운전코드3", objDs.getColumn(0, "c_staffid"));
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "운전자3", "");
        				this.ds_data.setColumn(0, "운전코드3", "");
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
        this.fn_saveBtn = function()
        {
        	this.fn_save();
        };

        // 그리드 셀클릭 이벤트
        this.div_cont_div_left_grd_list_oncellclick = function(obj,e)
        {
        	const noIdx = obj.getBindCellIndex("body", "차번호");
        	// 차번호 선택
        	if (e.col == noIdx)
        	{
        		// 입력, 수정용 데이터셋에 데이터 복사
        		this.fn_dataCopy(e.row);
        	}
        };

        // 지정 운전자 체크박스 변경 이벤트
        this.chk_default_onchanged = function(obj,e)
        {
        	switch(e.postvalue)
        	{
        		case "1" :
        			this.ds_data.setColumn(0, "지정2", 0);
        			this.ds_data.setColumn(0, "지정3", 0);
        			this.ds_data.setColumn(0, "지정", e.postvalue);
        			break;
        		case "2" :
        			this.ds_data.setColumn(0, "지정1", 0);
        			this.ds_data.setColumn(0, "지정3", 0);
        			this.ds_data.setColumn(0, "지정", e.postvalue);
        			break;
        		case "3" :
        			this.ds_data.setColumn(0, "지정1", 0);
        			this.ds_data.setColumn(0, "지정2", 0);
        			this.ds_data.setColumn(0, "지정", e.postvalue);
        			break;
        		default:
        	}
        };

        // 운행유무 체크박스 변경 이벤트
        this.chk_visible_onchanged = function(obj,e)
        {
        	switch(obj.id)
        	{
        		case "1" :
        			this.ds_data.setColumn(0, "표시2", 0);
        			this.ds_data.setColumn(0, "차표시", e.postvalue);
        			break;
        		case "2" :
        			this.ds_data.setColumn(0, "표시1", 0);
        			this.ds_data.setColumn(0, "차표시", 0);
        			break;
        		default:
        	}
        };

        // 새로고침
        this.div_func_btn_refresh_onclick = function(obj,e)
        {
        	this.fn_search();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("oncellclick",this.div_cont_div_left_grd_list_oncellclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_driver1.addEventHandler("onclick",this.btn_driver_select,this);
            this.div_cont.form.div_right.form.div_main.form.chk_default1.addEventHandler("onchanged",this.chk_default_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.btn_driver2.addEventHandler("onclick",this.btn_driver_select,this);
            this.div_cont.form.div_right.form.div_main.form.chk_default2.addEventHandler("onchanged",this.chk_default_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.btn_driver3.addEventHandler("onclick",this.btn_driver_select,this);
            this.div_cont.form.div_right.form.div_main.form.chk_default3.addEventHandler("onchanged",this.chk_default_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_visible1.addEventHandler("onchanged",this.chk_visible_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_visible2.addEventHandler("onchanged",this.chk_visible_onchanged,this);
            this.div_func.form.btn_refresh.addEventHandler("onclick",this.div_func_btn_refresh_onclick,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_func.form.btn_report.addEventHandler("onclick",this.fn_report,this);
        };
        this.loadIncludeScript("DAY00401_P04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
