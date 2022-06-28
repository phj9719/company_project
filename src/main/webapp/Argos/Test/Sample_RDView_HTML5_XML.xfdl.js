(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_RDView_HTML5_XML");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00","10","64",null,null,"104","10",null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("onloadcompleted").set("Sample_RDview_HTML5_onload");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","132","17","660","37",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Report View Sample for XML(HTML5)");
            obj.set_textAlign("center");
            obj.set_font("bold 18pt \"arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","779","30","105","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("리포트 보기");
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
        this.registerScript("Sample_RDView_HTML5_XML.xfdl", function() {

        this.bIsLoaded = false; //페이지 오픈 여부

        this.Sample_RDview_HTML5_onload = function (obj, e)
        {
        	var objWeb = this.WebBrowser00;

        	if (this.bIsLoaded)
        	{
        		trace(this.Dataset00.saveXML()); //Dataset to XML 예시
        		var str_param = "";
        		str_param += '<?xml version="1.0" encoding="euc-kr"?>                              ';
        		str_param += '<root>                                                               ';
        		str_param += '	<dataset id="Dataset0">                                             ';
        		str_param += '		<colinfo id="CustomerID" size="255" summ="default" type="STRING"/>';
        		str_param += '		<colinfo id="EmployeeID" size="255" summ="default" type="STRING"/>';
        		str_param += '		<colinfo id="OrderDate" size="255" summ="default" type="DATE"/>   ';
        		str_param += '		<record>                                                          ';
        		str_param += '			<CustomerID>00101168550</CustomerID>                            ';
        		str_param += '			<EmployeeID>11111111</EmployeeID>                               ';
        		str_param += '			<OrderDate>20050109</OrderDate>                                 ';
        		str_param += '		</record>                                                         ';
        		str_param += '		<record>                                                          ';
        		str_param += '			<CustomerID>00101168206</CustomerID>                            ';
        		str_param += '			<EmployeeID>2222222221</EmployeeID>                             ';
        		str_param += '			<OrderDate>20050102</OrderDate>                                 ';
        		str_param += '		</record>                                                         ';
        		str_param += '		<record>                                                          ';
        		str_param += '			<CustomerID>00101168550</CustomerID>                            ';
        		str_param += '			<EmployeeID>11111111</EmployeeID>                               ';
        		str_param += '			<OrderDate>20050109</OrderDate>                                 ';
        		str_param += '		</record>                                                         ';
        		str_param += '		<record>                                                          ';
        		str_param += '			<CustomerID>00101168206</CustomerID>                            ';
        		str_param += '			<EmployeeID>2222222221</EmployeeID>                             ';
        		str_param += '			<OrderDate>20050102</OrderDate>                                 ';
        		str_param += '		</record>                                                         ';
        		str_param += '		<record>                                                          ';
        		str_param += '			<CustomerID>00101168550</CustomerID>                            ';
        		str_param += '			<EmployeeID>11111111</EmployeeID>                               ';
        		str_param += '			<OrderDate>20050109</OrderDate>                                 ';
        		str_param += '		</record>                                                         ';
        		str_param += '		<record>                                                          ';
        		str_param += '			<CustomerID>00101168206</CustomerID>                            ';
        		str_param += '			<EmployeeID>2222222221</EmployeeID>                             ';
        		str_param += '			<OrderDate>20050102</OrderDate>                                 ';
        		str_param += '		</record>                                                         ';
        		str_param += '	</dataset>                                                          ';
        		str_param += '</root>    ';

        		objWeb.callMethod("mrdparam", "");
        		objWeb.callMethod("SetRData", str_param);
        		objWeb.callMethod("mrdPath", nexacro.getApplication().gv_RdMrd + "/bs/cf/cm/emdv3_xmlsample.mrd");
        		objWeb.callMethod("mrdparam", "/rfn [" + nexacro.getApplication().gv_RdXmlViwer + "] /rsn [sis_oracle] /rp [param1][param2] /rv param1[AAA]param2[B]");
        		return;
        	}
        };


        this.Button00_onclick = function (obj, e)
        {
        	var objWeb = this.WebBrowser00;

        	// 샘플
        	objWeb.set_url(nexacro.getApplication().gv_RdXmlViwer); //html 파일 내부에 하위 함수들이 정의되어 있음.
        	this.bIsLoaded = true;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Sample_RDView_HTML5_XML.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
