(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUB_POSTURE_POP");
            this.set_titletext("자세변경 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(485,580);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"POSTURE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_pop_main","0","0","485","580",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#FFFFFF");
            obj.set_borderRadius("20px");
            obj.set_visible("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","5%","75",null,"3","5%",null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_background("#47afe1");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new ImageViewer("img_posture1","35","90","200","140",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("1");
            obj.set_image("url(\'theme://images/lie1.png\')");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new ImageViewer("img_posture2","250","90","200","140",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("2");
            obj.set_image("url(\'theme://images/lie2.png\')");
            obj.set_stretch("none");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new ImageViewer("img_posture3","35","240","200","140",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("3");
            obj.set_image("url(\'theme://images/lie3.png\')");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new ImageViewer("img_posture4","250","240","200","140",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("4");
            obj.set_image("url(\'theme://images/lie4.png\')");
            obj.set_stretch("none");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new ImageViewer("img_posture5","35","390","200","140",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("5");
            obj.set_image("url(\'theme://images/lie5.png\')");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new ImageViewer("img_posture6","250","390","200","140",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("6");
            obj.set_image("url(\'theme://images/lie6.png\')");
            obj.set_stretch("none");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"5.00%","24","24","7.01%",null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("7");
            obj.set_edge("url(\'theme://images/ico_popclose.png\') 0px 0px");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Static("sta_popTitle","165","16","150","44",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("자세 변경");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_tPopupTitle");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Tablet",485,580,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUB_POSTURE_POP.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUB_POSTURE_POP.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUB_POSTURE_POP.xfdl","lib::tpgm_com.xjs");
        this.registerScript("NUB_POSTURE_POP.xfdl", function() {
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        this.executeIncludeScript("lib::tpgm_com.xjs"); /*include "lib::tpgm_com.xjs"*/;

        this.NUB_POSTURE_POP_onload = function(obj,e)
        {

        };

        this.NUB_POSTURE_POP_ondevicebuttonup = function(obj,e)
        {
        	if(e.button == 2)
        	{
        		this.close();
        	}
        };

        this.div_pop_main_btn_close_onclick = function(obj,e)
        {
        	this.close();
        };



        /***********************************************************************
         * User Functions
        *******************************************************************/
        this.fn_returnValue = function(rtnVal){

        	this.ds_return.clearData();
        	this.ds_return.addRow();
        	this.ds_return.setColumn(0, "POSTURE", rtnVal);
        	this.close(this.ds_return.saveXML());
        }

        this.div_pop_main_img_posture1_onclick = function(obj,e)
        {

        	this.fn_returnValue("1");

        };

        this.div_pop_main_img_posture2_onclick = function(obj,e)
        {
        	this.fn_returnValue("2");
        };

        this.div_pop_main_img_posture3_onclick = function(obj,e)
        {
        	this.fn_returnValue("3");
        };

        this.div_pop_main_img_posture4_onclick = function(obj,e)
        {
        	this.fn_returnValue("4");
        };

        this.div_pop_main_img_posture5_onclick = function(obj,e)
        {
        	this.fn_returnValue("5");
        };

        this.div_pop_main_img_posture6_onclick = function(obj,e)
        {
        	this.fn_returnValue("6");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclick",this.formClick,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.addEventHandler("ondevicebuttonup",this.NUB_POSTURE_POP_ondevicebuttonup,this);
            this.addEventHandler("onload",this.NUB_POSTURE_POP_onload,this);
            this.div_pop_main.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.img_posture1.addEventHandler("onclick",this.div_pop_main_img_posture1_onclick,this);
            this.div_pop_main.form.img_posture2.addEventHandler("onclick",this.div_pop_main_img_posture2_onclick,this);
            this.div_pop_main.form.img_posture3.addEventHandler("onclick",this.div_pop_main_img_posture3_onclick,this);
            this.div_pop_main.form.img_posture4.addEventHandler("onclick",this.div_pop_main_img_posture4_onclick,this);
            this.div_pop_main.form.img_posture5.addEventHandler("onclick",this.div_pop_main_img_posture5_onclick,this);
            this.div_pop_main.form.img_posture6.addEventHandler("onclick",this.div_pop_main_img_posture6_onclick,this);
            this.div_pop_main.form.btn_close.addEventHandler("onclick",this.div_pop_main_btn_close_onclick,this);
            this.sta_popTitle.addEventHandler("onclick",this.formClick,this);
        };
        this.loadIncludeScript("NUB_POSTURE_POP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
