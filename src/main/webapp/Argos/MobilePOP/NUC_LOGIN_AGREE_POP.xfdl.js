(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUC_LOGIN_AGREE_POP");
            this.set_titletext("약관 및 개인정보 동의 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(460,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close","25","23","46","47",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("transparent");
            obj.set_icon("url(\'theme://images/btn_close_N.png\')");
            this.addChild(obj.name, obj);

            obj = new Button("btn_agree",null,"23","120","43","25",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("동의하기");
            obj.set_cssclass("btn_basic");
            this.addChild(obj.name, obj);

            obj = new Div("div_popMain","25","90",null,null,"25","25",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Div("div_terms","10","20",null,null,"10","20",null,null,null,null,this.div_popMain.form);
            obj.set_taborder("0");
            obj.set_formscrollbartype("indicator");
            this.div_popMain.addChild(obj.name, obj);

            obj = new Static("sta_warning","20","0",null,"69","20",null,null,null,null,null,this.div_popMain.form.div_terms.form);
            obj.set_taborder("0");
            obj.set_text("※스마트 안심요양원 이용을 위해 서비스이용약관 및 개인정보 취급방침에 동의해 주세요.(동의하지 않으실 경우 서비스 이용이 불가합니다.)");
            obj.set_wordWrap("char");
            obj.set_cssclass("sta_pop_title");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.div_popMain.form.div_terms.addChild(obj.name, obj);

            obj = new Static("sta_title","20","74",null,"36","20",null,null,null,null,null,this.div_popMain.form.div_terms.form);
            obj.set_taborder("1");
            obj.set_text("서비스이용약관 및 개인정보취급방침");
            this.div_popMain.form.div_terms.addChild(obj.name, obj);

            obj = new Static("sta_txt","20","124",null,"1000","20",null,null,null,null,null,this.div_popMain.form.div_terms.form);
            obj.set_taborder("2");
            obj.set_wordWrap("char");
            obj.set_text("스마트안심요양원 이용약관\r\n주식회사 에스씨티(이하 \"회사\"라 함)는 개인정보보호 관한 법률을 준수하며 회원님의 개인정보가 어떠한 목적과 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지를 알려드립니다.\r\n\r\n본 개인정보처리방침은 관련볍령의 개정이나 당사 내부방침에 의해 변경될 수 있으며, 이를 개정하는 경우 회사는 변경사항에 대하여 서비스 화면에 게시합니다. 회원님께서는 사이트 방문시 수시로 확인하시기 바랍니다.\r\n\r\n1. 개인정보 처리 목적\r\n회사는 이용자의 개인정보를 다음의 목적 이외의 용도로는 이용하지 않으며, 이용 목적이 변경될 경우에는 동의를 받아 처리하겠습니다.\r\n\r\n[회원 관리]\r\n회원제 서비스 이용에 따른 본인확인, 개인식별, 부정이용 방지, 가입의사 확인, 문의사항 또는 불만처리 등 민원 처리, 분쟁조정 해결을 위한 기록 보존, 고지사항 전달\r\n\r\n[서비스 제공에 관한 계약의 이행 및 요금정산]\r\n콘텐츠 제공, 구매 및 요금 결제, 물품 배송, 구매 및 요금 결제\r\n\r\n2. 개인정보 수집 항목 및 방법\r\n회원 가입 또는 서비스 제공을 위해 필요한 최소한의 개인정보를 수집하고 있습니다.");
            obj.set_verticalAlign("top");
            obj.set_cssclass("sta_txt");
            this.div_popMain.form.div_terms.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",460,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUC_LOGIN_AGREE_POP.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUC_LOGIN_AGREE_POP.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUC_LOGIN_AGREE_POP.xfdl","lib::mpgm_com.xjs");
        this.registerScript("NUC_LOGIN_AGREE_POP.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: NUC_LOGIN_AGREE_POP
         * 화면명   	: 개인정보 동의 팝업
         * 화면설명 	: 모바일 로그인시 개인정보 동의를 요구하는 팝업이다.
         * 작성일   	: 2021-07-21
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
        this.NUC_LOGIN_AGREE_POP_onload = function(obj,e)
        {
        	// 배경을 투명하게 하기 위하여 childFrame의 배경을 없앤 cssclass적용
        	this.getOwnerFrame().set_cssclass("mpop");
        };

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 취소
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.NUC_LOGIN_AGREE_POP_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("NUC_LOGIN_AGREE_POP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
