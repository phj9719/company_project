(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("게시판");
            if (Form == this.constructor)
            {
                this._setFormPosition(1370,734);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"COMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRPCD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PASSWD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM_CHI\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INOUT_USER_TP\" type=\"STRING\" size=\"256\"/><Column id=\"SRM_TP\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CELL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"DEF_LANG\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH1\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH2\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH3\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH4\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH5\" type=\"STRING\" size=\"256\"/><Column id=\"VALID_PERIOD_FR\" type=\"STRING\" size=\"256\"/><Column id=\"VALID_PERIOD_TO\" type=\"STRING\" size=\"256\"/><Column id=\"VALID_PASSWD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0",null,"327","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("div_WF_searchBg");
            obj.set_background("silver");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","9","13","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("회사코드");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit00","112","13","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","9","47","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("회사 사업장 코드");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit01","112","47","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","9","81","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit02","112","81","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","9","115","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit03","112","115","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","9","149","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit04","112","149","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","281","13","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("권한");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit05","384","13","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","281","47","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("한글명");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit06","384","47","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","281","81","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("영문명");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit07","384","81","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static08","281","115","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("한자명");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit08","384","115","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static09","281","149","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("사용YN");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit09","384","149","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static010","555","13","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("재직YN");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit010","658","13","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static011","555","47","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("직급코드");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit011","658","47","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static012","555","81","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("직급명");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit012","658","81","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static013","555","115","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_text("직급코드");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit013","658","115","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static014","555","149","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_text("직급명");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit014","658","149","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static015","829","13","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_text("내외부사용자구분");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit015","932","13","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static016","829","48","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_text("공급사구분");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit016","932","48","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static017","829","83","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_text("업무전화번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit017","932","83","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static018","829","118","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_text("핸드폰번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit018","932","118","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static019","829","153","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_text("팩스번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit019","932","153","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static020","1104","13","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit020","1207","13","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static021","1104","48","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_text("사용자 기본언어");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit021","1207","48","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static022","1104","83","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_text("기타권한1");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit022","1207","83","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static023","1104","118","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_text("기타권한2");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit023","1207","118","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static024","1104","153","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            obj.set_text("기타권한3");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit024","1207","153","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static21","9","183","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("58");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit21","112","183","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("59");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static22","9","217","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("60");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit22","112","217","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("61");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static23","9","251","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("62");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit23","112","251","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("63");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit24","384","183","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("64");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static24","281","183","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("65");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static25","281","217","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("66");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit25","384","217","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("67");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static26","281","251","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("68");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit26","384","251","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("69");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit27","658","183","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("70");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static27","555","183","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("71");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static28","555","217","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("72");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit28","658","217","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("73");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static29","555","251","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("74");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit29","658","251","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("75");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit30","932","188","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("76");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static30","829","188","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("77");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static31","829","223","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("78");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit31","932","223","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("79");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static32","829","258","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("80");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit32","932","258","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("81");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit33","1207","188","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("82");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static33","1104","188","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("83");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static34","1104","223","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("84");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit34","1207","223","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("85");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static35","1104","258","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("86");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit35","1207","258","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("87");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit36","112","285","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("88");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static36","9","285","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("89");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static37","281","285","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("90");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit37","384","285","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("91");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static38","555","285","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("92");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit38","658","285","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("93");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static39","829","293","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("94");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit39","932","293","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("95");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static40","1104","293","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("96");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit40","1207","293","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("97");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_grid_top","0","336",null,"23","1188",null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","50","3","132","16",null,null,null,null,null,null,this.div_grid_top.form);
            obj.set_taborder("5");
            obj.set_text("Records Found");
            obj.set_cssclass("sta_WF_GridFound2");
            this.div_grid_top.addChild(obj.name, obj);

            obj = new Static("sta_total_cnt","0","3","46","16",null,null,null,null,null,null,this.div_grid_top.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_GridFound");
            obj.set_text("0");
            this.div_grid_top.addChild(obj.name, obj);

            obj = new Div("div_grid_bottom","0",null,null,"20","0","30",null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bg","0","0",null,null,"0","0",null,null,null,null,this.div_grid_bottom.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_GridDis");
            this.div_grid_bottom.addChild(obj.name, obj);

            obj = new Static("sta_grid_cnt",null,"0","90","20","0",null,null,null,null,null,this.div_grid_bottom.form);
            obj.set_taborder("19");
            obj.set_text("Rows : 0");
            this.div_grid_bottom.addChild(obj.name, obj);

            obj = new Static("sta_msg","6","0",null,"20","137",null,null,null,null,null,this.div_grid_bottom.form);
            obj.set_taborder("20");
            obj.set_text("There is no data.");
            obj.set_color("rgba(68,68,68,1)");
            this.div_grid_bottom.addChild(obj.name, obj);

            obj = new Button("btn_find",null,"2","29","16","132",null,null,null,null,null,this.div_grid_bottom.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_find");
            this.div_grid_bottom.addChild(obj.name, obj);

            obj = new Button("btn_format",null,"2","29","16","164",null,null,null,null,null,this.div_grid_bottom.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_format");
            this.div_grid_bottom.addChild(obj.name, obj);

            obj = new Button("btn_excel00",null,"2","29","16","100",null,null,null,null,null,this.div_grid_bottom.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_xls");
            this.div_grid_bottom.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","365",null,null,"0","75",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_list");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"8\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"32\"/><Column size=\"200\"/><Column size=\"32\"/><Column size=\"200\"/><Column size=\"8\"/><Column size=\"8\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"8\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"회사코드\"/><Cell col=\"1\" text=\"회사 사업장 코드\"/><Cell col=\"2\" text=\"아이디\"/><Cell col=\"3\" text=\"사번\"/><Cell col=\"4\" text=\"비밀번호\"/><Cell col=\"5\" text=\"권한\"/><Cell col=\"6\" text=\"한글명\"/><Cell col=\"7\" text=\"영문명\"/><Cell col=\"8\" text=\"한자명\"/><Cell col=\"9\" text=\"사용YN\"/><Cell col=\"10\" text=\"재직YN\"/><Cell col=\"11\" text=\"직급코드\"/><Cell col=\"12\" text=\"직급명\"/><Cell col=\"13\" text=\"직급코드\"/><Cell col=\"14\" text=\"직급명\"/><Cell col=\"15\" text=\"내외부사용자구분\"/><Cell col=\"16\" text=\"공급사구분\"/><Cell col=\"17\" text=\"업무전화번호\"/><Cell col=\"18\" text=\"핸드폰번호\"/><Cell col=\"19\" text=\"팩스번호\"/><Cell col=\"20\" text=\"이메일\"/><Cell col=\"21\" text=\"사용자 기본언어\"/><Cell col=\"22\" text=\"기타권한1\"/><Cell col=\"23\" text=\"기타권한2\"/><Cell col=\"24\" text=\"기타권한3\"/><Cell col=\"25\" text=\"기타권한4\"/><Cell col=\"26\" text=\"기타권한5\"/><Cell col=\"27\" text=\"유효기간 시작일\"/><Cell col=\"28\" text=\"유효기간 종료일\"/><Cell col=\"29\" text=\"비밀번호 완료일\"/><Cell col=\"30\" text=\"등록 프로그램ID\"/><Cell col=\"31\" text=\"최초등록자ID\"/><Cell col=\"32\" text=\"최초등록시간\"/><Cell col=\"33\" text=\"최초등록스탬프\"/><Cell col=\"34\" text=\"최초등록로컬스탬프\"/><Cell col=\"35\" text=\"최초등록IP\"/><Cell col=\"36\" text=\"수정 프로그램ID\"/><Cell col=\"37\" text=\"수정등록자\"/><Cell col=\"38\" text=\"수정등록시간\"/><Cell col=\"39\" text=\"수정등록스탬프\"/><Cell col=\"40\" text=\"수정등록로컬스탬프\"/><Cell col=\"41\" text=\"수정등록IP\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"text\" text=\"bind:COMP_CD\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:COMP_GRPCD\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:USER_ID\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" text=\"bind:USER_NO\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" text=\"bind:USER_PASSWD\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" text=\"bind:USER_AUTH\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"text\" text=\"bind:USER_NM_KOR\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"text\" text=\"bind:USER_NM_ENG\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"text\" text=\"bind:USER_NM_CHI\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"text\" text=\"bind:USE_YN\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"text\" text=\"bind:WORK_YN\"/><Cell col=\"11\" displaytype=\"text\" edittype=\"text\" text=\"bind:DEPT_CD\"/><Cell col=\"12\" displaytype=\"text\" edittype=\"text\" text=\"bind:DEPT_NM\"/><Cell col=\"13\" displaytype=\"text\" edittype=\"text\" text=\"bind:GRADE_CD\"/><Cell col=\"14\" displaytype=\"text\" edittype=\"text\" text=\"bind:GRADE_NM\"/><Cell col=\"15\" displaytype=\"text\" edittype=\"text\" text=\"bind:INOUT_USER_TP\"/><Cell col=\"16\" displaytype=\"text\" edittype=\"text\" text=\"bind:SRM_TP\"/><Cell col=\"17\" displaytype=\"text\" edittype=\"text\" text=\"bind:TEL_NO\"/><Cell col=\"18\" displaytype=\"text\" edittype=\"text\" text=\"bind:CELL_NO\"/><Cell col=\"19\" displaytype=\"text\" edittype=\"text\" text=\"bind:FAX_NO\"/><Cell col=\"20\" displaytype=\"text\" edittype=\"text\" text=\"bind:EMAIL\"/><Cell col=\"21\" displaytype=\"text\" edittype=\"text\" text=\"bind:DEF_LANG\"/><Cell col=\"22\" displaytype=\"text\" edittype=\"text\" text=\"bind:AUTH1\"/><Cell col=\"23\" displaytype=\"text\" edittype=\"text\" text=\"bind:AUTH2\"/><Cell col=\"24\" displaytype=\"text\" edittype=\"text\" text=\"bind:AUTH3\"/><Cell col=\"25\" displaytype=\"text\" edittype=\"text\" text=\"bind:AUTH4\"/><Cell col=\"26\" displaytype=\"text\" edittype=\"text\" text=\"bind:AUTH5\"/><Cell col=\"27\" displaytype=\"date\" edittype=\"date\" text=\"bind:VALID_PERIOD_FR\" maskchar=\"####-##-##\"/><Cell col=\"28\" displaytype=\"date\" edittype=\"date\" text=\"bind:VALID_PERIOD_TO\" maskchar=\"####-##-##\"/><Cell col=\"29\" displaytype=\"text\" edittype=\"text\" text=\"bind:VALID_PASSWD_DT\"/><Cell col=\"30\" displaytype=\"text\" edittype=\"text\" text=\"bind:REG_PGM_ID\"/><Cell col=\"31\" displaytype=\"text\" edittype=\"text\" text=\"bind:REG_USER\"/><Cell col=\"32\" displaytype=\"text\" edittype=\"text\" text=\"bind:REG_DT\"/><Cell col=\"33\" displaytype=\"text\" edittype=\"text\" text=\"bind:REG_DT_CURR\"/><Cell col=\"34\" displaytype=\"text\" edittype=\"text\" text=\"bind:REG_DT_LOC\"/><Cell col=\"35\" displaytype=\"text\" edittype=\"text\" text=\"bind:REG_IP\"/><Cell col=\"36\" displaytype=\"text\" edittype=\"text\" text=\"bind:MOD_PGM_ID\"/><Cell col=\"37\" displaytype=\"text\" edittype=\"text\" text=\"bind:MOD_USER\"/><Cell col=\"38\" displaytype=\"text\" edittype=\"text\" text=\"bind:MOD_DT\"/><Cell col=\"39\" displaytype=\"text\" edittype=\"text\" text=\"bind:MOD_DT_CURR\"/><Cell col=\"40\" displaytype=\"text\" edittype=\"text\" text=\"bind:MOD_DT_LOC\"/><Cell col=\"41\" displaytype=\"text\" edittype=\"text\" text=\"bind:MOD_IP\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_bottom","0",null,null,"24","0","0",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"0","60","24","15",null,null,null,null,null,this.div_bottom.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.div_bottom.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"336","57","23","189",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"336","58","23","1",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"336","58","23","64",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_create",null,"336","57","23","127",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("글쓰기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_create00",null,"336","57","23","251",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_background("crimson");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1370,734,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.Edit00","value","ds_list","COMP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.Edit01","value","ds_list","COMP_GRPCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.Edit02","value","ds_list","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.Edit03","value","ds_list","USER_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.Edit04","value","ds_list","USER_PASSWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.Edit05","value","ds_list","USER_AUTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.Edit06","value","ds_list","USER_NM_KOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.Edit07","value","ds_list","USER_NM_ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_search.form.Edit08","value","ds_list","USER_NM_CHI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_search.form.Edit09","value","ds_list","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_search.form.Edit010","value","ds_list","WORK_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_search.form.Edit011","value","ds_list","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_search.form.Edit012","value","ds_list","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_search.form.Edit013","value","ds_list","GRADE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_search.form.Edit014","value","ds_list","GRADE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_search.form.Edit015","value","ds_list","INOUT_USER_TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_search.form.Edit016","value","ds_list","SRM_TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_search.form.Edit017","value","ds_list","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_search.form.Edit018","value","ds_list","CELL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_search.form.Edit019","value","ds_list","FAX_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_search.form.Edit020","value","ds_list","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_search.form.Edit021","value","ds_list","DEF_LANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_search.form.Edit022","value","ds_list","AUTH1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_search.form.Edit023","value","ds_list","AUTH2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_search.form.Edit024","value","ds_list","AUTH3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_search.Edit025","value","ds_list","AUTH4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_search.Edit026","value","ds_list","AUTH5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_search.Calendar027","value","ds_list","VALID_PERIOD_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_search.Calendar028","value","ds_list","VALID_PERIOD_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_search.Edit029","value","ds_list","VALID_PASSWD_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_search.Edit030","value","ds_list","REG_PGM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_search.Edit031","value","ds_list","REG_USER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_search.Edit032","value","ds_list","REG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_search.Edit033","value","ds_list","REG_DT_CURR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_search.Edit034","value","ds_list","REG_DT_LOC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_search.Edit035","value","ds_list","REG_IP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_search.Edit036","value","ds_list","MOD_PGM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_search.Edit037","value","ds_list","MOD_USER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_search.Edit038","value","ds_list","MOD_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_search.Edit039","value","ds_list","MOD_DT_CURR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_search.Edit040","value","ds_list","MOD_DT_LOC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_search.Edit041","value","ds_list","MOD_IP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_search.form.Edit21","value","ds_list","USER_PASSWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_search.form.Edit22","value","ds_list","USER_PASSWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_search.form.Edit23","value","ds_list","USER_PASSWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_search.form.Edit24","value","ds_list","USER_PASSWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_search.form.Edit25","value","ds_list","USER_PASSWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_search.form.Edit26","value","ds_list","USER_PASSWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_search.form.Edit27","value","ds_list","USER_PASSWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_search.form.Edit28","value","ds_list","USER_PASSWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_search.form.Edit29","value","ds_list","USER_PASSWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_search.form.Edit30","value","ds_list","USER_PASSWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_search.form.Edit31","value","ds_list","USER_PASSWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_search.form.Edit32","value","ds_list","USER_PASSWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_search.form.Edit33","value","ds_list","USER_PASSWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_search.form.Edit34","value","ds_list","USER_PASSWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_search.form.Edit35","value","ds_list","USER_PASSWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_search.form.Edit36","value","ds_list","USER_PASSWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_search.form.Edit37","value","ds_list","USER_PASSWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_search.form.Edit38","value","ds_list","USER_PASSWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_search.form.Edit39","value","ds_list","USER_PASSWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","div_search.form.Edit40","value","ds_list","USER_PASSWD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CM_USERlist.xfdl","lib::comLib.xjs");
        this.registerScript("CM_USERlist.xfdl", function() {
        /***********************************************************************************
         AUTO-CREATE
         Refactored BY R
         DATE : 2017-33-01 01:33
         /***********************************************************************************
         * Common Library
         ***********************************************************************************/
        this.executeIncludeScript("lib::comLib.xjs"); /*include "lib::comLib.xjs"*/
        /***********************************************************************************
         * Form Event
         ***********************************************************************************/
        this.form_onload = function (obj, e)
        {
        	// 폼로드시 공통함수
        	Sct.onLoad(obj, e);
        };

        // 사용자 정의 폼 로드 함수(form_init 고정)
        this.form_init = function (obj)
        {
        	this.fn_search();
        };

        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        /* callBack함수(strSvcId - 서비스 아이디, nErrorCode - 에러코드, strErrorMsg - 에러메시지) */
        this.fn_callBack = function (strSvcId, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode < 0)
        	{
        		// 에러메세지 출력부분
        		return alert("에러 : " + strErrorMsg);
        	}

        	if (strSvcId == "search")
        	{
        		// Service ID에 따른 후처리 부분
        		this.fn_search_post();
        	}

        	if (strSvcId == "save")
        	{
        		this.fn_search("noCon");
        	}
        };

        // 팝업 후처리 작업
        this.fn_popupAfter = function (sPopupId, val)
        {
        };

        // 페이징 후처리 작업
        this.fn_pageAfter = function (sObjId, nViewPage)
        {
        };

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // 목록조회 Search
        this.fn_search = function ()
        {
        	var con0 = this.div_search.form.Edit00.value;
        	var con1 = this.div_search.form.Edit01.value;
        	var con2 = this.div_search.form.Edit02.value;
        	var con3 = this.div_search.form.Edit03.value;
        	var con4 = this.div_search.form.Edit04.value;
        	var con5 = this.div_search.form.Edit05.value;
        	var con6 = this.div_search.form.Edit06.value;
        	var con7 = this.div_search.form.Edit07.value;
        	var con8 = this.div_search.form.Edit08.value;
        	var con9 = this.div_search.form.Edit09.value;
        	var con10 = this.div_search.form.Edit010.value;
        	var con11 = this.div_search.form.Edit011.value;
        	var con12 = this.div_search.form.Edit012.value;
        	var con13 = this.div_search.form.Edit013.value;
        	var con14 = this.div_search.form.Edit014.value;
        	var con15 = this.div_search.form.Edit015.value;
        	var con16 = this.div_search.form.Edit016.value;
        	var con17 = this.div_search.form.Edit017.value;
        	var con18 = this.div_search.form.Edit018.value;
        	var con19 = this.div_search.form.Edit019.value;
        	var con20 = this.div_search.form.Edit020.value;
        	var con21 = this.div_search.form.Edit021.value;
        	var con22 = this.div_search.form.Edit022.value;
        	var con23 = this.div_search.form.Edit023.value;
        	var con24 = this.div_search.form.Edit024.value;
        	var con25 = this.div_search.Edit025.value;
        	var con26 = this.div_search.Edit026.value;
        	var con27 = this.div_search.Calendar027.value;
        	var con28 = this.div_search.Calendar028.value;
        	var con29 = this.div_search.Edit029.value;
        	var con30 = this.div_search.Edit030.value;
        	var con31 = this.div_search.Edit031.value;
        	var con32 = this.div_search.Edit032.value;
        	var con33 = this.div_search.Edit033.value;
        	var con34 = this.div_search.Edit034.value;
        	var con35 = this.div_search.Edit035.value;
        	var con36 = this.div_search.Edit036.value;
        	var con37 = this.div_search.Edit037.value;
        	var con38 = this.div_search.Edit038.value;
        	var con39 = this.div_search.Edit039.value;
        	var con40 = this.div_search.Edit040.value;
        	var con41 = this.div_search.Edit041.value;
        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_list=output1";
        	var argument = "method=getList "
        		 + "sqlId=selectCM_USERList ";
        	var callbackFunc = "fn_logincallback";
        	if (con0 != null || con1 != null || con2 != null || con3 != null || con4 != null || con5 != null || con6 != null || con7 != null || con8 != null || con9 != null || con10 != null || con11 != null || con12 != null || con13 != null || con14 != null || con15 != null || con16 != null || con17 != null || con18 != null || con19 != null || con20 != null || con21 != null || con22 != null || con23 != null || con24 != null || con25 != null || con26 != null || con27 != null || con28 != null || con29 != null || con30 != null || con31 != null || con32 != null || con33 != null || con34 != null || con35 != null || con36 != null || con37 != null || con38 != null || con39 != null || con40 != null || con41 != null)
        	{
        		argument += "COMP_CD=con0 ";
        		argument += "COMP_GRPCD=con1 ";
        		argument += "USER_ID=con2 ";
        		argument += "USER_NO=con3 ";
        		argument += "USER_PASSWD=con4 ";
        		argument += "USER_AUTH=con5 ";
        		argument += "USER_NM_KOR=con6 ";
        		argument += "USER_NM_ENG=con7 ";
        		argument += "USER_NM_CHI=con8 ";
        		argument += "USE_YN=con9 ";
        		argument += "WORK_YN=con10 ";
        		argument += "DEPT_CD=con11 ";
        		argument += "DEPT_NM=con12 ";
        		argument += "GRADE_CD=con13 ";
        		argument += "GRADE_NM=con14 ";
        		argument += "INOUT_USER_TP=con15 ";
        		argument += "SRM_TP=con16 ";
        		argument += "TEL_NO=con17 ";
        		argument += "CELL_NO=con18 ";
        		argument += "FAX_NO=con19 ";
        		argument += "EMAIL=con20 ";
        		argument += "DEF_LANG=con21 ";
        		argument += "AUTH1=con22 ";
        		argument += "AUTH2=con23 ";
        		argument += "AUTH3=con24 ";
        		argument += "AUTH4=con25 ";
        		argument += "AUTH5=con26 ";
        		argument += "VALID_PERIOD_FR=con27 ";
        		argument += "VALID_PERIOD_TO=con28 ";
        		argument += "VALID_PASSWD_DT=con29 ";
        		argument += "REG_PGM_ID=con30 ";
        		argument += "REG_USER=con31 ";
        		argument += "REG_DT=con32 ";
        		argument += "REG_DT_CURR=con33 ";
        		argument += "REG_DT_LOC=con34 ";
        		argument += "REG_IP=con35 ";
        		argument += "MOD_PGM_ID=con36 ";
        		argument += "MOD_USER=con37 ";
        		argument += "MOD_DT=con38 ";
        		argument += "MOD_DT_CURR=con39 ";
        		argument += "MOD_DT_LOC=con40 ";
        		argument += "MOD_IP=con41 ";
        		this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        	}
        	else
        	{
        		this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        	}
        };

        // 저장
        this.fn_save = function ()
        {
        	var svcId = "save";
        	var params = "commonController.do";

        	var inDatasets = "input1=ds_list:U";
        	;
        	var outDatasets = "";
        	var argument = "method=save "
        		 + "sqlId=selectCM_USERList ";
        	+"forceSqlFlag=N";

        	this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 조회 후처리
        this.fn_search_post = function ()
        {
        	// 페이징 없는 경우
        	var nTotalCnt = this.ds_list.rowcount;
        	var nCnt = this.ds_list.rowcount;

        	this.div_grid_top.form.sta_total_cnt.set_text(nTotalCnt);
        	this.div_grid_bottom.form.sta_msg.set_text("Select has been complted successfully.");
        	this.div_grid_bottom.form.sta_grid_cnt.set_text("Rows : " + nCnt);
        };

        this.fn_onkeyup = function (obj, e)
        {
        	if (e.keycode == 13)
        	{
        		this.fn_search();
        	}
        };

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        this.div_search_btn_search_onclick = function (obj, e)
        {
        	this.fn_search();
        };



        // 그룹 추가 버튼 클릭시 이벤트 처리
        this.fn_add = function (obj, e)
        {
        	var nRow = this.ds_list.addRow();
        };


        // 게시판 글목록 삭제 버튼 클릭시 이벤트 처리
        this.fn_delete = function (obj, e)
        {
        	var nRow = this.ds_list.rowposition;
        	trace(this.ds_list.rowposition);
        	trace(nRow);
        	if (nRow < 0)
        	{
        		// alert
        		// alert("데이터를 선택해주세요");
        	}
        	if (nexacro.getApplication().confirm(nRow + "행의 데이터를 삭제하시겠습니까?"))
        	{
        		this.ds_list.deleteRow(nRow);
        		this.fn_save();
        	}
        };

        this.div_bottom_btn_save_onclick = function (obj, e)
        {
        	if (nexacro.getApplication().confirm("confirm", "Do you want to save?"))
        	{
        		this.fn_save();
        	}
        };

        this.div_grid_bottom_btn_excel_onclick = function (obj, e)
        {
        	// Ex.core.exportExcel(this.grd_list);
        };

        this.div_grid_bottom_btn_find_onclick = function (obj, e)
        {
        	// this.gfn_findPopup(this.grd_list);
        };

        this.div_grid_top_btn_create_onclick = function (obj, e)
        {
        	var args = {
        		arg : "arg1"
        	};

        	// var rtn = Ex.core.popup(this,"게시물 작성","comm::webeditor.xfdl",args,"");
        };

        // 팝업 Callback
        this.fn_popupAfter = function (sPopupId, Variant)
        {
        	var rtn = this.gfn_getPopupRtn();

        	if (!Eco.isEmpty(this.Edit00.value))
        	{
        		var sRow = this.ds_list.addRow();

        		this.ds_list.setColumn(sRow, "TITLE", rtn[0]);
        		this.ds_list.setColumn(sRow, "CONTENTS", rtn[1]);
        	}
        };

        this.grd_list_oncelldblclick = function (obj, e)
        {
        	var argTitle = this.ds_list.getColumn(this.ds_list.rowposition, "TITLE");

        	var argContents = this.ds_list.getColumn(this.ds_list.rowposition, "CONTENTS");



        	var args = {
        		argTitle : argTitle,
        		argContents : argContents
        	};



        	// var rtn = Ex.core.popup(this,"게시물 작성","comm::webeditor.xfdl",args,"");
        }
        ;

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_grid_bottom.form.btn_find.addEventHandler("onclick",this.div_grid_bottom_btn_find_onclick,this);
            this.div_grid_bottom.form.btn_format.addEventHandler("onclick",this.div_grid_bottom00_btn_format_onclick,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.div_bottom.form.btn_save.addEventHandler("onclick",this.div_bottom_btn_save_onclick,this);
            this.btn_save.addEventHandler("onclick",this.div_bottom_btn_save_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.fn_delete,this);
            this.btn_add.addEventHandler("onclick",this.fn_add,this);
            this.btn_create.addEventHandler("onclick",this.div_grid_top_btn_create_onclick,this);
            this.btn_create00.addEventHandler("onclick",this.fn_search,this);
        };
        this.loadIncludeScript("CM_USERlist.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
