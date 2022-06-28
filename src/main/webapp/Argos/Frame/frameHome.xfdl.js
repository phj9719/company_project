(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameHome");
            this.set_titletext("보호자 및 서비스 공지 리스트");
            this.set_background("white");
            this.set_visible("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1600,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_notice", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"NOT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NOT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GROUP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_service_notice", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"NOT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NOT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GROUP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_left","20","40","782","198",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_notice","0","25",null,"147","0",null,null,null,null,null,this.div_left.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_notice");
            obj.set_autosizebandtype("body");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"600\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사업장\"/><Cell col=\"2\" displaytype=\"normal\" text=\"공장\"/><Cell col=\"3\" text=\"작성일\"/><Cell col=\"4\" text=\"제목\"/><Cell col=\"5\" text=\"등록자명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"combotext\" text=\"bind:BIZ_CD\" combodataset=\"gds_biz\" combocodecol=\"BIZ_CD\" combodatacol=\"BIZ_NM\" combotype=\"filterlike\"/><Cell col=\"2\" displaytype=\"combotext\" text=\"bind:PLANT_CD\" combodataset=\"gds_plant\" combocodecol=\"PLANT_CD\" combodatacol=\"PLANT_NM\" combotype=\"filterlike\"/><Cell col=\"3\" text=\"bind:NOT_DT\" displaytype=\"date\"/><Cell col=\"4\" text=\"bind:TITLE\" displaytype=\"normal\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:REG_USER_NM\"/></Band></Format></Formats>");
            this.div_left.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left01","0","0","194","22",null,null,null,null,null,null,this.div_left.form);
            obj.set_taborder("1");
            obj.set_text("보호자 공지");
            obj.set_cssclass("lb01");
            this.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","20","260","782","199",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_service_notice","0","23",null,"147","0",null,null,null,null,null,this.div_right.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_service_notice");
            obj.set_autosizebandtype("body");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"600\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사업장\"/><Cell col=\"2\" displaytype=\"normal\" text=\"공장\"/><Cell col=\"3\" text=\"작성일\"/><Cell col=\"4\" text=\"제목\"/><Cell col=\"5\" text=\"등록자명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"combotext\" text=\"bind:BIZ_CD\" combodataset=\"gds_biz\" combocodecol=\"BIZ_CD\" combodatacol=\"BIZ_NM\" combotype=\"filterlike\"/><Cell col=\"2\" displaytype=\"combotext\" text=\"bind:PLANT_CD\" combodataset=\"gds_plant\" combocodecol=\"PLANT_CD\" combodatacol=\"PLANT_NM\" combotype=\"filterlike\"/><Cell col=\"3\" text=\"bind:NOT_DT\" displaytype=\"date\"/><Cell col=\"4\" text=\"bind:TITLE\" displaytype=\"normal\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:REG_USER_NM\"/></Band></Format></Formats>");
            this.div_right.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left01","0","0","194","22",null,null,null,null,null,null,this.div_right.form);
            obj.set_taborder("1");
            obj.set_text("시스템  공지");
            obj.set_cssclass("lb01");
            this.div_right.addChild(obj.name, obj);

            obj = new Div("div_head","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Head Area");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_border(",0px solid rgba(213,213,213,1),0px solid rgba(213,213,213,1),0px solid rgba(166,166,169,1)");
            obj.set_color("#717171");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none");
            obj.set_font("10.5pt \"Noto Sans KR Regular\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_navi","45","11","907","17",null,null,null,null,null,null,this.div_head.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_border("0px solid rgba(178,187,195,1)");
            obj.set_color("#333333");
            obj.set_padding("0px 0px 0px 12px");
            obj.set_background("transparent");
            this.div_head.addChild(obj.name, obj);

            obj = new Button("btn_closeFrame","20","6","28","28",null,null,null,null,null,null,this.div_head.form);
            obj.set_taborder("0");
            obj.set_cursor("pointer");
            obj.set_text("b");
            obj.set_color("transparent");
            obj.set_background("url(\'imagerc::menubtn_close.png\') transparent");
            obj.set_borderRadius("0px");
            this.div_head.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1600,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("frameHome.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("frameHome.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("frameHome.xfdl","lib::cur_com.xjs");
        this.addIncludeScript("frameHome.xfdl","lib::sct_util.xjs");
        this.registerScript("frameHome.xfdl", function() {
        /***********************************************************************
         * 화면ID 	 : frameHome
         * 화면명   : 보호자 및 서비스 공지 리스트
         * 화면설명 : 보호자 및 서비스 공지 리스트
         * 작성일 	 : 2021-07-05 11:30
         * 작성자   : SOOIM
         * 수정이력 :
         ***********************************************************************
         *    	수정일     	수정자   	내용
         *		2022-01-06		조기종		메뉴 접고 펴는 아이콘 추가
         *
         ***********************************************************************
         ***********************************************************************
         */

        /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/
        this.executeIncludeScript("lib::cur_com.xjs"); /*include "lib::cur_com.xjs"*/
        this.executeIncludeScript("lib::sct_util.xjs"); /*include "lib::sct_util.xjs"*/
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_foldHeadYn = false;
        this.fv_foldInnerYn = false;

        var fv_Company = nexacro.getApplication().gds_userInfo.getColumn(0,"COMPANY_CD");
        var fv_ServiceTp = nexacro.getApplication().gds_userInfo.getColumn(0,"SERVICE_TP");
        var fv_appTp = nexacro.getApplication().gv_applicationTp;

        this.fv_isOpen = true;
        this.auth;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e);

        	// 아래 코드 없으면 폼이 드래그로 움직임
        	nexacro.getApplication().av_homeFrame.set_dragmovetype("none");

        	this.ds_search.setColumn(0,"COMPANY_CD",fv_Company);
        	this.ds_search.setColumn(0,"SERVICE_TP",fv_ServiceTp);
        	this.ds_search.setColumn(0,"APPLICATION_TP",fv_appTp);

        	this.fn_search();

        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //조회
        this.fn_search = function ()
        {
        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_search input2=ds_search";
        	var outDatasets = "ds_service_notice=output1 ds_notice=output2";
        	var argument = "method=getList "
        		+ "sqlId='CM_HOME.CM_HOME_DS_SERVICE_NOTICE_S CM_HOME.CM_HOME_DS_NOTICE_S' ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{

        		}
        	}
        	else
        	{
        		Sct.alert(this, "", strErrorMsg);
        	}
        };

        this.div_right_grd_service_notice_oncellclick = function(obj,e)
        {
        	var param = {
        		NOT_SEQ : this.ds_service_notice.getColumn(this.ds_service_notice.rowposition,"NOT_SEQ")
        	};
        	Sct.popup(this, "SRV_NOT_PP", 400, 400, "", param, "CM_POP::HOME_SERVICE_NOTICE_PP.xfdl", "fn_popCallback");
        };

        this.div_left_grd_notice_oncellclick = function(obj,e)
        {
        	var param = {
        		NOT_SEQ : this.ds_notice.getColumn(this.ds_notice.rowposition,"NOT_SEQ")
        	};
        	Sct.popup(this, "NOT_PP", 400, 400, "", param, "CM_POP::HOME_NOTICE_PP.xfdl", "fn_popCallback");
        };

        /**
         * 설명 	: 메뉴 프레임을 닫는다.
         * params  	: None
         * return Type 	: None
         */
        this.fn_closeFrame = function ()
        {
        	nexacro.getApplication().av_hFrameSet0.set_separatesize(nexacro.getApplication().av_hideMenuModeSize);
        	//this.sta_hideBar.set_visible(true);
        	//this.btn_closeFrame.set_text(">");1
        	nexacro.getApplication().av_hFrameSet0.menuFrame.form.sta_hideBar.set_visible(true);
        	this.div_head.form.btn_closeFrame.set_background("url('imagerc::menubtn_open.png') no-repeat right center transparent");
        	//this.btn_closeFrame.style.set_background_image("url('imagerc::menubtn_open.png')");
        };

        /**
         * 설명 	: 메뉴 프레임을 연다.
         * params  	: None
         * return Type 	: None
         */
        this.fn_openFrame = function ()
        {
        	nexacro.getApplication().av_hFrameSet0.set_separatesize(nexacro.getApplication().av_showMenuModeSize);
        	//this.sta_hideBar.set_visible(false);
        	//this.btn_closeFrame.set_text("<");
        	nexacro.getApplication().av_hFrameSet0.menuFrame.form.sta_hideBar.set_visible(false);
        	this.div_head.form.btn_closeFrame.set_background("url('imagerc::menubtn_close.png') no-repeat right center transparent");
        	//this.btn_closeFrame.style.set_background_image("url('imagerc::menubtn_close.png')");
        };

        this.btn_closeFrame_onclick = function (obj, e)
        {
        	if (this.fv_isOpen)
        	{
        		this.fn_closeFrame();
        		this.fv_isOpen = false;
        	}
        	else
        	{
        		this.fn_openFrame();
        		this.fv_isOpen = true;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.frameHome_ontimer,this);
            this.div_left.form.grd_notice.addEventHandler("oncellclick",this.div_left_grd_notice_oncellclick,this);
            this.div_right.form.grd_service_notice.addEventHandler("oncellclick",this.div_right_grd_service_notice_oncellclick,this);
            this.div_head.form.btn_closeFrame.addEventHandler("onclick",this.btn_closeFrame_onclick,this);
            this.ds_notice.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
            this.ds_notice.addEventHandler("onrowposchanged",this.ds_list_onrowposchanged,this);
            this.ds_service_notice.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
            this.ds_service_notice.addEventHandler("onrowposchanged",this.ds_list_onrowposchanged,this);
            this.ds_search.addEventHandler("onrowposchanged",this.ds_notice_onrowposchanged,this);
        };
        this.loadIncludeScript("frameHome.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
