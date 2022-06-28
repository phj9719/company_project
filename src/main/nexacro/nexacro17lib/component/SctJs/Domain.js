
include "lib::sct_util.xjs"
/**
 * @fileoverview 넥사크로  공통 Library interface
 * @author  copyright 2017 TOBESOFT {J}
 */

if ( !Sct.Domain )
{
	Sct.Domain = {
		pForm : undefined,
		
		/**
		 * Function : Form에 속한 모든 컴포넌트의 title을 공통 영역에
					  정의한 MsgId를 바탕으로 변경시키는 함수
		 * @param   : obj - Form Object
		 * Return   : void
		*/
		setMultiLangTitle : function(obj,no)
		{
			this.pForm = obj;
			
			obj.set_locale(application.gv_langType);
			
			var aComponents = obj.components;
			if(no == null){
				for(var i=0; i<aComponents.length; i++)
				{
					if(aComponents[i] instanceof CheckBox || 
					aComponents[i] instanceof GroupBox ||
					aComponents[i] instanceof Static   || 
					aComponents[i] instanceof Button   ||
					aComponents[i] instanceof ImageViewer)    
					{
						aComponents[i].set_tooltiptext(this.getTooltip(aComponents[i]));
						aComponents[i].set_text(this.getLabel(aComponents[i]));
					}
					else if(aComponents[i] instanceof Div)
						this.getTitleChild(aComponents[i]);
					else if(aComponents[i] instanceof Grid)
						this.setGridHead(aComponents[i]);
					else if(aComponents[i] instanceof Tab)
						this.setTitleTab(aComponents[i]);
					else if(aComponents[i] instanceof Calendar)
					{
						aComponents[i].set_locale(application.gv_locale);
					}
				}
			}
		},

		/**
		 * Function : Form에 속한 모든 컴포넌트의 title을 공통 영역에
					  정의한 MsgId를 바탕으로 변경시키는 함수
		 * @param   : obj - Div Object / Tabpage Object
		 * Return   : void
		*/
		getTitleChild : function(obj)
		{
			var aComponents = obj.components;

			for(var i=0; i<aComponents.length; i++){
				if(aComponents[i] instanceof CheckBox || 
				   aComponents[i] instanceof GroupBox ||
				   aComponents[i] instanceof Static   || 
				   aComponents[i] instanceof Button)
				{
					aComponents[i].set_tooltiptext(this.getTooltip(aComponents[i]));
					aComponents[i].set_text(this.getLabel(aComponents[i]));
				}
				else if(aComponents[i] instanceof Div )
					this.getTitleChild(aComponents[i]);
				else if(aComponents[i] instanceof Grid)
					this.setGridHead(aComponents[i]);
				else if(aComponents[i] instanceof Tab)
					this.setTitleTab(aComponents[i]);
				else if(aComponents[i] instanceof Calendar)
				{
					aComponents[i].set_locale(application.gv_locale);
				}	
			}
		},

		/**
		 * Function : Grid의 header를 공통 정의된 메세지 기반으로 처리하는 함수
		 * @param   : obj - Grid Object
		 * Return   : void
		*/
		setGridHead : function(obj)
		{
			var sHeadText;
			var sMsgTxt;
			var sMsgTooltip;
			var sAsterisk;
			var sHeadName = "";
			var arrHeadName;
			if(Sct.Util.isEmpty(obj.arrHeadName))
			{
				for(var i=0; i<obj.getCellCount("head"); i++)
				{
					sHeadName += obj.getCellText(-1, i)+"|";
				}
				obj.arrHeadName = sHeadName;
			}
			
			arrHeadName = obj.arrHeadName.split("|");
			
			for(var i=0; i<obj.getCellCount("head"); i++){
				sHeadText = arrHeadName[i];
				if(Sct.Util.isEmpty(sHeadText)) continue;

				sMsgTooltip = this.getHeadTooltip(obj, sHeadText);
				sMsgTxt = this.getHeadLabel(obj, sHeadText);

				obj.setCellProperty("head", i, "text", sMsgTxt);
				obj.setCellProperty("head", i, "tooltiptext", sMsgTooltip);
			}
		},

		/**
		 * Function : setTitle 함수에서 Tab 객체의 하위 컴포넌트에 접근
					  하기위해 내부적으로 사용
		 * @param   : obj - Tab Object
		 * Return   : void
		*/
		setTitleTab : function(obj)
		{
			var aTabPages = obj.tabpages;
			var pageName;
			var index = obj.tabindex;
			
			for(var i=0; i<aTabPages.length; i++){
				obj.set_tabindex(i);
				aTabPages[i].set_tooltiptext(this.getTooltip(aTabPages[i]));
				aTabPages[i].set_text(this.getLabel(aTabPages[i]));

				this.getTitleChild(aTabPages[i]);
			}
			
			obj.set_tabindex(index);
		},

		/************************************************************************************************
		 * Function : 메세지 ID와 언어에 해당하는 항목명을 가져온다.
		 * @param   : obj - Object Component
		 * Return   : 메세지 ID와 언어에 해당하는 항목명
		************************************************************************************************/
		getLabel : function(obj)
		{
			var orgText="";
			if(Sct.Util.isEmpty(orgText)) orgText = obj.text;
			if(application.gds_multiDic.rowcount == 0) return orgText;
			if(Sct.Util.isEmpty(orgText)) return "";
			if(Sct.Util.isEmpty(application.gv_langType)) application.gv_langType = "ko_KR";
		 
			orgText = orgText.replace(/\r\n/g, " ");
			var sRtn = "";
// 			var iRow = application.gds_multiDic.findRowExpr("DOMAIN_NM==" + nexacro.wrapQuote(orgText) + " && LANG_TYPE==" + nexacro.wrapQuote(application.gv_langType));
			var iRow = application.gds_multiDic.findRowExpr("PROPERTY_NM==" + nexacro.wrapQuote(orgText) + " && LANG_CD==" + nexacro.wrapQuote(application.gv_langType));
			if(iRow > -1)
			{
				if(Sct.Util.isEmpty(obj.multilang))
				{
					obj.multilang = "short0";
				}
				
				var preColName = "LANG_";
				var colName = preColName + obj.multilang.toUpperCase();
				sRtn = application.gds_multiDic.getColumn(iRow, colName);
				
				if(Sct.Util.isEmpty(sRtn.trim())) sRtn = obj.text;
			}
			else
			{
				sRtn = obj.text;
			}

			return sRtn;
		},

		/************************************************************************************************
		 * Function : 메세지 ID와 언어에 해당하는 항목명을 가져온다.
		 * @param   : obj - Object Component
		 * Return   : 메세지 ID와 언어에 해당하는 항목명
		************************************************************************************************/
		getTooltip : function(obj)
		{
			if(Sct.Util.isEmpty(obj.text)) obj.set_text("");

			var orgText="";
			if(Sct.Util.isEmpty(orgText)) orgText = obj.text;
			if(application.gds_multiDic.rowcount == 0) return orgText;
			if(Sct.Util.isEmpty(orgText)) return "";
			if(Sct.Util.isEmpty(application.gv_langType)) application.gv_langType = "ko_KR";
			
			orgText = orgText.replace(/\r\n/g, " ");
			var sRtn = "";
 			//var iRow = application.gds_multiDic.findRowExpr("DOMAIN_NM==" + nexacro.wrapQuote(orgText) + " && LANG_TYPE==" + nexacro.wrapQuote(application.gv_langType));
			var iRow = application.gds_multiDic.findRowExpr("PROPERTY_NM==" + nexacro.wrapQuote(orgText) + " && LANG_CD==" + nexacro.wrapQuote(application.gv_langType));
			if(iRow > -1)
			{		
				if(Sct.Util.isEmpty(obj.multilang))
				{
					obj.multilang = "full0";
				}
				
				var preColName = "LANG_FULL";
				var colName = preColName + Sct.Util.right(obj.multilang.toUpperCase(), 1);
				sRtn = application.gds_multiDic.getColumn(iRow, colName);
				if(Sct.Util.isEmpty(sRtn.trim())) sRtn = obj.text;
			}
			else
			{
				sRtn = obj.text;
			}

			return sRtn;
		},

		/**
		 * Function : 메세지 ID와 언어에 해당하는 항목명을 가져온다.
		 * @param   : sMsgId - 가져올 Label의 ID
		 * Return   : 메세지 ID와 언어에 해당하는 항목명
		*/
		getHeadLabel : function (obj, sMsgId)
		{
			if(application.gds_multiDic.rowcount == 0) return sMsgId;
			if(Sct.Util.isEmpty(sMsgId)) return "";
			if(Sct.Util.isEmpty(application.gv_langType)) application.gv_langType = "ko_KR";
			
			var orgText = sMsgId.replace(/\r\n/g, " ");
			var sRtn = "";
// 			var iRow = application.gds_multiDic.findRowExpr("DOMAIN_NM==" + nexacro.wrapQuote(orgText) + " && LANG_TYPE==" + nexacro.wrapQuote(application.gv_langType)); 
			var iRow = application.gds_multiDic.findRowExpr("PROPERTY_NM==" + nexacro.wrapQuote(orgText) + " && LANG_CD==" + nexacro.wrapQuote(application.gv_langType));
			
			if(iRow > -1)
			{
				if(Sct.Util.isEmpty(obj.multilang))
				{
					obj.multilang = "short0";
				}
				
				var preColName = "LANG_";
				var colName = preColName + obj.multilang.toUpperCase();
				sRtn = application.gds_multiDic.getColumn(iRow, colName);
				
				if(Sct.Util.isEmpty(sRtn.trim())) sRtn = sMsgId;
			}
			else
			{
				sRtn = sMsgId;
			}	

			return sRtn;
		},

		/**
		 * Function : 메세지 ID와 언어에 해당하는 항목명을 가져온다.
		 * @param   : sMsgId - 가져올 Label의 ID
		 * Return   : 메세지 ID와 언어에 해당하는 항목명
		*/
		getHeadTooltip : function (obj, sMsgId)
		{
			if(application.gds_multiDic.rowcount == 0) return sMsgId;
			if(Sct.Util.isEmpty(sMsgId)) return "";
			if(Sct.Util.isEmpty(application.gv_langType)) application.gv_langType = "ko_KR";

			var orgText = sMsgId.replace(/\r\n/g, " ");
			var sRtn = "";
// 			var iRow = application.gds_multiDic.findRowExpr("DOMAIN_NM==" + nexacro.wrapQuote(orgText) + " && LANG_TYPE==" + nexacro.wrapQuote(application.gv_langType)); 
			var iRow = application.gds_multiDic.findRowExpr("PROPERTY_NM==" + nexacro.wrapQuote(orgText) + " && LANG_CD==" + nexacro.wrapQuote(application.gv_langType));
			
			if(iRow > -1)
			{
// 				var preColName = "CAP_LANG_FULL0";
// 				var colName = preColName;
// 				sRtn = application.gds_multiDic.getColumn(iRow, colName);

				if(Sct.Util.isEmpty(obj.multilang))
				{
					obj.multilang = "full0";
				}
				
				var preColName = "LANG_FULL";
				var colName = preColName + Sct.Util.right(obj.multilang.toUpperCase(), 1);
				sRtn = application.gds_multiDic.getColumn(iRow, colName);
				
				if(Sct.Util.isEmpty(sRtn.trim())) sRtn = sMsgId;
			}
			else
			{
				sRtn = sMsgId;
			}	

			return sRtn;
		},
	};
}
