
/**
 * @fileoverview 넥사크로  공통 Library interface
 * @author  copyright 2017 TOBESOFT {J}
 */
if ( !Sct.Util )
{
	Sct.Util = {
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
			if(Eco.isEmpty(locale)) locale = application.gv_locale;
			if(Eco.isEmpty(mask)) mask = application.gv_localMoney;
			if(Eco.isEmpty(form)) form = application.av_topFrame.form;
			
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
		   var date1 = this.stringToDate(time1);
		   var date2 = this.stringToDate(time2);
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
			if( this.gfn_isEmpty(sDate) )		return -1;	
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
		getObjectFullId : function (obj)
		{
			var rtn = ""; 
			
			if(sPath == ""){
				sPath = obj.name;
			}	

			if(obj.parent.toString().toUpperCase() == "[OBJECT CHILDFRAME]")
			{
			   var arr = sPath.split(".");

			   for ( var i = (arr.length-2); i >=0; i -- ) {
				  rtn = rtn + arr[i] + ".";
			   }

			   sPath = rtn.substr(0,rtn.length -1);
			  
			   return ;
			}

			var obj = obj.parent;
			sPath = sPath + "." + obj.name; 
			
			this.getObjectFullId(obj);	
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
	};
}