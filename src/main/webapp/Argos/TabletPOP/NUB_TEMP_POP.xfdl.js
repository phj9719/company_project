(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUB_TEMP_POP");
            this.set_titletext("체온 측정 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"TEMP\" type=\"STRING\" size=\"256\"/><Column id=\"TEM_TIME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_pop_main","0","0","350","350",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#FFFFFF");
            obj.set_borderRadius("20px");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_popTitle","110","26","135","44",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("0");
            obj.set_text("측정중");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_tPopupTitle");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Static("sta_text","45","225","260","47",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("4");
            obj.set_text("측정중입니다.");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_tPopupText");
            obj.set_wordWrap("char");
            obj.set_usedecorate("true");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Div("div_cont","60","80","230","120",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_visible("false");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Edit("edt_temp","60","65","150","40",null,null,null,null,null,null,this.div_pop_main.form.div_cont.form);
            obj.set_taborder("0");
            this.div_pop_main.form.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_00","3","65","45","40",null,null,null,null,null,null,this.div_pop_main.form.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("체온 : ");
            obj.set_cssclass("sta_tPopupText");
            this.div_pop_main.form.div_cont.addChild(obj.name, obj);

            obj = new Div("div_btn_fail","30","280",null,"50","30",null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_visible("false");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Button("btn_close","5","5","140","40",null,null,null,null,null,null,this.div_pop_main.form.div_btn_fail.form);
            obj.set_taborder("0");
            obj.set_text("종료");
            obj.set_cssclass("btn_tDefaultGray");
            this.div_pop_main.form.div_btn_fail.addChild(obj.name, obj);

            obj = new Button("btn_restart","150","5","140","40",null,null,null,null,null,null,this.div_pop_main.form.div_btn_fail.form);
            obj.set_taborder("1");
            obj.set_text("재시작");
            obj.set_cssclass("btn_tDefaultSkyblue");
            this.div_pop_main.form.div_btn_fail.addChild(obj.name, obj);

            obj = new Div("div_cont_fail","60","100","230","120",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("7");
            obj.set_background("url(\'theme://images/ico_fail.png\') no-repeat center center");
            obj.set_visible("false");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Div("div_btn_complete","30","280","290","50",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_visible("false");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Button("btn_close","5","5","140","40",null,null,null,null,null,null,this.div_pop_main.form.div_btn_complete.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_cssclass("btn_tDefaultGray");
            obj.set_visible("true");
            this.div_pop_main.form.div_btn_complete.addChild(obj.name, obj);

            obj = new Button("btn_save","150","5","140","40",null,null,null,null,null,null,this.div_pop_main.form.div_btn_complete.form);
            obj.set_taborder("1");
            obj.set_text("저장하기");
            obj.set_cssclass("btn_tDefaultSkyblue");
            obj.set_visible("true");
            this.div_pop_main.form.div_btn_complete.addChild(obj.name, obj);

            obj = new Div("div_btn","30","280",null,"50","30",null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_visible("true");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Button("btn_close","85","5","140","40",null,null,null,null,null,null,this.div_pop_main.form.div_btn.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_cssclass("btn_tDefaultSkyblue");
            obj.set_visible("true");
            this.div_pop_main.form.div_btn.addChild(obj.name, obj);

            obj = new Div("div_cont_measure","60","100","230","120",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("6");
            obj.set_background("url(\'theme://images/ico_measuring.png\') no-repeat center center");
            obj.set_visible("true");
            this.div_pop_main.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Tablet",350,350,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_pop_main.form.div_cont.form.edt_temp","value","ds_return","TEMP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUB_TEMP_POP.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUB_TEMP_POP.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUB_TEMP_POP.xfdl","lib::tpgm_com.xjs");
        this.registerScript("NUB_TEMP_POP.xfdl", function() {
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        this.executeIncludeScript("lib::tpgm_com.xjs"); /*include "lib::tpgm_com.xjs"*/;

        var fv_mac = this.parent.mac; // 맥어드레스
        this.NUB_TEMP_POP_onload = function(obj,e)
        {
        	this.fn_measure();
        };

        // 앱에서 _oncallback의 callback 호출시
        this.on_standardPlugin_callback = function(obj, e)
        {
        	trace("this.on_callback ::: " + e.svcid);
        	trace("this.on_callback ::: " + e.reason);
        	trace("this.on_callback ::: " + e.returnvalue);
        	let flag;
        	let json;

        	if(e.svcid == "bluetooth_temp")
        	{
        		if(e.reason == 0)
        		{
        			trace("this.on_callback ::: return : " + JSON.stringify(e.returnvalue));
        			json = e.returnvalue;
        			//const date = json.tempDate;
        			//const time = json.tempTime;
        			const datetime = json.temperatureTime;
        			const time = datetime.split(" ")[1];
        			const timeSp = time.split(":");
        			const meaTime = timeSp[0] + "" + timeSp[1];
        			const temp = json.temperature;
        			const tempFix = temp.toFixed(1);

        // 			this.div_pop_main.form.div_cont.set_visible(true);
        // 			this.div_pop_main.form.div_btn_complete.set_visible(true);
        //
        // 			this.div_pop_main.form.div_btn.set_visible(false);
        // 			this.div_pop_main.form.div_cont_measure.set_visible(false);
        //
        // 			this.div_pop_main.form.sta_popTitle.set_text("체온측정");
        // 			this.div_pop_main.form.sta_text.set_text("저장하기를 눌러 측정된 데이터를 저장하시오.");
        //
        // 			this.div_pop_main.form.div_cont.form.edt_temp.set_value(tempFix);
        //
        // 			this.div_pop_main.form.div_btn_complete.form.btn_save.setFocus();

        			this.ds_return.setColumn(0, "TEMP", tempFix);
        			this.ds_return.setColumn(0, "TEM_TIME", meaTime);

        			this.fn_setData();
        		}
        		else if(e.reason == -1)
        		{
        			trace("this.on_callback ::: return : " + JSON.stringify(e.returnvalue));
        			json = e.returnvalue;
        			flag = json.flag;

        			if (json.err == "2")
        			{

        			}
        			else
        			{
        				this.div_pop_main.form.div_cont_measure.set_visible(false);
        				this.div_pop_main.form.div_btn.set_visible(false);

        				this.div_pop_main.form.div_cont_fail.set_visible(true);
        				this.div_pop_main.form.div_btn_fail.set_visible(true);

        				this.div_pop_main.form.sta_popTitle.set_text("측정실패");
        				this.div_pop_main.form.sta_text.set_text("측정에 실패하였거나 측정기기와 연결된 기기가 일치하지 않습니다.");
        			}
        		}
        		else if(e.reason == 1)
        		{
        			this.div_pop_main.form.sta_text.set_text("<fc v='green'>기기와 <b v='true'>연결되었습니다.</b> 체온을 측정해주세요.</fc>");
        		}
        	}
        };

        // 앱에서 _onresume 의 callback 호출시
        this.on_standardPlugin_resume = function(obj, e)
        {
        	let str = "";
        	str += "\nthis.on_resume svcid ::: " + e.svcid;
        	str += "\nthis.on_resume reason ::: " + e.reason;
        	str += "\nthis.on_resume returnvalue ::: " + e.returnvalue;

        };

        // 앱에서 _onpermissionresult 의 callback 호출시
        this.on_standardPlugin_permission_result = function(obj, e)
        {
        	trace("this.on_permission_result ::: " + e.svcid);
        	trace("this.on_permission_result ::: " + e.reason);
        	trace("this.on_permission_result ::: " + e.returnvalue);

        	if (e.reason == -9)
        	{
        		this.alert("권한허용이 되지 않았습니다.");
        		this.close();
        	}
        };

        // 팝업을 닫으면서 부모 화면으로 데이터 전송
        this.fn_setData = function (obj, e)
        {
        	//this.ds_return.clearData();
        	//Multi 선택인경우 체크한 ROW들 전체 return

        	this.close(this.ds_return.saveXML());
        };

        // 취소, 종료, 저장하기 버튼
        this.div_pop_main_btn_cancel_onclick = function(obj,e)
        {
        	if(obj.text == "취소")
        	{
        		const param = {};
         		this.standardPlugin.callMethod("bluetooth_cancel", param);
        		this.close();
        	}
        	else if(obj.text == "종료")
        	{
        		this.close();
        	}
        	else if(obj.text == "저장하기")
        	{
        		this.fn_setData();
        	}
        };

        // 재시작 버튼
        this.div_pop_main_div_btn_fail_btn_restart_onclick = function(obj,e)
        {
        	this.div_pop_main.form.div_btn_fail.set_visible(false);
        	this.div_pop_main.form.div_cont_fail.set_visible(false);
        	this.div_pop_main.form.div_btn_complete.set_visible(false);
        	this.div_pop_main.form.div_cont.set_visible(false);

        	this.div_pop_main.form.div_cont_measure.set_visible(true);
        	this.div_pop_main.form.div_btn.set_visible(true);
        	this.div_pop_main.form.sta_popTitle.set_text("측정중");
        	this.div_pop_main.form.sta_text.set_text("측정중입니다.");

        	this.fn_measure();
        };

        // 가져오기 버튼
        this.div_pop_main_div_btn_btn_value_onclick = function(obj,e)
        {
        // 	const param = {arg1 : "test"};
        // 	this.standardPlugin.callMethod("bluetooth_temp", param);
        };

        // 측정
        this.fn_measure = function ()
        {
        	const param = {mac : fv_mac, byuser : false};
        	const standard = this.makeStandardObject();

        	if(!standard)
        	{
        		this.close();
        	}
        	else
        	{
        		this.div_pop_main.form.div_btn.form.btn_close.setFocus();
        		this.standardPlugin.callMethod("bluetooth_temp", param);
        	}
        };

        this.NUB_TEMP_POP_ondevicebuttonup = function(obj,e)
        {
        	if(e.button == 2)
        	{
        		this.close();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.NUB_TEMP_POP_onload,this);
            this.addEventHandler("onclick",this.formClick,this);
            this.addEventHandler("ondevicebuttonup",this.NUB_TEMP_POP_ondevicebuttonup,this);
            this.div_pop_main.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.sta_popTitle.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.sta_text.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.div_cont.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.div_btn_fail.form.btn_close.addEventHandler("onclick",this.div_pop_main_btn_cancel_onclick,this);
            this.div_pop_main.form.div_btn_fail.form.btn_restart.addEventHandler("onclick",this.div_pop_main_div_btn_fail_btn_restart_onclick,this);
            this.div_pop_main.form.div_btn_complete.form.btn_close.addEventHandler("onclick",this.div_pop_main_btn_cancel_onclick,this);
            this.div_pop_main.form.div_btn_complete.form.btn_save.addEventHandler("onclick",this.div_pop_main_btn_cancel_onclick,this);
            this.div_pop_main.form.div_btn.form.btn_close.addEventHandler("onclick",this.div_pop_main_btn_cancel_onclick,this);
        };
        this.loadIncludeScript("NUB_TEMP_POP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
