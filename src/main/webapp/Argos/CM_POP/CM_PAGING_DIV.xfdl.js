(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CM_PAGING_DIV");
            this.set_titletext("페이징 DIV");
            if (Form == this.constructor)
            {
                this._setFormPosition(570,22);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_info", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"startPageNo\" type=\"INT\" size=\"256\"/><Column id=\"endPageNo\" type=\"INT\" size=\"256\"/><Column id=\"maxPageNo\" type=\"INT\" size=\"256\"/><Column id=\"nowPageNo\" type=\"INT\" size=\"256\"/><Column id=\"unitSelRowNo\" type=\"INT\" size=\"256\"/><Column id=\"pageBlock\" type=\"INT\" size=\"256\"/><Column id=\"totalCount\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPaging","0","0","140","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btnFirst","11","0","26","21",null,null,null,null,null,null,this.divPaging.form);
            obj.set_taborder("0");
            obj.set_text("<<");
            this.divPaging.addChild(obj.name, obj);

            obj = new Button("btnPrev","42","0","26","21",null,null,null,null,null,null,this.divPaging.form);
            obj.set_taborder("1");
            obj.set_text("<");
            this.divPaging.addChild(obj.name, obj);

            obj = new Button("btnNext",null,"0","26","21","41",null,null,null,null,null,this.divPaging.form);
            obj.set_taborder("2");
            obj.set_text(">");
            this.divPaging.addChild(obj.name, obj);

            obj = new Button("btnLast",null,"0","26","21","10",null,null,null,null,null,this.divPaging.form);
            obj.set_taborder("3");
            obj.set_text(">>");
            this.divPaging.addChild(obj.name, obj);

            obj = new Div("divCount",null,"0","370","21","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("divCount");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_execute",null,"0","60","21","3",null,null,null,null,null,this.divCount.form);
            obj.set_taborder("3");
            obj.set_text("이동");
            obj.set_cssclass("btn_com_search");
            this.divCount.addChild(obj.name, obj);

            obj = new Static("sta_page",null,"0","79","21","63",null,null,null,null,null,this.divCount.form);
            obj.set_taborder("4");
            obj.set_text("page /");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.divCount.addChild(obj.name, obj);

            obj = new MaskEdit("msk_current_page",null,"0","45","21","149",null,null,null,null,null,this.divCount.form);
            obj.set_taborder("2");
            obj.set_format("!9,999");
            this.divCount.addChild(obj.name, obj);

            obj = new MaskEdit("msk_page_scale",null,"0","30","21","209",null,null,null,null,null,this.divCount.form);
            obj.set_taborder("1");
            obj.set_format("!9,999");
            this.divCount.addChild(obj.name, obj);

            obj = new Static("sta_page_scale",null,"0","34","21","246",null,null,null,null,null,this.divCount.form);
            obj.set_taborder("5");
            obj.set_text("scale");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.divCount.addChild(obj.name, obj);

            obj = new MaskEdit("msk_page_size",null,"0","50","21","280",null,null,null,null,null,this.divCount.form);
            obj.set_taborder("0");
            obj.set_format("!9,999");
            this.divCount.addChild(obj.name, obj);

            obj = new Static("sta_page_size",null,"0","30","21","340",null,null,null,null,null,this.divCount.form);
            obj.set_taborder("6");
            obj.set_text("size");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.divCount.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",570,22,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divCount.form.msk_current_page","value","ds_info","nowPageNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divCount.form.msk_page_scale","value","ds_info","maxPageNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divCount.form.msk_page_size","value","ds_info","unitSelRowNo");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CM_PAGING_DIV.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("CM_PAGING_DIV.xfdl","lib::pgm_com.xjs");
        this.registerScript("CM_PAGING_DIV.xfdl", function() {
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/
        /*
        ① 페이징 처리 버튼용 Div -> id : divPaging
        이전/다음 버튼 추가 -> btnFirst , btnPrev , btnNext , btnLast

        ② 페이징 총계 및 이동 처리 Div – > id : divCount
        – 현재 페이지 표시 및 이동할 페이지 수정 Edit -> id : msk_current_page
        – 전체 통계 표시 Static -> id : stTotal
        – 이동 버튼 -> id : btnGo
        */
        this.fv_objDs = new Object();
        this.fv_pForm;

        this.paging_comm_onload = function(obj,e)
        {
            //form의 scrollbar 제거
            this.set_scrollbartype('none');
        };

        this.divPagingButton_onclick = function(obj,e)
        {
            var objName = obj.name.split('btn');
            this.fn_page (objName[1]);
        };

        this.divPagingNumber_onclick = function(obj,e)
        {
            this.fn_page (obj.text);
        };

        /*****************************************************************************
        * 함 수 명 칭 : fn_init
        * 함 수 설 명 : Page button 세팅 및 총계/이동 div 활성화
        * 파 라 미 터 : dataset(objDs) - 조회할 dataset
                 objDs.pageRowCount : 한 페이지에서 조회 할 row count
                 objDs.pageCount : 페이지 버튼 개수
                 objDs.pageTotalVisible : 총 row count 및 이동 div 활성화 여부
        * 리 턴 내 용 :
        *****************************************************************************/
        //페이징처리 개수 및 사이즈 지정 (상위 페이지에서 호출)
        this.fn_init= function (pForm, objDs)
        {
        	//전역변수 초기화
        	this.fv_objDs = objDs;
        	this.fv_pForm = pForm;

        	this.ds_info.setColumn(0, "startPageNo", 1);
            this.ds_info.setColumn(0, "endPageNo", objDs.pageCount);
            this.ds_info.setColumn(0, "maxPageNo", objDs.pageCount);
            this.ds_info.setColumn(0, "unitSelRowNo", objDs.pageRowCount);
        	this.ds_info.setColumn(0, "nowPageNo", 1);
        	this.ds_info.setColumn(0, "pageBlock", objDs.pageCount) ;
        	this.ds_info.setColumn(0, "totalCount", 0);

        	this.divPaging.form.btnPrev.set_enable(false);
        	this.divPaging.form.btnFirst.set_enable(false);

        	this.divPaging.form.btnNext.set_enable(false);
        	this.divPaging.form.btnLast.set_enable(false);

        	//버튼 재생성
        	this.fn_btnRedraw();
        };

        this.fn_btnRedraw = function()
        {
        	//합계 div 활성화 여부 및 현재 width 값 가져오기
            var sThisWidth = this.width;
            if(this.fv_objDs.pageTotalVisible){
                //sThisWidth = sThisWidth - this.divCount.getOffsetWidth();
                this.divCount.set_visible(true);
            }else{
                this.divCount.set_visible(false);
            }

        	//버튼 삭제
        	for (var i=this.divPaging.form.components.length-1; i>=0; i--)
        	{
        		var objTarget = this.divPaging.form.components[i];
        		var objName = objTarget.name.split('btn');
        		if(objName[1] != "First" && objName[1] != "Prev" && objName[1] != "Last" && objName[1] != "Next")
        		{
        			this.divPaging.removeChild(objTarget.id);
        			var bool = objTarget.destroy();
        		}
        	}
        	var pageCnt = this.ds_info.getColumn(0, "endPageNo") - this.ds_info.getColumn(0, "startPageNo");
        	if(this.ds_info.getColumn(0, "pageBlock") == this.ds_info.getColumn(0, "endPageNo")
        	&& (this.ds_info.getColumn(0, "startPageNo") + this.ds_info.getColumn(0, "maxPageNo") != this.ds_info.getColumn(0, "endPageNo"))
        	) pageCnt = pageCnt + 1;

        	//divPaging 크기조정
        	var sDivPagingWidth = (26*4+3+3)+(20+20)+(pageCnt*20)+((pageCnt-1)*10);
            this.divPaging.setOffsetWidth(sDivPagingWidth);

        	/*
        	//가변화면일경우 최초 onload시밖에 조정안됨. %로 불가능 주석처리
        	//divPaging 위치조정 (가운데)
            this.divPaging.setOffsetLeft(parseInt((sThisWidth-sDivPagingWidth)/2));
            */

            //페이징처리 버튼 생성
        	var btnLeft = 26+3+26+20;
        	var btnLeft = 73;
            var btnTop = 0;
            var btnWidth = 25;
            var btnHeight = 21;

            for(var i=0; i<this.ds_info.getColumn(0, "maxPageNo"); i++) {
                var objButton = new Button();
                var objBtnId    = "btn"+i;
                objButton.init(objBtnId,btnLeft,btnTop,btnWidth,btnHeight,null,null);
                objButton.set_text(i+1);
                objButton.set_enable(false);
        		objButton.set_cursor("pointer");
                objButton.addEventHandler("onclick",this.divPagingNumber_onclick, this);

                this.divPaging.addChild(objBtnId,objButton);
                objButton.show();

                btnLeft = btnLeft + 30;
            }
        }


        /*****************************************************************************
        * 함 수 명 칭 : fn_page
        * 함 수 설 명 : 버튼이 클릭 된 후, start / end page no setting
        * 파 라 미 터 : btnText - 버튼 ID (숫자 or 전/후/맨앞/맨뒤 페이지)
        * 리 턴 내 용 :
        *****************************************************************************/
        this.fn_page = function (btnText)
        {
            var objNum = this.ds_info.getColumn(0, "nowPageNo");
            if(btnText=='First'){
                this.ds_info.setColumn(0, "startPageNo", 1);
                this.ds_info.setColumn(0, "endPageNo",  1 + (this.ds_info.getColumn(0, "maxPageNo")-1));

                objNum = this.ds_info.getColumn(0, "startPageNo");
            }else if(btnText=='Prev'){
                this.ds_info.setColumn(0, "startPageNo", this.ds_info.getColumn(0, "startPageNo") - this.ds_info.getColumn(0, "maxPageNo"));
                this.ds_info.setColumn(0, "endPageNo", this.ds_info.getColumn(0, "startPageNo") + (this.ds_info.getColumn(0, "maxPageNo")-1));

                objNum = this.ds_info.getColumn(0, "startPageNo");
            }else if(btnText=='Last'){
                this.ds_info.setColumn(0, "endPageNo", this.ds_info.getColumn(0, "pageBlock"));
                objNum = this.ds_info.getColumn(0, "endPageNo");
                if (objNum%this.ds_info.getColumn(0, "maxPageNo") == 0){
                    this.ds_info.setColumn(0, "startPageNo", this.ds_info.getColumn(0, "endPageNo") - (this.ds_info.getColumn(0, "maxPageNo")-1));
                }else{
                    this.ds_info.setColumn(0, "startPageNo", parseInt(this.ds_info.getColumn(0, "pageBlock")/this.ds_info.getColumn(0, "maxPageNo"))*this.ds_info.getColumn(0, "maxPageNo")+ 1);
                }

            }else if(btnText=='Next'){
                this.ds_info.setColumn(0, "startPageNo", this.ds_info.getColumn(0, "startPageNo") + this.ds_info.getColumn(0, "maxPageNo"));
                this.ds_info.setColumn(0, "endPageNo", this.ds_info.getColumn(0, "startPageNo") + (this.ds_info.getColumn(0, "maxPageNo")-1));

                if(this.ds_info.getColumn(0, "endPageNo") > this.ds_info.getColumn(0, "pageBlock")){
                    this.ds_info.setColumn(0, "endPageNo", this.ds_info.getColumn(0, "pageBlock"));
                }

                objNum = this.ds_info.getColumn(0, "startPageNo");
            }else{
                objNum = Number(btnText);
                if (objNum%this.ds_info.getColumn(0, "maxPageNo") == 0){
                    this.ds_info.setColumn(0, "endPageNo", objNum);
                    this.ds_info.setColumn(0, "startPageNo", this.ds_info.getColumn(0, "endPageNo") - (this.ds_info.getColumn(0, "maxPageNo")-1));
                }else{
                    this.ds_info.setColumn(0, "startPageNo", parseInt(objNum/this.ds_info.getColumn(0, "maxPageNo"))*this.ds_info.getColumn(0, "maxPageNo")+1);
                    this.ds_info.setColumn(0, "endPageNo", this.ds_info.getColumn(0, "startPageNo") + (this.ds_info.getColumn(0, "maxPageNo")-1));
                }

                if (this.ds_info.getColumn(0, "endPageNo") > this.ds_info.getColumn(0, "pageBlock")){
                    this.ds_info.setColumn(0, "endPageNo", this.ds_info.getColumn(0, "pageBlock"));
                }
            }

            this.ds_info.setColumn(0, "nowPageNo", objNum);
        	this.fv_objDs.pageNo = objNum;
        	eval("this.fv_pForm." + this.fv_objDs.pageFunctionName + "();");
        };






        /*****************************************************************************
        * 함 수 명 칭 : fn_callAfter
        * 함 수 설 명 : transaction 조회 후, 전달된 전체 row수와 page block 개수가 저장된 변수 세팅
        * 파 라 미 터 :
        * 리 턴 내 용 :
        *****************************************************************************/
        //this.fn_callAfter = function ()
        this.fn_callAfter = function ()
        {
        	var pageBlock = this.fv_pForm.pageBlock;
        	var totalCount = this.fv_pForm.pageTotRowCount;
        	var nowPageNo = this.fv_pForm.pageNo;


        	this.ds_info.setColumn(0, "pageBlock", pageBlock);
            this.ds_info.setColumn(0, "totalCount", totalCount);
        	this.ds_info.setColumn(0, "nowPageNo", nowPageNo);
        	this.fv_objDs.pageNo = nowPageNo;

        	//nowPage변경된경우 startRow 도 변경
        	this.ds_info.setColumn(0, "startPageNo", 	nowPageNo - ( ( nowPageNo - 1) % this.ds_info.getColumn(0, "maxPageNo") ) );
        	var endPageNo = nowPageNo - ( ( nowPageNo - 1) % this.ds_info.getColumn(0, "maxPageNo") ) + this.ds_info.getColumn(0, "maxPageNo");
        	if(endPageNo > this.ds_info.getColumn(0, "pageBlock")) 	this.ds_info.setColumn(0, "endPageNo", this.ds_info.getColumn(0, "pageBlock"));
        	else													this.ds_info.setColumn(0, "endPageNo", endPageNo);

            //this.divCount.form.msk_current_page.set_value(this.ds_info.getColumn(0, "nowPageNo"));
            this.divCount.form.sta_page.set_text("page / " + this.ds_info.getColumn(0, "pageBlock"));
            this.fn_setPageNo();
        };

        /*****************************************************************************
        * 함 수 명 칭 : fn_setPageNo
        * 함 수 설 명 : Page번호 Setting 및 버튼 활성화
        * 파 라 미 터 :
        * 리 턴 내 용 :
        *****************************************************************************/
        this.fn_setPageNo = function()
        {
            var sPage   = this.ds_info.getColumn(0, "startPageNo");
            var nPageNo =  this.ds_info.getColumn(0, "nowPageNo"); // 현재 페이지번호

            // 이전버튼 처리
            if (sPage == 1) {
                this.divPaging.form.btnPrev.set_enable(false);
                this.divPaging.form.btnFirst.set_enable(false);
            } else {
                this.divPaging.form.btnPrev.set_enable(true);
                this.divPaging.form.btnFirst.set_enable(true);
            }

            // 마지막 버튼 처리
            if(this.ds_info.getColumn(0, "endPageNo")==this.ds_info.getColumn(0, "pageBlock")
        	 && (this.ds_info.getColumn(0, "startPageNo") + this.ds_info.getColumn(0, "maxPageNo") != this.ds_info.getColumn(0, "endPageNo"))
        	){
                this.divPaging.form.btnNext.set_enable(false);
                this.divPaging.form.btnLast.set_enable(false);
            } else {
                this.divPaging.form.btnNext.set_enable(true);
                this.divPaging.form.btnLast.set_enable(true);
            }

        	//버튼 redraw
            this.fn_btnRedraw();

        	for (var i = 0; i < this.ds_info.getColumn(0, "maxPageNo"); i++){
                //현재 선택된 페이지는 다시 선택되지 않도록 제어
                if(sPage==nPageNo){
                    this.divPaging.form.all["btn" + i].set_enable(false);
                }else{
                    this.divPaging.form.all["btn" + i].set_enable(true);
                }

                // 페이지 번호 처리
                this.divPaging.form.all["btn" + i].set_text(sPage);

                // 남은 페이지보다 버튼의 수가 많은 경우 비활성화
                if (this.ds_info.getColumn(0, "totalCount") > ((sPage - 1) * this.ds_info.getColumn(0, "unitSelRowNo"))) {
                    this.divPaging.form.all["btn" + i].set_visible(true);
                }else{
                    this.divPaging.form.all["btn" + i].set_visible(false);
                }

                sPage++;
            }
        };

        //입력 validation
        this.ds_info_oncolumnchanged = function(obj,e)
        {
        	//page size 수정시
        	if(e.columnid == "unitSelRowNo")
        	{
        		//null값 입력시 원복
        		if(Sct.Util.isEmpty(e.newvalue))
        		{
        			obj.setColumn(e.row, e.columnid, e.oldvalue);
        			return;
        		}

        		//데이터셋 rowCount 변경
        		this.fv_objDs.pageRowCount = e.newvalue;
        	}
        	//page scale 수정시
        	else if(e.columnid == "maxPageNo")
        	{
        		//null값 입력시 원복
        		if(Sct.Util.isEmpty(e.newvalue))
        		{
        			obj.setColumn(e.row, e.columnid, e.oldvalue);
        			return;
        		}
        		//최대페이지수 20
        		if(e.newvalue > 20)
        		{
        			obj.setColumn(e.row, e.columnid, e.oldvalue);
        			return;
        		}
        	}
        	//현재페이지 변경시
        	else if(e.columnid == "nowPageNo")
        	{
        		//null값 입력시 원복
        		if(Sct.Util.isEmpty(e.newvalue))
        		{
        			obj.setColumn(e.row, e.columnid, e.oldvalue);
        			return;
        		}

        		//최대페이지수 초과시 원복
        		if(e.newvalue > this.ds_info.getColumn(0, "pageBlock"))
        		{
        			obj.setColumn(e.row, e.columnid, e.oldvalue);
        			return;
        		}

        		//현재페이지 변경
        		this.fv_objDs.pageNo = e.newvalue;
        	}

        };

        //이동버튼 클릭 이벤트
        this.divCount_btn_execute_onclick = function(obj,e)
        {
        	eval("this.fv_pForm." + this.fv_objDs.pageFunctionName + "();");
        };

        //입력 component enter 시 이동버튼 클릭
        this.divCount_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		eval("this.fv_pForm." + this.fv_objDs.pageFunctionName + "();");
        	}
        };
        this.fn_autoSearch = function(clearYn){
        	if(clearYn == "Y"){
        		this.fv_objDs.pageNo++;
        	}else{
        		this.fv_objDs.pageNo = 1;
        	}
        	eval("this.fv_pForm." + this.fv_objDs.pageFunctionName + "();");
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.paging_comm_onload,this);
            this.divPaging.form.btnFirst.addEventHandler("onclick",this.divPagingButton_onclick,this);
            this.divPaging.form.btnPrev.addEventHandler("onclick",this.divPagingButton_onclick,this);
            this.divPaging.form.btnNext.addEventHandler("onclick",this.divPagingButton_onclick,this);
            this.divPaging.form.btnLast.addEventHandler("onclick",this.divPagingButton_onclick,this);
            this.divCount.addEventHandler("onkeyup",this.divCount_onkeyup,this);
            this.divCount.form.btn_execute.addEventHandler("onclick",this.divCount_btn_execute_onclick,this);
            this.ds_info.addEventHandler("oncolumnchanged",this.ds_info_oncolumnchanged,this);
        };
        this.loadIncludeScript("CM_PAGING_DIV.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
