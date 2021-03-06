//XJS=sct_util.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"lib::sct_jsnamespace.xjs");
        this.addIncludeScript(path,"lib::sct_eco.xjs");
        this.registerScript(path, function() {
        this.executeIncludeScript("lib::sct_jsnamespace.xjs"); /*include "lib::sct_jsnamespace.xjs"*/;
        this.executeIncludeScript("lib::sct_eco.xjs"); /*include "lib::sct_eco.xjs"*/;

        var CONST_ASC_MARK = "▲";
        var CONST_DESC_MARK = "▼";
        var gScForm;

        /*
         * 2022-04-04 추가, 조기종
         * 문자열의 바이트수 리턴
         * @returns {Number}
         */
        String.prototype.byteLength = function()
        {
        	let l = 0;

        	for (let idx = 0; idx < this.length; idx++)
        	{
        		const c = escape(this.charAt(idx));

        		if (c.length == 1) l++;
        		else if (c.indexOf("%u") != -1) l += 2;
        		else if (c.indexOf("%") != -1) l += c.length/3;
        	}

        	return l;
        };

        Sct = {
        	/**
        	* 함  수  명	:  logout
        	* 입      력	:
        	* 반      환	:
        	* 기      능	:  로그아웃
        	*/
        	logout : function ()
        	{
        		if(nexacro.Browser == "Runtime")
        		{
        			if(nexacro.getApplication().confirm("로그아웃 하시겠습니까?")) nexacro.getApplication().exit(); //Runtime
        		}
        		else
        		{
        			window.top.location.reload(true);   //html5
        		}
        	},

        	/**
        	* 함  수  명	: 	transaction
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
        	transaction : function (form, svcID, params, inDatasets, outDatasets, argument, callbackFunc, showProgress, bAsync, bBinary)
        	{
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
        		var _gfn_tranCallback = function (strSvcId, nErrorCode, strErrorMsg)
        		{
        			if(nErrorCode != 0)
        			{
        // 					gfn_alert(form, "000022", "");
        				// Alert Logic
        			}

        			//==========================
        			// 공통적으로 처리할 부분이 있으면, 코딩
        			// TODO
        			//==========================

        			if(!Sct.Util.isEmpty(callbackFunc)) {
        				var sCallBack =  'form.' + callbackFunc + '("' + strSvcId + '", ' + nErrorCode + ', "' + strErrorMsg + '");';
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

        		if(!Sct.Util.isEmpty(outDatasets))
        		{
        			var arrOutDs = outDatasets.split(" ");

        			for(var i=0; i<arrOutDs.length; i++)
        			{
        			//nexacro.getApplication().trace("form." + (arrOutDs[i].split("="))[0]);

        				//"ds_list=output1"; -> outDs[0] : ds_list, outDs[1] : output1
        				var outDs = arrOutDs[i].split("=");

        				var serverOutDs = eval("form." + outDs[0]);

        				if(!Sct.Util.isEmpty(serverOutDs))
        				{
        					serverOutDs.keystring = "";

        					//페이징 Dataset 인 경우
        					if(!Sct.Util.isEmpty(serverOutDs.pageRowCount))
        					{
        						//Paging form 변수 추가 (Service 에서 return 받아 화면단으로 넘어오는 변수)
        						form.pageTotRowCount = 0;
        						form.pageBlock = 0;
        						form.pageNo = 1;

        						//페이징 파라미터 (Service로 전달하는 변수) pageRowCount, pageNo
        						argument = argument + "pageRowCount=" + serverOutDs.pageRowCount + " ";
        						argument = argument + "pageNo=" + serverOutDs.pageNo + " ";
        					}
        				}
        			}
        		}

        		var menuCd = form.getOwnerFrame().form.menuUrl;
        		if(Sct.Util.isEmpty(menuCd)) menuCd = "";
        // 				menuCd = this.parent.menuUrl;
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
        				//tableNm = "FailInitDs";
        				tableNm = "";
        			}

        			//trace("테이블 명 : "+tableNm);
        		}
        		var service		= nexacro.getEnvironment().services["svcurl"];
        		var strSvcID	= svcID;
        		var svcparam	= params;
        // 			var svcUrl 	= "XUP_SERVER::FrontControllerServlet.do?service=xupservice&domain=hsp_srv&" + svcparam
        // 						+ "&format=" + "xml" + "&version=" + "xplatform";
        		var svcUrl 	= service.url + "" + params;

        		// Model Input parameters
        		var strInDatasets = inDatasets;
        		var strOutDatasets = outDatasets;
        		var strArgument;
        		var companycd = nexacro.getApplication().gv_company;

        		// 2021-05-20 파라미터에 COMPANY_CD= '001' 넣지 않도록 수정
        		//if(companycd == null || companycd == ""){companycd = "001";}
        		if(tableNm == ""){
        			strArgument = argument + " REG_PGM_ID=" + nexacro.wrapQuote(menuCd) + " DEF_LANG="+nexacro.getApplication().gv_locale+" " + " M_COMPANY_CD=" + companycd;
        		}else{
        			strArgument = argument + " REG_PGM_ID=" + nexacro.wrapQuote(menuCd) + " DEF_LANG="+nexacro.getApplication().gv_locale+" TABLENM="+tableNm+" " + " M_COMPANY_CD=" + companycd;
        		}

        		var _dsTransInfo = Sct.Util.isCheckDs(form, "dsTransInfo");
        		//argument --- > dataset으로 처리
        		var _dsParamInfo = Sct.Util.isCheckDs(form, "dsParamINfo");
        		form.dsTransInfo = _dsTransInfo;
        		form.dsParamINfo = _dsParamInfo;
        		if(form.dsTransInfo.getColCount() < 1)
        		{
        			form.dsTransInfo.addColumn( "strSvcID", "string" );
        			form.dsTransInfo.addColumn( "strURL", "string" );
        			form.dsTransInfo.addColumn( "strInDatasets", "string" );
        			form.dsTransInfo.addColumn( "strOutDatasets", "string" );
        		}
        		//argument = argument.replace(/null/g, "").replace(/undefined/g, "");
        		form.dsTransInfo.clearData();
        		form.dsParamINfo.clear();

        		var nPos = argument.indexOf("&nbsp;");
        		var arrParam = "";
        		if(nPos >= 0) {
        			arrParam = argument.split("&nbsp;");
        		} else {
        			arrParam = argument.split(" ");
        		}

        		for(var p=0; p<arrParam.length;p++){
        			var datasetNm 	= arrParam[p].split("=");

        			if( datasetNm.length != 2 ) continue;

        			var strArgServer 	= datasetNm[0].toString().trim();
        			var strArgClient  	= datasetNm[1].toString().trim();

        				form.dsParamINfo.addColumn(strArgServer);

        				if(form.dsParamINfo.rowcount ==0)
        				{
        					form.dsParamINfo.addRow();
        				}
        				form.dsParamINfo.setColumn(0,strArgServer,strArgClient);
        		}
        		var dsInputName = Sct.Util.splitDsName(inDatasets,0);
        		var dsOutputName = Sct.Util.splitDsName(outDatasets,1);
        		for (var i = 0; i < dsInputName.length ; i++ ){
        			var row = form.dsTransInfo.addRow();
        			if (i == 0)
        			{
        				form.dsTransInfo.setColumn(row,0, strSvcID);
        				form.dsTransInfo.setColumn(row,1, params);
        				form.dsTransInfo.setColumn(row,"MENU_ID", "value");
        			}
        			form.dsTransInfo.setColumn(row,2, dsInputName[i]);
        		}

        		for (var i = 0; i < dsOutputName.length ; i++ ){
        			if(i > 0){
        				row = form.dsTransInfo.addRow();
        			}

        			form.dsTransInfo.setColumn(row,3, dsOutputName[i]);
        		}

        // 			strInDatasets   = "__DS_PARAM_INFO__=dsParamINfo __DS_TRANS_INFO__=dsTransInfo gds_userInfo=gds_userInfo gds_pageInfo=gds_pageInfo " + strInDatasets;
        		strInDatasets   = "__DS_TRANS_INFO__=dsTransInfo " + strInDatasets;
        //		    strOutDatasets = Ex.util._searchPageDatasetCheck(outDatasets);  //out 데이터셋 페이징처리 부분 체크

        		form.transaction(strSvcID, svcUrl, strInDatasets, strOutDatasets, strArgument, sCallback, bAsync);
        	},

        	/**
        	 * 공통 팝업 modal
        	 *@param {XaComp} this(현재폼)
        	 *@param {object} arguments
        	 *@param {string | function} callback인자값
        	 *@return
        	 * callback function
        	 * @example
        	 * var oData ={
        	 *sId  : "singledetail",   //callback id
        	 *sUrl : "sample::Pattern_01.xfdl",   //url
        	 *bshowtitlebar : true, //title bar
        	 *bAutoSize  : true,    //autosize
        	 *bResize    : false,   //resize
        	 *bShowtatusbar : false,  //statusbar
        	 *sOpenalign    : "center middle",  //align
        	 *oArgs :{'arg1':'55555',
        	 *        'arg2':'333333'
        	 *      }          // argument
        	 * };
        	 *
        	 * //팝업 테스트
        	 *Sct.showModal(this,oData,function(){
        	 *
        	 * var pThis= this.fobj;
        	 *
        	 * trace(" pThis.name : " + pThis.name);
        	 * });
        	 * @memberOf Sct
        	 */
        	showModal : function(o,oData,fncCallback)
        	{
        		var pThis = o;
        		var sId = oData.sId + "_" + Math.random();
        		var sBackground = Eco.isEmpty(oData.sBackground) ? "" : oData.sBackground;
        		if(Eco.isEmpty(oData)){
        			Eco.Logger.error({message: "unKnown calback argument!!!", elapsed: true});
        			return;
        		}

        		var cf = new ChildFrame;
        		cf.init(sId);
        		cf.set_formurl(oData.sUrl);
        		cf.set_showtitlebar(oData.bshowtitlebar);
        		cf.set_layered(false);
        		cf.set_autosize(oData.bAutoSize);
        		cf.set_resizable(oData.bResize);
        		cf.set_showstatusbar(oData.bShowstatusbar);
        		cf.set_openalign(oData.sOpenalign); //화면의 중앙에 위치
        		cf.style.set_background(sBackground);   //backround color
        		cf.set_dragmovetype("all");
        		cf.arguments = {};
        		//cf.arguments[pThis.name] = pThis.name;
        		cf.arguments["fObj"] = pThis;
        		cf.arguments["popup_oArg"] = oData.oArgs;
        		cf.arguments["p_callback"] = fncCallback;
        		//pThis.variant  = "";
        		var popWin = new ChildFrame;

        		cf.showModal(sId, pThis.getOwnerFrame() ,oData.oArgs,  pThis ,function(svcid,variant){

        			var p_variant = Eco.isEmpty(this.variant) ? variant : this.variant;
        			this.variant = "";
        			fncCallback.call(this,svcid,p_variant);

        		});
        	},

        	/**
        	 * 공통 팝업 close
        	 * @param {XaComp} this(현재FORM)
        	 * @param {string|object|array} arguments
        	 * @return
        	 * @example
        	 *  //문자열
        	 *  var str = "testArgq11111111111111111111";
        	 *   Sct.close(this,str);
        	 *   //array
        	 *   var arr = ["array","testvalue1", "testvalue2", "testvalue3"];
        	 *   Sct.close(this,arr);
        	 *  //json 문자열
        	 *  var objJson = {key1:"1111",key2:"2222",key3:"3333"};
        	 *	Sct.close(this,objJson);
        	 * @memberOf Sct
        	 */
        	close : function (o,variant)
        	{
        		var pThis  = o;

        		if(pThis.opener && typeof variant !="string")
        		{
        			variant = Eco.isEmpty(variant) ? "" : variant;
        			pThis.opener.variant = variant;
        			pThis.close();

        		}
        		else
        		{
        			pThis.close(variant);
        		}
        	},

        	/**
        	 * 공통 팝업 open
        	 * @param {XaComp} this(현재폼)
        	 * @param {string} id
        	 * @param {string} url
        	 * @param {object} arguments
        	 * @param {string} callback명
        	 * @return
        	 * @example
        	 *   Sct.open(this,"pOpen","aa::aa.xfdl",{arg1:"aaa},"fn_popCallbac");
        	 * @memberOf Sct
        	 */
        	open : function(o,sId,url,oArg,fnCallback)
        	{
        		var bSucc;
        		var nScreenWidth;
        		var pThis = o;
        		var nScreenHeight;
        		var arrScreenSize;
        		var nLeft   =  (nexacro.getApplication().mainframe.width / 2) - Math.round(pThis.width / 2);
        		var nTop    = (nexacro.getApplication().mainframe.height / 2) - Math.round(pThis.height / 2) ;

        		var cf= pThis.getOwnerFrame();
        		var bSucc = nexacro.getApplication().open(sId ,url,cf, oArg, "showtitlebar=true showstatusbar=false",nLeft, nTop,null,null,pThis);

        		if(!bSucc) 	Eco.Logger.error({message: "modaless open error", elapsed: true});
        	},

        	/**
        	* 팝업 공통함수
        	* @param {string} svcId
        	* @param {number} Width
        	* @param {number} Height
        	* @param {string} title
        	* @param {json}   parm (Parameter)
        	* @param {string} form URL
        	* @param {string} Callback Function
        	* @param {boolean} AutoSize 여부
        	* @return N/A
        	* @example
        	* @memberOf Sct
        	*/
        	popup : function (form, svcId, nW, nH, title, parm, url, callback, autosize)
        	{
        		if(Eco.isEmpty(autosize)) autosize = true;

        		//var nLeft = system.clientToScreenX(form, 10);
        		//var nTop  = system.clientToScreenY(form, 10);

        		var nLeft = Math.round((form.width - nW)/2);
        		var nTop = Math.round((form.height - nH)/2);

        		var newChild = new ChildFrame;
        		//newChild.init(svcId, "absolute", nLeft, nTop, nW, nH, null, null, url);
        		newChild.init(svcId, nLeft, nTop, nW, nH, null, null, url);

        		newChild.set_titletext(title);
        		newChild.set_showtitlebar(true);
        		newChild.set_titlebarheight("25px");
        		newChild.set_showtitleicon(false);
        		newChild.set_overlaycolor("rgba(51,51,51,0.7)");
        		newChild.set_autosize(autosize);
        		newChild.set_resizable(true);
        		newChild.set_openalign("center middle");

        		newChild.showModal(form.getOwnerFrame(), parm, form, callback);
        	},
        	monitorPopup : function (form, svcId, nW, nH, title, parm, url, callback, autosize)
        	{
        		if(Eco.isEmpty(autosize)) autosize = true;

        		//var nLeft = system.clientToScreenX(form, 10);
        		//var nTop  = system.clientToScreenY(form, 10);

        		var nLeft = Math.round((form.width - nW)/2);
        		var nTop = Math.round((form.height - nH)/2);

        		var newChild = new ChildFrame;
        		//newChild.init(svcId, "absolute", nLeft, nTop, nW, nH, null, null, url);
        		newChild.init(svcId, 0, 0, null, null, 0, 0, url);

        		newChild.set_titletext(title);
        		newChild.set_showtitlebar(false);
        		newChild.set_titlebarheight("25px");
        		newChild.set_showtitleicon(false);
        		newChild.set_overlaycolor("rgba(51,51,51,0.7)");
        		newChild.set_autosize(false);
        		newChild.set_resizable(true);
        		//newChild.set_openalign("center middle");

        		newChild.showModal(this.av_mainFrame, parm, form, callback);
        	},
        	/**
        	* 모덜리스 팝업 공통함수
        	* @param {string} svcId
        	* @param {number} Width
        	* @param {number} Height
        	* @param {string} form URL
        	* @param {string} Callback Function
        	* @return N/A
        	* @example
        	* @memberOf Sct
        	*/
        	modeless : function (form, svcId, nW, nH, parm, url)
        	{
        		const objApp = nexacro.getApplication();
        		var nLeft = Math.round((form.width - nW)/2);
        		var nTop = Math.round((form.height - nH)/2);
        		nLeft = system.clientToScreenX(form, nLeft);
        		nTop = system.clientToScreenY(form, nTop);

        		const sOpenStyle = "dragmovetype=all"
        						 + " resizable=true"
        						 + " titletext=Modeless"
        						 + " showtitlebar=true"
        						 + " showstatusbar=false";

        		nexacro.open(svcId, url, form.getOwnerFrame(), parm, sOpenStyle, nLeft, nTop, nW, nH, form);
        	},

        	// 타이틀 없는 팝업
        	tPopup : function(form, svcId, nW, nH, parm, url, callback, autosize)
        	{
        		if(Eco.isEmpty(autosize)) autosize = true;

        		const nLeft = Math.round((form.width - nW)/2);
        		const nTop = Math.round((form.height - nH)/2);

        		var newChild = new ChildFrame;
        		newChild.init(svcId, nLeft, nTop, nW, nH, null, null, url);

        		newChild.set_showtitlebar(false);
        		newChild.set_showtitleicon(false);
        		newChild.set_overlaycolor("rgba(51,51,51,0.7)");
        		newChild.set_borderRadius("20px");
        		newChild.set_autosize(autosize);
        		newChild.set_resizable(true);
        		newChild.set_openalign("center middle");

        		newChild.showModal(form.getOwnerFrame(), parm, form, callback);
        	},

        	/**
        	* Alert / Message
        	* @param {string} svcId
        	* @param {string} Callback Function
        	* @return N/A
        	* @example
        	* @memberOf Sct
        	* (mainframe 위에 띄움)
        	*/
        	alert : function (form, msgId, args)
        	{
        		if(Sct.Util.isEmpty(msgId))
        		{
        			alert(args);
        			return;
        		}
        		var msg = this._findMessage(msgId, args);
        		if(msg.type == "B") {
        			if(Eco.isEmpty(form.getOwnerFrame().form.sta_message)) {
        				form.getOwnerFrame().form.div_foot.form.sta_message.set_text(msg.msg);
        			}
        		} else {
        			alert(msg.msg);
        		}
        	},

        	/**
        	* Confirm
        	* @param {Form}	  form object
        	* @param {string} msgId
        	* @param {string} 대체 문자열
        	* @return N/A
        	* @example
        	* @memberOf Sct
        	*/
        	confirm : function (form, msgId, args)
        	{
        		var msg = this._findMessage(msgId, args);

        		return nexacro.getApplication().confirm(msg.msg);
        	},

        	/**
        	* _findMessage
        	* @param {string} msgId
        	* @param {string} args
        	* @return json
        	* @example
        	* @memberOf Sct
        	*/
        	_findMessage : function (msgId, args)
        	{
        		var foundRow = nexacro.getApplication().gds_message.findRow("MSG_ID", msgId);

        		if(foundRow < 0) { // err.msg.notexist
        			foundRow = nexacro.getApplication().gds_message.findRow("MSG_ID", "err.msg.notexist"); // 메시지 ID가 존재하지 않을 경우.
        			args = "err.msg.notexist";
        		}

        		var msg = nexacro.getApplication().gds_message.getColumn(foundRow, "DESCRIPTION");
        		var title = nexacro.getApplication().gds_message.getColumn(foundRow, "TITLE");
        		var type = nexacro.getApplication().gds_message.getColumn(foundRow, "MSG_TYPE");

        		if(!Sct.Util.isEmpty(args))
        		{
        			var arrArgs = args.split("|");

        			for(var i = 0; i < arrArgs.length; i++)
        			{
        				if(arrArgs[i] instanceof Array){
        					arrArgs[i] = arrArgs[i].toString();
        				}
        				msg = msg.replace("{" + i + "}", arrArgs[i]);
        			}
        		}

        		msg = msg.replace(/\\\\n/g, "\n");

        		var rtn = {
        			msg : msg,
        			title : title,
        			type : type
        		};

        		return rtn;
        	},

        	/**
        	* findMessage
        	* @param {string} msgId
        	* @param {string} args
        	* @return {string} message
        	* @example
        	* @memberOf lib_Dialog
        	*/
        	findMessage : function (msgId, args)
        	{
        		var rtn = this._findMessage(msgId, args);
        		return rtn.msg;
        	},

        	/**
        	* 함  수  명	: onLoad
        	* 입      력	: 1. obj: Form
        					  2. e : LoadEventInfo
        	* 반      환	:
        	* 기      능	: Form의 OnLoad 시 처리할 공통 함수.
        	*/
        	onLoad : function (obj, e, isGCP, isAsync)
        	{
        //			obj.set_locale(nexacro.getApplication().gv_locale);

        		// 공통코드 처리를 위한 Form Attributes
        		obj.__combo_no = 0;
        		obj.__combo_outds = "";
        		obj.__copypastegrids = []; // Grid의 Copy & Paste 처리를 위한 Property


        		// Init Components
        		this._initComponent(obj, obj); // Component 초기화
        		Sct.Domain.setMultiLangTitle(obj); // 다국어 처리

        		// 공통코드 처리
        // 		if(isAsync == false){
        // 			this.commCodeTran(obj, false);
        // 		}else{
        // 			this.commCodeTran(obj);
        // 		}

        		// TODO
        	},

        	/**
        	* 함  수  명	: _initComponent
        	* 입      력	: 1. pComp: Component
        	* 반      환	:
        	* 기      능	: 해당 컴포넌트를 초기화 한다.
        	*/
        	_initComponent : function (obj, pComp)
        	{
        		var compLen = 0;

        		if (pComp instanceof Div) {
        			compLen = pComp.form.components.length;
        		} else if (pComp instanceof Tab) {
        			compLen = pComp.tabpages.length;
        		} else {
        			compLen = pComp.components.length;
        		}

        		for (var i = 0; i < compLen; i++) {

        			var voComponent;

        			if (pComp instanceof Div) {
        				voComponent = pComp.form.components[i];
        			} else if (pComp instanceof Tab) {
        				voComponent = pComp.tabpages[i];
        			} else {
        				voComponent = pComp.components[i];
        			}

        			// Grid Component
        			if (voComponent instanceof Grid)
        			{
        				Sct.Grid._initGrid(pComp, voComponent);

        				// GRID copy&paste 추가
        				Sct.Util.gfn_setGridCopyPaste(obj, voComponent);
        				/*if(pComp.name == obj.name) {
        					obj.__copypastegrids.push(voComponent);
        				} else {
        					if(Eco.isEmpty(pComp.url)) {
        						obj.__copypastegrids.push(voComponent);
        					}
        				}*/
        			}
        			else if (voComponent instanceof Calendar) // Calendar Component
        			{
        				voComponent.set_innerdataset(nexacro.getApplication().gds_calendar);
        				//voComponent.set_innerdataset("gds_calendar");
        				voComponent.set_datecolumn("DATECOLUMN");
        				voComponent.set_textcolorcolumn("TEXTCOLORCOLUMN");
        				voComponent.set_backgroundcolumn("BACKGROUNDCOLUMN");
        				voComponent.set_bordercolumn("BORDERCOLUMN");

        				//년월력
        				let dateFormat = "";
        				let editFormat = "";
        				// 2021-09-07 조기종 Calendar 컴포넌트에서 initvalueid 속성값에 따라 dateformat, editformat 변경
        				if(voComponent.initvalueid == "iv_cal_yyyyMM")	// 월 달력
        				{
        					var rowIdx = nexacro.getApplication().gds_systemproperty.findRow("CODE", "DATE_FORMAT_MM");
        					dateFormat = "";
        					if(rowIdx < 0)	dateFormat = "yyyy-MM";
        					else			dateFormat = nexacro.getApplication().gds_systemproperty.getColumn(rowIdx, "SET_VALUE");

        					editFormat = dateFormat;
        					voComponent.set_popuptype("none");	//일반 달력 이벤트 제거

        					//월달력 설정
        					Sct.Util.gfn_setCalendarFunc(voComponent);

        					//8자리 -> 6자리로 변경
        					var pForm = (nexacro.getApplication().getActiveForm().name == "frameWork") ? nexacro.getApplication().getActiveForm().div_form.form : nexacro.getApplication().getActiveForm();
        					for(var j=0; j<pForm.binds.length; j++)
        					{
        						//calendar와 바인딩되어있는 dataset 찾기(full 경로 비교)
        						if(Sct.Util.getObjectFullId(voComponent) == pForm.binds[j].compid)
        						{
        							var objDs = pForm.binds[j]._dataset;

        							if(Sct.Util.isEmpty(objDs.monthColumnsArr)) objDs.monthColumnsArr = [];

        							//oncolumnChange 이벤트 추가
        							var eventIndex = objDs.findEventHandler("oncolumnchanged", Sct.Grid._setMonth, pForm);
        							if(eventIndex < 0)	objDs.insertEventHandler("oncolumnchanged", 0, Sct.Grid._setMonth, pForm);

        							//if(!objDs.monthColumnsArr.includes(pForm.binds[j].columnid)) objDs.monthColumnsArr.push(pForm.binds[j].columnid);
        							if(!(objDs.monthColumnsArr.indexOf(pForm.binds[j].columnid) >= 0)) objDs.monthColumnsArr.push(pForm.binds[j].columnid);

        							//str.indexOf('hi') >= 0
        							break;
        						}
        					}

        				}
        				else if(voComponent.initvalueid != "" && voComponent.initvalueid != null)	// initvalueid 에 값이 있는경우 컴포넌트에 적용되있는 값이 적용됨
        				{
        					dateFormat = voComponent.dateformat;
        					editFormat = voComponent.editformat;
        				}
        				//일반달력
        				else	// initvalueid 에 값이 없는 경우 공통
        				{
        					var rowIdx = nexacro.getApplication().gds_systemproperty.findRow("CODE", "DATE_FORMAT");
        					dateFormat = "";
        					if(rowIdx < 0)	dateFormat = "yyyy-MM-dd";
        					else			dateFormat = nexacro.getApplication().gds_systemproperty.getColumn(rowIdx, "SET_VALUE");

        					editFormat = dateFormat;
        				}

        				voComponent.set_dateformat(dateFormat);
        				voComponent.set_editformat(editFormat);
        			}
        			else if (voComponent instanceof MaskEdit)
        			{
        				var strType = voComponent.type;
        				var format  = voComponent.format;
        				if(strType.toUpperCase() == "NUMBER" && Sct.Util.isEmpty(format)) {
        					voComponent.set_format(nexacro.getApplication().gv_localMoney);
        					//voComponent.set_locale(nexacro.getApplication().gv_locale);
        				}
        			}
        			else if (voComponent instanceof Button)
        			{

        				//trace("!!!!!!!!!!");
        				//trace(">>>>2222   "+obj.getOwnerFrame().name);
        				//trace(">>>>1111   "+nexacro.getApplication().getActiveForm().name);


        				//화면권한 ex) "1111100"
        				//순서 : 초기화, 조회, 추가, 수정, 삭제, 발행, 승인
        				//if(!Sct.Util.isEmpty(obj.getOwnerFrame().arguments["buttonAuth"]))	//메뉴정보가 존재할때(팝업이 아닌 화면인경우)
        				//if(!Sct.Util.isEmpty(obj.getOwnerFrame().arguments))	//메뉴정보가 존재할때(팝업이 아닌 화면인경우)
        				if(nexacro.getApplication().getActiveForm().name == "frameWork")
        				{
        // 					var auth = obj.getOwnerFrame().arguments["buttonAuth"];
        // 					//  하위 행추가버튼
        // 					// trace(auth[2]);
        // 					//trace(">>>>333   "+auth);
        //
        // 					if(auth[2] == "0")
        // 					{
        // 						//행추가 or 행복사
        // 						if(voComponent.cssclass == "btn_com_add" || voComponent.cssclass == "btn_com_copy")
        // 						{
        // 							// 2021-05-14, 조기종, 버튼 비활성화에서 버튼 안보이도록 수정
        // 							voComponent.set_visible(false);
        // 						}
        // 					}
        				}
        				//버튼은 마우스오버시 손가락모양
        				voComponent.set_cursor("pointer");
        			}
        			// Div, PopupDiv, Tab, Tabpage 의 Child Component를 설정하기 위해 재귀함수 사용
        			if (voComponent instanceof PopupDiv || voComponent instanceof Tab)
        			{
        				this._initComponent(obj, voComponent);
        			}
        			else if (voComponent instanceof Div || voComponent instanceof Tabpage)
        			{
        				this._initComponent(obj, voComponent.form);
        			}
        		}
        	},

        	/**
        	 * 함  수  명	: 	initDiv
        	 * 입      력	: 	1. pComp 		Div Object
        	 * 반      환	: 	none
        	 * 기      능	: 	Div 안의 Edit 가능한 Component에 대하여 초기화
        	 */
        	initDiv : function (pComp)
        	{
        		for (var i = 0; i < pComp.components.length; i++)
        		{
        			var voComponent = pComp.components[i];

        			// Static Component
        			if (voComponent instanceof Static)
        			{
        				continue;
        			}
        			else if (voComponent instanceof Combo || voComponent instanceof Radio)
        			{
        				voComponent.set_index(-1);
        			}
        			else if (voComponent instanceof CheckBox)
        			{
        				voComponent.set_value(false);
        			}
        			else
        			{
        				voComponent.set_value("");
        			}

        			// Div, PopupDiv, Tab, Tabpage 의 Child Component를 설정하기 위해 재귀함수 사용
        			if (voComponent instanceof Div || voComponent instanceof PopupDiv ||
        				voComponent instanceof Tab || voComponent instanceof Tabpage)
        			{
        				this.initDiv(voComponent);
        			}
        		}
        	},

        	 /**
        	 * 함  수  명	: chkOpenMenu
        	 * 입      력	: 1. menuid   : 메뉴 아이디
        					  2. param    : 화면에서 화면을 오픈하는 경우 필요한 파라미터
        					  2. bRefresh : 화면 open 시 새로고침(refresh) 여부 (default : true)
        	 * 반      환	:
        	 * 기      능	: 메뉴 아이디를 기준으로 신규 윈도우 화면을 생성하고 open 시키는 함수
        	 */
        	chkOpenMenu : function (menuid, param, bRefresh)
        	{
        		if(Sct.Util.isEmpty(param)) 	{param = "";}
        		if(Sct.Util.isEmpty(bRefresh)) 	{bRefresh = true;}

        		var objDs = nexacro.getApplication().gds_menu;

        		var nRow = objDs.findRow("MENU_CD", menuid);

        		if(nRow < 0) {
        			this.alert(nexacro.getApplication().mainframe, "000128");
        			return false;
        		}

        		var pageURL = objDs.getColumn(nRow, "PAGE_URL");
        		if(Sct.Util.isEmpty(pageURL)) {
        			this.alert(nexacro.getApplication().mainframe, "000197");
        			return false;
        		}

        		var winKey;

        		winKey = menuid + "_" + nexacro.getApplication().gds_openMenu.rowcount + "_" + parseInt(Math.random() * 100);

        		// 이미 열려있는 메뉴인지 체크하여 화면을 활성화
        		var openMenuRow = nexacro.getApplication().gds_openMenu.findRow("MENU_CD", menuid);
        		if(openMenuRow >= 0) {
        			var openWinKey = nexacro.getApplication().gds_openMenu.getColumn(openMenuRow, "WIN_KEY");
        			nexacro.getApplication().av_workFrameSet[openWinKey].setFocus();
        			// 화면에서 화면을 메뉴처럼 띄울 때, 호출 처리. (화면 동작 동기화)
        // 				if(nexacro.getApplication().av_workFrameSet[openWinKey].form.div_form.lookup("fn_recallForm")) {
        // 					nexacro.getApplication().av_workFrameSet[openWinKey].form.div_form.fn_recallForm(param);
        // 				}

        			//2020-07-20 - 이미 열려있는 메뉴일때 refresh 여부가 true 이면 refresh
        			if(bRefresh)
        			{
        				nexacro.getApplication().av_workFrameSet[openWinKey].arguments["param"] = param;
        				nexacro.getApplication().av_workFrameSet[openWinKey].form.isResetForm = true;
        				nexacro.getApplication().av_workFrameSet[openWinKey].form.div_form.set_url("");
        				nexacro.getApplication().av_workFrameSet[openWinKey].form.div_form.set_url(pageURL);
        				nexacro.getApplication().av_workFrameSet[openWinKey].form.isResetForm = false;
        			}

        			nexacro.getApplication().av_mdiFrame.form.tab_mdi.set_tabindex(openMenuRow);
        			nexacro.getApplication().av_mdiFrame.form.fn_showButtons(true);

        			return;
        		}

        		if(nexacro.getApplication().gds_openMenu.rowcount >= nexacro.getApplication().gv_nMaxOpenForm)
        		{
        			//this.alert(this, "000196");
        			alert("화면은 "+nexacro.getApplication().gv_nMaxOpenForm+"개 까지 열 수 있습니다.");
        			return;
        		}

        		var buttonAuth = this.getButtonAuth(objDs, nRow);
        // 			var buttonAuth = "11111111";

        		var objNewWin = new ChildFrame;
        		objNewWin.init(winKey, 0, 0, nexacro.getApplication().av_initWidth, nexacro.getApplication().av_initHeight);
        		objNewWin.set_formurl("FrameBase::frameWork.xfdl");
        		objNewWin.arguments = [];

        		objNewWin.arguments["winKey"]   	= winKey;
        		objNewWin.arguments["menuId"]   	= objDs.getColumn(nRow, "MENU_CD");
        		objNewWin.arguments["menuUrl"]   	= objDs.getColumn(nRow, "PAGE_URL");
        		objNewWin.arguments["menuTitle"] 	= objDs.getColumn(nRow, "MENU_NM");
        		objNewWin.arguments["buttonAuth"]   = buttonAuth;
        		objNewWin.arguments["param"]		= param;

        		nexacro.getApplication().av_workFrameSet.addChild(winKey, objNewWin);

        		objNewWin.set_dragmovetype("none");
        		objNewWin.set_showtitlebar(false);
        		objNewWin.set_resizable(false);
        		objNewWin.set_border("0 none #808080");
        		objNewWin.set_openstatus("maximize");
        // 			objNewWin.addEventHandler("onclose", this._frameOnClose, this);

        		objNewWin.show();

        		nexacro.getApplication().av_homeFrame.set_visible(false);
        		//nexacro.getApplication().av_mdiFrame.form.fn_showButtons(true);
        	},

        	/**
        	 * 함  수  명	: workOpenMenu
        	 * 입      력	: 1. menuid   : 메뉴 코드
        					  2. param    : 화면오픈에 필요한 파라미터 PAGE_URL, TITLE
        					  2. bRefresh : 화면 open 시 새로고침(refresh) 여부 (default : true)
        	 * 반      환	:
        	 * 기      능	: 메뉴 아이디를 기준으로 신규 윈도우 화면을 생성하고 open 시키는 함수
        	 */
        	workOpenMenu : function (menuid, param, bRefresh)
        	{
        		if(Sct.Util.isEmpty(param)) 	{param = "";}
        		if(Sct.Util.isEmpty(bRefresh)) 	{bRefresh = true;}

        		//var pageURL = objDs.getColumn(nRow, "PAGE_URL");
        		const pageURL = param.PAGE_URL;
        		if(Sct.Util.isEmpty(pageURL)) {
        			//this.alert(nexacro.getApplication().mainframe, "000197");
        			return false;
        		}

        		trace("first");

        		var winKey;

        		winKey = menuid + "_" + nexacro.getApplication().gds_openMenu.rowcount + "_" + parseInt(Math.random() * 100);

        		// 이미 열려있는 메뉴인지 체크하여 화면을 활성화
        		var openMenuRow = nexacro.getApplication().gds_openMenu.findRow("MENU_CD", menuid);
        		if(openMenuRow >= 0) {
        			var openWinKey = nexacro.getApplication().gds_openMenu.getColumn(openMenuRow, "WIN_KEY");
        			nexacro.getApplication().av_workFrameSet[openWinKey].setFocus();
        			// 화면에서 화면을 메뉴처럼 띄울 때, 호출 처리. (화면 동작 동기화)
        // 				if(nexacro.getApplication().av_workFrameSet[openWinKey].form.div_form.lookup("fn_recallForm")) {
        // 					nexacro.getApplication().av_workFrameSet[openWinKey].form.div_form.fn_recallForm(param);
        // 				}

        			//2020-07-20 - 이미 열려있는 메뉴일때 refresh 여부가 true 이면 refresh
        			if(bRefresh)
        			{
        				nexacro.getApplication().av_workFrameSet[openWinKey].arguments["param"] = param;
        				nexacro.getApplication().av_workFrameSet[openWinKey].form.isResetForm = true;
        				nexacro.getApplication().av_workFrameSet[openWinKey].form.div_form.set_url("");
        				nexacro.getApplication().av_workFrameSet[openWinKey].form.div_form.set_url(pageURL);
        				nexacro.getApplication().av_workFrameSet[openWinKey].form.isResetForm = false;
        			}

        			nexacro.getApplication().av_mdiFrame.form.tab_mdi.set_tabindex(openMenuRow);
        			nexacro.getApplication().av_mdiFrame.form.fn_showButtons(true);

        			return;
        		}

        		if(nexacro.getApplication().gds_openMenu.rowcount >= nexacro.getApplication().gv_nMaxOpenForm)
        		{
        			alert("화면은 "+nexacro.getApplication().gv_nMaxOpenForm+"개 까지 열 수 있습니다.");
        			return;
        		}
        		const pTitle = param.TITLE;
        		let title = "";
        		if (pTitle == "7-11 운영위원회회의록" || pTitle == "7-11 보호자회의록")
        			title = "7-11 운영위원회·보호자 회의록";
        		else
        			title = pTitle;
        		var objNewWin = new ChildFrame;
        		objNewWin.init(winKey, 0, 0, nexacro.getApplication().av_initWidth, nexacro.getApplication().av_initHeight);
        		objNewWin.set_formurl("FrameBase::frameWork.xfdl");
        		objNewWin.arguments = [];

        		objNewWin.arguments["winKey"]   	= winKey;
        		objNewWin.arguments["menuId"]   	= menuid;
        		objNewWin.arguments["menuUrl"]   	= pageURL;
        		objNewWin.arguments["menuTitle"] 	= title;
        		objNewWin.arguments["param"]		= param;

        		nexacro.getApplication().av_workFrameSet.addChild(winKey, objNewWin);

        		objNewWin.set_dragmovetype("none");
        		objNewWin.set_showtitlebar(false);
        		objNewWin.set_resizable(false);
        		objNewWin.set_border("0 none #808080");
        		objNewWin.set_openstatus("maximize");

        		objNewWin.show();

        		nexacro.getApplication().av_homeFrame.set_visible(false);
        		//nexacro.getApplication().av_mdiFrame.form.fn_showButtons(true);
        	},

        	/**
        	* 함  수  명	: addOpenMenu
        	* 입      력	: 1. menuid: 메뉴 아이디
        					  2. winKey: 창 Key (ID)
        	* 반      환	:
        	* 기      능	: 메뉴 ID를 gds_openMenu에 입력한다.
        	*/
        	addOpenMenu : function (menuId, winKey)
        	{
        		var nRow = nexacro.getApplication().gds_menu.findRow("MENU_CD", menuId);

        		if(nRow >= 0) {
        			var nAddRow = nexacro.getApplication().gds_openMenu.addRow();
        			nexacro.getApplication().gds_openMenu.copyRow(nAddRow, nexacro.getApplication().gds_menu, nRow);
        			nexacro.getApplication().gds_openMenu.setColumn(nAddRow, "WIN_KEY", winKey);
        		}
        	},

        	/**
        	* 함  수  명	: addOpenMenu2
        	* 입      력	: 1. menuid: 메뉴 아이디
        					  2. winKey: 창 Key (ID)
        	* 반      환	:
        	* 기      능	: 메뉴 ID를 gds_openMenu에 입력한다.
        	*/
        	addOpenMenu2 : function (menuId, menuTitle, menuURL, winKey)
        	{
        		var nAddRow = nexacro.getApplication().gds_openMenu.addRow();

        		nexacro.getApplication().gds_openMenu.setColumn(nAddRow, "MENU_CD", menuId);
        		nexacro.getApplication().gds_openMenu.setColumn(nAddRow, "MENU_NM", menuTitle);
        		nexacro.getApplication().gds_openMenu.setColumn(nAddRow, "PAGE_URL", menuURL);
        		nexacro.getApplication().gds_openMenu.setColumn(nAddRow, "WIN_KEY", winKey);

        		var nRow = nexacro.getApplication().gds_menu.findRow("MENU_CD", menuId);

        		if(nRow >= 0) {

        			nexacro.getApplication().gds_openMenu.copyRow(nAddRow, nexacro.getApplication().gds_menu, nRow);

        		}
        	},

        	/**
        	* 함  수  명	: closeForm
        	* 입      력	: 1. obj: MDI Tab Component
        					  2. index : Tab Index
        	* 반      환	:
        	* 기      능	: 해당 화면을 닫는다.
        	*/
        	closeForm : function (obj, index)
        	{
        		var winKey = obj.tabpages[index].name;

        		var succ = nexacro.getApplication().av_workFrameSet[winKey].destroy();
        		var nFRow = nexacro.getApplication().gds_openMenu.findRow("WIN_KEY", winKey);

        		if(succ)
        		{
        			if(nFRow >= 0) {
        				nexacro.getApplication().gds_openMenu.deleteRow(nFRow);
        				obj.removeTabpage(index);
        			}

        			if(obj.tabpages.length == 0)
        			{
        				nexacro.getApplication().av_homeFrame.set_visible(true);
        				nexacro.getApplication().av_homeFrame.set_showtitlebar(false);
        				nexacro.getApplication().av_homeFrame.set_dragmovetype("none");
        				nexacro.getApplication().av_homeFrame.set_border("0 none #808080ff");
        				nexacro.getApplication().av_homeFrame.set_openstatus("maximize");

        				nexacro.getApplication().av_mdiFrame.form.fn_showButtons(false);
        				return false;
        			}

        			winKey = obj.tabpages[obj.tabindex].name;
        			nexacro.getApplication().av_workFrameSet[winKey].setFocus();
        // 			if(nexacro.getApplication().gds_bookmark.findRow("MENU_CD",winKey.substring(0,winKey.indexOf("_"))) != -1){
        // 				nexacro.getApplication().av_topFrame.form.div_user.form.btn_bookmark.set_background("url('imagerc::btn_bookmark_on.png') no-repeat transparent");
        // // 				nexacro.getApplication().av_topFrame.form.div_globalNav.form.gnb_04.set_background("transparent URL('imagerc::btn_WF_Bookmark_O.png') no-repeat");
        // // 				nexacro.getApplication().av_topFrame.form.div_globalNav.form.gnb_04.set_top(3);
        // 			}else{
        // 				nexacro.getApplication().av_topFrame.form.div_user.form.btn_bookmark.set_background("url('imagerc::btn_bookmark_off.png') no-repeat transparent");
        // // 				nexacro.getApplication().av_topFrame.form.div_globalNav.form.gnb_04.set_background("transparent URL('imagerc::gnb_04.png') no-repeat");
        // // 				nexacro.getApplication().av_topFrame.form.div_globalNav.form.gnb_04.set_top(6);
        // 			}
        		}
        	},

        	/*****************************************************************************************
        	* 함  수  명	: getButtonAuth
        	* 입      력	: 1. ds: 메뉴를 담고 있는 Dataset
        					  2. row : 해당 메뉴의 Row
        	* 반      환	:
        	* 기      능	: 해당 메뉴의 버튼에 대한 유저 권한을 넘겨준다.
        	*****************************************************************************************/
        	getButtonAuth : function (ds, row)
        	{
        		// 		CLS_AUTH
        		// 		SEAR_AUTH
        		// 		ADD_AUTH
        		// 		DEL_AUTH
        		// 		XLS_AUTH
        		// 		SAVE_AUTH
        		// 		PRN_AUTH
        		// 		APPV_AUTH
        		var cls = ((ds.getColumn(row, "CLS_AUTH")=="Y" || ds.getColumn(row, "CLS_AUTH")=="1") ? "1":"0");
        		var search = ((ds.getColumn(row, "SEAR_AUTH")=="Y" || ds.getColumn(row, "SEAR_AUTH")=="1") ? "1":"0");
        		var add = ((ds.getColumn(row, "ADD_AUTH")=="Y" || ds.getColumn(row, "ADD_AUTH")=="1") ? "1":"0");
        		var save = ((ds.getColumn(row, "SAVE_AUTH")=="Y" || ds.getColumn(row, "SAVE_AUTH")=="1") ? "1":"0");
        		var del = ((ds.getColumn(row, "DEL_AUTH")=="Y" || ds.getColumn(row, "DEL_AUTH")=="1") ? "1":"0");
        		var prn = ((ds.getColumn(row, "PRN_AUTH")=="Y" || ds.getColumn(row, "PRN_AUTH")=="1") ? "1":"0");
        		var appv = ((ds.getColumn(row, "APPV_AUTH")=="Y" || ds.getColumn(row, "APPV_AUTH")=="1") ? "1":"0");
        		var buttonAuth = cls + search + add + save + del + prn + appv;

        		return buttonAuth;
        	},

        	/**
        	* 함  수  명	: commCodeTran
        	* 입      력	: 1. obj: Form
        	* 반      환	:
        	* 기      능	: 공통코드를 가져온다.
        	*/
        	commCodeTran : function (obj, isAsync)
        	{
        		this._procCommCode(obj);
        		//nexacro.getApplication().trace("obj.__combo_outds : " + obj.__combo_outds);
        		//nexacro.getApplication().trace("obj.__combo_outds trim : " + obj.__combo_outds.trim());
        		var svcId = "commCodeTran";
        		var params = "/commonController.do";
        		var inDatasets = "";
        		var outDatasets = obj.__combo_outds.trim();
        		var argument = "method=getcombo";
        		var callbackFunc = "";
        		var arrArgs = outDatasets.split(" ");
        		if(arrArgs.length == 1){
        			if(arrArgs[0].length < 5){
        				trace("공통콤보 X");
        				return false;
        			}
        		}
        		var argString = "";
        		for(var i = 0; i < arrArgs.length; i++)
        		{
        			var arg = arrArgs[i];
        			argString += arg.split("=")[0].replace(/ds_/g, "").toLowerCase() + " ";
        		}
        		argument += " sqlId=" + nexacro.wrapQuote(argString.trim());

        		if(!Sct.Util.isEmpty(nexacro.getApplication().gv_company))
        		{
        			argument += " COMPANY_CD=" + nexacro.getApplication().gv_company;
        			argument += " SERVICE_TP=" + nexacro.getApplication().gv_serviceTp;
        		}

        		if(isAsync == false){
        			trace("동기 transaction");
        			//2020-10-06 배영걸 회사코드, 언어코드 GET
        			//obj.transaction(svcId, params, inDatasets, outDatasets, argument, callbackFunc, false);
        			this.transaction(obj, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);
        		}else{
        			this.transaction(obj, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        		}
        	},

        	/**
        	* 함  수  명	: _procCommCode
        	* 입      력	: 1. form : Form
        					  2. obj  : Div와 같은 성격의 컴포넌트
        	* 반      환	:
        	* 기      능	: OutDataset 과 Sql ID 를 처리한다.
        	*/
        	_procCommCode : function(form, obj)
        	{
        		if(Eco.isEmpty(obj)) obj = form;
        		var comCodeDs = new Array();
        		var idx = 1;
        		for(var i=0; i<obj.objects.length; i++){
        			// 데이터셋 만 처리 2021-03-18
        			if (obj.objects[i] instanceof Dataset) {
        				if(obj.objects[i].getColID(0) == "CMCD" || obj.objects[i].getColID(1) == "CMNM"){
        					trace("코드 데이터셋 : "+obj.objects[i].name);
        					form.__combo_outds += obj.objects[i].name.toLowerCase() + "=output" + idx + " ";
        					idx++;
        				}
        			}
        		}
        	},
          /**
           * 함  수  명   : commCodeTran2
           * 입      력   : 1. obj: Form
           * 반      환   :
           * 기      능   : 공통코드를 가져온다.
           */
           commCodeTran2 : function (obj, companyCd,serviceTp,isAsync)
           {
              this._procCommCode2(obj);


              //nexacro.getApplication().trace("obj.__combo_outds : " + obj.__combo_outds);
              //nexacro.getApplication().trace("obj.__combo_outds trim : " + obj.__combo_outds.trim());
              var svcId = "commCodeTran";
              var params = "/commonController.do";
              var inDatasets = "";
              var outDatasets = obj.__combo_outds.trim();
              var argument = "method=getcombo";
              var callbackFunc = "";
              var arrArgs = outDatasets.split(" ");
              if(arrArgs.length == 1){
                 if(arrArgs[0].length < 5){
                    trace("공통콤보 X");
                    return false;
                 }
              }
              var argString = "";
              for(var i = 0; i < arrArgs.length; i++)
              {
                 var arg = arrArgs[i];
                 argString += arg.split("=")[0].replace(/ds_/g, "").toLowerCase() + " ";
              }

              argument += " sqlId=" + nexacro.wrapQuote(argString.trim());
              argument += " COMPANY_CD=" + companyCd
        	  argument += " SERVICE_TP=" + serviceTp;

              if(isAsync == false){
                 trace("동기 transaction");
                 //2020-10-06 배영걸 회사코드, 언어코드 GET
                 //obj.transaction(svcId, params, inDatasets, outDatasets, argument, callbackFunc, false);
                 this.transaction(obj, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, false);
              }else{
                 this.transaction(obj, svcId, params, inDatasets, outDatasets, argument, callbackFunc,false);
              }
           },
                 /**
           * 함  수  명   : _procCommCode
           * 입      력   : 1. form : Form
                         2. obj  : Div와 같은 성격의 컴포넌트
           * 반      환   :
           * 기      능   : OutDataset 과 Sql ID 를 처리한다.
           */
           _procCommCode2 : function(form, obj)
           {
              if(Eco.isEmpty(obj)) obj = form;
              var comCodeDs = new Array();
              var idx = 1;
              for(var i=0; i<obj.objects.length; i++){
                 // 데이터셋 만 처리 2021-03-18
                 if (obj.objects[i] instanceof Dataset) {
                    if(obj.objects[i].getColID(0) == "CMCD" || obj.objects[i].getColID(1) == "CMNM"){
                       obj.objects[i].clearData();
                       trace("코드 데이터셋 : "+obj.objects[i].name);
                       form.__combo_outds += obj.objects[i].name.toLowerCase() + "=output" + idx + " ";
                       idx++;
                    }
                 }
              }
           },
        	/**
        	* 함  수  명	: report
        	* 입      력	: 1. form : Form
        					  2. mrdName  : MRD FileName
        					  3. mrdParam  : MRD Params
        					  4. w  : Form Width
        					  5. h  : Form Height
        	* 반      환	:
        	* 기      능	: 리포트 팝업 화면을 띄운다.
        	*/
        	//report : function (form, mrdName, mrdParam, w, h)
        	report: function (form, param, w, h, title, autosize)
        	{
        // 		if(Sct.Util.isEmpty(w)) w = 1024;
        // 		if(Sct.Util.isEmpty(h)) h = 768;
        //
        // 		var param = {
        // 			pForm : form,
        // 			mrdName : mrdName,
        // 			mrdParams : mrdParams
        // 		};
        //
        // 		Sct.popup(form, "popupReport", w, h, "Report", param, "Common::commReportPopup.xfdl", "", false);

        		if (autosize == undefined || autosize == null)
        			autosize = true;

        		const objChildFrame = new ChildFrame();

        		const nLeft = Math.round((form.width - w)/2);
        		const nTop = Math.round((form.height - h)/2);

        		objChildFrame.init("UbiReport", nLeft, nTop, w, h, null, null, "CM_POP::UBI_COMMON.xfdl");
        		objChildFrame.set_autosize(autosize);
        		objChildFrame.set_titletext(title);
        		objChildFrame.set_showtitlebar(true);
        		objChildFrame.set_titlebarheight("25px");
        		objChildFrame.set_showtitleicon(false);
        		objChildFrame.set_overlaycolor("rgba(51,51,51,0.7)");
        		objChildFrame.set_resizable(true);
        		objChildFrame.set_openalign("center middle");

        		objChildFrame.showModal(form.getOwnerFrame(), param, form);
        	},

        	/* Domain Start */
        	Domain : {

        		pForm : undefined,

        		/**
        		 * Function : Form에 속한 모든 컴포넌트의 title을 공통 영역에
        					  정의한 MsgId를 바탕으로 변경시키는 함수
        		 * @param   : obj - Form Object
        		 * Return   : void
        		*/
        		setMultiLangTitle : function(obj,no)
        		{
        			this.pForm = obj;

        			obj.set_locale(nexacro.getApplication().gv_langType);

        			var aComponents = obj.components;
        			if(no == null){
        				for(var i=0; i<aComponents.length; i++)
        				{
        					if(aComponents[i] instanceof CheckBox ||
        					aComponents[i] instanceof GroupBox ||
        					aComponents[i] instanceof Static   ||
        					aComponents[i] instanceof Button   ||
        					aComponents[i] instanceof ImageViewer)
        					{
        						aComponents[i].set_tooltiptext(this.getTooltip(aComponents[i]));
        						aComponents[i].set_text(this.getLabel(aComponents[i]));
        					}
        					else if(aComponents[i] instanceof Div)
        						this.getTitleChild(aComponents[i]);
        					else if(aComponents[i] instanceof Grid)
        						this.setGridHead(aComponents[i]);
        					else if(aComponents[i] instanceof Tab)
        						this.setTitleTab(aComponents[i]);
        					else if(aComponents[i] instanceof Calendar)
        					{
        						aComponents[i].set_locale(nexacro.getApplication().gv_locale);
        					}
        				}
        			}
        		},

        		/**
        		 * Function : Form에 속한 모든 컴포넌트의 title을 공통 영역에
        					  정의한 MsgId를 바탕으로 변경시키는 함수
        		 * @param   : obj - Div Object / Tabpage Object
        		 * Return   : void
        		*/
        		getTitleChild : function(obj)
        		{
        			var aComponents = obj.form.components;

        			for(var i=0; i<aComponents.length; i++){
        				if(aComponents[i] instanceof CheckBox ||
        				   aComponents[i] instanceof GroupBox ||
        				   aComponents[i] instanceof Static   ||
        				   aComponents[i] instanceof Button)
        				{
        					aComponents[i].set_tooltiptext(this.getTooltip(aComponents[i]));
        					aComponents[i].set_text(this.getLabel(aComponents[i]));
        				}
        				else if(aComponents[i] instanceof Div )
        					this.getTitleChild(aComponents[i]);
        				else if(aComponents[i] instanceof Grid)
        					this.setGridHead(aComponents[i]);
        				else if(aComponents[i] instanceof Tab)
        					this.setTitleTab(aComponents[i]);
        				else if(aComponents[i] instanceof Calendar)
        				{
        					aComponents[i].set_locale(nexacro.getApplication().gv_locale);
        				}
        			}
        		},

        		/**
        		 * Function : Grid의 header를 공통 정의된 메세지 기반으로 처리하는 함수
        		 * @param   : obj - Grid Object
        		 * Return   : void
        		*/
        		setGridHead : function(obj)
        		{
        			var sHeadText;
        			var sMsgTxt;
        			var sMsgTooltip;
        			var sAsterisk;
        			var sHeadName = "";
        			var arrHeadName;
        			if(Sct.Util.isEmpty(obj.arrHeadName))
        			{
        				for(var i=0; i<obj.getCellCount("head"); i++)
        				{
        					sHeadName += obj.getCellText(-1, i)+"|";
        				}
        				obj.arrHeadName = sHeadName;
        			}

        			arrHeadName = obj.arrHeadName.split("|");

        			for(var i=0; i<obj.getCellCount("head"); i++){
        				sHeadText = arrHeadName[i];
        				if(Sct.Util.isEmpty(sHeadText)) continue;

        				sMsgTooltip = this.getHeadTooltip(obj, sHeadText);
        				sMsgTxt = this.getHeadLabel(obj, sHeadText);

        				obj.setCellProperty("head", i, "text", sMsgTxt);
        				obj.setCellProperty("head", i, "tooltiptext", sMsgTooltip);
        			}
        		},

        		/**
        		 * Function : setTitle 함수에서 Tab 객체의 하위 컴포넌트에 접근
        					  하기위해 내부적으로 사용
        		 * @param   : obj - Tab Object
        		 * Return   : void
        		*/
        		setTitleTab : function(obj)
        		{
        			var aTabPages = obj.tabpages;
        			var pageName;
        			var index = obj.tabindex;

        			for(var i=0; i<aTabPages.length; i++){
        				obj.set_tabindex(i);
        				aTabPages[i].set_tooltiptext(this.getTooltip(aTabPages[i]));
        				aTabPages[i].set_text(this.getLabel(aTabPages[i]));

        				this.getTitleChild(aTabPages[i]);
        			}

        			obj.set_tabindex(index);
        		},

        		/************************************************************************************************
        		 * Function : 메세지 ID와 언어에 해당하는 항목명을 가져온다.
        		 * @param   : obj - Object Component
        		 * Return   : 메세지 ID와 언어에 해당하는 항목명
        		************************************************************************************************/
        		getLabel : function(obj)
        		{
        			var orgText="";
        			if(Sct.Util.isEmpty(orgText)) orgText = obj.text;
        			if(nexacro.getApplication().gds_multiDic.rowcount == 0) return orgText;
        			if(Sct.Util.isEmpty(orgText)) return "";
        			if(Sct.Util.isEmpty(nexacro.getApplication().gv_langType)) nexacro.getApplication().gv_langType = "ko_KR";

        			orgText = orgText.replace(/\r\n/g, " ");
        			var sRtn = "";
        // 			var iRow = nexacro.getApplication().gds_multiDic.findRowExpr("DOMAIN_NM==" + nexacro.wrapQuote(orgText) + " && LANG_TYPE==" + nexacro.wrapQuote(nexacro.getApplication().gv_langType));
        			var iRow = nexacro.getApplication().gds_multiDic.findRowExpr("PROPERTY_NM==" + nexacro.wrapQuote(orgText) + " && LANG_CD==" + nexacro.wrapQuote(nexacro.getApplication().gv_langType));
        			if(iRow > -1)
        			{
        				if(Sct.Util.isEmpty(obj.multilang))
        				{
        					obj.multilang = "short0";
        				}

        				var preColName = "LANG_";
        				var colName = preColName + obj.multilang.toUpperCase();
        				sRtn = nexacro.getApplication().gds_multiDic.getColumn(iRow, colName);

        				if(Sct.Util.isEmpty(sRtn.trim())) sRtn = obj.text;
        			}
        			else
        			{
        				sRtn = obj.text;
        			}

        			return sRtn;
        		},

        		/************************************************************************************************
        		 * Function : 메세지 ID와 언어에 해당하는 항목명을 가져온다.
        		 * @param   : obj - Object Component
        		 * Return   : 메세지 ID와 언어에 해당하는 항목명
        		************************************************************************************************/
        		getTooltip : function(obj)
        		{
        			if(Sct.Util.isEmpty(obj.text)) obj.set_text("");

        			var orgText="";
        			if(Sct.Util.isEmpty(orgText)) orgText = obj.text;
        			if(nexacro.getApplication().gds_multiDic.rowcount == 0) return orgText;
        			if(Sct.Util.isEmpty(orgText)) return "";
        			if(Sct.Util.isEmpty(nexacro.getApplication().gv_langType)) nexacro.getApplication().gv_langType = "ko_KR";

        			orgText = orgText.replace(/\r\n/g, " ");
        			var sRtn = "";
         			//var iRow = nexacro.getApplication().gds_multiDic.findRowExpr("DOMAIN_NM==" + nexacro.wrapQuote(orgText) + " && LANG_TYPE==" + nexacro.wrapQuote(nexacro.getApplication().gv_langType));
        			var iRow = nexacro.getApplication().gds_multiDic.findRowExpr("PROPERTY_NM==" + nexacro.wrapQuote(orgText) + " && LANG_CD==" + nexacro.wrapQuote(nexacro.getApplication().gv_langType));
        			if(iRow > -1)
        			{
        				if(Sct.Util.isEmpty(obj.multilang))
        				{
        					obj.multilang = "full0";
        				}

        				var preColName = "LANG_FULL";
        				var colName = preColName + Sct.Util.right(obj.multilang.toUpperCase(), 1);
        				sRtn = nexacro.getApplication().gds_multiDic.getColumn(iRow, colName);
        				if(Sct.Util.isEmpty(sRtn.trim())) sRtn = obj.text;
        			}
        			else
        			{
        				sRtn = obj.text;
        			}

        			return sRtn;
        		},

        		/**
        		 * Function : 메세지 ID와 언어에 해당하는 항목명을 가져온다.
        		 * @param   : sMsgId - 가져올 Label의 ID
        		 * Return   : 메세지 ID와 언어에 해당하는 항목명
        		*/
        		getHeadLabel : function (obj, sMsgId)
        		{
        			if(nexacro.getApplication().gds_multiDic.rowcount == 0) return sMsgId;
        			if(Sct.Util.isEmpty(sMsgId)) return "";
        			if(Sct.Util.isEmpty(nexacro.getApplication().gv_langType)) nexacro.getApplication().gv_langType = "ko_KR";

        			var orgText = sMsgId.replace(/\r\n/g, " ");
        			var sRtn = "";
        // 			var iRow = nexacro.getApplication().gds_multiDic.findRowExpr("DOMAIN_NM==" + nexacro.wrapQuote(orgText) + " && LANG_TYPE==" + nexacro.wrapQuote(nexacro.getApplication().gv_langType));
        			var iRow = nexacro.getApplication().gds_multiDic.findRowExpr("PROPERTY_NM==" + nexacro.wrapQuote(orgText) + " && LANG_CD==" + nexacro.wrapQuote(nexacro.getApplication().gv_langType));

        			if(iRow > -1)
        			{
        				if(Sct.Util.isEmpty(obj.multilang))
        				{
        					obj.multilang = "short0";
        				}

        				var preColName = "LANG_";
        				var colName = preColName + obj.multilang.toUpperCase();
        				sRtn = nexacro.getApplication().gds_multiDic.getColumn(iRow, colName);

        				if(Sct.Util.isEmpty(sRtn.trim())) sRtn = sMsgId;
        			}
        			else
        			{
        				sRtn = sMsgId;
        			}

        			return sRtn;
        		},

        		/**
        		 * Function : 메세지 ID와 언어에 해당하는 항목명을 가져온다.
        		 * @param   : sMsgId - 가져올 Label의 ID
        		 * Return   : 메세지 ID와 언어에 해당하는 항목명
        		*/
        		getHeadTooltip : function (obj, sMsgId)
        		{
        			if(nexacro.getApplication().gds_multiDic.rowcount == 0) return sMsgId;
        			if(Sct.Util.isEmpty(sMsgId)) return "";
        			if(Sct.Util.isEmpty(nexacro.getApplication().gv_langType)) nexacro.getApplication().gv_langType = "ko_KR";

        			var orgText = sMsgId.replace(/\r\n/g, " ");
        			var sRtn = "";
        // 			var iRow = nexacro.getApplication().gds_multiDic.findRowExpr("DOMAIN_NM==" + nexacro.wrapQuote(orgText) + " && LANG_TYPE==" + nexacro.wrapQuote(nexacro.getApplication().gv_langType));
        			var iRow = nexacro.getApplication().gds_multiDic.findRowExpr("PROPERTY_NM==" + nexacro.wrapQuote(orgText) + " && LANG_CD==" + nexacro.wrapQuote(nexacro.getApplication().gv_langType));

        			if(iRow > -1)
        			{
        				if(Sct.Util.isEmpty(obj.multilang))
        				{
        					obj.multilang = "full0";
        				}

        				var preColName = "LANG_FULL";
        				var colName = preColName + Sct.Util.right(obj.multilang.toUpperCase(), 1);
        				sRtn = nexacro.getApplication().gds_multiDic.getColumn(iRow, colName);

        				if(Sct.Util.isEmpty(sRtn.trim())) sRtn = sMsgId;
        			}
        			else
        			{
        				sRtn = sMsgId;
        			}

        			return sRtn;
        		}
        	},
        	/* Domain End */

        	/* Grid Start */
        	Grid : {

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

        				if(rowType == 2 || rowType == 4 || rowType == 8)
        				{
        					return true;
        				}
        			}

        			return false;
        		},

        		/**
        		* 함  수  명	: hasInsertedRow
        		* 입      력	: 1. obj 	: 처리 대상 데이타셋 또는 그리드
        		* 반      환	: true/false
        		* 기      능	: 등록된 필드 보유여부 판단 함수
        		*/
        		hasInsertedRow : function (obj) {
        			var ds = new Dataset;

        			if(obj instanceof Grid) {
        				ds = obj.getBindDataset();
        			} else if(obj instanceof Dataset) {
        				ds = obj;
        			}

        			for(var i = 0; i < ds.rowcount; i++) {
        				var rowType = ds.getRowType(i);

        				if (rowType == 2) {
        					return true;
        				}
        			}

        			return false;
        		},

        		/**
        		* 함  수  명	: hasUpdatedRow
        		* 입      력	: 1. obj 	: 처리 대상 데이타셋 또는 그리드
        		* 반      환	: true/false
        		* 기      능	: 수정된 필드 보유여부 판단 함수
        		*/
        		hasUpdatedRow : function (obj) {
        			var ds = new Dataset;

        			if(obj instanceof Grid) {
        				ds = obj.getBindDataset();
        			} else if(obj instanceof Dataset) {
        				ds = obj;
        			}

        			for(var i = 0; i < ds.rowcount; i++) {
        				var rowType = ds.getRowType(i);

        				if (rowType == 4) {
        					return true;
        				}
        			}

        			return false;
        		},

        		/**
        		* 함  수  명	: hasDeletedRow
        		* 입      력	: 1. obj 	: 처리 대상 데이타셋 또는 그리드
        		* 반      환	: true/false
        		* 기      능	: 삭제된 필드 보유여부 판단 함수
        		*/
        		hasDeletedRow : function (obj) {
        			var ds = new Dataset;

        			if(obj instanceof Grid) {
        				ds = obj.getBindDataset();
        			} else if(obj instanceof Dataset) {
        				ds = obj;
        			}

        			for(var i = 0; i < ds.rowcount; i++) {
        				var rowType = ds.getRowType(i);

        				if (rowType == 8) {
        					return true;
        				}
        			}

        			return false;
        		},

        		/***
        		 * 함 수 명 : hasInsertAndUpdateRow
        		 * 입    력 : 1. obj : 처리 대상 데이터셋 또는 그리드
        		 * 반    환 : true/false
        		 * 기    능 : 추가행과 수정행 보유 여부 판단 함수
        		 */
        		hasInsertAndUpdateRow : function (obj)
        		{
        			let ds = new Dataset;

        			if(obj instanceof Grid)
        			{
        				ds = obj.getBindDataset();
        			}
        			else if(obj instanceof Dataset)
        			{
        				ds = obj;
        			}

        			let flag = false;
        			for(let i = 0; i < ds.rowcount; i++)
        			{
        				const rowType = ds.getRowType(i);

        				if(rowType == 4 || rowType == 2)
        				{
        					flag = true;
        				}
        				else if(rowType == 1)
        				{
        					continue;
        				}
        				else
        				{
        					flag = false;
        				}
        			}

        			return flag;
        		},

        		/**
        		* 함  수  명	: hasDifferentRowType
        		* 입      력	: 1. obj 	 : 처리 대상 데이타셋
        		*				: 2. rowType : 비교할 기준 상태값
        		* 반      환	: true/false
        		* 기      능	: 다른상태값 존재여부 판단 함수
        		*/
        		hasDifferentRowType : function(obj, rowType)
        		{
        			for(var i=0; i<obj.rowcount; i++)
        			{
        				//parameter로 받은 rowType 이외에 다른 타입이 존재할경우 return false;
        				if(!(obj.getRowType(i) == Dataset.ROWTYPE_NORMAL
        					|| obj.getRowType(i) == rowType))
        				{
        					return false;
        				}
        			}
        			return true;
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
        			//objGrid.set_selecttype("row");
        			objGrid.set_cellmovingtype("col");
        			objGrid.set_cellsizingtype("col");

        			// 2021-09-08, 안드로이드에서 그리드 셀 크기 변경 못하게하기
        			if(system.navigatorname == "nexacro" && system.osversion.toUpperCase().indexOf("WINDOWS") == -1)
        			{
        				objGrid.set_cellmovingtype("none");
        				objGrid.set_cellsizingtype("none");
        			}

        			this.saveColSize(objGrid);

        			/* 2020-06-29 현재 17버전 지원불가. 주석처리
        			// Grid 내 Calendar 속성 처리 (휴일 표시)
        			objGrid.controlcalendar.set_innerdataset("gds_calendar");
        			objGrid.controlcalendar.set_datecolumn("DATECOLUMN");
        			objGrid.controlcalendar.set_textcolorcolumn("TEXTCOLORCOLUMN");
        			objGrid.controlcalendar.set_backgroundcolumn("BACKGROUNDCOLUMN");
        			objGrid.controlcalendar.set_bordercolumn("BORDERCOLUMN");
        			*/

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

        			// 2021-08-25 안드로이드에서 마우스 오른쪽 버튼 클릭 이벤트 발생 안되게 하기
        			if(!(system.navigatorname == "nexacro" && system.osversion.toUpperCase().indexOf("WINDOWS") == -1))
        			{
        				objGrid.addEventHandler("onrbuttondown", this._grdRButtonDown, this);
        			}
        			//objGrid.addEventHandler("onkeydown", this._grdOnKeyDown, this);
        			//2018-02-26 키다운(눌렀을때)에는 먹지않음. 키업(뗐을때)로 변경
        			objGrid.addEventHandler("onkeyup", this._grdOnKeyDown, this);

        			this._setGridFormat(objGrid);
        			this._setRowTypeMark(objGrid);
        			//this._setLocale(objGrid); //2020-07-03 배영걸 날짜포맷 systemproperty 설정값으로 변경 주석처리
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
        					obj.setCellProperty("Body", i, "locale", nexacro.getApplication().gv_locale);
        					//2017-10-13 SHORTDATE로 설정하는 이유는 모르겟으나 SHORTDATE 설정시
        					//그리드 캘린더 포맷형식이 제대로 설정이안되서 일단 주석처리
        					//obj.setCellProperty("Body", i, "mask", "SHORTDATE");
        				} else if(strDispType == "currency" || strDispType == "number") {
        					obj.setCellProperty("Body", i, "locale", nexacro.getApplication().gv_locale);
        				}
        			}
        		},

        		/**
        		 * 함  수  명	: 	_setGridFormat
        		 * 입      력	: 	1. obj : Grid
        		 * 반      환	: 	none
        		 * 기      능	: 	Grid Cell의 Format 을 적용한다.
        		 */
        		_setGridFormat : function (obj)
        		{
        			obj.monthArr = [];
        			var objDs = obj.getBindDataset();
        			var pForm = (nexacro.getApplication().getActiveForm().name == "frameWork") ? nexacro.getApplication().getActiveForm().div_form.form : nexacro.getApplication().getActiveForm();
        			var nCellCnt = obj.getCellCount("Body");
        			for(var i = 0; i < nCellCnt; i++) {
        				var strDispType = obj.getCellProperty("Body", i, "displaytype");
        				if(strDispType == "date" || strDispType == "calendarcontrol") {
        					var calendarType = obj.getCellProperty("Body", i, "expandchar");
        					var dateFormat = "";

        					//년력
        					if(calendarType == "year")
        					{
        						dateFormat = "yyyy";
        						obj.setCellProperty("Body", i, "calendartype", "spin");	//위아래버튼 spin
        						obj.setCellProperty("Body", i, "calendarpopuptype", "none");	//일반달력 이벤트 제거
        					}
        					//년월력
        					else if(calendarType == "month")
        					{
        						var rowIdx = nexacro.getApplication().gds_systemproperty.findRow("CODE", "DATE_FORMAT_MM");

        						if(rowIdx < 0)	dateFormat = "yyyy-MM";
        						else			dateFormat = nexacro.getApplication().gds_systemproperty.getColumn(rowIdx, "SET_VALUE");

        						obj.setCellProperty("Body", i, "calendarpopuptype", "none");	//일반달력 이벤트 제거

        						//var strEditType = obj.getCellProperty("Body", i, "edittype");

        						//셀에 바인드된 데이터셋 컬럼명 ex "bind:OUTB_DATE" -> "OUTB_DATE"
        						var bindColumnNm = obj.getCellProperty("body", i, "text").substring(5);

        						//dropDownEvent
        						//if(strEditType == "date") obj.monthArr.push(bindColumnNm);
        						obj.monthArr.push(bindColumnNm);

        						//바인딩Dataset 6자리 -> 8자리 Event
        						if(Sct.Util.isEmpty(objDs.monthColumnsArr)) objDs.monthColumnsArr = [];

        						//if(!objDs.monthColumnsArr.includes(bindColumnNm)) objDs.monthColumnsArr.push(bindColumnNm);
        						if(!(objDs.monthColumnsArr.indexOf(bindColumnNm) >= 0)) objDs.monthColumnsArr.push(bindColumnNm);

        						//oncolumnChange 이벤트 추가
        						var eventIndex = objDs.findEventHandler("oncolumnchanged", Sct.Grid._setMonth, pForm);
        						if(eventIndex < 0)	objDs.insertEventHandler("oncolumnchanged", 0, Sct.Grid._setMonth, pForm);
        					}
        					else if(calendarType == "missff3")
        					{
        						dateFormat = "yyyy-MM-dd HH:mm:ss.sss";
        						obj.setCellProperty("Body", i, "calendarpopuptype", "none");	//일반달력 이벤트 제거
        					}
        					else if (calendarType == "fullTime")
        					{
        						dateFormat = "yyyy-MM-dd HH:mm:ss";
        						obj.setCellProperty("Body", i, "calendarpopuptype", "none");
        					}
        					else if(calendarType == "dot")
        					{
        						dateFormat = "yyyy.MM.dd";
        					}
        					else if (calendarType == "dotd")
        					{
        						dateFormat = "yyyy.MM.dd(ddd)";
        					}
        					//일반달력
        					else
        					{
        						var rowIdx = nexacro.getApplication().gds_systemproperty.findRow("CODE", "DATE_FORMAT");
        						var dateFormat = "";
        						if(rowIdx < 0)	dateFormat = "yyyy-MM-dd";
        						else			dateFormat = nexacro.getApplication().gds_systemproperty.getColumn(rowIdx, "SET_VALUE");
        					}

        					obj.setCellProperty("Body", i, "calendardateformat", dateFormat);
        					obj.setCellProperty("Body", i, "calendareditformat", dateFormat);
        					obj.setCellProperty("Body", i, "calendardisplaynulltype", "nulltext");
        				}

        				//상태삭제 컬럼일경우 색지정 x
        				var headExpandchar = obj.getCellProperty("head", i, "expandchar");
        				if(headExpandchar == "status" || headExpandchar == "delete") continue;

        				//체크상태와 수정가능한경우 background color 설정
        				const cssClass = obj.getCellProperty("body", i, "cssclass");
        				var exprStr = "expr:"+ this.getCellDefaultCss(cssClass);
        				obj.setCellProperty("Body",i ,"cssclass", exprStr);
        			}

        			if(obj.monthArr.length > 0)
        			{
        				obj.addEventHandler("ondropdown", function(obj, e){
        					for(i=0; i<obj.monthArr.length; i++)
        					{
        						if(e.col == obj.getBindCellIndex("body", obj.monthArr[i]))
        						{
        							Sct.Util.gfn_CalendarMonthByGrid(obj,e);
        							break;
        						}
        					}
        				}, this);
        			}
        		},
        		/**
        		 * 함  수  명	: 	getCellDefaultCss
        		 * 입      력	:
        		 * 반      환	: 	Grid Body Default cssclass
        		 * 기      능	:
        		 */
        		getCellDefaultCss : function(cssClass)
        		{
        			return "dataset.getColumn(currow,'CHK') == 1  ? 'chk' : ((this._getEdittype(currow) == 'none' || this._getEdittype(currow) == 'tree' || this._getEdittype(currow) == 'readonly') ? '" + cssClass + "' : 'editable')";
        		},
        		/**
        		 * 함  수  명	: 	_setMonth
        		 * 입      력	: 	1. obj : Dataset
        		 * 반      환	: 	none
        		 * 기      능	: 	8자리를 6자리로 변경
        		 */
        		_setMonth : function (obj,e)
        		{
        			//if(obj.monthColumnsArr.includes(e.columnid))
        			if(obj.monthColumnsArr.indexOf(e.columnid) >=0)
        			{
        				obj.setColumn(e.row, e.columnid, obj.getColumn(e.row, e.columnid).substring(0, 6));
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
        				//trace("cellMove : "+nexacro.getApplication().gv_cellMove);
        //				var cell = e.cell;
        				if(nexacro.getApplication().gv_cellMove == "R") {
        					if(row < (ds.rowcount - 1)) {
        						var strSelType = obj.selecttype;
        						obj.set_selecttype("row");
        						ds.set_rowposition(row + 1);
        						obj.setCellPos(cell);
        						obj.set_selecttype(strSelType);
        					}
        				} else if (nexacro.getApplication().gv_cellMove == "C") {
        					if(cell < (obj.getCellCount("Body") - 1)) {
        						var strSelType = obj.selecttype;
        						obj.set_selecttype("cell");
        						// 2021-07-02, 조기종, textarea일 경우 enter키로 다음 셀로 커서 이동 시키지 않게하기
        						if(obj.getCellPropertyValue(row, cell, "edittype") == "textarea")
        						{
        							obj.setCellPos(cell);
        						}
        						else
        						{
        							obj.setCellPos(cell + 1);
        						}

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
        			//var sTitleText = obj.getCellProperty("head", e.col, "text");
        			//var sTitleType = obj.getCellProperty("head", e.col, "displaytype");
        			var sTitleText = obj.getCellProperty("head", e.cell, "text");
        			var sTitleType = obj.getCellProperty("head", e.cell, "displaytype");

        			if(Sct.Util.getLength(sTitleText) <= 0 || sTitleText == 0 || sTitleText == 1) {
        				if(sTitleType == "checkboxcontrol")
        				{
        					this.setGridCheckAll(obj, e);
        				}
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

        					if(strType == "checkboxcontrol") {
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
        					vl_chk="0";
        					//vl_chk="";
        				}

        			} else { // Merge한 셀이 없는 경우
        				strType = obj.getCellProperty("head", e.cell, "displaytype");
        				trace(strType);
        				if(strType != "checkboxcontrol") {
        					return;
        				}

        				// Head셋팅
        				strVal = obj.getCellProperty("head", nCell, "text");
        				trace(strVal);
        				//if (strVal == "0" || Sct.Util.isEmpty(strVal)) {
        				if (strVal == "0" || strVal == "") {
        					obj.setCellProperty("head", nCell, "text", '1');
        					vl_chk="1";
        				} else {
        					obj.setCellProperty("head", nCell, "text", '0');
        					vl_chk="0";
        					//vl_chk="";
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

        			var headExpandchar = obj.getCellProperty("head", nCell, "expandchar");

        			// 스크립트 오류 보완(2021-04-22)
        			//상태컬럼
        			if(headExpandchar == "status") return false;
        			//삭제컬럼
        			if(headExpandchar == "delete") return false;
        			// NO 컬럼( 개별화면 해더에 expandchar : rno 설정해야됨)
        			if(headExpandchar == "rno") return false;


        			if(nCell == obj.getBindCellIndex("body", "DEL_CHECKBOX"))
        			{
        				//2020-06-29 배영걸 - 김진 이사님 지시로 전체삭제 공통기능 제거
        				/*
        				var dsObj = obj.getBindDataset();
        				var rowType = 0;
        				if(dsObj.getColumn(0, "DEL_CHECKBOX") != "1")
        				{
        					//전체 삭제로 변경
        					for(var i=(dsObj.rowcount-1) ; i>=0; i--)
        					{
        						if (dsObj.getRowType(i) != Dataset.ROWTYPE_INSERT)
        						{
        							dsObj.setColumn(i, "DEL_CHECKBOX", 1);
        							dsObj.set_updatecontrol(false);
        							dsObj.setRowType(i, Dataset.ROWTYPE_DELETE);
        							dsObj.set_updatecontrol(true);
        						}
        						else //추가행일경우 삭제
        						{
        							//화면단에서 cancolumnchanged event 발생
        							dsObj.setColumn(i, "DEL_CHECKBOX", 0);
        							dsObj.deleteRow(i);
        						}
        					}
        				}
        				else
        				{
        					//삭제인컬럼 normal 로 변경
        					for(var i=(dsObj.rowcount-1) ; i>=0; i--)
        					{
        						if (dsObj.getRowType(i) == Dataset.ROWTYPE_DELETE)
        						{
        							dsObj.setColumn(i, "DEL_CHECKBOX", 0);
        							dsObj.set_enableevent(false);
        							dsObj.set_updatecontrol(false);
        							dsObj.setRowType(i, Dataset.ROWTYPE_NORMAL);
        							dsObj.set_updatecontrol(true);
        							dsObj.set_enableevent(true);
        						}
        					}
        				}
        				*/
        			}
        			else
        			{
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

        				if(obj.getCellProperty("head",nCell,"displaytype")=="checkboxcontrol") return;

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
        			}
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
        				obj.__form.gridMenu.trackPopupByComponent(obj, e.clientx, e.clienty);
        				return;
        			}

        			var objGridMenu = new PopupMenu();
        			objGridMenu.init("gridMenu", "absolute", 0, 0, 200, 300, null, null);
        			objGridMenu.setInnerDataset(nexacro.getApplication().gds_gridMenu);
        			objGridMenu.set_levelcolumn("LEVEL");
        			objGridMenu.set_captioncolumn("TEXT");
        			objGridMenu.set_idcolumn("DOMAINCD");
        			objGridMenu.set_enablecolumn("USEYN");

        			obj.__form.addChild("gridMenu", objGridMenu);
        			objGridMenu.show();

        			objGridMenu.addEventHandler("onmenuclick", this._onGridMenuClick, this);

        // 			this.pForm.gridMenu.trackPopup(e.clientX + parseInt(obj.left), e.clientY + parseInt(obj.top));
        			obj.__form.gridMenu.trackPopupByComponent(obj, e.clientx, e.clienty);
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
        					//if (this.pCol >= 0) this.hideCol(this.pGrid, this.pCol);
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
        					var strFileName= this.pForm2.getOwnerFrame().form.menuTitle.replace(/\//g, "-").replace(/ /g, "");
        					strFileName += "-" + this.pGrid.name;
        					this.exportExcel(this.pForm2, this.pGrid, strFileName);
        					//this.pForm2 = "";
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
        					if (this.pGrid.selecttype != "area") {
        						this.pGrid.set_selecttype("area");
        						var idx = nexacro.getApplication().gds_gridMenu.findRow("DOMAINCD","AREA");
        						nexacro.getApplication().gds_gridMenu.setColumn(idx, "TEXT", "행선택");
        					} else {
        						//default -> row
        						this.pGrid.set_selecttype("row");
        						var idx = nexacro.getApplication().gds_gridMenu.findRow("DOMAINCD","AREA");
        						nexacro.getApplication().gds_gridMenu.setColumn(idx, "TEXT", "영역선택");
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
        			var statusIdx = -1;
        			var deleteIdx = -1;

        			for(let hIdx=0; hIdx<grid.getCellCount("Head"); hIdx++){

        				var headExpandchar = grid.getCellProperty("head", hIdx, "expandchar");
        				//상태컬럼
        				if(headExpandchar == "status")
        				{
        					statusIdx = grid.getCellProperty("head", hIdx, "col");

        					grid.setCellProperty("Body", statusIdx, "cssclass", "expr:dataset.getRowType(currow)==1 ? '' : dataset.getRowType(currow)==2 ? 'plus' : (dataset.getRowType(currow)==4 ? 'save' : 'minus');");
        					grid.setCellProperty("Head", hIdx, "text", "상태");
        				}
        				//삭제컬럼
        				else if(headExpandchar == "delete")
        				{
        					deleteIdx = grid.getCellProperty("head", hIdx, "col")

        					let ds = grid.getBindDataset();
        					ds.addColumn("DEL_CHECKBOX", "STRING", 1);

        					grid.setCellProperty("Head", hIdx, "text", "삭제");
        					grid.setCellProperty("body", deleteIdx, "displaytype", "checkboxcontrol");
        					grid.setCellProperty("body", deleteIdx, "edittype", "checkbox");
        					grid.setCellProperty("body", deleteIdx, "text", "bind:DEL_CHECKBOX");

        					ds.addEventHandler("oncolumnchanged", function(obj , e){
        						if (e.columnid == "DEL_CHECKBOX")
        						{
        							if (e.newvalue == "1")
        							{
        								//추가행이 아닐경우 상태값 delete로 변경
        								if (obj.getRowType(e.row) != Dataset.ROWTYPE_INSERT)
        								{
        									obj.set_updatecontrol(false);
        									obj.setRowType(e.row, Dataset.ROWTYPE_DELETE);
        									obj.set_updatecontrol(true);
        								}
        								else //추가행일경우 삭제
        								{
        									ds.deleteRow(e.row);
        								}
        							}
        							else
        							{
        								//삭제컬럼 UN체크시 ROWTYPE NORMAL TYPE으로 변경
        								obj.set_enableevent(false);
        								obj.set_updatecontrol(false);
        								obj.setRowType(e.row, Dataset.ROWTYPE_NORMAL);
        								obj.set_updatecontrol(true);
        								obj.set_enableevent(true);
        							}
        						}
        					}, this);
        				}
        				// 태블릿 그리드 삭제 컬럼 (size 70)
        				else if(headExpandchar == "tDelete")
        				{
        					tDeleteIdx = grid.getCellProperty("head", hIdx, "col");

        					let ds = grid.getBindDataset();
        					ds.addColumn("DEL_COL", "STRING", 1);

        					grid.setCellProperty("head", hIdx, "text", "삭제");
        					grid.setCellProperty("body", tDeleteIdx, "displaytype", "buttoncontrol");
        					grid.setCellProperty("body", tDeleteIdx, "edittype", "button");
        					grid.setCellProperty("body", tDeleteIdx, "text" ,"bind:DEL_COL");
        					grid.setCellProperty("body", tDeleteIdx, "expandimage", "theme://images/ico_delete2.png");
        					grid.setCellProperty("body", tDeleteIdx, "expandshow", "show");
        					grid.setCellProperty("body", tDeleteIdx, "expandsize", grid.getRealColSize(tDeleteIdx));
        				}
        				// 2021-08-19 태블릿 그리드 수정 컬럼 (size 70)
        				else if(headExpandchar == "tEdit")
        				{
        					tEditIdx = grid.getCellProperty("head", hIdx, "col");

        					let ds = grid.getBindDataset();
        					ds.addColumn("EDIT_COL", "STRING", 1);

        					grid.setCellProperty("head", hIdx, "text", "수정");
        					grid.setCellProperty("body", tEditIdx, "displaytype", "buttoncontrol");
        					grid.setCellProperty("body", tEditIdx, "edittype", "button");
        					grid.setCellProperty("body", tEditIdx, "text", "bind:EDIT_COL");
        					grid.setCellProperty("body", tEditIdx, "expandimage", "theme://images/ico_edit.png");
        					grid.setCellProperty("body", tEditIdx, "expandshow", "show");
        					grid.setCellProperty("body", tEditIdx, "expandsize", grid.getRealColSize(tEditIdx));
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
        			//trace(">>>" + pnCell);
        			//2020-06-29 기존 소스 주석처리 leftCnt 제거
        			var arrColSize = poGrdObj.__colsize.split(",");
        			arrColSize.length = poGrdObj.getFormatColCount();

        			for(var i = 0; i < poGrdObj.getFormatColCount(); i++)
        			{
        				var colSize = poGrdObj.getRealColSize(i);
        				if(colSize > 0 && colSize != arrColSize[i]) {
        					arrColSize[i] = colSize;
        				}
        			}

        			var result = poGrdObj.setRealColSize("body", pnCell, 0);

        			var strColSize = "";

        			for(var j = 0; j < arrColSize.length; j++)
        			{
        				strColSize += arrColSize[j] + ",";
        			}
        			poGrdObj.__colsize = strColSize;
        			/*
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


        			var result = poGrdObj.setRealColSize("body", pnCell, 0);

        			var strColSize = "";

        			for(var j = leftCnt; j < arrColSize.length; j++)
        			{
        				strColSize += arrColSize[j] + ",";
        			}
        			poGrdObj.__colsize = strColSize;
        			*/
        		},

        		/**
        		 * 함  수  명	: 	showCol
        		 * 입      력	: 	1. poGrdObj 		Grid Object
        		 * 반      환	: 	none
        		 * 기      능	: 	그리드 컬럼 보여주기
        		 */
        		showCol : function (poGrdObj)
        		{

        			//this.releaseCol(poGrdObj, "");
        			var colIdx = -1;

        			var arrColSize = poGrdObj.__colsize.split(",");
        			for(var i = 0; i < poGrdObj.getFormatColCount(); i++)
        			{

        				if(poGrdObj.getFormatColProperty(i, "band") == "left")  {
        					if(i > colIdx) colIdx = i;
        				}
        				//trace(">>>> " + i + " : " + poGrdObj.getFormatColProperty(i, "band"));
        				poGrdObj.setRealColSize("body", i, parseInt(arrColSize[i]));
        			}

        			// 틀고정된 그리드의 숨기기 후 보이기 시 틀고정된 컬럼이 안보이는 현상 수정(2021-04-22)
        			if( colIdx > 0 ) this.fixCol(poGrdObj, colIdx);
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

        				// 2021-04-23(다중 정렬 제외 항목)
        				var headExpandchar = grid.getCellProperty("head", i, "expandchar");
        				if(headExpandchar == "status" || headExpandchar == "delete" || headExpandchar == "rno") continue;

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

        			nexacro.getApplication().trace(filterStr);
        			ds.filter(filterStr);
        		},
        		/**
        		 * 엑셀 익스포트 공통함수
        		 * @param  {objForm} this(현재폼)
        		 * @param  {grid} Grid
        		 * @param  {sFileName} 파일명
        		 * @return
        		 * @example
        		 *  Sct.exportExcel(this,this.grd_list);
        		 * @memberOf Sct
        		 */
        		exportExcel : function(objForm, grid, sFileName) {
        			var exportObject = new ExcelExportObject("Export00", objForm);
        			exportObject.set_exportfilename(sFileName);
        			exportObject.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        			exportObject.set_exporturl(nexacro.getEnvironment().services["svcurl"].url+"/XExportImport");
        	//var sSvcUrl = nexacro.getEnvironment().services["svcurl"].url+"XExportImport";
        			exportObject.addExportItem(nexacro.ExportItemTypes.GRID, grid, "Sheet1!A1");

        			exportObject.addEventHandler("onsuccess", function(obj,e){}, objForm);
        			exportObject.addEventHandler("onerror", function(obj,e){
        				 trace(" =========== Excel Export onerror event start============");
        				 trace(" =========== e.eventid : " + e.eventid + " ============");
        				 trace(" =========== e.fromobject : " + e.fromobject + " ============");
        				 trace("=========== e.fromreferenceobject : " + e.fromreferenceobject + " ============");
        				 trace("=========== e.errorcode : " + e.errorcode + " ============");
        				 trace("=========== e.errormsg) : " + e.errormsg + " ============");
        			}, objForm);

        			exportObject.exportData();
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
        			var sSvcUrl = nexacro.getEnvironment().services["svcurl"].url+"/XExportImport";
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
        				// 그리드 normal 상태변경 주석처리 20200922 김장훈
        				//dsToData.applyChange();
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
                    //Eco.Logger.debug({message:"#### ExceImport start log ###", stack:true,elapsed: true});
        			importObj.importData("", "[command=getsheetdata;output=outDs;" + sSheet +"]", "["+ds_importTemp.name+"=outDs]");
        		}
        	},
        	/* Grid End */

        	/* Util Start */
        	Util : {

        		/**
        		 * value의 string 여부 반환
        		 * @param {*} value 확인할 value.
        		 * @return {boolean} string 여부.
        		 * @example
        		 * trace(Sct.Util.isString("test string!!!"));	// output : true
        		 * trace(Sct.Util.isString(1234));	// output : false
        		 * @memberOf Sct.Util
        		 */
        		isString: function(value)
        		{
        			return typeof value === 'string';
        		},
        		isStr: function(value)
        		{
        			return typeof value === 'string';
        		},

        		/**
        		 * value의 number 여부 반환.
        		 * @param {*} value 확인할 value.
        		 * @return {boolean} number 여부.
        		 * @example
        		 * trace(Sct.Util.isNumber(1234));	// output : true
        		 * trace(Sct.Util.isNumber("1234"));	// output : false
        		 * @memberOf Sct.Util
        		 */
        		isNumber: function(value) {
                    return typeof value === 'number' && isFinite(value);
                },
        		isNum: function(value) {
                    return typeof value === 'number' && isFinite(value);
                },

        		/**
        		 * value의 boolean 여부 반환.
        		 * @param {*} value 확인할 value.
        		 * @return {boolean} boolean 여부.
        		 * @example
        		 * trace(Sct.Util.isBoolean(true));	// output : true
        		 * trace(Sct.Util.isBoolean("true"));	// output : false
        		 * @memberOf Sct.Util
        		 */
        		isBoolean: function(value)
        		{
        			return typeof value == 'boolean';
        		},
        		isBool: function(value)
        		{
        			return typeof value == 'boolean';
        		},

        		/**
        		 * value의 null 여부 반환.
        		 * @param {*} value 확인할 value.
        		 * @return {boolean} null 여부.
        		 * @example
        		 * trace(Sct.Util.isNull(null));	// output : true
        		 * var a; // undefined
        		 * trace(Sct.Util.isNull(a));	// output : false
        		 * trace(Sct.Util.isNull(""));	// output : false
        		 * @memberOf Sct.Util
        		 */
        		isNull: function(value)
        		{
        			return value === null;
        		},

        		/**
        		 * value의 undefined 여부 반환.
        		 * @param {*} value 확인할 value.
        		 * @return {boolean} undefined 여부.
        		 * @example
        		 * var a;
        		 * trace(Sct.Util.isUndefined(a));	// output : true
        		 *
        		 * var a = "";
        		 * trace(Sct.Util.isUndefined(a));	// output : false
        		 * @memberOf Sct.Util
        		 */
        		isUndefined: function(value)
        		{
        			return value === undefined;
        		},

        		/**
        		 * value의 nexacro component 여부 반환.
        		 * @param {*} value 확인할 value.
        		 * @return {boolean} nexacro component 여부.
        		 * @example
        		 * var a = new Button();
        		 * trace(Sct.Util.isXComponent(a));	// output : true
        		 *
        		 * var a = new Dataset();
        		 * trace(Sct.Util.isXComponent(a));	// output : false
        		 *
        		 * var a = new String();
        		 * trace(Sct.Util.isXComponent(a));	// output : false
        		 *
        		 * @memberOf Sct.Util
        		 */
        		isXComponent: function(value)
        		{
        			if ( value === null || value === undefined  ) return false;

        			return value instanceof nexacro.Component;
        		},

        		/*****************************************************************************************
        		 * 함  수  명	:	isDate
        		 * 입      력	:	1. strDate : 입력스트링(YYYYMM or YYYYMMDD)
        		 * 반      환	:	Boolen 형식의 정합성 체크
        		 * 기      능	:	YYYYMMDD or YYYYMM 날짜 여부를 반환하는 함수
        		 *****************************************************************************************/
        		isDate : function (strDate)
        		{
        			var retVal;

        			if (this.isEmpty(strDate.length) == true){
        				 strDate =  (new Date(strDate)).getFullYear()
        						 + ((new Date(strDate)).getMonth()+1).toString().padLeft(2, "0")
        						 + ((new Date(strDate)).getDate()).toString().padLeft(2, "0");
        			}

        			switch(strDate.length)
        			{
        				case 6://년월
        					retVal =  this.isYM(strDate);
        					break;
        				case 8://년월일
        					retVal =  this.isYMD(strDate);
        					break;
        				default:
        					retVal = false;
        					break;
        			}

        			return retVal;
        		},

        		/*****************************************************************************************
        		 * 함  수  명	:	isYMD
        		 * 입      력	:	1. strDate : 8자리의 숫자로 된 날짜(YYYYMMDD)
        		 * 반      환	:	Boolen 형식의 정합성 체크
        		 * 기      능	:	YYYYMMDD 날짜 여부를 반환하는 함수
        		 *****************************************************************************************/
        		isYMD : function (strDate)
        		{

        			if (this.isEmpty(strDate.length) == true){
        				 strDate =  (new Date(strDate)).getFullYear()
        						 + ((new Date(strDate)).getMonth()+1).toString().padLeft(2, "0")
        						 + ((new Date(strDate)).getDate()).toString().padLeft(2, "0");
        			}

        			if (strDate.length != 8 || !isNumeric(strDate)) {
        				return false;
        			}

        			var strYM = strDate.substr(0,6);	//년월
        			if (!this.isYM(strYM)) {
        				return false;
        			}
        			var nDay   = toNumber(strDate.substr(6,2));	// 일자
        			var nLastDay = toNumber(this.getLastDay(strYM).substr(6,2));

        			if (nDay < 1 || nDay > nLastDay) {
        				return false;
        				alert(nDay);
        			}

        			return true;
        		},

        		/*****************************************************************************************
        		 * 함  수  명	:	isYM
        		 * 입      력	:	1. strDate : 8자리의 숫자로 된 날짜(YYYYMM)
        		 * 반      환	:	Boolen 형식의 정합성 체크
        		 * 기      능	:	YYYYMM 날짜 여부를 반환하는 함수
        		 *****************************************************************************************/
        		isYM : function (strDate)
        		{
        			if (this.isEmpty(strDate.length) == true){
        				 strDate =  (new Date(strDate)).getFullYear()
        						 + ((new Date(strDate)).getMonth()+1).toString().padLeft(2, "0");
        			}

        			if (strDate.length != 6 || !isNumeric(strDate)) {
        				return false;
        			}

        			var nYear  = toNumber(strDate.substr(0,4));	//년도값을 숫자로
        			var nMonth = toNumber(strDate.substr(4,2));	//월을 숫자로

        			if((nMonth < 1) || (nMonth > 12)) {
        				return false;
        			}

        			return true;
        		},

        		/**
        		 * value의 빈값 여부 반환.<br>
        		 * 1. null, undefined type : true 반환<br>
        		 * 2. string, array type : length 가 0인 경우 true 반환<br>
        		 * 3. object type : 하위 속성이 존재할 경우 true 반환<br>
        		 * 4. boolean, number, date type : false 반환
        		 *
        		 * @param {*} value 확인할 value.
        		 * @return {boolean} empty 여부.
        		 * @example
        		 * var a;	// undefined
        		 * trace(Sct.Util.isEmpty(a));	// output : true
        		 *
        		 * var a = null;	// null
        		 * trace(Sct.Util.isEmpty(a));	// output : true
        		 *
        		 * var a = "";	// string
        		 * trace(Sct.Util.isEmpty(a));	// output : true
        		 *
        		 * var a = "abc";	// string
        		 * trace(Sct.Util.isEmpty(a));	// output : false
        		 *
        		 * var a = [];	// array
        		 * trace(Sct.Util.isEmpty(a));	// output : true
        		 *
        		 * var a = [1,2,3];	// array
        		 * trace(Sct.Util.isEmpty(a));	// output : false
        		 *
        		 * var a = new Array();	// array
        		 * trace(Sct.Util.isEmpty(a));	// output : true
        		 *
        		 * var a = new Array(3);	// array
        		 * trace(Sct.Util.isEmpty(a));	// output : false
        		 *
        		 * var a = {};	// object
        		 * trace(Sct.Util.isEmpty(a));	// output : true
        		 *
        		 * var a = {a:'1', b:'2'};	// object
        		 * trace(Sct.Util.isEmpty(a));	// output : false
        		 *
        		 * var a = new Object();	// object
        		 * trace(Sct.Util.isEmpty(a));	// output : true
        		 *
        		 * var a = new Object();	// object
        		 * a.test = "abc";
        		 * trace(Sct.Util.isEmpty(a));	// output : false
        		 *
        		 * var a = true;	// boolean
        		 * trace(Sct.Util.isEmpty(a));	// output : false
        		 *
        		 * var a = 0;	// number
        		 * trace(Sct.Util.isEmpty(a));	// output : false
        		 *
        		 * var a = new Date();	// date
        		 * trace(Sct.Util.isEmpty(a));	// output : false
        		 *
        		 * @memberOf Sct.Util
        		 */
        		isEmpty: function(value)
        		{
        			if (new String(value).valueOf() == "undefined") return true;
        			if (new String(value).valueOf() == "NaN") return true;
        			if (value == null) return true;
        			if (value == "null") return true;

        			var v_ChkStr = new String(value);

        			if (v_ChkStr == null) return true;
        			if (v_ChkStr.toString().length == 0 ) return true;
        			return false;
        		},

        		isNotEmpty: function(value)
        		{
        			return !this.isEmpty(value);
        		},

        		/**
        		 * 함  수  명	: 	nvl
        		 * 입      력	: 	1. value : 입력값
        							2. rtnVal : 출력값
        		 * 반      환	: 	입력값이 null = sReVal
        							Not Null = 입력값
        		 * 기      능	: 	NULL 일 경우 치환값을 리턴하는 함수
        		 */
        		nvl : function (value, rtnVal)
        		{
        			if(rtnVal == undefined || rtnVal == "undefined" || rtnVal == null) rtnVal = "";

        			if( this.isNull(value) )
        			{
        				return rtnVal;
        			}

        			return value;
        		},

        		/**
        		 * 함  수  명	: 	transNullToEmpty
        		 * 입      력	: 	1. sValue : 입력값
        							2. sReVal :
        		 * 반      환	: 	입력값이 null = sReVal
        							Not Null = 입력값
        		 * 기      능	: 	NULL 일 경우 치환값을 리턴하는 함수
        		 */
        		transNullToEmpty : function (sValue, sReVal)
        		{
        			if(sReVal == undefined || sReVal == "undefined") sReVal = "";

        			if(this.isNull(sValue))
        			{
        				return sReVal;
        			}

        			return sValue;
        		},

        		 /**
        		 * 함  수  명	: 	nullToNumber
        		 * 입      력	: 	1. value : 입력값
        		 * 반      환	: 	입력값이 null = 0
        							Not Null = 숫자형 입력값
        		 * 기      능	: 	NULL 일 경우 숫자형 치환값을 리턴하는 함수
        		 */
        		nullToNumber : function (value)
        		{
        			if( this.isEmpty(value) )
        			{
        				return 0;
        			}
        			return toNumber(value);
        		},

        		 /**
        		 * 함  수  명	: 	appendComma
        		 * 입      력	: 	1. nNumber	: String
        							2. nDetail	: 출력시 소숫점 이하의 자릿수.(반올림함)
        		 * 반      환	: 	정상여부(true/false)
        		 * 기      능	: 	입력받은 Number에 컴마를 추가한 String(Comma 를 포함하고 있는 숫자) 반환하는 함수
        		 */
        		appendComma : function (nNumber, nDetail)
        		{
        			var sLeft="";
        			if (nNumber == null)	return "";
        			if (nDetail	== null)	nDetail	= 0;

        			nNumber				= parseFloat(nNumber);
        			nNumber				= Math.round(nNumber, nDetail);

        			if (nNumber < 0 ){
        				nNumber = Math.abs(nNumber);
        				sLeft = "-";
        			}

        			var strNumber		= new String(nNumber);
        			var arrNumber		= strNumber.split(".");
        			var strFormatNum	= "";
        			var j = 0;

        			for ( i = arrNumber[0].length - 1; i >= 0; i--)
        			{
        				if (i != strNumber.length && j == 3)
        				{
        					strFormatNum = arrNumber[0].charAt(i) + "," + strFormatNum;
        					j = 0;
        				}
        				else
        				{
        					strFormatNum = arrNumber[0].charAt(i) + strFormatNum;
        				}
        				j++;
        			}

        			if (arrNumber.length > 1)	strFormatNum = strFormatNum + "." + arrNumber[1];

        			strFormatNum = sLeft + strFormatNum;
        			return strFormatNum;
        		},

        		/**
        		* 함  수  명	: 	removeComma
        		* 입      력	: 	1. strValue	: 입력값
        		* 반      환	: 	컴마를 제거한 입력값
        		* 기      능	: 	컴마를 제거한 입력값을 반환하는 함수
        		*/
        		removeComma : function (value)
        		{
        			return value.replace(",", "");
        		},

        		/**
        		* 함  수  명	: 	applyMask
        		* 입      력	: 	1. form	: 현재 Form
        							2. value : 원래 값
        							3. mask : Mask
        							4. locale : Locale
        		* 반      환	: 	Mask, Locale을 적용한 String
        		* 기      능	: 	Mask, Locale을 적용한 값을 반환하는 함수
        		*/
        		applyMask : function (form, value, mask, locale)
        		{
        			if(Eco.isEmpty(locale)) locale = nexacro.getApplication().gv_locale;
        			if(Eco.isEmpty(mask)) mask = nexacro.getApplication().gv_localMoney;
        			if(Eco.isEmpty(form)) form = nexacro.getApplication().av_topFrame.form;

        			var o = new MaskEdit();
        			o.init("msk_temp", "absolute", 30, 120, 196, 46, null, null);
        			form.addChild("msk_temp", o);

        			o.set_mask(mask);
        			o.set_locale(locale);
        			o.set_value(value);
        			o.set_visible(false);

        			o.show();

        			var rtn = o.text;

        			form.removeChild(o.name);
        			o.destroy();

        			return rtn;
        		},

        		/**
        		* 함  수  명	: trim
        		* 입      력	: 1. inVal	: 문자열 값
        		* 반      환	: return 문자열
        		* 기      능	: 입력값을 체크하여 Null인경우 ""을 리턴, Null이 아니면 입력값을 반환하는 함수
        		*/
        		trim : function (sValue)
        		{
        			if (sValue == null) return "";
        			if (new String(sValue).valueOf() == "undefined") return "";
        			if (new String(sValue) == null) return "";

        			var retVal = (new String(sValue)).replace(/^\s+|\s+$/g, '');

        			return retVal;
        		},

        		/*****************************************************************************************
        		* 함  수  명	: 	getLength, length
        		* 입      력	: 	1. sValue - String
        		* 반      환	: 	return int
        		* 기      능	: 	입력된 문자열 길이 반환하는 함수
        		*****************************************************************************************/
        		getLength : function (sValue)
        		{
        			if (new String(sValue).valueOf() == "undefined") return 0;
        			if (sValue == null) return 0;

        			var v_ChkStr = new String(this.trim(sValue));

        			if (v_ChkStr == null) return 0;
        			if (v_ChkStr.toString().length == 0 ) return 0;

        			return v_ChkStr.toString().length;
        		},

        		length : function (sValue)
        		{
        			return this.getLength(sValue);
        		},

        		/**
        		 * JSON Object를 String으로 변환하여 리턴한다.
        		 * @param {object} 변경할JSON문자열
        		 * @return {string} 변형문자열
        		 * @example
        		 * Sct.Util.setJSONToString({a:"aa"});
        		 * @memberOf Sct.Util
        		 */
        		setJSONToString : function(object)
        		{
        			var isArray = (object.join && object.pop && object.push
        			&& object.reverse && object.shift && object.slice && object.splice);
        			var results = [];

        			for (var i in object) {
        				var value = object[i];

        				results.push((isArray ? "" : "\"" + i.toString() + "\" : ")
        						+ (typeof value == "string" ? "\"" + value + "\"" : value));
        			}

        			return (isArray ? "[" : "{") + results.join(", ") + (isArray ? "]" : "}");
        		},

        		/**
        		 * JSON String을 JSON Object으로 변환하여 리턴한다.
        		 * @param {object} obj
        		 * @return {object} 변형문자열
        		 * @example
        		 *  Sct.Util.setJSONToString({a:"aa"});
        		 * @memberOf Sct.Util
        		 */
        		setStringToJSON : function(strJson)
        		{
        			return eval("(" + strJson + ")");
        		},

        		/**
        		 * Font Object 생성 반환.
        		 * @param {object} obj
        		 * @param {number} iFontSize
        		 * @param {string} 폰트명
        		 * @param {string} sType
        		 * @return {array} 변형문자열
        		 * @example
        		 *   Sct.Util.getObjFont(this.Button00,"12","normal");
        		 * @memberOf Sct.Util
        		 */
        		getObjFont : function (obj,nFontSize,sType)
        		{

        			var objFont = obj.currentstyle.font;

        			sType = (this.isEmpty(sType)) ? "normal" : sType;
        			objFont.set_size(nFontSize);
        			objFont.set_face("Dotum");
        			objFont.set_type(sType);
        			return objFont;
        		},

        		/**
        		 * 함  수  명	:	getBirthYear
        		 * 입      력	:	1. sJuminNo : 생년 월일 또는 주민 번호
        		 * 반      환	:	return true/false
        		 * 기      능	:	주민번호 뒷 첫번째 자리로 년대를 반환 하는 함수
        		 */
        		getBirthYear : function (sJuminNo)
        		{
        			if (sJuminNo.toString().length != 13){
        				return "N";
        			}

        			if (!(sJuminNo).match(/^\d{6}\d{7}$/)){
        				return "N";
        			}

        			var vGb = sJuminNo.substr(6,1);

        			if (vGb == '1' || vGb == '2' || vGb == '5' || vGb == '6') {
        				return '19';
        			} else if (vGb == '3' || vGb == '4' || vGb == '7' || vGb == '8') {
        				return '20';
        			}
        		},

        		/**
        		 * 함  수  명	:	juminToBirth
        		 * 입      력	:	1. sJumin : 주민번호
        		 * 반      환	:	생년월일
        		 * 기      능	:	주민번호를 생년월일로 변환
        		 */
        		juminToBirth : function (sJumin)
        		{
        			var sJuminBirth = sJumin.substring(0,6);
        			var sGubun = sJumin.substring(6,7);

        			if (sGubun == "1" || sGubun == "2" || sGubun == "5" || sGubun == "6"){
        				sJuminBirth = "19" + sJuminBirth;
        			} else if (sGubun == "3" || sGubun == "4" || sGubun == "7" || sGubun == "8"){
        				sJuminBirth = "20" + sJuminBirth;
        			} else if (sGubun == "9" || sGubun == "0"){
        				sJuminBirth = "18" + sJuminBirth;
        			} else if (sGubun == "A" || sGubun == "B"){//태아의 경우
        				sJuminBirth = "20" + sJuminBirth;
        			}
        			return sJuminBirth;
        		},

        		/**
        		* 함  수  명	:	isSSN
        		* 입      력	:	1. sJuminNo : 주민 번호
        		* 반      환	:	Boolen 형식의 정합성 체크
        		* 기      능	:	주민등록번호 유효성 여부를 반환하는 함수
        		*/
        		isSSN : function (sJuminNo)
        		{
        			var birthYear = this.getBirthYear(sJuminNo);

        			birthYear += sJuminNo.substr(0, 2);
        			var birthMonth = sJuminNo.substr(2, 2)-1;
        			var birthDate = sJuminNo.substr(4, 2);
        			var birth = new Date(birthYear, birthMonth, birthDate);

        			if ( birth.getYear() % 100 != sJuminNo.substr(0, 2) ||
        				birth.getMonth() != birthMonth ||
        				birth.getDate() != birthDate)
        			{
        				return false;
        			}

        			// Check Sum 코드의 유효성 검사
        			buf = new Array(13);
        			for (i = 0; i < 6; i++) buf[i] = parseInt(sJuminNo.charAt(i));
        			for (i = 6; i < 13; i++) buf[i] = parseInt(sJuminNo.charAt(i));

        			multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
        			for (i = 0, sum = 0; i < 12; i++) sum += (buf[i] *= multipliers[i]);

        			if ((11 - (sum % 11)) % 10 != buf[12]) {
        				return false;
        			}else{
        				return true;
        			}
        		},

        		 /**
        		 * 함  수  명	:	getRealAge
        		 * 입      력	:	1. sJuminNo : 주민 번호
        		 * 반      환	:	만나이
        		 * 기      능	:	만나이 산출하는 함수
        		 */
        		getRealAge : function (sJuminNo)
        		{
        			var nRealAge = 0;
        			var Birth = sBirthDay;

        			var nBirthYear 	= Birth.substr(0,4);
        			var nBirthMonth = Birth.substr(4,2);

        			var nYear 	= this._getCurSysDate("YYYY");	// 올해
        			var nMonth 	= this._getCurSysDate("MM");		// 이번달

        			(parseInt(nBirthMonth)<parseInt(nMonth)) ? nRealAge=nYear-nBirthYear : nRealAge=nYear-nBirthYear-1; // 생일이 지나지 않으면 1을 뺀다

        			return nRealAge;
        		},

        		/**
        		 * 함  수  명	:	getRealAgeByBirthDay
        		 * 입      력	:	1. sBirthDay : 생년월윌(YYYYMMDD)
        		 * 반      환	:	만나이
        		 * 기      능	:	만나이 산출하는 함수
        		 */
        		getRealAgeByBirthDay : function (sBirthDay)
        		{
        			var nRealAge = 0;
        			var Birth = sBirthDay;

        			var nBirthYear 	= Birth.substr(0,4);
        			var nBirthMonth = Birth.substr(4,2);

        			var nYear 	= this._getCurSysDate("YYYY");	// 올해
        			var nMonth 	= this._getCurSysDate("MM");		// 이번달

        			(parseInt(nBirthMonth)<parseInt(nMonth)) ? nRealAge=nYear-nBirthYear : nRealAge=nYear-nBirthYear-1; // 생일이 지나지 않으면 1을 뺀다

        			return nRealAge;
        		},

        		/**
        		 * 함  수  명	: _getCurSysDate
        		 * 입      력	: 1. strDateGbn 날짜형식 (년월일:YYYYMMDD, 년:YYYY, 월:MM, 일:DD)
        		 * 반      환	:
        		 * 기      능	: 시간가져오는 함수(각 업무개발자는 사용불가)
        						  공통에서 사용하기 위해서 생성된 함수
        		 */
        		_getCurSysDate : function (strDateGbn)
        		{
        			var strReDate = "";

        			var d = new Date();
        			var s = d.getFullYear()
        				  + ((d.getMonth() + 1) + "").padLeft(2, '0')
        				  + (d.getDate() + "").padLeft(2, '0')
        				  + (d.getHours() + "").padLeft(2, '0')
        				  + (d.getMinutes() + "").padLeft(2, '0')
        				  + (d.getSeconds() + "").padLeft(2, '0');

        			var strCurDate = s;

        			if(String(strDateGbn).toUpperCase() == "YYYYMMDDHHMMSS") {
        				strReDate = strCurDate;
        			} else if(String(strDateGbn).toUpperCase() == "YYYYMMDD") {
        				strReDate = strCurDate.substr(0, 8);
        			} else if(String(strDateGbn).toUpperCase() == "YYYY") {
        				strReDate = strCurDate.substr(0, 4);
        			} else if(String(strDateGbn).toUpperCase() == "MM") {
        				strReDate = strCurDate.substr(4, 2);
        			} else if(String(strDateGbn).toUpperCase() == "DD") {
        				strReDate = strCurDate.substr(6, 2);
        			} else if(String(strDateGbn).toUpperCase() == "ALL") {
        				strReDate = strCurDate;
        			} else {
        				strReDate = "";
        			}

        			return strReDate;
        		},

        		/**
        		* 함  수  명	:	isYouth
        		* 입      력	:	1. sJuminNo : 주민 번호
        		* 반      환	:	Boolen 형식의 정합성 체크
        		* 기      능	:	미성년자 여부를 반환하는 함수
        		*/
        		isYouth : function (sJuminNo)
        		{
        			if(this.getRealAge(sJuminNo) >= 20)
        				return false;
        			else
        				return true;
        		},

        		/**
        		* 함  수  명	:	isBizIdNo
        		* 입      력	:	1. strCustNo : 사업자등록번호
        		* 반      환	:	Boolen 형식의 정합성 체크
        		* 기      능	:	사업자등록번호 유효성 여부를 반환하는 함수
        		*/
        		isBizIdNo : function (strCustNo)
        		{
        			if (strCustNo.length != 10) return false;
        			else {

        				var checkID = new Array(1, 3, 7, 1, 3, 7, 1, 3, 5, 1);
        				var tmpcustNo, i, chkSum=0, c2, remander;

        				for (i=0; i<=7; i++) chkSum += checkID[i] * strCustNo.charAt(i);

        				c2 = "0" + (checkID[8] * strCustNo.charAt(8));
        				c2 = c2.substring(c2.length - 2, c2.length);

        				chkSum += Math.floor(c2.charAt(0)) + Math.floor(c2.charAt(1));

        				remander = (10 - (chkSum % 10)) % 10 ;

        				if (Math.floor(strCustNo.charAt(9)) == remander) return true; // OK!
        				return false;
        			}

        			return true;
        		},

        		/**
        		 * 함  수  명	:	isFirmIdNo
        		 * 입      력	:	1. strNo : 법인등록번호
        		 * 반      환	:	Boolen 형식의 정합성 체크
        		 * 기      능	:	법인등록번호 유효성 여부를 반환하는 함수
        		 */
        		isFirmIdNo : function (strNo)
        		{
        			if (strNo.length != 13 || !isNumeric(strNo)) return false;

        			var sum = 0;
        			var buf = new Array(13);
        			var multipliers = [1,2,1,2,1,2,1,2,1,2,1,2];

        			for (var i=0; i<13; i++) {
        				buf[i] = toNumber(strNo.charAt(i));
        			}

        			for (var i=0; i<12; i++) {
        				sum += (buf[i] * multipliers[i]);
        			}

        			sum = (10 - (sum % 10)) % 10;

        			if (buf[12] == sum) {
        				return true;
        			} else {
        				return false;
        			}
        		},

        		/**
        		* 함  수  명	:	isFrnrIdNo
        		* 입      력	:	1. strNo : 외국인등록번호
        		* 반      환	:	Boolen 형식의 정합성 체크
        		* 기      능	:	외국인등록번호 유효성 여부를 반환하는 함수
        		*/
        		isFrnrIdNo : function (strNo)
        		{
        			if (strNo.length != 13 || !isNumeric(strNo)) return false;

        			var month = toNumber(strNo.substr(2, 2));
        			var day	  = toNumber(strNo.substr(4, 2));

        			if (month < 1 || month > 12) return false;
        			if (day < 1 || day > 31) return false;

        			var sum = 0;
        			var odd = 0;
        			var buf = array(13);
        			var multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];

        			for (var i=0; i<13; i++) {
        				buf[i] = toNumber(strNo.charAt(i));
        			}

        			if (buf[11] < 6) return false;

        			odd = buf[7] * 10 + buf[8];
        			if((odd%2) != 0) return false;

        			for (var i=0; i<12; i++) {
        				sum += (buf[i] * multipliers[i]);
        			}

        			sum = 11 - (sum % 11);

        			if (sum >= 10) sum -= 10;
        			sum += 2;
        			if (sum >= 10) sum -= 10;

        			if (buf[12] == sum) {
        				return true;
        			} else {
        				return false;
        			}
        		},

        		/*****************************************************************************************
        		 * 함  수  명	:	isCardNo
        		 * 입      력	:	1. strNo : 카드번호
        		 * 반      환	:	Boolen 형식의 정합성 체크
        		 * 기      능	:	카드번호 유효성 여부를 반환하는 함수
        		 *****************************************************************************************/
        		isCardNo : function (strNo)
        		{
        			if (strNo.length < 13 || strNo.length > 19 || !isNumeric(strNo)) return false;

        			var sum = 0;
        			var buf = new Array();

        			for (var i=0; i<strNo.length; i++) {
        				buf[i] = toNumber(strNo.charAt(i));
        			}

        			var temp;
        			for (var i=buf.length-1, j=0; i>=0; i--, j++) {
        				temp = buf[i] * ((j%2) + 1);
        				if (temp >= 10) {
        					temp = temp - 9;
        				}
        				sum += temp;
        			}

        			if ((sum % 10) == 0) {
        				return true;
        			} else {
        				return false;
        			}
        		},

        		/**
        		 * 함  수  명	:	isEmail
        		 * 입      력	:	1. strValue : E-메일주소
        		 * 반      환	:	Boolen 형식의 정합성 체크
        		 * 기      능	:	E-메일형식 유효성 여부를 반환하는 함수
        		 */
        		isEmail : function (strValue)
        		{
        			var retVal = false;
        			var sTmp = "";
        			var sRegExp = "[a-z0-9]+[a-z0-9.,]+@[a-z0-9]+[a-z0-9.,]+\\.[a-z0-9]+";

        			var regexp = new RegExp(sRegExp,"ig");
        			sTmp = regexp.exec(strValue);

        			if( sTmp == null ) {
        				retVal = false;
        			} else {

        				if( ( sTmp.index == 0 ) && (sTmp[0].length == strValue.length ) ) {
        					retVal = true;
        				} else {
        					retVal = false;
        				}
        			}
        			return retVal;
        		},

        		/**
        		 * 함  수  명	:	removeSpecialChar
        		 * 입      력	:	1. strValue : String
        		 * 반      환	:	Boolen 형식의 정합성 체크
        		 * 기      능	:	특수문자를 제거한 문자열을 반환하는 함수
        		 */
        		removeSpecialChar : function (strValue)
        		{
        		   var strSpecial = "~!@#$%^&*-+./=_`{|}()\\?<>";

        		   for (i = 0; i < strValue.length; i++) {
        			  for (j = 0; j < strSpecial.length; j++) {
        				if (strValue.charAt(i) == strSpecial.charAt(j))
        				  strValue = strValue.replace(strValue.charAt(i), "");
        			  }
        		   }

        		   return strValue;
        		},

        		/**
        		 * 함  수  명	:	lenB
        		 * 입      력	:	1. sVal : String
        		 * 반      환	:	Integer
        		 * 기      능	:	문자열의 전체 길이(한글,한자:3 / 나머지 1)를 반환하는 함수 (UTF8 기준)
        		 */
        		lenB : function (sVal)
        		{
        			var len = 0;

        			if(this.isEmpty(sVal)) return -1;

        			for (i=0; i<String(sVal).toString().length; i++)
        			{
        					if (String(sVal).charCodeAt(i) > 127)
        						len += 3;
        					else
        						len += 1;
        			}

        			return len;
        		},

        		/**
        		 * 함  수  명	:	lenUniB
        		 * 입      력	:	1. sVal : String
        		 * 반      환	:	Integer
        		 * 기      능	:	문자열의 전체 길이(한글,한자:2 / 나머지 1)를 반환하는 함수
        		 */
        		lenUniB : function (sVal)
        		{
        			var len = 0;

        			if(this.isEmpty(sVal)) return -1;

        			for (i=0; i<String(sVal).toString().length; i++)
        			{
        				if (String(sVal).charCodeAt(i) > 127)
        					len += 2;
        				else
        					len += 1;
        			}

        			return len;
        		},

        		/*****************************************************************************************
        		 * 함  수  명	:	moveNextComponent, moveNextComp
        		 * 입      력	:	1. obj : Component
        		 * 반      환	:
        		 * 기      능	:	다음컴포넌트로 이동하는 함수
        		 *****************************************************************************************/
        		moveNextComponent : function (objForm, obj)
        		{
        			var objComponent = objForm.getNextComponent(obj);
        			objComponent.setFocus();
        		},
        		moveNextComp : function (objForm, obj)
        		{
        			var objComponent = objForm.getNextComponent(obj);
        			objComponent.setFocus();
        		},

        		/**
        		 * 함  수  명	: 	getShortText
        		 * 입      력	: 	1. sText 				: 길이 산정을 위한 기본 텍스트
        							2. nMaxLen				: 최대길이
        		 * 반      환	: 	MaxLen을 초가한 부분은 ".."으로 변환된 텍스트
        		 * 기      능	: 	특정길이 이상 String을 ".."으로 변환된 String 반환 함수
        		 */
        		getShortText : function (sText, nMaxLen)
        		{
        			var reStr = "";
        			if( this.isEmpty(sText) ) return "";

        			var len = this._getLengthByToolTip(sText);

        			if(len <= nMaxLen) {
        				return sText;
        			} else if(len <= (nMaxLen+2)){
        				return sText;
        			}

        			len = 0;
        			for (i=0; i<String(sText).toString().length; i++)
        			{
        				if(parseInt(len) >= parseInt(nMaxLen)) {
        					reStr += "..";
        					return reStr;
        				}

        				// 한글 또는 공백은 예외처리
        				if (String(sText).charCodeAt(i) > 127 || String(sText).charCodeAt(i) == 32){
        					len += 2;
        				} else {
        					len += 1;
        				}

        				reStr += String(sText).charAt(i);
        			}

        			return reStr;
        		},

        		/**
        		 * 함  수  명	: 	_getLengthByToolTip
        		 * 입      력	: 	1. sText 				: 길이 산정을 위한 기본 텍스트
        		 * 반      환	: 	length
        		 * 기      능	: 	특정길이 이상 String을 ".."으로 변환된대상 텍스트길이 반환 내부함수
        		 */
        		_getLengthByToolTip : function (sText)
        		{
        			var len 		= 0;

        			if(this.isEmpty(sText)) 	return -1;

        			for (i=0; i<String(sText).toString().length; i++)
        			{
        				// 한글 또는 공백은 예외처리
        				if (String(sText).charCodeAt(i) > 127 || String(sText).charCodeAt(i) == 32){
        					len += 2;
        				} else {
        					len += 1;
        				}
        			}

        			return len;
        		},

        		/**
        		 * 함  수  명	:	right
        		 * 입      력	:	1. sOrg - 원본 문자열
        							2. nSize -자를 Size
        		 * 반      환	:	(자른 후 문자열)
        		 * 기      능	:	문자열을 오른쪽에서 nSize만큼 자른 후 리턴 함수
        		 */
        		right : function (sOrg, nSize)
        		{
        			if(this.isEmpty(sOrg) || this.isEmpty(nSize)) return "";

        			if(sOrg.length < nSize)
        				return sOrg;
        			else
        				return sOrg.substr(sOrg.length-nSize, nSize);
        		},

        		/**
        		 * 함  수  명	:	left
        		 * 입      력	:	1. sOrg - 원본 문자열
        							2. nSize -자를 Size
        		 * 반      환	:	(자른 후 문자열)
        		 * 기      능	:	문자열을 왼쪽에서 nSize만큼 자른 후 리턴 함수
        		 */
        		left : function (sOrg, nSize)
        		{
        			if(this.isEmpty(sOrg) || this.isEmpty(nSize)) return "";

        			if(sOrg.length < nSize)
        				return sOrg;
        			else
        				return sOrg.substr(0, nSize);
        		},

        		/**
        		 * 함  수  명	:	getMonthLastDay
        		 * 입      력	:
        		 * 반      환	:	iLastDay
        		 * 기      능	:	Last day of the month
        		 */
        		getMonthLastDay : function (strMonth)
        		{

        			var iLastDay;
        			var iYear  = parseInt(String(strMonth).substr(0, 4),10) ;
        			var iMonth = parseInt(String(strMonth).substr(4, 2),10);

        			switch(iMonth)
        			{
        				case 2 :
        					if( ((iYear%4)==0) && ((iYear%100)!=0) || ((iYear%400)==0) )
        						iLastDay = 29;
        					else
        						iLastDay = 28;
        					break;
        				case 4 :
        				case 6 :
        				case 9 :
        				case 11 :
        					iLastDay = 30;
        					break;
        				default:
        					iLastDay = 31;
        					break;
        			}
        			return iLastDay;
        		},

        		/**
        		 * 함  수  명	:	getLastDay
        		 * 입      력	:	1. strDate : 6자리의 숫자로 된 날짜(YYYYMM)
        		 * 반      환	:	String 해당월의 마지막날(DD)
        		 * 기      능	:	년월(YYYYMM)을 입력받아 마지막 일를 반환하는 함수
        		 */
        		getLastDay : function (strDate)
        		{
        			var s = "";
        			if (strDate == null) {
        				var date = (new Date()).addMonth(1);
        			}
        			else {
        				var date = new Date(parseInt(strDate.substr(0,4)),parseInt(strDate.substr(4,2)),1);
        			}

        			date = (new Date(date)).addDate((new Date(date)).getDate()*-1);

        			s = (new Date(date)).getFullYear()
        			  + (((new Date(date)).getMonth() + 1) + "").padLeft(2, '0')
        			  + ((new Date(date)).getDate() + "").padLeft(2, '0');
        			return (s);
        		},

        		/**
        		* 함  수  명	:	getFirstDay
        		* 입      력	:
        		* 반      환	:	String 해당월의 첫번째(DD)
        		* 기      능	:	년월(YYYYMM)을 입력받아 마지막 일를 반환하는 함수
        		*/
        		getFirstDay : function ()
        		{
        			var s = "";
        			s = this.getToday().substr(0,6) + "01";
        			return (s);
        		},

        		/**
        		 * 함  수  명	:	getToday, today
        		 * 입      력	:
        		 * 반      환	:	오늘날짜를 반환(YYYYMMDD)
        		 * 기      능	:	오늘날짜(YYYYMMDD)를 반환하는 함수
        		 */
        		getToday : function ()
        		{
        			// 로컬 기준
        			var d = new Date();
        			var s = d.getFullYear()
        				  + ((d.getMonth() + 1) + "").padLeft(2, '0')
        				  + (d.getDate() + "").padLeft(2, '0');

        			return (s);
        		},
        		today : function ()
        		{
        			// 로컬 기준
        			var d = new Date();
        			var s = d.getFullYear()
        				  + ((d.getMonth() + 1) + "").padLeft(2, '0')
        				  + (d.getDate() + "").padLeft(2, '0');

        			return (s);
        		},

        		/**
        		 * 함  수  명	:	koGetToday
        		 * 입      력	:	1. ddd : ddd 축약요일, 입력안하거나 다른값 입력시 전체요일명
        							2. ko : ko 한국식 포맷, 입력안하거나 다른값 입력시 숫자랑 요일만
        		 * 반      환	:	1. ko 미입력시 오늘날짜를 반환(YYYYMMDDddd)
        							2. ko 입력시 오늘날짜 반환(YYYY년MM월DD일 ddd)
        		 * 기      능	:	오늘날짜(YYYYMMDDddd)를 반환하는 함수(로컬시스템 기준)
        		 */
        		koGetToday : function(ddd, ko)
        		{
        			let dddFlag;
        			let koFlag;
        			if (Sct.Util.isEmpty(ddd)) dddFlag = "";
        			else dddFlag = ddd;
        			if (Sct.Util.isEmpty(ko)) koFlag = "";
        			else koFlag = ko;

        			// 로컬 기준
        			const d = new Date();
        			const day = d.getDay();
        			let dayList;
        			if (dddFlag == "ddd") dayList = ["(일)", "(월)", "(화)", "(수)", "(목)", "(금)", "(토)"];
        			else dayList = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
        			const dayLabel = dayList[day];
        			let s;
        			if (koFlag == "ko")
        			{
        				s = d.getFullYear() + "년"
        				s += ((d.getMonth() + 1) + "").padLeft(2, '0') + "월"
        				s += (d.getDate() + "").padLeft(2, '0') + "일"
        				s += " " + dayLabel;
        			}
        			else
        			{
        				s = d.getFullYear()
        				s += ((d.getMonth() + 1) + "").padLeft(2, '0')
        				s += (d.getDate() + "").padLeft(2, '0')
        				s += dayLabel;
        			}

        			return (s);
        		},

        		/**
        		 * 함  수  명	:	getTodayFull
        		 * 입      력	:
        		 * 반      환	:	오늘날짜를 반환(YYYYMMDDhhmmss)
        		 * 기      능	:	오늘날짜(YYYYMMDDhhmmss)를 반환하는 함수(로컬시스템 기준)
        		 */
        		getTodayFull : function ()
        		{
        			// 로컬 기준
        			var d = new Date();
        			var s = d.getFullYear()
        				  + ((d.getMonth() + 1) + "").padLeft(2, '0')
        				  + (d.getDate() + "").padLeft(2, '0')
        				  + (d.getHours() + "").padLeft(2, '0')
        				  + (d.getMinutes() + "").padLeft(2, '0')
        				  + (d.getSeconds() + "").padLeft(2, '0');

        			return (s);
        		},

        		/**
        		 * 함  수  명	:	getMm
        		 * 입      력	:
        		 * 반      환	:	오늘날짜를월(YYYYMM)
        		 * 기      능	:	오늘월(YYYYMM)를 반환하는 함수
        		 */
        		getMm : function ()
        		{
        			// 로컬 기준
        			var d = new Date();
        			var s = d.getFullYear()
        				  + ((d.getMonth() + 1) + "").padLeft(2, '0');

        			return (s);
        		},

        		/**
        		* 함  수  명	:	getDayH, getWeekName
        		* 입      력	:	1. sDate 		: 'yyyyMMdd' 형태로 표현된 날짜.
        							2. bFullName 	: Full Text 요일명 리턴 여부(default:false)
        		* 반      환	:	요일 한글명
        		* 기      능	:	문자열 날짜를 받아서 요일 한글명 리턴 함수
        		*/
        		getDayH : function (sDate, bFullName)
        		{
        			var nDay = this.getDay(sDate);
        			var sDay;

        			if(bFullName == null) bFullName = false;

        			sDay = this._getDayHByDay(nDay, bFullName);

        			return sDay;
        		},
        		getWeekName : function (sDate, bFullName)
        		{
        			var nDay = this.getDay(sDate);
        			var sDay;

        			if(bFullName == null) bFullName = false;

        			sDay = this._getDayHByDay(nDay, bFullName);

        			return sDay;
        		},

        		/**
        		 * 함  수  명	:	_getDayHByDay
        		 * 입      력	:	1. nDay : nWeek
        		 *					2. bFullName : FullName 여부
        		 * 반      환	:	요일
        		 * 기      능	:	요일 반환하는 함수
        		 */
        		_getDayHByDay : function (nDay, bFullName)
        		{
        			var sDay;

        			switch (nDay) {
        				case 0:
        					sDay = (bFullName == false ? "일" : "일요일");
        					break;
        				case 1:
        					sDay = (bFullName == false ? "월" : "월요일");
        					break;
        				case 2:
        					sDay = (bFullName == false ? "화" : "화요일");
        					break;
        				case 3:
        					sDay = (bFullName == false ? "수" : "수요일");
        					break;
        				case 4:
        					sDay = (bFullName == false ? "목" : "목요일");
        					break;
        				case 5:
        					sDay = (bFullName == false ? "금" : "금요일");
        					break;
        				case 6:
        					sDay = (bFullName == false ? "토" : "토요일");
        					break;
        			}

        			return sDay;
        		},

        		/**
        		* 함  수  명	:	getMonthNm
        		* 입      력	:	1. sMonth 		: 'MM' 형태로 표현된 월.
        		* 반      환	:	월(Month) 영문명
        		* 기      능	:	월(Month)를 입력받아 영문명을 반환하는 함수
        		*/
        		getMonthNm : function (sMonth)
        		{
        			var sMonthNm;

        			switch (sMonth) {
        				case "01":
        					sMonthNm = "January";
        					break;
        				case "02":
        					sMonthNm = "February";
        					break;
        				case "03":
        					sMonthNm = "March";
        					break;
        				case "04":
        					sMonthNm = "April";
        					break;
        				case "05":
        					sMonthNm = "May";
        					break;
        				case "06":
        					sMonthNm = "June";
        					break;
        				case "07":
        					sMonthNm = "July";
        					break;
        				case "08":
        					sMonthNm = "August";
        					break;
        				case "09":
        					sMonthNm = "September";
        					break;
        				case "10":
        					sMonthNm = "October";
        					break;
        				case "11":
        					sMonthNm = "November";
        					break;
        				case "12":
        					sMonthNm = "December";
        					break;
        			}

        			return sMonthNm;
        		},

        		/**
        		 * 함  수  명	:	getHour
        		 * 입      력	:
        		 * 반      환	:	string (2자리 hh)
        		 * 기      능	:	PC의 현재 시간 리턴 함수
        		 */
        		getHour : function ()
        		{
        			var objDate = new Date();
        			return this.right("0" + objDate.getHours(), 2);
        		},

        		/**
        		 * 함  수  명	:	getMin
        		 * 입      력	:
        		 * 반      환	:	string (2자리 hh)
        		 * 기      능	:	PC의 현재 분 리턴 함수
        		 */
        		getMin : function ()
        		{
        			var objDate = new Date();
        			return this.right("0" + objDate.getMinutes(), 2);
        		},

        		/**
        		 * 함  수  명	:	getSeconds
        		 * 입      력	:
        		 * 반      환	:	string (2자리 mm)
        		 * 기      능	:	PC의 현재 초 리턴 함수
        		 */
        		getSeconds : function ()
        		{
        			var objDate = new Date();
        			return this.right("0" + objDate.getSeconds(), 2);
        		},

        		/**
        		 * 함  수  명	:	getDay
        		 * 입      력	:	1. strDate : 'yyyyMMdd' 형태로 표현된 날짜.
        		 * 반      환	:	요일에 따른 숫자(0 = 일요일 ~ 6 = 토요일. 오류가 발생할 경우 -1 Return)
        		 * 기      능	:	입력된날짜(YYYYMMDD)로부터 요일을 반환하는 함수
        		 */
        		getDay : function (strDate)
        		{
        			var nYear = parseInt(String(strDate).substr(0, 4));
        			var nMonth = parseInt(String(strDate).substr(4, 2) - 1);
        			var nDate = parseInt(String(strDate).substr(6, 2));

        			var date = new Date(nYear, nMonth, nDate);

        			return date.getDay();
        		},

        		/**
        		 * 함  수  명	:	getMilliSec
        		 * 입      력	:
        		 * 반      환	:	Milli Seconds
        		 * 기      능	:	Milli Seconds을 반환하는 함수
        		 */
        		getMilliSec : function ()
        		{
        			var date = new Date()

        			return date.getTime();
        		},

        		/**
        		 * 함  수  명	:	makeDate
        		 * 입      력	:	1. nYear 	: 'yyyy' 형태로 표현된 년도.
        							2. nMonth 	: 'mm' 형태로 표현된 월.
        							3. nDate 	: 'dd' 형태로 표현된 일자.
        		 * 반      환	:	string (yyyymmdd)
        		 * 기      능	:	입력된 파라미터를 날짜형식으로 반환하는 함수
        		 */
        		makeDate : function (nYear, nMonth, nDate)
        		{
        			if( this.isEmpty(nYear) || this.isEmpty(nMonth) || this.isEmpty(nDate) )	return "";

        			var objDate = new Date(nYear, nMonth-1, nDate);

        			var sYear   = objDate.getFullYear().toString();
        			var sMonth  = this.right("0" + (objDate.getMonth() + 1), 2);
        			var sDate   = this.right("0" + objDate.getDate(), 2);

        			return sYear + sMonth + sDate;
        		},

        		/**
        		 * 함  수  명	:	addDate
        		 * 입      력	:	1. strDate : 'yyyyMMdd' 형태로 표현된 날짜.
        							2. nOffset : nOffset
        		 * 반      환	:	요일에 따른 숫자(0 = 일요일 ~ 6 = 토요일. 오류가 발생할 경우 -1 Return)
        		 * 기      능	:	입력된 날짜에 nOffset 으로 지정된 만큼의 일을 증감 후 리턴하는 함수
        		 */
        		addDate : function (sDate, nOffset)
        		{
        			sDate = String(sDate);
        			if( this.isEmpty(sDate) || this.isEmpty(nOffset) )	return "";

        			var nYear = parseInt(sDate.substr(0, 4));
        			var nMonth = parseInt(sDate.substr(4, 2));
        			var nDate = parseInt(sDate.substr(6, 2)) + nOffset;

        			return this.makeDate(nYear, nMonth, nDate);
        		},

        		/**
        		 * 함  수  명	:	addMonth
        		 * 입      력	:	1. strDate : 'yyyyMMdd' 형태로 표현된 날짜.
        							2. nOffset : nOffset
        		 * 반      환	:	요일에 따른 숫자(0 = 일요일 ~ 6 = 토요일. 오류가 발생할 경우 -1 Return)
        		 * 기      능	:	입력된 날짜에 nOffset 으로 지정된 만큼의 월을 증감 후 리턴하는 함수
        		 */
        		addMonth : function (sDate, nOffset)
        		{
        			sDate = String(sDate);
        			if( this.isEmpty(sDate) || this.isEmpty(nOffset) )		return "";

        			var nYear = parseInt(sDate.substr(0, 4));
        			var nMonth = parseInt(sDate.substr(4, 2))+nOffset;
        			var nDate = parseInt(sDate.substr(6, 2));
        			var nLastDate, sRet;

        			sRet = this.makeDate(nYear, nMonth, 1);

        			nLastDate = this.getLastDay(sRet);
        			sRet = sRet.substr(0,6);
        			if( nDate > nLastDate ) {
        				sRet += this.right("0"+nLastDate.toString(),2);
        			} else {
        				sRet += this.right("0"+nDate.toString(),2);
        			}

        			return sRet;
        		},

        		/**
        		 * 함  수  명	:	isLeapYear
        		 * 입      력	:	1. sDate : 'yyyyMMdd' 형태로 표현된 날짜.
        		 * 반      환	:	boolean (윤년이면 true, 그외 false)
        		 * 기      능	:	윤년여부 확인하는 함수
        		 */
        		isLeapYear : function (sDate)
        		{
        			var ret;
        			var nY;

        			if(this.isEmpty(sDate))		return false;

        			nY = parseInt(sDate.substring(0,4), 10);

        			if ((nY % 4) == 0)
        			{
        				if ((nY % 100) != 0 || (nY % 400) == 0)
        					ret = true;
        				else
        					ret = false;
        			}
        			else
        				ret = false;

        			return ret;
        		},

        		/**
        		 * 함  수  명	:	getYearDiff
        		 * 입      력	:	1. time1 : 비교 시작일자
        							2. time2 : 비교 종료일자
        		 * 반      환	:	차이년도
        		 * 기      능	:	두 일자간 년도 차이를 반환하는 함수
        		 */
        		getYearDiff : function (time1,time2)
        		{
        		   var date1 = this.stringToDate(time1);
        		   var date2 = this.stringToDate(time2);
        		   var years  = date2.getFullYear() - date1.getFullYear();

        		   return years;
        		},

        		/**
        		 * 함  수  명	:	getMonthDiff
        		 * 입      력	:	1. time1 : 비교 시작일자
        							2. time2 : 비교 종료일자
        		 * 반      환	:	차이 개월수
        		 * 기      능	:	두 일자간 개월수 차이
        		 */
        		getMonthDiff : function (time1,time2)
        		{
        		   var date1 = this.stringToDate(time1);
        		   var date2 = this.stringToDate(time2);

        		   var years  = date2.getFullYear() - date1.getFullYear();
        		   var months = date2.getMonth() - date1.getMonth();
        		   var days   = date2.getDate() - date1.getDate();

        		   return (years * 12 + months + (days >= 0 ? 0 : -1) );
        		},

        		/**
        		* 함  수  명	:	getDayDiff
        		* 입      력	:	1. time1 : 비교 시작일자
        							2. time2 : 비교 종료일자
        		* 반      환	:	차이 일
        		* 기      능	:	두 일자간 일 차이
        		*/
        		getDayDiff : function (time1,time2)
        		{
        		   var date1 = this.stringToDate(time1);
        		   var date2 = this.stringToDate(time2);
        		   var day   = 1000 * 3600 * 24; //24시간

        		   return parseInt((date2 - date1) / day, 10);
        		},

        		/**
        		* 함  수  명	:	getHourDiff
        		* 입      력	:	1. time1 : 비교 시작일자
        						2. time2 : 비교 종료일자
        		* 반      환	:	차이 일
        		* 기      능	:	두 일자간 시간 차이
        		*/
        		getHourDiff : function (time1,time2)
        		{
        		   var date1 = this.stringToDate(time1);
        		   var date2 = this.stringToDate(time2);
        		   var hour  = 1000 * 3600; //1시간

        		   return parseInt((date2 - date1) / hour, 10);
        		},

        		/**
        		* 함  수  명	:	getMinuteDiff
        		* 입      력	:	1. time1 : 비교 시작일자
        						2. time2 : 비교 종료일자
        		* 반      환	:	차이 일
        		* 기      능	:	두 일자간 분 차이
        		*/
        		getMinuteDiff : function (time1,time2)
        		{
        		   var date1;
        		   var date2;

        		   if(time1 instanceof Date)	date1 = time1;
        		   else							date1 = this.stringToDate(time1);

        		   if(time2 instanceof Date)	date2 = time2;
        		   else							date2 = this.stringToDate(time2);

        		   var minute  = 1000 * 60; //1분

        		   return parseInt((date2 - date1) / minute, 10);
        		},

        		/**
        		* 함  수  명	:	getSecondDiff
        		* 입      력	:	1. time1 : 비교 시작일자
        							2. time2 : 비교 종료일자
        		* 반      환	:	차이 일
        		* 기      능	:	두 일자간 초 차이
        		*/
        		getSecondDiff : function (time1,time2)
        		{
        		   var date1 = this.stringToDate(time1);
        		   var date2 = this.stringToDate(time2);
        		   var sec  = 1000; //1시간

        		   return parseInt((date2 - date1) / sec, 10);
        		},

        		/**
        		* 함  수  명	:	stringToDate
        		* 입      력	:	1. sDate : 문자열 날짜 (yyyyMMddhhmmss)
        		* 반      환	:	date (날짜)
        		* 기      능	:	문자열 날짜를 Date 타입으로 리턴
        		*/
        		stringToDate : function (sDate)
        		{
        			/* //2017-08-30 이전소스
        			if( this.isEmpty(sDate) )		return -1;
        			var sVal = new String(sDate);

        			sVal = sVal.replace("-","").replace("/","").replace(".","");
        			var date =  new Date(parseInt(sVal.substr(0,4)),parseInt(sVal.substr(4,2))-1,parseInt(sVal.substr(6,2)),parseInt(sVal.substr(8,2)),parseInt(sVal.substr(10,2)),parseInt(sVal.substr(12,2)));
        			return date;
        			*/

        			//입력파라미터 날짜포맷 yyyyMMddhhmmss -> 각 포맷별로 변경가능하도록 수정
        			// 2017-08-30 배영걸
        			if( Sct.Util.isEmpty(sDate) )		return -1;
        			var sVal = new String(sDate);
        			var date;
        			sVal = sVal.replace("-","").replace("/","").replace(".","");
        			switch (sVal.length)
        			{
        				case 14 :	date = new Date(parseInt(sVal.substr(0,4)),parseInt(sVal.substr(4,2))-1,parseInt(sVal.substr(6,2)),parseInt(sVal.substr(8,2)),parseInt(sVal.substr(10,2)),parseInt(sVal.substr(12,2)));
        							break; //yyyyMMddhhmmss
        				case 8  :	date = new Date(parseInt(sVal.substr(0,4)),parseInt(sVal.substr(4,2))-1,parseInt(sVal.substr(6,2)));
        							break; //yyyyMMdd
        				case 6	:	date = new Date(parseInt(sVal.substr(0,4)),parseInt(sVal.substr(4,2))-1,"01");
        							break; //yyyyMM
        				case 4	:	date = new Date(parseInt(sVal.substr(0,4)),"01","01");
        							break; //yyyy
        				default	:	return -1;
        			}
        			return date;

        		},

        		/**
        		* 함  수  명	:	getWeekDay
        		* 입      력	:	1. sDate 	: 문자열 날짜 (yyyyMMdd)
        						2. nSelDay	: 요청하고자 하는 요일(선택가능요일(0 = 일요일 ~ 6 = 토요일))
        		* 반      환	:	date (날짜)
        		* 기      능	:	Week 중에서 요청한 요일에 해당하는 일자 리턴
        		*/
        		getWeekDay : function (sDate, nSelDay)
        		{
        			var rtn;
        			var nDay = this.getDay(sDate);

        			// 일요일인경우 전주 처리
        			if(nDay == 0) nDay = 7;

        			//trace("nDay::"+nDay + " nSelDay::" + nSelDay);

        			if(nDay != nSelDay) {
        				var nGap = nSelDay - nDay;
        				rtn = this.addDate(sDate, nGap);
        			}

        			return rtn;
        		},

        		/**
        		* 함  수  명	:	getDateFormat
        		* 입      력	:	1. sDate 	: 문자열 날짜 (yyyyMMdd)
        							2. sGbn		: 날짜 구분자
        		* 반      환	:	String (날짜)
        		* 기      능	:	요청한 날짜형식에 맞춰서 리턴
        		*/
        		getDateFormat : function (sDate, sGbn)
        		{
        			if(this.isEmpty(sGbn)) sGbn = "-";
        			var rtnDate = String(sDate).substr(0,4) + sGbn + String(sDate).substr(4,2) + sGbn + String(sDate).substr(6,2);

        			return rtnDate;
        		},

        		/**
        		* 함  수  명	:	getFullDateFormat
        		* 입      력	:	1. sDate 	: 문자열 날짜 (yyyyMMddhhmmss)
        							2. sGbn		: 날짜 구분자
        		* 반      환	:	String (날짜)
        		* 기      능	:	요청한 날짜형식에 맞춰서 리턴
        		*/
        		getFullDateFormat : function (sDate, sGbn)
        		{
        			if(this.isEmpty(sGbn)) sGbn = "-";
        			var rtnDate = String(sDate).substr(0,4) + sGbn + String(sDate).substr(4,2) + sGbn + String(sDate).substr(6,2);
        				rtnDate += " " + String(sDate).substr(8,2) + ":" + String(sDate).substr(10,2) + ":" + String(sDate).substr(12,2);

        			return rtnDate;
        		},

        		/**
        		 * 함  수  명	:	getObjectType
        		 * 입      력	:	obj
        		 * 반      환	:	오브젝트의 타입
        		 * 기      능	:	오브젝트의 타입을 반환한다.
        		 */
        		getObjectType : function (obj)
        		{
        			if(this.isEmpty(obj)) {
        				return null;
        			}
        			if(obj instanceof Array) {
        				return "Array";
        			} else if(obj instanceof String || typeof(obj) == "string") {
        				return "String";
        			} else if(obj instanceof Function || typeof(obj) == "function") {
        				return "Function";
        			} else if(obj instanceof Boolean || typeof(obj) == "boolean") {
        				return "Boolean";
        			} else if(obj instanceof Number || typeof(obj) == "number"  || typeof(obj) == "decimal") {
        				return "Number";
        			} else if(obj instanceof Edit) {
        				return "Edit";
        			} else if(obj instanceof CheckBox) {
        				return "CheckBox";
        			} else if(obj instanceof Div) {
        				return "Div";
        			} else if(obj instanceof Tab) {
        				return "Tab";
        			}

        			var OBJ_TYPE_NAMES = ["Edit", "Combo", "Dataset", "Grid", "CheckBox", "Radio"
        								, "MaskEdit", "ListBox", "Button", "Calendar", "Div"
        								, "VirtualFile", "FileDialog", "ImageViewer", "Spin"
        								, "Static", "Tab", "TextArea", "Shape"];
        			for(var i=0; i<OBJ_TYPE_NAMES.length; i++) {
        				if(obj.toString().indexOf(OBJ_TYPE_NAMES[i]) > 0) {
        					return OBJ_TYPE_NAMES[i];
        				}
        			}

        			return "Object";
        		},

        		/**
        		 * 함  수  명	:	getObjectFullId
        		 * 입      력	:	obj
        		 * 반      환	:	String
        		 * 기      능	:	오브젝트의 ID를 반환한다.
        		 */
        		getObjectFullId : function (obj, sPath)
        		{
        			var rtn = "";

        			//if(sPath == ""){
        			if(Sct.Util.isEmpty(sPath)){
        				sPath = obj.name;
        			}

        			//if(obj.parent.toString().toUpperCase() == "[OBJECT CHILDFRAME]")
        			if(obj == ((nexacro.getApplication().getActiveForm().name == "frameWork") ? nexacro.getApplication().getActiveForm().div_form.form : nexacro.getApplication().getActiveForm()))
        			{
        			   var arr = sPath.split(".");

        			   for ( var i = (arr.length-2); i >=0; i -- ) {
        				  rtn = rtn + arr[i] + ".";
        			   }

        			   sPath = rtn.substr(0,rtn.length -1);

        			   return sPath;
        			}

        			var obj = obj.parent;
        			sPath = sPath + "." + obj.name;

        			return this.getObjectFullId(obj, sPath);
        		},

        		/**
        		 * 함  수  명	:	getValue
        		 * 입      력	:	sValue
        		 * 반      환	:	오브젝트의 값
        		 * 기      능	:	오브젝트의 값을 가져온다.
        		 */
        		getValue : function (sValue)
        		{
        			if (new String(sValue).valueOf() == "undefined") return "";
        			else return sValue;
        		},

        		/**
        		 * 함수명      : setQuote
        		 * 설명        : 문자열에 ' 를 붙여준다
        		 * argument    : String
        		 * return Type : String
        		 */
        		setQuote : function (sString)
        		{
        			var sVal = new String(sString);
        			var sRet = new String("'");

        			for (var i = 0; i < sVal.length; i++)
        			{
        				if (sVal.substr(i, 1) == "'")
        				{
        					sRet += '"';
        				}
        				else if (sVal.substr(i, 1) == '"')
        				{
        					sRet += '"';
        				}
        				 else if (sVal.substr(i, 1) == ',')
        				{
        					sRet += "','";
        				}
        				else
        				{
        					sRet += sVal.substr(i, 1);
        				}
        			}
        			sRet += "'";
        			return sRet;
        		},

        		/**
        		 * 함  수  명	: 	getTextSize
        		 * 입      력	: 	1. sText 				: 길이 산정을 위한 기본 텍스트
        							2. obj					: 컴포넌트
        		 * 반      환	: 	Size Array
        		 * 기      능	: 	TextSize 반환하는 함수
        		 */
        		getTextSize : function (sText, obj)
        		{
        			var arrsize = Eco.XComp.PositionSize.getTextSize(obj, sText, false);

        			return arrsize;
        		},

        		/**
        		* 인자를 넘겨줄 경우에 넘겨주는 규칙대로 인자/값을 설정
        		* @param {string} 설정할 파리미터명
        		* @param {string} p_value - 설정할 값
        		* @return {string] String
        		* @example
        		*     paramStr += Sct.Util.setParam("sql_xml", "gspl_sql_common");
        		* @memberOf Ex.util
        		*/
        		setParam : function (p_name, p_value)
        		{
        // 		    console.log(p_name);
        // 			return p_name + "=" + this.isReplaceEmpty(p_value) + "&nbsp;";
        			return p_name + "=" +nexacro.wrapQuote(this.isReplaceEmpty(p_value)) + " ";
        		},

        		 /**
        		 * 공백으로치환
        		 * @param {string} 체크할  파리미터명
        		 * @return {string} 공백으로 치환값
        		 * @memberOf Ex.util
        		 */
        		isReplaceEmpty : function(strArg)
        		{
        			if( this.isEmpty(strArg)) {
        				return "";
        			} else {
        				return strArg;
        			}
        		},

        		 /**
        		 * 다중 치환
        		 * @param {string} 체크할  파리미터명
        		 * @param {string} 치환할 문자
        		 * @param {string} 치환하려고하는 문자 1
        		 * @param {string} 치환하려고하는 문자 2
        		 *        :
        		 *        :
        		 * @param {string} 치환하려고하는 문자 n
        		 * @return {string} 치환된 값
        		 * @memberOf Ex.util
        		 */
        		replaceMulti : function ()
        		{
        			if(arguments.length == 0) return "";
        			if(Eco.isEmpty(arguments[0])) return "";
        			if(arguments.length <= 2) return arguments[0];

        			var arg0 = arguments[0];
        			var arg1 = arguments[1];
        			var rtnValue = arg0;

        			for(var i = 2; i < arguments.length; i++)
        			{
        				var s = arguments[i];
        				var regExpr = new RegExp(s, "g");
        				rtnValue = rtnValue.replace(regExpr, arg1);
        			}

        			return rtnValue;
        		},

        		/**
        		* 해당 데이터셋명으로 검색하여 데이터셋이 없으면 데이터셋을 생성
        		* @param 	{object} form
        		*			{string} 데이터셋명
        		* @return {string} dataset
        		* @example
        		* @memberOf Ex.util
        		*/
        		isCheckDs : function(obj, sDsNm)
        		{
        			var oDs =Eco.XComp.lookup(obj,sDsNm);

        		     if(Eco.isEmpty(oDs))
        		     {
        		         oDs = new Dataset;
        		         oDs.name = sDsNm;

        		         obj.addChild(sDsNm, oDs);
        		     }
        		     else
        		    {
        		    	 oDs.clearData();
        		    }

        		     return oDs;
        		},

        		/**
        		* = 을 배열로 분리 처리
        		* @param {string} objString (inds=inds)
        		* @param {number} 0 : 배열 첫번째값 1: 배열 두번째값
        		* @return {string} return 된 배열값
        		* @example
        		* @memberOf Ex.util
        		*/
        		splitDsName : function(objString, type)
        		{
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
        		},

        		/**
        		*  Grid Copy & Paste setting function
        		*/
        		gfn_setGridCopyPaste : function (objForm, grid) {

        			var objConfig = { objGrid : grid};
        			objForm.config = objConfig;

        			if (system.navigatorname == "nexacro" || (system.navigatorname == "IE" && system.navigatorversion < 12)) {
        				objForm.config.colSeperator = "	";  //" " : tab key
        				objForm.config.targetGrid = null;
        				objForm.config.objGrid.addEventHandler("onkeydown", this._gfn_grdCopyPasteStateChk, objForm);
        				objForm.config.objGrid.addEventHandler("onkeyup"  , this._gfn_grdCopyPaste        , objForm);
        			} else {
        				objForm.config.colSeperator = "	";  //" " : tab key
        				objForm.config.targetGrid  = undefined;
        				objForm.config.targetEvent = undefined;
        				objForm.addEventHandler("ontimer", this._gfn_blinkTimerHandler, objForm);
        				objForm.config.objGrid.addEventHandler("onkeydown", this._gfn_grdCopyPasteEtc, objForm);
        			}
        		},

        		/**
        		* @desc  paste data : setPasteData --> set copy paste grid component
        		* @param clipText
        		*/
        		gfn_setPasteData :  function(objForm,clipText) {
        			//var pThis = objForm;
        			var obj = objForm.config.targetGrid;
        			var e = objForm.config.targetEvent;

        			obj.set_enableevent(false);
        			obj.set_enableredraw(false);

        			var ds = obj.getBindDataset();
        			ds.set_enableevent(false);

        			var grdCellCount = obj.getCellCount("body");
        			var rowCount = ds.getRowCount();

        			var objRowCol = this.gfn_getGridSelRowCol(obj);
        			var startrow = objRowCol.selectstartrow;
        			var endrow   = objRowCol.selectendrow;
        			var startcol = objRowCol.selectstartcol;
        			var endcol   = objRowCol.selectendcol;

        			var currRow = startrow;
        			var cellIndex = startcol;

        			copyData = clipText;
        			var seperator = objForm.config.colSeperator;

        			var rowData = copyData.split(/[\n\f\r]/);
        			var rowDataCount = rowData.length - 1;
        			var checkIndex = {};

        			for (var i = 0; i < rowDataCount; i++) {
        				if(rowCount <= currRow) {
        					ds.addRow();
        				}

        				var columnData = rowData[i].split(seperator);
        				var columnLoopCount = cellIndex + columnData.length;

        				if(columnLoopCount > grdCellCount) {
        					columnLoopCount = grdCellCount;
        				}

        				var k = 0;
        				for(var j = cellIndex; j < columnLoopCount; j++) {
        					var colid = obj.getCellProperty("body", j, "text").substr(5);
        					var tempValue = columnData[k];
        					if(!Sct.Util.isEmpty(tempValue)) {
        						ds.setColumn(currRow, colid, tempValue);
        					}

        					k++;
        				}

        				currRow++;
        			}

        			ds.rowposition = currRow;

        			endrow = endrow + rowDataCount - 1;
        			endcol = columnLoopCount - 1;

        			obj.set_enableredraw(true);
        			obj.set_enableevent(true);
        			ds.set_enableevent(true);

        			obj.selectArea(startrow, startcol, endrow, endcol);

        			objForm.config.targetEvent = undefined;
        		},

        		/**
        		* @desc  create textarea : gfn_createElementTextarea --> create document innerhtml : textarea
        		* @param clipText
        		*/
        		gfn_createElementTextarea : function(innerText) {
        			var txtValue = document.createElement('textarea');
        			txtValue.style.position = 'absolute';
        			txtValue.style.left = '-1000px';
        			txtValue.style.top = document.body.scrollTop + 'px';
        			txtValue.value = innerText;
        			document.body.appendChild(txtValue);
        			txtValue.select();

        			return txtValue;
        		},

        		/**
        		* @desc  init blink data : gfn_initBlinkData --> empty target grid
        		* @param objFrom
        		*/
        		gfn_initBlinkData : function(objForm) {
        			var grid = objForm.config.targetGrid;
        			grid.targetGrid = null;
        		},

        		/**
        		* @desc  grid onkeydown event --> ctrl and c or v key down check  ( for nexacro & less than ie 11 )
        		* @param obj - nexacro.Grid
        		* @param e   - nexacro.KeyEventInfo
        		*/
        		_gfn_grdCopyPasteStateChk : function(obj,e) {
        			var keycode = e.keycode;

        			//only ctrl key down
        			if(e.ctrlkey && !e.shiftkey && !e.altkey) {
        				//ctrl + c
        				if(keycode == 67) {
        					obj.bGridCopy = true;
        				} else if(keycode == 86) {		//ctrl + v
        					obj.bGridPaste = true;
        				}
        			}
        		},

        		/**
        		* @desc  grid onkeyup event --> ctrl and c or v key down excute  ( for nexacro & less than ie 11 )
        		* @param obj - nexacro.Grid
        		* @param e   - nexacro.KeyEventInfo
        		*/
        		_gfn_grdCopyPaste : function(obj,e) {
        			var objForm = obj.parent;
        			var keycode = e.keycode;
        			//ctrl + c
        			if(obj.bGridCopy == true) {
        				obj.bGridCopy = false;

        				var objRowCol = this.gfn_getGridSelRowCol(obj);
        				var startrow = objRowCol.selectstartrow;
        				var endrow   = objRowCol.selectendrow;
        				var startcol = objRowCol.selectstartcol;
        				var endcol   = objRowCol.selectendcol;

        				var copyData = "";
        				var colSeperator = objForm.config.colSeperator;

        				objForm.config.targetGrid = null;

        				for (var i = startrow; i <= endrow; i++) {
        					for (var j = startcol; j <= endcol; j++) {
        						var value = obj.getCellValue(i,j);

        						if(!Sct.Util.isEmpty(value)) {
        							if (j < endcol) {
        								copyData += obj.getCellValue(i,j) + colSeperator;
        							} else {
        								copyData += obj.getCellValue(i,j);
        							}
        						}
        					}

        					if (i < obj.selectendrow)
        					{
        						copyData += "\r\n";
        					}
        				}

        				copyData += "\r\n";

        				//clipboard
        				system.clearClipboard();
        				system.setClipboard("CF_TEXT",copyData);

        				objForm.config.targetGrid = obj;
        			} else if(obj.bGridPaste == true) {			 //ctrl + v
        				obj.bGridPaste = false;
        				//clipboard
        				var copyData = system.getClipboard("CF_TEXT");
        				copyData = new String(copyData);
        				var colSeperator = objForm.config.colSeperator;
        				var rowData = copyData.split("\r\n");
        				var rowDataCount = rowData.length - 1;

        				if(rowDataCount < 1) {
        					e.stopPropagation();
        					return;
        				}

        				obj.set_enableevent(false);
        				obj.set_enableredraw(false);

        				var ds = obj.getBindDataset();
        				ds.set_enableevent(false);

        				var grdCellCount = obj.getCellCount("body");
        				var rowCount = ds.getRowCount();

        				var objRowCol = Sct.Util.gfn_getGridSelRowCol(obj);
        				var startrow = objRowCol.selectstartrow;
        				var endrow   = objRowCol.selectendrow;
        				var startcol = objRowCol.selectstartcol;
        				var endcol   = 0; //objRowCol.selectendcol;

        				var currRow = startrow;
        				var cellIndex = startcol;
        				var maxColumnCount = 0;

        				//check current cell editType
        				for (var i = 0; i < rowDataCount; i++) {
        					if(rowCount <= currRow) {
        						ds.addRow();
        					}

        					var columnData = rowData[i].split(colSeperator);
        					var columnLoopCount = cellIndex + columnData.length;

        					if(columnLoopCount > grdCellCount) {
        						columnLoopCount = grdCellCount;
        					}

        					if(maxColumnCount < columnLoopCount) {
        						maxColumnCount = columnLoopCount;
        					}

        					var k = 0;
        					for(var j = cellIndex; j < columnLoopCount; j++) {
        						var colid = obj.getCellProperty("body", j, "text").substr(5);
        						var tempValue = columnData[k];

        						if(!Sct.Util.isEmpty(tempValue)) {
        							ds.setColumn(currRow, colid, tempValue);
        						}
        						k++;
        					}
        					currRow++;
        				}

        				ds.rowposition = currRow;

        				endrow = endrow + rowDataCount - 1;
        				endcol = maxColumnCount - 1;

        				obj.set_enableredraw(true);
        				obj.set_enableevent(true);
        				ds.set_enableevent(true);

        				obj.selectArea(startrow, startcol, endrow, endcol);
        				objForm.config.targetGrid = obj;

        				//grid enableredraw가 false일 경우
        				//event 전파과정에서 error발생을 막기위한 처리
        				e.stopPropagation();
        			}
        		},

        		/**
        		* @desc  grid onkeydown event --> ctrl and c or v key down check  ( for edge : more than ie 12 & chrome, firefox .. )
        		* @param obj - nexacro.Grid
        		* @param e   - nexacro.KeyEventInfo
        		*/
        		_gfn_grdCopyPasteEtc : function(obj,e) {

        			//var objForm = obj.parent;
        			var objForm = (nexacro.getApplication().getActiveForm().name == "frameWork") ? nexacro.getApplication().getActiveForm().div_form.form : nexacro.getApplication().getActiveForm();

        			var keycode = e.keycode;

        			if(e.ctrlkey && !e.shiftkey && !e.altkey) {
        				//ctrl + c
        				if(keycode == 67) {
        					var objRowCol = Sct.Util.gfn_getGridSelRowCol(obj);
        					var startrow = objRowCol.selectstartrow;
        					var endrow   = objRowCol.selectendrow;
        					var startcol = objRowCol.selectstartcol;
        					var endcol   = objRowCol.selectendcol;

        					objForm.config.targetGrid = undefined;

        					var clipText = "";
        					var colSeperator = objForm.config.colSeperator;
        					for (var i = startrow; i <= endrow; i++) {
        						var copyData = [];
        						var styleData = [];

        						for (var j = startcol; j <= endcol; j++) {
        							var value = obj.getCellValue(i,j);
        							copyData.push(value);

        							if (j < endcol) {
        								clipText += value + colSeperator;
        							} else {
        								clipText += value;
        							}
        						}

        						clipText += "\r\n";
        					}

        					objForm.config.targetGrid = obj;

        					var ta = Sct.Util.gfn_createElementTextarea(clipText);
        					objForm.config.targetGrid["ta"] = ta;
        					objForm.setTimer(777, 100);

        					if(!Sct.Util.isEmpty(clipText))  {
        						objForm.setTimer(1000, 110);
        					}

        					e.stopPropagation();
        				} else if(keycode == 86) {			//ctrl + v
        					objForm.config.targetGrid = obj;
        					objForm.config.targetEvent = e;

        					var ta = Sct.Util.gfn_createElementTextarea('');
        					objForm.config.targetGrid["ta"] = ta;

        					objForm.setTimer(888, 100);

        					e.stopPropagation();
        				}
        			}
        		},

        		/**
        		* @desc  form ontimer event --> delay processing data time
        		* @param obj - nexacro.Form
        		* @param e   - nexacro.TimerEventInfo
        		*/
        		_gfn_blinkTimerHandler : function(obj,e) {
        			var timerid = e.timerid;
        			obj.killTimer(timerid);

        			if(timerid >= 1000) {
        				var remainder = timerid%1000;
        				if(remainder > 8) {
        					Sct.Util.gfn_initBlinkData(obj);
        				}
        			} else {
        				if(timerid == 777) { //after copy
        					var ta = obj.config.targetGrid["ta"];
        					if(!ta) {
        						return;
        					}

        					document.body.removeChild(ta);
        					obj.config.targetGrid["ta"] = undefined;
        				} else if(timerid == 888) { //after paste
        					var ta = obj.config.targetGrid["ta"];
        					if(!ta) {
        						return;
        					}

        					var clipText = ta.value;
        					document.body.removeChild(ta);
        					Sct.Util.gfn_setPasteData(obj,clipText);
        					obj.config.targetGrid["ta"] = undefined;
        				}
        			}
        		},

        		/**
        		* @desc   copy 및 paste할 row, col 값 얻기
        		* @param  obj - nexacro.Grid
        		* @return json object(row, col)
        		*/
        		gfn_getGridSelRowCol : function(obj) {
        			var selecttype = obj.selecttype;
        			var objRowCol  = {};
        			if (selecttype == "row") {
        				objRowCol.selectstartrow = nexacro.toNumber(obj.currentrow);
        				objRowCol.selectendrow   = nexacro.toNumber(obj.currentrow);
        				objRowCol.selectstartcol = nexacro.toNumber(obj.currentcol);
        				objRowCol.selectendcol   = nexacro.toNumber(obj.currentcol);
        			} else if (selecttype == "multirow") {
        				objRowCol.selectstartrow = nexacro.toNumber(obj.selectstartrow);
        				objRowCol.selectendrow   = nexacro.toNumber(obj.selectendrow);
        				objRowCol.selectstartcol = 0;
        				objRowCol.selectendcol   = nexacro.toNumber(obj.getCellCount("body")-1);
        			} else if (selecttype == "cell") {
        				objRowCol.selectstartrow = nexacro.toNumber(obj.currentrow);
        				objRowCol.selectendrow   = nexacro.toNumber(obj.currentrow);
        				objRowCol.selectstartcol = nexacro.toNumber(obj.currentcol);
        				objRowCol.selectendcol   = nexacro.toNumber(obj.currentcol);
        			} else if (selecttype == "area") {
        				objRowCol.selectstartrow = nexacro.toNumber(obj.selectstartrow);
        				objRowCol.selectendrow   = nexacro.toNumber(obj.selectendrow);
        				objRowCol.selectstartcol = nexacro.toNumber(obj.selectstartcol);
        				objRowCol.selectendcol   = nexacro.toNumber(obj.selectendcol);
        			} else if (selecttype == "multiarea") {
        				alert("grid.selecttype=multiarea 기능에서는 copy & paste를 사용할 수 없습니다");
        				objRowCol.selectstartrow = -1;
        				objRowCol.selectendrow   = -1;
        				objRowCol.selectstartcol = -1;
        				objRowCol.selectendcol   = -1;
        			}
        			return objRowCol;
        		},
        		/******************************************************************************
        		 * Function Name: gfn_setCalendarFunc
        		 * Description  : Calendar에 월력 이벤트 처리
        		 * Arguments    : 없음
        		 * Return       : 없음
        		 ******************************************************************************/
        		gfn_setCalendarFunc : function(compCal)
        		{
        			compCal.addEventHandler("ondropdown", this._calendarfunc_ondropdown, this);
        		},

        		/******************************************************************************
        		 * Function Name: _calendarfunc_onlbuttonup
        		 * Description  : gfn_SetCalendarFunc내부함수
        		 * Arguments    : 없음
        		 * Return       : 없음
        		 ******************************************************************************/
        		_calendarfunc_ondropdown : function(obj, e)
        		{
        			if (obj.initvalueid == "iv_cal_yyyyMM") this.gfn_CalendarMonth(obj, e);
        		},

        		/******************************************************************************
        		 * Function Name: gfn_CalendarMonth
        		 * Description  : 월력팝업
        		 * Arguments    : objCal	{compent} 	달력컴포넌트
        		 * Return       : 없음
        		 ******************************************************************************/
        		gfn_CalendarMonth : function(objCal, e)
        		{
        			var pForm = (nexacro.getApplication().getActiveForm().name == "frameWork") ? nexacro.getApplication().getActiveForm().div_form.form : nexacro.getApplication().getActiveForm();

        			var dDate = objCal.value;

        			if (Sct.Util.isEmpty(dDate)) dDate = Sct.Util.getToday();

        			if(pForm.isValidObject("pdv_CalendarMonth")) pForm.removeChild("pdv_CalendarMonth");
        			var objPdvMonth = new PopupDiv();
        			objPdvMonth.init("pdv_CalendarMonth", "absolute", 0, 0, 166, 164);
        			pForm.addChild(objPdvMonth.name, objPdvMonth);

        			objPdvMonth.set_url("CM_POP::Calendar_Month.xfdl");
        			objPdvMonth.compent = objCal;
        			objPdvMonth.setdate = dDate;
        			objPdvMonth.__e_Data = e;
        			objPdvMonth.show();

        			var oFormObj = pForm;
        			var nTotWid = parseInt(objCal.left) + parseInt(objPdvMonth.width);
        			var nTotHei = parseInt(objCal.top) + parseInt(objPdvMonth.height);


        			var nLeft = 0;
        			var nHeight = nexacro.toNumber(objCal.height);

        			if(oFormObj.width < nTotWid && oFormObj.height < nTotHei)
        			{
        				nLeft = parseInt(oFormObj.width)- parseInt(nTotWid);
        				nHeight = -164;
        			}
        			else if(oFormObj.height < nTotHei)
        			{
        				nHeight = -164;
        			}
        			else if(oFormObj.width < nTotWid)
        			{
        				nLeft = parseInt(oFormObj.width)- parseInt(nTotWid);
        			}

        			objPdvMonth.trackPopupByComponent(objCal, nLeft, nHeight, 200, 150, "_calmonth_Callback");

        		},
        		/******************************************************************************
        		* Function Name: gfn_CalendarMonthByGrid
        		* Description  : 그리드에서 월력 화면 호출하는 함수
        		* Arguments    : objGrid	{compent} 	그리드 컴포넌트
        						 e			{event}		그리드 이벤트
        		* Return       : 없음
        		******************************************************************************/
        		gfn_CalendarMonthByGrid : function(objGrid, e)
        		{
        			var pForm = (nexacro.getApplication().getActiveForm().name == "frameWork") ? nexacro.getApplication().getActiveForm().div_form.form : nexacro.getApplication().getActiveForm();

        			var dDate = e.value;

        			if (Sct.Util.isEmpty(dDate)) dDate = Sct.Util.getToday();

        			var objPopupDiv;
        			var sPopupDivNm = "pdv_Month"+objGrid.name;

        			var objPdvMonth = new PopupDiv();
        			objPdvMonth.init(sPopupDivNm, "absolute", 0, 0, 200, 150);
        			pForm.addChild(objPdvMonth.name, objPdvMonth);

        			objPdvMonth.set_url("CM_POP::Calendar_Month.xfdl");
        			objPdvMonth.compent = objGrid;

        			objPdvMonth.setdate = dDate;

        			objPdvMonth.row = e.row;
        			objPdvMonth.cell = e.cell;
        			objPdvMonth.__e_Data = e;
        			objPdvMonth.show();

        			var arr = objGrid.getCellRect(e.row, e.cell);

        			var oFormObj = pForm;
        			var nTotWid = parseInt(objGrid.left) + parseInt(objPdvMonth.width) + parseInt(arr.left);
        			var nTotHei = parseInt(objGrid.top) + parseInt(objPdvMonth.height) + 24 + arr.top;

        			var nLeft = arr.left;
        			var nHeight = 24 + arr.top;

        			if(oFormObj.width < nTotWid && oFormObj.height < nTotHei)
        			{
        				nLeft = parseInt(oFormObj.width)- parseInt(nTotWid) + parseInt(arr.left);
        				nHeight = -164;
        			}
        			else if(oFormObj.height < nTotHei)
        			{
        				//nHeight = -164;
        				nHeight = oFormObj.height - parseInt(objPdvMonth.height);
        			}
        			else if(oFormObj.width < nTotWid)
        			{
        				nLeft = parseInt(oFormObj.width)- parseInt(nTotWid) + parseInt(arr.left);
        			}

        			objPdvMonth.trackPopupByComponent(objGrid, nLeft, nHeight, 200, 150, "_calmonth_Callback");
        		},

        		/** 2020-10-12 추가 김장훈
        		 * 함  수  명	: 	nvl2
        		 * 입      력	: 	1. value : 입력값
        							2. rtnVal : 출력값
        		 * 반      환	: 	입력값이 null = sReVal
        							Not Null = 입력값
        		 * 기      능	: 	NULL 일 경우 치환값을 리턴하는 함수
        		 */
        		nvl2 : function (value, rtnVal)
        		{
        			if(rtnVal == undefined || rtnVal == "undefined" || rtnVal == null) rtnVal = "";

        			if(value == undefined || value == "undefined" || value == null || value == "") {
        				return rtnVal;
        			}

        			return value;
        		},

        		gfn_fixCol : function (poGrdObj, pnCell)
        		{
        			var nCol     = poGrdObj.getCellProperty("Head", pnCell, "col");
        			var nColSpan = poGrdObj.getCellProperty("Head", pnCell, "colspan");
        			var nMaxCol  = 0;

        			if(nMaxCol < (nCol+nColSpan))
        			{
        				nMaxCol = nCol+nColSpan;
        			}
        			//this.releaseCol(poGrdObj, pnCell);

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
        			//poGrdObj.cellfixyn = "Y";
        		},

        		/*
        		 * 2022-04-04 조기종, 추가
        		 * 문자열 우측 바이트 수만큼 채우기
        		 * @param str 원본 문자열
        		 * @param padLen 채울 바이트 수
        		 * @param padStr 채울 문자열
        		 * @returns {String}
        		 */
        		fn_bytePadEnd : function(str, padLen, padStr)
        		{
        			if (Sct.Util.isEmpty(padStr))
        				padStr = " ";

        			if (padStr.byteLength() > padLen)
        			{
        				trace("채우고자 하는 문자열이 요청 길이보다 큽니다.");
        				return str + "";
        			}
        			str += "";
        			padStr += "";
        			while (str.byteLength() < padLen)
        				str += padStr;

        			str = str.byteLength() >= padLen ? this.fn_cutByteLength(str, padLen) : str;

        			return str;
        		},

        		/*
        		 * 2022-04-04 추가, 조기종
        		 * 원하는 바이트수 만큼 문자열 잘라내기
        		 * @param str 자를 문자열
        		 * @param maxByte 최대 바이트 수
        		 * @returns {String}
        		 */
        		fn_cutByteLength : function(str, maxByte)
        		{
        			for (let b = i = 0; c = str.charCodeAt(i);)
        			{
        				b += c >> 7 ? 2 : 1;

        				if (b > maxByte)
        					break;

        				i++;
        			}

        			return str.substring(0, i);
        		}

        	}
        	/* Util End */
        };
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
