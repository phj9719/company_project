(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Grid_Sort_Multi_0");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"col0\" type=\"INT\" size=\"256\"/><Column id=\"col1\" type=\"STRING\" size=\"256\"/><Column id=\"col2\" type=\"STRING\" size=\"256\"/><Column id=\"col3\" type=\"STRING\" size=\"256\"/><Column id=\"col4\" type=\"STRING\" size=\"256\"/><Column id=\"col5\" type=\"STRING\" size=\"256\"/><Column id=\"col6\" type=\"STRING\" size=\"256\"/><Column id=\"col7\" type=\"INT\" size=\"256\"/><Column id=\"col8\" type=\"INT\" size=\"256\"/><Column id=\"col9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"col0\">1</Col><Col id=\"col1\">c</Col><Col id=\"col2\">Sales</Col><Col id=\"col3\">TOBE_001e</Col><Col id=\"col4\">jin Kim</Col><Col id=\"col5\">Bank of KookMin</Col><Col id=\"col6\">235685-97-215489</Col><Col id=\"col7\">90</Col><Col id=\"col8\">10000</Col><Col id=\"col9\">seon</Col></Row><Row><Col id=\"col0\">2</Col><Col id=\"col1\">d</Col><Col id=\"col2\">Delivery</Col><Col id=\"col3\">TOBE_001</Col><Col id=\"col4\">JaeHee Kim</Col><Col id=\"col5\">Bank of KookMin</Col><Col id=\"col6\">685923-99-256984</Col><Col id=\"col7\">2000</Col><Col id=\"col8\">160000</Col><Col id=\"col9\">dream</Col></Row><Row><Col id=\"col0\">3</Col><Col id=\"col1\">a</Col><Col id=\"col2\">eMoney</Col><Col id=\"col3\">TOBE_002</Col><Col id=\"col4\">Samsung</Col><Col id=\"col5\">Bank of ShinHan</Col><Col id=\"col6\">230-02-458968</Col><Col id=\"col7\">8000</Col><Col id=\"col8\">4000</Col><Col id=\"col9\">qwe</Col></Row><Row><Col id=\"col0\">4</Col><Col id=\"col1\">b</Col><Col id=\"col2\">Refund</Col><Col id=\"col3\">TOBE_003a</Col><Col id=\"col4\">GiEun Park</Col><Col id=\"col5\">Bank of ShinHan</Col><Col id=\"col6\">320-02-526457</Col><Col id=\"col7\">13000</Col><Col id=\"col8\">1200</Col><Col id=\"col9\">asda</Col></Row><Row><Col id=\"col0\">5</Col><Col id=\"col1\">v</Col><Col id=\"col2\">Charge2</Col><Col id=\"col3\">TOBE_003</Col><Col id=\"col4\">TunGi Park</Col><Col id=\"col5\">Bank of ShinHan</Col><Col id=\"col6\">320-02-526457</Col><Col id=\"col7\">100</Col><Col id=\"col8\">10000</Col><Col id=\"col9\">zxvg</Col></Row><Row><Col id=\"col0\">6</Col><Col id=\"col1\">q</Col><Col id=\"col2\">Mismatch</Col><Col id=\"col3\">TOBE_003</Col><Col id=\"col4\">EunGi Park</Col><Col id=\"col5\">Bank of ShinHan</Col><Col id=\"col6\">320-02-526457</Col><Col id=\"col7\">1200</Col><Col id=\"col8\">3000</Col><Col id=\"col9\">Zion</Col></Row><Row><Col id=\"col0\">7</Col><Col id=\"col1\">e</Col><Col id=\"col2\">Sales</Col><Col id=\"col3\">TOBE_0046</Col><Col id=\"col4\">JungHyun Jo</Col><Col id=\"col5\">Bank of KookMin</Col><Col id=\"col6\">385923-98-256584</Col><Col id=\"col7\">90</Col><Col id=\"col8\">1</Col><Col id=\"col9\">seon</Col></Row><Row><Col id=\"col0\">8</Col><Col id=\"col1\">o</Col><Col id=\"col2\">Charge</Col><Col id=\"col3\">TOBE_0042</Col><Col id=\"col4\">JungHyun Jo1</Col><Col id=\"col5\">Bank of KookMin</Col><Col id=\"col6\">385923-98-256584</Col><Col id=\"col7\">2000</Col><Col id=\"col8\">16</Col><Col id=\"col9\">aaa</Col></Row><Row><Col id=\"col0\">9</Col><Col id=\"col1\">i</Col><Col id=\"col2\">Sales</Col><Col id=\"col3\">TOBE_0041</Col><Col id=\"col4\">JungHyun Jo2</Col><Col id=\"col5\">Bank of KookMin</Col><Col id=\"col6\">385923-98-256584</Col><Col id=\"col7\">8000</Col><Col id=\"col8\">4000</Col><Col id=\"col9\">bn</Col></Row><Row><Col id=\"col0\">10</Col><Col id=\"col1\">y</Col><Col id=\"col2\">Refund</Col><Col id=\"col3\">TOBE_010da</Col><Col id=\"col4\">GangHo Lee</Col><Col id=\"col5\">Bank of ShinHan</Col><Col id=\"col6\">210-05-616487</Col><Col id=\"col7\">13000</Col><Col id=\"col8\">1200</Col><Col id=\"col9\">qwrffrtg</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","16","16","350","27",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("** MultiSort button click시 정렬조건 선택");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","16","56","990","695",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("none");
            obj.set_autosizebandtype("allband");
            obj.set_autosizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"컬럼0\"/><Cell col=\"1\" text=\"컬럼1\"/><Cell col=\"2\" text=\"col2\"/><Cell col=\"3\" text=\"col3\"/><Cell col=\"4\" text=\"col4\"/><Cell col=\"5\" text=\"col5\"/><Cell col=\"6\" text=\"col6\"/><Cell col=\"7\" text=\"col7\"/><Cell col=\"8\" text=\"col8\"/><Cell col=\"9\" text=\"col9\"/></Band><Band id=\"body\"><Cell text=\"bind:col0\"/><Cell col=\"1\" text=\"bind:col1\"/><Cell col=\"2\" text=\"bind:col2\"/><Cell col=\"3\" text=\"bind:col3\"/><Cell col=\"4\" text=\"bind:col4\"/><Cell col=\"5\" text=\"bind:col5\"/><Cell col=\"6\" text=\"bind:col6\"/><Cell col=\"7\" text=\"bind:col7\"/><Cell col=\"8\" text=\"bind:col8\"/><Cell col=\"9\" text=\"bind:col9\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_multiSort","907","24","82","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Multi Sort");
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
        this.addIncludeScript("Grid_Sort_Multi_0.xfdl","lib::sct_util.xjs");
        this.registerScript("Grid_Sort_Multi_0.xfdl", function() {

        this.executeIncludeScript("lib::sct_util.xjs"); /*include "lib::sct_util.xjs"*/
        this.btn_multiSort_onclick = function (obj, e)
        {
        	var ds = this.Grid00.getBindDataset();
        	var argstr = new Array();
        	var rowC = ds.rowcount;

        	var nGridColC = this.Grid00.getFormatColCount();
        	var arrSeq = 0;
        	for (var i = 0; i < nGridColC; i++)
        	{
        		var cellText = this.Grid00.getCellProperty("Body", i, "text");
        		var headText = this.Grid00.getCellProperty("Head", i, "text");
        		if (!Sct.Util.isEmpty(cellText))
        		{
        			argstr[arrSeq] = headText + ":" + cellText.split(":")[1];
        			arrSeq++;
        		}
        	}

        	Sct.popup(this, "MultiSortPop", 1024, 768, "Multi Sort", {
        		argstr : argstr,
        		rowC : rowC
        	}, "Test::Grid_Sort_Multi_Pop.xfdl", "fn_multisort_popCallback");
        };

        this.fn_multisort_popCallback = function (sid, rtn)
        {
        	if (Sct.Util.isEmpty(rtn))
        	{
        		return;
        	}

        	var spl = rtn.split(":");
        	var spl_leng = spl[1].toString().length;
        	var arr_code = new Array();
        	var arr_str = new Array();
        	var j = 0;

        	var colId = "";
        	var id_count;

        	for (var i = 0; i < spl_leng; i++)
        	{
        		arr_code[j] = spl[1].toString().substr(i, 1);
        		i += 4;

        		arr_str[j] = spl[1].toString().substr(i, 1);

        		j++;
        	}

        	for (var i = 0; i < arr_code.length; i++)
        	{
        		if (arr_code[i] == "+")
        		{
        			this.Grid00.setCellProperty("head", arr_str[i], "text", "col" + arr_str[i] + " ▲ ");
        		}
        		else if (arr_code[i] == "-")
        		{
        			this.Grid00.setCellProperty("head", arr_str[i], "text", "col" + arr_str[i] + " ▼ ");
        		}
        	}

        	this.Dataset00.keystring = rtn;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_multiSort.addEventHandler("onclick",this.btn_multiSort_onclick,this);
        };
        this.loadIncludeScript("Grid_Sort_Multi_0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
