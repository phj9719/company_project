(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Calendar_Month");
            this.set_titletext("월력");
            this.set_background("linear-gradient(to bottom, rgba(251,251,251,1) 0%, rgba(231,231,231,1) 100%)");
            this.set_color("rgba(51,51,51,1)");
            this.set_borderRadius("0px");
            if (Form == this.constructor)
            {
                this._setFormPosition(199,126);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("img_nextYear00","53","2","18","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_image("url(\'imagerc::btn_MDI_TabSpinup.png\')");
            obj.set_background("rgba(255,255,255,1)");
            this.addChild(obj.name, obj);

            obj = new Static("sta_year","77","3","53","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_color("darkslateblue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("bold 13pt \"arial\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_nextYear","132","2","18","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_image("url(\'imagerc::btn_MDI_TabSpindown.png\')");
            obj.set_background("rgba(255,255,255,1)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_month1","12","25","32","27",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("01");
            obj.set_border("1px solid darkblue");
            obj.set_font("bold 11pt \"arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_month5","12","59","32","27",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("05");
            obj.set_border("1px solid darkblue");
            obj.set_font("bold 11pt \"arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_month9","12","93","32","27",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("09");
            obj.set_border("1px solid darkblue");
            obj.set_font("bold 11pt \"arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_month10","60","93","32","27",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_border("1px solid darkblue");
            obj.set_font("bold 11pt \"arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_month6","60","59","32","27",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("06");
            obj.set_border("1px solid darkblue");
            obj.set_font("bold 11pt \"arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_month2","60","25","32","27",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("02");
            obj.set_border("1px solid darkblue");
            obj.set_font("bold 11pt \"arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_month3","108","25","32","27",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("03");
            obj.set_border("1px solid darkblue");
            obj.set_font("bold 11pt \"arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_month7","108","59","32","27",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("07");
            obj.set_border("1px solid darkblue");
            obj.set_font("bold 11pt \"arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_month11","108","93","32","27",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("11");
            obj.set_border("1px solid darkblue");
            obj.set_font("bold 11pt \"arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_month12","156","93","32","27",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("12");
            obj.set_border("1px solid darkblue");
            obj.set_font("bold 11pt \"arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_month8","156","59","32","27",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("08");
            obj.set_border("1px solid darkblue");
            obj.set_font("bold 11pt \"arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_month4","156","25","32","27",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("04");
            obj.set_border("1px solid darkblue");
            obj.set_font("bold 11pt \"arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",199,126,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Calendar_Month.xfdl","lib::sct_com.xjs");
        this.registerScript("Calendar_Month.xfdl", function() {
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/

        this.img_preYear_onclick = function (obj, e)
        {
        	var sYY = (parseInt(this.sta_year.text) - 1).toString();
        	this.sta_year.set_text(sYY);
        };

        this.img_nextYear_onclick = function (obj, e)
        {
        	var sYY = (parseInt(this.sta_year.text) + 1).toString();
        	this.sta_year.set_text(sYY);
        };

        this.fn_selectMonth = function (obj, e)
        {
        	var year = "";
        	var sYearMonth = year;
        	var sMonth = obj.text;

        	if (sMonth.length < 2)
        	{
        		sYearMonth = this.sta_year.text + "0" + obj.text;
        	}
        	else
        	{
        		sYearMonth = this.sta_year.text + obj.text;
        	}

        	this.parent.closePopup(sYearMonth);

        	// Destroy Object
        	this.parent.destroy();
        };

        this.fn_getToday = function ()
        {
        	var objData = new Date();
        	var year = objData.getFullYear();
        	var month = objData.getMonth() + 1;
        	month = month + "";
        	if (month.length == 1)
        	{
        		month = "0" + month;
        	}
        	var day = objData.getDate();
        	var rtnVal = year + "" + month + "";
        	rtnVal = nexacro.toNumber(rtnVal);
        };
        this.Calendar_Month_onload = function (obj, e)
        {
        	var year = "";
        	var objData = new Date();
        	if(Sct.Util.isEmpty(this.parent.setdate))
        	{
        		year = objData.getFullYear();
        	}
        	else
        	{
        		year = this.parent.setdate.substring(0,4);
        	}
        	this.sta_year.set_text(year);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Calendar_Month_onload,this);
            this.img_nextYear00.addEventHandler("onclick",this.img_preYear_onclick,this);
            this.img_nextYear.addEventHandler("onclick",this.img_nextYear_onclick,this);
            this.btn_month1.addEventHandler("onclick",this.fn_selectMonth,this);
            this.btn_month5.addEventHandler("onclick",this.fn_selectMonth,this);
            this.btn_month9.addEventHandler("onclick",this.fn_selectMonth,this);
            this.btn_month10.addEventHandler("onclick",this.fn_selectMonth,this);
            this.btn_month6.addEventHandler("onclick",this.fn_selectMonth,this);
            this.btn_month2.addEventHandler("onclick",this.fn_selectMonth,this);
            this.btn_month3.addEventHandler("onclick",this.fn_selectMonth,this);
            this.btn_month7.addEventHandler("onclick",this.fn_selectMonth,this);
            this.btn_month11.addEventHandler("onclick",this.fn_selectMonth,this);
            this.btn_month12.addEventHandler("onclick",this.fn_selectMonth,this);
            this.btn_month8.addEventHandler("onclick",this.fn_selectMonth,this);
            this.btn_month4.addEventHandler("onclick",this.fn_selectMonth,this);
        };
        this.loadIncludeScript("Calendar_Month.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
