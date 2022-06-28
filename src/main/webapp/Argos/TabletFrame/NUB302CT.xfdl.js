(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUB302CT");
            this.set_titletext("집중배설관찰");
            this.set_background("#f4f9fc");
            if (Form == this.constructor)
            {
                this._setFormPosition(1180,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resident", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EXC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"MIN\" type=\"STRING\" size=\"256\"/><Column id=\"URIN_1\" type=\"STRING\" size=\"256\"/><Column id=\"URIN_2\" type=\"STRING\" size=\"256\"/><Column id=\"URIN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"FECES_1\" type=\"STRING\" size=\"256\"/><Column id=\"FECES_2\" type=\"STRING\" size=\"256\"/><Column id=\"FECES_3\" type=\"STRING\" size=\"256\"/><Column id=\"DIAPER_N\" type=\"STRING\" size=\"256\"/><Column id=\"DIAPER_S\" type=\"STRING\" size=\"256\"/><Column id=\"CLOTH\" type=\"STRING\" size=\"256\"/><Column id=\"ROW\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_manager", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME_AGE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTER_DT\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_temp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NIG_MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NIG_MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"URIN_OBS\" type=\"STRING\" size=\"256\"/><Column id=\"FECES_OBS\" type=\"STRING\" size=\"256\"/><Column id=\"DIAPER_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"CLOTH_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"URIN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_COMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAW_MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DAW_MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IR_INPUT_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_minute", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nig_manager", this);
            obj._setContents("<ColumnInfo><Column id=\"NIG_MANAGER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ref_sys", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"REF_SYS_RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_COMP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dawn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NIG_MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NIG_MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"URIN_OBS\" type=\"STRING\" size=\"256\"/><Column id=\"FECES_OBS\" type=\"STRING\" size=\"256\"/><Column id=\"DIAPER_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"CLOTH_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"URIN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_COMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAW_MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DAW_MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IR_INPUT_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","2.12%","14",null,"40","3.39%",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_date","0","0","160","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_locale("ko_KR");
            obj.set_displaynulltext("일자");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_area","170","0","120","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_area");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_itemheight("36");
            obj.set_displaynulltext("층(생활실)");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","300","0","120","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_location");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_displaynulltext("호실");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSearch","560","0","80","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("검색");
            obj.set_cssclass("btn_tSearch");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tDelete",null,"0","90","40","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("btn_tDelete");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSave",null,"0","90","40","100",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_tSave");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_resident","430","0","120","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_resident");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_displaynulltext("입소자 선택");
            obj.set_buttonsize("0 0");
            obj.set_popupsize("0 0");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tReset",null,"0","100","40","200",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("초기화");
            obj.set_cssclass("btn_tReset");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","2.12%","65",null,null,"3.39%","4.29%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","0.00%","55",null,null,"0.00%","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_DataList_h2");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"105\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"일자\"/><Cell col=\"2\" rowspan=\"2\" colspan=\"2\" text=\"시간\"/><Cell col=\"4\" colspan=\"3\" text=\"배뇨관찰\"/><Cell col=\"7\" colspan=\"3\" text=\"배변관찰\"/><Cell col=\"10\" colspan=\"2\" text=\"기저귀교환\"/><Cell col=\"12\" rowspan=\"2\" text=\"옷&#13;&#10;교환\"/><Cell row=\"1\" col=\"4\" text=\"소량\"/><Cell row=\"1\" col=\"5\" text=\"다량\"/><Cell row=\"1\" col=\"6\" text=\"소변량\"/><Cell row=\"1\" col=\"7\" text=\"정상\"/><Cell row=\"1\" col=\"8\" text=\"실변\"/><Cell row=\"1\" col=\"9\" text=\"설사\"/><Cell row=\"1\" col=\"10\" text=\"일반\"/><Cell row=\"1\" col=\"11\" text=\"스마트\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:EXC_DT\" displaytype=\"date\"/><Cell col=\"2\" text=\"bind:HOUR\"/><Cell col=\"3\" text=\"bind:MIN\" displaytype=\"combotext\" combodataset=\"ds_nu_minute\" combodatacol=\"CMCD\" combocodecol=\"CMCD\"/><Cell col=\"4\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:URIN_1\" checkboxtruevalue=\"2\" checkboxfalsevalue=\"1\"/><Cell col=\"5\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:URIN_2\" checkboxtruevalue=\"3\" checkboxfalsevalue=\"1\"/><Cell col=\"6\" text=\"bind:URIN_QTY\" maskeditformat=\"#,###\" displaytype=\"mask\" maskeditlimitbymask=\"integer\"/><Cell col=\"7\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:FECES_1\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"8\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:FECES_2\" checkboxtruevalue=\"2\" checkboxfalsevalue=\"0\"/><Cell col=\"9\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:FECES_3\" checkboxtruevalue=\"3\" checkboxfalsevalue=\"0\"/><Cell col=\"10\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:DIAPER_N\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"11\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:DIAPER_S\" checkboxtruevalue=\"2\" checkboxfalsevalue=\"0\"/><Cell col=\"12\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CLOTH\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_manager",null,"0","250","50","0%",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_manager");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_itemheight("36");
            obj.set_buttonsize("0 0");
            obj.set_popupsize("0 0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_dawn","0","0","135","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("새벽(00~08)");
            obj.set_background("#d9d9d9");
            obj.set_color("#555555");
            obj.set_font("normal 700 16pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_daytime","145","0","135","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("주간(09~17)");
            obj.set_background("#d9d9d9");
            obj.set_color("#555555");
            obj.set_font("normal 700 16pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_nighttime","290","0","135","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_text("야간(18~23)");
            obj.set_background("#d9d9d9");
            obj.set_color("#555555");
            obj.set_font("normal 700 16pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager",null,"0","162","50","cmb_manager:5",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            obj.set_text("관찰자");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Tablet",1180,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cal_date","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cmb_area","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cmb_location","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cmb_resident","value","ds_search","RES_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUB302CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUB302CT.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUB302CT.xfdl","lib::tpgm_com.xjs");
        this.registerScript("NUB302CT.xfdl", function() {
        /***********************************************************************
         * 화면ID    	: NUB302CT
         * 화면명   	: 집중배설관찰일지
         * 화면설명 	: 태블릿 입소자별 당일 집중배설관찰일지 기록
         * 작성일    	: 2021-11-11
         * 작성자   	: 조기종
         * 수정이력 	: ↓↓↓↓↓↓↓
         ***********************************************************************
         *     	수정일     	수정자   	내용
         *
         ***********************************************************************
         ***********************************************************************
         */

        /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        this.executeIncludeScript("lib::tpgm_com.xjs"); /*include "lib::tpgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_currentDS = "";
        this.fv_currentGrid = this.div_cont.form.grd_list;
        this.tranFlag = "";
        this.searchFlag = "2";	// 검색 플래그 1 : 새벽, 2 : 주간, 3 : 야간
        this.sFlag = "";	// 저장 플래그 1 : 새벽만 저장, 2 : 그 외
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.NUB302CT_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 검색조건 세팅
        	this.taSearchDataSetting(obj);

        	// 관찰자, 층, 호실 콤보 초기화
        	this.fn_setComboDs(obj);

        	this.ds_location.filter("ARE_CD == '" + this.ds_search.getColumn(0, "AREA") + "'");

        	// 로드 완료후 검색
        	this.fn_search();
        };

        // 콤보 데이터 세팅
        this.fn_setComboDs = function(obj)
        {
        	const comboDsParamArr = [
        		{ outDsName : "ds_manager", sqlId : "NUB_COMMON.NUB_COMMON_DS_MANAGER_S", param : this.ds_search, bEmptyRow : true }
        		,{outDsName : "ds_location", sqlId : "NUB_COMMON.NUB_COMMON_DS_LOCATION_ALL_S", param : this.ds_search, bEmptyRow : true}
        		,{outDsName : "ds_resident", sqlId : "NUB_COMMON.NUB_COMMON_DS_RESIDENT_ALL_S", param : this.ds_search, bEmptyRow : true}
        	];
        	this.gfn_setComboDs(obj, comboDsParamArr);
        };

        // 그리드 컬럼에 색입히기
        this.fn_initGrid = function(grid)
        {
        	const eMinIdx = grid.getBindCellIndex("body", "MIN");
        	const eMinCss = "blueFont";
        	grid.setCellProperty("body", eMinIdx, "cssclass", eMinCss);
        };
        /***********************************************************************
         * Common Button Functions
         ************************************************************************/
        // 검색 버튼
        this.fn_searchBtn = function ()
        {
        	this.ds_search.setColumn(0, "DATE", Sct.Util.getToday());
        	this.fn_search();
        };

        // 초기화 버튼
        this.fn_resetBtn = function ()
        {
        	this.fn_search();
        };

        // 저장 버튼
        this.fn_saveBtn = function ()
        {
        	this.fn_save();
        };

        //삭제 버튼
        this.fn_deleteBtn = function ()
        {
        	this.fn_delete();
        };
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	const resident = this.ds_search.getColumn(0, "RES_ID");
        	if (resident == undefined || resident == "" || resident == null)
        	{
        		alert("입소자를 선택해 주세요");
        		return false;
        	}
        	return true;
        };

        // 저장 전 validation
        this.fn_save_pre = function ()
        {
        	const resident = this.ds_search.getColumn(0, "RES_ID");
        	if (resident == undefined || resident == "" || resident == null)
        	{
        		alert("입소자를 선택해 주세요");
        		return false;
        	}

        	// 저장 내용 체크
        	if(!Sct.Grid.hasInsertAndUpdateRow(this.ds_list_temp))
        	{
        		Sct.alert(this, "000569", "저장");	// {0}할 내용이 없습니다.
        		return false;
        	}

        	// 저장하시겠습니까?
        	if(!Sct.confirm(this, "000038")) return false;

        	this.sFlag = "1";
        	for (let i = 0; i < 24; i++)
        	{
        		const cRow = parseInt(this.ds_list.getColumnNF(i, "ROW"));
        		const colRow = this.ds_list.findRowNF("ROW", cRow);
        		const iFlag = this.ds_list.getColumnNF(colRow, "FLAG");

        		// 새벽 이외의 데이터 입력이 있을경우
        		if (cRow > 8 && iFlag == "S")
        		{
        			this.sFlag = "2";
        			break;
        		}

        		// 주간 데이터 입력이 없는경우
        		if (cRow == 18)
        		{
        			this.ds_list_temp.setColumn(0, "DAY_MANAGER_ID", null);
        			this.ds_list_temp.setColumn(0, "DAY_MANAGER_NM", null);
        		}

        		// 야간 데이터 입력이 없는경우
        		if (cRow == 23)
        		{
        			this.ds_list_temp.setColumn(0, "NIG_MANAGER_ID", null);
        			this.ds_list_temp.setColumn(0, "NIG_MANAGER_NM", null);
        		}
        	}

        	this.tranFlag = "IU";

        	return true;
        };

        // 삭제 전 validation
        this.fn_delete_pre = function()
        {
        	const resident = this.ds_search.getColumn(0, "RES_ID");
        	if (resident == undefined || resident == "" || resident == null)
        	{
        		alert("입소자를 선택해 주세요");
        		return false;
        	}

        	// 데이터셋 상태가 추가상태이면 삭제 못함
        	if(this.ds_list_temp.getRowType(this.ds_list_temp.rowposition) == 2)
        	{
        		Sct.alert(this, "000569", "삭제");	// {0}할 내용이 없습니다.
        		return false;
        	}

        	// 삭제하시겠습니까?
        	if(Sct.confirm(this, "000083", "삭제"))
        	{
        		const nRow = this.ds_list_temp.rowposition;
        		this.ds_list_temp.set_updatecontrol(false);
        		this.ds_list_temp.setRowType(nRow, Dataset.ROWTYPE_DELETE);
        		this.ds_list_temp.set_updatecontrol(true);
        	}
        	else
        	{
        		return false;
        	}

        	return true;
        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 검색
        this.fn_search = function ()
        {
        	// validation
        	if(!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search input2=ds_search input3=ds_search";
        	const outDatasets = "ds_list_temp=output1 ds_ref_sys=output2 ds_resInfo=output3";
        	const argument = "method=getList "
        		+ "sqlId='NUB302CT.NUB302CT_DS_LIST_TEMP_S NUB302CT.NUB302CT_DS_REF_SYS_DATA_S NUB_COMMON.NUB_COMMON_DS_RESINFO_S' ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 저장
        this.fn_save = function ()
        {
        	if(!this.fn_save_pre()) return;

         	const svcId = "save";
        	const params = "/NUB302CTController.do";
         	const inDatasets = "input1=ds_list_temp:U input2=ds_dawn";
        	const outDatasets = "";
        	const argument = "method=save "
        				   + "FLAG=" + this.sFlag + " ";

        	const callbackFunc = "fn_callback";
         	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 삭제
        this.fn_delete = function()
        {
        	if(!this.fn_delete_pre()) return;

        	const svcId = "delete";
        	const params = "/NUB302CTController.do";
        	const inDatasets = "input1=ds_list_temp:U";
        	const outDatasets = "";
         	const argument = "method=delete ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		// 검색 콜백
        		if(strSvcID == "search")
        		{
        			// 검색조건 유지를 위해 글로벌 데이터셋에 조건 세팅
        			nexacro.getApplication().gds_taCurRes.setColumn(0, "AREA", this.ds_resInfo.getColumn(0,"AREA"));
        			nexacro.getApplication().gds_taCurRes.setColumn(0, "LOCATION", this.ds_resInfo.getColumn(0,"LOCATION"));
        			nexacro.getApplication().gds_taCurRes.setColumn(0, "RES_ID", this.ds_resInfo.getColumn(0,"RES_ID"));

        			this.ds_list.clearData();
        			const searchDay = this.ds_search.getColumn(0, "DATE");

        			// 검색결과가 없으면
        			if(this.ds_list_temp.rowcount < 1)
        			{
        				// 당일 데이터셋 초기화
        				const tempnRow = this.ds_list_temp.addRow();
        				this.ds_list_temp.setColumn(tempnRow, "COMPANY_CD", this.ds_search.getColumn(0, "COMPANY_CD"));
        				this.ds_list_temp.setColumn(tempnRow, "EXC_DT", searchDay);
        				this.ds_list_temp.setColumn(tempnRow, "RES_ID", this.ds_search.getColumn(0, "RES_ID"));
        				this.ds_list_temp.setColumn(tempnRow, "EXC_TIME", "000000000000000000000000000000000000000000000000");	// 관찰분 (48자리)
        				this.ds_list_temp.setColumn(tempnRow, "URIN_OBS", "111111111111111111111111");	// 배뇨관찰 (24자리)
        				this.ds_list_temp.setColumn(tempnRow, "FECES_OBS", "000000000000000000000000");	// 배변관찰 (24자리)
        				this.ds_list_temp.setColumn(tempnRow, "DIAPER_CHG", "000000000000000000000000");	// 기저귀교환 (24자리)
        				this.ds_list_temp.setColumn(tempnRow, "CLOTH_CHG", "000000000000000000000000");	// 옷교환 (24자리)
        				this.ds_list_temp.setColumn(tempnRow, "URIN_QTY", "   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0"); // 소변량 (96자리)
        				this.ds_list_temp.setColumn(tempnRow, "IR_INPUT_FLAG", "000000000000000000000000");	// 너싱홈 연동 플래그
        				this.ds_list_temp.setColumn(tempnRow, "REF_SYS_RES_ID", this.ds_ref_sys.getColumn(0, "REF_SYS_RES_ID"));
        				this.ds_list_temp.setColumn(tempnRow, "REF_SYS_COMP_CD", this.ds_ref_sys.getColumn(0, "REF_SYS_COMP_CD"));

        				// 새벽 데이터만 저장할 시 사용할 데이터셋 초기화 (insert 한정 사용)
        				const dTempNRow = this.ds_dawn.addRow();
        				this.ds_dawn.setColumn(dTempNRow, "COMPANY_CD", this.ds_search.getColumn(0, "COMPANY_CD"));
        				this.ds_dawn.setColumn(dTempNRow, "EXC_DT", searchDay);
        				this.ds_dawn.setColumn(dTempNRow, "RES_ID", this.ds_search.getColumn(0, "RES_ID"));
        				this.ds_dawn.setColumn(dTempNRow, "EXC_TIME", "000000000000000000");
        				this.ds_dawn.setColumn(dTempNRow, "URIN_OBS", "111111111");
        				this.ds_dawn.setColumn(dTempNRow, "FECES_OBS", "000000000");
        				this.ds_dawn.setColumn(dTempNRow, "DIAPER_CHG", "000000000");
        				this.ds_dawn.setColumn(dTempNRow, "CLOTH_CHG", "000000000");
        				this.ds_dawn.setColumn(dTempNRow, "URIN_QTY", "   0   0   0   0   0   0   0   0   0");
        				this.ds_dawn.setColumn(dTempNRow, "IR_INPUT_FLAG", "000000000");
        				this.ds_dawn.setColumn(dTempNRow, "REF_SYS_RES_ID", this.ds_ref_sys.getColumn(0, "REF_SYS_RES_ID"));
        				this.ds_dawn.setColumn(dTempNRow, "REF_SYS_COMP_CD", this.ds_ref_sys.getColumn(0, "REF_SYS_COMP_CD"));

        				// 그리드에 그리는 속도 향상을 위하여 이벤트 중지
        				this.fv_currentGrid.set_enableevent(false);
        				this.fv_currentGrid.set_enableredraw(false);
        				this.ds_list.set_enableevent(false);

        				// 그리드에 데이터 추가
        				for(let i = 0; i < 24; i++)
        				{
        					const nRow = this.ds_list.addRow();
        					// 초기화
        					this.ds_list.setColumn(nRow, "EXC_DT", searchDay);
        					this.ds_list.setColumn(nRow, "ROW", i);
        					if(i < 10)
        					{
        						this.ds_list.setColumn(nRow, "HOUR", "0" + i + " : ");
        					}
        					else
        					{
        						this.ds_list.setColumn(nRow, "HOUR", i + " : ");
        					}
        					this.ds_list.setColumn(nRow, "MIN", "00");
        					this.ds_list.setColumn(nRow, "URIN_1", 0);
        					this.ds_list.setColumn(nRow, "URIN_2", 0);
        					this.ds_list.setColumn(nRow, "FECES_1", 0);
        					this.ds_list.setColumn(nRow, "FECES_2", 0);
        					this.ds_list.setColumn(nRow, "FECES_3", 0);
        					this.ds_list.setColumn(nRow, "DIAPER_N", 0);
        					this.ds_list.setColumn(nRow, "DIAPER_S", 0);
        					this.ds_list.setColumn(nRow, "CLOTH", 0);
        					this.ds_list.setColumn(nRow, "FLAG", 0);
        				}

        				// 다 그렸으므로 이벤트 다시 활성화
        				this.fv_currentGrid.set_enableevent(true);
        				this.fv_currentGrid.set_enableredraw(true);
        				this.ds_list.set_enableevent(true);
        			}
        			else
        			{
        				let j = 0;	// String 자르기용 변수 2칸씩 자름
        				let k = 0;	// String 자르기용 변수 1칸씩 자름
        				let l = 0;	// String 자르기용 변수 4칸씩 자름

        				let excTime = this.ds_list_temp.getColumn(0, "EXC_TIME");
        				let urinObs = this.ds_list_temp.getColumn(0, "URIN_OBS");
        				let urinQty = this.ds_list_temp.getColumn(0, "URIN_QTY");
        				let fecesObs = this.ds_list_temp.getColumn(0, "FECES_OBS");
        				let diaperChg = this.ds_list_temp.getColumn(0, "DIAPER_CHG");
        				let clothChg = this.ds_list_temp.getColumn(0, "CLOTH_CHG");
        				let flag = this.ds_list_temp.getColumn(0, "IR_INPUT_FLAG");
        				if (flag == undefined)
        				{
        					this.ds_list_temp.setColumn(0, "IR_INPUT_FLAG", "000000000000000000000000");
        					flag = this.ds_list_temp.getColumn(0, "IR_INPUT_FLAG");
        				}

        				// 새벽에만 저장된 데이터를 읽었을경우 24시간 분량으로 스트링 연결하기
        				if (excTime.length != 48)
        				{
        					excTime += "000000000000000000000000000000";
        					this.ds_list_temp.setColumn(0, "EXC_TIME", excTime);
        				}
        				if (urinObs.length != 24)
        				{
        					urinObs += "111111111111111";
        					this.ds_list_temp.setColumn(0, "URIN_OBS", urinObs);
        				}
        				if (urinQty.length != 96)
        				{
        					urinQty += "   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0";
        					this.ds_list_temp.setColumn(0, "URIN_QTY", urinQty);
        				}
        				if (fecesObs.length != 24)
        				{
        					fecesObs += "000000000000000";
        					this.ds_list_temp.setColumn(0, "FECES_OBS", fecesObs);
        				}
        				if (diaperChg.length != 24)
        				{
        					diaperChg += "000000000000000";
        					this.ds_list_temp.setColumn(0, "DIAPER_CHG", diaperChg);
        				}
        				if (clothChg.length != 24)
        				{
        					clothChg += "000000000000000";
        					this.ds_list_temp.setColumn(0, "CLOTH_CHG", clothChg);
        				}
        				if (flag.length != 24)
        				{
        					flag += "000000000000000";
        					this.ds_list_temp.setColumn(0, "IR_INPUT_FLAG", flag);
        				}

        				// 그리드에 그리는 속도 향상을 위하여 이벤트 중지
        				this.fv_currentGrid.set_enableevent(false);
        				this.fv_currentGrid.set_enableredraw(false);
        				this.ds_list.set_enableevent(false);

        				// 그리드에 데이터 추가
        				for(let i = 0; i < 24; i++)
        				{
        					nRow = this.ds_list.addRow();

        					const urinOvalue = urinObs.substr(k, 1);
        					const urinQsub = urinQty.substr(l, 4);
        					//const urinQvalue = urinQsub.replace(/(^0+)/, "");
        					const urinQvalue = urinQsub;
        					const fecesOvalue = fecesObs.substr(k, 1);
        					const diaperCvalue = diaperChg.substr(k, 1);
        					const clothCvalue = clothChg.substr(k, 1);
        					const flagValue = flag.substr(k, 1);

        					this.ds_list.setColumn(nRow, "ROW", i);
        					this.ds_list.setColumn(nRow, "EXC_DT", searchDay);
        					if(i < 10)
        					{
        						this.ds_list.setColumn(nRow, "HOUR", "0" + i + " : ");
        					}
        					else
        					{
        						this.ds_list.setColumn(nRow, "HOUR", i + " : ");
        					}
        					this.ds_list.setColumn(nRow, "MIN", excTime.substr(j, 2));
        					switch(urinOvalue)
        					{
        						case "2":
        							this.ds_list.setColumn(nRow, "URIN_1", urinOvalue);
        							this.ds_list.setColumn(nRow, "URIN_2", 0);
        							break;
        						case "3":
        							this.ds_list.setColumn(nRow, "URIN_1", 0);
        							this.ds_list.setColumn(nRow, "URIN_2", urinOvalue);
        							break;
        						default:
        							this.ds_list.setColumn(nRow, "URIN_1", 0);
        							this.ds_list.setColumn(nRow, "URIN_2", 0);
        							break;
        					}
        					this.ds_list.setColumn(nRow, "URIN_QTY", urinQvalue);
        					switch(fecesOvalue)
        					{
        						case "1":
        							this.ds_list.setColumn(nRow, "FECES_1", fecesOvalue);
        							this.ds_list.setColumn(nRow, "FECES_2", 0);
        							this.ds_list.setColumn(nRow, "FECES_3", 0);
        							break;
        						case "2":
        							this.ds_list.setColumn(nRow, "FECES_1", 0);
        							this.ds_list.setColumn(nRow, "FECES_2", fecesOvalue);
        							this.ds_list.setColumn(nRow, "FECES_3", 0);
        							break;
        						case "3":
        							this.ds_list.setColumn(nRow, "FECES_1", 0);
        							this.ds_list.setColumn(nRow, "FECES_2", 0);
        							this.ds_list.setColumn(nRow, "FECES_3", fecesOvalue);
        							break;
        						default:
        							this.ds_list.setColumn(nRow, "FECES_1", 0);
        							this.ds_list.setColumn(nRow, "FECES_2", 0);
        							this.ds_list.setColumn(nRow, "FECES_3", 0);
        							break;
        					}
        					switch(diaperCvalue)
        					{
        						case "1":
        							this.ds_list.setColumn(nRow, "DIAPER_N", diaperCvalue);
        							this.ds_list.setColumn(nRow, "DIAPER_S", 0);
        							break;
        						case "2":
        							this.ds_list.setColumn(nRow, "DIAPER_N", 0);
        							this.ds_list.setColumn(nRow, "DIAPER_S", diaperCvalue);
        							break;
        						default:
        							this.ds_list.setColumn(nRow, "DIAPER_N", 0);
        							this.ds_list.setColumn(nRow, "DIAPER_S", 0);
        					}
        					this.ds_list.setColumn(nRow, "CLOTH", clothCvalue);
        					this.ds_list.setColumn(nRow, "FLAG", flagValue);
        					j += 2;
        					k++;
        					l += 4;
        				}

        				// 다 그렸으므로 이벤트 다시 활성화
        				this.fv_currentGrid.set_enableevent(true);
        				this.fv_currentGrid.set_enableredraw(true);
        				this.ds_list.set_enableevent(true);
        			}

        			this.fn_initGrid(this.fv_currentGrid);
        			if (this.searchFlag == "1")
        				this.div_cont.form.btn_dawn.click();
        			else if (this.searchFlag == "3")
        				this.div_cont.form.btn_nighttime.click();
        			else
        				this.div_cont.form.btn_daytime.click();

        		}
        		// 저장 콜백
        		else if(strSvcID == "save")
        		{
        			if(this.tranFlag == "IU")
        			{
        				Sct.alert(this, "000570", "저장");
        			}
        			this.tranFlag = "";
        			this.ds_dawn.clearData();

        			this.fn_search();
        		}
        		// 삭제 콜백
        		else if(strSvcID == "delete")
        		{
        			Sct.alert(this, "000570", "삭제");	// {0} 되었습니다.
        			this.fn_search();
        		}
        	}
        	else
        	{
        		this.tranFlag = "";
        		Sct.alert(this, "", strErrorMsg);
        	}
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/
        /**
         * 특정위치의 문자열 바꾸기
         *
         * @param str 원본 문자열
         * @param character 바꿀 문자값
         * @param index 바꿀 위치
         */
        this.stringReplaceAt = function(str, character, index)
        {
        	return str.substr(0, index) + character + str.substr(index + character.length);
        };

        /**
         * 집중배설관찰 DB입력용 String 만들기
         *
         * @param cRow 당일 바꿀 문자 index
         * @param str1 당일 원본 문자열
         * @param col 데이터셋 컬럼명
         * @param value 바꿀 문자값
         * @param offset 문자 간격
         */
        this.fn_valueSet = function(cRow, str1, col, value, offset)
        {
        	let index;
        	if(offset == null || offset == 0)
        	{
        		str1 = this.stringReplaceAt(str1, value, cRow);
        		this.ds_list_temp.setColumn(0, col, str1);
        	}
        	else
        	{
        		index = cRow * offset;
        		str1 = this.stringReplaceAt(str1, value, index);
        		this.ds_list_temp.setColumn(0, col, str1);
        	}
        };

        // 새벽 입력용 String 만들기
        this.fn_valueSet2 = function(cRow, str1, col, value, offset)
        {
        	let index;
        	if(offset == null || offset == 0)
        	{
        		str1 = this.stringReplaceAt(str1, value, cRow);
        		this.ds_dawn.setColumn(0, col, str1);
        	}
        	else
        	{
        		index = cRow * offset;
        		str1 = this.stringReplaceAt(str1, value, index);
        		this.ds_dawn.setColumn(0, col, str1);
        	}
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 관찰자 선택
        this.cmb_manager_oneditclick = function(obj,e)
        {
        	const param = {COMPANY_CD : nexacro.getApplication().gds_taCurRes.getColumn(0, "COMPANY_CD")};

        	Sct.tPopup(this, "pop1", 350, 350, param, "TabletPOP::NUB_MANAGER_POP.xfdl", "fn_popCallback");
        };

        // 관찰자 값 변경 이벤트
        this.div_cont_cmb_manager_onitemchanged = function(obj,e)
        {
        	if (this.mItem0.columnid == "DAW_MANAGER_ID")
        	{
        		if (this.ds_dawn.rowcount == 1)
        		{
        			this.ds_dawn.setColumn(0, "DAW_MANAGER_ID", e.postvalue);
        		}
        	}
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	const nowRow = this.ds_list.rowposition;
        	const cRow = parseInt(this.ds_list.getColumn(nowRow, "ROW"));
        	const iRow = this.ds_list.findRow("ROW", cRow);
        	switch(popid)
        	{
        		case "pop1" : // 관찰자
        			if (this.mItem0 != undefined)
        			{
        				if (this.mItem0.columnid == "DAY_MANAGER_ID")	// 주간
        				{
        					this.ds_list_temp.setColumn(0, "DAY_MANAGER_ID", objDs.getColumn(0, "USER_ID"));
        					this.ds_list_temp.setColumn(0, "DAY_MANAGER_NM", objDs.getColumn(0, "NAME"));
        				}
        				else if (this.mItem0.columnid == "NIG_MANAGER_ID")	// 야간
        				{
        					this.ds_list_temp.setColumn(0, "NIG_MANAGER_ID", objDs.getColumn(0, "USER_ID"));
        					this.ds_list_temp.setColumn(0, "NIG_MANAGER_NM", objDs.getColumn(0, "NAME"));
        				}
        				else if (this.mItem0.columnid == "DAW_MANAGER_ID") // 새벽
        				{
        					this.ds_list_temp.setColumn(0, "DAW_MANAGER_ID", objDs.getColumn(0, "USER_ID"));
        					this.ds_list_temp.setColumn(0, "DAW_MANAGER_NM", objDs.getColumn(0, "NAME"));
        					if (this.ds_dawn.rowcount == 1)
        					{
        						this.ds_dawn.setColumn(0, "DAW_MANAGER_ID", objDs.getColumn(0, "USER_ID"));
        						this.ds_dawn.setColumn(0, "DAW_MANAGER_NM", objDs.getColumn(0, "NAME"));
        					}
        				}
        			}
        			break;
        		case "pop2" : // 입소자
        			//this.ds_search.setColumn(0, "AREA", objDs.getColumn(0, "AREA"));
        			//this.ds_search.setColumn(0, "LOCATION", objDs.getColumn(0, "LOCATION"));
        			//this.ds_search.setColumn(0, "RES_ID", objDs.getColumn(0, "RES_ID"));
        			this.ds_location.filter("ARE_CD == '" + objDs.getColumn(0, "AREA") + "'");
        			this.ds_resident.filter("");
        			this.div_search.form.cmb_area.set_value(objDs.getColumn(0, "AREA"));
        			this.div_search.form.cmb_location.set_value(objDs.getColumn(0, "LOCATION"));
        			this.div_search.form.cmb_resident.set_value(objDs.getColumn(0, "RES_ID"));
        			this.fn_search();
        			break;
        		case "pop3" : // 분 선택
        			this.ds_list.setColumn(iRow, "MIN", objDs.getColumn(0, "MIN"));
        			break;
        		case "pop4" :
        			this.ds_list.setColumn(iRow, "URIN_QTY", objDs.getColumn(0, "URIN_QTY"));
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };

        // 입소자 조회 팝업
        this.div_search_cmb_resident_oneditclick = function(obj,e)
        {
        	const param = {
        			COMPANY_CD : nexacro.getApplication().gds_taCurRes.getColumn(0, "COMPANY_CD")
        		,	FLAG : "NUB302CT"
        		,	AREA : this.ds_search.getColumn(0, "AREA")
        		,	LOCATION : this.ds_search.getColumn(0, "LOCATION")
        		,	DATE : this.ds_search.getColumn(0, "DATE")
        	};

        	Sct.tPopup(this, "pop2", 350, 350, param, "TabletPOP::NUB_RESIDENT_POP.xfdl", "fn_popCallback");
        };

        // 집중배설관찰 그리드 데이터셋 값변경시 이벤트
        this.ds_list_oncolumnchanged = function(obj,e)
        {
        	const cRow = parseInt(obj.getColumn(obj.rowposition, "ROW"));
        	let col;
        	let value = e.newvalue;
        	let offset = 0;
        	let colRow = obj.findRow("ROW", cRow);
        	obj.setColumn(colRow, "FLAG", "S");
        	switch(e.columnid)
        	{
        		// 관찰분
        		case "MIN":
        			col = "EXC_TIME";
        			offset = 2;
        			break;
        		// 배뇨관찰 소량
        		case "URIN_1":
        			obj.setColumn(colRow, "URIN_2", 1);
        			col = "URIN_OBS";
        			break;
        		// 배뇨관찰 대량
        		case "URIN_2":
        			obj.setColumn(colRow, "URIN_1", 1);
        			col = "URIN_OBS";
        			break;
        		// 소변량
        		case "URIN_QTY":
        			col = "URIN_QTY";
        			value = value.padStart(4, " ");
        			offset = 4;
        			break;
        		// 배변관찰 정상
        		case "FECES_1":
        			obj.setColumn(colRow, "FECES_2", 0);
        			obj.setColumn(colRow, "FECES_3", 0);
        			col = "FECES_OBS";
        			break;
        		// 배변관찰 실변
        		case "FECES_2":
        			obj.setColumn(colRow, "FECES_1", 0);
        			obj.setColumn(colRow, "FECES_3", 0);
        			col = "FECES_OBS";
        			break;
        		// 배변관찰 설사
        		case "FECES_3":
        			obj.setColumn(colRow, "FECES_1", 0);
        			obj.setColumn(colRow, "FECES_2", 0);
        			col = "FECES_OBS";
        			break;
        		// 기저귀교환 일반
        		case "DIAPER_N":
        			obj.setColumn(colRow, "DIAPER_S", 0);
        			col = "DIAPER_CHG";
        			break;
        		// 기저귀교환 스마트
        		case "DIAPER_S":
        			obj.setColumn(colRow, "DIAPER_N", 0);
        			col = "DIAPER_CHG";
        			break;
        		// 옷교환
        		case "CLOTH":
        			col = "CLOTH_CHG";
        			break;
        	}
        	if(e.columnid != "EXC_DT" && e.columnid != "HOUR")
        	{
        		const str1 = this.ds_list_temp.getColumn(0, col);
        		const str2 = this.ds_list_temp.getColumn(0, "IR_INPUT_FLAG");	// 너싱홈 연동 플래그
        		// DB입력용 String 만들기
        		this.fn_valueSet(cRow, str1, col, value, offset);
        		this.fn_valueSet(cRow, str2, "IR_INPUT_FLAG", "S", 0);	// 너싱홈 연동 플래그 String

        		if (cRow < 9)
        		{
        			if (this.ds_dawn.rowcount != 0)
        			{
        				const str3 = this.ds_dawn.getColumn(0, col);
        				const str4 = this.ds_dawn.getColumn(0, "IR_INPUT_FLAG");
        				this.fn_valueSet2(cRow, str3, col, value, offset);
        				this.fn_valueSet2(cRow, str4, "IR_INPUT_FLAG", "S", 0);
        			}
        		}
        	}
        };

        // 새벽 버튼
        this.div_cont_btn_dawn_onclick = function(obj,e)
        {
        	// 버튼 색 변경
        	this.div_cont.form.btn_dawn.set_background("#47afe1");
        	this.div_cont.form.btn_dawn.set_color("#ffffff");
        	this.div_cont.form.btn_daytime.set_background("#d9d9d9");
        	this.div_cont.form.btn_daytime.set_color("#999999");
        	this.div_cont.form.btn_nighttime.set_background("#d9d9d9");
        	this.div_cont.form.btn_nighttime.set_color("#999999");

        	// 검색 플래그 변경
        	this.searchFlag = "1";

        	// 관찰자 바인딩 바꾸기
        	if (this.mItem0 != undefined)
        	{
        		const rtnObj = this.removeChild("mItem0");
        		rtnObj.destroy();
        		this.div_cont.form.cmb_manager.set_value("");
        	}
        	const objBindItem = new BindItem();
        	objBindItem.init("mItem0", "div_cont.form.cmb_manager", "value", "ds_list_temp", "DAW_MANAGER_ID");
        	this.addChild("mItem0", objBindItem);
        	objBindItem.bind();

        	// 관찰자가 비어있는 경우 접속자로 세팅
        	const beforeNmanager = this.ds_list_temp.getColumn(0, "DAW_MANAGER_ID");
        	if (beforeNmanager == undefined || beforeNmanager == "")
        	{
        		this.ds_list_temp.setColumn(0, "DAW_MANAGER_ID", nexacro.getApplication().gds_userInfo.getColumn(0, "USER_ID"));
        		this.ds_list_temp.setColumn(0, "DAW_MANAGER_NM", nexacro.getApplication().gds_userInfo.getColumn(0, "USER_NM_KOR"));

        		if (this.ds_dawn.rowcount == 1)
        		{
        			this.ds_dawn.setColumn(0, "DAW_MANAGER_ID", nexacro.getApplication().gds_userInfo.getColumn(0, "USER_ID"));
        			this.ds_dawn.setColumn(0, "DAW_MANAGER_NM", nexacro.getApplication().gds_userInfo.getColumn(0, "USER_NM_KOR"));
        		}
        	}

        	// 새벽 범위 필터링
        	this.ds_list.filter("currow >= 0 && currow < 9");
        };

        // 주간 버튼
        this.div_cont_btn_daytime_onclick = function(obj,e)
        {
        	// 버튼 색 변경
        	this.div_cont.form.btn_daytime.set_background("#47afe1");
        	this.div_cont.form.btn_daytime.set_color("#ffffff");
        	this.div_cont.form.btn_dawn.set_background("#d9d9d9");
        	this.div_cont.form.btn_dawn.set_color("#999999");
        	this.div_cont.form.btn_nighttime.set_background("#d9d9d9");
        	this.div_cont.form.btn_nighttime.set_color("#999999");

        	// 검색 플래그 변경
        	this.searchFlag = "2";

        	// 관찰자 바인딩 바꾸기
        	if (this.mItem0 != undefined)
        	{
        		const rtnObj = this.removeChild("mItem0");
        		rtnObj.destroy();
        		this.div_cont.form.cmb_manager.set_value("");
        	}
        	const objBindItem = new BindItem();
        	objBindItem.init("mItem0", "div_cont.form.cmb_manager", "value", "ds_list_temp", "DAY_MANAGER_ID");
        	this.addChild("mItem0", objBindItem);
        	objBindItem.bind();

        	// 관찰자가 비어있는 경우 접속자로 세팅
        	const dayManager = this.ds_list_temp.getColumn(0, "DAY_MANAGER_ID");
        	if (dayManager == undefined || dayManager == "")
        	{
        		this.ds_list_temp.setColumn(0, "DAY_MANAGER_ID", nexacro.getApplication().gds_userInfo.getColumn(0, "USER_ID"));
        		this.ds_list_temp.setColumn(0, "DAY_MANAGER_NM", nexacro.getApplication().gds_userInfo.getColumn(0, "USER_NM_KOR"));
        	}

        	// 주간 범위 필터링
        	this.ds_list.filter("currow > 8 && currow < 18");
        };

        // 야간 버튼
        this.div_cont_btn_nighttime_onclick = function(obj,e)
        {
        	// 버튼 색 변경
        	this.div_cont.form.btn_nighttime.set_background("#47afe1");
        	this.div_cont.form.btn_nighttime.set_color("#ffffff");
        	this.div_cont.form.btn_daytime.set_background("#d9d9d9");
        	this.div_cont.form.btn_daytime.set_color("#999999");
        	this.div_cont.form.btn_dawn.set_background("#d9d9d9");
        	this.div_cont.form.btn_dawn.set_color("#999999");

        	// 검색 플래그 변경
        	this.searchFlag = "3";

        	// 관찰자 바인딩 바꾸기
        	if (this.mItem0 != undefined)
        	{
        		const rtnObj = this.removeChild("mItem0");
        		rtnObj.destroy();
        		this.div_cont.form.cmb_manager.set_value("");
        	}
        	const objBindItem = new BindItem();
        	objBindItem.init("mItem0", "div_cont.form.cmb_manager", "value", "ds_list_temp", "NIG_MANAGER_ID");
        	this.addChild("mItem0", objBindItem);
        	objBindItem.bind();

        	// 관찰자가 비어있는 경우 접속자로 세팅
        	const dayManager = this.ds_list_temp.getColumn(0, "NIG_MANAGER_ID");
        	if (dayManager == undefined || dayManager == "")
        	{
        		this.ds_list_temp.setColumn(0, "NIG_MANAGER_ID", nexacro.getApplication().gds_userInfo.getColumn(0, "USER_ID"));
        		this.ds_list_temp.setColumn(0, "NIG_MANAGER_NM", nexacro.getApplication().gds_userInfo.getColumn(0, "USER_NM_KOR"));
        	}

        	// 야간 범위 필터링
        	this.ds_list.filter("currow > 17");
        };

        // 그리드 셀 클릭 이벤트
        this.div_cont_grd_list_oncellclick = function(obj,e)
        {
        	const minIdx = obj.getBindCellIndex("body", "MIN");
        	const uQtyIdx = obj.getBindCellIndex("body", "URIN_QTY");
        	let param;
        	if (e.col == minIdx)
        	{
        		param = {};

        		Sct.tPopup(this, "pop3", 350, 350, param, "TabletPOP::NUB_MINUTE_POP.xfdl", "fn_popCallback");
        	}
        	else if (e.col == uQtyIdx)
        	{
        		param = {};

        		Sct.tPopup(this, "pop4", 350, 350, param, "TabletPOP::NUB_URINQTY_POP.xfdl", "fn_popCallback");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.addEventHandler("onclick",this.formClick,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onload",this.NUB302CT_onload,this);
            this.div_search.addEventHandler("onclick",this.formClick,this);
            this.div_search.form.cmb_area.addEventHandler("onitemchanged",this.cmb_area_onitemchanged2,this);
            this.div_search.form.cmb_location.addEventHandler("onitemchanged",this.cmb_location_onitemchanged2,this);
            this.div_search.form.btn_tSearch.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.btn_tDelete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.div_search.form.btn_tSave.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_search.form.cmb_resident.addEventHandler("oneditclick",this.div_search_cmb_resident_oneditclick,this);
            this.div_search.form.btn_tReset.addEventHandler("onclick",this.fn_resetBtn,this);
            this.div_cont.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.grd_list.addEventHandler("oncellclick",this.div_cont_grd_list_oncellclick,this);
            this.div_cont.form.cmb_manager.addEventHandler("oneditclick",this.cmb_manager_oneditclick,this);
            this.div_cont.form.cmb_manager.addEventHandler("onitemchanged",this.div_cont_cmb_manager_onitemchanged,this);
            this.div_cont.form.btn_dawn.addEventHandler("onclick",this.div_cont_btn_dawn_onclick,this);
            this.div_cont.form.btn_daytime.addEventHandler("onclick",this.div_cont_btn_daytime_onclick,this);
            this.div_cont.form.btn_nighttime.addEventHandler("onclick",this.div_cont_btn_nighttime_onclick,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
        };
        this.loadIncludeScript("NUB302CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
