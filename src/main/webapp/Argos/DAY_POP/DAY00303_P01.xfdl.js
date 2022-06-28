(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00303_P01");
            this.set_titletext("물리(작업)치료·기능회복훈련계획");
            if (Form == this.constructor)
            {
                this._setFormPosition(1700,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"m_jumin1\" type=\"STRING\" size=\"256\"/><Column id=\"생년월일\" type=\"STRING\" size=\"256\"/><Column id=\"나이\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"입소일\" type=\"STRING\" size=\"256\"/><Column id=\"m_reday\" type=\"STRING\" size=\"256\"/><Column id=\"퇴소일\" type=\"STRING\" size=\"256\"/><Column id=\"평가일\" type=\"DATE\" size=\"256\"/><Column id=\"치료그룹\" type=\"STRING\" size=\"256\"/><Column id=\"m_history\" type=\"STRING\" size=\"256\"/><Column id=\"거주현황\" type=\"STRING\" size=\"256\"/><Column id=\"계획시작\" type=\"DATE\" size=\"256\"/><Column id=\"계획종료\" type=\"DATE\" size=\"256\"/><Column id=\"평가자명\" type=\"STRING\" size=\"256\"/><Column id=\"평가자직종\" type=\"STRING\" size=\"256\"/><Column id=\"평가자코드\" type=\"STRING\" size=\"256\"/><Column id=\"ha_number\" type=\"STRING\" size=\"256\"/><Column id=\"작성번호\" type=\"STRING\" size=\"256\"/><Column id=\"운동관절1\" type=\"STRING\" size=\"256\"/><Column id=\"운동관절2\" type=\"STRING\" size=\"256\"/><Column id=\"운동관절3\" type=\"STRING\" size=\"256\"/><Column id=\"운동관절4\" type=\"STRING\" size=\"256\"/><Column id=\"운동관절5\" type=\"STRING\" size=\"256\"/><Column id=\"운동관절6\" type=\"STRING\" size=\"256\"/><Column id=\"운동관절7\" type=\"STRING\" size=\"256\"/><Column id=\"운동관절8\" type=\"STRING\" size=\"256\"/><Column id=\"운동관절9\" type=\"STRING\" size=\"256\"/><Column id=\"운동관절10\" type=\"STRING\" size=\"256\"/><Column id=\"exer\" type=\"STRING\" size=\"256\"/><Column id=\"운동점수1\" type=\"STRING\" size=\"256\"/><Column id=\"운동점수2\" type=\"STRING\" size=\"256\"/><Column id=\"운동점수3\" type=\"STRING\" size=\"256\"/><Column id=\"운동점수4\" type=\"STRING\" size=\"256\"/><Column id=\"운동점수5\" type=\"STRING\" size=\"256\"/><Column id=\"운동점수6\" type=\"STRING\" size=\"256\"/><Column id=\"운동점수7\" type=\"STRING\" size=\"256\"/><Column id=\"운동점수8\" type=\"STRING\" size=\"256\"/><Column id=\"운동점수9\" type=\"STRING\" size=\"256\"/><Column id=\"운동점수10\" type=\"STRING\" size=\"256\"/><Column id=\"exes\" type=\"STRING\" size=\"256\"/><Column id=\"신체통증\" type=\"STRING\" size=\"256\"/><Column id=\"운동점수\" type=\"STRING\" size=\"256\"/><Column id=\"운동비고\" type=\"STRING\" size=\"256\"/><Column id=\"근력우상1\" type=\"STRING\" size=\"256\"/><Column id=\"근력우상2\" type=\"STRING\" size=\"256\"/><Column id=\"근력우상3\" type=\"STRING\" size=\"256\"/><Column id=\"근력우상4\" type=\"STRING\" size=\"256\"/><Column id=\"근력우상5\" type=\"STRING\" size=\"256\"/><Column id=\"근력우상6\" type=\"STRING\" size=\"256\"/><Column id=\"rightup\" type=\"STRING\" size=\"256\"/><Column id=\"근력좌상1\" type=\"STRING\" size=\"256\"/><Column id=\"근력좌상2\" type=\"STRING\" size=\"256\"/><Column id=\"근력좌상3\" type=\"STRING\" size=\"256\"/><Column id=\"근력좌상4\" type=\"STRING\" size=\"256\"/><Column id=\"근력좌상5\" type=\"STRING\" size=\"256\"/><Column id=\"근력좌상6\" type=\"STRING\" size=\"256\"/><Column id=\"leftup\" type=\"STRING\" size=\"256\"/><Column id=\"근력우하1\" type=\"STRING\" size=\"256\"/><Column id=\"근력우하2\" type=\"STRING\" size=\"256\"/><Column id=\"근력우하3\" type=\"STRING\" size=\"256\"/><Column id=\"근력우하4\" type=\"STRING\" size=\"256\"/><Column id=\"근력우하5\" type=\"STRING\" size=\"256\"/><Column id=\"근력우하6\" type=\"STRING\" size=\"256\"/><Column id=\"rightdown\" type=\"STRING\" size=\"256\"/><Column id=\"근력좌하1\" type=\"STRING\" size=\"256\"/><Column id=\"근력좌하2\" type=\"STRING\" size=\"256\"/><Column id=\"근력좌하3\" type=\"STRING\" size=\"256\"/><Column id=\"근력좌하4\" type=\"STRING\" size=\"256\"/><Column id=\"근력좌하5\" type=\"STRING\" size=\"256\"/><Column id=\"근력좌하6\" type=\"STRING\" size=\"256\"/><Column id=\"leftdown\" type=\"STRING\" size=\"256\"/><Column id=\"근력비고\" type=\"STRING\" size=\"256\"/><Column id=\"기본동작1\" type=\"STRING\" size=\"256\"/><Column id=\"기본동작2\" type=\"STRING\" size=\"256\"/><Column id=\"기본동작3\" type=\"STRING\" size=\"256\"/><Column id=\"기본동작4\" type=\"STRING\" size=\"256\"/><Column id=\"기본동작5\" type=\"STRING\" size=\"256\"/><Column id=\"기본동작6\" type=\"STRING\" size=\"256\"/><Column id=\"기본동작7\" type=\"STRING\" size=\"256\"/><Column id=\"기본동작8\" type=\"STRING\" size=\"256\"/><Column id=\"bm\" type=\"STRING\" size=\"256\"/><Column id=\"동작비고\" type=\"STRING\" size=\"256\"/><Column id=\"평정척도\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT1\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT2\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT3\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT4\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT5\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT6\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT7\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT8\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT9\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT10\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT11\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT12\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT13\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT14\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT15\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT16\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT17\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT18\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT19\" type=\"STRING\" size=\"256\"/><Column id=\"통증형RT20\" type=\"STRING\" size=\"256\"/><Column id=\"rps\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT1\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT2\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT3\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT4\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT5\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT6\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT7\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT8\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT9\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT10\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT11\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT12\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT13\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT14\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT15\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT16\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT17\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT18\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT19\" type=\"STRING\" size=\"256\"/><Column id=\"통증정RT20\" type=\"STRING\" size=\"256\"/><Column id=\"rpl\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT1\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT2\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT3\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT4\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT5\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT6\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT7\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT8\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT9\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT10\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT11\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT12\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT13\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT14\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT15\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT16\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT17\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT18\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT19\" type=\"STRING\" size=\"256\"/><Column id=\"통증형LT20\" type=\"STRING\" size=\"256\"/><Column id=\"lps\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT1\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT2\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT3\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT4\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT5\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT6\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT7\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT8\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT9\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT10\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT11\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT12\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT13\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT14\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT15\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT16\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT17\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT18\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT19\" type=\"STRING\" size=\"256\"/><Column id=\"통증정LT20\" type=\"STRING\" size=\"256\"/><Column id=\"lpl\" type=\"STRING\" size=\"256\"/><Column id=\"평균통증\" type=\"STRING\" size=\"256\"/><Column id=\"통증비고\" type=\"STRING\" size=\"256\"/><Column id=\"균형감1\" type=\"STRING\" size=\"256\"/><Column id=\"균형감2\" type=\"STRING\" size=\"256\"/><Column id=\"균형감3\" type=\"STRING\" size=\"256\"/><Column id=\"균형감4\" type=\"STRING\" size=\"256\"/><Column id=\"균형감5\" type=\"STRING\" size=\"256\"/><Column id=\"균형감6\" type=\"STRING\" size=\"256\"/><Column id=\"균형감7\" type=\"STRING\" size=\"256\"/><Column id=\"균형감8\" type=\"STRING\" size=\"256\"/><Column id=\"균형감9\" type=\"STRING\" size=\"256\"/><Column id=\"균형감10\" type=\"STRING\" size=\"256\"/><Column id=\"perspective\" type=\"STRING\" size=\"256\"/><Column id=\"균형감합계\" type=\"INT\" size=\"256\"/><Column id=\"걸음걸이1\" type=\"STRING\" size=\"256\"/><Column id=\"걸음걸이2\" type=\"STRING\" size=\"256\"/><Column id=\"걸음걸이3\" type=\"STRING\" size=\"256\"/><Column id=\"걸음걸이4\" type=\"STRING\" size=\"256\"/><Column id=\"걸음걸이5\" type=\"STRING\" size=\"256\"/><Column id=\"걸음걸이6\" type=\"STRING\" size=\"256\"/><Column id=\"걸음걸이7\" type=\"STRING\" size=\"256\"/><Column id=\"걸음걸이8\" type=\"STRING\" size=\"256\"/><Column id=\"걸음걸이9\" type=\"STRING\" size=\"256\"/><Column id=\"걸음걸이10\" type=\"STRING\" size=\"256\"/><Column id=\"walk\" type=\"STRING\" size=\"256\"/><Column id=\"걸음합계\" type=\"INT\" size=\"256\"/><Column id=\"총점\" type=\"INT\" size=\"256\"/><Column id=\"균형비고\" type=\"STRING\" size=\"256\"/><Column id=\"romrt1\" type=\"STRING\" size=\"256\"/><Column id=\"romrt2\" type=\"STRING\" size=\"256\"/><Column id=\"romrt3\" type=\"STRING\" size=\"256\"/><Column id=\"romrt4\" type=\"STRING\" size=\"256\"/><Column id=\"romrt5\" type=\"STRING\" size=\"256\"/><Column id=\"romrt6\" type=\"STRING\" size=\"256\"/><Column id=\"romrt7\" type=\"STRING\" size=\"256\"/><Column id=\"romrt8\" type=\"STRING\" size=\"256\"/><Column id=\"romrt9\" type=\"STRING\" size=\"256\"/><Column id=\"romrt10\" type=\"STRING\" size=\"256\"/><Column id=\"romrt11\" type=\"STRING\" size=\"256\"/><Column id=\"romrt12\" type=\"STRING\" size=\"256\"/><Column id=\"romrt13\" type=\"STRING\" size=\"256\"/><Column id=\"romrt14\" type=\"STRING\" size=\"256\"/><Column id=\"romrt15\" type=\"STRING\" size=\"256\"/><Column id=\"romrt16\" type=\"STRING\" size=\"256\"/><Column id=\"romrt17\" type=\"STRING\" size=\"256\"/><Column id=\"romrt18\" type=\"STRING\" size=\"256\"/><Column id=\"romrt19\" type=\"STRING\" size=\"256\"/><Column id=\"romrt20\" type=\"STRING\" size=\"256\"/><Column id=\"romrt21\" type=\"STRING\" size=\"256\"/><Column id=\"romrt22\" type=\"STRING\" size=\"256\"/><Column id=\"romrt23\" type=\"STRING\" size=\"256\"/><Column id=\"romrt\" type=\"STRING\" size=\"256\"/><Column id=\"romlt1\" type=\"STRING\" size=\"256\"/><Column id=\"romlt2\" type=\"STRING\" size=\"256\"/><Column id=\"romlt3\" type=\"STRING\" size=\"256\"/><Column id=\"romlt4\" type=\"STRING\" size=\"256\"/><Column id=\"romlt5\" type=\"STRING\" size=\"256\"/><Column id=\"romlt6\" type=\"STRING\" size=\"256\"/><Column id=\"romlt7\" type=\"STRING\" size=\"256\"/><Column id=\"romlt8\" type=\"STRING\" size=\"256\"/><Column id=\"romlt9\" type=\"STRING\" size=\"256\"/><Column id=\"romlt10\" type=\"STRING\" size=\"256\"/><Column id=\"romlt11\" type=\"STRING\" size=\"256\"/><Column id=\"romlt12\" type=\"STRING\" size=\"256\"/><Column id=\"romlt13\" type=\"STRING\" size=\"256\"/><Column id=\"romlt14\" type=\"STRING\" size=\"256\"/><Column id=\"romlt15\" type=\"STRING\" size=\"256\"/><Column id=\"romlt16\" type=\"STRING\" size=\"256\"/><Column id=\"romlt17\" type=\"STRING\" size=\"256\"/><Column id=\"romlt18\" type=\"STRING\" size=\"256\"/><Column id=\"romlt19\" type=\"STRING\" size=\"256\"/><Column id=\"romlt20\" type=\"STRING\" size=\"256\"/><Column id=\"romlt21\" type=\"STRING\" size=\"256\"/><Column id=\"romlt22\" type=\"STRING\" size=\"256\"/><Column id=\"romlt23\" type=\"STRING\" size=\"256\"/><Column id=\"romlt\" type=\"STRING\" size=\"256\"/><Column id=\"rom비고\" type=\"STRING\" size=\"256\"/><Column id=\"adl점수1\" type=\"STRING\" size=\"256\"/><Column id=\"adl점수2\" type=\"STRING\" size=\"256\"/><Column id=\"adl점수3\" type=\"STRING\" size=\"256\"/><Column id=\"adl점수4\" type=\"STRING\" size=\"256\"/><Column id=\"adl점수5\" type=\"STRING\" size=\"256\"/><Column id=\"adl점수6\" type=\"STRING\" size=\"256\"/><Column id=\"adl총점\" type=\"STRING\" size=\"256\"/><Column id=\"진단\" type=\"STRING\" size=\"256\"/><Column id=\"문제점\" type=\"STRING\" size=\"256\"/><Column id=\"장기계획\" type=\"STRING\" size=\"256\"/><Column id=\"단기계획\" type=\"STRING\" size=\"256\"/><Column id=\"치료01\" type=\"STRING\" size=\"256\"/><Column id=\"치료02\" type=\"STRING\" size=\"256\"/><Column id=\"치료03\" type=\"STRING\" size=\"256\"/><Column id=\"치료04\" type=\"STRING\" size=\"256\"/><Column id=\"치료05\" type=\"STRING\" size=\"256\"/><Column id=\"치료06\" type=\"STRING\" size=\"256\"/><Column id=\"치료07\" type=\"STRING\" size=\"256\"/><Column id=\"치료08\" type=\"STRING\" size=\"256\"/><Column id=\"치료시간\" type=\"STRING\" size=\"256\"/><Column id=\"치료시작시\" type=\"STRING\" size=\"256\"/><Column id=\"치료시작분\" type=\"STRING\" size=\"256\"/><Column id=\"치료종료시\" type=\"STRING\" size=\"256\"/><Column id=\"치료종료분\" type=\"STRING\" size=\"256\"/><Column id=\"월요일\" type=\"STRING\" size=\"256\"/><Column id=\"화요일\" type=\"STRING\" size=\"256\"/><Column id=\"수요일\" type=\"STRING\" size=\"256\"/><Column id=\"목요일\" type=\"STRING\" size=\"256\"/><Column id=\"금요일\" type=\"STRING\" size=\"256\"/><Column id=\"토요일\" type=\"STRING\" size=\"256\"/><Column id=\"일요일\" type=\"STRING\" size=\"256\"/><Column id=\"중단시작\" type=\"STRING\" size=\"256\"/><Column id=\"중단종료\" type=\"STRING\" size=\"256\"/><Column id=\"변경내역\" type=\"STRING\" size=\"256\"/><Column id=\"치부위1\" type=\"STRING\" size=\"256\"/><Column id=\"치부위2\" type=\"STRING\" size=\"256\"/><Column id=\"치부위3\" type=\"STRING\" size=\"256\"/><Column id=\"치부위4\" type=\"STRING\" size=\"256\"/><Column id=\"치부위5\" type=\"STRING\" size=\"256\"/><Column id=\"치부위6\" type=\"STRING\" size=\"256\"/><Column id=\"치부위7\" type=\"STRING\" size=\"256\"/><Column id=\"치부위8\" type=\"STRING\" size=\"256\"/><Column id=\"치부위9\" type=\"STRING\" size=\"256\"/><Column id=\"치부위10\" type=\"STRING\" size=\"256\"/><Column id=\"치부위11\" type=\"STRING\" size=\"256\"/><Column id=\"치부위12\" type=\"STRING\" size=\"256\"/><Column id=\"치부위13\" type=\"STRING\" size=\"256\"/><Column id=\"치부위14\" type=\"STRING\" size=\"256\"/><Column id=\"치부위15\" type=\"STRING\" size=\"256\"/><Column id=\"치부위16\" type=\"STRING\" size=\"256\"/><Column id=\"치부위17\" type=\"STRING\" size=\"256\"/><Column id=\"치부위18\" type=\"STRING\" size=\"256\"/><Column id=\"치부위19\" type=\"STRING\" size=\"256\"/><Column id=\"치부위20\" type=\"STRING\" size=\"256\"/><Column id=\"치부위21\" type=\"STRING\" size=\"256\"/><Column id=\"치부위22\" type=\"STRING\" size=\"256\"/><Column id=\"치부위23\" type=\"STRING\" size=\"256\"/><Column id=\"hp\" type=\"STRING\" size=\"256\"/><Column id=\"추가부위\" type=\"STRING\" size=\"256\"/><Column id=\"기능시a\" type=\"STRING\" size=\"256\"/><Column id=\"시작시a\" type=\"STRING\" size=\"256\"/><Column id=\"시작분a\" type=\"STRING\" size=\"256\"/><Column id=\"종료시a\" type=\"STRING\" size=\"256\"/><Column id=\"종료분a\" type=\"STRING\" size=\"256\"/><Column id=\"기능시b\" type=\"STRING\" size=\"256\"/><Column id=\"시작시b\" type=\"STRING\" size=\"256\"/><Column id=\"시작분b\" type=\"STRING\" size=\"256\"/><Column id=\"종료시b\" type=\"STRING\" size=\"256\"/><Column id=\"종료분b\" type=\"STRING\" size=\"256\"/><Column id=\"기능시c\" type=\"STRING\" size=\"256\"/><Column id=\"시작시c\" type=\"STRING\" size=\"256\"/><Column id=\"시작분c\" type=\"STRING\" size=\"256\"/><Column id=\"종료시c\" type=\"STRING\" size=\"256\"/><Column id=\"종료분c\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련a\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련a1\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련a2\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련a3\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련a4\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련a5\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련a6\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련a7\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련a8\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련b\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련b1\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련b2\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련b3\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련b4\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련b5\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련b6\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련b7\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련b8\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련b9\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련b10\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련b11\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련c\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련c1\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련c2\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련c3\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련c4\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련c5\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련c6\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련c7\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련c8\" type=\"STRING\" size=\"256\"/><Column id=\"훈련비고\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report", this);
            obj._setContents("<ColumnInfo><Column id=\"SIGN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ps", this);
            obj._setContents("<ColumnInfo><Column id=\"combocode\" type=\"STRING\" size=\"256\"/><Column id=\"comboname\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"combocode\">1</Col><Col id=\"comboname\">부종</Col></Row><Row><Col id=\"combocode\">2</Col><Col id=\"comboname\">통증</Col></Row><Row><Col id=\"combocode\">3</Col><Col id=\"comboname\">뻣뻣</Col></Row><Row><Col id=\"combocode\">4</Col><Col id=\"comboname\">변형</Col></Row><Row><Col id=\"combocode\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_func", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"욕구기간1\" type=\"DATE\" size=\"256\"/><Column id=\"욕구기간2\" type=\"DATE\" size=\"256\"/><Column id=\"기능자립1\" type=\"STRING\" size=\"256\"/><Column id=\"기능자립2\" type=\"STRING\" size=\"256\"/><Column id=\"기능자립3\" type=\"STRING\" size=\"256\"/><Column id=\"기능자립4\" type=\"STRING\" size=\"256\"/><Column id=\"기능자립5\" type=\"STRING\" size=\"256\"/><Column id=\"기능자립6\" type=\"STRING\" size=\"256\"/><Column id=\"기능자립7\" type=\"STRING\" size=\"256\"/><Column id=\"기능자립8\" type=\"STRING\" size=\"256\"/><Column id=\"기능자립9\" type=\"STRING\" size=\"256\"/><Column id=\"기능자립10\" type=\"STRING\" size=\"256\"/><Column id=\"기능자립11\" type=\"STRING\" size=\"256\"/><Column id=\"기능자립12\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data_temp", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"m_jumin1\" type=\"STRING\" size=\"256\"/><Column id=\"생년월일\" type=\"STRING\" size=\"256\"/><Column id=\"나이\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"입소일\" type=\"STRING\" size=\"256\"/><Column id=\"m_reday\" type=\"STRING\" size=\"256\"/><Column id=\"퇴소일\" type=\"STRING\" size=\"256\"/><Column id=\"평가일\" type=\"DATE\" size=\"256\"/><Column id=\"치료그룹\" type=\"STRING\" size=\"256\"/><Column id=\"m_history\" type=\"STRING\" size=\"256\"/><Column id=\"거주현황\" type=\"STRING\" size=\"256\"/><Column id=\"계획시작\" type=\"DATE\" size=\"256\"/><Column id=\"계획종료\" type=\"DATE\" size=\"256\"/><Column id=\"평가자명\" type=\"STRING\" size=\"256\"/><Column id=\"평가자직종\" type=\"STRING\" size=\"256\"/><Column id=\"평가자코드\" type=\"STRING\" size=\"256\"/><Column id=\"ha_number\" type=\"STRING\" size=\"256\"/><Column id=\"작성번호\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_func","10","0",null,"35","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_sign","0","5","90","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("결재란 표시");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"5","70","25","0",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report1","100","5","140","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("운동장애 Page-1");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report2","245","5","140","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_text("통증강도 Page-2");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report3","390","5","140","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("4");
            obj.set_text("균형감 Page-3,4");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report4","535","5","150","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("5");
            obj.set_text("ROM 측정 Page-5");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report5","690","5","190","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("6");
            obj.set_text("물리치료평가 (1-5 Page)");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report6","885","5","150","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("7");
            obj.set_text("ADL수행능력평가");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report7","1040","5","160","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("8");
            obj.set_text("물리치료급여계획서");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report8","1205","5","160","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("9");
            obj.set_text("기능회복훈련계획서");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report9","1370","5","190","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("10");
            obj.set_text("물리치료평가 (1-8 Page)");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Div("div_main","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","725","4","250","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_text("물리(작업)치료·기능회복훈련계획");
            obj.set_cssclass("lb01");
            this.div_main.addChild(obj.name, obj);

            obj = new Div("div_line","10","35",null,"2","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("29");
            obj.set_background("#000000");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_plan","10","5","172","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            obj.set_text("물리치료·기능훈련계획");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1","10","41","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("30");
            obj.set_text("수급자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1","92","41",null,"34","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_1","410","41","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("32");
            obj.set_text("성별·생일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2","10","74","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("작 성 일");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body2","92","74",null,"34","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_mate_code","276","49","79","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("4");
            obj.set_text("수급코드");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_mate_name","107","49","69","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("2");
            obj.set_text("수급자");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3","10","107","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("치료기간");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","92","107",null,"34","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_sex","511","49","39","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("5");
            obj.set_text("성");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_2","810","41","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("37");
            obj.set_text("생 활 실");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_enday","1421","49","69","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("8");
            obj.set_text("yyyy.mm.dd");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_3","1320","41","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("38");
            obj.set_text("입 소 일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2_1","410","74","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("치료그룹");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2_2","810","74","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("주요질환");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2_3","1320","74","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("퇴 소 일");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3_1","810","107","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_room_name","912","49","179","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("7");
            obj.set_text("생활실");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_birth","571","49","89","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("6");
            obj.set_text("생년월일");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_reday","1421","82","69","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("14");
            obj.set_text("yyyy.mm.dd");
            obj.set_color("red");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_group","196","49","59","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("3");
            obj.set_text("그룹");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_m_history","912","82","399","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("13");
            obj.set_text("주요질환");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3_2","1320","107","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("작성번호");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_work_name","912","115","69","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("24");
            obj.set_text("작성자");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_work_duty","1001","115","79","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("25");
            obj.set_text("작성직종");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_work_code","1101","115","79","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("26");
            obj.set_text("작성코드");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_no","1421","115","89","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("27");
            obj.set_text("작성번호");
            this.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_group1","511","80","60","22",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("11");
            obj.set_text("A 그룹");
            obj.set_truevalue("A");
            obj.set_cssclass("chk_d9ffb3");
            obj.set_falsevalue("0");
            this.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_group2","591","80","60","22",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("12");
            obj.set_text("B 그룹");
            obj.set_truevalue("B");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_d9ffb3");
            this.div_main.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","105","111","90","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_main.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from_pic","194","111","25","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("16");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_00","223","116","38","17",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("17");
            obj.set_text("부터");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","265","111","90","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_main.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic","354","111","25","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("19");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_00_00","388","116","38","17",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("20");
            obj.set_text("까지");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_mon6","434","112","60","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("21");
            obj.set_text("6 개월");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_mon12","499","112","60","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("22");
            obj.set_text("12 개월");
            this.div_main.addChild(obj.name, obj);

            obj = new Tab("tab_main","10","143",null,null,"10","10",null,null,null,null,this.div_main.form);
            obj.set_taborder("28");
            obj.set_tabindex("0");
            obj.set_tabjustify("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_main.form.tab_main);
            obj.set_text("운동장애/근력/기본동작평가");
            this.div_main.form.tab_main.addChild(obj.name, obj);

            obj = new Static("sta_title1","160","7","216","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("1. 운동장애 및 관절제한평가");
            obj.set_color("#400080");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_head0","160","36","153","67",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("81");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_head0_1","312","36","367","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("82");
            obj.set_text("운동장애정도");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_head0_2","312","69","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("83");
            obj.set_text("운동장애없음");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_head1","160","102","153","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("84");
            obj.set_text("① 우측상지");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_head0_3","434","69","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("85");
            obj.set_text("불완전운동장애");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_head0_4","556","69","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("86");
            obj.set_text("완전운동장애");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_exer","552","6","188","26",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("운동장애·관절제한 지움");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body1_1","312","102","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body1_2","434","102","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body1_3","556","102","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_head2","160","135","153","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("90");
            obj.set_text("② 좌측상지");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body2_1","312","135","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body2_2","434","135","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body2_3","556","135","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_head0_5","678","36","63","67",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("94");
            obj.set_text("점수");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body1_4","678","102","63","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body2_4","678","135","63","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_c1","334","108","79","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("장애없음");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_v1","451","108","89","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("불완전장애");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_x1","578","108","79","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("완전장애");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_c2","334","141","79","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("장애없음");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_v2","451","141","89","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("불완전장애");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_x2","578","141","79","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("완전장애");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_head3","160","168","153","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("97");
            obj.set_text("③ 우측하지");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body3_1","312","168","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body3_2","434","168","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body3_3","556","168","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body3_4","678","168","63","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("101");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_c3","334","174","79","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("장애없음");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_v3","451","174","89","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("불완전장애");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_x3","578","174","79","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("완전장애");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_head4","160","201","153","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("102");
            obj.set_text("④ 좌측하지");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body4_1","312","201","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("103");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body4_2","434","201","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("104");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body4_3","556","201","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("105");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body4_4","678","201","63","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("106");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_c4","334","207","79","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("장애없음");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_v4","451","207","89","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("불완전장애");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_x4","578","207","79","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("완전장애");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_head00","160","246","153","67",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("107");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_head00_1","312","246","367","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("108");
            obj.set_text("관절제한정도");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_head00_2","312","279","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("109");
            obj.set_text("제한없음");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_head00_3","434","279","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("110");
            obj.set_text("좌/우관절제한");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_head00_4","556","279","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("111");
            obj.set_text("양관절제한");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_head00_5","678","246","63","67",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("112");
            obj.set_text("점수");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_head5","160","312","153","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("113");
            obj.set_text("⑤ 어깨관절");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body5_1","312","312","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("114");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body5_2","434","312","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("115");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body5_3","556","312","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("116");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body5_4","678","312","63","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("117");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_c5","334","318","79","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("제한없음");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_v5","456","318","79","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("좌/우제한");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_x5","573","318","89","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("양관절제한");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_head6","160","345","153","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("118");
            obj.set_text("⑥ 팔꿈치관절");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body6_1","312","345","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("119");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body6_2","434","345","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("120");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body6_3","556","345","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("121");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body6_4","678","345","63","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("122");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_c6","334","351","79","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("제한없음");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_v6","456","351","79","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("좌/우제한");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_x6","573","351","89","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("양관절제한");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_head7","160","378","153","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("123");
            obj.set_text("⑦ 손목 및 수지관절");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body7_1","312","378","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("124");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body7_2","434","378","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("125");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body7_3","556","378","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("126");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body7_4","678","378","63","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("127");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_c7","334","384","79","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_text("제한없음");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_v7","456","384","79","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_text("좌/우제한");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_x7","573","384","89","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_text("양관절제한");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_head8","160","411","153","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("128");
            obj.set_text("⑧ 고관절");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body8_1","312","411","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("129");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body8_2","434","411","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("130");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body8_3","556","411","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("131");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body8_4","678","411","63","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("132");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_c8","334","417","79","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_text("제한없음");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_v8","456","417","79","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_text("좌/우제한");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_x8","573","417","89","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("32");
            obj.set_text("양관절제한");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_head9","160","444","153","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("133");
            obj.set_text("⑨ 무릎관절");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body9_1","312","444","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("134");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body9_2","434","444","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("135");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body9_3","556","444","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("136");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body9_4","678","444","63","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("137");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_c9","334","450","79","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("34");
            obj.set_text("제한없음");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_v9","456","450","79","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("35");
            obj.set_text("좌/우제한");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_x9","573","450","89","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("36");
            obj.set_text("양관절제한");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_head10","160","477","153","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("138");
            obj.set_text("⑩ 발목관절");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body10_1","312","477","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("139");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body10_2","434","477","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("140");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body10_3","556","477","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("141");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body10_4","678","477","63","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("142");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_c10","334","483","79","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("38");
            obj.set_text("제한없음");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_v10","456","483","79","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("39");
            obj.set_text("좌/우제한");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_x10","573","483","89","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("40");
            obj.set_text("양관절제한");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_head11","160","510","153","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("143");
            obj.set_text("⑪ 신체통증유무");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body11_1","312","510","245","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("144");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body11_3","556","510","123","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("145");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body11_4","678","510","63","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("146");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_bao","334","516","79","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("42");
            obj.set_text("없음");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_bax","456","516","79","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("43");
            obj.set_text("있음");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_remark1","160","542","226","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("147");
            obj.set_text("▶ 1. 운동장애 및 관절제한평가 비고");
            obj.set_color("#400080");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new TextArea("txt_remark1","160","566","583","79",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("46");
            obj.set_scrollbartype("none fixed");
            obj.set_wordWrap("char");
            obj.set_maxlength("160");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_title2","810","7","216","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("148");
            obj.set_text("2. 근력평가");
            obj.set_color("#400080");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_head02_01","808","65","73","67",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("149");
            obj.set_text("상 지");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body02_01_1","880","65","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("150");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_head02_00","808","32","73","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("151");
            obj.set_text("구 분");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_head02_00_1","880","32","247","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("152");
            obj.set_text("오른쪽");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_sru1","898","71","20","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("47");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_sru2","927","71","20","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("48");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body02_01_7","880","98","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("153");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_sru1","895","102","19","23",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("154");
            obj.set_text("(5");
            obj.set_textAlign("center");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body02_01_2","962","65","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("155");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_sru3","980","71","20","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("49");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_sru4","1009","71","20","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("50");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body02_01_8","962","98","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("156");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_sru3","977","102","19","23",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("157");
            obj.set_text("(3");
            obj.set_textAlign("center");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body02_01_3","1044","65","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("158");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_sru5","1062","71","20","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("51");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_sru6","1091","71","20","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("52");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body02_01_9","1044","98","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("159");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_sru5","1059","102","19","23",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("160");
            obj.set_text("(1");
            obj.set_textAlign("center");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body02_01_4","1126","65","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("161");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_head02_00_2","1126","32","247","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("162");
            obj.set_text("왼 쪽");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_slu1","1144","71","20","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("53");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_slu2","1173","71","20","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("54");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body02_01_10","1126","98","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("163");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_slu1","1141","102","19","23",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("164");
            obj.set_text("(5");
            obj.set_textAlign("center");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body02_01_5","1208","65","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("165");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_slu3","1226","71","20","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("55");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_slu4","1255","71","20","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("56");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body02_01_11","1208","98","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("166");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_slu3","1223","102","19","23",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("167");
            obj.set_text("(3");
            obj.set_textAlign("center");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body02_01_6","1290","65","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("168");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_slu5","1308","71","20","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("57");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_slu6","1337","71","20","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("58");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body02_01_12","1290","98","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("169");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_slu5","1305","102","19","23",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("170");
            obj.set_text("(1");
            obj.set_textAlign("center");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_head02_02","808","131","73","67",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("171");
            obj.set_text("하 지");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body02_02_1","880","131","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("172");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_srd1","898","137","20","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("59");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_srd2","927","137","20","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("60");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body02_02_7","880","164","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("173");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_srd1","895","168","19","23",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("174");
            obj.set_text("(5");
            obj.set_textAlign("center");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body02_02_2","962","131","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("175");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_srd3","980","137","20","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("61");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_srd4","1009","137","20","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("62");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body02_02_8","962","164","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("176");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_srd3","977","168","19","23",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("177");
            obj.set_text("(3");
            obj.set_textAlign("center");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body02_02_3","1044","131","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("178");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_srd5","1062","137","20","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("63");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_srd6","1091","137","20","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("64");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body02_02_9","1044","164","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("179");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_srd5","1059","168","19","23",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("180");
            obj.set_text("(1");
            obj.set_textAlign("center");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body02_02_4","1126","131","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("181");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_sld1","1144","137","20","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("65");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_sld2","1173","137","20","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("66");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body02_02_10","1126","164","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("182");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_sld1","1141","168","19","23",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("183");
            obj.set_text("(5");
            obj.set_textAlign("center");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body02_02_5","1208","131","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("184");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_sld3","1226","137","20","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("67");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_sld4","1255","137","20","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("68");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body02_02_11","1208","164","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("185");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_sld3","1223","168","19","23",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("186");
            obj.set_text("(3");
            obj.set_textAlign("center");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body02_02_6","1290","131","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("187");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_sld5","1308","137","20","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("69");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_sld6","1337","137","20","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("70");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body02_02_12","1290","164","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("188");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_sld5","1305","168","19","23",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("189");
            obj.set_text("(1");
            obj.set_textAlign("center");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_remark2","810","197","216","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("190");
            obj.set_text("▶ 2. 근력평가 비고");
            obj.set_color("#400080");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new TextArea("txt_remark2","808","220","565","60",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("71");
            obj.set_wordWrap("char");
            obj.set_scrollbartype("none fixed");
            obj.set_maxlength("160");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_title3","810","286","216","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("191");
            obj.set_text("3. 기본동작평가");
            obj.set_color("#400080");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body03_01","806","309","568","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("192");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_bm1","823","315","199","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("72");
            obj.set_text("침상이동 - 측면 & 침상위이동");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body03_02","806","342","568","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("193");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_bm2","823","348","199","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("73");
            obj.set_text("앉기");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body03_03","806","375","568","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("194");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_bm3","823","381","199","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("74");
            obj.set_text("네발기기");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body03_04","806","408","568","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("195");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_bm4","823","414","199","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("75");
            obj.set_text("무릎서기");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body03_05","806","441","568","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("196");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_bm5","823","447","199","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("76");
            obj.set_text("기립");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body03_06","806","474","568","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("197");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_bm6","823","480","199","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("77");
            obj.set_text("보행");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body03_07","806","507","568","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("198");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_bm7","823","513","199","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("78");
            obj.set_text("휠체어 조작");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_body03_08","806","540","568","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("199");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_bm8","823","546","199","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("79");
            obj.set_text("보장구 장착 이동");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_remark3","810","575","216","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("200");
            obj.set_text("▶ 3. 기본동작평가 비고");
            obj.set_color("#400080");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new TextArea("txt_remark3","806","597","568","55",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("80");
            obj.set_wordWrap("char");
            obj.set_scrollbartype("none fixed");
            obj.set_maxlength("160");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_00","575","515","79","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("44");
            obj.set_text("운동점수");
            obj.set_textAlign("right");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_sru2","928","102","19","23",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("201");
            obj.set_text("4)");
            obj.set_textAlign("center");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_sru4","1010","102","19","23",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("202");
            obj.set_text("2)");
            obj.set_textAlign("center");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_sru6","1092","102","19","23",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("203");
            obj.set_text("0)");
            obj.set_textAlign("center");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_slu2","1173","102","19","23",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("204");
            obj.set_text("4)");
            obj.set_textAlign("center");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_slu4","1255","102","19","23",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("205");
            obj.set_text("2)");
            obj.set_textAlign("center");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_slu6","1337","102","19","23",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("206");
            obj.set_text("0)");
            obj.set_textAlign("center");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_srd2","928","168","19","23",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("207");
            obj.set_text("4)");
            obj.set_textAlign("center");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_srd4","1009","168","19","23",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("208");
            obj.set_text("2)");
            obj.set_textAlign("center");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_srd6","1092","168","19","23",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("209");
            obj.set_text("0)");
            obj.set_textAlign("center");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_sld2","1173","168","19","23",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("210");
            obj.set_text("4)");
            obj.set_textAlign("center");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_sld4","1255","168","19","23",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("211");
            obj.set_text("2)");
            obj.set_textAlign("center");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_sld6","1338","168","19","23",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("212");
            obj.set_text("0)");
            obj.set_textAlign("center");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("mae_score1","684","107","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_format("#");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("mae_score2","684","140","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_format("#");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("mae_score3","684","173","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_format("#");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("mae_score4","684","206","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_format("#");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("mae_score5","684","317","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_format("#");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("mae_score6","684","350","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_format("#");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("mae_score7","684","383","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.set_format("#");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("mae_score8","684","416","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("33");
            obj.set_readonly("true");
            obj.set_format("#");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("mae_score9","684","449","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("37");
            obj.set_readonly("true");
            obj.set_format("#");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("mae_score10","684","482","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("41");
            obj.set_readonly("true");
            obj.set_format("#");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("mae_score11","684","515","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage1.form);
            obj.set_taborder("45");
            obj.set_readonly("true");
            obj.set_format("##");
            this.div_main.form.tab_main.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_main.form.tab_main);
            obj.set_text("통증강도 & 위치사정");
            this.div_main.form.tab_main.addChild(obj.name, obj);

            obj = new Static("sta_title1","150","15","232","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("4. 통증강도 & 위치사정");
            obj.set_color("#400080");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_sub1","166","36","219","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("숫자평정척도(Numeric Rating Scale)");
            obj.set_color("#400080");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_hLine","429","28","600","1",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("95");
            obj.set_text("div_00");
            obj.set_border("1px solid #222222");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_vLine1","429","13","1","32",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("96");
            obj.set_text("div_00");
            obj.set_border("1px solid #222222");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_vLine1_00","489","13","1","32",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("97");
            obj.set_text("div_00");
            obj.set_border("1px solid #222222");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_vLine1_00_00","549","13","1","32",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("98");
            obj.set_text("div_00");
            obj.set_border("1px solid #222222");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_vLine1_00_00_00","609","13","1","32",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("99");
            obj.set_text("div_00");
            obj.set_border("1px solid #222222");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_vLine1_00_00_00_00","669","13","1","32",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("100");
            obj.set_text("div_00");
            obj.set_border("1px solid #222222");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_vLine1_00_00_00_00_00","729","13","1","32",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("101");
            obj.set_text("div_00");
            obj.set_border("1px solid #222222");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_vLine1_00_00_00_00_00_00","789","13","1","32",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("102");
            obj.set_text("div_00");
            obj.set_border("1px solid #222222");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_vLine1_00_00_00_00_00_00_00","849","13","1","32",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("103");
            obj.set_text("div_00");
            obj.set_border("1px solid #222222");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_vLine1_00_00_00_00_00_00_00_00","909","13","1","32",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("104");
            obj.set_text("div_00");
            obj.set_border("1px solid #222222");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_vLine1_00_00_00_00_00_00_00_00_00","969","13","1","32",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("105");
            obj.set_text("div_00");
            obj.set_border("1px solid #222222");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new CheckBox("chk_pp0","415","49","35","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text(" 0");
            obj.set_truevalue("0");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new CheckBox("chk_pp1","475","49","35","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text(" 1");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new CheckBox("chk_pp2","535","49","35","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text(" 2");
            obj.set_truevalue("2");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new CheckBox("chk_pp3","595","49","35","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_text(" 3");
            obj.set_truevalue("3");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new CheckBox("chk_pp4","655","49","35","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_text(" 4");
            obj.set_truevalue("4");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new CheckBox("chk_pp5","715","49","35","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_text(" 5");
            obj.set_truevalue("5");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new CheckBox("chk_pp6","775","49","35","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("8");
            obj.set_text(" 6");
            obj.set_truevalue("6");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new CheckBox("chk_pp7","835","49","35","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("9");
            obj.set_text(" 7");
            obj.set_truevalue("7");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new CheckBox("chk_pp8","895","49","35","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("10");
            obj.set_text(" 8");
            obj.set_truevalue("8");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new CheckBox("chk_pp9","953","49","35","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("11");
            obj.set_text(" 9");
            obj.set_truevalue("9");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_vLine1_00_00_00_00_00_00_00_00_00_00","1029","13","1","32",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("106");
            obj.set_text("div_00");
            obj.set_border("1px solid #222222");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new CheckBox("chk_pp10","1013","49","40","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("12");
            obj.set_text(" 10");
            obj.set_truevalue("10");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_pp0","414","72","30","36",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("107");
            obj.set_text("통증\r\n없음");
            obj.set_color("red");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_pp5","699","72","60","36",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("108");
            obj.set_text("중간정도\r\n의 통증");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_pp10","979","72","100","36",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("109");
            obj.set_text("상상할 수 있는\r\n가장심한통증");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new ImageViewer("imv_body","96","117","438","482",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("110");
            obj.set_image("url(\'theme://images/03body.png\')");
            obj.set_stretch("fixaspectratio");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_head01_00","550","116","70","67",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("111");
            obj.set_text("위치");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_head01_00_1","619","116","179","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("112");
            obj.set_text("오른쪽");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_head01_00_3","619","149","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("113");
            obj.set_text("형태");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_head01_00_4","718","149","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("114");
            obj.set_text("정도");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_head01_00_2","797","116","179","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("115");
            obj.set_text("왼쪽");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_head01_00_5","797","149","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("116");
            obj.set_text("형태");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_head01_00_6","896","149","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("117");
            obj.set_text("정도");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_01_1","550","182","70","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("118");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("1");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_01_2","619","182","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("119");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_01_3","718","182","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("120");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_01_5","896","182","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("121");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_01_4","797","182","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("122");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_rps1","624","187","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("13");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_lps1","802","187","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_02_1","550","215","70","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("123");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("2");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_02_2","619","215","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("124");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_02_3","718","215","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("125");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_02_5","896","215","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("126");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_02_4","797","215","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("127");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_rps2","624","220","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_lps2","802","220","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_03_1","550","248","70","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("128");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("3");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_03_2","619","248","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("129");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_03_3","718","248","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("130");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_03_5","896","248","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("131");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_03_4","797","248","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("132");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_rps3","624","253","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_lps3","802","253","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_ps");
            obj.set_datacolumn("comboname");
            obj.set_codecolumn("combocode");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_04_1","550","281","70","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("133");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("4");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_04_2","619","281","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("134");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_04_3","718","281","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("135");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_04_5","896","281","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("136");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_04_4","797","281","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("137");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_rps4","624","286","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("25");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_lps4","802","286","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("27");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_05_1","550","314","70","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("138");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("5");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_05_2","619","314","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("139");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_05_3","718","314","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("140");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_05_5","896","314","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("141");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_05_4","797","314","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("142");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_rps5","624","319","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("29");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_lps5","802","319","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("31");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_06_1","550","347","70","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("143");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("6");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_06_2","619","347","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("144");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_06_3","718","347","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("145");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_06_5","896","347","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("146");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_06_4","797","347","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("147");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_rps6","624","352","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("33");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_lps6","802","352","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("35");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_07_1","550","380","70","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("148");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("7");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_07_2","619","380","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("149");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_07_3","718","380","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("150");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_07_5","896","380","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("151");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_07_4","797","380","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("152");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_rps7","624","385","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("37");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_lps7","802","385","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("39");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_08_1","550","413","70","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("153");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("8");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_08_2","619","413","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("154");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_08_3","718","413","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("155");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_08_5","896","413","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("156");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_08_4","797","413","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("157");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_rps8","624","418","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("41");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_lps8","802","418","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("43");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_09_1","550","446","70","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("158");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("9");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_09_2","619","446","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("159");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_09_3","718","446","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("160");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_09_5","896","446","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("161");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_09_4","797","446","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("162");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_rps9","624","451","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("45");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_lps9","802","451","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("47");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_10_1","550","479","70","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("163");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_10_2","619","479","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("164");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_10_3","718","479","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("165");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_10_5","896","479","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("166");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body01_10_4","797","479","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("167");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_rps10","624","484","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("49");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_lps10","802","484","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("51");
            obj.set_innerdataset("ds_ps");
            obj.set_datacolumn("comboname");
            obj.set_codecolumn("combocode");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_head02_00","985","116","70","67",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("168");
            obj.set_text("위치");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_head02_00_1","1054","116","179","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("169");
            obj.set_text("오른쪽");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_head02_00_3","1054","149","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("170");
            obj.set_text("형태");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_head02_00_4","1153","149","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("171");
            obj.set_text("정도");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_head02_00_2","1232","116","179","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("172");
            obj.set_text("왼쪽");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_head02_00_5","1232","149","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("173");
            obj.set_text("형태");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_head02_00_6","1331","149","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("174");
            obj.set_text("정도");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_11_1","985","182","70","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("175");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("11");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_11_2","1054","182","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("176");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_11_3","1153","182","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("177");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_11_5","1331","182","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("178");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_11_4","1232","182","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("179");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_rps11","1059","187","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("53");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_lps11","1237","187","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("55");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_12_1","985","215","70","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("180");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("12");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_12_2","1054","215","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("181");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_12_3","1153","215","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("182");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_12_5","1331","215","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("183");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_12_4","1232","215","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("184");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_rps12","1059","220","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("57");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_lps12","1237","220","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("59");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_13_1","985","248","70","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("185");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("13");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_13_2","1054","248","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("186");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_13_3","1153","248","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("187");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_13_5","1331","248","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("188");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_13_4","1232","248","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("189");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_rps13","1059","253","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("61");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_lps13","1237","253","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("63");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_14_1","985","281","70","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("190");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("14");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_14_2","1054","281","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("191");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_14_3","1153","281","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("192");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_14_5","1331","281","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("193");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_14_4","1232","281","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("194");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_rps14","1059","286","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("65");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_lps14","1237","286","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("67");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_15_1","985","314","70","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("195");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("15");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_15_2","1054","314","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("196");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_15_3","1153","314","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("197");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_15_5","1331","314","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("198");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_15_4","1232","314","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("199");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_rps15","1059","319","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("69");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_lps15","1237","319","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("71");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_16_1","985","347","70","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("200");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("16");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_16_2","1054","347","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("201");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_16_3","1153","347","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("202");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_16_5","1331","347","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("203");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_16_4","1232","347","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("204");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_rps16","1059","352","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("73");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_lps16","1237","352","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("75");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_17_1","985","380","70","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("205");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("17");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_17_2","1054","380","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("206");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_17_3","1153","380","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("207");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_17_5","1331","380","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("208");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_17_4","1232","380","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("209");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_rps17","1059","385","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("77");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_lps17","1237","385","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("79");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_18_1","985","413","70","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("210");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("18");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_18_2","1054","413","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("211");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_18_3","1153","413","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("212");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_18_5","1331","413","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("213");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_18_4","1232","413","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("214");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_rps18","1059","418","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("81");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_lps18","1237","418","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("83");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_19_1","985","446","70","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("215");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("19");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_19_2","1054","446","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("216");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_19_3","1153","446","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("217");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_19_5","1331","446","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("218");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_19_4","1232","446","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("219");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_rps19","1059","451","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("85");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_lps19","1237","451","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("87");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_20_1","985","479","70","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("220");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_20_2","1054","479","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("221");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_20_3","1153","479","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("222");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_20_5","1331","479","80","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("223");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_20_4","1232","479","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("224");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_rps20","1059","484","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("89");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_lps20","1237","484","90","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("91");
            obj.set_innerdataset("ds_ps");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_20_1_00","985","512","70","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("225");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_20_1_00_00","1054","512","100","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("226");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("평균통증");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_body02_20_1_00_00_00","1153","512","258","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("227");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_avg","1325","517","69","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("93");
            obj.set_text("평균점수");
            obj.set_textAlign("right");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_remark","550","527","189","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("228");
            obj.set_text("▶ 4. 통증강도 & 위치사정 비고");
            obj.set_color("#400080");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new TextArea("txt_remark","550","552","861","97",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("94");
            obj.set_maxlength("160");
            obj.set_wordWrap("char");
            obj.set_scrollbartype("none fixed");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_rpl1","733","187","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("14");
            obj.set_format("!##");
            obj.set_limitbymask("integer");
            obj.set_trimtype("both");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_rpl2","733","220","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("18");
            obj.set_format("!##");
            obj.set_limitbymask("integer");
            obj.set_trimtype("both");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_rpl3","733","253","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("22");
            obj.set_format("!##");
            obj.set_limitbymask("integer");
            obj.set_trimtype("both");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_rpl4","733","286","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("26");
            obj.set_format("!##");
            obj.set_limitbymask("integer");
            obj.set_trimtype("both");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_rpl5","733","319","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("30");
            obj.set_format("!##");
            obj.set_limitbymask("integer");
            obj.set_trimtype("both");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_rpl6","733","352","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("34");
            obj.set_format("!##");
            obj.set_limitbymask("integer");
            obj.set_trimtype("both");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_rpl7","733","385","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("38");
            obj.set_format("!##");
            obj.set_limitbymask("integer");
            obj.set_trimtype("both");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_rpl8","733","418","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("42");
            obj.set_format("!##");
            obj.set_limitbymask("integer");
            obj.set_trimtype("both");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_rpl9","733","451","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("46");
            obj.set_format("!##");
            obj.set_limitbymask("integer");
            obj.set_trimtype("both");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_rpl10","733","484","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("50");
            obj.set_format("!##");
            obj.set_limitbymask("integer");
            obj.set_trimtype("both");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_lpl1","911","187","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("16");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_lpl2","911","220","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("20");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_lpl3","911","253","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("24");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_lpl4","911","286","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("28");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_lpl5","911","319","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("32");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_lpl6","911","352","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("36");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_lpl7","911","385","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("40");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_lpl8","911","418","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("44");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_lpl9","911","451","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("48");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_lpl10","911","484","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("52");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_rpl11","1168","187","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("54");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_rpl12","1168","220","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("58");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_rpl13","1168","253","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("62");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_rpl14","1168","286","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("66");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_rpl15","1168","319","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("70");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_rpl16","1168","352","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("74");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_rpl17","1168","385","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("78");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_rpl18","1168","418","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("82");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_rpl19","1168","451","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("86");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_rpl20","1168","484","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("90");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_lpl11","1346","187","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("56");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_lpl12","1346","220","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("60");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_lpl13","1346","253","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("64");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_lpl14","1346","286","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("68");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_lpl15","1346","319","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("72");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_lpl16","1346","352","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("76");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_lpl17","1346","385","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("80");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_lpl18","1346","418","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("84");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_lpl19","1346","451","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("88");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mae_lpl20","1346","484","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage2.form);
            obj.set_taborder("92");
            obj.set_format("!##");
            obj.set_trimtype("both");
            obj.set_limitbymask("integer");
            this.div_main.form.tab_main.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_main.form.tab_main);
            obj.set_text("균형감 & 걸음걸이 사정");
            this.div_main.form.tab_main.addChild(obj.name, obj);

            obj = new Static("sta_title1","130","5","352","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("21");
            obj.set_text("5. 균형감 & 걸음걸이 사정 - Tinetti의 균형과 걸음걸이 방법");
            obj.set_color("#400080");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_head01_00_1","123","31","194","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("22");
            obj.set_text("요 소");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_head01_00_2","316","31","419","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("23");
            obj.set_text("판 정");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_01_1","123","55","194","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per1","131","55","125","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("25");
            obj.set_text("1. 앉아있기");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per1_re","130","75","185","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("26");
            obj.set_text("Sitting(in hard, armless chair)");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_01_2","316","55","419","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per1_val0","326","55","275","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("28");
            obj.set_text("0: 의자에 기대거나 미끄러지듯 앉아 있기");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per1_val1","326","76","275","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("29");
            obj.set_text("1: 안정적이고 안전하게 앉아있기");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_head01_00_3","734","31","69","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("30");
            obj.set_text("점 수");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_01_3","734","55","69","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Spin("spn_per1","738","62","61","31",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_min("0");
            obj.set_max("1");
            obj.set_value("");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_02_1","123","99","194","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per2","131","99","125","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("33");
            obj.set_text("2. 일어나기");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per2_re","131","119","175","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("34");
            obj.set_text("Arising");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_02_2","316","99","419","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per2_val0","326","99","205","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("36");
            obj.set_text("0: 도움 없이 일어나기가 불가능");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per2_val1","326","120","175","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("37");
            obj.set_text("1: 팔을 사용하여 일어남");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_02_3","734","99","69","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Spin("spn_per2","738","108","61","31",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_min("0");
            obj.set_max("2");
            obj.set_value("");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per2_val2","546","120","175","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("39");
            obj.set_text("2: 팔을 사용 않고도 일어남");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_03_1","123","143","194","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per3","131","143","125","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("41");
            obj.set_text("3. 일어나기 시도");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per3_re","131","164","175","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("42");
            obj.set_text("Attempts to arise");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_03_2","316","143","419","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per3_val0","326","143","165","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("44");
            obj.set_text("0: 도움 없이는 불가능");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per3_val1","326","164","175","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("45");
            obj.set_text("1: 두 번 이상의 시도로 가능");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_03_3","734","143","69","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Spin("spn_per3","738","150","61","31",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_min("0");
            obj.set_max("2");
            obj.set_value("");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per3_val2","546","164","175","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("47");
            obj.set_text("2: 한 번의 시도로 가능");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_04_1","123","187","194","79",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per4","131","207","155","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("49");
            obj.set_text("4. 일어선 직후의 균형력");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per4_re","130","225","184","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("50");
            obj.set_text("Immediate Standing balance");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_04_2","316","187","419","79",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per4_val0","326","189","395","32",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("52");
            obj.set_text("0: 일어선 직후와 서 있을 때 불안정, 비틀거리거나 발이 움직이거나\r\n    몸체가 흔들림");
            obj.set_font("normal 700 10pt/1 \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per4_val1","326","222","335","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("53");
            obj.set_text("1: 지팡이, 보행기, 주변물체 잡으면 안정된 자세 취함");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_04_3","734","187","69","79",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Spin("spn_per4","738","211","61","31",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("3");
            obj.set_min("0");
            obj.set_max("2");
            obj.set_value("");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per4_val2","326","242","402","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("55");
            obj.set_text("2: 발을 가까이 모으거나 주변 물체 잡는 것 없이 안정된 자세를 취함");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_05_1","123","265","194","60",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per5","131","275","155","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("57");
            obj.set_text("5. 서서 있을 때의 균형력");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per5_re","131","293","175","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("58");
            obj.set_text("Standing balance");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_05_2","316","265","419","60",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per5_val0","326","266","395","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("60");
            obj.set_text("0: 서 있을때 불안정");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per5_val1","326","288","385","32",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("61");
            obj.set_text("1: 지팡이, 보행기, 주변물체 잡거나 발을 12인치(약 30Cm)이상\r\n   벌리고 서 있으면 안정된 자세 취함");
            obj.set_font("normal 700 10pt/1 \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_05_3","734","265","69","60",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Spin("spn_per5","738","280","61","31",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("4");
            obj.set_min("0");
            obj.set_max("1");
            obj.set_value("");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_06_1","123","324","194","80",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per6","131","344","155","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("64");
            obj.set_text("6. 살짝 밀기");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per6_re","131","361","175","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("65");
            obj.set_text("Balance with Nudge");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_06_2","316","324","419","80",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per6_etc","326","326","395","32",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("67");
            obj.set_text("(방법 : 발을 최대한 근접시켜 검사자가 손바닥을 이용하여 피검사자\r\n      의 흉골 부위를 세 번 가볍게 민다.)");
            obj.set_font("normal 700 9pt/1 \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per6_val0","326","357","105","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("68");
            obj.set_text("0: 넘어지기 시작");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_06_3","734","324","69","80",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Spin("spn_per6","738","349","61","31",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("5");
            obj.set_min("0");
            obj.set_max("2");
            obj.set_value("");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per6_val1","456","357","265","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("70");
            obj.set_text("1: 비틀거리거나 주변 물체를 잡고 중심 잡음");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per6_val2","326","377","265","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("71");
            obj.set_text("2: 흔들리지 않고 안정된 중심 잡음");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_07_1","123","403","194","60",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per7","131","413","175","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("73");
            obj.set_text("7. 눈감은 상태에서 살짝 밀기");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per7_re","131","430","175","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("74");
            obj.set_text("Balance with Eyes closed");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_07_2","316","403","419","60",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per7_etc","326","405","395","32",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("76");
            obj.set_text("(방법 : 발을 최대한 근접시켜 검사자가 손바닥을 이용하여 피검사자\r\n      의 흉골 부위를 세 번 가볍게 민다.)");
            obj.set_font("normal 700 9pt/1 \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per7_val0","326","436","105","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("77");
            obj.set_text("0: 불안정");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_07_3","734","403","69","60",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Spin("spn_per7","738","418","61","31",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("6");
            obj.set_min("0");
            obj.set_max("1");
            obj.set_value("");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per7_val1","456","436","115","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("79");
            obj.set_text("1: 안정적");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_089_1","123","462","194","89",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per89","131","492","175","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("81");
            obj.set_text("8. 360도 회전하기");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per89_re","130","509","182","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("82");
            obj.set_text("Balance with 360 degree turn");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_08_2","316","462","419","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per8_val0","326","464","245","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("84");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            obj.set_text("0: 연속적으로 발걸음을 옮길 수 없다.");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per8_val1","326","485","245","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("85");
            obj.set_text("1: 연속적으로 발걸음을 옮긴다.");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_08_3","734","462","69","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Spin("spn_per8","738","469","61","31",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("7");
            obj.set_min("0");
            obj.set_max("1");
            obj.set_value("");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_09_2","316","506","419","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per9_val0","326","508","285","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("88");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            obj.set_text("0: 비틀거리거나, 주변 물체를 잡으면서 불안정");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per9_val1","326","529","275","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("89");
            obj.set_text("1: 안정적");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_09_3","734","506","69","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Spin("spn_per9","738","513","61","31",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("8");
            obj.set_min("0");
            obj.set_max("1");
            obj.set_value("");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_10_1","123","550","194","60",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per10","131","560","175","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("92");
            obj.set_text("9. 앉기(앉을 때의 동작)");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per10_re","131","577","175","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("93");
            obj.set_text("Sitting Down");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_10_2","316","550","419","60",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per10_val0","326","552","395","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("95");
            obj.set_text("0: 불안정(덥석 주저앉거나, 거리 사정을 못함)");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per10_val1","326","570","275","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("96");
            obj.set_text("1: 팔을 이용하거나 동작이 매끄럽지 못함");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_10_3","734","550","69","60",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Spin("spn_per10","738","565","61","31",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("9");
            obj.set_min("0");
            obj.set_max("2");
            obj.set_value("");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_per10_val2","326","588","265","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("98");
            obj.set_text("2: 안전하고 동작이 매끄러움");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_11_1","123","609","194","30",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("균형적 부분점수");
            obj.set_textAlign("center");
            obj.set_color("#973a00");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body01_11_2","316","609","487","30",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_tot1","691","614","103","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("101");
            obj.set_text("부분점수");
            obj.set_textAlign("right");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_head02_00_1","818","31","189","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("102");
            obj.set_text("요 소");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_head02_00_2","1006","31","419","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("103");
            obj.set_text("판 정");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_01_1","818","55","189","65",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("104");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk1","826","65","125","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("105");
            obj.set_text("10. 걸음시작");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk1_re","826","85","175","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("106");
            obj.set_text("Initiation");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_01_2","1006","55","419","65",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("107");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk1_etc","1016","55","375","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("108");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            obj.set_text("(방법: 걸으라는 지시가 있을 때 걸음이 시작되는 상황 평가)");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk1_val0","1016","76","275","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("109");
            obj.set_text("0: 여러 번 시도 또는 머뭇거리며 걷기 시작");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_head02_00_3","1424","31","69","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("110");
            obj.set_text("점 수");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_01_3","1424","55","69","65",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("111");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Spin("spn_walk1","1428","72","61","31",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("10");
            obj.set_min("0");
            obj.set_max("1");
            obj.set_value("");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk1_val1","1016","96","275","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("112");
            obj.set_text("1: 머뭇거림 없이 걷기 시작");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_023_1","818","119","189","89",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("113");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk23","826","134","175","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("114");
            obj.set_text("11. 보폭과 높이");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk23_re","826","151","175","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("115");
            obj.set_text("Step length and height");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_02_2","1006","119","419","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("116");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk2_val0","1016","121","375","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("117");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            obj.set_text("0: 우측 발이 지면에 지지하고 있는 좌측 발을 통과하지 못함");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk2_val1","1016","142","375","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("118");
            obj.set_text("1: 우측 발이 지면에 지지하고 있는 좌측 발을 통과");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_02_3","1424","119","69","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("119");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Spin("spn_walk2","1428","126","61","31",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("11");
            obj.set_min("0");
            obj.set_max("1");
            obj.set_value("");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_03_2","1006","163","419","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("120");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk3_val0","1016","165","365","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("121");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            obj.set_text("0: 우측 발을 지면으로부터 완전하게 올리지 못함");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk3_val1","1016","186","375","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("122");
            obj.set_text("1: 지면으로부터 5Cm 이상 완전하게 올림");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_03_3","1424","163","69","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("123");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Spin("spn_walk3","1428","170","61","31",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("12");
            obj.set_min("0");
            obj.set_max("1");
            obj.set_value("");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk23_re2","826","169","175","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("124");
            obj.set_text(": 우측 발 움직이기");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_045_1","818","207","189","89",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("125");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk45","826","222","175","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("126");
            obj.set_text("12. 보폭과 높이");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk45_re","826","239","175","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("127");
            obj.set_text("Step length and height");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_04_2","1006","207","419","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("128");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk4_val0","1016","209","375","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("129");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            obj.set_text("0: 좌측 발이 지면에 지지하고 있는 우측 발을 통과하지 못함");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk4_val1","1016","230","375","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("130");
            obj.set_text("1: 좌측 발이 지면에 지지하고 있는 우측 발을 통과");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_04_3","1424","207","69","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("131");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Spin("spn_walk4","1428","214","61","31",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("13");
            obj.set_min("0");
            obj.set_max("1");
            obj.set_value("");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_05_2","1006","251","419","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("132");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk5_val0","1016","253","365","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("133");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            obj.set_text("0: 좌측 발을 지면으로부터 완전하게 올리지 못함");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk5_val1","1016","274","375","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("134");
            obj.set_text("1: 지면으로부터 5Cm 이상 완전하게 올림");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_05_3","1424","251","69","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("135");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Spin("spn_walk5","1428","258","61","31",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("14");
            obj.set_min("0");
            obj.set_max("1");
            obj.set_value("");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk45_re2","826","257","175","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("136");
            obj.set_text(": 좌측 발 움직이기");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_06_1","818","295","189","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("137");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk6","826","295","125","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("138");
            obj.set_text("13. 보폭의 대칭성");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk6_re","826","315","175","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("139");
            obj.set_text("Step symmetry");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_06_2","1006","295","419","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("140");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk6_val0","1016","295","375","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("141");
            obj.set_text("0: 좌, 우 보폭이 동일하지 못해 대칭적이지 않음");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk6_val1","1016","316","375","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("142");
            obj.set_text("1: 좌, 우 보폭이 동일하여 대칭적");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_06_3","1424","295","69","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("143");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Spin("spn_walk6","1428","302","61","31",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("15");
            obj.set_min("0");
            obj.set_max("1");
            obj.set_value("");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_07_1","818","339","189","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("144");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk7","826","339","125","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("145");
            obj.set_text("14. 보폭의 연속성");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk7_re00","826","359","175","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("146");
            obj.set_text("Step continuity");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_07_2","1006","339","419","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("147");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk7_val0","1016","339","375","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("148");
            obj.set_text("0: 좌, 우 걸음 사이 중단되거나 연속적이지 않음");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk7_val1","1016","360","375","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("149");
            obj.set_text("1: 좌, 우 걸음 사이가 중단되지 않으며 연속적");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_07_3","1424","339","69","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("150");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Spin("spn_walk7","1428","346","61","31",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("16");
            obj.set_min("0");
            obj.set_max("1");
            obj.set_value("");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_08_1","818","383","189","85",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("151");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk8","826","393","125","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("152");
            obj.set_text("15. 보도 통과");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk8_re","826","413","175","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("153");
            obj.set_text("Path");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_08_2","1006","383","419","85",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("154");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk8_etc","1016","383","375","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("155");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            obj.set_text("(방법: 20-25Cm의 보도를 걷도록 한다.)");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk8_val0","1016","404","375","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("156");
            obj.set_text("0: 보도를 벗어남");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_08_3","1424","383","69","85",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("157");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Spin("spn_walk8","1428","410","61","31",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("17");
            obj.set_min("0");
            obj.set_max("2");
            obj.set_value("");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk8_val1","1016","424","375","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("158");
            obj.set_text("1: 약간 벗어나거나 보행보조기구를 사용");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk8_val2","1016","444","375","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("159");
            obj.set_text("2: 보행 보조기구 없이 똑바로 걷는다.");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_09_1","818","467","189","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("160");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk9","826","467","125","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("161");
            obj.set_text("16. 몸체의 흔들림");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk9_re","826","487","175","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("162");
            obj.set_text("Trunk");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_09_2","1006","467","419","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("163");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk9_val0","1016","467","375","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("164");
            obj.set_text("0: 몸체가 많이 흔들리거나 보행보조기구를 사용");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk9_val1","1016","488","375","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("165");
            obj.set_text("1: 몸체의 흔들림 없이 안정적");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_09_3","1424","467","69","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("166");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Spin("spn_walk9","1428","474","61","31",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("18");
            obj.set_min("0");
            obj.set_max("1");
            obj.set_value("");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_10_1","818","511","189","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("167");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk10","826","511","125","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("168");
            obj.set_text("17. 발의 자세");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk10_re","826","531","175","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("169");
            obj.set_text("Foot position");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_10_2","1006","511","419","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("170");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk10_val0","1016","511","375","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("171");
            obj.set_text("0: 걷는 동안 좌, 우측의 발꿈치가 서로 떨어져 있음");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_walk10_val1","1016","532","375","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("172");
            obj.set_text("1: 걷는 동안 좌, 우측 발꿈치가 거의 접근하는 자세 보임");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_10_3","1424","511","69","45",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("173");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Spin("spn_walk10","1428","518","61","31",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("19");
            obj.set_min("0");
            obj.set_max("1");
            obj.set_value("");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_11_1","818","555","189","30",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("174");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("걸음걸이 부분점수");
            obj.set_textAlign("center");
            obj.set_color("#973a00");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_11_2","1006","555","487","30",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("175");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_tot2","1381","560","103","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("176");
            obj.set_text("부분점수");
            obj.set_textAlign("right");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_12_1","818","584","189","30",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("177");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("총  점");
            obj.set_textAlign("center");
            obj.set_color("#973a00");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_body02_12_2","1006","584","487","30",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("178");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_tot3","1381","589","103","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("179");
            obj.set_text("부분점수");
            obj.set_textAlign("right");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_00","821","619","91","43",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("180");
            obj.set_text("▶ 5. 균형감 &\r\n      걸음걸이\r\n      사정비고");
            obj.set_verticalAlign("top");
            obj.set_font("normal 10pt/1 \"Noto Sans KR\"");
            obj.set_color("#400080");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new TextArea("txt_remark","915","619","578","47",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage3.form);
            obj.set_taborder("20");
            obj.set_maxlength("160");
            obj.set_wordWrap("char");
            obj.set_scrollbartype("none fixed");
            this.div_main.form.tab_main.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.div_main.form.tab_main);
            obj.set_text("ROM(신체·관절가동범위)측정");
            this.div_main.form.tab_main.addChild(obj.name, obj);

            obj = new Static("sta_title1","290","5","352","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("47");
            obj.set_text("6. ROM(신체 관절가동범위) 측정");
            obj.set_color("#400080");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_head01_00_1","288","31","119","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("48");
            obj.set_text("부   위");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_head01_00_2","406","31","209","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("49");
            obj.set_text("운동범위");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_head01_00_3","614","31","69","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("50");
            obj.set_text("각  도");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_01_1","288","55","119","166",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("어깨");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_01_2","406","55","209","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("굴곡(Flexion)");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_01_3","614","55","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("0 - 180");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_head01_00_4","682","31","69","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("54");
            obj.set_text("R  t");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_head01_00_5","750","31","69","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("55");
            obj.set_text("L  t");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_01_4","682","55","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_01_5","750","55","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_rt1","689","60","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("0");
            obj.set_maxlength("3");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_lt1","757","60","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("1");
            obj.set_maxlength("3");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_02_2","406","88","209","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("신전(Extension)");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_02_3","614","88","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("0 - 60");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_02_4","682","88","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_02_5","750","88","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_rt2","689","93","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("2");
            obj.set_maxlength("2");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_lt2","757","93","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("3");
            obj.set_maxlength("2");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_03_2","406","121","209","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("외전(abduction)");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_03_3","614","121","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("0 - 180");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_03_4","682","121","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_03_5","750","121","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_rt3","689","126","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("4");
            obj.set_maxlength("3");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_lt3","757","126","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("5");
            obj.set_maxlength("3");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_04_2","406","154","209","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("내회전(Internal Rotation)");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_04_3","614","154","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("0 - 70");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_04_4","682","154","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_04_5","750","154","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_rt4","689","159","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("6");
            obj.set_maxlength("2");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_lt4","757","159","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("7");
            obj.set_maxlength("2");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_05_2","406","187","209","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("외회전(External Rotation)");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_05_3","614","187","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("0 - 90");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_05_4","682","187","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_05_5","750","187","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_rt5","689","192","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("8");
            obj.set_maxlength("2");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_lt5","757","192","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("9");
            obj.set_maxlength("2");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_06_2","406","220","209","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("굴곡-신전(Flexion-Extension)");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_06_3","614","220","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("0 - 150");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_06_4","682","220","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_06_5","750","220","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_rt6","689","225","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("10");
            obj.set_maxlength("3");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_lt6","757","225","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("11");
            obj.set_maxlength("3");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_07_2","406","253","209","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("회외(Supination)");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_07_3","614","253","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("0 - 80");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_07_4","682","253","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_07_5","750","253","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_rt7","689","258","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("12");
            obj.set_maxlength("2");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_lt7","757","258","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("13");
            obj.set_maxlength("2");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_08_2","406","286","209","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("회내(Pronation)");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_08_3","614","286","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("0 - 80");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_08_4","682","286","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_08_5","750","286","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_rt8","689","291","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("14");
            obj.set_maxlength("2");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_lt8","757","291","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("15");
            obj.set_maxlength("2");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_09_2","406","319","209","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("굴곡(Flexion)");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_09_3","614","319","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("0 - 80");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_09_4","682","319","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_09_5","750","319","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_rt9","689","324","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("16");
            obj.set_maxlength("2");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_lt9","757","324","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("17");
            obj.set_maxlength("2");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_10_2","406","352","209","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("신전(Extension)");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_10_3","614","352","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("0 - 70");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_10_4","682","352","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_10_5","750","352","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_rt10","689","357","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("18");
            obj.set_maxlength("2");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_lt10","757","357","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("19");
            obj.set_maxlength("2");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_11_2","406","385","209","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("적골편향(Ulnar Deviation)");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_11_3","614","385","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("0 - 30");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_11_4","682","385","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_11_5","750","385","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_rt11","689","390","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("20");
            obj.set_maxlength("2");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_lt11","757","390","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("21");
            obj.set_maxlength("2");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_12_2","406","418","209","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("요골편향(Radial Deviation)");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_12_3","614","418","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("0 - 20");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_12_4","682","418","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_12_5","750","418","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("101");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_rt12","689","423","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("22");
            obj.set_maxlength("2");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_lt12","757","423","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("23");
            obj.set_maxlength("2");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_02_1","288","220","119","100",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("팔꿈치 및 전완");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body01_03_1","288","319","119","133",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("103");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("손목");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_head02_00_1","828","31","119","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("104");
            obj.set_text("부   위");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_head02_00_2","946","31","209","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("105");
            obj.set_text("운동범위");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_head02_00_3","1154","31","69","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("106");
            obj.set_text("각  도");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_01_1","828","55","119","199",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("107");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("엉덩이 관절");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_01_2","946","55","209","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("108");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("굴곡(Flexion)");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_01_3","1154","55","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("109");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("0 - 120");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_head02_00_4","1222","31","69","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("110");
            obj.set_text("R  t");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_head02_00_5","1290","31","69","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("111");
            obj.set_text("L  t");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_01_4","1222","55","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("112");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_01_5","1290","55","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("113");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_rt13","1229","60","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("24");
            obj.set_maxlength("3");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_lt13","1297","60","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("25");
            obj.set_maxlength("3");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_02_2","946","88","209","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("114");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("신전(Extension)");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_02_3","1154","88","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("115");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("0 - 30");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_02_4","1222","88","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("116");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_02_5","1290","88","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("117");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_rt14","1229","93","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("26");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_lt14","1297","93","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("27");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_03_2","946","121","209","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("118");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("외전(abduction)");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_03_3","1154","121","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("119");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("0 - 45");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_03_4","1222","121","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("120");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_03_5","1290","121","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("121");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_rt15","1229","126","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("28");
            obj.set_maxlength("3");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_lt15","1297","126","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("29");
            obj.set_maxlength("3");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_04_2","946","154","209","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("122");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("내전(adduction)");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_04_3","1154","154","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("123");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("0 - 30");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_04_4","1222","154","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("124");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_04_5","1290","154","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("125");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_rt16","1229","159","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("30");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_lt16","1297","159","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("31");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_05_2","946","187","209","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("126");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("내회전(Internal Rotation)");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_05_3","1154","187","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("127");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("0 - 45");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_05_4","1222","187","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("128");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_05_5","1290","187","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("129");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_rt17","1229","192","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("32");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_lt17","1297","192","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("33");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_06_2","946","220","209","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("130");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("외회전(External Roation)");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_06_3","1154","220","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("131");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("0 - 45");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_06_4","1222","220","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("132");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_06_5","1290","220","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("133");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_rt18","1229","225","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("34");
            obj.set_maxlength("3");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_lt18","1297","225","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("35");
            obj.set_maxlength("3");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_07_2","946","253","209","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("134");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("굴곡-신전(Flexion-Extension)");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_07_3","1154","253","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("135");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("135 - 0");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_07_4","1222","253","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("136");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_07_5","1290","253","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("137");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_rt19","1229","258","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("36");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_lt19","1297","258","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("37");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_08_2","946","286","209","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("138");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("족배굴곡(DorsiFlexion)");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_08_3","1154","286","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("139");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("0 - 20");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_08_4","1222","286","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("140");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_08_5","1290","286","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("141");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_rt20","1229","291","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("38");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_lt20","1297","291","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("39");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_09_2","946","319","209","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("142");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("족저굴곡(PlanterFlexion)");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_09_3","1154","319","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("143");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("0 - 50");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_09_4","1222","319","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("144");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_09_5","1290","319","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("145");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_rt21","1229","324","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("40");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_lt21","1297","324","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("41");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_10_2","946","352","209","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("146");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("내반(Inversion)");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_10_3","1154","352","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("147");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("0 - 35");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_10_4","1222","352","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("148");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_10_5","1290","352","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("149");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_rt22","1229","357","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("42");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_lt22","1297","357","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("43");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_11_2","946","385","209","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("150");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("외반(Eversion)");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_11_3","1154","385","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("151");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("0 - 15");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_11_4","1222","385","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("152");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_11_5","1290","385","69","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("153");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_rt23","1229","390","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("44");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Edit("edt_lt23","1297","390","54","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("45");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_02_1","828","253","119","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("154");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("무릎");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_body02_03_1","828","286","119","133",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("155");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("발목");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_remark","830","427","239","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("156");
            obj.set_text("▶ 6. ROM(신체 관절가동범위)측정 비고");
            obj.set_color("#400080");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new TextArea("txt_remark","830","452","531","97",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage4.form);
            obj.set_taborder("46");
            obj.set_maxlength("160");
            obj.set_wordWrap("char");
            obj.set_scrollbartype("none fixed");
            this.div_main.form.tab_main.Tabpage4.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.div_main.form.tab_main);
            obj.set_text("ADL수행능력 평가");
            this.div_main.form.tab_main.addChild(obj.name, obj);

            obj = new Static("sta_title1","773","5","132","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("30");
            obj.set_text("■ ADL 수행능력 평가");
            obj.set_color("#400080");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_head01_00_1","122","31","49","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("31");
            obj.set_text("문항");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_head01_00_2","170","31","89","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("32");
            obj.set_text("구  분");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_head01_00_3","258","31","59","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("33");
            obj.set_text("점수");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_head01_00_4","316","31","449","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("34");
            obj.set_text("내   용");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_head01_00_5","764","31","59","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("35");
            obj.set_text("점수");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body01_01_1","122","55","49","156",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("1");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body01_01_2","170","55","89","156",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("대소변");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body01_01_3","258","55","59","156",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body01_01_4","316","55","449","156",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl1_0","325","60","430","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("40");
            obj.set_text("- 화장실을 완벽하게 사용할 수 있으며, 실금 현상이 전혀 없다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl1_1","325","90","430","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("41");
            obj.set_text("- 대소변을 볼 때 도움이 필요하며 가끔은 실금 현상이 있다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl1_2","325","120","430","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("42");
            obj.set_text("- 1주일에 1회 이상 수면중 대소변을 지리기도 한다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl1_4","325","150","430","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("43");
            obj.set_text("- 1주일에 1회 이상 낮 시간에 대소변을 지리기도 한다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl1_5","325","180","430","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("44");
            obj.set_text("- 대소변을 전혀 조절하지 못한다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl1_0","269","58","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("0");
            obj.set_text("ⓞ");
            obj.set_truevalue("0");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl1_1","269","88","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("1");
            obj.set_text("①");
            obj.set_truevalue("1");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl1_2","269","118","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("2");
            obj.set_text("②");
            obj.set_truevalue("2");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl1_4","269","148","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("3");
            obj.set_text("④");
            obj.set_truevalue("4");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl1_5","269","178","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("4");
            obj.set_text("⑤");
            obj.set_truevalue("5");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body01_01_5","764","55","59","156",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl1_val","772","121","44","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("46");
            obj.set_text("점수");
            obj.set_textAlign("right");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body01_02_1","122","210","49","166",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("2");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body01_02_2","170","210","89","166",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("식   사");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body01_02_3","258","210","59","166",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body01_02_4","316","210","449","166",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl2_0","325","215","430","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("51");
            obj.set_text("- 도움 없이 혼자서 먹을 수 있다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl2_1","325","245","430","35",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("52");
            obj.set_text("- 식사중이나 특별한 음식을 먹을 때 약간의 도움이 필요하거나\r\n  식후 위생을 누군가 도와주어야 한다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl2_2","325","285","430","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("53");
            obj.set_text("- 다른 사람의 중등고의 도움을 받아 식사하며 지저분하게 식사한다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl2_4","325","315","430","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("54");
            obj.set_text("- 모든 식사를 다른 사람이 많이 도와주어야 한다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl2_5","325","345","430","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("55");
            obj.set_text("- 스스로는 식사하지 못해 다른 사람이 먹여주어야 한다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl2_0","269","213","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("5");
            obj.set_text("ⓞ");
            obj.set_falsevalue("-1");
            obj.set_truevalue("0");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl2_1","269","243","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("6");
            obj.set_text("①");
            obj.set_truevalue("1");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl2_2","269","283","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("7");
            obj.set_text("②");
            obj.set_truevalue("2");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl2_4","269","313","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("8");
            obj.set_text("④");
            obj.set_truevalue("4");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl2_5","269","343","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("9");
            obj.set_text("⑤");
            obj.set_truevalue("5");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body01_02_5","764","210","59","166",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl2_val","772","281","44","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("57");
            obj.set_text("점수");
            obj.set_textAlign("right");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body01_03_1","122","375","49","156",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("3");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body01_03_2","170","375","89","156",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("복   장");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body01_03_3","258","375","59","156",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body01_03_4","316","375","449","156",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl3_0","325","380","430","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("62");
            obj.set_text("- 스스로 입고 벗을 수 있으며 자신의 옷장에서 옷을 고를 수 있다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl3_1","325","410","430","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("63");
            obj.set_text("- 옷이 미리 골라져 있다면 입고 벗을 수 있다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl3_2","325","440","430","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("64");
            obj.set_text("- 미리 준비된 옷이라도 다른 사람이 약간 도와주어야 입을 수 있다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl3_4","325","470","430","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("65");
            obj.set_text("- 옷을 입을 때 많이 도와주어야 하는데, 협조 할 수 있다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl3_5","325","500","430","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("66");
            obj.set_text("- 전혀 스스로는 옷을 입을 수 없으며, 다른 사람이 입혀줄 때도 있다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl3_0","269","378","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("10");
            obj.set_text("ⓞ");
            obj.set_truevalue("0");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl3_1","269","408","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("11");
            obj.set_text("①");
            obj.set_truevalue("1");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl3_2","269","438","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("12");
            obj.set_text("②");
            obj.set_truevalue("2");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl3_4","269","468","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("13");
            obj.set_text("④");
            obj.set_truevalue("4");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl3_5","269","498","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("14");
            obj.set_text("⑤");
            obj.set_truevalue("5");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body01_03_5","764","375","59","156",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl3_val","772","441","44","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("68");
            obj.set_text("점수");
            obj.set_textAlign("right");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_head02_00_1","832","31","49","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("69");
            obj.set_text("문항");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_head02_00_2","880","31","89","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("70");
            obj.set_text("구  분");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_head02_00_3","968","31","59","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("71");
            obj.set_text("점수");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_head02_00_4","1026","31","449","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("72");
            obj.set_text("내   용");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_head02_00_5","1474","31","59","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("73");
            obj.set_text("점수");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body02_01_1","832","55","49","176",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("4");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body02_01_2","880","55","89","176",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body02_01_3","968","55","59","176",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body02_01_4","1026","55","449","176",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl4_0","1035","60","430","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("78");
            obj.set_text("- 다른 사람의 도움없이도 항상 단정하게 옷 입고 몸치장을 할 수 있다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl4_1","1035","90","430","35",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("79");
            obj.set_text("- 적절한 몸치장을 스스로 할 수 있으나 면도 같은 것들은 도움을\r\n  필요로 한다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl4_2","1035","130","430","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("80");
            obj.set_text("- 몸치장에 다른 사람들의 도움과 규칙적인 감독을 필요로 한다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl4_4","1035","160","430","35",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("81");
            obj.set_text("- 다른 사람들이 전적으로 몸치장을 도와주어야 하는데 일단 몸치장을\r\n  한 다음에는 깨끗하게 유지할 수 있다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl4_5","1035","200","430","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("82");
            obj.set_text("- 몸치장을 하고 유지하는데 다른 사람들이 적극적으로 도와주어야 한다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl4_0","979","58","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("15");
            obj.set_text("ⓞ");
            obj.set_truevalue("0");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl4_1","979","88","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("16");
            obj.set_text("①");
            obj.set_truevalue("1");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl4_2","979","128","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("17");
            obj.set_text("②");
            obj.set_truevalue("2");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl4_4","979","158","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("18");
            obj.set_text("④");
            obj.set_truevalue("4");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl4_5","979","198","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("19");
            obj.set_text("⑤");
            obj.set_truevalue("5");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body02_01_5","1474","55","59","176",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl4_val","1482","131","44","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("84");
            obj.set_text("점수");
            obj.set_textAlign("right");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body02_02_1","832","230","49","176",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("5");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body02_02_2","880","230","89","176",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body02_02_3","968","230","59","176",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body02_02_4","1026","230","449","176",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl5_0","1035","235","430","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("89");
            obj.set_text("- 외출하여 스스로 걸어 다닐 수 있다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl5_1","1035","265","430","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("90");
            obj.set_text("- 실내와 실외에서 걸어 다닐 수 있다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl5_2","1035","295","430","35",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("91");
            obj.set_text("- 다른 사람의 도움을 받거나 walker, wheelchair등을 이용하여\r\n  움직일 수 있다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl5_4","1035","335","430","35",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("92");
            obj.set_text("- 의자나 휠체어에 앉아 있을 수는 있는데 다른 사람의 도움 없이\r\n  움직일 수 없다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl5_5","1035","375","430","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("93");
            obj.set_text("- 하루의 반 이상을 침대에 누운 상태로 지낸다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl5_0","979","233","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("20");
            obj.set_text("ⓞ");
            obj.set_truevalue("0");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl5_1","979","263","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("21");
            obj.set_text("①");
            obj.set_truevalue("1");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl5_2","979","293","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("22");
            obj.set_text("②");
            obj.set_truevalue("2");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl5_4","979","333","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("23");
            obj.set_text("④");
            obj.set_truevalue("4");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl5_5","979","373","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("24");
            obj.set_text("⑤");
            obj.set_truevalue("5");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body02_02_5","1474","230","59","176",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl5_val","1482","306","44","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("95");
            obj.set_text("점수");
            obj.set_textAlign("right");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body02_03_1","832","405","49","166",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("6");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body02_03_2","880","405","89","166",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("목욕하기");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body02_03_3","968","405","59","166",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body02_03_4","1026","405","449","166",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl6_0","1035","410","430","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("100");
            obj.set_text("- 스스로 도움없이 목욕할 수 있다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl6_1","1035","440","430","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("101");
            obj.set_text("- 탕에 들어가고 나오는 것을 도와주면 혼자 목욕할 수 있다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl6_2","1035","470","430","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("102");
            obj.set_text("- 얼굴과 손은 쉽게 씻지만 몸의 나머지 부분은 씻지 않는다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl6_4","1035","500","430","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("103");
            obj.set_text("- 스스로 씻지는 못하나 다른 사람들이 목욕시킬 때 협조는 할 수 있다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl6_5","1035","530","430","35",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("104");
            obj.set_text("- 스스로 씻으려는 노력을 전혀 하지 않으며 다른 사람들이 씻어\r\n  주려해도 저항한다.");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl6_0","979","408","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("25");
            obj.set_text("ⓞ");
            obj.set_truevalue("0");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl6_1","979","438","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("26");
            obj.set_text("①");
            obj.set_truevalue("1");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl6_2","979","468","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("27");
            obj.set_text("②");
            obj.set_truevalue("2");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl6_4","979","498","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("28");
            obj.set_text("④");
            obj.set_truevalue("4");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new CheckBox("chk_adl6_5","979","528","35","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("29");
            obj.set_text("⑤");
            obj.set_truevalue("5");
            obj.set_falsevalue("-1");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body02_03_5","1474","405","59","166",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("105");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl6_val","1482","476","44","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("106");
            obj.set_text("점수");
            obj.set_textAlign("right");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl4","889","84","70","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("107");
            obj.set_text("개인위생");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl4_re","889","114","70","82",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("108");
            obj.set_text("(머리빗기,\r\n양치질, 면도,\r\n손발톱관리,\r\n세면하기등)");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl5","889","304","70","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("109");
            obj.set_text("보   행");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl5_re","889","329","70","22",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("110");
            obj.set_text("(계단, 이동)");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body02_03_1_00","832","570","49","46",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("111");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body02_03_2_00","880","570","89","46",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("112");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("총점");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body02_03_3_00","968","570","59","46",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("113");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body02_03_4_00","1026","570","449","46",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("114");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_body02_03_5_00","1474","570","59","46",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("115");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl6_5_00","1035","576","430","35",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("116");
            obj.set_text("6개 항목에 대해서 0점부터 5점까지 배점\r\n총점 : 0점(완전독릭수행) ~ 30점(완전도움의존)");
            obj.set_textAlign("center");
            obj.set_color("#400080");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_adl6_val00","1482","581","44","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage5.form);
            obj.set_taborder("117");
            obj.set_text("점수");
            obj.set_textAlign("right");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_main.form.tab_main.Tabpage5.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage6",this.div_main.form.tab_main);
            obj.set_text("물리치료 급여계획");
            this.div_main.form.tab_main.addChild(obj.name, obj);

            obj = new Static("sta_title1","773","5","142","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("64");
            obj.set_text("■ 물리치료 급여계획서");
            obj.set_color("#400080");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_head01_01","140","32","153","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("65");
            obj.set_text("진     단");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_body01_01","292","32","593","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Edit("edt_diagnosis","299","37","580","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("0");
            obj.set_maxlength("100");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_head01_02","140","65","153","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("67");
            obj.set_text("문 제 점");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_body01_02","292","65","593","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Edit("edt_problem","299","70","580","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("1");
            obj.set_maxlength("100");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_head01_03","140","98","71","127",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("69");
            obj.set_text("계 획");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_head01_03_1","210","98","83","64",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("70");
            obj.set_text("장 기");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_body01_03_1","292","98","593","64",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new TextArea("txt_long","299","105","580","51",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("2");
            obj.set_scrollbartype("none fixed");
            obj.set_maxlength("1000");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_head01_03_2","210","161","83","64",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("72");
            obj.set_text("단 기");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_body01_03_2","292","161","593","64",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new TextArea("txt_short","299","168","580","51",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("3");
            obj.set_scrollbartype("none fixed");
            obj.set_maxlength("1000");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_head01_04","140","224","153","325",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("74");
            obj.set_text("물리치료\r\n접근방향");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_body01_04_1","292","224","103","80",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("통합통증치료");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_body01_04_2","394","224","491","80",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_pr1","406","230","119","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("4");
            obj.set_text("냉·온열팩");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_pr4","406","255","119","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("7");
            obj.set_text("TENS");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_pr7","406","280","119","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("10");
            obj.set_text("마사지");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_pr2","546","230","119","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("5");
            obj.set_text("IR(적외선)");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_pr5","546","255","119","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("8");
            obj.set_text("초음파치료기");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_pr6","696","255","119","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("9");
            obj.set_text("Micro Wave");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_pr3","696","230","119","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("6");
            obj.set_text("ICT");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_body01_05_1","292","303","103","60",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("운동치료");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_body01_05_2","394","303","491","60",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_pr8","406","309","119","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("11");
            obj.set_text("기본동작훈련");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_pr11","406","334","119","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("14");
            obj.set_text("ROM ex");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_pr9","546","309","119","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("12");
            obj.set_text("보행훈련");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_pr12","546","334","119","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("15");
            obj.set_text("인지치료");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_pr13","696","334","119","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("16");
            obj.set_text("소근육운동");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_pr10","696","309","119","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("13");
            obj.set_text("근력운동");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_body01_06_1","292","362","103","80",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("그룹운동치료");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_body01_06_2","394","362","491","80",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_pr14","406","368","119","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("17");
            obj.set_text("공기압치료기");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_pr17","406","393","119","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("20");
            obj.set_text("상부운동기");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_pr20","406","418","119","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("23");
            obj.set_text("자전거운동기");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_pr15","546","368","119","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("18");
            obj.set_text("전동자전거");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_pr18","546","393","119","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("21");
            obj.set_text("어깨회전운동기");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_pr19","696","393","119","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("22");
            obj.set_text("평행운동기");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_pr16","696","368","119","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("19");
            obj.set_text("전동기립훈련기");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_pr21","546","418","119","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("24");
            obj.set_text("온열치료기");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("chk_c1e699");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_body01_07_1","292","441","103","40",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("물리치료시간");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_body01_07_2","394","441","491","40",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Edit("edt_from_hour","407","448","35","26",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("25");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_autoselect("true");
            obj.set_text("00");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_timeColon3","440","449","10","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("83");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Edit("edt_from_min","450","448","35","26",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("26");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_autoselect("true");
            obj.set_text("00");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_timeColon1_01_00","490","449","10","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("84");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Edit("edt_to_hour","507","448","35","26",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("27");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_autoselect("true");
            obj.set_text("00");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_timeColon1_01_01","540","449","10","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("85");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Edit("edt_to_min","550","448","35","26",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("28");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_autoselect("true");
            obj.set_text("00");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_time_remark","623","447","218","29",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("86");
            obj.set_text("▲ 물리치료 접근방법 변경시에는\r\n    계획서를 별도로 작성해야 합니다.");
            obj.set_font("normal 10pt/1 \"Noto Sans KR\"");
            obj.set_color("red");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_body01_08_1","292","480","103","30",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("치료요일지정");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_body01_08_2","394","480","491","30",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_mon","406","485","49","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("29");
            obj.set_text("(월)");
            obj.set_cssclass("chk_c1e699");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_tue","466","485","49","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("30");
            obj.set_text("(화)");
            obj.set_cssclass("chk_c1e699");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_wed","526","485","49","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("31");
            obj.set_text("(수)");
            obj.set_cssclass("chk_c1e699");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_thu","586","485","49","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("32");
            obj.set_text("(목)");
            obj.set_cssclass("chk_c1e699");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_fri","646","485","49","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("33");
            obj.set_text("(금)");
            obj.set_cssclass("chk_c1e699");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_sat","706","485","49","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("34");
            obj.set_text("(토)");
            obj.set_cssclass("chk_c1e699");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_sun","766","485","49","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("35");
            obj.set_text("(일)");
            obj.set_cssclass("chk_c1e699");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_heal_remark","698","418","125","19",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("89");
            obj.set_text("▲ 최대 8종류 지정 !");
            obj.set_color("#400080");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_body01_09_1","292","509","103","40",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("일시중단기간");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_body01_09_2","394","509","491","40",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Button("btn_stop_erase","738","517","135","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("38");
            obj.set_text("일시정지지움");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_head02_01","900","32","621","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("92");
            obj.set_text("제공계획 변경내역");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_head02_02","900","311","71","238",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("93");
            obj.set_text("치 료\r\n부 위");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_head02_02_1","970","311","60","80",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("94");
            obj.set_text("Rt.");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_body02_02_2","1029","311","491","80",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_hp1","1039","319","74","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("40");
            obj.set_text("neck");
            obj.set_cssclass("chk_c1e699");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_hp2","1129","319","74","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("41");
            obj.set_text("shoulder");
            obj.set_cssclass("chk_c1e699");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_hp3","1219","319","74","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("42");
            obj.set_text("elbow");
            obj.set_cssclass("chk_c1e699");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_hp4","1309","319","74","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("43");
            obj.set_text("wrist");
            obj.set_cssclass("chk_c1e699");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_hp5","1399","319","74","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("44");
            obj.set_text("hand");
            obj.set_cssclass("chk_c1e699");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_hp6","1039","349","74","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("45");
            obj.set_text("pelvic");
            obj.set_cssclass("chk_c1e699");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_hp7","1129","349","74","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("46");
            obj.set_text("hip");
            obj.set_cssclass("chk_c1e699");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_hp8","1219","349","74","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("47");
            obj.set_text("knee");
            obj.set_cssclass("chk_c1e699");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_hp9","1309","349","74","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("48");
            obj.set_text("ankle");
            obj.set_cssclass("chk_c1e699");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_hp10","1399","349","74","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("49");
            obj.set_text("foot");
            obj.set_cssclass("chk_c1e699");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_head02_03_1","970","390","60","80",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("96");
            obj.set_text("Lt.");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_body02_03_2","1029","390","491","80",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_hp11","1039","398","74","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("50");
            obj.set_text("neck");
            obj.set_cssclass("chk_c1e699");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_hp12","1129","398","74","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("51");
            obj.set_text("shoulder");
            obj.set_cssclass("chk_c1e699");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_hp13","1219","398","74","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("52");
            obj.set_text("elbow");
            obj.set_cssclass("chk_c1e699");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_hp14","1309","398","74","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("53");
            obj.set_text("wrist");
            obj.set_cssclass("chk_c1e699");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_hp15","1399","398","74","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("54");
            obj.set_text("hand");
            obj.set_cssclass("chk_c1e699");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_hp16","1039","428","74","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("55");
            obj.set_text("pelvic");
            obj.set_cssclass("chk_c1e699");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_hp17","1129","428","74","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("56");
            obj.set_text("hip");
            obj.set_cssclass("chk_c1e699");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_hp18","1219","428","74","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("57");
            obj.set_text("knee");
            obj.set_cssclass("chk_c1e699");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_hp19","1309","428","74","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("58");
            obj.set_text("ankle");
            obj.set_cssclass("chk_c1e699");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_hp20","1399","428","74","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("59");
            obj.set_text("foot");
            obj.set_cssclass("chk_c1e699");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_head02_04_1","970","469","60","80",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_body02_04_2","1029","469","491","80",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_hp21","1039","477","104","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("60");
            obj.set_text("upper back");
            obj.set_cssclass("chk_c1e699");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_hp22","1159","477","94","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("61");
            obj.set_text("low back");
            obj.set_cssclass("chk_c1e699");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new CheckBox("chk_hp23","1039","507","54","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("62");
            obj.set_text("기타");
            obj.set_cssclass("chk_c1e699");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Edit("edt_hp23","1102","505","224","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("63");
            obj.set_maxlength("20");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_body02_01","900","65","621","239",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new TextArea("txt_00","907","69","606","211",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("39");
            obj.set_scrollbartype("none fixed");
            obj.set_maxlength("1000");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_00","918","282","358","20",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("101");
            obj.set_text("▲ 변경일자와 치료변경 내역을 한줄씩 기록하세요");
            obj.set_color("#400080");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Static("sta_00_00","522","521","8","17",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_taborder("102");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Calendar("cal_stop_to","536","516","110","26",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("37");
            obj.set_tooltiptext("종료날짜");
            obj.set_tabstop("false");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Calendar("cal_stop_from","406","516","110","26",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage6.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("36");
            obj.set_tooltiptext("시작날짜");
            this.div_main.form.tab_main.Tabpage6.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage7",this.div_main.form.tab_main);
            obj.set_text("기능회복훈련 급여계획");
            this.div_main.form.tab_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","190","34","230","33",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("■ 신체기능훈련");
            obj.set_textAlign("center");
            obj.set_color("#400080");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_body4","419","34","230","33",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("■ 기본동작훈련");
            obj.set_textAlign("center");
            obj.set_color("#400080");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_body5","648","34","230","33",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("■ 일상생활동작훈련");
            obj.set_textAlign("center");
            obj.set_color("#400080");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_body3_00","190","66","230","33",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_body4_00","419","66","230","33",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_body5_00","648","66","230","33",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_body3_00_00","190","98","230","350",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_body3_00_00_00","419","98","230","350",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_body3_00_00_01","648","98","230","350",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("chk_a1","200","108","210","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("9");
            obj.set_text("관절운동범위 평가");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("chk_a8","200","138","210","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("10");
            obj.set_text("관절구축 예방운동");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("chk_a2","200","168","210","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("11");
            obj.set_text("근력증강 운동");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("chk_a3","200","198","210","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("12");
            obj.set_text("연하 운동");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("chk_a4","200","228","210","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("13");
            obj.set_text("손가락 운동");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("chk_a5","200","258","210","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("14");
            obj.set_text("조화 운동");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("chk_a6","200","288","210","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("15");
            obj.set_text("지구력 훈련");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("chk_a7","200","318","210","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("16");
            obj.set_text("팔 운동");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("chk_b1","429","108","210","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("17");
            obj.set_text("뒤집기");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("chk_b2","429","138","210","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("18");
            obj.set_text("일어나기");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("chk_b3","429","168","210","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("19");
            obj.set_text("앉아있기");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("chk_b4","429","198","210","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("20");
            obj.set_text("서있기");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("chk_b5","429","228","210","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("21");
            obj.set_text("균형");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("chk_b6","429","258","210","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("22");
            obj.set_text("이동");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("chk_b7","429","288","210","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("23");
            obj.set_text("휠체어 조작 및 이동");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("chk_b8","429","318","210","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("24");
            obj.set_text("보행");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("chk_b9","429","348","210","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("25");
            obj.set_text("보장구장착 지켜보기");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("chk_b11","429","408","210","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("26");
            obj.set_text("일어서기");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("chk_b10","429","378","210","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("27");
            obj.set_text("도움제공");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("chk_c1","658","108","210","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("28");
            obj.set_text("식사 동작");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("chk_c2","658","138","210","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("29");
            obj.set_text("배설 동작");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("chk_c3","658","168","210","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("30");
            obj.set_text("옷 갈아 입기동작");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("chk_c4","658","198","210","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("31");
            obj.set_text("목욕 동작");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("chk_c5","658","228","210","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("32");
            obj.set_text("몸 단장 동작");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("chk_c6","658","258","210","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("33");
            obj.set_text("이동 동작");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("chk_c8","658","318","210","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("34");
            obj.set_text("가사 동작");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new CheckBox("chk_c7","658","288","210","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("35");
            obj.set_text("요리 동작");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new MaskEdit("mae_time1","245","70","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("36");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_maskchar(" ");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new MaskEdit("mae_time2","315","70","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("37");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_maskchar(" ");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_time1","300","70","10","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("38");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new MaskEdit("mae_time3","465","70","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("39");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_maskchar(" ");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_time1_00","520","70","10","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("40");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new MaskEdit("mae_time4","535","70","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("41");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_maskchar(" ");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new MaskEdit("mae_time5","705","70","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("42");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_maskchar(" ");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_time1_01","760","70","10","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("43");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new MaskEdit("mae_time6","775","70","50","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("44");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_maskchar(" ");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_title1","453","5","172","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("45");
            obj.set_text("■ 기능회복훈련 급여계획서");
            obj.set_color("#400080");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_body3_00_00_02","190","447","688","80",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_00","198","448","170","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("47");
            obj.set_text("▶ 기능회복훈련 비고");
            obj.set_color("#400080");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_body3_00_00_01_00","888","34","430","493",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Button("btn_func","974","5","258","24",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("49");
            obj.set_text("욕구사정 기록조회");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_func_title","953","40","301","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("50");
            obj.set_text("신체상태(일상생활동작 수행능력)");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("center");
            obj.set_color("#400080");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_func_term","953","64","301","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("51");
            obj.set_font("normal 700 11pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_head01_00","985","87","153","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("52");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_body01_01","1137","120","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Edit("edt_func1","1143","125","70","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("54");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_head01_00_1","1137","87","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("55");
            obj.set_text("수행능력");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_head01_01","985","120","153","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("56");
            obj.set_text("① 옷 벗고 입기");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_head01_02","985","153","153","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("57");
            obj.set_text("② 세수하기");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_head01_03","985","186","153","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("58");
            obj.set_text("③ 양치질 하기");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_head01_04","985","219","153","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("59");
            obj.set_text("④ 목욕하기");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_head01_05","985","252","153","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("60");
            obj.set_text("⑤ 식사하기");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_head01_06","985","285","153","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("61");
            obj.set_text("⑥ 자세 변경하기");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_head01_07","985","318","153","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("62");
            obj.set_text("⑦ 일어나 앉기");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_head01_08","985","351","153","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("63");
            obj.set_text("⑧ 옮겨 앉기");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_head01_09","985","384","153","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("64");
            obj.set_text("⑨ 방밖으로 나오기");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_head01_10","985","417","153","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("65");
            obj.set_text("⑩ 화장실 사용하기");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_head01_11","985","450","153","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("66");
            obj.set_text("⑪ 대변 조절하기");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_head01_12","985","483","153","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("67");
            obj.set_text("⑫ 소변 조절하기");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_body01_02","1137","153","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Edit("edt_func2","1143","158","70","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("69");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_body01_03","1137","186","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Edit("edt_func3","1143","191","70","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("71");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_body01_04","1137","219","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Edit("edt_func4","1143","224","70","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("73");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_body01_05","1137","252","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Edit("edt_func5","1143","257","70","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("75");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_body01_06","1137","285","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Edit("edt_func6","1143","290","70","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("77");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_body01_07","1137","318","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Edit("edt_func7","1143","323","70","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("79");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_body01_08","1137","351","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Edit("edt_func8","1143","356","70","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("81");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_body01_09","1137","384","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Edit("edt_func9","1143","389","70","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("83");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_body01_10","1137","417","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Edit("edt_func10","1143","422","70","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("85");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_body01_11","1137","450","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Edit("edt_func11","1143","455","70","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("87");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Static("sta_body01_12","1137","483","83","34",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Edit("edt_func12","1143","488","70","25",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("89");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new TextArea("txt_remark","200","472","669","47",null,null,null,null,null,null,this.div_main.form.tab_main.Tabpage7.form);
            obj.set_taborder("90");
            obj.set_maxlength("200");
            obj.set_scrollbartype("none fixed");
            obj.set_wordWrap("char");
            this.div_main.form.tab_main.Tabpage7.addChild(obj.name, obj);

            obj = new Calendar("cal_date","105","78","90","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_main.addChild(obj.name, obj);

            obj = new Calendar("cal_date_pic","194","78","25","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("10");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_worker","815","111","73","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("23");
            obj.set_text("작성자");
            obj.set_cssclass("btn_worker");
            this.div_main.addChild(obj.name, obj);

            obj = new Div("div_time_to","-126","1","111","201",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_border("1px solid black");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancle","3","3",null,"25","3",null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("0");
            obj.set_text("훈련시간");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_03","3","31","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("1");
            obj.set_text("03분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_09","56","31","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("2");
            obj.set_text("09분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_04","3","59","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("3");
            obj.set_text("04분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_10","56","59","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("4");
            obj.set_text("10분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_05","3","87","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("5");
            obj.set_text("05분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_12","56","87","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("6");
            obj.set_text("12분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_06","3","115","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("7");
            obj.set_text("06분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_15","56","115","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("8");
            obj.set_text("15분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_07","3","143","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("9");
            obj.set_text("07분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_20","56","143","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("10");
            obj.set_text("20분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_30","56","171","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("11");
            obj.set_text("30분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_08","3","171","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("12");
            obj.set_text("08분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Div("div_time_from","-244","1","112","370",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_border("1px solid black");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_from_0900","3","59","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("0");
            obj.set_text("09:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1400","3","199","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("1");
            obj.set_text("14:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_tcancle","3","3","104","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("2");
            obj.set_text("닫기 (close)");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_tdel","3","339","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("3");
            obj.set_text("지움");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_05","57","59","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("4");
            obj.set_text("05분-");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_30","57","199","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("5");
            obj.set_text("30분-");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_1_00_00","3","31","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("6");
            obj.set_text("시간");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_1_00_01","57","31","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("7");
            obj.set_text("분");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1000","3","87","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("8");
            obj.set_text("10:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1500","3","227","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("9");
            obj.set_text("15:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1100","3","115","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("10");
            obj.set_text("11:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1600","3","255","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("11");
            obj.set_text("16:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_10","57","87","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("12");
            obj.set_text("10분-");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_35","57","227","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("13");
            obj.set_text("35분-");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_15","57","115","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("14");
            obj.set_text("15분-");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_40","57","255","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("15");
            obj.set_text("40분-");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1200","3","143","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("16");
            obj.set_text("12:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1700","3","283","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("17");
            obj.set_text("17:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1300","3","171","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("18");
            obj.set_text("13:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1800","3","311","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("19");
            obj.set_text("18:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_20","57","143","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("20");
            obj.set_text("20분-");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_45","57","283","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("21");
            obj.set_text("45분-");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_25","57","171","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("22");
            obj.set_text("25분-");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_50","57","311","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("23");
            obj.set_text("50분-");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_55","57","339","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("24");
            obj.set_text("55분-");
            this.div_time_from.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1700,900,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","div_func.form.chk_sign","value","ds_report","SIGN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_main.form.sta_mate_name","text","ds_data","m_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_main.form.sta_group","text","ds_data","m_group");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_main.form.sta_mate_code","text","ds_data","m_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_main.form.sta_sex","text","ds_data","성별");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_main.form.sta_birth","text","ds_data","생년월일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_main.form.sta_room_name","text","ds_data","m_roomname");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_main.form.sta_enday","text","ds_data","입소일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_main.form.sta_reday","text","ds_data","퇴소일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_main.form.cal_date","value","ds_data","평가일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_main.form.cal_date_pic","value","ds_data","평가일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_main.form.sta_m_history","text","ds_data","m_history");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_main.form.cal_date_from","value","ds_data","계획시작");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_main.form.cal_date_from_pic","value","ds_data","계획시작");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_main.form.cal_date_to","value","ds_data","계획종료");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_main.form.cal_date_to_pic","value","ds_data","계획종료");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_main.form.sta_work_name","text","ds_data","평가자명");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_main.form.sta_work_duty","text","ds_data","평가자직종");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_main.form.sta_work_code","text","ds_data","평가자코드");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_main.form.sta_no","text","ds_data","작성번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_main.form.tab_main.Tabpage1.form.chk_c1","value","ds_data","운동관절1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_main.form.tab_main.Tabpage1.form.chk_v1","value","ds_data","운동관절1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_main.form.tab_main.Tabpage1.form.chk_x1","value","ds_data","운동관절1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_main.form.tab_main.Tabpage1.form.chk_c2","value","ds_data","운동관절2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_main.form.tab_main.Tabpage1.form.chk_v2","value","ds_data","운동관절2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_main.form.tab_main.Tabpage1.form.chk_x2","value","ds_data","운동관절2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_main.form.tab_main.Tabpage1.form.chk_c3","value","ds_data","운동관절3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_main.form.tab_main.Tabpage1.form.chk_v3","value","ds_data","운동관절3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_main.form.tab_main.Tabpage1.form.chk_x3","value","ds_data","운동관절3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_main.form.tab_main.Tabpage1.form.chk_c4","value","ds_data","운동관절4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_main.form.tab_main.Tabpage1.form.chk_v4","value","ds_data","운동관절4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_main.form.tab_main.Tabpage1.form.chk_x4","value","ds_data","운동관절4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_main.form.tab_main.Tabpage1.form.chk_c5","value","ds_data","운동관절5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_main.form.tab_main.Tabpage1.form.chk_v5","value","ds_data","운동관절5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_main.form.tab_main.Tabpage1.form.chk_x5","value","ds_data","운동관절5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_main.form.tab_main.Tabpage1.form.chk_c6","value","ds_data","운동관절6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_main.form.tab_main.Tabpage1.form.chk_v6","value","ds_data","운동관절6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_main.form.tab_main.Tabpage1.form.chk_x6","value","ds_data","운동관절6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_main.form.tab_main.Tabpage1.form.chk_c7","value","ds_data","운동관절7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_main.form.tab_main.Tabpage1.form.chk_v7","value","ds_data","운동관절7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_main.form.tab_main.Tabpage1.form.chk_x7","value","ds_data","운동관절7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_main.form.tab_main.Tabpage1.form.chk_c8","value","ds_data","운동관절8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_main.form.tab_main.Tabpage1.form.chk_v8","value","ds_data","운동관절8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_main.form.tab_main.Tabpage1.form.chk_x8","value","ds_data","운동관절8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_main.form.tab_main.Tabpage1.form.chk_c9","value","ds_data","운동관절9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_main.form.tab_main.Tabpage1.form.chk_v9","value","ds_data","운동관절9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_main.form.tab_main.Tabpage1.form.chk_x9","value","ds_data","운동관절9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_main.form.tab_main.Tabpage1.form.chk_c10","value","ds_data","운동관절10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_main.form.tab_main.Tabpage1.form.chk_v10","value","ds_data","운동관절10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_main.form.tab_main.Tabpage1.form.chk_x10","value","ds_data","운동관절10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_main.form.tab_main.Tabpage1.form.chk_bao","value","ds_data","신체통증");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_main.form.tab_main.Tabpage1.form.chk_bax","value","ds_data","신체통증");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","div_main.form.tab_main.Tabpage1.form.txt_remark1","value","ds_data","운동비고");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","div_main.form.tab_main.Tabpage1.form.chk_sru1","value","ds_data","근력우상1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","div_main.form.tab_main.Tabpage1.form.chk_sru2","value","ds_data","근력우상2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","div_main.form.tab_main.Tabpage1.form.chk_sru3","value","ds_data","근력우상3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","div_main.form.tab_main.Tabpage1.form.chk_sru4","value","ds_data","근력우상4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","div_main.form.tab_main.Tabpage1.form.chk_sru5","value","ds_data","근력우상5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","div_main.form.tab_main.Tabpage1.form.chk_sru6","value","ds_data","근력우상6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","div_main.form.tab_main.Tabpage1.form.chk_slu1","value","ds_data","근력좌상1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","div_main.form.tab_main.Tabpage1.form.chk_slu2","value","ds_data","근력좌상2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","div_main.form.tab_main.Tabpage1.form.chk_slu3","value","ds_data","근력좌상3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","div_main.form.tab_main.Tabpage1.form.chk_slu4","value","ds_data","근력좌상4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","div_main.form.tab_main.Tabpage1.form.chk_slu5","value","ds_data","근력좌상5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","div_main.form.tab_main.Tabpage1.form.chk_slu6","value","ds_data","근련좌상6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","div_main.form.tab_main.Tabpage1.form.chk_srd1","value","ds_data","근력우하1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","div_main.form.tab_main.Tabpage1.form.chk_srd2","value","ds_data","근력우하2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","div_main.form.tab_main.Tabpage1.form.chk_srd3","value","ds_data","근력우하3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","div_main.form.tab_main.Tabpage1.form.chk_srd4","value","ds_data","근력우하4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","div_main.form.tab_main.Tabpage1.form.chk_srd5","value","ds_data","근력우하5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","div_main.form.tab_main.Tabpage1.form.chk_srd6","value","ds_data","근력우하6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","div_main.form.tab_main.Tabpage1.form.chk_sld1","value","ds_data","근력좌하1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","div_main.form.tab_main.Tabpage1.form.chk_sld2","value","ds_data","근력좌하2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","div_main.form.tab_main.Tabpage1.form.chk_sld3","value","ds_data","근력좌하3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","div_main.form.tab_main.Tabpage1.form.chk_sld4","value","ds_data","근력좌하4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","div_main.form.tab_main.Tabpage1.form.chk_sld5","value","ds_data","근력좌하5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","div_main.form.tab_main.Tabpage1.form.chk_sld6","value","ds_data","근력좌하6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","div_main.form.tab_main.Tabpage1.form.txt_remark2","value","ds_data","근력비고");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","div_main.form.tab_main.Tabpage1.form.chk_bm1","value","ds_data","기본동작1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item92","div_main.form.tab_main.Tabpage1.form.chk_bm2","value","ds_data","기본동작2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item93","div_main.form.tab_main.Tabpage1.form.chk_bm3","value","ds_data","기본동작3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","div_main.form.tab_main.Tabpage1.form.chk_bm4","value","ds_data","기본동작4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","div_main.form.tab_main.Tabpage1.form.chk_bm5","value","ds_data","기본동작5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","div_main.form.tab_main.Tabpage1.form.chk_bm6","value","ds_data","기본동작6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item97","div_main.form.tab_main.Tabpage1.form.chk_bm7","value","ds_data","기본동작7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item98","div_main.form.tab_main.Tabpage1.form.chk_bm8","value","ds_data","기본동작8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item99","div_main.form.tab_main.Tabpage1.form.txt_remark3","value","ds_data","동작비고");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item100","div_main.form.tab_main.Tabpage2.form.chk_pp0","value","ds_data","평정척도");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item101","div_main.form.tab_main.Tabpage2.form.chk_pp1","value","ds_data","평정척도");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item102","div_main.form.tab_main.Tabpage2.form.chk_pp2","value","ds_data","평정척도");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item103","div_main.form.tab_main.Tabpage2.form.chk_pp3","value","ds_data","평정척도");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item104","div_main.form.tab_main.Tabpage2.form.chk_pp4","value","ds_data","평정척도");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item105","div_main.form.tab_main.Tabpage2.form.chk_pp5","value","ds_data","평정척도");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item106","div_main.form.tab_main.Tabpage2.form.chk_pp6","value","ds_data","평정척도");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item107","div_main.form.tab_main.Tabpage2.form.chk_pp7","value","ds_data","평정척도");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item108","div_main.form.tab_main.Tabpage2.form.chk_pp8","value","ds_data","평정척도");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item109","div_main.form.tab_main.Tabpage2.form.chk_pp9","value","ds_data","평정척도");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item110","div_main.form.tab_main.Tabpage2.form.chk_pp10","value","ds_data","평정척도");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item111","div_main.form.tab_main.Tabpage2.form.cmb_rps1","value","ds_data","통증형RT1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item112","div_main.form.tab_main.Tabpage2.form.cmb_rps2","value","ds_data","통증형RT2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item113","div_main.form.tab_main.Tabpage2.form.cmb_rps3","value","ds_data","통증형RT3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item114","div_main.form.tab_main.Tabpage2.form.cmb_rps4","value","ds_data","통증형RT4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item115","div_main.form.tab_main.Tabpage2.form.cmb_rps5","value","ds_data","통증형RT5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item116","div_main.form.tab_main.Tabpage2.form.cmb_rps6","value","ds_data","통증형RT6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item117","div_main.form.tab_main.Tabpage2.form.cmb_rps7","value","ds_data","통증형RT7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item118","div_main.form.tab_main.Tabpage2.form.cmb_rps8","value","ds_data","통증형RT8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item119","div_main.form.tab_main.Tabpage2.form.cmb_rps9","value","ds_data","통증형RT9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item120","div_main.form.tab_main.Tabpage2.form.cmb_rps10","value","ds_data","통증형RT10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item121","div_main.form.tab_main.Tabpage2.form.cmb_rps11","value","ds_data","통증형RT11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item122","div_main.form.tab_main.Tabpage2.form.cmb_rps12","value","ds_data","통증형RT12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item123","div_main.form.tab_main.Tabpage2.form.cmb_rps13","value","ds_data","통증형RT13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item124","div_main.form.tab_main.Tabpage2.form.cmb_rps14","value","ds_data","통증형RT14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item125","div_main.form.tab_main.Tabpage2.form.cmb_rps15","value","ds_data","통증형RT15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item126","div_main.form.tab_main.Tabpage2.form.cmb_rps16","value","ds_data","통증형RT16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item127","div_main.form.tab_main.Tabpage2.form.cmb_rps17","value","ds_data","통증형RT17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item128","div_main.form.tab_main.Tabpage2.form.cmb_rps18","value","ds_data","통증형RT18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item129","div_main.form.tab_main.Tabpage2.form.cmb_rps19","value","ds_data","통증형RT19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item130","div_main.form.tab_main.Tabpage2.form.cmb_rps20","value","ds_data","통증형RT20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item151","div_main.form.tab_main.Tabpage2.form.cmb_lps1","value","ds_data","통증형LT1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item152","div_main.form.tab_main.Tabpage2.form.cmb_lps2","value","ds_data","통증형LT2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item153","div_main.form.tab_main.Tabpage2.form.cmb_lps3","value","ds_data","통증형LT3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item154","div_main.form.tab_main.Tabpage2.form.cmb_lps4","value","ds_data","통증형LT4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item155","div_main.form.tab_main.Tabpage2.form.cmb_lps5","value","ds_data","통증형LT5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item156","div_main.form.tab_main.Tabpage2.form.cmb_lps6","value","ds_data","통증형LT6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item157","div_main.form.tab_main.Tabpage2.form.cmb_lps7","value","ds_data","통증형LT7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item158","div_main.form.tab_main.Tabpage2.form.cmb_lps8","value","ds_data","통증형LT8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item159","div_main.form.tab_main.Tabpage2.form.cmb_lps9","value","ds_data","통증형LT9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item160","div_main.form.tab_main.Tabpage2.form.cmb_lps10","value","ds_data","통증형LT10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item161","div_main.form.tab_main.Tabpage2.form.cmb_lps11","value","ds_data","통증형LT11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item162","div_main.form.tab_main.Tabpage2.form.cmb_lps12","value","ds_data","통증형LT12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item163","div_main.form.tab_main.Tabpage2.form.cmb_lps13","value","ds_data","통증형LT13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item164","div_main.form.tab_main.Tabpage2.form.cmb_lps14","value","ds_data","통증형LT14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item165","div_main.form.tab_main.Tabpage2.form.cmb_lps15","value","ds_data","통증형LT15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item166","div_main.form.tab_main.Tabpage2.form.cmb_lps16","value","ds_data","통증형LT16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item167","div_main.form.tab_main.Tabpage2.form.cmb_lps17","value","ds_data","통증형LT17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item168","div_main.form.tab_main.Tabpage2.form.cmb_lps18","value","ds_data","통증형LT18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item169","div_main.form.tab_main.Tabpage2.form.cmb_lps19","value","ds_data","통증형LT19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item170","div_main.form.tab_main.Tabpage2.form.cmb_lps20","value","ds_data","통증형LT20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item191","div_main.form.tab_main.Tabpage2.form.txt_remark","value","ds_data","통증비고");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item192","div_main.form.tab_main.Tabpage3.form.spn_per1","value","ds_data","균형감1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item193","div_main.form.tab_main.Tabpage3.form.spn_per2","value","ds_data","균형감2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item194","div_main.form.tab_main.Tabpage3.form.spn_per3","value","ds_data","균형감3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item195","div_main.form.tab_main.Tabpage3.form.spn_per4","value","ds_data","균형감4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item196","div_main.form.tab_main.Tabpage3.form.spn_per5","value","ds_data","균형감5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item197","div_main.form.tab_main.Tabpage3.form.spn_per6","value","ds_data","균형감6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item198","div_main.form.tab_main.Tabpage3.form.spn_per7","value","ds_data","균형감7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item199","div_main.form.tab_main.Tabpage3.form.spn_per8","value","ds_data","균형감8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item200","div_main.form.tab_main.Tabpage3.form.spn_per9","value","ds_data","균형감9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item201","div_main.form.tab_main.Tabpage3.form.spn_per10","value","ds_data","균형감10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item202","div_main.form.tab_main.Tabpage3.form.sta_tot1","text","ds_data","균형감합계");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item203","div_main.form.tab_main.Tabpage3.form.spn_walk1","value","ds_data","걸음걸이1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item204","div_main.form.tab_main.Tabpage3.form.spn_walk2","value","ds_data","걸음걸이2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item205","div_main.form.tab_main.Tabpage3.form.spn_walk3","value","ds_data","걸음걸이3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item206","div_main.form.tab_main.Tabpage3.form.spn_walk4","value","ds_data","걸음걸이4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item207","div_main.form.tab_main.Tabpage3.form.spn_walk5","value","ds_data","걸음걸이5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item208","div_main.form.tab_main.Tabpage3.form.spn_walk6","value","ds_data","걸음걸이6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item209","div_main.form.tab_main.Tabpage3.form.spn_walk7","value","ds_data","걸음걸이7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item210","div_main.form.tab_main.Tabpage3.form.spn_walk8","value","ds_data","걸음걸이8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item211","div_main.form.tab_main.Tabpage3.form.spn_walk9","value","ds_data","걸음걸이9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item212","div_main.form.tab_main.Tabpage3.form.spn_walk10","value","ds_data","걸음걸이10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item213","div_main.form.tab_main.Tabpage3.form.sta_tot2","text","ds_data","걸음합계");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item214","div_main.form.tab_main.Tabpage3.form.sta_tot3","text","ds_data","총점");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item215","div_main.form.tab_main.Tabpage3.form.txt_remark","value","ds_data","균형비고");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item216","div_main.form.tab_main.Tabpage4.form.edt_rt1","value","ds_data","romrt1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item217","div_main.form.tab_main.Tabpage4.form.edt_rt2","value","ds_data","romrt2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item218","div_main.form.tab_main.Tabpage4.form.edt_rt3","value","ds_data","romrt3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item219","div_main.form.tab_main.Tabpage4.form.edt_rt4","value","ds_data","romrt4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item220","div_main.form.tab_main.Tabpage4.form.edt_rt5","value","ds_data","romrt5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item221","div_main.form.tab_main.Tabpage4.form.edt_rt6","value","ds_data","romrt6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item222","div_main.form.tab_main.Tabpage4.form.edt_rt7","value","ds_data","romrt7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item223","div_main.form.tab_main.Tabpage4.form.edt_rt8","value","ds_data","romrt8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item224","div_main.form.tab_main.Tabpage4.form.edt_rt9","value","ds_data","romrt9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item225","div_main.form.tab_main.Tabpage4.form.edt_rt10","value","ds_data","romrt10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item226","div_main.form.tab_main.Tabpage4.form.edt_rt11","value","ds_data","romrt11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item227","div_main.form.tab_main.Tabpage4.form.edt_rt12","value","ds_data","romrt12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item228","div_main.form.tab_main.Tabpage4.form.edt_rt13","value","ds_data","romrt13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item229","div_main.form.tab_main.Tabpage4.form.edt_rt14","value","ds_data","romrt14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item230","div_main.form.tab_main.Tabpage4.form.edt_rt15","value","ds_data","romrt15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item231","div_main.form.tab_main.Tabpage4.form.edt_rt16","value","ds_data","romrt16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item232","div_main.form.tab_main.Tabpage4.form.edt_rt17","value","ds_data","romrt17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item233","div_main.form.tab_main.Tabpage4.form.edt_rt18","value","ds_data","romrt18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item234","div_main.form.tab_main.Tabpage4.form.edt_rt19","value","ds_data","romrt19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item235","div_main.form.tab_main.Tabpage4.form.edt_rt20","value","ds_data","romrt20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item236","div_main.form.tab_main.Tabpage4.form.edt_rt21","value","ds_data","romrt21");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item237","div_main.form.tab_main.Tabpage4.form.edt_rt22","value","ds_data","romrt22");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item238","div_main.form.tab_main.Tabpage4.form.edt_rt23","value","ds_data","romrt23");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item239","div_main.form.tab_main.Tabpage4.form.edt_lt1","value","ds_data","romlt1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item240","div_main.form.tab_main.Tabpage4.form.edt_lt2","value","ds_data","romlt2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item241","div_main.form.tab_main.Tabpage4.form.edt_lt3","value","ds_data","romlt3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item242","div_main.form.tab_main.Tabpage4.form.edt_lt4","value","ds_data","romlt4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item243","div_main.form.tab_main.Tabpage4.form.edt_lt5","value","ds_data","romlt5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item244","div_main.form.tab_main.Tabpage4.form.edt_lt6","value","ds_data","romlt6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item245","div_main.form.tab_main.Tabpage4.form.edt_lt7","value","ds_data","romlt7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item246","div_main.form.tab_main.Tabpage4.form.edt_lt8","value","ds_data","romlt8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item247","div_main.form.tab_main.Tabpage4.form.edt_lt9","value","ds_data","romlt9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item248","div_main.form.tab_main.Tabpage4.form.edt_lt10","value","ds_data","romlt10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item249","div_main.form.tab_main.Tabpage4.form.edt_lt11","value","ds_data","romlt11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item250","div_main.form.tab_main.Tabpage4.form.edt_lt12","value","ds_data","romlt12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item251","div_main.form.tab_main.Tabpage4.form.edt_lt13","value","ds_data","romlt13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item252","div_main.form.tab_main.Tabpage4.form.edt_lt14","value","ds_data","romlt14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item253","div_main.form.tab_main.Tabpage4.form.edt_lt15","value","ds_data","romlt15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item254","div_main.form.tab_main.Tabpage4.form.edt_lt16","value","ds_data","romlt16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item255","div_main.form.tab_main.Tabpage4.form.edt_lt17","value","ds_data","romlt17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item256","div_main.form.tab_main.Tabpage4.form.edt_lt18","value","ds_data","romlt18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item257","div_main.form.tab_main.Tabpage4.form.edt_lt19","value","ds_data","romlt19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item258","div_main.form.tab_main.Tabpage4.form.edt_lt20","value","ds_data","romlt20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item259","div_main.form.tab_main.Tabpage4.form.edt_lt21","value","ds_data","romlt21");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item260","div_main.form.tab_main.Tabpage4.form.edt_lt22","value","ds_data","romlt22");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item261","div_main.form.tab_main.Tabpage4.form.edt_lt23","value","ds_data","romlt23");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item262","div_main.form.tab_main.Tabpage4.form.txt_remark","value","ds_data","rom비고");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item263","div_main.form.tab_main.Tabpage5.form.sta_adl1_val","text","ds_data","adl점수1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item264","div_main.form.tab_main.Tabpage5.form.sta_adl2_val","text","ds_data","adl점수2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item265","div_main.form.tab_main.Tabpage5.form.sta_adl3_val","text","ds_data","adl점수3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item266","div_main.form.tab_main.Tabpage5.form.sta_adl4_val","text","ds_data","adl점수4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item267","div_main.form.tab_main.Tabpage5.form.sta_adl5_val","text","ds_data","adl점수5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item268","div_main.form.tab_main.Tabpage5.form.sta_adl6_val","text","ds_data","adl점수6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item269","div_main.form.tab_main.Tabpage5.form.sta_adl6_val00","text","ds_data","adl총점");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item270","div_main.form.tab_main.Tabpage6.form.edt_diagnosis","value","ds_data","진단");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item271","div_main.form.tab_main.Tabpage6.form.edt_problem","value","ds_data","문제점");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item272","div_main.form.tab_main.Tabpage6.form.txt_long","value","ds_data","장기계획");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item273","div_main.form.tab_main.Tabpage6.form.txt_short","value","ds_data","단기계획");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item274","div_main.form.tab_main.Tabpage6.form.edt_from_hour","value","ds_data","치료시작시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item275","div_main.form.tab_main.Tabpage6.form.edt_from_min","value","ds_data","치료시작분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item276","div_main.form.tab_main.Tabpage6.form.edt_to_hour","value","ds_data","치료종료시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item277","div_main.form.tab_main.Tabpage6.form.edt_to_min","value","ds_data","치료종료분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item278","div_main.form.tab_main.Tabpage6.form.chk_mon","value","ds_data","월요일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item279","div_main.form.tab_main.Tabpage6.form.chk_tue","value","ds_data","화요일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item280","div_main.form.tab_main.Tabpage6.form.chk_wed","value","ds_data","수요일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item281","div_main.form.tab_main.Tabpage6.form.chk_thu","value","ds_data","목요일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item282","div_main.form.tab_main.Tabpage6.form.chk_fri","value","ds_data","금요일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item283","div_main.form.tab_main.Tabpage6.form.chk_sat","value","ds_data","토요일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item284","div_main.form.tab_main.Tabpage6.form.chk_sun","value","ds_data","일요일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item287","div_main.form.tab_main.Tabpage6.form.txt_00","value","ds_data","변경내역");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item288","div_main.form.tab_main.Tabpage6.form.chk_hp1","value","ds_data","치부위1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item289","div_main.form.tab_main.Tabpage6.form.chk_hp2","value","ds_data","치부위2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item290","div_main.form.tab_main.Tabpage6.form.chk_hp3","value","ds_data","치부위3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item291","div_main.form.tab_main.Tabpage6.form.chk_hp4","value","ds_data","치부위4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item292","div_main.form.tab_main.Tabpage6.form.chk_hp5","value","ds_data","치부위5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item293","div_main.form.tab_main.Tabpage6.form.chk_hp6","value","ds_data","치부위6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item294","div_main.form.tab_main.Tabpage6.form.chk_hp7","value","ds_data","치부위7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item295","div_main.form.tab_main.Tabpage6.form.chk_hp8","value","ds_data","치부위8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item296","div_main.form.tab_main.Tabpage6.form.chk_hp9","value","ds_data","치부위9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item297","div_main.form.tab_main.Tabpage6.form.chk_hp10","value","ds_data","치부위10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item298","div_main.form.tab_main.Tabpage6.form.chk_hp11","value","ds_data","치부위11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item299","div_main.form.tab_main.Tabpage6.form.chk_hp12","value","ds_data","치부위12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item300","div_main.form.tab_main.Tabpage6.form.chk_hp13","value","ds_data","치부위13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item301","div_main.form.tab_main.Tabpage6.form.chk_hp14","value","ds_data","치부위14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item302","div_main.form.tab_main.Tabpage6.form.chk_hp15","value","ds_data","치부위15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item303","div_main.form.tab_main.Tabpage6.form.chk_hp16","value","ds_data","치부위16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item304","div_main.form.tab_main.Tabpage6.form.chk_hp17","value","ds_data","치부위17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item305","div_main.form.tab_main.Tabpage6.form.chk_hp18","value","ds_data","치부위18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item306","div_main.form.tab_main.Tabpage6.form.chk_hp19","value","ds_data","치부위19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item307","div_main.form.tab_main.Tabpage6.form.chk_hp20","value","ds_data","치부위20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item308","div_main.form.tab_main.Tabpage6.form.chk_hp21","value","ds_data","치부위21");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item309","div_main.form.tab_main.Tabpage6.form.chk_hp22","value","ds_data","치부위22");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item310","div_main.form.tab_main.Tabpage6.form.chk_hp23","value","ds_data","치부위23");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item311","div_main.form.tab_main.Tabpage7.form.chk_a1","value","ds_data","기능훈련a1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item312","div_main.form.tab_main.Tabpage7.form.chk_a8","value","ds_data","기능훈련a2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item313","div_main.form.tab_main.Tabpage7.form.chk_a2","value","ds_data","기능훈련a3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item314","div_main.form.tab_main.Tabpage7.form.chk_a3","value","ds_data","기능훈련a4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item315","div_main.form.tab_main.Tabpage7.form.chk_a4","value","ds_data","기능훈련a5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item316","div_main.form.tab_main.Tabpage7.form.chk_a5","value","ds_data","기능훈련a6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item317","div_main.form.tab_main.Tabpage7.form.chk_a6","value","ds_data","기능훈련a7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item318","div_main.form.tab_main.Tabpage7.form.chk_a7","value","ds_data","기능훈련a8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item319","div_main.form.tab_main.Tabpage7.form.chk_b1","value","ds_data","기능훈련b1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item320","div_main.form.tab_main.Tabpage7.form.chk_b2","value","ds_data","기능훈련b2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item321","div_main.form.tab_main.Tabpage7.form.chk_b3","value","ds_data","기능훈련b3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item322","div_main.form.tab_main.Tabpage7.form.chk_b4","value","ds_data","기능훈련b4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item323","div_main.form.tab_main.Tabpage7.form.chk_b5","value","ds_data","기능훈련b5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item324","div_main.form.tab_main.Tabpage7.form.chk_b6","value","ds_data","기능훈련b6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item325","div_main.form.tab_main.Tabpage7.form.chk_b7","value","ds_data","기능훈련b7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item326","div_main.form.tab_main.Tabpage7.form.chk_b8","value","ds_data","기능훈련b8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item327","div_main.form.tab_main.Tabpage7.form.chk_b9","value","ds_data","기능훈련b9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item328","div_main.form.tab_main.Tabpage7.form.chk_b10","value","ds_data","기능훈련b10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item329","div_main.form.tab_main.Tabpage7.form.chk_b11","value","ds_data","기능훈련b11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item330","div_main.form.tab_main.Tabpage7.form.chk_c1","value","ds_data","기능훈련c1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item331","div_main.form.tab_main.Tabpage7.form.chk_c2","value","ds_data","기능훈련c2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item332","div_main.form.tab_main.Tabpage7.form.chk_c3","value","ds_data","기능훈련c3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item333","div_main.form.tab_main.Tabpage7.form.chk_c4","value","ds_data","기능훈련c4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item334","div_main.form.tab_main.Tabpage7.form.chk_c5","value","ds_data","기능훈련c5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item335","div_main.form.tab_main.Tabpage7.form.chk_c6","value","ds_data","기능훈련c6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item336","div_main.form.tab_main.Tabpage7.form.chk_c7","value","ds_data","기능훈련c7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item337","div_main.form.tab_main.Tabpage7.form.chk_c8","value","ds_data","기능훈련c8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item339","div_main.form.tab_main.Tabpage7.form.edt_func1","value","ds_func","기능자립1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item340","div_main.form.tab_main.Tabpage7.form.edt_func2","value","ds_func","기능자립2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item341","div_main.form.tab_main.Tabpage7.form.edt_func3","value","ds_func","기능자립3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item342","div_main.form.tab_main.Tabpage7.form.edt_func4","value","ds_func","기능자립4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item343","div_main.form.tab_main.Tabpage7.form.edt_func5","value","ds_func","기능자립5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item344","div_main.form.tab_main.Tabpage7.form.edt_func6","value","ds_func","기능자립6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item345","div_main.form.tab_main.Tabpage7.form.edt_func7","value","ds_func","기능자립7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item346","div_main.form.tab_main.Tabpage7.form.edt_func8","value","ds_func","기능자립8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item347","div_main.form.tab_main.Tabpage7.form.edt_func9","value","ds_func","기능자립9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item348","div_main.form.tab_main.Tabpage7.form.edt_func10","value","ds_func","기능자립10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item349","div_main.form.tab_main.Tabpage7.form.edt_func11","value","ds_func","기능자립11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item350","div_main.form.tab_main.Tabpage7.form.edt_func12","value","ds_func","기능자립12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_main.form.tab_main.Tabpage1.form.mae_score1","value","ds_data","운동점수1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_main.form.tab_main.Tabpage1.form.mae_score2","value","ds_data","운동점수2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_main.form.tab_main.Tabpage1.form.mae_score3","value","ds_data","운동점수3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_main.form.tab_main.Tabpage1.form.mae_score4","value","ds_data","운동점수4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_main.form.tab_main.Tabpage1.form.mae_score5","value","ds_data","운동점수5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_main.form.tab_main.Tabpage1.form.mae_score6","value","ds_data","운동점수6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_main.form.tab_main.Tabpage1.form.mae_score7","value","ds_data","운동점수7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","div_main.form.tab_main.Tabpage1.form.mae_score8","value","ds_data","운동점수8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","div_main.form.tab_main.Tabpage1.form.mae_score9","value","ds_data","운동점수9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","div_main.form.tab_main.Tabpage1.form.mae_score10","value","ds_data","운동점수10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","div_main.form.tab_main.Tabpage1.form.mae_score11","value","ds_data","운동점수");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item131","div_main.form.tab_main.Tabpage2.form.mae_rpl1","value","ds_data","통증정RT1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item132","div_main.form.tab_main.Tabpage2.form.mae_rpl2","value","ds_data","통증정RT2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item133","div_main.form.tab_main.Tabpage2.form.mae_rpl3","value","ds_data","통증정RT3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item134","div_main.form.tab_main.Tabpage2.form.mae_rpl4","value","ds_data","통증정RT4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item135","div_main.form.tab_main.Tabpage2.form.mae_rpl5","value","ds_data","통증정RT5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item136","div_main.form.tab_main.Tabpage2.form.mae_rpl6","value","ds_data","통증정RT6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item137","div_main.form.tab_main.Tabpage2.form.mae_rpl7","value","ds_data","통증정RT7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item138","div_main.form.tab_main.Tabpage2.form.mae_rpl8","value","ds_data","통증정RT8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item139","div_main.form.tab_main.Tabpage2.form.mae_rpl9","value","ds_data","통증정RT9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item140","div_main.form.tab_main.Tabpage2.form.mae_rpl10","value","ds_data","통증정RT10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item141","div_main.form.tab_main.Tabpage2.form.mae_rpl11","value","ds_data","통증정RT11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item142","div_main.form.tab_main.Tabpage2.form.mae_rpl12","value","ds_data","통증정RT12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item143","div_main.form.tab_main.Tabpage2.form.mae_rpl13","value","ds_data","통증정RT13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item144","div_main.form.tab_main.Tabpage2.form.mae_rpl14","value","ds_data","통증정RT14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item145","div_main.form.tab_main.Tabpage2.form.mae_rpl15","value","ds_data","통증정RT15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item146","div_main.form.tab_main.Tabpage2.form.mae_rpl16","value","ds_data","통증정RT16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item147","div_main.form.tab_main.Tabpage2.form.mae_rpl17","value","ds_data","통증정RT17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item148","div_main.form.tab_main.Tabpage2.form.mae_rpl18","value","ds_data","통증정RT18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item149","div_main.form.tab_main.Tabpage2.form.mae_rpl19","value","ds_data","통증정RT19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item150","div_main.form.tab_main.Tabpage2.form.mae_rpl20","value","ds_data","통증정RT20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item171","div_main.form.tab_main.Tabpage2.form.mae_lpl1","value","ds_data","통증정LT1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item172","div_main.form.tab_main.Tabpage2.form.mae_lpl2","value","ds_data","통증정LT2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item173","div_main.form.tab_main.Tabpage2.form.mae_lpl3","value","ds_data","통증정LT3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item174","div_main.form.tab_main.Tabpage2.form.mae_lpl4","value","ds_data","통증정LT4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item175","div_main.form.tab_main.Tabpage2.form.mae_lpl5","value","ds_data","통증정LT5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item176","div_main.form.tab_main.Tabpage2.form.mae_lpl6","value","ds_data","통증정LT6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item177","div_main.form.tab_main.Tabpage2.form.mae_lpl7","value","ds_data","통증정LT7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item178","div_main.form.tab_main.Tabpage2.form.mae_lpl8","value","ds_data","통증정LT8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item179","div_main.form.tab_main.Tabpage2.form.mae_lpl9","value","ds_data","통증정LT9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item180","div_main.form.tab_main.Tabpage2.form.mae_lpl10","value","ds_data","통증정LT10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item181","div_main.form.tab_main.Tabpage2.form.mae_lpl11","value","ds_data","통증정LT11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item182","div_main.form.tab_main.Tabpage2.form.mae_lpl12","value","ds_data","통증정LT12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item183","div_main.form.tab_main.Tabpage2.form.mae_lpl13","value","ds_data","통증정LT13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item184","div_main.form.tab_main.Tabpage2.form.mae_lpl14","value","ds_data","통증정LT14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item185","div_main.form.tab_main.Tabpage2.form.mae_lpl15","value","ds_data","통증정LT15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item186","div_main.form.tab_main.Tabpage2.form.mae_lpl16","value","ds_data","통증정LT16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item187","div_main.form.tab_main.Tabpage2.form.mae_lpl17","value","ds_data","통증정LT17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item188","div_main.form.tab_main.Tabpage2.form.mae_lpl18","value","ds_data","통증정LT18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item189","div_main.form.tab_main.Tabpage2.form.mae_lpl19","value","ds_data","통증정LT19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item190","div_main.form.tab_main.Tabpage2.form.mae_lpl20","value","ds_data","통증정LT20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item351","div_main.form.tab_main.Tabpage2.form.sta_avg","text","ds_data","평균통증");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item352","div_search.form.cal_date_to_pic","value","ds_search","DATE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item355","div_search.form.cal_date_from_pic","value","ds_search","DATE_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item285","div_main.form.tab_main.Tabpage6.form.cal_stop_from","value","ds_data","중단시작");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item286","div_main.form.tab_main.Tabpage6.form.cal_stop_to","value","ds_data","중단종료");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item353","div_main.form.tab_main.Tabpage6.form.edt_hp23","value","ds_data","추가부위");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_main.form.chk_group1","value","ds_data","치료그룹");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_main.form.chk_group2","value","ds_data","치료그룹");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item338","div_main.form.tab_main.Tabpage7.form.txt_remark","value","ds_data","훈련비고");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00303_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00303_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00303_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00303_P01
         * 화면명   	: 물리(작업)치료·기능회복훈련 계획
         * 화면설명 	: 물리(작업)치료·기능회복훈련 계획을 입력, 수정하는 팝업
         * 작성일   	: 2022-06-09
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *
         ***********************************************************************
         * 비고 : 마이너스 좌표계에 시간 div 배치중
         */
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        const fv_sicode = this.parent.SICODE;
        const fv_number = this.parent.NUMBER;
        const fv_code = this.parent.CODE;
        const mulArray = new Array();	// 물리치료 저장용 배열
        this.fv_tFromId = "";	// 시간 from 컴포넌트 id
        this.fv_tToId = "";	// 시간 to 컴포넌트 id
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 삽입, 수정 공통 함수를 사용하기 위해 gv_curWinKey를 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00303_P01";

        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "NUMBER", fv_number);
        	this.ds_search.setColumn(0, "CODE", fv_code);

        	// 리포트 출력 초기화
        	this.ds_report.setColumn(0, "SIGN", 1);

        	this.fn_search();
        };
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        // 저장 전 작업
        this.fn_save_pre = function()
        {
        	if (this.ds_data.rowcount == 0)
        	{
        		this.alert("저장할 항목이 없습니다.");
        		return false;
        	}

        	// 작성자 validation
        	const staffid = this.ds_data.getColumn(0, "평가자코드");
        	if (Sct.Util.isEmpty(staffid))
        	{
        		this.alert("작성자를 지정하세요");
        		return false;
        	}

        	// 치료기간 validation
        	const from = this.ds_data.getColumn(0, "계획시작");
        	const to = this.ds_data.getColumn(0, "계획종료");
        	if (Sct.Util.isEmpty(from))
        	{
        		this.alert("계획기간 설정이 정확하지 않습니다.");
        		return false;
        	}

        	if (from > to)
        	{
        		this.alert("계획기간 설정이 정확하지 않습니다.");
        		return false;
        	}

        	// 운동관절, 운동점수 스트링 만들기
        	let exerStr = "";
        	let exesStr = "";
        	for (let i = 1; i <= 10; i++)
        	{
        		exerStr += this.ds_data.getColumn(0, "운동관절" + i);
        		exesStr += this.ds_data.getColumn(0, "운동점수" + i);
        	}
        	this.ds_data.setColumn(0, "exer", exerStr);
        	this.ds_data.setColumn(0, "exes", exesStr);

        	// 근력평가 스트링 만들기
        	let strRightUpStr = "";
        	let strLeftUpStr = "";
        	let strRightDownStr = "";
        	let strLeftDownStr = "";
        	for (let i = 1; i <= 6; i++)
        	{
        		strRightUpStr += this.ds_data.getColumn(0, "근력우상" + i);
        		strLeftUpStr += this.ds_data.getColumn(0, "근력좌상" + i);
        		strRightDownStr += this.ds_data.getColumn(0, "근력우하" + i);
        		strLeftDownStr += this.ds_data.getColumn(0, "근력좌하" + i);
        	}
        	this.ds_data.setColumn(0, "rightup", strRightUpStr);
        	this.ds_data.setColumn(0, "leftup", strLeftUpStr);
        	this.ds_data.setColumn(0, "rightdown", strRightDownStr);
        	this.ds_data.setColumn(0, "leftdown", strLeftDownStr);

        	// 기본동작 스트링 만들기
        	let bmStr = "";
        	for (let i = 1; i <= 8; i++)
        	{
        		bmStr += this.ds_data.getColumn(0, "기본동작" + i);
        	}
        	this.ds_data.setColumn(0, "bm", bmStr);

        	// 통증형태, 통증정도 스트링 만들기
        	let rpsStr = "";
        	let lpsStr = "";
        	let rplStr = "";
        	let lplStr = "";
        	for (let i = 1; i <= 20; i++)
        	{
        		rpsStr += this.ds_data.getColumn(0, "통증형RT" + i);
        		lpsStr += this.ds_data.getColumn(0, "통증형LT" + i);
        		rplStr += this.ds_data.getColumn(0, "통증정RT" + i).padStart(2, '0');
        		lplStr += this.ds_data.getColumn(0, "통증정LT" + i).padStart(2, '0');
        	}
        	this.ds_data.setColumn(0, "rps", rpsStr);
        	this.ds_data.setColumn(0, "lps", lpsStr);
        	this.ds_data.setColumn(0, "rpl", rplStr);
        	this.ds_data.setColumn(0, "lpl", lplStr);

        	// 균형감, 걸음걸이 스트링 만들기
        	let perStr = "";
        	let walkStr = "";
        	for (let i = 1; i <= 10; i++)
        	{
        		perStr += this.ds_data.getColumn(0, "균형감" + i);
        		walkStr += this.ds_data.getColumn(0, "걸음걸이" + i);
        	}
        	this.ds_data.setColumn(0, "perspective", perStr);
        	this.ds_data.setColumn(0, "walk", walkStr);

        	// rom 스트링 만들기
        	let romrtStr = "";
        	let romltStr = "";
        	for (let i = 1; i <= 20; i++)
        	{
        		romrtStr += this.ds_data.getColumn(0, "romrt" + i).padStart(4, " ");
        		romltStr += this.ds_data.getColumn(0, "romlt" + i).padStart(4, " ");
        	}
        	this.ds_data.setColumn(0, "romrt", romrtStr);
        	this.ds_data.setColumn(0, "romlt", romltStr);

        	// 물리치료 세팅
        	mulArray.splice(0, mulArray.length);
        	for (let i = 1; i <= 21; i++)
        	{
        		if (this.div_main.form.tab_main.Tabpage6.form.components["chk_pr" + i].value == 1)
        		{
        			const prId = this.div_main.form.tab_main.Tabpage6.form.components["chk_pr" + i].id;

        			let prCode = "";
        			switch(prId)
        			{
        				case "chk_pr1" :
        					prCode = "PR0111";
        					break;
        				case "chk_pr2" :
        					prCode = "PR0112";
        					break;
        				case "chk_pr3" :
        					prCode = "PR0113";
        					break;
        				case "chk_pr4" :
        					prCode = "PR0114";
        					break;
        				case "chk_pr5" :
        					prCode = "PR0115";
        					break;
        				case "chk_pr6" :
        					prCode = "PR0116";
        					break;
        				case "chk_pr7" :
        					prCode = "PR0117";
        					break;
        				case "chk_pr8" :
        					prCode = "PR0121";
        					break;
        				case "chk_pr9" :
        					prCode = "PR0122";
        					break;
        				case "chk_pr10" :
        					prCode = "PR0123";
        					break;
        				case "chk_pr11" :
        					prCode = "PR0124";
        					break;
        				case "chk_pr12" :
        					prCode = "PR0125";
        					break;
        				case "chk_pr13" :
        					prCode = "PR0126";
        					break;
        				case "chk_pr14" :
        					prCode = "PR0131";
        					break;
        				case "chk_pr15" :
        					prCode = "PR0132";
        					break;
        				case "chk_pr16" :
        					prCode = "PR0133";
        					break;
        				case "chk_pr17" :
        					prCode = "PR0134";
        					break;
        				case "chk_pr18" :
        					prCode = "PR0135";
        					break;
        				case "chk_pr19" :
        					prCode = "PR0136";
        					break;
        				case "chk_pr20" :
        					prCode = "PR0137";
        					break;
        				case "chk_pr21" :
        					prCode = "PR0138";
        					break;
        				default:
        					prCode = "      ";
        			}

        			mulArray.push(prCode);
        		}
        	}
        	for (let i = 0; i < 8; i++)
        	{
        		if (mulArray[i] != undefined)
        			this.ds_data.setColumn(0, "치료0" + (i + 1), mulArray[i]);
        		else
        			this.ds_data.setColumn(0, "치료0" + (i + 1), "      ");
        	}

        	// 치료시간 세팅
        	let hsHour = this.ds_data.getColumn(0, "치료시작시");
        	let hsMin = this.ds_data.getColumn(0, "치료시작분");
        	let heHour = this.ds_data.getColumn(0, "치료종료시");
        	let heMin = this.ds_data.getColumn(0, "치료종료분");
        	if (Sct.Util.isEmpty(hsHour.trim()))
        		hsHour = "00";
        	if (Sct.Util.isEmpty(hsMin.trim()))
        		hsMin = "00";
        	if (Sct.Util.isEmpty(heHour.trim()))
        		heHour = "00";
        	if (Sct.Util.isEmpty(heMin.trim()))
        		heMin = "00";
        	if (hsHour == "00" && heHour == "00")
        	{
        		hsMin = "00";
        		heMin = "00";
        	}
        	this.ds_data.setColumn(0, "치료시간", hsHour + ":" + hsMin + "-" + heHour + ":" + heMin);

        	// 치부위 스트링 만들기
        	let hpStr = "";
        	for (let i = 1; i <= 23; i++)
        	{
        		hpStr += this.ds_data.getColumn(0, "치부위" + i);
        	}
        	this.ds_data.setColumn(0, "hp", hpStr);

        	// 기능훈련 스트링 만들기
        	let tra = "";
        	let trb = "";
        	let trc = "";

        	tra += this.ds_data.getColumn(0, "기능훈련a1");
        	for (let i = 3; i <= 8; i++)
        	{
        		tra += this.ds_data.getColumn(0, "기능훈련a" + i);
        	}
        	tra += this.ds_data.getColumn(0, "기능훈련a2");

        	for (let i = 1; i <= 11; i++)
        	{
        		trb += this.ds_data.getColumn(0, "기능훈련b" + i);
        	}

        	for (let i = 1; i <= 8; i++)
        	{
        		trc += this.ds_data.getColumn(0, "기능훈련c" + i);
        	}

        	this.ds_data.setColumn(0, "기능훈련a", tra);
        	this.ds_data.setColumn(0, "기능훈련b", trb);
        	this.ds_data.setColumn(0, "기능훈련c", trc);

        	// 훈련시간 세팅
        	const time1 = this.div_main.form.tab_main.Tabpage7.form.mae_time1.value;
        	const time2 = this.div_main.form.tab_main.Tabpage7.form.mae_time2.value;
        	const time3 = this.div_main.form.tab_main.Tabpage7.form.mae_time3.value;
        	const time4 = this.div_main.form.tab_main.Tabpage7.form.mae_time4.value;
        	const time5 = this.div_main.form.tab_main.Tabpage7.form.mae_time5.value;
        	const time6 = this.div_main.form.tab_main.Tabpage7.form.mae_time6.value;

        	// 둘중 하나라도 있으면 빈값 체크
        	const timesize1 = time1.replace(" ", "").length;
        	const timesize2 = time2.replace(" ", "").length;
        	const timesize3 = time3.replace(" ", "").length;
        	const timesize4 = time4.replace(" ", "").length;
        	const timesize5 = time5.replace(" ", "").length;
        	const timesize6 = time6.replace(" ", "").length;

        	if((timesize1 == 4 && timesize2 != 4) || (timesize1 != 4 && timesize2 == 4) || time1 > time2){
        		this.alert("신체기능훈련 시간이 잘못입력 되었습니다.");
        		return false;
        	}

        	if((timesize3 == 4 && timesize4 != 4) || (timesize3 != 4 && timesize4 == 4) || time3 > time4){
        		this.alert("기본동작훈련 시간이 잘못입력 되었습니다.");
        		return false;
        	}

        	if((timesize5 == 4 && timesize6 != 4) || (timesize5 != 4 && timesize6 == 4) || time5 > time6){
        		this.alert("일상생활동작훈련 시간이 잘못입력 되었습니다.");
        		return false;
        	}

        	this.ds_data.setColumn(0, "시작시a", time1.substr(0, 2));
        	this.ds_data.setColumn(0, "시작분a", time1.substr(2, 2));
        	this.ds_data.setColumn(0, "종료시a", time2.substr(0, 2));
        	this.ds_data.setColumn(0, "종료분a", time2.substr(2, 2));
        	this.ds_data.setColumn(0, "시작시b", time3.substr(0, 2));
        	this.ds_data.setColumn(0, "시작분b", time3.substr(2, 2));
        	this.ds_data.setColumn(0, "종료시b", time4.substr(0, 2));
        	this.ds_data.setColumn(0, "종료분b", time4.substr(2, 2));
        	this.ds_data.setColumn(0, "시작시c", time5.substr(0, 2));
        	this.ds_data.setColumn(0, "시작분c", time5.substr(2, 2));
        	this.ds_data.setColumn(0, "종료시c", time6.substr(0, 2));
        	this.ds_data.setColumn(0, "종료분c", time6.substr(2, 2));

        	const saHour = this.ds_data.getColumn(0, "시작시a");
        	const saMin = this.ds_data.getColumn(0, "시작분a");
        	const eaHour = this.ds_data.getColumn(0, "종료시a");
        	const eaMin = this.ds_data.getColumn(0, "종료분a");
        	const sbHour = this.ds_data.getColumn(0, "시작시b");
        	const sbMin = this.ds_data.getColumn(0, "시작분b");
        	const ebHour = this.ds_data.getColumn(0, "종료시b");
        	const ebMin = this.ds_data.getColumn(0, "종료분b");
        	const scHour = this.ds_data.getColumn(0, "시작시c");
        	const scMin = this.ds_data.getColumn(0, "시작분c");
        	const ecHour = this.ds_data.getColumn(0, "종료시c");
        	const ecMin = this.ds_data.getColumn(0, "종료분c");

        	const saTime = (saHour == "" ? "  " : saHour) + ":" + (saMin == "" ? "  " : saMin) + "-" + (eaHour == "" ? "  " : eaHour) + ":" + (eaMin == "" ? "  " : eaMin);
        	const sbTime = (sbHour == "" ? "  " : sbHour) + ":" + (sbMin == "" ? "  " : sbMin) + "-" + (ebHour == "" ? "  " : ebHour) + ":" + (ebMin == "" ? "  " : ebMin);
        	const scTime = (scHour == "" ? "  " : scHour) + ":" + (scMin == "" ? "  " : scMin) + "-" + (ecHour == "" ? "  " : ecHour) + ":" + (ecMin == "" ? "  " : ecMin);

        	this.ds_data.setColumn(0, "기능시a", saTime);
        	this.ds_data.setColumn(0, "기능시b", sbTime);
        	this.ds_data.setColumn(0, "기능시c", scTime);

        	this.ds_data.set_updatecontrol(false);
        	const no = this.ds_data.getColumn(0, "ha_number");
        	if (Sct.Util.isEmpty(no))
        	{
        		this.ds_data.setRowType(0, Dataset.ROWTYPE_INSERT);
        		trace(this.ds_data.getColumn(0, "평가일"));
        		this.ds_search.setColumn(0, "DATE", this.ds_data.getColumn(0, "평가일"));
        	}
        	else
        	{
        		this.ds_data.setRowType(0, Dataset.ROWTYPE_UPDATE);
        		this.ds_search.setColumn(0, "DATE", "");
        	}
        	this.ds_data.set_updatecontrol(true);
        	//trace("DAY00303_P01 저장 데이터셋 타입 : " + this.ds_data.getRowType(0));

        	return true;
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 조회
        this.fn_search = function()
        {
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_data=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00303_P01.DAY00303_P01_DS_DATA_S ";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 욕구사정 기록조회
        this.fn_funcSearch = function()
        {
        	const svcId = "searchFunc";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_func=output1";
        	const argument = "method=getList"
        				   + " sqlId=DAY00303_P01.DAY00303_P01_DS_FUNC_S"
        				   + " SICODE=" + fv_sicode
        				   + " CODE=" + fv_code
        				   + " HEAL_DATE_FROM=" + this.ds_data.getColumn(0, "계획시작");
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 저장
        this.fn_save = function()
        {
        	if (!this.fn_save_pre()) return;

        	const svcId = "save";
        	const params = "/DAY00303_P01Controller.do";
        	const inDatasets = "input1=ds_data:U";
        	const outDatasets = "";
        	const argument = "method=save";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			const number = this.ds_data.getColumn(0, "ha_number");
        			if (Sct.Util.isEmpty(number))
        			{
        				this.ds_data.setColumn(0, "평가일", Sct.Util.getToday());
        				this.ds_data.setColumn(0, "평가자명", nexacro.getApplication().gds_userInfo.getColumn(0, "c_name").trim());
        				this.ds_data.setColumn(0, "평가자직종", nexacro.getApplication().gds_userInfo.getColumn(0, "c_dutyname"));
        				this.ds_data.setColumn(0, "평가자코드", nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid"));
        			}

        			this.fn_afterSearch();
        		}
        		else if (strSvcID == "searchFunc")
        		{
        			if (this.ds_func.rowcount != 0)
        			{
        				// 욕구기간 세팅
        				const wanFrom = this.ds_func.getColumn(0, "욕구기간1");
        				const wanTo = this.ds_func.getColumn(0, "욕구기간2");
        				const wanFromStr = this.fn_getDateStringDot(wanFrom);
        				const wanToStr = this.fn_getDateStringDot(wanTo);
        				const wanStr = "욕구기간 : " + wanFromStr + " - " + wanToStr;
        				this.div_main.form.tab_main.Tabpage7.form.sta_func_term.set_text(wanStr);

        				// 수행능력 색 바꾸기
        				for (let i = 1; i <= 12; i++)
        				{
        					const val = this.ds_func.getColumn(0, "기능자립" + i);
        					if (val == "부분도움" || val == "완전도움")
        						this.div_main.form.tab_main.Tabpage7.form.components["edt_func" + i].set_color("red");
        					else
        						this.div_main.form.tab_main.Tabpage7.form.components["edt_func" + i].set_color("");
        				}
        			}
        		}
        		else if (strSvcID == "save")
        		{
        			this.alert("저장되었습니다.");
        			this.fn_search();
        		}
        	}
        	else
        	{
        		this.alert(strErrorMsg);
        		return false;
        	}
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/
         /* 날짜 스트링 만들기 Dot
         *
         * @param date DATE
         * @return String yyyy.MM.dd
         */
        this.fn_getDateStringDot = function(date)
        {
        	const year = date.getFullYear() + "";
        	const month = ((date.getMonth() + 1) + "").padStart(2, '0');
        	const day = (date.getDate() + "").padStart(2, '0');

        	return year + "." + month + "." + day;
        };

        /* 날짜 스트링 만들기
         *
         * @param date DATE
         * @return String yyyyMMdd
         */
        this.fn_getDateString = function(date)
        {
        	const year = date.getFullYear() + "";
        	const month = ((date.getMonth() + 1) + "").padStart(2, '0');
        	const day = (date.getDate() + "").padStart(2, '0');

        	return year + month + day;
        };

        // 균형감 스핀이벤트
        this.fn_perSpinEvent = function(obj, e)
        {
        	//trace(e.postvalue);
        	const idStr = obj.id;
        	//trace("idStr : " + idStr);

        	let staStr = "";
        	switch(idStr)
        	{
        		case "spn_per1" :
        			staStr = "sta_per1_val";
        			break;
        		case "spn_per2" :
        			staStr = "sta_per2_val";
        			break;
        		case "spn_per3" :
        			staStr = "sta_per3_val";
        			break;
        		case "spn_per4" :
        			staStr = "sta_per4_val";
        			break;
        		case "spn_per5" :
        			staStr = "sta_per5_val";
        			break;
        		case "spn_per6" :
        			staStr = "sta_per6_val";
        			break;
        		case "spn_per7" :
        			staStr = "sta_per7_val";
        			break;
        		case "spn_per8" :
        			staStr = "sta_per8_val";
        			break;
        		case "spn_per9" :
        			staStr = "sta_per9_val";
        			break;
        		case "spn_per10" :
        			staStr = "sta_per10_val";
        			break;
        		default:
        	}

        	// 점수 값 세팅및 항목 색 변경
        	const num = obj.id.substr(7);
        	this.ds_data.setColumn(0, "균형감" + num, e.postvalue);
        	for (let i = 0; i <=2; i++)
        	{
        		const objSta = this.div_main.form.tab_main.Tabpage3.form.components[staStr + i];
        		if (objSta != undefined)
        		{
        			if (i == e.postvalue)
        				objSta.set_cssclass("sta_c1e699");
        			else
        				objSta.set_cssclass("");
        		}
        	}

        	// 합계와 총점 구하기
        	let tot = 0;
        	for (let i = 1; i <= 10; i++)
        	{
        		tot += parseInt(this.ds_data.getColumn(0, "균형감" + i));
        	}
        	this.ds_data.setColumn(0, "균형감합계", tot);

        	const allTot = parseInt(this.ds_data.getColumn(0, "균형감합계")) + parseInt(this.ds_data.getColumn(0, "걸음합계"));
        	this.ds_data.setColumn(0, "총점", allTot);
        };

        // 걸음걸이 스핀 이벤트
        this.fn_walkSpinEvent = function(obj, e)
        {
        	const idStr = obj.id;
        	let staStr = "";
        	switch(idStr) {
        		case "spn_walk1" :
        			staStr = "sta_walk1_val";
        			break;
        		case "spn_walk2" :
        			staStr = "sta_walk2_val";
        			break;
        		case "spn_walk3" :
        			staStr = "sta_walk3_val";
        			break;
        		case "spn_walk4" :
        			staStr = "sta_walk4_val";
        			break;
        		case "spn_walk5" :
        			staStr = "sta_walk5_val";
        			break;
        		case "spn_walk6" :
        			staStr = "sta_walk6_val";
        			break;
        		case "spn_walk7" :
        			staStr = "sta_walk7_val";
        			break;
        		case "spn_walk8" :
        			staStr = "sta_walk8_val";
        			break;
        		case "spn_walk9" :
        			staStr = "sta_walk9_val";
        			break;
        		case "spn_walk10" :
        			staStr = "sta_walk10_val";
        			break;
        		default:
        	}

        	// 점수 값 세팅 및 항목 색 변경
        	const num = obj.id.substr(8);
        	this.ds_data.setColumn(0, "걸음걸이" + num, e.postvalue);
        	for (let i = 0; i <= 2; i++)
        	{
        		const objSta = this.div_main.form.tab_main.Tabpage3.form.components[staStr + i];
        		if (objSta != undefined)
        		{
        			if (i == e.postvalue)
        				objSta.set_cssclass("sta_c1e699");
        			else
        				objSta.set_cssclass("");
        		}
        	}

        	// 걸음합계, 총점 구하기
        	let tot = 0;
        	for (let i = 1; i <= 10; i++)
        	{
        		tot += parseInt(this.ds_data.getColumn(0, "걸음걸이" + i));
        	}
        	this.ds_data.setColumn(0, "걸음합계", tot);

        	const allTot = parseInt(this.ds_data.getColumn(0, "균형감합계")) + parseInt(this.ds_data.getColumn(0, "걸음합계"));
        	this.ds_data.setColumn(0, "총점", allTot);
        };

        // 조회후 화면 세팅
        this.fn_afterSearch = function()
        {
        	// 근력 및 adl 점수 세팅
        	for (let i = 1; i <= 6; i++)
        	{
        		// 근력 항목 배경색 변경
        		if (this.ds_data.getColumn(0, "근력우상" + i) == 1)
        			this.div_main.form.tab_main.Tabpage1.form.components["sta_sru" + i].set_cssclass("sta_c1e699");
        		if (this.ds_data.getColumn(0, "근력좌상" + i) == 1)
        			this.div_main.form.tab_main.Tabpage1.form.components["sta_slu" + i].set_cssclass("sta_c1e699");
        		if (this.ds_data.getColumn(0, "근력우하" + i) == 1)
        			this.div_main.form.tab_main.Tabpage1.form.components["sta_srd" + i].set_cssclass("sta_c1e699");
        		if (this.ds_data.getColumn(0, "근력좌하" + i) == 1)
        			this.div_main.form.tab_main.Tabpage1.form.components["sta_sld" + i].set_cssclass("sta_c1e699");

        		// adl 체크박스 및 항목 세팅
        		for (let j = 0; j <= 5; j++)
        		{
        			if (j == 3)
        				continue;

        			const adl = this.ds_data.getColumn(0, "adl점수" + i);
        			if (adl == j)
        			{
        				this.div_main.form.tab_main.Tabpage5.form.components["chk_adl" + i + "_" + j].set_value(parseInt(adl));
        				this.div_main.form.tab_main.Tabpage5.form.components["sta_adl" + i + "_" + j].set_cssclass("sta_c1e699");
        			}
        			else
        			{
        				this.div_main.form.tab_main.Tabpage5.form.components["chk_adl" + i + "_" + j].set_value(-1);
        				this.div_main.form.tab_main.Tabpage5.form.components["sta_adl" + i + "_" + j].set_cssclass("");
        			}
        		}

        	}

        	// 통증 세팅
        	let plTot = 0;
        	let plTotCount = 0;
        	for (let i = 1; i <= 20; i++)
        	{
        		const rpl = this.ds_data.getColumn(0, "통증정RT" + i);
        		const lpl = this.ds_data.getColumn(0, "통증정LT" + i);

        		const val1 = parseInt(rpl);
        		const val2 = parseInt(lpl);

        		this.ds_data.setColumn(0, "통증정RT" + i, val1);
        		this.ds_data.setColumn(0, "통증정LT" + i, val2);

        		if (val1 != 0)
        		{
        			plTot += parseInt(val1);
        			plTotCount++;
        		}

        		if (val2 != 0)
        		{
        			plTot += parseInt(val2);
        			plTotCount++;
        		}
        	}
        	const avg = plTot / plTotCount;
        	//trace("avg : " + avg);
        	if (new String(avg).valueOf() == "NaN")
        		this.ds_data.setColumn(0, "평균통증", "");
        	else
        		this.ds_data.setColumn(0, "평균통증", Math.floor(avg) + " 점");

        	// 균형감, 걸음걸이 세팅
        	for (let i = 1; i <= 10; i++)
        	{
        		//trace("균형감, 걸음걸이 i : " + i);
        		const perVal = this.ds_data.getColumn(0, "균형감" + i);
        		const walkVal = this.ds_data.getColumn(0, "걸음걸이" + i);

        		for (let j = 0; j <= 2; j++)
        		{
        			//trace("균형감, 걸음걸이 j : " + j);
        			const perObj = this.div_main.form.tab_main.Tabpage3.form.components["sta_per" + i + "_val" + j];
        			const walkObj = this.div_main.form.tab_main.Tabpage3.form.components["sta_walk" + i + "_val" + j];
        			if (perObj != undefined)
        			{
        				if (j == perVal)
        					perObj.set_cssclass("sta_c1e699");
        				else
        					perObj.set_cssclass("");
        			}

        			if (walkObj != undefined)
        			{
        				if (j == walkVal)
        					walkObj.set_cssclass("sta_c1e699");
        				else
        					walkObj.set_cssclass("");
        			}
        		}
        	}

        	// 물리치료 체크박스 세팅
        	for (let i = 1; i <= 8; i++)
        	{
        		const mulVal = this.ds_data.getColumn(0, "치료0" + i);
        		//trace(mulVal);

        		let chkStr = "";
        		switch(mulVal)
        		{
        			case "PR0111" :
        				chkStr = "chk_pr1";
        				break;
        			case "PR0112" :
        				chkStr = "chk_pr2";
        				break;
        			case "PR0113" :
        				chkStr = "chk_pr3";
        				break;
        			case "PR0114" :
        				chkStr = "chk_pr4";
        				break;
        			case "PR0115" :
        				chkStr = "chk_pr5";
        				break;
        			case "PR0116" :
        				chkStr = "chk_pr6";
        				break;
        			case "PR0117" :
        				chkStr = "chk_pr7";
        				break;
        			case "PR0121" :
        				chkStr = "chk_pr8";
        				break;
        			case "PR0122" :
        				chkStr = "chk_pr9";
        				break;
        			case "PR0123" :
        				chkStr = "chk_pr10";
        				break;
        			case "PR0124" :
        				chkStr = "chk_pr11";
        				break;
        			case "PR0125" :
        				chkStr = "chk_pr12";
        				break;
        			case "PR0126" :
        				chkStr = "chk_pr13";
        				break;
        			case "PR0131" :
        				chkStr = "chk_pr14";
        				break;
        			case "PR0132" :
        				chkStr = "chk_pr15";
        				break;
        			case "PR0133" :
        				chkStr = "chk_pr16";
        				break;
        			case "PR0134" :
        				chkStr = "chk_pr17";
        				break;
        			case "PR0135" :
        				chkStr = "chk_pr18";
        				break;
        			case "PR0136" :
        				chkStr = "chk_pr19";
        				break;
        			case "PR0137" :
        				chkStr = "chk_pr20";
        				break;
        			case "PR0138" :
        				chkStr = "chk_pr21";
        				break;
        			default:
        				continue;
        		}

        		this.div_main.form.tab_main.Tabpage6.form.components[chkStr].set_value(1);
        	}

        	//trace("중단시작 : " + this.ds_data.getColumn(0, "중단시작"));
        	//trace("중단종료 : " + this.ds_data.getColumn(0, "중단종료"));

        	// 일시중단기간
        	if (this.ds_data.getColumn(0, "중단시작") == '20000101')
        		this.ds_data.setColumn(0, "중단시작", "");
        	if (this.ds_data.getColumn(0, "중단종료") == '20000101')
        		this.ds_data.setColumn(0, "중단종료", "");

        	// 치료부위 기타
        	if (this.ds_data.getColumn(0, "치부위23") == 1)
        		this.div_main.form.tab_main.Tabpage6.form.edt_hp23.set_enable(true);
        	else
        		this.div_main.form.tab_main.Tabpage6.form.edt_hp23.set_enable(false);

        	// 훈련시간 세팅
        	const saTime = this.ds_data.getColumn(0, "시작시a") + this.ds_data.getColumn(0, "시작분a");
        	const eaTime = this.ds_data.getColumn(0, "종료시a") + this.ds_data.getColumn(0, "종료분a");
        	const sbTime = this.ds_data.getColumn(0, "시작시b") + this.ds_data.getColumn(0, "시작분b");
        	const ebTime = this.ds_data.getColumn(0, "종료시b") + this.ds_data.getColumn(0, "종료분b");
        	const scTime = this.ds_data.getColumn(0, "시작시c") + this.ds_data.getColumn(0, "시작분c");
        	const ecTime = this.ds_data.getColumn(0, "종료시c") + this.ds_data.getColumn(0, "종료분c");

        	this.div_main.form.tab_main.Tabpage7.form.mae_time1.set_value(saTime);
        	this.div_main.form.tab_main.Tabpage7.form.mae_time2.set_value(eaTime);
        	this.div_main.form.tab_main.Tabpage7.form.mae_time3.set_value(sbTime);
        	this.div_main.form.tab_main.Tabpage7.form.mae_time4.set_value(ebTime);
        	this.div_main.form.tab_main.Tabpage7.form.mae_time5.set_value(scTime);
        	this.div_main.form.tab_main.Tabpage7.form.mae_time6.set_value(ecTime);
        };

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 출력
        this.fn_report = function(obj,e)
        {
        	if (Sct.Util.isEmpty(this.ds_data.getColumn(0, "ha_number")))
        	{
        		this.alert("물리치료 평가정보 저장후 출력하면 됩니다!");
        		return;
        	}

        	const num = obj.id.substr(10);
        	let isMul = false;
        	switch(num)
        	{
        		case "1" :
        			this.ubiReportFile = "DAY00303_R01.jrf";
        			break;
        		case "2" :
        			this.ubiReportFile = "DAY00303_R02.jrf";
        			break;
        		case "3" :
        			this.ubiReportFile = "DAY00303_R03.jrf";
        			break;
        		case "4" :
        			this.ubiReportFile = "DAY00303_R04.jrf";
        			break;
        		case "5" :
        			isMul = true;
        			this.ubiReportFile = "DAY00303_R01.jrf,DAY00303_R02.jrf,DAY00303_R03.jrf,DAY00303_R04.jrf";
        			break;
        		case "6" :
        			this.ubiReportFile = "DAY00303_R05.jrf";
        			break;
        		case "7" :
        			this.ubiReportFile = "DAY00303_R06.jrf";
        			break;
        		case "8" :
        			this.ubiReportFile = "DAY00303_R07.jrf";
        			break;
        		case "9" :
        			isMul = true;
        			this.ubiReportFile = "DAY00303_R01.jrf,DAY00303_R02.jrf,DAY00303_R03.jrf,DAY00303_R04.jrf"
        							   + ",DAY00303_R05.jrf,DAY00303_R06.jrf,DAY00303_R07.jrf";
        			break;
        		default:
        	}

        	const webHost = nexacro.getEnvironment().services["svcurl"].url;
        	const path = "/FILES";

        	/*
        	 * ubireport 용 변수
        	 * this.ubiDataType : 리포트 데이타 유형 ( 0:SQL, 1:Nexacro 데이터셋, 2:화면 내 Grid(자동리포트) )
        	 *				  	  정의하지 않을경우 0으로 자동 세팅
        	 * this.ubiReportFile : 리포트 파일명
        	 * this.ubiLocalDs : Nexacro 데이터셋 정보 ( 데이터셋을 사용한 리포트 호출시 필요 )
        	 * this.ubiGridObj : 자동 리포트에서 사용하는 그리드 객체 ( 데이타 유형이 2일 경우 필요 )
        	 * this.ubiArg : 리포트 아규먼트 (세팅 예 : COMPANY#유비디시전#HOMEPAGE#http://www.ubireport.com# )
        	 * this.ubiIsMul : 멀티리포트 여부 ( 멀티리포트 사용시 true로 세팅 )
        	 * this.ubiMulCount : 멀티리포트 사용시 리포트 반복횟수 설정 숫자형태의 문자열
        	 * this.ubiIsPdf : pdf 프린트 바로 열기 여부 모달로 띄울시 false
        	 */
        	if (isMul)
        		this.ubiIsMul = true;

        	this.ubiArg = "P_SICODE#" + fv_sicode + "#"
        				+ "P_NUMBER#" + this.ds_data.getColumn(0, "ha_number") + "#"
        				+ "P_CODE#" + this.ds_data.getColumn(0, "m_code") + "#"
        				+ "P_SIGN#" + this.ds_report.getColumn(0, "SIGN") + "#"
        				+ "P_OFFNAME#" + nexacro.getApplication().gds_userInfo.getColumn(0, "b_offname") + "#"
        				+ "P_PATH#" + webHost + path + "/SIGN/" + "#";

        	// 리포트 div 내용 갱신
        	this.components["UbiDiv"].form.ubiPreview();
        };

        // 시설장 선택 팝업
        this.btn_manager_onclick = function(obj,e)
        {
        	if (this.ds_data.rowcount < 1)
        		return;

        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_data.getColumn(0, "평가일")
        	};

        	Sct.popup(this, "emp", 450, 400, "입력담당자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };

        // 물리치료·기능훈련계획 버튼 클릭
        this.div_main_btn_plan_onclick = function(obj,e)
        {
        	const no = this.ds_data.getColumn(0, "ha_number");
        	if (!Sct.Util.isEmpty(no))
        		return;

        	//trace("DAY00303_P01 새로작성 팝업");
        	const param = {
        		SICODE : fv_sicode
        	,	CODE : fv_code
        	};

        	Sct.popup(this, "plan", 450, 400, "", param, "DAY_POP::DAY00303_P02.xfdl", "fn_popCallback");
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "emp" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				const name = objDs.getColumn(0, "c_name").trim();
        				const dutyname = objDs.getColumn(0, "담당직종");
        				const staffid = objDs.getColumn(0, "c_staffid");
        				this.ds_data.setColumn(0, "평가자명", name);
        				this.ds_data.setColumn(0, "평가자직종", dutyname);
        				this.ds_data.setColumn(0, "평가자코드", staffid);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "평가자명", "");
        				this.ds_data.setColumn(0, "평가자직종", "");
        				this.ds_data.setColumn(0, "평가자코드", "");
        			}
        			break;
        		case "plan" :
        			const tempnRow = this.ds_data_temp.addRow();
        			this.ds_data_temp.copyRow(tempnRow, this.ds_data, 0);
        			this.ds_data.clearData();
        			const nRow = this.ds_data.addRow();
        			this.ds_data.copyRow(nRow, this.ds_data_temp, tempnRow);
        			this.ds_data.copyRow(nRow, objDs, 0);
        			this.fn_afterSearch();
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 저장 버튼
        this.fn_saveBtn = function(obj,e)
        {
        	this.fn_save();
        };

        // 치료기간 시작일 변경 이벤트
        this.div_main_cal_date_from_pic_onchanged = function(obj,e)
        {
        	//trace("cal_date_from postvalue : " + e.postvalue);
        	const val = e.postvalue;
        	const year = val.substr(0, 4);
        	const month = parseInt(val.substr(4, 2));
        	const day = parseInt(val.substr(6, 2));
        	const date = new Date(year, month - 1, day);
        	const toDateA = date.setDate(date.getDate() + 364);
        	const toDateB = new Date(toDateA);
        	const to = this.fn_getDateString(toDateB);

        	this.ds_data.setColumn(0, "계획종료", to);
        };

        // 6개월, 12개월 버튼 클릭
        this.btn_mon_onclick = function(obj,e)
        {
        	const planFrom = this.ds_data.getColumn(0, "계획시작");
        	if (Sct.Util.isEmpty(planFrom))
        		return;

        	let planTo;
        	switch(obj.id) {
        		case "btn_mon6" :
        			planTo = planFrom.addMonth(5);
        			planTo = new Date(planTo);
        			const year = planTo.getFullYear();
        			const month = planTo.getMonth() + 1;
        			const mon6 = new Date(year, month, 0);
        			planTo = this.fn_getDateString(mon6);
        			break;
        		case "btn_mon12" :
        			planTo = planFrom.addDate(364);
        			const mon12 = new Date(planTo);
        			planTo = this.fn_getDateString(mon12);
        			break;
        		default:
        	}

        	this.ds_data.setColumn(0, "계획종료", planTo);
        };

        // 그룹 체크박스 체인지 이벤트
        this.chk_group_onchanged = function(obj,e)
        {
        	//trace("e.postvalue : " + e.postvalue);
        	//trace("e.prevalue : " + e.prevalue);
        	switch(e.postvalue)
        	{
        		case "0" :
        			obj.set_value(e.prevalue);
        			break;
        		case "A" :
        			this.div_main.form.chk_group2.set_value(0);
        			this.ds_data.setColumn(0, "치료그룹", "A");
        			break;
        		case "B" :
        			this.div_main.form.chk_group1.set_value(0);
        			this.ds_data.setColumn(0, "치료그룹", "B");
        			break;
        		default:
        	}
        };

        /***********************************************************************
         * Tabpage1
         ***********************************************************************/
        // 운동장애 및 관절제한평가 체크박스 클릭 이벤트
        this.chk_exer_onclick = function(obj,e)
        {
        	const num = obj.id.substr(5);

        	switch(obj.id)
        	{
        		case "chk_c" + num :
        			this.div_main.form.tab_main.Tabpage1.form.components["chk_v" + num].set_value(0);
        			this.div_main.form.tab_main.Tabpage1.form.components["chk_x" + num].set_value(0);
        			obj.set_value(1);
        			this.ds_data.setColumn(0, "운동관절" + num, 1);
        			this.ds_data.setColumn(0, "운동점수" + num, 1);
        			break;
        		case "chk_v" + num :
        			this.div_main.form.tab_main.Tabpage1.form.components["chk_c" + num].set_value(0);
        			this.div_main.form.tab_main.Tabpage1.form.components["chk_x" + num].set_value(0);
        			obj.set_value(2);
        			this.ds_data.setColumn(0, "운동관절" + num, 2);
        			this.ds_data.setColumn(0, "운동점수" + num, 2);
        			break;
        		case "chk_x" + num :
        			this.div_main.form.tab_main.Tabpage1.form.components["chk_c" + num].set_value(0);
        			this.div_main.form.tab_main.Tabpage1.form.components["chk_v" + num].set_value(0);
        			obj.set_value(3);
        			this.ds_data.setColumn(0, "운동관절" + num, 3);
        			this.ds_data.setColumn(0, "운동점수" + num, 3);
        			break;
        		default:
        	}

        	let tot = 0;
        	for (let i = 1; i <= 10; i++)
        	{
        		tot += parseInt(this.ds_data.getColumn(0, "운동점수" + i));
        	}
        	//trace("tot : " + tot);
        	this.ds_data.setColumn(0, "운동점수", tot);
        };

        // 신체통증 체크박스 값 변경 이벤트
        this.chk_ba_onchanged = function(obj,e)
        {
        	switch(e.postvalue) {
        		case "0":
        			obj.set_value(e.prevalue);
        			break;
        		case "1":
        			this.div_main.form.tab_main.Tabpage1.form.chk_bax.set_value(0);
        			this.ds_data.setColumn(0, "신체통증", 1);
        			break;
        		case "2":
        			this.div_main.form.tab_main.Tabpage1.form.chk_bao.set_value(0);
        			this.ds_data.setColumn(0, "신체통증", 2);
        			break;
        	default:
        	}
        };

        // 운동장애·관절제한 지움 버튼
        this.div_main_tab_main_Tabpage1_btn_exer_onclick = function(obj,e)
        {
        	for (let i = 1; i <= 10; i++)
        	{
        		this.div_main.form.tab_main.Tabpage1.form.components["chk_v" + i].set_value(0);
        		this.div_main.form.tab_main.Tabpage1.form.components["chk_x" + i].set_value(0);
        		this.ds_data.setColumn(0, "운동관절" + i, 1);
        		this.ds_data.setColumn(0, "운동점수" + i, 0);
        	}

        	this.ds_data.setColumn(0, "운동점수", 0);
        };

        // 근력평가 체크박스 체인지 이벤트
        this.chk_str_onchanged = function(obj,e)
        {
        	const idStr = obj.id.substr(0, 7);
        	const num = obj.id.substr(7);
        	//trace("idStr : " + idStr);
        	//trace("num : " + num);

        	let colStr = "";
        	let staStr = "";
        	switch(idStr)
        	{
        		case "chk_sru" :
        			colStr = "근력우상";
        			staStr = "sta_sru";
        			break;
        		case "chk_slu" :
        			colStr = "근력좌상";
        			staStr = "sta_slu";
        			break;
        		case "chk_srd" :
        			colStr = "근력우하";
        			staStr = "sta_srd";
        			break;
        		case "chk_sld" :
        			colStr = "근력좌하";
        			staStr = "sta_sld";
        			break;
        		default:
        	}
        	//trace("colStr : " + colStr);
        	//trace("staStr : " + staStr);

        	// 체크박스 값에 따라 해당항목 색 변경
        	for (let i = 1; i <= 6; i++)
        	{
        		if (i == num && e.postvalue == 1)
        		{
        			this.ds_data.setColumn(0, colStr + num, 1);
        			this.div_main.form.tab_main.Tabpage1.form.components[staStr + num].set_cssclass("sta_c1e699");
        		}
        		else
        		{
        			this.ds_data.setColumn(0, colStr + i, 0);
        			this.div_main.form.tab_main.Tabpage1.form.components[staStr + i].set_cssclass("");
        		}
        	}
        };

        /***********************************************************************
         * Tabpage2
         ***********************************************************************/
        // 숫자평정척도 체크박스 값 변경 이벤트
        this.chk_pp_onchanged = function(obj,e)
        {
        	let num;
        	switch(e.postvalue)
        	{
        		case "-1" :
        			obj.set_value(e.prevalue);
        			break;
        		case "0":
        			num = 0;
        			break;
        		case "1":
        			num = 1;
        			break;
        		case "2":
        			num = 2;
        			break;
        		case "3":
        			num = 3;
        			break;
        		case "4":
        			num = 4;
        			break;
        		case "5":
        			num = 5;
        			break;
        		case "6":
        			num = 6;
        			break;
        		case "7":
        			num = 7;
        			break;
        		case "8":
        			num = 8;
        			break;
        		case "9":
        			num = 9;
        			break;
        		case "10":
        			num = 10;
        			break;
        		default:
        	}

        	if (e.postvalue == -1)
        		return;

        	//trace("num : " + num);
        	for (let i = 0; i <= 10; i++)
        	{
        		if (i == num)
        			continue;

        		this.div_main.form.tab_main.Tabpage2.form.components["chk_pp" + i].set_value(-1);
        	}
        	obj.set_value(e.postvalue);
        };

        // 통증 정도 값 변경 이벤트
        this.mae_pl_onchanged = function(obj,e)
        {
        	// 값이 10을 넘지 못하도록 세팅
        	if (e.postvalue > 10)
        		obj.set_value(10);

        	// 평균값 구하기
        	let tot = 0;
        	let totCount = 0;
        	for (let i = 1; i <= 20; i++)
        	{
        		const val1 = this.ds_data.getColumn(0, "통증정RT" + i);
        		const val2 = this.ds_data.getColumn(0, "통증정LT" + i);

        		if (val1 != 0)
        		{
        			tot += parseInt(val1);
        			totCount++;
        		}

        		if (val2 != 0)
        		{
        			tot += parseInt(val2);
        			totCount++;
        		}
        	}
        	//trace("tot : " + tot);
        	//trace("totCount : " + totCount);
        	const avg = tot / totCount;
        	//trace("avg : " + avg);
        	this.ds_data.setColumn(0, "평균통증", Math.floor(avg) + " 점");
        };

        /***********************************************************************
         * Tabpage4
         ***********************************************************************/
        // rom 입력부 값 변경 이벤트
        this.edt_rt_onchanged = function(obj,e)
        {
        	const num = obj.id.substr(6);
        	//trace("num : " + num);

        	let max = 0;
        	switch(num)
        	{
        		case "1": case "3":
        			max = 180;
        			break;
        		case "2":
        			max = 60;
        			break;
        		case "4": case "10":
        			max = 70;
        			break;
        		case "5":
        			max = 90;
        			break;
        		case "6":
        			max = 150;
        			break;
        		case "7": case "8": case "9":
        			max = 80;
        			break;
        		case "11": case "14": case "16":
        			max = 30;
        			break;
        		case "12": case "20":
        			max = 20;
        			break;
        		case "13":
        			max = 120
        			break;
        		case "15": case "17": case "18":
        			max = 45;
        			break;
        		case "19":
        			max = 135;
        			break;
        		case "21":
        			max = 50;
        			break;
        		case "22":
        			max = 35;
        			break;
        		case "23":
        			max = 15;
        			break;
        		default:
        	}

        	// rom 최대값을 넘길경우 최대값으로 세팅
        	if (e.postvalue > max)
        		obj.set_value(max);
        };

        /***********************************************************************
         * Tabpage5
         ***********************************************************************/
        // ADL 체크박스 체인지 이벤트
        this.chk_adl_onchanged = function(obj,e)
        {
        	const idStr = obj.id.substr(0, 9);
        	const num = obj.id.substr(9);
        	//trace("idStr : " + idStr);
        	//trace("num : " + num);

        	let colStr = "";
        	let staStr = "";
        	switch(idStr)
        	{
        		case "chk_adl1_" :
        			colStr = "adl점수1";
        			staStr = "sta_adl1_";
        			break;
        		case "chk_adl2_" :
        			colStr = "adl점수2";
        			staStr = "sta_adl2_";
        			break;
        		case "chk_adl3_" :
        			colStr = "adl점수3";
        			staStr = "sta_adl3_";
        			break;
        		case "chk_adl4_" :
        			colStr = "adl점수4";
        			staStr = "sta_adl4_";
        			break;
        		case "chk_adl5_" :
        			colStr = "adl점수5";
        			staStr = "sta_adl5_";
        			break;
        		case "chk_adl6_" :
        			colStr = "adl점수6";
        			staStr = "sta_adl6_";
        			break;
        		default:
        	}

        	// 체크박스 값에 따라 해당항목 색 변경하기
        	let chkCount = 0;
        	for (let i = 0; i <= 5; i++)
        	{
        		if (i == 3)
        			continue;

        		if (i == num && e.postvalue != -1)
        		{
        			this.ds_data.setColumn(0, colStr, e.postvalue);
        			this.div_main.form.tab_main.Tabpage5.form.components[idStr + num].set_value(e.postvalue);
        			this.div_main.form.tab_main.Tabpage5.form.components[staStr + num].set_cssclass("sta_c1e699");
        			chkCount++;
        		}
        		else
        		{
        			this.div_main.form.tab_main.Tabpage5.form.components[idStr + i].set_value(-1);
        			this.div_main.form.tab_main.Tabpage5.form.components[staStr + i].set_cssclass("");
        		}
        	}

        	// 총점 구하기
        	//trace("chkCount : " + chkCount);
        	if (chkCount == 0)
        		this.ds_data.setColumn(0, colStr, 0);

        	let tot = 0;
        	for (let i = 1; i <= 6; i++)
        	{
        		tot += parseInt(this.ds_data.getColumn(0, "adl점수" + i));
        	}
        	this.ds_data.setColumn(0, "adl총점", tot);
        };

        /***********************************************************************
         * Tabpage6
         ***********************************************************************/
        // 물리치료 체크박스 체인지 이벤트
        this.chk_pr_onchanged = function(obj,e)
        {
        	// 물리치료 8개까지만 선택되도록 하기
        	let count = 0;
        	for (let i = 1; i <= 21; i++)
        	{
        		if (this.div_main.form.tab_main.Tabpage6.form.components["chk_pr" + i].value == 1)
        			count++;
        	}

        	if (count > 8)
        	{
        		this.alert("물리치료는 8개까지 선택가능 합니다.");
        		obj.set_value(e.prevalue);
        		return;
        	}
        };

        // 시 변경 이벤트
        this.edt_hour_onchanged = function(obj,e)
        {
        	// 23시를 넘을 수 없고 1자리일경우 앞에 0붙이기
        	if (e.postvalue > "23" || e.postvalue == "")
        	{
        		obj.set_value("00");
        	}
        	else if (e.postvalue.length == 1)
        	{
        		obj.set_value("0" + e.postvalue);
        	}
        };

        // 분 변경 이벤트
        this.edt_min_onchanged = function(obj,e)
        {
        	// 59분을 넘을 수 없고 1자리일경우 앞에 0 붙이기
        	if (e.postvalue > "59" || e.postvalue == "")
        	{
        		obj.set_value("00");
        	}
        	else if (e.postvalue.length == 1)
        	{
        		obj.set_value("0" + e.postvalue);
        	}
        };

        // 일시정지지움 버튼
        this.div_main_tab_main_Tabpage6_btn_stop_erase_onclick = function(obj,e)
        {
        	this.ds_data.setColumn(0, "중단시작", "");
        	this.ds_data.setColumn(0, "중단종료", "");
        };

        // 치료부위 기타 체크박스 값 변경 이벤트
        this.chk_hp23_onchanged = function(obj,e)
        {
        	switch(e.postvalue)
        	{
        		// 추가부위 비활성화
        		case "0" :
        			this.ds_data.setColumn(0, "추가부위", "");
        			this.div_main.form.tab_main.Tabpage6.form.edt_hp23.set_enable(false);
        			break;
        		// 추가부위 활성화
        		case "1" :
        			this.div_main.form.tab_main.Tabpage6.form.edt_hp23.set_enable(true);
        			break;
        		default:
        	}
        };

        /***********************************************************************
         * Tabpage7
         ***********************************************************************/
        // 시간 제대로 입력 안하면 "" 처리
        this.mae_time_onchanged = function(obj,e)
        {
        	const time = this.div_main.form.tab_main.Tabpage7.form.components[obj.id].value;

        	const hour = time.substr(0,2);
        	const minute = time.substr(2,2);

        	if (hour > 23 || minute > 59 || time.replace(" ", "").length < 4)
        	{
        		this.div_main.form.tab_main.Tabpage7.form.components[obj.id].set_value("");
        	}
        };

        // from 팝업 시간 버튼 클릭
        this.from_hour_btn_onclick = function(obj,e)
        {
        	//fv_tfromid 선택한 컴포넌트 id
        	const objid = obj.id.substr(9);
        	this.div_main.form.tab_main.Tabpage7.form.components[this.fv_tFromId].set_value(objid);
        };

        // from 팝업 분 버튼 클릭
        this.from_minute_btn_onclick = function(obj,e)
        {
        	const objid = obj.id.substr(9); // 분
        	const hour = this.div_main.form.tab_main.Tabpage7.form.components[this.fv_tFromId].value.substr(0, 2);	// 시간

        	// 시간 빈값체크
        	if (hour.replace(" ", "").length == 2)
        	{
        		this.div_main.form.tab_main.Tabpage7.form.components[this.fv_tFromId].set_value(hour + objid);
        		this.div_main.form.tab_main.Tabpage7.form.btn_func.setFocus();
        		this.div_time_from.set_visible(false);
        	}
        };

        // to 분 버튼 클릭
        this.to_btn_onclick = function(obj,e)
        {
        	// 클릭시 from div 닫기
        	this.div_main.form.tab_main.Tabpage7.form.btn_func.setFocus();
        	this.div_time_to.set_visible(false);

        	const objid = obj.id.substr(7); // 선택한 버튼 분

        	// from 컴포넌트id가 존재해야 입력 가능
        	if (!Sct.Util.isEmpty(this.fv_tFromId))
        	{
        		const time = this.div_main.form.tab_main.Tabpage7.form.components[this.fv_tFromId].value;	// from 시간
        		const hour = time.substr(0,2); // from 시간 자르기
        		const minute = time.substr(2,3); // from 분 자르기
        		//const timeadd = nexacro.toNumber(minute) + nexacro.toNumber(objid); // 분 더하기
        		const timeadd = parseInt(minute) + parseInt(objid);	// 분 더하기
        		let sethour = ""; // 세팅 시
        		let setminute = ""; // 세팅 분
        		let settime = ""; // 세팅 시간

        		trace("timeadd : " + timeadd);
        		// 10 보다 작으면 앞에 0붙여주기
        		if (timeadd < 10)
        		{
        			setminute = "0" + timeadd;
        			settime = hour + setminute;
        		}
        		// 60보다 크면 60빼고 시간에 1 더하기
        		else if (timeadd > 59)
        		{
        			setminute = timeadd - 60;
        			//sethour = nexacro.toNumber(hour) + 1;
        			sethour = parseInt(hour) + 1;
        			// 10보다 작으면 앞에 0 붙여주기
        			if (setminute < 10)
        			{
        				setminute = "0" + setminute;
        			}
        			settime = sethour.toString() + setminute;
        		}
        		else
        		{
        			settime = hour + timeadd;
        		}
        		trace("settime : " + settime);

        		// settime이 4자리면 세팅
        		if (settime.length == 4)
        		{
        			this.div_main.form.tab_main.Tabpage7.form.components[this.fv_tToId].set_value(settime);
        		}
        	}
        };

        // 닫기, 지움
        this.from_btn_onclick = function(obj,e)
        {
        	switch(obj.id)
        	{
        		case "btn_tcancle":
        			this.div_main.form.tab_main.Tabpage7.form.btn_func.setFocus();
        			this.div_time_from.set_visible(false); // 닫기
        			break;
        		case "btn_tdel":
        			switch(this.fv_tFromId)
        			{
        				case "mae_time1": // 신체기능훈련
        					this.div_main.form.tab_main.Tabpage7.form.mae_time1.set_value("");
        					this.div_main.form.tab_main.Tabpage7.form.mae_time2.set_value("");
        					break;
        				case "mae_time3": // 기본동작훈련
        					this.div_main.form.tab_main.Tabpage7.form.mae_time3.set_value("");
        					this.div_main.form.tab_main.Tabpage7.form.mae_time4.set_value("");
        					break;
        				case "mae_time5": // 일상생활동작훈련
        					this.div_main.form.tab_main.Tabpage7.form.mae_time5.set_value("");
        					this.div_main.form.tab_main.Tabpage7.form.mae_time6.set_value("");
        					break;
        				default:
        			}
        			this.div_main.form.tab_main.Tabpage7.form.btn_func.setFocus();
        			this.div_time_from.set_visible(false); // 닫기
        			break;
        		default:
        	}
        };

        // 시간팝업from div
        this.mae_time_from_onsetfocus = function(obj,e)
        {
        	this.div_time_from.set_visible(true);
        	this.div_time_to.set_visible(false);

        	this.fv_tFromId = obj.id // from 시간 컴포넌트 id
        	switch(obj.id)
        	{
        		case "mae_time1":
        			//this.div_time_from.move(17,184);
        			this.div_time_from.move(280, 310);
        			break;
        		case "mae_time3":
        			this.div_time_from.move(500, 310);
        			break;
        		case "mae_time5":
        			this.div_time_from.move(740, 310);
        			break;
        	}
        };

        // 시간팝업to div
        this.mae_time_to_onsetfocus = function(obj,e)
        {
        	this.div_time_from.set_visible(false);
        	this.div_time_to.set_visible(true);

        	this.fv_tToId = obj.id // to 시간 컴포넌트 id
        	switch(obj.id)
        	{
        		case "mae_time2":
        			this.fv_tFromId = this.div_main.form.tab_main.Tabpage7.form.mae_time1.id;
        			this.div_time_to.move(345, 310);
        			break;
        		case "mae_time4":
        			this.fv_tFromId = this.div_main.form.tab_main.Tabpage7.form.mae_time3.id;
        			this.div_time_to.move(570, 310);
        			break;
        		case "mae_time6":
        			this.fv_tFromId = this.div_main.form.tab_main.Tabpage7.form.mae_time5.id;
        			this.div_time_to.move(810, 310);
        			break;
        	}
        };

        // from 시간 아웃포커스
        this.mae_time_from_onkillfocus = function(obj,e)
        {
        	//trace(this.getFocus().toString());
        	// 포커스가 버튼이 아니면 팝업 닫기
        	if(this.getFocus().toString() != "[object Button]")
        	{
        		this.div_time_from.set_visible(false);
        	}
        };

        // to 시간 아웃포커스
        this.mae_time_to_onkillfocus = function(obj,e)
        {
        	//trace(this.getFocus().toString());
        	// 포커스가 버튼이 아니면 팝업 닫기
        	if(this.getFocus().toString() != "[object Button]")
        	{
        		this.div_time_to.set_visible(false);
        	}
        };

        // 시간팝업 닫기
        this.fn_div_time_visible = function ()
        {
        	this.div_time_from.set_visible(false);
        	this.div_time_to.set_visible(false);
        };

        // 욕구사정 기록조회 버튼
        this.div_main_tab_main_Tabpage7_btn_func_onclick = function(obj,e)
        {
        	const hFrom = this.ds_data.getColumn(0, "계획시작");
        	if (Sct.Util.isEmpty(hFrom))
        		return;

        	this.fn_funcSearch();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_report2.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_report3.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_report4.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_report5.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_report6.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_report7.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_report8.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_report9.addEventHandler("onclick",this.fn_report,this);
            this.div_main.form.btn_plan.addEventHandler("onclick",this.div_main_btn_plan_onclick,this);
            this.div_main.form.chk_group1.addEventHandler("onchanged",this.chk_group_onchanged,this);
            this.div_main.form.chk_group2.addEventHandler("onchanged",this.chk_group_onchanged,this);
            this.div_main.form.cal_date_from_pic.addEventHandler("onchanged",this.div_main_cal_date_from_pic_onchanged,this);
            this.div_main.form.btn_mon6.addEventHandler("onclick",this.btn_mon_onclick,this);
            this.div_main.form.btn_mon12.addEventHandler("onclick",this.btn_mon_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.btn_exer.addEventHandler("onclick",this.div_main_tab_main_Tabpage1_btn_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_c1.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_v1.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_x1.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_c2.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_v2.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_x2.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_c3.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_v3.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_x3.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_c4.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_v4.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_x4.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_c5.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_v5.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_x5.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_c6.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_v6.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_x6.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_c7.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_v7.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_x7.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_c8.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_v8.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_x8.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_c9.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_v9.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_x9.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_c10.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_v10.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_x10.addEventHandler("onclick",this.chk_exer_onclick,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_bao.addEventHandler("onchanged",this.chk_ba_onchanged,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_bax.addEventHandler("onchanged",this.chk_ba_onchanged,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_sru1.addEventHandler("onchanged",this.chk_str_onchanged,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_sru2.addEventHandler("onchanged",this.chk_str_onchanged,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_sru3.addEventHandler("onchanged",this.chk_str_onchanged,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_sru4.addEventHandler("onchanged",this.chk_str_onchanged,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_sru5.addEventHandler("onchanged",this.chk_str_onchanged,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_sru6.addEventHandler("onchanged",this.chk_str_onchanged,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_slu1.addEventHandler("onchanged",this.chk_str_onchanged,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_slu2.addEventHandler("onchanged",this.chk_str_onchanged,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_slu3.addEventHandler("onchanged",this.chk_str_onchanged,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_slu4.addEventHandler("onchanged",this.chk_str_onchanged,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_slu5.addEventHandler("onchanged",this.chk_str_onchanged,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_slu6.addEventHandler("onchanged",this.chk_str_onchanged,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_srd1.addEventHandler("onchanged",this.chk_str_onchanged,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_srd2.addEventHandler("onchanged",this.chk_str_onchanged,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_srd3.addEventHandler("onchanged",this.chk_str_onchanged,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_srd4.addEventHandler("onchanged",this.chk_str_onchanged,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_srd5.addEventHandler("onchanged",this.chk_str_onchanged,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_srd6.addEventHandler("onchanged",this.chk_str_onchanged,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_sld1.addEventHandler("onchanged",this.chk_str_onchanged,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_sld2.addEventHandler("onchanged",this.chk_str_onchanged,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_sld3.addEventHandler("onchanged",this.chk_str_onchanged,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_sld4.addEventHandler("onchanged",this.chk_str_onchanged,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_sld5.addEventHandler("onchanged",this.chk_str_onchanged,this);
            this.div_main.form.tab_main.Tabpage1.form.chk_sld6.addEventHandler("onchanged",this.chk_str_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.chk_pp0.addEventHandler("onchanged",this.chk_pp_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.chk_pp1.addEventHandler("onchanged",this.chk_pp_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.chk_pp2.addEventHandler("onchanged",this.chk_pp_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.chk_pp3.addEventHandler("onchanged",this.chk_pp_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.chk_pp4.addEventHandler("onchanged",this.chk_pp_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.chk_pp5.addEventHandler("onchanged",this.chk_pp_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.chk_pp6.addEventHandler("onchanged",this.chk_pp_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.chk_pp7.addEventHandler("onchanged",this.chk_pp_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.chk_pp8.addEventHandler("onchanged",this.chk_pp_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.chk_pp9.addEventHandler("onchanged",this.chk_pp_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.chk_pp10.addEventHandler("onchanged",this.chk_pp_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_rpl1.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_rpl2.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_rpl3.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_rpl4.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_rpl5.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_rpl6.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_rpl7.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_rpl8.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_rpl9.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_rpl10.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_lpl1.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_lpl2.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_lpl3.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_lpl4.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_lpl5.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_lpl6.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_lpl7.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_lpl8.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_lpl9.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_lpl10.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_rpl11.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_rpl12.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_rpl13.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_rpl14.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_rpl15.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_rpl16.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_rpl17.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_rpl18.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_rpl19.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_rpl20.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_lpl11.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_lpl12.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_lpl13.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_lpl14.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_lpl15.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_lpl16.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_lpl17.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_lpl18.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_lpl19.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage2.form.mae_lpl20.addEventHandler("onchanged",this.mae_pl_onchanged,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_per1.addEventHandler("onchanged",this.fn_perSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_per1.addEventHandler("onspin",this.fn_perSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_per2.addEventHandler("onchanged",this.fn_perSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_per2.addEventHandler("onspin",this.fn_perSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_per3.addEventHandler("onchanged",this.fn_perSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_per3.addEventHandler("onspin",this.fn_perSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_per4.addEventHandler("onchanged",this.fn_perSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_per4.addEventHandler("onspin",this.fn_perSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_per5.addEventHandler("onchanged",this.fn_perSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_per5.addEventHandler("onspin",this.fn_perSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_per6.addEventHandler("onchanged",this.fn_perSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_per6.addEventHandler("onspin",this.fn_perSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_per7.addEventHandler("onchanged",this.fn_perSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_per7.addEventHandler("onspin",this.fn_perSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_per8.addEventHandler("onchanged",this.fn_perSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_per8.addEventHandler("onspin",this.fn_perSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_per9.addEventHandler("onchanged",this.fn_perSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_per9.addEventHandler("onspin",this.fn_perSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_per10.addEventHandler("onchanged",this.fn_perSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_per10.addEventHandler("onspin",this.fn_perSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_walk1.addEventHandler("onchanged",this.fn_walkSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_walk1.addEventHandler("onspin",this.fn_walkSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_walk2.addEventHandler("onchanged",this.fn_walkSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_walk2.addEventHandler("onspin",this.fn_walkSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_walk3.addEventHandler("onchanged",this.fn_walkSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_walk3.addEventHandler("onspin",this.fn_walkSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_walk4.addEventHandler("onchanged",this.fn_walkSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_walk4.addEventHandler("onspin",this.fn_walkSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_walk5.addEventHandler("onchanged",this.fn_walkSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_walk5.addEventHandler("onspin",this.fn_walkSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_walk6.addEventHandler("onchanged",this.fn_walkSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_walk6.addEventHandler("onspin",this.fn_walkSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_walk7.addEventHandler("onchanged",this.fn_walkSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_walk7.addEventHandler("onspin",this.fn_walkSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_walk8.addEventHandler("onchanged",this.fn_walkSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_walk8.addEventHandler("onspin",this.fn_walkSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_walk9.addEventHandler("onchanged",this.fn_walkSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_walk9.addEventHandler("onspin",this.fn_walkSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_walk10.addEventHandler("onchanged",this.fn_walkSpinEvent,this);
            this.div_main.form.tab_main.Tabpage3.form.spn_walk10.addEventHandler("onspin",this.fn_walkSpinEvent,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_rt1.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_lt1.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_rt2.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_lt2.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_rt3.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_lt3.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_rt4.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_lt4.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_rt5.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_lt5.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_rt6.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_lt6.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_rt7.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_lt7.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_rt8.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_lt8.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_rt9.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_lt9.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_rt10.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_lt10.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_rt11.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_lt11.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_rt12.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_lt12.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_rt13.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_lt13.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_rt14.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_lt14.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_rt15.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_lt15.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_rt16.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_lt16.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_rt17.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_lt17.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_rt18.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_lt18.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_rt19.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_lt19.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_rt20.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_lt20.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_rt21.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_lt21.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_rt22.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_lt22.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_rt23.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage4.form.edt_lt23.addEventHandler("onchanged",this.edt_rt_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl1_0.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl1_1.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl1_2.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl1_4.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl1_5.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl2_0.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl2_1.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl2_2.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl2_4.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl2_5.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl3_0.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl3_1.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl3_2.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl3_4.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl3_5.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl4_0.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl4_1.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl4_2.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl4_4.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl4_5.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl5_0.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl5_1.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl5_2.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl5_4.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl5_5.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl6_0.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl6_1.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl6_2.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl6_4.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage5.form.chk_adl6_5.addEventHandler("onchanged",this.chk_adl_onchanged,this);
            this.div_main.form.tab_main.Tabpage6.form.chk_pr1.addEventHandler("onchanged",this.chk_pr_onchanged,this);
            this.div_main.form.tab_main.Tabpage6.form.chk_pr4.addEventHandler("onchanged",this.chk_pr_onchanged,this);
            this.div_main.form.tab_main.Tabpage6.form.chk_pr7.addEventHandler("onchanged",this.chk_pr_onchanged,this);
            this.div_main.form.tab_main.Tabpage6.form.chk_pr2.addEventHandler("onchanged",this.chk_pr_onchanged,this);
            this.div_main.form.tab_main.Tabpage6.form.chk_pr5.addEventHandler("onchanged",this.chk_pr_onchanged,this);
            this.div_main.form.tab_main.Tabpage6.form.chk_pr6.addEventHandler("onchanged",this.chk_pr_onchanged,this);
            this.div_main.form.tab_main.Tabpage6.form.chk_pr3.addEventHandler("onchanged",this.chk_pr_onchanged,this);
            this.div_main.form.tab_main.Tabpage6.form.chk_pr8.addEventHandler("onchanged",this.chk_pr_onchanged,this);
            this.div_main.form.tab_main.Tabpage6.form.chk_pr11.addEventHandler("onchanged",this.chk_pr_onchanged,this);
            this.div_main.form.tab_main.Tabpage6.form.chk_pr9.addEventHandler("onchanged",this.chk_pr_onchanged,this);
            this.div_main.form.tab_main.Tabpage6.form.chk_pr12.addEventHandler("onchanged",this.chk_pr_onchanged,this);
            this.div_main.form.tab_main.Tabpage6.form.chk_pr13.addEventHandler("onchanged",this.chk_pr_onchanged,this);
            this.div_main.form.tab_main.Tabpage6.form.chk_pr10.addEventHandler("onchanged",this.chk_pr_onchanged,this);
            this.div_main.form.tab_main.Tabpage6.form.chk_pr14.addEventHandler("onchanged",this.chk_pr_onchanged,this);
            this.div_main.form.tab_main.Tabpage6.form.chk_pr17.addEventHandler("onchanged",this.chk_pr_onchanged,this);
            this.div_main.form.tab_main.Tabpage6.form.chk_pr20.addEventHandler("onchanged",this.chk_pr_onchanged,this);
            this.div_main.form.tab_main.Tabpage6.form.chk_pr15.addEventHandler("onchanged",this.chk_pr_onchanged,this);
            this.div_main.form.tab_main.Tabpage6.form.chk_pr18.addEventHandler("onchanged",this.chk_pr_onchanged,this);
            this.div_main.form.tab_main.Tabpage6.form.chk_pr19.addEventHandler("onchanged",this.chk_pr_onchanged,this);
            this.div_main.form.tab_main.Tabpage6.form.chk_pr16.addEventHandler("onchanged",this.chk_pr_onchanged,this);
            this.div_main.form.tab_main.Tabpage6.form.chk_pr21.addEventHandler("onchanged",this.chk_pr_onchanged,this);
            this.div_main.form.tab_main.Tabpage6.form.edt_from_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_main.form.tab_main.Tabpage6.form.edt_from_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_main.form.tab_main.Tabpage6.form.edt_to_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_main.form.tab_main.Tabpage6.form.edt_to_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_main.form.tab_main.Tabpage6.form.btn_stop_erase.addEventHandler("onclick",this.div_main_tab_main_Tabpage6_btn_stop_erase_onclick,this);
            this.div_main.form.tab_main.Tabpage6.form.chk_hp23.addEventHandler("onchanged",this.chk_hp23_onchanged,this);
            this.div_main.form.tab_main.Tabpage7.form.chk_a1.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_main.form.tab_main.Tabpage7.form.chk_a8.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_main.form.tab_main.Tabpage7.form.chk_a2.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_main.form.tab_main.Tabpage7.form.chk_a3.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_main.form.tab_main.Tabpage7.form.chk_a4.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_main.form.tab_main.Tabpage7.form.chk_a5.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_main.form.tab_main.Tabpage7.form.chk_a6.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_main.form.tab_main.Tabpage7.form.chk_a7.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_main.form.tab_main.Tabpage7.form.chk_b1.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_main.form.tab_main.Tabpage7.form.chk_b2.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_main.form.tab_main.Tabpage7.form.chk_b3.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_main.form.tab_main.Tabpage7.form.chk_b4.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_main.form.tab_main.Tabpage7.form.chk_b5.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_main.form.tab_main.Tabpage7.form.chk_b6.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_main.form.tab_main.Tabpage7.form.chk_b7.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_main.form.tab_main.Tabpage7.form.chk_b8.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_main.form.tab_main.Tabpage7.form.chk_b9.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_main.form.tab_main.Tabpage7.form.chk_b11.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_main.form.tab_main.Tabpage7.form.chk_b10.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_main.form.tab_main.Tabpage7.form.mae_time1.addEventHandler("oneditclick",this.mae_time_from_oneditclick,this);
            this.div_main.form.tab_main.Tabpage7.form.mae_time1.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_main.form.tab_main.Tabpage7.form.mae_time1.addEventHandler("onsetfocus",this.mae_time_from_onsetfocus,this);
            this.div_main.form.tab_main.Tabpage7.form.mae_time1.addEventHandler("onkillfocus",this.mae_time_from_onkillfocus,this);
            this.div_main.form.tab_main.Tabpage7.form.mae_time2.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_main.form.tab_main.Tabpage7.form.mae_time2.addEventHandler("oneditclick",this.mae_time_to_oneditclick,this);
            this.div_main.form.tab_main.Tabpage7.form.mae_time2.addEventHandler("onsetfocus",this.mae_time_to_onsetfocus,this);
            this.div_main.form.tab_main.Tabpage7.form.mae_time2.addEventHandler("onkillfocus",this.mae_time_to_onkillfocus,this);
            this.div_main.form.tab_main.Tabpage7.form.mae_time3.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_main.form.tab_main.Tabpage7.form.mae_time3.addEventHandler("oneditclick",this.mae_time_from_oneditclick,this);
            this.div_main.form.tab_main.Tabpage7.form.mae_time3.addEventHandler("onsetfocus",this.mae_time_from_onsetfocus,this);
            this.div_main.form.tab_main.Tabpage7.form.mae_time3.addEventHandler("onkillfocus",this.mae_time_from_onkillfocus,this);
            this.div_main.form.tab_main.Tabpage7.form.mae_time4.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_main.form.tab_main.Tabpage7.form.mae_time4.addEventHandler("oneditclick",this.mae_time_to_oneditclick,this);
            this.div_main.form.tab_main.Tabpage7.form.mae_time4.addEventHandler("onsetfocus",this.mae_time_to_onsetfocus,this);
            this.div_main.form.tab_main.Tabpage7.form.mae_time4.addEventHandler("onkillfocus",this.mae_time_to_onkillfocus,this);
            this.div_main.form.tab_main.Tabpage7.form.mae_time5.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_main.form.tab_main.Tabpage7.form.mae_time5.addEventHandler("oneditclick",this.mae_time_from_oneditclick,this);
            this.div_main.form.tab_main.Tabpage7.form.mae_time5.addEventHandler("onsetfocus",this.mae_time_from_onsetfocus,this);
            this.div_main.form.tab_main.Tabpage7.form.mae_time5.addEventHandler("onkillfocus",this.mae_time_from_onkillfocus,this);
            this.div_main.form.tab_main.Tabpage7.form.mae_time6.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_main.form.tab_main.Tabpage7.form.mae_time6.addEventHandler("oneditclick",this.mae_time_to_oneditclick,this);
            this.div_main.form.tab_main.Tabpage7.form.mae_time6.addEventHandler("onsetfocus",this.mae_time_to_onsetfocus,this);
            this.div_main.form.tab_main.Tabpage7.form.mae_time6.addEventHandler("onkillfocus",this.mae_time_to_onkillfocus,this);
            this.div_main.form.tab_main.Tabpage7.form.btn_func.addEventHandler("onclick",this.div_main_tab_main_Tabpage7_btn_func_onclick,this);
            this.div_main.form.btn_worker.addEventHandler("onclick",this.btn_manager_onclick,this);
            this.div_time_to.form.btn_cancle.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_03.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_09.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_04.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_10.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_05.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_12.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_06.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_15.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_07.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_20.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_30.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_08.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_from.form.btn_from_0900.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_1400.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_tcancle.addEventHandler("onclick",this.from_btn_onclick,this);
            this.div_time_from.form.btn_tdel.addEventHandler("onclick",this.from_btn_onclick,this);
            this.div_time_from.form.btn_from_05.addEventHandler("onclick",this.from_minute_btn_onclick,this);
            this.div_time_from.form.btn_from_30.addEventHandler("onclick",this.from_minute_btn_onclick,this);
            this.div_time_from.form.btn_from_1000.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_1500.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_1100.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_1600.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_10.addEventHandler("onclick",this.from_minute_btn_onclick,this);
            this.div_time_from.form.btn_from_35.addEventHandler("onclick",this.from_minute_btn_onclick,this);
            this.div_time_from.form.btn_from_15.addEventHandler("onclick",this.from_minute_btn_onclick,this);
            this.div_time_from.form.btn_from_40.addEventHandler("onclick",this.from_minute_btn_onclick,this);
            this.div_time_from.form.btn_from_1200.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_1700.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_1300.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_1800.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_20.addEventHandler("onclick",this.from_minute_btn_onclick,this);
            this.div_time_from.form.btn_from_45.addEventHandler("onclick",this.from_minute_btn_onclick,this);
            this.div_time_from.form.btn_from_25.addEventHandler("onclick",this.from_minute_btn_onclick,this);
            this.div_time_from.form.btn_from_50.addEventHandler("onclick",this.from_minute_btn_onclick,this);
            this.div_time_from.form.btn_from_55.addEventHandler("onclick",this.from_minute_btn_onclick,this);
        };
        this.loadIncludeScript("DAY00303_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
