
include "lib::sct_util.xjs"
/**
 * @fileoverview 넥사크로  공통 Library
 * @author  copyright 2017 TOBESOFT {J}
 */
if (!JsNamespace.exist("Sct"))
{

	/**
	 * @namespace
	 * @name Sct
	 * @author
	 * @memberof! Sct
	 * @author  copyright 2017 TOBESOFT {J}
	 */
	JsNamespace.declare("Sct", {
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
				if(application.confirm("로그아웃 하시겠습니까?")) application.exit(); //Runtime
			}
			else
			{
				window.top.location.reload(true);   //html5
			}
		},
		
// 		/**
// 		* 함  수  명	: 	transaction
// 		* 입      력	:  form          Form
// 		*                  svcID         Transaction 서비스ID(사용자지정)
// 		*                  params        URL에 포함될 파라미터
// 		*                  inDatasets    송신 Dataset(복수일 경우 " "으로 구분)
// 		*                  outDatasets   수신 Dataset(복수일 경우 " "으로 구분)
// 		*                  argument      Dataset 외의 Transaction을 위한 인자값
// 		*                                a=b의 형태로 입력하고, 빈칸으로 구분
// 		*                  callbackFunc  Callback 함수명
// 		*                  showProgress  ProgressBar 표시여부(default:false)
// 		*                  bAsync        비동기 여부를 지정합니다.(Default : true)
// 		*                  bBinary       Binary 형태로 전송할 지 여부를 지정합니다.(Default : false) 
// 		* 반      환	:
// 		* 기      능	: 	공통 트랜잭션 함수  SvnNexcoreCO:: , xecure:: 로 구분 전송
// 		*/
// 		transaction : function (form, svcID, params, inDatasets, outDatasets, argument, callbackFunc, showProgress, bAsync, bBinary)
// 		{
// 			//=== Callback 함수 - 시작 ===
// 			var context = form;
// 			var sCallback;
// 			 /*****************************************************************************************
// 			 * 함  수  명	: _gfn_tranCallback
// 			 * 입      력	: 1. strSvcId		: Return ServiceID
// 							  2. nErrorCode		: Error Code
// 							  3. strErrorMsg	: Error Message
// 			 * 반      환	:  
// 			 * 기      능	: Global Transaction CallBack 함수
// 			 *****************************************************************************************/ 
// 			var _gfn_tranCallback = function (strSvcId, nErrorCode, strErrorMsg)
// 			{
// 				if(nErrorCode != 0)
// 				{			
// // 					gfn_alert(form, "000022", "");
// 					// Alert Logic
// 				}
// 				
// 				//==========================
// 				// 공통적으로 처리할 부분이 있으면, 코딩
// 				// TODO
// 				//==========================
// 				
// 				if(!Sct.Util.isEmpty(callbackFunc)) {
// 					var sCallBack =  "form." + callbackFunc + "('" + strSvcId + "', " + nErrorCode + ", '" + strErrorMsg + "');";
// 					eval(sCallBack);
// 				}
// 			}
// 
// 			if(typeof _gfn_tranCallback == "function") {
// 				sCallback = svcID + "_callBack";
// 				context[sCallback] = _gfn_tranCallback;
// 			} else if (typeof _gfn_tranCallback == "string") {
// 				sCallback = _gfn_tranCallback;
// 			} else {
// 				sCallback = "";
// 			}
// 			//=== Callback 함수 - 끝 ===
// 
// 			if (Sct.Util.isEmpty(showProgress)) { showProgress = true; }
// 			if (Sct.Util.isEmpty(bAsync))       { bAsync = true;       }
// 			if (Sct.Util.isEmpty(bBinary))      { bBinary = false;     }
// 			if (Sct.Util.isEmpty(argument))     { argument = "";	   }
// 
// 			if(!Sct.Util.isEmpty(outDatasets))
// 			{
// 				var arrOutDs = outDatasets.split(" ");
// 				for(var i=0; i<arrOutDs.length; i++)
// 				{
// 					var serverOutDs = eval("form." + (arrOutDs[i].split("="))[0]);
// 					if(!Sct.Util.isEmpty(serverOutDs))
// 					{
// 						serverOutDs.keystring = "";
// 					}
// 				}
// 			}
// 
// 			var menuCd = form.getOwnerFrame().form.menuId;
// 			if(Sct.Util.isEmpty(menuCd)) menuCd = "";
// 
// 			var service		= application.services["svcurl"];
// 			var strSvcID	= svcID;
// 			var svcparam	= params;
// // 			var svcUrl 	= "XUP_SERVER::FrontControllerServlet.do?service=xupservice&domain=hsp_srv&" + svcparam
// // 						+ "&format=" + "xml" + "&version=" + "xplatform";
// 			var svcUrl 	= service.url + "" + params;
// 
// 			// Model Input parameters
// 			var strInDatasets = inDatasets;
// 			var strOutDatasets = outDatasets;
// 			var strArgument = argument + " MENU_CD=" + nexacro.wrapQuote(menuCd);
// application.trace("Sct.transaction / strInDatasets :" + strInDatasets);			
// 			form.transaction(strSvcID, svcUrl, strInDatasets, strOutDatasets, strArgument, sCallback, bAsync);
// 		},
		
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
				
				if(!this.gfn_isEmpty(callbackFunc)) {
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

			if (this.gfn_isEmpty(showProgress)) { showProgress = true; }
			if (this.gfn_isEmpty(bAsync))       { bAsync = true;       }
			if (this.gfn_isEmpty(bBinary))      { bBinary = false;     }
			if (this.gfn_isEmpty(argument))     { argument = "";	   }

			if(!this.gfn_isEmpty(outDatasets))
			{
				var arrOutDs = outDatasets.split(" ");
				for(var i=0; i<arrOutDs.length; i++)
				{
				//application.trace("form." + (arrOutDs[i].split("="))[0]);
					var serverOutDs = eval("form." + (arrOutDs[i].split("="))[0]);
					if(!this.gfn_isEmpty(serverOutDs))
					{
						serverOutDs.keystring = "";
					}
				}
			}
			
			var menuCd = form.getOwnerFrame().form.menuUrl;
			if(this.gfn_isEmpty(menuCd)) menuCd = "";
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
				
				trace("테이블 명 : "+tableNm);
			}
			var service		= application.services["svcurl"];
			var strSvcID	= svcID;
			var svcparam	= params;
// 			var svcUrl 	= "XUP_SERVER::FrontControllerServlet.do?service=xupservice&domain=hsp_srv&" + svcparam
// 						+ "&format=" + "xml" + "&version=" + "xplatform";
			var svcUrl 	= service.url + "" + params;

			// Model Input parameters
			var strInDatasets = inDatasets;
			var strOutDatasets = outDatasets;
			var strArgument;
			var companycd = application.gv_company;
			if(companycd == null || companycd == ""){companycd = "001";}
				if(tableNm == ""){
					strArgument = argument + " REG_PGM_ID=" + nexacro.wrapQuote(menuCd) + " DEF_LANG="+application.gv_locale+" COMPANY_CD="+companycd+" ";
				}else{
					strArgument = argument + " REG_PGM_ID=" + nexacro.wrapQuote(menuCd) + " DEF_LANG="+application.gv_locale+" TABLENM="+tableNm+" COMPANY_CD="+companycd+" ";
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
			var nLeft   =  (application.mainframe.width / 2) - Math.round(pThis.width / 2);
			var nTop    = (application.mainframe.height / 2) - Math.round(pThis.height / 2) ;

			var cf= pThis.getOwnerFrame();
			var bSucc = application.open(sId ,url,cf, oArg, "showtitlebar=true showstatusbar=false",nLeft, nTop,null,null,pThis);

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
			newChild.init(svcId, "absolute", nLeft, nTop, nW, nH, null, null, url);

			newChild.set_titletext(title);
			newChild.set_showtitlebar(true);
			newChild.set_autosize(autosize);
			newChild.set_resizable(true);
			newChild.set_openalign("center middle");

			newChild.showModal(form.getOwnerFrame(), parm, form, callback);
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
		modeless : function (form, svcId, nW, nH, title, parm, url)
		{
// 			var nLeft = system.clientToScreenX(form, 10);
// 			var nTop  = system.clientToScreenY(form, 10);
			var nLeft = 100;
			var nTop  = 100;

			var strOpenStyle = "showtitlebar=true autosize=true resizable=false"
							 + "titletext=" + nexacro.wrapQuote(title) + " "
							 + "openalign=" + nexacro.wrapQuote("center middle");

 			application.open(svcId, url, form.getOwnerFrame(), parm, strOpenStyle, nLeft, nTop, nW, nH, form);
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
			var msg = this._findMessage(msgId, args);
			if(msg.type == "B") {
				if(Eco.isEmpty(form.getOwnerFrame().form.sta_message)) {
					form.getOwnerFrame().form.div_foot.sta_message.set_text(msg.msg);
				}
			} else {
				application.alert(msg.msg);
			}
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
// 		alert : function (form, msgId, args, callback)
// 		{
// 			var url = "Common::commMsg.xfdl";
// 			var nW = 400;
// 			var nH = 250;
// 			var nLeft = system.clientToScreenX(form, 10);
// 			var nTop  = system.clientToScreenY(form, 10);
// 			
// 			var msg = _findMessage(msgId, args);
// 			
// 			var newChild = new ChildFrame;
// 			newChild.init("AlertPopup_" + Math.random(), "absolute", nLeft, nTop, nW, nH, null, null, url);
// 
// 			newChild.set_titletext(msg.title);
// 			newChild.set_showtitlebar(false);
// 			newChild.set_autosize(true);
// 			newChild.set_resizable(false);
// 			newChild.set_openalign("center middle");
// 
// 			newChild.showModal(application.mainframe, msg, form, callback);
// 		},

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
			
			return application.confirm(msg.msg);
		},

// 		/**
// 		* Confirm
// 		* @param {string} svcId
// 		* @param {string} Callback Function
// 		* @return N/A
// 		* @example
// 		* @memberOf Sct
// 		* (mainframe 위에 띄움)
// 		*/
// 		confirm : function (form, msgId, args, callback)
// 		{
// 			var url = "common::commConfirm.xfdl";
// 			var nW = 400;
// 			var nH = 250;
// 			var nLeft = system.clientToScreenX(form, 10);
// 			var nTop  = system.clientToScreenY(form, 10);
// 
// 			var msg = _findMessage(msgId, args);
// 
// 			var newChild = new ChildFrame;
// 			newChild.init("ConfirmPopup", "absolute", nLeft, nTop, nW, nH, null, null, url);
// 
// 			newChild.set_titletext(msg.title);
// 			newChild.set_showtitlebar(false);
// 			newChild.set_autosize(true);
// 			newChild.set_resizable(false);
// 			newChild.set_openalign("center middle");
// 
// 			newChild.showModal(application.mainframe, msg, form, callback);
// 		},

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
			var foundRow = application.gds_message.findRow("MSG_ID", msgId);
			
			if(foundRow < 0) { // err.msg.notexist
				foundRow = application.gds_message.findRow("MSG_ID", "err.msg.notexist"); // 메시지 ID가 존재하지 않을 경우.
				args = "err.msg.notexist";
			}
			
			var msg = application.gds_message.getColumn(foundRow, "DESCRIPTION");
			var title = application.gds_message.getColumn(foundRow, "TITLE");
			var type = application.gds_message.getColumn(foundRow, "MSG_TYPE");

			if(!this.gfn_isEmpty(args))
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
//			obj.set_locale(application.gv_locale);

			// 공통코드 처리를 위한 Form Attributes
			obj.__combo_no = 0;
			obj.__combo_outds = "";
			obj.__copypastegrids = []; // Grid의 Copy & Paste 처리를 위한 Property
			
			// Init Components
			this._initComponent(obj, obj); // Component 초기화
			Sct.Domain.setMultiLangTitle(obj); // 다국어 처리
			
			//2018-04-03 JL Modify - 그리드 복사 붙여넣기 기능 사용시.. form에 ontimer 이벤트가 생김, 기존
			// form에 ontimer와 충돌발생 --> 사용안하는 화면의 경우 파라미터로 제어. 
			if(isGCP == null){
				this._initGridCopyPaste(obj, obj.__copypastegrids);
			}
			
			// 공통코드 처리
			if(isAsync == false){
				this.commCodeTran(obj, false);
			}else{
				this.commCodeTran(obj);
			}

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
			for (var i = 0; i < pComp.components.length; i++)
			{
				var voComponent = pComp.components[i];

				// Grid Component
				if (voComponent instanceof Grid)
				{
					Sct.Grid._initGrid(pComp, voComponent);
					if(pComp.name == obj.name) {
						obj.__copypastegrids.push(voComponent);
					} else {
						if(Eco.isEmpty(pComp.url)) {
							obj.__copypastegrids.push(voComponent);
						}
					}
				}
				else if (voComponent instanceof Calendar) // Calendar Component
				{
					voComponent.setInnerDataset(application.gds_calendar);
					voComponent.set_datecolumn("DATECOLUMN");
					voComponent.set_textcolorcolumn("TEXTCOLORCOLUMN");
					voComponent.set_backgroundcolumn("BACKGROUNDCOLUMN");
					voComponent.set_bordercolumn("BORDERCOLUMN");

					voComponent.set_dateformat("SHORTDATE");
					voComponent.set_editformat("SHORTDATE");
					voComponent.set_locale(application.gv_locale);
				}
				else if (voComponent instanceof MaskEdit)
				{
					var strType = voComponent.type;
					if(strType.toUpperCase() == "NUMBER") {
						voComponent.set_mask(application.gv_localMoney);
						//voComponent.set_locale(application.gv_locale);
					}
				}
				
				// Div, PopupDiv, Tab, Tabpage 의 Child Component를 설정하기 위해 재귀함수 사용
				if (voComponent instanceof Div || voComponent instanceof PopupDiv || 
					voComponent instanceof Tab || voComponent instanceof Tabpage)
				{
					this._initComponent(obj, voComponent);
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
		 * 함  수  명	: 	initGridCopyPaste
		 * 입      력	: 	1. form 		Form Object
							2. grids		Grid 배열
							3. copyCallback		Copy Callback
							4. pasteCallback	Paste Callback
		 * 반      환	: 	none
		 * 기      능	: 	Div 안의 Edit 가능한 Component에 대하여 초기화
		 */
		_initGridCopyPaste : function (form, grids, copyCallback, pasteCallback)
		{
			if(!application.gv_canGridCopyPaste) return;
			
			var copyPaste = new Link.CellDataCopy(form, true, true);
			
			for(var i = 0; i < grids.length; i++) {
				copyPaste.addGrid(grids[i], copyCallback, copyCallback);
			}
		},

// 		/**
// 		* 함  수  명	:  getCommCode
// 		* 입      력	:  form          Form
// 		*                  params        URL에 포함될 파라미터
// 		*                  arg		     구분코드
// 		*                  firstRow      선택(S - Default) / 전체(A) / 공백 표시(B) / 첫번째 Row 선택 (1)
// 		*				   callbackFunc  Callback Function
// 		* 반      환	:
// 		* 기      능	: 	공통 트랜잭션 함수  SvnNexcoreCO:: , xecure:: 로 구분 전송
// 		*/
// 		getCommCode : function (form, obj, arg, firstRow, callbackFunc)
// 		{
// 			var svcID = "getCommCode";
// 			var params = "getCommCode.do";
// 			var inDatasets = "";
// 			var outDatasets = "";
// 			var ds = new Dataset;
// 			
// 			if(obj instanceof Combo || obj instanceof Radio) {
// 				outDatasets = obj.innerdataset;
// 				ds = obj.getInnerDataset();
// 			} else {
// 				outDatasets = obj.name;
// 				ds = obj;
// 			}
// 			
// 			var argument = "mainCd=" + nexacro.wrapQuote(arg);
// 			var bAsync = true;
// 			
// 			if(Sct.Util.isEmpty(callbackFunc)) callbackFunc = "";
// 			
// 			//=== Callback 함수 - 시작 ===
// 			var context = form;
// 			var sCallback;
// 			 /*****************************************************************************************
// 			 * 함  수  명	: _getCommCodeCallback
// 			 * 입      력	: 1. strSvcId		: Return ServiceID
// 							  2. nErrorCode		: Error Code
// 							  3. strErrorMsg	: Error Message
// 			 * 반      환	:  
// 			 * 기      능	: Global Transaction CallBack 함수
// 			 *****************************************************************************************/ 
// 			var _getCommCodeCallback = function (strSvcId, nErrorCode, strErrorMsg)
// 			{
// 				if(nErrorCode < 0)
// 				{			
// // 					gfn_alert(form, "000022", "");
// 					// Alert Logic
// 				}
// 				else
// 				{
// 					this.setFirstCode(form, obj, firstRow);
// 				}
// 				
// 				//==========================
// 				// 공통적으로 처리할 부분이 있으면, 코딩
// 				// TODO
// 				//==========================
// 				
// 				if(!Sct.Util.isNull(callbackFunc)) {
// 					var sCallBack =  "form." + callbackFunc + "('" + strSvcId + "', " + nErrorCode + ", '" + strErrorMsg + "');";
// 					eval(sCallBack);
// 				}
// 			}
// 
// 			if(typeof _getCommCodeCallback == "function") {
// 				sCallback = svcID + "_callBack";
// 				context[sCallback] = _getCommCodeCallback;
// 			} else if (typeof _getCommCodeCallback == "string") {
// 				sCallback = _getCommCodeCallback;
// 			} else {
// 				sCallback = "";
// 			}
// 			//=== Callback 함수 - 끝 ===
// 
// 			if(!Sct.Util.isEmpty(outDatasets))
// 			{
// 				var arrOutDs = outDatasets.split(" ");
// 				for(var i=0; i<arrOutDs.length; i++)
// 				{
// 					var serverOutDs = eval("form." + (arrOutDs[i].split("="))[0]);
// 					if(!Sct.Util.isEmpty(serverOutDs))
// 					{
// 						serverOutDs.keystring = "";
// 					}
// 				}
// 			}
// 
// 			var strSvcID	= svcID;
// 			var svcparam	= params;
// // 			var svcUrl 	= "XUP_SERVER::FrontControllerServlet.do?service=xupservice&domain=hsp_srv&" + svcparam
// // 						+ "&format=" + "xml" + "&version=" + "xplatform";
// 			var svcUrl 	= service.url + params;
// 
// 			// Model Input parameters
// 			var strInDatasets = inDatasets;
// 			var strOutDatasets = outDatasets;
// 			var strArgument = argument;
// 			
// 			form.transaction(strSvcID, svcUrl, strInDatasets, strOutDatasets, strArgument, sCallback, bAsync);
// 		},

// 		/**
// 		 * 함  수  명	: setFirstCode
// 		 * 입      력	: 1.form     : Form
// 						  2.obj	     : Combo / Radio / Dataset
// 						  3.firstRow : 선택(S - Default) / 전체(A) / 공백 표시(B) / 첫번째 Row 선택 (1)
// 		 * 반      환	:   
// 		 * 기      능	:  공통코드 Combo / Radio 데이터 처리
// 		 */ 
// 		setFirstCode : function (form, obj, firstRow)
// 		{
// 			if(Sct.Util.isEmpty(firstRow)) firstRow = "S";
// 			
// 			var ds = new Dataset;
// 			
// 			if(obj instanceof Combo || obj instanceof Radio) {
// 				ds = obj.getInnerDataset();
// 			} else { // Dataset
// 				ds = obj;
// 			}
// 			
// 			switch(firstRow) {
// 				case "S" :
// 					ds.insertRow(0);
// 					ds.setColumn(0, "SUBCD", "");
// 					ds.setColumn(0, "SUBNM", "Select");
// 					break;
// 				case "A" :
// 					ds.insertRow(0);
// 					ds.setColumn(0, "SUBCD", "");
// 					ds.setColumn(0, "SUBNM", "All");
// 					break;
// 				case "B" :
// 					break;
// 				case "1" :
// 					break;
// 			}
// 			
// 			if(obj instanceof Combo || obj instanceof Radio) {
// 				if(firstRow != "B") {
// 					obj.set_index(0);
// 				}
// 			}
// 		},

		 /**
		 * 함  수  명	: chkOpenMenu
		 * 입      력	: 1. menuid: 메뉴 아이디
						  2. objDs : 메뉴 데이타셋
						  3. param : 화면에서 화면을 오픈하는 경우 필요한 파라미터
		 * 반      환	:   
		 * 기      능	: 메뉴 아이디를 기준으로 신규 윈도우 화면을 생성하고 open 시키는 함수
		 */ 
		chkOpenMenu : function (menuid, objDs, param)
		{
			if(this.gfn_isEmpty(param)) {param = ""}
			
			var nRow = objDs.findRow("MENU_CD", menuid);

			if(nRow < 0) {
				this.alert(application.mainframe, "000128");
				return false;
			}
			
			var pageURL = objDs.getColumn(nRow, "PAGE_URL");
			if(this.gfn_isEmpty(pageURL)) {
				this.alert(application.mainframe, "000197");
				return false;
			}
			
			var winKey;
			
			winKey = menuid + "_" + application.gds_openMenu.rowcount + "_" + parseInt(Math.random() * 100);
			
			// 이미 열려있는 메뉴인지 체크하여 화면을 활성화
			var openMenuRow = application.gds_openMenu.findRow("MENU_CD", menuid);
			if(openMenuRow >= 0) {
				var openWinKey = application.gds_openMenu.getColumn(openMenuRow, "WIN_KEY");
				application.av_workFrameSet[openWinKey].setFocus();
				// 화면에서 화면을 메뉴처럼 띄울 때, 호출 처리. (화면 동작 동기화)
// 				if(application.av_workFrameSet[openWinKey].form.div_form.lookup("fn_recallForm")) {
// 					application.av_workFrameSet[openWinKey].form.div_form.fn_recallForm(param);
// 				}
				
				application.av_mdiFrame.form.tab_mdi.set_tabindex(openMenuRow);
				application.av_mdiFrame.form.fn_showButtons(true);

				return;
			}
			
			if(application.gds_openMenu.rowcount >= application.gv_nMaxOpenForm)
			{
				//this.alert(this, "000196");
				alert("화면은 "+application.gv_nMaxOpenForm+"개 까지 열 수 있습니다.");
				return;
			}
			
 			var buttonAuth = this.getButtonAuth(objDs, nRow);
// 			var buttonAuth = "11111111";
			
			var objNewWin = new ChildFrame;
			objNewWin.init(winKey, 0, 0, application.av_initWidth, application.av_initHeight);
			objNewWin.set_formurl("Frame::frameWork.xfdl");
			objNewWin.arguments = [];

			objNewWin.arguments["winKey"]   	= winKey;
			objNewWin.arguments["menuId"]   	= objDs.getColumn(nRow, "MENU_CD");
			objNewWin.arguments["menuUrl"]   	= objDs.getColumn(nRow, "PAGE_URL");
			objNewWin.arguments["menuTitle"] 	= objDs.getColumn(nRow, "MENU_NM");
			objNewWin.arguments["buttonAuth"]   = buttonAuth;
			objNewWin.arguments["param"]		= param;
			
			application.av_workFrameSet.addChild(winKey, objNewWin);
			
			objNewWin.set_dragmovetype("none");
			objNewWin.set_showtitlebar(false);
			objNewWin.set_resizable(false);
			objNewWin.style.set_border("0 none #808080");
			objNewWin.set_openstatus("maximize");
// 			objNewWin.addEventHandler("onclose", this._frameOnClose, this);
			
			objNewWin.show();
			
 			application.av_homeFrame.set_visible(false);
 			application.av_mdiFrame.form.fn_showButtons(true);
		},
		
// 		_frameOnClose : function (obj, e)
// 		{
// 			trace(obj.id);
// 			var idx = application.gds_openMenu.findRow("WIN_KEY", obj.id);
// 			application.av_mdiFrame.form.tab_mdi.removeTabpage(idx);
// 		},

		/**
		* 함  수  명	: addOpenMenu
		* 입      력	: 1. menuid: 메뉴 아이디
						  2. winKey: 창 Key (ID)
		* 반      환	:   
		* 기      능	: 메뉴 ID를 gds_openMenu에 입력한다.
		*/ 
		addOpenMenu : function (menuId, winKey)
		{
			var nRow = application.gds_menu.findRow("MENU_CD", menuId);
			
			if(nRow >= 0) {
				var nAddRow = application.gds_openMenu.addRow();
				application.gds_openMenu.copyRow(nAddRow, application.gds_menu, nRow);
				application.gds_openMenu.setColumn(nAddRow, "WIN_KEY", winKey);
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
			
			var succ = application.av_workFrameSet[winKey].destroy();
			var nFRow = application.gds_openMenu.findRow("WIN_KEY", winKey);
			
			if(succ)
			{
				if(nFRow >= 0) {
					application.gds_openMenu.deleteRow(nFRow);
					obj.removeTabpage(index);
				}
				
				if(obj.tabpages.length == 0)
				{
					application.av_homeFrame.set_visible(true);
					application.av_homeFrame.set_showtitlebar(false);
					application.av_homeFrame.set_dragmovetype("none");
					application.av_homeFrame.style.set_border("0 none #808080ff");
					application.av_homeFrame.set_openstatus("maximize");
					
					application.av_mdiFrame.form.fn_showButtons(false);
					return false;
				}

				winKey = obj.tabpages[obj.tabindex].name;
				application.av_workFrameSet[winKey].setFocus();
				if(application.gds_bookmark.findRow("MENU_CD",winKey.substring(0,winKey.indexOf("_"))) != -1){
					application.av_topFrame.form.div_globalNav.gnb_04.style.set_background("transparent URL('imagerc::btn_WF_Bookmark_O.png') no-repeat");
					application.av_topFrame.form.div_globalNav.gnb_04.set_top(3);
				}else{
					application.av_topFrame.form.div_globalNav.gnb_04.style.set_background("transparent URL('imagerc::gnb_04.png') no-repeat");
					application.av_topFrame.form.div_globalNav.gnb_04.set_top(6);
				}	
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
			var del = ((ds.getColumn(row, "DEL_AUTH")=="Y" || ds.getColumn(row, "DEL_AUTH")=="1") ? "1":"0");
			var xls = ((ds.getColumn(row, "XLS_AUTH")=="Y" || ds.getColumn(row, "XLS_AUTH")=="1") ? "1":"0");
			var save = ((ds.getColumn(row, "SAVE_AUTH")=="Y" || ds.getColumn(row, "SAVE_AUTH")=="1") ? "1":"0");
			var prn = ((ds.getColumn(row, "PRN_AUTH")=="Y" || ds.getColumn(row, "PRN_AUTH")=="1") ? "1":"0");
			var appv = ((ds.getColumn(row, "APPV_AUTH")=="Y" || ds.getColumn(row, "APPV_AUTH")=="1") ? "1":"0");
			var buttonAuth = cls + search + add + del + xls + save + prn + appv;
			
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
			//application.trace("obj.__combo_outds : " + obj.__combo_outds);
			//application.trace("obj.__combo_outds trim : " + obj.__combo_outds.trim());
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
			if(isAsync == false){
				trace("동기 transaction");
				obj.transaction(svcId, params, inDatasets, outDatasets, argument, callbackFunc, false);
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
				if(obj.objects[i].getColID(0) == "CMCD" || obj.objects[i].getColID(1) == "CMNM"){
					trace("코드 데이터셋 : "+obj.objects[i].name);
					form.__combo_outds += obj.objects[i].name.toLowerCase() + "=output" + idx + " ";
					idx++;
				}
			}
// 			var comps = obj.components;
// 			var nLen = comps.length;
// 			
// 			for(var i = 0; i < nLen; i++)
// 			{
// 				var comp = comps[i];
// 				if(comp instanceof Combo || comp instanceof Radio) {
// 					var sInnerDs = comp.innerdataset;
// 					trace("걸린 데이터셋"+sInnerDs);
// 					if(sInnerDs != null){
// 					//if(sInnerDs.toUpperCase().indexOf("_SET") >= 0 || sInnerDs.toUpperCase().indexOf("GDS") >= 0 || sInnerDs.toUpperCase().indexOf("INNERDATASET") >=0 ) continue; // Dataset 명에 _set(_SET, _Set) 가 들어갈 경우에는 패스
// 					if(sInnerDs.toUpperCase().indexOf("GDS") >= 0 || sInnerDs.toUpperCase().indexOf("INNERDATASET") >=0 || sInnerDs.toUpperCase().indexOf("NOT") >=0 ) continue; // Dataset 명에 _set(_SET, _Set) 가 들어갈 경우에는 패스
// 					}
// 					if(!Sct.Util.isEmpty(sInnerDs)){
// 						if(form.__combo_outds.indexOf(sInnerDs.toLowerCase()) < 0) { // 동일한 Dataset이 존재할 경우는 Skip
// 							trace("아웃풋에 들어가는 데이터셋(폼) : "+sInnerDs);
// 							form.__combo_no++;
// 							form.__combo_outds += sInnerDs.toLowerCase() + "=output" + form.__combo_no + " ";
// 						}
// 					}
// 				} else if(comp instanceof Grid) {
// 					var nCellCnt = comp.getCellCount("Body");
// 					for(var j = 0; j < nCellCnt; j++)
// 					{
// 						trace("담긴 데이터셋 변수 : "+form.__combo_outds);
// 						var dispType = comp.getCellProperty("Body", j, "displaytype");
// 						if(dispType == "combo"){
// 							var comboDs = comp.getCellProperty("Body", j, "combodataset");
// 							//if(comboDs.toUpperCase().indexOf("_SET") >= 0 || comboDs.indexOf("gds") >= 0) continue; // Dataset 명에 _set(_SET, _Set) 가 들어갈 경우에는 패스
// 							if(comboDs.indexOf("gds") >= 0 || comboDs.indexOf("not") >= 0) continue; // Dataset 명에 _set(_SET, _Set) 가 들어갈 경우에는 패스
// 							if(!Sct.Util.isEmpty(comboDs)){
// 								if(form.__combo_outds.indexOf(comboDs.toLowerCase()) < 0) { // 동일한 Dataset이 존재할 경우는 Skip
// 									trace("아웃풋에 들어가는 데이터셋(그리드) : "+comboDs);
// 									form.__combo_no++;
// 									form.__combo_outds += comboDs.toLowerCase() + "=output" + form.__combo_no + " ";
// 								}
// 							}
// 						}
// 					}
// 				} else if(comp instanceof Div) {
// 					if(Sct.Util.isEmpty(comp.url)) { // Div에 Form을 끼운 경우는 그 Form에서 처리해야 함.
// 						this._procCommCode(form, comp);
// 					}
// 				} else if(comp instanceof Tab) {
// 					this._procCommCode(form, comp);
// 				} else if(comp instanceof Tabpage){
// 					this._procCommCode(form, comp);
// 				}
// 			}
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
		report : function (form, mrdName, mrdParams, w, h)
		{
			if(this.gfn_isEmpty(w)) w = 1024;
			if(this.gfn_isEmpty(h)) h = 768;

			var param = {
				pForm : form,
				mrdName : mrdName,
				mrdParams : mrdParams
			};

			Sct.popup(form, "popupReport", w, h, "Report", param, "Common::commReportPopup.xfdl", "", false);
		},
	});
	
}