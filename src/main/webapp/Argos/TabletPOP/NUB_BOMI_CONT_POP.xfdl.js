(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUB_BOMI_CONT_POP");
            this.set_titletext("프로그램 선택 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_manager", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"RANK_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RANK_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bomi_cont", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_pop_main","0","0","800","600",null,null,null,null,null,null,this);
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

            obj = new Div("div_bomi_cont","5.00%","100",null,null,"5.00%","5%",null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"4.67%","24","24","6.50%",null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("2");
            obj.set_edge("url(\'theme://images/ico_popclose.png\') 0px 0px");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Static("sta_popTitle","300","26","180","44",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("프로그램 선택");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_tPopupTitle");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Tablet",800,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUB_BOMI_CONT_POP.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUB_BOMI_CONT_POP.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUB_BOMI_CONT_POP.xfdl","lib::tpgm_com.xjs");
        this.registerScript("NUB_BOMI_CONT_POP.xfdl", function() {
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        this.executeIncludeScript("lib::tpgm_com.xjs"); /*include "lib::tpgm_com.xjs"*/;

        var fv_Company = this.parent.COMPANY_CD;
        var fv_Data = this.parent.DATASET;

        // 온로드
        this.NUB_BOMI_CONT_POP_onload = function(obj,e)
        {
        	if (fv_Data != undefined && !Sct.Util.isEmpty(fv_Data))
        	{
        		this.ds_bomi_cont.copyData(fv_Data);
        		this.ds_bomi_cont.filter("CMCD != null");
        		this.fn_bomi_cont_select();
        	}
        	else
        	{
        		alert("프로그램 목록을 불러올수 없습니다.");
        		this.close();
        	}
        };

        // 디바이스 버튼
        this.NUB_BOMI_CONT_POP_ondevicebuttonup = function(obj,e)
        {
        	// 뒤로가기 버튼
        	if (e.button == 2)
        	{
        		this.close();
        	}
        };

        // 프로그램 선택 버튼 생성
        this.fn_bomi_cont_select = function()
        {
        	let top = 20;
        	const width = 160;
        	const height = 50;
        	const hgap = 20;		// 가로간격
        	let vgap = 0;		// 세로간격
        	let left = 10;

        	for(let j = 0; j < this.ds_bomi_cont.rowcount; j++)
        	{
        		const staId = "sta_btnName" + j;
        		const btnName = this.ds_bomi_cont.getColumn(j, "CMNM");		// 버튼 성명
        		const btnId = this.ds_bomi_cont.getColumn(j, "CMCD");		// 버튼 ID

        		//trace("manager left : " + left);
        		if(left > 450) // left 450 초과시 줄바꿈
        		{
        			left = 10;
        			vgap = 20;
        			top = top + height + vgap;
        		}else
        		{
        			left = left + (j == 0 ? 0 : width) + (j == 0 ? 0 : hgap);
        		}

        		//버튼 생성
        		this.fn_makeButton2(staId, btnId, btnName, left, top, width, height);
        	}
        	vgap = 50;
        	top = top + vgap;


        	const objDummy = new Div();
        	objDummy.init("div_dummy", 50, top + 50, "80%", 5);
        	this.div_pop_main.form.div_bomi_cont.addChild("div_dummy", objDummy);
        	objDummy.show();

        	this.div_pop_main.form.div_bomi_cont.form.resetScroll();
        };

        // 프로그램 버튼 생성
        this.fn_makeButton2 = function(btnId, id, name, left, top, width, height)
        {
        	const objButton = new Button();
        	objButton.init(btnId, left, top, width, height);
        	objButton.set_text(name);
        	objButton.set_cssclass("btn_tSelectRoom");
        	objButton._idCode = id;
        	objButton._idName = name;
        	objButton.addEventHandler("onclick", this.btn_select_onclick, this);

        	this.div_pop_main.form.div_bomi_cont.addChild(btnId, objButton);

        	objButton.show();
        };

        // 프로그램 버튼 선택 이벤트
        this.btn_select_onclick = function(obj,e)
        {
        	this.ds_return.clearData();
        	this.ds_return.addRow();
        	this.ds_return.setColumn(0, "CMCD", obj._idCode);
        	this.ds_return.setColumn(0, "CMNM", obj._idName);

        	this.close(this.ds_return.saveXML());
        };

        // X 버튼 (닫기)
        this.div_pop_main_btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclick",this.formClick,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.addEventHandler("ondevicebuttonup",this.NUB_BOMI_CONT_POP_ondevicebuttonup,this);
            this.addEventHandler("onload",this.NUB_BOMI_CONT_POP_onload,this);
            this.div_pop_main.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.btn_close.addEventHandler("onclick",this.div_pop_main_btn_close_onclick,this);
            this.sta_popTitle.addEventHandler("onclick",this.formClick,this);
        };
        this.loadIncludeScript("NUB_BOMI_CONT_POP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
