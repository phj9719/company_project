(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00301_P01");
            this.set_titletext("시작시");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(165,340);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_tcancle","3","3","158","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기 (close)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_1","3","31","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("시간");
            this.addChild(obj.name, obj);

            obj = new Button("btn_hour_08","3","59","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("08:00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_2","57","31","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10분");
            this.addChild(obj.name, obj);

            obj = new Button("btn_2_00","111","31","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("1분");
            this.addChild(obj.name, obj);

            obj = new Button("btn_hour_09","3","87","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("09:00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_hour_10","3","115","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10:00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_hour_11","3","143","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("11:00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_hour_12","3","171","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("12:00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_hour_13","3","199","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("13:00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_hour_14","3","227","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("14:00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_hour_15","3","255","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("15:00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_hour_16","3","283","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("16:00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_hour_17","3","311","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("17:00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_min_10","57","59","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Button("btn_min_10_1","57","87","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("1-");
            this.addChild(obj.name, obj);

            obj = new Button("btn_min_20","57","115","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Button("btn_min_20_1","57","143","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("2-");
            this.addChild(obj.name, obj);

            obj = new Button("btn_min_30","57","171","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Button("btn_min_30_1","57","199","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("3-");
            this.addChild(obj.name, obj);

            obj = new Button("btn_min_40","57","227","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("40");
            this.addChild(obj.name, obj);

            obj = new Button("btn_min_40_1","57","255","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("4-");
            this.addChild(obj.name, obj);

            obj = new Button("btn_min_50","57","283","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("50");
            this.addChild(obj.name, obj);

            obj = new Button("btn_min_50_1","57","311","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("5-");
            this.addChild(obj.name, obj);

            obj = new Button("btn_erase","111","59","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("지움");
            this.addChild(obj.name, obj);

            obj = new Button("btn_min_1","111","87","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_min_2","111","115","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("-2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_min_3","111","143","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("-3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_min_4","111","171","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("-4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_min_5","111","199","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("-5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_min_6","111","227","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("-6");
            this.addChild(obj.name, obj);

            obj = new Button("btn_min_7","111","255","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("-7");
            this.addChild(obj.name, obj);

            obj = new Button("btn_min_8","111","283","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("-8");
            this.addChild(obj.name, obj);

            obj = new Button("btn_min_9","111","311","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("-9");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",165,340,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00301_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00301_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00301_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00301_P01
         * 화면명   	: 시작시
         * 화면설명 	: 3-1 상세그리드의 시작시를 선택하기위한 시간선택 DIV
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
        		__col 변수에 시작시간의 컬럼명을 넣고
        		__col2 변수에 종료시간의 컬럼명을 넣고
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
        // 닫기 버튼
        this.btn_tcancle_onclick = function(obj,e)
        {
        	// div를 숨김으로서 팝업이 닫힌것 처럼 보이게 하기
        	pDiv.set_visible(false);
        };

        // 시간 버튼
        this.btn_hour_onclick = function(obj,e)
        {
        	//trace(pDiv.__form);
        	const pForm = pDiv.__form;	// 부모 화면 (부모div 에 __form값으로 세팅해준다 ex:부모div.__form = this;)
        	//trace(obj.text);
        	//trace(pDiv.__row);	// 값을 바꿀 데이터셋의 row index (부모div 에 __row값으로 세팅해준다)
        	//trace(pDiv.__col);	// 값을 바꿀 데이터셋의 column명 (부모div 에 __col값으로 세팅해준다)
        	//trace(pDiv.__ds);	// 값을 바꿀 데이터셋명 (부모div 에 __ds값으로 세팅해준다)

        	// 값 세팅
        	pForm.all[pDiv.__ds].setColumn(pDiv.__row, pDiv.__col, obj.text);
        };

        // 10분 단위 세팅후 팝업 닫기
        this.btn_min_10_c_onclick = function(obj,e)
        {
        	//trace(pDiv.__form);
        	const pForm = pDiv.__form;	// 부모 화면 (부모의 부모div 에 __form값으로 세팅해준다)
        	//trace(obj.text);
        	//trace(pDiv.__row);	// 값을 바꿀 데이터셋의 row index (부모의 부모div 에 __row값으로 세팅해준다)
        	//trace(pDiv.__col);	// 값을 바꿀 데이터셋의 column명 (부모의 부모div 에 __col값으로 세팅해준다)
        	//trace(pDiv.__ds);	// 값을 바꿀 데이터셋명 (부모의 부모div 에 __ds값으로 세팅해준다)
        	const val = pForm.all[pDiv.__ds].getColumn(pDiv.__row, pDiv.__col);
        	// 가져온 시간이 비어있는 경우 팝업 닫고 리턴
        	if (Sct.Util.isEmpty(val.trim()))
        	{
        		pDiv.set_visible(false);
        		return;
        	}

        	// 가져온시간을 시, 분으로 나누기
        	const valArr = val.split(":");
        	const hour = valArr[0];
        	const min = valArr[1];
        	//trace("hour : " + hour + ", min : " + min);
        	// 버튼의 값과 시를 합쳐서 세팅할 값 만들기
        	const time = hour + ":" + obj.text;
        	//trace("time : " + time);
        	// 값 세팅하고 팝업 닫기
        	pForm.all[pDiv.__ds].setColumn(pDiv.__row, pDiv.__col, time);
        	pDiv.set_visible(false);
        };

        // 10분 단위 세팅
        this.btn_min_10_1_onclick = function(obj,e)
        {
        	//trace(pDiv.__form);
        	const pForm = pDiv.__form;	// 부모 화면 (부모의 부모div 에 __form값으로 세팅해준다)
        	//trace(pDiv.__row);	// 값을 바꿀 데이터셋의 row index (부모의 부모div 에 __row값으로 세팅해준다)
        	//trace(pDiv.__col);	// 값을 바꿀 데이터셋의 column명 (부모의 부모div 에 __col값으로 세팅해준다)
        	//trace(pDiv.__ds);	// 값을 바꿀 데이터셋명 (부모의 부모div 에 __ds값으로 세팅해준다)
        	const val = pForm.all[pDiv.__ds].getColumn(pDiv.__row, pDiv.__col);

        	// 가져온 시간이 비어있는경우 리턴
        	if (Sct.Util.isEmpty(val.trim()))
        		return;

        	// 세팅할 분 가져오기
        	const idArr = obj.id.split("_");
        	const idMin = idArr[2];
        	//trace("idMin : " + idMin);

        	// 가져온 시간을 시, 분으로 나누기
        	const valArr = val.split(":");
        	const hour = valArr[0];
        	const min = valArr[1];
        	//trace("hour : " + hour + ", min : " + min);
        	// 세팅할 분과 시를 합쳐서 세팅할 값 만들기
        	const time = hour + ":" + idMin;
        	//trace("time : " + time);
        	// 값 세팅하기
        	pForm.all[pDiv.__ds].setColumn(pDiv.__row, pDiv.__col, time);
        };

        // 1분 단위 세팅후 팝업 닫기
        this.btn_min_onclick = function(obj,e)
        {
        	//trace(pDiv.__form);
        	const pForm = pDiv.__form;	// 부모 화면 (부모의 부모div 에 __form값으로 세팅해준다)
        	//trace(pDiv.__row);	// 값을 바꿀 데이터셋의 row index (부모의 부모div 에 __row값으로 세팅해준다)
        	//trace(pDiv.__col);	// 값을 바꿀 데이터셋의 column명 (부모의 부모div 에 __col값으로 세팅해준다)
        	//trace(pDiv.__ds);	// 값을 바꿀 데이터셋명 (부모의 부모div 에 __ds값으로 세팅해준다)
        	const val = pForm.all[pDiv.__ds].getColumn(pDiv.__row, pDiv.__col);

        	// 가져온 시간이 비어있는경우 팝업 닫고 리턴
        	if (Sct.Util.isEmpty(val.trim()))
        	{
        		pDiv.set_visible(false);
        		return;
        	}

        	// 세팅할 분 가져오기
        	const idArr = obj.id.split("_");
        	const idMin = idArr[2];
        	//trace("idMin : " + idMin);

        	// 가져온시간에서 1분단위 제외하고 추출
        	const str = val.substr(0, 4);
        	//trace("str : " + str);

        	// 세팅할 시간 만들기
        	const time = str + idMin;
        	//trace("time : " + time);

        	// 값 세팅하고 팝업 닫기
        	pForm.all[pDiv.__ds].setColumn(pDiv.__row, pDiv.__col, time);
        	pDiv.set_visible(false);
        };

        // 지움 버튼
        this.btn_erase_onclick = function(obj,e)
        {
        	//trace(pDiv.__form);
        	const pForm = pDiv.__form;	// 부모 화면 (부모의 부모div 에 __form값으로 세팅해준다)
        	//trace(pDiv.__row);	// 값을 바꿀 데이터셋의 row index (부모의 부모div 에 __row값으로 세팅해준다)
        	//trace(pDiv.__col);	// 값을 바꿀 데이터셋의 column명 (부모의 부모div 에 __col값으로 세팅해준다)
        	//trace(pDiv.__col2);	// 값을 바꿀 데이터셋의 column명2 (부모의 부모div 에 __col2값으로 세팅해준다)
        	//trace(pDiv.__ds);	// 값을 바꿀 데이터셋명 (부모의 부모div 에 __ds값으로 세팅해준다)

        	// 값 지우고 팝업 닫기
        	pForm.all[pDiv.__ds].setColumn(pDiv.__row, pDiv.__col, "");
        	pForm.all[pDiv.__ds].setColumn(pDiv.__row, pDiv.__col2, "");
        	pDiv.set_visible(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_tcancle.addEventHandler("onclick",this.btn_tcancle_onclick,this);
            this.btn_hour_08.addEventHandler("onclick",this.btn_hour_onclick,this);
            this.btn_hour_09.addEventHandler("onclick",this.btn_hour_onclick,this);
            this.btn_hour_10.addEventHandler("onclick",this.btn_hour_onclick,this);
            this.btn_hour_11.addEventHandler("onclick",this.btn_hour_onclick,this);
            this.btn_hour_12.addEventHandler("onclick",this.btn_hour_onclick,this);
            this.btn_hour_13.addEventHandler("onclick",this.btn_hour_onclick,this);
            this.btn_hour_14.addEventHandler("onclick",this.btn_hour_onclick,this);
            this.btn_hour_15.addEventHandler("onclick",this.btn_hour_onclick,this);
            this.btn_hour_16.addEventHandler("onclick",this.btn_hour_onclick,this);
            this.btn_hour_17.addEventHandler("onclick",this.btn_hour_onclick,this);
            this.btn_min_10.addEventHandler("onclick",this.btn_min_10_c_onclick,this);
            this.btn_min_10_1.addEventHandler("onclick",this.btn_min_10_1_onclick,this);
            this.btn_min_20.addEventHandler("onclick",this.btn_min_10_c_onclick,this);
            this.btn_min_20_1.addEventHandler("onclick",this.btn_min_10_1_onclick,this);
            this.btn_min_30.addEventHandler("onclick",this.btn_min_10_c_onclick,this);
            this.btn_min_30_1.addEventHandler("onclick",this.btn_min_10_1_onclick,this);
            this.btn_min_40.addEventHandler("onclick",this.btn_min_10_c_onclick,this);
            this.btn_min_40_1.addEventHandler("onclick",this.btn_min_10_1_onclick,this);
            this.btn_min_50.addEventHandler("onclick",this.btn_min_10_c_onclick,this);
            this.btn_min_50_1.addEventHandler("onclick",this.btn_min_10_1_onclick,this);
            this.btn_erase.addEventHandler("onclick",this.btn_erase_onclick,this);
            this.btn_min_1.addEventHandler("onclick",this.btn_min_onclick,this);
            this.btn_min_2.addEventHandler("onclick",this.btn_min_onclick,this);
            this.btn_min_3.addEventHandler("onclick",this.btn_min_onclick,this);
            this.btn_min_4.addEventHandler("onclick",this.btn_min_onclick,this);
            this.btn_min_5.addEventHandler("onclick",this.btn_min_onclick,this);
            this.btn_min_6.addEventHandler("onclick",this.btn_min_onclick,this);
            this.btn_min_7.addEventHandler("onclick",this.btn_min_onclick,this);
            this.btn_min_8.addEventHandler("onclick",this.btn_min_onclick,this);
            this.btn_min_9.addEventHandler("onclick",this.btn_min_onclick,this);
        };
        this.loadIncludeScript("DAY00301_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
