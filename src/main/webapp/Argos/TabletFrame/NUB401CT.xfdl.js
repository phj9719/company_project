(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("물리치료");
            this.set_background("#f4f9fc");
            if (Form == this.constructor)
            {
                this._setFormPosition(1180,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"P1\" type=\"STRING\" size=\"256\"/><Column id=\"DES\" type=\"STRING\" size=\"256\"/><Column id=\"PART\" type=\"STRING\" size=\"256\"/><Column id=\"TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ETC\" type=\"STRING\" size=\"256\"/><Column id=\"P2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DATE\">2021-01-31</Col><Col id=\"P1\">홍길순</Col><Col id=\"DES\">Hot pack, T.E.N.S&amp;I.C.T, 마사지</Col><Col id=\"PART\">양쪽어깨 및 양쪽다리</Col><Col id=\"TIME\">10:40~11:30</Col><Col id=\"ETC\">양쪽어깨에 저주파, 양쪽하지에 공기압 치료로 진행해 드렸음.  하기 싫다고 거부하여 물리치료 진행못함</Col><Col id=\"P2\">김물리</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_room", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resident", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_menuTitle","2.46%","10",null,"30","2.97%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("메뉴명");
            obj.set_cssclass("sta_tMenuTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","2.46%","55",null,"40","3.39%",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_date","0","0","150","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_locale("ko_KR");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","160","0","120","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_location");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_itemheight("36");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_room","290","0","120","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_room");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_itemheight("36");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSearch","550","0","80","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("검색");
            obj.set_cssclass("btn_tSearch");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tDelete",null,"0","80","40","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("btn_tDelete");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSave",null,"0","80","40","90",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_tSave");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_resident","420","0","120","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_resident");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_itemheight("36");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","30","97",null,null,"3.39%","5%",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_name","0","11","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("입소자성명 :");
            obj.set_cssclass("sta_tTxt1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name00","100","11","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("홍길순(87)");
            obj.set_cssclass("sta_tTxt2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name01","200","11","80","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("| 입소일 :");
            obj.set_cssclass("sta_tTxt1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name01_00","280","11","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("2017.01.01");
            obj.set_cssclass("sta_tTxt2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name01_00_00","390","11","80","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_text("| 생활실 :");
            obj.set_cssclass("sta_tTxt1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name01_00_00_00","470","11","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            obj.set_text("1층/101호");
            obj.set_cssclass("sta_tTxt2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name01_00_00_01","560","11","80","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            obj.set_text("| 작성일 :");
            obj.set_cssclass("sta_tTxt1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name01_00_01","640","11","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("7");
            obj.set_text("2021.01.31");
            obj.set_cssclass("sta_tTxt2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01","0","55","110","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02","0","55","110","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("9");
            obj.set_text("Hot pack");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_01","0","155","220","150",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("Grid00","0%","336",null,null,"0%","0%",null,null,null,null,this.div_cont.form);
            obj.set_taborder("12");
            obj.set_cssclass("grd_DataList_h2");
            obj.set_binddataset("ds_list");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"65\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"45\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"날짜\"/><Cell col=\"2\" text=\"입소자\"/><Cell col=\"3\" text=\"제공내용\"/><Cell col=\"4\" text=\"부위\"/><Cell col=\"5\" text=\"시간\"/><Cell col=\"6\" text=\"기타(특이사항)\"/><Cell col=\"7\" text=\"처리자\"/><Cell col=\"8\" expandchar=\"delete\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:DATE\"/><Cell col=\"2\" text=\"bind:P1\"/><Cell col=\"3\" text=\"bind:DES\" wordWrap=\"char\"/><Cell col=\"4\" maskeditformat=\"##:##~##:##\" maskedittype=\"string\" text=\"bind:PART\"/><Cell col=\"5\" text=\"bind:TIME\"/><Cell col=\"6\" text=\"bind:ETC\" wordWrap=\"char\"/><Cell col=\"7\" text=\"bind:P2\"/><Cell col=\"8\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_00","110","55","110","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02_01","0","155","220","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("11");
            obj.set_text("부위");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","20","210","180","80",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("13");
            this.div_cont.addChild(obj.name, obj);

            obj = new Radio("Radio00","15","105","90","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_cont_form_Radio00_innerdataset = new nexacro.NormalDataset("div_cont_form_Radio00_innerdataset", obj);
            div_cont_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">N</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">Y</Col></Row></Rows>");
            obj.set_innerdataset(div_cont_form_Radio00_innerdataset);
            this.div_cont.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","125","105","90","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_cont_form_Radio00_00_innerdataset = new nexacro.NormalDataset("div_cont_form_Radio00_00_innerdataset", obj);
            div_cont_form_Radio00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">N</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">Y</Col></Row></Rows>");
            obj.set_innerdataset(div_cont_form_Radio00_00_innerdataset);
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","220","55","110","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02_00","110","55","110","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("17");
            obj.set_text("T.E.N.S&I.C.T");
            obj.set_cssclass("sta_tDataHForm1");
            obj.set_font("normal bold 11pt/normal \"Arial\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00","235","105","90","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_cont_form_Radio00_00_00_innerdataset = new nexacro.NormalDataset("div_cont_form_Radio00_00_00_innerdataset", obj);
            div_cont_form_Radio00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">N</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">Y</Col></Row></Rows>");
            obj.set_innerdataset(div_cont_form_Radio00_00_00_innerdataset);
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","220","55","110","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("20");
            obj.set_text("I.R");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","330","55","110","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00_00","345","105","90","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("22");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_cont_form_Radio00_00_00_00_innerdataset = new nexacro.NormalDataset("div_cont_form_Radio00_00_00_00_innerdataset", obj);
            div_cont_form_Radio00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">N</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">Y</Col></Row></Rows>");
            obj.set_innerdataset(div_cont_form_Radio00_00_00_00_innerdataset);
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","330","55","110","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("23");
            obj.set_text("Air-massage");
            obj.set_cssclass("sta_tDataHForm1");
            obj.set_font("normal bold 11pt/normal \"Arial\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","440","55","110","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00_00_00","455","105","90","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("25");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_cont_form_Radio00_00_00_00_00_innerdataset = new nexacro.NormalDataset("div_cont_form_Radio00_00_00_00_00_innerdataset", obj);
            div_cont_form_Radio00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">N</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">Y</Col></Row></Rows>");
            obj.set_innerdataset(div_cont_form_Radio00_00_00_00_00_innerdataset);
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","440","55","110","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("26");
            obj.set_text("마사지");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","550","55","110","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00_00_00_00","565","105","90","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("28");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_cont_form_Radio00_00_00_00_00_00_innerdataset = new nexacro.NormalDataset("div_cont_form_Radio00_00_00_00_00_00_innerdataset", obj);
            div_cont_form_Radio00_00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">N</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">Y</Col></Row></Rows>");
            obj.set_innerdataset(div_cont_form_Radio00_00_00_00_00_00_innerdataset);
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00","550","55","110","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("29");
            obj.set_text("F.E.S");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","660","55","110","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00","660","55","110","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("31");
            obj.set_text("근력운동");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00_00_00_00_00","675","105","90","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("32");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_cont_form_Radio00_00_00_00_00_00_00_innerdataset = new nexacro.NormalDataset("div_cont_form_Radio00_00_00_00_00_00_00_innerdataset", obj);
            div_cont_form_Radio00_00_00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">N</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">Y</Col></Row></Rows>");
            obj.set_innerdataset(div_cont_form_Radio00_00_00_00_00_00_00_innerdataset);
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00","770","55","110","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00_00_00_00_00_00","785","105","90","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("34");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_cont_form_Radio00_00_00_00_00_00_00_00_innerdataset = new nexacro.NormalDataset("div_cont_form_Radio00_00_00_00_00_00_00_00_innerdataset", obj);
            div_cont_form_Radio00_00_00_00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">N</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">Y</Col></Row></Rows>");
            obj.set_innerdataset(div_cont_form_Radio00_00_00_00_00_00_00_00_innerdataset);
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00_00","770","55","110","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("35");
            obj.set_text("보행운동");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00_00","880","55","115","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_tDataBForm1");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00_00_00_00_00_00_00","896","105","90","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("37");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_cont_form_Radio00_00_00_00_00_00_00_00_00_innerdataset = new nexacro.NormalDataset("div_cont_form_Radio00_00_00_00_00_00_00_00_00_innerdataset", obj);
            div_cont_form_Radio00_00_00_00_00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">N</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">Y</Col></Row></Rows>");
            obj.set_innerdataset(div_cont_form_Radio00_00_00_00_00_00_00_00_00_innerdataset);
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00_00_00","880","55","115","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("38");
            obj.set_text("standing-table");
            obj.set_cssclass("sta_tDataHForm1");
            obj.set_font("normal 700 11pt/normal \"Arial\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00_00_00","995","55","114","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_tDataBForm3");
            this.div_cont.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00_00_00_00_00_00_00_00","1007","105","90","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("40");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_cont_form_Radio00_00_00_00_00_00_00_00_00_00_innerdataset = new nexacro.NormalDataset("div_cont_form_Radio00_00_00_00_00_00_00_00_00_00_innerdataset", obj);
            div_cont_form_Radio00_00_00_00_00_00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">N</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">Y</Col></Row></Rows>");
            obj.set_innerdataset(div_cont_form_Radio00_00_00_00_00_00_00_00_00_00_innerdataset);
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00_00_00_00","995","55","114","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("41");
            obj.set_text("Rom-exercise");
            obj.set_cssclass("sta_tDataHForm2");
            obj.set_font("normal bold 11pt/normal \"Arial\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","220","155","220","150",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00","240","210","180","80",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("43");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","440","155","440","150",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","220","155","220","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("44");
            obj.set_text("시간");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00_00","460","210","400","80",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("46");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00","440","155","440","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("47");
            obj.set_text("기타(특이사항)");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_01","880","155","229","150",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_tDataBForm3");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_01","880","155","229","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("49");
            obj.set_text("처리자");
            obj.set_cssclass("sta_tDataHForm2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static00","955","221","70","55",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("50");
            obj.set_text("김물리");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Tablet",1180,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cal_date","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cmb_location","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cmb_room","value","ds_search","ROOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cmb_resident","value","ds_search","RES_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUB401CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUB401CT.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUB401CT.xfdl","lib::tpgm_com.xjs");
        this.registerScript("NUB401CT.xfdl", function() {
        /***********************************************************************
         * 화면ID    : CMA001CT
         * 화면명   :
         * 화면설명 :
         * 작성일    : 2020-07-08
         * 작성자   :  배영걸
         * 수정이력 :
         ***********************************************************************
         *     	수정일     	수정자   	내용
         *		2020-07-08		배영걸		1차수정
         ***********************************************************************
         ***********************************************************************
         */

        /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        this.executeIncludeScript("lib::tpgm_com.xjs"); /*include "lib::tpgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_currentDS = "";
        this.fv_currentGrid = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e, false);

        	this.sta_menuTitle.set_text(this.getOwnerFrame().arguments["menuTitle"]);

        	// 검색조건 세팅
        	this.taSearchDataSetting(obj);
        };

        /***********************************************************************
         * Common Button Functions
         ************************************************************************/
        // 검색 버튼
        this.fn_searchBtn = function ()
        {
        	//this.fn_search();
        };

        // 저장 버튼
        this.fn_saveBtn = function ()
        {
        	//this.fn_save();
        };

        //삭제 버튼
        this.fn_deleteBtn = function ()
        {
        	//this.fn_delete();
        };
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	return true;
        };

        // 저장 전 validation
        this.fn_save_pre = function ()
        {
        	return true;
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //조회
        this.fn_search = function ()
        {
        	//validation
        	if(!this.fn_search_pre()) return;

        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_search";
        	var outDatasets = "ds_head=output1";
        	var argument = "method=getList "
        		+ "sqlId=CMA001CT.CMA001CT_DS_HEAD_S ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //저장
        this.fn_save = function ()
        {
        	//입력 필수여부체크
        	if(!this.gfn_chkGridEssential(this.fv_currentGrid)) return false;

        	let svcId = "save";
        	let inDs = "ds_head"
        	this.fn_save_com(svcId, inDs);
        };

        // 콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{

        		}
        		else if(strSvcID == "save" || strSvcID == "delete")
        		{
        			//this.fn_search();
        		}
        	}
        	else
        	{

        	}
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/

         /***********************************************************************
         * Component Event Functions
         ***********************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.addEventHandler("onclick",this.formClick,this);
            this.sta_menuTitle.addEventHandler("onclick",this.formClick,this);
            this.div_search.addEventHandler("onclick",this.formClick,this);
            this.div_search.form.cmb_location.addEventHandler("onitemchanged",this.cmb_location_onitemchanged,this);
            this.div_search.form.cmb_room.addEventHandler("onitemchanged",this.cmb_room_onitemchanged,this);
            this.div_search.form.btn_tSearch.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.btn_tDelete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.div_search.form.btn_tSave.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_cont.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_name.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_name00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_name01.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_name01_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_name01_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_name01_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_name01_00_00_01.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_name01_00_01.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static02.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01_01.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static02_01.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static02_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static02_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static02_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01_00_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static02_00_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01_00_00_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static02_00_00_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01_00_00_00_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static02_00_00_00_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01_00_00_00_00_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static02_00_00_00_00_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01_00_00_00_00_00_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static02_00_00_00_00_00_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01_00_00_00_00_00_00_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static02_00_00_00_00_00_00_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01_01_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01_01_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static02_01_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static02_01_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01_01_00_01.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static02_01_00_01.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static00.addEventHandler("onclick",this.formClick,this);
            this.ds_search.addEventHandler("onrowposchanged",this.ds_notice_onrowposchanged,this);
        };
        this.loadIncludeScript("NUB401CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
