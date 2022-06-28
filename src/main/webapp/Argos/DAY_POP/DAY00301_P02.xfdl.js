(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00301_P02");
            this.set_titletext("종료시");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(110,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_to_05","3","3","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("05분");
            this.addChild(obj.name, obj);

            obj = new Button("btn_to_10","56","3","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10분");
            this.addChild(obj.name, obj);

            obj = new Button("btn_to_15","3","31","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("15분");
            this.addChild(obj.name, obj);

            obj = new Button("btn_to_25","3","59","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("25분");
            this.addChild(obj.name, obj);

            obj = new Button("btn_to_35","3","87","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("35분");
            this.addChild(obj.name, obj);

            obj = new Button("btn_to_45","3","115","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("45분");
            this.addChild(obj.name, obj);

            obj = new Button("btn_to_55","3","143","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("55분");
            this.addChild(obj.name, obj);

            obj = new Button("btn_to_70","3","171","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("70분");
            this.addChild(obj.name, obj);

            obj = new Button("btn_to_20","56","31","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("20분");
            this.addChild(obj.name, obj);

            obj = new Button("btn_to_30","56","59","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("30분");
            this.addChild(obj.name, obj);

            obj = new Button("btn_to_40","56","87","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("40분");
            this.addChild(obj.name, obj);

            obj = new Button("btn_to_50","56","115","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("50분");
            this.addChild(obj.name, obj);

            obj = new Button("btn_to_60","56","143","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("60분");
            this.addChild(obj.name, obj);

            obj = new Button("btn_to_80","56","171","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("80분");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",110,200,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00301_P02.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00301_P02.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00301_P02.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00301_P02
         * 화면명   	: 종료시
         * 화면설명 	: 3-1 상세그리드의 종료시를 선택하기위한 시간선택 DIV
         * 작성일   	: 2022-05-24
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *
         ***********************************************************************
         비고 : 이 팝업을 띄울 화면에 이 팝업을 연결할 div를 만들고
                그 div에 __form 변수에 화면을 넣고
        		__row 변수에 이 팝업으로 바꿀 시간의 데이터셋 row index를 넣고
        		__col 변수에 종료시간의 컬럼명을 넣고
        		__col2 변수의 시작시간의 컬럼명을 넣고
        		__ds 변수에 데이터셋의 이름을 넣는다.
         */
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        const pDiv = this.parent;	// 해당 팝업의 부모div
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 분 선택 버튼
        this.to_btn_onclick = function(obj,e)
        {
        	// 자바스크립트 Date타입으로 계산하기 위해 년도 월 일 값 만들기
        	const today = Sct.Util.getToday();
        	const year = today.substr(0, 4);
        	const month = today.substr(4, 2);
        	const day = today.substr(6, 2);
        	//trace("today : " + today + ", year : " + year + ", month : " + month + ", day : " + day)

        	//trace(pDiv.__form);
        	const pForm = pDiv.__form;	// 부모 화면 (부모의 부모div 에 __form값으로 세팅해준다)
        	//trace(pDiv.__row);	// 값을 바꿀 데이터셋의 row index (부모의 부모div 에 __row값으로 세팅해준다)
        	//trace(pDiv.__col);	// 값을 바꿀 데이터셋의 column명 (부모의 부모div 에 __col값으로 세팅해준다)
        	//trace(pDiv.__col2);	// 값을 바꿀 데이터셋의 column명2 (부모의 부모div 에 __col2값으로 세팅해준다)
        	//trace(pDiv.__ds);	// 값을 바꿀 데이터셋명 (부모의 부모div 에 __ds값으로 세팅해준다)
        	const val = pForm.all[pDiv.__ds].getColumn(pDiv.__row, pDiv.__col2);

        	// 가져온 시간이 비어있는경우 팝업 닫고 리턴
        	if (Sct.Util.isEmpty(val.trim()))
        	{
        		pDiv.set_visible(false);
        		return;
        	}

        	// 세팅할 시간차 구하기
        	const idArr = obj.id.split("_");
        	const idMin = idArr[2];
        	const setVal = parseInt(idMin);
        	//trace("idMin : " + idMin);
        	//trace("setVal : " + setVal);

        	// 가져온 시간 시, 분으로 나누기
        	const valArr = val.split(":");
        	const hour = valArr[0];
        	const min = valArr[1];
        	//trace("hour : " + hour + ", min : " + min);

        	// Date 객체 생성
        	const date = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hour), parseInt(min), 0);
        	//trace("date : " + date);

        	// 시간차 적용하기
        	date.setMinutes(date.getMinutes() + setVal);
        	//trace("date2 : " + date);

        	// 변경된 시간의 시, 분 스트링 만들기
        	const afterHour = date.getHours() + "";
        	const afterMin = date.getMinutes() + "";
        	//trace("afterHour : " + afterHour + ", afterMin : " + afterMin);
        	const hourStr = afterHour.padStart(2, '0');
        	const minStr = afterMin.padStart(2, '0');
        	//trace("hourStr : " + hourStr + ", minStr : " + minStr);

        	// 세팅할 값 만들기
        	const time = hourStr + ":" + minStr;
        	//trace("time : " + time);

        	// 값 세팅하고 팝업 닫기
        	pForm.all[pDiv.__ds].setColumn(pDiv.__row, pDiv.__col, time);
        	pDiv.set_visible(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_to_05.addEventHandler("onclick",this.to_btn_onclick,this);
            this.btn_to_10.addEventHandler("onclick",this.to_btn_onclick,this);
            this.btn_to_15.addEventHandler("onclick",this.to_btn_onclick,this);
            this.btn_to_25.addEventHandler("onclick",this.to_btn_onclick,this);
            this.btn_to_35.addEventHandler("onclick",this.to_btn_onclick,this);
            this.btn_to_45.addEventHandler("onclick",this.to_btn_onclick,this);
            this.btn_to_55.addEventHandler("onclick",this.to_btn_onclick,this);
            this.btn_to_70.addEventHandler("onclick",this.to_btn_onclick,this);
            this.btn_to_20.addEventHandler("onclick",this.to_btn_onclick,this);
            this.btn_to_30.addEventHandler("onclick",this.to_btn_onclick,this);
            this.btn_to_40.addEventHandler("onclick",this.to_btn_onclick,this);
            this.btn_to_50.addEventHandler("onclick",this.to_btn_onclick,this);
            this.btn_to_60.addEventHandler("onclick",this.to_btn_onclick,this);
            this.btn_to_80.addEventHandler("onclick",this.to_btn_onclick,this);
        };
        this.loadIncludeScript("DAY00301_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
