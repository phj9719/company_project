(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testCMCODE");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sex", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_locale", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sex_all", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_locale_all", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","359","188","321","204",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_sex");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"80\"/><Col size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" text=\"CMCD\"/><Cell col=\"1\" text=\"CMNM\"/></Band><Band id=\"body\"><Cell col=\"0\" text=\"bind:CMCD\"/><Cell col=\"1\" text=\"bind:CMNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","359","65","133","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">LOCALE</Col><Col id=\"datacolumn\">LOCALE</Col></Row><Row><Col id=\"codecolumn\">SEX</Col><Col id=\"datacolumn\">SEX</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","712","65","83","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("가져오기");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","695","188","321","204",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_locale");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"80\"/><Col size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" text=\"CMCD\"/><Cell col=\"1\" text=\"CMNM\"/></Band><Band id=\"body\"><Cell col=\"0\" text=\"bind:CMCD\"/><Cell col=\"1\" text=\"bind:CMNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","585","65","111","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Static00","510","65","66","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("사용여부");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","813","65","83","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("둘다가져오기");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","356","427","321","204",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_locale_all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"80\"/><Col size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" text=\"CMCD\"/><Cell col=\"1\" text=\"CMNM\"/></Band><Band id=\"body\"><Cell col=\"0\" text=\"bind:CMCD\"/><Cell col=\"1\" text=\"bind:CMNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03","698","428","321","204",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_sex_all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"80\"/><Col size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" text=\"CMCD\"/><Cell col=\"1\" text=\"CMNM\"/></Band><Band id=\"body\"><Cell col=\"0\" text=\"bind:CMCD\"/><Cell col=\"1\" text=\"bind:CMNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","67","148","133","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo01_innerdataset = new nexacro.NormalDataset("Combo01_innerdataset", obj);
            Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">30</Col><Col id=\"datacolumn\">30</Col></Row><Row><Col id=\"codecolumn\">40</Col><Col id=\"datacolumn\">40</Col></Row></Rows>");
            obj.set_innerdataset(Combo01_innerdataset);
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","7","148","82","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("갯수 설정");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","220","148","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("페이징가져오기~");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid04","7","187","321","150",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("ds_locale");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"80\"/><Col size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" text=\"CMCD\"/><Cell col=\"1\" text=\"CMNM\"/></Band><Band id=\"body\"><Cell col=\"0\" text=\"bind:CMCD\"/><Cell col=\"1\" text=\"bind:CMNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","51","31","115","42",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Button03");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("testCMCODE.xfdl", function() {

        this.Button00_onclick = function (obj, e)
        {
        	if (this.Combo00.value == null || this.Radio00.value == null)
        	{
        		alert("선택되지 않은 검색조건이 있습니다");
        		return;
        	}
        	var comboval = this.Combo00.value;
        	var useyn = this.Radio00.value;
        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_sex=output1 ds_locale=output2";
        	var argument = "method=getList "
        		 + "sqlId=getCMCODE "
        		 + "GRP_CD=" + comboval + " "
        		 + "USEYN=" + useyn + " ";
        	var callbackFunc = "";
        	this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };




        this.Button01_onclick_kty = function (obj, e)
        {
        	var svcId = "save";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_sex=output1 ds_locale=output2 ds_locale_all=output3 ds_sex_all=output4";
        	var argument = Sct.Util.setParam("method", "getcombo");
        	argument += Sct.Util.setParam("sqlId", "LOCALE SEX LOCALE_ALL SEX_ALL");
        	// "method=getcombo "
        	// + "sqlId="+nexacro.wrapQuote("LOCALE SEX LOCALE_ALL SEX_ALL"); //sql1, sql2
        	var callbackFunc = "";
        	this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };


        this.Button01_onclick = function (obj, e)
        {
        	this.pageing();
        };
        this.pageing = function (page)
        {
        	if (page == null || page == "")
        	{
        		page = 1;
        		this.Grid04.set_tooltiptext(1);
        	}
        	if (this.Combo01.value == null)
        	{
        		alert("갯수를 선택해야 합니다.");
        		return;
        	}
        	else
        	{
        		var size = this.Combo01.value;
        		alert(size);
        		var svcId = "search";
        		var params = "/commonController.do";
        		var inDatasets = "";
        		var outDatasets = "ds_locale=output1";
        		var argument = "method=getList "
        			 + "sqlId=getCMCODE_con "
        			 + "page=" + page + " "
        			 + "size=" + size + " ";
        		var callbackFunc = "";
        		this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        	}
        };

        this.Grid04_onvscroll = function (obj, e)
        {
        	if (e.pos == this.Grid04.vscrollbar.max)
        	{
        		var page = this.Grid04.tooltiptext + 1;
        		alert(page);
        		this.pageing();
        	}
        };

        this.Button03_onclick = function (obj, e)
        {
        	var pass = Sct.bcrypt.hashSync("test", 10);
        	alert(pass);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button01_onclick_kty,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Grid04.addEventHandler("onvscroll",this.Grid04_onvscroll,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
        };
        this.loadIncludeScript("testCMCODE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
