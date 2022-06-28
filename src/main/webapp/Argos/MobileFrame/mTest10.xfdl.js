(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("회원정보수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FAM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CELLPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","5%","20",null,"40","5%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("회원정보수정");
            obj.set_verticalAlign("top");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","180","116","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_borderRadius("50px");
            obj.set_background("url(\'theme://images/ico_mypage_profile2.png\') no-repeat center");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","247","175","46","44",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("url(\'theme://images/ico_mypage_setting2.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","5%","260",null,"36","5%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("입소자 성함");
            obj.set_textAlign("center");
            obj.set_font("bold 15pt/normal \"Noto Sans CJK KR Regular\"");
            obj.set_color("#7d7f97");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","5%","309",null,"35","5%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","5%","370",null,"36","5%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("보호자 성함");
            obj.set_textAlign("center");
            obj.set_color("#7d7f97");
            obj.set_font("bold 15pt/normal \"Noto Sans CJK KR Regular\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fam_name","5%","419",null,"35","5%",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","5%","480",null,"36","5%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("보호자 연락처");
            obj.set_textAlign("center");
            obj.set_color("#7d7f97");
            obj.set_font("bold 15pt/normal \"Noto Sans CJK KR Regular\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fam_cellphone","5%","529",null,"35","5%",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","5.00%","630",null,"36","5.00%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("※응급 상황 발생 시 연락받으실 전화번호를 입력해주세요");
            obj.set_cssclass("sta_txt");
            this.addChild(obj.name, obj);

            obj = new Button("btn_update","5.00%","687",null,"54","5.00%",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("회원정보수정");
            obj.set_cssclass("btn_basic");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_notice","23","579","434","41",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("공지 수신 여부");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",480,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","edt_fam_name","value","ds_list","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_fam_cellphone","value","ds_list","CELLPHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","chk_notice","value","ds_list","ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("mTest10.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("mTest10.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("mTest10.xfdl","lib::mpgm_com.xjs");
        this.registerScript("mTest10.xfdl", function() {
        /***********************************************************************
         * 화면ID    	: mTest
         * 화면명   	:
         * 화면설명 	:
         * 작성일    	: 2021-07-06
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         *     	수정일     	수정자   	내용
         *		2020-07-08		배영걸		1차수정
         ***********************************************************************
         ***********************************************************************
         */

        /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        this.executeIncludeScript("lib::mpgm_com.xjs"); /*include "lib::mpgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_currentDS = "";
        this.fv_currentGrid = "";
        this.nMoveY;
        this.fv_flag;
        // 서비스 단에서 받는 variable, 초기화 필요함
        this.outvar = "";
        this.fileGroupId = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e);

        	this.chk_notice.set_value(nexacro.getApplication().gds_mUserInfo.getColumn(0, "ADDR1"));

        	this.ds_search.setColumn(0, "COMPANY_CD", nexacro.getApplication().gds_mUserInfo.getColumn(0, "COMPANY_CD"));
        	this.ds_search.setColumn(0, "FAM_ID", nexacro.getApplication().gds_mUserInfo.getColumn(0, "FAM_ID"));

        	this.fn_search();

        	const standard = this.makeStandardObject();

        };

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	return true;
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //조회
        this.fn_search = function ()
        {
        	//validation
        	if(!this.fn_search_pre()) return;

        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_search";
        	var outDatasets = "ds_list=output1";
        	var argument = "method=getList "
        		+ "sqlId=MTEST10.MTEST10_DS_LIST_S ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //
        this.fn_save = function()
        {
        	const svcId = "save";
        	const inDs = "ds_list";
        	this.fn_save_com(svcId, inDs);
        }

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "save")
        		{
        			this.fn_search();
        			const noticeVal = this.ds_list.getColumn(0, "ADDR1");
        			if(noticeVal == 1)
        			{
        				param = {
        					flag : true,
        					company : nexacro.getApplication().gds_mUserInfo.getColumn(0, "COMPANY_CD")
        				};
        			}
        			else
        			{
        				param = {
        					flag : false,
        					company : nexacro.getApplication().gds_mUserInfo.getColumn(0, "COMPANY_CD")
        				};
        			}
        			this.standardPlugin.callMethod("NOTICE", param);
        		}
        	}
        	else
        	{
        		Sct.alert(this, "", strErrorMsg);
        	}
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/

         /***********************************************************************
         * Component Event Functions
         ***********************************************************************/

        this.chk_notice_onchanged = function(obj,e)
        {
        	let param;
        	if(e.postvalue == 1)
        	{
        		param = {
        			flag : true,
        			company : nexacro.getApplication().gds_mUserInfo.getColumn(0, "COMPANY_CD")
        		};
        		nexacro.getApplication().gds_mUserInfo.setColumn(0, "ADDR1", 1);
        	}
        	else
        	{
        		param = {
        			flag : false,
        			company : nexacro.getApplication().gds_mUserInfo.getColumn(0, "COMPANY_CD")
        		};
        		nexacro.getApplication().gds_mUserInfo.setColumn(0, "ADDR1", 0);
        	}
        	this.standardPlugin.callMethod("NOTICE", param);
        };

        this.btn_update_onclick = function(obj,e)
        {
        	this.fn_save();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.btn_update.addEventHandler("onclick",this.btn_update_onclick,this);
            this.ds_search.addEventHandler("onrowposchanged",this.ds_notice_onrowposchanged,this);
        };
        this.loadIncludeScript("mTest10.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
