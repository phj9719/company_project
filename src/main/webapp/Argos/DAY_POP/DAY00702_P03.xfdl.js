(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00702_P03");
            this.set_titletext("식단간편입력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1620,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp1", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"t_number\" type=\"STRING\" size=\"256\"/><Column id=\"temp_id\" type=\"STRING\" size=\"256\"/><Column id=\"food01\" type=\"STRING\" size=\"256\"/><Column id=\"food02\" type=\"STRING\" size=\"256\"/><Column id=\"food03\" type=\"STRING\" size=\"256\"/><Column id=\"food04\" type=\"STRING\" size=\"256\"/><Column id=\"food05\" type=\"STRING\" size=\"256\"/><Column id=\"food06\" type=\"STRING\" size=\"256\"/><Column id=\"gubun01\" type=\"STRING\" size=\"256\"/><Column id=\"gubun02\" type=\"STRING\" size=\"256\"/><Column id=\"gubun03\" type=\"STRING\" size=\"256\"/><Column id=\"gubun04\" type=\"STRING\" size=\"256\"/><Column id=\"gubun05\" type=\"STRING\" size=\"256\"/><Column id=\"gubun06\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp2", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"t_number\" type=\"STRING\" size=\"256\"/><Column id=\"temp_id\" type=\"STRING\" size=\"256\"/><Column id=\"food01\" type=\"STRING\" size=\"256\"/><Column id=\"food02\" type=\"STRING\" size=\"256\"/><Column id=\"food03\" type=\"STRING\" size=\"256\"/><Column id=\"food04\" type=\"STRING\" size=\"256\"/><Column id=\"food05\" type=\"STRING\" size=\"256\"/><Column id=\"food06\" type=\"STRING\" size=\"256\"/><Column id=\"gubun01\" type=\"STRING\" size=\"256\"/><Column id=\"gubun02\" type=\"STRING\" size=\"256\"/><Column id=\"gubun03\" type=\"STRING\" size=\"256\"/><Column id=\"gubun04\" type=\"STRING\" size=\"256\"/><Column id=\"gubun05\" type=\"STRING\" size=\"256\"/><Column id=\"gubun06\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp3", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"t_number\" type=\"STRING\" size=\"256\"/><Column id=\"temp_id\" type=\"STRING\" size=\"256\"/><Column id=\"food01\" type=\"STRING\" size=\"256\"/><Column id=\"food02\" type=\"STRING\" size=\"256\"/><Column id=\"food03\" type=\"STRING\" size=\"256\"/><Column id=\"food04\" type=\"STRING\" size=\"256\"/><Column id=\"food05\" type=\"STRING\" size=\"256\"/><Column id=\"food06\" type=\"STRING\" size=\"256\"/><Column id=\"gubun01\" type=\"STRING\" size=\"256\"/><Column id=\"gubun02\" type=\"STRING\" size=\"256\"/><Column id=\"gubun03\" type=\"STRING\" size=\"256\"/><Column id=\"gubun04\" type=\"STRING\" size=\"256\"/><Column id=\"gubun05\" type=\"STRING\" size=\"256\"/><Column id=\"gubun06\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp4", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"t_number\" type=\"STRING\" size=\"256\"/><Column id=\"temp_id\" type=\"STRING\" size=\"256\"/><Column id=\"food01\" type=\"STRING\" size=\"256\"/><Column id=\"food02\" type=\"STRING\" size=\"256\"/><Column id=\"food03\" type=\"STRING\" size=\"256\"/><Column id=\"food04\" type=\"STRING\" size=\"256\"/><Column id=\"food05\" type=\"STRING\" size=\"256\"/><Column id=\"food06\" type=\"STRING\" size=\"256\"/><Column id=\"gubun01\" type=\"STRING\" size=\"256\"/><Column id=\"gubun02\" type=\"STRING\" size=\"256\"/><Column id=\"gubun03\" type=\"STRING\" size=\"256\"/><Column id=\"gubun04\" type=\"STRING\" size=\"256\"/><Column id=\"gubun05\" type=\"STRING\" size=\"256\"/><Column id=\"gubun06\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp5", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"t_number\" type=\"STRING\" size=\"256\"/><Column id=\"temp_id\" type=\"STRING\" size=\"256\"/><Column id=\"food01\" type=\"STRING\" size=\"256\"/><Column id=\"food02\" type=\"STRING\" size=\"256\"/><Column id=\"food03\" type=\"STRING\" size=\"256\"/><Column id=\"food04\" type=\"STRING\" size=\"256\"/><Column id=\"food05\" type=\"STRING\" size=\"256\"/><Column id=\"food06\" type=\"STRING\" size=\"256\"/><Column id=\"gubun01\" type=\"STRING\" size=\"256\"/><Column id=\"gubun02\" type=\"STRING\" size=\"256\"/><Column id=\"gubun03\" type=\"STRING\" size=\"256\"/><Column id=\"gubun04\" type=\"STRING\" size=\"256\"/><Column id=\"gubun05\" type=\"STRING\" size=\"256\"/><Column id=\"gubun06\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp6", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"t_number\" type=\"STRING\" size=\"256\"/><Column id=\"temp_id\" type=\"STRING\" size=\"256\"/><Column id=\"food01\" type=\"STRING\" size=\"256\"/><Column id=\"food02\" type=\"STRING\" size=\"256\"/><Column id=\"food03\" type=\"STRING\" size=\"256\"/><Column id=\"food04\" type=\"STRING\" size=\"256\"/><Column id=\"food05\" type=\"STRING\" size=\"256\"/><Column id=\"food06\" type=\"STRING\" size=\"256\"/><Column id=\"gubun01\" type=\"STRING\" size=\"256\"/><Column id=\"gubun02\" type=\"STRING\" size=\"256\"/><Column id=\"gubun03\" type=\"STRING\" size=\"256\"/><Column id=\"gubun04\" type=\"STRING\" size=\"256\"/><Column id=\"gubun05\" type=\"STRING\" size=\"256\"/><Column id=\"gubun06\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp7", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"t_number\" type=\"STRING\" size=\"256\"/><Column id=\"temp_id\" type=\"STRING\" size=\"256\"/><Column id=\"food01\" type=\"STRING\" size=\"256\"/><Column id=\"food02\" type=\"STRING\" size=\"256\"/><Column id=\"food03\" type=\"STRING\" size=\"256\"/><Column id=\"food04\" type=\"STRING\" size=\"256\"/><Column id=\"food05\" type=\"STRING\" size=\"256\"/><Column id=\"food06\" type=\"STRING\" size=\"256\"/><Column id=\"gubun01\" type=\"STRING\" size=\"256\"/><Column id=\"gubun02\" type=\"STRING\" size=\"256\"/><Column id=\"gubun03\" type=\"STRING\" size=\"256\"/><Column id=\"gubun04\" type=\"STRING\" size=\"256\"/><Column id=\"gubun05\" type=\"STRING\" size=\"256\"/><Column id=\"gubun06\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp8", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"t_number\" type=\"STRING\" size=\"256\"/><Column id=\"temp_id\" type=\"STRING\" size=\"256\"/><Column id=\"food01\" type=\"STRING\" size=\"256\"/><Column id=\"food02\" type=\"STRING\" size=\"256\"/><Column id=\"food03\" type=\"STRING\" size=\"256\"/><Column id=\"food04\" type=\"STRING\" size=\"256\"/><Column id=\"food05\" type=\"STRING\" size=\"256\"/><Column id=\"food06\" type=\"STRING\" size=\"256\"/><Column id=\"gubun01\" type=\"STRING\" size=\"256\"/><Column id=\"gubun02\" type=\"STRING\" size=\"256\"/><Column id=\"gubun03\" type=\"STRING\" size=\"256\"/><Column id=\"gubun04\" type=\"STRING\" size=\"256\"/><Column id=\"gubun05\" type=\"STRING\" size=\"256\"/><Column id=\"gubun06\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp9", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"t_number\" type=\"STRING\" size=\"256\"/><Column id=\"temp_id\" type=\"STRING\" size=\"256\"/><Column id=\"food01\" type=\"STRING\" size=\"256\"/><Column id=\"food02\" type=\"STRING\" size=\"256\"/><Column id=\"food03\" type=\"STRING\" size=\"256\"/><Column id=\"food04\" type=\"STRING\" size=\"256\"/><Column id=\"food05\" type=\"STRING\" size=\"256\"/><Column id=\"food06\" type=\"STRING\" size=\"256\"/><Column id=\"gubun01\" type=\"STRING\" size=\"256\"/><Column id=\"gubun02\" type=\"STRING\" size=\"256\"/><Column id=\"gubun03\" type=\"STRING\" size=\"256\"/><Column id=\"gubun04\" type=\"STRING\" size=\"256\"/><Column id=\"gubun05\" type=\"STRING\" size=\"256\"/><Column id=\"gubun06\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp10", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"t_number\" type=\"STRING\" size=\"256\"/><Column id=\"temp_id\" type=\"STRING\" size=\"256\"/><Column id=\"food01\" type=\"STRING\" size=\"256\"/><Column id=\"food02\" type=\"STRING\" size=\"256\"/><Column id=\"food03\" type=\"STRING\" size=\"256\"/><Column id=\"food04\" type=\"STRING\" size=\"256\"/><Column id=\"food05\" type=\"STRING\" size=\"256\"/><Column id=\"food06\" type=\"STRING\" size=\"256\"/><Column id=\"gubun01\" type=\"STRING\" size=\"256\"/><Column id=\"gubun02\" type=\"STRING\" size=\"256\"/><Column id=\"gubun03\" type=\"STRING\" size=\"256\"/><Column id=\"gubun04\" type=\"STRING\" size=\"256\"/><Column id=\"gubun05\" type=\"STRING\" size=\"256\"/><Column id=\"gubun06\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_templist", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"t_number\" type=\"STRING\" size=\"256\"/><Column id=\"temp_id\" type=\"STRING\" size=\"256\"/><Column id=\"food01\" type=\"STRING\" size=\"256\"/><Column id=\"food02\" type=\"STRING\" size=\"256\"/><Column id=\"food03\" type=\"STRING\" size=\"256\"/><Column id=\"food04\" type=\"STRING\" size=\"256\"/><Column id=\"food05\" type=\"STRING\" size=\"256\"/><Column id=\"food06\" type=\"STRING\" size=\"256\"/><Column id=\"gubun01\" type=\"STRING\" size=\"256\"/><Column id=\"gubun02\" type=\"STRING\" size=\"256\"/><Column id=\"gubun03\" type=\"STRING\" size=\"256\"/><Column id=\"gubun04\" type=\"STRING\" size=\"256\"/><Column id=\"gubun05\" type=\"STRING\" size=\"256\"/><Column id=\"gubun06\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"nalja\" type=\"STRING\" size=\"256\"/><Column id=\"food01\" type=\"STRING\" size=\"256\"/><Column id=\"food02\" type=\"STRING\" size=\"256\"/><Column id=\"food03\" type=\"STRING\" size=\"256\"/><Column id=\"food04\" type=\"STRING\" size=\"256\"/><Column id=\"food05\" type=\"STRING\" size=\"256\"/><Column id=\"food06\" type=\"STRING\" size=\"256\"/><Column id=\"food07\" type=\"STRING\" size=\"256\"/><Column id=\"food08\" type=\"STRING\" size=\"256\"/><Column id=\"food09\" type=\"STRING\" size=\"256\"/><Column id=\"food10\" type=\"STRING\" size=\"256\"/><Column id=\"food11\" type=\"STRING\" size=\"256\"/><Column id=\"food12\" type=\"STRING\" size=\"256\"/><Column id=\"food13\" type=\"STRING\" size=\"256\"/><Column id=\"food14\" type=\"STRING\" size=\"256\"/><Column id=\"food15\" type=\"STRING\" size=\"256\"/><Column id=\"food16\" type=\"STRING\" size=\"256\"/><Column id=\"food17\" type=\"STRING\" size=\"256\"/><Column id=\"food18\" type=\"STRING\" size=\"256\"/><Column id=\"food19\" type=\"STRING\" size=\"256\"/><Column id=\"food20\" type=\"STRING\" size=\"256\"/><Column id=\"food21\" type=\"STRING\" size=\"256\"/><Column id=\"food22\" type=\"STRING\" size=\"256\"/><Column id=\"food23\" type=\"STRING\" size=\"256\"/><Column id=\"food24\" type=\"STRING\" size=\"256\"/><Column id=\"food25\" type=\"STRING\" size=\"256\"/><Column id=\"food26\" type=\"STRING\" size=\"256\"/><Column id=\"food27\" type=\"STRING\" size=\"256\"/><Column id=\"food28\" type=\"STRING\" size=\"256\"/><Column id=\"food29\" type=\"STRING\" size=\"256\"/><Column id=\"food30\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/><Column id=\"diet\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rnum\" type=\"STRING\" size=\"256\"/><Column id=\"color\" type=\"STRING\" size=\"256\"/><Column id=\"식단제공\" type=\"STRING\" size=\"256\"/><Column id=\"DAY1\" type=\"STRING\" size=\"256\"/><Column id=\"DAY2\" type=\"STRING\" size=\"256\"/><Column id=\"DAY3\" type=\"STRING\" size=\"256\"/><Column id=\"DAY4\" type=\"STRING\" size=\"256\"/><Column id=\"DAY5\" type=\"STRING\" size=\"256\"/><Column id=\"DAY6\" type=\"STRING\" size=\"256\"/><Column id=\"DAY7\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_week", this);
            obj._setContents("<ColumnInfo><Column id=\"SUN\" type=\"STRING\" size=\"256\"/><Column id=\"MON\" type=\"STRING\" size=\"256\"/><Column id=\"TUE\" type=\"STRING\" size=\"256\"/><Column id=\"WED\" type=\"STRING\" size=\"256\"/><Column id=\"THU\" type=\"STRING\" size=\"256\"/><Column id=\"FRI\" type=\"STRING\" size=\"256\"/><Column id=\"SAT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dupl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_func","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"5","70","25","10",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_refresh","180","7","70","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_00","7","7","48","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("기준일");
            obj.set_textAlign("center");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_call","255","7","135","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_text("주간 식단 불러오기");
            this.div_func.addChild(obj.name, obj);

            obj = new Calendar("cal_date","61","7","90","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            this.div_func.addChild(obj.name, obj);

            obj = new Calendar("cal_date_pic","150","7","25","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("5");
            this.div_func.addChild(obj.name, obj);

            obj = new Div("div_main","10","40",null,"850","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","390",null,null,"3",null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            this.div_main.addChild(obj.name, obj);

            obj = new Div("div_temp1","20","10","181","161",null,null,null,null,null,null,this.div_main.form.div_left.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.div_main.form.div_left.addChild(obj.name, obj);

            obj = new Edit("edt_num1_1","2","23","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp1.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("1");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp1.addChild(obj.name, obj);

            obj = new Edit("edt_name1_1","26","23","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp1.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp1.addChild(obj.name, obj);

            obj = new Edit("edt_num1_2","2","45","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp1.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("2");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("2");
            this.div_main.form.div_left.form.div_temp1.addChild(obj.name, obj);

            obj = new Edit("edt_name1_2","26","45","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp1.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp1.addChild(obj.name, obj);

            obj = new Edit("edt_num1_3","2","67","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp1.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("3");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("3");
            this.div_main.form.div_left.form.div_temp1.addChild(obj.name, obj);

            obj = new Edit("edt_name1_3","26","67","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp1.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp1.addChild(obj.name, obj);

            obj = new Edit("edt_num1_4","2","89","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp1.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("4");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("4");
            this.div_main.form.div_left.form.div_temp1.addChild(obj.name, obj);

            obj = new Edit("edt_name1_4","26","89","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp1.form);
            obj.set_taborder("8");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp1.addChild(obj.name, obj);

            obj = new Edit("edt_num1_5","2","111","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp1.form);
            obj.set_taborder("9");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("5");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("5");
            this.div_main.form.div_left.form.div_temp1.addChild(obj.name, obj);

            obj = new Edit("edt_num1_6","2","133","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp1.form);
            obj.set_taborder("11");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("6");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("6");
            this.div_main.form.div_left.form.div_temp1.addChild(obj.name, obj);

            obj = new Edit("edt_name1_6","26","133","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp1.form);
            obj.set_taborder("12");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp1.addChild(obj.name, obj);

            obj = new Edit("edt_name1_5","26","111","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp1.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp1.addChild(obj.name, obj);

            obj = new Button("btn_temp1","2","1","174","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp1.form);
            obj.set_taborder("0");
            obj.set_text("식단 템플릿1(우선클릭)");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_left.form.div_temp1.addChild(obj.name, obj);

            obj = new Div("div_temp2","203","10","181","161",null,null,null,null,null,null,this.div_main.form.div_left.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.div_main.form.div_left.addChild(obj.name, obj);

            obj = new Edit("edt_num2_1","2","23","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp2.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("1");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp2.addChild(obj.name, obj);

            obj = new Edit("edt_name2_1","26","23","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp2.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp2.addChild(obj.name, obj);

            obj = new Edit("edt_num2_2","2","45","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp2.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("2");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("2");
            this.div_main.form.div_left.form.div_temp2.addChild(obj.name, obj);

            obj = new Edit("edt_name2_2","26","45","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp2.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp2.addChild(obj.name, obj);

            obj = new Edit("edt_num2_3","2","67","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp2.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("3");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("3");
            this.div_main.form.div_left.form.div_temp2.addChild(obj.name, obj);

            obj = new Edit("edt_name2_3","26","67","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp2.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp2.addChild(obj.name, obj);

            obj = new Edit("edt_num2_4","2","89","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp2.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("4");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("4");
            this.div_main.form.div_left.form.div_temp2.addChild(obj.name, obj);

            obj = new Edit("edt_name2_4","26","89","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp2.form);
            obj.set_taborder("8");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp2.addChild(obj.name, obj);

            obj = new Edit("edt_num2_5","2","111","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp2.form);
            obj.set_taborder("9");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("5");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("5");
            this.div_main.form.div_left.form.div_temp2.addChild(obj.name, obj);

            obj = new Edit("edt_num2_6","2","133","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp2.form);
            obj.set_taborder("11");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("6");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("6");
            this.div_main.form.div_left.form.div_temp2.addChild(obj.name, obj);

            obj = new Edit("edt_name2_6","26","133","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp2.form);
            obj.set_taborder("12");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp2.addChild(obj.name, obj);

            obj = new Edit("edt_name2_5","26","111","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp2.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp2.addChild(obj.name, obj);

            obj = new Button("btn_temp2","2","1","174","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp2.form);
            obj.set_taborder("0");
            obj.set_text("식단 템플릿2(우선클릭)");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_left.form.div_temp2.addChild(obj.name, obj);

            obj = new Div("div_temp3","20","174","181","161",null,null,null,null,null,null,this.div_main.form.div_left.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.div_main.form.div_left.addChild(obj.name, obj);

            obj = new Edit("edt_num3_1","2","23","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp3.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("1");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp3.addChild(obj.name, obj);

            obj = new Edit("edt_name3_1","26","23","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp3.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp3.addChild(obj.name, obj);

            obj = new Edit("edt_num3_2","2","45","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp3.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("2");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("2");
            this.div_main.form.div_left.form.div_temp3.addChild(obj.name, obj);

            obj = new Edit("edt_name3_2","26","45","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp3.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp3.addChild(obj.name, obj);

            obj = new Edit("edt_num3_3","2","67","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp3.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("3");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("3");
            this.div_main.form.div_left.form.div_temp3.addChild(obj.name, obj);

            obj = new Edit("edt_name3_3","26","67","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp3.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp3.addChild(obj.name, obj);

            obj = new Edit("edt_num3_4","2","89","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp3.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("4");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("4");
            this.div_main.form.div_left.form.div_temp3.addChild(obj.name, obj);

            obj = new Edit("edt_name3_4","26","89","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp3.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp3.addChild(obj.name, obj);

            obj = new Edit("edt_num3_5","2","111","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp3.form);
            obj.set_taborder("8");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("5");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("5");
            this.div_main.form.div_left.form.div_temp3.addChild(obj.name, obj);

            obj = new Edit("edt_num3_6","2","133","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp3.form);
            obj.set_taborder("9");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("6");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("6");
            this.div_main.form.div_left.form.div_temp3.addChild(obj.name, obj);

            obj = new Edit("edt_name3_6","26","133","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp3.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp3.addChild(obj.name, obj);

            obj = new Edit("edt_name3_5","26","111","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp3.form);
            obj.set_taborder("11");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp3.addChild(obj.name, obj);

            obj = new Button("btn_temp3","2","1","174","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp3.form);
            obj.set_taborder("12");
            obj.set_text("식단 템플릿3(우선클릭)");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_left.form.div_temp3.addChild(obj.name, obj);

            obj = new Div("div_temp4","203","174","181","161",null,null,null,null,null,null,this.div_main.form.div_left.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.div_main.form.div_left.addChild(obj.name, obj);

            obj = new Edit("edt_num4_1","2","23","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp4.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("1");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp4.addChild(obj.name, obj);

            obj = new Edit("edt_name4_1","26","23","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp4.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp4.addChild(obj.name, obj);

            obj = new Edit("edt_num4_2","2","45","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp4.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("2");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("2");
            this.div_main.form.div_left.form.div_temp4.addChild(obj.name, obj);

            obj = new Edit("edt_name4_2","26","45","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp4.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp4.addChild(obj.name, obj);

            obj = new Edit("edt_num4_3","2","67","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp4.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("3");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("3");
            this.div_main.form.div_left.form.div_temp4.addChild(obj.name, obj);

            obj = new Edit("edt_name4_3","26","67","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp4.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp4.addChild(obj.name, obj);

            obj = new Edit("edt_num4_4","2","89","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp4.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("4");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("4");
            this.div_main.form.div_left.form.div_temp4.addChild(obj.name, obj);

            obj = new Edit("edt_name4_4","26","89","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp4.form);
            obj.set_taborder("8");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp4.addChild(obj.name, obj);

            obj = new Edit("edt_num4_5","2","111","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp4.form);
            obj.set_taborder("9");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("5");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("5");
            this.div_main.form.div_left.form.div_temp4.addChild(obj.name, obj);

            obj = new Edit("edt_num4_6","2","133","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp4.form);
            obj.set_taborder("11");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("6");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("6");
            this.div_main.form.div_left.form.div_temp4.addChild(obj.name, obj);

            obj = new Edit("edt_name4_6","26","133","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp4.form);
            obj.set_taborder("12");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp4.addChild(obj.name, obj);

            obj = new Edit("edt_name4_5","26","111","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp4.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp4.addChild(obj.name, obj);

            obj = new Button("btn_temp4","2","1","174","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp4.form);
            obj.set_taborder("0");
            obj.set_text("식단 템플릿4(우선클릭)");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_left.form.div_temp4.addChild(obj.name, obj);

            obj = new Div("div_temp5","20","338","181","161",null,null,null,null,null,null,this.div_main.form.div_left.form);
            obj.set_taborder("4");
            obj.set_text("");
            this.div_main.form.div_left.addChild(obj.name, obj);

            obj = new Edit("edt_num5_1","2","23","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp5.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("1");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp5.addChild(obj.name, obj);

            obj = new Edit("edt_name5_1","26","23","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp5.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp5.addChild(obj.name, obj);

            obj = new Edit("edt_num5_2","2","45","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp5.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("2");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("2");
            this.div_main.form.div_left.form.div_temp5.addChild(obj.name, obj);

            obj = new Edit("edt_name5_2","26","45","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp5.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp5.addChild(obj.name, obj);

            obj = new Edit("edt_num5_3","2","67","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp5.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("3");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("3");
            this.div_main.form.div_left.form.div_temp5.addChild(obj.name, obj);

            obj = new Edit("edt_name5_3","26","67","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp5.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp5.addChild(obj.name, obj);

            obj = new Edit("edt_num5_4","2","89","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp5.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("4");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("4");
            this.div_main.form.div_left.form.div_temp5.addChild(obj.name, obj);

            obj = new Edit("edt_name5_4","26","89","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp5.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp5.addChild(obj.name, obj);

            obj = new Edit("edt_num5_5","2","111","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp5.form);
            obj.set_taborder("8");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("5");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("5");
            this.div_main.form.div_left.form.div_temp5.addChild(obj.name, obj);

            obj = new Edit("edt_num5_6","2","133","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp5.form);
            obj.set_taborder("9");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("6");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("6");
            this.div_main.form.div_left.form.div_temp5.addChild(obj.name, obj);

            obj = new Edit("edt_name5_6","26","133","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp5.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp5.addChild(obj.name, obj);

            obj = new Edit("edt_name5_5","26","111","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp5.form);
            obj.set_taborder("11");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp5.addChild(obj.name, obj);

            obj = new Button("btn_temp5","2","1","174","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp5.form);
            obj.set_taborder("12");
            obj.set_text("식단 템플릿5(우선클릭)");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_left.form.div_temp5.addChild(obj.name, obj);

            obj = new Div("div_temp6","203","338","181","161",null,null,null,null,null,null,this.div_main.form.div_left.form);
            obj.set_taborder("5");
            obj.set_text("");
            this.div_main.form.div_left.addChild(obj.name, obj);

            obj = new Edit("edt_num6_1","2","23","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp6.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("1");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp6.addChild(obj.name, obj);

            obj = new Edit("edt_name6_1","26","23","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp6.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp6.addChild(obj.name, obj);

            obj = new Edit("edt_num6_2","2","45","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp6.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("2");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("2");
            this.div_main.form.div_left.form.div_temp6.addChild(obj.name, obj);

            obj = new Edit("edt_name6_2","26","45","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp6.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp6.addChild(obj.name, obj);

            obj = new Edit("edt_num6_3","2","67","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp6.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("3");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("3");
            this.div_main.form.div_left.form.div_temp6.addChild(obj.name, obj);

            obj = new Edit("edt_name6_3","26","67","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp6.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp6.addChild(obj.name, obj);

            obj = new Edit("edt_num6_4","2","89","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp6.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("4");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("4");
            this.div_main.form.div_left.form.div_temp6.addChild(obj.name, obj);

            obj = new Edit("edt_name6_4","26","89","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp6.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp6.addChild(obj.name, obj);

            obj = new Edit("edt_num6_5","2","111","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp6.form);
            obj.set_taborder("8");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("5");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("5");
            this.div_main.form.div_left.form.div_temp6.addChild(obj.name, obj);

            obj = new Edit("edt_num6_6","2","133","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp6.form);
            obj.set_taborder("9");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("6");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("6");
            this.div_main.form.div_left.form.div_temp6.addChild(obj.name, obj);

            obj = new Edit("edt_name6_6","26","133","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp6.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp6.addChild(obj.name, obj);

            obj = new Edit("edt_name6_5","26","111","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp6.form);
            obj.set_taborder("11");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp6.addChild(obj.name, obj);

            obj = new Button("btn_temp6","2","1","174","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp6.form);
            obj.set_taborder("12");
            obj.set_text("식단 템플릿6(우선클릭)");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_left.form.div_temp6.addChild(obj.name, obj);

            obj = new Div("div_temp7","20","502","181","161",null,null,null,null,null,null,this.div_main.form.div_left.form);
            obj.set_taborder("6");
            obj.set_text("");
            this.div_main.form.div_left.addChild(obj.name, obj);

            obj = new Edit("edt_num7_1","2","23","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp7.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("1");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp7.addChild(obj.name, obj);

            obj = new Edit("edt_name7_1","26","23","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp7.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp7.addChild(obj.name, obj);

            obj = new Edit("edt_num7_2","2","45","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp7.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("2");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("2");
            this.div_main.form.div_left.form.div_temp7.addChild(obj.name, obj);

            obj = new Edit("edt_name7_2","26","45","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp7.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp7.addChild(obj.name, obj);

            obj = new Edit("edt_num7_3","2","67","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp7.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("3");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("3");
            this.div_main.form.div_left.form.div_temp7.addChild(obj.name, obj);

            obj = new Edit("edt_name7_3","26","67","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp7.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp7.addChild(obj.name, obj);

            obj = new Edit("edt_num7_4","2","89","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp7.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("4");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("4");
            this.div_main.form.div_left.form.div_temp7.addChild(obj.name, obj);

            obj = new Edit("edt_name7_4","26","89","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp7.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp7.addChild(obj.name, obj);

            obj = new Edit("edt_num7_5","2","111","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp7.form);
            obj.set_taborder("8");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("5");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("5");
            this.div_main.form.div_left.form.div_temp7.addChild(obj.name, obj);

            obj = new Edit("edt_num7_6","2","133","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp7.form);
            obj.set_taborder("9");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("6");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("6");
            this.div_main.form.div_left.form.div_temp7.addChild(obj.name, obj);

            obj = new Edit("edt_name7_6","26","133","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp7.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp7.addChild(obj.name, obj);

            obj = new Edit("edt_name7_5","26","111","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp7.form);
            obj.set_taborder("11");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp7.addChild(obj.name, obj);

            obj = new Button("btn_temp7","2","1","174","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp7.form);
            obj.set_taborder("12");
            obj.set_text("식단 템플릿7(우선클릭)");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_left.form.div_temp7.addChild(obj.name, obj);

            obj = new Div("div_temp8","203","502","181","161",null,null,null,null,null,null,this.div_main.form.div_left.form);
            obj.set_taborder("7");
            obj.set_text("");
            this.div_main.form.div_left.addChild(obj.name, obj);

            obj = new Edit("edt_num8_1","2","23","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp8.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("1");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp8.addChild(obj.name, obj);

            obj = new Edit("edt_name8_1","26","23","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp8.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp8.addChild(obj.name, obj);

            obj = new Edit("edt_num8_2","2","45","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp8.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("2");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("2");
            this.div_main.form.div_left.form.div_temp8.addChild(obj.name, obj);

            obj = new Edit("edt_name8_2","26","45","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp8.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp8.addChild(obj.name, obj);

            obj = new Edit("edt_num8_3","2","67","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp8.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("3");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("3");
            this.div_main.form.div_left.form.div_temp8.addChild(obj.name, obj);

            obj = new Edit("edt_name8_3","26","67","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp8.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp8.addChild(obj.name, obj);

            obj = new Edit("edt_num8_4","2","89","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp8.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("4");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("4");
            this.div_main.form.div_left.form.div_temp8.addChild(obj.name, obj);

            obj = new Edit("edt_name8_4","26","89","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp8.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp8.addChild(obj.name, obj);

            obj = new Edit("edt_num8_5","2","111","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp8.form);
            obj.set_taborder("8");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("5");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("5");
            this.div_main.form.div_left.form.div_temp8.addChild(obj.name, obj);

            obj = new Edit("edt_num8_6","2","133","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp8.form);
            obj.set_taborder("9");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("6");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("6");
            this.div_main.form.div_left.form.div_temp8.addChild(obj.name, obj);

            obj = new Edit("edt_name8_6","26","133","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp8.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp8.addChild(obj.name, obj);

            obj = new Edit("edt_name8_5","26","111","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp8.form);
            obj.set_taborder("11");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp8.addChild(obj.name, obj);

            obj = new Button("btn_temp8","2","1","174","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp8.form);
            obj.set_taborder("12");
            obj.set_text("식단 템플릿8(우선클릭)");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_left.form.div_temp8.addChild(obj.name, obj);

            obj = new Div("div_temp9","20","666","181","161",null,null,null,null,null,null,this.div_main.form.div_left.form);
            obj.set_taborder("8");
            obj.set_text("");
            this.div_main.form.div_left.addChild(obj.name, obj);

            obj = new Edit("edt_num9_1","2","23","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp9.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("1");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp9.addChild(obj.name, obj);

            obj = new Edit("edt_name9_1","26","23","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp9.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp9.addChild(obj.name, obj);

            obj = new Edit("edt_num9_2","2","45","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp9.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("2");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("2");
            this.div_main.form.div_left.form.div_temp9.addChild(obj.name, obj);

            obj = new Edit("edt_name9_2","26","45","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp9.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp9.addChild(obj.name, obj);

            obj = new Edit("edt_num9_3","2","67","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp9.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("3");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("3");
            this.div_main.form.div_left.form.div_temp9.addChild(obj.name, obj);

            obj = new Edit("edt_name9_3","26","67","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp9.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp9.addChild(obj.name, obj);

            obj = new Edit("edt_num9_4","2","89","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp9.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("4");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("4");
            this.div_main.form.div_left.form.div_temp9.addChild(obj.name, obj);

            obj = new Edit("edt_name9_4","26","89","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp9.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp9.addChild(obj.name, obj);

            obj = new Edit("edt_num9_5","2","111","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp9.form);
            obj.set_taborder("8");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("5");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("5");
            this.div_main.form.div_left.form.div_temp9.addChild(obj.name, obj);

            obj = new Edit("edt_num9_6","2","133","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp9.form);
            obj.set_taborder("9");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("6");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("6");
            this.div_main.form.div_left.form.div_temp9.addChild(obj.name, obj);

            obj = new Edit("edt_name9_6","26","133","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp9.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp9.addChild(obj.name, obj);

            obj = new Edit("edt_name9_5","26","111","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp9.form);
            obj.set_taborder("11");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp9.addChild(obj.name, obj);

            obj = new Button("btn_temp9","2","1","174","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp9.form);
            obj.set_taborder("12");
            obj.set_text("식단 템플릿9(우선클릭)");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_left.form.div_temp9.addChild(obj.name, obj);

            obj = new Div("div_temp10","203","666","181","161",null,null,null,null,null,null,this.div_main.form.div_left.form);
            obj.set_taborder("9");
            obj.set_text("");
            this.div_main.form.div_left.addChild(obj.name, obj);

            obj = new Edit("edt_num10_1","2","23","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp10.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("1");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp10.addChild(obj.name, obj);

            obj = new Edit("edt_name10_1","26","23","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp10.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp10.addChild(obj.name, obj);

            obj = new Edit("edt_num10_2","2","45","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp10.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("2");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("2");
            this.div_main.form.div_left.form.div_temp10.addChild(obj.name, obj);

            obj = new Edit("edt_name10_2","26","45","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp10.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp10.addChild(obj.name, obj);

            obj = new Edit("edt_num10_3","2","67","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp10.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("3");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("3");
            this.div_main.form.div_left.form.div_temp10.addChild(obj.name, obj);

            obj = new Edit("edt_name10_3","26","67","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp10.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp10.addChild(obj.name, obj);

            obj = new Edit("edt_num10_4","2","89","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp10.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("4");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("4");
            this.div_main.form.div_left.form.div_temp10.addChild(obj.name, obj);

            obj = new Edit("edt_name10_4","26","89","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp10.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp10.addChild(obj.name, obj);

            obj = new Edit("edt_num10_5","2","111","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp10.form);
            obj.set_taborder("8");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("5");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("5");
            this.div_main.form.div_left.form.div_temp10.addChild(obj.name, obj);

            obj = new Edit("edt_num10_6","2","133","25","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp10.form);
            obj.set_taborder("9");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("6");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("6");
            this.div_main.form.div_left.form.div_temp10.addChild(obj.name, obj);

            obj = new Edit("edt_name10_6","26","133","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp10.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp10.addChild(obj.name, obj);

            obj = new Edit("edt_name10_5","26","111","150","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp10.form);
            obj.set_taborder("11");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_left.form.div_temp10.addChild(obj.name, obj);

            obj = new Button("btn_temp10","2","1","174","23",null,null,null,null,null,null,this.div_main.form.div_left.form.div_temp10.form);
            obj.set_taborder("12");
            obj.set_text("식단 템플릿10(우선클릭)");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_left.form.div_temp10.addChild(obj.name, obj);

            obj = new Div("div_right","410","0","1180",null,null,"3",null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_head","0","109","107","655",null,null,null,null,null,null,this.div_main.form.div_right.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj.set_enableevent("false");
            obj.set_enable("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"35\"/></Columns><Rows><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"구분\" background=\"#ffffff\" border=\"1px solid #cccccc,1px solid #cccccc,1px solid #696969\"/><Cell col=\"1\" text=\"행\" background=\"#ffffff\" border=\"1px solid #cccccc,1px solid #cccccc,1px solid #696969\"/><Cell row=\"1\" rowspan=\"6\" text=\"아침식단\" background=\"#ffffff\"/><Cell row=\"1\" col=\"1\" text=\"1\" background=\"#ffffff\"/><Cell row=\"2\" col=\"1\" text=\"2\" background=\"#ffffff\"/><Cell row=\"3\" col=\"1\" text=\"3\" background=\"#ffffff\"/><Cell row=\"4\" col=\"1\" text=\"4\" background=\"#ffffff\"/><Cell row=\"5\" col=\"1\" text=\"5\" background=\"#ffffff\"/><Cell row=\"6\" col=\"1\" text=\"6\" background=\"#ffffff\"/><Cell row=\"7\" rowspan=\"6\" text=\"점심식단\" background=\"#e6e6fa\"/><Cell row=\"7\" col=\"1\" text=\"1\" background=\"#e6e6fa\"/><Cell row=\"8\" col=\"1\" text=\"2\" background=\"#e6e6fa\"/><Cell row=\"9\" col=\"1\" text=\"3\" background=\"#e6e6fa\"/><Cell row=\"10\" col=\"1\" text=\"4\" background=\"#e6e6fa\"/><Cell row=\"11\" col=\"1\" text=\"5\" background=\"#e6e6fa\"/><Cell row=\"12\" col=\"1\" text=\"6\" background=\"#e6e6fa\"/><Cell row=\"13\" rowspan=\"6\" text=\"저녁식단\" background=\"#ffffff\"/><Cell row=\"13\" col=\"1\" text=\"1\" background=\"#ffffff\"/><Cell row=\"14\" col=\"1\" text=\"2\" background=\"#ffffff\"/><Cell row=\"15\" col=\"1\" text=\"3\" background=\"#ffffff\"/><Cell row=\"16\" col=\"1\" text=\"4\" background=\"#ffffff\"/><Cell row=\"17\" col=\"1\" text=\"5\" background=\"#ffffff\"/><Cell row=\"18\" col=\"1\" text=\"6\" background=\"#ffffff\"/><Cell row=\"19\" rowspan=\"3\" text=\"오전간식\" background=\"#e6e6fa\"/><Cell row=\"19\" col=\"1\" text=\"1\" background=\"#e6e6fa\"/><Cell row=\"20\" col=\"1\" text=\"2\" background=\"#e6e6fa\"/><Cell row=\"21\" col=\"1\" text=\"3\" background=\"#e6e6fa\"/><Cell row=\"22\" rowspan=\"3\" text=\"오후간식\" background=\"#ffffff\"/><Cell row=\"22\" col=\"1\" text=\"1\" background=\"#ffffff\"/><Cell row=\"23\" col=\"1\" text=\"2\" background=\"#ffffff\"/><Cell row=\"24\" col=\"1\" text=\"3\" background=\"#ffffff\"/><Cell row=\"25\" rowspan=\"3\" text=\"기능식이\" background=\"#e6e6fa\"/><Cell row=\"25\" col=\"1\" text=\"1\" background=\"#e6e6fa\"/><Cell row=\"26\" col=\"1\" text=\"2\" background=\"#e6e6fa\"/><Cell row=\"27\" col=\"1\" text=\"3\" background=\"#e6e6fa\"/><Cell row=\"28\" text=\"당뇨\" background=\"#ffffff\"/><Cell row=\"28\" col=\"1\" text=\"1\" background=\"#ffffff\"/><Cell row=\"29\" text=\"유동\" background=\"#ffffff\"/><Cell row=\"29\" col=\"1\" text=\"1\" background=\"#ffffff\"/><Cell row=\"30\" text=\"저염\" background=\"#ffffff\"/><Cell row=\"30\" col=\"1\" text=\"1\" background=\"#ffffff\"/></Band></Format></Formats>");
            this.div_main.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_list","106","130","1053","634",null,null,null,null,null,null,this.div_main.form.div_right.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"21\"/></Rows><Band id=\"body\"><Cell text=\"bind:DAY1\" edittype=\"normal\" editmaxlength=\"20\"/><Cell col=\"1\" text=\"bind:DAY2\" edittype=\"normal\" editmaxlength=\"20\"/><Cell col=\"2\" text=\"bind:DAY3\" edittype=\"normal\" editmaxlength=\"20\"/><Cell col=\"3\" text=\"bind:DAY4\" edittype=\"normal\" editmaxlength=\"20\"/><Cell col=\"4\" text=\"bind:DAY5\" edittype=\"normal\" editmaxlength=\"20\"/><Cell col=\"5\" text=\"bind:DAY6\" edittype=\"normal\" editmaxlength=\"20\"/><Cell col=\"6\" text=\"bind:DAY7\" edittype=\"normal\" editmaxlength=\"20\"/></Band></Format></Formats>");
            this.div_main.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_date","0","72","68","26",null,null,null,null,null,null,this.div_main.form.div_right.form);
            obj.set_taborder("3");
            obj.set_text("주간식단일");
            obj.set_textAlign("center");
            this.div_main.form.div_right.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","77","72","90","26",null,null,null,null,null,null,this.div_main.form.div_right.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            this.div_main.form.div_right.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","183","72","90","26",null,null,null,null,null,null,this.div_main.form.div_right.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0 0");
            this.div_main.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_00","170","77","8","17",null,null,null,null,null,null,this.div_main.form.div_right.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_main.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_diet","290","72","68","26",null,null,null,null,null,null,this.div_main.form.div_right.form);
            obj.set_taborder("7");
            obj.set_text("식단제공처");
            obj.set_textAlign("center");
            this.div_main.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_diet","370","72","150","26",null,null,null,null,null,null,this.div_main.form.div_right.form);
            obj.set_taborder("8");
            this.div_main.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_week","106","109","1053","24",null,null,null,null,null,null,this.div_main.form.div_right.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_week");
            obj.set_enableevent("false");
            obj.set_enable("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"21\"/></Rows><Band id=\"body\"><Cell text=\"bind:SUN\" color=\"red\"/><Cell col=\"1\" text=\"bind:MON\"/><Cell col=\"2\" text=\"bind:TUE\"/><Cell col=\"3\" text=\"bind:WED\"/><Cell col=\"4\" text=\"bind:THU\"/><Cell col=\"5\" text=\"bind:FRI\"/><Cell col=\"6\" text=\"bind:SAT\"/></Band></Format></Formats>");
            this.div_main.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_desc","0","37","508","26",null,null,null,null,null,null,this.div_main.form.div_right.form);
            obj.set_taborder("9");
            obj.set_text("※ 식단 템플릿을 먼저 클릭하시고 식단을 클릭하시면 템플릿이 식단으로 복사됩니다.");
            this.div_main.form.div_right.addChild(obj.name, obj);

            obj = new Div("div_line","0","65",null,"1","20",null,null,null,null,null,this.div_main.form.div_right.form);
            obj.set_taborder("10");
            obj.set_background("#e2e2e2");
            this.div_main.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","520","7","120","26",null,null,null,null,null,null,this.div_main.form.div_right.form);
            obj.set_taborder("11");
            obj.set_text("식단간편입력");
            obj.set_cssclass("lb01");
            this.div_main.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_mordel","531","72","90","26",null,null,null,null,null,null,this.div_main.form.div_right.form);
            obj.set_taborder("12");
            obj.set_text("아침지움");
            this.div_main.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_lundel","626","72","90","26",null,null,null,null,null,null,this.div_main.form.div_right.form);
            obj.set_taborder("13");
            obj.set_text("점심지움");
            this.div_main.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_dindel","721","72","90","26",null,null,null,null,null,null,this.div_main.form.div_right.form);
            obj.set_taborder("14");
            obj.set_text("저녁지움");
            this.div_main.form.div_right.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1620,900,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_main.form.div_left.form.div_temp1.form.edt_name1_1","value","ds_temp1","food01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_main.form.div_left.form.div_temp1.form.edt_name1_2","value","ds_temp1","food02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_main.form.div_left.form.div_temp1.form.edt_name1_3","value","ds_temp1","food03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_main.form.div_left.form.div_temp1.form.edt_name1_4","value","ds_temp1","food04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_main.form.div_left.form.div_temp1.form.edt_name1_5","value","ds_temp1","food05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_main.form.div_left.form.div_temp1.form.edt_name1_6","value","ds_temp1","food06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_main.form.div_left.form.div_temp2.form.edt_name2_1","value","ds_temp2","food01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_main.form.div_left.form.div_temp2.form.edt_name2_2","value","ds_temp2","food02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_main.form.div_left.form.div_temp2.form.edt_name2_3","value","ds_temp2","food03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_main.form.div_left.form.div_temp2.form.edt_name2_4","value","ds_temp2","food04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_main.form.div_left.form.div_temp2.form.edt_name2_5","value","ds_temp2","food05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_main.form.div_left.form.div_temp2.form.edt_name2_6","value","ds_temp2","food06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_main.form.div_left.form.div_temp3.form.edt_name3_1","value","ds_temp3","food01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_main.form.div_left.form.div_temp3.form.edt_name3_2","value","ds_temp3","food02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_main.form.div_left.form.div_temp3.form.edt_name3_3","value","ds_temp3","food03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_main.form.div_left.form.div_temp3.form.edt_name3_4","value","ds_temp3","food04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_main.form.div_left.form.div_temp3.form.edt_name3_5","value","ds_temp3","food05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_main.form.div_left.form.div_temp3.form.edt_name3_6","value","ds_temp3","food06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_main.form.div_left.form.div_temp4.form.edt_name4_1","value","ds_temp4","food01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_main.form.div_left.form.div_temp4.form.edt_name4_2","value","ds_temp4","food02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_main.form.div_left.form.div_temp4.form.edt_name4_3","value","ds_temp4","food03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_main.form.div_left.form.div_temp4.form.edt_name4_4","value","ds_temp4","food04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_main.form.div_left.form.div_temp4.form.edt_name4_5","value","ds_temp4","food05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_main.form.div_left.form.div_temp4.form.edt_name4_6","value","ds_temp4","food06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_main.form.div_left.form.div_temp5.form.edt_name5_1","value","ds_temp5","food01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_main.form.div_left.form.div_temp5.form.edt_name5_2","value","ds_temp5","food02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_main.form.div_left.form.div_temp5.form.edt_name5_3","value","ds_temp5","food03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_main.form.div_left.form.div_temp5.form.edt_name_4","value","ds_temp5","food04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_main.form.div_left.form.div_temp5.form.edt_name5_5","value","ds_temp5","food05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_main.form.div_left.form.div_temp5.form.edt_name5_6","value","ds_temp5","food06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","div_main.form.div_left.form.div_temp5.form.edt_name5_4","value","ds_temp5","food04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","div_main.form.div_left.form.div_temp6.form.edt_name6_1","value","ds_temp6","food01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","div_main.form.div_left.form.div_temp6.form.edt_name6_2","value","ds_temp6","food02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","div_main.form.div_left.form.div_temp6.form.edt_name6_3","value","ds_temp6","food03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","div_main.form.div_left.form.div_temp6.form.edt_name6_4","value","ds_temp6","food04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","div_main.form.div_left.form.div_temp6.form.edt_name6_5","value","ds_temp6","food05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","div_main.form.div_left.form.div_temp6.form.edt_name6_6","value","ds_temp6","food06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item98","div_main.form.div_left.form.div_temp7.form.edt_name7_1","value","ds_temp7","food01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item99","div_main.form.div_left.form.div_temp7.form.edt_name7_2","value","ds_temp7","food02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item100","div_main.form.div_left.form.div_temp7.form.edt_name7_3","value","ds_temp7","food03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item101","div_main.form.div_left.form.div_temp7.form.edt_name7_4","value","ds_temp7","food04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item102","div_main.form.div_left.form.div_temp7.form.edt_name7_5","value","ds_temp7","food05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item103","div_main.form.div_left.form.div_temp7.form.edt_name7_6","value","ds_temp7","food06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item110","div_main.form.div_left.form.div_temp8.form.edt_name8_1","value","ds_temp8","food01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item111","div_main.form.div_left.form.div_temp8.form.edt_name8_2","value","ds_temp8","food02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item112","div_main.form.div_left.form.div_temp8.form.edt_name8_3","value","ds_temp8","food03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item113","div_main.form.div_left.form.div_temp8.form.edt_name8_4","value","ds_temp8","food04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item114","div_main.form.div_left.form.div_temp8.form.edt_name8_5","value","ds_temp8","food05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item115","div_main.form.div_left.form.div_temp8.form.edt_name8_6","value","ds_temp8","food06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item122","div_main.form.div_left.form.div_temp8.form.edt_name8_4","value","ds_temp8","food04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","div_main.form.div_left.form.div_temp9.form.edt_name9_1","value","ds_temp9","food01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","div_main.form.div_left.form.div_temp9.form.edt_name9_2","value","ds_temp9","food02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","div_main.form.div_left.form.div_temp9.form.edt_name9_3","value","ds_temp9","food03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","div_main.form.div_left.form.div_temp9.form.edt_name9_4","value","ds_temp9","food04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","div_main.form.div_left.form.div_temp9.form.edt_name9_5","value","ds_temp9","food05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","div_main.form.div_left.form.div_temp9.form.edt_name9_6","value","ds_temp9","food06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","div_main.form.div_left.form.div_temp10.form.edt_name10_1","value","ds_temp10","food01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","div_main.form.div_left.form.div_temp10.form.edt_name10_2","value","ds_temp10","food02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","div_main.form.div_left.form.div_temp10.form.edt_name10_3","value","ds_temp10","food03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","div_main.form.div_left.form.div_temp10.form.edt_name10_4","value","ds_temp10","food04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","div_main.form.div_left.form.div_temp10.form.edt_name10_5","value","ds_temp10","food05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","div_main.form.div_left.form.div_temp10.form.edt_name10_6","value","ds_temp10","food06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_func.form.cal_date","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_func.form.cal_date_pic","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00702_P03.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00702_P03.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00702_P03.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00702_P03
         * 화면명   	: 식단템플릿 등록
         * 화면설명 	: 주간식단표 식단템플릿 등록
         * 작성일   	: 2022-03-28
         * 작성자   	: 박한준
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *
         ***********************************************************************
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        const fv_sicode = this.parent.SICODE;
        const fv_date = this.parent.DATE;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 삽입, 수정 공통 함수를 사용하기 위해 gv_curWinKey를 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00702_P03";

        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "DATE", fv_date);

        	this.fn_search("search");
        };

        // 그리드 css 적용
        this.initGrid = function(grid)
        {
        	// 점심식단, 오전간식, 기능식이 background - ligtblue

        	const monArr = ["DAY1", "DAY2", "DAY3", "DAY4", "DAY5", "DAY6", "DAY7"];
        	for (let i = 0; i < monArr.length; i++)
        	{
        		const monIdx = grid.getBindCellIndex("body", monArr[i]);
        		const monCss = "expr:dataset.getColumn(currow, 'color') == '1' ? 'liteBlue' : ''";

        		grid.setCellProperty("body", monIdx, "cssclass", monCss);
        	}

        	// #e6e6fa
        };

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        // 조회 전 validation
        this.fn_search_pre = function()
        {
        	// 검색조건 필수 체크 (컴포넌트 tooltiptext 값 넣을 것)
        	if (!this.gfn_findSnull(this.div_func)) return false;

        	return true;
        };

        // 저장 전 validation
        this.fn_save_pre = function()
        {
        // 	if (this.ds_list.rowcount == 0)
        // 	{
        // 		this.alert("저장할 항목이 없습니다.");
        // 		return false;
        // 	}
        	// 저장전 ds_data에 데이터 담기
         	this.ds_data.clearData();

        	for(var i=1; i<=7; i++){ // DAY1 ~ DAY7
        		var aRow = this.ds_data.addRow();
        		this.ds_data.setColumn(i-1, "sicode", fv_sicode);

        		// 날짜 세팅
        		switch(i){
        			case 1 : this.ds_data.setColumn(i-1, "nalja",this.ds_week.getColumn(0,"SUN").substr(0,10)); break;
        			case 2 : this.ds_data.setColumn(i-1, "nalja",this.ds_week.getColumn(0,"MON").substr(0,10)); break;
        			case 3 : this.ds_data.setColumn(i-1, "nalja",this.ds_week.getColumn(0,"TUE").substr(0,10)); break;
        			case 4 : this.ds_data.setColumn(i-1, "nalja",this.ds_week.getColumn(0,"WED").substr(0,10)); break;
        			case 5 : this.ds_data.setColumn(i-1, "nalja",this.ds_week.getColumn(0,"THU").substr(0,10)); break;
        			case 6 : this.ds_data.setColumn(i-1, "nalja",this.ds_week.getColumn(0,"FRI").substr(0,10)); break;
        			case 7 : this.ds_data.setColumn(i-1, "nalja",this.ds_week.getColumn(0,"SAT").substr(0,10)); break;
        		}

        		this.ds_data.setColumn(i-1,"diet",this.div_main.form.div_right.form.edt_diet.value); // 식단제공

        		var gubun = "";
        		for(var j=1; j<=30; j++){ //
        			if(j < 10){ // 아침,점심,저녁,간식
        				this.ds_data.setColumn(i-1, "food0"+j, this.ds_list.getColumn(j-1,"DAY"+i));
         				if(this.ds_list.getColumn(j-1,"DAY"+i) == "" || this.ds_list.getColumn(j-1,"DAY"+i) == null){
        					gubun += "   ";
         				}else{
         					gubun += "G99";
         				}
        			}else if(j >=10 && j <= 24){
        				this.ds_data.setColumn(i-1, "food"+j, this.ds_list.getColumn(j-1,"DAY"+i));
        				if(this.ds_list.getColumn(j-1,"DAY"+i) == "" || this.ds_list.getColumn(j-1,"DAY"+i) == null){
        					gubun += "   ";
         				}else{
         					gubun += "G99";
         				}
        			}else{ // 기능
        				this.ds_data.setColumn(i-1, "food"+j, this.ds_list.getColumn(j-1,"DAY"+i));
        			}
        		}
        		this.ds_data.setColumn(i-1, "gubun", gubun);
        	}

        	var nalja = this.ds_data.getColumn(1,"nalja"); // 2번째 row(월) 날짜
        	this.fn_datadupl(nalja); // 월요일 데이터 조회

        	if(this.ds_dupl.getColumn(0, "CNT") != 0){ // 월요일 데이터가 있으면 rowType updet로 변경
        		for(var k=0; k<=6; k++){
        			this.ds_data.set_updatecontrol(false);
        			this.ds_data.setRowType(k, 4);
        			this.ds_data.set_updatecontrol(true);
        		}
        	}

        	if (!this.confirm("저장 하겠습니까?"))
        		return false;

        	return true;
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 조회
        this.fn_search = function(flag)
        {
        	// 템플릿, 그리드 데이터 조회
        	const svcId = flag;
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search input2=ds_search input3=ds_search";
        	const outDatasets = "ds_templist=output1 ds_list=output2 ds_week=output3";
        	const argument = "method=getList "
        				   + "sqlId='DAY00702_P03.DAY00702_P03_DS_DATA_S DAY00702_P03.DAY00702_P03_DS_LIST_S DAY00702_P03.DAY00702_P03_DS_WEEK_S '";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 삽입전 데이터 유무 조회
        this.fn_datadupl= function(nalja)
        {
        	// 템플릿, 그리드 데이터 조회
        	const svcId = "datadupl";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_dupl=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00702_P03.DAY00702_P03_DS_DUPL_S '"
        				   + "sicode=" + fv_sicode
        				   + " nalja=" + nalja;
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, false);
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
        			// 주간식단일 시작일, 종료일, 식사제공 세팅
        			var sday = this.ds_week.getColumn(0, "SUN");
        			var eday = this.ds_week.getColumn(0, "SAT");

        			this.div_main.form.div_right.form.cal_date_from.set_value(sday);
        			this.div_main.form.div_right.form.cal_date_to.set_value(eday);
        			this.div_main.form.div_right.form.edt_diet.set_value(this.ds_list.getColumn(0,"식단제공"));
        			this.ds_list.set_rowposition(-1);

        			// 그리드 css 적용
        			this.initGrid(this.div_main.form.div_right.form.grd_list);

        			// 템플릿 테두리 제거
        			this.fn_tempsetboder();

        			// 템플릿 데이터 세팅
        			for(var i=1; i<=10; i++){
        				var tempid = this.ds_templist.getColumn(i-1, "temp_id"); // 템플릿 번호 1~10
        				this.all["ds_temp"+i].clearData() // temp 데이터셋 초기화 후 세팅
        				if(tempid == i){ // 데이터가 있으면 세팅
        					this.all["ds_temp"+i].copyRow(this.all["ds_temp"+i].addRow(), this.ds_templist, i-1);

        					// 구분값 자르기
        					this.all["ds_temp"+i].setColumn(0, "gubun01", this.all["ds_temp"+i].getColumn(0,"gubun").substr(0,3));
        					this.all["ds_temp"+i].setColumn(0, "gubun02", this.all["ds_temp"+i].getColumn(0,"gubun").substr(3,3));
        					this.all["ds_temp"+i].setColumn(0, "gubun03", this.all["ds_temp"+i].getColumn(0,"gubun").substr(6,3));
        					this.all["ds_temp"+i].setColumn(0, "gubun04", this.all["ds_temp"+i].getColumn(0,"gubun").substr(9,3));
        					this.all["ds_temp"+i].setColumn(0, "gubun05", this.all["ds_temp"+i].getColumn(0,"gubun").substr(12,3));
        					this.all["ds_temp"+i].setColumn(0, "gubun06", this.all["ds_temp"+i].getColumn(0,"gubun").substr(15,3));
        				}else{ // 없으면 추가
        					this.all["ds_temp"+i].setColumn(this.all["ds_temp"+i].addRow(), "sicode", fv_sicode);
        					this.all["ds_temp"+i].setColumn(0, "temp_id", i); // temp_id 세팅
        				}
        			}

        		}
        		else if (strSvcID == "menu_search") // 메뉴 구분선택시 테두리 제거 안함
        		{
        			this.div_main.form.div_left.form.div_foodselect.form.edt_select.set_value("");
        		}
        		else if (strSvcID == "save")
        		{
        			this.alert("저장되었습니다.");
        			this.fn_search("search");
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
        	// 팝업창 닫았을 때 gv_curWinKey를 다시 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00702_P03";
        	if(Sct.Util.isEmpty(strDs))	return;

        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "dietcall" :
        			this.ds_list.copyData(objDs);
        			this.div_main.form.div_right.form.edt_diet.set_value(objDs.getColumn(0,"식단제공"));
        			//this.fn_search("search");
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

        // 새로고침, 조회 기능
        this.btn_refresh_onclick = function(obj,e)
        {
        	this.fn_search("search");
        };

        // 템플릿 우선클릭 이벤트
        this.btn_temp = function(obj,e)
        {
        	var num = obj.id.substr(8); // btn_temp1 > 1 추출

        	// 클릭상태에서 한번 더 클릭시 테두리 제거
         	if(this.div_main.form.div_left.form.components["div_temp" + num].border.length > 0) {
        		this.div_main.form.div_left.form.components["div_temp" + num].set_border("");
        		this.div_main.form.div_left.form.components["div_temp" + num].form.components["btn_temp" + num].set_background("#ffffff");

        		return false;
        	}

        	// 테두리 세팅
        	switch(obj.id){
        		case "btn_temp" + num :
        			this.fn_tempsetboder(); // 테두리 모두 제거
        			this.div_main.form.div_left.form.components["div_temp" + num].set_border("2px solid #a3c7f0");
        			this.div_main.form.div_left.form.components["div_temp" + num].form.components["btn_temp" + num].set_background("#a3c7f0");
        			break;
        	}
        };

        // 템플릿 테두리 모두 제거
        this.fn_tempsetboder = function(){
        	for(var i=1; i<=10; i++){
        		this.div_main.form.div_left.form.components["div_temp" + i].set_border("");
        		this.div_main.form.div_left.form.components["div_temp" + i].form.components["btn_temp" + i].set_background("#ffffff");
        	}
        }

        // 주간식단 불러오기
        this.div_func_btn_call_onclick = function(obj,e)
        {
        	// 템플릿 테두리 제거
        	this.fn_tempsetboder();
        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_search.getColumn(0, "DATE")
        	};
        	Sct.popup(this, "dietcall", 450, 400, "", param, "DAY_POP::DAY00702_P04.xfdl", "fn_popCallback");
        };

        // 캘린더 변경 이벤트
        this.div_func_cal_date_onchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0,"DATE",e.postvalue);
        	//조회
        	this.fn_search("search");
        };

        // 그리드 클릭이벤트
        this.div_main_div_right_grd_list_oncellclick = function(obj,e)
        {
        	// 선택된 템플릿 데이터셋 찾기
        	var tempds = "";
        	for(var i=1; i<=10; i++){
        		if(this.div_main.form.div_left.form.components["div_temp" + i].border.length > 0){
        			tempds = this.all["ds_temp"+i];
        		}
        	}

        	if(tempds == "" || tempds == null){
        		return false;
        	}else{
        		// row 0~5 아침 6~11 점심 12~17 저녁
        		// cell 0 1 2 3 4 5 6 DAY1 ~ 7
        		for(var k=0; k<=6; k++){ // DAY for문
        			if(e.cell == k){ // 셀클릭 DAY 비교
        				if(e.row <= 5){ // 아침
        					// 선택한 temp의 food01 ~ food06 > 선택한 DAY 0~6 row에 세팅
        					for(var j=0; j<=5; j++){
        						this.ds_list.setColumn(j,"DAY"+(k+1), tempds.getColumn(0,"food0"+(j+1)));
        					}
        				}else if(e.row >= 6 && e.row <= 11){ // 점심
        					for(var j=6; j<=11; j++){
        						this.ds_list.setColumn(j,"DAY"+(k+1), tempds.getColumn(0,"food0"+(j-5)));
        					}
        				}else if(e.row >= 12 && e.row <= 17){ // 저녁
        					for(var j=12; j<=17; j++){
        						this.ds_list.setColumn(j,"DAY"+(k+1), tempds.getColumn(0,"food0"+(j-11)));
        					}
        				}
        			}
        		}

        	}

        };

        // 아침,점심,저녁지움 버튼 이벤트
        this.fn_dietdel = function(obj,e)
        {
        	// 템플릿 테두리 제거
        	this.fn_tempsetboder();

        	// 데이터 지움
        	switch(obj.id){
        		case "btn_mordel" :
        			for(var i=0; i<=5; i++){ // 0~5 row
        				for(var j=1; j<=7; j++){
        					this.ds_list.setColumn(i, "DAY"+j, "");
        				}

        			}
        		break;
        		case "btn_lundel" :
        			for(var i=6; i<=11; i++){ // 6~11 row
        				for(var j=1; j<=7; j++){
        					this.ds_list.setColumn(i, "DAY"+j, "");
        				}

        			}
        		break;
        		case "btn_dindel" :
        			for(var i=12; i<=17; i++){ // 12~17 row
        				for(var j=1; j<=7; j++){
        					this.ds_list.setColumn(i, "DAY"+j, "");
        				}

        			}
        		break;
        	}
        };

        // 팝업창을 닫았을때 기준일 데이터셋 넘김
        this.DAY00702_P03_onclose = function(obj,e)
        {
        	this.ds_Return.clearData();
        	this.ds_Return.copyData(this.ds_search);
        	this.close(this.ds_Return.saveXML());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.DAY00702_P03_onclose,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_func.form.btn_refresh.addEventHandler("onclick",this.btn_refresh_onclick,this);
            this.div_func.form.btn_call.addEventHandler("onclick",this.div_func_btn_call_onclick,this);
            this.div_func.form.cal_date.addEventHandler("onchanged",this.div_func_cal_date_onchanged,this);
            this.div_func.form.cal_date_pic.addEventHandler("onchanged",this.div_func_cal_date_onchanged,this);
            this.div_main.form.div_left.form.div_temp1.form.edt_num1_1.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp1.form.edt_num1_2.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp1.form.edt_num1_3.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp1.form.edt_num1_4.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp1.form.edt_num1_5.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp1.form.edt_num1_6.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp1.form.btn_temp1.addEventHandler("onclick",this.btn_temp,this);
            this.div_main.form.div_left.form.div_temp2.form.edt_num2_1.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp2.form.edt_num2_2.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp2.form.edt_num2_3.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp2.form.edt_num2_4.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp2.form.edt_num2_5.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp2.form.edt_num2_6.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp2.form.btn_temp2.addEventHandler("onclick",this.btn_temp,this);
            this.div_main.form.div_left.form.div_temp3.form.edt_num3_1.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp3.form.edt_num3_2.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp3.form.edt_num3_3.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp3.form.edt_num3_4.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp3.form.edt_num3_5.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp3.form.edt_num3_6.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp3.form.btn_temp3.addEventHandler("onclick",this.btn_temp,this);
            this.div_main.form.div_left.form.div_temp4.form.edt_num4_1.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp4.form.edt_num4_2.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp4.form.edt_num4_3.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp4.form.edt_num4_4.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp4.form.edt_num4_5.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp4.form.edt_num4_6.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp4.form.btn_temp4.addEventHandler("onclick",this.btn_temp,this);
            this.div_main.form.div_left.form.div_temp5.form.edt_num5_1.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp5.form.edt_num5_2.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp5.form.edt_num5_3.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp5.form.edt_num5_4.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp5.form.edt_num5_5.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp5.form.edt_num5_6.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp5.form.btn_temp5.addEventHandler("onclick",this.btn_temp,this);
            this.div_main.form.div_left.form.div_temp6.form.edt_num6_1.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp6.form.edt_num6_2.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp6.form.edt_num6_3.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp6.form.edt_num6_4.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp6.form.edt_num6_5.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp6.form.edt_num6_6.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp6.form.btn_temp6.addEventHandler("onclick",this.btn_temp,this);
            this.div_main.form.div_left.form.div_temp7.form.edt_num7_1.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp7.form.edt_num7_2.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp7.form.edt_num7_3.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp7.form.edt_num7_4.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp7.form.edt_num7_5.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp7.form.edt_num7_6.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp7.form.btn_temp7.addEventHandler("onclick",this.btn_temp,this);
            this.div_main.form.div_left.form.div_temp8.form.edt_num8_1.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp8.form.edt_num8_2.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp8.form.edt_num8_3.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp8.form.edt_num8_4.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp8.form.edt_num8_5.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp8.form.edt_num8_6.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp8.form.btn_temp8.addEventHandler("onclick",this.btn_temp,this);
            this.div_main.form.div_left.form.div_temp9.form.edt_num9_1.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp9.form.edt_num9_2.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp9.form.edt_num9_3.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp9.form.edt_num9_4.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp9.form.edt_num9_5.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp9.form.edt_num9_6.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp9.form.btn_temp9.addEventHandler("onclick",this.btn_temp,this);
            this.div_main.form.div_left.form.div_temp10.form.edt_num10_1.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp10.form.edt_num10_2.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp10.form.edt_num10_3.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp10.form.edt_num10_4.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp10.form.edt_num10_5.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp10.form.edt_num10_6.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_temp10.form.btn_temp10.addEventHandler("onclick",this.btn_temp,this);
            this.div_main.form.div_right.form.grd_list.addEventHandler("oncellclick",this.div_main_div_right_grd_list_oncellclick,this);
            this.div_main.form.div_right.form.btn_mordel.addEventHandler("onclick",this.fn_dietdel,this);
            this.div_main.form.div_right.form.btn_lundel.addEventHandler("onclick",this.fn_dietdel,this);
            this.div_main.form.div_right.form.btn_dindel.addEventHandler("onclick",this.fn_dietdel,this);
        };
        this.loadIncludeScript("DAY00702_P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
