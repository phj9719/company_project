(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00700");
            this.set_titletext("7-0 수행,점검일지 현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"cycle\" type=\"STRING\" size=\"256\"/><Column id=\"menu_cd\" type=\"STRING\" size=\"256\"/><Column id=\"page_url\" type=\"STRING\" size=\"256\"/><Column id=\"sort\" type=\"STRING\" size=\"256\"/><Column id=\"jan\" type=\"STRING\" size=\"256\"/><Column id=\"feb\" type=\"STRING\" size=\"256\"/><Column id=\"mar\" type=\"STRING\" size=\"256\"/><Column id=\"apr\" type=\"STRING\" size=\"256\"/><Column id=\"may\" type=\"STRING\" size=\"256\"/><Column id=\"jun\" type=\"STRING\" size=\"256\"/><Column id=\"jul\" type=\"STRING\" size=\"256\"/><Column id=\"aug\" type=\"STRING\" size=\"256\"/><Column id=\"sep\" type=\"STRING\" size=\"256\"/><Column id=\"oct\" type=\"STRING\" size=\"256\"/><Column id=\"nov\" type=\"STRING\" size=\"256\"/><Column id=\"dec\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"no\">7-1</Col><Col id=\"title\">주간운영일지</Col><Col id=\"cycle\">주간</Col><Col id=\"menu_cd\">071</Col><Col id=\"page_url\">DAY::DAY00701</Col><Col id=\"sort\">1</Col></Row><Row><Col id=\"no\">7-2</Col><Col id=\"title\">주간식단표</Col><Col id=\"cycle\">주간</Col><Col id=\"menu_cd\">072</Col><Col id=\"page_url\">DAY::DAY00702</Col><Col id=\"sort\">2</Col></Row><Row><Col id=\"no\">7-3</Col><Col id=\"title\">위생점검일지</Col><Col id=\"cycle\">매일</Col><Col id=\"menu_cd\">073</Col><Col id=\"page_url\">DAY::DAY00703</Col><Col id=\"sort\">3</Col></Row><Row><Col id=\"no\">7-4</Col><Col id=\"title\">급식운영일지</Col><Col id=\"cycle\">매일</Col><Col id=\"menu_cd\">074</Col><Col id=\"page_url\">DAY::DAY00704</Col><Col id=\"sort\">4</Col></Row><Row><Col id=\"no\">7-5</Col><Col id=\"title\">식사평가일지</Col><Col id=\"cycle\">매일</Col><Col id=\"menu_cd\">075</Col><Col id=\"page_url\">DAY::DAY00705</Col><Col id=\"sort\">5</Col></Row><Row><Col id=\"no\">7-6</Col><Col id=\"title\">식품위생점검일지</Col><Col id=\"cycle\">매일</Col><Col id=\"menu_cd\">076</Col><Col id=\"page_url\">DAY::DAY00706</Col><Col id=\"sort\">6</Col></Row><Row><Col id=\"no\">7-7</Col><Col id=\"title\">직원교육(훈련)일지</Col><Col id=\"cycle\">매월</Col><Col id=\"menu_cd\">077</Col><Col id=\"page_url\">DAY::DAY00707</Col><Col id=\"sort\">7</Col></Row><Row><Col id=\"no\">7-8</Col><Col id=\"title\">직원회의록</Col><Col id=\"cycle\">수시</Col><Col id=\"menu_cd\">078</Col><Col id=\"page_url\">DAY::DAY00708</Col><Col id=\"sort\">8</Col></Row><Row><Col id=\"no\">7-9</Col><Col id=\"title\">수급자교육(훈련)일지</Col><Col id=\"cycle\">수시</Col><Col id=\"menu_cd\">079</Col><Col id=\"page_url\">DAY::DAY00709</Col><Col id=\"sort\">9</Col></Row><Row><Col id=\"no\">7-10</Col><Col id=\"title\">자원봉사활동일지</Col><Col id=\"cycle\">수시</Col><Col id=\"menu_cd\">0710</Col><Col id=\"page_url\">DAY::DAY00710</Col><Col id=\"sort\">10</Col></Row><Row><Col id=\"no\">7-11</Col><Col id=\"title\">운영위원회회의록</Col><Col id=\"cycle\">수시</Col><Col id=\"menu_cd\">0711</Col><Col id=\"page_url\">DAY::DAY00711</Col><Col id=\"sort\">11</Col></Row><Row><Col id=\"no\">7-11</Col><Col id=\"title\">보호자회의록</Col><Col id=\"cycle\">수시</Col><Col id=\"menu_cd\">0712</Col><Col id=\"page_url\">DAY::DAY00711</Col><Col id=\"sort\">12</Col></Row><Row><Col id=\"no\">7-13</Col><Col id=\"title\">소화및경보설비점검(매월)</Col><Col id=\"cycle\">매월</Col><Col id=\"menu_cd\">0713</Col><Col id=\"page_url\">DAY::DAY00712</Col><Col id=\"sort\">13</Col></Row><Row><Col id=\"no\">7-14</Col><Col id=\"title\">가스안전점검(매월)</Col><Col id=\"cycle\">매월</Col><Col id=\"menu_cd\">0714</Col><Col id=\"page_url\">DAY::DAY00713</Col><Col id=\"sort\">14</Col></Row><Row><Col id=\"no\">7-15</Col><Col id=\"title\">전기안전점검(매월)</Col><Col id=\"cycle\">매월</Col><Col id=\"menu_cd\">0715</Col><Col id=\"page_url\">DAY::DAY00714</Col><Col id=\"sort\">15</Col></Row><Row><Col id=\"no\">7-16</Col><Col id=\"title\">미세먼지대응 현장점검(수시)</Col><Col id=\"cycle\">수시</Col><Col id=\"menu_cd\">0716</Col><Col id=\"page_url\">DAY::DAY00715</Col><Col id=\"sort\">16</Col></Row><Row><Col id=\"no\">7-17</Col><Col id=\"title\">비상구점검일지</Col><Col id=\"cycle\">매일</Col><Col id=\"menu_cd\">0717</Col><Col id=\"page_url\">DAY::DAY00716</Col><Col id=\"sort\">17</Col></Row><Row><Col id=\"no\">7-18</Col><Col id=\"title\">실내외 정기소독일지</Col><Col id=\"cycle\">수시</Col><Col id=\"menu_cd\">0718</Col><Col id=\"page_url\">DAY::DAY00717</Col><Col id=\"sort\">18</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">2021</Col><Col id=\"CMNM\">2021년</Col></Row><Row><Col id=\"CMCD\">2022</Col><Col id=\"CMNM\">2022년</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","0",null,null,"0","40",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"수행, 점검일지제목\"/><Cell col=\"2\" text=\"작성주기\"/><Cell col=\"3\" text=\"1월\"/><Cell col=\"4\" text=\"2월\"/><Cell col=\"5\" text=\"3월\"/><Cell col=\"6\" text=\"4월\"/><Cell col=\"7\" text=\"5월\"/><Cell col=\"8\" text=\"6월\"/><Cell col=\"9\" text=\"7월\"/><Cell col=\"10\" text=\"8월\"/><Cell col=\"11\" text=\"9월\"/><Cell col=\"12\" text=\"10월\"/><Cell col=\"13\" text=\"11월\"/><Cell col=\"14\" text=\"12월\"/></Band><Band id=\"body\"><Cell text=\"bind:no\"/><Cell col=\"1\" expandchar=\"조회\" expandshow=\"show\" expandsize=\"80\" textAlign=\"left\" text=\"bind:title\" expandimage=\"url('theme://images/ico_search.png')\"/><Cell col=\"2\" text=\"bind:cycle\"/><Cell col=\"3\" text=\"bind:jan\" expr=\"dataset.getColumn(currow, 'jan') == 0 ? '' : dataset.getColumn(currow, 'jan')\"/><Cell col=\"4\" text=\"bind:feb\" expr=\"dataset.getColumn(currow, 'feb') == 0 ? '' : dataset.getColumn(currow, 'feb')\"/><Cell col=\"5\" text=\"bind:mar\" expr=\"dataset.getColumn(currow, 'mar') == 0 ? '' : dataset.getColumn(currow, 'mar')\"/><Cell col=\"6\" text=\"bind:apr\" expr=\"dataset.getColumn(currow, 'apr') == 0 ? '' : dataset.getColumn(currow, 'apr')\"/><Cell col=\"7\" text=\"bind:may\" expr=\"dataset.getColumn(currow, 'may') == 0 ? '' : dataset.getColumn(currow, 'may')\"/><Cell col=\"8\" text=\"bind:jun\" expr=\"dataset.getColumn(currow, 'jun') == 0 ? '' : dataset.getColumn(currow, 'jun')\"/><Cell col=\"9\" text=\"bind:jul\" expr=\"dataset.getColumn(currow, 'jul') == 0 ? '' : dataset.getColumn(currow, 'jul')\"/><Cell col=\"10\" text=\"bind:aug\" expr=\"dataset.getColumn(currow, 'aug') == 0 ? '' : dataset.getColumn(currow, 'aug')\"/><Cell col=\"11\" text=\"bind:sep\" expr=\"dataset.getColumn(currow, 'sep') == 0 ? '' : dataset.getColumn(currow, 'sep')\"/><Cell col=\"12\" text=\"bind:oct\" expr=\"dataset.getColumn(currow, 'oct') == 0 ? '' : dataset.getColumn(currow, 'oct')\"/><Cell col=\"13\" text=\"bind:nov\" expr=\"dataset.getColumn(currow, 'nov') == 0 ? '' : dataset.getColumn(currow, 'nov')\"/><Cell col=\"14\" text=\"bind:dec\" expr=\"dataset.getColumn(currow, 'dec') == 0 ? '' : dataset.getColumn(currow, 'dec')\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_remark","7","grd_list:0","393","18",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("※ 조회버튼을 클릭하면 일지화면으로 이동합니다.");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_search","0","0",null,"30","0.00%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_year","10","5","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search","158","5","70","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cmb_year","value","ds_search","YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00700.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00700.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00700.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00700
         * 화면명   	: 7-0 수행,점검일지 현황
         * 화면설명 	: 해당년도의 수행, 점검일지를 월별로 얼마나
        				  작성했는지를 한눈에 보기 위한 화면
         * 작성일   	: 2022-02-11
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *
         ***********************************************************************/
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        const fv_sicode = nexacro.getApplication().gds_userInfo.getColumn(0,"sicode");
        this.fv_currentDS = this.ds_list;
        this.fv_currentGrid = this.div_cont.form.grd_list;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 현재 년도 구하기
        	const date = new Date();
        	const year = date.getFullYear();

        	// 년도 콤보박스 세팅
        	this.ds_year.clearData();
        	let nRow;
        	for (let i = 10; i > 0; i--)
        	{
        		nRow = this.ds_year.addRow();
        		this.ds_year.setColumn(nRow, "CMCD", year - i);
        		this.ds_year.setColumn(nRow, "CMNM", (year - i) + "년");
        	}
        	for (let i = 0; i < 11; i++)
        	{
        		nRow = this.ds_year.addRow();
        		this.ds_year.setColumn(nRow, "CMCD", year + i);
        		this.ds_year.setColumn(nRow, "CMNM", (year + i) + "년");
        	}

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "YEAR", year);

        	// 오픈시 조회
        	this.fn_search();
        };

        /***********************************************************************
         * Common Button Functions
         ************************************************************************/
        // 조회 버튼
        this.fn_searchBtn = function()
        {
        	this.fn_search();
        };
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function()
        {
             return true;
        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //조회
        this.fn_search = function()
        {
        	//validation
        	if(!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00700.DAY00700_DS_LIST_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if (strSvcID == "search")
        		{

        		}
        	}
        	else
        	{
        		this.alert(strErrorMsg);
        		return false;
        	}
        };
        /***********************************************************************
         * User Functions
         ***********************************************************************/

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 그리드 확장버튼 클릭 이벤트
        this.div_cont_grd_list_onexpandup = function(obj,e)
        {
        	// 그리드의 조회 버튼 클릭시 해당화면으로 이동
        	const titleIdx = obj.getBindCellIndex("body", "title");
        	if (e.col = titleIdx)
        	{
        		const no = this.ds_list.getColumn(e.row, "no");
        		const title = this.ds_list.getColumn(e.row, "title");
        		const menuCD = this.ds_list.getColumn(e.row, "menu_cd");
        		const pageURL = this.ds_list.getColumn(e.row, "page_url");
        		const sort = this.ds_list.getColumn(e.row, "sort");

        		const param = {
        				MENU_CD : menuCD
        			,	PAGE_URL : pageURL
        			,	TITLE : no + " " + title
        			,	SORT : sort
        		};

        		Sct.workOpenMenu(menuCD, param, false);
        	}
        };

        // 조회조건 년도 값 변경 이벤트
        this.div_search_cmb_year_onitemchanged = function(obj,e)
        {
        	// 값 변경시 조회
        	this.fn_search();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.grd_list.addEventHandler("onexpandup",this.div_cont_grd_list_onexpandup,this);
            this.div_search.form.cmb_year.addEventHandler("onitemchanged",this.div_search_cmb_year_onitemchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
        };
        this.loadIncludeScript("DAY00700.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
