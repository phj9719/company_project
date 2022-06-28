(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00409_P01");
            this.set_titletext("차량별 운행일지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1800,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"monalja\" type=\"DATE\" size=\"256\"/><Column id=\"mocode\" type=\"STRING\" size=\"256\"/><Column id=\"차번호\" type=\"STRING\" size=\"256\"/><Column id=\"mostart\" type=\"INT\" size=\"256\"/><Column id=\"molast\" type=\"INT\" size=\"256\"/><Column id=\"distant\" type=\"INT\" size=\"256\"/><Column id=\"코드1\" type=\"STRING\" size=\"256\"/><Column id=\"내역1\" type=\"STRING\" size=\"256\"/><Column id=\"비용1\" type=\"INT\" size=\"256\"/><Column id=\"코드2\" type=\"STRING\" size=\"256\"/><Column id=\"내역2\" type=\"STRING\" size=\"256\"/><Column id=\"비용2\" type=\"INT\" size=\"256\"/><Column id=\"코드3\" type=\"STRING\" size=\"256\"/><Column id=\"내역3\" type=\"STRING\" size=\"256\"/><Column id=\"비용3\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"DATE\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"DATE\" size=\"256\"/><Column id=\"DATE_TO\" type=\"DATE\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_car", this);
            obj._setContents("<ColumnInfo><Column id=\"combocode\" type=\"STRING\" size=\"256\"/><Column id=\"comboname\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_func","10","0",null,"35","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_head1","0","3","90","30",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("운행기간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_body1","89","3","190","30",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_date_from","98","6","67","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("from");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_date_con","168","6","17","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_date_to","188","6","67","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("4");
            obj.set_text("to");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_head2","278","3","90","30",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("5");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_body2","367","3","220","30",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_func.addChild(obj.name, obj);

            obj = new Combo("cmb_gubun","380","6","190","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_car");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_head3","586","3","90","30",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("8");
            obj.set_text("운행거리");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_body3","675","3","110","30",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_dist","688","6","87","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("10");
            obj.set_text(" Km");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_head4","784","3","90","30",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("11");
            obj.set_text("지출합계");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_body4","873","3","140","30",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_totWon","886","6","87","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("12");
            obj.set_text(" 원");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report1",null,"6","140","25","620",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("14");
            obj.set_text("차량별 운행일지");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Div("div_main","10","40",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","30",null,null,"0","0",null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"운행일\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"차량번호\"/><Cell col=\"3\" text=\"시작거리\"/><Cell col=\"4\" text=\"종료거리\"/><Cell col=\"5\" text=\"운행거리\"/><Cell col=\"6\" text=\"구분1\"/><Cell col=\"7\" text=\"내역1\"/><Cell col=\"8\" text=\"금액1\"/><Cell col=\"9\" text=\"구분2\"/><Cell col=\"10\" text=\"내역2\"/><Cell col=\"11\" text=\"금액2\"/><Cell col=\"12\" text=\"구분3\"/><Cell col=\"13\" text=\"내역3\"/><Cell col=\"14\" text=\"금액3\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:monalja\" expandchar=\"dot\"/><Cell col=\"1\" text=\"bind:mocode\"/><Cell col=\"2\" text=\"bind:차번호\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:mostart\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:molast\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:distant\" textAlign=\"right\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" expr=\"dataset.getColumn(currow, 'distant') == 0 ? '' : dataset.getColumn(currow, 'distant')\"/><Cell col=\"6\" text=\"bind:코드1\"/><Cell col=\"7\" text=\"bind:내역1\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:비용1\" displaytype=\"number\" textAlign=\"right\" expr=\"dataset.getColumn(currow, '비용1') == 0 ? '' : dataset.getColumn(currow, '비용1')\"/><Cell col=\"9\" text=\"bind:코드2\"/><Cell col=\"10\" text=\"bind:내역2\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:비용2\" displaytype=\"number\" textAlign=\"right\" expr=\"dataset.getColumn(currow, '비용2') == 0 ? '' : dataset.getColumn(currow, '비용2')\"/><Cell col=\"12\" text=\"bind:코드3\"/><Cell col=\"13\" text=\"bind:내역3\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:비용3\" displaytype=\"number\" textAlign=\"right\" expr=\"dataset.getColumn(currow, '비용3') == 0 ? '' : dataset.getColumn(currow, '비용3')\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","230","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            obj.set_text("차량별 운행일지");
            obj.set_cssclass("lb01");
            this.div_main.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1800,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00409_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00409_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00409_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00409_P01
         * 화면명   	: 차량별 운행일지
         * 화면설명 	: 차량별 월간운행일지를 출력하기 위한 팝업
         * 작성일   	: 2022-05-17
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *
         ***********************************************************************
         * 비고 :
         */
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        const fv_sicode = nexacro.getApplication().gds_userInfo.getColumn(0, "sicode");
        const fv_from = this.parent.DATE_FROM;
        const fv_to = this.parent.DATE_TO;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 운행기간 세팅
        	const from = this.fn_dateString(fv_from);
        	const to = this.fn_dateString(fv_to);
        	this.div_func.form.sta_date_from.set_text(from);
        	this.div_func.form.sta_date_to.set_text(to);

        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "DATE_FROM", fv_from);
        	this.ds_search.setColumn(0, "DATE_TO", fv_to);

        	this.fn_search();
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
        // 조회
        this.fn_search = function()
        {
        	if (!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList"
        				   + " sqlId=DAY00409_P01.DAY00409_P01_DS_LIST_S";
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
        			this.ds_temp.copyData(this.ds_list);
        			this.gf_distincDsFilter(this.ds_temp, "mocode,차번호");
        			for (let i = 0; i < this.ds_temp.rowcount; i++)
        			{
        				const code = this.ds_temp.getColumn(i, "mocode");
        				const no = this.ds_temp.getColumn(i, "차번호");
        				const name = code + " - " + no;
        				const nRow = this.ds_car.addRow();
        				this.ds_car.setColumn(nRow, "combocode", code);
        				this.ds_car.setColumn(nRow, "comboname", name);
        			}
        			const firstRowValue = this.ds_car.getColumn(0, "combocode");
        			this.div_func.form.cmb_gubun.set_value(firstRowValue);

        			const distSum = this.ds_list.getCaseSum("mocode == " + firstRowValue, "distant");
        			const p1Sum = this.ds_list.getCaseSum("mocode == " + firstRowValue, "비용1");
        			const p2Sum = this.ds_list.getCaseSum("mocode == " + firstRowValue, "비용2");
        			const p3Sum = this.ds_list.getCaseSum("mocode == " + firstRowValue, "비용3");
        		// 	trace("distSum : " + distSum);
        		// 	trace("p1Sum : " + p1Sum);
        		// 	trace("p2Sum : " + p2Sum);
        		// 	trace("p3Sum : " + p3Sum);
        			const totSum = p1Sum + p2Sum + p3Sum;
        			//trace("totSum : " + totSum);
        			const totStr = totSum.toLocaleString("ko-KR");
        			//trace("totStr : " + totStr);

        			this.div_func.form.sta_dist.set_text(distSum + " Km");
        			this.div_func.form.sta_totWon.set_text(totStr + " 원");
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
        /* dot 날짜 스트링 만들기
         *
         * @param date DATE
         * @return String yyyy.MM.dd
         */
        this.fn_dateString = function(date)
        {
        	const year = date.getFullYear();
        	const mon = date.getMonth() + 1;
        	const day = date.getDate();
        	const fullStr = year + "." + (mon + "").padStart(2, '0') + "." + (day + "").padStart(2, '0');

        	return fullStr;
        };

        /*****************************************************************************************
         * 함  수  명	:   gf_distincDsFilter
         * 입      력	:   1. objDs	Dataset Object
                            2. sColID	Column List (여러 항목일 경우 ',' 로 구분)
         * 반      환	: 	없음
         * 기      능	: 	Dataset의 특정 컬럼의 중복을 제거하여 Filter 한다.
         *****************************************************************************************/
        this.gf_distincDsFilter = function(objDs, sColID)
        {
        	var arrArgs	= this.gf_Trim(sColID).split(",");
        	var sFilterExpr		= "";
        	var sFindRowExpr	= "";

        	for (var i=0; i<arrArgs.length; i++)
        	{
        		if (objDs.getColumnInfo(arrArgs[i]) == null) continue;

        		sFindRowExpr	+= (this.gf_IsNull(sFindRowExpr) == false) ? " && " : "";
        		sFindRowExpr	+= "" + arrArgs[i] + "=='\" + " + arrArgs[i] + " + \"'";
        	}

        	if (this.gf_IsNull(sFindRowExpr) == false) {
        		sFilterExpr	= "rowidx==dataset.findRowExpr(\"" + sFindRowExpr + "\")";
        	}

        	objDs.filter(sFilterExpr);
        };

        this.gf_Trim = function(sValue)
        {
            if (sValue == null) return "";
            if (new String(sValue).valueOf() == "undefined") return "";
            if (new String(sValue) == null) return "";

            var retVal = (new String(sValue)).replace(/^\s+|\s+$/g, '');

            return retVal;
        };

        this.gf_IsNull = function(sValue)
        {
            if (new String(sValue).valueOf() == "undefined") return true;
            if (sValue == null) return true;

            var v_ChkStr = new String(sValue);

            if (v_ChkStr == null) return true;
            if (v_ChkStr.toString().length == 0 ) return true;
            return false;
        };

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 출력
        this.fn_report = function(obj,e)
        {
        	const popupUrl = "DAY_POP::DAY00409_R02.xfdl";
        	const popupName = "차량별 운행일지";
        	const dicompNm = " ";

        	const params = {
        		sicode : fv_sicode
        	,	from : fv_from
        	,	to : fv_to
        	,	gubun : this.div_func.form.cmb_gubun.value
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 콤보 아이템 변경 이벤트
        this.div_func_cmb_gubun_onitemchanged = function(obj,e)
        {
        	let fRow = this.ds_list.findRowExpr("mocode == " + e.postvalue);
        	this.ds_list.set_rowposition(fRow);
        // 	trace("fRow : " + fRow);
        // 	trace("mocode : " + e.postvalue);

        	const distSum = this.ds_list.getCaseSum("mocode == " + e.postvalue, "distant");
        	const p1Sum = this.ds_list.getCaseSum("mocode == " + e.postvalue, "비용1");
        	const p2Sum = this.ds_list.getCaseSum("mocode == " + e.postvalue, "비용2");
        	const p3Sum = this.ds_list.getCaseSum("mocode == " + e.postvalue, "비용3");
        // 	trace("distSum : " + distSum);
        // 	trace("p1Sum : " + p1Sum);
        // 	trace("p2Sum : " + p2Sum);
        // 	trace("p3Sum : " + p3Sum);
         	const totSum = p1Sum + p2Sum + p3Sum;
         	//trace("totSum : " + totSum);
         	const totStr = totSum.toLocaleString("ko-KR");
         	//trace("totStr : " + totStr);

         	this.div_func.form.sta_dist.set_text(distSum + " Km");
         	this.div_func.form.sta_totWon.set_text(totStr + " 원");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_func.form.cmb_gubun.addEventHandler("onitemchanged",this.div_func_cmb_gubun_onitemchanged,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.fn_report,this);
            this.div_main.form.grd_list.addEventHandler("oncelldblclick",this.div_main_grd_list_oncelldblclick,this);
            this.div_main.form.grd_list.addEventHandler("onexpandup",this.div_main_grd_list_onexpandup,this);
        };
        this.loadIncludeScript("DAY00409_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
