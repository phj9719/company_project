(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testMENU");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"INT\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SHOW_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CLS_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEAR_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"PRN_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"APPV_AUTH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"INT\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SHOW_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CLS_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEAR_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"PRN_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"APPV_AUTH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","14","80","233","711",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_menu");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"?????????\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:MENU_NM\" treelevel=\"bind:MENU_LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","258","80","936","711",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_detail");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"53\"/><Column size=\"39\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"??????\"/><Cell col=\"1\" text=\"??????\"/><Cell col=\"2\" text=\"????????????\"/><Cell col=\"3\" text=\"?????????\"/><Cell col=\"4\" colspan=\"2\" text=\"????????????\"/><Cell col=\"6\" text=\"????????????\"/><Cell col=\"7\" text=\"????????????\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:DEL\"/><Cell col=\"2\" text=\"bind:MENU_CD\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:MENU_NM\"/><Cell col=\"4\" text=\"bind:MENU_ID\"/><Cell col=\"5\" displaytype=\"button\" background=\"beige\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USE_YN\"/><Cell col=\"7\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:SHOW_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","15","9","1179","41",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","17","1","75","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("????????????");
            obj.set_font("11pt \"Malgun Gothic\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","107","4","113","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_menu");
            obj.set_codecolumn("MENU_NM");
            obj.set_datacolumn("MENU_NM");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","1009","54","88","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("?????????");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","1106","54","88","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("??????");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","913","54","88","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("?????????");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","818","54","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("?????????");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("testMENU.xfdl", function() {
        this.frameMenu_onload = function (obj, e)
        {
        	var group = nexacro.getApplication().gds_menu.getColumn(0, "MENU_GRP");
        	this.fn_makeMenu(group);
        };

        this.fn_makeMenu = function (grp)
        {
        	this.ds_menu.clearData();
        	this.ds_menu.copyData(nexacro.getApplication().gds_menu, true);
        	this.ds_menu.set_keystring("S:+MENU_CD+MENU_ORDER");
        };

        // ????????? ????????? ????????? ??????
        this.Grid00_oncellclick = function (obj, e)
        {
        	var masteridx = this.ds_menu.rowposition;
        	// alert("rowposition : "+masteridx);
        	var mcd = this.ds_menu.getColumn(this.ds_menu.rowposition, "MENU_CD");
        	// alert("??????CD : "+mcd);
        	var mnm = this.ds_menu.getColumn(this.ds_menu.rowposition, "MENU_NM");
        	// alert("????????? : "+mnm);
        	var mlvl = this.ds_menu.getColumn(this.ds_menu.rowposition, "MENU_LEVEL");
        	// alert("?????? ?????? : "+mlvl);
        	var mgrp = this.ds_menu.getColumn(this.ds_menu.rowposition, "MENU_GRP");
        	// alert("?????? ?????? : "+mgrp);
        	var hmcd = this.ds_menu.getColumn(this.ds_menu.rowposition, "HIGH_MENU_CD");
        	// alert("?????? ?????? ????????? : "+hmcd);
        	var mid = this.ds_menu.getColumn(this.ds_menu.rowposition, "MENU_ID");
        	// alert("?????? ID : "+mid);
        	var purl = this.ds_menu.getColumn(this.ds_menu.rowposition, "PAGE_URL");
        	// alert("????????? URL : "+purl);

        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_detail=output1";
        	var argument = "method=getList "
        		 + "sqlId=CM_MENU_DETAIL "
        		 + "MENU_CD=" + mcd;
        	var callbackFunc = "";

        	this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // ?????????
        this.Button02_onclick = function (obj, e)
        {
        	if (this.ds_detail.rowposition == -1)
        	{
        		alert("????????? ?????? ????????? ?????????");
        	}
        	else
        	{
        		var rowidx = this.ds_detail.rowposition + 1;
        		this.ds_detail.insertRow(rowidx);
        		this.ds_detail.copyRow(rowidx, this.ds_detail, rowidx - 1);
        		this.ds_detail.set_rowposition(rowidx - 1);
        	}
        };

        // ?????????
        this.Button00_onclick = function (obj, e)
        {
        	var menulvl = this.ds_menu.getColumn(this.ds_menu.rowposition, "MENU_LEVEL");
        	alert("????????? ?????? ?????? : " + menulvl);
        	var menugrp = this.ds_menu.getColumn(this.ds_menu.rowposition, "MENU_GRP");
        	alert("????????? ?????? ???????????? : " + menugrp);
        	// ??????????????? ???????????? CD??? ?????? ?????? ??????
        	var menucd = this.ds_menu.getColumn(this.ds_menu.rowposition, "MENU_CD");
        	alert("????????? ?????? ?????? : " + menucd);
        	// rowcount -> 1?????? ???????????? 0?????? ???????????? ??????
        	var rowcount = this.ds_detail.getRowCount();
        	alert("row?????? : " + rowcount);
        	var lastseq = this.ds_detail.getColumn(rowcount - 1, "MENU_ID");
        	alert("???????????? ID : " + lastseq);
        	// getcolumn ???????????? ..String?????? ??????????????? 100+100 = 200??? ????????? 100+100 ??? 100100 ??? ??? ?????????toNumber ??????
        	lastseq = nexacro.toNumber(lastseq);
        	menulvl = nexacro.toNumber(menulvl);

        	this.ds_detail.addRow();
        	this.ds_detail.setColumn(rowcount, "LANG_CD", "ko_KR");
        	this.ds_detail.setColumn(rowcount, "MENU_LEVEL", menulvl + 1);
        	this.ds_detail.setColumn(rowcount, "MENU_GRP", menugrp);

        	if (menulvl == 1)
        	{
        		lastseq += 100;
        		// toNumber ????????? ?????? 0??? ??????????????? .. ?????? String?????? ????????? 0????????????
        		lastseq += "";
        		lastseq = lastseq.padLeft(lastseq.length + 1, 0);
        		this.ds_detail.setColumn(rowcount, "MENU_ID", lastseq);
        		this.ds_detail.setColumn(rowcount, "MENU_CD", lastseq);
        		this.ds_detail.setColumn(rowcount, "MENU_ORDER", lastseq);
        	}
        	else if (menulvl == 0)
        	{
        		lastseq += 10000;
        		lastseq += "";
        		lastseq = lastseq.padLeft(lastseq.length + 1, 0);
        		this.ds_detail.setColumn(rowcount, "MENU_ID", lastseq);
        		this.ds_detail.setColumn(rowcount, "MENU_CD", lastseq);
        		this.ds_detail.setColumn(rowcount, "MENU_ORDER", lastseq);
        	}
        };

        // ??????
        this.Button01_onclick = function (obj, e)
        {
        	var svcId = "save";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_detail:U";
        	var outDatasets = "";
        	var argument = "method=save "
        		 + "sqlId=CM_MENU_DETAIL_SAVE "
        		 + "forceSqlFlag=N ";
        	var callbackFunc = "";

        	this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.Button03_onclick = function (obj, e)
        {
        	alert("MENU ID : " + this.ds_detail.getColumn(this.ds_detail.rowposition, "MENU_ID"));
        	alert("MENU CD : " + this.ds_detail.getColumn(this.ds_detail.rowposition, "MENU_CD"));
        	alert("MENU order : " + this.ds_detail.getColumn(this.ds_detail.rowposition, "MENU_ORDER"));
        	alert("MENU level : " + this.ds_detail.getColumn(this.ds_detail.rowposition, "MENU_LEVEL"));
        	alert("MENU grp : " + this.ds_detail.getColumn(this.ds_detail.rowposition, "MENU_GRP"));
        };


        this.Grid02_oncellclick = function (obj, e)
        {
        	if (e.cell == 5)
        	{
        		var Url = this.ds_detail.getColumn(this.ds_detail.rowposition, "PAGE_URL");
        		if (Url.length < 2)
        		{
        			alert("????????? ???????????? ????????????.");
        		}
        		else
        		{
        			var mnm = this.ds_detail.getColumn(this.ds_detail.rowposition, "MENU_NM");
        			alert(Url);
        			// Modal close ?????? ?????? ????????? modeless ??? ???????????????.
        			// Sct.popup(this, "sid : CM_MENU", 300, 350, mnm, "", Url,"");
        			Sct.modeless(this, "CM_MENU", 300, 400, mnm, "", Url);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frameMenu_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Grid02.addEventHandler("oncellclick",this.Grid02_oncellclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
        };
        this.loadIncludeScript("testMENU.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
