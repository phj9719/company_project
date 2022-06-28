//==============================================================================
//	Define the Component Class of the Compostie Component.
//==============================================================================
//==============================================================================
// Object : nexacro.timepicker
// Group : Component
//==============================================================================
if (!nexacro.timepicker)
{
	//==============================================================================
	// nexacro.timepicker
	//==============================================================================
	nexacro.timepicker = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
	{
		nexacro._CompositeComponent.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
	};

	var _ptimepicker = nexacro._createPrototype(nexacro._CompositeComponent, nexacro.timepicker);
	nexacro.timepicker.prototype = _ptimepicker;
	_ptimepicker._type_name = "timepicker";
		
	/* accessibility */
	_ptimepicker.accessibilityrole = "form";
	
	_ptimepicker.value = "";
	_ptimepicker.set_value = function (v)
	{
		if(this.form.timeEdit)
		{
			this.form.timeEdit.set_value(v);
		}
		this.value = v;
	};
	
	_ptimepicker.buttonsize = "";
	_ptimepicker.set_buttonsize = function (v)
	{
		// buttonsize 값이 변경되었을 경우
		if(this.buttonsize != v)
		{
			// buttonsize 값 변경
			this.buttonsize = v;
			
			// buttonsize 변경에 따른 후처리 함수 호출
			this.on_apply_buttonsize(v);
		}
		
	};
	
	// buttonsize 변경에 따른 후처리 함수
	_ptimepicker.on_apply_buttonsize = function(v)
	{
		// dropbutton 존재할 경우
		if(this.form.dropButton)
		{
			// dropbutton의 width 값 변경
			if(v)
			{
				this.form.dropButton.setOffsetWidth(v);
			}
			else
			{
				this.form.dropButton.setOffsetWidth(30);
			}
			
			this.form.resetScroll();
		}
	};	
	
	/************************************************************************
	FUNCTION : on_created_contents
	DESCRIPTION : Called when running on_created() function.
	on_created() function creates the element of the component as a node and becomes an entity.
	Dynamically called when a component is created.
	PARAMETER : win : nexacro._Window (nexacro._Window to which Component belongs)
	RETURN : void
	************************************************************************/
	_ptimepicker.on_created_contents = function (win)
	{
		nexacro._CompositeComponent.prototype.on_created_contents.call(this, win);
		this.on_apply_buttonsize(this.buttonsize);
		
	};	
	
	/************************************************************************
	FUNCTION : on_getBindableProperties
	DESCRIPTION : Returns a property name that supports simple bind as a function to support simple bind of component.
	PARAMETER : void
	RETURN : bindproperty : array(Property name that supports simplebind)
	************************************************************************/
	_ptimepicker.on_getBindableProperties = function ()
	{
		//return ["value"];
		// TODO : enter your code here.
		
		// simple bind에 value property 추가
		return ["value"];
	};	
	
	/************************************************************************
	FUNCTION : _get_form_module
	DESCRIPTION :
	RETURN :
	************************************************************************/
	_ptimepicker._get_form_module = function ()
	{
		return function()
		{
			if (!this._is_form)
			return;
			
			var obj = null;
			
			this.on_create = function()
			{
				this.set_name("timepicker");
				this.set_titletext("timepicker");
				this.set_cssclass("timeMedt");
				if (nexacro.Form == this.constructor)
				{
					this._setFormPosition(150,20);
				}
				
				// Object(Dataset, ExcelExportObject) Initialize
				
				
				// UI Components Initialize
				obj = new nexacro.Button("dropButton",null,"0","30",null,"0","0",null,null,null,null,this);
				obj.set_taborder("1");
				obj.set_textAlign("center");
				obj.set_cssclass("dropbutton");
				this.addChild(obj.name, obj);
				
				obj = new nexacro.PopupDiv("div_timepicker","0","20","300","180",null,null,null,null,null,null,this);
				obj.set_visible("true");
				obj.set_text("");
				obj.set_cssclass("div_timepicker");
				this.addChild(obj.name, obj);
				
				obj = new nexacro.Button("hhUp","15","10","60","40",null,null,null,null,null,null,this.div_timepicker.form);
				obj.set_taborder("0");
				obj.set_cssclass("upButton");
				obj.set_verticalAlign("middle");
				obj.set_textAlign("center");
				this.div_timepicker.addChild(obj.name, obj);
				
				obj = new nexacro.Edit("hhEdit","15","65","60","40",null,null,null,null,null,null,this.div_timepicker.form);
				obj.set_taborder("1");
				obj.set_inputtype("number");
				obj.set_maxlength("2");
				obj.set_textAlign("center");
				obj.set_cssclass("edt_tTimeEdit");
				this.div_timepicker.addChild(obj.name, obj);
				
				obj = new nexacro.Button("hhDown","15","115","60","40",null,null,null,null,null,null,this.div_timepicker.form);
				obj.set_taborder("3");
				obj.set_cssclass("downButton");
				obj.set_verticalAlign("middle");
				obj.set_textAlign("center");
				this.div_timepicker.addChild(obj.name, obj);
				
				obj = new nexacro.Button("mmUp","110","10","60","40",null,null,null,null,null,null,this.div_timepicker.form);
				obj.set_taborder("4");
				obj.set_cssclass("upButton");
				obj.set_textAlign("center");
				obj.set_verticalAlign("middle");
				this.div_timepicker.addChild(obj.name, obj);
				
				obj = new nexacro.Edit("mmEdit","110","65","60","40",null,null,null,null,null,null,this.div_timepicker.form);
				obj.set_taborder("2");
				obj.set_inputtype("number");
				obj.set_maxlength("2");
				obj.set_textAlign("center");
				obj.set_cssclass("edt_tTimeEdit");
				this.div_timepicker.addChild(obj.name, obj);
				
				obj = new nexacro.Button("mmDown","110","115","60","40",null,null,null,null,null,null,this.div_timepicker.form);
				obj.set_taborder("5");
				obj.set_cssclass("downButton");
				obj.set_textAlign("center");
				obj.set_verticalAlign("middle");
				this.div_timepicker.addChild(obj.name, obj);
				
				obj = new nexacro.Static("Static00","85","60","15","40",null,null,null,null,null,null,this.div_timepicker.form);
				obj.set_taborder("6");
				obj.set_text(":");
				obj.set_textAlign("center");
				obj.set_font("normal 20pt/normal \"normal/normal\"");
				obj.set_verticalAlign("middle");
				this.div_timepicker.addChild(obj.name, obj);
				
				obj = new nexacro.Button("btn_ok",null,null,"90","80","25","50",null,null,null,null,this.div_timepicker.form);
				obj.set_taborder("7");
				obj.set_text("입력");
				obj.set_cssclass("okButton");
				this.div_timepicker.addChild(obj.name, obj);
				
				obj = new nexacro.MaskEdit("timeEdit","0","0",null,null,"dropButton:0","0",null,null,null,null,this);
				obj.set_taborder("1");
				obj.set_format("##  :  ##");
				obj.set_limitbymask("both");
				obj.set_type("string");
				obj.set_textAlign("center");
				obj.set_readonly("true");
				this.addChild(obj.name, obj);
				
				// Layout Functions
				//-- Default Layout : this
				obj = new nexacro.Layout("default","",150,20,this,function(p){});
				this.addLayout(obj.name, obj);
				
				// BindItem Information
				
			};
			
			this.loadPreloadList = function()
			{
				
			};
			
			// User Script
			this.registerScript("timepicker.xcdl", function() {
					// 드롭다운 버튼
					this.dropButton_onclick = function(obj,e)
					{
						let nLeft;
						let nTop;
						let nWidth;
						let nHeight;
						
						nLeft = 0;
						nTop = this.getOffsetHeight();
						nWidth = 300;
						nHeight = 180;
						
						this.div_timepicker.trackPopupByComponent(this, nLeft, nTop, nWidth, nHeight);
					};
					
					// timepicker onpopup
					this.div_timepicker_onpopup = function(obj,e)
					{
						let hh = "00";
						let mm = "00";
						
						this.div_timepicker.form.hhEdit.set_value(hh);
						this.div_timepicker.form.mmEdit.set_value(mm);
					};
					
					// 시간 + 버튼
					this.div_timepicker_hhUp_onclick = function(obj,e)
					{
						let hh = this.div_timepicker.form.hhEdit.value;
						
						let hInt = parseInt(hh);
						let hIntUp = hInt + 1;
						
						if(hIntUp > 23)
						{
							hIntUp = "00";
						}
						hIntUpString = hIntUp.toString();
						let hIntUpDigit = hIntUpString.length;
						if(hIntUpDigit < 2)
						{
							hIntUp = "0" + hIntUp;
						}
						
						this.div_timepicker.form.hhEdit.set_value(hIntUp);
					};
					
					// 시간 - 버튼
					this.div_timepicker_hhDown_onclick = function(obj,e)
					{
						let hh = this.div_timepicker.form.hhEdit.value;
						
						let hInt = parseInt(hh);
						let hIntDown = hInt - 1;
						
						if(hIntDown < 0)
						{
							hIntDown = "23";
						}
						
						hIntDownString = hIntDown.toString();
						let hIntDownDigit = hIntDownString.length;
						if(hIntDownDigit < 2)
						{
							hIntDown = "0" + hIntDown;
						}
						
						this.div_timepicker.form.hhEdit.set_value(hIntDown);
					};
					
					// 분 + 버튼
					this.div_timepicker_mmUp_onclick = function(obj,e)
					{
						let mm = this.div_timepicker.form.mmEdit.value;
						
						let mInt = parseInt(mm);
						let mIntUp = mInt + 1;
						
						if(mIntUp > 59)
						{
							mIntUp = "00";
						}
						
						mIntUpString = mIntUp.toString();
						let	mIntUpDigit = mIntUpString.length;
						if(mIntUpDigit < 2)
						{
							mIntUp = "0" + mIntUp;
						}
						
						this.div_timepicker.form.mmEdit.set_value(mIntUp);
					};
					
					// 분 - 버튼
					this.div_timepicker_mmDown_onclick = function(obj,e)
					{
						let mm = this.div_timepicker.form.mmEdit.value;
						
						let mInt = parseInt(mm);
						let mIntDown = mInt - 1;
						
						if(mIntDown < 0)
						{
							mIntDown = "59";
						}
						
						mIntDownString = mIntDown.toString();
						let mIntDownDigit = mIntDownString.length;
						if(mIntDownDigit < 2)
						{
							mIntDown = "0" + mIntDown;
						}
						
						this.div_timepicker.form.mmEdit.set_value(mIntDown);
					};
					
					// timepicker edit에 시간 세팅
					this.div_timepicker_btn_ok_onclick = function(obj,e)
					{
						let hh = this.div_timepicker.form.hhEdit.value;
						let mm = this.div_timepicker.form.mmEdit.value;
						
						let time = hh + mm;
						
						let rTime = this.fn_timeCheck(time);
						
						if(rTime == "N")
						{
							alert("올바른 시간형식 값이 아닙니다.");
							return;
						}
						
						this.timeEdit.set_value(time);
						trace(this.parent.name);
						this.div_timepicker.closePopup();
					};
					
					/* 함수 명 : fn_timeCheck
					* 시간 형식 체크
					* 입력 : 	time	체크할 시간
					*			flag	O : 연장근무시간의 시간체크
					* 반환 : Y, N
					* 기능 : 정규식을 이용하여 시간 형식 체크
					*/
					this.fn_timeCheck = function(time){
						
						let sRtn = "N";
						
						let sRegExp = "^([01][0-9]|2[0-3])([0-5][0-9])$";	// (00~23)(00~59)
						
						// Create regular expression object
						let objRegExp = new RegExp(sRegExp, "g");
						
						// Validate
						let objResult = objRegExp.exec(time);
						
						if(objResult == null) {
							sRtn = "N";
						}else {
							if((objResult.index == 0) && (objResult[0] == time)) sRtn = "Y";
							else sRtn = "N";
						}
						
						return sRtn;
					};
					
				});
			
			// Regist UI Components Event
			this.on_initEvent = function()
			{
				this.dropButton.addEventHandler("onclick",this.dropButton_onclick,this);
				this.div_timepicker.addEventHandler("onpopup",this.div_timepicker_onpopup,this);
				this.div_timepicker.form.hhUp.addEventHandler("onclick",this.div_timepicker_hhUp_onclick,this);
				this.div_timepicker.form.hhDown.addEventHandler("onclick",this.div_timepicker_hhDown_onclick,this);
				this.div_timepicker.form.mmUp.addEventHandler("onclick",this.div_timepicker_mmUp_onclick,this);
				this.div_timepicker.form.mmDown.addEventHandler("onclick",this.div_timepicker_mmDown_onclick,this);
				this.div_timepicker.form.btn_ok.addEventHandler("onclick",this.div_timepicker_btn_ok_onclick,this);
				this.timeEdit.addEventHandler("oneditclick",this.dropButton_onclick,this);
			};
			
			this.loadIncludeScript("timepicker.xcdl");
			this.loadPreloadList();
			
			// Remove Reference
			obj = null;
		};
	};	

	delete _ptimepicker;
}


