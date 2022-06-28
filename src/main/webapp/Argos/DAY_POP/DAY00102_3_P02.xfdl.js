(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00102_P02");
            this.set_titletext("상태변화기록 수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(710,360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_item", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"sc_number\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"date_original\" type=\"STRING\" size=\"256\"/><Column id=\"sc_code\" type=\"STRING\" size=\"256\"/><Column id=\"sc_name\" type=\"STRING\" size=\"256\"/><Column id=\"sc_change\" type=\"STRING\" size=\"256\"/><Column id=\"create_nm\" type=\"STRING\" size=\"256\"/><Column id=\"create_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"sex_nm\" type=\"STRING\" size=\"256\"/><Column id=\"view_manager\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_body1","3","34","686","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1","1","34","83","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("수급자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00","88","38","90","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00","227","38","35","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00","267","38","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_01","181","38","35","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01","3","67","686","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1_00","1","67","83","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("7");
            obj.set_text("작성일자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00_00_01_00","66","5","224","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("8");
            obj.set_textAlign("left");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body10","3","100","686","205",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_content2","88","104","597","196",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("10");
            obj.set_maxlength("500");
            obj.set_wordWrap("char");
            obj.set_scrollbartype("fixed");
            obj.set_scrolltype("vertical");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head10","1","100","83","205",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("상태변화");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body8","1","304","688","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_01","88","308","224","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("13");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00","1","5","63","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("15");
            obj.set_text("기록번호  :");
            obj.set_textAlign("left");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"4","70","26","1",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("16");
            obj.set_text("삭제");
            obj.set_cssclass("btn_delete");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"4","70","26","76",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("17");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1_01","1","304","83","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager","5","308","75","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("14");
            obj.set_text("작성자");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00_00_00_00_00","88","71","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("19");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",710,360,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_cont.form.sta_body1_00","text","ds_item","sc_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.sta_body1_00_00_00","text","ds_item","m_group");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.sta_body1_00_00","text","ds_item","sc_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.sta_body1_00_01","text","ds_item","sex_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.txt_content2","value","ds_item","sc_change");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.sta_body1_00_00_01_01","text","ds_item","view_manager");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.sta_body1_00_00_01_00_00_01_00","text","ds_item","sc_number");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cont.form.sta_body1_00_00_01_00_00_00_00_00","text","ds_item","date");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00102_3_P02.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00102_3_P02.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00102_3_P02.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00102_R01
         * 화면명   	: 상태변화기록 수정
         * 화면설명 	: 상태변화기록을 조회하고 수정하는 팝업
         * 작성일   	: 2022-04-20
         * 작성자   	: 박영주
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *	2022-00-00
         ***********************************************************************
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/

        //const fv_flag = this.parent.FLAG;

        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	this.ds_item.set_enableevent(false);
        	this.ds_item.setColumn(0, "sicode", this.parent.SICODE);
        	//this.ds_item.setColumn(0, "sc_number", nexacro.toNumber(this.parent.SC_NUMBER));
        	this.ds_item.setColumn(0, "sc_number", this.parent.SC_NUMBER);
        	this.ds_item.setColumn(0, "date", this.parent.DATE);
        	this.ds_item.setColumn(0, "date_original", this.parent.DATE);
        	// 가져온 date를 점 없는 형식으로 따로 보관 - date_original로
        	var date = this.parent.DATE + "";
        	var date_original = date.replaceAll(".","");
        	console.log("date_original: " + date_original);
        	this.ds_item.setColumn(0, "date_original", date_original);
        	this.ds_item.setColumn(0, "sc_code", this.parent.SC_CODE);
        	this.ds_item.setColumn(0, "sc_name", this.parent.SC_NAME);
        	this.ds_item.setColumn(0, "sc_change", this.parent.SC_CHANGE);
        	this.ds_item.setColumn(0, "create_nm", this.parent.CREATE_NM);
        	this.ds_item.setColumn(0, "create_code", this.parent.CREATE_CODE);
        	this.ds_item.setColumn(0, "m_group", this.parent.M_GROUP);
        	this.ds_item.setColumn(0, "sex_nm", this.parent.SEX_NM);
        	this.ds_item.setColumn(0, "view_manager", this.parent.VIEW_MANAGER);
        	this.ds_item.set_enableevent(true);

        	this.ds_item.applyChange();	// rowType normal로
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        this.fn_update_pre = function()
        {
        	if (this.ds_item.getRowType(0)==1) {
        		alert("변경사항이 없습니다.");
        		return false;
        	}

        	// 작성자가 지정되지 않은 경우
        	if (Sct.Util.isEmpty(this.ds_item.getColumn(0, "view_manager")))
        	{
        		this.alert("작성직원을 지정해야합니다.");
        		return false;
        	}

        	// 한글기준 2글자 이상인지 체크(영문,숫자 4글자)
        	var stateText = this.ds_item.getColumn(0,"sc_change");
        	stateText = nexacro.trim(stateText);
        	this.ds_item.setColumn(0,"sc_change",stateText);
        	var txtLen = stateText.byteLength();
        	if (txtLen < 4) {
        		this.alert("상태변화 기록을 2글자 이상 입력하세요");
        		return false;
        	}

        	return true;
        }

        this.fn_delete_pre = function()
        {
        	var resp = confirm("상태변화기록 정보를 삭제합니다. 삭제되면 복구되지 않습니다. 그래도 삭제하시겠습니까?");
        	if (resp) {
        		this.ds_item.set_updatecontrol(false);
        		this.ds_item.setRowType(0, Dataset.ROWTYPE_DELETE);
        		this.ds_item.set_updatecontrol(true);

        		return true;
        	} else {
        		return false;
        	}
        }

        this.fn_update = function()
        {
        	// validation
        	if (!this.fn_update_pre()) return;

        	const svcId = "update";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_item:U";
        	const outDatasets = "";
        	const argument = "method=update "
        				+ "sqlId=DAY00102_3_P02.DAY00102_3_P02_DS_ITEM_U ";
        	console.log("fn_update: rowType: " + this.ds_item.getRowType(0));
        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 삭제
        this.fn_delete = function()
        {
        	if (!this.fn_delete_pre()) return;

        	const svcId = "delete";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_item:U";
        	const outDatasets = "";
        	const argument = "method=delete "
        					+ "sqlId=DAY00102_3_P02.DAY00102_3_P02_DS_ITEM_D ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{

        		} else if(strSvcID == "update")
        		{
        			alert("상태기록 저장완료!");
        			this.ds_return.clearData();
        			this.ds_return.addColumn("REFRESH", "STRING");
        			var nRow = this.ds_return.addRow();
        			this.ds_return.setColumn(nRow, "REFRESH", "Y");

        			this.close(this.ds_return.saveXML());

        		} else if(strSvcID == "delete")
        		{
        			alert("상태기록 삭제완료!");
        			this.ds_return.clearData();
        			this.ds_return.addColumn("REFRESH", "STRING");
        			var nRow = this.ds_return.addRow();
        			this.ds_return.setColumn(nRow, "REFRESH", "Y");

        			this.close(this.ds_return.saveXML());
        		}
        	}
        	else
        	{
        		this.alert(strErrorMsg);
        	}
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/

        this.btn_manager_onclick = function(obj,e)
        {
        	const param = {
        			SICODE : this.ds_item.getColumn(0,"sicode")
        		,	DATE : this.ds_item.getColumn(0, "date_original")
        		,	FLAG : ""
        	};

        	Sct.popup(this, "employee", 450, 400, "작성자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };


        /***********************************************************************
         * Popup Functions
         ***********************************************************************/

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		// 작성자
        		case "employee" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				const name = nexacro.trim(objDs.getColumn(0, "c_name"));
        				const staffid = objDs.getColumn(0, "c_staffid");
        				this.ds_item.setColumn(0, "create_nm", name);
        				this.ds_item.setColumn(0, "create_code", staffid);
        				this.ds_item.setColumn(0, "view_manager", name + "/" + staffid);
        			}
        			else
        			{
        				this.ds_item.setColumn(0, "create_nm", "");
        				this.ds_item.setColumn(0, "create_code", "");
        				this.ds_item.setColumn(0, "view_manager", "");
        			}
        			break;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.btn_delete.addEventHandler("onclick",this.fn_delete,this);
            this.div_cont.form.btn_save.addEventHandler("onclick",this.fn_update,this);
            this.div_cont.form.btn_manager.addEventHandler("onclick",this.btn_manager_onclick,this);
        };
        this.loadIncludeScript("DAY00102_3_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
