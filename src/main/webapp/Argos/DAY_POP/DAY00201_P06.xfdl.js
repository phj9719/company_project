(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00201_P06");
            this.set_titletext("일 바이탈기록 조회.수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"s_date\" type=\"STRING\" size=\"256\"/><Column id=\"nalja\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"sex_nm\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"송영시간\" type=\"STRING\" size=\"256\"/><Column id=\"혈압\" type=\"STRING\" size=\"256\"/><Column id=\"혈압1\" type=\"STRING\" size=\"256\"/><Column id=\"혈압2\" type=\"STRING\" size=\"256\"/><Column id=\"맥박\" type=\"STRING\" size=\"256\"/><Column id=\"혈당\" type=\"STRING\" size=\"256\"/><Column id=\"혈당2\" type=\"STRING\" size=\"256\"/><Column id=\"체온\" type=\"STRING\" size=\"256\"/><Column id=\"체온2\" type=\"STRING\" size=\"256\"/><Column id=\"체온3\" type=\"STRING\" size=\"256\"/><Column id=\"호흡\" type=\"STRING\" size=\"256\"/><Column id=\"체중\" type=\"STRING\" size=\"256\"/><Column id=\"기침2\" type=\"STRING\" size=\"256\"/><Column id=\"인후통2\" type=\"STRING\" size=\"256\"/><Column id=\"호흡곤란2\" type=\"STRING\" size=\"256\"/><Column id=\"객담2\" type=\"STRING\" size=\"256\"/><Column id=\"기타2\" type=\"STRING\" size=\"256\"/><Column id=\"담당자\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드\" type=\"STRING\" size=\"256\"/><Column id=\"n_number\" type=\"STRING\" size=\"256\"/><Column id=\"n_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"seperator\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_record_cnt", this);
            obj._setContents("<ColumnInfo><Column id=\"cnt\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_grd","0","41",null,null,"0","35",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","10","0",null,null,"10","0",null,null,null,null,this.div_grd.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"50\"/><Column size=\"7\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"현황\"/><Cell col=\"1\" text=\"그룹\"/><Cell col=\"2\" text=\"수급자명\"/><Cell col=\"3\" text=\"성별\"/><Cell col=\"4\" text=\"나이\"/><Cell col=\"5\" text=\"생활실\"/><Cell col=\"6\" text=\"송영기록\"/><Cell col=\"7\" colspan=\"3\" text=\"혈압\"/><Cell col=\"10\" text=\"맥박\"/><Cell col=\"11\" text=\"혈당①\"/><Cell col=\"12\" text=\"혈당②\"/><Cell col=\"13\" text=\"체온①\"/><Cell col=\"14\" text=\"체온②\"/><Cell col=\"15\" text=\"체온③\"/><Cell col=\"16\" text=\"호흡\"/><Cell col=\"17\" text=\"체중\"/><Cell col=\"18\" text=\"작성자\"/></Band><Band id=\"body\"><Cell text=\"bind:s_nm\"/><Cell col=\"1\" text=\"bind:m_group\"/><Cell col=\"2\" text=\"bind:m_name\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:sex_nm\"/><Cell col=\"4\" text=\"bind:age\"/><Cell col=\"5\" text=\"bind:m_roomname\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:송영시간\"/><Cell col=\"7\" text=\"bind:혈압1\" textAlign=\"right\" border=\"1px solid #e2e2e2,0px,1px solid #e2e2e2,1px solid #e2e2e2\" edittype=\"mask\" editmaxlength=\"3\" font=\"normal bold 10pt/normal &quot;Arial&quot;\" editinputtype=\"number\" textareainputtype=\"normal\" cssclass=\"''\" maskeditformat=\"###\" maskeditlimitbymask=\"both\" maskedittrimtype=\"both\"/><Cell col=\"8\" border=\"1px solid #e2e2e2, 0px solid #e2e2e2\" text=\"bind:seperator\" font=\"normal bold 10pt/normal &quot;Arial&quot;\"/><Cell col=\"9\" text=\"bind:혈압2\" edittype=\"mask\" textAlign=\"left\" border=\"1px solid #e2e2e2,1px solid #e2e2e2,1px solid #e2e2e2,0px\" editmaxlength=\"3\" font=\"normal bold 10pt/normal &quot;Arial&quot;\" maskeditlimitbymask=\"both\" maskedittrimtype=\"both\" editinputtype=\"number\" cssclass=\"''\" maskeditformat=\"###\"/><Cell col=\"10\" text=\"bind:맥박\" edittype=\"normal\" textareainputtype=\"number\" editmaxlength=\"3\" editinputtype=\"number\" textAlign=\"right\" font=\"normal bold 10pt/normal &quot;Arial&quot;\" cssclass=\"''\"/><Cell col=\"11\" text=\"bind:혈당\" edittype=\"normal\" editinputtype=\"number\" editmaxlength=\"3\" textAlign=\"right\" font=\"normal bold 10pt/normal &quot;Arial&quot;\" cssclass=\"''\"/><Cell col=\"12\" text=\"bind:혈당2\" edittype=\"normal\" editmaxlength=\"3\" editinputtype=\"number\" textAlign=\"right\" font=\"normal bold 10pt/normal &quot;Arial&quot;\" cssclass=\"''\"/><Cell col=\"13\" text=\"bind:체온\" edittype=\"mask\" maskeditlimitbymask=\"both\" maskedittrimtype=\"both\" maskeditformat=\"##.#\" editinputtype=\"number\" textAlign=\"right\" font=\"normal bold 10pt/normal &quot;Arial&quot;\" cssclass=\"''\"/><Cell col=\"14\" text=\"bind:체온2\" edittype=\"mask\" maskeditformat=\"##.#\" maskeditlimitbymask=\"both\" maskedittype=\"number\" maskedittrimtype=\"both\" editinputtype=\"number\" textAlign=\"right\" font=\"normal bold 10pt/normal &quot;Arial&quot;\" cssclass=\"''\"/><Cell col=\"15\" text=\"bind:체온3\" edittype=\"mask\" maskeditformat=\"##.#\" maskeditlimitbymask=\"both\" editinputtype=\"number\" maskedittrimtype=\"both\" editmaxlength=\"3\" textAlign=\"right\" font=\"normal bold 10pt/normal &quot;Arial&quot;\" cssclass=\"''\"/><Cell col=\"16\" text=\"bind:호흡\" edittype=\"normal\" calendardateformat=\"##.#\" calendardisplayinvalidtext=\"0.0\" calendardisplayinvalidtype=\"invalidtext\" calendardisplaynulltext=\"0.0\" calendardisplaynulltype=\"nulltext\" calendareditformat=\"##.#\" maskeditautoselect=\"false\" editmaxlength=\"3\" textAlign=\"right\" font=\"normal bold 10pt/normal &quot;Arial&quot;\" editinputtype=\"number\" cssclass=\"''\"/><Cell col=\"17\" text=\"bind:체중\" edittype=\"mask\" maskeditformat=\"###.#\" maskeditlimitbymask=\"both\" maskedittrimtype=\"both\" textAlign=\"right\" font=\"normal bold 10pt/normal &quot;Arial&quot;\" cssclass=\"''\"/><Cell col=\"18\" text=\"bind:담당자\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_grd.addChild(obj.name, obj);

            obj = new Div("div_menu","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","70","26","10",null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("sta_00","40","5","85","30",null,null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("1");
            obj.set_text("□ 간호제공일 :");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("sta_date","135","5","130","30",null,null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("2");
            obj.set_text("2022.06.17 (금)");
            obj.set_textAlign("left");
            this.div_menu.addChild(obj.name, obj);

            obj = new Div("div_chk","0",null,null,"34","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sta_ondo1","700",null,"50","26",null,"6",null,null,null,null,this.div_chk.form);
            obj.set_taborder("1");
            obj.set_text("▶체온2");
            this.div_chk.addChild(obj.name, obj);

            obj = new Static("sta_ondo2","780",null,"50","26",null,"6",null,null,null,null,this.div_chk.form);
            obj.set_taborder("2");
            obj.set_text("▶체온3");
            this.div_chk.addChild(obj.name, obj);

            obj = new CheckBox("chk_ondo2","830",null,"20","26",null,"6",null,null,null,null,this.div_chk.form);
            obj.set_taborder("3");
            this.div_chk.addChild(obj.name, obj);

            obj = new CheckBox("chk_ondo1","750",null,"20","26",null,"6",null,null,null,null,this.div_chk.form);
            obj.set_taborder("0");
            this.div_chk.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1100,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_menu.form.sta_date","text","ds_search","nalja");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00201_P06.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00201_P06.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00201_P06.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00201_P06
         * 화면명   	: 일 바이탈기록
         * 화면설명 	:
         * 작성일   	: 2022-06-20
         * 작성자   	: 김언정
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용

         ***********************************************************************/
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        const fv_sicode = this.parent.SICODE;
        const fv_s_date = this.parent.S_DATE;
        const fv_staffId = nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid");
        const fv_name = nexacro.trim(nexacro.getApplication().gds_userInfo.getColumn(0, "c_name"));
        const rowPosition = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "sicode", fv_sicode);
        	this.ds_search.setColumn(0, "s_date", fv_s_date);


        	// 요일구하기
        	var yyyyMMdd = String(fv_s_date);
        	var sYear = yyyyMMdd.substr(0, 4);
        	var sMonth = yyyyMMdd.substr(4, 2);
        	var sDate = yyyyMMdd.substr(6, 2);

        	var date = new Date(Number(sYear), Number(sMonth)-1, Number(sDate));

        	var weekList = ['일' , '월' , '화' , '수' , '목' , '금' , '토'];
        	var week = weekList[date.getDay()];
        	this.ds_search.setColumn(0, "nalja", sYear+"."+sMonth+"."+sDate+" ("+week+")");

        	// 그리드 표현 적용
        	var grd = this.div_grd.form.grd_list;

        	const songIdx = grd.getBindCellIndex("body","송영시간");
        	const seperatorIdx = grd.getBindCellIndex("body","seperator");
        	const songExpr = "expr:송영시간 == '-' ? 'none':'normal'";
        	//둘 중 하나라도 값이 있으면 display 한다
        	const seperatorExpr = "expr:(혈압1 != '' && 혈압1 != undefined && 혈압1 != NULL) || (혈압2 != '' && 혈압2 != undefined  && 혈압2 != NULL) ? 'normal' : 'none'";

        	grd.setCellProperty("body", seperatorIdx, "displaytype", seperatorExpr);
        	grd.setCellProperty("body", songIdx, "displaytype", songExpr);


        	// 그리드css설정
        	this.fn_setMainGrid();

        	// 조회
        	this.fn_search("search");
        };

        // 그리드css설정
        this.fn_setMainGrid = function()
        {
        	var grdMain = this.div_grd.form.grd_list;

        	var nameIdx = grdMain.getBindCellIndex("body","m_name");
        	var snmIdx = grdMain.getBindCellIndex("body","s_nm");

        	// 남녀에 따라 이름란 배경색 변경, 퇴소자는 현황란 배경색 변경
        	var nameCss = "expr:dataset.getColumn(currow,'sex_nm')=='남'?'cellBMan':'cellBWoman'";
        	var snmCss = "expr:dataset.getColumn(currow,'s_nm')=='퇴소자'?'cellBRetire':''";

        	grdMain.setCellProperty("body", nameIdx, "cssclass", nameCss);
        	grdMain.setCellProperty("body", snmIdx, "cssclass", snmCss);
        }

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        // 저장 전 validation
        this.fn_save_pre = function()
        {
        	// 변경 사항이 없으면 저장안함
        	let num = 0;
        	for (var i=0; i<this.ds_list.rowcount; i++)
        	{
        		var nRowType = this.ds_list.getRowType(i);
        		if (nRowType == 2 || nRowType == 4)
        			num+=1;
        	}
        	if (num > 0){
        		return true;
        	}
        }

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 조회
        this.fn_search = function()
        {
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00201_P06.DAY00201_P06_DS_LIST_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 저장
        this.fn_save = function()
        {
        	// validation check
        	if (!this.fn_save_pre())
        	{
        		return;
        	}

         	var svcId = "save";
         	var params = "/DAY00201_P06Controller.do";
         	var inDatasets = "input1=ds_list:U";
         	var outDatasets = "";
         	var argument = "method=save ";

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
        			if (this.rowPosition == "")
        			{
        				// 첫번째 row를 선택
        				this.ds_list.set_rowposition(0);
        			}
        			else
        			{
        				//rowposition을 세팅
        				this.ds_list.set_rowposition(this.rowPosition);
        			}
        		}
        		else if (strSvcID == "save")
        		{
        			this.ds_list.clearData();
        			this.alert("바이탈 기록 저장완료 !");
        			this.fn_search();
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
        // 체온복사
        this.fn_ondoCopy = function(obj,e)
        {
        	const nRow = this.ds_list.rowcount;

        	for (let i=0; i<nRow; i++) {
        		const ondo = this.ds_list.getColumn(i, "체온");
        		const nextOndo = this.ds_list.getColumn(i, "체온2");

         		// 체온2의 값이 null이거나 0.0일때만 복사진행
        		if(Sct.Util.isEmpty(nextOndo) || nextOndo == 0.0)
        		{
        			if (ondo > 10) {
        				this.ds_list.setColumn(i, "체온2", ondo);
        			}
        		}
        	}
        };
        // 체온복사2
        this.fn_ondoCopy2 = function(obj,e)
        {
        	const nRow = this.ds_list.rowcount;

        	for (let i=0; i<nRow; i++) {
        		const ondo = this.ds_list.getColumn(i, "체온2");
        		const nextOndo = this.ds_list.getColumn(i, "체온3");

        		// 체온3의 값이 null이거나 0.0일때만 복사진행
        		if(Sct.Util.isEmpty(nextOndo) || nextOndo == 0.0)
        		{
        			if (ondo > 10) {
        				this.ds_list.setColumn(i, "체온3", ondo);
        			}
        		}
        	}
        };

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 체온2 버튼
        this.chk_ondo1_onchanged = function(obj,e)
        {
        	this.fn_ondoCopy();
        };
        // 체온3 버튼
        this.chk_ondo2_onchanged = function(obj,e)
        {
        	this.fn_ondoCopy2();
        };

        // 저장버튼
        this.div_menu_btn_save_onclick = function(obj,e)
        {
        	this.fn_save();
        };

        //ds_list change event
        this.ds_list_oncolumnchanged = function(obj,e)
        {
        	//현재 rowposition 저장
        	this.rowPosition = this.ds_list.rowposition;

        	if (
        	e.columnid == "혈압1" || e.columnid == "혈압2" || e.columnid == "맥박" || e.columnid == "혈당" ||
        	e.columnid == "혈당2" || e.columnid == "체온" || e.columnid == "체온2" || e.columnid == "체온3" ||
        	e.columnid == "호흡" || e.columnid == "체중")
        	{
        		//include mask text
        		let grdText = this.div_grd.form.grd_list.getEditingText();
        		grdText = grdText.replace(/[^0-9\.]/g,"");

        		//mask
        		this.fn_postInput(e.columnid,e.row, grdText);

        		if (e.columnid == "혈압1" || e.columnid == "혈압2")
        		{
        			// 문자열 혈압1 + '/' + 혈압2 = 혈압
        			let press01 = this.ds_list.getColumn(e.row,"혈압1");
        			let press02 = this.ds_list.getColumn(e.row,"혈압2");
        			//값의 존재 유무와 무관하게 무조건 / 포함
        			this.ds_list.setColumn(e.row,"혈압", press01 + "/" + press02);
        			this.ds_list.set_updatecontrol(false);
        			this.ds_list.setRowType(e.row, Dataset.ROWTYPE_UPDATE);
        			this.ds_list.set_updatecontrol(true);
        		}

        		this.ds_list.setColumn(e.row, "n_nalja", this.ds_search.getColumn(0, "s_date"));

        		if (Sct.Util.isEmpty(this.ds_list.getColumn(e.row,"담당자")) && Sct.Util.isEmpty(this.ds_list.getColumn(e.row,"담당코드")))
        		{
        			this.ds_list.setColumn(e.row,"담당자", fv_name);
        			this.ds_list.setColumn(e.row,"담당코드", fv_staffId);
        		}
        	}
        };

        //mask edit
        this.fn_postInput = function (col,row,val)
        {
        	if (col == "체온" || col == "체온2" || col == "체온3" || col == "체중")
        	{
        		const str = this.fn_valChk(val);
        		this.ds_list.setColumn(row, col, str);
        	}
        };

        //mask edit chk
        this.fn_valChk = function (val)
        {
        	const num = Number(val);
        	let numStr = num.toString();
        	let str = numStr.slice(-2,-1);
        	if (str == '.')
        	{
        		str = numStr;
        	}
        	else
        	{
        		str = numStr + '.0';
        	}
        	return str;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_menu.form.btn_save.addEventHandler("onclick",this.div_menu_btn_save_onclick,this);
            this.div_menu.form.sta_date.addEventHandler("onclick",this.div_menu_sta_date_onclick,this);
            this.div_chk.form.chk_ondo2.addEventHandler("onchanged",this.chk_ondo2_onchanged,this);
            this.div_chk.form.chk_ondo1.addEventHandler("onchanged",this.chk_ondo1_onchanged,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00201_P06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
