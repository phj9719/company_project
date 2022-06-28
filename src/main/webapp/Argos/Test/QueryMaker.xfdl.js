(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QueryMaker");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"TNMP\" type=\"STRING\" size=\"256\"/><Column id=\"TNML\" type=\"STRING\" size=\"256\"/><Column id=\"CNMP\" type=\"STRING\" size=\"256\"/><Column id=\"CNML\" type=\"STRING\" size=\"256\"/><Column id=\"KEYTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NOT\" type=\"STRING\" size=\"256\"/><Column id=\"DTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DATALEN\" type=\"STRING\" size=\"256\"/><Column id=\"SOSU\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_keytype", this);
            obj._setContents("<ColumnInfo><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TYPE\">PK</Col></Row><Row><Col id=\"TYPE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_notyn", this);
            obj._setContents("<ColumnInfo><Column id=\"NOT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NOT\">NOT</Col></Row><Row><Col id=\"NOT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_datatype", this);
            obj._setContents("<ColumnInfo><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TYPE\">VARCHAR2</Col></Row><Row><Col id=\"TYPE\">NUMBER</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","6","38","1011","532",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_selecttype("cell");
            obj.getSetter("onchar").set("Grid00_onchar");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"92\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"104\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"물리테이블이름\"/><Cell col=\"2\" text=\"화면이름\"/><Cell col=\"3\" text=\"컬럼이름\"/><Cell col=\"4\" text=\"컬럼설명\"/><Cell col=\"5\" text=\"PK여부\"/><Cell col=\"6\" text=\"NULL여부\"/><Cell col=\"7\" text=\"데이터타입\"/><Cell col=\"8\" text=\"데이터길이\"/><Cell col=\"9\" text=\"소수\"/><Cell col=\"10\" text=\"비고\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:NO\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:TNMP\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:TNML\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:CNMP\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:CNML\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:KEYTYPE\" combodataset=\"ds_keytype\" combocodecol=\"TYPE\" combodatacol=\"TYPE\" combodisplayrowcount=\"0\" combodisplay=\"display\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:NOT\" combodataset=\"ds_notyn\" combocodecol=\"NOT\" combodatacol=\"NOT\" combodisplayrowcount=\"0\" combodisplay=\"display\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DTYPE\" combodataset=\"ds_datatype\" combocodecol=\"TYPE\" combodatacol=\"TYPE\" combodisplayrowcount=\"-1\" combodisplay=\"display\" combotype=\"search\"/><Cell col=\"8\" edittype=\"normal\" text=\"bind:DATALEN\"/><Cell col=\"9\" edittype=\"normal\" text=\"bind:SOSU\"/><Cell col=\"10\" edittype=\"normal\" text=\"bind:REMARK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","768","6","118","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","901","6","39","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","960","6","39","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("생성");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","6","580","1570","172",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_wordWrap("char");
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
        this.registerScript("QueryMaker.xfdl", function() {

        this.Button00_onclick = function (obj, e)
        {
        	var cnt = this.Edit00.value;
        	trace(cnt);
        	for (var i = 0; i < cnt; i++)
        	{
        		trace(i);
        		var idx = this.ds_list.addRow();
        		this.ds_list.setColumn(idx, "NO", i + 1);
        		this.ds_list.setColumn(idx, "DTYPE", "VARCHAR2");
        	}
        };

        this.Button01_onclick = function (obj, e)
        {
        	this.TextArea00.set_value("");
        	var list = new Array();
        	for (var i = 0; i < this.ds_list.rowcount; i++)
        	{
        		trace("for " + i);
        		var no = this.ds_list.getColumn(i, "NO");
        		var tnmp = this.ds_list.getColumn(i, "TNMP");
        		var tnml = this.ds_list.getColumn(i, "TNML");
        		var cnmp = this.ds_list.getColumn(i, "CNMP");
        		var cnml = this.ds_list.getColumn(i, "CNML");
        		var keytype = this.ds_list.getColumn(i, "KEYTYPE");
        		var not = this.ds_list.getColumn(i, "NOT");
        		var dtype = this.ds_list.getColumn(i, "DTYPE");
        		var dlen = this.ds_list.getColumn(i, "DATALEN");
        		var sosu = this.ds_list.getColumn(i, "SOSU");
        		var remark = this.ds_list.getColumn(i, "REMARK");
        		if (keytype == null)
        		{
        			keytype = "";
        		}
        		if (not == null)
        		{
        			not = "";
        		}
        		if (sosu == null)
        		{
        			sosu = "";
        		}
        		if (remark == null)
        		{
        			remark = "";
        		}



        		var s = "INSERT INTO CM_MAKE_TABLE (NO,TABLE_NM_P,TABLE_NM_L,COLUMN_NM_P,COLUMN_NM_L,KEY_TYPE,NOT_YN,DATA_TYPE,DATA_LEN,DATA_SOSU,REMARK1) VALUES("
        			 + "'" + no + "','" + tnmp + "','" + tnml + "','" + cnmp + "','" + cnml + "','" + keytype + "','" + not + "','" + dtype + "','" + dlen + "','" + sosu + "','" + remark + "'); \n";
        		list.push(s);
        	}
        	for (var i = 0; i < list.length + 1; i++)
        	{
        		trace(list[i]);
        	}
        	trace("len " + list.length);
        	for (var i = 0; i < list.length + 1; i++)
        	{
        		trace(i);
        		this.TextArea00.insertText(list[i]);
        	}
        };

        this.Grid00_oncellclick = function (obj, e)
        {
        	this.Grid00.showEditor(true);
        };

        this.Grid00_onkeydown = function (obj, e)
        {
        	if (e.col != 5 && e.col != 6 && e.col != 7)
        	{
        		this.Grid00.showEditor(true);
        	}
        };

        this.Grid00_oncloseup = function (obj, e)
        {
        };

        this.Grid00_onchar = function (obj, e)
        {
        	if (e.col == 1 || e.col == 2)
        	{
        		var text = e.posttext;
        		for (var i = 0; i < this.ds_list.rowcount; i++)
        		{
        			if (e.col == 1)
        			{
        				this.ds_list.setColumn(i, "TNMP", text);
        			}
        			else
        			{
        				this.ds_list.setColumn(i, "TNML", text);
        			}
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Grid00.addEventHandler("onkeydown",this.Grid00_onkeydown,this);
            this.Grid00.addEventHandler("oncloseup",this.Grid00_oncloseup,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("QueryMaker.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
