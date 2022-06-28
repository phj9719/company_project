(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00702_P01");
            this.set_titletext("주간식단표 템플릿 작성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1074,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_foodlist", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"식단번호\" type=\"STRING\" size=\"256\"/><Column id=\"식단구분\" type=\"STRING\" size=\"256\"/><Column id=\"식단구분명\" type=\"STRING\" size=\"256\"/><Column id=\"식단이름\" type=\"STRING\" size=\"256\"/><Column id=\"일회제공\" type=\"STRING\" size=\"256\"/><Column id=\"칼로리\" type=\"STRING\" size=\"256\"/><Column id=\"재료구성\" type=\"STRING\" size=\"256\"/><Column id=\"org_식단번호\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("ds_datalist", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"t_number\" type=\"STRING\" size=\"256\"/><Column id=\"temp_id\" type=\"STRING\" size=\"256\"/><Column id=\"food01\" type=\"STRING\" size=\"256\"/><Column id=\"food02\" type=\"STRING\" size=\"256\"/><Column id=\"food03\" type=\"STRING\" size=\"256\"/><Column id=\"food04\" type=\"STRING\" size=\"256\"/><Column id=\"food05\" type=\"STRING\" size=\"256\"/><Column id=\"food06\" type=\"STRING\" size=\"256\"/><Column id=\"gubun01\" type=\"STRING\" size=\"256\"/><Column id=\"gubun02\" type=\"STRING\" size=\"256\"/><Column id=\"gubun03\" type=\"STRING\" size=\"256\"/><Column id=\"gubun04\" type=\"STRING\" size=\"256\"/><Column id=\"gubun05\" type=\"STRING\" size=\"256\"/><Column id=\"gubun06\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">F01</Col><Col id=\"CMNM\">주식[밥,죽]</Col></Row><Row><Col id=\"CMCD\">F02</Col><Col id=\"CMNM\">국,탕,찌개</Col></Row><Row><Col id=\"CMCD\">F03</Col><Col id=\"CMNM\">찜,조림,볶음</Col></Row><Row><Col id=\"CMCD\">F04</Col><Col id=\"CMNM\">전,부침,튀김</Col></Row><Row><Col id=\"CMCD\">F05</Col><Col id=\"CMNM\">나물,무침</Col></Row><Row><Col id=\"CMCD\">F06</Col><Col id=\"CMNM\">구이,젓갈</Col></Row><Row><Col id=\"CMCD\">F07</Col><Col id=\"CMNM\">기타</Col></Row><Row><Col id=\"CMCD\">F08</Col><Col id=\"CMNM\">김치외 장류</Col></Row><Row><Col id=\"CMCD\">G01</Col><Col id=\"CMNM\">간식류</Col></Row><Row><Col id=\"CMCD\">G02</Col><Col id=\"CMNM\">과일,음료</Col></Row><Row><Col id=\"CMCD\">G99</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"t_number\" type=\"STRING\" size=\"256\"/><Column id=\"temp_id\" type=\"STRING\" size=\"256\"/><Column id=\"food01\" type=\"STRING\" size=\"256\"/><Column id=\"food02\" type=\"STRING\" size=\"256\"/><Column id=\"food03\" type=\"STRING\" size=\"256\"/><Column id=\"food04\" type=\"STRING\" size=\"256\"/><Column id=\"food05\" type=\"STRING\" size=\"256\"/><Column id=\"food06\" type=\"STRING\" size=\"256\"/><Column id=\"gubun01\" type=\"STRING\" size=\"256\"/><Column id=\"gubun02\" type=\"STRING\" size=\"256\"/><Column id=\"gubun03\" type=\"STRING\" size=\"256\"/><Column id=\"gubun04\" type=\"STRING\" size=\"256\"/><Column id=\"gubun05\" type=\"STRING\" size=\"256\"/><Column id=\"gubun06\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tem1", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"t_number\" type=\"STRING\" size=\"256\"/><Column id=\"temp_id\" type=\"STRING\" size=\"256\"/><Column id=\"food\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/><Column id=\"gnum\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tem2", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"t_number\" type=\"STRING\" size=\"256\"/><Column id=\"temp_id\" type=\"STRING\" size=\"256\"/><Column id=\"food\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/><Column id=\"gnum\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tem3", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"t_number\" type=\"STRING\" size=\"256\"/><Column id=\"temp_id\" type=\"STRING\" size=\"256\"/><Column id=\"food\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/><Column id=\"gnum\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tem4", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"t_number\" type=\"STRING\" size=\"256\"/><Column id=\"temp_id\" type=\"STRING\" size=\"256\"/><Column id=\"food\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/><Column id=\"gnum\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tem5", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"t_number\" type=\"STRING\" size=\"256\"/><Column id=\"temp_id\" type=\"STRING\" size=\"256\"/><Column id=\"food\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/><Column id=\"gnum\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tem6", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"t_number\" type=\"STRING\" size=\"256\"/><Column id=\"temp_id\" type=\"STRING\" size=\"256\"/><Column id=\"food\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/><Column id=\"gnum\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tem7", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"t_number\" type=\"STRING\" size=\"256\"/><Column id=\"temp_id\" type=\"STRING\" size=\"256\"/><Column id=\"food\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/><Column id=\"gnum\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tem8", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"t_number\" type=\"STRING\" size=\"256\"/><Column id=\"temp_id\" type=\"STRING\" size=\"256\"/><Column id=\"food\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/><Column id=\"gnum\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tem9", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"t_number\" type=\"STRING\" size=\"256\"/><Column id=\"temp_id\" type=\"STRING\" size=\"256\"/><Column id=\"food\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/><Column id=\"gnum\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tem10", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"t_number\" type=\"STRING\" size=\"256\"/><Column id=\"temp_id\" type=\"STRING\" size=\"256\"/><Column id=\"food\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/><Column id=\"gnum\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_func","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","70","26","10",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_desc","96","7","596","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("※ 식단 템블릿을 먼저 클릭하시고 식단명을 더블클릭하시면 템플릿으로 식단이 복사됩니다.");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_refresh","10","7","80","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("새로고침");
            this.div_func.addChild(obj.name, obj);

            obj = new Div("div_main","10","40",null,"850","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","320",null,null,"3",null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            this.div_main.addChild(obj.name, obj);

            obj = new Div("div_foodsearch","20","200","280","30",null,null,null,null,null,null,this.div_main.form.div_left.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.div_main.form.div_left.addChild(obj.name, obj);

            obj = new Static("sta_00","0","2","60","26",null,null,null,null,null,null,this.div_main.form.div_left.form.div_foodsearch.form);
            obj.set_taborder("0");
            obj.set_text("식단검색 : ");
            this.div_main.form.div_left.form.div_foodsearch.addChild(obj.name, obj);

            obj = new Edit("edt_name","65","2","140","26",null,null,null,null,null,null,this.div_main.form.div_left.form.div_foodsearch.form);
            obj.set_taborder("1");
            this.div_main.form.div_left.form.div_foodsearch.addChild(obj.name, obj);

            obj = new Button("btn_search","210","2","70","26",null,null,null,null,null,null,this.div_main.form.div_left.form.div_foodsearch.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_main.form.div_left.form.div_foodsearch.addChild(obj.name, obj);

            obj = new Div("div_foodselect","20","233","280","30",null,null,null,null,null,null,this.div_main.form.div_left.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.div_main.form.div_left.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0","60","26",null,null,null,null,null,null,this.div_main.form.div_left.form.div_foodselect.form);
            obj.set_taborder("0");
            obj.set_text("선택식단 :");
            this.div_main.form.div_left.form.div_foodselect.addChild(obj.name, obj);

            obj = new Edit("edt_select","65","0",null,"26","0",null,null,null,null,null,this.div_main.form.div_left.form.div_foodselect.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.div_main.form.div_left.form.div_foodselect.addChild(obj.name, obj);

            obj = new Grid("grd_foodlist","20","264","280","546",null,null,null,null,null,null,this.div_main.form.div_left.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_foodlist");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"100\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"25\"/></Rows><Band id=\"head\"><Cell text=\"식단명\"/><Cell col=\"1\" text=\"식단구분\"/></Band><Band id=\"body\"><Cell text=\"bind:식단이름\"/><Cell col=\"1\" text=\"bind:식단구분명\"/></Band></Format></Formats>");
            this.div_main.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_menuadd","20","815","100","25",null,null,null,null,null,null,this.div_main.form.div_left.form);
            obj.set_taborder("3");
            obj.set_text("식단 추가");
            this.div_main.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_btn","20","5","280","190",null,null,null,null,null,null,this.div_main.form.div_left.form);
            obj.set_taborder("4");
            obj.set_text("");
            this.div_main.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_g01","143","129","137","26",null,null,null,null,null,null,this.div_main.form.div_left.form.div_btn.form);
            obj.set_taborder("0");
            obj.set_text("간식류");
            this.div_main.form.div_left.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_f07","143","99","137","26",null,null,null,null,null,null,this.div_main.form.div_left.form.div_btn.form);
            obj.set_taborder("1");
            obj.set_text("기타");
            this.div_main.form.div_left.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_f05","143","69","137","26",null,null,null,null,null,null,this.div_main.form.div_left.form.div_btn.form);
            obj.set_taborder("2");
            obj.set_text("나물,무침");
            this.div_main.form.div_left.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_f03","143","39","137","26",null,null,null,null,null,null,this.div_main.form.div_left.form.div_btn.form);
            obj.set_taborder("3");
            obj.set_text("찜,조림,볶음");
            this.div_main.form.div_left.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_f01","143","10","137","26",null,null,null,null,null,null,this.div_main.form.div_left.form.div_btn.form);
            obj.set_taborder("4");
            obj.set_text("주식[밥,죽]");
            this.div_main.form.div_left.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_f08","0","129","137","26",null,null,null,null,null,null,this.div_main.form.div_left.form.div_btn.form);
            obj.set_taborder("5");
            obj.set_text("김치외 장류");
            this.div_main.form.div_left.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_f04","0","69","137","26",null,null,null,null,null,null,this.div_main.form.div_left.form.div_btn.form);
            obj.set_taborder("6");
            obj.set_text("전,부침,튀김");
            this.div_main.form.div_left.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_f06","0","99","137","26",null,null,null,null,null,null,this.div_main.form.div_left.form.div_btn.form);
            obj.set_taborder("7");
            obj.set_text("구이,젓갈");
            this.div_main.form.div_left.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_f02","0","39","137","26",null,null,null,null,null,null,this.div_main.form.div_left.form.div_btn.form);
            obj.set_taborder("8");
            obj.set_text("국,탕,찌개");
            this.div_main.form.div_left.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_all","0","10","137","26",null,null,null,null,null,null,this.div_main.form.div_left.form.div_btn.form);
            obj.set_taborder("9");
            obj.set_text("전체");
            this.div_main.form.div_left.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_g02","0","159","137","26",null,null,null,null,null,null,this.div_main.form.div_left.form.div_btn.form);
            obj.set_taborder("10");
            obj.set_text("과일,음료");
            this.div_main.form.div_left.form.div_btn.addChild(obj.name, obj);

            obj = new Div("div_right","330","0",null,null,"0","3",null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            this.div_main.addChild(obj.name, obj);

            obj = new Div("div_temp1","17","10","340","161",null,null,null,null,null,null,this.div_main.form.div_right.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.div_main.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_num1_1","2","23","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp1.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("1");
            obj.set_textAlign("center");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp1.addChild(obj.name, obj);

            obj = new Edit("edt_name1_1","26","23","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp1.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_color("#222222");
            obj.set_enable("false");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp1.addChild(obj.name, obj);

            obj = new Button("btn_del1_1","274","23","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp1.form);
            obj.set_taborder("4");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp1.addChild(obj.name, obj);

            obj = new Edit("edt_num1_2","2","45","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp1.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("2");
            obj.set_textAlign("center");
            obj.set_text("2");
            this.div_main.form.div_right.form.div_temp1.addChild(obj.name, obj);

            obj = new Edit("edt_name1_2","26","45","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp1.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_color("#222222");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp1.addChild(obj.name, obj);

            obj = new Button("btn_del1_2","274","45","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp1.form);
            obj.set_taborder("8");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp1.addChild(obj.name, obj);

            obj = new Edit("edt_num1_3","2","67","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp1.form);
            obj.set_taborder("9");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("3");
            obj.set_textAlign("center");
            obj.set_text("3");
            this.div_main.form.div_right.form.div_temp1.addChild(obj.name, obj);

            obj = new Edit("edt_name1_3","26","67","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp1.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_color("#222222");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp1.addChild(obj.name, obj);

            obj = new Button("btn_del1_3","274","67","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp1.form);
            obj.set_taborder("12");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp1.addChild(obj.name, obj);

            obj = new Edit("edt_num1_4","2","89","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp1.form);
            obj.set_taborder("13");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("4");
            obj.set_textAlign("center");
            obj.set_text("4");
            this.div_main.form.div_right.form.div_temp1.addChild(obj.name, obj);

            obj = new Edit("edt_name1_4","26","89","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp1.form);
            obj.set_taborder("14");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_color("#222222");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp1.addChild(obj.name, obj);

            obj = new Edit("edt_num1_5","2","111","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp1.form);
            obj.set_taborder("17");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("5");
            obj.set_textAlign("center");
            obj.set_text("5");
            this.div_main.form.div_right.form.div_temp1.addChild(obj.name, obj);

            obj = new Edit("edt_num1_6","2","133","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp1.form);
            obj.set_taborder("21");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("6");
            obj.set_textAlign("center");
            obj.set_text("6");
            this.div_main.form.div_right.form.div_temp1.addChild(obj.name, obj);

            obj = new Edit("edt_name1_6","26","133","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp1.form);
            obj.set_taborder("22");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_color("#222222");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp1.addChild(obj.name, obj);

            obj = new Edit("edt_name1_5","26","111","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp1.form);
            obj.set_taborder("18");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_color("#222222");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp1.addChild(obj.name, obj);

            obj = new Button("btn_del1_6","274","133","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp1.form);
            obj.set_taborder("24");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp1.addChild(obj.name, obj);

            obj = new Button("btn_del1_5","274","111","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp1.form);
            obj.set_taborder("20");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp1.addChild(obj.name, obj);

            obj = new Button("btn_del1_4","274","89","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp1.form);
            obj.set_taborder("16");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp1.addChild(obj.name, obj);

            obj = new Button("btn_temp1","2","1","332","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp1.form);
            obj.set_taborder("0");
            obj.set_text("식단 템플릿1(우선클릭)");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp1.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun1_1","175","23","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp1.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_gubun");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            obj.set_color("#222222");
            obj.set_enable("false");
            this.div_main.form.div_right.form.div_temp1.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun1_2","175","45","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp1.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_gubun");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            obj.set_color("#222222");
            obj.set_enable("false");
            this.div_main.form.div_right.form.div_temp1.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun1_3","175","67","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp1.form);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_gubun");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            obj.set_color("#222222");
            obj.set_enable("false");
            this.div_main.form.div_right.form.div_temp1.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun1_4","175","89","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp1.form);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_gubun");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            obj.set_color("#222222");
            obj.set_enable("false");
            this.div_main.form.div_right.form.div_temp1.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun1_5","175","111","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp1.form);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_gubun");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            obj.set_color("#222222");
            obj.set_enable("false");
            this.div_main.form.div_right.form.div_temp1.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun1_6","175","133","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp1.form);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_gubun");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            obj.set_color("#222222");
            obj.set_enable("false");
            this.div_main.form.div_right.form.div_temp1.addChild(obj.name, obj);

            obj = new Div("div_temp2","368","10","340","161",null,null,null,null,null,null,this.div_main.form.div_right.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.div_main.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_num2_1","2","23","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp2.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("1");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp2.addChild(obj.name, obj);

            obj = new Edit("edt_name2_1","26","23","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp2.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp2.addChild(obj.name, obj);

            obj = new Button("btn_del2_1","274","23","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp2.form);
            obj.set_taborder("4");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp2.addChild(obj.name, obj);

            obj = new Edit("edt_num2_2","2","45","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp2.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("2");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("2");
            this.div_main.form.div_right.form.div_temp2.addChild(obj.name, obj);

            obj = new Edit("edt_name2_2","26","45","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp2.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp2.addChild(obj.name, obj);

            obj = new Button("btn_del2_2","274","45","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp2.form);
            obj.set_taborder("8");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp2.addChild(obj.name, obj);

            obj = new Edit("edt_num2_3","2","67","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp2.form);
            obj.set_taborder("9");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("3");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("3");
            this.div_main.form.div_right.form.div_temp2.addChild(obj.name, obj);

            obj = new Edit("edt_name2_3","26","67","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp2.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp2.addChild(obj.name, obj);

            obj = new Button("btn_del2_3","274","67","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp2.form);
            obj.set_taborder("12");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp2.addChild(obj.name, obj);

            obj = new Edit("edt_num2_4","2","89","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp2.form);
            obj.set_taborder("13");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("4");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("4");
            this.div_main.form.div_right.form.div_temp2.addChild(obj.name, obj);

            obj = new Edit("edt_name2_4","26","89","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp2.form);
            obj.set_taborder("14");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp2.addChild(obj.name, obj);

            obj = new Edit("edt_num2_5","2","111","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp2.form);
            obj.set_taborder("17");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("5");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("5");
            this.div_main.form.div_right.form.div_temp2.addChild(obj.name, obj);

            obj = new Edit("edt_num2_6","2","133","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp2.form);
            obj.set_taborder("21");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("6");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("6");
            this.div_main.form.div_right.form.div_temp2.addChild(obj.name, obj);

            obj = new Edit("edt_name2_6","26","133","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp2.form);
            obj.set_taborder("22");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp2.addChild(obj.name, obj);

            obj = new Edit("edt_name2_5","26","111","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp2.form);
            obj.set_taborder("18");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp2.addChild(obj.name, obj);

            obj = new Button("btn_del2_6","274","133","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp2.form);
            obj.set_taborder("24");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp2.addChild(obj.name, obj);

            obj = new Button("btn_del2_5","274","111","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp2.form);
            obj.set_taborder("20");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp2.addChild(obj.name, obj);

            obj = new Button("btn_del2_4","274","89","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp2.form);
            obj.set_taborder("16");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp2.addChild(obj.name, obj);

            obj = new Button("btn_temp2","2","1","332","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp2.form);
            obj.set_taborder("0");
            obj.set_text("식단 템플릿2(우선클릭)");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp2.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun2_1","175","23","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp2.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp2.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun2_2","175","45","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp2.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp2.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun2_3","175","67","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp2.form);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp2.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun2_4","175","89","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp2.form);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp2.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun2_5","175","111","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp2.form);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp2.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun2_6","175","133","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp2.form);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp2.addChild(obj.name, obj);

            obj = new Div("div_temp3","17","174","340","161",null,null,null,null,null,null,this.div_main.form.div_right.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.div_main.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_num3_1","2","23","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp3.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("1");
            obj.set_textAlign("center");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp3.addChild(obj.name, obj);

            obj = new Edit("edt_name3_1","26","23","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp3.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_enable("false");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp3.addChild(obj.name, obj);

            obj = new Button("btn_del3_1","274","23","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp3.form);
            obj.set_taborder("2");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp3.addChild(obj.name, obj);

            obj = new Edit("edt_num3_2","2","45","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp3.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("2");
            obj.set_textAlign("center");
            obj.set_text("2");
            this.div_main.form.div_right.form.div_temp3.addChild(obj.name, obj);

            obj = new Edit("edt_name3_2","26","45","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp3.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_enable("false");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp3.addChild(obj.name, obj);

            obj = new Button("btn_del3_2","274","45","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp3.form);
            obj.set_taborder("5");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp3.addChild(obj.name, obj);

            obj = new Edit("edt_num3_3","2","67","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp3.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("3");
            obj.set_textAlign("center");
            obj.set_text("3");
            this.div_main.form.div_right.form.div_temp3.addChild(obj.name, obj);

            obj = new Edit("edt_name3_3","26","67","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp3.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_enable("false");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp3.addChild(obj.name, obj);

            obj = new Button("btn_del3_3","274","67","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp3.form);
            obj.set_taborder("8");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp3.addChild(obj.name, obj);

            obj = new Edit("edt_num3_4","2","89","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp3.form);
            obj.set_taborder("9");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("4");
            obj.set_textAlign("center");
            obj.set_text("4");
            this.div_main.form.div_right.form.div_temp3.addChild(obj.name, obj);

            obj = new Edit("edt_name3_4","26","89","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp3.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_enable("false");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp3.addChild(obj.name, obj);

            obj = new Edit("edt_num3_5","2","111","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp3.form);
            obj.set_taborder("11");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("5");
            obj.set_textAlign("center");
            obj.set_text("5");
            this.div_main.form.div_right.form.div_temp3.addChild(obj.name, obj);

            obj = new Edit("edt_num3_6","2","133","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp3.form);
            obj.set_taborder("12");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("6");
            obj.set_textAlign("center");
            obj.set_text("6");
            this.div_main.form.div_right.form.div_temp3.addChild(obj.name, obj);

            obj = new Edit("edt_name3_6","26","133","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp3.form);
            obj.set_taborder("13");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_enable("false");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp3.addChild(obj.name, obj);

            obj = new Edit("edt_name3_5","26","111","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp3.form);
            obj.set_taborder("14");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_enable("false");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp3.addChild(obj.name, obj);

            obj = new Button("btn_del3_6","274","133","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp3.form);
            obj.set_taborder("15");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp3.addChild(obj.name, obj);

            obj = new Button("btn_del3_5","274","111","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp3.form);
            obj.set_taborder("16");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp3.addChild(obj.name, obj);

            obj = new Button("btn_del3_4","274","89","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp3.form);
            obj.set_taborder("17");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp3.addChild(obj.name, obj);

            obj = new Button("btn_temp3","2","1","332","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp3.form);
            obj.set_taborder("18");
            obj.set_text("식단 템플릿3(우선클릭)");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp3.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun3_1","175","23","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp3.form);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp3.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun3_2","175","45","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp3.form);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp3.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun3_3","175","67","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp3.form);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp3.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun3_4","175","89","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp3.form);
            obj.set_taborder("22");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp3.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun3_5","175","111","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp3.form);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp3.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun3_6","175","133","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp3.form);
            obj.set_taborder("24");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp3.addChild(obj.name, obj);

            obj = new Div("div_temp4","368","174","340","161",null,null,null,null,null,null,this.div_main.form.div_right.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.div_main.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_num4_1","2","23","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp4.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("1");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp4.addChild(obj.name, obj);

            obj = new Edit("edt_name4_1","26","23","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp4.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp4.addChild(obj.name, obj);

            obj = new Button("btn_del4_1","274","23","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp4.form);
            obj.set_taborder("4");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp4.addChild(obj.name, obj);

            obj = new Edit("edt_num4_2","2","45","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp4.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("2");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("2");
            this.div_main.form.div_right.form.div_temp4.addChild(obj.name, obj);

            obj = new Edit("edt_name4_2","26","45","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp4.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp4.addChild(obj.name, obj);

            obj = new Button("btn_del4_2","274","45","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp4.form);
            obj.set_taborder("8");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp4.addChild(obj.name, obj);

            obj = new Edit("edt_num4_3","2","67","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp4.form);
            obj.set_taborder("9");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("3");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("3");
            this.div_main.form.div_right.form.div_temp4.addChild(obj.name, obj);

            obj = new Edit("edt_name4_3","26","67","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp4.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp4.addChild(obj.name, obj);

            obj = new Button("btn_del4_3","274","67","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp4.form);
            obj.set_taborder("12");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp4.addChild(obj.name, obj);

            obj = new Edit("edt_num4_4","2","89","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp4.form);
            obj.set_taborder("13");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("4");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("4");
            this.div_main.form.div_right.form.div_temp4.addChild(obj.name, obj);

            obj = new Edit("edt_name4_4","26","89","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp4.form);
            obj.set_taborder("14");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp4.addChild(obj.name, obj);

            obj = new Edit("edt_num4_5","2","111","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp4.form);
            obj.set_taborder("17");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("5");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("5");
            this.div_main.form.div_right.form.div_temp4.addChild(obj.name, obj);

            obj = new Edit("edt_num4_6","2","133","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp4.form);
            obj.set_taborder("21");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("6");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("6");
            this.div_main.form.div_right.form.div_temp4.addChild(obj.name, obj);

            obj = new Edit("edt_name4_6","26","133","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp4.form);
            obj.set_taborder("22");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp4.addChild(obj.name, obj);

            obj = new Edit("edt_name4_5","26","111","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp4.form);
            obj.set_taborder("18");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp4.addChild(obj.name, obj);

            obj = new Button("btn_del4_6","274","133","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp4.form);
            obj.set_taborder("24");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp4.addChild(obj.name, obj);

            obj = new Button("btn_del4_5","274","111","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp4.form);
            obj.set_taborder("20");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp4.addChild(obj.name, obj);

            obj = new Button("btn_del4_4","274","89","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp4.form);
            obj.set_taborder("16");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp4.addChild(obj.name, obj);

            obj = new Button("btn_temp4","2","1","332","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp4.form);
            obj.set_taborder("0");
            obj.set_text("식단 템플릿4(우선클릭)");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp4.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun4_1","175","23","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp4.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp4.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun4_2","175","45","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp4.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp4.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun4_3","175","67","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp4.form);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp4.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun4_4","175","89","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp4.form);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp4.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun4_5","175","111","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp4.form);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp4.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun4_6","175","133","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp4.form);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp4.addChild(obj.name, obj);

            obj = new Div("div_temp5","17","338","340","161",null,null,null,null,null,null,this.div_main.form.div_right.form);
            obj.set_taborder("4");
            obj.set_text("");
            this.div_main.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_num5_1","2","23","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp5.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("1");
            obj.set_textAlign("center");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp5.addChild(obj.name, obj);

            obj = new Edit("edt_name5_1","26","23","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp5.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp5.addChild(obj.name, obj);

            obj = new Button("btn_del5_1","274","23","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp5.form);
            obj.set_taborder("2");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp5.addChild(obj.name, obj);

            obj = new Edit("edt_num5_2","2","45","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp5.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("2");
            obj.set_textAlign("center");
            obj.set_text("2");
            this.div_main.form.div_right.form.div_temp5.addChild(obj.name, obj);

            obj = new Edit("edt_name5_2","26","45","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp5.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp5.addChild(obj.name, obj);

            obj = new Button("btn_del5_2","274","45","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp5.form);
            obj.set_taborder("5");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp5.addChild(obj.name, obj);

            obj = new Edit("edt_num5_3","2","67","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp5.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("3");
            obj.set_textAlign("center");
            obj.set_text("3");
            this.div_main.form.div_right.form.div_temp5.addChild(obj.name, obj);

            obj = new Edit("edt_name5_3","26","67","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp5.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp5.addChild(obj.name, obj);

            obj = new Button("btn_del5_3","274","67","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp5.form);
            obj.set_taborder("8");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp5.addChild(obj.name, obj);

            obj = new Edit("edt_num5_4","2","89","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp5.form);
            obj.set_taborder("9");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("4");
            obj.set_textAlign("center");
            obj.set_text("4");
            this.div_main.form.div_right.form.div_temp5.addChild(obj.name, obj);

            obj = new Edit("edt_name5_4","26","89","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp5.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp5.addChild(obj.name, obj);

            obj = new Edit("edt_num5_5","2","111","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp5.form);
            obj.set_taborder("11");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("5");
            obj.set_textAlign("center");
            obj.set_text("5");
            this.div_main.form.div_right.form.div_temp5.addChild(obj.name, obj);

            obj = new Edit("edt_num5_6","2","133","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp5.form);
            obj.set_taborder("12");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("6");
            obj.set_textAlign("center");
            obj.set_text("6");
            this.div_main.form.div_right.form.div_temp5.addChild(obj.name, obj);

            obj = new Edit("edt_name5_6","26","133","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp5.form);
            obj.set_taborder("13");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp5.addChild(obj.name, obj);

            obj = new Edit("edt_name5_5","26","111","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp5.form);
            obj.set_taborder("14");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp5.addChild(obj.name, obj);

            obj = new Button("btn_del5_6","274","133","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp5.form);
            obj.set_taborder("15");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp5.addChild(obj.name, obj);

            obj = new Button("btn_del5_5","274","111","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp5.form);
            obj.set_taborder("16");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp5.addChild(obj.name, obj);

            obj = new Button("btn_del5_4","274","89","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp5.form);
            obj.set_taborder("17");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp5.addChild(obj.name, obj);

            obj = new Button("btn_temp5","2","1","332","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp5.form);
            obj.set_taborder("18");
            obj.set_text("식단 템플릿5(우선클릭)");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp5.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun5_1","175","23","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp5.form);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp5.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun5_2","175","45","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp5.form);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp5.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun5_3","175","67","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp5.form);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp5.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun5_4","175","89","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp5.form);
            obj.set_taborder("22");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp5.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun5_5","175","111","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp5.form);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp5.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun5_6","175","133","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp5.form);
            obj.set_taborder("24");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp5.addChild(obj.name, obj);

            obj = new Div("div_temp6","368","338","340","161",null,null,null,null,null,null,this.div_main.form.div_right.form);
            obj.set_taborder("5");
            obj.set_text("");
            this.div_main.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_num6_1","2","23","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp6.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("1");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp6.addChild(obj.name, obj);

            obj = new Edit("edt_name6_1","26","23","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp6.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp6.addChild(obj.name, obj);

            obj = new Button("btn_del6_1","274","23","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp6.form);
            obj.set_taborder("2");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp6.addChild(obj.name, obj);

            obj = new Edit("edt_num6_2","2","45","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp6.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("2");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("2");
            this.div_main.form.div_right.form.div_temp6.addChild(obj.name, obj);

            obj = new Edit("edt_name6_2","26","45","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp6.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp6.addChild(obj.name, obj);

            obj = new Button("btn_del6_2","274","45","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp6.form);
            obj.set_taborder("5");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp6.addChild(obj.name, obj);

            obj = new Edit("edt_num6_3","2","67","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp6.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("3");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("3");
            this.div_main.form.div_right.form.div_temp6.addChild(obj.name, obj);

            obj = new Edit("edt_name6_3","26","67","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp6.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp6.addChild(obj.name, obj);

            obj = new Button("btn_del6_3","274","67","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp6.form);
            obj.set_taborder("8");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp6.addChild(obj.name, obj);

            obj = new Edit("edt_num6_4","2","89","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp6.form);
            obj.set_taborder("9");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("4");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("4");
            this.div_main.form.div_right.form.div_temp6.addChild(obj.name, obj);

            obj = new Edit("edt_name6_4","26","89","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp6.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp6.addChild(obj.name, obj);

            obj = new Edit("edt_num6_5","2","111","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp6.form);
            obj.set_taborder("11");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("5");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("5");
            this.div_main.form.div_right.form.div_temp6.addChild(obj.name, obj);

            obj = new Edit("edt_num6_6","2","133","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp6.form);
            obj.set_taborder("12");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("6");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("6");
            this.div_main.form.div_right.form.div_temp6.addChild(obj.name, obj);

            obj = new Edit("edt_name6_6","26","133","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp6.form);
            obj.set_taborder("13");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp6.addChild(obj.name, obj);

            obj = new Edit("edt_name6_5","26","111","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp6.form);
            obj.set_taborder("14");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp6.addChild(obj.name, obj);

            obj = new Button("btn_del6_6","274","133","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp6.form);
            obj.set_taborder("15");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp6.addChild(obj.name, obj);

            obj = new Button("btn_del6_5","274","111","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp6.form);
            obj.set_taborder("16");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp6.addChild(obj.name, obj);

            obj = new Button("btn_del6_4","274","89","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp6.form);
            obj.set_taborder("17");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp6.addChild(obj.name, obj);

            obj = new Button("btn_temp6","2","1","332","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp6.form);
            obj.set_taborder("18");
            obj.set_text("식단 템플릿6(우선클릭)");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp6.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun6_1","175","23","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp6.form);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp6.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun6_2","175","45","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp6.form);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp6.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun6_3","175","67","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp6.form);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp6.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun6_4","175","89","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp6.form);
            obj.set_taborder("22");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp6.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun6_5","175","111","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp6.form);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp6.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun6_6","175","133","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp6.form);
            obj.set_taborder("24");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp6.addChild(obj.name, obj);

            obj = new Div("div_temp7","17","502","340","161",null,null,null,null,null,null,this.div_main.form.div_right.form);
            obj.set_taborder("6");
            obj.set_text("");
            this.div_main.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_num7_1","2","23","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp7.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("1");
            obj.set_textAlign("center");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp7.addChild(obj.name, obj);

            obj = new Edit("edt_name7_1","26","23","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp7.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp7.addChild(obj.name, obj);

            obj = new Button("btn_del7_1","274","23","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp7.form);
            obj.set_taborder("2");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp7.addChild(obj.name, obj);

            obj = new Edit("edt_num7_2","2","45","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp7.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("2");
            obj.set_textAlign("center");
            obj.set_text("2");
            this.div_main.form.div_right.form.div_temp7.addChild(obj.name, obj);

            obj = new Edit("edt_name7_2","26","45","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp7.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp7.addChild(obj.name, obj);

            obj = new Button("btn_del7_2","274","45","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp7.form);
            obj.set_taborder("5");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp7.addChild(obj.name, obj);

            obj = new Edit("edt_num7_3","2","67","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp7.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("3");
            obj.set_textAlign("center");
            obj.set_text("3");
            this.div_main.form.div_right.form.div_temp7.addChild(obj.name, obj);

            obj = new Edit("edt_name7_3","26","67","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp7.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp7.addChild(obj.name, obj);

            obj = new Button("btn_del7_3","274","67","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp7.form);
            obj.set_taborder("8");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp7.addChild(obj.name, obj);

            obj = new Edit("edt_num7_4","2","89","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp7.form);
            obj.set_taborder("9");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("4");
            obj.set_textAlign("center");
            obj.set_text("4");
            this.div_main.form.div_right.form.div_temp7.addChild(obj.name, obj);

            obj = new Edit("edt_name7_4","26","89","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp7.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp7.addChild(obj.name, obj);

            obj = new Edit("edt_num7_5","2","111","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp7.form);
            obj.set_taborder("11");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("5");
            obj.set_textAlign("center");
            obj.set_text("5");
            this.div_main.form.div_right.form.div_temp7.addChild(obj.name, obj);

            obj = new Edit("edt_num7_6","2","133","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp7.form);
            obj.set_taborder("12");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("6");
            obj.set_textAlign("center");
            obj.set_text("6");
            this.div_main.form.div_right.form.div_temp7.addChild(obj.name, obj);

            obj = new Edit("edt_name7_6","26","133","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp7.form);
            obj.set_taborder("13");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp7.addChild(obj.name, obj);

            obj = new Edit("edt_name7_5","26","111","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp7.form);
            obj.set_taborder("14");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp7.addChild(obj.name, obj);

            obj = new Button("btn_del7_6","274","133","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp7.form);
            obj.set_taborder("15");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp7.addChild(obj.name, obj);

            obj = new Button("btn_del7_5","274","111","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp7.form);
            obj.set_taborder("16");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp7.addChild(obj.name, obj);

            obj = new Button("btn_del7_4","274","89","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp7.form);
            obj.set_taborder("17");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp7.addChild(obj.name, obj);

            obj = new Button("btn_temp7","2","1","332","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp7.form);
            obj.set_taborder("18");
            obj.set_text("식단 템플릿7(우선클릭)");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp7.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun7_1","175","23","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp7.form);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp7.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun7_2","175","45","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp7.form);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp7.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun7_3","175","67","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp7.form);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp7.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun7_4","175","89","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp7.form);
            obj.set_taborder("22");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp7.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun7_5","175","111","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp7.form);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp7.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun7_6","175","133","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp7.form);
            obj.set_taborder("24");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp7.addChild(obj.name, obj);

            obj = new Div("div_temp8","368","502","340","161",null,null,null,null,null,null,this.div_main.form.div_right.form);
            obj.set_taborder("7");
            obj.set_text("");
            this.div_main.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_num8_1","2","23","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp8.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("1");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp8.addChild(obj.name, obj);

            obj = new Edit("edt_name8_1","26","23","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp8.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp8.addChild(obj.name, obj);

            obj = new Button("btn_del8_1","274","23","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp8.form);
            obj.set_taborder("2");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp8.addChild(obj.name, obj);

            obj = new Edit("edt_num8_2","2","45","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp8.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("2");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("2");
            this.div_main.form.div_right.form.div_temp8.addChild(obj.name, obj);

            obj = new Edit("edt_name8_2","26","45","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp8.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp8.addChild(obj.name, obj);

            obj = new Button("btn_del8_2","274","45","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp8.form);
            obj.set_taborder("5");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp8.addChild(obj.name, obj);

            obj = new Edit("edt_num8_3","2","67","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp8.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("3");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("3");
            this.div_main.form.div_right.form.div_temp8.addChild(obj.name, obj);

            obj = new Edit("edt_name8_3","26","67","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp8.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp8.addChild(obj.name, obj);

            obj = new Button("btn_del8_3","274","67","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp8.form);
            obj.set_taborder("8");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp8.addChild(obj.name, obj);

            obj = new Edit("edt_num8_4","2","89","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp8.form);
            obj.set_taborder("9");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("4");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("4");
            this.div_main.form.div_right.form.div_temp8.addChild(obj.name, obj);

            obj = new Edit("edt_name8_4","26","89","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp8.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp8.addChild(obj.name, obj);

            obj = new Edit("edt_num8_5","2","111","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp8.form);
            obj.set_taborder("11");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("5");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("5");
            this.div_main.form.div_right.form.div_temp8.addChild(obj.name, obj);

            obj = new Edit("edt_num8_6","2","133","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp8.form);
            obj.set_taborder("12");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("6");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("6");
            this.div_main.form.div_right.form.div_temp8.addChild(obj.name, obj);

            obj = new Edit("edt_name8_6","26","133","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp8.form);
            obj.set_taborder("13");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp8.addChild(obj.name, obj);

            obj = new Edit("edt_name8_5","26","111","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp8.form);
            obj.set_taborder("14");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp8.addChild(obj.name, obj);

            obj = new Button("btn_del8_6","274","133","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp8.form);
            obj.set_taborder("15");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp8.addChild(obj.name, obj);

            obj = new Button("btn_del8_5","274","111","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp8.form);
            obj.set_taborder("16");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp8.addChild(obj.name, obj);

            obj = new Button("btn_del8_4","274","89","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp8.form);
            obj.set_taborder("17");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp8.addChild(obj.name, obj);

            obj = new Button("btn_temp8","2","1","332","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp8.form);
            obj.set_taborder("18");
            obj.set_text("식단 템플릿8(우선클릭)");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp8.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun8_1","175","23","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp8.form);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp8.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun8_2","175","45","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp8.form);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp8.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun8_3","175","67","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp8.form);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp8.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun8_4","175","89","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp8.form);
            obj.set_taborder("22");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp8.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun8_5","175","111","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp8.form);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp8.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun8_6","175","133","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp8.form);
            obj.set_taborder("24");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp8.addChild(obj.name, obj);

            obj = new Div("div_temp9","17","666","340","161",null,null,null,null,null,null,this.div_main.form.div_right.form);
            obj.set_taborder("8");
            obj.set_text("");
            this.div_main.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_num9_1","2","23","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp9.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("1");
            obj.set_textAlign("center");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp9.addChild(obj.name, obj);

            obj = new Edit("edt_name9_1","26","23","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp9.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp9.addChild(obj.name, obj);

            obj = new Button("btn_del9_1","274","23","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp9.form);
            obj.set_taborder("2");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp9.addChild(obj.name, obj);

            obj = new Edit("edt_num9_2","2","45","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp9.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("2");
            obj.set_textAlign("center");
            obj.set_text("2");
            this.div_main.form.div_right.form.div_temp9.addChild(obj.name, obj);

            obj = new Edit("edt_name9_2","26","45","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp9.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp9.addChild(obj.name, obj);

            obj = new Button("btn_del9_2","274","45","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp9.form);
            obj.set_taborder("5");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp9.addChild(obj.name, obj);

            obj = new Edit("edt_num9_3","2","67","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp9.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("3");
            obj.set_textAlign("center");
            obj.set_text("3");
            this.div_main.form.div_right.form.div_temp9.addChild(obj.name, obj);

            obj = new Edit("edt_name9_3","26","67","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp9.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp9.addChild(obj.name, obj);

            obj = new Button("btn_del9_3","274","67","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp9.form);
            obj.set_taborder("8");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp9.addChild(obj.name, obj);

            obj = new Edit("edt_num9_4","2","89","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp9.form);
            obj.set_taborder("9");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("4");
            obj.set_textAlign("center");
            obj.set_text("4");
            this.div_main.form.div_right.form.div_temp9.addChild(obj.name, obj);

            obj = new Edit("edt_name9_4","26","89","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp9.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp9.addChild(obj.name, obj);

            obj = new Edit("edt_num9_5","2","111","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp9.form);
            obj.set_taborder("11");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("5");
            obj.set_textAlign("center");
            obj.set_text("5");
            this.div_main.form.div_right.form.div_temp9.addChild(obj.name, obj);

            obj = new Edit("edt_num9_6","2","133","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp9.form);
            obj.set_taborder("12");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("6");
            obj.set_textAlign("center");
            obj.set_text("6");
            this.div_main.form.div_right.form.div_temp9.addChild(obj.name, obj);

            obj = new Edit("edt_name9_6","26","133","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp9.form);
            obj.set_taborder("13");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp9.addChild(obj.name, obj);

            obj = new Edit("edt_name9_5","26","111","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp9.form);
            obj.set_taborder("14");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp9.addChild(obj.name, obj);

            obj = new Button("btn_del9_6","274","133","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp9.form);
            obj.set_taborder("15");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp9.addChild(obj.name, obj);

            obj = new Button("btn_del9_5","274","111","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp9.form);
            obj.set_taborder("16");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp9.addChild(obj.name, obj);

            obj = new Button("btn_del9_4","274","89","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp9.form);
            obj.set_taborder("17");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp9.addChild(obj.name, obj);

            obj = new Button("btn_temp9","2","1","332","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp9.form);
            obj.set_taborder("18");
            obj.set_text("식단 템플릿9(우선클릭)");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp9.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun9_1","175","23","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp9.form);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp9.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun9_2","175","45","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp9.form);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp9.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun9_3","175","67","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp9.form);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp9.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun9_4","175","89","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp9.form);
            obj.set_taborder("22");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp9.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun9_5","175","111","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp9.form);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp9.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun9_6","175","133","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp9.form);
            obj.set_taborder("24");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp9.addChild(obj.name, obj);

            obj = new Div("div_temp10","368","666","340","161",null,null,null,null,null,null,this.div_main.form.div_right.form);
            obj.set_taborder("9");
            obj.set_text("");
            this.div_main.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_num10_1","2","23","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp10.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("1");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp10.addChild(obj.name, obj);

            obj = new Edit("edt_name10_1","26","23","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp10.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp10.addChild(obj.name, obj);

            obj = new Button("btn_del10_1","274","23","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp10.form);
            obj.set_taborder("2");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp10.addChild(obj.name, obj);

            obj = new Edit("edt_num10_2","2","45","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp10.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("2");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("2");
            this.div_main.form.div_right.form.div_temp10.addChild(obj.name, obj);

            obj = new Edit("edt_name10_2","26","45","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp10.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp10.addChild(obj.name, obj);

            obj = new Button("btn_del10_2","274","45","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp10.form);
            obj.set_taborder("5");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp10.addChild(obj.name, obj);

            obj = new Edit("edt_num10_3","2","67","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp10.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("3");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("3");
            this.div_main.form.div_right.form.div_temp10.addChild(obj.name, obj);

            obj = new Edit("edt_name10_3","26","67","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp10.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp10.addChild(obj.name, obj);

            obj = new Button("btn_del10_3","274","67","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp10.form);
            obj.set_taborder("8");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp10.addChild(obj.name, obj);

            obj = new Edit("edt_num10_4","2","89","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp10.form);
            obj.set_taborder("9");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("4");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("4");
            this.div_main.form.div_right.form.div_temp10.addChild(obj.name, obj);

            obj = new Edit("edt_name10_4","26","89","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp10.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp10.addChild(obj.name, obj);

            obj = new Edit("edt_num10_5","2","111","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp10.form);
            obj.set_taborder("11");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("5");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("5");
            this.div_main.form.div_right.form.div_temp10.addChild(obj.name, obj);

            obj = new Edit("edt_num10_6","2","133","25","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp10.form);
            obj.set_taborder("12");
            obj.set_border("1px solid #000000");
            obj.set_readonly("true");
            obj.set_value("6");
            obj.set_textAlign("center");
            obj.set_color("#00000");
            obj.set_text("6");
            this.div_main.form.div_right.form.div_temp10.addChild(obj.name, obj);

            obj = new Edit("edt_name10_6","26","133","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp10.form);
            obj.set_taborder("13");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp10.addChild(obj.name, obj);

            obj = new Edit("edt_name10_5","26","111","150","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp10.form);
            obj.set_taborder("14");
            obj.set_border("1px solid #000000");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("1");
            this.div_main.form.div_right.form.div_temp10.addChild(obj.name, obj);

            obj = new Button("btn_del10_6","274","133","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp10.form);
            obj.set_taborder("15");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp10.addChild(obj.name, obj);

            obj = new Button("btn_del10_5","274","111","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp10.form);
            obj.set_taborder("16");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp10.addChild(obj.name, obj);

            obj = new Button("btn_del10_4","274","89","60","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp10.form);
            obj.set_taborder("17");
            obj.set_text("지움");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp10.addChild(obj.name, obj);

            obj = new Button("btn_temp10","2","1","332","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp10.form);
            obj.set_taborder("18");
            obj.set_text("식단 템플릿10(우선클릭)");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            this.div_main.form.div_right.form.div_temp10.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun10_1","175","23","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp10.form);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp10.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun10_2","175","45","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp10.form);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp10.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun10_3","175","67","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp10.form);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp10.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun10_4","175","89","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp10.form);
            obj.set_taborder("22");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp10.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun10_5","175","111","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp10.form);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp10.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun10_6","175","133","100","23",null,null,null,null,null,null,this.div_main.form.div_right.form.div_temp10.form);
            obj.set_taborder("24");
            obj.set_innerdataset("ds_gubun");
            obj.set_enable("false");
            obj.set_buttonsize("0 0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #000000");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("comboalign");
            this.div_main.form.div_right.form.div_temp10.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1074,900,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_main.form.div_left.form.div_foodsearch.form.edt_name","value","ds_search","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_main.form.div_right.form.div_temp1.form.edt_name1_1","value","ds_temp1","food01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_main.form.div_right.form.div_temp1.form.edt_name1_2","value","ds_temp1","food02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_main.form.div_right.form.div_temp1.form.edt_name1_3","value","ds_temp1","food03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_main.form.div_right.form.div_temp1.form.edt_name1_4","value","ds_temp1","food04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_main.form.div_right.form.div_temp1.form.edt_name1_5","value","ds_temp1","food05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_main.form.div_right.form.div_temp1.form.edt_name1_6","value","ds_temp1","food06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_main.form.div_right.form.div_temp2.form.edt_name2_1","value","ds_temp2","food01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_main.form.div_right.form.div_temp2.form.edt_name2_2","value","ds_temp2","food02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_main.form.div_right.form.div_temp2.form.edt_name2_3","value","ds_temp2","food03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_main.form.div_right.form.div_temp2.form.edt_name2_4","value","ds_temp2","food04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_main.form.div_right.form.div_temp2.form.edt_name2_5","value","ds_temp2","food05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_main.form.div_right.form.div_temp2.form.edt_name2_6","value","ds_temp2","food06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_main.form.div_right.form.div_temp3.form.edt_name3_1","value","ds_temp3","food01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_main.form.div_right.form.div_temp3.form.edt_name3_2","value","ds_temp3","food02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_main.form.div_right.form.div_temp3.form.edt_name3_3","value","ds_temp3","food03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_main.form.div_right.form.div_temp3.form.edt_name3_4","value","ds_temp3","food04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_main.form.div_right.form.div_temp3.form.edt_name3_5","value","ds_temp3","food05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_main.form.div_right.form.div_temp3.form.edt_name3_6","value","ds_temp3","food06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_main.form.div_right.form.div_temp4.form.edt_name4_1","value","ds_temp4","food01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_main.form.div_right.form.div_temp4.form.edt_name4_2","value","ds_temp4","food02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_main.form.div_right.form.div_temp4.form.edt_name4_3","value","ds_temp4","food03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_main.form.div_right.form.div_temp4.form.edt_name4_4","value","ds_temp4","food04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_main.form.div_right.form.div_temp4.form.edt_name4_5","value","ds_temp4","food05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_main.form.div_right.form.div_temp4.form.edt_name4_6","value","ds_temp4","food06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_main.form.div_right.form.div_temp5.form.edt_name5_1","value","ds_temp5","food01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_main.form.div_right.form.div_temp5.form.edt_name5_2","value","ds_temp5","food02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_main.form.div_right.form.div_temp5.form.edt_name5_3","value","ds_temp5","food03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_main.form.div_right.form.div_temp5.form.edt_name_4","value","ds_temp5","food04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_main.form.div_right.form.div_temp5.form.edt_name5_5","value","ds_temp5","food05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_main.form.div_right.form.div_temp5.form.edt_name5_6","value","ds_temp5","food06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","div_main.form.div_right.form.div_temp5.form.edt_name5_4","value","ds_temp5","food04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","div_main.form.div_right.form.div_temp6.form.edt_name6_1","value","ds_temp6","food01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","div_main.form.div_right.form.div_temp6.form.edt_name6_2","value","ds_temp6","food02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","div_main.form.div_right.form.div_temp6.form.edt_name6_3","value","ds_temp6","food03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","div_main.form.div_right.form.div_temp6.form.edt_name6_4","value","ds_temp6","food04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","div_main.form.div_right.form.div_temp6.form.edt_name6_5","value","ds_temp6","food05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","div_main.form.div_right.form.div_temp6.form.edt_name6_6","value","ds_temp6","food06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item98","div_main.form.div_right.form.div_temp7.form.edt_name7_1","value","ds_temp7","food01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item99","div_main.form.div_right.form.div_temp7.form.edt_name7_2","value","ds_temp7","food02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item100","div_main.form.div_right.form.div_temp7.form.edt_name7_3","value","ds_temp7","food03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item101","div_main.form.div_right.form.div_temp7.form.edt_name7_4","value","ds_temp7","food04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item102","div_main.form.div_right.form.div_temp7.form.edt_name7_5","value","ds_temp7","food05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item103","div_main.form.div_right.form.div_temp7.form.edt_name7_6","value","ds_temp7","food06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item110","div_main.form.div_right.form.div_temp8.form.edt_name8_1","value","ds_temp8","food01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item111","div_main.form.div_right.form.div_temp8.form.edt_name8_2","value","ds_temp8","food02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item112","div_main.form.div_right.form.div_temp8.form.edt_name8_3","value","ds_temp8","food03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item113","div_main.form.div_right.form.div_temp8.form.edt_name8_4","value","ds_temp8","food04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item114","div_main.form.div_right.form.div_temp8.form.edt_name8_5","value","ds_temp8","food05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item115","div_main.form.div_right.form.div_temp8.form.edt_name8_6","value","ds_temp8","food06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item122","div_main.form.div_right.form.div_temp8.form.edt_name8_4","value","ds_temp8","food04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","div_main.form.div_right.form.div_temp9.form.edt_name9_1","value","ds_temp9","food01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","div_main.form.div_right.form.div_temp9.form.edt_name9_2","value","ds_temp9","food02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","div_main.form.div_right.form.div_temp9.form.edt_name9_3","value","ds_temp9","food03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","div_main.form.div_right.form.div_temp9.form.edt_name9_4","value","ds_temp9","food04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","div_main.form.div_right.form.div_temp9.form.edt_name9_5","value","ds_temp9","food05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","div_main.form.div_right.form.div_temp9.form.edt_name9_6","value","ds_temp9","food06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","div_main.form.div_right.form.div_temp10.form.edt_name10_1","value","ds_temp10","food01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","div_main.form.div_right.form.div_temp10.form.edt_name10_2","value","ds_temp10","food02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","div_main.form.div_right.form.div_temp10.form.edt_name10_3","value","ds_temp10","food03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","div_main.form.div_right.form.div_temp10.form.edt_name10_4","value","ds_temp10","food04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","div_main.form.div_right.form.div_temp10.form.edt_name10_5","value","ds_temp10","food05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","div_main.form.div_right.form.div_temp10.form.edt_name10_6","value","ds_temp10","food06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item123","div_main.form.div_right.form.div_temp1.form.cmb_gubun1_1","value","ds_temp1","gubun01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item124","div_main.form.div_right.form.div_temp1.form.cmb_gubun1_2","value","ds_temp1","gubun02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_main.form.div_right.form.div_temp1.form.cmb_gubun1_3","value","ds_temp1","gubun03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_main.form.div_right.form.div_temp1.form.cmb_gubun1_4","value","ds_temp1","gubun04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_main.form.div_right.form.div_temp1.form.cmb_gubun1_5","value","ds_temp1","gubun05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_main.form.div_right.form.div_temp1.form.cmb_gubun1_6","value","ds_temp1","gubun06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_main.form.div_right.form.div_temp2.form.cmb_gubun2_1","value","ds_temp2","gubun01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_main.form.div_right.form.div_temp2.form.cmb_gubun2_2","value","ds_temp2","gubun02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item125","div_main.form.div_right.form.div_temp2.form.cmb_gubun2_3","value","ds_temp2","gubun03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item126","div_main.form.div_right.form.div_temp2.form.cmb_gubun2_4","value","ds_temp2","gubun04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item127","div_main.form.div_right.form.div_temp2.form.cmb_gubun2_5","value","ds_temp2","gubun05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item128","div_main.form.div_right.form.div_temp2.form.cmb_gubun2_6","value","ds_temp2","gubun06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_main.form.div_right.form.div_temp3.form.cmb_gubun3_1","value","ds_temp3","gubun01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_main.form.div_right.form.div_temp3.form.cmb_gubun3_2","value","ds_temp3","gubun02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_main.form.div_right.form.div_temp3.form.cmb_gubun3_3","value","ds_temp3","gubun03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_main.form.div_right.form.div_temp3.form.cmb_gubun3_4","value","ds_temp3","gubun04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_main.form.div_right.form.div_temp3.form.cmb_gubun3_5","value","ds_temp3","gubun05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_main.form.div_right.form.div_temp3.form.cmb_gubun3_6","value","ds_temp3","gubun06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_main.form.div_right.form.div_temp4.form.cmb_gubun4_1","value","ds_temp4","gubun01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_main.form.div_right.form.div_temp4.form.cmb_gubun4_2","value","ds_temp4","gubun02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_main.form.div_right.form.div_temp4.form.cmb_gubun4_3","value","ds_temp4","gubun03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_main.form.div_right.form.div_temp4.form.cmb_gubun4_4","value","ds_temp4","gubun04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_main.form.div_right.form.div_temp4.form.cmb_gubun4_5","value","ds_temp4","gubun05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_main.form.div_right.form.div_temp4.form.cmb_gubun4_6","value","ds_temp4","gubun06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_main.form.div_right.form.div_temp5.form.cmb_gubun5_1","value","ds_temp5","gubun01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_main.form.div_right.form.div_temp5.form.cmb_gubun5_2","value","ds_temp5","gubun02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_main.form.div_right.form.div_temp5.form.cmb_gubun5_3","value","ds_temp5","gubun03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_main.form.div_right.form.div_temp5.form.cmb_gubun5_4","value","ds_temp5","gubun04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_main.form.div_right.form.div_temp5.form.cmb_gubun5_5","value","ds_temp5","gubun05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_main.form.div_right.form.div_temp5.form.cmb_gubun5_6","value","ds_temp5","gubun06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_main.form.div_right.form.div_temp6.form.cmb_gubun6_1","value","ds_temp6","gubun01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_main.form.div_right.form.div_temp6.form.cmb_gubun6_2","value","ds_temp6","gubun02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_main.form.div_right.form.div_temp6.form.cmb_gubun6_3","value","ds_temp6","gubun03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_main.form.div_right.form.div_temp6.form.cmb_gubun6_4","value","ds_temp6","gubun04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_main.form.div_right.form.div_temp6.form.cmb_gubun6_5","value","ds_temp6","gubun05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_main.form.div_right.form.div_temp6.form.cmb_gubun6_6","value","ds_temp6","gubun06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item92","div_main.form.div_right.form.div_temp7.form.cmb_gubun7_1","value","ds_temp7","gubun01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item93","div_main.form.div_right.form.div_temp7.form.cmb_gubun7_2","value","ds_temp7","gubun02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","div_main.form.div_right.form.div_temp7.form.cmb_gubun7_3","value","ds_temp7","gubun03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","div_main.form.div_right.form.div_temp7.form.cmb_gubun7_4","value","ds_temp7","gubun04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","div_main.form.div_right.form.div_temp7.form.cmb_gubun7_5","value","ds_temp7","gubun05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item97","div_main.form.div_right.form.div_temp7.form.cmb_gubun7_6","value","ds_temp7","gubun06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item104","div_main.form.div_right.form.div_temp8.form.cmb_gubun8_1","value","ds_temp8","gubun01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item105","div_main.form.div_right.form.div_temp8.form.cmb_gubun8_2","value","ds_temp8","gubun02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item106","div_main.form.div_right.form.div_temp8.form.cmb_gubun8_3","value","ds_temp8","gubun03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item107","div_main.form.div_right.form.div_temp8.form.cmb_gubun8_4","value","ds_temp8","gubun04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item108","div_main.form.div_right.form.div_temp8.form.cmb_gubun8_5","value","ds_temp8","gubun05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item109","div_main.form.div_right.form.div_temp8.form.cmb_gubun8_6","value","ds_temp8","gubun06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","div_main.form.div_right.form.div_temp9.form.cmb_gubun9_1","value","ds_temp9","gubun01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","div_main.form.div_right.form.div_temp9.form.cmb_gubun9_2","value","ds_temp9","gubun02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","div_main.form.div_right.form.div_temp9.form.cmb_gubun9_3","value","ds_temp9","gubun03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","div_main.form.div_right.form.div_temp9.form.cmb_gubun9_4","value","ds_temp9","gubun04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","div_main.form.div_right.form.div_temp9.form.cmb_gubun9_5","value","ds_temp9","gubun05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","div_main.form.div_right.form.div_temp9.form.cmb_gubun9_6","value","ds_temp9","gubun06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","div_main.form.div_right.form.div_temp10.form.cmb_gubun10_1","value","ds_temp10","gubun01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","div_main.form.div_right.form.div_temp10.form.cmb_gubun10_2","value","ds_temp10","gubun02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","div_main.form.div_right.form.div_temp10.form.cmb_gubun10_3","value","ds_temp10","gubun03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","div_main.form.div_right.form.div_temp10.form.cmb_gubun10_4","value","ds_temp10","gubun04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","div_main.form.div_right.form.div_temp10.form.cmb_gubun10_5","value","ds_temp10","gubun05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","div_main.form.div_right.form.div_temp10.form.cmb_gubun10_6","value","ds_temp10","gubun06");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00702_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00702_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00702_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00702_P01
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
        //const fv_date = this.parent.DATE;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 삽입, 수정 공통 함수를 사용하기 위해 gv_curWinKey를 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00702_P01";

        	this.ds_search.setColumn(0, "SICODE", fv_sicode);

        	this.fn_search("search");
        };
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        // 저장 전 validation
        this.fn_save_pre = function()
        {
        	// 저장용 데이터셋 클리어
        	this.ds_data.clearData();
        	for(var i=1; i<=10; i++){
        		this.all["ds_tem"+i].clearData();
        	}

        	// 저장전 ds_data에 데이터 담기
        	for(var i=1; i<=10; i++){
        		//데이터가 존재하면 데이터타입 업데이트로 변경
        		var dRow = this.ds_data.addRow();

        		// 정렬저장을 위한 데이터셋 세팅
        		for(var j=1; j<=6; j++){
        			var aRow = this.all["ds_tem"+i].addRow();
         			this.all["ds_tem"+i].setColumn(aRow, "sicode", this.ds_datalist.getColumn((i-1),"sicode"));
         			this.all["ds_tem"+i].setColumn(aRow, "t_number", this.ds_datalist.getColumn((i-1),"t_number"));
         			this.all["ds_tem"+i].setColumn(aRow, "temp_id", this.ds_datalist.getColumn((i-1),"temp_id"));
        			this.all["ds_tem"+i].setColumn(aRow, "food", this.all["ds_temp"+i].getColumn(0,"food0"+j));
        			this.all["ds_tem"+i].setColumn(aRow, "gubun", this.all["ds_temp"+i].getColumn(0,"gubun0"+j));
        			var gubun = this.all["ds_temp"+i].getColumn(0,"gubun0"+j);

        			switch(gubun){
        				case "F01" : this.all["ds_tem"+i].setColumn(aRow, "gnum", 1); break;
        				case "F02" : this.all["ds_tem"+i].setColumn(aRow, "gnum", 2); break;
        				case "F03" : this.all["ds_tem"+i].setColumn(aRow, "gnum", 3); break;
        				case "F04" : this.all["ds_tem"+i].setColumn(aRow, "gnum", 4); break;
        				case "F05" : this.all["ds_tem"+i].setColumn(aRow, "gnum", 5); break;
        				case "F06" : this.all["ds_tem"+i].setColumn(aRow, "gnum", 6); break;
        				case "F07" : this.all["ds_tem"+i].setColumn(aRow, "gnum", 7); break;
        				case "F08" : this.all["ds_tem"+i].setColumn(aRow, "gnum", 8); break;
        				case "G01" : this.all["ds_tem"+i].setColumn(aRow, "gnum", 9); break;
        				case "G02" : this.all["ds_tem"+i].setColumn(aRow, "gnum", 90); break; // sring으로 구분되어 90으로 설정함
        				case "G99" : this.all["ds_tem"+i].setColumn(aRow, "gnum", 91); break; // sring
        				default : this.all["ds_tem"+i].setColumn(aRow, "gnum", 92); break; // sring
        			}
        		}

        		//구분값으로 정렬
        		this.all["ds_tem"+i].set_keystring("S:+gnum+food");

        		// 키값 세팅
        		this.ds_data.setColumn(dRow,"sicode",fv_sicode);
        		this.ds_data.setColumn(dRow,"t_number",this.all["ds_temp"+i].getColumn(0,"t_number"));
        		this.ds_data.setColumn(dRow,"temp_id",this.all["ds_temp"+i].getColumn(0,"temp_id"));

        		//저장 데이터셋에 담기
        		for(var k=1; k<=6; k++){
        			this.ds_data.setColumn(dRow,"food0"+k, this.all["ds_tem"+i].getColumn((k-1),"food"));
        			this.ds_data.setColumn(dRow,"gubun0"+k, this.all["ds_tem"+i].getColumn((k-1),"gubun"));
        		}

        		// 데이터 저장시 insert, update 구분
        		if(this.ds_datalist.getColumn(i-1,"temp_id") == this.ds_data.getColumn(i-1,"temp_id")){
        			this.ds_data.set_updatecontrol(false);
        			this.ds_data.setRowType(i-1, Dataset.ROWTYPE_UPDATE);
        			this.ds_data.set_updatecontrol(true);
        		}
        	}

        	if (!this.confirm("저장 하시겠습니까?"))
        		return false;

        	return true;
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 조회
        this.fn_search = function(flag)
        {
        	const svcId = flag;
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search input2=ds_search";
        	const outDatasets = "ds_foodlist=output1 ds_datalist=output2";
        	const argument = "method=getList "
        				   + "sqlId='DAY00702_P01.DAY00702_P01_DS_LIST_S DAY00702_P01.DAY00702_P01_DS_DATA_S '";
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
        			//
        			this.div_main.form.div_left.form.div_foodselect.form.edt_select.set_value(""); //
        			this.fn_tempsetboder(); // 테두리 제거

        			for(var i=1; i<=10; i++){// temp1~10 로우 추가
        				var tempid = this.ds_datalist.getColumn(i-1, "temp_id"); // 템플릿 번호 1~10
        				this.all["ds_temp"+i].clearData() // temp 데이터셋 초기화 후 세팅
        				this.all["ds_tem"+i].clearData() // temp 데이터셋 초기화 후 세팅 테스트

        				if(tempid == i){ // 데이터가 있으면 세팅
        					this.all["ds_temp"+i].copyRow(this.all["ds_temp"+i].addRow(), this.ds_datalist, i-1);

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
        	if (popid != "menuadd")
        	{
        		if(Sct.Util.isEmpty(strDs)) return;
        	}

        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "menuadd" :
        			nexacro.getApplication().gv_curWinKey = "DAY00702_P01"; // 팝업창 닫고 재조회 시 사용하기 위해 다시 세팅
        			this.fn_search("search");
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
        	//this.ds_search.clearData(); // 검색창 클리어
        	this.ds_search.setColumn(0, "GUBUN", "");
        	this.ds_search.setColumn(0, "NAME", "");
        	this.fn_search("search");
        };

        // 식단패널 선택 이벤트
        this.btn_select_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0, "NAME", "");
        	var objid = obj.id.substr(4);
        	switch(objid)
        	{
        		case "all" : // 전체
        			this.ds_search.setColumn(0,"GUBUN","");
        			break;
        		case "f01" : // 주식[밥,죽]
        			this.ds_search.setColumn(0,"GUBUN","F01");
        			break;
        		case "f02" : // 국,탕,찌개
        			this.ds_search.setColumn(0,"GUBUN","F02");
        			break;
        		case "f03" : // 찜,조림,볶음
        			this.ds_search.setColumn(0,"GUBUN","F03");
        			break;
        		case "f04" : // 전,부침,튀김
        			this.ds_search.setColumn(0,"GUBUN","F04");
        			break;
        		case "f05" : // 나물,무침
        			this.ds_search.setColumn(0,"GUBUN","F05");
        			break;
        		case "f06" : // 구이,젓갈
        			this.ds_search.setColumn(0,"GUBUN","F06");
        			break;
        		case "f07" : // 기타
        			this.ds_search.setColumn(0,"GUBUN","F07");
        			break;
        		case "f08" : // 김치외 장류
        			this.ds_search.setColumn(0,"GUBUN","F08");
        			break;
        		case "g01" : // 간식류
        			this.ds_search.setColumn(0,"GUBUN","G01");
        			break;
        		case "g02" : // 과일,음료
        			this.ds_search.setColumn(0,"GUBUN","G02");
        			break;
        		default :
        			break;
        	}
        	// 조회
        	this.fn_search("menu_search");
        };


        // 그리드 클릭 이벤트
        this.div_main_div_left_grd_00_oncellclick = function(obj,e)
        {
        	var selectname = this.ds_foodlist.getColumn(this.ds_foodlist.rowposition, "식단이름");
        	this.div_main.form.div_left.form.div_foodselect.form.edt_select.set_value(selectname);
        };

        // 식단검색 시 구분값 초기화
        this.div_main_div_left_div_foodsearch_edt_name_oneditclick = function(obj,e)
        {
        	this.ds_search.setColumn(0, "GUBUN", "");
        };

        // 템플릿 우선클릭 이벤트
        this.btn_temp = function(obj,e)
        {
        	var num = obj.id.substr(8); // btn_temp1 > 1 추출

        	// 클릭상태에서 한번 더 클릭시 테두리 제거
         	if(this.div_main.form.div_right.form.components["div_temp" + num].border.length > 0) {
        		this.div_main.form.div_right.form.components["div_temp" + num].set_border("");
        		this.div_main.form.div_right.form.components["div_temp" + num].form.components["btn_temp" + num].set_background("#ffffff");
        		return false;
        	}

        	switch(obj.id){
        		case "btn_temp" + num :
        			this.fn_tempsetboder(); // 테두리 제거
        			this.div_main.form.div_right.form.components["div_temp" + num].set_border("2px solid #a3c7f0");
        			//this.div_main.form.div_right.form.div_temp1.form.btn_temp1.set_background("#a3c7f0")
        			this.div_main.form.div_right.form.components["div_temp" + num].form.components["btn_temp" + num].set_background("#a3c7f0");
        			break;
        	}
        };

        // 템플릿 테두리, 우선클릭 백그라운드 제거
        this.fn_tempsetboder = function(){
        	for(var i=1; i<11; i++){
        		this.div_main.form.div_right.form.components["div_temp" + i].set_border("");
        		this.div_main.form.div_right.form.components["div_temp" + i].form.components["btn_temp" + i].set_background("#ffffff");
        	}
        }

        // 그리드 더블클릭
        this.div_main_div_left_grd_foodlist_oncelldblclick = function(obj,e)
        {

        	// 선택된 템플릿 div id 찾기
        	for(var i=1; i<11; i++){
        		// 선택된 템플릿 border 설정값으로 찾기
        		var blength = this.div_main.form.div_right.form.components["div_temp" + i].border.length;
        		if(blength > 0){
        			var comp = "div_temp";
        			var num = i;
        		}
        	}
        	var compent = comp + num; // div_temp1
        	switch(compent){
        		case "div_temp" + num :
        			//this.all["ds_temp"+num].setColumn(0, "temp_id", num); // temp_id 세팅
        			for(var i=1; i<=6; i++){ // food01 ~ food06 데이터 넣기
        				// 빈값 row에 데이터 입력
        				if(Sct.Util.isEmpty(this.all["ds_temp"+num].getColumn(0,"food0"+i))){
        					// 동일 식단명 중복등록 안되게
        					for(var y=1; y<=6; y++){
        						var fname = this.ds_foodlist.getColumn(this.ds_foodlist.rowposition, "식단이름"); // 선택식단
        						var sname = this.all["ds_temp"+num].getColumn(0,"food0"+y); // 템플릿 리스트 식단
        						if(fname == sname){ //
        							return false;
        						}
        					}
        					this.all["ds_temp"+num].setColumn(0,"food0"+i,this.ds_foodlist.getColumn(this.ds_foodlist.rowposition, "식단이름"));
        					this.all["ds_temp"+num].setColumn(0,"gubun0"+i,this.ds_foodlist.getColumn(this.ds_foodlist.rowposition, "식단구분"));
        					//trace("식단구분 : "+this.ds_foodlist.getColumn(this.ds_foodlist.rowposition, "식단구분"));
        					return false;
        				}
        			}
        		break;
        	}

        };

        // 템플릿 지움 이벤트
        this.fn_del = function(obj,e)
        {
        	var num = "";
        	if(obj.id.substr(0,9) == "btn_del10"){
        		num = obj.id.substr(7,2);
        	}else{
        		num = obj.id.substr(7,1); // btn_del1_1 > 1 추출
        	}
        	var objid = obj.id.substr(7); // btn_del1_1 > 1_1 추출
        	this.div_main.form.div_right.form.components["div_temp" + num].form.components["edt_name" + objid].set_value(""); // 이름 빈값처리
        	this.div_main.form.div_right.form.components["div_temp" + num].form.components["cmb_gubun" + objid].set_value("   "); // 구분 빈값처리(3자리 공백)

        };

        // 식단메뉴추가 팝업
        this.div_main_div_left_btn_menuadd_onclick = function(obj,e)
        {
        	const param = {
        				SICODE : fv_sicode
        		};
        	Sct.popup(this, "menuadd", 450, 400, "", param, "DAY_POP::DAY00702_P02.xfdl", "fn_popCallback");
        };

        // 검색창
        this.div_main_div_left_div_foodsearch_edt_name_onkeyup = function(obj,e)
        {
        	// 엔터키 입력시 조회되게
        	if(e.keycode == "13"){
        		this.fn_search("menu_search");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_func.form.btn_refresh.addEventHandler("onclick",this.btn_refresh_onclick,this);
            this.div_main.form.div_left.form.div_foodsearch.form.edt_name.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_left.form.div_foodsearch.form.edt_name.addEventHandler("onkeyup",this.div_main_div_left_div_foodsearch_edt_name_onkeyup,this);
            this.div_main.form.div_left.form.div_foodsearch.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_main.form.div_left.form.grd_foodlist.addEventHandler("oncellclick",this.div_main_div_left_grd_00_oncellclick,this);
            this.div_main.form.div_left.form.grd_foodlist.addEventHandler("oncelldblclick",this.div_main_div_left_grd_foodlist_oncelldblclick,this);
            this.div_main.form.div_left.form.btn_menuadd.addEventHandler("onclick",this.div_main_div_left_btn_menuadd_onclick,this);
            this.div_main.form.div_left.form.div_btn.form.btn_g01.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_main.form.div_left.form.div_btn.form.btn_f07.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_main.form.div_left.form.div_btn.form.btn_f05.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_main.form.div_left.form.div_btn.form.btn_f03.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_main.form.div_left.form.div_btn.form.btn_f01.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_main.form.div_left.form.div_btn.form.btn_f08.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_main.form.div_left.form.div_btn.form.btn_f04.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_main.form.div_left.form.div_btn.form.btn_f06.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_main.form.div_left.form.div_btn.form.btn_f02.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_main.form.div_left.form.div_btn.form.btn_all.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_main.form.div_left.form.div_btn.form.btn_g02.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_main.form.div_right.form.div_temp1.form.edt_num1_1.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp1.form.btn_del1_1.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp1.form.edt_num1_2.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp1.form.btn_del1_2.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp1.form.edt_num1_3.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp1.form.btn_del1_3.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp1.form.edt_num1_4.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp1.form.edt_num1_5.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp1.form.edt_num1_6.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp1.form.btn_del1_6.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp1.form.btn_del1_5.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp1.form.btn_del1_4.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp1.form.btn_temp1.addEventHandler("onclick",this.btn_temp,this);
            this.div_main.form.div_right.form.div_temp2.form.edt_num2_1.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp2.form.btn_del2_1.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp2.form.edt_num2_2.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp2.form.btn_del2_2.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp2.form.edt_num2_3.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp2.form.btn_del2_3.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp2.form.edt_num2_4.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp2.form.edt_num2_5.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp2.form.edt_num2_6.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp2.form.btn_del2_6.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp2.form.btn_del2_5.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp2.form.btn_del2_4.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp2.form.btn_temp2.addEventHandler("onclick",this.btn_temp,this);
            this.div_main.form.div_right.form.div_temp3.form.edt_num3_1.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp3.form.btn_del3_1.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp3.form.edt_num3_2.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp3.form.btn_del3_2.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp3.form.edt_num3_3.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp3.form.btn_del3_3.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp3.form.edt_num3_4.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp3.form.edt_num3_5.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp3.form.edt_num3_6.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp3.form.btn_del3_6.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp3.form.btn_del3_5.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp3.form.btn_del3_4.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp3.form.btn_temp3.addEventHandler("onclick",this.btn_temp,this);
            this.div_main.form.div_right.form.div_temp4.form.edt_num4_1.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp4.form.btn_del4_1.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp4.form.edt_num4_2.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp4.form.btn_del4_2.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp4.form.edt_num4_3.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp4.form.btn_del4_3.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp4.form.edt_num4_4.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp4.form.edt_num4_5.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp4.form.edt_num4_6.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp4.form.btn_del4_6.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp4.form.btn_del4_5.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp4.form.btn_del4_4.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp4.form.btn_temp4.addEventHandler("onclick",this.btn_temp,this);
            this.div_main.form.div_right.form.div_temp5.form.edt_num5_1.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp5.form.btn_del5_1.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp5.form.edt_num5_2.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp5.form.btn_del5_2.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp5.form.edt_num5_3.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp5.form.btn_del5_3.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp5.form.edt_num5_4.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp5.form.edt_num5_5.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp5.form.edt_num5_6.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp5.form.btn_del5_6.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp5.form.btn_del5_5.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp5.form.btn_del5_4.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp5.form.btn_temp5.addEventHandler("onclick",this.btn_temp,this);
            this.div_main.form.div_right.form.div_temp6.form.edt_num6_1.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp6.form.btn_del6_1.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp6.form.edt_num6_2.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp6.form.btn_del6_2.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp6.form.edt_num6_3.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp6.form.btn_del6_3.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp6.form.edt_num6_4.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp6.form.edt_num6_5.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp6.form.edt_num6_6.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp6.form.btn_del6_6.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp6.form.btn_del6_5.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp6.form.btn_del6_4.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp6.form.btn_temp6.addEventHandler("onclick",this.btn_temp,this);
            this.div_main.form.div_right.form.div_temp7.form.edt_num7_1.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp7.form.btn_del7_1.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp7.form.edt_num7_2.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp7.form.btn_del7_2.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp7.form.edt_num7_3.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp7.form.btn_del7_3.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp7.form.edt_num7_4.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp7.form.edt_num7_5.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp7.form.edt_num7_6.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp7.form.btn_del7_6.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp7.form.btn_del7_5.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp7.form.btn_del7_4.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp7.form.btn_temp7.addEventHandler("onclick",this.btn_temp,this);
            this.div_main.form.div_right.form.div_temp8.form.edt_num8_1.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp8.form.btn_del8_1.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp8.form.edt_num8_2.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp8.form.btn_del8_2.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp8.form.edt_num8_3.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp8.form.btn_del8_3.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp8.form.edt_num8_4.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp8.form.edt_num8_5.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp8.form.edt_num8_6.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp8.form.btn_del8_6.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp8.form.btn_del8_5.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp8.form.btn_del8_4.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp8.form.btn_temp8.addEventHandler("onclick",this.btn_temp,this);
            this.div_main.form.div_right.form.div_temp9.form.edt_num9_1.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp9.form.btn_del9_1.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp9.form.edt_num9_2.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp9.form.btn_del9_2.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp9.form.edt_num9_3.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp9.form.btn_del9_3.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp9.form.edt_num9_4.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp9.form.edt_num9_5.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp9.form.edt_num9_6.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp9.form.btn_del9_6.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp9.form.btn_del9_5.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp9.form.btn_del9_4.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp9.form.btn_temp9.addEventHandler("onclick",this.btn_temp,this);
            this.div_main.form.div_right.form.div_temp10.form.edt_num10_1.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp10.form.btn_del10_1.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp10.form.edt_num10_2.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp10.form.btn_del10_2.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp10.form.edt_num10_3.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp10.form.btn_del10_3.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp10.form.edt_num10_4.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp10.form.edt_num10_5.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp10.form.edt_num10_6.addEventHandler("oneditclick",this.div_main_div_left_div_foodsearch_edt_name_oneditclick,this);
            this.div_main.form.div_right.form.div_temp10.form.btn_del10_6.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp10.form.btn_del10_5.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp10.form.btn_del10_4.addEventHandler("onclick",this.fn_del,this);
            this.div_main.form.div_right.form.div_temp10.form.btn_temp10.addEventHandler("onclick",this.btn_temp,this);
        };
        this.loadIncludeScript("DAY00702_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
