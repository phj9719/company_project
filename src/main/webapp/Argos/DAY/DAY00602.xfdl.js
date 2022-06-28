(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00602");
            this.set_titletext("6-02 월간 프로그램 제공현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"yyyymm\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"DATE\" size=\"256\"/><Column id=\"date_to\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_03", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_04", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_05", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_06", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_07", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_08", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_09", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_10", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_11", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_12", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_13", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_14", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_15", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_16", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_17", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_18", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_19", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_20", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_21", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_22", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_23", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_24", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_25", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_26", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_27", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_28", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_29", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_30", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_31", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_32", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_33", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_34", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_35", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_36", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_37", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"pr영역\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"운영시간\" type=\"STRING\" size=\"256\"/><Column id=\"주제\" type=\"STRING\" size=\"256\"/><Column id=\"prg_name\" type=\"STRING\" size=\"256\"/><Column id=\"il_number\" type=\"STRING\" size=\"256\"/><Column id=\"grp_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","550",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","0",null,null,"0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"영역\"/><Cell col=\"1\" text=\"운영일\"/><Cell col=\"2\" text=\"운영시간\"/><Cell col=\"3\" text=\"프로그램명\"/><Cell col=\"4\" text=\"주제\"/><Cell col=\"5\" text=\"조회\"/></Band><Band id=\"body\"><Cell text=\"bind:pr영역\"/><Cell col=\"1\" text=\"bind:운영일\" displaytype=\"date\" expandchar=\"dot\"/><Cell col=\"2\" text=\"bind:운영시간\"/><Cell col=\"3\" text=\"bind:prg_name\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:주제\" textAlign=\"left\"/><Cell col=\"5\" expandshow=\"show\" expandsize=\"70\" expandimage=\"url('theme://images/ico_search.png')\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","550","0","1330",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_01","20","19","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_01","20","0","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffeae0");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_08","20","143","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_08");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_08","20","124","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("3");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffeae0");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_15","20","267","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("4");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_15");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_15","20","248","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffeae0");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_22","20","392","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("6");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_22");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_22","20","373","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("7");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffeae0");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_29","20","517","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("8");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_29");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_29","20","498","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("9");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffeae0");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_36","20","642","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("10");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_36");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_36","20","623","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("11");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffeae0");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_02","205","19","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("12");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_02","205","0","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_09","205","143","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("14");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_09");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_09","205","124","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("15");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_16","205","267","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("16");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_16");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_16","205","248","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("17");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_23","205","392","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("18");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_23");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_23","205","373","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("19");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_30","205","517","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("20");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_30");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_30","205","498","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("21");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_37","205","642","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("22");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_37");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_37","205","623","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("23");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_03","390","19","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("24");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_03");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_03","390","0","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("25");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_10","390","143","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("26");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_10");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_10","390","124","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("27");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_17","390","267","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("28");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_17");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_17","390","248","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("29");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_24","390","392","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("30");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_24");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_24","390","373","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("31");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_31","390","517","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("32");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_31");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_31","390","498","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("33");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_04","575","19","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("34");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_04");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_04","575","0","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("35");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_11","575","143","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("36");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_11");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_11","575","124","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("37");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_18","575","267","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("38");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_18");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_18","575","248","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("39");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_25","575","392","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("40");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_25");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_25","575","373","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("41");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_32","575","517","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("42");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_32");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_32","575","498","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("43");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_05","760","19","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("44");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_05");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_05","760","0","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("45");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_12","760","143","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("46");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_12");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_12","760","124","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("47");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_19","760","267","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("48");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_19");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_19","760","248","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("49");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_26","760","392","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("50");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_26");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_26","760","373","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("51");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_33","760","517","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("52");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_33");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_33","760","498","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("53");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_06","945","19","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("54");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_06");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_06","945","0","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("55");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_13","945","143","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("56");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_13");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_13","945","124","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("57");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_20","945","267","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("58");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_20");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_20","945","248","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("59");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_27","945","392","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("60");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_27");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_27","945","373","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("61");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_34","945","517","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("62");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_34");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_34","945","498","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("63");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_07","1130","19","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("64");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_07");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_07","1130","0","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("65");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#e8f9ff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_14","1130","143","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("66");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_14");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_14","1130","124","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("67");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#e8f9ff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_21","1130","267","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("68");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_21");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_21","1130","248","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("69");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#e8f9ff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_28","1130","392","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("70");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_28");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_28","1130","373","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("71");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#e8f9ff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_35","1130","517","185","105",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("72");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_35");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"운영시간\"/><Cell col=\"1\" text=\"프로그램\"/></Band><Band id=\"body\"><Cell text=\"bind:운영시간\"/><Cell col=\"1\" text=\"bind:prg_name\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_35","1130","498","185","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("73");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_background("#e8f9ff");
            obj.set_text("test");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","550","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_yyyymm","0","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_yyyyMM");
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            obj.set_tooltiptext("날짜");
            obj.set_cssclass("essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_yyyymm_pic","89","7","25","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_yyyyMM");
            obj.set_taborder("1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_no","130","8","85","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("월간제공현황 :");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_no_value","215","8","80","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","344","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","450","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0 0");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","550","0","1330","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_sign","903","7","65","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("결재란");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_visible("false");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report1","975","7","195","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("월간 프로그램 제공리스트");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report2","1175","7","155","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("프로그램 제공현황");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","20","7","250","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_text("월간 건강개선프로그램 제공현황");
            obj.set_cssclass("lb01");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_search.form.cal_yyyymm","value","ds_search","yyyymm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_search.form.cal_yyyymm_pic","value","ds_search","yyyymm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.sta_no_value","text","ds_data","기록번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.cal_date_from","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cal_date_to","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00602.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00602.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00602.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00602
         * 화면명   	: 6-02 월간 프로그램 제공현황
         * 화면설명 	:
         * 작성일   	: 2022-06-23
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
        this.fileGroupId = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	this.initGrid(this.fv_currentGrid);

        	// 현재 년도 구하기
        	const date = new Date();
        	let yyyymm = date.getFullYear() + String(Number(date.getMonth()) + 1).padStart(2,"0")

        	// 검색조건 세팅
        	this.div_search.form.cal_yyyymm.set_value(yyyymm);
        	this.ds_search.setColumn(0, "sicode", fv_sicode);

        	// 오픈시 조회
        	this.fn_search();
        };

        // 그리드 css 적용
        this.initGrid = function(grid)
        {
        	const prIdx = grid.getBindCellIndex("body", "pr영역");
        	const prgNameIdx = grid.getBindCellIndex("body", "prg_name");

        	const commonCss = "expr:dataset.getColumn(currow, 'grp_color') == 'lightblue' ? 'cellBMan' : dataset.getColumn(currow, 'grp_color') == 'yellow' ? 'cellBWoman' : ''";

        	grid.setCellProperty("body", prIdx, "cssclass", commonCss);
        	grid.setCellProperty("body", prgNameIdx, "cssclass", commonCss);

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

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //조회
        this.fn_search = function (svcIdName)
        {
        	//validation
        	if (!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00602.DAY00602_DS_LIST_S' ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };
        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0){
        		if (strSvcID == "search"){
        			this.makeCalender(this.ds_search.getColumn(0,"yyyymm"));

        			this.div_search.form.sta_no_value.set_text(this.ds_list.rowcount + "회");

        			for(let i = 0; i<37; i++){
        				let clear_number = String(i+1).padStart(2, "0");
        				this.all["ds_"+clear_number].clearData();
        			}

        			for(let i = 0; i<this.ds_list.rowcount; i++){
        				let date = this.ds_list.getColumn(i, "운영일");
        				let date_number = String(date.getDate()).padStart(2, "0");
        				let firstDay = new Date(date.getFullYear(), date.getMonth(), "1").getDay()
        				let d_number = String(Number(date_number) + Number(firstDay)).padStart(2, "0");
        				let ds = "ds_"
        				let aRow = this.all[ds+d_number].addRow();
        				this.all[ds+d_number].copyRow(aRow, this.ds_list, i);
        			}

        		}
        	}else{
        		this.alert(strErrorMsg);
        	}
        };
        /***********************************************************************
         * User Functions
         ***********************************************************************/
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

        	this.div_cont.form.div_right.form.div_main.form.imv_pic.set_image(imgUrl);
        };
        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "" :
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 조회 버튼
        this.fn_searchBtn = function ()
        {
        	this.fn_search();
        };



        this.div_func_btn_report1_onclick = function(obj,e)
        {
        	return;

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00212_R01.xfdl";
        	const popupName = "간호사정서식";

        	params = {
        		sicode : this.ds_search.getColumn(0, "sicode")
        	,   sign : "1"

        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        this.div_func_btn_report2_onclick = function(obj,e)
        {
        	return;

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00212_R02.xfdl";
        	const popupName = "건강평가서식";

        	params = {
        		sicode : this.ds_search.getColumn(0, "sicode")
        	,   sign : "1"

        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };





        this.makeCalender = function(yyyymmdd){

        	const divRight = this.div_cont.form.div_right
        	let edit = "edt_"
        	let grd = "grd_"

        	for(let i = 0; i<37; i++){
        		let d_number = String(i+1).padStart(2, "0");
        		divRight.form.all[edit+String(d_number)].set_visible(true);
        		divRight.form.all[grd+String(d_number)].set_visible(true);
        	}

        	let weekdays = ["일", "월", "화", "수", "목", "금", "토", "일"];
        	let firstDate = this.monthDate(yyyymmdd);
        	let lastDate = new Date(firstDate.getFullYear(),(Number(firstDate.getMonth())+1),"0");
        	let calLastDate = new Date(firstDate.getFullYear(),(Number(firstDate.getMonth())+1),"1");

        	let weekday = firstDate.getDay()

        	let diff = calLastDate.getTime() - firstDate.getTime();
        	let days = diff/(1000 * 60 * 60 * 24)

        	let lastday = (Number(days) + Number(weekday));
        	for(let i = 0; i<37; i++){
        		let d_number = String(i+1).padStart(2, "0");
        		if(i < weekday){
        			divRight.form.all[edit+String(d_number)].set_visible(false);
        			divRight.form.all[grd+String(d_number)].set_visible(false);
        		}else if(weekday <= i && i < lastday){
        			let thisDay = new Date(firstDate.getFullYear(), firstDate.getMonth(), d_number - weekday);
        			let thisDayDot = thisDay.getFullYear() + "." + String(Number(thisDay.getMonth())+1).padStart(2, "0") + "." + String(thisDay.getDate()).padStart(2, "0") + " (" + weekdays[thisDay.getDay()] + ")";
        			divRight.form.all[edit+String(d_number)].set_value(thisDayDot)
        		}else{
        			divRight.form.all[edit+String(d_number)].set_visible(false);
        			divRight.form.all[grd+String(d_number)].set_visible(false);
        		}
        	}
        }

        //YYYYMM
        this.monthDate = function(yyyymm){

        	const year = yyyymm.substr(0,4);
        	const month = yyyymm.substr(4,4);
        	const day = "01";

        	return new Date(year, month-1, day);
        }


        this.div_search_cal_yyyymm_pic_onchanged = function(obj,e)
        {
        	this.fn_search();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_01.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_08.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_15.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_22.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_29.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_36.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_02.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_09.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_16.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_23.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_30.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_37.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_03.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_10.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_17.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_24.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_31.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_04.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_11.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_18.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_25.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_32.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_05.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_12.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_19.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_26.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_33.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_06.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_13.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_20.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_27.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_34.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_07.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_14.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_21.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_28.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_35.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_search.form.cal_yyyymm_pic.addEventHandler("onchanged",this.div_search_cal_yyyymm_pic_onchanged,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.div_func_btn_report2_onclick,this);
            this.div_func.form.btn_report2.addEventHandler("onclick",this.div_func_btn_report3_onclick,this);
        };
        this.loadIncludeScript("DAY00602.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
