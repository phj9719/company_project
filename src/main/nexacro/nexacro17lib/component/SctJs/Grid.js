
include "lib::sct_util.xjs"
/**
 * @fileoverview 넥사크로  공통 Library interface
 * @author  copyright 2017 TOBESOFT {J}
 */
var CONST_ASC_MARK = "▲";
var CONST_DESC_MARK = "▼";

if ( !Sct.Grid )
{
	Sct.Grid = {
		pForm : undefined,
		pGrid : undefined,
		pCell : 0,
		pCol  : 0,
		pRow  : 0,
		pSelType : "area",

		/**
		* 함  수  명	: getChkColNm
		* 입      력	: 
		* 반      환	: String
		* 기      능	: 체크 컬럼명 반환
		*/
		getChkColNm : function ()
		{
			return "CHK";
		},
		
		/**
		* 함  수  명	: isUpdate
		* 입      력	: 1. obj 	: 처리 대상 데이타셋 또는 그리드
		* 반      환	: true/false
		* 기      능	: 수정여부 반환 함수
		*/
		isUpdate : function (obj)
		{
			var ds = new Dataset;
			
			if(obj instanceof Grid) {
				ds = obj.getBindDataset();
			} else if(obj instanceof Dataset) {
				ds = obj;
			}
			
			if(ds.getDeletedRowCount() > 0)
			{
				return true;
			}
			
			for(var i = 0; i < ds.rowcount; i++)
			{
				var rowType = ds.getRowType(i);

				if(rowType == 2 || rowType == 4)
				{
					return true
				}
			}
			
			return false;
		},

		/*****************************************************************************************
		* 함  수  명	: deleteRow
		* 입      력	: 1. dsObj 	: 처리대상 데이타셋 오브젝트
						  2. chkCol : 삭제 여부 컬럼명 (CHK 컬럼이 아닌 별도 컬럼 사용 시)
		* 반      환	: true/false
		* 기      능	: (그리드 공통버튼)데이타셋 행 삭제 처리 함수
		*****************************************************************************************/ 
		deleteRow : function (dsObj, chkCol)
		{
			var flag = true;
			var temp = 0;
			if(Sct.Util.isEmpty(chkCol)) chkCol = "CHK";
			dsObj.set_enableevent(false);
			for(var a=0; a<dsObj.rowcount; a++){
				if(dsObj.getColumn(a, chkCol) == 1){
					flag = true;
					temp = a;
					break;
				}else{
					flag = false;
				}
			}
			if(flag == true){
				for(var i=dsObj.rowcount-1;i>=0;i--){
	// 				var chk = dsObj.getColumn(i, this.getChkColNm());
					var chk = dsObj.getColumn(i, chkCol);
					if(i == temp){
						dsObj.set_enableevent(true);
					}
					if(chk == 1){
						dsObj.deleteRow(i);
					}
				}
			}else{
				Sct.alert(this, "000001", "삭제할|"); 
			}
			//dsObj.set_enableevent(true);
			return true;
		},
		
		/**
		* 기  능 : Grid 초기화
		* 인  수 : objGrid	- Grid Object
		* Return : N/A
		*/
		_initGrid : function (form, objGrid)
		{
			this.pForm = form;
			if(this.pForm.getOwnerFrame().form.name =="frameWork"){
				this.pForm2 = form;
			}//엑셀 다운로드 변수 추가 2019-03-26 KJM
			objGrid.__form = form;
			//2017-08-07 기존 : area --> row 변경
			//area는 엑셀 붙여넣기 기능이 되지만 row는 안되는 문제점이 있을수 있음. kty & kjl
			//클릭된 row의 해당줄 색상을 넣기 위한 용도로 일단 변경.
			//objGrid.set_selecttype("area");
			objGrid.set_selecttype("row");
			objGrid.set_cellmovingtype("col");
			objGrid.set_cellsizingtype("col");
			
			this.saveColSize(objGrid);
			
			// Grid 내 Calendar 속성 처리 (휴일 표시)
			objGrid.controlcalendar.set_innerdataset("gds_calendar");
			objGrid.controlcalendar.set_datecolumn("DATECOLUMN");
			objGrid.controlcalendar.set_textcolorcolumn("TEXTCOLORCOLUMN");
			objGrid.controlcalendar.set_backgroundcolumn("BACKGROUNDCOLUMN");
			objGrid.controlcalendar.set_bordercolumn("BORDERCOLUMN");
			
			// Grid의 Multi Filter 기능을 위한 Dataset 정의
			objGrid.__filterdataset = new Dataset;
			objGrid.__filterdataset.addColumn("SEQ", "int");
			objGrid.__filterdataset.addColumn("COL_ID", "string");
			objGrid.__filterdataset.addColumn("COL_TEXT", "string");
			objGrid.__filterdataset.addColumn("COMPARE_TYPE", "string");
			objGrid.__filterdataset.addColumn("VALUE", "string");
			objGrid.__filterdataset.addColumn("OPER_TYPE", "string");
			
			// Grid의 Multi Sort 기능을 위한 Dataset 정의
			objGrid.__sortdataset = new Dataset;
			objGrid.__sortdataset.addColumn("SEQ", "int");
			objGrid.__sortdataset.addColumn("COL_ID", "string");
			objGrid.__sortdataset.addColumn("COL_TEXT", "string");
			objGrid.__sortdataset.addColumn("SORT_TYPE", "string");
			
			if(objGrid.sort != "N"){
				objGrid.addEventHandler("onheadclick", this._grdHeadClick, this);
			}
// 			objGrid.addEventHandler("onheadclick", this._grdHeadClick, form); // 보험용 : 아래 코딩이 제대로 동작하지 않을 경우, 이 코딩을 사용하여 테스트.
			
			
			
			objGrid.addEventHandler("onrbuttondown", this._grdRButtonDown, this);
			//objGrid.addEventHandler("onkeydown", this._grdOnKeyDown, this);
			//2018-02-26 키다운(눌렀을때)에는 먹지않음. 키업(뗐을때)로 변경
			objGrid.addEventHandler("onkeyup", this._grdOnKeyDown, this);
			
			this._setRowTypeMark(objGrid);
			this._setLocale(objGrid);
		},
		
		/**
		 * 함  수  명	: 	_setLocale
		 * 입      력	: 	1. obj : Grid
		 * 반      환	: 	none
		 * 기      능	: 	Grid Cell의 Locale 을 적용한다.
		 */
		_setLocale : function (obj)
		{
			var nCellCnt = obj.getCellCount("Body");
			for(var i = 0; i < nCellCnt; i++) {
				var strDispType = obj.getCellProperty("Body", i, "displaytype");
				if(strDispType == "date") {
					obj.setCellProperty("Body", i, "locale", application.gv_locale);
					//2017-10-13 SHORTDATE로 설정하는 이유는 모르겟으나 SHORTDATE 설정시 
					//그리드 캘린더 포맷형식이 제대로 설정이안되서 일단 주석처리
					//obj.setCellProperty("Body", i, "mask", "SHORTDATE");
				} else if(strDispType == "currency" || strDispType == "number") {
					obj.setCellProperty("Body", i, "locale", application.gv_locale);
				}
			}
		},

		/**
		 * 함  수  명	: 	_grdOnKeyDown
		 * 입      력	: 	1. obj 		Grid Object
							2. e 		GridClickEventInfo
		 * 반      환	: 	none
		 * 기      능	: 	시스템공통 - Grid에서 Enter Key 처리 (아래로 커서 이동)
		 * 비      고	: 2018-02-26 JL 수정
		 */
		_grdOnKeyDown : function (obj, e)
		{
			if(e.keycode == 13) {
				var ds = obj.getBindDataset();
				var row = ds.rowposition;
 				var cell = obj.getCellPos();
				//trace("cellMove : "+application.gv_cellMove);
//				var cell = e.cell;
				if(application.gv_cellMove == "R") {
					if(row < (ds.rowcount - 1)) {
						var strSelType = obj.selecttype;
						obj.set_selecttype("row");
						ds.set_rowposition(row + 1);
						obj.setCellPos(cell);
						obj.set_selecttype(strSelType);
					}
				} else if (application.gv_cellMove == "C") {
					if(cell < (obj.getCellCount("Body") - 1)) {
						var strSelType = obj.selecttype;
						obj.set_selecttype("cell");
						obj.setCellPos(cell + 1);
						obj.set_selecttype(strSelType);
					} else if(cell == (obj.getCellCount("Body") - 1)) {
						var strSelType = obj.selecttype;
						obj.set_selecttype("cell");
						if(ds.rowposition < (ds.rowcount - 1)) {
							ds.set_rowposition(row + 1);
							obj.setCellPos(0);
							obj.showEditor(false);
							obj.showEditor(true);
						} else {
							obj.set_selecttype(strSelType);
							return;
						}
						obj.set_selecttype(strSelType);
						//obj.setCellPos(0)
					}
				}
			}
		},

		/**
		 * 함  수  명	: 	_grdHeadClick
		 * 입      력	: 	1. obj 		Grid Object
							2. e 		GridClickEventInfo
		 * 반      환	: 	none
		 * 기      능	: 	시스템공통 - Grid Head 클릭시 전체선택/정렬 중 선택처리 함수
		 */
		_grdHeadClick : function (obj, e)
		{
			var sTitleText = obj.getCellProperty("head", e.col, "text");
			var sTitleType = obj.getCellProperty("head", e.col, "displaytype");
			if(Sct.Util.getLength(sTitleText) <= 0 || sTitleText == 0 || sTitleText == 1) {
				if(sTitleType == "checkbox")
					this.setGridCheckAll(obj, e);
				else
					return;
			} else {
				this.gridSort(obj, e);
			}
		},

		/**
		 * 함  수  명	: 	setGridCheckAll
		 * 입      력	: 	1. obj Grid Object
		 *                  2. e   GridClickEventInfo
		 * 반      환	: 	none
		 * 기      능	: 	Grid Head 클릭시 해당칼럼 체크박스 전체체크/체크해제 처리 함수
		 *                  그리드 헤드 예) <Cell displaytype="checkbox" edittype="checkbox" text="expr:0"/> 로 해야함
		 *                  스크립트 예)  Sct.Grid.setGridCheckAll(obj,e);
		 */
		setGridCheckAll : function (obj, e)
		{
			var strType;
			var vl_chk;
			var strVal;
			var strChkVal;
			var objDS;
			var nCell  = e.cell;
			var nSubCnt = obj.getSubCellCount("head", nCell);

			objDS  = obj.getBindDataset();
			strChkVal = Sct.Util.transNullToEmpty(obj.getCellProperty("body", nCell, "text"));
			
			strChkVal = strChkVal.replace("bind:", "");

			if (nSubCnt > 0) {	// Merge한 셀이 있는 경우
				var nChkIdx = -1;
				for ( var i = 0; i < nSubCnt; i++)
				{
					strType = obj.getSubCellProperty("head",e.cell,i,"displaytype");

					if(strType == "checkbox") {
						nChkIdx =  i;
						break;
					}
				}
				if (nChkIdx == -1)
					return;

				// Head셋팅
				strVal = obj.getSubCellProperty("head", nCell, nChkIdx, "text");

				//if (strVal == "0" || Sct.Util.isEmpty(strVal)) {
				if (strVal == "0" || strVal == "") {
					obj.setSubCellProperty("head",nCell,nChkIdx,"text", '1');
					vl_chk="1";
				} else {
					obj.setSubCellProperty("head",nCell,nChkIdx,"text", '0');
					//vl_chk="0";
					vl_chk="";
				}

			} else { // Merge한 셀이 없는 경우
				strType = obj.getCellProperty("head", e.cell, "displaytype");

				if(strType != "checkbox") {
					return;
				}

				// Head셋팅
				strVal = obj.getCellProperty("head", nCell, "text");

				//if (strVal == "0" || Sct.Util.isEmpty(strVal)) {
				if (strVal == "0" || strVal == "") {
					obj.setCellProperty("head", nCell, "text", '1');
					vl_chk="1";
				} else {
					obj.setCellProperty("head", nCell, "text", '0');
					//vl_chk="0";
					vl_chk="";
				}
			}

			// Body셋팅
			for(var i=0 ; i< objDS.rowcount ; i++){
				objDS.setColumn(i, strChkVal, vl_chk);
			}
		},

		/**
		 * Function명 : gridSort()
		 * 설명
			Grid의 Sort를 처리한다.
		 * Parameter 
			1. object Grid / GridClickEventInfo e
		 * Return 
			- None ▲△ ▼▽ ↑↓
		*/
		gridSort : function (obj, e, obj2)
		{
			// Grid Bind Dataset 추출
			var dsObj = obj.getBindDataset();
			if (dsObj.rowcount == 0) return false;
			
			var nCell  = e.cell;
			
			var strHeadText;				// Head Text + SortMark
			var sortCol;   					// 선택된 Head의 Column Index
			var sortSpan;    				// 선택된 Head의 ColSpan 정보
			var splitCol;					// Grid body Column의 text의 colid 추출 : ex)bind:Col1 - split처리(":")
			var sortColumns = "";  			// Grid Sort 대상 Column
			var rowDepth;
			var resetCol = "";
			
			var headCnt = obj.getCellCount("head");    // Grid Head Cell Count
			var bodyCnt = obj.getCellCount("body");    // Grid Body Cell Count

			var sortRow = obj.getCellProperty("head",nCell,"row");
			
			if(obj.getCellProperty("head",nCell,"displaytype")=="checkbox") return;
			
			for (var iHead=0; iHead<headCnt; iHead++) {
				rowDepth = obj.getCellProperty("head", iHead, "row");
				if ( (nCell == iHead) && (sortRow == rowDepth) ) break;
			}
			
			sortCol = obj.getCellProperty("head", iHead, "col");
			
			var bodyRow = this._grdBodyDepth(obj);
			
			for (var iBody=0; iBody<bodyCnt; iBody++) {
				if (bodyRow > 0) {
					if ( (sortCol == obj.getCellProperty("body", iBody, "col")) &&
						 (sortRow == obj.getCellProperty("body", iBody, "row")) ) break;
				} else {
					if (sortCol == obj.getCellProperty("body", iBody, "col")) break;
				}
			}
			
			// Grid Head의 해당 Column이 Asc(▲) 인 경우
			if (obj.getCellProperty("head", nCell, "text").indexOf(CONST_ASC_MARK) > -1) {
				if (obj.getCellProperty("head", nCell, "colspan") > 1) {
					sortSpan = obj.getCellProperty("head", iHead, "colspan");
					
					for (var ii=0; ii<bodyCnt; ii++) {
						if ( (obj.getCellProperty("body", ii, "col") >= sortCol) && 
							obj.getCellProperty("body", ii, "col") < (Math.abs(sortCol) + Math.abs(sortSpan) ) ) {
							
							if (obj.getCellProperty("body", ii, "text").length > 0) {
								splitCol = obj.getCellProperty("body", ii, "text").split(":");
								sortColumns += "-" + splitCol[1];
							}
						}
					}
				} else {
					splitCol = obj.getCellProperty("body", iBody, "text").split(":");
					sortColumns += "-" + splitCol[1];
				}
				
				strHeadText = obj.getCellProperty("head",nCell,"text");
				strHeadText = strHeadText.replace(CONST_ASC_MARK, CONST_DESC_MARK);
			
			// Grid Head의 해당 Column이 Desc(▼) 인 경우
			} else if (obj.getCellProperty("head", nCell, "text").indexOf(CONST_DESC_MARK) > -1) {
				var sortIdx = 0;

				// Sort Mark 제거 시 해당 Grid의 Column Index에 대해서 Sort 처리(Max 3 Column)
				if (resetCol == null || resetCol == "") {
					for (var ii=0; ii<bodyCnt; ii++) {
						this._clearSortMark(obj, ii);
						if (sortIdx == 3) break;
					}
				}
				
				strHeadText = obj.getCellProperty("head", nCell, "text");
				strHeadText = strHeadText.replace(CONST_DESC_MARK, "");
				
			// 초기값인 경우(Sort 미 적용) 시
			} else {
				if (obj.getCellProperty("head",nCell,"colspan") > 1) {
					sortSpan = obj.getCellProperty("head", iHead, "colspan");
					
					for (var ii=0; ii<bodyCnt; ii++) {
						if ( (obj.getCellProperty("body", ii, "col") >= sortCol) && 
							obj.getCellProperty("body", ii, "col") < (Math.abs(sortCol) + Math.abs(sortSpan) ) ){

							if (obj.getCellProperty("body", ii, "text").length > 0) {
								splitCol = obj.getCellProperty("body", ii, "text").split(":");
								sortColumns += "+" + splitCol[1];
							}                    
						}
					}
					
				} else {    
					splitCol = obj.getCellProperty("body", iBody, "text").split(":");
					sortColumns += "+" + splitCol[1];
				}
				
				strHeadText = obj.getCellProperty("head", nCell, "text");
				strHeadText = strHeadText + CONST_ASC_MARK;		
			}
			
			// 해당 Column에 대한 Sort 처리
			if (sortColumns == "reset") dsObj.reset();
			else dsObj.set_keystring("S:" + sortColumns);
			
			// Grid의 Row Position 설정(Sort 처리 시 Row Position 변경)
			dsObj.set_rowposition(0);
			
			// 선택 Head의 Text 변경 (Sort Mark 적용)
			obj.setCellProperty("head", nCell, "text", strHeadText);
			
			// Selected Column을 제외한 Sort Mark 제거
			this._clearSortMark(obj, nCell);
		},

		/**
		* 기  능 : Grid Head(band)의 Row Depth 계산
		* 인  수 : GridObject	- Sorting 처리 Grid Object
		* Return : Head(band) Row Depth(Number)
		* 예  시 : _grdBodyDepth(grdObj)
		*/
		_grdBodyDepth : function (grdObj)
		{
			var rtnVal = 0;
			var rowDepth = 0;
			
			var bodyCnt = grdObj.getCellCount("body");    // Grid Body Cell Count
			
			for (var i=0; i<bodyCnt; i++) {
				rowDepth = grdObj.getCellProperty("body", i, "row");
				if (rowDepth > rtnVal) rtnVal = rowDepth;
			}
			
			return rtnVal;
		},

		/**
		* 기  능 : Seleted Column을 제외한 Sort Mark 제거
		* 인  수 : grdObj	- Sorting 처리 Grid Object
		*     			nCell	- Sort 적용 Column
		* Return : N/A
		* 예  시 : _clearSortMark(grdObj, nCell)
		*/
		_clearSortMark : function (grdObj, nCell)
		{
			var nColCnt = grdObj.getCellCount("head");
			var sRepText;    
				
			for(var ii=0; ii<nColCnt; ii++) {
				if (nCell != null && nCell == ii) continue;	// 선택한 Cell을 제외하고 처리
			
				if(Sct.Util.isEmpty(grdObj.getCellProperty("head", ii, "text")) == false)
				{
					sRepText = grdObj.getCellProperty("head", ii, "text");
					sRepText = sRepText.replace(CONST_ASC_MARK, "");
					sRepText = sRepText.replace(CONST_DESC_MARK, "");
					grdObj.setCellProperty("head", ii, "text", sRepText);
				}
			}
		},
		
		/**
		 * 함  수  명	: 	_grdRButtonDown
		 * 입      력	: 	1. obj 		Grid Object
							2. e 		GridMouseEventInfo
		 * 반      환	: 	none
		 * 기      능	: 	시스템공통 - Grid 마우스 오른쪽 버튼 클릭 시 처리
		 */
		_grdRButtonDown : function (obj, e)
		{
//  			this.pForm = obj.__form;
			this.pGrid = obj;
			this.pCell = e.cell;
			this.pCol = e.col;
			this.pRow = e.row;

			if(obj.__form.gridMenu) {
// 				this.pForm.gridMenu.trackPopup(e.clientX + parseInt(obj.left), e.clientY + parseInt(obj.top));
				obj.__form.gridMenu.trackPopupByComponent(obj, e.clientX, e.clientY);
				return;
			}
			
			var objGridMenu = new PopupMenu();
			objGridMenu.init("gridMenu", "absolute", 0, 0, 200, 300, null, null);
			objGridMenu.setInnerDataset(application.gds_gridMenu);
			objGridMenu.set_levelcolumn("LEVEL");
			objGridMenu.set_captioncolumn("TEXT");
			objGridMenu.set_idcolumn("DOMAINCD");
			objGridMenu.set_enablecolumn("USEYN");

			obj.__form.addChild("gridMenu", objGridMenu);
			objGridMenu.show();

			objGridMenu.addEventHandler("onmenuclick", this._onGridMenuClick, this);

// 			this.pForm.gridMenu.trackPopup(e.clientX + parseInt(obj.left), e.clientY + parseInt(obj.top));
			obj.__form.gridMenu.trackPopupByComponent(obj, e.clientX, e.clientY);
		},
		
		/**
		 * 함  수  명	: 	_onGridMenuClick
		 * 입      력	: 	1. obj 		Grid Object
							2. e 		MenuClickEventInfo
		 * 반      환	: 	none
		 * 기      능	: 	시스템공통 - Grid Menu 클릭
		 */
		_onGridMenuClick : function (obj, e)
		{
			switch(e.id) {
				case "FIX" : // 틀고정
					this.fixCol(this.pGrid, this.pCol);
					break;
				case "RELEASE" : // 틀해제
					this.releaseCol(this.pGrid, this.pCol);
					break;
				case "HIDE" : 
					this.hideCol(this.pGrid, this.pCol);
					break;
				case "SHOW" : 
					this.showCol(this.pGrid);
					break;
				case "MULTISORT" : 
					this.sortMulti(this.pForm, this.pGrid);
					break;
				case "FILTER" : 
					this.filter(this.pForm, this.pGrid);
					break;
				case "EXPORTXLS" : 
					//var strFileName = this.pForm.getOwnerFrame().form.menuTitle.replace(/\//g, "-").replace(/ /g, "");
					//strFileName += "-" + this.pGrid.name;
					//this.exportExcel(this, this.pGrid, strFileName);
					var strFileName= this.pForm2.getOwnerFrame().form.menuTitle.replace(/\//g, "-").replace(/ /g, "");
					strFileName += "-" + this.pGrid.name;
					this.exportExcel(this, this.pGrid, strFileName);
					this.pForm2 = "";
					break;
				case "IMPORTXLS" : 
					/*
					* 1.heead = 시트명  뿌릴 해드값 A1 ~ G1 
					* 2. body = 그리드 body에 뿌릴 excel sheet 번호 
					*/
					var sSheet = "body=sheet1!A2;";

					/*
					* 출력할 dataset 명
					*/
					var ds = this.pGrid.getBindDataset();
					if(!Eco.isEmpty(ds)) {
						this.importExcel(this.pForm, sSheet, ds);
					}
					break;
				//2018-03-28 JL update 
				/*
					그리드 복사, 붙여넣기 기능은 selecttype이 area 이거나 multiarea 인 경우만 가능함.
					우클릭 메뉴에서 타입 변경후 작업, default로 작업후 기존 selecttype으로 변경
				*/
				case "AREA" :
					if(this.pGrid.selecttype != "multiarea"){
						this.pGrid.set_selecttype("multiarea");
						var idx = application.gds_gridMenu.findRow("DOMAINCD","AREA");
						application.gds_gridMenu.setColumn(idx, "TEXT", "선택기준변경");
					}else{
						//default -> row
						this.pGrid.set_selecttype("row");
						var idx = application.gds_gridMenu.findRow("DOMAINCD","AREA");
						application.gds_gridMenu.setColumn(idx, "TEXT", "선택기준변경");
					}
				break;
				case 7 : 
// 					obj.closePopup();
//   					Sct.modeless(this.pForm, "Search", 290, 44, "정렬", {pForm:this.pForm, grid:this.pGrid, row:0, cell:0}, "Common::commSortGrid.xfdl");
					break;
			}
		},
		
		/**
		 * 함  수  명	: 	_setRowTypeMark
		 * 입      력	: 	1. grid 		Grid Object
		 * 반      환	: 	none
		 * 기      능	: 	RowType 에 따른 문자 또는 이미지 표시 (I/U)
		 */
		_setRowTypeMark : function (grid)
		{
			//for(var i = 0; i < 4; i++){
// 				var text = grid.getCellProperty("Body", i, "text");
// 				var strExpr = grid.getCellProperty("Body", i, "expr");
				
				//if(Sct.Util.isEmpty(text) && Sct.Util.isEmpty(strExpr))
				//{
					//grid.setCellProperty("Body", i, "expr", "expr:dataset.getRowType(currow)==2 ? 'I' : (dataset.getRowType(currow)==4 ? 'U' : '')");
					//grid.setCellProperty("Body", i, "backgroundimage", "expr:dataset.getRowType(currow)==1 ? 'imagerc::img_WF_GrdCircleBlue.png' : dataset.getRowType(currow)==2 ? 'imagerc::img_WF_GrdCircleGreen.png' : (dataset.getRowType(currow)==4 ? 'imagerc::img_WF_GrdCircleYellow.png' : 'imagerc::img_WF_GrdCircleRed.png');");
					//grid.setCellProperty("Body", i, "background", "center");
					//grid.setCellProperty("Body", i, "background2", "center");
					
					//return;
				//}
			//}
			for(var z=0; z<grid.getCellCount("Body"); z++){
				var text = grid.getCellProperty("Body", z, "text");
				var strExpr = grid.getCellProperty("Body", z, "expr");
				if(Sct.Util.isEmpty(text) && Sct.Util.isEmpty(strExpr)){
					if(z < 3){
// 						grid.setCellProperty("Body", z, "backgroundimage", "expr:dataset.getRowType(currow)==1 ? 'imagerc::img_WF_GrdCircleBlue.png' : dataset.getRowType(currow)==2 ? 'imagerc::img_WF_GrdCircleGreen.png' : (dataset.getRowType(currow)==4 ? 'imagerc::img_WF_GrdCircleYellow.png' : 'imagerc::img_WF_GrdCircleRed.png');");
// 						grid.setCellProperty("Body",z,"background","expr:dataset.getColumn(currow,'CHK')== 1  ? '#ffbbbdff center' : '#EBEBED center'");
// 						grid.setCellProperty("Body",z,"background2","expr:dataset.getColumn(currow,'CHK')== 1  ? '#ffbbbdff center' : '#F7F7F7 center'");
						grid.setCellProperty("Body", z, "backgroundimage", "expr:dataset.getRowType(currow)==1 ? '' : dataset.getRowType(currow)==2 ? 'imagerc::plus.png' : (dataset.getRowType(currow)==4 ? 'imagerc::save.png' : 'imagerc::minus.png');");
						grid.setCellProperty("Body",z,"background","expr:dataset.getColumn(currow,'CHK')== 1  ? '#ffbbbdff center middle' : 'white center middle'");
						grid.setCellProperty("Body",z,"background2","expr:dataset.getColumn(currow,'CHK')== 1  ? '#ffbbbdff center middle' : 'white center middle'");
					}else{
						grid.setCellProperty("Body",z,"background","expr:dataset.getColumn(currow,'CHK')== 1  ? '#ffbbbdff center middle' : 'white center middle'");
						grid.setCellProperty("Body",z,"background2","expr:dataset.getColumn(currow,'CHK')== 1  ? '#ffbbbdff center middle' : 'white center middle'");
					}
				}else{
					grid.setCellProperty("Body",z,"background","expr:dataset.getColumn(currow,'CHK')== 1  ? '#ffbbbdff center middle' : 'white center middle'");
					grid.setCellProperty("Body",z,"background2","expr:dataset.getColumn(currow,'CHK')== 1  ? '#ffbbbdff center middle' : 'white center middle'");
				}
			}
		},

		/**
		 * 함  수  명	: 	fixCell
		 * 입      력	: 	1. poGrdObj 		Grid Object
							2. pnCell			대상 Cell
		 * 반      환	: 	none
		 * 기      능	: 	그리드 셀 고정
		 */  
		fixCol : function (poGrdObj, pnCell)
		{
			var nCol     = poGrdObj.getCellProperty("Head", pnCell, "col");
			var nColSpan = poGrdObj.getCellProperty("Head", pnCell, "colspan");
			var nMaxCol  = 0;
			
			if(nMaxCol < (nCol+nColSpan))
			{
				nMaxCol = nCol+nColSpan;
			}
			this.releaseCol(poGrdObj, pnCell);
			
			//그리드내 셀 고정된 셀 background 변경
			for(var i=0; i< nMaxCol; i++)
			{
				poGrdObj.setFormatColProperty(i, "band", "left");
				//poGrdObj.setCellProperty( "Head", i, "background", "#ADFF2F");
				
				poGrdObj.setCellProperty( "Head", i, "gradation"  , "linear 0,0 #d1e3f2ff 0,100 #bed4e7ff");
				poGrdObj.setCellProperty( "Head", i, "gradation2" , "linear 0,0 #d1e3f2ff 0,100 #bed4e7ff");
				if(poGrdObj.getCellProperty("Head", i, "background") == null){
					poGrdObj.setCellProperty( "Head", i, "background" , "@gradation");
				}
				if(poGrdObj.getCellProperty("Head", i, "background2") == null){
					poGrdObj.setCellProperty( "Head", i, "background2" , "@gradation");
				}
				//poGrdObj.setCellProperty( "Head", i, "background" , "@gradation");
				//poGrdObj.setCellProperty( "Head", i, "background2", "@gradation");
				poGrdObj.setCellProperty( "Head", i, "color"      , "#385e7fff");
				poGrdObj.setCellProperty( "Head", i, "color2"     , "#385e7fff");
				
				if(i == nMaxCol-1){
					 poGrdObj.setCellProperty( "Head", i, "line", "1px solid #b1b5b9ff,2px solid #6b7379");  //1px solid #b1b5b9ff,1px solid blue
					 poGrdObj.setCellProperty( "Body", i, "line", "1px solid #b1b5b9ff,2px solid #6b7379");  //1px solid #b1b5b9ff,1px solid blue
				}
				
			}
			poGrdObj.cellfixyn = "Y";
		},

		/**
		 * 함  수  명	: 	showCol
		 * 입      력	: 	1. poGrdObj 		Grid Object
		 * 반      환	: 	none
		 * 기      능	: 	그리드 컬럼 사이즈 저장해두기
		 */ 
		saveColSize : function (poGrdObj)
		{
			var strColSize = "";
			for(var i = 0; i < poGrdObj.getFormatColCount(); i++)
			{
				strColSize += poGrdObj.getFormatColProperty(i, "size") + ",";
			}
			poGrdObj.__colsize = strColSize;
		},

		/**
		 * 함  수  명	: 	releaseCol
		 * 입      력	: 	1. poGrdObj 		Grid Object
							2. pnCell			대상 Cell
		 * 반      환	: 	none
		 * 기      능	: 	그리드 셀 고정해제
		 */ 
		releaseCol : function (poGrdObj, pnCell)
		{
			//기존 셀 고정이 설정된것을 해제
			for(var i= poGrdObj.getFormatColCount()-1; i>=0; i--)
			{
				poGrdObj.setFormatColProperty(i, "band", "body");
				poGrdObj.setCellProperty( "Head", i, "line", "1px solid #b1b5b9ff");
				poGrdObj.setCellProperty( "Body", i, "line", "1px solid #b1b5b9ff");

				poGrdObj.setCellProperty( "Head", i, "gradation"  , "");
				poGrdObj.setCellProperty( "Head", i, "gradation2" , "");
				//poGrdObj.setCellProperty( "Head", i, "background" , "");
				//poGrdObj.setCellProperty( "Head", i, "background2", "");
				poGrdObj.setCellProperty( "Head", i, "color"      , "");
				poGrdObj.setCellProperty( "Head", i, "color2"     , "");
			}
			poGrdObj.cellfixyn = "N";
		},

		/**
		 * 함  수  명	: 	hideCol
		 * 입      력	: 	1. poGrdObj 		Grid Object
							2. pnCell			대상 Cell
		 * 반      환	: 	none
		 * 기      능	: 	그리드 컬럼 숨기기
		 */ 
		hideCol : function (poGrdObj, pnCell)
		{
			var arrColSize = poGrdObj.__colsize.split(",");
			arrColSize.length = poGrdObj.getFormatColCount();
			
			var leftCnt = 0;
			//2018-02-26 숨기기, 보이기 --> Merge로 인해 count가 다른문제
			for(var z=0; z<5; z++){
				if(poGrdObj.getFormatColProperty(z,"band") == "left"){
					leftCnt =  leftCnt+1;
				}
			}
			pnCell = pnCell - leftCnt;
			
			for(var i = 0; i < poGrdObj.getFormatColCount(); i++)
			{
				var colSize = poGrdObj.getRealColSize(i);
				if(colSize > 0 && colSize != arrColSize[i]) {
					arrColSize[i] = colSize;
				}
			}
			
			
			var result = poGrdObj.setRealColSize(pnCell, 0);

			var strColSize = "";
			
			for(var j = leftCnt; j < arrColSize.length; j++)
			{
				strColSize += arrColSize[j] + ",";
			}
			poGrdObj.__colsize = strColSize;
		},

		/**
		 * 함  수  명	: 	showCol
		 * 입      력	: 	1. poGrdObj 		Grid Object
		 * 반      환	: 	none
		 * 기      능	: 	그리드 컬럼 보여주기
		 */ 
		showCol : function (poGrdObj)
		{
			var arrColSize = poGrdObj.__colsize.split(",");
			for(var i = 0; i < poGrdObj.getFormatColCount(); i++)
			{
				poGrdObj.setRealColSize(i, parseInt(arrColSize[i]));
			}
		},
		
		/**
		 * 함  수  명	: 	sortMulti
		 * 입      력	: 	1. form 		Form
		 *					2. grid			Grid
		 * 반      환	: 	none
		 * 기      능	: 	다중 정렬 처리
		 */ 
		sortMulti : function (form, grid)
		{
			var ds = grid.getBindDataset();
			var argstr = new Array();
// 			var rowC = ds.rowcount;
			var rowC = 0;
			
			var nGridColC = grid.getFormatColCount();
			var arrSeq = 0;
			for(var i = 0; i < nGridColC; i++)
			{
				var cellText = grid.getCellProperty("Body", i, "text");
				//var headText = grid.getCellProperty("Head", i, "text").replace(CONST_ASC_MARK, "").replace(CONST_DESC_MARK, "").trim();
				var htxt = grid.getCellProperty("Head", i, "text");
				var headText;
				if(htxt != null && htxt != ""){
					headText = htxt.replace(CONST_ASC_MARK, "").replace(CONST_DESC_MARK, "").trim();
				}
				
				if(!Sct.Util.isEmpty(cellText)) {
					if(Sct.Util.isEmpty(headText)) headText = cellText.split("bind:")[1];
					argstr[arrSeq] = i + ":" + headText + ":" + cellText.split(":")[1];
					arrSeq++;
				}
			}
			rowC = arrSeq;
			
			var jsonSId = {
				pForm : form,
				grid : grid,
				sid : "MultiSortPop"
			}

			Sct.popup(form, jsonSId, 300, 350, "Multi Sort", {argstr:argstr, rowC:rowC, grid:grid}, "Common::commMultiSortPopup.xfdl", this._multisort_popCallback);
		},

		/**
		 * 함  수  명	: 	_fn_multisort_popCallback
		 * 입      력	: 	1. sid 			Popup ID
		 *					2. rtn			Return Value
		 * 반      환	: 	none
		 * 기      능	: 	Multi Sort 팝업의 Callback 함수
		 */ 
		_multisort_popCallback : function (sid, rtn)
		{
			var objGrid = sid.grid;
			var ds = objGrid.getBindDataset();

			if(Sct.Util.isEmpty(rtn)) { // 취소 시에는 그대로 둔다.
				return;
			}
			
			objGrid.__sortdataset.loadXML(rtn);
			var oDs = new Dataset;
			oDs.loadXML(rtn);
			
			var rowcnt = oDs.rowcount;
			var keystring = "S:";
			
			var nColCnt = objGrid.getCellCount("head");
			var sRepText;    
				
			for(var ii=0; ii<nColCnt; ii++) {
				if(Sct.Util.isEmpty(objGrid.getCellProperty("head", ii, "text")) == false)
				{
					sRepText = objGrid.getCellProperty("head", ii, "text");
					sRepText = sRepText.replace(CONST_ASC_MARK, "");
					sRepText = sRepText.replace(CONST_DESC_MARK, "");
					objGrid.setCellProperty("head", ii, "text", sRepText.toString().trim());
				}
			}

			if(rowcnt == 0) { // Sorting 할 정보가 없으면, 원래대로 되돌린다.
				ds.set_keystring("");
				return;
			}
			
			for(var i = 0; i < rowcnt; i++)
			{
				var seq = oDs.getColumn(i, "SEQ");
				var colId = oDs.getColumn(i, "COL_ID");
				var colText = oDs.getColumn(i, "COL_TEXT");
				var sortType = oDs.getColumn(i, "SORT_TYPE");
				
				if(sortType == "1") {
					keystring += "+" + colId + "";
					objGrid.setCellProperty("Head", seq, "text", colText + " ▲ ");
				} else {
					keystring += "-" + colId + "";
					objGrid.setCellProperty("Head", seq, "text", colText + " ▼ ");
				}
			}
			
			ds.set_keystring(keystring);
		},

		/**
		 * 함  수  명	: 	filter
		 * 입      력	: 	1. form 		Form
		 *					2. grid			Grid
		 * 반      환	: 	none
		 * 기      능	: 	다중 필터 처리
		 */ 
		filter : function (form, grid)
		{
			var ds = grid.getBindDataset();
			var argstr = new Array();
// 			var rowC = ds.rowcount;
			var rowC = 0;
			
			var nGridColC = grid.getFormatColCount();
			var arrSeq = 0;
			for(var i = 0; i < nGridColC; i++)
			{
				var cellText = grid.getCellProperty("Body", i, "text");
				//var headText = grid.getCellProperty("Head", i, "text").replace("∀", "").trim();
				var htxt = grid.getCellProperty("Head", i, "text");
				var headText;
				if(htxt != null && htxt != ""){
					headText = grid.getCellProperty("Head", i, "text").replace("∀", "").trim();
				}
				if(!Sct.Util.isEmpty(cellText)) {
					if(Sct.Util.isEmpty(headText)) headText = cellText.split("bind:")[1];
					argstr[arrSeq] = i + ":" + headText + ":" + cellText.split(":")[1];
					arrSeq++;
				}
			}
			rowC = arrSeq;

			var jsonSId = {
				pForm : form,
				grid : grid,
				sid : "FilterPop"
			}

			Sct.popup(form, jsonSId, 430, 270, "Filter", {argstr:argstr, rowC:rowC, grid:grid}, "Common::commMultiFilterPopup.xfdl", this._filter_popCallback);
		},

		/**
		 * 함  수  명	: 	_fn_multisort_popCallback
		 * 입      력	: 	1. sid 			Popup ID
		 *					2. rtn			Return Value
		 * 반      환	: 	none
		 * 기      능	: 	Multi Sort 팝업의 Callback 함수
		 */ 
		_filter_popCallback : function (sid, rtn)
		{
			var objGrid = sid.grid;
			var ds = objGrid.getBindDataset();

			if(Sct.Util.isEmpty(rtn)) { // 취소 시에는 그대로 둔다.
				return;
			}
			
			objGrid.__filterdataset.loadXML(rtn);
			var oDs = new Dataset;
			oDs.loadXML(rtn);
			
			var rowcnt = oDs.rowcount;
			
			var nColCnt = objGrid.getCellCount("head");
			var sRepText;    
				
			for(var ii=0; ii<nColCnt; ii++) {
				if(Sct.Util.isEmpty(objGrid.getCellProperty("head", ii, "text")) == false)
				{
					sRepText = objGrid.getCellProperty("head", ii, "text");
					sRepText = sRepText.replace("∀", "").trim();
					objGrid.setCellProperty("head", ii, "text", sRepText.toString().trim());
				}
			}
			
			if(rowcnt == 0) { // Filter 할 정보가 없으면, 원래대로 되돌린다.
				ds.filter("");
				return;
			}
			
			var filterStr = "";
			for(var i = 0; i < rowcnt; i++)
			{
				var seq = oDs.getColumn(i, "SEQ");
				var colId = oDs.getColumn(i, "COL_ID");
				var colText = oDs.getColumn(i, "COL_TEXT");
				var compType = oDs.getColumn(i, "COMPARE_TYPE");
				var value = oDs.getColumn(i, "VALUE");
				var operType = oDs.getColumn(i, "OPER_TYPE");
				
				if(operType === "||") {
					if(i == 0) {
						filterStr += "(";
					} else {
						var prevOperType = oDs.getColumn(i - 1, "OPER_TYPE");
						if(prevOperType === "&&") {
							filterStr += "(";
						}
					}
				}
				
				filterStr += "(";
				if(compType.toUpperCase() == "LIKE") {
					filterStr += colId + ".indexOf(" + nexacro.wrapQuote(value) + ")>=0";
				} else {
					filterStr += colId + compType + nexacro.wrapQuote(value);
				}
				filterStr += ")";
				
				if(operType === "&&") {
					var prevOperType = oDs.getColumn(i - 1, "OPER_TYPE");
					if(prevOperType === "||") {
						filterStr += ")";
					}
				} else {
					if(i == (rowcnt - 1)) {
						filterStr += ")";
					}
				}

				filterStr += (i == (rowcnt - 1) ? "" : operType);
				objGrid.setCellProperty("Head", seq, "text", colText + " ∀ ");
			}
			
			application.trace(filterStr);
			ds.filter(filterStr);
		},

// 		/**
// 		 * Function Name	: gfn_exportExcel
// 		 * Desc				: Grid를 Excel로 Export하는 함수
// 		 * Parameter		: targetGrid = 단일Export -  Grid Object  , 다수Export - Array Objec[Grid Object,Grid Object]
// 		 *					  sFileName - Export될 파일명
// 		 * Return 			:
// 		 */
// 		exportExcel : function(obj, targetGrid, sFileName)
// 		{
// 			var sExportObjName = "obj_commonExport";
// 			var exportObj = new ExcelExportObject();
// 			var dToday = new Date();
// 			var sSheetName;
// 			var sSvcUrl = application.services["svcurl"].url+"XExportImport";
// 			exportObj.set_name(sExportObjName);
// 			exportObj.addEventHandler("onsuccess", this._exportExcelEnd, obj);
// 			exportObj.addEventHandler("onerror", this._exportExcelEndError, obj);
// 			exportObj.clearExportItems(nexacro.ExportTypes.EXCEL2007);
// 			
// 			if(!Sct.Util.isEmpty(sFileName)){
// 				sFileName = dToday.getTime() + "_" + sFileName;
// 			}else{
// 				sFileName = dToday.getTime();
// 			}
// 			
// 			if (targetGrid instanceof Grid) {
// 				this.pGrid = targetGrid;
// 				this.pSelType = targetGrid.selecttype;
// 				targetGrid.set_selecttype("row");
// 
// 				sSheetName = "Sheet1!A1";
// 				exportObj.addExportItem(nexacro.ExportItemTypes.GRID, targetGrid, sSheetName,"allband","allrecord","suppress","onlyvalue","none","color,background","both");
// 			} else {
// 				for(var i=0; i<targetGrid.length; i++) {
// 					sSheetName = "A"+(i+1);
// 					oGrid = obj[i];
// 					exportObj.addExportItem(nexacro.ExportItemTypes.GRID, targetGrid,  sSheetName + "!A1","allband","allrecord","suppress","none","background","font", "both");
// 				}
// 			}
// 			
// 			exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);	
// 			exportObj.set_exportfilename(sFileName);
// 			exportObj.set_exporturl(sSvcUrl);
// 
// 			var result = exportObj.exportData();
// 			if (targetGrid instanceof Grid) {
// 				targetGrid.set_selecttype(this.pSelType);
// 			}
// 		},
// 
// 		_exportExcelEndError : function(obj, e)
// 		{
// 			application.alert("Error!");
// 		},
// 
// 		_exportExcelEnd : function(obj, e)
// 		{
// 		},
// 
// 		/**
// 		 * Function Name	: importExcel
// 		 * Desc				: Excel을 데이타셋으로 Import 하는 함수
// 		 * Parameter		: 1. obj = 단일Export -  Grid Object
// 		 *					  2. arg = Import 시 필요한 Arguments
// 		 * Return 			:
// 		 */
// 		importExcel : function(obj, arg)
// 		{
// 			var importObj, objNm = "_common_excel_import";
// 			
// 			importObj = new nexacro.ExcelImportObject(objNm, obj);
// 			obj[objNm] = importObj;
// 			importObj.set_importtype(nexacro.ImportTypes.EXCEL);
// 			importObj.addEventHandler("onsuccess", this._excelImport_onsuccess, obj);
// 			importObj.addEventHandler("onerror", this._excelImport_onerror, obj);	
// 			importObj.set_importurl(application.services["svcurl"].url + "XImport");
// 			
// 			importObj.user_callBack = null;
// 			importObj.user_targetGrid = null;
// 			
// 			var objTargetDs = null;
// 
// 			if(arg.targetDs) {
// 				objTargetDs = arg.targetDs.name;
// 			} else if (arg.targetGrid) {
// 				importObj.user_targetGrid = arg.targetGrid.id;
// 				objTargetDs = arg.targetGrid.getBindDataset().name;
// 			}
// 
// 			if (typeof arg.callBack == "function") {
// 				importObj.user_callBack = arg.callBack;
// 			}
// 
// 			if (!arg.headSet) {
// 				importObj.importData("", "[command=getsheetdata;output=outDs;body=!A1;]", "["+objTargetDs+"=outDs]","");	
// 			} else {
// 				importObj.importData("", "[command=getsheetdata;output=outDs;Head=!A1:ZZ1;body=!A2;]", "["+objTargetDs+"=outDs]","");		  //헤더 정보 지정 시
// 			}
// 		},
// 
// 		//onsuccess Event
// 		_excelImport_onsuccess : function(obj,  e)
// 		{
// 			if (typeof obj.user_callBack == 'function') {
// 				obj.user_callBack.call(this);
// 			}
// 		},
// 
// 		//onerror Event
// 		_excelImport_onerror : function(obj,  e)
// 		{
// 			application.alert("Error!");
// 		},

		/**
		 * 엑셀 익스포트 공통함수
		 * @param  {XaComp} this(현재폼)
		 * @param  {object} Grid
		 * @param  {string} 파일명
		 * @param  {string} sheet명
		 * @return
		 * @example
		 *  Sct.exportExcel(this,this.grd_list);
		 * @memberOf Sct
		 */
		exportExcel : function(o,oGrid,sFileName,strSheet)
		{

			var pThis = o;

			this.pGrid = oGrid;
			this.pSelType = oGrid.selecttype;
			oGrid.set_selecttype("row");

			var dToday = new Date();
			var sSvcUrl = application.services["svcurl"].url+"XExportImport";
			trace("Excel Export Url : "+sSvcUrl);
			var strType = oGrid.toString().toUpperCase();
			var strSheet = Eco.isEmpty(strSheet) ? "sheet" :strSheet;
            var strExportFileName = Eco.isEmpty(sFileName) ?  dToday.getTime() : (dToday.getTime() + "_" + sFileName);
			var exportObj = new ExcelExportObject();

			exportObj.clear();
			//onsuccess
			exportObj.addEventHandler("onsuccess", function(obj,e){
			}, pThis);

			
			//onerror
			exportObj.addEventHandler("onerror", function(obj,e){
				 trace(" =========== Excel Export onerror event start============");
				 trace(" =========== e.eventid : " + e.eventid + " ============");
				 trace(" =========== e.fromobject : " + e.fromobject + " ============");
				 trace("=========== e.fromreferenceobject : " + e.fromreferenceobject + " ============");
				 trace("=========== e.errorcode : " + e.errorcode + " ============");
				 trace("=========== e.errormsg) : " + e.errormsg + " ============");
			}, pThis);
			if(strExportFileName.indexOf("*") != -1){
				strExportFileName = strExportFileName.replace("*","");
				trace(strExportFileName);
			}
			exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
			exportObj.set_exportuitype("exportprogress");    // set
			exportObj.set_exporturl(sSvcUrl);
			exportObj.set_exportfilename(strExportFileName);
			
			if(strType == "[OBJECT GRID]")
			{
				oGrid = oGrid;
				sSheetName = strSheet+"1";
				exportObj.addExportItem(nexacro.ExportItemTypes.GRID, oGrid,  sSheetName + "!A1","allband","allrecord","suppress","allstyle","background","font", "both");
			}
			else
			{
				for(var i=0; i<obj.length; i++)
				{
					sSheetName = strSheet+(i+1);
					oGrid = oGrid[i];
					exportObj.addExportItem(nexacro.ExportItemTypes.GRID, oGrid,  sSheetName + "!A1","allband","allrecord","suppress","allstyle","background","font", "both");
				}
			}

			exportObj.exportData();
			if(strType == "[OBJECT GRID]")
			{
				oGrid.set_selecttype(this.pSelType);
			}
		},

		/**
		 * excel import 공통함수
		 * @param  {XaComp} this(현재폼)
		 * @param  {string} sheet명
		 * @param  {object} dataset명
		 * @return N/A
		 * @example
		 * var sSheet = "body=sheet1!A2;";  
		 * var ds = this.ds_out;
	     * Sct.importExcel(this,sSheet,ds);
		 * @memberOf Sct
		 */
		importExcel : function(o,sSheet,ds)
		{

			var pThis = o;
			var dsName = ds.name;
			var ds_importTemp = Sct.Util.isCheckDs(pThis,"ds_importTemp");	
			var sSvcUrl = application.services["svcurl"].url+"XExportImport";			
			var importObj = new nexacro.ExcelImportObject("importExcel",pThis);
			
//			 Sct.$["fobj"] = pThis;
			ds.clearData();
			ds_importTemp.copyData(ds);			
			pThis["ds_import"] = ds;
		 
			importObj.set_importtype(nexacro.ImportTypes.EXCEL);
			
			//onsuccess
			importObj.addEventHandler("onsuccess",function(obj,e){
			
				var dsFromData = this["ds_importTemp"];   //엑셀데이타
				var dsToData = this["ds_import"];   //원본
				
				var arrCol = [];

// 				for(var i=0; i< dsToData.getColCount();i++)
// 				{
// 					 var sToCol =  dsToData.getColID(i);
// 					 var sFromCol = dsFromData.getColID(i);
// 					 arrCol[i] =  sToCol + "=" + sFromCol;
// 				}
				
				var nCellCnt = Sct.Grid.pGrid.getCellCount("Body");
				var arrIdx = 0;
				for(var i = 0; i < nCellCnt; i++)
				{
					var colName = Sct.Grid.pGrid.getCellProperty("Body", i, "text");
					if(!Sct.Util.isEmpty(colName)) {
						if(colName.indexOf("bind:") >= 0) {
							colName = colName.replace("bind:", "").trim();
							arrCol[arrIdx] = colName + "=" + dsFromData.getColID(i);
							++arrIdx;
						} else {
							continue; // 단순 텍스트일 경우, 패스
						}
					} else {
						continue; // Cell의 텍스트가 없을 경우, 패스.
					}
				}
				
			    dsToData.clearData();  //원본삭제
				dsFromData.set_enableevent(false);
				for(var i=0; i < dsFromData.getRowCount(); i++)
				{
				    var addRow = dsToData.addRow();
				    dsToData.copyRow(addRow,dsFromData,i,arrCol.join(","));
				}
				dsFromData.set_enableevent(true);
				dsToData.applyChange();
				dsFromData.clear();
			
			},  pThis);
			
			//onerror
			importObj.addEventHandler("onerror", function (obj,e) {
				
				trace(" =========== Excel Import onerror event start============");
				trace(" =========== e.eventid : " + e.eventid + " ============");
				trace(" =========== e.fromobject : " + e.fromobject + " ============");
				trace("=========== e.fromreferenceobject : " + e.fromreferenceobject + " ============");
				trace("=========== e.errorcode : " + e.errorcode + " ============");
				trace("=========== e.errormsg) : " + e.errormsg + " ============");
				trace("======================   end   =========================");
					
			},pThis);
			
			importObj.set_importurl(sSvcUrl);
            Eco.Logger.debug({message:"#### ExceImport start log ###", stack:true,elapsed: true});
			importObj.importData("", "[command=getsheetdata;output=outDs;" + sSheet +"]", "["+ds_importTemp.name+"=outDs]");
		},
	};
}
