(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test_SctJs");
            this.set_titletext("New Form");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">B</Col><Col id=\"Column2\">rk</Col><Col id=\"Column3\">thd</Col><Col id=\"Column4\">가</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">C</Col><Col id=\"Column2\">sk</Col><Col id=\"Column3\">rma</Col><Col id=\"Column4\">나</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">F</Col><Col id=\"Column2\">ek</Col><Col id=\"Column3\">wns</Col><Col id=\"Column4\">다</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">D</Col><Col id=\"Column2\">fk</Col><Col id=\"Column3\">ghd</Col><Col id=\"Column4\">라</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">A</Col><Col id=\"Column2\">ak</Col><Col id=\"Column3\">rlf</Col><Col id=\"Column4\">마</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">H</Col><Col id=\"Column2\">qk</Col><Col id=\"Column3\">ehd</Col><Col id=\"Column4\">바</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">G</Col><Col id=\"Column2\">tk</Col><Col id=\"Column3\">rnr</Col><Col id=\"Column4\">사</Col><Col id=\"CHK\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">B</Col><Col id=\"Column2\">rk</Col><Col id=\"Column3\">thd</Col><Col id=\"Column4\">가</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">C</Col><Col id=\"Column2\">sk</Col><Col id=\"Column3\">rma</Col><Col id=\"Column4\">나</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">F</Col><Col id=\"Column2\">ek</Col><Col id=\"Column3\">wns</Col><Col id=\"Column4\">다</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">D</Col><Col id=\"Column2\">fk</Col><Col id=\"Column3\">ghd</Col><Col id=\"Column4\">라</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">A</Col><Col id=\"Column2\">ak</Col><Col id=\"Column3\">rlf</Col><Col id=\"Column4\">마</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">H</Col><Col id=\"Column2\">qk</Col><Col id=\"Column3\">ehd</Col><Col id=\"Column4\">바</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">G</Col><Col id=\"Column2\">tk</Col><Col id=\"Column3\">rnr</Col><Col id=\"Column4\">사</Col><Col id=\"CHK\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","17","16","127","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","168","136","543","313",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"38\"/><Column size=\"29\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"컬럼0\"/><Cell col=\"3\" text=\"컬럼1\"/><Cell col=\"4\" text=\"컬럼2\"/><Cell col=\"5\" text=\"컬럼3\"/><Cell col=\"6\" text=\"컬럼4\"/><Cell col=\"7\" text=\"컬럼5\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:Column0\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:Column1\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:Column2\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:Column3\"/><Cell col=\"6\" edittype=\"normal\" text=\"bind:Column4\"/><Cell col=\"7\" edittype=\"normal\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenu00","771","79","220","381",null,null,null,null,null,null,this);
            obj.set_innerdataset("gds_gridMenu");
            obj.set_captioncolumn("TEXT");
            obj.set_idcolumn("SEQ");
            obj.set_levelcolumn("LEVEL");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","640","106","31","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("+");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","169","107","75","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("수정됐나?");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","674","106","31","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","152","21","163","38",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_value("null");
            obj.set_dateformat("yyyy-MM-dd ddd");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","169","457","458","251",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("Dataset01");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","598","106","39","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("XLS");
            this.addChild(obj.name, obj);

            obj = new Button("btn_importXLS","43","459","119","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Import XLS");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_useHeadInfo","43","488","119","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Head 정보 사용");
            this.addChild(obj.name, obj);

            obj = new Button("Button05",null,null,"89","80","303","1.04%",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("~");
            obj.set_borderRadius("50px");
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
        this.registerScript("test_SctJs.xfdl", function() {

        this.test_SctJs_onload = function (obj, e)
        {
        	Sct.onLoad(obj, e);
        };

        this.Button00_onclick = function (obj, e)
        {
        	this.PopupMenu00.trackPopup(e.clientx, e.clienty);
        };

        this.PopupMenu00_onmenuclick = function (obj, e)
        {
        };

        this.Grid00_onrbuttondown = function (obj, e)
        {
        };

        this.Button01_onclick = function (obj, e)
        {
        	this.Dataset00.addRow();
        };

        this.Button02_onclick = function (obj, e)
        {
        	trace(Sct.Grid.isUpdate(this.Grid00));
        };

        this.Button03_onclick = function (obj, e)
        {
        	Sct.Grid.deleteRow(this.Dataset00);
        };

        this.Button04_onclick = function (obj, e)
        {
        	var strFileName = "엑셀 익스포트";
        	Sct.Grid.exportExcel(this, this.Grid00, strFileName);
        };

        this.btn_importXLS_onclick = function (obj, e)
        {
        	var arg = {
        		targetDs : this.Dataset01,
        		headSet : this.chk_useHeadInfo.value,
        		callBack : function ()
        		{
        			this.Grid01.createFormat();
        		}
        	};

        	Sct.Grid.importExcel(this, arg);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.test_SctJs_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Grid00.addEventHandler("onrbuttondown",this.Grid00_onrbuttondown,this);
            this.PopupMenu00.addEventHandler("onmenuclick",this.PopupMenu00_onmenuclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Grid01.addEventHandler("onrbuttondown",this.Grid00_onrbuttondown,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.btn_importXLS.addEventHandler("onclick",this.btn_importXLS_onclick,this);
        };
        this.loadIncludeScript("test_SctJs.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
