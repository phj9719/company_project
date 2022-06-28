(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NU_CHART_PP");
            this.set_titletext("차트 상세보기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new BasicChart("cha_chart","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_boardspacing("0px 20px 0px 0px");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NU_CHART_PP.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NU_CHART_PP.xfdl","lib::pgm_com.xjs");
        this.registerScript("NU_CHART_PP.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: NU_CHART_PP
         * 화면명   	: 차트 상세보기
         * 화면설명 	: 부모창으로부터 데이터셋(ds)과
        				  차트 하위컨트롤 JSON(contents)과
        				  카테고리컬럼(cateCol)을 받아와서 차트 세팅
         * 작성일   	: 2021-08-26 13:49
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *  수정일				수정자			내용
         *
         ***********************************************************************
        /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.NU_CHART_PP_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	const fv_ds = this.parent.ds;	// 차트에 바인딩할 데이터셋
        	const contents = this.parent.contents;	// 차트 하위컨트롤들 JSON
        	const cateCol = this.parent.cateCol;	// 차트 카테고리컬럼

        	this.cha_chart.updateContents(contents);
        	this.cha_chart.set_categorycolumn(cateCol);
        	this.cha_chart.set_binddataset(fv_ds);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.NU_CHART_PP_onload,this);
        };
        this.loadIncludeScript("NU_CHART_PP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
