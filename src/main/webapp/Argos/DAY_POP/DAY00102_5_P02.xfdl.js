(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00102_5_P02");
            this.set_titletext("상태변화기록 수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_detail_update", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"sc_number\" type=\"STRING\" size=\"256\"/><Column id=\"sc_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"sc_name\" type=\"STRING\" size=\"256\"/><Column id=\"sc_code\" type=\"STRING\" size=\"256\"/><Column id=\"상태변화\" type=\"STRING\" size=\"256\"/><Column id=\"작성자명\" type=\"STRING\" size=\"256\"/><Column id=\"작성코드\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"그룹\" type=\"STRING\" size=\"256\"/><Column id=\"view_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_00","10","0","680","300",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"17","71","26","80",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"17","71","26","0",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_delete");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_00","0","70","80","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_text("수급자명");
            obj.set_textAlign("center");
            obj.set_border("1px solid gray");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_00_00","0","99","80","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("3");
            obj.set_text("작성일자");
            obj.set_textAlign("center");
            obj.set_border("1px none gray, 1px solid gray, 1px solid gray");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_00_01","0","129","80","110",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("4");
            obj.set_text("상태변화");
            obj.set_textAlign("center");
            obj.set_border("1px none gray, 1px solid gray, 1px solid gray");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_00_02","0","239","80","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_border("1px none gray, 1px solid gray, 1px solid gray");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_00_03","80","70","600","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("6");
            obj.set_textAlign("left");
            obj.set_border("1px solid gray, 1px solid gray, 1px solid gray, 1px none gray");
            obj.set_text("");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00","80","99","600","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("7");
            obj.set_textAlign("left");
            obj.set_border("1px none gray, 1px solid gray, 1px solid gray, 1px none gray");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_01","90","70","60","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("8");
            obj.set_text("수급자");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_01_00","330","70","40","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("9");
            obj.set_border("0px none, 0px none, 0px none, 1px solid gray");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00","400","70","62","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("10");
            obj.set_border("0px none, 0px none, 0px none, 1px solid gray");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_01_02","260","70","50","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("11");
            obj.set_border("0px none, 0px none, 0px none, 1px solid gray");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_00_03_01_00","80","129","600","110",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("12");
            obj.set_textAlign("left");
            obj.set_border("1px none gray, 1px solid gray, 1px solid gray, 1px none gray");
            obj.set_enable("true");
            obj.set_text("");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00","80","239","600","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("13");
            obj.set_textAlign("left");
            obj.set_border("1px none gray, 1px solid gray, 1px solid gray, 1px none gray");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_worker","3","240","74","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("14");
            obj.set_text("작성자");
            obj.set_cssclass("btn_worker");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_00_04","0","40","80","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("15");
            obj.set_text("기록번호 : ");
            obj.set_textAlign("center");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_00_04_00","80","40","70","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("16");
            obj.set_text("기록번호");
            obj.set_textAlign("center");
            this.div_00.addChild(obj.name, obj);

            obj = new TextArea("txt_00","87","134","583","97",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("17");
            obj.set_wordWrap("char");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_01_01","90","100","70","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("18");
            obj.set_text("일자");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_01_02_00","260","100","50","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("19");
            obj.set_border("0px none, 0px none, 0px none, 1px solid gray");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_01_02_01","260","239","50","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("20");
            obj.set_border("0px none, 0px none, 0px none, 1px solid gray");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_name","90","240","60","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("21");
            obj.set_text("이름");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_01_03","270","70","50","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("22");
            obj.set_text("성별");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_01_03_00","340","70","50","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("23");
            obj.set_text("그룹");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_01_03_01","410","70","60","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("24");
            obj.set_text("코드");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_code","270","240","130","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("25");
            obj.set_text("코드");
            this.div_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,300,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_00.form.sta_00_04_00","text","ds_detail_update","sc_number");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_00.form.sta_01","text","ds_detail_update","sc_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_00.form.sta_01_03","text","ds_detail_update","성별");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_00.form.sta_01_03_00","text","ds_detail_update","그룹");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_00.form.sta_01_03_01","text","ds_detail_update","sc_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_00.form.sta_name","text","ds_detail_update","작성자명");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_00.form.sta_code","text","ds_detail_update","작성코드");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_00.form.txt_00","value","ds_detail_update","상태변화");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_00.form.sta_01_01","text","ds_detail_update","view_nalja");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00102_5_P02.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00102_5_P02.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00102_5_P02.xfdl", function() {
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;


        //onload 이벤트
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj,e,false);
        	//팝업창 열 때 데이터셋 초기화
        	this.ds_detail_update.clearData();
        	this.ds_detail_update.addRow();
        	//팝업창을 열 때 param으로 넘겨준 데이터
        	this.ds_detail_update.setColumn(0, "sicode", this.parent.sicode);
        	this.ds_detail_update.setColumn(0, "sc_number", this.parent.sc_number);
        	this.ds_detail_update.setColumn(0, "sc_nalja", this.parent.sc_nalja);
        	//날짜 형식 변경(2022.05.30)
        	var nalja = this.ds_detail_update.getColumn(0,"sc_nalja");
        	var year = nalja.substr(0,4);
        	var month = nalja.substr(4,2);
        	var day = nalja.substr(6,2);
        	var view_nalja = year + "." + month + "." + day;

        	this.ds_detail_update.setColumn(0, "view_nalja", view_nalja);
        	this.ds_detail_update.setColumn(0, "sc_name", this.parent.sc_name);
        	this.ds_detail_update.setColumn(0, "sc_code", this.parent.sc_code);
        	this.ds_detail_update.setColumn(0, "상태변화", this.parent.text);
        	this.ds_detail_update.setColumn(0, "작성자명", this.parent.writer);
        	this.ds_detail_update.setColumn(0, "작성코드", this.parent.wCode);
        	this.ds_detail_update.setColumn(0, "성별", this.parent.gender);
        	this.ds_detail_update.setColumn(0, "그룹", this.parent.group);
        	this.ds_detail_update.setColumn(0, "date", this.parent.date);
        };
        /************************************************************************
         * Validation Check
         ************************************************************************/


        //저장 전 validation check
        this.fn_save_pre = function ()
        {
        	if (this.confirm("저장하시겠습니까?"))
        	{
        		var stat = this.div_00.form.txt_00.value;
        		var name = this.div_00.form.sta_name.text;
        		var code = this.div_00.form.sta_code.text;

        		this.ds_detail_update.setColumn(0,"상태변화", stat);
        		this.ds_detail_update.setColumn(0,"작성자명", name);
        		this.ds_detail_update.setColumn(0,"작성코드", code);
        		this.ds_detail_update.set_updatecontrol(false);
        		this.ds_detail_update.setRowType(0,Dataset.ROWTYPE_UPDATE);
        		this.ds_detail_update.set_updatecontrol(true);
        		return true;
        	}
        	else
        	{
        		return false;
        	}
        };

        //삭제 전 validation check
        this.fn_delete_pre = function ()
        {
        	if (this.confirm("삭제하시겠습니까?"))
        	{
        		this.ds_detail_update.set_updatecontrol(false);
        		this.ds_detail_update.setRowType(0,Dataset.ROWTYPE_DELETE);
        		this.ds_detail_update.set_updatecontrol(true);
        		return true;
        	}
        	else
        	{
        		return false;
        	}
        };
        /************************************************************************
         * Transaction Func
         ************************************************************************/
        //저장
        this.fn_save = function()
        {
        	//validation check
        	if (!this.fn_save_pre())
        	{
        		return;
        	}

         	var svcId = "update";
         	var params = "/commonController.do";
         	var inDatasets = "input1=ds_detail_update:U";
         	var outDatasets = "";
         	var argument = "method=update "
        				 + "sqlId=DAY00102_5_P02.DAY00102_5_P02_DS_DETAIL_U ";
         	var callbackFunc = "fn_callback";
         	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        }

        //삭제
        this.fn_delete = function ()
        {
        	//validation check
        	if (!this.fn_delete_pre())
        	{
        		return;
        	}

         	var svcId = "delete";
         	var params = "/commonController.do";
         	var inDatasets = "input1=ds_detail_update:U";
         	var outDatasets = "";
         	var argument = "method=delete "
        				 + "sqlId=DAY00102_5_P02.DAY00102_5_P02_DS_DETAIL_D ";
         	var callbackFunc = "fn_callback";
         	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function (strSvcId, nErrorCode, strErrorMsg)
        {	//0 이면 트랜잭션 성공
        	if (nErrorCode == 0)
        	{
        		if (strSvcId == "update")
        		{
        			this.alert("저장되었습니다.");
        			//저장 후 데이터셋 return
        			this.ds_return.copyData(this.ds_detail_update);
        			//내부 데이터 삭제
        			this.ds_return.clearData();

        			this.ds_return.addRow();//행 추가
        			this.ds_return.copyRow(0,this.ds_detail_update,0);

        			this.close(this.ds_return.saveXML());//xml로 저장 후 close

        		} else if (strSvcId == "delete")
        		{
        			this.alert("삭제되었습니다.");
        			//팝업 close시 데이터셋이 전달되었는지 부모에서 체크하기 때문에 비어있는 ds_return을 리턴
        			this.ds_return.clearData();
        			this.close(this.ds_return.saveXML());
        		}
        	}
        	else
        	{
        		Sct.alert(this,"",strErrorMsg);
        	}
        };

        /************************************************************************
         * Component Event
         ************************************************************************/
        //저장 버튼
        this.div_00_btn_save_onclick = function(obj,e)
        {

        	//상태변화 길이가 2글자보다 작으면 경고
        	var txt_val = this.div_00.form.txt_00.value.trim();
        	//4byte로 처리
        	var txt_len = txt_val.byteLength();
        	if (txt_len <4)
        	{
        		this.alert("상태변화를 2글자 이상 입력해주세요");
        		return;
        	}

        	this.fn_save();
        };
        //삭제 버튼
        this.div_00_btn_delete_onclick = function(obj,e)
        {
        	this.fn_delete();
        };
        /************************************************************************
         * Popup Click Event
         ************************************************************************/

        //작성자 팝업 버튼 클릭
        this.div_00_btn_worker_onclick = function(obj,e)
        {
        	const param = {
        			SICODE : this.ds_detail_update.getColumn(0,"sicode")
        		,	DATE : this.ds_detail_update.getColumn(0, "date")
        	};

        	Sct.popup(this, "emp", 450, 400, "입력담당자 선택", param, "DAY_POP::DAYEMP_5_PP.xfdl", "fn_popCallback");
        };
        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return; //strDs의 데이터로 xml 파일이 옴

        	//부모에서 자식 데이터셋을 활용하기 위한 메소드
        	const objDs = this.gfn_createReturnDs(this, "ds_return", strDs);

        	switch(popid)
        	{
        		case "emp":
        			//DEL컬럼:지움 버튼을 클릭하면 DEL이 1이된다
        			if (objDs.getColumn(0, "DEL") != "1")
        			{	//지움 버튼을 클릭하지 않은 경우 작성자 할당
        				//작성자명
        				const name = nexacro.trim(objDs.getColumn(0, "c_name"));
        				//작성코드
        				const staffid = objDs.getColumn(0, "c_staffid");
        				this.ds_detail_update.setColumn(0, "작성자명", name);
        				this.ds_detail_update.setColumn(0, "작성코드", staffid);

        			}
        			else//지움 버튼을 클릭
        			{
        				this.ds_detail_update.setColumn(0, "작성자명", "");
        				this.ds_detail_update.setColumn(0, "작성코드", "");

        			}
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_00.form.btn_save.addEventHandler("onclick",this.div_00_btn_save_onclick,this);
            this.div_00.form.btn_delete.addEventHandler("onclick",this.div_00_btn_delete_onclick,this);
            this.div_00.form.sta_00_03.addEventHandler("onclick",this.div_btnPrint00_sta_00_03_onclick,this);
            this.div_00.form.sta_00_03_01_00.addEventHandler("onclick",this.div_btnPrint00_sta_00_03_onclick,this);
            this.div_00.form.btn_worker.addEventHandler("onclick",this.div_00_btn_worker_onclick,this);
            this.div_00.form.txt_00.addEventHandler("onchanged",this.div_00_txt_00_onchanged,this);
        };
        this.loadIncludeScript("DAY00102_5_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
