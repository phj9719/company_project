(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUB_WEIGHT_POP");
            this.set_titletext("체성분 측정 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"HEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"PBF\" type=\"STRING\" size=\"256\"/><Column id=\"SMM\" type=\"STRING\" size=\"256\"/><Column id=\"FAT_LVL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_pop_main","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#FFFFFF");
            obj.set_borderRadius("20px");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_popTitle","110","26","135","44",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("0");
            obj.set_text("체성분측정");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_tPopupTitle");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Static("sta_text","50","215","250","45",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("4");
            obj.set_text("측정시작 버튼을 눌러주세요.");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_usedecorate("true");
            obj.set_font("normal 13pt/normal \"Arial\"");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Div("div_cont","60","90","230","120",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("5");
            obj.set_background("url(\'theme://images/ico_measuring.png\') no-repeat center center");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Div("div_btn","30","280",null,"50","30",null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_visible("true");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Button("btn_cancel","5","5","140","40",null,null,null,null,null,null,this.div_pop_main.form.div_btn.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_cssclass("btn_tDefaultGray");
            this.div_pop_main.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_value","150","5","140","40",null,null,null,null,null,null,this.div_pop_main.form.div_btn.form);
            obj.set_taborder("1");
            obj.set_text("측정시작");
            obj.set_cssclass("btn_tDefaultSkyblue");
            this.div_pop_main.form.div_btn.addChild(obj.name, obj);

            obj = new Div("div_cont_fail","60","90","230","120",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("6");
            obj.set_background("url(\'theme://images/ico_fail.png\') no-repeat center center");
            obj.set_visible("false");
            obj.set_text("");
            this.div_pop_main.addChild(obj.name, obj);

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

            obj = new Div("div_btn_complete","30","280",null,"50","30",null,null,null,null,null,this.div_pop_main.form);
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
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Tablet",350,350,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUB_WEIGHT_POP.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUB_WEIGHT_POP.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUB_WEIGHT_POP.xfdl","lib::tpgm_com.xjs");
        this.registerScript("NUB_WEIGHT_POP.xfdl", function() {
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        this.executeIncludeScript("lib::tpgm_com.xjs"); /*include "lib::tpgm_com.xjs"*/;

        var fv_mac = this.parent.mac; // 맥어드레스
        this.NUB_WEIGHT_POP_onload = function(obj,e)
        {
        	const standard = this.makeStandardObject();
        	if(!standard)
        	{
        		this.close();
        	}
        	else
        	{
        		this.div_pop_main.form.div_btn.form.btn_value.setFocus();
        	}
        };

        // 앱에서 _oncallback의 callback 호출시
        this.on_standardPlugin_callback = function(obj, e)
        {
        	trace("this.on_callback ::: " + e.svcid);
        	trace("this.on_callback ::: " + e.reason);
        	trace("this.on_callback ::: " + e.returnvalue);
        	let flag;
        	let json;

        	if(e.svcid == "bluetooth_inbody")
        	{
        		if(e.reason == 0)
        		{
        			trace("this.on_callback ::: return : " + JSON.stringify(e.returnvalue));
        			json = e.returnvalue;
        			flag = json.flag;
        			const height = json.scaleHeight;	// 키
        			const weight = json.scaleWeight;	// 몸무게
        			const bfb = json.scaleBFB;			// 체지방율
        			const smm = json.scaleSMM;			// 골격근량
        			const vfat = json.scaleVFAT;		// 내장지방레벨
        			const heightFix = height.toFixed(1); // 소수점 둘째자리에서 반올림
        			const weightFix = weight.toFixed(1); // 소수점 둘째자리에서 반올림
        			const bfbFix = bfb.toFixed(1); // 소수점 둘째자리에서 반올림
        			const smmFix = smm.toFixed(1); // 소수점 둘째자리에서 반올림

        			this.ds_return.setColumn(0, "HEIGHT", heightFix);
        			this.ds_return.setColumn(0, "WEIGHT", weightFix);
        			this.ds_return.setColumn(0, "PBF", bfbFix);
        			this.ds_return.setColumn(0, "SMM", smmFix);
        			this.ds_return.setColumn(0, "FAT_LVL", vfat);

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
        				this.div_pop_main.form.sta_popTitle.set_text("측정실패");
        				this.div_pop_main.form.sta_text.set_text("측정에 실패하였거나 측정기기와 연결된 기기가 일치하지 않습니다.");
        				this.div_pop_main.form.div_cont.set_visible(false);
        				this.div_pop_main.form.div_btn.set_visible(false);
        				this.div_pop_main.form.div_cont_fail.set_visible(true);
        				this.div_pop_main.form.div_btn_fail.set_visible(true);
        			}
        		}
        		else if(e.reason == 1)
        		{
        			this.div_pop_main.form.sta_text.set_text("<fc v='green'>기기와 <b v='true'>연결되었습니다.</b> 체성분측정기 위에 올라가 측정을 진행하세요.</fc>");
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
        	let str = "";
        	str += "\nthis.on_permission_result svcid ::: " + e.svcid;
        	str += "\nthis.on_permission_result reason ::: " + e.reason;
        	str += "\nthis.on_permission_result returnvalue ::: " + e.returnvalue;

        };

        // 팝업을 닫으면서 부모 화면으로 데이터 전송
        this.fn_setData = function (obj, e)
        {
        	//this.ds_return.clearData();
        	//Multi 선택인경우 체크한 ROW들 전체 return

        	this.close(this.ds_return.saveXML());
        };

        // 취소, 종료, 창닫기 버튼
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

        // 재측정 버튼
        this.div_pop_main_div_btn_fail_btn_restart_onclick = function(obj,e)
        {
        	this.div_pop_main.form.div_btn_fail.set_visible(false);
        	this.div_pop_main.form.div_cont_fail.set_visible(false);
        	this.div_pop_main.form.div_btn.set_visible(true);
        	this.div_pop_main.form.div_cont.set_visible(true);
        	this.div_pop_main.form.div_btn.form.btn_value.set_visible(true);
        	this.div_pop_main.form.div_btn.form.btn_cancel.set_cssclass("btn_tDefaultGray");
        	this.div_pop_main.form.div_btn.form.btn_cancel.set_left(5);

        	this.div_pop_main.form.sta_popTitle.set_text("체성분측정");
        	this.div_pop_main.form.sta_text.set_text("측정시작 버튼을 눌러주세요.");

        	this.div_pop_main.form.div_btn.form.btn_value.click();

        	//this.div_pop_main.form.div_btn.form.btn_cancel.setFocus();
        };

        // 측정시작 버튼
        this.div_pop_main_div_btn_btn_value_onclick = function(obj,e)
        {
        	const param = {mac : fv_mac, byuser : false};
        	this.standardPlugin.callMethod("bluetooth_inbody", param);
        	this.div_pop_main.form.sta_text.set_text("<fc v='orange'>기기와 연결을 <b v='true'>진행합니다.</b></fc>");
        	this.div_pop_main.form.div_btn.form.btn_value.set_visible(false);
        	this.div_pop_main.form.div_btn.form.btn_cancel.set_cssclass("btn_tDefaultSkyblue");
        	this.div_pop_main.form.div_btn.form.btn_cancel.set_left(80);
        };

        this.NUB_WEIGHT_POP_ondevicebuttonup = function(obj,e)
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
            this.addEventHandler("onload",this.NUB_WEIGHT_POP_onload,this);
            this.addEventHandler("onclick",this.formClick,this);
            this.addEventHandler("ondevicebuttonup",this.NUB_WEIGHT_POP_ondevicebuttonup,this);
            this.div_pop_main.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.sta_popTitle.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.sta_text.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.div_cont.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.div_btn.form.btn_cancel.addEventHandler("onclick",this.div_pop_main_btn_cancel_onclick,this);
            this.div_pop_main.form.div_btn.form.btn_value.addEventHandler("onclick",this.div_pop_main_div_btn_btn_value_onclick,this);
            this.div_pop_main.form.div_btn_fail.form.btn_close.addEventHandler("onclick",this.div_pop_main_btn_cancel_onclick,this);
            this.div_pop_main.form.div_btn_fail.form.btn_restart.addEventHandler("onclick",this.div_pop_main_div_btn_fail_btn_restart_onclick,this);
            this.div_pop_main.form.div_btn_complete.form.btn_close.addEventHandler("onclick",this.div_pop_main_btn_cancel_onclick,this);
            this.div_pop_main.form.div_btn_complete.form.btn_save.addEventHandler("onclick",this.div_pop_main_btn_cancel_onclick,this);
        };
        this.loadIncludeScript("NUB_WEIGHT_POP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
