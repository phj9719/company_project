//XJS=pgm_com.xjs
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
         * 작  성  자  :  김정록
         * 함  수  명	:  form_onload_com
         * 설      명	:  실제 onload 이벤트 로직 수행함수
         * 입      력	:  obj : this
         e : onLoadEvent
         * 반      환	:
         **********************************************************************************/
        this.form_onload_com = function (obj, e, isAsync)
        {
        	if (isAsync != null)
        	{
        		Sct.onLoad(obj, e, null, isAsync);
        	}
        	else
        	{
        		Sct.onLoad(obj, e);
        	}
        	// 크기 조절 버튼 제어
        	this.gfn_sDivBtnVisible();

        	// 조회div 이벤트 추가
        	this.gfn_divSearchEnterEvent();

        	//디버깅팝업 이벤트 추가
        	obj.addEventHandler("onkeyup", this.fn_openDebugPopup, this);

        	// 2022-06-22, 조기종, UbiReport Div 추가
        	const ubiDiv = new Div();
        	ubiDiv.init("UbiDiv", -400, 100, 300, 300);
        	ubiDiv.set_text("UbiDiv");
        	ubiDiv.set_url("CM_POP::UBI_COMMON.xfdl");
        	obj.addChild("UbiDiv", ubiDiv);
        	ubiDiv.show();

        	this.fv_flag = false;
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  form_onbeforeclose
         * 설      명	:  화면이 닫히기전 화면내부 변경사항이 있을시 알림을 준다.
         * 입      력	:
         * 반      환	:
         **********************************************************************************/
        this.form_onbeforeclose = function (ds, e)
        {
        	// TODO 현재화면에서 벗어날때 그리드내부에 변경사항이 있을시 메세지
        	if (Sct.Grid.isUpdate(ds)) {
        		var msg = Sct.findMessage("000171", "");
        		return msg;
        	}
        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  fn_addRow_com
         * 설      명	:  화면의 추가버튼에서 호출하는 함수, 실제적인 추가 로직 수행.
         * 입      력	:
         * 반      환	:  true / false
         **********************************************************************************/
        this.fn_addRow_com = function ()
        {
        	// if(this.fn_insert_pre() == true){
        	// var objBindDs = this.fv_currentDS;
        	// var arrGrd = new Array();
        	// if(ds0 != null){
        	// trace("ds0 : "+ds0.name);
        	// arrGrd.push(ds0);
        	// }
        	// if(ds1 != null){
        	// trace("ds1 : "+ds1.name);
        	// arrGrd.push(ds1);
        	// }
        	// if(ds2 != null){
        	// trace("ds2 : "+ds2.name);
        	// arrGrd.push(ds2);
        	// }
        	// if(!Sct.Util.isEmpty(objBindDs)){
        	// for(var z=0; z<arrGrd.length; z++){
        	// if(this.fv_currentDS == arrGrd[z]){
        	// this.gfn_setSelchgEvent(arrGrd[z]);
        	// this.gfn_rowDefaultValue();
        	// this.gfn_setSelchgEvent(arrGrd[z]);
        	// break;
        	// }else if(z == arrGrd.length - 1){
        	// this.gfn_rowDefaultValue();
        	// break;
        	// }
        	// }
        	var idx = this.gfn_rowDefaultValue();
        	return idx;
        	// }
        	// if(arrGrd.length == 0){
        	// trace("OneGrid Type");
        	// this.gfn_rowDefaultValue();
        	// }
        	// }
        };

        /********************************************************************************************
         * 작  성  자  :   조기종
         * 함  수  명	:  	fn_save_com
         * 설      명	:  	등록과 수정을 한번에 하는 함수
         * 입      력	:  	svcId : Service ID
        					inDs : 등록이나 수정을 할 데이터셋(여러개를 넣을경우 ,로 구분함)
        					args : 추가 argument
        					async : 비동기 여부(동기 : "false", 비동기 : "true")
         * 입력  예시	:	ex1)this.fn_save_com("save", "ds_head,ds_detail")
        					ex2)this.fn_save_com("save", "ds_head", "COMPANY_CD='001' AA='aa' ", false)
         * 주  의  점	:	자바에서 쿼리 작성시 SQLID를 화면ID(대문자)_데이터셋_플래그 형식으로 작성해야함
        					ex) SMA040CT_DS_HEAD_I
        					플래그 : I = 등록
        							: U = 수정
         * 반      환	:
         ********************************************************************************************/
        this.fn_save_com = function(svcId, inDs, args, async)
        {
        	// 비동기 플래그가 인자로 들어오지 않은경우 비동기로 설정
        	if(Sct.Util.isEmpty(async)) async = true;

        	// commonController로
        	let params = "/commonController.do";

        	// 데이터셋 세팅
        	let inDatasets = "";
        	let aryInDataset = [];
        	if(inDs == null || inDs == "")
        	{
        		alert("입력 데이터셋이 존재하지 않습니다.");
        		return false;
        	}
        	aryInDataset = inDs.split(",");
        	for(let i = 0; i < aryInDataset.length; i++)
        	{
        		if(i == aryInDataset.length -1)
        		{
        			inDatasets += "input" + (i + 1) + "=" + aryInDataset[i] + ":U";
        		}
        		else
        		{
        			inDatasets += "input" + (i + 1) + "=" + aryInDataset[i] + ":U ";
        		}
        	}
        	//trace("inDatasets : " + inDatasets);

        	// 받을 데이터셋은 없음
        	let outDatasets = "";

        	// argument 세팅
        	let argument = "method=save ";
        		argument += "sqlId='";

        	// argument에 sqlId 세팅 ('ex) SMA040CT_DS_HEAD'까지만 세팅됨 플래그는 자바단에서 붙임)
        	for(let j = 0; j < aryInDataset.length; j++)
        	{
        		let winKey = nexacro.getApplication().gv_curWinKey.toUpperCase();
        		if(j == aryInDataset.length -1)
        		{
        			argument += winKey + "." + winKey + "_" + aryInDataset[j].toUpperCase() + "' ";
        		}
        		else
        		{
        			argument += winKey + "." + winKey + "_" + aryInDataset[j].toUpperCase() + " ";
        		}
        	}

        	// argument에 추가 argument 세팅
        	let aryArgs = [];
        	if(!Sct.Util.isEmpty(args))
        	{
        		aryArgs = args.split(" ");
        		for(let k = 0; k < aryArgs.length; k++)
        		{
        			argument += aryArgs[k] + " ";
        		}
        	}

        	// 콜백함수 세팅
        	let callbackFunc = "fn_callback";

        	// 트랜잭션 실행
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, async);

        };

        /**********************************************************************************
         * 작  성  자  :  김정록
         * 함  수  명	:  grd_list_onsetfocus
         * 설      명	:  그리드 포커스 시 처리 함수. 그리드의 onsetfocus 이벤트에
         함수명 작성.
         * 입      력	:
         * 반      환	:
         **********************************************************************************/
        this.grd_list_onsetfocus = function (obj, e)
        {
        	this.gfn_gridFocused(obj);
        };

        /***********************************************************************
         * DRAG EVENT
         ***********************************************************************/
        // btn_sMove 에 onclick에 함수명 작성.
        this.search_reset = function (obj, e)
        {
        	this.gfn_divResize();
        };
        // btn_sMove 에 ondrag에 함수명 작성.
        this.search_resize = function (obj, e)
        {
        	this.nMoveY = obj.top;
        	return true;
        };

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
