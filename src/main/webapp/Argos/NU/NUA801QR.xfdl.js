(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COMMON_CODE");
            this.set_titletext("모니터링 조회(2분할)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1500,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"CONN_ST\" type=\"STRING\" size=\"256\"/><Column id=\"HUMI_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"HUMI_IMG\" type=\"INT\" size=\"256\"/><Column id=\"BAT_IMG\" type=\"INT\" size=\"256\"/><Column id=\"BAT_RATE\" type=\"INT\" size=\"256\"/><Column id=\"HEART_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"FALL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AGE_SEX\" type=\"STRING\" size=\"256\"/><Column id=\"DIA_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"FALL_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FALL_CLEAR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BAND_CLEAR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LOW_HEART_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"BAN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BAN_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FAL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_HEART_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"HUMI_RATE2\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location_temp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_room", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"MON_AREA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_TP\" type=\"STRING\" size=\"256\"/><Column id=\"UES_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location_all", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_TP\" type=\"STRING\" size=\"256\"/><Column id=\"UES_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_left", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"CONN_ST\" type=\"STRING\" size=\"256\"/><Column id=\"CONN_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"HUMI_RATE\" type=\"INT\" size=\"256\"/><Column id=\"HUMI_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"BAT_RATE\" type=\"INT\" size=\"256\"/><Column id=\"BAT_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"HEART_RATE\" type=\"INT\" size=\"256\"/><Column id=\"HEART_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"FALL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FALL_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"AGE_SEX\" type=\"STRING\" size=\"256\"/><Column id=\"DIA_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"FALL_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CLEAR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BAND_CLEAR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FALL_CLEAR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LOW_HEART_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"BAN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BAN_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FAL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_HEART_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"HUMI_RATE2\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_right", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"CONN_ST\" type=\"STRING\" size=\"256\"/><Column id=\"CONN_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"HUMI_RATE\" type=\"INT\" size=\"256\"/><Column id=\"HUMI_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"BAT_RATE\" type=\"INT\" size=\"256\"/><Column id=\"BAT_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"HEART_RATE\" type=\"INT\" size=\"256\"/><Column id=\"HEART_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"FALL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FALL_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"AGE_SEX\" type=\"STRING\" size=\"256\"/><Column id=\"DIA_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"FALL_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CLEAR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BAND_CLEAR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FALL_CLEAR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LOW_HEART_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"BAN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BAN_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FAL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_HEART_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"HUMI_RATE2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mon_area", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0",null,"44","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("dragscrolltype").set("vert");
            obj.set_cssclass("s01");
            this.addChild(obj.name, obj);

            obj = new Static("sta_area","5","12","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("모니터링 지역");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_location","205","12","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("층");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"10","80","24","10",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("닫기");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","300","12","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_codecolumn("ARE_CD");
            obj.set_datacolumn("ARE_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_area");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_area","110","12","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_codecolumn("ARE_CD");
            obj.set_datacolumn("ARE_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_mon_area");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search","438","10","80","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("검색");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_4div",null,"10","80","24","93",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("4분할");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","0%","50",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","430","510",null,null,"152","-240",null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_autofittype("none");
            obj.set_binddataset("ds_list");
            obj.set_autosizingtype("none");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"층/호실\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"기저귀 연결여부\"/><Cell col=\"4\" text=\"기저귀 상태\"/><Cell col=\"5\" text=\"기저귀 베터리\"/><Cell col=\"6\" text=\"맥박\"/><Cell col=\"7\" text=\"낙상여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:AREA\" textAlign=\"center\"/><Cell col=\"2\" displaytype=\"normal\" combodataset=\"ds_nu_sex\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:NAME\"/><Cell col=\"3\" text=\"bind:CONN_ST\" displaytype=\"normal\"/><Cell col=\"4\" text=\"bind:HUMI_RATE\" displaytype=\"normal\" combodataset=\"ds_area\" combocodecol=\"ARE_CD\" combodatacol=\"ARE_NM\"/><Cell col=\"5\" displaytype=\"normal\" text=\"bind:BAT_RATE\" combodataset=\"ds_location_all\" combocodecol=\"LOC_CD\" combodatacol=\"LOC_NM\"/><Cell col=\"6\" text=\"bind:HEART_RATE\" displaytype=\"normal\"/><Cell col=\"7\" text=\"bind:FALL_YN\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_paging","0",null,null,"30","692","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_url("CM_POP::CM_PAGING_DIV.xfdl");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_left","0%","0",null,null,"50.5%","40",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_left");
            obj.set_autosizingtype("none");
            obj.set_background("");
            obj.set_readonly("false");
            obj.set_selecttype("row");
            obj.set_enable("true");
            obj.set_useselcolor("false");
            obj.set_cssclass("grd_monitor2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"35\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"30\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"0\"/></Columns><Rows><Row size=\"34\" band=\"head\"/><Row size=\"42\"/></Rows><Band id=\"head\"><Cell text=\"층/호실\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\"/><Cell col=\"1\" text=\"이름\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\"/><Cell col=\"2\" colspan=\"2\" text=\"기저귀 연결여부\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\"/><Cell col=\"4\" colspan=\"2\" text=\"기저귀 상태(5분전)\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\"/><Cell col=\"6\" colspan=\"2\" text=\"기저귀 배터리\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\"/><Cell col=\"8\" colspan=\"2\" text=\"맥박\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\"/><Cell col=\"10\" colspan=\"2\" text=\"이상발생\"/></Band><Band id=\"body\"><Cell text=\"bind:AREA\" textAlign=\"center\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\"/><Cell col=\"1\" displaytype=\"normal\" combodataset=\"ds_nu_sex\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:NAME\" font=\"normal bold 15pt/normal &quot;Noto Sans KR&quot;\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\" cssclass=\"expr:dataset.getColumn(currow,&quot;FALL_CLEAR_YN&quot;) == 'N' ? 'CellYellow' : 'CellYellow' \"/><Cell col=\"2\" displaytype=\"imagecontrol\" text=\"expr:dataset.getColumn(currow,&quot;CONN_ST&quot;)=='1.0' ? 'imagerc::ico_con_y.png' : 'imagerc::ico_con_n.png' \" expandshow=\"hide\" tooltiptext=\"연결상태\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\" textAlign=\"right\" padding=\"0px 0px 0px 10px\"/><Cell col=\"3\" text=\"expr:dataset.getColumn(currow,&quot;CONN_ST&quot;)=='1.0' ? '연결중' : '연결안됨' \" displaytype=\"normal\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\" textAlign=\"left\"/><Cell col=\"4\" text=\"expr:dataset.getColumn(currow,&quot;HUMI_IMG&quot;)=='0' ? 'imagerc::ico_diaper2_0.png' : dataset.getColumn(currow,&quot;HUMI_IMG&quot;)=='1' ? 'imagerc::ico_diaper2_1.png' : dataset.getColumn(currow,&quot;HUMI_IMG&quot;)=='2'? 'imagerc::ico_diaper2_2.png' : dataset.getColumn(currow,&quot;HUMI_IMG&quot;)=='3' ? 'imagerc::ico_diaper2_3.png' : dataset.getColumn(currow,&quot;HUMI_IMG&quot;)=='4' ? 'imagerc::ico_diaper2_4.png' : dataset.getColumn(currow,&quot;HUMI_IMG&quot;)=='5'? 'imagerc::ico_diaper2_5.png' : dataset.getColumn(currow,&quot;HUMI_IMG&quot;)=='6'? 'imagerc::ico_diaper2_6.png' : dataset.getColumn(currow,&quot;HUMI_IMG&quot;)=='7'? 'imagerc::ico_diaper2_7.png' : dataset.getColumn(currow,&quot;HUMI_IMG&quot;)=='8'? 'imagerc::ico_diaper2_8.png' : dataset.getColumn(currow,&quot;HUMI_IMG&quot;)=='9'? 'imagerc::ico_diaper2_9.png' : dataset.getColumn(currow,&quot;HUMI_IMG&quot;)&gt;='10'? 'imagerc::ico_diaper2_10.png' : ''\" displaytype=\"imagecontrol\" combodataset=\"ds_area\" combocodecol=\"ARE_CD\" combodatacol=\"ARE_NM\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\" padding=\"0px 0px 0px 10px\"/><Cell col=\"5\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\" text=\"expr:(dataset.getColumn(currow,&quot;HUMI_RATE&quot;)&gt;'100' ? '100' : dataset.getColumn(currow, &quot;HUMI_RATE&quot;) &lt; '0' ? '0' : dataset.getColumn(currow,&quot;HUMI_RATE&quot;) ==null ? '' :dataset.getColumn(currow,&quot;HUMI_RATE&quot;) ) +(dataset.getColumn(currow,&quot;HUMI_RATE2&quot;) ==null ? '' :  '('+(dataset.getColumn(currow,&quot;HUMI_RATE2&quot;)&gt;'100' ? '100' : dataset.getColumn(currow, &quot;HUMI_RATE2&quot;) &lt; '0' ? '0' : dataset.getColumn(currow,&quot;HUMI_RATE2&quot; )== null ? '' : dataset.getColumn(currow,&quot;HUMI_RATE2&quot; ) )+')' )\" textAlign=\"left\" font=\"normal 400 15pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"6\" displaytype=\"imagecontrol\" text=\"expr:dataset.getColumn(currow,&quot;BAT_IMG&quot;)&lt;='0' ? 'imagerc::ico_battery_0.png' : dataset.getColumn(currow,&quot;BAT_IMG&quot;)=='1' ? 'imagerc::ico_battery_1.png' : dataset.getColumn(currow,&quot;BAT_IMG&quot;)=='2' ? 'imagerc::ico_battery_2.png' : dataset.getColumn(currow,&quot;BAT_IMG&quot;)=='3' ? 'imagerc::ico_battery_3.png' : dataset.getColumn(currow,&quot;BAT_IMG&quot;)=='4' ? 'imagerc::ico_battery_4.png' : dataset.getColumn(currow,&quot;BAT_IMG&quot;)=='5' ? 'imagerc::ico_battery_5.png' : dataset.getColumn(currow,&quot;BAT_IMG&quot;)=='6' ? 'imagerc::ico_battery_6.png' : dataset.getColumn(currow,&quot;BAT_IMG&quot;)=='7' ? 'imagerc::ico_battery_7.png' : dataset.getColumn(currow,&quot;BAT_IMG&quot;)=='8' ? 'imagerc::ico_battery_8.png' : dataset.getColumn(currow,&quot;BAT_IMG&quot;)=='9' ? 'imagerc::ico_battery_9.png' : dataset.getColumn(currow,&quot;BAT_IMG&quot;)=='10' ? 'imagerc::ico_battery_10.png' : null\" combodataset=\"ds_location_all\" combocodecol=\"LOC_CD\" combodatacol=\"LOC_NM\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\" padding=\"0px 0px 0px 10px\"/><Cell col=\"7\" text=\"expr:dataset.getColumn(currow,&quot;BAT_RATE&quot;)&gt;'100' ? '100%' : dataset.getColumn(currow, &quot;BAT_RATE&quot;) &lt; '0' ? '0%' : dataset.getColumn(currow,&quot;BAT_RATE&quot;) != null ?  dataset.getColumn(currow,&quot;BAT_RATE&quot;) +'%' : ''\" textAlign=\"left\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\"/><Cell col=\"8\" text=\"expr:dataset.getColumn(currow,&quot;HEART_RATE&quot;)&gt;=dataset.getColumn(currow,&quot;LOW_HEART_RATE&quot;)&amp;&amp;dataset.getColumn(currow,&quot;HEART_RATE&quot;)&lt;=dataset.getColumn(currow,&quot;HIGH_HEART_RATE&quot;) ? 'imagerc::ico_pulse2_y.png' : dataset.getColumn(currow,&quot;HEART_RATE&quot;)&gt;0 ? 'imagerc::ico_pulse2_n.png' : 'imagerc::ico_pulse2_dis.png'\" displaytype=\"imagecontrol\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\" padding=\"0px 0px 0px 10px\"/><Cell col=\"9\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\" text=\"bind:HEART_RATE\" textAlign=\"left\" font=\"normal 400 15pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"10\" text=\"expr:dataset.getColumn(currow,&quot;BAND_CLEAR_YN&quot;)=='N' ? 'imagerc::btn_pulselow2r.png' : 'imagerc::btn_pulselow2g.png' \" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\" displaytype=\"imagecontrol\" edittype=\"none\" padding=\"4px\"/><Cell col=\"11\" displaytype=\"imagecontrol\" edittype=\"none\" text=\"expr:dataset.getColumn(currow,&quot;FALL_CLEAR_YN&quot;)=='N' ? 'imagerc::btn_drop2r.png' : 'imagerc::btn_drop2g.png' \" padding=\"4px\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_right","50.5%","0",null,null,"0%","40",null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_background("");
            obj.set_readonly("false");
            obj.set_selecttype("row");
            obj.set_enable("true");
            obj.set_useselcolor("false");
            obj.set_binddataset("ds_right");
            obj.set_cssclass("grd_monitor2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"35\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"30\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"0\"/></Columns><Rows><Row size=\"34\" band=\"head\"/><Row size=\"42\"/></Rows><Band id=\"head\"><Cell text=\"층/호실\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\"/><Cell col=\"1\" text=\"이름\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\"/><Cell col=\"2\" colspan=\"2\" text=\"기저귀 연결여부\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\"/><Cell col=\"4\" colspan=\"2\" text=\"기저귀 상태(5분전)\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\"/><Cell col=\"6\" colspan=\"2\" text=\"기저귀 배터리\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\"/><Cell col=\"8\" colspan=\"2\" text=\"맥박\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\"/><Cell col=\"10\" colspan=\"2\" text=\"이상발생\"/></Band><Band id=\"body\"><Cell text=\"bind:AREA\" textAlign=\"center\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\"/><Cell col=\"1\" displaytype=\"normal\" combodataset=\"ds_nu_sex\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:NAME\" font=\"normal bold 15pt/normal &quot;Noto Sans KR&quot;\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\"/><Cell col=\"2\" displaytype=\"imagecontrol\" text=\"expr:dataset.getColumn(currow,&quot;CONN_ST&quot;)=='1.0' ? 'imagerc::ico_con_y.png' : 'imagerc::ico_con_n.png' \" expandshow=\"hide\" tooltiptext=\"연결상태\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\" textAlign=\"right\" padding=\"0px 0px 0px 10px\"/><Cell col=\"3\" text=\"expr:dataset.getColumn(currow,&quot;CONN_ST&quot;)=='1.0' ? '연결중' : '연결안됨' \" displaytype=\"normal\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\" textAlign=\"left\"/><Cell col=\"4\" text=\"expr:dataset.getColumn(currow,&quot;HUMI_IMG&quot;)=='0' ? 'imagerc::ico_diaper2_0.png' : dataset.getColumn(currow,&quot;HUMI_IMG&quot;)=='1' ? 'imagerc::ico_diaper2_1.png' : dataset.getColumn(currow,&quot;HUMI_IMG&quot;)=='2'? 'imagerc::ico_diaper2_2.png' : dataset.getColumn(currow,&quot;HUMI_IMG&quot;)=='3' ? 'imagerc::ico_diaper2_3.png' : dataset.getColumn(currow,&quot;HUMI_IMG&quot;)=='4' ? 'imagerc::ico_diaper2_4.png' : dataset.getColumn(currow,&quot;HUMI_IMG&quot;)=='5'? 'imagerc::ico_diaper2_5.png' : dataset.getColumn(currow,&quot;HUMI_IMG&quot;)=='6'? 'imagerc::ico_diaper2_6.png' : dataset.getColumn(currow,&quot;HUMI_IMG&quot;)=='7'? 'imagerc::ico_diaper2_7.png' : dataset.getColumn(currow,&quot;HUMI_IMG&quot;)=='8'? 'imagerc::ico_diaper2_8.png' : dataset.getColumn(currow,&quot;HUMI_IMG&quot;)=='9'? 'imagerc::ico_diaper2_9.png' : dataset.getColumn(currow,&quot;HUMI_IMG&quot;)&gt;='10'? 'imagerc::ico_diaper2_10.png' : ''\" displaytype=\"imagecontrol\" combodataset=\"ds_area\" combocodecol=\"ARE_CD\" combodatacol=\"ARE_NM\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\" padding=\"0px 0px 0px 10px\"/><Cell col=\"5\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\" text=\"expr:(dataset.getColumn(currow,&quot;HUMI_RATE&quot;)&gt;'100' ? '100' : dataset.getColumn(currow, &quot;HUMI_RATE&quot;) &lt; '0' ? '0' : dataset.getColumn(currow,&quot;HUMI_RATE&quot;) ==null ? '' :dataset.getColumn(currow,&quot;HUMI_RATE&quot;) ) +(dataset.getColumn(currow,&quot;HUMI_RATE2&quot;) ==null ? '' :  '('+(dataset.getColumn(currow,&quot;HUMI_RATE2&quot;)&gt;'100' ? '100' : dataset.getColumn(currow, &quot;HUMI_RATE2&quot;) &lt; '0' ? '0' : dataset.getColumn(currow,&quot;HUMI_RATE2&quot; )== null ? '' : dataset.getColumn(currow,&quot;HUMI_RATE2&quot; ) )+')' )\" textAlign=\"left\" font=\"normal 400 15pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"6\" displaytype=\"imagecontrol\" text=\"expr:dataset.getColumn(currow,&quot;BAT_IMG&quot;)&lt;='0' ? 'imagerc::ico_battery_0.png' : dataset.getColumn(currow,&quot;BAT_IMG&quot;)=='1' ? 'imagerc::ico_battery_1.png' : dataset.getColumn(currow,&quot;BAT_IMG&quot;)=='2' ? 'imagerc::ico_battery_2.png' : dataset.getColumn(currow,&quot;BAT_IMG&quot;)=='3' ? 'imagerc::ico_battery_3.png' : dataset.getColumn(currow,&quot;BAT_IMG&quot;)=='4' ? 'imagerc::ico_battery_4.png' : dataset.getColumn(currow,&quot;BAT_IMG&quot;)=='5' ? 'imagerc::ico_battery_5.png' : dataset.getColumn(currow,&quot;BAT_IMG&quot;)=='6' ? 'imagerc::ico_battery_6.png' : dataset.getColumn(currow,&quot;BAT_IMG&quot;)=='7' ? 'imagerc::ico_battery_7.png' : dataset.getColumn(currow,&quot;BAT_IMG&quot;)=='8' ? 'imagerc::ico_battery_8.png' : dataset.getColumn(currow,&quot;BAT_IMG&quot;)=='9' ? 'imagerc::ico_battery_9.png' : dataset.getColumn(currow,&quot;BAT_IMG&quot;)=='10' ? 'imagerc::ico_battery_10.png' : null\" combodataset=\"ds_location_all\" combocodecol=\"LOC_CD\" combodatacol=\"LOC_NM\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\" padding=\"0px 0px 0px 10px\"/><Cell col=\"7\" text=\"expr:dataset.getColumn(currow,&quot;BAT_RATE&quot;)&gt;'100' ? '100%' : dataset.getColumn(currow, &quot;BAT_RATE&quot;) &lt; '0' ? '0%' : dataset.getColumn(currow,&quot;BAT_RATE&quot;) != null ?  dataset.getColumn(currow,&quot;BAT_RATE&quot;) +'%' : ''\" textAlign=\"left\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\"/><Cell col=\"8\" text=\"expr:dataset.getColumn(currow,&quot;HEART_RATE&quot;)&gt;=dataset.getColumn(currow,&quot;LOW_HEART_RATE&quot;)&amp;&amp;dataset.getColumn(currow,&quot;HEART_RATE&quot;)&lt;=dataset.getColumn(currow,&quot;HIGH_HEART_RATE&quot;) ? 'imagerc::ico_pulse2_y.png' : dataset.getColumn(currow,&quot;HEART_RATE&quot;)&gt;0 ? 'imagerc::ico_pulse2_n.png' : 'imagerc::ico_pulse2_dis.png'\" displaytype=\"imagecontrol\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\" padding=\"0px 0px 0px 10px\"/><Cell col=\"9\" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\" text=\"bind:HEART_RATE\" textAlign=\"left\" font=\"normal 400 15pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"10\" text=\"expr:dataset.getColumn(currow,&quot;BAND_CLEAR_YN&quot;)=='N' ? 'imagerc::btn_pulselow2r.png' : 'imagerc::btn_pulselow2g.png' \" border=\"1px solid #cccccc,0px solid #cccccc,1px solid #cccccc,1px solid #cccccc\" displaytype=\"imagecontrol\" edittype=\"none\" padding=\"4px\"/><Cell col=\"11\" displaytype=\"imagecontrol\" edittype=\"none\" text=\"expr:dataset.getColumn(currow,&quot;FALL_CLEAR_YN&quot;)=='N' ? 'imagerc::btn_drop2r.png' : 'imagerc::btn_drop2g.png' \" padding=\"4px\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1500,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","div_search.form.cmb_area","value","ds_search","MON_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cmb_location","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM_POP::CM_PAGING_DIV.xfdl");
        };
        
        // User Script
        this.addIncludeScript("NUA801QR.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUA801QR.xfdl","lib::pgm_com.xjs");
        this.registerScript("NUA801QR.xfdl", function() {
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/


        var fv_companyCd = nexacro.getApplication().gds_userInfo.getColumn(0,"COMPANY_CD");
        var clearYn = "Y";
        var newObj;
        this.COMMON_CODE_onload = function (obj, e) {

        	//this.form_onload_com(obj, e, false);
        	//Multi 선택 여부 파라미터 : MULTI_YN
        	this.ds_search.setColumn(0, "COMPANY_CD", fv_companyCd);
        	//페이징 처리 초기화
        	this.fn_initPageSet();
        	newObj = obj;
        	this.fn_setComboDs(obj);


        // 	this.ds_search.setColumn(0, "AREA", fv_area);
        // 	this.ds_search.setColumn(0, "LOCATION", fv_location);

        	this.fn_search();

        	// 오픈시 검색조건 첫 항목에 커서 이동
        	this.div_search.form.cmb_area.setFocus();

        };
        //페이징 처리 초기화
        this.fn_initPageSet = function()
        {
        	//페이징처리 초기화
        	this.ds_list.pageRowCount		= 40;											//조회될 row 갯수 (page Size)
            this.ds_list.pageCount			= 10;											//최대 페이지 갯수 (page Scale)
            this.ds_list.pageTotalVisible	= false;										//하단 page Size, pageScale 등 입력 div show YN
        	this.ds_list.pageNo				= 1;											//최초조회시 default 페이지 번호
        	this.ds_list.pageFunctionName	= "fn_search";									//페이지 버튼(1,2,3...)클릭시 조회할 function name
        	this.div_cont.form.div_paging.form.fn_init(this, this.ds_list);	//페이지 form 초기화

        }
        this.fn_search2 = function (obj, e) {
        	var svcId = "search2";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_search";
        	var outDatasets = "ds_list=output1";
        	var argument = "method=getListPaging "
        		 + "sqlId=CM_MONITOR_PP.CM_MONITOR_PP_S ";
        	var callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };
        this.fn_search = function()
        {
        	const svcId = "search";
        	const params = "/monitorController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=monitorSelect "
        				+ "sqlId='CM_MONITOR_PP.CM_MONITOR_PP_JSON_S' "
        				+ "COMPANY_CD=" + fv_companyCd + " ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, false);
        };
        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{

        			this.ds_left.clearData();
        			this.ds_right.clearData();

        			this.div_cont.form.div_paging.form.fn_callAfter();
        			//ds를 2개로 나눠 총 조회 20건씩 left , right 구분하여 표현
        			for(var i=0; i<this.ds_list.rowcount; i++){
        				if(i%2 == 0){
        					var lRow = this.ds_left.addRow();
        					this.ds_left.copyRow(lRow, this.ds_list, i);
        				}else{
        					var rRow = this.ds_right.addRow();
        					this.ds_right.copyRow(rRow, this.ds_list, i);
        				}
        			}
        			this.ds_left.applyChange();
        			this.ds_right.applyChange();
        			//낙상기능의 삭제로 FALL_CLEAR_YN == 'N' >> FALL_CLEAR_YN == 'S' (기능복구시 N으로 변경)
        			this.div_cont.form.grd_left.setCellProperty("body", 0, "cssclass", "expr:dataset.getColumn(currow,'FALL_CLEAR_YN') == 'S' ? 'CellYellow_C' : dataset.getColumn(currow,'BAND_CLEAR_YN') == 'N' ? 'CellYellow_C' : ''");
        			this.div_cont.form.grd_left.setCellProperty("body", 1, "cssclass", "expr:dataset.getColumn(currow,'FALL_CLEAR_YN') == 'S' ? 'CellYellow_C' : dataset.getColumn(currow,'BAND_CLEAR_YN') == 'N' ? 'CellYellow_C' : ''");
        			this.div_cont.form.grd_left.setCellProperty("body", 2, "cssclass", "expr:dataset.getColumn(currow,'FALL_CLEAR_YN') == 'S' ? 'CellYellow_C' : dataset.getColumn(currow,'BAND_CLEAR_YN') == 'N' ? 'CellYellow_C' : ''");
        			this.div_cont.form.grd_left.setCellProperty("body", 3, "cssclass", "expr:dataset.getColumn(currow,'FALL_CLEAR_YN') == 'S' ? 'CellYellow_C' : dataset.getColumn(currow,'BAND_CLEAR_YN') == 'N' ? 'CellYellow_C' : ''");
        			this.div_cont.form.grd_left.setCellProperty("body", 4, "cssclass", "expr:dataset.getColumn(currow,'FALL_CLEAR_YN') == 'S' ? 'CellYellow_C' : dataset.getColumn(currow,'BAND_CLEAR_YN') == 'N' ? 'CellYellow_C' : ''");
        			this.div_cont.form.grd_left.setCellProperty("body", 5, "cssclass", "expr:dataset.getColumn(currow,'FALL_CLEAR_YN') == 'S' ? 'CellYellow_C' : dataset.getColumn(currow,'BAND_CLEAR_YN') == 'N' ? 'CellYellow_C' : ''");
        			this.div_cont.form.grd_left.setCellProperty("body", 6, "cssclass", "expr:dataset.getColumn(currow,'FALL_CLEAR_YN') == 'S' ? 'CellYellow_C' : dataset.getColumn(currow,'BAND_CLEAR_YN') == 'N' ? 'CellYellow_C' : ''");
        			this.div_cont.form.grd_left.setCellProperty("body", 7, "cssclass", "expr:dataset.getColumn(currow,'FALL_CLEAR_YN') == 'S' ? 'CellYellow_C' : dataset.getColumn(currow,'BAND_CLEAR_YN') == 'N' ? 'CellYellow_C' : ''");
        			this.div_cont.form.grd_left.setCellProperty("body", 8, "cssclass", "expr:dataset.getColumn(currow,'FALL_CLEAR_YN') == 'S' ? 'CellYellow_C' : dataset.getColumn(currow,'BAND_CLEAR_YN') == 'N' ? 'CellYellow_C' : ''");
        			this.div_cont.form.grd_left.setCellProperty("body", 9, "cssclass", "expr:dataset.getColumn(currow,'FALL_CLEAR_YN') == 'S' ? 'CellYellow_C' : dataset.getColumn(currow,'BAND_CLEAR_YN') == 'N' ? 'CellYellow_C' : ''");
        			this.div_cont.form.grd_left.setCellProperty("body", 10, "cssclass", "expr:dataset.getColumn(currow,'FALL_CLEAR_YN') == 'S' ? 'CellYellow_C' : dataset.getColumn(currow,'BAND_CLEAR_YN') == 'N' ? 'CellYellow_C' : ''");
        			this.div_cont.form.grd_left.setCellProperty("body", 11, "cssclass", "expr:dataset.getColumn(currow,'FALL_CLEAR_YN') == 'S' ? 'CellYellow_C' : dataset.getColumn(currow,'BAND_CLEAR_YN') == 'N' ? 'CellYellow_C' : ''");
        			this.div_cont.form.grd_right.setCellProperty("body", 0, "cssclass", "expr:dataset.getColumn(currow,'FALL_CLEAR_YN') == 'S' ? 'CellYellow_C' : dataset.getColumn(currow,'BAND_CLEAR_YN') == 'N' ? 'CellYellow_C' : ''");
        			this.div_cont.form.grd_right.setCellProperty("body", 1, "cssclass", "expr:dataset.getColumn(currow,'FALL_CLEAR_YN') == 'S' ? 'CellYellow_C' : dataset.getColumn(currow,'BAND_CLEAR_YN') == 'N' ? 'CellYellow_C' : ''");
        			this.div_cont.form.grd_right.setCellProperty("body", 2, "cssclass", "expr:dataset.getColumn(currow,'FALL_CLEAR_YN') == 'S' ? 'CellYellow_C' : dataset.getColumn(currow,'BAND_CLEAR_YN') == 'N' ? 'CellYellow_C' : ''");
        			this.div_cont.form.grd_right.setCellProperty("body", 3, "cssclass", "expr:dataset.getColumn(currow,'FALL_CLEAR_YN') == 'S' ? 'CellYellow_C' : dataset.getColumn(currow,'BAND_CLEAR_YN') == 'N' ? 'CellYellow_C' : ''");
        			this.div_cont.form.grd_right.setCellProperty("body", 4, "cssclass", "expr:dataset.getColumn(currow,'FALL_CLEAR_YN') == 'S' ? 'CellYellow_C' : dataset.getColumn(currow,'BAND_CLEAR_YN') == 'N' ? 'CellYellow_C' : ''");
        			this.div_cont.form.grd_right.setCellProperty("body", 5, "cssclass", "expr:dataset.getColumn(currow,'FALL_CLEAR_YN') == 'S' ? 'CellYellow_C' : dataset.getColumn(currow,'BAND_CLEAR_YN') == 'N' ? 'CellYellow_C' : ''");
        			this.div_cont.form.grd_right.setCellProperty("body", 6, "cssclass", "expr:dataset.getColumn(currow,'FALL_CLEAR_YN') == 'S' ? 'CellYellow_C' : dataset.getColumn(currow,'BAND_CLEAR_YN') == 'N' ? 'CellYellow_C' : ''");
        			this.div_cont.form.grd_right.setCellProperty("body", 7, "cssclass", "expr:dataset.getColumn(currow,'FALL_CLEAR_YN') == 'S' ? 'CellYellow_C' : dataset.getColumn(currow,'BAND_CLEAR_YN') == 'N' ? 'CellYellow_C' : ''");
        			this.div_cont.form.grd_right.setCellProperty("body", 8, "cssclass", "expr:dataset.getColumn(currow,'FALL_CLEAR_YN') == 'S' ? 'CellYellow_C' : dataset.getColumn(currow,'BAND_CLEAR_YN') == 'N' ? 'CellYellow_C' : ''");
        			this.div_cont.form.grd_right.setCellProperty("body", 9, "cssclass", "expr:dataset.getColumn(currow,'FALL_CLEAR_YN') == 'S' ? 'CellYellow_C' : dataset.getColumn(currow,'BAND_CLEAR_YN') == 'N' ? 'CellYellow_C' : ''");
        			this.div_cont.form.grd_right.setCellProperty("body", 10, "cssclass", "expr:dataset.getColumn(currow,'FALL_CLEAR_YN') == 'S' ? 'CellYellow_C' : dataset.getColumn(currow,'BAND_CLEAR_YN') == 'N' ? 'CellYellow_C' : ''");
        			this.div_cont.form.grd_right.setCellProperty("body", 11, "cssclass", "expr:dataset.getColumn(currow,'FALL_CLEAR_YN') == 'S' ? 'CellYellow_C' : dataset.getColumn(currow,'BAND_CLEAR_YN') == 'N' ? 'CellYellow_C' : ''");
        		}
        	}
        	else
        	{
        		Sct.alert(this, "", strErrorMsg);
        	}
        };


        this.fn_setComboDs = function(obj)
        {
             var comboDsParamArr = [
        //                          { outDsName : "ds_location", sqlId : "NUA101CT.NUA101CT_DS_LOCATION_S", param : this.ds_search, bEmptyRow : true}
        //                        , { outDsName : "ds_room", sqlId : "NUA101CT.NUA101CT_DS_ROOM_S",param : this.ds_search, bEmptyRow : true}
        							{ outDsName : "ds_area", sqlId : "CM_MONITOR_PP.CM_MOTITOR_PP_DS_AREA_S",param : {COMPANY_CD : fv_companyCd}, bEmptyRow : true} // 층 조회
        						  , { outDsName : "ds_mon_area", sqlId : "CM_MONITOR_PP.CM_MOTITOR_PP_DS_MON_AREA_S",param : {COMPANY_CD : fv_companyCd}, bEmptyRow : true} // 생활실 전체 조회
                            ];
           this.gfn_setComboDs(obj, comboDsParamArr);
        }

        //생활실 조회(outDatasets, 층 데이터)
        this.fn_location_search = function (outDs, col)
        {
        	var svcId = "location_search";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = outDs+"=output1";
        	var argument = "method=getList "
        		+ "sqlId=NUA101CT.NUA101CT_DS_LOCATION_S "
        		+ " COMPANY_CD="+fv_companyCd
        		+ " AREA="+col;

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);
        };

        //검색조건 층 콤보박스 변경 이벤트
        this.div_search_cmb_area_onitemchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0, "AREA", "");
        };
        this.div_search_cmb_location_onitemchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0, "MON_AREA", "");
        };
        this.div_search_btn_close_onclick = function(obj,e)
        {
        	this.close();
        };



        this.div_cont_grd_left_oncellclick = function(obj,e)
        {
        	if(e.col==11){
        	//낙상기능의 삭제로 FALL_CLEAR_YN == 'N' >> FALL_CLEAR_YN == 'S' (기능복구시 N으로 변경)
        		if(this.ds_left.getColumn(e.row,"FALL_CLEAR_YN")=="S"){
        			var param = {
        				RES_ID : this.ds_left.getColumn(e.row, "RES_ID"),
        				RES_NM : this.ds_left.getColumn(e.row, "NAME"),
        				AGE : this.ds_left.getColumn(e.row, "AGE_SEX"),
        				AREA : this.ds_left.getColumn(e.row, "AREA"),
        				TM : this.ds_left.getColumn(e.row, "DIA_TIME"),
        				DTTM : this.ds_left.getColumn(e.row, "FALL_DT")
        			};
        			Sct.popup(this, "FALL_PP", 326, 226, "", param, "CM_POP::CM_FALL_PP.xfdl", "fn_popCallback");
        		}
        	}
        	if(e.col==10){
        		if(this.ds_left.getColumn(e.row,"BAND_CLEAR_YN")=="N"){
        			var param = {
        				RES_ID : this.ds_left.getColumn(e.row, "RES_ID"),
        				RES_NM : this.ds_left.getColumn(e.row, "NAME"),
        				AGE : this.ds_left.getColumn(e.row, "AGE_SEX"),
        				AREA : this.ds_left.getColumn(e.row, "AREA"),
        				TM : this.ds_left.getColumn(e.row, "BAN_TIME"),
        				DTTM : this.ds_left.getColumn(e.row, "BAN_DT")
        			};
        			Sct.popup(this, "BAND_PP", 326, 226, "", param, "CM_POP::CM_BAND_PP.xfdl", "fn_popCallback");
        		}
        	}

        };
        this.fn_popCallback = function(){
        	this.fn_search();
        }
        this.div_cont_grd_right_oncellclick = function(obj,e)
        {
        	if(e.col==11){
        	//낙상기능의 삭제로 FALL_CLEAR_YN == 'N' >> FALL_CLEAR_YN == 'S' (기능복구시 N으로 변경)
        		if(this.ds_right.getColumn(e.row,"FALL_CLEAR_YN")=="S"){
        			var param = {
        				RES_ID : this.ds_right.getColumn(e.row, "RES_ID"),
        				RES_NM : this.ds_right.getColumn(e.row, "NAME"),
        				AGE : this.ds_right.getColumn(e.row, "AGE_SEX"),
        				AREA : this.ds_right.getColumn(e.row, "AREA"),
        				TM : this.ds_right.getColumn(e.row, "DIA_TIME"),
        				DTTM : this.ds_right.getColumn(e.row, "FALL_DT")
        			};
        			Sct.popup(this, "FALL_PP", 326, 226, "", param, "CM_POP::CM_FALL_PP.xfdl", "fn_popCallback");
        		}
        	}
        	if(e.col==10){
        		if(this.ds_right.getColumn(e.row,"BAND_CLEAR_YN")=="N"){
        			var param = {
        				RES_ID : this.ds_right.getColumn(e.row, "RES_ID"),
        				RES_NM : this.ds_right.getColumn(e.row, "NAME"),
        				AGE : this.ds_right.getColumn(e.row, "AGE_SEX"),
        				AREA : this.ds_right.getColumn(e.row, "AREA"),
        				TM : this.ds_right.getColumn(e.row, "BAN_TIME"),
        				DTTM : this.ds_right.getColumn(e.row, "BAN_DT")
        			};
        			Sct.popup(this, "BAND_PP", 326, 226, "", param, "CM_POP::CM_BAND_PP.xfdl", "fn_popCallback");
        		}
        	}
        };

        this.div_search_btn_search_onclick = function(obj,e)
        {
        	this.fn_search();
        };

        this.div_search_btn_4div_onclick = function(obj,e)
        {
        	newObj.getOwnerFrame().set_formurl("NU::NUA802QR.xfdl");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.COMMON_CODE_onload,this);
            this.addEventHandler("ontimer",this.COMMON_CODE_ontimer,this);
            this.div_search.form.btn_close.addEventHandler("onclick",this.div_search_btn_close_onclick,this);
            this.div_search.form.cmb_location.addEventHandler("onitemchanged",this.div_search_cmb_location_onitemchanged,this);
            this.div_search.form.cmb_area.addEventHandler("onitemchanged",this.div_search_cmb_area_onitemchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.div_search_btn_search_onclick,this);
            this.div_search.form.btn_4div.addEventHandler("onclick",this.div_search_btn_4div_onclick,this);
            this.div_cont.form.grd_list.addEventHandler("oncelldblclick",this.div_cont_grd_list_oncelldblclick,this);
            this.div_cont.form.grd_list.addEventHandler("onheadclick",this.div_cont_grd_list_onheadclick,this);
            this.div_cont.form.div_paging.addEventHandler("onclick",this.div_cont_div_paging_onclick,this);
            this.div_cont.form.grd_left.addEventHandler("oncelldblclick",this.div_cont_grd_list_oncelldblclick,this);
            this.div_cont.form.grd_left.addEventHandler("onheadclick",this.div_cont_grd_list_onheadclick,this);
            this.div_cont.form.grd_left.addEventHandler("oncellclick",this.div_cont_grd_left_oncellclick,this);
            this.div_cont.form.grd_right.addEventHandler("onheadclick",this.div_cont_grd_list_onheadclick,this);
            this.div_cont.form.grd_right.addEventHandler("oncellclick",this.div_cont_grd_right_oncellclick,this);
        };
        this.loadIncludeScript("NUA801QR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
