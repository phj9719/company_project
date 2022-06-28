(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00212_P01");
            this.set_titletext("간호사정.건강수준평가");
            if (Form == this.constructor)
            {
                this._setFormPosition(1727,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"n_mark\" type=\"STRING\" size=\"256\"/><Column id=\"n_number\" type=\"INT\" size=\"256\"/><Column id=\"사정일\" type=\"DATE\" size=\"256\"/><Column id=\"사정시작\" type=\"DATE\" size=\"256\"/><Column id=\"사정종료\" type=\"DATE\" size=\"256\"/><Column id=\"date\" type=\"DATE\" size=\"256\"/><Column id=\"date_from\" type=\"DATE\" size=\"256\"/><Column id=\"date_to\" type=\"DATE\" size=\"256\"/><Column id=\"수급자명\" type=\"STRING\" size=\"256\"/><Column id=\"수급코드\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"생일\" type=\"STRING\" size=\"256\"/><Column id=\"작성자\" type=\"STRING\" size=\"256\"/><Column id=\"작성코드\" type=\"STRING\" size=\"256\"/><Column id=\"작성직종\" type=\"STRING\" size=\"256\"/><Column id=\"진단명\" type=\"STRING\" size=\"256\"/><Column id=\"병원진료\" type=\"STRING\" size=\"256\"/><Column id=\"혈액형\" type=\"STRING\" size=\"256\"/><Column id=\"혈압\" type=\"STRING\" size=\"256\"/><Column id=\"최고혈압\" type=\"STRING\" size=\"256\"/><Column id=\"최저혈압\" type=\"STRING\" size=\"256\"/><Column id=\"맥박\" type=\"INT\" size=\"256\"/><Column id=\"혈당\" type=\"INT\" size=\"256\"/><Column id=\"체온\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"호흡\" type=\"INT\" size=\"256\"/><Column id=\"신장\" type=\"INT\" size=\"256\"/><Column id=\"체중\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"전체중\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"장애유무\" type=\"STRING\" size=\"256\"/><Column id=\"장애종류\" type=\"STRING\" size=\"256\"/><Column id=\"투약유무\" type=\"STRING\" size=\"256\"/><Column id=\"투약약물\" type=\"STRING\" size=\"256\"/><Column id=\"가족병력\" type=\"STRING\" size=\"256\"/><Column id=\"병력기타\" type=\"STRING\" size=\"256\"/><Column id=\"의식점수\" type=\"STRING\" size=\"256\"/><Column id=\"과거수술\" type=\"STRING\" size=\"256\"/><Column id=\"과거알콜\" type=\"STRING\" size=\"256\"/><Column id=\"과거흡연\" type=\"STRING\" size=\"256\"/><Column id=\"과거기타\" type=\"STRING\" size=\"256\"/><Column id=\"과거비고\" type=\"STRING\" size=\"256\"/><Column id=\"시력보조\" type=\"STRING\" size=\"256\"/><Column id=\"시력분비\" type=\"STRING\" size=\"256\"/><Column id=\"시력기타\" type=\"STRING\" size=\"256\"/><Column id=\"시력비고\" type=\"STRING\" size=\"256\"/><Column id=\"시력점수\" type=\"STRING\" size=\"256\"/><Column id=\"청력보조\" type=\"STRING\" size=\"256\"/><Column id=\"청력분비\" type=\"STRING\" size=\"256\"/><Column id=\"청력기타\" type=\"STRING\" size=\"256\"/><Column id=\"청력비고\" type=\"STRING\" size=\"256\"/><Column id=\"청력점수\" type=\"STRING\" size=\"256\"/><Column id=\"구강점수\" type=\"STRING\" size=\"256\"/><Column id=\"질환점수\" type=\"STRING\" size=\"256\"/><Column id=\"질병01\" type=\"STRING\" size=\"256\"/><Column id=\"질병01_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병01_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병01_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병01_4\" type=\"STRING\" size=\"256\"/><Column id=\"질병01_5\" type=\"STRING\" size=\"256\"/><Column id=\"질병02\" type=\"STRING\" size=\"256\"/><Column id=\"질병02_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병02_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병02_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병02_4\" type=\"STRING\" size=\"256\"/><Column id=\"질병02_5\" type=\"STRING\" size=\"256\"/><Column id=\"질병03\" type=\"STRING\" size=\"256\"/><Column id=\"질병03_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병03_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병03_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병04\" type=\"STRING\" size=\"256\"/><Column id=\"질병04_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병04_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병04_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병05\" type=\"STRING\" size=\"256\"/><Column id=\"질병05_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병05_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병05_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병05_4\" type=\"STRING\" size=\"256\"/><Column id=\"질병06\" type=\"STRING\" size=\"256\"/><Column id=\"질병06_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병06_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병06_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병06_4\" type=\"STRING\" size=\"256\"/><Column id=\"질병06_5\" type=\"STRING\" size=\"256\"/><Column id=\"질병06_6\" type=\"STRING\" size=\"256\"/><Column id=\"질병07\" type=\"STRING\" size=\"256\"/><Column id=\"질병07_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병07_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병07_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병07_4\" type=\"STRING\" size=\"256\"/><Column id=\"질병08\" type=\"STRING\" size=\"256\"/><Column id=\"질병08_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병08_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병08_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병08_4\" type=\"STRING\" size=\"256\"/><Column id=\"질병08_5\" type=\"STRING\" size=\"256\"/><Column id=\"질병09\" type=\"STRING\" size=\"256\"/><Column id=\"질병09_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병09_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병09_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병09_4\" type=\"STRING\" size=\"256\"/><Column id=\"질병10\" type=\"STRING\" size=\"256\"/><Column id=\"질병10_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병10_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병10_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병10_4\" type=\"STRING\" size=\"256\"/><Column id=\"질병10_5\" type=\"STRING\" size=\"256\"/><Column id=\"질병10_6\" type=\"STRING\" size=\"256\"/><Column id=\"질병11\" type=\"STRING\" size=\"256\"/><Column id=\"질병11_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병11_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병11_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병11_4\" type=\"STRING\" size=\"256\"/><Column id=\"질병12\" type=\"STRING\" size=\"256\"/><Column id=\"질병12_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병12_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병12_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병12_4\" type=\"STRING\" size=\"256\"/><Column id=\"질병13\" type=\"STRING\" size=\"256\"/><Column id=\"질병13_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병13_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병13_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병14\" type=\"STRING\" size=\"256\"/><Column id=\"질병14_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병14_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병14_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병14_4\" type=\"STRING\" size=\"256\"/><Column id=\"질병15\" type=\"STRING\" size=\"256\"/><Column id=\"질병15_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병15_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병15_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병15_4\" type=\"STRING\" size=\"256\"/><Column id=\"질병15_5\" type=\"STRING\" size=\"256\"/><Column id=\"호소내용\" type=\"STRING\" size=\"256\"/><Column id=\"추가내용\" type=\"STRING\" size=\"256\"/><Column id=\"피부점수\" type=\"STRING\" size=\"256\"/><Column id=\"수면상태\" type=\"STRING\" size=\"256\"/><Column id=\"수면상태_1\" type=\"STRING\" size=\"256\"/><Column id=\"수면상태_2\" type=\"STRING\" size=\"256\"/><Column id=\"수면상태_3\" type=\"STRING\" size=\"256\"/><Column id=\"수면상태_4\" type=\"STRING\" size=\"256\"/><Column id=\"수면상태_5\" type=\"STRING\" size=\"256\"/><Column id=\"수면점수\" type=\"STRING\" size=\"256\"/><Column id=\"수면비고\" type=\"STRING\" size=\"256\"/><Column id=\"약부작용\" type=\"STRING\" size=\"256\"/><Column id=\"약부작용_1\" type=\"STRING\" size=\"256\"/><Column id=\"약부작용_2\" type=\"STRING\" size=\"256\"/><Column id=\"약부작용_3\" type=\"STRING\" size=\"256\"/><Column id=\"약부작용_4\" type=\"STRING\" size=\"256\"/><Column id=\"약물점수\" type=\"STRING\" size=\"256\"/><Column id=\"질병약물\" type=\"STRING\" size=\"256\"/><Column id=\"질병음식\" type=\"STRING\" size=\"256\"/><Column id=\"호스피스\" type=\"STRING\" size=\"256\"/><Column id=\"간호교육\" type=\"STRING\" size=\"256\"/><Column id=\"간호총점\" type=\"STRING\" size=\"256\"/><Column id=\"결혼\" type=\"STRING\" size=\"256\"/><Column id=\"직업\" type=\"STRING\" size=\"256\"/><Column id=\"종교\" type=\"STRING\" size=\"256\"/><Column id=\"건강행위\" type=\"STRING\" size=\"256\"/><Column id=\"건강행위_1\" type=\"STRING\" size=\"256\"/><Column id=\"건강행위_2\" type=\"STRING\" size=\"256\"/><Column id=\"건강행위_3\" type=\"STRING\" size=\"256\"/><Column id=\"건강행위_4\" type=\"STRING\" size=\"256\"/><Column id=\"건강술\" type=\"STRING\" size=\"256\"/><Column id=\"건강담배\" type=\"STRING\" size=\"256\"/><Column id=\"건강수면\" type=\"STRING\" size=\"256\"/><Column id=\"건강운동\" type=\"STRING\" size=\"256\"/><Column id=\"현병력\" type=\"STRING\" size=\"256\"/><Column id=\"과거력\" type=\"STRING\" size=\"256\"/><Column id=\"과거력_1\" type=\"STRING\" size=\"256\"/><Column id=\"과거력_2\" type=\"STRING\" size=\"256\"/><Column id=\"과거력_3\" type=\"STRING\" size=\"256\"/><Column id=\"과거력_4\" type=\"STRING\" size=\"256\"/><Column id=\"과거력_5\" type=\"STRING\" size=\"256\"/><Column id=\"과거력_6\" type=\"STRING\" size=\"256\"/><Column id=\"과거력_7\" type=\"STRING\" size=\"256\"/><Column id=\"과거력_8\" type=\"STRING\" size=\"256\"/><Column id=\"과거력_9\" type=\"STRING\" size=\"256\"/><Column id=\"암부위\" type=\"STRING\" size=\"256\"/><Column id=\"투약상태\" type=\"STRING\" size=\"256\"/><Column id=\"알레르기\" type=\"STRING\" size=\"256\"/><Column id=\"의식상태\" type=\"STRING\" size=\"256\"/><Column id=\"정서상태\" type=\"STRING\" size=\"256\"/><Column id=\"활동상태\" type=\"STRING\" size=\"256\"/><Column id=\"활동상태_1\" type=\"STRING\" size=\"256\"/><Column id=\"활동상태_2\" type=\"STRING\" size=\"256\"/><Column id=\"활동상태_3\" type=\"STRING\" size=\"256\"/><Column id=\"활동상태_4\" type=\"STRING\" size=\"256\"/><Column id=\"활동상태_5\" type=\"STRING\" size=\"256\"/><Column id=\"활동상태_6\" type=\"STRING\" size=\"256\"/><Column id=\"활동마비\" type=\"STRING\" size=\"256\"/><Column id=\"활동감각\" type=\"STRING\" size=\"256\"/><Column id=\"활동보조\" type=\"STRING\" size=\"256\"/><Column id=\"호흡기계\" type=\"STRING\" size=\"256\"/><Column id=\"호흡기계_1\" type=\"STRING\" size=\"256\"/><Column id=\"호흡기계_2\" type=\"STRING\" size=\"256\"/><Column id=\"호흡기계_3\" type=\"STRING\" size=\"256\"/><Column id=\"호흡기계_4\" type=\"STRING\" size=\"256\"/><Column id=\"호흡기계_5\" type=\"STRING\" size=\"256\"/><Column id=\"호흡기계_6\" type=\"STRING\" size=\"256\"/><Column id=\"호흡기계_7\" type=\"STRING\" size=\"256\"/><Column id=\"호흡기계_8\" type=\"STRING\" size=\"256\"/><Column id=\"호흡통증\" type=\"STRING\" size=\"256\"/><Column id=\"호흡산소\" type=\"INT\" size=\"256\"/><Column id=\"소화기계\" type=\"STRING\" size=\"256\"/><Column id=\"소화기계_1\" type=\"STRING\" size=\"256\"/><Column id=\"소화기계_2\" type=\"STRING\" size=\"256\"/><Column id=\"소화기계_3\" type=\"STRING\" size=\"256\"/><Column id=\"소화기계_4\" type=\"STRING\" size=\"256\"/><Column id=\"소화기계_5\" type=\"STRING\" size=\"256\"/><Column id=\"소화기계_6\" type=\"STRING\" size=\"256\"/><Column id=\"소화기계_7\" type=\"STRING\" size=\"256\"/><Column id=\"식이상태\" type=\"STRING\" size=\"256\"/><Column id=\"식이상태_1\" type=\"STRING\" size=\"256\"/><Column id=\"식이상태_2\" type=\"STRING\" size=\"256\"/><Column id=\"식이상태_3\" type=\"STRING\" size=\"256\"/><Column id=\"식이상태_4\" type=\"STRING\" size=\"256\"/><Column id=\"식이상태_5\" type=\"STRING\" size=\"256\"/><Column id=\"칼로리\" type=\"INT\" size=\"256\"/><Column id=\"심혈관계\" type=\"STRING\" size=\"256\"/><Column id=\"심혈관계_1\" type=\"STRING\" size=\"256\"/><Column id=\"심혈관계_2\" type=\"STRING\" size=\"256\"/><Column id=\"심혈관계_3\" type=\"STRING\" size=\"256\"/><Column id=\"심혈관계_4\" type=\"STRING\" size=\"256\"/><Column id=\"심혈관계_5\" type=\"STRING\" size=\"256\"/><Column id=\"심혈관계_6\" type=\"STRING\" size=\"256\"/><Column id=\"심혈관계_7\" type=\"STRING\" size=\"256\"/><Column id=\"심혈흉통\" type=\"STRING\" size=\"256\"/><Column id=\"심혈부종\" type=\"STRING\" size=\"256\"/><Column id=\"피부상태\" type=\"STRING\" size=\"256\"/><Column id=\"피부상태_1\" type=\"STRING\" size=\"256\"/><Column id=\"피부상태_2\" type=\"STRING\" size=\"256\"/><Column id=\"피부상태_3\" type=\"STRING\" size=\"256\"/><Column id=\"피부상태_4\" type=\"STRING\" size=\"256\"/><Column id=\"피부상태_5\" type=\"STRING\" size=\"256\"/><Column id=\"피부욕창\" type=\"STRING\" size=\"256\"/><Column id=\"피부상처\" type=\"STRING\" size=\"256\"/><Column id=\"배설소변\" type=\"STRING\" size=\"256\"/><Column id=\"배설소변_1\" type=\"STRING\" size=\"256\"/><Column id=\"배설소변_2\" type=\"STRING\" size=\"256\"/><Column id=\"배설소변_3\" type=\"STRING\" size=\"256\"/><Column id=\"소변횟수\" type=\"STRING\" size=\"256\"/><Column id=\"소변종류\" type=\"STRING\" size=\"256\"/><Column id=\"소변종류_1\" type=\"STRING\" size=\"256\"/><Column id=\"소변종류_2\" type=\"STRING\" size=\"256\"/><Column id=\"소변종류_3\" type=\"STRING\" size=\"256\"/><Column id=\"소변종류_4\" type=\"STRING\" size=\"256\"/><Column id=\"소변종류_5\" type=\"STRING\" size=\"256\"/><Column id=\"소변양상\" type=\"STRING\" size=\"256\"/><Column id=\"배설대변\" type=\"STRING\" size=\"256\"/><Column id=\"배설대변_1\" type=\"STRING\" size=\"256\"/><Column id=\"배설대변_2\" type=\"STRING\" size=\"256\"/><Column id=\"대변횟수\" type=\"FLOAT\" size=\"256\"/><Column id=\"대변양상\" type=\"STRING\" size=\"256\"/><Column id=\"간호계획\" type=\"STRING\" size=\"256\"/><Column id=\"입소일\" type=\"STRING\" size=\"256\"/><Column id=\"인정번호\" type=\"STRING\" size=\"256\"/><Column id=\"org_n_number\" type=\"INT\" size=\"256\"/><Column id=\"체중변화\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"grade_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"b_date\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"n_number\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report", this);
            obj._setContents("<ColumnInfo><Column id=\"REPO1\" type=\"STRING\" size=\"256\"/><Column id=\"R1\" type=\"STRING\" size=\"256\"/><Column id=\"R1_1\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"사정일\" type=\"STRING\" size=\"256\"/><Column id=\"평가기간\" type=\"STRING\" size=\"256\"/><Column id=\"작성자\" type=\"STRING\" size=\"256\"/><Column id=\"n_number\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_kinds", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">1</Col><Col id=\"CMNM\">유</Col></Row><Row><Col id=\"CMCD\">0</Col><Col id=\"CMNM\">무</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_levels", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">0</Col><Col id=\"CMNM\">0점</Col></Row><Row><Col id=\"CMCD\">1</Col><Col id=\"CMNM\">1점</Col></Row><Row><Col id=\"CMCD\">2</Col><Col id=\"CMNM\">2점</Col></Row><Row><Col id=\"CMCD\">3</Col><Col id=\"CMNM\">3점</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_level_conscious", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">0</Col><Col id=\"CMNM\">명료(0)</Col></Row><Row><Col id=\"CMCD\">1</Col><Col id=\"CMNM\">혼돈(1)</Col></Row><Row><Col id=\"CMCD\">2</Col><Col id=\"CMNM\">반의식(2)</Col></Row><Row><Col id=\"CMCD\">3</Col><Col id=\"CMNM\">무의식(3)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_needs", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">1</Col><Col id=\"CMNM\">필요</Col></Row><Row><Col id=\"CMCD\">0</Col><Col id=\"CMNM\">불필요</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_marry", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">1</Col><Col id=\"CMNM\">미혼</Col></Row><Row><Col id=\"CMCD\">2</Col><Col id=\"CMNM\">기혼</Col></Row><Row><Col id=\"CMCD\">3</Col><Col id=\"CMNM\">사별</Col></Row><Row><Col id=\"CMCD\">4</Col><Col id=\"CMNM\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_religion", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">1</Col><Col id=\"CMNM\">천주교</Col></Row><Row><Col id=\"CMCD\">2</Col><Col id=\"CMNM\">기독교</Col></Row><Row><Col id=\"CMCD\">3</Col><Col id=\"CMNM\">불교</Col></Row><Row><Col id=\"CMCD\">4</Col><Col id=\"CMNM\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_level_conscious_one_select", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">1</Col><Col id=\"CMNM\">명료</Col></Row><Row><Col id=\"CMCD\">2</Col><Col id=\"CMNM\">졸림</Col></Row><Row><Col id=\"CMCD\">3</Col><Col id=\"CMNM\">질문에만 반응</Col></Row><Row><Col id=\"CMCD\">4</Col><Col id=\"CMNM\">통증에만 반응</Col></Row><Row><Col id=\"CMCD\">5</Col><Col id=\"CMNM\">통증에도 반응 없음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_level_emotional_one_select", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">1</Col><Col id=\"CMNM\">안정</Col></Row><Row><Col id=\"CMCD\">2</Col><Col id=\"CMNM\">불안</Col></Row><Row><Col id=\"CMCD\">3</Col><Col id=\"CMNM\">분노</Col></Row><Row><Col id=\"CMCD\">4</Col><Col id=\"CMNM\">슬픔</Col></Row><Row><Col id=\"CMCD\">5</Col><Col id=\"CMNM\">우울</Col></Row><Row><Col id=\"CMCD\">6</Col><Col id=\"CMNM\">거부</Col></Row><Row><Col id=\"CMCD\">7</Col><Col id=\"CMNM\">긴장</Col></Row><Row><Col id=\"CMCD\">8</Col><Col id=\"CMNM\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_urine_pattern", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">1</Col><Col id=\"CMNM\">정상</Col></Row><Row><Col id=\"CMCD\">2</Col><Col id=\"CMNM\">혈뇨</Col></Row><Row><Col id=\"CMCD\">3</Col><Col id=\"CMNM\">탁한뇨</Col></Row><Row><Col id=\"CMCD\">4</Col><Col id=\"CMNM\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_feces_pattern", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">1</Col><Col id=\"CMNM\">정상</Col></Row><Row><Col id=\"CMCD\">2</Col><Col id=\"CMNM\">혈변</Col></Row><Row><Col id=\"CMCD\">3</Col><Col id=\"CMNM\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"사정일\" type=\"STRING\" size=\"256\"/><Column id=\"평가기간\" type=\"STRING\" size=\"256\"/><Column id=\"작성자\" type=\"STRING\" size=\"256\"/><Column id=\"n_number\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"진단명\" type=\"STRING\" size=\"256\"/><Column id=\"병원진료\" type=\"STRING\" size=\"256\"/><Column id=\"혈액형\" type=\"STRING\" size=\"256\"/><Column id=\"혈압\" type=\"STRING\" size=\"256\"/><Column id=\"최고혈압\" type=\"STRING\" size=\"256\"/><Column id=\"최저혈압\" type=\"STRING\" size=\"256\"/><Column id=\"맥박\" type=\"INT\" size=\"256\"/><Column id=\"혈당\" type=\"INT\" size=\"256\"/><Column id=\"체온\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"호흡\" type=\"INT\" size=\"256\"/><Column id=\"신장\" type=\"STRING\" size=\"256\"/><Column id=\"체중\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"전체중\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"장애유무\" type=\"STRING\" size=\"256\"/><Column id=\"장애종류\" type=\"STRING\" size=\"256\"/><Column id=\"투약유무\" type=\"STRING\" size=\"256\"/><Column id=\"투약약물\" type=\"STRING\" size=\"256\"/><Column id=\"가족병력\" type=\"STRING\" size=\"256\"/><Column id=\"병력기타\" type=\"STRING\" size=\"256\"/><Column id=\"의식점수\" type=\"STRING\" size=\"256\"/><Column id=\"과거수술\" type=\"STRING\" size=\"256\"/><Column id=\"과거알콜\" type=\"STRING\" size=\"256\"/><Column id=\"과거흡연\" type=\"STRING\" size=\"256\"/><Column id=\"과거기타\" type=\"STRING\" size=\"256\"/><Column id=\"과거비고\" type=\"STRING\" size=\"256\"/><Column id=\"시력보조\" type=\"STRING\" size=\"256\"/><Column id=\"시력분비\" type=\"STRING\" size=\"256\"/><Column id=\"시력기타\" type=\"STRING\" size=\"256\"/><Column id=\"시력비고\" type=\"STRING\" size=\"256\"/><Column id=\"시력점수\" type=\"STRING\" size=\"256\"/><Column id=\"청력보조\" type=\"STRING\" size=\"256\"/><Column id=\"청력분비\" type=\"STRING\" size=\"256\"/><Column id=\"청력기타\" type=\"STRING\" size=\"256\"/><Column id=\"청력비고\" type=\"STRING\" size=\"256\"/><Column id=\"청력점수\" type=\"STRING\" size=\"256\"/><Column id=\"구강점수\" type=\"STRING\" size=\"256\"/><Column id=\"질환점수\" type=\"STRING\" size=\"256\"/><Column id=\"질병01\" type=\"STRING\" size=\"256\"/><Column id=\"질병01_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병01_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병01_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병01_4\" type=\"STRING\" size=\"256\"/><Column id=\"질병01_5\" type=\"STRING\" size=\"256\"/><Column id=\"질병02\" type=\"STRING\" size=\"256\"/><Column id=\"질병02_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병02_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병02_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병02_4\" type=\"STRING\" size=\"256\"/><Column id=\"질병02_5\" type=\"STRING\" size=\"256\"/><Column id=\"질병03\" type=\"STRING\" size=\"256\"/><Column id=\"질병03_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병03_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병03_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병04\" type=\"STRING\" size=\"256\"/><Column id=\"질병04_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병04_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병04_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병05\" type=\"STRING\" size=\"256\"/><Column id=\"질병05_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병05_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병05_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병05_4\" type=\"STRING\" size=\"256\"/><Column id=\"질병06\" type=\"STRING\" size=\"256\"/><Column id=\"질병06_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병06_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병06_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병06_4\" type=\"STRING\" size=\"256\"/><Column id=\"질병06_5\" type=\"STRING\" size=\"256\"/><Column id=\"질병06_6\" type=\"STRING\" size=\"256\"/><Column id=\"질병07\" type=\"STRING\" size=\"256\"/><Column id=\"질병07_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병07_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병07_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병07_4\" type=\"STRING\" size=\"256\"/><Column id=\"질병08\" type=\"STRING\" size=\"256\"/><Column id=\"질병08_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병08_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병08_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병08_4\" type=\"STRING\" size=\"256\"/><Column id=\"질병08_5\" type=\"STRING\" size=\"256\"/><Column id=\"질병09\" type=\"STRING\" size=\"256\"/><Column id=\"질병09_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병09_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병09_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병09_4\" type=\"STRING\" size=\"256\"/><Column id=\"질병10\" type=\"STRING\" size=\"256\"/><Column id=\"질병10_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병10_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병10_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병10_4\" type=\"STRING\" size=\"256\"/><Column id=\"질병10_5\" type=\"STRING\" size=\"256\"/><Column id=\"질병10_6\" type=\"STRING\" size=\"256\"/><Column id=\"질병11\" type=\"STRING\" size=\"256\"/><Column id=\"질병11_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병11_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병11_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병11_4\" type=\"STRING\" size=\"256\"/><Column id=\"질병12\" type=\"STRING\" size=\"256\"/><Column id=\"질병12_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병12_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병12_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병12_4\" type=\"STRING\" size=\"256\"/><Column id=\"질병13\" type=\"STRING\" size=\"256\"/><Column id=\"질병13_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병13_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병13_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병14\" type=\"STRING\" size=\"256\"/><Column id=\"질병14_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병14_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병14_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병14_4\" type=\"STRING\" size=\"256\"/><Column id=\"질병15\" type=\"STRING\" size=\"256\"/><Column id=\"질병15_1\" type=\"STRING\" size=\"256\"/><Column id=\"질병15_2\" type=\"STRING\" size=\"256\"/><Column id=\"질병15_3\" type=\"STRING\" size=\"256\"/><Column id=\"질병15_4\" type=\"STRING\" size=\"256\"/><Column id=\"질병15_5\" type=\"STRING\" size=\"256\"/><Column id=\"호소내용\" type=\"STRING\" size=\"256\"/><Column id=\"추가내용\" type=\"STRING\" size=\"256\"/><Column id=\"피부점수\" type=\"STRING\" size=\"256\"/><Column id=\"수면상태\" type=\"STRING\" size=\"256\"/><Column id=\"수면상태_1\" type=\"STRING\" size=\"256\"/><Column id=\"수면상태_2\" type=\"STRING\" size=\"256\"/><Column id=\"수면상태_3\" type=\"STRING\" size=\"256\"/><Column id=\"수면상태_4\" type=\"STRING\" size=\"256\"/><Column id=\"수면상태_5\" type=\"STRING\" size=\"256\"/><Column id=\"수면점수\" type=\"STRING\" size=\"256\"/><Column id=\"수면비고\" type=\"STRING\" size=\"256\"/><Column id=\"약부작용\" type=\"STRING\" size=\"256\"/><Column id=\"약부작용_1\" type=\"STRING\" size=\"256\"/><Column id=\"약부작용_2\" type=\"STRING\" size=\"256\"/><Column id=\"약부작용_3\" type=\"STRING\" size=\"256\"/><Column id=\"약부작용_4\" type=\"STRING\" size=\"256\"/><Column id=\"약물점수\" type=\"STRING\" size=\"256\"/><Column id=\"질병약물\" type=\"STRING\" size=\"256\"/><Column id=\"질병음식\" type=\"STRING\" size=\"256\"/><Column id=\"호스피스\" type=\"STRING\" size=\"256\"/><Column id=\"간호교육\" type=\"STRING\" size=\"256\"/><Column id=\"간호총점\" type=\"STRING\" size=\"256\"/><Column id=\"결혼\" type=\"STRING\" size=\"256\"/><Column id=\"직업\" type=\"STRING\" size=\"256\"/><Column id=\"종교\" type=\"STRING\" size=\"256\"/><Column id=\"건강행위\" type=\"STRING\" size=\"256\"/><Column id=\"건강행위_1\" type=\"STRING\" size=\"256\"/><Column id=\"건강행위_2\" type=\"STRING\" size=\"256\"/><Column id=\"건강행위_3\" type=\"STRING\" size=\"256\"/><Column id=\"건강행위_4\" type=\"STRING\" size=\"256\"/><Column id=\"건강술\" type=\"STRING\" size=\"256\"/><Column id=\"건강담배\" type=\"STRING\" size=\"256\"/><Column id=\"건강수면\" type=\"STRING\" size=\"256\"/><Column id=\"건강운동\" type=\"STRING\" size=\"256\"/><Column id=\"현병력\" type=\"STRING\" size=\"256\"/><Column id=\"과거력\" type=\"STRING\" size=\"256\"/><Column id=\"과거력_1\" type=\"STRING\" size=\"256\"/><Column id=\"과거력_2\" type=\"STRING\" size=\"256\"/><Column id=\"과거력_3\" type=\"STRING\" size=\"256\"/><Column id=\"과거력_4\" type=\"STRING\" size=\"256\"/><Column id=\"과거력_5\" type=\"STRING\" size=\"256\"/><Column id=\"과거력_6\" type=\"STRING\" size=\"256\"/><Column id=\"과거력_7\" type=\"STRING\" size=\"256\"/><Column id=\"과거력_8\" type=\"STRING\" size=\"256\"/><Column id=\"과거력_9\" type=\"STRING\" size=\"256\"/><Column id=\"암부위\" type=\"STRING\" size=\"256\"/><Column id=\"투약상태\" type=\"STRING\" size=\"256\"/><Column id=\"알레르기\" type=\"STRING\" size=\"256\"/><Column id=\"의식상태\" type=\"STRING\" size=\"256\"/><Column id=\"정서상태\" type=\"STRING\" size=\"256\"/><Column id=\"활동상태\" type=\"STRING\" size=\"256\"/><Column id=\"활동상태_1\" type=\"STRING\" size=\"256\"/><Column id=\"활동상태_2\" type=\"STRING\" size=\"256\"/><Column id=\"활동상태_3\" type=\"STRING\" size=\"256\"/><Column id=\"활동상태_4\" type=\"STRING\" size=\"256\"/><Column id=\"활동상태_5\" type=\"STRING\" size=\"256\"/><Column id=\"활동상태_6\" type=\"STRING\" size=\"256\"/><Column id=\"활동마비\" type=\"STRING\" size=\"256\"/><Column id=\"활동감각\" type=\"STRING\" size=\"256\"/><Column id=\"활동보조\" type=\"STRING\" size=\"256\"/><Column id=\"호흡기계\" type=\"STRING\" size=\"256\"/><Column id=\"호흡기계_1\" type=\"STRING\" size=\"256\"/><Column id=\"호흡기계_2\" type=\"STRING\" size=\"256\"/><Column id=\"호흡기계_3\" type=\"STRING\" size=\"256\"/><Column id=\"호흡기계_4\" type=\"STRING\" size=\"256\"/><Column id=\"호흡기계_5\" type=\"STRING\" size=\"256\"/><Column id=\"호흡기계_6\" type=\"STRING\" size=\"256\"/><Column id=\"호흡기계_7\" type=\"STRING\" size=\"256\"/><Column id=\"호흡기계_8\" type=\"STRING\" size=\"256\"/><Column id=\"호흡통증\" type=\"STRING\" size=\"256\"/><Column id=\"호흡산소\" type=\"INT\" size=\"256\"/><Column id=\"소화기계\" type=\"STRING\" size=\"256\"/><Column id=\"소화기계_1\" type=\"STRING\" size=\"256\"/><Column id=\"소화기계_2\" type=\"STRING\" size=\"256\"/><Column id=\"소화기계_3\" type=\"STRING\" size=\"256\"/><Column id=\"소화기계_4\" type=\"STRING\" size=\"256\"/><Column id=\"소화기계_5\" type=\"STRING\" size=\"256\"/><Column id=\"소화기계_6\" type=\"STRING\" size=\"256\"/><Column id=\"소화기계_7\" type=\"STRING\" size=\"256\"/><Column id=\"식이상태\" type=\"STRING\" size=\"256\"/><Column id=\"식이상태_1\" type=\"STRING\" size=\"256\"/><Column id=\"식이상태_2\" type=\"STRING\" size=\"256\"/><Column id=\"식이상태_3\" type=\"STRING\" size=\"256\"/><Column id=\"식이상태_4\" type=\"STRING\" size=\"256\"/><Column id=\"식이상태_5\" type=\"STRING\" size=\"256\"/><Column id=\"칼로리\" type=\"INT\" size=\"256\"/><Column id=\"심혈관계\" type=\"STRING\" size=\"256\"/><Column id=\"심혈관계_1\" type=\"STRING\" size=\"256\"/><Column id=\"심혈관계_2\" type=\"STRING\" size=\"256\"/><Column id=\"심혈관계_3\" type=\"STRING\" size=\"256\"/><Column id=\"심혈관계_4\" type=\"STRING\" size=\"256\"/><Column id=\"심혈관계_5\" type=\"STRING\" size=\"256\"/><Column id=\"심혈관계_6\" type=\"STRING\" size=\"256\"/><Column id=\"심혈관계_7\" type=\"STRING\" size=\"256\"/><Column id=\"심혈흉통\" type=\"STRING\" size=\"256\"/><Column id=\"심혈부종\" type=\"STRING\" size=\"256\"/><Column id=\"피부상태\" type=\"STRING\" size=\"256\"/><Column id=\"피부상태_1\" type=\"STRING\" size=\"256\"/><Column id=\"피부상태_2\" type=\"STRING\" size=\"256\"/><Column id=\"피부상태_3\" type=\"STRING\" size=\"256\"/><Column id=\"피부상태_4\" type=\"STRING\" size=\"256\"/><Column id=\"피부상태_5\" type=\"STRING\" size=\"256\"/><Column id=\"피부욕창\" type=\"STRING\" size=\"256\"/><Column id=\"피부상처\" type=\"STRING\" size=\"256\"/><Column id=\"배설소변\" type=\"STRING\" size=\"256\"/><Column id=\"배설소변_1\" type=\"STRING\" size=\"256\"/><Column id=\"배설소변_2\" type=\"STRING\" size=\"256\"/><Column id=\"배설소변_3\" type=\"STRING\" size=\"256\"/><Column id=\"소변횟수\" type=\"STRING\" size=\"256\"/><Column id=\"소변종류\" type=\"STRING\" size=\"256\"/><Column id=\"소변종류_1\" type=\"STRING\" size=\"256\"/><Column id=\"소변종류_2\" type=\"STRING\" size=\"256\"/><Column id=\"소변종류_3\" type=\"STRING\" size=\"256\"/><Column id=\"소변종류_4\" type=\"STRING\" size=\"256\"/><Column id=\"소변종류_5\" type=\"STRING\" size=\"256\"/><Column id=\"소변양상\" type=\"STRING\" size=\"256\"/><Column id=\"배설대변\" type=\"STRING\" size=\"256\"/><Column id=\"배설대변_1\" type=\"STRING\" size=\"256\"/><Column id=\"배설대변_2\" type=\"STRING\" size=\"256\"/><Column id=\"대변횟수\" type=\"FLOAT\" size=\"256\"/><Column id=\"대변양상\" type=\"STRING\" size=\"256\"/><Column id=\"간호계획\" type=\"STRING\" size=\"256\"/><Column id=\"체중변화\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data_return", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0","310","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","20","7","250","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("간호사정.건강수준평가 이력");
            obj.set_cssclass("lb01");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","div_search:20","0",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_sign","800","7","65","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("결재란");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_save","1317","7","70","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report5","1185","7","125","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("건강수준 평가");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report4","1055","7","125","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_text("간호사정 평가");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report6","870","7","180","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("4");
            obj.set_text("간호사정 건강수준 평가");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_no","184","7","60","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("5");
            obj.set_text("기록번호 : ");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_no_value","247","7","60","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("6");
            obj.set_text("00000000");
            this.div_func.addChild(obj.name, obj);

            obj = new Div("div_cont","0","40",null,"860","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_up","0","0",null,"140","0",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_left","10","0","500",null,null,"0",null,null,null,null,this.div_cont.form.div_up.form);
            obj.set_taborder("0");
            this.div_cont.form.div_up.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","3","500",null,null,"4",null,null,null,null,this.div_cont.form.div_up.form.div_left.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"170\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"작성일자\"/><Cell col=\"1\" text=\"평가기간\"/><Cell col=\"2\" text=\"작성자\"/><Cell col=\"3\" text=\"작성번호\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" expandchar=\"dot\" text=\"bind:사정일\"/><Cell col=\"1\" textAlign=\"left\" cursor=\"pointer\" expandchar=\"dot\" cssclass=\"cellBMan\" text=\"bind:평가기간\"/><Cell col=\"2\" text=\"bind:작성자\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:n_number\"/></Band></Format></Formats>");
            this.div_cont.form.div_up.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","500","0",null,null,"0","0",null,null,null,null,this.div_cont.form.div_up.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.div_cont.form.div_up.addChild(obj.name, obj);

            obj = new Static("sta_body1","12","3","1208","34",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body2","12","36","1208","34",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body3","12","69","1208","34",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_m_name","97","7","81","25",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("3");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_m_code","218","7","81","25",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("4");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_m_group","181","7","34","25",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("5");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_head1","10","3","83","34",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("6");
            obj.set_text("수급자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_head1_00","312","3","83","34",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("7");
            obj.set_text("성별 생일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_sex_nm","399","7","35","25",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("8");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_age","405","7","55","25",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("9");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_01","576","3","83","34",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("10");
            obj.set_text("입소일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_date","576","36","83","34",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("11");
            obj.set_text("작성일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_01_00","840","3","83","34",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("12");
            obj.set_text("인정등급");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_01_00_00_00","840","36","83","34",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("13");
            obj.set_text("인정번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body2_m_regist","933","41","268","25",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("14");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_grade_nm","933","7","114","25",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("15");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_m_enday","668","7","114","25",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("16");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body3_00","12","sta_body3:-1","1208","34",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body2_사정일","668","41","114","25",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("17");
            obj.set_color("red");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_head1_01","10","36","83","100",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("19");
            obj.set_text("간호계획");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new TextArea("txt_00","93","38","482","95",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("20");
            obj.set_maxlength("1000");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_date_from","576","69","83","34",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("21");
            obj.set_text("적용기간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_manager","576","101","83","34",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("22");
            obj.set_text("작성자");
            obj.set_cssclass("btn_worker");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","662","74","90","26",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_cssclass("essential");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","842","74","90","26",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_cssclass("essential");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic","931","74","25","26",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("25");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from_pic","751","74","25","26",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("26");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_sixMonth","1030","74","90","26",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("27");
            obj.set_text("6개월");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_twelveMonth","1125","74","90","26",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("28");
            obj.set_text("12개월");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_00","789","73","45","25",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("29");
            obj.set_text("부터");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Calendar("cal_date","663","40","90","26",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            obj.set_cssclass("essential");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Calendar("cal_date_pic","752","40","25","26",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("31");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_age00","479","7","80","25",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("32");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_manager_value","667","107","198","25",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("33");
            obj.set_text("너싱홈 / 요양보호사 / 20210007");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_date_to","1006","101","83","34",null,null,null,null,null,null,this.div_cont.form.div_up.form.div_right.form);
            obj.set_taborder("34");
            obj.set_text("적용기간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.div_cont.form.div_up.form.div_right.addChild(obj.name, obj);

            obj = new Div("div_down","0","150",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Tab("tab","10","0",null,null,"0","0",null,null,null,null,this.div_cont.form.div_down.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_orign");
            this.div_cont.form.div_down.addChild(obj.name, obj);

            obj = new Tabpage("tab_page1",this.div_cont.form.div_down.form.tab);
            obj.set_text("간호사정");
            this.div_cont.form.div_down.form.tab.addChild(obj.name, obj);

            obj = new Div("div_main","0","0",null,null,"0","0",null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form);
            obj.set_taborder("0");
            this.div_cont.form.div_down.form.tab.tab_page1.addChild(obj.name, obj);

            obj = new Static("sta_body34_00","1277","399","430","31",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("231");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body31_00","1278","278","429","33",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("230");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body35","1279","428","428","68",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body36","850","462","431","67",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body36_00","1291","495","416","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body01","0","0","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body21","850","0","857","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body02","0","sta_body01:-1","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1","0","0","90","68",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("3");
            obj.set_text("바이탈측정");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body03","0","sta_body02:-1","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body04","0","sta_body03:-1","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body05","0","sta_body04:-1","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body06","0","sta_body05:-1","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body07","0","sta_body06:-1","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body08","0","sta_body07:-1","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body09","0","sta_body08:-1","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body10","0","sta_body09:-1","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body22","850","sta_body21:-1","857","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body23","850","sta_body22:-1","857","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body24","850","sta_body23:-1","857","61",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body26","850","159","857","61",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body19","0","594","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body20","0","sta_body19:-1","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body18","0","561","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body17","0","528","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body16","0","495","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body15","0","462","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body14","0","429","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body12","0","363","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body13","0","sta_body12:-1","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body11","0","sta_body10:-1","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body28","850","219","857","61",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body30","850","279","446","61",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body31","1290","310","417","61",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body33","1278","369","429","31",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body34","850","399","430","65",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body37","850","528","857","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body32","850","338","440","62",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body38","850","561","857","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body39","850","594","857","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body40","850","627","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00","90","0","150","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("38");
            obj.set_text("혈 압");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00","240","0","100","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("39");
            obj.set_text("맥 박");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_00","340","0","100","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("40");
            obj.set_text("혈 당");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_00_00","440","0","100","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("41");
            obj.set_text("체 온");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_00_00_00","540","0","100","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("42");
            obj.set_text("호 흡");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_00_00_00_00","640","0","100","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("43");
            obj.set_text("신 장");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_00_00_00_00_00","740","0","111","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("44");
            obj.set_text("혈 액 형");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01","0","66","90","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("45");
            obj.set_text("전.체중");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00","0","99","90","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("46");
            obj.set_text("장애여부");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00","0","132","90","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("47");
            obj.set_text("투약약물");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00","0","165","90","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("48");
            obj.set_text("가족병력");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_00","0","198","90","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("49");
            obj.set_text("의식상태");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_00_00","0","231","90","68",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("50");
            obj.set_text("과거력");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_00_00_00","0","297","90","100",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("51");
            obj.set_text("시력");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_00_00_00_00","0","396","90","100",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("52");
            obj.set_text("청력");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_00_00_00_00_00","0","495","90","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("53");
            obj.set_text("구강");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_00_00_00_00_00_00","0","528","90","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("54");
            obj.set_text("피부");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_00_00_00_00_00_00_00","0","561","90","67",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("55");
            obj.set_text("수면");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_00_00_00_00_00_00_00_00","0","627","90","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_02","850","0","90","100",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("57");
            obj.set_text("약물부작용\r\n(알러지)");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_02_00","850","99","90","61",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("58");
            obj.set_text("전신증상");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_02_00_00","850","159","90","61",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("59");
            obj.set_text("호흡기계\r\n심혈관계");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_02_00_00_00","850","219","90","31",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("60");
            obj.set_text("비뇨기계");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_02_00_00_00_00","850","249","90","31",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("61");
            obj.set_text("여성생식계");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_02_00_00_00_00_00","850","279","90","60",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("62");
            obj.set_text("근골격계");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_02_00_00_00_00_00_00","850","338","90","62",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("63");
            obj.set_text("신경계");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_02_00_00_00_00_00_00_00","850","399","90","67",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("64");
            obj.set_text("호르몬계");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_02_00_00_00_00_00_00_00_00","850","463","90","67",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("65");
            obj.set_text("호소내용");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_02_00_00_00_00_00_00_00_00_00","850","528","90","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("66");
            obj.set_text("질환점수");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_02_00_00_00_00_00_00_00_00_00_00","850","561","90","67",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("67");
            obj.set_text("기타\r\n(평가점수\r\n미포함)");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_02_00_00_00_00_00_00_00_00_00_01","850","627","90","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("68");
            obj.set_text("총점");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_02_00_01","1279","99","90","61",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("70");
            obj.set_text("심혈관질환");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_02_00_00_01","1279","159","90","62",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("71");
            obj.set_text("호흡기질환");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_02_00_00_00_01","1279","219","90","61",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("72");
            obj.set_text("신경정신\r\n질환");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_02_00_00_00_00_01","1279","279","90","32",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("73");
            obj.set_text("소화기질환");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_02_00_00_00_00_00_01","1279","368","90","32",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("74");
            obj.set_text("근골격질환");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_02_00_00_00_00_00_00_01","1279","310","90","60",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("75");
            obj.set_text("피부비뇨기\r\n질환");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_02_00_00_00_00_00_00_00_01","1279","399","90","31",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("76");
            obj.set_text("종   양");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_02_00_00_00_00_00_00_00_00_01","1279","495","90","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("77");
            obj.set_text("추   가");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_02_00_00_00_00_00_00_00_00_01_00","1279","428","90","68",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("78");
            obj.set_text("그   외");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1","95","37","60","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("79");
            obj.set_autoselect("true");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            obj.set_maxlength("3");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00","175","37","60","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("80");
            obj.set_autoselect("true");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            obj.set_maxlength("3");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_00","163","38","10","23",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("81");
            obj.set_text("/");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00","246","37","90","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("82");
            obj.set_autoselect("true");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            obj.set_maxlength("3");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00","345","37","90","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("83");
            obj.set_autoselect("true");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            obj.set_maxlength("3");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00","546","37","90","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("84");
            obj.set_autoselect("true");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            obj.set_maxlength("3");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00","751","37","90","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("85");
            obj.set_maxlength("3");
            obj.set_inputtype("english");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_01","240","66","90","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("86");
            obj.set_text("현.체중");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_01_00","540","66","90","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("87");
            obj.set_text("체중변화");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00","634","70","90","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("88");
            obj.set_autoselect("true");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            obj.set_color("red");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_01","334","104","90","24",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("89");
            obj.set_text("장애종류");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_01_00","334","136","90","24",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("90");
            obj.set_text("투약내용");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00","334","169","90","24",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("91");
            obj.set_text("병력기타");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01","421","103","250","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("92");
            obj.set_autoselect("true");
            obj.set_maxlength("20");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00","421","136","250","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("93");
            obj.set_autoselect("true");
            obj.set_maxlength("20");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00","421","169","250","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("94");
            obj.set_autoselect("true");
            obj.set_maxlength("20");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00","99","237","100","24",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("95");
            obj.set_text("*        수술경험:");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00","99","269","100","24",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("96");
            obj.set_text("*  알콜.약물의존:");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_01","349","237","40","24",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("97");
            obj.set_text("* 흡연:");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_00","349","269","40","24",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("98");
            obj.set_text("* 기타:");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_01","99","336","100","24",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("99");
            obj.set_text("*   분비물및충혈:");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_02","99","304","100","24",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("100");
            obj.set_text("*      시각보조기:");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_01_00","99","434","100","24",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("101");
            obj.set_text("*   분비물및충혈:");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_02_00","99","402","100","24",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("102");
            obj.set_text("*      청각보조기:");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_01_01","149","368","145","24",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("103");
            obj.set_text("40cm 거리에서 시력평가");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_01_01_00","148","468","145","24",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("104");
            obj.set_text("1m 거리에서 청력평가");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00","527","269","250","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("105");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_01","801","367","40","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("106");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_color("red");
            obj.set_textAlign("right");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_01_00","801","467","40","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("107");
            obj.set_maxlength("2");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_color("red");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_00","527","335","250","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("108");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_00_00","349","336","40","24",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("109");
            obj.set_text("* 기타:");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_00_00_00","349","435","40","24",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("110");
            obj.set_text("* 기타:");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00","527","434","250","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("111");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_01_00_00","801","500","40","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("112");
            obj.set_maxlength("2");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_color("red");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_01_00_00_00","801","533","40","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("113");
            obj.set_maxlength("2");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_color("red");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_00","99","566","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("114");
            obj.set_text("   잠들기곤란");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_00_00","201","566","120","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("115");
            obj.set_text("   자다자주일어남");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_00_00_00","331","566","85","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("116");
            obj.set_text("   새벽기상");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_00_00_00_00","421","566","85","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("117");
            obj.set_text("   낮에 졸음");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_00_00_00_00_00","511","566","85","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("118");
            obj.set_text("   기타");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_01_00_00_00_00","801","598","40","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("119");
            obj.set_maxlength("2");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_color("red");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_01_01_00_00","108","633","702","24",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("120");
            obj.set_text("▶   0점 - 정상   1점 - 관찰필요   2점 - 지속적투약및관리필요   3점 - 적극적치료필요");
            obj.set_color("mediumvioletred");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_00_01","949","5","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("121");
            obj.set_text("   음식");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_00_00_01","1051","5","120","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("122");
            obj.set_text("   과거약물");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_00_00_00_01","1181","5","80","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("123");
            obj.set_text("   현재약물");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_00_00_00_00_01","1271","5","85","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("124");
            obj.set_text("   기타");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_01_00_00_00_00_00","1658","71","40","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("125");
            obj.set_textAlign("right");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_color("red");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_01","983","37","250","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("126");
            obj.set_maxlength("30");
            obj.set_autoselect("true");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_01_00","1316","37","250","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("127");
            obj.set_maxlength("30");
            obj.set_autoselect("true");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_00_00_01","949","37","35","24",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("128");
            obj.set_text("(약물:");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_00_00_01_00","1284","37","35","24",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("129");
            obj.set_text("음식:");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_00_00_01_00_00","1574","37","35","24",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("130");
            obj.set_text(")");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00","949","102","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("131");
            obj.set_text("   식욕저하");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00","1059","102","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("132");
            obj.set_text("   체중감소");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00","1169","102","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("133");
            obj.set_text("   부   종");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_01","949","132","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("134");
            obj.set_text("   고   열");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01","1059","132","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("135");
            obj.set_text("   구   갈");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00","949","162","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("136");
            obj.set_text("   흉   통");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00","1059","162","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("137");
            obj.set_text("   호흡곤란");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00","1169","162","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("138");
            obj.set_text("   객   담");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00","949","192","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("139");
            obj.set_text("   각   혈");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00","1059","192","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("140");
            obj.set_text("   기   침");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00","949","222","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("141");
            obj.set_text("   배뇨곤란");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00","1059","222","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("142");
            obj.set_text("   혈   노");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00","1169","222","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("143");
            obj.set_text("   배뇨통");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00","949","252","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("144");
            obj.set_text("   분비물");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00","1059","252","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("145");
            obj.set_text("   통   증");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00","1169","252","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("146");
            obj.set_text("   가려움");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00","949","282","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("147");
            obj.set_text("   관절강직");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00","1059","282","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("148");
            obj.set_text("   관절통");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00","1169","282","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("149");
            obj.set_text("   관절부종");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00","949","312","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("150");
            obj.set_text("   요통");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00","949","342","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("151");
            obj.set_text("   현훈");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00_00_00","1059","342","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("152");
            obj.set_text("   두통");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00","1169","342","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("153");
            obj.set_text("   졸도");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00","949","372","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("154");
            obj.set_text("   발작");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00_00_00_00","1059","372","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("155");
            obj.set_text("   손발떨림");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00","1169","372","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("156");
            obj.set_text("   연하곤란");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00","949","402","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("157");
            obj.set_text("   다식");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00_00_00_00_00","1059","402","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("158");
            obj.set_text("   다음");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1169","402","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("159");
            obj.set_text("   목소리변화");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00","949","433","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("160");
            obj.set_text("   열,냉불내성");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00","1378","467","120","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("161");
            obj.set_text("   갑상선기능항진");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00","1518","467","120","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("162");
            obj.set_text("   갑상선기능저하");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00","1378","433","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("163");
            obj.set_text("   당뇨");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00","1488","433","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("164");
            obj.set_text("   백내장");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1598","433","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("165");
            obj.set_text("   녹내장");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00","1378","402","60","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("166");
            obj.set_text("   위암");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00","1448","402","60","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("167");
            obj.set_text("   간암");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1518","402","60","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("168");
            obj.set_text("   폐암");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1378","372","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("169");
            obj.set_text("   관절염");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1488","372","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("170");
            obj.set_text("   골다공증");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1598","372","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("171");
            obj.set_text("   골절");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1378","342","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("172");
            obj.set_text("   피부감염");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1378","312","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("173");
            obj.set_text("   신부전");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1488","312","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("174");
            obj.set_text("   전립선비대");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1598","312","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("175");
            obj.set_text("   요로감염");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1378","282","60","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("176");
            obj.set_text("   위염");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1448","282","60","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("177");
            obj.set_text("   간염");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1518","282","80","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("178");
            obj.set_text("   담석증");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1378","252","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("179");
            obj.set_text("   파킨스병");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1488","252","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("180");
            obj.set_text("   정신분열");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1598","252","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("181");
            obj.set_text("   우울증");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1378","222","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("182");
            obj.set_text("   뇌졸증");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1488","222","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("183");
            obj.set_text("   치매");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1598","222","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("184");
            obj.set_text("   경련성질환");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1378","192","120","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("185");
            obj.set_text("   만성폐색성질환");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1378","162","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("186");
            obj.set_text("   폐결핵");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1488","162","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("187");
            obj.set_text("   천식");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1598","162","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("188");
            obj.set_text("   폐렴");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1378","132","120","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("189");
            obj.set_text("   말초혈관질환");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1508","132","150","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("190");
            obj.set_text("   부정맥/심박세동");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1378","102","80","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("191");
            obj.set_text("   고혈압");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1468","102","120","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("192");
            obj.set_text("   관상동맥질환");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1598","102","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("193");
            obj.set_text("   만성심부전");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","1608","282","80","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("194");
            obj.set_text("   치질");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","1588","402","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("195");
            obj.set_text("   전립선암");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_00","945","466","330","59",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("196");
            obj.set_maxlength("100");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_01_00_00_00_00_00_00","1658","533","40","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("197");
            obj.set_maxlength("2");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_color("red");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_01_00_00_00_00_00_00_00","949","631","80","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("198");
            obj.set_maxlength("2");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_color("red");
            obj.set_readonly("true");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_01_01_00_01","949","566","190","24",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("199");
            obj.set_text("*     호스피스 간호가 필요한가 ?");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_01_01_00_01_00","949","600","190","24",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("200");
            obj.set_text("* 간호를 위한 교육이 필요한가 ?");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_01_00_00","1378","499","250","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("201");
            obj.set_maxlength("60");
            obj.set_autoselect("true");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b","94","99","140","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("202");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_kinds");
            obj.set_direction("vertical");
            obj.set_border("0,0px none,0px none");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b00","94","131","140","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("203");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_kinds");
            obj.set_direction("vertical");
            obj.set_border("0,0px none,0px none");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b00_00","94","165","140","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("204");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_kinds");
            obj.set_direction("vertical");
            obj.set_border("0,0px none,0px none");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b00_00_02","204","330","140","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("205");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_kinds");
            obj.set_direction("vertical");
            obj.set_border("0,0px none,0px none");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b00_00_02_00","204","297","140","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("206");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_kinds");
            obj.set_direction("vertical");
            obj.set_border("0,0px none,0px none");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b00_00_02_00_00","204","264","140","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("207");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_kinds");
            obj.set_direction("vertical");
            obj.set_border("0,0px none,0px none");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b00_00_02_00_00_00","204","231","140","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("208");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_kinds");
            obj.set_direction("vertical");
            obj.set_border("0,0px none,0px none");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b00_00_02_01","388","330","140","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("209");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_kinds");
            obj.set_direction("vertical");
            obj.set_border("0,0px none,0px none");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b00_00_02_01_00","388","264","140","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("210");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_kinds");
            obj.set_direction("vertical");
            obj.set_border("0,0px none,0px none");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b00_00_02_01_01","94","198","350","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("211");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_level_conscious");
            obj.set_direction("vertical");
            obj.set_border("0,0px none,0px none");
            obj.set_color("mediumvioletred");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b00_00_02_01_01_00","316","363","350","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("212");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_levels");
            obj.set_direction("vertical");
            obj.set_border("0,0px none,0px none");
            obj.set_color("mediumvioletred");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b00_00_02_01_01_00_00","316","462","350","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("213");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_levels");
            obj.set_direction("vertical");
            obj.set_border("0,0px none,0px none");
            obj.set_color("mediumvioletred");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b00_00_02_01_01_00_00_00","96","495","350","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("214");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_levels");
            obj.set_direction("vertical");
            obj.set_border("0,0px none,0px none");
            obj.set_color("mediumvioletred");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b00_00_02_01_01_00_00_00_00","96","528","350","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("215");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_levels");
            obj.set_direction("vertical");
            obj.set_border("0,0px none,0px none");
            obj.set_color("mediumvioletred");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b00_00_02_01_01_00_00_00_00_00","96","594","350","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("216");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_levels");
            obj.set_direction("vertical");
            obj.set_border("0,0px none,0px none");
            obj.set_color("mediumvioletred");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b00_00_02_01_02","388","429","140","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("217");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_kinds");
            obj.set_direction("vertical");
            obj.set_border("0,0px none,0px none");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b00_00_02_01_02_00","204","396","140","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("218");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_kinds");
            obj.set_direction("vertical");
            obj.set_border("0,0px none,0px none");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b00_00_02_01_02_00_00","204","429","140","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("219");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_kinds");
            obj.set_direction("vertical");
            obj.set_border("0,0px none,0px none");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b00_00_02_01_01_00_01","946","66","350","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("220");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_levels");
            obj.set_direction("vertical");
            obj.set_border("0,0px none,0px none");
            obj.set_color("mediumvioletred");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b00_00_02_01_01_00_00_00_01","946","527","350","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("221");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_levels");
            obj.set_direction("vertical");
            obj.set_border("0,0px none,0px none");
            obj.set_color("mediumvioletred");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b00_00_02_01_00_00","1147","561","160","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("222");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_needs");
            obj.set_direction("vertical");
            obj.set_border("0,0px none,0px none");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b00_00_02_01_00_00_00","1147","594","160","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("223");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_needs");
            obj.set_direction("vertical");
            obj.set_border("0,0px none,0px none");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b00_00_02_01_00_01","388","232","140","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("224");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_kinds");
            obj.set_direction("vertical");
            obj.set_border("0,0px none,0px none");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_01_01","645","37","90","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("225");
            obj.set_autoselect("true");
            obj.set_textAlign("right");
            obj.set_inputtype("digit");
            obj.set_maxlength("3");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00_00","527","599","250","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("226");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00","447","37","90","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("227");
            obj.set_format("90.0");
            obj.set_limitbymask("both");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_00","335","70","90","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("228");
            obj.set_format("990.0");
            obj.set_limitbymask("both");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_00_00","95","70","90","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form);
            obj.set_taborder("229");
            obj.set_format("990.0");
            obj.set_limitbymask("both");
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.addChild(obj.name, obj);

            obj = new Tabpage("tab_page2",this.div_cont.form.div_down.form.tab);
            obj.set_text("건강수준평가");
            this.div_cont.form.div_down.form.tab.addChild(obj.name, obj);

            obj = new Div("div_main","0","0",null,null,"0","0",null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form);
            obj.set_taborder("0");
            this.div_cont.form.div_down.form.tab.tab_page2.addChild(obj.name, obj);

            obj = new Static("sta_body01","0","0","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body02","0","33","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body03","0","66","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body04","0","99","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body05","0","132","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body06","0","165","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body07","0","198","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body08","0","231","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body09","0","264","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body10","0","297","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body11","0","330","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body12","0","363","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body13","0","396","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body14","0","429","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body15","0","462","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body16","0","495","856","68",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body18","0","561","856","67",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body19_00","850","594","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body18_00","850","561","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body17_00","850","528","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body16_00","850","495","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body15_00","850","462","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body14_00","850","429","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body13_00","850","396","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body12_00","850","363","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body11_00","850","330","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body10_00","850","297","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body09_00","850","264","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body08_00","850","231","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body07_00","850","198","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body06_00","850","165","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body05_00","850","132","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body04_00","850","99","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body03_00","850","66","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body02_00","850","33","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body01_00","850","0","856","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1","0","0","110","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("36");
            obj.set_text("결혼상태");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_00_00_00_00_00_00_00","0","462","110","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("37");
            obj.set_text("알레르기 유무");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_00_00_00_00_00_00","0","429","110","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("38");
            obj.set_text("최근 투약상태");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_00_00_00_00_00","0","297","110","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("39");
            obj.set_text("병원.진료과");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_00_00_00_00","0","330","110","100",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("40");
            obj.set_text("과거력");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_00_00_00","0","264","110","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("41");
            obj.set_text("진 단 명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_00_00","0","231","110","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("42");
            obj.set_text("현 병력");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00","0","99","110","133",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("43");
            obj.set_text("건강행위");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00","0","66","110","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("44");
            obj.set_text("종   교");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01","0","33","110","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("45");
            obj.set_text("직업/학력");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_00_00_00_00_01","0","495","110","67",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("46");
            obj.set_text("의식상태\r\n(택 1)");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_00_00_00_00_01_00","0","561","110","67",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("47");
            obj.set_text("정서상태\r\n(택 1)");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00","850","0","110","133",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("48");
            obj.set_text("활동상태");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00","850","132","110","100",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("49");
            obj.set_text("호흡기계");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_00_00_01","850","231","110","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("50");
            obj.set_text("소화기계");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_00_00_00_01","850","264","110","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("51");
            obj.set_text("식이상태");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_00_00_00_00_00_01","850","297","110","101",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("52");
            obj.set_text("심혈관계");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_00_00_00_00_02","850","460","71","168",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("53");
            obj.set_text("배설기능");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_00_00_00_00_00_00_01","850","395","110","68",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("54");
            obj.set_text("피부상태");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_00_00_00_00_01_01","920","462","40","100",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("55");
            obj.set_text("소변");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_00_00_00_00_00_00_00_01_00_00","920","561","40","67",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("56");
            obj.set_text("대변");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_00","120","104","130","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("57");
            obj.set_text("   술(양/종류)");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_00_00","120","136","130","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("58");
            obj.set_text("   담배(양/흡연력)");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_00_00_00","120","170","130","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("59");
            obj.set_text("   수면습관");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_00_00_00_00","120","203","130","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("60");
            obj.set_text("   운동습관");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_00_00_00_01_00_00","370","336","70","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("61");
            obj.set_text("   간염");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_00_01_01_00_00","280","336","70","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("62");
            obj.set_text("   결핵");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_01_01_00_00","200","336","70","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("63");
            obj.set_text("   고혈압");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01","120","336","70","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("64");
            obj.set_text("   당뇨");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_00_00_00_01_00_00_00","450","336","70","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("65");
            obj.set_text("   뇌졸증");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_01_00","120","369","70","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("66");
            obj.set_text("   치매");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_01_01_00_00_00","200","369","70","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("67");
            obj.set_text("   관절염");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_00_01_01_00_00_00","280","369","70","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("68");
            obj.set_text("   기타");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_00_00_00_01_00_00_01_00","121","401","80","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("69");
            obj.set_text("   암 : 부위");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_00","1100","105","250","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("70");
            obj.set_autoselect("true");
            obj.set_maxlength("30");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_00_00_00_00_00","970","103","130","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("71");
            obj.set_text("   보조기 : 종류");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_00_00_00_01","970","70","130","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("72");
            obj.set_text("   감각이상: 부위");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00","1100","71","250","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("73");
            obj.set_autoselect("true");
            obj.set_maxlength("30");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00","1100","38","250","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("74");
            obj.set_autoselect("true");
            obj.set_maxlength("30");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_00_00_01","970","36","130","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("75");
            obj.set_text("   마비: 부위");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_01","970","4","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("76");
            obj.set_text("   보행가능");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_01_01_01","1080","4","120","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("77");
            obj.set_text("   도움으로 가능");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_00_01_01_01","1210","4","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("78");
            obj.set_text("   완전 의존");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_01_00","970","136","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("79");
            obj.set_text("   호흡곤란");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_01_01_01_00","1080","136","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("80");
            obj.set_text("   청색증");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_00_01_01_01_00","1190","136","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("81");
            obj.set_text("   기좌호흡");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_00_01_01_01_00_00","1290","136","120","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("82");
            obj.set_text("   기침: 객담, 객혈");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_00_01_01_01_00_00_00","1420","136","110","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("83");
            obj.set_text("   기관지절개관");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_00_01_01_01_00_00_00_00","1540","136","60","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("84");
            obj.set_text("   기타");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_00_00_01_00","970","169","130","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("85");
            obj.set_text("   통증: 부위");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00","1100","171","250","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("86");
            obj.set_autoselect("true");
            obj.set_maxlength("20");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_00_00_01_00_00","970","203","190","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("88");
            obj.set_text("   산소사용:                    ℓ/min");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_01","1067","203","50","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("87");
            obj.set_autoselect("true");
            obj.set_textAlign("right");
            obj.set_maxlength("3");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_01_00_00","970","236","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("89");
            obj.set_text("   식욕부진");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_01_01_01_00_00","1080","236","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("90");
            obj.set_text("   연하장애");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_00_01_01_01_00_01","1190","236","60","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("91");
            obj.set_text("   오심");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_00_01_01_01_00_00_01","1260","236","60","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("92");
            obj.set_text("   구토");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_00_01_01_01_00_00_00_01","1330","236","60","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("93");
            obj.set_text("   변비");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_00_01_01_01_00_00_00_00_00","1400","236","60","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("94");
            obj.set_text("   설사");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_00_01_01_01_00_00_00_00_00_00","1470","236","60","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("95");
            obj.set_text("   통증");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_01_00_00_00","970","269","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("96");
            obj.set_text("   구강");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_01_01_01_00_00_00","1080","269","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("97");
            obj.set_text("   정상식");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_00_01_01_01_00_00_00_00_00_01","1400","269","60","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("98");
            obj.set_text("   위관");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_00_01_01_01_00_00_00_00_00_00_00","1470","269","60","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("99");
            obj.set_text("   수액");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_00_00_01_00_00_00","1190","269","200","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("100");
            obj.set_text("   치료식(                         ) Kcal");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_00_00_00_01_00","970","301","130","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("101");
            obj.set_text("   흉통: 부위, 양상");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_01","1100","302","250","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("102");
            obj.set_autoselect("true");
            obj.set_maxlength("30");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_00_00_00_00_00_00","970","334","130","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("103");
            obj.set_text("   부종 : 부위");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00","1100","335","250","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("104");
            obj.set_autoselect("true");
            obj.set_maxlength("20");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_01_00_00_01","970","367","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("105");
            obj.set_text("   심계항진");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_01_01_01_00_00_01","1080","367","80","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("106");
            obj.set_text("   부정맥");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_00_01_01_01_00_01_00","1190","367","80","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("107");
            obj.set_text("   심잡음");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_00_01_01_01_00_00_01_00","1290","367","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("108");
            obj.set_text("   weak pulse");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_00_01_01_01_00_00_00_01_00","1410","367","60","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("109");
            obj.set_text("   기타");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_00_00_00_01_00_00","970","401","160","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("110");
            obj.set_text("   욕창(크기, 부위, 정도)");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_01_00","1140","401","250","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("111");
            obj.set_autoselect("true");
            obj.set_maxlength("30");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_00_00_00_01_00_00_00","1281","433","130","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("112");
            obj.set_text("   상처(유/무, 부위)");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_01_00_00","1411","434","250","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("113");
            obj.set_autoselect("true");
            obj.set_maxlength("30");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_00_01_01_01_00_01_00_00","1190","434","80","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("114");
            obj.set_text("   탈수");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_01_01_01_00_00_01_00","1080","434","80","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("115");
            obj.set_text("   소양감");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_01_00_00_01_00","970","434","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("116");
            obj.set_text("   발진");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_00_00_01_00_00_01","970","466","190","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("117");
            obj.set_text("   자연배뇨:                    회/일");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_01_01","1067","466","50","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("118");
            obj.set_autoselect("true");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_textAlign("right");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_00_00_00_01_00_00_01_00","970","566","190","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("119");
            obj.set_text("   대변횟수:                    회/일");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_01_00_00_01_00_00","970","500","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("120");
            obj.set_text("   유치도뇨관");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_01_00_00_01_00_00_00","970","532","110","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("121");
            obj.set_text("   색깔 및 양상");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_01_01_01_00_00_01_00_00_00_00","970","598","110","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("122");
            obj.set_text("   색깔 및 양상");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_00_00_01_00_00","1174","467","10","24",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("123");
            obj.set_text("(");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_00_01_01_01_00_00_01_01","1260","466","80","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("124");
            obj.set_text("   뇨실금");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_00_01_01_01_00_00_00_01_01","1350","466","100","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("125");
            obj.set_text("   비뇨곤란");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_00_01_01_01_00_00_00_00_00_02","1460","466","80","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("126");
            obj.set_text("   긴박감");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_00_01_01_01_00_00_00_00_00_00_01","1550","466","60","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("127");
            obj.set_text("   통증");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8_01_00_00_00_00_01_01_01_00_01_01","1190","466","60","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("128");
            obj.set_text("   빈뇨");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_00_00_01_00_00_00","1629","467","10","24",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("129");
            obj.set_text(")");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_00_00_01_00_00_01","1083","532","10","24",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("130");
            obj.set_text("(");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_00_00_01_00_00_00_00","1398","532","10","24",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("131");
            obj.set_text(")");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_00_00_01_00_00_01_00","1083","598","10","24",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("132");
            obj.set_text("(");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_00_00_01_00_00_00_00_00","1308","598","10","24",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("133");
            obj.set_text(")");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b00_00_02_01_01_00","115","1","350","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("134");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_marry");
            obj.set_direction("vertical");
            obj.set_border("0,0px none,0px none");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b00_00_02_01_01_00_00","115","66","350","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("135");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_religion");
            obj.set_direction("vertical");
            obj.set_border("0,0px none,0px none");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b00_00_02_01_01_00_00_00","115","495","462","65",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("136");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_level_conscious_one_select");
            obj.set_direction("horizontal");
            obj.set_border("0,0px none,0px none");
            obj.set_rowcount("2");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b00_00_02_01_01_00_00_00_00","115","563","462","65",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("137");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_level_emotional_one_select");
            obj.set_direction("horizontal");
            obj.set_border("0,0px none,0px none");
            obj.set_rowcount("2");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b00_00_02_01_01_00_00_01","1093","528","300","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("138");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_urine_pattern");
            obj.set_direction("vertical");
            obj.set_border("0,0px none,0px none");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Radio("rdo_b00_00_02_01_01_00_00_01_00","1090","594","216","34",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("139");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_feces_pattern");
            obj.set_direction("vertical");
            obj.set_border("0,0px none,0px none");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_00","1268","269","80","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("140");
            obj.set_format("9,999");
            obj.set_limitbymask("both");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_00_00","1067","565","50","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form);
            obj.set_taborder("141");
            obj.set_format("0.0");
            obj.set_limitbymask("both");
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01","120","37","250","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_maxlength("30");
            this.div_cont.form.div_down.form.tab.tab_page2.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00","248","136","250","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form);
            obj.set_taborder("2");
            obj.set_autoselect("true");
            obj.set_maxlength("20");
            this.div_cont.form.div_down.form.tab.tab_page2.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00","248","103","250","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            obj.set_maxlength("20");
            this.div_cont.form.div_down.form.tab.tab_page2.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00","248","169","250","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form);
            obj.set_taborder("4");
            obj.set_autoselect("true");
            obj.set_maxlength("20");
            this.div_cont.form.div_down.form.tab.tab_page2.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_00","248","203","250","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form);
            obj.set_taborder("5");
            obj.set_autoselect("true");
            obj.set_maxlength("20");
            this.div_cont.form.div_down.form.tab.tab_page2.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00","120","235","723","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form);
            obj.set_taborder("6");
            obj.set_autoselect("true");
            obj.set_maxlength("60");
            this.div_cont.form.div_down.form.tab.tab_page2.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00_00","120","268","350","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form);
            obj.set_taborder("7");
            obj.set_autoselect("true");
            obj.set_maxlength("40");
            this.div_cont.form.div_down.form.tab.tab_page2.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00_00_00","120","301","350","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form);
            obj.set_taborder("8");
            obj.set_autoselect("true");
            obj.set_maxlength("40");
            this.div_cont.form.div_down.form.tab.tab_page2.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_00_01","208","401","250","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form);
            obj.set_taborder("9");
            obj.set_autoselect("true");
            obj.set_maxlength("30");
            this.div_cont.form.div_down.form.tab.tab_page2.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00_01","120","433","723","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form);
            obj.set_taborder("10");
            obj.set_autoselect("true");
            obj.set_maxlength("60");
            this.div_cont.form.div_down.form.tab.tab_page2.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00_01_00","120","467","723","25",null,null,null,null,null,null,this.div_cont.form.div_down.form.tab.tab_page2.form);
            obj.set_taborder("11");
            obj.set_autoselect("true");
            obj.set_maxlength("60");
            this.div_cont.form.div_down.form.tab.tab_page2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1727,900,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","div_func.form.chk_sign","value","ds_report","SIGN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_cont.form.sta_no_value","text","ds_list","일지번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_func.form.sta_no_value","text","ds_data","n_number");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_cont.form.div_right.form.div_main.form.sta_body1_00","text","ds_list","m_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_right.form.div_main.form.sta_body1_00_00","text","ds_list","m_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_00","text","ds_list","m_group");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_right.form.div_main.form.sta_body1_00_01","text","ds_list_copy","sex_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_00_00","text","ds_list","age");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_right.form.div_main.form.sta_body1_00_02","text","ds_list","m_roomname");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_right.form.div_main.form.sta_body1_00_02_00","text","ds_list","만료일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00_00_00","text","ds_list","m_enday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00_00_00_00","text","ds_list","m_reday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00_00","text","ds_list","b_date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00","text","ds_list","m_history");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_01_01","text","ds_list","grade_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_01_00","text","ds_list","m_regist");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_up.form.div_right.form.sta_body1_m_name","text","ds_data","수급자명");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.div_up.form.div_right.form.sta_body1_m_code","text","ds_data","수급코드");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.form.div_up.form.div_right.form.sta_body1_m_group","text","ds_data","m_group");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.div_up.form.div_right.form.sta_body1_sex_nm","text","ds_list_copy","sex_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.div_up.form.div_right.form.sta_body1_age","text","ds_data","성별");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.div_up.form.div_right.form.sta_body2_m_regist","text","ds_data","인정번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.div_up.form.div_right.form.sta_body1_grade_nm","text","ds_data","grade_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.div_up.form.div_right.form.sta_body1_m_enday","text","ds_data","입소일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cont.form.div_up.form.div_right.form.cal_date_from","value","ds_data","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_search.form.cal_date_from_pic","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_cont.form.div_up.form.div_right.form.cal_date_to","value","ds_data","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_search.form.cal_date_to_pic","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_cont.form.div_up.form.div_right.form.cal_date_to_pic","value","ds_data","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_cont.form.div_up.form.div_right.form.cal_date_from_pic","value","ds_data","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_cont.form.div_up.form.div_right.form.cal_date","value","ds_data","date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.div_up.form.div_right.form.cal_date_pic","value","ds_data","date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.edt_nurse1","value","ds_data","최고혈압");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.edt_nurse1_00","value","ds_data","최저혈압");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.edt_nurse1_00_00","value","ds_data","맥박");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.edt_nurse1_00_00_00","value","ds_data","혈당");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item153","div_cont.form.div_down.form.tab.tab_page2.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01","value","ds_data","직업");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item167","div_cont.form.div_down.form.tab.tab_page2.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00","value","ds_data","건강담배");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item168","div_cont.form.div_down.form.tab.tab_page2.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00","value","ds_data","건강술");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item170","div_cont.form.div_down.form.tab.tab_page2.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00","value","ds_data","건강수면");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item171","div_cont.form.div_down.form.tab.tab_page2.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_00","value","ds_data","건강운동");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item173","div_cont.form.div_down.form.tab.tab_page2.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00","value","ds_data","현병력");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item174","div_cont.form.div_down.form.tab.tab_page2.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00_00","value","ds_data","진단명");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item176","div_cont.form.div_down.form.tab.tab_page2.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00_00_00","value","ds_data","병원진료");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item177","div_cont.form.div_down.form.tab.tab_page2.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_00_01","value","ds_data","암부위");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item191","div_cont.form.div_down.form.tab.tab_page2.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00_01","value","ds_data","투약상태");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item192","div_cont.form.div_down.form.tab.tab_page2.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00_01_00","value","ds_data","알레르기");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item203","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_00","value","ds_data","활동보조");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item210","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00","value","ds_data","활동감각");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item211","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00","value","ds_data","활동마비");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item223","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00","value","ds_data","호흡통증");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item224","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_01","value","ds_data","호흡산소");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item240","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_01","value","ds_data","심혈흉통");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item242","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00","value","ds_data","심혈부종");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item249","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_01_00","value","ds_data","피부욕창");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item251","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_01_00_00","value","ds_data","피부상처");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item256","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_01_01","value","ds_data","소변횟수");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item274","div_cont.form.div_right.form.div_main.form.div_help.form.rdo_ba","value","ds_data","아침양");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00","value","ds_data","질병01_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00","value","ds_data","질병01_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00","value","ds_data","질병01_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01","value","ds_data","질병01_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.rdo_b","value","ds_data","장애유무");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.rdo_b00","value","ds_data","투약유무");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.rdo_b00_00","value","ds_data","가족병력");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.rdo_b00_00_02_01_01","value","ds_data","의식점수");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.rdo_b00_00_02_00_00_00","value","ds_data","과거수술");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.rdo_b00_00_02_01_00_01","value","ds_data","과거흡연");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.rdo_b00_00_02_00_00","value","ds_data","과거알콜");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.rdo_b00_00_02_01_00","value","ds_data","과거기타");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.rdo_b00_00_02_00","value","ds_data","시력보조");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.rdo_b00_00_02","value","ds_data","시력분비");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.rdo_b00_00_02_01","value","ds_data","시력기타");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.rdo_b00_00_02_01_01_00","value","ds_data","시력점수");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.rdo_b00_00_02_01_02_00","value","ds_data","청력보조");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.rdo_b00_00_02_01_02_00_00","value","ds_data","청력분비");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.rdo_b00_00_02_01_02","value","ds_data","청력기타");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.rdo_b00_00_02_01_01_00_00","value","ds_data","청력점수");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.rdo_b00_00_02_01_01_00_00_00","value","ds_data","구강점수");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.rdo_b00_00_02_01_01_00_00_00_00","value","ds_data","피부점수");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.rdo_b00_00_02_01_01_00_00_00_00_00","value","ds_data","수면점수");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_00","value","ds_data","수면상태_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_00_00","value","ds_data","수면상태_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_00_00_00","value","ds_data","수면상태_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_00_00_00_00","value","ds_data","수면상태_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_00_00_00_00_00","value","ds_data","수면상태_5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_00_01","value","ds_data","약부작용_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_00_00_01","value","ds_data","약부작용_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_00_00_00_01","value","ds_data","약부작용_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_00_00_00_00_01","value","ds_data","약부작용_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.rdo_b00_00_02_01_01_00_01","value","ds_data","약물점수");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.rdo_b00_00_02_01_01_00_00_00_01","value","ds_data","질환점수");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.rdo_b00_00_02_01_00_00","value","ds_data","호스피스");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.rdo_b00_00_02_01_00_00_00","value","ds_data","간호교육");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00","value","ds_data","질병02_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00","value","ds_data","질병02_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00","value","ds_data","질병02_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00","value","ds_data","질병02_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00","value","ds_data","질병02_5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00","value","ds_data","질병03_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00","value","ds_data","질병03_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00","value","ds_data","질병03_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item92","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00","value","ds_data","질병04_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item93","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00","value","ds_data","질병04_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00","value","ds_data","질병04_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00","value","ds_data","질병05_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00","value","ds_data","질병05_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item99","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병05_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item100","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00","value","ds_data","질병05_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item101","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00","value","ds_data","질병06_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item102","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00_00_00","value","ds_data","질병06_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item103","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병06_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item104","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00","value","ds_data","질병06_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item105","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00_00_00_00","value","ds_data","질병06_5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item106","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병06_6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item107","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00","value","ds_data","질병07_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item109","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00_00_00_00_00","value","ds_data","질병07_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item110","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병07_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item111","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병07_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item112","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병08_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item113","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병08_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item114","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병08_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item115","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병08_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item116","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병08_5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item117","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병09_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item119","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병09_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item120","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병09_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item121","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병09_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item122","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병10_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item123","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병10_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item124","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병10_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item125","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병10_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item127","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병10_5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item128","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병10_6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item129","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병11_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item130","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병11_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item131","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병11_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item132","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","질병11_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item133","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병12_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item134","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병12_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item135","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병12_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item136","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병12_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item137","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병13_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item138","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병13_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item139","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병13_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item140","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병14_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item142","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병14_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item143","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병14_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item144","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01","value","ds_data","질병14_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item145","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병15_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item146","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병15_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item147","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병15_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item148","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병15_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item149","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병15_5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item150","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.txt_00","value","ds_data","호소내용");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item152","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.rdo_b00_00_02_01_01_00","value","ds_data","결혼");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item154","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.rdo_b00_00_02_01_01_00_00","value","ds_data","종교");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item155","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_00","value","ds_data","건강행위_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item156","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_00_00","value","ds_data","건강행위_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item157","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_00_00_00","value","ds_data","건강행위_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item158","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_00_00_00_00","value","ds_data","건강행위_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item159","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01","value","ds_data","과거력_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item160","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_01_01_00_00","value","ds_data","과거력_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item161","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_00_01_01_00_00","value","ds_data","과거력_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item162","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_00_00_00_01_00_00","value","ds_data","과거력_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item163","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_00_00_00_01_00_00_00","value","ds_data","과거력_5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item164","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00","value","ds_data","과거력_6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item165","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_01_01_00_00_00","value","ds_data","과거력_7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item166","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_00_01_01_00_00_00","value","ds_data","과거력_8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item169","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_00_00_00_01_00_00_01_00","value","ds_data","과거력_9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item172","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.rdo_b00_00_02_01_01_00_00_00","value","ds_data","의식상태");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item175","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.rdo_b00_00_02_01_01_00_00_00_00","value","ds_data","정서상태");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item178","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_01_01_01","value","ds_data","활동상태_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item179","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_01_01_01","value","ds_data","활동상태_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item180","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_00_01_01_01","value","ds_data","활동상태_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item181","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_00_00_01","value","ds_data","활동상태_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item182","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_00_00_00_01","value","ds_data","활동상태_5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item183","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_00_00_00_00_00","value","ds_data","활동상태_6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item184","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_01_01_01_00","value","ds_data","호흡기계_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item185","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_01_01_01_00","value","ds_data","호흡기계_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item186","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_00_01_01_01_00","value","ds_data","호흡기계_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item187","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_00_01_01_01_00_00","value","ds_data","호흡기계_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item188","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_00_01_01_01_00_00_00","value","ds_data","호흡기계_5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item189","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_00_01_01_01_00_00_00_00","value","ds_data","호흡기계_6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item190","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_00_00_01_00","value","ds_data","호흡기계_7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item193","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_00_00_01_00_00","value","ds_data","호흡기계_8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item194","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_01_01_01_00_00","value","ds_data","소화기계_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item195","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_01_01_01_00_00","value","ds_data","소화기계_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item196","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_00_01_01_01_00_01","value","ds_data","소화기계_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item197","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_00_01_01_01_00_00_01","value","ds_data","소화기계_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item198","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_00_01_01_01_00_00_00_01","value","ds_data","소화기계_5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item199","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_00_01_01_01_00_00_00_00_00","value","ds_data","소화기계_6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item200","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_00_01_01_01_00_00_00_00_00_00","value","ds_data","소화기계_7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item201","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_01_01_01_00_00_00","value","ds_data","식이상태_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item202","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_01_01_01_00_00_00","value","ds_data","식이상태_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item204","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_00_00_01_00_00_00","value","ds_data","식이상태_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item205","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_00_01_01_01_00_00_00_00_00_01","value","ds_data","식이상태_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item206","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_00_01_01_01_00_00_00_00_00_00_00","value","ds_data","식이상태_5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item207","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_00_00_00_01_00","value","ds_data","심혈관계_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item208","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_00_00_00_00_00_00","value","ds_data","심혈관계_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item209","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_01_01_01_00_00_01","value","ds_data","심혈관계_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item212","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_01_01_01_00_00_01","value","ds_data","심혈관계_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item213","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_00_01_01_01_00_01_00","value","ds_data","심혈관계_5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item214","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_00_01_01_01_00_00_01_00","value","ds_data","심혈관계_6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item215","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_00_01_01_01_00_00_00_01_00","value","ds_data","심혈관계_7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item216","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_00_00_00_01_00_00","value","ds_data","피부상태_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item217","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_01_01_01_00_00_01_00","value","ds_data","피부상태_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item218","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_01_01_01_00_00_01_00","value","ds_data","피부상태_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item219","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_00_01_01_01_00_01_00_00","value","ds_data","피부상태_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item220","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_00_00_00_01_00_00_00","value","ds_data","피부상태_5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item221","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_00_00_01_00_00_01","value","ds_data","배설소변_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item222","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_01_01_01_00_00_01_00_00","value","ds_data","배설소변_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item225","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_01_01_01_00_00_01_00_00_00","value","ds_data","배설소변_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item226","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.rdo_b00_00_02_01_01_00_00_01","value","ds_data","소변양상");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item227","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_00_01_01_01_00_01_01","value","ds_data","소변종류_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item228","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_00_01_01_01_00_00_01_01","value","ds_data","소변종류_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item229","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_00_01_01_01_00_00_00_01_01","value","ds_data","소변종류_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item230","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_00_01_01_01_00_00_00_00_00_02","value","ds_data","소변종류_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item231","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_00_00_01_01_01_00_00_00_00_00_00_01","value","ds_data","소변종류_5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item232","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_00_00_01_00_00_01_00","value","ds_data","배설대변_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item233","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.chk_cr1_o8_01_00_00_01_01_01_00_00_01_00_00_00_00","value","ds_data","배설대변_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item234","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.rdo_b00_00_02_01_01_00_00_01_00","value","ds_data","대변양상");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cont.form.div_up.form.div_right.form.sta_body1_age00","text","ds_data","생일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_00_01","value","ds_data","질병01_5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","div_cont.form.div_up.form.div_right.form.sta_manager_value","text","ds_data","VIEW_MANAGER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","div_cont.form.div_up.form.div_right.form.txt_00","value","ds_data","간호계획");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item248","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.mae_00","value","ds_data","체온");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.mae_00_00","value","ds_data","체중");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.mae_00_00_00","value","ds_data","전체중");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.mae_00_00","value","ds_data","칼로리");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.mae_00_00_00","value","ds_data","대변횟수");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.edt_nurse1_00_00_00_00_00","value","ds_data","호흡");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.edt_nurse1_00_00_00_01_01","value","ds_data","신장");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00","value","ds_data","혈액형");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00","value","ds_data","체중변화");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item97","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00_01","value","ds_data","시력점수");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item98","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00_01_00","value","ds_data","청력점수");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item108","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00_01_00_00","value","ds_data","구강점수");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item118","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00_01_00_00_00","value","ds_data","피부점수");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item126","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00_01_00_00_00_00","value","ds_data","수면점수");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item141","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00_01_00_00_00_00_00_00_00","value","ds_data","간호총점");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item151","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00_01_00_00_00_00_00_00","value","ds_data","질환점수");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item235","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00_01_00_00_00_00_00","value","ds_data","약물점수");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item236","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01","value","ds_data","장애종류");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item237","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00","value","ds_data","투약약물");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item238","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00","value","ds_data","병력기타");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item239","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00","value","ds_data","과거비고");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item241","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_00","value","ds_data","시력비고");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item243","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00","value","ds_data","청력비고");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item244","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_00_00_00_00","value","ds_data","수면비고");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item245","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_01_00_00","value","ds_data","추가내용");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item246","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_01_00","value","ds_data","질병음식");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item247","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.edt_nurse1_00_00_00_00_00_00_00_00_00_01_00_00_01","value","ds_data","질병약물");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00212_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00212_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00212_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00212_P01
         * 화면명   	: 간호사정.건강수준평가
         * 화면설명 	: 간호사정.건강수준평가
         * 작성일   	: 2022-06-03
         * 작성자   	: 이동관
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *
         ***********************************************************************
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        const fv_sicode = this.parent.SICODE;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.fv_currentDS = this.ds_data;
        	this.fv_currentGrid = this.div_cont.form.div_up.form.div_left.form.grd_list;

        	this.form_onload_com(obj, e, false);

        	// 삽입, 수정 공통 함수를 사용하기 위해 gv_curWinKey를 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00212_P01";

        	//tabbutton size 조절
        	this.div_cont.form.div_down.form.tab.tab_page1.set_tabbuttonwidth(850);
        	this.div_cont.form.div_down.form.tab.tab_page2.set_tabbuttonwidth(857);

        	//변수 받기
        	this.fn_setVariable();

        	this.fn_search();

        	this.fn_searchData();
        };

        this.fn_setVariable = function()
        {
        	this.m_code = this.parent.M_CODE;
        	this.fv_staff_id = nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid");
        	this.fv_staff_name = nexacro.getApplication().gds_userInfo.getColumn(0, "c_name").trim();
        	this.fv_staff_dutyname = nexacro.getApplication().gds_userInfo.getColumn(0, "c_dutyname");


        	if(!Sct.Util.isEmpty(this.parent.N_NUMBER)){
        		this.n_number = this.parent.N_NUMBER;
        	}
        	if(!Sct.Util.isEmpty(this.parent.M_NAME)){
        		this.m_name = this.parent.M_NAME;
        	}
        	if(!Sct.Util.isEmpty(this.parent.M_GROUP)){
        		this.m_group = this.parent.M_GROUP;
        	}
        	if(!Sct.Util.isEmpty(this.parent.SEX_NM)){
        		this.sex_nm = this.parent.SEX_NM;
        	}
        	if(!Sct.Util.isEmpty(this.parent.B_DATE)){
        		this.b_date = this.parent.B_DATE;
        	}
        	if(!Sct.Util.isEmpty(this.parent.REAL_B_DATE)){
        		this.real_b_mate = this.parent.REAL_B_DATE;
        	}
        	if(!Sct.Util.isEmpty(this.parent.GRADE_NM)){
        		this.grade_nm = this.parent.GRADE_NM;
        	}
        	if(!Sct.Util.isEmpty(this.parent.M_REGIST)){
        		this.m_regist = this.parent.M_REGIST;
        	}
        	if(!Sct.Util.isEmpty(this.parent.M_ENDAY)){
        		this.m_enday = this.parent.M_ENDAY;
        	}
        	if(!Sct.Util.isEmpty(this.parent.N_DATE)){
        		this.n_date = this.parent.N_DATE;
        	}
        	if(!Sct.Util.isEmpty(this.parent.AGE)){
        		this.age = this.parent.AGE;
        	}
        	if(!Sct.Util.isEmpty(this.parent.FLAG)){
        		this.flag = this.parent.FLAG;
        	}
        	if(!Sct.Util.isEmpty(this.parent.HEIGHT)){
        		this.height = this.parent.HEIGHT;
        	}
        	if(!Sct.Util.isEmpty(this.parent.WEIGHT)){
        		this.weight = this.parent.WEIGHT;
        	}

        	if(!Sct.Util.isEmpty(fv_sicode)){
        		this.ds_search.setColumn(0, "sicode", fv_sicode);
        	}
        	if(!Sct.Util.isEmpty(this.m_code)){
        		this.ds_search.setColumn(0, "m_code", this.m_code);
        	}
        	if(!Sct.Util.isEmpty(this.n_number)){
        		this.ds_search.setColumn(0, "n_number", this.n_number);
        	}
        }


        // 저장 버튼
        this.fn_saveBtn = function(obj,e)
        {
        	this.fn_save();
        };



        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	return true;
        };

        this.fn_searchData_pre = function ()
        {
        	if(Sct.Util.isEmpty(this.ds_search.getColumn(0,"n_number"))){
        		this.fn_addRow();
        		return false;
        	}

        	return true;
        };
        // 저장 전 validation
        this.fn_save_pre = function()
        {
        	//평가에서 저장 안되게
        	if(!Sct.Util.isEmpty(this.flag)){
        		if(this.flag) return false;
        	}

        	if(!this.gfn_findSnull(this.div_cont.form.div_up.form.div_right)) return false;
        	this.fn_make_data();

        	return true;
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 조회
        this.fn_search = function()
        {
        	//validation
        	if(!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00212_P01.DAY00212_P01_DS_LIST_S ";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.fn_searchData = function()
        {
        	//validation
        	if(!this.fn_searchData_pre()) return;

        	const svcId = "searchData";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_data=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00212_P01.DAY00212_P01_DS_DATA_S ";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };


        // 저장
        this.fn_save = function()
        {
        	if(!this.fn_save_pre()) return;

        	const svcId = "save";
        	const params = "/DAY00212Controller.do";
        	const inDatasets = "input1=ds_data:U";
        	const outDatasets = "ds_data_return=output1";
        	const argument = "method=save "

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


        		}
        		else if (strSvcID == "searchData")
        		{
        			const name = this.ds_data.getColumn(0, "작성자");
        			const staffid = this.ds_data.getColumn(0, "작성코드");
        			const dutyname = this.ds_data.getColumn(0, "작성직종");
        			this.ds_data.setColumn(0, "VIEW_MANAGER", name + "/" + dutyname + "/" + staffid);
        			let allScore = this.ds_data.getColumn(0,"간호총점")
        			this.ds_data.setColumn(0, "간호총점", allScore + " 점");
        		}
        		else if (strSvcID == "save")
        		{
        			this.fn_search();
        			this.ds_search.setColumn(0,"n_number",this.ds_data_return.getColumn(0,"n_number"));
        			this.fn_searchData();
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

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 시설장 선택 팝업
        this.btn_manager_onclick = function(obj,e)
        {
        	if (this.ds_data.rowcount < 1)
        		return;

        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_data.getColumn(0, "사정일")
        		,	FLAG : "71"
        	};

        	Sct.popup(this, "emp", 450, 400, "입력담당자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
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
        				const name = nexacro.trim(objDs.getColumn(0, "c_name"));
        				const dutyname = objDs.getColumn(0, "담당직종");
        				const staffid = objDs.getColumn(0, "c_staffid");
        				this.ds_data.setColumn(0, "작성자", name);
        				this.ds_data.setColumn(0, "작성직종", dutyname);
        				this.ds_data.setColumn(0, "작성코드", staffid);
        				this.ds_data.setColumn(0, "VIEW_MANAGER", name + "/" + dutyname + "/" + staffid);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "작성자", "");
        				this.ds_data.setColumn(0, "작성직종", "");
        				this.ds_data.setColumn(0, "작성코드", "");
        				this.ds_data.setColumn(0, "VIEW_MANAGER", "");
        			}
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        this.div_cont_div_up_div_right_btn_sixMonth_onclick = function(obj,e)
        {
        	const thisDateSix = this.ds_data.getColumn(0, "date_from")
        	thisDateSix.setMonth(thisDateSix.getMonth() + 6);
        	thisDateSix.setDate(thisDateSix.getDate() -1);
        	this.ds_data.setColumn(0, "date_to", thisDateSix)
        };

        this.div_cont_div_up_div_right_btn_twelveMonth_onclick = function(obj,e)
        {
        	const thisDateTwelve = this.ds_data.getColumn(0, "date_from")
        	thisDateTwelve.setMonth(thisDateTwelve.getMonth() + 12);
        	thisDateTwelve.setDate(thisDateTwelve.getDate() -1);
        	this.ds_data.setColumn(0, "date_to", thisDateTwelve)
        };

        this.div_cont_div_up_div_right_cal_date_pic_onchanged = function(obj,e)
        {
        	this.ds_data.setColumn(0, "사정일", e.postvalue);
        };

        this.div_cont_div_up_div_right_cal_date_from_pic_onchanged = function(obj,e)
        {
        	this.ds_data.setColumn(0, "사정시작", e.postvalue);
        };

        this.div_cont_div_up_div_right_cal_date_to_pic_onchanged = function(obj,e)
        {
        	this.ds_data.setColumn(0, "사정종료", e.postvalue);
        };


        this.ds_data_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "시력점수" || e.columnid == "청력점수" || e.columnid == "구강점수" || e.columnid == "피부점수" ||
        	   e.columnid == "수면점수" || e.columnid == "약물점수" || e.columnid == "질환점수"){
        		let allScore = 0;


        		let one = Sct.Util.isEmpty(this.ds_data.getColumn(0, "시력점수")) ? 0 : Number(this.ds_data.getColumn(0, "시력점수"));
        	    let two = Sct.Util.isEmpty(this.ds_data.getColumn(0, "청력점수")) ? 0 : Number(this.ds_data.getColumn(0, "청력점수"));
        		let three = Sct.Util.isEmpty(this.ds_data.getColumn(0, "구강점수")) ? 0 : Number(this.ds_data.getColumn(0, "구강점수"));
        		let four = Sct.Util.isEmpty(this.ds_data.getColumn(0, "피부점수")) ? 0 : Number(this.ds_data.getColumn(0, "피부점수"));
        		let five = Sct.Util.isEmpty(this.ds_data.getColumn(0, "수면점수")) ? 0 : Number(this.ds_data.getColumn(0, "수면점수"));
        		let six = Sct.Util.isEmpty(this.ds_data.getColumn(0, "약물점수")) ? 0 : Number(this.ds_data.getColumn(0, "약물점수"));
        		let seven = Sct.Util.isEmpty(this.ds_data.getColumn(0, "질환점수")) ? 0 : Number(this.ds_data.getColumn(0, "질환점수"));

        		allScore = one + two + three + four + five + six + seven;

        		this.ds_data.setColumn(0, "간호총점", allScore + " 점");
        	}

        	//체중변환 계산
        	if(e.columnid == "전체중" || e.columnid == "체중" ){
        		if(!Sct.Util.isEmpty(this.ds_data.getColumn(0,"전체중")) && !Sct.Util.isEmpty(this.ds_data.getColumn(0,"체중"))){
        			const lastWeight = Number(this.ds_data.getColumn(0,"전체중"));
        			const nowWeight = Number(this.ds_data.getColumn(0,"체중"));
        			const changeWeight = (nowWeight - lastWeight).toFixed(1);
        			this.ds_data.setColumn(0,"체중변화", changeWeight)
        		}
        	}

        };



        this.div_func_btn_report4_onclick = function(obj,e)
        {
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0, "n_number"))){
        		this.alert("출력할 내용이 없습니다.");
        		return false;
        	}

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00212_R04.xfdl";
        	const popupName = "간호사정 평가";

        	console.log(this.div_func.form.chk_sign.value);

        	params = {
        		sicode : this.ds_data.getColumn(0, "sicode")
        	,	m_code : this.ds_data.getColumn(0, "수급코드")
        	,	n_number : this.ds_data.getColumn(0, "n_number")
        	,   sign : this.div_func.form.chk_sign.value

        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        this.div_func_btn_report5_onclick = function(obj,e)
        {
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0, "n_number"))){
        		this.alert("출력할 내용이 없습니다.");
        		return false;
        	}

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00212_R05.xfdl";
        	const popupName = "건강수준 평가";

        	params = {
        		sicode : this.ds_data.getColumn(0, "sicode")
        	,	m_code : this.ds_data.getColumn(0, "수급코드")
        	,	n_number : this.ds_data.getColumn(0, "n_number")
        	,   sign : this.div_func.form.chk_sign.value

        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        this.div_func_btn_report6_onclick = function(obj,e)
        {
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0, "n_number"))){
        		this.alert("출력할 내용이 없습니다.");
        		return false;
        	}

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00212_R06.xfdl";
        	const popupName = "간호사정 건강수준 평가";

        	params = {
        		sicode : this.ds_data.getColumn(0, "sicode")
        	,	m_code : this.ds_data.getColumn(0, "수급코드")
        	,	n_number : this.ds_data.getColumn(0, "n_number")
        	,   sign : this.div_func.form.chk_sign.value

        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        this.div_cont_div_up_div_left_grd_list_oncellclick = function(obj,e)
        {
        	if(!Sct.Util.isEmpty(this.n_number)){
        		return false;
        	}

        	this.ds_list_search.clearData();
        	this.ds_data_select.clearData();

        	const aRow = this.ds_list_search.addRow();
        	this.ds_list_search.copyRow(aRow, this.ds_list, this.ds_list.rowposition);

        	const svcId = "searchData";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_list_search";
        	const outDatasets = "ds_data_select=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00212_P01.DAY00212_P01_DS_DATA_S ";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null , false);

        	this.ds_data.copyRow(0, this.ds_data_select, 0);
        	this.ds_data.setColumn(0, "전체중", this.ds_data_select.getColumn(0,"체중"));
        	this.ds_data.setColumn(0, "신장", Number(this.height));
        	this.ds_data.setColumn(0, "체중", Number(this.weight));

        };


        this.fn_make_data = function(){

        	let 질병01 = "";
        	let 질병02 = "";
        	let 질병03 = "";
        	let 질병04 = "";
        	let 질병05 = "";
        	let 질병06 = "";
        	let 질병07 = "";
        	let 질병08 = "";
        	let 질병09 = "";
        	let 질병10 = "";
        	let 질병11 = "";
        	let 질병12 = "";
        	let 질병13 = "";
        	let 질병14 = "";
        	let 질병15 = "";
        	let 수면상태 = "";
        	let 약부작용 = "";
        	let 건강행위 = "";
        	let 과거력 = "";
        	let 활동상태 = "";
        	let 호흡기계 = "";
        	let 소화기계 = "";
        	let 식이상태 = "";
        	let 심혈관계 = "";
        	let 피부상태 = "";
        	let 배설소변 = "";
        	let 소변종류 = "";
        	let 배설대변 = "";

        	for(let i = 1; i<6; i++){
        		질병01 += this.ds_data.getColumn(0, "질병01_"+i)
        	}
        	for(let i = 1; i<6; i++){
        		질병02 += this.ds_data.getColumn(0, "질병02_"+i)
        	}
        	for(let i = 1; i<4; i++){
        		질병03 += this.ds_data.getColumn(0, "질병03_"+i)
        	}
        	for(let i = 1; i<4; i++){
        		질병04 += this.ds_data.getColumn(0, "질병04_"+i)
        	}
        	for(let i = 1; i<5; i++){
        		질병05 += this.ds_data.getColumn(0, "질병05_"+i)
        	}
        	for(let i = 1; i<7; i++){
        		질병06 += this.ds_data.getColumn(0, "질병06_"+i)
        	}
        	for(let i = 1; i<5; i++){
        		질병07 += this.ds_data.getColumn(0, "질병07_"+i)
        	}
        	for(let i = 1; i<6; i++){
        		질병08 += this.ds_data.getColumn(0, "질병08_"+i)
        	}
        	for(let i = 1; i<5; i++){
        		질병09 += this.ds_data.getColumn(0, "질병09_"+i)
        	}
        	for(let i = 1; i<7; i++){
        		질병10 += this.ds_data.getColumn(0, "질병10_"+i)
        	}
        	for(let i = 1; i<5; i++){
        		질병11 += this.ds_data.getColumn(0, "질병11_"+i)
        	}
        	for(let i = 1; i<5; i++){
        		질병12 += this.ds_data.getColumn(0, "질병12_"+i)
        	}
        	for(let i = 1; i<4; i++){
        		질병13 += this.ds_data.getColumn(0, "질병13_"+i)
        	}
        	for(let i = 1; i<5; i++){
        		질병14 += this.ds_data.getColumn(0, "질병14_"+i)
        	}
        	for(let i = 1; i<6; i++){
        		질병15 += this.ds_data.getColumn(0, "질병15_"+i)
        	}
        	for(let i = 1; i<6; i++){
        		수면상태 += this.ds_data.getColumn(0, "수면상태_"+i)
        	}
        	for(let i = 1; i<5; i++){
        		약부작용 += this.ds_data.getColumn(0, "약부작용_"+i)
        	}
        	for(let i = 1; i<5; i++){
        		건강행위 += this.ds_data.getColumn(0, "건강행위_"+i)
        	}
        	for(let i = 1; i<10; i++){
        		과거력 += this.ds_data.getColumn(0, "과거력_"+i)
        	}
        	for(let i = 1; i<7; i++){
        		활동상태 += this.ds_data.getColumn(0, "활동상태_"+i)
        	}
        	for(let i = 1; i<9; i++){
        		호흡기계 += this.ds_data.getColumn(0, "호흡기계_"+i)
        	}
        	for(let i = 1; i<8; i++){
        		소화기계 += this.ds_data.getColumn(0, "소화기계_"+i)
        	}
        	for(let i = 1; i<6; i++){
        		식이상태 += this.ds_data.getColumn(0, "식이상태_"+i)
        	}
        	for(let i = 1; i<8; i++){
        		심혈관계 += this.ds_data.getColumn(0, "심혈관계_"+i)
        	}
        	for(let i = 1; i<6; i++){
        		피부상태 += this.ds_data.getColumn(0, "피부상태_"+i)
        	}
        	for(let i = 1; i<4; i++){
        		배설소변 += this.ds_data.getColumn(0, "배설소변_"+i)
        	}
        	for(let i = 1; i<6; i++){
        		소변종류 += this.ds_data.getColumn(0, "소변종류_"+i)
        	}
        	for(let i = 1; i<3; i++){
        		배설대변 += this.ds_data.getColumn(0, "배설대변_"+i)
        	}

        	this.ds_data.setColumn(0, "질병01", 질병01);
        	this.ds_data.setColumn(0, "질병02", 질병02);
        	this.ds_data.setColumn(0, "질병03", 질병03);
        	this.ds_data.setColumn(0, "질병04", 질병04);
        	this.ds_data.setColumn(0, "질병05", 질병05);
        	this.ds_data.setColumn(0, "질병06", 질병06);
        	this.ds_data.setColumn(0, "질병07", 질병07);
        	this.ds_data.setColumn(0, "질병08", 질병08);
        	this.ds_data.setColumn(0, "질병09", 질병09);
        	this.ds_data.setColumn(0, "질병10", 질병10);
        	this.ds_data.setColumn(0, "질병11", 질병11);
        	this.ds_data.setColumn(0, "질병12", 질병12);
        	this.ds_data.setColumn(0, "질병13", 질병13);
        	this.ds_data.setColumn(0, "질병14", 질병14);
        	this.ds_data.setColumn(0, "질병15", 질병15);
        	this.ds_data.setColumn(0, "수면상태", 수면상태);
        	this.ds_data.setColumn(0, "약부작용", 약부작용);
        	this.ds_data.setColumn(0, "건강행위", 건강행위);
        	this.ds_data.setColumn(0, "과거력", 과거력);
        	this.ds_data.setColumn(0, "활동상태", 활동상태);
        	this.ds_data.setColumn(0, "호흡기계", 호흡기계);
        	this.ds_data.setColumn(0, "소화기계", 소화기계);
        	this.ds_data.setColumn(0, "식이상태", 식이상태);
        	this.ds_data.setColumn(0, "심혈관계", 심혈관계);
        	this.ds_data.setColumn(0, "피부상태", 피부상태);
        	this.ds_data.setColumn(0, "배설소변", 배설소변);
        	this.ds_data.setColumn(0, "소변종류", 소변종류);
        	this.ds_data.setColumn(0, "배설대변", 배설대변);

        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"장애유무"))){
        		this.ds_data.setColumn(0, "장애유무", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"투약유무"))){
        		this.ds_data.setColumn(0, "투약유무", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"가족병력"))){
        		this.ds_data.setColumn(0, "가족병력", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"의식점수"))){
        		this.ds_data.setColumn(0, "의식점수", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"과거수술"))){
        		this.ds_data.setColumn(0, "과거수술", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"과거알콜"))){
        		this.ds_data.setColumn(0, "과거알콜", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"과거흡연"))){
        		this.ds_data.setColumn(0, "과거흡연", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"과거기타"))){
        		this.ds_data.setColumn(0, "과거기타", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"시력보조"))){
        		this.ds_data.setColumn(0, "시력보조", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"시력분비"))){
        		this.ds_data.setColumn(0, "시력분비", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"시력기타"))){
        		this.ds_data.setColumn(0, "시력기타", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"시력점수"))){
        		this.ds_data.setColumn(0, "시력점수", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"청력보조"))){
        		this.ds_data.setColumn(0, "청력보조", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"청력분비"))){
        		this.ds_data.setColumn(0, "청력분비", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"청력기타"))){
        		this.ds_data.setColumn(0, "청력기타", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"청력점수"))){
        		this.ds_data.setColumn(0, "청력점수", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"구강점수"))){
        		this.ds_data.setColumn(0, "구강점수", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"질환점수"))){
        		this.ds_data.setColumn(0, "질환점수", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"피부점수"))){
        		this.ds_data.setColumn(0, "피부점수", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"수면점수"))){
        		this.ds_data.setColumn(0, "수면점수", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"약물점수"))){
        		this.ds_data.setColumn(0, "약물점수", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"호스피스"))){
        		this.ds_data.setColumn(0, "호스피스", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"간호교육"))){
        		this.ds_data.setColumn(0, "간호교육", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"간호총점"))){
        		this.ds_data.setColumn(0, "간호총점", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"결혼"))){
        		this.ds_data.setColumn(0, "결혼", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"직업"))){
        		this.ds_data.setColumn(0, "직업", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"종교"))){
        		this.ds_data.setColumn(0, "종교", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"의식상태"))){
        		this.ds_data.setColumn(0, "의식상태", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"정서상태"))){
        		this.ds_data.setColumn(0, "정서상태", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"소변양상"))){
        		this.ds_data.setColumn(0, "소변양상", "0");
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"대변양상"))){
        		this.ds_data.setColumn(0, "대변양상", "0");
        	}

        	//this.ds_data.setColumn(0,"생일", this.real_b_mate);

        	let allScore = String(this.ds_data.getColumn(0, "간호총점")).split(" ");
        	this.ds_data.setColumn(0, "간호총점", allScore[0]);

        	if(!Sct.Util.isEmpty(this.ds_data.getColumn(0, "최고혈압")) && !Sct.Util.isEmpty(this.ds_data.getColumn(0, "최저혈압"))){
        	this.ds_data.setColumn(0, "혈압", String(this.ds_data.getColumn(0, "최고혈압")) + "/" + String(this.ds_data.getColumn(0, "최저혈압")))
        	}
        }

        this.DAY00212_P01_onclose = function(obj,e)
        {
        	this.ds_return.clearData();
        	this.ds_return.addColumn("REFRESH", "STRING");
        	var nRow = this.ds_return.addRow();
        	this.ds_return.setColumn(nRow, "REFRESH", "Y");

        	this.close(this.ds_return.saveXML());
        };


        this.fn_addRow = function(){
        	const n_addDayDate = this.n_date
        	n_addDayDate.setDate(n_addDayDate.getDate() + 1);

        	const n_addMonthDate = new nexacro.Date(n_addDayDate.getFullYear(),n_addDayDate.getMonth(),n_addDayDate.getDate());
        	n_addMonthDate.setMonth(n_addMonthDate.getMonth() + 6);
        	n_addMonthDate.setDate(n_addMonthDate.getDate() - 1);

        	const aRow = this.ds_data.addRow();

        	this.ds_data.setColumn(aRow, "sicode", fv_sicode);
        	this.ds_data.setColumn(aRow, "n_mark", "0");
        	this.ds_data.setColumn(aRow, "수급자명", this.m_name);
        	this.ds_data.setColumn(aRow, "m_group", this.m_group);
        	this.ds_data.setColumn(aRow, "수급코드", this.m_code);
        	this.ds_data.setColumn(aRow, "성별", this.sex_nm);
        	this.ds_data.setColumn(aRow, "생일", this.b_date);
        	this.ds_data.setColumn(aRow, "age", this.age);
        	this.ds_data.setColumn(aRow, "입소일", this.m_enday);
        	this.ds_data.setColumn(aRow, "grade_nm", this.grade_nm);
        	this.ds_data.setColumn(aRow, "인정번호", this.m_regist);
        	this.ds_data.setColumn(aRow, "사정일", n_addDayDate);
        	this.ds_data.setColumn(aRow, "사정시작", n_addDayDate);
        	this.ds_data.setColumn(aRow, "사정종료", n_addMonthDate);
        	this.ds_data.setColumn(aRow, "date", n_addDayDate);
        	this.ds_data.setColumn(aRow, "date_from", n_addDayDate);
        	this.ds_data.setColumn(aRow, "date_to", n_addMonthDate);
        	this.ds_data.setColumn(aRow, "작성자", this.fv_staff_name);
        	this.ds_data.setColumn(aRow, "작성직종", this.fv_staff_dutyname);
        	this.ds_data.setColumn(aRow, "작성코드", this.fv_staff_id);
        	this.ds_data.setColumn(aRow, "VIEW_MANAGER", this.fv_staff_name + "/" + this.fv_staff_dutyname + "/" + this.fv_staff_id);
        	this.ds_data.setColumn(aRow, "신장", this.height);
        	this.ds_data.setColumn(aRow, "체중", this.weight);

        	//디폴트값
        	this.ds_data.setColumn(aRow, "진단명", "");
        	this.ds_data.setColumn(aRow, "병원진료", "");
        	this.ds_data.setColumn(aRow, "혈액형", "");
        	this.ds_data.setColumn(aRow, "혈압", "/");
        	this.ds_data.setColumn(aRow, "최고혈압", 0);
        	this.ds_data.setColumn(aRow, "최저혈압", 0);
        	this.ds_data.setColumn(aRow, "맥박", 0);
        	this.ds_data.setColumn(aRow, "혈당", 0);
        	this.ds_data.setColumn(aRow, "체온", 0.0);
        	this.ds_data.setColumn(aRow, "호흡", 0);
        	this.ds_data.setColumn(aRow, "전체중", 0.0);
        	this.ds_data.setColumn(aRow, "장애종류", "");
        	this.ds_data.setColumn(aRow, "투약약물", "");
        	this.ds_data.setColumn(aRow, "병력기타", "");
        	this.ds_data.setColumn(aRow, "과거비고", "");
        	this.ds_data.setColumn(aRow, "시력비고", "");
        	this.ds_data.setColumn(aRow, "청력비고", "");
        	this.ds_data.setColumn(aRow, "호소내용", "");
        	this.ds_data.setColumn(aRow, "추가내용", "");
        	this.ds_data.setColumn(aRow, "수면비고", "");
        	this.ds_data.setColumn(aRow, "질병약물", "");
        	this.ds_data.setColumn(aRow, "질병음식", "");
        	this.ds_data.setColumn(aRow, "직업", "");
        	this.ds_data.setColumn(aRow, "건강술", "");
        	this.ds_data.setColumn(aRow, "건강담배", "");
        	this.ds_data.setColumn(aRow, "건강수면", "");
        	this.ds_data.setColumn(aRow, "건강운동", "");
        	this.ds_data.setColumn(aRow, "현병력", "");
        	this.ds_data.setColumn(aRow, "암부위", "");
        	this.ds_data.setColumn(aRow, "투약상태", "");
        	this.ds_data.setColumn(aRow, "알레르기", "");
        	this.ds_data.setColumn(aRow, "활동마비", "");
        	this.ds_data.setColumn(aRow, "활동감각", "");
        	this.ds_data.setColumn(aRow, "활동보조", "");
        	this.ds_data.setColumn(aRow, "호흡통증", "");
        	this.ds_data.setColumn(aRow, "호흡산소", 0);
        	this.ds_data.setColumn(aRow, "칼로리", 0);
        	this.ds_data.setColumn(aRow, "심혈흉통", "");
        	this.ds_data.setColumn(aRow, "심혈부종", "");
        	this.ds_data.setColumn(aRow, "피부욕창", "");
        	this.ds_data.setColumn(aRow, "피부상처", "");
        	this.ds_data.setColumn(aRow, "간호계획", "");
        	this.ds_data.setColumn(aRow, "소변횟수", 0);
        	this.ds_data.setColumn(aRow, "대변횟수", 0);

        	//간호사정
        	this.ds_data.setColumn(aRow, "질병01", "00000");
        	this.ds_data.setColumn(aRow, "질병01_1", "0");
        	this.ds_data.setColumn(aRow, "질병01_2", "0");
        	this.ds_data.setColumn(aRow, "질병01_3", "0");
        	this.ds_data.setColumn(aRow, "질병01_4", "0");
        	this.ds_data.setColumn(aRow, "질병01_5", "0");
        	this.ds_data.setColumn(aRow, "질병02", "00000");
        	this.ds_data.setColumn(aRow, "질병02_1", "0");
        	this.ds_data.setColumn(aRow, "질병02_2", "0");
        	this.ds_data.setColumn(aRow, "질병02_3", "0");
        	this.ds_data.setColumn(aRow, "질병02_4", "0");
        	this.ds_data.setColumn(aRow, "질병02_5", "0");
        	this.ds_data.setColumn(aRow, "질병03", "000");
        	this.ds_data.setColumn(aRow, "질병03_1", "0");
        	this.ds_data.setColumn(aRow, "질병03_2", "0");
        	this.ds_data.setColumn(aRow, "질병03_3", "0");
        	this.ds_data.setColumn(aRow, "질병04", "000");
        	this.ds_data.setColumn(aRow, "질병04_1", "0");
        	this.ds_data.setColumn(aRow, "질병04_2", "0");
        	this.ds_data.setColumn(aRow, "질병04_3", "0");
        	this.ds_data.setColumn(aRow, "질병05", "0000");
        	this.ds_data.setColumn(aRow, "질병05_1", "0");
        	this.ds_data.setColumn(aRow, "질병05_2", "0");
        	this.ds_data.setColumn(aRow, "질병05_3", "0");
        	this.ds_data.setColumn(aRow, "질병05_4", "0");
        	this.ds_data.setColumn(aRow, "질병06", "000000");
        	this.ds_data.setColumn(aRow, "질병06_1", "0");
        	this.ds_data.setColumn(aRow, "질병06_2", "0");
        	this.ds_data.setColumn(aRow, "질병06_3", "0");
        	this.ds_data.setColumn(aRow, "질병06_4", "0");
        	this.ds_data.setColumn(aRow, "질병06_5", "0");
        	this.ds_data.setColumn(aRow, "질병06_6", "0");
        	this.ds_data.setColumn(aRow, "질병07", "0000");
        	this.ds_data.setColumn(aRow, "질병07_1", "0");
        	this.ds_data.setColumn(aRow, "질병07_2", "0");
        	this.ds_data.setColumn(aRow, "질병07_3", "0");
        	this.ds_data.setColumn(aRow, "질병07_4", "0");
        	this.ds_data.setColumn(aRow, "질병08", "00000");
        	this.ds_data.setColumn(aRow, "질병08_1", "0");
        	this.ds_data.setColumn(aRow, "질병08_2", "0");
        	this.ds_data.setColumn(aRow, "질병08_3", "0");
        	this.ds_data.setColumn(aRow, "질병08_4", "0");
        	this.ds_data.setColumn(aRow, "질병08_5", "0");
        	this.ds_data.setColumn(aRow, "질병09", "0000");
        	this.ds_data.setColumn(aRow, "질병09_1", "0");
        	this.ds_data.setColumn(aRow, "질병09_2", "0");
        	this.ds_data.setColumn(aRow, "질병09_3", "0");
        	this.ds_data.setColumn(aRow, "질병09_4", "0");
        	this.ds_data.setColumn(aRow, "질병10", "000000");
        	this.ds_data.setColumn(aRow, "질병10_1", "0");
        	this.ds_data.setColumn(aRow, "질병10_2", "0");
        	this.ds_data.setColumn(aRow, "질병10_3", "0");
        	this.ds_data.setColumn(aRow, "질병10_4", "0");
        	this.ds_data.setColumn(aRow, "질병10_5", "0");
        	this.ds_data.setColumn(aRow, "질병10_6", "0");
        	this.ds_data.setColumn(aRow, "질병11", "0000");
        	this.ds_data.setColumn(aRow, "질병11_1", "0");
        	this.ds_data.setColumn(aRow, "질병11_2", "0");
        	this.ds_data.setColumn(aRow, "질병11_3", "0");
        	this.ds_data.setColumn(aRow, "질병11_4", "0");
        	this.ds_data.setColumn(aRow, "질병12", "0000");
        	this.ds_data.setColumn(aRow, "질병12_1", "0");
        	this.ds_data.setColumn(aRow, "질병12_2", "0");
        	this.ds_data.setColumn(aRow, "질병12_3", "0");
        	this.ds_data.setColumn(aRow, "질병12_4", "0");
        	this.ds_data.setColumn(aRow, "질병13", "000");
        	this.ds_data.setColumn(aRow, "질병13_1", "0");
        	this.ds_data.setColumn(aRow, "질병13_2", "0");
        	this.ds_data.setColumn(aRow, "질병13_3", "0");
        	this.ds_data.setColumn(aRow, "질병14", "0000");
        	this.ds_data.setColumn(aRow, "질병14_1", "0");
        	this.ds_data.setColumn(aRow, "질병14_2", "0");
        	this.ds_data.setColumn(aRow, "질병14_3", "0");
        	this.ds_data.setColumn(aRow, "질병14_4", "0");
        	this.ds_data.setColumn(aRow, "질병15", "00000");
        	this.ds_data.setColumn(aRow, "질병15_1", "0");
        	this.ds_data.setColumn(aRow, "질병15_2", "0");
        	this.ds_data.setColumn(aRow, "질병15_3", "0");
        	this.ds_data.setColumn(aRow, "질병15_4", "0");
        	this.ds_data.setColumn(aRow, "질병15_5", "0");
        	this.ds_data.setColumn(aRow, "수면상태", "00000");
        	this.ds_data.setColumn(aRow, "수면상태_1", "0");
        	this.ds_data.setColumn(aRow, "수면상태_2", "0");
        	this.ds_data.setColumn(aRow, "수면상태_3", "0");
        	this.ds_data.setColumn(aRow, "수면상태_4", "0");
        	this.ds_data.setColumn(aRow, "수면상태_5", "0");
        	this.ds_data.setColumn(aRow, "약부작용", "0000");
        	this.ds_data.setColumn(aRow, "약부작용_1", "0");
        	this.ds_data.setColumn(aRow, "약부작용_2", "0");
        	this.ds_data.setColumn(aRow, "약부작용_3", "0");
        	this.ds_data.setColumn(aRow, "약부작용_4", "0");

        	//건강평가
        	this.ds_data.setColumn(aRow, "건강행위", "0000");
        	this.ds_data.setColumn(aRow, "건강행위_1", "0");
        	this.ds_data.setColumn(aRow, "건강행위_2", "0");
        	this.ds_data.setColumn(aRow, "건강행위_3", "0");
        	this.ds_data.setColumn(aRow, "건강행위_4", "0");
        	this.ds_data.setColumn(aRow, "과거력", "000000000");
        	this.ds_data.setColumn(aRow, "과거력_1", "0");
        	this.ds_data.setColumn(aRow, "과거력_2", "0");
        	this.ds_data.setColumn(aRow, "과거력_3", "0");
        	this.ds_data.setColumn(aRow, "과거력_4", "0");
        	this.ds_data.setColumn(aRow, "과거력_5", "0");
        	this.ds_data.setColumn(aRow, "과거력_6", "0");
        	this.ds_data.setColumn(aRow, "과거력_7", "0");
        	this.ds_data.setColumn(aRow, "과거력_8", "0");
        	this.ds_data.setColumn(aRow, "과거력_9", "0");
        	this.ds_data.setColumn(aRow, "활동상태", "000000");
        	this.ds_data.setColumn(aRow, "활동상태_1", "0");
        	this.ds_data.setColumn(aRow, "활동상태_2", "0");
        	this.ds_data.setColumn(aRow, "활동상태_3", "0");
        	this.ds_data.setColumn(aRow, "활동상태_4", "0");
        	this.ds_data.setColumn(aRow, "활동상태_5", "0");
        	this.ds_data.setColumn(aRow, "활동상태_6", "0");
        	this.ds_data.setColumn(aRow, "호흡기계", "00000000");
        	this.ds_data.setColumn(aRow, "호흡기계_1", "0");
        	this.ds_data.setColumn(aRow, "호흡기계_2", "0");
        	this.ds_data.setColumn(aRow, "호흡기계_3", "0");
        	this.ds_data.setColumn(aRow, "호흡기계_4", "0");
        	this.ds_data.setColumn(aRow, "호흡기계_5", "0");
        	this.ds_data.setColumn(aRow, "호흡기계_6", "0");
        	this.ds_data.setColumn(aRow, "호흡기계_7", "0");
        	this.ds_data.setColumn(aRow, "호흡기계_8", "0");
        	this.ds_data.setColumn(aRow, "소화기계", "0000000");
        	this.ds_data.setColumn(aRow, "소화기계_1", "0");
        	this.ds_data.setColumn(aRow, "소화기계_2", "0");
        	this.ds_data.setColumn(aRow, "소화기계_3", "0");
        	this.ds_data.setColumn(aRow, "소화기계_4", "0");
        	this.ds_data.setColumn(aRow, "소화기계_5", "0");
        	this.ds_data.setColumn(aRow, "소화기계_6", "0");
        	this.ds_data.setColumn(aRow, "소화기계_7", "0");
        	this.ds_data.setColumn(aRow, "식이상태", "00000");
        	this.ds_data.setColumn(aRow, "식이상태_1", "0");
        	this.ds_data.setColumn(aRow, "식이상태_2", "0");
        	this.ds_data.setColumn(aRow, "식이상태_3", "0");
        	this.ds_data.setColumn(aRow, "식이상태_4", "0");
        	this.ds_data.setColumn(aRow, "식이상태_5", "0");
        	this.ds_data.setColumn(aRow, "심혈관계", "0000000");
        	this.ds_data.setColumn(aRow, "심혈관계_1", "0");
        	this.ds_data.setColumn(aRow, "심혈관계_2", "0");
        	this.ds_data.setColumn(aRow, "심혈관계_3", "0");
        	this.ds_data.setColumn(aRow, "심혈관계_4", "0");
        	this.ds_data.setColumn(aRow, "심혈관계_5", "0");
        	this.ds_data.setColumn(aRow, "심혈관계_6", "0");
        	this.ds_data.setColumn(aRow, "심혈관계_7", "0");
        	this.ds_data.setColumn(aRow, "피부상태", "00000");
        	this.ds_data.setColumn(aRow, "피부상태_1", "0");
        	this.ds_data.setColumn(aRow, "피부상태_2", "0");
        	this.ds_data.setColumn(aRow, "피부상태_3", "0");
        	this.ds_data.setColumn(aRow, "피부상태_4", "0");
        	this.ds_data.setColumn(aRow, "피부상태_5", "0");
        	this.ds_data.setColumn(aRow, "배설소변", "000");
        	this.ds_data.setColumn(aRow, "배설소변_1", "0");
        	this.ds_data.setColumn(aRow, "배설소변_2", "0");
        	this.ds_data.setColumn(aRow, "배설소변_3", "0");
        	this.ds_data.setColumn(aRow, "소변종류", "00000");
        	this.ds_data.setColumn(aRow, "소변종류_1", "0");
        	this.ds_data.setColumn(aRow, "소변종류_2", "0");
        	this.ds_data.setColumn(aRow, "소변종류_3", "0");
        	this.ds_data.setColumn(aRow, "소변종류_4", "0");
        	this.ds_data.setColumn(aRow, "소변종류_5", "0");
        	this.ds_data.setColumn(aRow, "배설대변", "00");
        	this.ds_data.setColumn(aRow, "배설대변_1", "0");
        	this.ds_data.setColumn(aRow, "배설대변_2", "0");

        }

        //소수점 넣기
        this.fn_makeDot = function(obj,e)
        {
        	let StringValue = String(e.postvalue);
        	let newStringValue = "";
        	let numberValue = 0
        	if(StringValue.length == 4){
        		newStringValue = "0"
        	}else
        	if(StringValue.length > 1){
        		let StringValueArray = StringValue.split("")
        		for(let i = 0; i<StringValueArray.length; i++){
        			if(i == StringValueArray.length-1){
        				newStringValue += "."+StringValueArray[i]
        			}else{
        				newStringValue += StringValueArray[i]
        			}
        		}
        	}else{
        		newStringValue = StringValue;
        	}

        	numberValue = Number(newStringValue);
        	obj.set_value(numberValue);

        };

        //글자수 초과 못하게
        this.fn_makeByte = function(obj,e)
        {
        	let StringValue = String(e.postvalue);
        	if(StringValue.byteLength() > 20){
        		while(StringValue.byteLength() > 20){
        			StringValue = StringValue.slice(0,StringValue.length-1)
        		}
        	}

        	obj.set_value(StringValue);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.DAY00212_P01_onclose,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_func.form.btn_report5.addEventHandler("onclick",this.div_func_btn_report5_onclick,this);
            this.div_func.form.btn_report4.addEventHandler("onclick",this.div_func_btn_report4_onclick,this);
            this.div_func.form.btn_report6.addEventHandler("onclick",this.div_func_btn_report6_onclick,this);
            this.div_cont.form.div_up.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_up.form.div_left.form.grd_list.addEventHandler("oncellclick",this.div_cont_div_up_div_left_grd_list_oncellclick,this);
            this.div_cont.form.div_up.form.div_right.form.btn_manager.addEventHandler("onclick",this.btn_manager_onclick,this);
            this.div_cont.form.div_up.form.div_right.form.cal_date_to_pic.addEventHandler("onchanged",this.div_cont_div_up_div_right_cal_date_to_pic_onchanged,this);
            this.div_cont.form.div_up.form.div_right.form.cal_date_from_pic.addEventHandler("onchanged",this.div_cont_div_up_div_right_cal_date_from_pic_onchanged,this);
            this.div_cont.form.div_up.form.div_right.form.btn_sixMonth.addEventHandler("onclick",this.div_cont_div_up_div_right_btn_sixMonth_onclick,this);
            this.div_cont.form.div_up.form.div_right.form.btn_twelveMonth.addEventHandler("onclick",this.div_cont_div_up_div_right_btn_twelveMonth_onclick,this);
            this.div_cont.form.div_up.form.div_right.form.cal_date_pic.addEventHandler("onchanged",this.div_cont_div_up_div_right_cal_date_pic_onchanged,this);
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.sta_body34_00.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.sta_body31_00.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.sta_body35.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.sta_body36.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.sta_body36_00.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.sta_body22.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.sta_body23.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.sta_body24.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.sta_body26.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.sta_body28.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.sta_body30.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.sta_body31.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.sta_body33.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.sta_body34.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.sta_body37.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.sta_body32.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.sta_body38.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.sta_body39.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.sta_body40.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_00.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_00_00.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_00_00_00_00.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body04.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body05.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body06.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body07.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body08.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body09.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body10.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body11.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body12.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body13.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body14.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body15.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body16.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body18.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body19_00.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body18_00.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body17_00.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body16_00.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body15_00.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body14_00.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body13_00.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body12_00.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body11_00.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body10_00.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body09_00.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body08_00.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body07_00.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body06_00.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body05_00.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.div_cont.form.div_down.form.tab.tab_page2.form.div_main.form.sta_body04_00.addEventHandler("onclick",this.div_cont_div_down_tab_tab_page1_div_main_sta_body1_01_00_00_onclick,this);
            this.ds_data.addEventHandler("oncolumnchanged",this.ds_data_oncolumnchanged,this);
            this.ds_data_select.addEventHandler("oncolumnchanged",this.ds_data_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00212_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
