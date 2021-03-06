//XJS=sct_com.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"lib::sct_util.xjs");
        this.registerScript(path, function() {
        /*********************************************************************
         * @SCT Library
         * @Author  copyright 2017 SCT JL
         *********************************************************************/

        this.executeIncludeScript("lib::sct_util.xjs"); /*include "lib::sct_util.xjs"*/

        /*********************************************************************
         * 함 수 명 	: gfn_isNull
         * 함수설명 	: NULL 여부 체크
         * 입    력 	: 문자열
         * 결    과 	: Boolean형의 여부	- null = true, Not Null = false
         *********************************************************************/
        this.gfn_isNull = function (sValue)
        {
        	if (new String(sValue).valueOf() == "undefined")
        	{
        		return true;
        	}
        	if (sValue == null)
        	{
        		return true;
        	}
        	var v_ChkStr = new String(sValue);

        	if (v_ChkStr == null)
        	{
        		return true;
        	}
        	if (v_ChkStr.toString().length == 0)
        	{
        		return true;
        	}

        	return false;
        };

        /*********************************************************************
         * 함 수 명 	: gfn_lastDateNum
         * 함수설명 	: 해당월의 마지막 날짜
         * 입    력 	: sDate ( 날짜 )( 예 : "20100501" )
         * 결    과 	: integer
         * 관련함수    : gfn_isNull, gfn_isLeapYear
         *********************************************************************/
        this.gfn_lastDateNum = function (sDate)
        {
        	var nMonth,nLastDate,yymm;
        	sDate = "" + sDate;
        	yymm = sDate.substring(0, 6);
        	if (this.gfn_isNull(sDate))
        	{
        		return -1;
        	}

        	nMonth = parseInt(sDate.substr(4, 2), 10);
        	if (nMonth == 1 || nMonth == 3 || nMonth == 5 || nMonth == 7 || nMonth == 8 || nMonth == 10 || nMonth == 12)
        	{
        		nLastDate = 31;
        	}
        	else if (nMonth == 2)
        	{
        		if (this.gfn_isLeapYear(sDate) == true)
        		{
        			nLastDate = 29;
        		}
        		else
        		{
        			nLastDate = 28;
        		}
        	}
        	else
        	{
        		nLastDate = 30;
        	}
        	return yymm + nLastDate;
        };


        /*********************************************************************
         * 함 수 명 	: gfn_getFirstDate
         * 함수설명 	: 해당월의 1일
         * 입    력 	: sDate ( 날짜 )( 예 : "20100520" )
         * 결    과 	: sDate ( 날짜 )( 예 : "20100501" )
         * 관련함수    : gfn_isNull
         *********************************************************************/
        this.gfn_getFirstDate = function (sDate)
        {
        	sDate = "" + sDate;
        	if (this.gfn_isNull(sDate))
        	{
        		return -1;
        	}

        	var s = "";
        	s = sDate.substr(0, 6) + "01";
        	return (s);
        };

        /*********************************************************************
         * 함 수 명 	: gfn_isLeapYear
         * 함수설명 	: 윤년여부 확인
         * 입    력 	: sDate ( yyyyMMdd형태의 날짜 )( 예 : "20121122" )
         * 결    과 	: Boolean
         *********************************************************************/
        this.gfn_isLeapYear = function (sDate)
        {
        	var ret;
        	var nY;

        	if (this.gfn_isNull(sDate))
        	{
        		return false;
        	}

        	nY = parseInt(sDate.substring(0, 4), 10);

        	if ((nY % 4) == 0)
        	{
        		if ((nY % 100) != 0 || (nY % 400) == 0)
        		{
        			ret = true;
        		}
        		else
        		{
        			ret = false;
        		}
        	}
        	else
        	{
        		ret = false;
        	}
        	return ret;
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_colNullchk
         * 설      명	:  인자로 넘어온 데이터셋을 토대로 입력되지 않은
         항목의 행번호와 컬럼명을 리턴한다
         * 입      력	:  ds : 체크할 데이터셋,
         chkcol : 체크할 컬럼명(데이터셋기준),
         grid : 체크할 그리드
         * 반      환	:  true / false
         **********************************************************************************/
        this.gfn_colNullchk = function (ds, grid)
        {
        	var pgmid = nexacro.getApplication().gv_curWinKey;
        	eval("var pds = this.ds_" + pgmid + ";");
        	var rowidx;
        	var colnm;
        	var forflag;
        	var chkcol = this.gfn_getReqlist();
        	var flag;
        	if (chkcol.length == 0)
        	{
        		trace("빈값 체크할 항목 NexaMake data 없음.");
        		var bool = this.gfn_chkGridEssential(grid);
        		if (bool == true)
        		{
        			return true;
        		}
        		else
        		{
        			return false;
        		}
        	}
        	else
        	{
        		trace("그리드 널쳌 컬럼 : " + chkcol.toString());
        		for (var i = 0; i < ds.rowcount; i++)
        		{
        			if (forflag == true)
        			{
        				break;
        			}
        			if (ds.getRowType(i) == "2" || ds.getRowType(i) == "4")
        			{
        				for (var z = 0; z < chkcol.length; z++)
        				{
        					flag = Sct.Util.isEmpty(ds.getColumn(i, chkcol[z]));
        					if (flag == true)
        					{
        						rowidx = i;
        						colnm = chkcol[z];
        						forflag = true;
        						break;
        					}
        				}
        			}
        		}
        		if (flag == true)
        		{
        			var nCellIdx = grid.getBindCellIndex("body", colnm);
        			trace("idx " + nCellIdx);
        			var headcol = this.gfn_mergeCount(grid, nCellIdx);
        			trace("널 컬럼 : " + colnm + " 계산후idx :" + headcol);
        			var CellIdx = this.gfn_mergeCellCal(nCellIdx, grid);
        			var headcolnm = pds.getColumn(pds.findRow("COLUMN_NM", colnm), "COMMENTS");
        			trace("널 컬럼명 : " + headcolnm);
        			grid.selectRow(rowidx, false);
        			grid.setCellPos(CellIdx);
        			grid.showEditor(true);
        			Sct.alert(this, "000109", (rowidx + 1) + "|" + headcolnm);
        			return false;
        		}
        		else
        		{
        			return true;
        		}
        	}
        };


        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_mergeCount
         * 설      명	:  그리드의 body부분에 머지된 셀 갯수를 찾는다
         * 입      력	:  grid
         * 반      환	:  count
         **********************************************************************************/
        this.gfn_mergeCount = function (grid, cidx)
        {
        	// var idxcount =0;
        	// var mcellcount = 0;
        	// trace("cidx : "+cidx);
        	// for(var z=0; z<cidx; z++){
        	// if(grid.getCellProperty("Head",z,"colspan") != 1){
        	// idxcount++;
        	//
        	// if(z == cidx-1){
        	// if(nexacro.toNumber(grid.getCellProperty("Head",z,"colspan")) != 1){
        	// mcellcount = mcellcount + nexacro.toNumber(grid.getCellProperty("Head",z,"colspan"));
        	// }
        	// }else{
        	// mcellcount = mcellcount + nexacro.toNumber(grid.getCellProperty("Head",z,"colspan"));
        	// }
        	// }
        	// }
        	// trace("mcellcount : "+mcellcount);
        	// trace("idx count 계산전 : "+idxcount);
        	// if(idxcount != 0){
        	// idxcount = mcellcount - idxcount;
        	// }
        	// trace("idx count 계산후 : "+idxcount);
        	// var idx = cidx + idxcount;
        	// trace("idx~ : "+idx);
        	// var mergecount = 0;
        	// for(var i=0; i<idx; i++){
        	// var merge = grid.getCellProperty("Head",i,"colspan");
        	// trace("머지 수(마이너스 전)"+merge);
        	// mergecount = mergecount + nexacro.toNumber(merge) -1;
        	// trace("머지카운트 :"+mergecount);
        	// }
        	// var count = idx - nexacro.toNumber(mergecount);
        	// trace("머지 뺀 셀 갯수 : "+count);
        	// return count;
        	trace("현재 셀인덱스  :" + cidx);
        	var mergeidx = 0;
        	var curmerge = 0;
        	// if(grid.getCellProperty("Head",cidx-1,"colspan") != 1){
        	curmerge = grid.getCellProperty("Head", cidx, "colspan");
        	// }

        	for (var a = 0; a < 15; a++)
        	{
        		trace(a + "의 Colspan : " + grid.getCellProperty("Head", a, "colspan"));
        	}
        	for (var i = 0; i <= cidx; i++)
        	{
        		if (grid.getCellProperty("Head", i, "colspan") != 1)
        		{
        			mergeidx++;
        		}
        	}
        	trace("머지된 갯수 : " + mergeidx);
        	trace("현재셀 머지수 :" + curmerge);
        	if (curmerge != 1)
        	{
        		if (mergeidx == 1)
        		{
        			curmerge = 0;
        			mergeidx = 0;
        			mergeidx = cidx;
        			trace("curemerge != 1, mergeidx == 1  :" + mergeidx);
        		}
        		else
        		{
        			mergeidx = cidx - (Math.abs(mergeidx - curmerge - 1));
        			trace("curemerge != 1, mergeidx != 1  :" + mergeidx);
        		}
        	}
        	else
        	{
        		trace("curemerge == 1, :" + mergeidx);
        		mergeidx = cidx - mergeidx;
        	}
        	return mergeidx;
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_getReqlist
         * 설      명	:  중복값 체크와 삭제시 제약조건을 확인하기위한 컬럼을 찾는다.
         * 입      력	:
         * 반      환	:  Array
         **********************************************************************************/
        this.gfn_getReqlist = function ()
        {
        	var pgmid = nexacro.getApplication().gv_curWinKey;
        	eval("var ds = this.ds_" + pgmid + ";");
        	var chkCol = new Array();
        	for (var i = 0; i < ds.rowcount; i++)
        	{
        		// GRID_NO != H  --> ??
        		// if(ds.getColumn(i,"GRID_REQ_YN") == "Y" && ds.getColumn(i,"GRID_NO") != "H" && ds.getColumn(i,"DATASET") == this.fv_currentDS.name){
        		if (ds.getColumn(i, "GRID_REQ_YN") == "Y" && ds.getColumn(i, "DATASET") == this.fv_currentDS.name)
        		{
        			chkCol.push(ds.getColumn(i, "COLUMN_NM"));
        		}
        	}
        	return chkCol;
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_dateFormatchk
         * 설      명	:  그리드의 셀에서 Date 타입의 항목 정합성 검사
         컬럼상관없이 그리드와 데이터셋을 인자로 받으면
         edittype이 date인 항목을 찾아서 년도 앞 2자리를 검사함
         * 입      력	:  grid : 검사할 그리드, ds : 그리드에 바인딩된 데이터셋
         * 반      환	:  true/false
         **********************************************************************************/
        this.gfn_dateFormatchk = function (grid, ds)
        {
        	var cellcount = grid.getCellCount("Body");
        	var chkArr = new Array();
        	var flag = false;

        	for (var i = 0; i < cellcount; i++)
        	{
        		var type = grid.getCellProperty("Body", i, "edittype");
        		if (type == "date")
        		{
        			var bindinfo = grid.getCellProperty("Body", i, "text");
        			bindinfo = bindinfo.substring(bindinfo.indexOf(":") + 1, bindinfo.length);
        			chkArr.push(bindinfo);
        		}
        	}
        	for (var i = 0; i < ds.rowcount; i++)
        	{
        		if (flag == true)
        		{
        			break;
        		}
        		for (var z = 0; z < chkArr.length; z++)
        		{
        			var val = ds.getColumn(i, chkArr[z]);
        			if (val == null || val == "")
        			{
        				break;
        			}
        			var yyyyval;
        			var yyval;
        			if (val != null)
        			{
        				yyyyval = val.substring(0, 4);
        				yyval = val.substring(0, 2);
        			}
        			else
        			{
        				yyval = false;
        				yyyyval = false;
        			}
        			if (yyval != "20" || yyyyval.length != 4)
        			{
        				flag = true;
        				var nCellIdx = grid.getBindCellIndex("body", chkArr[z]);
        				var CellIdx = this.gfn_mergeCellCal(nCellIdx, grid);
        				var headcolnm = grid.getCellValue(-1, nCellIdx);
        				grid.selectRow(i, false);
        				grid.setCellPos(CellIdx);
        				grid.showEditor(true);
        				// Sct.alert(this,"","");
        				alert((i + 1) + "번째 행의 " + headcolnm + " 항목의 날짜가 잘못 되었습니다.");
        				break;
        			}
        		}
        	}
        	if (flag == false)
        	{
        		return true;
        	}
        	else
        	{
        		return false;
        	}
        };

        /**********************************************************************************
         * 작  성  자  :   김정록
         * 함  수  명	:	gfn_chkRowType
         * 설      명	:   인자로 넘어온 데이터셋의 행중 추가,수정,삭제 된 행이 있을경우 false를 리턴하는 함수
         * 입      력	: 	obj : 데이터셋
         * 반      환	:	true or false
         **********************************************************************************/
        this.gfn_chkRowType = function (obj)
        {
        	var bool;
        	if (obj.rowcount == 0)
        	{
        		bool = true;
        	}
        	else
        	{
        		for (var i = 0; i < obj.rowcount; i++)
        		{
        			if (obj.getRowType(i) == "2" || obj.getRowType(i) == "4" || obj.getRowType(i) == "8")
        			{
        				bool = false;
        				break;
        			}
        			else
        			{
        				bool = true;
        			}
        		}
        	}
        	return bool;
        };


        /**********************************************************************************
         * 작  성  자  :   김정록
         * 함  수  명	:	gfn_chkDsdup
         * 설      명	:   인자로 넘어온 데이터셋의 키 컬럼중 중복되는 값 확인
         * 입      력	: 	ds : 데이터셋
         grid : 그리드
         chkCol : 체크할 항목 컬럼 이름
         * 반      환	:	true/false
         **********************************************************************************/
        this.gfn_chkDsdup = function (ds, grid, pChkcol)
        {
        	var flag;
        	var keycol1;
        	var keycol2;
        	var keycol3;
        	var keycol4;
        	var keycol5;
        	var keycol6;
        	var keycol7;
        	var keycol8;
        	var keycol9;
        	var keycol10;
        	var keycol11;
        	var keycol12;
        	var keycol13;
        	var keycol14;
        	var keycol15;
        	var idx;
        	var chkCol = this.gfn_getPKlist();
        	if (chkCol.length == 0)
        	{
        		trace("중복체크할 PK 항목 없음");
        		return true;
        	}
        	else
        	{
        		trace("그리드 내부 중복 쳌 컬럼 : " + chkCol.toString());
        		for (var i = 0; i < ds.rowcount; i++)
        		{
        			if (flag == true)
        			{
        				break;
        			}
        			if (ds.getRowType(i) == "2" || ds.getRowType(i) == "4")
        			{
        				for (var z = 0; z < chkCol.length; z++)
        				{
        					eval("keycol" + (z + 1) + "= ds.getColumn(i,chkCol[z]);");
        				}
        				switch (chkCol.length)
        				{
        					case 1:
        						idx = ds.findRowExpr("currow!='" + i + "' && " + chkCol[0] + " == '" + keycol1 + "'", 0, ds.rowcount);
        						break;
        					case 2:
        						idx = ds.findRowExpr("currow!='" + i + "' && " + chkCol[0] + " == '" + keycol1 + "' && " + chkCol[1] + " =='" + keycol2 + "'", 0, ds.rowcount);
        						break;
        					case 3:
        						idx = ds.findRowExpr("currow!='" + i + "' && " + chkCol[0] + " == '" + keycol1 + "' && " + chkCol[1] + " =='" + keycol2 + "'&& " + chkCol[2] + " == '" + keycol3 + "'", 0, ds.rowcount);
        						break;
        					case 4:
        						idx = ds.findRowExpr("currow!='" + i + "' && " + chkCol[0] + " == '" + keycol1 + "' && " + chkCol[1] + " =='" + keycol2 + "'&& " + chkCol[2] + " == '" + keycol3 + "' && " + chkCol[3] + " == '" + keycol4 + "'", 0, ds.rowcount);
        						break;
        					case 5:
        						idx = ds.findRowExpr("currow!='" + i + "' && " + chkCol[0] + " == '" + keycol1 + "' && " + chkCol[1] + " =='" + keycol2 + "'&& " + chkCol[2] + " == '" + keycol3 + "' && " + chkCol[3] + " == '" + keycol4 + "' && " + chkCol[4] + " == '" + keycol5 + "'", 0, ds.rowcount);
        						break;
        					case 6:
        						idx = ds.findRowExpr("currow!='" + i + "' && " + chkCol[0] + " == '" + keycol1 + "' && " + chkCol[1] + " =='" + keycol2 + "'&& " + chkCol[2] + " == '" + keycol3 + "' && " + chkCol[3] + " == '" + keycol4 + "' && " + chkCol[4] + " == '" + keycol5 + "' && " + chkCol[5] + " == '" + keycol6 + "'", 0, ds.rowcount);
        						break;
        					case 7:
        						idx = ds.findRowExpr("currow!='" + i + "' && " + chkCol[0] + " == '" + keycol1 + "' && " + chkCol[1] + " =='" + keycol2 + "'&& " + chkCol[2] + " == '" + keycol3 + "' && " + chkCol[3] + " == '" + keycol4 + "' && " + chkCol[4] + " == '" + keycol5 + "' && " + chkCol[5] + " == '" + keycol6 + "' && " + chkCol[6] + " == '" + keycol7 + "'", 0, ds.rowcount);
        						break;
        					case 8:
        						idx = ds.findRowExpr("currow!='" + i + "' && " + chkCol[0] + " == '" + keycol1 + "' && " + chkCol[1] + " =='" + keycol2 + "'&& " + chkCol[2] + " == '" + keycol3 + "' && " + chkCol[3] + " == '" + keycol4 + "' && " + chkCol[4] + " == '" + keycol5 + "' && " + chkCol[5] + " == '" + keycol6 + "' && " + chkCol[6] + " == '" + keycol7 + "' && " + chkCol[7] + " == '" + keycol8 + "'", 0, ds.rowcount);
        						break;
        					case 9:
        						idx = ds.findRowExpr("currow!='" + i + "' && " + chkCol[0] + " == '" + keycol1 + "' && " + chkCol[1] + " =='" + keycol2 + "'&& " + chkCol[2] + " == '" + keycol3 + "' && " + chkCol[3] + " == '" + keycol4 + "' && " + chkCol[4] + " == '" + keycol5 + "' && " + chkCol[5] + " == '" + keycol6 + "' && " + chkCol[6] + " == '" + keycol7 + "' && " + chkCol[7] + " == '" + keycol8 + "' && " + chkCol[8] + " == '" + keycol9 + "'", 0, ds.rowcount);
        						break;
        					case 10:
        						idx = ds.findRowExpr("currow!='" + i + "' && " + chkCol[0] + " == '" + keycol1 + "' && " + chkCol[1] + " =='" + keycol2 + "'&& " + chkCol[2] + " == '" + keycol3 + "' && " + chkCol[3] + " == '" + keycol4 + "' && " + chkCol[4] + " == '" + keycol5 + "' && " + chkCol[5] + " == '" + keycol6 + "' && " + chkCol[6] + " == '" + keycol7 + "' && " + chkCol[7] + " == '" + keycol8 + "' && " + chkCol[8] + " == '" + keycol9 + "' && " + chkCol[9] + " == '" + keycol10 + "'", 0, ds.rowcount);
        						break;
        					case 11:
        						idx = ds.findRowExpr("currow!='" + i + "' && " + chkCol[0] + " == '" + keycol1 + "' && " + chkCol[1] + " =='" + keycol2 + "'&& " + chkCol[2] + " == '" + keycol3 + "' && " + chkCol[3] + " == '" + keycol4 + "' && " + chkCol[4] + " == '" + keycol5 + "' && " + chkCol[5] + " == '" + keycol6 + "' && " + chkCol[6] + " == '" + keycol7 + "' && " + chkCol[7] + " == '" + keycol8 + "' && " + chkCol[8] + " == '" + keycol9 + "' && " + chkCol[9] + " == '" + keycol10 + "' && " + chkCol[10] + " == '" + keycol11 + "'", 0, ds.rowcount);
        						break;
        					case 12:
        						idx = ds.findRowExpr("currow!='" + i + "' && " + chkCol[0] + " == '" + keycol1 + "' && " + chkCol[1] + " =='" + keycol2 + "'&& " + chkCol[2] + " == '" + keycol3 + "' && " + chkCol[3] + " == '" + keycol4 + "' && " + chkCol[4] + " == '" + keycol5 + "' && " + chkCol[5] + " == '" + keycol6 + "' && " + chkCol[6] + " == '" + keycol7 + "' && " + chkCol[7] + " == '" + keycol8 + "' && " + chkCol[8] + " == '" + keycol9 + "' && " + chkCol[9] + " == '" + keycol10 + "' && " + chkCol[10] + " == '" + keycol11 + "' && " + chkCol[11] + " == '" + keycol12 + "'", 0, ds.rowcount);
        						break;
        					case 13:
        						idx = ds.findRowExpr("currow!='" + i + "' && " + chkCol[0] + " == '" + keycol1 + "' && " + chkCol[1] + " =='" + keycol2 + "'&& " + chkCol[2] + " == '" + keycol3 + "' && " + chkCol[3] + " == '" + keycol4 + "' && " + chkCol[4] + " == '" + keycol5 + "' && " + chkCol[5] + " == '" + keycol6 + "' && " + chkCol[6] + " == '" + keycol7 + "' && " + chkCol[7] + " == '" + keycol8 + "' && " + chkCol[8] + " == '" + keycol9 + "' && " + chkCol[9] + " == '" + keycol10 + "' && " + chkCol[10] + " == '" + keycol11 + "' && " + chkCol[11] + " == '" + keycol12 + "' && " + chkCol[12] + " == '" + keycol13 + "'", 0, ds.rowcount);
        						break;
        					case 14:
        						idx = ds.findRowExpr("currow!='" + i + "' && " + chkCol[0] + " == '" + keycol1 + "' && " + chkCol[1] + " =='" + keycol2 + "'&& " + chkCol[2] + " == '" + keycol3 + "' && " + chkCol[3] + " == '" + keycol4 + "' && " + chkCol[4] + " == '" + keycol5 + "' && " + chkCol[5] + " == '" + keycol6 + "' && " + chkCol[6] + " == '" + keycol7 + "' && " + chkCol[7] + " == '" + keycol8 + "' && " + chkCol[8] + " == '" + keycol9 + "' && " + chkCol[9] + " == '" + keycol10 + "' && " + chkCol[10] + " == '" + keycol11 + "' && " + chkCol[11] + " == '" + keycol12 + "' && " + chkCol[12] + " == '" + keycol13 + "' && " + chkCol[13] + " == '" + keycol14 + "'", 0, ds.rowcount);
        						break;
        					case 15:
        						idx = ds.findRowExpr("currow!='" + i + "' && " + chkCol[0] + " == '" + keycol1 + "' && " + chkCol[1] + " =='" + keycol2 + "'&& " + chkCol[2] + " == '" + keycol3 + "' && " + chkCol[3] + " == '" + keycol4 + "' && " + chkCol[4] + " == '" + keycol5 + "' && " + chkCol[5] + " == '" + keycol6 + "' && " + chkCol[6] + " == '" + keycol7 + "' && " + chkCol[7] + " == '" + keycol8 + "' && " + chkCol[8] + " == '" + keycol9 + "' && " + chkCol[9] + " == '" + keycol10 + "' && " + chkCol[10] + " == '" + keycol11 + "' && " + chkCol[11] + " == '" + keycol12 + "' && " + chkCol[12] + " == '" + keycol13 + "' && " + chkCol[13] + " == '" + keycol14 + "' && " + chkCol[14] + " == '" + keycol15 + "'", 0, ds.rowcount);
        						break;
        				}
        				if (idx != -1)
        				{
        					flag = true;
        					break;
        				}
        				else if (idx == -1 && i == ds.rowcount - 1)
        				{
        					return true;
        				}
        			}
        		}
        		if (flag == true)
        		{
        			trace("중복 행 : " + idx);
        			var eventFlag = false;
        			var eventidx = ds.findEventHandler("onrowposchanged", this.fn_selChange, this);
        			if (eventidx != -1)
        			{
        				trace(ds.name + "에 onselchg 이벤트 있음, 삭제됨");
        				ds.removeEventHandler("onrowposchanged", this.fn_selChange, this);
        				eventFlag = true;
        			}
        			var obj = grid.selectRow(idx);
        			if (eventFlag == true)
        			{
        				ds.addEventHandler("onrowposchanged", this.fn_selChange, this);
        			}
        			trace("obj : " + obj);
        			this.fv_flag = true;
        			alert((i + 1) + "번째 행이 " + (idx + 1) + " 번째 행과 중복 됩니다.");
        		}
        		else
        		{
        			return true;
        		}
        	}
        };


        /**********************************************************************************
         * 작  성  자  :   김정록
         * 함  수  명	:	gfn_deleteChk
         * 설      명	:   인자로받은 데이터중에 삭제조건에 부합하지 않는 행이 있는지
         찾는 함수
         * 입      력	: 	ds : 검증할 데이터셋
         paramDs : 데이터 재정렬 할 데이터셋(컬럼 2개 고정 COL_1,COL_2)
         chkCol : 검증할 컬럼명 배열
         * 반      환	:
         **********************************************************************************/
        this.gfn_deleteChk = function (ds, paramDs)
        {
        	var con1;
        	var con2;
        	var con3;
        	var con4;
        	var con5;
        	var con6;
        	var con7;
        	var con8;
        	var con9;
        	var con10;
        	var con11;
        	var con12;
        	var con13;
        	var con14;
        	var con15;
        	var param;
        	var pgmid = nexacro.getApplication().gv_curWinKey;
        	var chkCol = this.gfn_getDelChkCol();
        	trace("삭제 제약 조건 쳌 컬럼 : " + chkCol.toString());
        	if (chkCol.length != 0)
        	{
        		for (var i = 0; i < ds.rowcount; i++)
        		{
        			if (ds.getColumn(i, "CHK") == "1")
        			{
        				if (ds.getRowType(i) != "2")
        				{
        					switch (chkCol.length)
        					{
        						case 1:
        							var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        							var param = con1;
        							break;
        						case 2:
        							var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        							var con2 = chkCol[1] + "=" + ds.getColumn(i, chkCol[1]);
        							var param = con1 + " " + con2;
        							break;
        						case 3:
        							var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        							var con2 = chkCol[1] + "=" + ds.getColumn(i, chkCol[1]);
        							var con3 = chkCol[2] + "=" + ds.getColumn(i, chkCol[2]);
        							var param = con1 + " " + con2 + " " + con3;
        							break;
        						case 4:
        							var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        							var con2 = chkCol[1] + "=" + ds.getColumn(i, chkCol[1]);
        							var con3 = chkCol[2] + "=" + ds.getColumn(i, chkCol[2]);
        							var con4 = chkCol[3] + "=" + ds.getColumn(i, chkCol[3]);
        							var param = con1 + " " + con2 + " " + con3 + " " + con4;
        							break;
        						case 5:
        							var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        							var con2 = chkCol[1] + "=" + ds.getColumn(i, chkCol[1]);
        							var con3 = chkCol[2] + "=" + ds.getColumn(i, chkCol[2]);
        							var con4 = chkCol[3] + "=" + ds.getColumn(i, chkCol[3]);
        							var con5 = chkCol[4] + "=" + ds.getColumn(i, chkCol[4]);
        							var param = con1 + " " + con2 + " " + con3 + " " + con4 + " " + con5;
        							break;
        						case 6:
        							var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        							var con2 = chkCol[1] + "=" + ds.getColumn(i, chkCol[1]);
        							var con3 = chkCol[2] + "=" + ds.getColumn(i, chkCol[2]);
        							var con4 = chkCol[3] + "=" + ds.getColumn(i, chkCol[3]);
        							var con5 = chkCol[4] + "=" + ds.getColumn(i, chkCol[4]);
        							var con6 = chkCol[5] + "=" + ds.getColumn(i, chkCol[5]);
        							var param = con1 + " " + con2 + " " + con3 + " " + con4 + " " + con5 + " " + con6;
        							break;
        						case 7:
        							var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        							var con2 = chkCol[1] + "=" + ds.getColumn(i, chkCol[1]);
        							var con3 = chkCol[2] + "=" + ds.getColumn(i, chkCol[2]);
        							var con4 = chkCol[3] + "=" + ds.getColumn(i, chkCol[3]);
        							var con5 = chkCol[4] + "=" + ds.getColumn(i, chkCol[4]);
        							var con6 = chkCol[5] + "=" + ds.getColumn(i, chkCol[5]);
        							var con7 = chkCol[6] + "=" + ds.getColumn(i, chkCol[6]);
        							var param = con1 + " " + con2 + " " + con3 + " " + con4 + " " + con5 + " " + con6 + " " + con7;
        							break;
        						case 8:
        							var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        							var con2 = chkCol[1] + "=" + ds.getColumn(i, chkCol[1]);
        							var con3 = chkCol[2] + "=" + ds.getColumn(i, chkCol[2]);
        							var con4 = chkCol[3] + "=" + ds.getColumn(i, chkCol[3]);
        							var con5 = chkCol[4] + "=" + ds.getColumn(i, chkCol[4]);
        							var con6 = chkCol[5] + "=" + ds.getColumn(i, chkCol[5]);
        							var con7 = chkCol[6] + "=" + ds.getColumn(i, chkCol[6]);
        							var con8 = chkCol[7] + "=" + ds.getColumn(i, chkCol[7]);
        							var param = con1 + " " + con2 + " " + con3 + " " + con4 + " " + con5 + " " + con6 + " " + con7 + " " + con8;
        							break;
        						case 9:
        							var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        							var con2 = chkCol[1] + "=" + ds.getColumn(i, chkCol[1]);
        							var con3 = chkCol[2] + "=" + ds.getColumn(i, chkCol[2]);
        							var con4 = chkCol[3] + "=" + ds.getColumn(i, chkCol[3]);
        							var con5 = chkCol[4] + "=" + ds.getColumn(i, chkCol[4]);
        							var con6 = chkCol[5] + "=" + ds.getColumn(i, chkCol[5]);
        							var con7 = chkCol[6] + "=" + ds.getColumn(i, chkCol[6]);
        							var con8 = chkCol[7] + "=" + ds.getColumn(i, chkCol[7]);
        							var con9 = chkCol[8] + "=" + ds.getColumn(i, chkCol[8]);
        							var param = con1 + " " + con2 + " " + con3 + " " + con4 + " " + con5 + " " + con6 + " " + con7 + " " + con8 + " " + con9;
        							break;
        						case 10:
        							var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        							var con2 = chkCol[1] + "=" + ds.getColumn(i, chkCol[1]);
        							var con3 = chkCol[2] + "=" + ds.getColumn(i, chkCol[2]);
        							var con4 = chkCol[3] + "=" + ds.getColumn(i, chkCol[3]);
        							var con5 = chkCol[4] + "=" + ds.getColumn(i, chkCol[4]);
        							var con6 = chkCol[5] + "=" + ds.getColumn(i, chkCol[5]);
        							var con7 = chkCol[6] + "=" + ds.getColumn(i, chkCol[6]);
        							var con8 = chkCol[7] + "=" + ds.getColumn(i, chkCol[7]);
        							var con9 = chkCol[8] + "=" + ds.getColumn(i, chkCol[8]);
        							var con10 = chkCol[9] + "=" + ds.getColumn(i, chkCol[9]);
        							var param = con1 + " " + con2 + " " + con3 + " " + con4 + " " + con5 + " " + con6 + " " + con7 + " " + con8 + " " + con9 + " " + con10;
        							break;
        						case 11:
        							var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        							var con2 = chkCol[1] + "=" + ds.getColumn(i, chkCol[1]);
        							var con3 = chkCol[2] + "=" + ds.getColumn(i, chkCol[2]);
        							var con4 = chkCol[3] + "=" + ds.getColumn(i, chkCol[3]);
        							var con5 = chkCol[4] + "=" + ds.getColumn(i, chkCol[4]);
        							var con6 = chkCol[5] + "=" + ds.getColumn(i, chkCol[5]);
        							var con7 = chkCol[6] + "=" + ds.getColumn(i, chkCol[6]);
        							var con8 = chkCol[7] + "=" + ds.getColumn(i, chkCol[7]);
        							var con9 = chkCol[8] + "=" + ds.getColumn(i, chkCol[8]);
        							var con10 = chkCol[9] + "=" + ds.getColumn(i, chkCol[9]);
        							var con11 = chkCol[10] + "=" + ds.getColumn(i, chkCol[10]);
        							var param = con1 + " " + con2 + " " + con3 + " " + con4 + " " + con5 + " " + con6 + " " + con7 + " " + con8 + " " + con9 + " " + con10 + " " + con11;
        							break;
        						case 12:
        							var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        							var con2 = chkCol[1] + "=" + ds.getColumn(i, chkCol[1]);
        							var con3 = chkCol[2] + "=" + ds.getColumn(i, chkCol[2]);
        							var con4 = chkCol[3] + "=" + ds.getColumn(i, chkCol[3]);
        							var con5 = chkCol[4] + "=" + ds.getColumn(i, chkCol[4]);
        							var con6 = chkCol[5] + "=" + ds.getColumn(i, chkCol[5]);
        							var con7 = chkCol[6] + "=" + ds.getColumn(i, chkCol[6]);
        							var con8 = chkCol[7] + "=" + ds.getColumn(i, chkCol[7]);
        							var con9 = chkCol[8] + "=" + ds.getColumn(i, chkCol[8]);
        							var con10 = chkCol[9] + "=" + ds.getColumn(i, chkCol[9]);
        							var con11 = chkCol[10] + "=" + ds.getColumn(i, chkCol[10]);
        							var con12 = chkCol[11] + "=" + ds.getColumn(i, chkCol[11]);
        							var param = con1 + " " + con2 + " " + con3 + " " + con4 + " " + con5 + " " + con6 + " " + con7 + " " + con8 + " " + con9 + " " + con10 + " " + con11 + " " + con12;
        							break;
        						case 13:
        							var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        							var con2 = chkCol[1] + "=" + ds.getColumn(i, chkCol[1]);
        							var con3 = chkCol[2] + "=" + ds.getColumn(i, chkCol[2]);
        							var con4 = chkCol[3] + "=" + ds.getColumn(i, chkCol[3]);
        							var con5 = chkCol[4] + "=" + ds.getColumn(i, chkCol[4]);
        							var con6 = chkCol[5] + "=" + ds.getColumn(i, chkCol[5]);
        							var con7 = chkCol[6] + "=" + ds.getColumn(i, chkCol[6]);
        							var con8 = chkCol[7] + "=" + ds.getColumn(i, chkCol[7]);
        							var con9 = chkCol[8] + "=" + ds.getColumn(i, chkCol[8]);
        							var con10 = chkCol[9] + "=" + ds.getColumn(i, chkCol[9]);
        							var con11 = chkCol[10] + "=" + ds.getColumn(i, chkCol[10]);
        							var con12 = chkCol[11] + "=" + ds.getColumn(i, chkCol[11]);
        							var con13 = chkCol[12] + "=" + ds.getColumn(i, chkCol[12]);
        							var param = con1 + " " + con2 + " " + con3 + " " + con4 + " " + con5 + " " + con6 + " " + con7 + " " + con8 + " " + con9 + " " + con10 + " " + con11 + " " + con12 + " " + con13;
        							break;
        						case 14:
        							var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        							var con2 = chkCol[1] + "=" + ds.getColumn(i, chkCol[1]);
        							var con3 = chkCol[2] + "=" + ds.getColumn(i, chkCol[2]);
        							var con4 = chkCol[3] + "=" + ds.getColumn(i, chkCol[3]);
        							var con5 = chkCol[4] + "=" + ds.getColumn(i, chkCol[4]);
        							var con6 = chkCol[5] + "=" + ds.getColumn(i, chkCol[5]);
        							var con7 = chkCol[6] + "=" + ds.getColumn(i, chkCol[6]);
        							var con8 = chkCol[7] + "=" + ds.getColumn(i, chkCol[7]);
        							var con9 = chkCol[8] + "=" + ds.getColumn(i, chkCol[8]);
        							var con10 = chkCol[9] + "=" + ds.getColumn(i, chkCol[9]);
        							var con11 = chkCol[10] + "=" + ds.getColumn(i, chkCol[10]);
        							var con12 = chkCol[11] + "=" + ds.getColumn(i, chkCol[11]);
        							var con13 = chkCol[12] + "=" + ds.getColumn(i, chkCol[12]);
        							var con14 = chkCol[13] + "=" + ds.getColumn(i, chkCol[13]);
        							var param = con1 + " " + con2 + " " + con3 + " " + con4 + " " + con5 + " " + con6 + " " + con7 + " " + con8 + " " + con9 + " " + con10 + " " + con11 + " " + con12 + " " + con13 + " " + con14;
        							break;
        						case 15:
        							var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        							var con2 = chkCol[1] + "=" + ds.getColumn(i, chkCol[1]);
        							var con3 = chkCol[2] + "=" + ds.getColumn(i, chkCol[2]);
        							var con4 = chkCol[3] + "=" + ds.getColumn(i, chkCol[3]);
        							var con5 = chkCol[4] + "=" + ds.getColumn(i, chkCol[4]);
        							var con6 = chkCol[5] + "=" + ds.getColumn(i, chkCol[5]);
        							var con7 = chkCol[6] + "=" + ds.getColumn(i, chkCol[6]);
        							var con8 = chkCol[7] + "=" + ds.getColumn(i, chkCol[7]);
        							var con9 = chkCol[8] + "=" + ds.getColumn(i, chkCol[8]);
        							var con10 = chkCol[9] + "=" + ds.getColumn(i, chkCol[9]);
        							var con11 = chkCol[10] + "=" + ds.getColumn(i, chkCol[10]);
        							var con12 = chkCol[11] + "=" + ds.getColumn(i, chkCol[11]);
        							var con13 = chkCol[12] + "=" + ds.getColumn(i, chkCol[12]);
        							var con14 = chkCol[13] + "=" + ds.getColumn(i, chkCol[13]);
        							var con15 = chkCol[14] + "=" + ds.getColumn(i, chkCol[14]);
        							var param = con1 + " " + con2 + " " + con3 + " " + con4 + " " + con5 + " " + con6 + " " + con7 + " " + con8 + " " + con9 + " " + con10 + " " + con11 + " " + con12 + " " + con13 + " " + con14 + " " + con15;
        							break;
        					}
        					var idx = paramDs.addRow();
        					paramDs.setColumn(idx, "COL_1", i);
        					paramDs.setColumn(idx, "COL_2", param);
        				}
        			}
        		}
        		// for logging
        		for (var y = 0; y < paramDs.rowcount; y++)
        		{
        			trace("순번 : " + paramDs.getColumn(y, "COL_1"));
        			trace("인자 : " + paramDs.getColumn(y, "COL_2"));
        		}

        		if (paramDs.rowcount != 0)
        		{
        			var svcId = "save";
        			var params = "/commonController.do";
        			var inDatasets = "input1=" + paramDs.name + ":U";
        			var outDatasets = "";
        			var argument = "method=conchk "
        				 + "sqlId=tempinsert "
        				 + "forceSqlFlag=N "
        				 + "companycd=" + nexacro.getApplication().gv_company + " "
        				 + "grpcd=" + pgmid + " ";
        			var callbackFunc = "gfn_deleteChk_callback";

        			this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, "", false);
        		}
        		else
        		{
        			this.fv_flag = true;
        			return true;
        		}
        	}
        	else
        	{
        		this.fv_flag = true;
        		return true;
        	}
        };

        /**********************************************************************************
         * 작  성  자  :   김정록
         * 함  수  명	:	gfn_deleteChk_callback
         * 설      명	:   삭제조건에 부합하는 데이터가 있는지 없는지 확인하여 메세지 리턴
         * 입      력	: 	콜백함수 파라미터 3가지
         * 반      환	:
         **********************************************************************************/
        this.gfn_deleteChk_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode != -1)
        	{
        		this.fv_flag = true;
        		// Sct.alert 처리
        		this.ds_dup.clearData();
        	}
        	else
        	{
        		var msgcode = strErrorMsg.substring(strErrorMsg.indexOf(":") + 1, strErrorMsg.indexOf("/"));
        		trace(msgcode);
        		var rownum = strErrorMsg.substring(strErrorMsg.indexOf("/") + 1, strErrorMsg.length);
        		trace(rownum);
        		this.fv_currentGrid.selectRow(nexacro.toNumber(rownum));
        		// Sct.alert 처리
        		alert(nexacro.toNumber(rownum) + 1 + " 번째 행의 데이터는 " + msgcode + " 의 이유로 삭제 할 수 없습니다.");
        		this.ds_dup.clearData();
        		this.fv_flag = false;
        	}
        };

        /**********************************************************************************
         * 작  성  자  :   김정록
         * 함  수  명	:	gfn_getDelChkCol
         * 설      명	:   삭제시 제약조건 확인해야하는 컬럼명을 찾는함수
         * 입      력	:
         * 반      환	:
         **********************************************************************************/
        this.gfn_getDelChkCol = function ()
        {
        	var chkCol = new Array();
        	var dsnm = this.fv_currentDS.name.toUpperCase();
        	trace("현재 데이터 셋 : " + dsnm);
        	this.ds_del.filter("DATASET_ID == '" + dsnm + "'");
        	trace("필터후 갯수 : " + this.ds_del.rowcount);
        	for (var i = 0; i < this.ds_del.rowcount; i++)
        	{
        		chkCol.push(this.ds_del.getColumn(i, "COLUMN_NM"));
        	}
        	this.ds_del.filter("");
        	return chkCol;
        };

        /**********************************************************************************
         * 작  성  자  :   김정록
         * 함  수  명	:	gfn_dupChk
         * 설      명	:   인자로받은 데이터중에 DB데이터와 중복되는 행이 있는지
         찾는 함수
         * 입      력	: 	ds : 검증할 데이터셋
         paramDs : 데이터 재정렬 할 데이터셋(컬럼 2개 고정 COL_1,COL_2)
         chkCol : 검증할 컬럼명 배열
         * 반      환	:
         **********************************************************************************/
        this.gfn_dupChk = function (ds, paramDs, pChkcol)
        {
        	var con1;
        	var con2;
        	var con3;
        	var con4;
        	var con5;
        	var con6;
        	var con7;
        	var con8;
        	var con9;
        	var con10;
        	var con11;
        	var con12;
        	var con13;
        	var con14;
        	var con15;
        	var param;
        	var flag;
        	var chkCol;
        	var pgmid = nexacro.getApplication().gv_curWinKey;
        	eval("var pds = this.ds_" + pgmid + ";");
        	var tablenm = pds.findRow("DATASET", this.fv_currentDS.name);
        	tablenm = pds.getColumn(tablenm, "TABLE_NM");
        	trace("증복체크 테이블 명 : " + tablenm);
        	if (pChkcol == null || pChkcol == "")
        	{
        		chkCol = this.gfn_getPKlist();
        	}
        	else
        	{
        		chkCol = pChkcol;
        	}
        	if (tablenm == "" || tablenm == null)
        	{
        		tablenm = "T_CM_MAKE_NEXACRO";
        		trace("중복체크 테이블명 없음, T_CM_NEXACRO_MAKE 확인");
        	}

        	trace("그리드 중복 DB 쳌 컬럼 : " + chkCol.toString());
        	for (var i = 0; i < ds.rowcount; i++)
        	{
        		if (ds.getRowType(i) == "2")
        		{
        			switch (chkCol.length)
        			{
        				case 1:
        					var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        					var param = con1;
        					break;
        				case 2:
        					var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        					var con2 = chkCol[1] + "=" + ds.getColumn(i, chkCol[1]);
        					var param = con1 + " " + con2;
        					break;
        				case 3:
        					var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        					var con2 = chkCol[1] + "=" + ds.getColumn(i, chkCol[1]);
        					var con3 = chkCol[2] + "=" + ds.getColumn(i, chkCol[2]);
        					var param = con1 + " " + con2 + " " + con3;
        					break;
        				case 4:
        					var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        					var con2 = chkCol[1] + "=" + ds.getColumn(i, chkCol[1]);
        					var con3 = chkCol[2] + "=" + ds.getColumn(i, chkCol[2]);
        					var con4 = chkCol[3] + "=" + ds.getColumn(i, chkCol[3]);
        					var param = con1 + " " + con2 + " " + con3 + " " + con4;
        					break;
        				case 5:
        					var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        					var con2 = chkCol[1] + "=" + ds.getColumn(i, chkCol[1]);
        					var con3 = chkCol[2] + "=" + ds.getColumn(i, chkCol[2]);
        					var con4 = chkCol[3] + "=" + ds.getColumn(i, chkCol[3]);
        					var con5 = chkCol[4] + "=" + ds.getColumn(i, chkCol[4]);
        					var param = con1 + " " + con2 + " " + con3 + " " + con4 + " " + con5;
        					break;
        				case 6:
        					var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        					var con2 = chkCol[1] + "=" + ds.getColumn(i, chkCol[1]);
        					var con3 = chkCol[2] + "=" + ds.getColumn(i, chkCol[2]);
        					var con4 = chkCol[3] + "=" + ds.getColumn(i, chkCol[3]);
        					var con5 = chkCol[4] + "=" + ds.getColumn(i, chkCol[4]);
        					var con6 = chkCol[5] + "=" + ds.getColumn(i, chkCol[5]);
        					var param = con1 + " " + con2 + " " + con3 + " " + con4 + " " + con5 + " " + con6;
        					break;
        				case 7:
        					var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        					var con2 = chkCol[1] + "=" + ds.getColumn(i, chkCol[1]);
        					var con3 = chkCol[2] + "=" + ds.getColumn(i, chkCol[2]);
        					var con4 = chkCol[3] + "=" + ds.getColumn(i, chkCol[3]);
        					var con5 = chkCol[4] + "=" + ds.getColumn(i, chkCol[4]);
        					var con6 = chkCol[5] + "=" + ds.getColumn(i, chkCol[5]);
        					var con7 = chkCol[6] + "=" + ds.getColumn(i, chkCol[6]);
        					var param = con1 + " " + con2 + " " + con3 + " " + con4 + " " + con5 + " " + con6 + " " + con7;
        					break;
        				case 8:
        					var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        					var con2 = chkCol[1] + "=" + ds.getColumn(i, chkCol[1]);
        					var con3 = chkCol[2] + "=" + ds.getColumn(i, chkCol[2]);
        					var con4 = chkCol[3] + "=" + ds.getColumn(i, chkCol[3]);
        					var con5 = chkCol[4] + "=" + ds.getColumn(i, chkCol[4]);
        					var con6 = chkCol[5] + "=" + ds.getColumn(i, chkCol[5]);
        					var con7 = chkCol[6] + "=" + ds.getColumn(i, chkCol[6]);
        					var con8 = chkCol[7] + "=" + ds.getColumn(i, chkCol[7]);
        					var param = con1 + " " + con2 + " " + con3 + " " + con4 + " " + con5 + " " + con6 + " " + con7 + " " + con8;
        					break;
        				case 9:
        					var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        					var con2 = chkCol[1] + "=" + ds.getColumn(i, chkCol[1]);
        					var con3 = chkCol[2] + "=" + ds.getColumn(i, chkCol[2]);
        					var con4 = chkCol[3] + "=" + ds.getColumn(i, chkCol[3]);
        					var con5 = chkCol[4] + "=" + ds.getColumn(i, chkCol[4]);
        					var con6 = chkCol[5] + "=" + ds.getColumn(i, chkCol[5]);
        					var con7 = chkCol[6] + "=" + ds.getColumn(i, chkCol[6]);
        					var con8 = chkCol[7] + "=" + ds.getColumn(i, chkCol[7]);
        					var con9 = chkCol[8] + "=" + ds.getColumn(i, chkCol[8]);
        					var param = con1 + " " + con2 + " " + con3 + " " + con4 + " " + con5 + " " + con6 + " " + con7 + " " + con8 + " " + con9;
        					break;
        				case 10:
        					var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        					var con2 = chkCol[1] + "=" + ds.getColumn(i, chkCol[1]);
        					var con3 = chkCol[2] + "=" + ds.getColumn(i, chkCol[2]);
        					var con4 = chkCol[3] + "=" + ds.getColumn(i, chkCol[3]);
        					var con5 = chkCol[4] + "=" + ds.getColumn(i, chkCol[4]);
        					var con6 = chkCol[5] + "=" + ds.getColumn(i, chkCol[5]);
        					var con7 = chkCol[6] + "=" + ds.getColumn(i, chkCol[6]);
        					var con8 = chkCol[7] + "=" + ds.getColumn(i, chkCol[7]);
        					var con9 = chkCol[8] + "=" + ds.getColumn(i, chkCol[8]);
        					var con10 = chkCol[9] + "=" + ds.getColumn(i, chkCol[9]);
        					var param = con1 + " " + con2 + " " + con3 + " " + con4 + " " + con5 + " " + con6 + " " + con7 + " " + con8 + " " + con9 + " " + con10;
        					break;
        				case 11:
        					var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        					var con2 = chkCol[1] + "=" + ds.getColumn(i, chkCol[1]);
        					var con3 = chkCol[2] + "=" + ds.getColumn(i, chkCol[2]);
        					var con4 = chkCol[3] + "=" + ds.getColumn(i, chkCol[3]);
        					var con5 = chkCol[4] + "=" + ds.getColumn(i, chkCol[4]);
        					var con6 = chkCol[5] + "=" + ds.getColumn(i, chkCol[5]);
        					var con7 = chkCol[6] + "=" + ds.getColumn(i, chkCol[6]);
        					var con8 = chkCol[7] + "=" + ds.getColumn(i, chkCol[7]);
        					var con9 = chkCol[8] + "=" + ds.getColumn(i, chkCol[8]);
        					var con10 = chkCol[9] + "=" + ds.getColumn(i, chkCol[9]);
        					var con11 = chkCol[10] + "=" + ds.getColumn(i, chkCol[10]);
        					var param = con1 + " " + con2 + " " + con3 + " " + con4 + " " + con5 + " " + con6 + " " + con7 + " " + con8 + " " + con9 + " " + con10 + " " + con11;
        					break;
        				case 12:
        					var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        					var con2 = chkCol[1] + "=" + ds.getColumn(i, chkCol[1]);
        					var con3 = chkCol[2] + "=" + ds.getColumn(i, chkCol[2]);
        					var con4 = chkCol[3] + "=" + ds.getColumn(i, chkCol[3]);
        					var con5 = chkCol[4] + "=" + ds.getColumn(i, chkCol[4]);
        					var con6 = chkCol[5] + "=" + ds.getColumn(i, chkCol[5]);
        					var con7 = chkCol[6] + "=" + ds.getColumn(i, chkCol[6]);
        					var con8 = chkCol[7] + "=" + ds.getColumn(i, chkCol[7]);
        					var con9 = chkCol[8] + "=" + ds.getColumn(i, chkCol[8]);
        					var con10 = chkCol[9] + "=" + ds.getColumn(i, chkCol[9]);
        					var con11 = chkCol[10] + "=" + ds.getColumn(i, chkCol[10]);
        					var con12 = chkCol[11] + "=" + ds.getColumn(i, chkCol[11]);
        					var param = con1 + " " + con2 + " " + con3 + " " + con4 + " " + con5 + " " + con6 + " " + con7 + " " + con8 + " " + con9 + " " + con10 + " " + con11 + " " + con12;
        					break;
        				case 13:
        					var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        					var con2 = chkCol[1] + "=" + ds.getColumn(i, chkCol[1]);
        					var con3 = chkCol[2] + "=" + ds.getColumn(i, chkCol[2]);
        					var con4 = chkCol[3] + "=" + ds.getColumn(i, chkCol[3]);
        					var con5 = chkCol[4] + "=" + ds.getColumn(i, chkCol[4]);
        					var con6 = chkCol[5] + "=" + ds.getColumn(i, chkCol[5]);
        					var con7 = chkCol[6] + "=" + ds.getColumn(i, chkCol[6]);
        					var con8 = chkCol[7] + "=" + ds.getColumn(i, chkCol[7]);
        					var con9 = chkCol[8] + "=" + ds.getColumn(i, chkCol[8]);
        					var con10 = chkCol[9] + "=" + ds.getColumn(i, chkCol[9]);
        					var con11 = chkCol[10] + "=" + ds.getColumn(i, chkCol[10]);
        					var con12 = chkCol[11] + "=" + ds.getColumn(i, chkCol[11]);
        					var con13 = chkCol[12] + "=" + ds.getColumn(i, chkCol[12]);
        					var param = con1 + " " + con2 + " " + con3 + " " + con4 + " " + con5 + " " + con6 + " " + con7 + " " + con8 + " " + con9 + " " + con10 + " " + con11 + " " + con12 + " " + con13;
        					break;
        				case 14:
        					var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        					var con2 = chkCol[1] + "=" + ds.getColumn(i, chkCol[1]);
        					var con3 = chkCol[2] + "=" + ds.getColumn(i, chkCol[2]);
        					var con4 = chkCol[3] + "=" + ds.getColumn(i, chkCol[3]);
        					var con5 = chkCol[4] + "=" + ds.getColumn(i, chkCol[4]);
        					var con6 = chkCol[5] + "=" + ds.getColumn(i, chkCol[5]);
        					var con7 = chkCol[6] + "=" + ds.getColumn(i, chkCol[6]);
        					var con8 = chkCol[7] + "=" + ds.getColumn(i, chkCol[7]);
        					var con9 = chkCol[8] + "=" + ds.getColumn(i, chkCol[8]);
        					var con10 = chkCol[9] + "=" + ds.getColumn(i, chkCol[9]);
        					var con11 = chkCol[10] + "=" + ds.getColumn(i, chkCol[10]);
        					var con12 = chkCol[11] + "=" + ds.getColumn(i, chkCol[11]);
        					var con13 = chkCol[12] + "=" + ds.getColumn(i, chkCol[12]);
        					var con14 = chkCol[13] + "=" + ds.getColumn(i, chkCol[13]);
        					var param = con1 + " " + con2 + " " + con3 + " " + con4 + " " + con5 + " " + con6 + " " + con7 + " " + con8 + " " + con9 + " " + con10 + " " + con11 + " " + con12 + " " + con13 + " " + con14;
        					break;
        				case 15:
        					var con1 = chkCol[0] + "=" + ds.getColumn(i, chkCol[0]);
        					var con2 = chkCol[1] + "=" + ds.getColumn(i, chkCol[1]);
        					var con3 = chkCol[2] + "=" + ds.getColumn(i, chkCol[2]);
        					var con4 = chkCol[3] + "=" + ds.getColumn(i, chkCol[3]);
        					var con5 = chkCol[4] + "=" + ds.getColumn(i, chkCol[4]);
        					var con6 = chkCol[5] + "=" + ds.getColumn(i, chkCol[5]);
        					var con7 = chkCol[6] + "=" + ds.getColumn(i, chkCol[6]);
        					var con8 = chkCol[7] + "=" + ds.getColumn(i, chkCol[7]);
        					var con9 = chkCol[8] + "=" + ds.getColumn(i, chkCol[8]);
        					var con10 = chkCol[9] + "=" + ds.getColumn(i, chkCol[9]);
        					var con11 = chkCol[10] + "=" + ds.getColumn(i, chkCol[10]);
        					var con12 = chkCol[11] + "=" + ds.getColumn(i, chkCol[11]);
        					var con13 = chkCol[12] + "=" + ds.getColumn(i, chkCol[12]);
        					var con14 = chkCol[13] + "=" + ds.getColumn(i, chkCol[13]);
        					var con15 = chkCol[14] + "=" + ds.getColumn(i, chkCol[14]);
        					var param = con1 + " " + con2 + " " + con3 + " " + con4 + " " + con5 + " " + con6 + " " + con7 + " " + con8 + " " + con9 + " " + con10 + " " + con11 + " " + con12 + " " + con13 + " " + con14 + " " + con15;
        					break;
        			}
        			var idx = paramDs.addRow();
        			paramDs.setColumn(idx, "COL_1", i);
        			paramDs.setColumn(idx, "COL_2", param);
        		}
        	}
        	// for logging
        	if (paramDs.rowcount != 0)
        	{
        		trace("ds_dup rowcount : " + paramDs.rowcount);
        		for (var y = 0; y < paramDs.rowcount; y++)
        		{
        			trace("순번 : " + paramDs.getColumn(y, "COL_1"));
        			trace("인자 : " + paramDs.getColumn(y, "COL_2"));
        		}

        		var svcId = "save";
        		var params = "/commonController.do";
        		var inDatasets = "input1=" + paramDs.name + ":U";
        		var outDatasets = "";
        		var argument = "method=conchk "
        			 + "sqlId=tempinsert "
        			 + "forceSqlFlag=N "
        			 + "tablenm=" + tablenm + " ";
        		var callbackFunc = "gfn_dupChk_callback";

        		this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, "", false);
        	}
        	else
        	{
        		trace("ds_dup rowcount 0 ");
        		this.fv_flag = true;
        		return true;
        	}
        };

        /**********************************************************************************
         * 작  성  자  :   김정록
         * 함  수  명	:	gfn_dupChk_callback
         * 설      명	:   중복되는 행 있는지 없는지 확인하여 메세지 리턴
         * 입      력	: 	콜백함수 파라미터 3가지
         * 반      환	:
         **********************************************************************************/
        this.gfn_dupChk_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode != -1)
        	{
        		this.fv_flag = true;
        		this.ds_dup.clearData();
        		// Sct.alert 처리
        	}
        	else
        	{
        		this.fv_flag = 0;
        		var msgcode = strErrorMsg.substring(strErrorMsg.indexOf(":") + 1, strErrorMsg.indexOf("/"));
        		trace(msgcode);
        		var rownum = strErrorMsg.substring(strErrorMsg.indexOf("/") + 1, strErrorMsg.length);
        		trace(rownum);
        		this.fv_currentGrid.selectRow(nexacro.toNumber(rownum));
        		// Sct.alert 처리
        		alert(nexacro.toNumber(rownum) + 1 + " 번째 행의 데이터가 이미 존재합니다");
        		this.ds_dup.clearData();
        		return false;
        	}
        };



        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_getPKlist
         * 설      명	:  중복값 체크와 삭제시 제약조건을 확인하기위한 컬럼을 찾는다.
         * 입      력	:
         * 반      환	:  Array
         **********************************************************************************/
        this.gfn_getPKlist = function ()
        {
        	var pgmid = nexacro.getApplication().gv_curWinKey;
        	eval("var ds = this.ds_" + pgmid + ";");
        	var chkCol = new Array();
        	for (var i = 0; i < ds.rowcount; i++)
        	{
        		if (ds.getColumn(i, "COLUMN_PK") == "PK" && ds.getColumn(i, "DATASET") == this.fv_currentDS.name)
        		{
        			chkCol.push(ds.getColumn(i, "COLUMN_NM"));
        		}
        	}
        	return chkCol;
        };

        /**********************************************************************************
         * 작  성  자  :   김정록
         * 함  수  명	:	gfn_findUrow
         * 설      명	:   저장후 수정,추가 한 첫번째 행의 번호를 찾아서 리턴
         * 입      력	: 	uds : 행을 찾으려는 데이터셋
         isSelChg : 행변경 이벤트를 타는 데이터셋이면 "Y",
         아니면 "N" 으로 전달받는 파라미터

         * 반      환	:
         **********************************************************************************/
        this.gfn_findUrow = function (uds, isSelChg)
        {
        	var ds = uds;
        	if (this.fv_flag != false)
        	{
        		ds.set_rowposition(-1);
        		if (isSelChg == "Y")
        		{
        			this.gfn_setSelchgEvent(ds);
        		}
        		trace("findUrow 데이터셋 : " + ds.name);
        		if (this.outvar != null && this.outvar != "")
        		{
        			trace("행변경 : " + this.outvar);
        			var rowidx = ds.findRow("MOD_DT_LOC", this.outvar);
        			if (rowidx != -1)
        			{
        				ds.set_rowposition(ds.findRow("MOD_DT_LOC", this.outvar));
        			}
        			else
        			{
        				ds.set_rowposition(0);
        			}
        		}
        	}
        	else
        	{
        		ds.set_rowposition(-1);
        		if (isSelChg == "Y")
        		{
        			this.gfn_setSelchgEvent(ds);
        		}
        		ds.set_rowposition(0);
        	}
        };


        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_getRowState
         * 설      명	:  저장전 수정된 행이 있는지 찾는다.
         * 입      력	:  ds : 저장하려는 데이터셋
         * 반      환	:  true / false
         **********************************************************************************/
        this.gfn_getRowState = function (ds)
        {
        	var flag = null;
        	if (ds.rowcount == 0)
        	{
        		trace("첫 조회.");
        		flag = 0;
        	}
        	else
        	{
        		trace("ds rowcount" + ds.rowcount);
        		for (var i = 0; i < ds.rowcount; i++)
        		{
        			if (ds.getRowType(i) == "4")
        			{
        				trace("수정됨");
        				flag = true;
        				break;
        			}
        			if (ds.getRowType(i) == "2")
        			{
        				trace("추가됨");
        				flag = false;
        				break;
        			}
        		}
        	}
        	trace("수정된행 ? : " + flag);
        	trace("데이터셋 갯수 : " + ds.rowcount);
        	return flag;
        };

        /**********************************************************************************
         * 작  성  자  :   김정록
         * 함  수  명	:	gfn_beforeCellChange
         * 설      명	:   헤더-디테일 형태의 화면에서 row 변경 전 체크함수
         * 입      력	: 	grid : 헤더 그리드
         ds_h : 헤더 데이터셋
         ds_d : 디테일 데이터셋
         rowidx : e.oldrow
         * 반      환	:	true / false
         **********************************************************************************/
        this.gfn_beforeCellChange = function (grid, ds_h, ds_d, rowidx, noGrid) {
        	// TODO
        	if (!confirm("추가/수정 중인 행이 존재합니다. 무시하고 조회 하시겠습니까?", "CAUTION", "information")) {
        		return false;
        	}

        	return true;
        };


        /**********************************************************************************
         * 작  성  자  :   김정록
         * 함  수  명	:	gfn_setSelchgEvent
         * 설      명	:   행변경 전 추가/수정 확인하는 함수에서 로직에 따라
         행변경 이벤트를 발생시킬지 말지를 지정하는 함수.
         이벤트가 존재하면 제거하고 없으면 추가한다.
         * 입      력	: 	ds : 판별하려는 데이터셋
         * 반      환	:
         **********************************************************************************/
        // this.gfn_setSelchgEvent = function(grid:Grid){
        // var idx = grid.findEventHandler("onselectchanged",this.fn_selChange,this);
        // if(idx != -1){
        // trace(grid.name+"에 onselchg 이벤트 있음, 삭제됨");
        // grid.removeEventHandler("onselectchanged",this.fn_selChange,this);
        // }else{
        // trace(grid.name+"에 onselchg 이벤트 없음, 추가됨");
        // grid.addEventHandler("onselectchanged",this.fn_selChange,this);
        // }
        // }
        this.gfn_setSelchgEvent = function (ds)
        {
        	var idx = ds.findEventHandler("onrowposchanged", this.fn_selChange, this);
        	if (idx != -1)
        	{
        		trace(ds.name + "에 onselchg 이벤트 있음, 삭제됨");
        		ds.removeEventHandler("onrowposchanged", this.fn_selChange, this);
        	}
        	else
        	{
        		trace(ds.name + "에 onselchg 이벤트 없음, 추가됨");
        		ds.addEventHandler("onrowposchanged", this.fn_selChange, this);
        	}
        };

        /**********************************************************************************
         * 작  성  자  :   김정록
         * 함  수  명	:	gfn_delSelchgEvent
         * 설      명	:   행변경 이벤트가 존재할때만 삭제한다.
         * 입      력	: 	ds : 판별하려는 데이터셋
         * 반      환	:
         **********************************************************************************/
        this.gfn_delSelchgEvent = function (ds)
        {
        	var idx = ds.findEventHandler("onrowposchanged", this.fn_selChange, this);
        	if (idx != -1)
        	{
        		trace(ds.name + "에 onselchg 이벤트 있음, 삭제됨");
        		ds.removeEventHandler("onrowposchanged", this.fn_selChange, this);
        	}
        	else
        	{
        		trace(ds.name + "에 onselchg 이벤트 없음");
        	}
        };


        /**********************************************************************************
         * 작  성  자  :   김정록
         * 함  수  명	:	gfn_findSnull
         * 설      명	:   조회전 조회 필수 항목 검사 함수
         * 입      력	: 	div : 검색조건 div
         * 반      환	:	true / false
         **********************************************************************************/
        this.gfn_findSnull = function (div) {
        	for (var i=0; i<div.form.components.length; i++) {
        		var objTarget = div.form.components[i];

        		if (objTarget instanceof Combo || objTarget instanceof Edit || objTarget instanceof Radio || objTarget instanceof Calendar || objTarget instanceof MaskEdit) {
        			if (objTarget.cssclass == "essential") {
        				if(objTarget.value == "" || objTarget.value == null){
        					// 2022-03-02 조기종 검색조건에 static을 사용하지 않으므로 tooltiptext로 항목 표시
        					// message table을 사용하지 않으므로 alert 수정
        					//var sStaId = "sta_"+objTarget.name.substr(4);
        					//var sStaText = div.form.components[sStaId].text;
        					//Sct.alert(this,"000076",sStaText+"|");
        					const tooltip = objTarget.tooltiptext;
        					alert(tooltip + "는 필수 항목입니다.");
        					objTarget.setFocus();
        					return false;
        				}
        			}
        		}
        	}
        	return true;
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_mergeCellCal
         * 설      명	:  인자로 넘어온 NullColumn index를 활용하여 그리드 내부의 Merge
         된 셀을 계산하여, Cellindex를 리턴한다.
         * 입      력	:  idx : Null인 컬럼 index
         grid : 해당 그리드
         * 반      환	:  Cellindex
         **********************************************************************************/
        this.gfn_mergeCellCal = function (idx, grid)
        {
        	// var rowidx = idx-1;
        	// var cellcount = 0;
        	// var flagcount = 0;
        	//
        	//
        	// for(var i=0; i<=rowidx; i++){
        	// if(grid.getCellProperty("Head",i,"colspan") != 1){
        	// cellcount += nexacro.toNumber(grid.getCellProperty("Head",i,"colspan"));
        	// }
        	// if(grid.getCellProperty("Head",i,"colspan") == "1"){
        	// trace("머지 안됨");
        	// continue;
        	// }else{
        	// trace("머지됨");
        	// flagcount += 1;
        	// }
        	// }
        	// if(cellcount == 0){
        	// cellcount = rowidx;
        	// }
        	// if(flagcount == 0){
        	// rowidx = rowidx+1;
        	// }
        	// trace("널 컬럼 idx : "+rowidx);
        	// trace("널 컬럼까지의 머지포함 셀 갯수 : "+cellcount);
        	// var nCellspanidx = grid.getCellProperty("Head",rowidx,"colspan");
        	// trace("널컬럼의 머지 갯수 : "+nCellspanidx);
        	// if(nCellspanidx != 1){
        	// if(flagcount == 0){
        	// nCellspanidx = nexacro.toNumber(cellcount);
        	// }else{
        	// nCellspanidx = nexacro.toNumber(cellcount) - nexacro.toNumber(nCellspanidx);
        	// }
        	// }else{
        	// if(flagcount == 0){
        	// nCellspanidx = nexacro.toNumber(cellcount);
        	// }else{
        	// nCellspanidx = nexacro.toNumber(cellcount) - 1;
        	// }
        	// }
        	// trace("총셀 갯수에서 널 컬럼의 머지 갯수 를 뺀 수 : "+nCellspanidx);
        	// return nCellspanidx+","+cellcount;

        	// trace("널 컬럼 idx : "+idx);
        	// var cellcount = 0;
        	//
        	// for(var i=0; i<=idx; i++){
        	// cellcount += nexacro.toNumber(grid.getCellProperty("Head",i,"colspan"));
        	// }
        	// trace("널 컬럼까지의 머지포함 셀 갯수 : "+cellcount);
        	// var nCellspanidx = grid.getCellProperty("Head",idx,"colspan");
        	// trace("널컬럼 머지 갯수 : "+nCellspanidx);
        	// nCellspanidx = nexacro.toNumber(cellcount) - nexacro.toNumber(nCellspanidx);
        	// trace("총셀 갯수에서 널 컬럼의 머지 갯수 를 뺀 수 : "+nCellspanidx);
        	// return nCellspanidx;
        	var cellcount = 0;
        	var count = 0;
        	for (var i = 0; i < idx; i++)
        	{
        		cellcount += nexacro.toNumber(grid.getCellProperty("Head", i, "colspan"));
        		count += nexacro.toNumber(grid.getCellProperty("Head", i, "colspan") - 1);
        	}
        	// for(var i=0; i<idx; i++){
        	// var merge = grid.getCellProperty("Head",i,"colspan");
        	// mergecount = mergecount + nexacro.toNumber(merge) -1;
        	//
        	// }
        	// var count = idx - nexacro.toNumber(mergecount);
        	var cellidx = cellcount - count;
        	trace("cellidx : " + cellidx);
        	return cellidx;
        };


        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_getSearchArgu
         * 설      명	:  인자로 넘어온 div(검색)의 검색값들을 배열에 담아서 리턴
         * 입      력	:  div : 검색조건 div 영역
         * 반      환	:  Array
         **********************************************************************************/
        this.gfn_getSearchArgu = function (div)
        {
        	var args = new Array();
        	for (var i = 0; i < div.form.components.length; i++)
        	{
        		if (div.form.components[i] instanceof Combo || div.form.components[i] instanceof Edit || div.form.components[i] instanceof MaskEdit ||
        			div.form.components[i] instanceof Radio || div.form.components[i] instanceof Calendar || div.form.components[i] instanceof CheckBox)
        		{
        			var compnm = div.form.components[i].name;
        			compnm = compnm.substring(nexacro.toNumber(compnm.indexOf("_")) + 1, compnm.length);
        			var value = div.form.components[i].value;
        			if (value == "" || value == null)
        			{
        				value = "null";
        			}
        			else
        			{
        				args.push(compnm.toUpperCase() + "='" + value + "' ");
        			}
        		}
        	}
        	return args;
        };


        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_getDetailSearchArgu
         * 설      명	:  디테일 조회시 파라미터 셋팅
         * 입      력	:  상위 데이터셋
         * 반      환	:  Array
         **********************************************************************************/
        this.gfn_getDetailSearchArgu = function (valDs)
        {
        	var args = new Array();
        	var pgmid = nexacro.getApplication().gv_curWinKey;
        	var ds;
        	eval("ds = this.ds_" + pgmid + ";");
        	trace(ds.name);
        	// ds.filter("COLUMN_PK == 'PK' && DATASET == 'ds_head'");
        	// eval("ds.filter(\"COLUMN_PK == 'PK' && DATASET == '"+valDs.name+"'\");");
        	ds.filter("COLUMN_PK == 'PK' && DATASET == '" + valDs.name + "'");
        	for (var i = 0; i < ds.rowcount; i++)
        	{
        		var colnm = ds.getColumn(i, "COLUMN_NM");
        		value = valDs.getColumn(valDs.rowposition, colnm);
        		args.push(colnm.toUpperCase() + "='" + value + "' ");
        	}
        	ds.filter("");
        	return args;
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_divResize
         * 설      명	:  검색조건 div의 크기를 변경하는 함수
         * 입      력	:  idx : Static 갯수
         * 반      환	:
         **********************************************************************************/
        this.gfn_divResize = function (idx)
        {
        	var staidx = 0;
        	for (var i = 0; i < this.div_search.components.length; i++)
        	{
        		if (this.div_search.components[i] instanceof Static)
        		{
        			staidx++;
        		}
        	}
        	trace("gfn_divResize Static 갯수 : " + staidx);
        	idx = staidx;
        	trace("gfn_divResize Static 갯수 : " + idx);


        	// 2줄기준 height
        	var nHeight = 70;

        	if (this.div_search.height <= nHeight)
        	{
        		if (idx < 5)
        		{
        			nHeight = 0;
        		}
        		else if (idx < 9)
        		{
        			nHeight = 0;
        		}
        		else if (idx < 13)
        		{
        			nHeight = 104;
        		}
        		else
        		{
        			nHeight = 142;
        		}
        		// }else if(idx < 17){
        		// nHeight = 142;
        		// }else{
        		// nHeight = 180;
        		// }
        		if (nHeight != 0)
        		{
        			this.div_search.set_height(nHeight);
        			// this.div_cont.set_top(nexacro.toNumber(this.div_search.top)+nexacro.toNumber(this.div_search.height) + nHeight);
        			this.div_cont.set_top(nexacro.toNumber(this.div_search.top) + nexacro.toNumber(this.div_search.height) + 20);
        		}
        		else
        		{
        			this.div_search.set_height(70);
        		}

        		// for(var i=0; i<this.components.length; i++){
        		// if(this.components[i] instanceof Static || this.components[i] instanceof Button){
        		// if(this.components[i].name != "btn_sMove"){
        		// this.components[i].set_top(nexacro.toNumber(this.div_search.top)+nexacro.toNumber(this.div_search.height)+20);
        		// }
        		// }
        		// }
        		this.btn_sMove.set_top(nexacro.toNumber(this.div_search.top) + nexacro.toNumber(this.div_search.height));
        		this.btn_sMove.style.set_background("transparent URL('imagerc::search_close.png')");
        	}
        	else
        	{
        		this.div_search.set_height(nHeight);
        		// this.div_cont.set_top(nexacro.toNumber(this.div_search.top)+nexacro.toNumber(this.div_search.height) + nHeight);
        		this.div_cont.set_top(nexacro.toNumber(this.div_search.top) + nexacro.toNumber(this.div_search.height) + 20);
        		this.btn_sMove.set_top(nexacro.toNumber(this.div_search.top) + nexacro.toNumber(this.div_search.height));
        		this.btn_sMove.style.set_background("transparent URL('imagerc::search_open.png')");
        		// for(var i=0; i<this.components.length; i++){
        		// if(this.components[i] instanceof Static || this.components[i] instanceof Button){
        		// if(this.components[i].name != "btn_sMove"){
        		// this.components[i].set_top(nexacro.toNumber(this.div_search.top)+nexacro.toNumber(this.div_search.height)+20-nexacro.toNumber(this.components[i].height));
        		// }
        		// }
        		// }
        	}
        };


        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_divMove
         * 설      명	:  검색조건 div의 크기를 변경하는 함수
         * 입      력	:  e : 넥사크로 드래그이벤트
         * 반      환	:
         **********************************************************************************/
        this.gfn_divMove = function (e)
        {
        	this.gfn_divResize(0);
        	// var top = this.btn_sMove.top;
        	// this.btn_sMove.setOffsetTop(e.clientY);
        	// var nMoveValue = nexacro.toNumber(nexacro.toNumber(this.btn_sMove.top) - this.nMoveY);
        	// this.div_search.set_height(nexacro.toNumber(this.div_search.height) + nexacro.toNumber(nMoveValue));
        	// this.div_cont.set_top(nexacro.toNumber(this.div_cont.top) + nexacro.toNumber(nMoveValue));
        	// for(var i=0; i<this.components.length; i++){
        	// if(this.components[i] instanceof Static || this.components[i] instanceof Button){
        	// if(this.components[i].name != "btn_sMove"){
        	// this.components[i].set_top(nexacro.toNumber(this.components[i].top) + nexacro.toNumber(nMoveValue));
        	// }
        	// }
        	// }
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_gridMove
         * 설      명	:  그리드의 크기를 변경하는 함수
         * 입      력	:  e: 넥사크로 드래그 이벤트
         * 반      환	:
         **********************************************************************************/
        this.gfn_gridMove = function (e)
        {
        	trace(e.sourcereferenceobject);
        	var btn = e.sourcereferenceobject;
        	var nMoveValue;
        	var divtop = nexacro.toNumber(this.div_cont.top);
        	btn.setOffsetTop(e.clienty - divtop);

        	nMoveValue = nexacro.toNumber(nexacro.toNumber(btn.top) - this.nMoveY);

        	this.div_cont.grd_head.set_height(nexacro.toNumber(this.div_cont.grd_head.height) + nMoveValue);
        	this.div_cont.grd_detail.set_top(nexacro.toNumber(this.div_cont.grd_detail.top) + nMoveValue);

        	// head가 위에 있고 detail이 아래에 있는 기준
        	for (var i = 0; i < this.div_cont.components.length; i++)
        	{
        		if (this.div_cont.components[i] instanceof Static || this.div_cont.components[i] instanceof Button)
        		{
        			if (this.div_cont.components[i].name.indexOf("grd_detail") != -1)
        			{
        				this.div_cont.components[i].set_top(nexacro.toNumber(this.div_cont.components[i].top) + nMoveValue);
        			}
        		}
        	}
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_gridXresize
         * 설      명	:  그리드의 가로크기를 변경하는 함수
         * 입      력	:  e: 넥사크로 드래그 이벤트
         * 반      환	:
         **********************************************************************************/
        this.gfn_gridXresize = function (e)
        {
        	var nMoveValue;
        	var btn = e.sourcereferenceobject;
        	btn.setOffsetLeft(e.clientx);


        	var comp;
        	var comp2;
        	if (this.div_cont.grd_detail == null)
        	{
        		comp = this.div_cont.tab_head;
        	}
        	else
        	{
        		comp = this.div_cont.grd_detail;
        	}
        	if (this.div_cont.grd_detail2 != null)
        	{
        		comp2 = this.div_cont.grd_detail2;
        	}

        	nMoveValue = nexacro.toNumber(nexacro.toNumber(btn.left) - this.nMoveX);

        	this.div_cont.grd_head.set_width(nexacro.toNumber(this.div_cont.grd_head.width) + nMoveValue);
        	comp.set_left(nexacro.toNumber(comp.left) + nMoveValue);

        	if (this.div_cont.grd_detail2 != null)
        	{
        		comp2.set_left(nexacro.toNumber(comp2.left) + nMoveValue);
        	}

        	for (var i = 0; i < this.div_cont.components.length; i++)
        	{
        		if (this.div_cont.components[i] instanceof Static || this.div_cont.components[i] instanceof Button)
        		{
        			if (this.div_cont.components[i].name.indexOf("grd_detail") != -1)
        			{
        				this.div_cont.components[i].set_left(nexacro.toNumber(this.div_cont.components[i].left) + nMoveValue);
        			}
        		}
        	}
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_initDataset
         * 설      명	:  정합성검증,제약조건확인,기본값 코딩등 정보를 가지고 있는
         Dataset을 동적으로 생성한다.
         * 입      력	:  pkFlag - "1" or null
         1인경우 PK COLUMN EXPR 셋팅안함, 없을경우 셋팅
         * 반      환	:  Dataset
         **********************************************************************************/
        this.gfn_initDataset = function (pkFlag)
        {
        	// 크기 조절 버튼 제어
        	this.gfn_sDivBtnVisible();
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_initDiv
         * 설      명	:  div 초기화(검색필수값,검색 기본값)
         * 입      력	:
         * 반      환	:
         **********************************************************************************/
        this.gfn_initDiv = function ()
        {
        	var pgmid = nexacro.getApplication().gv_curWinKey;
        	var colnm;
        	var value;
        	// requirement
        	var sArray = new Array();

        	// default value
        	var dArray = new Array();
        	var vArray = new Array();

        	// input length limit
        	var lArray = new Array();
        	var sizeArray = new Array();
        	eval("var ds = this.ds_" + pgmid + ";");
        	for (var i = 0; i < ds.rowcount; i++)
        	{
        		if (ds.getColumn(i, "SEARCH_REQ_YN") != null)
        		{
        			colnm = ds.getColumn(i, "COLUMN_NM");
        			sArray.push(colnm);
        		}
        		if (ds.getColumn(i, "SEARCH_DEFAULT") != null)
        		{
        			colnm = ds.getColumn(i, "COLUMN_NM");
        			dArray.push(colnm);
        			vArray.push(ds.getColumn(i, "SEARCH_DEFAULT"));
        		}
        		if (ds.getColumn(i, "SEARCH_VALID_CHECK") == "Y")
        		{
        			colnm = ds.getColumn(i, "COLUMN_NM");
        			lArray.push(colnm);
        			sizeArray.push(ds.getColumn(i, "COLUMN_SIZE"));
        		}
        	}
        	for (var z = 0; z < this.div_search.components.length; z++)
        	{
        		if (this.div_search.components[z] instanceof Static)
        		{
        			continue;
        		}
        		else
        		{
        			var compnm = this.div_search.components[z].name;
        			compnm = compnm.substring(compnm.indexOf("_") + 1, compnm.length).toUpperCase();
        			if (nexacro.toNumber(sArray.length) != 0)
        			{
        				for (var q = 0; q < sArray.length; q++)
        				{
        					if (sArray[q] == compnm)
        					{
        						this.div_search.components[z].set_cssclass("essential");
        						break;
        					}
        				}
        			}
        			if (nexacro.toNumber(dArray.length) != 0)
        			{
        				for (var w = 0; w < dArray.length; w++)
        				{
        					if (dArray[w] == compnm)
        					{
        						var rtnVal = this.gfn_getGridDefaultValue(vArray[w]);
        						trace("search 기본값 : " + rtnVal);
        						this.div_search.components[z].set_value(rtnVal);
        						break;
        					}
        				}
        			}
        			if (nexacro.toNumber(lArray.length) != 0)
        			{
        				for (var s = 0; s < lArray.length; s++)
        				{
        					if (lArray[s] == compnm)
        					{
        						trace("search " + compnm + " 의 Limit : " + sizeArray[s]);
        						this.div_search.components[z].set_lengthunit("utf16");
        						this.div_search.components[z].set_maxlength(sizeArray[s]);
        						break;
        					}
        				}
        			}
        		}
        	}
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_initGrid
         * 설      명	:  Grid 초기화(저장 필수컬럼 헤드 cssclass -> CellEssential )
         * 입      력	:
         * 반      환	:
         **********************************************************************************/
        this.gfn_initGrid = function ()
        {
        	var pgmid = nexacro.getApplication().gv_curWinKey;
        	var ds;
        	var colnm;
        	var idx;
        	var req;
        	var grdtemp = "";
        	var grdArr = new Array();

        	eval("ds = this.ds_" + pgmid + ";");
        	for (var q = 0; q < ds.rowcount; q++)
        	{
        		if (q == 0)
        		{
        			eval("grdtemp = this.div_cont." + ds.getColumn(0, "GRID_ID") + ";");
        			grdArr.push(grdtemp);
        		}
        		else
        		{
        			if (ds.getColumn(q, "GRID_ID") != null && ds.getColumn(q, "GRID_ID") != "")
        			{
        				var gridId = ds.getColumn(q, "GRID_ID");
        				if (gridId.length > 20)
        				{
        					gridId = gridId.substring(gridId.lastIndexOf(".") + 1, gridId.length);
        					trace("탭그리드 : " + gridId);
        				}
        				if (gridId != grdtemp.name)
        				{
        					gridId = ds.getColumn(q, "GRID_ID");
        					trace("기존 그리드 : " + grdtemp.name + " 다른 그리드 : " + gridId);
        					if (gridId.indexOf("tab") != -1)
        					{
        						trace("tab존재");
        						eval("grdtemp = this.div_cont." + gridId + ";");
        					}
        					else
        					{
        						trace("tab없음");
        						eval("grdtemp = this.div_cont." + gridId + ";");
        					}
        					trace("grd : ?" + grdtemp.name);
        					grdArr.push(grdtemp);
        				}
        			}
        			else
        			{
        				continue;
        			}
        		}
        	}
        	// for logging
        	for (var y = 0; y < grdArr.length; y++)
        	{
        		trace("그리드 리스트 : " + grdArr[y].name);
        	}

        	for (var h = 0; h < grdArr.length; h++)
        	{
        		// setting cssclass
        		for (var z = 0; z < grdArr[h].getCellCount("Head"); z++)
        		{
        			colnm = grdArr[h].getCellProperty("Head", z, "text");
        			// idx = ds.findRow("COMMENTS",colnm);
        			var bindDs = grdArr[h].getBindDataset();
        			idx = ds.findRowExpr("DATASET == '" + bindDs.name + "' && COMMENTS == '" + colnm + "'");
        			req = ds.getColumn(idx, "GRID_REQ_YN");
        			if (req != null && req == "Y")
        			{
        				grdArr[h].setCellProperty("Head", z, "cssclass", "CellEssential");
        			}
        		}
        		// setting edit limit
        		for (var k = 0; k < ds.rowcount; k++)
        		{
        			if (ds.getColumn(k, "GRID_VALID_CHECK") != null && ds.getColumn(k, "GRID_VALID_CHECK") == "Y")
        			{
        				trace("GRID_VALID_CHECK -->" + ds.getColumn(k, "GRID_VALID_CHECK"));
        				var grid = ds.getColumn(k, "GRID_ID");
        				var column = ds.getColumn(k, "COLUMN_NM");
        				var size = ds.getColumn(k, "COLUMN_SIZE");
        				var pgrid = eval("this.div_cont." + grid + ";");
        				var cellcount = pgrid.getCellCount("Body");
        				trace("grid name : " + grid);
        				trace("column : " + column);
        				trace("size : " + size);
        				trace("pgrid : " + pgrid);
        				trace("cellcount : " + cellcount);
        				for (var i = 0; i < cellcount; i++)
        				{
        					var bindinfo = pgrid.getCellProperty("Body", i, "text");
        					bindinfo = bindinfo.substring(bindinfo.indexOf(":") + 1, bindinfo.length);
        					if (bindinfo == column)
        					{
        						trace("bindinfo == column" + bindinfo + " = " + column);
        						pgrid.setCellProperty("Body", i, "editlengthunit", "utf16");
        						pgrid.setCellProperty("Body", i, "editlimit", size);
        					}
        				}
        			}
        		}
        	}
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_copyGds
         * 설      명	:  Global Dataset 을 화면에 복사한뒤 필터를 적용한다
         * 입      력	:
         * 반      환	:
         **********************************************************************************/
        this.gfn_copyGds = function ()
        {
        	var gdsArr = new Array(nexacro.getApplication().gds_company, nexacro.getApplication().gds_plant, nexacro.getApplication().gds_biz, nexacro.getApplication().gds_dept, nexacro.getApplication().gds_whouse, nexacro.getApplication().gds_location, nexacro.getApplication().gds_pp_location);
        	var copyArr = new Array();
        	for (var i = 0; i < gdsArr.length; i++)
        	{
        		var tds;
        		var ds;
        		ds = new Dataset;
        		ds.name = "ds_temp" + gdsArr[i].name;
        		this.addChild(ds.name, ds);
        		tds = eval("this.ds_temp" + gdsArr[i].name + ";");
        		gdsArr[i].filter("COMPANY_CD == '" + nexacro.getApplication().gv_company + "'");
        		eval("tds.copyData(nexacro.getApplication()." + gdsArr[i].name + ",true)");
        	}
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_searchComboControl
         * 설      명	:  검색영역의 콤보들중 글로벌 데이터셋을 이용하는
         콤보에 권한별 필터를 설정한다.
         * 입      력	:
         * 반      환	:
         **********************************************************************************/
        this.gfn_searchComboControl = function ()
        {
        	trace("searchComboControl");
        	var flag = true;
        	var div = this.div_search;
        	// userauth 추후 협의.
        	for (var i = 0; i < div.components.length; i++)
        	{
        		if (div.components[i] instanceof Combo)
        		{
        			var ds = "";
        			trace("combo : " + div.components[i].name);
        			if (div.components[i].innerdataset.indexOf("gds") != -1)
        			{
        				trace("binddataset is type of gds : " + div.components[i].innerdataset);
        				if (div.components[i].innerdataset.indexOf("company") != -1)
        				{
        					ds = eval("this.ds_temp" + div.components[i].innerdataset + ";");
        					div.components[i].setInnerDataset(ds);
        					div.components[i].set_value(nexacro.getApplication().gv_company);
        					div.components[i].set_enable(false);
        					trace(div.components[i].name + "의 값 : " + div.components[i].value);
        				}
        				else if (div.components[i].innerdataset.indexOf("plant") != -1)
        				{
        					ds = eval("this.ds_temp" + div.components[i].innerdataset + ";");
        					div.components[i].setInnerDataset(ds);
        					if (nexacro.getApplication().gv_userauth == "00" || nexacro.getApplication().gv_userauth == "01" || nexacro.getApplication().gv_userauth == "02" || nexacro.getApplication().gv_userauth == "03") {
        					} else {
        						ds = eval("this.ds_tempgds_whouse;");
        						div.components[i].set_value(nexacro.getApplication().gv_plant);
        						ds.filter("PLANT_CD == '" + this.div_search.cmb_plant_cd.value + "'");
        						div.components[i].set_enable(false);
        					}
        					trace(div.components[i].name + "의 값 : " + div.components[i].value);
        				} else if (div.components[i].innerdataset.indexOf("biz") != -1) {
        					ds = eval("this.ds_temp" + div.components[i].innerdataset + ";");
        					div.components[i].setInnerDataset(ds);
        					if (nexacro.getApplication().gv_userauth == "00" || nexacro.getApplication().gv_userauth == "01" || nexacro.getApplication().gv_userauth == "02") {
        					} else {
        						div.components[i].set_value(nexacro.getApplication().gv_biz);
        						div.components[i].set_enable(false);
        					}
        					trace(div.components[i].name + "의 값 : " + div.components[i].value);
        				}
        				else if (div.components[i].innerdataset.indexOf("dept") != -1)
        				{
        					ds = eval("this.ds_temp" + div.components[i].innerdataset + ";");
        					div.components[i].setInnerDataset(ds);
        					if (nexacro.getApplication().gv_userauth == "00" || nexacro.getApplication().gv_userauth == "01" || nexacro.getApplication().gv_userauth == "02") {
        					} else {
        						div.components[i].set_value(nexacro.getApplication().gv_userdept);
        						div.components[i].set_enable(false);
        					}
        					trace(div.components[i].name + "의 값 : " + div.components[i].value);
        				}
        			}
        		}
        	}
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_setWhouse
         * 설      명	:  검색영역에서 공장 선택시 해당공장에 맵핑된 창고만 보여주게 필터.
         * 입      력	:
         * 반      환	:
         **********************************************************************************/
        this.gfn_setWhouse = function (obj, e)
        {
        	nexacro.getApplication().gds_whouse.filter("PLANT_CD == '" + this.div_search.cmb_plant_cd.value + "'");
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_setLocation
         * 설      명	:  검색영역에서 창고 선택시 해당 창고에 맵핑된 LOCATION만 보여주게 필터.
         * 입      력	:
         * 반      환	:
         **********************************************************************************/
        this.gfn_setLocation = function (obj, e)
        {
        	nexacro.getApplication().gds_location.filter("WHOUSE_CD == '" + this.div_search.cmb_whouse_cd.value + "'");
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_checkWhouse
         * 설      명	:  검색영역에서 LOCATION 선택시 창고콤보가 선택 안되었을 경우
         메세지 알림후 리턴.
         * 입      력	:
         * 반      환	:
         **********************************************************************************/
        this.gfn_checkWhouse = function (obj, e)
        {
        	if (this.div_search.cmb_whouse_cd.value == "" || this.div_search.cmb_whouse_cd.value == null)
        	{
        		alert("창고를 먼저 선택해야 합니다.");
        		return false;
        	}
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_checkPlant
         * 설      명	:  검색영역에서 창고 선택시 공장콤보가 선택 안되었을 경우
         메세지 알림후 리턴.
         * 입      력	:
         * 반      환	:
         **********************************************************************************/
        this.gfn_checkPlant = function (obj, e)
        {
        	if (this.div_search.cmb_plant_cd.value == "" || this.div_search.cmb_plant_cd.value == null)
        	{
        		alert("공장을 먼저 선택해야 합니다.");
        		return false;
        	}
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_setWhouseG
         * 설      명	:  그리드에서 공장 선택시 해당공장에 맵핑된 창고만 보여주게 필터.
         * 입      력	:
         * 반      환	:
         **********************************************************************************/
        this.gfn_setWhouseG = function (plantcd)
        {
        	this.ds_tempgds_whouse.filter("PLANT_CD == '" + plantcd + "'");
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_setLocationG
         * 설      명	:  그리드에서 창고 선택시 해당 창고에 맵핑된 LOCATION만 보여주게 필터.
         * 입      력	:
         * 반      환	:
         **********************************************************************************/
        this.gfn_setLocationG = function (whousecd)
        {
        	this.ds_tempgds_location.filter("WHOUSE_CD == '" + whousecd + "'");
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_setPPLocationG
         * 설      명	:  그리드에서 창고 선택시 해당 창고에 맵핑된 생산 LOCATION만 보여주게 필터.
         * 입      력	:
         * 반      환	:
         **********************************************************************************/
        this.gfn_setPPLocationG = function (whousecd)
        {
        	this.ds_tempgds_pp_location.filter("WHOUSE_CD == '" + whousecd + "'");
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_rowDefaultValue
         * 설      명	:  행추가시 화면마다 기본이 되는 값을 세팅
         * 입      력	:  type : One-grid 형태인지 Head-Detail 형태인지 판단하는 인자
         * 반      환	:  New Row
         **********************************************************************************/
        this.gfn_rowDefaultValue = function (flag)
        {
        	var pgmid = nexacro.getApplication().gv_curWinKey;
        	var ds;
        	eval("ds = this.ds_" + pgmid + ";");
        	trace(ds.name);
        	var idx;
        	var colnm;
        	var value;
        	var rtnVal;

        	idx = this.fv_currentDS.addRow();
        	for (var i = 0; i < ds.rowcount; i++)
        	{
        		if (ds.getColumn(i, "GRID_DEFAULT") != null && ds.getColumn(i, "GRID_DEFAULT") != "")
        		{
        			if (ds.getColumn(i, "DATASET").toUpperCase() == this.fv_currentDS.name.toUpperCase())
        			{
        				colnm = ds.getColumn(i, "COLUMN_NM");
        				value = ds.getColumn(i, "GRID_DEFAULT");
        				idx = nexacro.toNumber(idx);
        				rtnVal = this.gfn_getGridDefaultValue(value);
        				var bool = this.fv_currentDS.setColumn(idx, colnm, rtnVal);
        				trace("행추가 기본값 셋팅 성공? " + bool);
        				if (flag != null && flag == true)
        				{
        					this.gfn_setPkColumnEdit(idx);
        				}
        			}
        		}
        	}

        	return idx;
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_getGridDefaultValue
         * 설      명	:  행추가시 그리드 기본값 DB데이터를 실제 value로 바꿔서 리턴.
         * 입      력	:  value : DB에 정의한 default value들 (GV_~~~, SEARCH_~~ 등)
         * 반      환	:  value
         **********************************************************************************/
        this.gfn_getGridDefaultValue = function (value)
        {
        	var pgmid = nexacro.getApplication().gv_curWinKey;
        	eval("var ds = this.ds_" + pgmid + ";");
        	var rtnVal;
        	var temp;

        	if (value.indexOf("GV") != -1)
        	{
        		temp = value.substring(value.indexOf("_") + 1, value.length).toLowerCase();
        		eval("rtnVal = nexacro.getApplication().gv_" + temp + ";");
        	}
        	else if (value.indexOf("SEARCH") != -1)
        	{
        		temp = value.substring(value.indexOf("_") + 1, value.length).toLowerCase();
        		eval("var idx = this.ds_" + pgmid + ".findRow(\"GRID_DEFAULT\",value);");
        		eval("var distype = this.ds_" + pgmid + ".getColumn(idx,\"SEARCH_DISPLAY_TYPE\");");
        		trace("Search Component Type : " + distype);
        		if (distype == "COMBO")
        		{
        			eval("rtnVal = this.div_search.cmb_" + temp + ".value;");
        		}
        		else if (distype == "POPUP" || distype == "EDIT")
        		{
        			eval("rtnVal = this.div_search.edt_" + temp + ".value;");
        		}
        		else if (distype == "RADIO")
        		{
        			eval("rtnVal = this.div_search.rdo_" + temp + ".value;");
        		}
        		else if (distype == "CALENDAR")
        		{
        			eval("rtnVal = this.div_search.cal_" + temp + ".value;");
        		}
        		else if (distype == "CHECKBOX")
        		{
        			eval("rtnVal = this.div_search.chk_" + temp + ".value;");
        		}
        		if (rtnVal == null || rtnVal == "")
        		{
        			rtnVal = "";
        		}
        	}
        	else if (value.indexOf("TODAY") != -1)
        	{
        		var objData = new Date();
        		var year = objData.getFullYear();
        		var month = objData.getMonth() + 1;
        		month = month + "";
        		if (month.length == 1)
        		{
        			month = "0" + month;
        		}
        		var day = objData.getDate();
        		rtnVal = year + "" + month + "" + day;
        	}
        	else if (value.indexOf("ds_") != -1)
        	{
        		temp = value.substring(value.indexOf("/") + 1, value.length);
        		dsname = value.substring(0, value.indexOf("/"));
        		trace("값가져오는 DS : " + dsname);
        		eval("rtnVal = this." + dsname + ".getColumn(this." + dsname + ".rowposition,temp);");
        	}
        	else
        	{
        		rtnVal = value;
        	}
        	trace("추가시 기본값 : " + rtnVal);
        	return rtnVal;
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_gridFocused
         * 설      명	:  그리드포커스시 폼변수fv_currentDS와 그리드 Border Color 변경
         * 입      력	:  obj : 선택한 그리드
         * 반      환	:
         **********************************************************************************/
        this.gfn_gridFocused = function (obj) {

        	//이전 그리드 border 검은색 적용
        //	this.fv_currentGrid.set_border("3px solid #808080ff,1px solid #808080ff,1px solid #808080ff,1px solid #808080ff");

        //  20201127 이동관 수정 인터넷익스플로러 ff 투명도 조절 적용 안됨.
        	this.fv_currentGrid.set_border("3px solid #808080,1px solid #808080,1px solid #808080,1px solid #808080");
        	//전역변수 초기화
        	this.fv_currentDS = obj.getBindDataset();
        	this.fv_currentGrid = obj;

        	//현재그리드 border 파란색 적용 (2021-05-18 수정)
        	obj.set_border("3px solid #6083c9,1px solid #6083c9,1px solid #6083c9,1px solid #6083c9");
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_cBtnEnable
         * 설      명	:  조건에 따라 공통버튼(초기화, 조회, 등)을 활성화/비활성화 시킨다
         * 입      력	:  0과 1로 이루어진 7자리 문자열,(0 --> disable 1--> enable)
         * 반      환	:
         **********************************************************************************/
        this.gfn_cBtnEnable = function (val)
        {
        	var con = val.split("");
        	var btnArr = new Array();

        	for (var i = 0; i < this.parent.div_head.components.length; i++)
        	{
        		if (this.parent.div_head.components[i] instanceof Button)
        		{
        			btnArr.push(this.parent.div_head.components[i].name);
        		}
        	}
        	btnArr.reverse();
        	trace(btnArr);
        	for (var i = 0; i < con.length; i++)
        	{
        		eval("this.parent.div_head." + btnArr[i] + ".set_enable(con[i]);");
        	}
        };


        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_chkBeforeSave
         * 설      명	:  저장전 확인해야할 조건들(중복,Null값)을 확인한뒤 true / false 리턴
         * 입      력	:  대상 Grid
         * 반      환	:  true / false
         **********************************************************************************/
        this.gfn_chkBeforeSave = function (chkgrid, isKey)
        {
        	this.fv_flag = false;

        	var grid = chkgrid;
        	var ds = grid.getBindDataset();
        	this.fv_currentGrid = grid;
        	this.fv_currentDS = ds;

        	// 삭제한후 상태1인 레코드만 존재할때 아래 로직 없이 바로 true 리턴
        	for (var k = 0; k < ds.rowcount; k++)
        	{
        		var seq = 0;
        		if (ds.getRowType(k) == "2" || ds.getRowType(k) == "4")
        		{
        			seq++;
        			break;
        		}
        	}
        	if (seq == 0)
        	{
        		return true;
        	}
        	// Null 컬럼 Null 값 체크
        	var cidx = this.gfn_colNullchk(ds, grid);
        	trace("널쳌? : " + cidx);
        	// Null인 컬럼이 없으면
        	if (cidx == true)
        	{
        		// Calendar 포맷 체크
        		var bool = this.gfn_dateFormatchk(grid, ds);
        		if (bool == true)
        		{
        			// 넥사크로 단에서 그리드 내부 중복되는 행 있는지 확인
        			var dsbool = this.gfn_chkDsdup(ds, grid);
        			if (this.fv_flag == true)
        			{
        				this.fv_flag = false;
        				return false;
        			}
        			// DB데이터와 중복되는 행 있는지 확인
        			// ds_dup --> 모든 화면에 필요한 기본 데이터셋, 컬럼은 COL_1, COL_2 2개만 있으면 됨
        			if (isKey == "key")
        			{
        				this.fv_flag = true;
        			}
        			else
        			{
        				this.gfn_dupChk(ds, this.ds_dup);
        			}
        			if (dsbool == true && this.fv_flag == true)
        			{
        				this.fv_flag = false;
        				return true;
        			}
        			else
        			{
        				return false;
        			}
        		}
        		else
        		{
        			Sct.alert(this, "000092", "");
        			return false;
        		}
        	}
        	else
        	{
        		return false;
        	}
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_getScomCode
         * 설      명	:  공통코드 가져오는 공통 트랜잭션
         * 입      력	:  dsName : 데이터셋.
         * 반      환	:  true / false
         **********************************************************************************/
        this.gfn_getScomCode = function (dsName)
        {
        	var svcId = "getComCode";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = dsName.name + "=output1";
        	var argument = "method=getList "
        		 + "sqlId=" + dsName.name;
        	var callbackFunc = "";
        	this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_openComPopup
         * 설      명	:  공통팝업,공통코드팝업 오픈함수.
         * 입      력	:  pData : 키 데이터(공통팝업의 경우 테이블명,
         공통코드팝업의 경우 코드그룹 명.

         pCol : 그리드에서 사용하는경우 "화면컬럼"="팝업컬럼" 식의
         데이터가져올 컬럼명 명시.
         ex)화면의 컬럼 Col1,Col2 에 공통팝업컬럼 ITEM_CD,ITEM_NM
         을 들고오려면 "Col1=ITEM_CD Col2=ITEMNM" 식으로 작성.
         구분자는 스페이스.
         *공통코드 팝업의 경우 "Col1=CMCD Col2=CMNM" 식.

         type : 공통팝업인지 공통코드팝업인지 구분변수.
         1은 공통코드팝업 2는 공통팝업이다.

         compNm : 그리드에서 사용하지않고 검색영역에서 사용할경우
         데이터를 가져올 검색영역 컴포넌트 아이디 작성.
         this를 제외한 컴포넌트 ID + 팝업에서 가져올 컬럼명으로 작성.
         2번째 파라미터 pCol은 "" 공백으로 처리.
         그리드에서 사용할경우 파라미터에서 제외해서 사용.
         ex) edt_w_center_nm에 ITEM_CD를 가져올 경우
         "edt_w_center_nm=ITEM_CD" 식으로 작성.
         this.gfn_openComPopup("BSNAME_CD","","2","edt_w_center_nm=ITEM_CD");
         * 반      환	:  Data
         **********************************************************************************/
        this.gfn_openComPopup = function (pData, pCol, type, compNm)
        {
        	var param;
        	if (compNm == null)
        	{
        		param = {
        			pForm : this,
        			pdata : pData,
        			pcol : pCol
        		};
        	}
        	else
        	{
        		param = {
        			pForm : this,
        			pdata : pData,
        			compnm : compNm
        		};
        	}
        	if (type == "1")
        	{
        		Sct.popup(this, "공통코드팝업", 393, 524, "공통코드", param, "CM_POPUP::CM_CODE_POPUP.xfdl", "");
        	}
        	else if (type == "2")
        	{
        		Sct.popup(this, "공통팝업", 815, 600, "", param, "CM_POPUP::CM_COMMON.xfdl", "");
        	}
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  fn_openDebugPopup
         * 설      명	:  디버깅용 모달리스팝업 오픈 함수 화면 폼 onkeyup 이벤트에
         fn_openDebugPopup입력한뒤 Alt+F12로 호출.
         * 입      력	:
         * 반      환	:
         **********************************************************************************/
        this.fn_openDebugPopup = function (obj, e)
        {
        	if (e.altkey && e.keycode == "123")
        	{
        		param = {
        			pForm : this,
        			isModal : false
        		};
        		Sct.popup(this, "DEBUG", 393, 524, "☆★", param, "CM_POP::CM_TABLET_DEBUG_POPUP.xfdl", "");
        		//Sct.modeless(this, "DEBUG", 393, 524, "DEBUG", param, "CM_POP::CM_DEBUG_POPUP.xfdl");
        	}
        	else if (e.altkey && e.keycode == "122")
        	{
        		param = {
        			pForm : this,
        			isModal : true
        		};
        		Sct.popup(this, "DEBUG", 393, 524, "DEBUG", param, "CM_POP::CM_DEBUG_POPUP.xfdl", "");
        	}
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  fn_setCalFromTo
         * 설      명	:  From - to 개념의 달력 오픈함수.
         * 입      력	:  fromCal : From 달력
         toCal : To 달력
         * 반      환	:
         **********************************************************************************/
        this.gfn_setCalFromTo = function (fromCal, toCal)
        {
        	if (fromCal.value != null)
        	{
        		if (toCal.value == null)
        		{
        			toCal.dropdown();
        		}
        	}
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  fn_calValueChk
         * 설      명	:  From - to 개념의 달력 오픈함수.
         * 입      력	:  fromCal : From 달력
         toCal : To 달력
         * 반      환	:
         **********************************************************************************/
        this.gfn_calValueChk = function (toCal, fromCal)
        {
        	if (fromCal.value != null && toCal.value != null)
        	{
        		if (fromCal.value > toCal.value)
        		{
        			return false;
        		}
        		else
        		{
        			return true;
        		}
        	}
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_onvalChgGetCode
         * 설      명	:  데이터셋의 onvaluechanged 이벤트에서 공통코드와 코드명을 조회하는 함수.
         * 입      력	:  tnm : 공통코드로 들고올 테이블명
         val : onvaluechanged의 Event info
         codecol : "화면의코드들어갈컬럼명=테이블코드컬럼명" 식의 코드 파라미터
         namecol : "화면의코드명들어갈컬럼명=테이블코드명컬럼명" 식의 코드명 파라미터
         ex)T_CM_ITEMMASTER의 ITEM_CD와 ITEM_NM을 가져오려고 하고,
         화면에 매칭되는 컬럼이 W_CENTER_CD, W_CENTER_NM 일때
         this.gfn_oncharGetCode("T_CM_ITEMMASTER",e.posttext,"W_CENTER_CD=ITEM_CD","W_CENTER_NM=ITEM_NM")
         식으로 파라미터를 보내면 된다.
         * 반      환	:
         **********************************************************************************/
        this.gfn_onvalChgGetCode = function (tnm, val, codecol, namecol)
        {
        	if (val.newvalue != null && val.newvalue != "")
        	{
        		val = val.newvalue;
        		this.gfn_setSelchgEvent(this.fv_currentDS);
        		var params = "/commonController.do";
        		var inDatasets = "";
        		// var outDatasets = this.fv_currentDS.name+"=output1";
        		var outDatasets = "ds_dup=output1";

        		var gcodecol = codecol.substring(0, codecol.indexOf("="));
        		var tcodecol = codecol.substring(codecol.indexOf("=") + 1, codecol.length);
        		trace("그리드 코드컬럼 : " + gcodecol);
        		trace("테이블 코드컬럼 : " + tcodecol);

        		var gnamecol = namecol.substring(0, namecol.indexOf("="));
        		var tnamecol = namecol.substring(namecol.indexOf("=") + 1, namecol.length);
        		var svcId = gcodecol + "," + gnamecol;
        		trace("그리드 코드명컬럼 : " + gnamecol);
        		trace("테이블 코드명컬럼 : " + tnamecol);
        		trace("값 : " + val);
        		var argument = "method=cursor "
        			 + "sqlId=getOncharCode "
        			 + "VALUE=" + val + " "
        			 + "TNM=" + tnm + " "
        			 + "TCODECOL=" + tcodecol + " "
        			 + "TNAMECOL=" + tnamecol + " ";
        		var callbackFunc = "gfn_GetCodeCallback";
        		this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        	}
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_GetCodeCallback
         * 설      명	:  gfn_oncharGetCode 콜백함수. 화면 기본 데이터셋 ds_dup 활용하여 셋팅
         * 입      력	:  콜백 파라미터 3가지
         * 반      환	:
         **********************************************************************************/
        this.gfn_GetCodeCallback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode != -1)
        	{
        		this.gfn_setSelchgEvent(this.fv_currentDS);
        		var codecol = strSvcID.substring(0, strSvcID.indexOf(","));
        		var namecol = strSvcID.substring(strSvcID.indexOf(",") + 1, strSvcID.length);
        		this.fv_currentDS.setColumn(this.fv_currentDS.rowposition, codecol, this.ds_dup.getColumn(0, "COL_1"));
        		this.fv_currentDS.setColumn(this.fv_currentDS.rowposition, namecol, this.ds_dup.getColumn(0, "COL_2"));
        		this.ds_dup.clearData();
        	}
        	else
        	{
        		this.gfn_setSelchgEvent(this.fv_currentDS);
        		alert("공통코드조회 오류 : " + strErrorMsg);
        	}
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_getCode
         * 설      명	:  값에 따라 코드 또는 코드명을 리턴하는 함수
         * 입      력	:  tnm : 테이블 명
         val : 값(obj.value)
         codecol : 테이블의 코드 컬럼명
         namecol : 테이블의 코드명 컬럼명
         isCode  : 해당 Form에서 코드 컴포넌트와 컬럼 컴포넌트
         모두 동일한 함수로 실행하기에, val 의 값이 코드값
         인지 코드명 값인지 구분하는 파라미터. 코드 일경우
         "Y" 코드명일 경우 "N" 으로 작성
         * 반      환	:
         **********************************************************************************/
        this.gfn_getCode = function (tnm, val, codecol, namecol, isCode, fullPath, popurl, isDs)
        {
        	if (val != null && val != "")
        	{
        		var svc;
        		var argument = "VALUE='" + val + "' "
        			 + "TNM=" + tnm + " "
        			 + "TCODECOL=" + codecol + " "
        			 + "TNAMECOL=" + namecol + " "
        			 + "isCode=" + isCode + " ";
        		if (isDs != null)
        		{
        			svc = popurl + "@";
        		}
        		else
        		{
        			svc = fullPath + "!" + popurl;
        		}
        		this.gfn_transaction(this, svc, "/codeController.do", "", "", argument, "gfn_codeback");
        	}
        };

        this.gfn_codeback = function (a, b, c)
        {
        	// $X$# --> 해당 코드,명 으로 조회했을때 데이터 없음
        	// $2$# --> 해당 코드,명 으로 2개이상 데이터 존재함
        	// $ --> 1개만 존재
        	// @ --> 그리드에서 조회시
        	if (b != -1)
        	{
        		var fullPath;
        		var url;

        		if (a.indexOf("@") != -1)
        		{
        			url = a.substring(0, a.length - 1);

        			if (this.outvar.indexOf("$X$#") != -1)
        			{
        				var col = this.outvar.substring(this.outvar.indexOf("#") + 1, this.outvar.length);
        				this.fv_currentDS.removeEventHandler("oncolumnchanged", this.fn_oncolChg, this);
        				this.fv_currentDS.setColumn(this.fv_currentDS.rowposition, col, "");
        				this.fv_currentDS.addEventHandler("oncolumnchanged", this.fn_oncolChg, this);
        			}
        			else if (this.outvar.indexOf("$2$#") != -1)
        			{
        				var col = this.outvar.substring(this.outvar.indexOf("#") + 1, this.outvar.indexOf("/"));
        				var searchComp = this.outvar.substring(this.outvar.indexOf("/") + 1, this.outvar.indexOf("@"));
        				var val = this.outvar.substring(this.outvar.indexOf("@") + 1, this.outvar.length);
        				trace("초기화 컬럼 : " + col);
        				trace("검색 컬럼 : " + searchComp);
        				this.fv_currentDS.setColumn(this.fv_currentDS.rowposition, col, "");
        				url = "\"" + url;
        				url = url.replace("$BP", val + "/" + searchComp);
        				trace(url);
        				this.fv_currentDS.removeEventHandler("oncolumnchanged", this.fn_oncolChg, this);
        				eval("this.gfn_openPopup(" + url + ");");
        			}
        			else
        			{
        				trace(this.outvar);
        				var val = this.outvar.substring(0, this.outvar.indexOf("$"));
        				var col = this.outvar.substring(this.outvar.indexOf("$") + 1, this.outvar.length);
        				trace(col);
        				this.fv_currentDS.removeEventHandler("oncolumnchanged", this.fn_oncolChg, this);
        				this.fv_currentDS.setColumn(this.fv_currentDS.rowposition, col, val);
        				this.fv_currentDS.addEventHandler("oncolumnchanged", this.fn_oncolChg, this);
        			}
        		}
        		else
        		{
        			fullPath = a.substring(0, a.indexOf("!"));
        			url = a.substring(a.indexOf("!") + 1, a.length);
        			// trace("컴포넌트 경로 : "+fullPath);
        			// trace("URL : "+url);


        			if (this.outvar.indexOf("$X$#") != -1)
        			{
        				var col = this.outvar.substring(this.outvar.indexOf("#") + 1, this.outvar.length);
        				// eval("this.div_search.edt_"+col.toLowerCase()+".set_value(\"\");");
        				eval(fullPath + ".edt_" + col.toLowerCase() + ".set_value(\"\");");
        			}
        			else if (this.outvar.indexOf("$2$#") != -1)
        			{
        				// var col = this.outvar.substring(this.outvar.indexOf("#")+1,this.outvar.indexOf("/"));
        				// //eval("this.div_search.edt_"+col.toLowerCase()+".set_value(\"\");");
        				// eval(fullPath+".edt_"+col.toLowerCase()+".set_value(\"\");");
        				// url = "\""+url;
        				// url = url.replace("$BP",this.outvar.substring(this.outvar.indexOf("/")+1, this.outvar.length ) + "/" + col);
        				// trace(url);
        				// eval("this.gfn_openPopup("+url+");");
        				var col = this.outvar.substring(this.outvar.indexOf("#") + 1, this.outvar.indexOf("/"));
        				var searchComp = this.outvar.substring(this.outvar.indexOf("/") + 1, this.outvar.indexOf("@"));
        				var val = this.outvar.substring(this.outvar.indexOf("@") + 1, this.outvar.length);
        				// trace("초기화 컬럼 : "+col);
        				// trace("검색 컬럼 : "+searchComp);
        				// this.fv_currentDS.setColumn(this.fv_currentDS.rowposition, col, "");
        				url = "\"" + url;
        				url = url.replace("$BP", val + "/" + searchComp);
        				// trace(url);
        				this.fv_currentDS.removeEventHandler("oncolumnchanged", this.fn_oncolChg, this);
        				eval("this.gfn_openPopup(" + url + ");");
        			}
        			else
        			{
        				var val = this.outvar.substring(0, this.outvar.indexOf("$"));
        				var col = this.outvar.substring(this.outvar.indexOf("$") + 1, this.outvar.length);
        				// eval("this.div_search.edt_"+col.toLowerCase()+".set_value(\""+val+"\");");
        				eval(fullPath + ".edt_" + col.toLowerCase() + ".set_value(\"" + val + "\");");
        			}
        		}
        	}
        	else
        	{
        		alert("ERROR :" + c);
        	}

        	this.outvar = "";
        };

        this.gfn_addDsColEvenet = function (strID, variant, callBackFunc)
        {
        	this.fv_currentDS.addEventHandler("oncolumnchanged", this.fn_oncolChg, this);
        	if (variant != null && variant != "")
        	{
        		eval("this." + variant + "();");
        	}
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_getFullPath
         * 설      명	:  파라미터로 온 컴포넌트의 전체 경로와 컴포넌트 명을 반환한다
         3단계 까지 반환 (gfn_getCode 로직에 사용)
         * 입      력	:  obj : 컴포넌트
         * 반      환	:
         **********************************************************************************/
        this.gfn_getFullPath = function (obj)
        {
        	var full;
        	var objName = obj.name.substring(4, obj.name.length);
        	// trace("명 : "+objName);
        	if (obj.parent != null && obj.parent.name.indexOf("div_form") == -1)
        	{
        		if (obj.parent.parent != null && obj.parent.parent.name.indexOf("div_form") == -1)
        		{
        			if (obj.parent.parent.parent != null && obj.parent.parent.parent.name.indexOf("div_form") == -1)
        			{
        				full = "this." + obj.parent.parent.parent.name + "." + obj.parent.parent.name + "." + obj.parent.name + "." + obj.name;
        			}
        			else
        			{
        				full = "this." + obj.parent.parent.name + "." + obj.parent.name + "." + obj.name;
        			}
        		}
        		else
        		{
        			full = "this." + obj.parent.name + "." + obj.name;
        		}
        	}
        	else
        	{
        		full = "this." + obj.name;
        	}
        	// alert(full);
        	// alert(objName);
        	// return full+"/"+objName;
        	return full.replace("." + obj.name, "");
        };


        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_openPopup
         * 설      명	:  팝업 오픈함수.
         * 입      력	:  popupUrl  : 오픈할 팝업 경로
         pCol      : 그리드에서 사용시 부모창컬럼=팝업창컬럼 식의 컬럼 정의 파라미터 구분자는 스페이스
         compNm    : 검색영역에서 사용할경우 컴포넌트아이디=팝업창컬럼명 식의 파라미터
         구분자는 스페이스.
         dicompNm  : 그리드,검색영역이 아닌 컴포넌트에 값전달할 경우 사용
         컴포넌트 접근경로 사용 this.div01.edt01=ITEM_CD
         popupName : 팝업창 타이틀 이름.
         pparam    : 부모창에서 자식창으로 전달할 파라미터,
         ex)데이터셋을 넘기고 싶으면 this.ds_dataset 식으로 넘김
         callbackFunc : 콜백사용시 콜백함수 이름.
         * 반      환	:  Data
         **********************************************************************************/
        this.gfn_openPopup = function (popupUrl, pCol, compNm, dicompNm, popupName, pparam, callbackFunc, codeP)
        {
        	var param;
        	var delegateCallBack = "";
        	if (this.fv_currentDS != null)
        	{
        		if (this.fv_currentDS.findEventHandler("oncolumnchanged", this.fn_oncolChg, this) != -1)
        		{
        			this.fv_currentDS.removeEventHandler("oncolumnchanged", this.fn_oncolChg, this);
        			delegateCallBack = callbackFunc;
        			callbackFunc = "gfn_addDsColEvenet";
        		}
        	}
        	if (codeP == null)
        	{
        		codeP = "";
        	}
        	if (pCol != null && pCol != "")
        	{
        		// trace("setData to Grid");
        		if (pparam != null && pparam != "")
        		{
        			param = {
        				pForm : this,
        				pcol : pCol,
        				pParam : pparam,
        				code : codeP,
        				dCallBack : delegateCallBack
        			};
        		}
        		else
        		{
        			param = {
        				pForm : this,
        				pcol : pCol,
        				code : codeP,
        				dCallBack : delegateCallBack
        			};
        		}
        	}
        	else if (compNm != null && compNm != "")
        	{
        		// trace("setData to SearchDiv");
        		if (pparam != null && pparam != "")
        		{
        			param = {
        				pForm : this,
        				compnm : compNm,
        				pParam : pparam,
        				code : codeP,
        				dCallBack : delegateCallBack
        			};
        		}
        		else
        		{
        			param = {
        				pForm : this,
        				compnm : compNm,
        				code : codeP,
        				dCallBack : delegateCallBack
        			};
        		}
        	}
        	else if (dicompNm != null && dicompNm != "")
        	{
        		// trace("setData to UserdefineComponent");
        		if (pparam != null && pparam != "")
        		{
        			param = {
        				pForm : this,
        				dicompnm : dicompNm,
        				pParam : pparam,
        				code : codeP,
        				dCallBack : delegateCallBack
        			};
        		}
        		else
        		{
        			param = {
        				pForm : this,
        				dicompnm : dicompNm,
        				code : codeP,
        				dCallBack : delegateCallBack
        			};
        		}
        	}
        	// if(popupName == null){popupName = "조회";}
        	//popupName = popupUrl;
        	Sct.popup(this, popupName, 815, 700, popupName, param, popupUrl, callbackFunc);
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_findCodeDs
         * 설      명	:  화면의 코드 데이터를 담는 데이터셋을 배열에 담아 반환
         * 입      력	:
         * 반      환	:  Array
         **********************************************************************************/
        this.gfn_findCodeDs = function ()
        {
        	var comCodeDs = new Array();
        	for (var i = 0; i < this.objects.length; i++)
        	{
        		if (this.objects[i].getColID(0) == "CMCD" || this.objects[i].getColID(1) == "CMNM")
        		{
        			comCodeDs.push(this.objects[i]);
        		}
        	}
        	return comCodeDs;
        };

        /**********************************************************************************
         * 작  성  자  :  배영걸
         * 함  수  명	:  gfn_timeChange
         * 설      명	:  시간입력시 validation 체크.
         * 입      력	:  대상 maskEdit
         * 반      환	:
         **********************************************************************************/
        this.gfn_timeChange = function (obj, e)
        {
        	var h1 = nexacro.toNumber(e.posttext.substr(0, 2));

        	var m1 = nexacro.toNumber(e.posttext.substr(3, 2));

        	var sl = nexacro.toNumber(e.posttext.substr(6, 2));

        	// 최대 24 시
        	if (h1 > 24)
        	{
        		return false;
        	}
        	// 최대 59분
        	if (m1 > 59)
        	{
        		return false;
        	}

        	// 최대 59초
        	if (sl > 59)
        	{
        		return false;
        	}
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_getTimeDiff
         * 설      명	:  두 시분간 차이 계산
         * 입      력	:  시작시분(0320,1520), 끝시분(1230,1530)
         String으로 오전오후 구분하여 0~24 까지의 시간 + 분 으로 HHMM 형태로 입력
         * 반      환	:
         **********************************************************************************/
        this.gfn_getTimeDiff = function (start, end)
        {
        	var startmin = 0;
        	var endmin = 0;
        	var twelve = false;
        	var min = 0;

        	if (start.substring(0, 1) == "0" && end.substring(0, 1) != "0")
        	{
        		twelve = true;
        		start = nexacro.toNumber(start.substring(0, 2)) + 12 + start.substring(2, start.length);
        	}
        	else if (end.substring(0, 1) == "0" && start.substring(0, 1) != "0")
        	{
        		twelve = true;
        		end = nexacro.toNumber(end.substring(0, 2)) + 12 + end.substring(2, end.length);
        	}

        	var diff = Math.abs(nexacro.toNumber(start.substring(0, 2)) - nexacro.toNumber(end.substring(0, 2)));

        	if (diff != 1)
        	{
        		min += (diff - 1) * 60;
        		min += (60 - nexacro.toNumber(start.substring(2, start, length)) + nexacro.toNumber(end.substring(2, end.length)));
        	}
        	else if (diff == 1)
        	{
        		min += (60 - nexacro.toNumber(start.substring(2, start, length)) + nexacro.toNumber(end.substring(2, end.length)));
        	}

        	if (twelve == true)
        	{
        		min += 720;
        	}

        	// trace("시차 : "+diff);
        	// trace("분차이 : "+min);
        	return min;
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_setPkColumnEdit
         * 설      명	:  추가 상태일때만 PK컬럼을 Edit 가능하게 하는 함수
         * 입      력	:  추가된 행의 Row index (gfn_rowDefaultValue)
         * 반      환	:
         **********************************************************************************/
        this.gfn_setPkColumnEdit = function ()
        {
        	// TODO
        };

        /**********************************************************************************
         * 작  성  자  :  배영걸
         * 함  수  명	:  gfn_getExchangeRate
         * 설      명	:  통화, 일자를 입력받아 환율 return
         * 입      력	:  currencyCd : 통화코드, date : 일자
         * 반      환	:  환율
         **********************************************************************************/
        this.gfn_getExchangeRate = function (currencyCd, date)
        {
        	if (Sct.Util.isEmpty(currencyCd))
        	{
        		return null;
        	}

        	// 로그인한 유저의 COMPANY_CD로 기준통화 가져오기
        	var companyCd = nexacro.getApplication().gds_userInfo.getColumn(0, "COMPANY_CD");
        	var companyRow = nexacro.getApplication().gds_company.findRow("COMPANY_CD", companyCd);
        	var sCurrencyCd = nexacro.getApplication().gds_company.getColumn(companyRow, "CURRENCY_CD");

        	if (currencyCd == sCurrencyCd)
        	{
        		// 기준통화이면 환율은 1
        		return 1;
        	}
        	else
        	{
        		// 거래통화(외화)일경우
        		if (Sct.Util.isEmpty(date))
        		{
        			return null;
        		}

        		// return받을 Dataset 초기화
        		var dsRate = new Dataset;
        		dsRate.name = "ds_exchange_rate";
        		this.addChild(dsRate.name, dsRate);
        		dsRate.addColumn("CURRENCY_RATE", "string", 256);


        		var svcId = "searchExchangeRate";
        		var params = "/commonController.do";
        		var inDatasets = "";
        		var outDatasets = "ds_exchange_rate=output1";
        		var argument = "method=getList "
        			 + "sqlId=getExchangeRate ";
        		var callbackFunc = "";

        		argument += "CURRENCY_CD=" + currencyCd + " ";
        		argument += "DATE=" + date + " ";
        		this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, '', false);

        		var exchangeRate = dsRate.getColumn(0, "CURRENCY_RATE");

        		// 데이터셋 제거
        		var objRemove = this.removeChild(dsRate.name);
        		objRemove.destroy();
        		objRemove = null;

        		if (Sct.Util.isEmpty(exchangeRate))
        		{
        			// 환율테이블에 데이터가 없을경우(조회된값이 존재하지않을경우)
        			Sct.alert(this, "000194"); //환율정보가 존재하지 않습니다.
        			return null;
        		}

        		return exchangeRate;
        	}
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_getBindDs
         * 설      명	:  Edit, Calendar, Combo, CheckBox, MaskEdit, TextArea 컴포넌트에
         바인딩 된 데이터셋을 찾아 반환한다.
         * 입      력	:  Array or not
         * 반      환	:  Array
         **********************************************************************************/
        this.gfn_getBindDs = function (param)
        {
        	var bind = this.binds;
        	var dsArr = new Array();
        	var dsNames = "";
        	for (var i = 0; i < bind.length; i++)
        	{
        		var comp = eval("this." + bind[i].compid + ";");
        		// trace("gfn_getBindDs bindDs name : "+bind[i].datasetid);
        		// trace("gfn_getBindDs dataset names : "+dsNames);
        		if (dsNames.indexOf(bind[i].datasetid) == -1)
        		{
        			// trace("gfn_getBindDs parent : "+comp.parent.name);
        			if (bind[i].compid.indexOf("div_cont") != -1)
        			{
        				if (comp instanceof Edit || comp instanceof Calendar || comp instanceof Combo || comp instanceof MaskEdit || comp instanceof CheckBox)
        				{
        					dsArr.push(eval("this." + bind[i].datasetid + ";"));
        					dsNames += bind[i].datasetid;
        				}
        			}
        		}
        	}
        	// for(var ss=0; ss<dsArr.length; ss++){
        	// trace("before merging Binded Ds : "+dsArr[ss].name);
        	// }
        	if (param instanceof Array)
        	{
        		for (var s = 0; s < param.length; s++)
        		{
        			var flag = true;
        			for (var z = 0; z < dsArr.length; z++)
        			{
        				if (param[s] == dsArr[z])
        				{
        					flag = false;
        				}
        				if (z == dsArr.length - 1 && flag == true)
        				{
        					dsArr.push(param[s]);
        				}
        			}
        		}
        	}
        	// logging
        	// for(var ss=0; ss<dsArr.length; ss++){
        	// trace("after merging Binded Ds : "+dsArr[ss].name);
        	// }
        	return dsArr;
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_chkBeforeSaveC
         * 설      명	:  그리드 외 컴포넌트로 저장시 필수값 확인
         * 입      력	:  Dataset
         * 반      환	:  true / false
         **********************************************************************************/
        this.gfn_chkBeforeSaveC = function ()
        {
        	var comps = this.div_cont.components;
        	var loopFlag = true;
        	var flag = true;
        	for (var s = 0; s < comps.length; s++)
        	{
        		if (loopFlag == false)
        		{
        			break;
        		}
        		if (comps[s] instanceof Tab)
        		{
        			for (var f = 0; f < comps[s].components.length; f++)
        			{
        				// trace("comps[s].components[f] : "+comps[s].components[f].name);
        				for (var e = 0; e < comps[s].components[f].components.length; e++)
        				{
        					// trace("comps[s].components[f].components[e] : "+comps[s].components[f].components[e].name);
        					if (comps[s].components[f].components[e].value == null || comps[s].components[f].components[e].value == "")
        					{
        						if (comps[s].components[f].components[e].cssclass == "essential")
        						{
        							// trace("NULL 항목 : "+comps[s].components[f].components[e].name);
        							var compid = comps[s].components[f].components[e].name;
        							compid = compid.substring(nexacro.toNumber(compid.indexOf("_")) + 1, compid.length);
        							var label = eval("this.div_cont." + comps[s].name + "." + comps[s].components[f].name + ".sta_" + compid + ".text;");
        							Sct.alert(this, "000076", label + "|");
        							comps[s].components[f].components[e].setFocus();
        							loopFlag = false;
        							flag = false;
        							return false;
        							break;
        						}
        					}
        				}
        			}
        		}
        		else if (comps[s] instanceof Div)
        		{
        			for (var z = 0; z < comps[s].components.length; z++)
        			{
        				if (comps[s].components[z].value == null || comps[s].components[z].value == "")
        				{
        					if (comps[s].components[z].cssclass == "essential")
        					{
        						// trace("null 항목 : "+comps[s].components[z].name);
        						var compid = comps[s].components[z].name;
        						compid = compid.substring(nexacro.toNumber(compid.indexOf("_")) + 1, compid.length);
        						var label = eval("this.div_cont." + comps[s].name + ".sta_" + compid + ".text;");
        						Sct.alert(this, "000076", label + "|");
        						comps[s].components[z].setFocus();
        						loopFlag = false;
        						flag = false;
        						return false;
        						break;
        					}
        				}
        			}
        		}
        		else
        		{
        			if (comps[s].value == null || comps[s].value == "")
        			{
        				if (comps[s].cssclass == "essential")
        				{
        					// trace("null 항목 : "+comps[s].name);
        					var compid = comps[s].name;
        					compid = compid.substring(nexacro.toNumber(compid.indexOf("_")) + 1, compid.length);
        					var label = eval("this.div_cont.sta_" + compid + ".text;");
        					Sct.alert(this, "000076", label + "|");
        					comps[s].setFocus();
        					flag = false;
        					return false;
        					break;
        				}
        			}
        		}
        	}
        	return true;
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_chkGridEssential
         * 설      명	:  그리드 필수 항목 확인
         * 입      력	:  gd : 확인할 그리드
         * 반      환	:  true / false
         **********************************************************************************/
        this.gfn_chkGridEssential = function (gd)
        {
        	var hcnt = gd.getCellCount("Head");
        	var bcnt = gd.getCellCount("body");
        	var esArr = new Array();
        	var hcellnm = new Array();
        	var flag;
        	var rowidx;
        	var colnm;
        	var htxt;
        	var loopflag;
        	var ds = gd.getBindDataset();

        	for (var i = 0; i < hcnt; i++)
        	{
        		if (gd.getCellProperty("head", i, "cssclass") == "CellEssential")
        		{
        			var colIdx = gd.getCellProperty("head", i, "col");
        			var bindinfo = gd.getCellProperty("Body", colIdx, "text");
        			bindinfo = bindinfo.substring(bindinfo.indexOf(":") + 1, bindinfo.length);
        			esArr.push(bindinfo);
        			hcellnm.push(gd.getCellProperty("head", i, "text"));
        		}
        	}


        	for (var z = 0; z < ds.rowcount; z++)
        	{
        		if (loopflag == true)
        		{
        			break;
        		}
        		if (ds.getRowType(z) == "2" || ds.getRowType(z) == "4")
        		{
        			for (var s = 0; s < esArr.length; s++)
        			{
        				flag = Sct.Util.isEmpty(ds.getColumn(z, esArr[s]));
        				if (flag == true)
        				{
        					rowidx = z;
        					colnm = esArr[s];
        					htxt = hcellnm[s];
        					loopflag = true;
        					break;
        				}
        			}
        		}
        	}

        	if (flag == true)
        	{
        		var nCellIdx = gd.getBindCellIndex("body", colnm);
        		// trace("idx "+nCellIdx);
        		var headcol = this.gfn_mergeCount(gd, nCellIdx);
        		// trace("널 컬럼 : "+colnm+" 계산후idx :"+headcol);
        		var CellIdx = this.gfn_mergeCellCal(nCellIdx, gd);
        		// trace("널 컬럼명 : "+htxt);
        		gd.selectRow(rowidx, true);
        		gd.setCellPos(CellIdx);
        		gd.showEditor(true);
        		Sct.alert(this, "000109", (rowidx + 1) + "|" + htxt);
        		return false;
        	}
        	else
        	{
        		return true;
        	}

        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_sDivBtnVisible
         * 설      명	:  검색조건 크기 조절 버튼 보이기 여부 제어 함수
         * 				   stanTop			: 기준 row수 : 2줄이면 -> 70,  1줄이면 -> 40
         * 				   divSearchHeight	: 기준 row수 : 2줄이면 -> 78,  1줄이면 -> 44
         * 				   divContTop		: 기준 row수 : 2줄이면 -> 114, 1줄이면 -> 80
         * 				   btnsMoveTop		: 기준 row수 : 2줄이면 -> 100, 1줄이면 -> 66
         * 입      력	:
         * 반      환	:
         **********************************************************************************/
        var gOrgPosition = {divSearchHeight : 0,  divContTop : 0,  btnsMoveTop : 0,  imgUrl : "url('imagerc::search_close.png') no-repeat transparent"};
        var gStdPosition = {divSearchHeight : 78, divContTop : 114, btnsMoveTop : 100, imgUrl : "url('imagerc::search_open.png') no-repeat transparent"};
        var gBoolStd		 = true;
        this.gfn_sDivBtnVisible = function ()
        {
        	if(Sct.Util.isEmpty(this.btn_sMove) || Sct.Util.isEmpty(this.div_search) || Sct.Util.isEmpty(this.div_cont)) return;
        	var stanTop = 70;
        	//화면에설정된 position -> gOrgPosition 변수에 저장
        	gOrgPosition.divSearchHeight	= this.div_search.height;
        	gOrgPosition.divContTop			= this.div_cont.top;
        	gOrgPosition.btnsMoveTop		= this.btn_sMove.top;
        	this.div_search.set_formscrolltype("none");
        	this.btn_sMove.set_visible(false);
        	for (var i = 0; i < this.div_search.form.components.length; i++)
        	{
        		if (this.div_search.form.components[i] instanceof Static)
        		{
        			if (this.div_search.form.components[i].top > stanTop)
        			{
        				this.btn_sMove.set_visible(true);

        				//최초에 기준(gStdPosition)위치로 설정
        				this.div_search.set_height(gStdPosition.divSearchHeight);
        				this.div_cont.set_top(gStdPosition.divContTop);
        				this.btn_sMove.set_top(gStdPosition.btnsMoveTop);

        				this.btn_sMove.setEventHandler("onclick", function(obj, e){
        					var position;
        					//기준 -> 화면설정값
        					if(gBoolStd)
        					{
        						gBoolStd = false;
        						position = gOrgPosition;
        					}
        					//화면설정값 -> 기준
        					else
        					{
        						gBoolStd = true;
        						position = gStdPosition;
        					}
        					this.div_search.set_height(position.divSearchHeight);
        					this.div_cont.set_top(position.divContTop);
        					this.btn_sMove.set_top(position.btnsMoveTop);
        					this.btn_sMove.set_background(position.imgUrl);

        				}, this);
        				break;
        			}
        		}
        	}
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_enterSearch
         * 설      명	:  ctrl + enter 로 검색하는 함수. form의 onkeydown에 작성
         현재 initDataset 에서 걸어줌.
         * 입      력	:
         * 반      환	:
         **********************************************************************************/
        this.gfn_enterSearch = function (obj, e)
        {
        	if (e.ctrlkey && e.keycode == 13)
        	{
        		this.fn_searchBtn();
        	}
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_setPopupName
         * 설      명	:  팝업 타이틀 텍스트 설정
         * 입      력	:  obj : Form
         * 반      환	:
         **********************************************************************************/
        this.gfn_setPopupName = function (obj)
        {
        	var txt = obj.titletext;
        	obj.titletext = this.getOwnerFrame().name;
        	this.getOwnerFrame().set_titletext(txt);
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_setRowTypeNormal
         * 설      명	:  데이터셋의 모든 행의 타입을 초기상태(1) 로 돌린다.
         * 입      력	:  ds : 해당 Dataset
         * 반      환	:
         **********************************************************************************/
        this.gfn_setRowTypeNormal = function (ds)
        {
        	for (var i = 0; i < ds.rowcount; i++)
        	{
        		ds.set_updatecontrol(false);
        		ds.setRowType(i, Dataset.ROWTYPE_NORMAL);
        		ds.set_updatecontrol(true);
        	}
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_getDateFromToday
         * 설      명	:  현재 일자 기준으로 년, 월, 일 증가, 감소값을 구한다.(윤년OK)
         * 입      력	:  ymd   : "Y", "M", "D" 식으로 증/감 할 년,월,일
         num   : 1,2 식으로 증/감 할 값
         pm    : "+", "-" 식으로 증가인지 감소인지 구분값
         sep   : 구분자, default X
         range : 년월일 범위값, default YMD, 형식 : Y, YM, YMD
         * 반      환	:  YYYYMMDD
         **********************************************************************************/
        this.gfn_getDateFromToday = function (ymd, num, pm, sep, range)
        {
        	// (YYYYMMDD) 식의 오늘 날짜
        	var d = new Date();
        	var year = d.getFullYear();
        	var month = ((d.getMonth() + 1) + "").padLeft(2, '0');
        	var day = (d.getDate() + "").padLeft(2, '0');
        	var temp = 0;
        	var rDate;

        	if (pm == "+")
        	{
        		if (ymd == "Y")
        		{
        			year = (nexacro.toNumber(year) + nexacro.toNumber(num)) + "";
        		}
        		else if (ymd == "M")
        		{
        			if (num > 12)
        			{
        				alert("gfn_getDateFromToday 함수의 월 증가 값이 잘못 되었습니다 \n 값: " + num);
        				return false;
        			}
        			else
        			{
        				month = nexacro.toNumber(month) + nexacro.toNumber(num);
        				if (month > 12)
        				{
        					temp = month - 12;
        					year = nexacro.toNumber(year) + 1;
        					month = (temp + "").padLeft(2, "0");
        				}
        				else
        				{
        					month = (month + "").padLeft(2, "0");
        				}
        			}
        		}
        		else if (ymd == "D")
        		{
        			if (num > 31)
        			{
        				alert("gfn_getDateFromToday 함수의 일 증가 값이 잘못 되었습니다 \n 값: " + num);
        				return false;
        			}
        			else
        			{
        				day = nexacro.toNumber(day) + nexacro.toNumber(num);

        				var curYM = (year + "") + month;
        				var date = new Date(parseInt(curYM.substr(0, 4)), parseInt(curYM.substr(4, 2)), 1);
        				var lastday = (new Date(date)).addDate((new Date(date)).getDate() * -1);
        				lastday = nexacro.toNumber(((new Date(lastday)).getDate() + "").padLeft(2, '0'));

        				// 마지막 일자 초과시
        				if (day > lastday)
        				{
        					temp = nexacro.toNumber(day) - lastday;
        					day = (temp + "").padLeft(2, "0");

        					month = nexacro.toNumber(month) + 1;
        					if (month > 12)
        					{
        						temp = month - 12;
        						year = nexacro.toNumber(year) + 1;
        						month = (temp + "").padLeft(2, "0");
        					}
        					else
        					{
        						month = (month + "").padLeft(2, "0");
        					}
        				}
        				else
        				{
        					day = (day + "").padLeft(2, "0");
        				}
        			}
        		}
        		// + end
        	}
        	else if (pm == "-")
        	{
        		if (ymd == "Y")
        		{
        			year = (nexacro.toNumber(year) - nexacro.toNumber(num)) + "";
        		}
        		else if (ymd == "M")
        		{
        			if (num < 1)
        			{
        				alert("gfn_getDateFromToday 함수의 월 감소 값이 잘못 되었습니다 \n 값: " + num);
        				return false;
        			}
        			else
        			{
        				month = nexacro.toNumber(month) - nexacro.toNumber(num);
        				if (month < 1)
        				{
        					temp = 12 - Math.abs(month);
        					year = nexacro.toNumber(year) - 1;
        					month = (temp + "").padLeft(2, "0");
        				}
        				else
        				{
        					month = (month + "").padLeft(2, "0");
        				}
        			}
        		}
        		else if (ymd == "D")
        		{
        			if (num < 1)
        			{
        				alert("gfn_getDateFromToday 함수의 일 감소 값이 잘못 되었습니다 \n 값: " + num);
        				return false;
        			}
        			else
        			{
        				day = nexacro.toNumber(day) - nexacro.toNumber(num);
        				// 첫 일자 초과시
        				if (day < 1)
        				{
        					month = nexacro.toNumber(month) - 1;
        					if (month < 1)
        					{
        						temp = 12 - Math.abs(month);
        						year = nexacro.toNumber(year) - 1;
        						month = (temp + "").padLeft(2, "0");
        					}
        					else
        					{
        						month = (month + "").padLeft(2, "0");
        					}

        					// 마지막 일자
        					var curYM = (year + "") + month;
        					var date = new Date(parseInt(curYM.substr(0, 4)), parseInt(curYM.substr(4, 2)), 1);
        					var lastday = (new Date(date)).addDate((new Date(date)).getDate() * -1);
        					lastday = nexacro.toNumber(((new Date(lastday)).getDate() + "").padLeft(2, '0'));
        					temp = lastday - Math.abs(nexacro.toNumber(day));
        					day = (temp + "").padLeft(2, "0");
        				}
        				else
        				{
        					day = (day + "").padLeft(2, "0");
        				}
        			}
        		}
        	}
        	// - end

        	// seperator
        	if (sep == null || sep == "")
        	{
        		sep = "";
        	}

        	// range
        	if (range == "" || range == null)
        	{
        		range = "YMD";
        	}
        	if (range == "Y")
        	{
        		rDate = year;
        	}
        	else if (range == "YM")
        	{
        		rDate = year + sep + month;
        	}
        	else if (range == "YMD")
        	{
        		rDate = this.gfn_isOverLastDay(year + month + day);
        		rDate = rDate.substring(0, 4) + sep + rDate.substring(4, 6) + sep + rDate.substring(6, 8);
        		// rDate = year+sep+month+sep+day;
        	}

        	return rDate;
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_isOverLastDay
         * 설      명	:  파라미터의 날짜가 마지막일자를 초과한 경우 마지막일로
         셋팅하여 리턴하는 함수.
         * 입      력	:  YYYYMMDD
         * 반      환	:  YYYYMMDD
         **********************************************************************************/
        this.gfn_isOverLastDay = function (strDate)
        {
        	var rDate = "";
        	var date;
        	var paramDate;
        	if (strDate == null)
        	{
        		alert("gfn_isOverLastDay ERROR");
        		return false;
        	}
        	else
        	{
        		paramDate = strDate;
        		// 파라미터 마지막일
        		rDate = strDate.substring(6, 8);

        		strDate = strDate.substring(0, 6);
        		date = new Date(parseInt(strDate.substr(0, 4)), parseInt(strDate.substr(4, 2)), 1);
        		date = (new Date(date)).addDate((new Date(date)).getDate() * -1);
        		// 마지막일
        		var lastday = ((new Date(date)).getDate() + "").padLeft(2, '0');
        		if (nexacro.toNumber(rDate) > nexacro.toNumber(lastday))
        		{
        			rDate = strDate + lastday;
        		}
        		else
        		{
        			rDate = paramDate;
        		}
        	}
        	return rDate;
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_setReportUrl
         * 설      명	:  report Webbrowser의 url을 해당 업체 주소에 맞게 설정
         * 입      력	:
         * 반      환	:
         **********************************************************************************/
        this.gfn_setReportUrl = function ()
        {
        	var url = nexacro.getEnvironment().services["svcurl"].url;
        	if (url.indexOf("Argos") != -1)
        	{
        		url = url.substring(0, url.indexOf("Argos"));
        	}
        	if (url.charAt(url.length - 1) != "/")
        	{
        		url = url + "/";
        	}
        	this.web_report.set_url(url + "Argos/via/dummy.html");
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  gfn_gridColSet
         * 설      명	:  그리드 컬럼 가변화 데이터를 기반으로 그리드 컬럼을 설정한다.
         * 입      력	:  pgmid : Program Id
         * 반      환	:
         **********************************************************************************/
        this.gfn_gridColSet = function (pgmid)
        {
        	if (pgmid != null && pgmid != "")
        	{
        		var ds_gridColSet = new Dataset;
        		ds_gridColSet.name = "ds_gridColSet";
        		this.addChild(ds_gridColSet.name, ds_gridColSet);
        		this.ds_gridColSet.addColumn("GRID_NAME", "string", 100);
        		this.ds_gridColSet.addColumn("COL_NM", "string", 100);


        		var svcId = "gridSetsearch";
        		var params = "/commonController.do";
        		var inDatasets = "";
        		var outDatasets = "ds_gridColSet=output1";
        		var argument = "method=getList "
        			 + "sqlId=getGridColSet "
        			 + "PGMID=" + pgmid + " ";
        		var callbackFunc = "gfn_gridColSetCallBack";
        		this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        	}
        	else
        	{
        		trace("gfn_gridColSet, Parameter is null");
        	}
        };

        this.gfn_gridColSetCallBack = function (a, b, c)
        {
        	if (b != -1)
        	{
        		var ds = this.ds_gridColSet;
        		if (this.ds_gridColSet.rowcount == 0)
        		{
        			var obj = this.removeChild("ds_gridColSet");
        			obj = null;
        		}
        		else
        		{
        			for (var i = 0; i < ds.rowcount; i++)
        			{
        				var grd = ds.getColumn(i, "GRID_NAME");
        				var col = ds.getColumn(i, "COL_NM");
        				var idx = eval("this." + grd + ".getBindCellIndex('body','" + col + "');");
        				eval("this." + grd + ".setFormatColProperty(" + idx + ", 'size', 0);");
        			}
        		}
        	}
        	else
        	{
        		alert("gfn_gridColSetCallBack ERROR : " + c);
        		var obj = this.removeChild("ds_gridColSet");
        		obj = null;
        	}
        };

        /**
         * 함  수  명	:  transaction
         * 입      력	:  form          Form
         *                  svcID         Transaction 서비스ID(사용자지정)
         *                  params        URL에 포함될 파라미터
         *                  inDatasets    송신 Dataset(복수일 경우 " "으로 구분)
         *                  outDatasets   수신 Dataset(복수일 경우 " "으로 구분)
         *                  argument      Dataset 외의 Transaction을 위한 인자값
         *                                a=b의 형태로 입력하고, 빈칸으로 구분
         *                  callbackFunc  Callback 함수명
         *                  showProgress  ProgressBar 표시여부(default:false)
         *                  bAsync        비동기 여부를 지정합니다.(Default : true)
         *                  bBinary       Binary 형태로 전송할 지 여부를 지정합니다.(Default : false)
         * 반      환	:
         * 기      능	: 	공통 트랜잭션 함수  SvnNexcoreCO:: , xecure:: 로 구분 전송
         */
        this.gfn_transaction = function (form, svcID, params, inDatasets, outDatasets, argument, callbackFunc, showProgress, bAsync, bBinary) {
        	//=== Callback 함수 - 시작 ===
        	var context = form;
        	var sCallback;
        	 /*****************************************************************************************
        	 * 함  수  명	: _gfn_tranCallback
        	 * 입      력	: 1. strSvcId		: Return ServiceID
        					  2. nErrorCode		: Error Code
        					  3. strErrorMsg	: Error Message
        	 * 반      환	:
        	 * 기      능	: Global Transaction CallBack 함수
        	 *****************************************************************************************/
        	var _gfn_tranCallback = function (strSvcId, nErrorCode, strErrorMsg) {
        		if(nErrorCode != 0) {
        			this.alert(strErrorMsg);
        		}

        		//==========================
        		// 공통적으로 처리할 부분이 있으면, 코딩
        		//==========================
        		if(!Sct.Util.isEmpty(callbackFunc)) {
        			var sCallBack =  "form." + callbackFunc + "('" + strSvcId + "', " + nErrorCode + ", '" + strErrorMsg + "');";
        			eval(sCallBack);
        		}
        	}

        	if(typeof _gfn_tranCallback == "function") {
        		sCallback = svcID + "_callBack";
        		context[sCallback] = _gfn_tranCallback;
        	} else if (typeof _gfn_tranCallback == "string") {
        		sCallback = _gfn_tranCallback;
        	} else {
        		sCallback = "";
        	}
        	//=== Callback 함수 - 끝 ===

        	if (Sct.Util.isEmpty(showProgress)) { showProgress = true; }
        	if (Sct.Util.isEmpty(bAsync))       { bAsync = true;       }
        	if (Sct.Util.isEmpty(bBinary))      { bBinary = false;     }
        	if (Sct.Util.isEmpty(argument))     { argument = "";	   }

        	if(!Sct.Util.isEmpty(outDatasets)) {
        		var arrOutDs = outDatasets.split(" ");
        		for (var i = 0; i < arrOutDs.length; i++) {
        			var serverOutDs = eval("form." + (arrOutDs[i].split("="))[0]);
        			if(!Sct.Util.isEmpty(serverOutDs)) {
        				serverOutDs.keystring = "";
        			}
        		}
        	}

        	var menuCd = form.getOwnerFrame().form.menuUrl;
        	if (Sct.Util.isEmpty(menuCd)) {
        		menuCd = "";
        	}
        	menuCd = menuCd.substring(menuCd.lastIndexOf(":")+1,menuCd.indexOf("."));
        	trace("메뉴 명 : "+menuCd);
        	var tableNm = "";
        	if(form.fv_currentDS != null){
        		eval("var initDs = form.ds_"+menuCd+";");
        		if(initDs != null){
        			tableNm = form.fv_currentDS.name;
        			eval("tableNm = form.ds_"+menuCd+".findRow(\"DATASET\",tableNm);");
        			eval("tableNm = form.ds_"+menuCd+".getColumn(tableNm,\"TABLE_NM\");");
        			if(tableNm == null){
        				tableNm = "";
        			}
        		}else{
        			tableNm = "";
        		}

        		trace("테이블 명 : "+tableNm);
        	}
        	var service		= nexacro.getEnvironment().services["svcurl"];
        	var strSvcID	= svcID;
        	var svcparam	= params;
        	var svcUrl 	= service.url + "" + params;

        	// Model Input parameters
        	var strInDatasets = inDatasets;
        	var strOutDatasets = outDatasets;
        	var strArgument;
        	var companycd = nexacro.getApplication().gv_company;
        // 	if (companycd == null || companycd == "") {
        // 		companycd = "001";
        // 	}

        	if (tableNm == "") {
        		strArgument = argument + " REG_PGM_ID=" + nexacro.wrapQuote(menuCd) + " DEF_LANG="+nexacro.getApplication().gv_locale+" M_COMPANY_CD="+companycd+" ";
        	} else {
        		strArgument = argument + " REG_PGM_ID=" + nexacro.wrapQuote(menuCd) + " DEF_LANG="+nexacro.getApplication().gv_locale+" TABLENM="+tableNm+" M_COMPANY_CD="+companycd+" ";
        	}

        	var _dsTransInfo = this.gfn_isCheckDs(form, "dsTransInfo");
        	//argument --- > dataset으로 처리
        	var _dsParamInfo = this.gfn_isCheckDs(form, "dsParamINfo");
        	form.dsTransInfo = _dsTransInfo;
        	form.dsParamINfo = _dsParamInfo;
        	if(form.dsTransInfo.getColCount() < 1) {
        		form.dsTransInfo.addColumn( "strSvcID", "string" );
        		form.dsTransInfo.addColumn( "strURL", "string" );
        		form.dsTransInfo.addColumn( "strInDatasets", "string" );
        		form.dsTransInfo.addColumn( "strOutDatasets", "string" );
        	}
        	form.dsTransInfo.clearData();
        	form.dsParamINfo.clear();

        	var nPos = argument.indexOf("&nbsp;");
        	var arrParam = "";
        	if(nPos >= 0) {
        		arrParam = argument.split("&nbsp;");
        	} else {
        		arrParam = argument.split(" ");
        	}

        	for (var p=0; p<arrParam.length;p++) {
        		var datasetNm 	= arrParam[p].split("=");

        		if( datasetNm.length != 2 ) continue;

        		var strArgServer 	= datasetNm[0].toString().trim();
        		var strArgClient  	= datasetNm[1].toString().trim();

        		form.dsParamINfo.addColumn(strArgServer);

        		if (form.dsParamINfo.rowcount == 0) {
        			form.dsParamINfo.addRow();
        		}
        		form.dsParamINfo.setColumn(0,strArgServer,strArgClient);
        	}
        	var dsInputName = this.gfn_splitDsName(inDatasets,0);
        	var dsOutputName = this.gfn_splitDsName(outDatasets,1);
        	for (var i = 0; i < dsInputName.length ; i++) {
        		var row = form.dsTransInfo.addRow();
        		if (i == 0) {
        			form.dsTransInfo.setColumn(row,0, strSvcID);
        			form.dsTransInfo.setColumn(row,1, params);
        			form.dsTransInfo.setColumn(row,"MENU_ID", "value");
        		}
        		form.dsTransInfo.setColumn(row,2, dsInputName[i]);
        	}

        	for (var i = 0; i < dsOutputName.length ; i++) {
        		if (i > 0) {
        			row = form.dsTransInfo.addRow();
        		}

        		form.dsTransInfo.setColumn(row,3, dsOutputName[i]);
        	}

        	strInDatasets   = "__DS_TRANS_INFO__=dsTransInfo " + strInDatasets;
        	form.transaction(strSvcID, svcUrl, strInDatasets, strOutDatasets, strArgument, sCallback, bAsync);
        }

        /**
        * = 을 배열로 분리 처리
        * @param {string} objString (inds=inds)
        * @param {number} 0 : 배열 첫번째값 1: 배열 두번째값
        * @return {string} return 된 배열값
        * @example
        * @memberOf Ex.util
        */
        this.gfn_splitDsName = function(objString, type) {
        	var strDsMapping;			//mapping string
        	var objArr;					//dataset name array
        	var objReturn = new Array();

        	strDsMapping = objString.split(" ");

        	for (var i = 0; i < strDsMapping.length ; i++ ){
        		objArr = strDsMapping[i].split("=");    // objArr = a,cd
        		if (type == 0)
        			objReturn[i] = objArr[0];
        		else
        			objReturn[i] = objArr[1];
        	}

        	return objReturn;
        }

        /**
         * 인자를 넘겨줄 경우에 넘겨주는 규칙대로 인자/값을 설정
         * @param {string} 설정할 파리미터명
         * @param {string} p_value - 설정할 값
         * @return {string] String
         * @example
         *     paramStr += Sct.Util.setParam("sql_xml", "gspl_sql_common");
         * @memberOf Ex.util
         */
        this.gfn_setParam = function (p_name, p_value) {
        	return p_name + "=" +nexacro.wrapQuote(this.gfn_isReplaceEmpty(p_value)) + " ";
        }

        /**
         * 공백으로치환
         * @param {string} 체크할  파리미터명
         * @return {string} 공백으로 치환값
         * @memberOf Ex.util
         */
        this.gfn_isReplaceEmpty = function(strArg) {
        	if (Sct.Util.isEmpty(strArg)) {
        		return "";
        	} else {
        		return strArg;
        	}
        }

        /**
         * 해당 데이터셋명으로 검색하여 데이터셋이 없으면 데이터셋을 생성
         * @param 	{object} form
         *			{string} 데이터셋명
         * @return {string} dataset
         * @example
         * @memberOf Ex.util
         */
        this.gfn_isCheckDs = function(obj, sDsNm) {
        	var oDs = this.gfn_lookup(obj,sDsNm);

        	if (Sct.Util.isEmpty(oDs)) {
        		oDs = new Dataset;
        		oDs.name = sDsNm;

        		obj.addChild(sDsNm, oDs);
        	} else {
        		oDs.clearData();
        	}

        	return oDs;
        }

        /**
         * 주어진 대상을 포함한 상위 범위로 지정된 이름에 최초로 일치하는 component, object 반환
         * @public
         * @param {XComp} p 찾을 대상
         * @param {string} name 찾을 대상 이름
         * @return {XComp} 검색된 component, object
         * @example
         *
         * // this = Form
         * // Form 에 Button11 존재
         * trace(Eco.XComp.lookup(this, "Button11"));	// output : [object Button]
         *
         * // Button12 는 Div01 에 존재하지 않으나 Div01 의 상위 컴포넌트인 Form 에 존재
         * trace(Eco.XComp.lookup(Div01, "Button11"));	// output : [object Button]
         *
         * @memberOf Eco.XComp
         */
        this.gfn_lookup = function(p, name) {
        	var o;
        	while (p) {
        		o = p.components;
        		if ( o && o[name] ) return o[name];

        		o = p.objects;
        		if ( o && o[name] ) return o[name];

        		p = p.parent;
        	}
        	return null;
        }

        /******************************************************************************
        * Function Name: gfn_SetCellPos
        * Description  : 그리드의  cell focus로 이동
        * Arguments    : compGrid		{compent}	그리드
        				 sCellId		{string}	focus를 주려는 cell의 bind id(cell이 없는 경우 첫번째 cell로 이동)
        				 sRow           {int}       focus를 주려는 row (row가 없는경우 rowposition)
        * Return       : 없음
        ******************************************************************************/
        this.gfn_SetCellPos = function(compGrid, sCellId, sRow)
        {
        	var objDs = compGrid.getBindDataset();
        	if (Sct.Util.isEmpty(objDs))
        	{
        		application.mainframe.alert("Grid Bind Dataset Error");
        		return;
        	}

        	var nCellIndex = compGrid.getBindCellIndex("body", sCellId);

        	if (nCellIndex != -1)
        	{
        		if(!Sct.Util.isEmpty(sRow)) compGrid.selectRow(sRow, true);
        		compGrid.setCellPos(nCellIndex);
        		compGrid.showEditor(true);
        	}
        }

        /******************************************************************************
        * Function Name: gfn_setDivDrag
        * Description  : div의 상하, 좌우 사이즈조절
        * Arguments    : btn			{button}	button
        				 div1			{div}		button을 기준으로 상 or 좌에 위치한 div
        				 div2           {div}       button을 기준으로 하 or 우에 위치한 div
        * Return       : 없음
        ******************************************************************************/
        var btnClickBool, gPosition, div1Width, div1Height, div2Left, div2Top;
        var gDragArr = [];
        var gDragComp;
        var returnTrue = function(){return true;};
        this.gfn_setDivDrag = function(btn, div1, div2)
        {
        	var dragComp = {
        		btn 	: btn,
        		div1 	: div1,
        		div2	: div2
        	}
        	gDragArr.push(dragComp);

        	btn.addEventHandler("ondrag", function(obj, e){
        		btnClickBool = true;

        		for(var i=0; i<gDragArr.length; i++)
        		{
        			//현재선택된 btn,div,div2 -> gDragComp 저장
        			if(gDragArr[i].btn == btn)
        			{
        				gDragComp = gDragArr[i];
        				break;
        			}
        		}

        		var btnWidth  = obj.getOffsetWidth();
        		var btnHeight = obj.getOffsetHeight();
        		//상하 구조
        		if(btnWidth > btnHeight)
        		{
        			gPosition  	= obj.getOffsetTop();
        			div1Height 	= gDragComp.div1.getOffsetHeight();
        			div2Top    	= gDragComp.div2.getOffsetTop();
        		}
        		//좌우 구조
        		else
        		{
        			gPosition 	= obj.getOffsetLeft();
        			div1Width 	= gDragComp.div1.getOffsetWidth();
        			div2Left 	= gDragComp.div2.getOffsetLeft();
        		}

        		//드래그클릭후 drop 될때까지만 event 생존(컬럼 resize 문제로 수정)
        		obj.parent.addEventHandler("ondrag", returnTrue, this);

        	}, this);

        	btn.parent.addEventHandler("ondrop", function(obj, e){
        		btnClickBool = false;
        		//드래그클릭후 drop 될때까지만 event 생존(컬럼 resize 문제로 수정)
        		obj.removeEventHandler("ondrag", returnTrue, this);
        	}, this);

        	btn.parent.addEventHandler("ondragmove", function(obj, e){

        		if(btnClickBool)
        		{
        			var btnWidth  = gDragComp.btn.getOffsetWidth();
        			var btnHeight = gDragComp.btn.getOffsetHeight();
        			//상하 구조
        			if(btnWidth > btnHeight)
        			{
        				var nLeft 	= gDragComp.btn.getOffsetLeft();
        				var nTop 	= e.clienty - (btnHeight/2);

        				//증가수치
        				var increaseY = nTop - gPosition;

        				if(gDragComp.div1.getOffsetHeight() < 10 && increaseY < 0) return;

        				if(gDragComp.btn.parent != obj) return;

        				//버튼위치이동
        				//gDragComp.btn.move(nLeft, nTop, btnWidth, btnHeight);
        				gDragComp.btn.set_top(nTop);

        				//상 div height 설정
        				var afterDiv1Height = div1Height + increaseY;
        				gDragComp.div1.set_height(afterDiv1Height);

        				//하 div top 설정
        				var afterDiv2Top = div2Top + increaseY;
        				gDragComp.div2.set_top(afterDiv2Top);

        			}
        			//좌우 구조
        			else
        			{
        				var nTop 	= gDragComp.btn.getOffsetTop();
        				var nLeft 	= e.clientx - (btnWidth/2);

        				//증가수치
        				var increaseX = nLeft - gPosition;

        				if(gDragComp.div1.getOffsetWidth() < 10 && increaseX < 0) return;

        				if(gDragComp.btn.parent != obj) return;

        				//버튼위치이동
        				//gDragComp.btn.move(nLeft, nTop, btnWidth, btnHeight);
        				gDragComp.btn.set_left(nLeft);

        				//좌 div width 설정
        				var afterDiv1Width = div1Width + increaseX;
        				gDragComp.div1.set_width(afterDiv1Width);

        				//우 div left 설정
        				var afterDiv2Left = div2Left + increaseX;
        				gDragComp.div2.set_left(afterDiv2Left);
        			}
        		}
        	}, this);

        }

        /******************************************************************************
         * Function Name: gfn_CreateReturnDs
         * Description  : 팝업에서 saveXML로 읽어들인 값을 Dataset을 동적으로 생성하고 값을 세팅
         * Arguments    : objForm		{object}	Dataset의 추가될 Form
        				  sDsNm			{string}	Dataset Name
        				  objPopupRtn	{string}	팝업에서 받은 값
         * Return       : Object
         ******************************************************************************/
        this.gfn_createReturnDs = function(objForm, sDsNm, objPopupRtn)
        {
        	if(objForm.isValidObject(sDsNm)) objForm.removeChild(sDsNm);

        	objDs = new Dataset(sDsNm);
        	objDs.name = sDsNm;
        	objForm.addChild(objDs.name, objDs);
        	objDs.loadXML(objPopupRtn);

        	return objDs;
        }

        /******************************************************************************
         * Function Name: gfn_rowTypeValidationDs_bak
         * Description  : 데이터셋의 다중 상태값 허용 불가
         * Arguments    : dsArr		{Array}		적용할 Dataset명
         * Return       :
         ******************************************************************************/
        this.gfn_rowTypeValidationDs_bak = function(dsArr)
        {
        	for(var j = 0 ; j < dsArr.length; j++)
        	{
        		var dsName = dsArr[j];
        		eval("var ds = this." + dsName + ";");
        		ds.addEventHandler("onvaluechanged", function(obj, e){
        			if(obj.getRowType(e.row) == Dataset.ROWTYPE_NORMAL) return;

        			if(obj.getRowType(e.row) == Dataset.ROWTYPE_UPDATE)
        			{
        				for(var i=0; i<obj.rowcount; i++)
        				{
        					var rowType = obj.getRowType(i);
        					if(rowType == Dataset.ROWTYPE_INSERT || rowType == Dataset.ROWTYPE_DELETE)
        					{
        						Sct.alert(this, "000238"); //수정작업 외 다른 작업상태가 존재합니다.
        						obj.setColumn(e.row, e.columnid, e.oldvalue); //이전값으로 원복
        						return;
        					}
        				}
        			}
        			else if(obj.getRowType(e.row) == Dataset.ROWTYPE_INSERT)
        			{
        				for(var i=0; i<obj.rowcount; i++)
        				{
        					var rowType = obj.getRowType(i);
        					if(rowType == Dataset.ROWTYPE_UPDATE || rowType == Dataset.ROWTYPE_DELETE)
        					{
        						Sct.alert(this, "000237"); //추가작업 외 다른 작업상태가 존재합니다.
        						obj.deleteRow(e.row);//이전값으로 원복
        						return;
        					}
        				}
        			}
        			else if(e.columnid == "DEL_CHECKBOX")
        			{
        				if(e.newvalue == "1")
        				{
        					//추가행을 삭제할경우 상태값 EMPTY
        					if(obj.getRowType(e.row) == Dataset.ROWTYPE_EMPTY) return;

        					for(var i=0; i<obj.rowcount; i++)
        					{
        						var rowType = obj.getRowType(i);
        						if(rowType == Dataset.ROWTYPE_INSERT || rowType == Dataset.ROWTYPE_UPDATE)
        						{
        							Sct.alert(this, "000239"); //삭제작업 외 다른 작업상태가 존재합니다.
        							obj.setColumn(e.row, e.columnid, e.oldvalue); //이전값으로 원복
        							return;
        						}
        					}
        				}
        			}
        		}, this);
        	}
        }

        /******************************************************************************
         * Function Name: gfn_rowTypeValidationDs
         * Description  : 데이터셋의 다중 상태값 허용 불가
         * Arguments    : grpArr		{Array}		적용할 Dataset 그룹
         * Return       :
         ******************************************************************************/
        this.gfn_rowTypeValidationDs = function(grpArr)
        {
        	for(var j = 0 ; j < grpArr.length; j++)
        	{
        		var dsArr = grpArr[j].split(" ");

        		for(var k=0; k<dsArr.length; k++)
        		{
        			var dsName = dsArr[k];
        			eval("var ds = this." + dsName + ";");
        			ds.rowTypeValidationDsArr = dsArr;

        			ds.addEventHandler("onvaluechanged", function(obj, e){

        				if(obj.getRowType(e.row) == Dataset.ROWTYPE_NORMAL) return;

        				// 2021-07-15, 조기종, 데이터셋 행추가와 수정은 가능하도록 수정
        				if(obj.getRowType(e.row) == Dataset.ROWTYPE_UPDATE)
        				{
        					return;
        // 					var dsArr = obj.rowTypeValidationDsArr;
        //
        // 					for(var l=0; l<dsArr.length; l++)
        // 					{
        // 						var dsName = dsArr[l];
        // 						eval("var objDs = this." + dsName + ";");
        //
        // 						var cnt = objDs.getCaseCount("dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT || dataset.getRowType(currow)==Dataset.ROWTYPE_DELETE");
        // 						if(cnt > 0)
        // 						{
        // 							Sct.alert(this, "000238"); //수정작업 외 다른 작업상태가 존재합니다.
        // 							obj.setColumn(e.row, e.columnid, e.oldvalue); //이전값으로 원복
        // 							return;
        // 						}
        // 					}
        				}
        				else if(obj.getRowType(e.row) == Dataset.ROWTYPE_INSERT)
        				{
        					return;
        // 					var dsArr = obj.rowTypeValidationDsArr;
        //
        // 					for(var l=0; l<dsArr.length; l++)
        // 					{
        // 						var dsName = dsArr[l];
        // 						eval("var objDs = this." + dsName + ";");
        //
        // 						var cnt = objDs.getCaseCount("dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE || dataset.getRowType(currow)==Dataset.ROWTYPE_DELETE");
        // 						if(cnt > 0)
        // 						{
        // 							Sct.alert(this, "000237"); //추가작업 외 다른 작업상태가 존재합니다.
        // 							obj.deleteRow(e.row);//이전값으로 원복
        // 							return;
        // 						}
        // 					}
        				}
        				else if(e.columnid == "DEL_CHECKBOX")
        				{
        					if(e.newvalue == "1")
        					{
        						//추가행을 삭제할경우 상태값 EMPTY
        						if(obj.getRowType(e.row) == Dataset.ROWTYPE_EMPTY) return;

        						var dsArr = obj.rowTypeValidationDsArr;

        						for(var l=0; l<dsArr.length; l++)
        						{
        							var dsName = dsArr[l];
        							eval("var objDs = this." + dsName + ";");

        							var cnt = objDs.getCaseCount("dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT || dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE");
        							if(cnt > 0)
        							{
        								Sct.alert(this, "000239"); //삭제작업 외 다른 작업상태가 존재합니다.
        								obj.setColumn(e.row, e.columnid, e.oldvalue); //이전값으로 원복
        								return;
        							}
        						}
        					}
        				}
        			}, this);
        		}
        	}
        }


        /******************************************************************************
         * Function Name: gfn_saveKeyArr
         * Description  : 데이터 저장전 저장할 key 값 dataset 변수에 저장
         * Arguments    : dsObj		{Dataset}	적용할 Dataset
        				: keyArr	{Array}		키값 필드명
         * Return       :
         ******************************************************************************/
        this.gfn_saveKeyArr = function(dsObj, keyArr)
        {
        	for(var i=0; i < dsObj.rowcount; i++)
        	{
        		//추가, 수정시 키값을 화면단에서 알수없는 경우는 배제함. 적용불가.
        		if(dsObj.getRowType(i) == Dataset.ROWTYPE_INSERT || dsObj.getRowType(i) == Dataset.ROWTYPE_UPDATE)
        		{
        			dsObj.keyExprStr	= "";
        			dsObj.findBoolean 	= true;
        			for(var j=0; j<keyArr.length; j++)
        			{
        				if(j == 0 )	dsObj.keyExprStr = keyArr[j] + "== '" + dsObj.getColumn(i, keyArr[j]) + "'";
        				else		dsObj.keyExprStr = dsObj.keyExprStr + " && " + keyArr[j] + "== '" + dsObj.getColumn(i, keyArr[j]) + "'";
        			}
        			break;
        		}
        	}
        }

        /******************************************************************************
         * Function Name: gfn_saveKeyArrCurrentRow
         * Description  : 현재 선택된 row를 기준으로 key 값 dataset 변수에 저장
         * Arguments    : dsObj		{Dataset}	적용할 Dataset
        				: keyArr	{Array}		키값 필드명
         * Return       :
         ******************************************************************************/
        this.gfn_saveKeyArrCurrentRow = function(dsObj, keyArr)
        {
        	var row = dsObj.rowposition;
        	if(row < 0) return;

        	dsObj.keyExprStr	= "";
        	dsObj.findBoolean 	= true;
        	for(var j=0; j<keyArr.length; j++)
        	{
        		if(j == 0 )	dsObj.keyExprStr = keyArr[j] + "== '" + dsObj.getColumn(row, keyArr[j]) + "'";
        		else		dsObj.keyExprStr = dsObj.keyExprStr + " && " + keyArr[j] + "== '" + dsObj.getColumn(row, keyArr[j]) + "'";
        	}
        }

        /******************************************************************************
         * Function Name: gfn_saveAfterFindRow
         * Description  : 저장후 조회후 변경된 row로 rowposition 설정
         * Arguments    : saveDsObj		{Dataset}		저장하는 Dataset
        				  searchDsObj	{Dataset}		조회하는 Dataset(저장Ds와 재조회시 조회Ds가 다를수있음)
         * Return       :
         ******************************************************************************/
        this.gfn_saveAfterFindRow = function(saveDsObj, searchDsObj)
        {
        	if(saveDsObj.findBoolean)
        	{
        		//저장시(gfn_saveKeyArr) true로 설정하고 조회후 false로 초기화
        		saveDsObj.findBoolean = false;

        		//2번째인자(searchDsObj)가없으면 저장Ds와 조회Ds가 일치
        		if(Sct.Util.isEmpty(searchDsObj)) searchDsObj = saveDsObj;

        		var rowIdx = searchDsObj.findRowExpr(saveDsObj.keyExprStr);

        		if(rowIdx > -1)	searchDsObj.set_rowposition(rowIdx);
        	}
        }

        /******************************************************************************
         * Function Name: gfn_duplicateCheck
         * Description  : Dataset내에서 중복체크
         * Arguments    : dsObj		{Dataset}		적용할 Dataset
         				: keyArr	{Array}			키값 필드명
         * Return       :
         ******************************************************************************/
        this.gfn_duplicateCheck_OLD = function(dsObj, keyArr)
        {
        	var keyExprStr = "";
        	for(var i=0; i<dsObj.rowcount; i++)
        	{
        		if(dsObj.getRowType(i) == Dataset.ROWTYPE_INSERT || dsObj.getRowType(i) == Dataset.ROWTYPE_UPDATE)
        		{
        			for(var j=0; j<keyArr.length; j++)
        			{
        				if(j == 0 )	keyExprStr = keyArr[j] + "== '" + dsObj.getColumn(i, keyArr[j]) + "'";
        				else		keyExprStr = keyExprStr + " && " + keyArr[j] + "== '" + dsObj.getColumn(i, keyArr[j]) + "'";
        			}

        			var fRow = dsObj.findRowExpr(keyExprStr);
        			trace("1 fRow>>> "+fRow);

        			if(fRow == i) {
        				fRow = dsObj.findRowExpr(keyExprStr, i);
        				trace("2 fRow>>> "+fRow);
        			}

        			trace("3 fRow>>> "+fRow);
        			trace("i>>> "+i);

        			if(fRow != i)
        			{
        				var idx1, idx2;
        				if(fRow > i)
        				{
        					idx1 = i + 1;
        					idx2 = fRow + 1;
        				}
        				else
        				{
        					idx1 = fRow + 1;
        					idx2 = i + 1;
        				}
        				Sct.alert(this, "000319", idx1 + "|" + idx2); //{0}행과 {1}행의 데이터가 중복되었습니다.
        				dsObj.set_rowposition(i);
        				return false;
        			}
        		}
        	}

        	return true;
        }

        /******************************************************************************
         * Function Name: gfn_duplicateCheck
         * Description  : Dataset내에서 중복체크
         * Arguments    : dsObj		{Dataset}		적용할 Dataset
         				: keyArr	{Array}			키값 필드명
         * Return       :
         ******************************************************************************/
        this.gfn_duplicateCheck = function(dsObj, keyArr)
        {
        	var keyExprStr = "";
        	for(var i=0; i<dsObj.rowcount; i++)
        	{
        		if(dsObj.getRowType(i) == Dataset.ROWTYPE_INSERT || dsObj.getRowType(i) == Dataset.ROWTYPE_UPDATE)
        		{
        			for(var j=0; j<keyArr.length; j++)
        			{
        				if(j == 0 )	keyExprStr = keyArr[j] + "== '" + dsObj.getColumn(i, keyArr[j]) + "'";
        				else		keyExprStr = keyExprStr + " && " + keyArr[j] + "== '" + dsObj.getColumn(i, keyArr[j]) + "'";
        			}

        			var fRow = dsObj.findRowExpr(keyExprStr);

        			//trace("1 fRow>>> "+fRow);
        			if(fRow == i) {
        				//if(i <= dsObj.rowcount) {
        					fRow = dsObj.findRowExpr(keyExprStr, (i+1));
        					//trace("2 fRow>>> "+fRow);
        				//}
        			}

        			//trace("3 fRow>>> "+fRow);
        			//trace("i>>> "+i);

        			if(fRow != i && fRow > -1)
        			{
        				var idx1, idx2;
        				if(fRow > i)
        				{
        					idx1 = i + 1;
        					idx2 = fRow + 1;
        				}
        				else
        				{
        					idx1 = fRow + 1;
        					idx2 = i + 1;
        				}
        				Sct.alert(this, "000319", idx1 + "|" + idx2); //{0}행과 {1}행의 데이터가 중복되었습니다.
        				dsObj.set_rowposition(i);
        				return false;
        			}
        		}
        	}

        	return true;
        };

        /******************************************************************************
         * Function Name: gfn_divSearchEnterEvent
         * Description  : div_search에서 enter 키 입력시 조회
         * Arguments    :
         * Return       :
         ******************************************************************************/
        this.gfn_divSearchEnterEvent = function()
        {
        	//조회 div 또는 조회버튼 클릭 이벤트가 존재하지않으면 return;
        	if(Sct.Util.isEmpty(this.div_search) || Sct.Util.isEmpty(this.fn_searchBtn)) return;

        	//Enter key Event 추가
        	this.div_search.addEventHandler("onkeyup", function(obj, e) {
        		if(e.keycode == 13)	this.fn_searchBtn();
        	}, this);
        }

        /******************************************************************************
         * Function Name: gfn_getScreenParam
         * Description  : Sct.chkOpenMenu 함수로 param 입력후 메뉴 open시
                          getOwnerFrame().arguments["param"] : null 로 초기화 후 return
         * Arguments    :
         * Return       : param
         ******************************************************************************/
        this.gfn_getScreenParam = function()
        {
        	var param = this.getOwnerFrame().arguments["param"];
        	this.getOwnerFrame().arguments["param"] = "";
        	return param;
        }

        /******************************************************************************
         * Function Name: gfn_setComboDs
         * Description  : sqlId를 통해서 콤보박스 inner Dataset을 설정
         * Arguments    : pForm					{Form}	적용할 Form
        				: comboDsParamArr		{Array} Json Arary
         * Json Param	: outDsName	: Return 받을 Dataset 명
        				: sqlId		: sql id
        				: param		: Dataset OR Json변수 ( 쿼리 파라미터 )
        				: bEmptyRow	: 콤보박스 공백 행 추가여부 (default : true)
         * Return       :
         ******************************************************************************/
        this.gfn_setComboDs = function(pForm, comboDsParamArr)
        {
        	var inDatasets  = "";
        	var outDatasets = "";
        	var sqlIds		= "";
        	var dynamicDsArr = new Array();

        	for(var i=0; i<comboDsParamArr.length; i++)
        	{
        		//outDataset 설정
        		if(Sct.Util.isEmpty(outDatasets))	outDatasets = comboDsParamArr[i].outDsName + "=output"+(i+1);
        		else								outDatasets = outDatasets + " " + comboDsParamArr[i].outDsName + "=output"+(i+1);

        		//sqlId 설정
        		if(Sct.Util.isEmpty(sqlIds))	sqlIds = comboDsParamArr[i].sqlId;
        		else							sqlIds = sqlIds + " " + comboDsParamArr[i].sqlId;

        		//쿼리 파라미터 설정
        		if(!Sct.Util.isEmpty(comboDsParamArr[i].param))
        		{
        			var inDsName = "";

        			//param 변수(쿼리 파라미터)는 Dataset OR JSON 이 두가지 형태로만 넘어옴
        			if(comboDsParamArr[i].param instanceof Dataset)
        			{
        				//DATASET
        				inDsName = comboDsParamArr[i].param.name;
        			}
        			else
        			{
        				//JSON
        				//var colArr = Object.keys(comboDsParamArr[i].param);
        				//var valArr = Object.values(comboDsParamArr[i].param);
        				//Object.values 함수 IE에서 사용불가 - 소스변경
        				var colArr = new Array();
        				var valArr = new Array();
        				for(k in comboDsParamArr[i].param)
        				{
        					colArr.push(k);
        					valArr.push(comboDsParamArr[i].param[k]);
        				}

        				//JSON 형태일경우 Dataset 형태로 변환하여 Service로 전달. Dataset명 ex)ds_input1, ds_input2 ....
        				var inDs = new Dataset;
        				inDs.name 	= "ds_input" + (i+1);
        				inDsName	= inDs.name;

        				//필드 추가
        				for(var j=0; j<colArr.length; j++)
        				{
        					inDs.addColumn(colArr[j], "string");
        				}

        				//row한줄 추가
        				var nRow = inDs.addRow();

        				//값 입력
        				for(var j=0; j<valArr.length; j++)
        				{
        					inDs.setColumn(nRow, colArr[j], valArr[j]);
        				}

        				//JSON -> Dataset 변환된경우 Service 호출후 파괴하기위하여 dynamicDsArr 변수에 저장
        				dynamicDsArr.push(inDs);
        				pForm.addChild(inDsName, inDs);
        			}

        			//inDataset 설정
        			if(Sct.Util.isEmpty(inDatasets))	inDatasets = "input" + (i+1) + "=" + inDsName;
        			else								inDatasets = inDatasets + " " + "input" + (i+1) + "=" + inDsName;
        		}
        	}


        	var svcId = "searchComboDs";
        	var params = "/commonController.do";
        	var argument = "method=getList "
        		+ "sqlId='" + sqlIds +"' " ;

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, null, null, false);

        	//조회 하기위해 생성한 조회조건 Dataset destroy
        	for(var i=0; i<dynamicDsArr.length; i++)
        	{
        		var dsDelete = pForm.removeChild(dynamicDsArr[i].name);
        		dsDelete.destroy();
        	}

        	for(var i=0; i<comboDsParamArr.length; i++)
        	{
        		//bEmptyRow	: 콤보박스 공백 행 추가여부 (default : true)
        		if(Sct.Util.isEmpty(comboDsParamArr[i].bEmptyRow)) comboDsParamArr[i].bEmptyRow = true;

        		if(comboDsParamArr[i].bEmptyRow)
        		{
        			//콤보박스 공백 행 추가
        			var outDs = eval("pForm." + comboDsParamArr[i].outDsName + ";");
        			outDs.insertRow(0);
        		}
        	}
        }

        /******************************************************************************
        * Function Name: _calmonth_Callback
        * Description  : Sct.Util.gfn_CalendarMonthByGrid, Sct.Util.gfn_CalendarMonth의 callback 함수 (년월달력 값선택후 기존 component에 값입력)
        * Arguments    : obj		{obj} 		calendar or grid
        				 arg		{String}	년월달력에서 선택한 값
        * Return       : 없음
        ******************************************************************************/
        this._calmonth_Callback = function(obj, arg)
        {
        	objPdvMonth = this.components[obj];

        	if (obj == "pdv_CalendarMonth")
        	{
        		if (!Sct.Util.isEmpty(arg))
        		{
        			objPdvMonth.compent.set_value(arg);
        			//이벤트 발생 요청
        			//if(this[this.gfn_getAbsName(objPdvMonth.compent) + "_onchanged"])
        			if(!Sct.Util.isEmpty(objPdvMonth.compent.onchanged))
        			{
        				objPdvMonth.compent.onchanged.fireEvent(objPdvMonth.compent, nexacro.ChangeEventInfo);
        			}
        			objPdvMonth.compent.setFocus();
        		}
        	}
        	else
        	{
        		if(!Sct.Util.isEmpty(arg)) {
        			var objGrid = objPdvMonth.compent;
        			var objDs = objGrid.getBindDataset();
        			var sMonthColNm = String(objGrid.getCellProperty("body", objPdvMonth.cell, "text")).replace("bind:", "");

        			objDs.setColumn(objPdvMonth.row, sMonthColNm, arg);

        			objGrid.updateToDataset();
        		}
        	}
        	// Remove Object form Parent Form
        	this.removeChild(obj);
        }

        /******************************************************************************
        * Function Name: gfn_isTimeHhmm
        * Description  : 시간(시분) 형식 값을 체크한다.
        * Arguments    : sTime		{String} 		4자리 문자열
        * Return       : true
        ******************************************************************************/
        this.gfn_isTimeHm = function(sTime)
        {
        	var nHour  = 0;
        	var nMinute  = 0;

        	if(Sct.Util.isEmpty(sTime))
        	{
        		return false;
        	}

            if(sTime.length != 4)
        	{
        		return false;
        	}

            if(this.gfn_isNum(sTime) != true )
        	{
        		return false;
        	}

        	nHour  = parseInt(sTime.substr(0,2), 10);

        	if(sTime.length > 2)
        	{
        		nMinute  = parseInt(sTime.substring(2,4), 10);
        	}

            if( nHour < 0 || nHour > 23 )
            {
        		return false;
            }

            if( nMinute < 0 || nMinute > 59 )
            {
        		return false;
            }

            return true;
        }

        /******************************************************************************
        * Function Name: gfn_isTimeHmd
        * Description  : 시간(시분초) 형식 값을 체크한다.
        * Arguments    : sTime		{String} 		6자리 문자열
        * Return       : true
        ******************************************************************************/
        this.gfn_isTimeHmd = function(sTime)
        {
        	var nHour  = 0;
        	var nMinute  = 0;
        	var nSecond  = 0;

        	if(Sct.Util.isEmpty(sTime))
        	{
        		return false;
        	}

            if(sTime.length != 6)
        	{
        		return false;
        	}

            if(this.gfn_isNum(sTime) != true )
        	{
        		return false;
        	}

        	nHour  = parseInt(sTime.substr(0,2), 10);

        	if(sTime.length > 2)
        	{
        		nMinute  = parseInt(sTime.substring(2,4), 10);
        	}

        	if(sTime.length > 4)
        	{
        		nSecond  = parseInt(sTime.substring(4,6), 10);
        	}

            if( nHour < 0 || nHour > 23 )
            {
        		return false;
            }

            if( nMinute < 0 || nMinute > 59 )
            {
        		return false;
            }

            if( nSecond < 0 || nSecond > 59 )
            {
        		return false;
            }

            return true;
        }

        /******************************************************************************
        * Function Name: gfn_isNum
        * Description  : 문자열이 숫자형식에 맞는지 여부 체크
        * Arguments    : sNum   : 체크할 문자열숫자 ( 예 : "-1234.56" ) (단, ","가 들어있으면 안 됨)
        * Return       : true
        ******************************************************************************/
        this.gfn_isNum = function (sNum)
        {
        	var c;
        	var point_cnt=0;
        	var ret=true;

        	if(Sct.Util.isEmpty(sNum) )
        	{
        		return false;
        	}

        	for( i = 0 ; i < sNum.length ; i++ )
        	{
        		c = sNum.charAt(i);
        		if( i == 0 && ( c == "+" || c == "-" ) );
        		else if( c >= "0" && c <= "9" );
        		else if( c == "." )
        		{
        			point_cnt++;
        			if( point_cnt > 1 )
        			{
        				ret = false;
        				break;
        			}
        		}
        		else
        		{
        			ret = false;
        			break;
        		}
        	}

        	return ret;
        }

        /******************************************************************************
        * Function Name: gfn_getSeq
        * Description  : 시스템번호 채번
        * Arguments    : param   {Json}		BIZ_CD, SHIP_CD, KEY_CD, SEQ_DATE, ISSUE_CODE, UPDATE_YN
        * Return       : 채번된번호
        ******************************************************************************/
        this.gfn_getSeq = function (param) {
        	//UPDATE_YN true이면 맥스값 저장, false이면 저장안함.
        	if(Sct.Util.isEmpty(param.UPDATE_YN)) param.UPDATE_YN = "Y";

        	var sqlId = "";
        	var method = "";
        	if(param.UPDATE_YN == "Y")
        	{
        		//프로시저호출
        		sqlId = "Common.getCmSequence";
        		method = "getCallable";
        	}
        	else
        	{
        		//단순조회
        		sqlId = "Common.getCmSequenceNo";
        		method = "getList";
        	}
        	// return받을 Dataset 초기화
        	var dsSeq = new Dataset;
        	dsSeq.name = "ds_temp_seq";
        	this.addChild(dsSeq.name, dsSeq);
        	dsSeq.addColumn("RETURN_VAL", "string", 256);

        	var svcId = "getSeq";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_temp_seq=output1";
        	var argument = "method=" + method + " "
        		+ "sqlId='" + sqlId + "' "
        		+ "BIZ_CD='" + param.BIZ_CD + "' "
        		+ "SHIP_CD='" + param.SHIP_CD + "' "
        		+ "KEY_CD='" + param.KEY_CD + "' "
        		+ "SEQ_DATE='" + param.SEQ_DATE + "' "
        		+ "ISSUE_CODE='" + param.ISSUE_CODE + "' ";

        	var callbackFunc = "fn_callback_seq";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);

        	var seq = dsSeq.getColumn(0, "RETURN_VAL");

        	// 데이터셋 제거
        	var objRemove = this.removeChild(dsSeq.name);
        	objRemove.destroy();
        	objRemove = null;

        	return seq;
        };

        /**********************************************************************************
         * 작  성  자  :  신나라
         * 함  수  명	:  gfn_enableComponent
         * 설      명	:  DIV 전체 READONLY or ENABLE 작업가능하도록
         https://www.playnexacro.com/#show:techtip:1131 참조함
         * 입      력	:
         * 반      환	:
         **********************************************************************************/
        /**
         * @class Div하위에 있는 Component들에 대해 Enable,ReadOnly=true/false
         * @param {boolean} bTF        : Component들에 대해 Enable,ReadOnly=true/false
         * @param {boolean} bCompTFprop : true  - Component.userData.compTFprop = ENABLE 또는 READONLY 존재 하는 경우만 처리
         *                                false - 모든 Component대상
         * @param {boolean} bComTFexcept : true  - Component.userData.comTFexcept = true : 인 경우에는 안함 true/false할 때 제외(안함)
         *                                 false - 모든 Component대상
         */

        this.gfn_enableComponent = function(objDiv, bTF, bCompTFprop, bComTFexcept)
        {
         var arrComp = objDiv.form.components;
         var nLength = arrComp.length;

         for(var i=0; i<nLength; i++)
         {
          var sProp   = arrComp[i].compTFprop;  //속성이 존재 하는 컬럼들만 처리
          var sExcept = arrComp[i].comTFexcept;

          if (arrComp[i] instanceof nexacro.Div){
           if (bComTFexcept == true && sExcept == "true") continue;
           var divUrl = arrComp[i].url;
           if (!Sct.Util.isEmpty(divUrl))
           {
            arrComp[i].set_enable(bTF);
            continue; //url이 존재 시 하위 form은 안함
           }

           this.gfn_enableComponent(arrComp[i], bTF, bCompTFprop, bComTFexcept)
           continue;
          }

          if (bCompTFprop == true)
          {
           if (this.gfn_isNull(sProp)) continue;
           if (bComTFexcept == true && sExcept == "true") continue;

           sProp = sProp.toUpperCase()
           if      (sProp == "ENABLE")   arrComp[i].set_enable(bTF);
           else if (sProp == "READONLY") arrComp[i].set_readonly(!bTF);
          }
          else
          {
           if (bComTFexcept == true)
           {
            var sExcept = arrComp[i].comTFexcept;  //속성이 존재 하는 컬럼들만 처리
            if (sExcept == "true") continue;
           }

            if      (arrComp[i] instanceof nexacro.Edit)     arrComp[i].set_readonly(!bTF);
            else if (arrComp[i] instanceof nexacro.TextArea) arrComp[i].set_readonly(!bTF);
           else if (arrComp[i] instanceof nexacro.MaskEdit) arrComp[i].set_readonly(!bTF);
            else if (arrComp[i] instanceof nexacro.CheckBox) arrComp[i].set_readonly(!bTF);
            else if (arrComp[i] instanceof nexacro.Combo)    arrComp[i].set_readonly(!bTF);
           else if (arrComp[i] instanceof nexacro.Radio)    arrComp[i].set_readonly(!bTF);
           else if (arrComp[i] instanceof nexacro.Calendar) arrComp[i].set_readonly(!bTF);
           else if (arrComp[i] instanceof nexacro.Button)   arrComp[i].set_enable(bTF);
                    else if (arrComp[i] instanceof nexacro.Grid)     arrComp[i].set_readonly(!bTF);
          }
         }
        };

        /**********************************************************************************
         * 작  성  자  :  신나라
         * 함  수  명	:  gfn_setCompTFprop
         * 설      명	:  DIV 전체 READONLY or ENABLE 작업 전 최초 값 원복하기 위해  https://www.playnexacro.com/#show:techtip:1131 참조함
         * 입      력	:
         * 반      환	:
         **********************************************************************************/
        /**
         * @class Div하위에 있는 Component들에 대해 작업가능여부 Setting
         *              작업가능할 때만 Component.userData.compTFprop = READONLY 또는 ENABLE 값을 넣음.
         *              enable=false 또는 readonly=true인 component 들은 Component.userData.compTFprop = '' 임 (즉 Setting안함)
         *                (이유, 차후 enable=true, readonly=false를 안해야 되기 때문)
         * @개발이유 화면에서 특정시점에 각 컴포넌트들에 대해서 작업가능한상태의 컴포넌트인지의 상태를 보존 후
         *            this.gfn_enableComponent() 함수를 호출하여 component들을 false처리 하고
         *            다시 위에서 보존하고 있던 상태대로 원복 하기 위해서임
         * @param {Object} objDiv - 작업할 div
         * @호출예 this.gfn_setCompTFprop (this.div_middle);   //컴포넌트 속성 보존
         *          this.gfn_enableComponent(this.div_middle, false, true); //컴포넌트 속성 작업불가 처리
         *          this.gfn_enableComponent(this.div_middle, true, true);  //컴포넌트 속성 보존된 기준으로 원복
         */
        this.gfn_setCompTFprop = function(objDiv)
        {
            var arrComp = objDiv.form.components;
            var nLength = arrComp.length;

            for(var i=0; i<nLength; i++)
            {
           //div는 recursive
                 if (arrComp[i] instanceof nexacro.Div){
                     this.gfn_setCompTFprop(arrComp[i]);
            continue;
                 }

                 var enable   = arrComp[i].enable;
                 var readonly = arrComp[i].readonly;

                //작업가능
                 if      (enable == true && readonly == false){
                    if      (arrComp[i] instanceof nexacro.Edit)     arrComp[i].compTFprop = "READONLY";
                    else if (arrComp[i] instanceof nexacro.TextArea) arrComp[i].compTFprop = "READONLY";
                    else if (arrComp[i] instanceof nexacro.MaskEdit) arrComp[i].compTFprop = "READONLY";
                    else if (arrComp[i] instanceof nexacro.CheckBox) arrComp[i].compTFprop = "READONLY";
                    else if (arrComp[i] instanceof nexacro.Combo)    arrComp[i].compTFprop = "READONLY";
                    else if (arrComp[i] instanceof nexacro.Radio)    arrComp[i].compTFprop = "READONLY";
                    else if (arrComp[i] instanceof nexacro.Calendar) arrComp[i].compTFprop = "READONLY";
           else if (arrComp[i] instanceof nexacro.Grid)     arrComp[i].compTFprop = "READONLY";

                //readnonly
                }else if (enable == true && readonly == true){
                    //arrComp[i].compTFprop = "READONLY";

                //enable
                }else if (enable == false){
                    //arrComp[i].compTFprop = "ENABLE";

                }else if (enable == true && this.gfn_isNull(readonly)){
                    if (arrComp[i] instanceof nexacro.Button)   arrComp[i].compTFprop = "ENABLE";
                }else{
                    //skip : 이 컴포넌트들은 거의 line, static등임
                }
            }
        };

        /******************************************************************************
        * Function Name: gfn_getAuth
        * Description  : 화면권한 ex) 0 : 권한없음 1 : 권한있음
        * Arguments    : param   form , authType(초기화 : 0 조회 : 1 등록 : 2 수정 : 3 삭제 : 4+ 발행 : 5 전자결제 : 6 all : 7)
        * Return       : 0 : 권한없음 1 : 권한있음 or 1111111
        ******************************************************************************/
        this.gfn_getAuth = function (form,authType) {

        	var vAuth = form.getOwnerFrame().arguments["buttonAuth"];

        	if(authType == 7) {
        		return vAuth;
        	} else {
        		return vAuth[authType];
        	}

        };

        /******************************************************************************
        * Function Name: gfn_getAuthYn
        * Description  : 화면권한 ex) 0 : 권한없음 1 : 권한있음
        * Arguments    : param   form , authType(초기화 : 0 조회 : 1 등록 : 2 수정 : 3 삭제 : 4+ 발행 : 5 전자결제 : 6)
        * Return       : 0 : 권한없음 1 : 권한있음
        ******************************************************************************/
        this.gfn_getAuthYn = function (form,authType) {

        	var vAuth = form.getOwnerFrame().arguments["buttonAuth"];
        	var vAuthYn = vAuth[authType];

        	return vAuthYn;
        };

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
