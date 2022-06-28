(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testSearchTree");
            this.set_titletext("메뉴 트리 검색 예제");
            if (Form == this.constructor)
            {
                this._setFormPosition(1027,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"string\" size=\"10\"/><Column id=\"MENU_NM\" type=\"string\" size=\"200\"/><Column id=\"MENU_LEVEL\" type=\"INT\" size=\"3\"/><Column id=\"MENU_GRP\" type=\"string\" size=\"3\"/><Column id=\"HIGH_MENU_ID\" type=\"string\" size=\"10\"/><Column id=\"MENU_ORDER\" type=\"bigdecimal\" size=\"22\"/><Column id=\"MENU_OPEN\" type=\"string\" size=\"1\"/><Column id=\"MENU_PARAM\" type=\"string\" size=\"100\"/><Column id=\"MENU_STATUS\" type=\"string\" size=\"10\"/><Column id=\"SCR_ID\" type=\"string\" size=\"100\"/><Column id=\"USE_YN\" type=\"string\" size=\"1\"/><Column id=\"SHOW_YN\" type=\"string\" size=\"1\"/><Column id=\"LANG_TYPE\" type=\"STRING\" size=\"5\"/><Column id=\"SCR_NM\" type=\"string\" size=\"100\"/><Column id=\"SCR_PATH\" type=\"string\" size=\"100\"/><Column id=\"GRP_ID\" type=\"string\" size=\"10\"/><Column id=\"AUTH_ADD\" type=\"string\" size=\"1\"/><Column id=\"AUTH_MOD\" type=\"string\" size=\"1\"/><Column id=\"AUTH_DEL\" type=\"string\" size=\"1\"/><Column id=\"AUTH_PRT\" type=\"string\" size=\"1\"/><Column id=\"AUTH_SAVE\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_menu","21","48","259","516",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_menu");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"170\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:MENU_NM\" treelevel=\"bind:MENU_LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_search","20","16","195","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("관리");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","220","16","59","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("찾기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1027,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("testSearchTree.xfdl","lib::sct_util.xjs");
        this.registerScript("testSearchTree.xfdl", function() {

        this.executeIncludeScript("lib::sct_util.xjs"); /*include "lib::sct_util.xjs"*/
        this.testSearchTree_onload = function (obj, e)
        {
        	this.ds_menu.set_enableevent(false);
        	nexacro.getApplication().gds_menu.filter("MENU_LEVEL>0");
        	this.ds_menu.copyData(nexacro.getApplication().gds_menu, true);
        	this.ds_menu.addColumn("SEARCH_FLAG", "string", 1);
        	nexacro.getApplication().gds_menu.filter("");

        	for (var i = 0; i < this.ds_menu.rowcount; i++)
        	{
        		var level = this.ds_menu.getColumn(i, "MENU_LEVEL");
        		this.ds_menu.setColumn(i, "MENU_LEVEL", level - 1);
        	}
        	this.ds_menu.set_enableevent(true);
        };

        this.fv_searchRow = -1;
        this.btn_search_onclick = function (obj, e)
        {
        	this.grd_menu.set_treeinitstatus("expand,all");
        	this.ds_menu.set_enableevent(false);

        	var firstRow = -1;
        	for (var i = (this.fv_searchRow + 1); i < this.ds_menu.rowcount; i++)
        	{
        		var name = this.ds_menu.getColumn(i, "MENU_NM");
        		if (Sct.Util.isEmpty(this.edt_search.value.toString().trim()))
        		{
        			this.ds_menu.setColumn(i, "SEARCH_FLAG", 0);
        		}
        		else
        		{
        			if (name.indexOf(this.edt_search.value.toString().trim()) >= 0)
        			{
        				this.ds_menu.setColumn(i, "SEARCH_FLAG", 1);
        				if (firstRow == -1)
        				{
        					this.fv_searchRow = i;
        					firstRow = i;
        				}
        			}
        			else
        			{
        				this.ds_menu.setColumn(i, "SEARCH_FLAG", 0);
        			}
        		}
        	}
        	this.ds_menu.set_enableevent(true);
        	if (firstRow != -1)
        	{
        		this.ds_menu.set_rowposition(firstRow);
        	}
        };

        this.edt_search_onchanged = function (obj, e)
        {
        	this.fv_searchRow = -1;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.testSearchTree_onload,this);
            this.edt_search.addEventHandler("onchanged",this.edt_search_onchanged,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
        };
        this.loadIncludeScript("testSearchTree.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
