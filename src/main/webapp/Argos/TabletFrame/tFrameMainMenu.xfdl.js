(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("tFrameMainMenu");
            this.set_titletext("MainMenu");
            this.set_background("#4594cd");
            if (Form == this.constructor)
            {
                this._setFormPosition(100,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_tMainMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"INT\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SHOW_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CLS_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEAR_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"PRN_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"APPV_AUTH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PLANT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PK1\" type=\"STRING\" size=\"256\"/><Column id=\"PK2\" type=\"STRING\" size=\"256\"/><Column id=\"STRING1\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_mainMenuControl","9%","1%",null,"89%","9%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("autoindicator");
            obj.set_formscrollindicatorsize("0");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_fall","10%",null,null,"55","10%","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("transparent");
            obj.set_image("url(\'theme://images/btn_falling_basic.png\')");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Tablet",100,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("tFrameMainMenu.xfdl","lib::sct_util.xjs");
        this.addIncludeScript("tFrameMainMenu.xfdl","lib::sct_com.xjs");
        this.registerScript("tFrameMainMenu.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: tFrameMainMenu
         * 화면명   	: tFrameMainMenu
         * 화면설명 	: 태블릿 왼쪽 대메뉴
         * 작성일   	: 2021-05-26
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         *     수정일     수정자   내용
         ***********************************************************************
         *
         ***********************************************************************
         */

        /***********************************************************************
         * Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_util.xjs"); /*include "lib::sct_util.xjs"*/;
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_btnArr = new Array();
        this.fv_menuIdx = 1;

        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/

        this.tFrameMainMenu_onload = function(obj,e)
        {
        	//trace("MainMenu Onload");
        	this.fn_initDataset();
        	this.fn_makeMainMenuButton(this.ds_tMainMenu);
        	for(let i = 0; i < this.div_mainMenuControl.form.components.length; i++)
        	{
        		this.fv_btnArr.push(this.div_mainMenuControl.form.components[i]);
        	}
        	this.fn_setBtnImg();

        	this.div_mainMenuControl.form.resetScroll();

        	//this.fn_search();
        };

        /***********************************************************************
         * Form Initialize Functions
         ***********************************************************************/
        /**
         * 설명 	: Dataset을 초기화한다.
         * params  	: None
         * return Type 	: None
         */
        this.fn_initDataset = function ()
        {
        	nexacro.getApplication().gds_menu.set_enableevent(false);
        	this.ds_tMainMenu.clearData();
        	nexacro.getApplication().gds_menu.filter("MENU_LEVEL==0");
        	this.ds_tMainMenu.copyData(nexacro.getApplication().gds_menu, true);
        	nexacro.getApplication().gds_menu.filter("");
        	nexacro.getApplication().gds_menu.set_enableevent(true);
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        this.fn_search = function()
        {
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_list=output1";
        	let argument = "method=getList ";
        		argument += "sqlId=TEST0.TEST0_DS_LIST_S ";
        		argument += "";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			this.killTimer(1);
        			//trace(this.ds_list.rowcount);
        			if(this.ds_list.rowcount > 0)
        			{
        				this.img_fall.set_image('theme://images/btn_falling_alert.gif');
        				this.setTimer(1, 60000);
        			}
        			else
        			{
        				this.img_fall.set_image('theme://images/btn_falling_basic.png');
        				this.setTimer(1, 60000);
        			}
        		}
        	}
        	else
        	{
        		alert("오류발생");
        	}
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/
        /**
         * 설명 	: 0레벨 메뉴 버튼을 생성한다.
         * params  	: 1. ds - 메뉴 Dataset
         * return Type 	: None
         */
        this.fn_makeMainMenuButton = function (ds)
        {
        	const nRowCnt = ds.rowcount;

        	const width = null;
        	const height = 82;//70
        	const left = "0%";
        	let top = 0;
        	const right = "0%";
        	const bottom = null;
        	const gap = 12;//8

        	for (let i = 0; i < nRowCnt; i++)
        	{
        		const sId = "btn_" + ds.getColumn(i, "MENU_CD");
        		const sName = ds.getColumn(i, "MENU_NM");
        		top = top + (i == 0 ? 0 : height) + gap;
        		this._makeButton(sId, sName, left, top, width, height, right, bottom);
        	}
        };

        /**
         * 설명 	: 메뉴 버튼을 그린다.
         * params  	: 1. id - Button ID
         2. name - Button Text
         3. left
         4. top
         5. width
         6. height
         7. right
         8. bottom
         * return Type 	: None
         */
        this._makeButton = function (id, name, left, top, width, height, right, bottom)
        {
        	const objButton = new Button();
        	objButton.init(id, left, top, width, height, right, bottom);
        	objButton.set_text(name);
        	objButton.set_cssclass("tMainMenu");
        	objButton.__menuid = id.replace("btn_", "");
        	objButton.addEventHandler("onclick", this.__menu_onclick, this);
        	objButton.addEventHandler("onsetfocus", this.__menu_onsetfocus, this);

        	this.div_mainMenuControl.form.addChild(id, objButton);
        	objButton.show();
        };

        /**
         * 설명 	: Menu Button Click Event.
         * params  	: 1. obj
         2. e
         * return Type 	: None
         */
        this.__menu_onclick = function (obj, e)
        {
        	const id = obj.__menuid;
        	const grp = this.ds_tMainMenu.lookup("MENU_CD", id, "MENU_GRP");

        	// 위쪽에 서브메뉴 만들기
        	nexacro.getApplication().av_subMenu.form.fn_makeSubMenu(grp);

        	// 대메뉴 클릭시 첫 서브메뉴화면 바로 띄우기
        	nexacro.getApplication().av_subMenu.form.div_subMenuControl.form.components[0].setFocus();
        	nexacro.getApplication().av_subMenu.form.div_subMenuControl.form.components[0].click();
        };

        // 메뉴 버튼 focus 이벤트
        this.__menu_onsetfocus = function(obj, e)
        {
        	this.fn_menuNonSelect();

        	const anyIcon = obj.icon;
        	const arAnyIcon = anyIcon.split("_");
        	const anyIcon2 = arAnyIcon[0] + "_on.png')";

        	obj.set_icon(anyIcon2);
        	obj.set_color("#ffffff");
        	obj.set_background("#47afe1");
        	obj.set_borderRadius("8px");
        };

        // 메뉴 전체 비활성 색으로 세팅
        this.fn_menuNonSelect = function()
        {
        	for(let i = 0; i < this.fv_btnArr.length; i++) {
        		const anyIcon = this.div_mainMenuControl.form.all[this.fv_btnArr[i].name].icon;
        		this.div_mainMenuControl.form.all[this.fv_btnArr[i].name].set_background("");
        		if(anyIcon.indexOf("_on") != -1) {
        			const arAnyIcon = anyIcon.split("_");
        			const anyIcon2 = arAnyIcon[0] + "_off.png')";
        			this.div_mainMenuControl.form.all[this.fv_btnArr[i].name].set_icon(anyIcon2);
        			this.div_mainMenuControl.form.all[this.fv_btnArr[i].name].set_color("#d3e2f1");
        		}
        	}
        };

        // 메뉴 아이콘 세팅
        this.fn_setBtnImg = function ()
        {
        	//trace("fn_setBtnImg");

        	for (let i = 0; i < this.fv_btnArr.length; i++)
        	{
        		//trace("btn : " + this.fv_btnArr[i].name);
        		//trace("btnText : " + this.fv_btnArr[i].text);
        		let imgFileNm = "";
        		const btnText = this.fv_btnArr[i].text;
        		switch (btnText) {
        			case '호실현황' :
        				imgFileNm = "menu1_off.png";
        				break;
        			case '요양일지' :
        				imgFileNm = "menu2_off.png";
        				break;
        			case '간호일지' :
        				imgFileNm = "menu3_off.png";
        				break;
        			case '물리치료' :
        				imgFileNm = "menu4_off.png";
        				break;
        			case '인지훈련' :
        				imgFileNm = "menu5_off.png";
        				break;
        			case '모니터링' :
        				imgFileNm = "menu6_off.png";
        				break;
        			case '챗봇' :
        				imgFileNm = "menu7_off.png";
        				break;
        		}
        		const name = this.fv_btnArr[i].name;
        		this.div_mainMenuControl.form.all[name].set_icon("url('theme://images/" + imgFileNm + "')");
        	}
        };

        this.fn_timer = function(obj,e)
        {
        	if(e.timerid == 1)
        	{
        		this.fn_search();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.tFrameMainMenu_onload,this);
            this.addEventHandler("ontimer",this.fn_timer,this);
        };
        this.loadIncludeScript("tFrameMainMenu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
