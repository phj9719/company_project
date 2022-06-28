(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUC_VISIT_SUCCESS_POP");
            this.set_titletext("예약결과 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_pop","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_text","0","66.76%","100.00%","90",null,null,null,null,null,null,this.div_pop.form);
            obj.set_taborder("0");
            obj.set_text("직접방문 신청이 완료되었습니다.\r\n예약목록 메뉴에서 방문 신청 현황을\r\n확인 하실 수 있습니다.");
            obj.set_cssclass("sta_pop_txt");
            obj.set_textAlign("center");
            this.div_pop.addChild(obj.name, obj);

            obj = new Static("sta_title","0","9.41%",null,"50","0",null,null,null,null,null,this.div_pop.form);
            obj.set_taborder("1");
            obj.set_text("직접방문 신청완료");
            obj.set_cssclass("sta_pop_title");
            obj.set_textAlign("center");
            this.div_pop.addChild(obj.name, obj);

            obj = new ImageViewer("imv_visit","30.00%","29.41%","40.00%","108",null,null,null,null,null,null,this.div_pop.form);
            obj.set_taborder("2");
            obj.set_image("url(\'theme://images/ico_visit_pop1.png\')");
            this.div_pop.addChild(obj.name, obj);

            obj = new Button("btn_cancel","0",null,"175","60",null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok",null,null,"175","60","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("신청완료");
            obj.set_cssclass("btn_pop_yes");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",350,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUC_VISIT_SUCCESS_POP.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUC_VISIT_SUCCESS_POP.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUC_VISIT_SUCCESS_POP.xfdl","lib::mpgm_com.xjs");
        this.registerScript("NUC_VISIT_SUCCESS_POP.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: NUC_VISIT_SUCCESS_POP
         * 화면명   	: 예약 성공 팝업
         * 화면설명 	: 모바일 방문예약, 영상통화 예약 성공시 보여주는 팝업
         * 작성일   	: 2021-09-06
         * 작성자   	: 조기종
         * 수정이력 	: ↓↓↓↓↓↓↓
         ***********************************************************************
         *     수정일     수정자   내용
         ***********************************************************************
         *
         ***********************************************************************
         */

        /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        this.executeIncludeScript("lib::mpgm_com.xjs"); /*include "lib::mpgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/


        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.NUC_VISIT_SUCCESS_POP_onload = function(obj,e)
        {
        	if(!Sct.Util.isEmpty(this.parent.str))
        	{
        		const str = this.parent.str;

        		const title = str + " 신청완료";
        		const text = str + " 신청이 완료되었습니다.\n"
        						+ "예약목록 메뉴에서 " + str + " 신청현황을\n"
        						+ "확인 하실 수 있습니다.";

        		if(str == "직접방문")
        		{
        			this.div_pop.form.imv_visit.set_image("URL('theme://images/ico_visit_pop1.png')");
        		}
        		else
        		{
        			this.div_pop.form.imv_visit.set_image("URL('theme://images/ico_visit_pop2.png')");
        		}

        		this.div_pop.form.sta_title.set_text(title);
        		this.div_pop.form.sta_text.set_text(text);
        	}
        };

        this.NUC_LOGOUT_POP_onload = function(obj,e)
        {
        	/* 팝업 프레임에 배경색이 있고 borderRadius를 주는경우
        	 * round부분에 프레임 배경색이 남기 때문에
        	 * 프레임의 배경색을 없앤 cssclass를 적용함.
        	 */
        	this.getOwnerFrame().set_cssclass("mpop");
        };

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 취소
        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        };

        // 신청완료
        this.btn_ok_onclick = function(obj,e)
        {
        	this.ds_return.addRow();
        	this.ds_return.setColumn(0, "FLAG", 1);

        	this.close(this.ds_return.saveXML());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.NUC_VISIT_SUCCESS_POP_onload,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
        };
        this.loadIncludeScript("NUC_VISIT_SUCCESS_POP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
