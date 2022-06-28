//XJS=cur_com.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"lib::sct_util.xjs");
        this.registerScript(path, function() {
        this.executeIncludeScript("lib::sct_util.xjs"); /*include "lib::sct_util.xjs"*/
        /**********************************************************************************
         * 작  성  자  :  배영걸
         * 함  수  명	:  gfn_setFnCurrencyFormat
         * 설      명	:  통화코드에 따라 그리드와 maskEdit 의 format 형식을 설정한다.
         * 입      력	:  targetObj   : 그리드 또는 maskEdit
         :  sComponent  : 그리드-컬럼명 또는 maskEdit-컴포넌트id
         :  sCurrencyCd : 통화코드 또는 그리드-통화코드의 컬럼명, 통화코드 콤보박스의  id
         :  sBand	   : 그리드 적용 영역 (body,summary)
         **********************************************************************************/
        this.gfn_setFnCurrencyFormat = function (targetObj, sComponent, sCurrencyCd, sBand)
        {
        	// 객체가 그리드이면 그리드 Format 적용
        	if (targetObj instanceof Grid)
        	{
        		// 지정 band값 없으면 body만 적용
        		if (Sct.Util.isEmpty(sBand))
        		{
        			sBand = ["body"];
        		}

        		this._gfn_setGridCurrencyFormat(targetObj, sComponent, sCurrencyCd, sBand);
        	}
        	// 객체가 그리드 아니면 MaskEdit Format 적용
        	else
        	{
        		this._gfn_setMaskCurrencyFormat(targetObj, sComponent, sCurrencyCd);
        	}
        };

        /**********************************************************************************
         * 작  성  자  :  배영걸
         * 함  수  명	:  _gfn_setGridCurrencyFormat
         * 설      명	:  그리드의 format 형식을 설정한다.
         **********************************************************************************/
        this._gfn_setGridCurrencyFormat = function (grdTarget, sColumnId, sCurrencyCd, sBand)
        {
        	var currencyCd = sCurrencyCd;
        	var sMask;
        	var sMaskFn;

        	if (Sct.Util.isEmpty(sCurrencyCd))
        	{
        		currencyCd = this.gfn_getFnCurrencyCd();
        	}
        	// 통화 파라미터가 널이면 기준통화

        	var fRow = nexacro.getApplication().gds_currencyinfo.findRow("CURRENCY_CD", currencyCd);


        	for (var bandId in sBand)
        	{
        		var bandNm = sBand[bandId];

        		// 통화값인 경우 고정항목
        		if (fRow > -1)
        		{
        			sMask = this.gfn_getFiCurrencyMask(currencyCd);
        		}
        		else if (bandNm == "summary" || bandNm == "Summary" || bandNm == "Summ")
        		{
        			//sMask = "#,##0.00"; //거래금액 summary일경우
        			sMask = this.gfn_getFiCurrencyMask(currencyCd);
        		}
        		else
        		{
        			// (sCurrencyCd가 통화코드가 아닌 컬럼명이면)
        			sMask = "expr:dataset.parent.gfn_getFiCurrencyMask(dataset.getColumn(currow, '" + currencyCd + "'))";
        		}
        		for (var colIdx in sColumnId)
        		{
        			var colId = sColumnId[colIdx];
        			var cellIdx = this._gfn_getBindCellIndex(grdTarget, bandNm, colId);
        			grdTarget.setCellProperty(bandNm, cellIdx, "maskeditformat", sMask);
        		}
        	}
        };

        /**********************************************************************************
         * 작  성  자  :  배영걸
         * 함  수  명	:  _gfn_setMaskCurrencyFormat
         * 설      명	:  maskEdit의 format 형식을 설정한다.
         **********************************************************************************/
        this._gfn_setMaskCurrencyFormat = function (divTarget, sComponent, sCurrencyCd)
        {
        	var currencyCd = sCurrencyCd;
        	var sMask;
        	var sMaskFn;

        	if (Sct.Util.isEmpty(sCurrencyCd))
        	{
        		currencyCd = this.gfn_getFnCurrencyCd();
        	}

        	// 통화코드인지 아닌지 판단
        	var fRow = nexacro.getApplication().gds_currencyinfo.findRow("CURRENCY_CD", currencyCd);


        	for (var compIdx in sComponent)
        	{
        		var compId = sComponent[compIdx];

        		/* 통화값인 경우 고정항목 */
        		if (fRow > -1)
        		{
        			sMask = this.gfn_getFiCurrencyMask(currencyCd);
        		}
        		/* 위 항목이 아니면 동적 컬럼으로 본다 (sCurrencyCd가 통화코드가 아닌 컬럼명이면) */
        		else
        		{
        			var objCurrencyComp = eval("divTarget.form." + sCurrencyCd + ";");
        			currencyCd = objCurrencyComp.value;

        			// 초기 통화없는 경우 처리
        			if (Sct.Util.isEmpty(currencyCd))
        			{
        				currencyCd = this.gfn_getFnCurrencyCd();
        			}

        			// Mask 적용용 거래통화에 이벤트 추가
        			if (Sct.Util.isEmpty(objCurrencyComp.isEvt))
        			{
        				var fullName = this.gfn_getObjFullNm(objCurrencyComp);
        				var bindInfo = this.gfn_getBindInfo(fullName);
        				var objDataset = eval("this." + bindInfo.datasetid + ";");

        				objDataset._targetColId = bindInfo.columnid;
        				objDataset._targetObjs = divTarget;
        				objDataset._targetComps = sComponent;

        				objDataset.addEventHandler("oncolumnchanged", this._gfn_setCboCurrencyCd_oncolumnchanged, this);
        				objDataset.addEventHandler("onrowposchanged", this._gfn_setCurrencyDS_onrowposchanged, this);

        				objCurrencyComp.isEvt = "Y";
        			}

        			sMask = this.gfn_getFiCurrencyMask(currencyCd);
        		}

        		var objComp = eval("divTarget.form." + compId + ";");

        		objComp.set_format(sMask);
        	}
        };

        /**********************************************************************************
         * 작  성  자  :  배영걸
         * 함  수  명	:  gfn_getFnCurrencyCd
         * 설      명	:  회사코드에 해당되는 기준통화를 return한다.
         **********************************************************************************/
        this.gfn_getFnCurrencyCd = function ()
        {
        	var companyCd = nexacro.getApplication().gds_userInfo.getColumn(0, "COMPANY_CD");
        	var fRow = nexacro.getApplication().gds_company.findRow("COMPANY_CD", companyCd);
        	return nexacro.getApplication().gds_company.getColumn(fRow, "CURRENCY_CD");
        };

        /**********************************************************************************
         * 작  성  자  :  배영걸
         * 함  수  명	:  gfn_getFiCurrencyMask
         * 설      명	:  통화코드에 해당하는 maskformat 형식을 return한다
         * 입      력	:  currencyCd : 통화코드
         * 반      환	:  maskformat : 마스크 포맷형식 ex) #,##0.00
         **********************************************************************************/
        this.gfn_getFiCurrencyMask = function (currencyCd)
        {
        	// CODE값 AMOUNT : 기준통화금액 , EXCHANGE_AMT : 외화금액
        	var fRow = nexacro.getApplication().gds_currencyinfo.findRow("CURRENCY_CD", currencyCd);
        	var sMask = "";
        	if (fRow < 0)
        	{
        		// 통화가아닐경우 기준통화 마스크포맷
        		currencyCd = this.gfn_getFnCurrencyCd();
        		fRow = nexacro.getApplication().gds_currencyinfo.findRow("CURRENCY_CD", currencyCd);
        	}
        	return nexacro.getApplication().gds_currencyinfo.getColumn(fRow, "SET_VALUE");
        };

        /**********************************************************************************
         * 작  성  자  :  배영걸
         * 함  수  명	:  gfn_getFiCurrencyMask
         * 설      명	:  통화코드에 해당하는 maskformat 형식을 return한다
         * 입      력	:  currencyCd : 통화코드
         * 반      환	:  maskformat : 마스크 포맷형식 ex) #,##0.00
         **********************************************************************************/
        this._gfn_getBindCellIndex = function (grdTarget, bandNm, colId)
        {
        	var cellIdx = grdTarget.getBindCellIndex("body", colId);

        	if (bandNm.toLowerCase() == "summary")
        	{
        		var nCol = grdTarget.getCellProperty("body", cellIdx, "col");
        		var nCnt = grdTarget.getCellCount("summary");

        		for (var n = 0; n < nCnt; n++)
        		{
        			if (nCol == grdTarget.getCellProperty("summary", n, "col"))
        			{
        				cellIdx = n;
        				break;
        			}
        		}
        	}

        	return cellIdx;
        };

        /**********************************************************************************
         * 작  성  자  :  배영걸
         * 함  수  명	:  gfn_getObjFullNm
         * 설      명	:  컴포넌트의 fullname 리턴
         * 입      력	:  objComp : 컴포넌트
         * 반      환	:  컴포넌트 FULLNAME ex)"div_cont.grd_head"
         **********************************************************************************/
        this.gfn_getObjFullNm = function (objComp)
        {
        	if (objComp.parent.parent.name == "WorkFrame")
        	{
        		return objComp._fullName;
        	}
        	else if (objComp.parent == nexacro.getApplication().getActiveForm().div_form.form)
        	{
        		// objComp.parent -> objComp.parent.parent 로 수정
        		return objComp._fullName;
        	}
        	else
        	{
        		if (Sct.Util.isEmpty(objComp._fullName))
        		{
        			objComp._fullName = objComp.parent.name + "." + objComp.name;
        		}
        		else
        		{
        			objComp._fullName = objComp.parent.name + "." + objComp._fullName;
        		}

        		objComp.parent._fullName = objComp._fullName;

        		return this.gfn_getObjFullNm(objComp.parent);
        	}
        };

        /**********************************************************************************
         * 작  성  자  :  배영걸
         * 함  수  명	:  gfn_getBindInfo
         * 설      명	:  component의 full path id를 받아 연결된 데이터셋명을 반환
         * 입      력	:  compId : this를 제외한 아이디 ex) div_Data.div_Main.cbo_CurrencyCd
         * 반      환	:  string
         **********************************************************************************/
        this.gfn_getBindInfo = function (compId)
        {
        	// bindItem 정보
        	var bindInfo = this.binds;

        	for (var a in bindInfo)
        	{
        		if (bindInfo[a].compid == compId)
        		{
        			return bindInfo[a];
        		}
        	}

        	return "";
        };


        /*****************************************************
         * 그리드 행변경 이벤트 처리
         * (외부에서 콜하지 않는다)
         ****************************************************/
        this._gfn_setCurrencyDS_onrowposchanged = function (obj, e)
        {
        	var nRow = e.newrow;

        	var targetColId = obj._targetColId;
        	var targetObjs = obj._targetObjs;
        	var targetComps = obj._targetComps;
        	if (nRow > -1)
        	{
        		/* MaskEdit mask 변경  */
        		var currencyCd = obj.getColumn(nRow, targetColId);
        		this.gfn_setFnCurrencyFormat(targetObjs, targetComps, currencyCd);
        		/* MaskEdit mask 변경  */
        	}
        };

        /***********************************************************************
         * Grid 통화변경시 Mask에 사용되는 콤보통화 변경 이벤트 처리용
         * (외부에서 콜하지 않는다)
         **********************************************************************/
        this._gfn_setCboCurrencyCd_oncolumnchanged = function (obj, e)
        {
        	var columnId = e.columnid;

        	var targetColId = obj._targetColId;
        	var targetObjs = obj._targetObjs;
        	var targetComps = obj._targetComps;
        	if (columnId == targetColId)
        	{
        		// 거래통화 변경
        		// 콤보셀에 선택된 환율이 기준통화인 경우 환율을 1로 변경하고 수정못하게 한다.
        		var currencyCd = e.newvalue;
        		/* MaskEdit mask 변경  */
        		this.gfn_setFnCurrencyFormat(targetObjs, targetComps, currencyCd);
        		/* MaskEdit mask 변경  */
        	}
        };

        /**********************************************************************************
         * 작  성  자  :  배영걸
         * 함  수  명	:  gfn_roundAmt
         * 설      명	:  통화코드에 해당하는 maskformat 형식으로 반올림한다.
         * 입      력	:  amt        : 금액
         :  currencyCd : 통화코드
         * 반      환	:  소수점 반올림한 금액
         **********************************************************************************/
        this.gfn_roundAmt = function (amt, currencyCd)
        {
        	// 부동소수점관련
        	var companyCd = nexacro.getApplication().gds_userInfo.getColumn(0, "COMPANY_CD");
        	var fRow = nexacro.getApplication().gds_currencyinfo.findRowExpr("COMPANY_CD == '" + companyCd + "' && CURRENCY_CD == '" + currencyCd + "'");
        	if (fRow < 0)
        	{
        		currencyCd = this.gfn_getFnCurrencyCd();
        		fRow = nexacro.getApplication().gds_currencyinfo.findRowExpr("COMPANY_CD == '" + companyCd + "' && CURRENCY_CD == '" + currencyCd + "'");
        	}
        	var decimalSize = nexacro.getApplication().gds_currencyinfo.getColumn(fRow, "DECIMAL_SIZE");

        	return nexacro.round(amt, decimalSize);
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
         * 작  성  자  :  배영걸
         * 함  수  명	:  gfn_getSalesUnitPrice
         * 설      명	:  판매단가 테이블에 SETUP 되어있는 단가 RETURN(고객사별)
         * 입      력	:  custCd : 고객사코드, itemCd : 품목코드
         * 반      환	:  판매단가
         **********************************************************************************/
        this.gfn_getSalesUnitPrice = function (custCd, itemCd)
        {
        	if (Sct.Util.isEmpty(custCd) || Sct.Util.isEmpty(itemCd))
        	{
        		return 0;
        	}
        	// 입력파라미터 가 null일때 0 return


        	// 로그인한 유저의 COMPANY_CD와 biz_cd가져오기
        	var companyCd = nexacro.getApplication().gds_userInfo.getColumn(0, "COMPANY_CD");
        	var bizCd = nexacro.getApplication().gds_userInfo.getColumn(0, "BIZ_CD");

        	// return받을 Dataset 초기화
        	var dsUnitPrice = new Dataset;
        	dsUnitPrice.name = "ds_unit_price";
        	this.addChild(dsUnitPrice.name, dsUnitPrice);
        	dsUnitPrice.addColumn("UNIT_PRICE", "string", 256);


        	var svcId = "getSalesUnitPrice";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_unit_price=output1";
        	var argument = "method=getList "
        		 + "sqlId=getSalesUnitPrice ";
        	var callbackFunc = "";

        	argument += "BIZ_CD=" + bizCd + " ";
        	argument += "CUST_CD=" + custCd + " ";
        	argument += "ITEM_CD=" + itemCd + " ";

        	this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, '', false);

        	if (dsUnitPrice.rowcount == 0)
        	{
        		// 데이터셋 제거
        		var objRemove = this.removeChild(dsUnitPrice.name);
        		objRemove.destroy();
        		objRemove = null;
        		return 0;
        		// 단가정보가 없으면 0을 return
        	}
        	var unitPrice = dsUnitPrice.getColumn(0, "UNIT_PRICE");

        	// 데이터셋 제거
        	var objRemove = this.removeChild(dsUnitPrice.name);
        	objRemove.destroy();
        	objRemove = null;

        	return unitPrice;
        };

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
