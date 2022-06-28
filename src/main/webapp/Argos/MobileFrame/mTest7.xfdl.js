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
            this.set_titletext("공지사항");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NOT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NOT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_REAL_LIST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_acco","0","0",null,"768","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",480,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("mTest7.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("mTest7.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("mTest7.xfdl","lib::mpgm_com.xjs");
        this.registerScript("mTest7.xfdl", function() {
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

        /* service url : 사용경로 지정 */
        this.saveUrl = nexacro.getEnvironment().services["svcurl"].url + "/common/";
        const fileDownTrans = new nexacro.FileDownTransfer( "fileDownTrans", this );
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e);

        	//조회조건
        	this.ds_search.setColumn(0, "COMPANY_CD", nexacro.getApplication().gds_mUserInfo.getColumn(0, "COMPANY_CD"));

        	//조회
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
        		+ "sqlId=mTest7.mTest7_DS_LIST_S ";

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
        			this.fnMakeAccordionForm(this.div_acco, this.ds_list);
        			this.div_acco.form.resetScroll();
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
        this.divOpen_onclick= function(obj, e)
        {
        	let i = obj.id.split("_")[2];
        	let objDiv = this.div_acco.form.components["div_detail_" + i];
        	let objmDiv = this.div_acco.form.components["div_title_" + i];
        	let objBtn = objmDiv.form.components["btn_isOpen_" + i];
        	let nHeight = objDiv.getOffsetHeight();
        	let nTileHeight;

        	// Tile Div가 접힌 상태일 경우
        	if(nHeight == 0)
        	{
        		// div 아래 선 없애기
        		objmDiv.set_border("");

        		// 버튼 이미지 변경
        		objBtn.set_icon('URL(theme://images/ico_notice_close.png)');

        		// 스크롤바 갱신
        		objDiv.form.resetScroll();

        		// 스크롤바 max값이 곧 InnerForm의 Height와 같음
        		nTileHeight = objDiv.form.vscrollbar.max;

        		// InnerForm의 Height만큼 Div 사이즈 변경
        		objDiv.setOffsetHeight(nTileHeight);
        	}
        	// Tile Div가 펼쳐진 상태일 경우
        	else
        	{
        		// div 아래 선 살리기
        		objmDiv.set_border("0px none,0px none,2px solid #cccccc");

        		// 버튼 이미지 변경
        		objBtn.set_icon('URL(theme://images/ico_notice_open.png)');

        		objDiv.setOffsetHeight(0);
        	}

        	this.div_acco.setOffsetHeight(0);

        	// resetScroll을 실행시켜 Position Base 설정한 컴포넌트 재배치
        	this.div_acco.form.resetScroll();

        	nHeight = this.div_acco.getOffsetHeight() + this.div_acco.form.vscrollbar.max + 5;
        	this.div_acco.setOffsetHeight(nHeight);

        	this.resetScroll();
        };

        this.fnMakeAccordionForm = function(objDiv, objDs)
        {
        	let objPadding = {
        		"left" : 5,
        		"top" : 5,
        		"right" : 5,
        		"bottom" : 5,
        		"linespace" : 5,
        		"compspace" : 5
        	};

        	let nLeft = 0;
        	const nRight = 0;
        	let nTop = objPadding.top;
        	let nCompHeight = 100;

        	let objComp;

        	objDs.set_enableevent(false);

        	const nCount = objDs.rowcount;
        	for(let i = 0; i < nCount; i++)
        	{

        		const seq = objDs.getColumn(i, "NOT_SEQ");
        		const date = objDs.getColumn(i, "NOT_DT");
        		let title = objDs.getColumn(i, "TITLE");

        		// 제목의 글자수가 20자 이상일 경우 ...으로 말줄임
        		const length = 20;
        		if(title.length > length)
        		{
        			title = title.substr(0, length - 2) + "...";
        		}

         		nLeft = objPadding.left;
         		if(i != 0)
         		{
         			let seqPrev = i - 1;
         			nTop = "div_detail_" + seqPrev + ":" + objPadding.linespace + "px";
         		}

        		let divComp;
        		// div 만들기
        		divComp = new Div("div_title_" + i, nLeft, nTop, null, nCompHeight, nRight, null);
        		divComp.set_border("0px none,0px none,2px solid #cccccc");
        		objDiv.addChild(divComp.name, divComp);
        		divComp.addEventHandler("onclick", this.divOpen_onclick, this);
        		divComp.show();

        		// div 안에 날짜
        		const mDate = Sct.Util.getDateFormat(date, '.');
        		objComp = new Static("sta_date_" + i, "5%", 12, null, 30, "5%", null);
        		objComp.set_text(mDate);
        		objComp.set_color("#999999");
        		objComp.set_font("bold 14pt/normal 'Noto Sans CJK KR Bold'");
        		divComp.addChild(objComp.name, objComp);
        		objComp.show();

        		// div 안에 제목
        		objComp = new Static("sta_title_" + i, "5%", 42, null, 40, 100, null);
        		objComp.set_text(title);
        		objComp.set_color("#555555");
        		objComp.set_font("bold 18pt/normal 'Noto Sans CJK KR Bold'");
        		objComp.addEventHandler("onclick", this.divOpen_onclick, this);
        		divComp.addChild(objComp.name, objComp);
        		objComp.show();

        		// div 안에 화살표 버튼
        		objComp = new Button("btn_isOpen_" + i, null, 42, 70, 40, "5%", null);
        		objComp.set_icon('URL(theme://images/ico_notice_open.png)');
        		objComp.addEventHandler("onclick", this.divOpen_onclick, this);
        		divComp.addChild(objComp.name, objComp);
        		objComp.show();

        		// 자식 Div 만들기
        		nLeft = objPadding.left;
        		objComp = new Div("div_detail_" + i, nLeft, divComp.name + ":0px", null, 0, 0, null);
        		objComp.set_background("#f2f2f4");
        		objComp.set_border("0px none,0px none,2px solid #cccccc");
        		objDiv.addChild(objComp.name, objComp);
        		objComp.show();

        		// 아코디언 자식 Div 내용 만들기
        		this.fnMakeAccordionSubForm(i, objComp, objDs);

        		nTop = nTop + nCompHeight + objPadding.linespace;
        	}

        	objDs.set_enableevent(true);

        };

        this.fnMakeAccordionSubForm = function(i, objDiv, objDs)
        {
        	const objPadding = {
        		"left" : "5%",
        		"top" : 20,
        		"right" : 5,
        		"bottom" : 5,
        		"linespace" : 5,
        		"compspace" : 5
        	};

        	let nLeft = objPadding.left;
        	let nTop = objPadding.top;
        	let nCompHeight;

        	let nCount;
        	let objComp;

        	const content = objDs.getColumn(i, "CONTENT");
        	const title = objDs.getColumn(i, "TITLE");
        	const objSize = nexacro.getTextSize(content, "15pt/normal 'Noto Sans CJK KR Regular'", 420, "char");
        	const objaa = Sct.Util.appendComma(objSize.ny, 0);
        	nCompHeight = parseInt(objaa) + 100;

        	objComp = new Static("sta_content_" + i, nLeft, nTop, 420, nCompHeight, "5%", null);
        	objComp.set_text(title + "\n\n\n" + content);
        	objComp.set_color("#7d7f97");
        	objComp.set_wordWrap("char");
        	objComp.set_font("15pt/normal 'Noto Sans CJK KR Regular'");
        	objComp.set_letterSpacing("-1px");
        	objDiv.addChild(objComp.name, objComp);
        	objComp.show();

        	nTop = nTop + nCompHeight + 20;

        	const fileList = objDs.getColumn(i, "FILE_LIST");
        	const fileRealList = objDs.getColumn(i, "FILE_REAL_LIST");
        	// 첨부파일이 있는경우
        	if(fileList != null && fileList != '')
        	{
        		let fileArr;
        		let fileRealArr;
        		fileArr = fileList.split(',');
        		fileRealArr = fileRealList.split(',');
        		for(i = 0; i < fileArr.length; i++)
        		{
        			if(i == 0)
        			{
        				objComp = new Static("sta_file00", nLeft, nTop, 100, 30);
        				objComp.set_text("첨부파일 : ");
        				objComp.set_font("15pt/normal 'Noto Sans CJK KR Regular'");
        				objComp.set_background("url('theme://images/ico_file.png') no-repeat left center");
        				objComp.set_color("#7d7f97");
        				objComp.set_letterSpacing("-1px");
        				objComp.set_padding("0px 0px 0px 15px");
        				objDiv.addChild(objComp.name, objComp);
        				objComp.show();

        				nLeft = 130;
        				objComp = new Static("sta_file_" + i, nLeft, nTop, 310, 30);
        				objComp.set_text(fileArr[i]);
        				objComp._fileReal = fileRealArr[i];
        				objComp.set_color("#7d7f97");
        				objComp.set_font("15pt/normal 'Noto Sans CJK KR Regular'");
        				objComp.set_letterSpacing("-1px");
        				objComp.addEventHandler("onclick", this.fileDownClick, this);
        				objDiv.addChild(objComp.name, objComp);
        				objComp.show();
        			}
        			else
        			{
        				nTop = nTop + 40;

        				objComp = new Static("sta_file_" + i, nLeft, nTop, 310, 30);
        				objComp.set_text(fileArr[i]);
        				objComp._fileReal = fileRealArr[i];
        				objComp.set_color("#7d7f97");
        				objComp.set_font("15pt/normal 'Noto Sans CJK KR Regular'");
        				objComp.set_letterSpacing("-1px");
        				objComp.addEventHandler("onclick", this.fileDownClick, this);
        				objDiv.addChild(objComp.name, objComp);
        				objComp.show();
        			}
        		}

        		objComp = new Div("div_dummy_f", nLeft, nTop + 40, null, 30, "5%", null);
        		objDiv.addChild(objComp.name, objComp);

        	}

        	objComp = new Div("div_dummy_m", nLeft, nTop, null, 30, "5%", null);
        	objDiv.addChild(objComp.name, objComp);

        };

        this.fileDownClick = function(obj, e)
        {
        	const fileRealName = obj._fileReal;
        	const fileName = obj.text;
        	this.downloadFile(fileName, fileRealName);
        };

        this.downloadFile = function(fileName, fileRealName)
        {
        	fileDownTrans.clearPostDataList();
        	fileDownTrans.setPostData("fileRealName", fileRealName);
        	fileDownTrans.setPostData("fileName", fileName);
        	fileDownTrans.download(this.saveUrl+"fileDownload_postdatatestAll.jsp");
        };


         /***********************************************************************
         * Component Event Functions
         ***********************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.ds_search.addEventHandler("onrowposchanged",this.ds_notice_onrowposchanged,this);
        };
        this.loadIncludeScript("mTest7.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
