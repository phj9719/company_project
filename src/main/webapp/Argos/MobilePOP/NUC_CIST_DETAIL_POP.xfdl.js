(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUC_CIST_DETAIL_POP");
            this.set_titletext("CIST 상세 확인 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(460,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cist", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CIS_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PT1_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PT2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PT3_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PT4_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PT5_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PT6_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PT7_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"CIS_GRADE_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CIS_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_lastCist","2.83%","90",null,"240","2.83%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#6a8ed3");
            obj.set_borderRadius("6px");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_day","2.78%","11",null,"26","2.78%",null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("0");
            obj.set_text("DAY");
            obj.set_font("normal 700 16pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Div("div_line","2.78%","49",null,"2","2.78%",null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_background("#bfd5ff");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtH1","15%","62","19.91%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("2");
            obj.set_text("지남력");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtH2","45%","62","20%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("3");
            obj.set_text("주의력");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtH3","70%","62","20%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("4");
            obj.set_text("시공간기능");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtVal1","14.81%","87","19.91%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("5");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#bfd5ff");
            obj.set_text("-");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtVal2","44.91%","87","19.91%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("6");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#bfd5ff");
            obj.set_text("-");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtVal3","69.91%","87","19.91%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("7");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#bfd5ff");
            obj.set_text("-");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtH4","14.81%","122","19.91%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("8");
            obj.set_text("집행기능");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtVal4","14.58%","147","19.91%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("9");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#bfd5ff");
            obj.set_text("-");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtH5","44.91%","122","19.91%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("10");
            obj.set_text("기억력");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtVal5","44.91%","147","19.91%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("11");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#bfd5ff");
            obj.set_text("-");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtH6","69.91%","122","19.91%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("12");
            obj.set_text("언어기능");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtVal6","69.91%","147","19.91%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("13");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#bfd5ff");
            obj.set_text("-");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Div("div_line00","2.78%","189",null,"2","2.78%",null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_background("#bfd5ff");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtH7","14.58%","202","12.73%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("15");
            obj.set_text("총점 : ");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtVal7","27.55%","202","17.59%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("16");
            obj.set_text("-");
            obj.set_font("normal 700 16pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistGradeH","47.92%","202","12.50%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("17");
            obj.set_text("판정 : ");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new Static("sta_cistGradeVal","59.72%","202","32.64%","26",null,null,null,null,null,null,this.div_lastCist.form);
            obj.set_taborder("18");
            obj.set_text("-");
            obj.set_font("normal 700 16pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            this.div_lastCist.addChild(obj.name, obj);

            obj = new ImageViewer("imv_close","7","25","68","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_image("url(\'theme://images/btn_close.png\')");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",460,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_lastCist.form.sta_cistPtVal1","text","ds_cist","PT1_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_lastCist.form.sta_cistPtVal2","text","ds_cist","PT2_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_lastCist.form.sta_cistPtVal3","text","ds_cist","PT3_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_lastCist.form.sta_cistPtVal4","text","ds_cist","PT4_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_lastCist.form.sta_cistPtVal5","text","ds_cist","PT5_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_lastCist.form.sta_cistPtVal6","text","ds_cist","PT6_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_lastCist.form.sta_cistPtVal7","text","ds_cist","PT7_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_lastCist.form.sta_cistGradeVal","text","ds_cist","CIS_GRADE_VAL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUC_CIST_DETAIL_POP.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUC_CIST_DETAIL_POP.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUC_CIST_DETAIL_POP.xfdl","lib::mpgm_com.xjs");
        this.registerScript("NUC_CIST_DETAIL_POP.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: NUC_CIST_DETAIL_POP
         * 화면명   	: CIST 상세 확인 팝업
         * 화면설명 	: 모바일 CIST검사에서 그리드 상세 확인 누를시 보이는 팝업
         * 작성일   	: 2021-09-10
         * 작성자   	: 조기종
         * 수정이력 	: ↓↓↓↓↓↓↓
         ***********************************************************************
         *     수정일     수정자   내용
         ***********************************************************************
         *
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


        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.NUC_CIST_DETAIL_POP_onload = function(obj,e)
        {
        	// CIST 검사에서 받는 파라미터
        	const companyCd = this.parent.companyCd;
        	const resId = this.parent.resId;
        	const cisDt = this.parent.cisDt;

        	if(Sct.Util.isEmpty(companyCd) || Sct.Util.isEmpty(resId) || Sct.Util.isEmpty(cisDt))
        	{
        		alert("필요 정보가 없습니다.");
        		this.close();
        	}
        	else
        	{
        		// 검색조건 초기화
        		this.ds_search.setColumn(0, "COMPANY_CD", companyCd);
        		this.ds_search.setColumn(0, "RES_ID", resId);
        		this.ds_search.setColumn(0, "CIS_DT", cisDt);

        		this.fn_search();
        	}
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

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_cist=output1";
        	const argument = "method=getList "
        		+ "sqlId=NUC_CIST_DETAIL_POP.NUC_CIST_DETAIL_POP_DS_CIST_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			// 상세 확인하는 날짜 세팅
        			const cisDt = this.ds_cist.getColumn(0, "CIS_DT");
        			const day = Sct.Util.getDayH(cisDt, false);
        			const cisDate = cisDt.substr(0, 4) + "." + cisDt.substr(4, 2) + "." + cisDt.substr(6, 2) + "(" + day + ")";
        			this.div_lastCist.form.sta_day.set_text(cisDate);
        		}
        	}
        	else
        	{
        		Sct.alert(this, "", strErrorMsg);
        	}
        };

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 닫기
        this.imv_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.NUC_CIST_DETAIL_POP_onload,this);
            this.imv_close.addEventHandler("onclick",this.imv_close_onclick,this);
        };
        this.loadIncludeScript("NUC_CIST_DETAIL_POP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
