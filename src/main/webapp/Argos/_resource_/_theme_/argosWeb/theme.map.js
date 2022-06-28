(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "Form" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"font" : nexacro.FontObject("normal 400 10pt/normal \"Noto Sans KR\""),
            						"color" : nexacro.ColorObject("#222222"),
            						"border" : nexacro.BorderObject("0px none"),
            						"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            					},
            					"contents" :
            					{
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"titleicon" :
            			{
            				"parent" :
            				{
            					"titlebar" :
            					{
            						"parent" :
            						{
            							"MainFrame" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/titlebar_icon_nexacro17.ico')")
            									}
            								}
            							}
            						}
            					},
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/img_TF_TitleIcon.png')"),
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            							}
            						}
            					}
            				}
            			},
            			"Button" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"color" : nexacro.ColorObject("#ffffff"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 1px 4px"),
            						"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            						"letterSpacing" : nexacro.CSSValueObject("0.2px")
            					},
            					"focused" :
            					{
            						"color" : nexacro.ColorObject("#ffffff"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 1px 4px"),
            						"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            						"letterSpacing" : nexacro.CSSValueObject("0.2px")
            					},
            					"mouseover" :
            					{
            						"color" : nexacro.ColorObject("#ffffff"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 1px 4px")
            					},
            					"pushed" :
            					{
            						"color" : nexacro.ColorObject("#ffffff"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 1px 4px")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#ffffff"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 1px 4px")
            					},
            					"selected" :
            					{
            						"color" : nexacro.ColorObject("#ffffff"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 1px 4px")
            					}
            				},
            				"class" :
            				[
            					{
            						"btn_delete" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_delete.png')")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_delete.png')")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_delete.png')")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_delete.png')")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_delete.png')")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_delete.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_newdoc" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_newdoc.png')")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_newdoc.png')")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_newdoc.png')")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_newdoc.png')")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_newdoc.png')")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_newdoc.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_function" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_function.png')")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_function.png')")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_function.png')")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_function.png')")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_function.png')")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_function.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_list" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_list.png')")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_list.png')")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_list.png')")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_list.png')")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_list.png')")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_list.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_save" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_save.png')")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_save.png')")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_save.png')")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_save.png')")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_save.png')")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_save.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_search.png')")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_search.png')")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_search.png')")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_search.png')")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_search.png')")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_search.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_worker" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_worker15.png')")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_worker15.png')")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_worker15.png')")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_worker15.png')")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_worker15.png')")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_worker15.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_training" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_training.png')")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_training.png')")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_training.png')")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_training.png')")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_training.png')")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_training.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_help" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_help.png')")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_help.png')")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_help.png')")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_help.png')")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_help.png')")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_help.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_note" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_note.png')")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_note.png')")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_note.png')")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_note.png')")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_note.png')")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_note.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_print" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_print.png')")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_print.png')")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_print.png')")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_print.png')")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_print.png')")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_print.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_manual" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_manual.png')")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_manual.png')")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_manual.png')")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_manual.png')")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_manual.png')")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_manual.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_remote" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_remote.png')")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_remote.png')")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_remote.png')")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_remote.png')")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_remote.png')")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_remote.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_logout" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_logout.png')")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_logout.png')")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_logout.png')")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_logout.png')")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_logout.png')")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_logout.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_eraser" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#111111"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_eraser.png')")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#111111"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_eraser.png')")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#111111"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_eraser.png')")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#111111"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_eraser.png')")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#111111"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_eraser.png')")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#111111"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_eraser.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_basic_gray" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#111111"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#111111"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#111111"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#111111"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#111111"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#111111"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px")
            								}
            							}
            						}
            					},
            					{
            						"btn_clock" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_clock.png')")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_clock.png')")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_clock.png')")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_clock.png')")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_clock.png')")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_clock.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_excel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_excel.png')")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_excel.png')")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_excel.png')")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_excel.png')")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_excel.png')")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_excel.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_refresh" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_refresh.png')")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_refresh.png')")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_refresh.png')")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_refresh.png')")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_refresh.png')")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_refresh.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_addimage" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#111111"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_addimage.png')")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#111111"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_addimage.png')")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#111111"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_addimage.png')")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#111111"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_addimage.png')")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#111111"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_addimage.png')")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#111111"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_addimage.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_deleteimage" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#111111"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_delete_image.png')")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#111111"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_delete_image.png')")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#111111"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_delete_image.png')")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#111111"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_delete_image.png')")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#111111"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_delete_image.png')")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#111111"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_delete_image.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_eldery" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_eldery.png')")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_eldery.png')")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_eldery.png')")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_eldery.png')")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_eldery.png')")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_eldery.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_eldery2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_eldery.png')")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_eldery.png')")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_eldery.png')")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_eldery.png')")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_eldery.png')")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_eldery.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_chart" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_chart.png')")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_chart.png')")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_chart.png')")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_chart.png')")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_chart.png')")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"iconPosition" : "left",
            									"icon" : nexacro.UrlObject("url('theme://images/ico_chart.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_orange" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px")
            								},
            								"disabled" :
            								{
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 1px 4px")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 1px 4px")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.2px")
            								}
            							}
            						}
            					}
            				]
            			},
            			"FileDownload" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"color" : nexacro.ColorObject("#ffffff"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 1px 4px"),
            						"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            						"letterSpacing" : nexacro.CSSValueObject("0.2px")
            					},
            					"mouseover" :
            					{
            						"color" : nexacro.ColorObject("#ffffff"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 1px 4px")
            					},
            					"focused" :
            					{
            						"color" : nexacro.ColorObject("#ffffff"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 1px 4px")
            					},
            					"pushed" :
            					{
            						"color" : nexacro.ColorObject("#ffffff"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 1px 4px")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#ffffff"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 1px 4px")
            					}
            				}
            			},
            			"ButtonControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				}
            			},
            			"fileuploaditem" :
            			{
            				"parent" :
            				{
            					"FileUpload" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					}
            				}
            			},
            			"fileuploaditembutton" :
            			{
            				"parent" :
            				{
            					"fileuploaditem" :
            					{
            						"parent" :
            						{
            							"FileUpload" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #c2c2c2"),
            										"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"textPadding" : nexacro.PaddingObject("0px 0px 1px 4px")
            									},
            									"pushed" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"textPadding" : nexacro.PaddingObject("0px 0px 1px 4px")
            									},
            									"selected" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"textPadding" : nexacro.PaddingObject("0px 0px 1px 4px")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"textPadding" : nexacro.PaddingObject("0px 0px 1px 4px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Calendar" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a86cd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a86cd")
            					},
            					"readonly" :
            					{
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"CalendarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a86cd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a86cd")
            					},
            					"readonly" :
            					{
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"dropbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calendar.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calendar_D.png')")
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calendar.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calendar_D.png')")
            							}
            						}
            					},
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("1px 2px 0px 0px"),
            								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_O.png')")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_O.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_P.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_P.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("1px 2px 0px 0px"),
            								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_O.png')")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_O.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_P.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_P.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"calendarspinupbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_O.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_P.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_D.png')")
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_O.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_P.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_D.png')")
            							}
            						}
            					}
            				}
            			},
            			"calendarspindownbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_O.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_P.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_D.png')")
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_O.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_P.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_D.png')")
            							}
            						}
            					}
            				}
            			},
            			"CheckBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/che_none.png')"),
            						"border" : nexacro.BorderObject("1px solid rgba(128,128,128,0)"),
            						"iconPosition" : "left",
            						"color" : nexacro.ColorObject("#222222"),
            						"font" : nexacro.FontObject("normal 400 10pt/normal \"Noto Sans KR\""),
            						"textPadding" : nexacro.PaddingObject("0px 0px 1px 3px")
            					},
            					"mouseover" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/che_mouseover.png')")
            					},
            					"readonly" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/che_read.png')")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/che_selected.png')")
            					},
            					"disabled" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/che_disabled.png')")
            					},
            					"focused" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/che_focused.png')"),
            						"border" : nexacro.BorderObject("1px dashed darkgray")
            					}
            				},
            				"class" :
            				[
            					{
            						"chk_o" :
            						{
            							"self" :
            							{
            								"selected" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"chk_x" :
            						{
            							"self" :
            							{
            								"selected" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"chk_v" :
            						{
            							"self" :
            							{
            								"selected" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"chk_s1" :
            						{
            							"self" :
            							{
            								"selected" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"chk_d9ffb3" :
            						{
            							"self" :
            							{
            								"selected" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"chk_c1e699" :
            						{
            							"self" :
            							{
            								"selected" :
            								{
            								}
            							}
            						}
            					}
            				]
            			},
            			"Combo" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
            						"font" : nexacro.FontObject("normal 400 10pt/normal \"Noto Sans KR\"")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a86cd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a86cd")
            					},
            					"readonly" :
            					{
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"ComboControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
            						"font" : nexacro.FontObject("normal 400 10pt/normal \"Noto Sans KR\"")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a86cd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a86cd")
            					},
            					"readonly" :
            					{
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"combolist" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 10pt/normal \"Noto Sans KR\""),
            								"color" : nexacro.ColorObject("#444444"),
            								"border" : nexacro.BorderObject("1px solid #b1b1b1"),
            								"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            							}
            						}
            					},
            					"ComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 10pt/normal \"Noto Sans KR\""),
            								"color" : nexacro.ColorObject("#444444"),
            								"border" : nexacro.BorderObject("1px solid #b1b1b1"),
            								"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            							}
            						}
            					},
            					"cellcombo" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("normal 400 12pt/normal \"Noto Sans KR\""),
            										"color" : nexacro.ColorObject("#555555"),
            										"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("normal 400 12pt/normal \"Noto Sans KR\""),
            										"color" : nexacro.ColorObject("#444444"),
            										"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Edit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e2e2e2"),
            						"padding" : nexacro.PaddingObject("1px 5px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a86cd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a86cd")
            					},
            					"readonly" :
            					{
            						"color" : nexacro.ColorObject("#8f8f8f"),
            						"border" : nexacro.BorderObject("1px solid #d9d9d9")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#8f8f8f")
            					}
            				}
            			},
            			"fileuploaditemedit" :
            			{
            				"parent" :
            				{
            					"fileuploaditem" :
            					{
            						"parent" :
            						{
            							"FileUpload" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #e2e2e2"),
            										"padding" : nexacro.PaddingObject("1px 5px")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #5a86cd")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #5a86cd")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#8f8f8f")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"EditControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"padding" : nexacro.PaddingObject("1px 5px")
            					}
            				}
            			},
            			"cell" :
            			{
            				"class" :
            				[
            					{
            						"grdTLbg" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"font" : nexacro.FontObject("normal 700 10pt/normal \"Noto Sans KR\""),
            															"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"treeMenuBlack" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"font" : nexacro.FontObject("normal 700 10pt/normal \"Noto Sans KR\""),
            															"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"treeMenuBlue" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            															"color" : nexacro.ColorObject("#ffffff"),
            															"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"treeMenuDefault" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"font" : nexacro.FontObject("normal 400 10pt/normal \"Noto Sans KR\""),
            															"color" : nexacro.ColorObject("#444444"),
            															"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				],
            				"parent" :
            				{
            					"row" :
            					{
            						"parent" :
            						{
            							"summary" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"font" : nexacro.FontObject("normal 400 12pt/normal \"Noto Sans KR\""),
            												"color" : nexacro.ColorObject("#333333"),
            												"border" : nexacro.BorderObject("1px solid #c8c1c2"),
            												"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"body" :
            					{
            						"parent" :
            						{
            							"ListView" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dbdee2"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dbdee2"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"readonly" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dbdee2"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dbdee2"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #c4c9cf")
            									}
            								}
            							}
            						}
            					},
            					"detail" :
            					{
            						"parent" :
            						{
            							"ListView" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dbdee2"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dbdee2"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"readonly" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dbdee2"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dbdee2"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #c4c9cf")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"subcell" :
            			{
            				"parent" :
            				{
            					"cell" :
            					{
            						"parent" :
            						{
            							"row" :
            							{
            								"parent" :
            								{
            									"body" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"color" : nexacro.ColorObject("#666666"),
            														"border" : nexacro.BorderObject("1px solid #dbdee2"),
            														"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            													},
            													"mouseover" :
            													{
            													},
            													"disabled" :
            													{
            														"color" : nexacro.ColorObject("#777777")
            													},
            													"selected" :
            													{
            													},
            													"blinked" :
            													{
            														"color" : nexacro.ColorObject("#ffffff")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"selection" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"Grid" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("2px solid #125dae")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"summary" :
            			{
            				"parent" :
            				{
            					"Grid" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c8c1c2, 0px none, 0px none, 0px none")
            							}
            						}
            					}
            				}
            			},
            			"hscrollbar" :
            			{
            				"parent" :
            				{
            					"Grid" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #b1b1b1, 0px none, 0px none, 0px none")
            							}
            						}
            					}
            				}
            			},
            			"vscrollbar" :
            			{
            				"parent" :
            				{
            					"Grid" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 1px solid #b1b1b1")
            							}
            						}
            					}
            				}
            			},
            			"cellbutton" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 12pt/normal \"Noto Sans KR\""),
            								"color" : nexacro.ColorObject("#444444"),
            								"border" : nexacro.BorderObject("1px solid #c2c2c2"),
            								"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #a0a0a0")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #a0a0a0")
            							},
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#bbbbbb"),
            								"border" : nexacro.BorderObject("1px solid #d9d9d9")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 12pt/normal \"Noto Sans KR\""),
            								"color" : nexacro.ColorObject("#444444"),
            								"border" : nexacro.BorderObject("1px solid #c2c2c2"),
            								"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #a0a0a0")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #a0a0a0")
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#bbbbbb"),
            								"border" : nexacro.BorderObject("1px solid #d9d9d9")
            							}
            						}
            					}
            				}
            			},
            			"cellcalendar" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 12pt/normal \"Noto Sans KR\""),
            								"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 12pt/normal \"Noto Sans KR\""),
            								"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            							}
            						}
            					}
            				}
            			},
            			"cellcheckbox" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("normal 400 10pt/normal \"Noto Sans KR\""),
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px"),
            								"letterSpacing" : nexacro.CSSValueObject("-0.2px"),
            								"icon" : nexacro.UrlObject("url('theme://images/che_none.png')")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999"),
            								"icon" : nexacro.UrlObject("URL('theme://images/che_disabled.png')")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/che_focused.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/che_mouseover.png')")
            							},
            							"readonly" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/che_read.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/che_selected.png')")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 12pt/normal \"Noto Sans KR\""),
            								"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            							}
            						}
            					}
            				}
            			},
            			"cellcombo" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 12pt/normal \"Noto Sans KR\""),
            								"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 12pt/normal \"Noto Sans KR\""),
            								"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            							}
            						}
            					}
            				}
            			},
            			"listboxitem" :
            			{
            				"parent" :
            				{
            					"combolist" :
            					{
            						"parent" :
            						{
            							"cellcombo" :
            							{
            								"parent" :
            								{
            									"GridCellControl" :
            									{
            										"self" :
            										{
            											"mouseover" :
            											{
            											}
            										}
            									},
            									"ListViewCellControl" :
            									{
            										"self" :
            										{
            											"mouseover" :
            											{
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"ListBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#444444"),
            								"padding" : nexacro.PaddingObject("2px 9px 3px 9px")
            							},
            							"mouseover" :
            							{
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ListBoxControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#444444"),
            								"padding" : nexacro.PaddingObject("2px 9px 3px 9px")
            							},
            							"mouseover" :
            							{
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"celledit" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 12pt/normal \"Noto Sans KR\""),
            								"border" : nexacro.BorderObject("1px solid #d5d5d5"),
            								"padding" : nexacro.PaddingObject("1px 9px 0px 9px"),
            								"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #5a86cd")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #5a86cd")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 12pt/normal \"Noto Sans KR\""),
            								"border" : nexacro.BorderObject("1px solid #d5d5d5"),
            								"padding" : nexacro.PaddingObject("1px 9px 0px 9px"),
            								"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #5a86cd")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #5a86cd")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					}
            				}
            			},
            			"cellexpandbutton" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#ffffff"),
            								"textPadding" : nexacro.PaddingObject("0px 0px 1px 4px"),
            								"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            								"letterSpacing" : nexacro.CSSValueObject("0.2px")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Grdexpand.png')")
            							}
            						}
            					}
            				}
            			},
            			"cellmaskedit" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 10pt/normal \"Noto Sans KR\""),
            								"border" : nexacro.BorderObject("1px solid #d5d5d5"),
            								"padding" : nexacro.PaddingObject("1px 9px 0px 9px"),
            								"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #5a86cd")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #5a86cd")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 12pt/normal \"Noto Sans KR\""),
            								"border" : nexacro.BorderObject("1px solid #d5d5d5"),
            								"padding" : nexacro.PaddingObject("1px 9px 0px 9px"),
            								"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #5a86cd")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #5a86cd")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					}
            				}
            			},
            			"cellprogressbar" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 12pt/normal \"Noto Sans KR\""),
            								"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 12pt/normal \"Noto Sans KR\""),
            								"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            							}
            						}
            					}
            				}
            			},
            			"celltextarea" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 12pt/normal \"Noto Sans KR\""),
            								"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 12pt/normal \"Noto Sans KR\""),
            								"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            							}
            						}
            					}
            				}
            			},
            			"celltreeline" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px dotted #909090")
            							}
            						}
            					}
            				}
            			},
            			"groupboxcontents" :
            			{
            				"parent" :
            				{
            					"GroupBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #d6d4d5")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"groupboxtitle" :
            			{
            				"parent" :
            				{
            					"GroupBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 4px 0px 4px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					}
            				}
            			},
            			"ImageViewer" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"imagetext" :
            			{
            				"parent" :
            				{
            					"ImageViewer" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					}
            				}
            			},
            			"ListBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a86cd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a86cd")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"ListBoxControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a86cd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a86cd")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"MaskEdit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e2e2e2"),
            						"padding" : nexacro.PaddingObject("1px 5px"),
            						"color" : nexacro.ColorObject("#222222")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d9d9d9")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #ededed")
            					}
            				}
            			},
            			"MaskEditControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"padding" : nexacro.PaddingObject("1px 5px")
            					}
            				}
            			},
            			"Menu" :
            			{
            				"self" :
            				{
            					"disabled" :
            					{
            					}
            				}
            			},
            			"prevbutton" :
            			{
            				"parent" :
            				{
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 5px 0px 15px"),
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menuprev.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menuprev_O.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menuprev_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menuprev_D.png')")
            							}
            						}
            					},
            					"menupopupmenu" :
            					{
            						"parent" :
            						{
            							"Menu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev.png')")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev_O.png')")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev_D.png')")
            									}
            								}
            							}
            						}
            					},
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev2.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev2_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev2_D.png')")
            							}
            						}
            					},
            					"PopupMenuControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev2.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev2_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev2_D.png')")
            							}
            						}
            					},
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 9px 0px"),
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Tabprev.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Tabprev_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Tabprev_D.png')")
            							}
            						}
            					},
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calprev.png')")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calprev_O.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calprev_O.png')")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calprev.png')")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"nextbutton" :
            			{
            				"parent" :
            				{
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 15px 0px 5px"),
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menunext.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menunext_O.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menunext_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menunext_D.png')")
            							}
            						}
            					},
            					"menupopupmenu" :
            					{
            						"parent" :
            						{
            							"Menu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext.png')")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext_O.png')")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext_D.png')")
            									}
            								}
            							}
            						}
            					},
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext2.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext2_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext2_D.png')")
            							}
            						}
            					},
            					"PopupMenuControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext2.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext2_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext2_D.png')")
            							}
            						}
            					},
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 9px 4px"),
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Tabnext.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Tabnext_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Tabnext_D.png')")
            							}
            						}
            					},
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calnext.png')")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calnext_O.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calnext_O.png')")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calnext.png')")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"menuitem" :
            			{
            				"parent" :
            				{
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 700 13pt/normal \"Noto Sans KR\""),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"padding" : nexacro.PaddingObject("0px 30px 0px 30px"),
            								"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#c7d4e2")
            							},
            							"mouseover" :
            							{
            							},
            							"selected" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"menupopupmenu" :
            			{
            				"parent" :
            				{
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 12pt/normal \"Noto Sans KR\""),
            								"color" : nexacro.ColorObject("#444444"),
            								"border" : nexacro.BorderObject("1px solid #034389"),
            								"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitem" :
            			{
            				"parent" :
            				{
            					"menupopupmenu" :
            					{
            						"parent" :
            						{
            							"Menu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#c3e0ff"),
            										"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #2065ae, 0px none"),
            										"padding" : nexacro.PaddingObject("3px 8px 3px 8px")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"focused" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"selected" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#2665af")
            									}
            								}
            							}
            						}
            					},
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#444444"),
            								"padding" : nexacro.PaddingObject("3px 9px 3px 9px")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"mouseover" :
            							{
            							},
            							"focused" :
            							{
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						},
            						"class" :
            						[
            							{
            								"pme1" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("1px dashed #e5e5e5,0px solid #ffffff"),
            											"padding" : nexacro.PaddingObject("6px 30px 6px 11px")
            										}
            									}
            								}
            							}
            						]
            					},
            					"PopupMenuControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#444444"),
            								"padding" : nexacro.PaddingObject("3px 9px 3px 9px")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"mouseover" :
            							{
            							},
            							"focused" :
            							{
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemcheckbox" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"menupopupmenu" :
            							{
            								"parent" :
            								{
            									"Menu" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"padding" : nexacro.PaddingObject("0px 7px 0px 0px"),
            												"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Popupmenu_O.png')")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Popupmenu_O.png')")
            											}
            										}
            									}
            								}
            							},
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"mouseover" :
            									{
            									},
            									"disabled" :
            									{
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"mouseover" :
            									{
            									},
            									"disabled" :
            									{
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemtext" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"menupopupmenu" :
            							{
            								"parent" :
            								{
            									"Menu" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"color" : nexacro.ColorObject("#c3e0ff"),
            												"padding" : nexacro.PaddingObject("0px 20px 0px 0px")
            											},
            											"mouseover" :
            											{
            												"color" : nexacro.ColorObject("#ffffff")
            											},
            											"disabled" :
            											{
            												"color" : nexacro.ColorObject("#2665af")
            											}
            										}
            									}
            								}
            							},
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("2px 10px 1px 4px")
            									}
            								},
            								"class" :
            								[
            									{
            										"pme1" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"font" : nexacro.FontObject("normal 500 11pt/normal \"Noto Sans KR\""),
            													"color" : nexacro.ColorObject("#222222")
            												},
            												"mouseover" :
            												{
            													"color" : nexacro.ColorObject("#1274c4")
            												}
            											}
            										}
            									}
            								]
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("2px 10px 1px 4px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemhotkeytext" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"menupopupmenu" :
            							{
            								"parent" :
            								{
            									"Menu" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"color" : nexacro.ColorObject("#6d95cc"),
            												"padding" : nexacro.PaddingObject("0px 7px 0px 0px")
            											},
            											"mouseover" :
            											{
            												"color" : nexacro.ColorObject("#ffffff")
            											},
            											"disabled" :
            											{
            												"color" : nexacro.ColorObject("#4577b9")
            											}
            										}
            									}
            								}
            							},
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#aaaaaa"),
            										"padding" : nexacro.PaddingObject("0px 7px 0px 0px")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#4577b9")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#aaaaaa"),
            										"padding" : nexacro.PaddingObject("0px 7px 0px 0px")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#4577b9")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemexpandimage" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"menupopupmenu" :
            							{
            								"parent" :
            								{
            									"Menu" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popupexpand2.png')")
            											}
            										}
            									}
            								}
            							},
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popupexpand2.png')")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popupexpand2.png')")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Plugin" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5")
            					}
            				}
            			},
            			"PluginControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5")
            					}
            				}
            			},
            			"PopupMenu" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"font" : nexacro.FontObject("normal 400 12pt/normal \"Noto Sans KR\""),
            						"color" : nexacro.ColorObject("#444444"),
            						"border" : nexacro.BorderObject("1px solid #b5b5b5"),
            						"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            					}
            				},
            				"class" :
            				[
            					{
            						"pme1" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px dashed #e5e5e5,0px none"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("normal 500 12pt/normal \"Noto Sans KR\""),
            									"padding" : nexacro.PaddingObject("14px 12px")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#168ef0"),
            									"font" : nexacro.FontObject("normal 800 12pt/normal \"Noto Sans KR\"")
            								}
            							}
            						}
            					}
            				]
            			},
            			"PopupMenuControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"font" : nexacro.FontObject("normal 400 12pt/normal \"Noto Sans KR\""),
            						"color" : nexacro.ColorObject("#444444"),
            						"border" : nexacro.BorderObject("1px solid #b5b5b5"),
            						"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            					}
            				}
            			},
            			"ProgressBar" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #aeaeae, 1px solid #d2d0d1, 1px solid #d2d0d1, 1px solid #d2d0d1")
            					}
            				}
            			},
            			"ProgressBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #aeaeae, 1px solid #d2d0d1, 1px solid #d2d0d1, 1px solid #d2d0d1")
            					}
            				}
            			},
            			"progressbaritem" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"progressbartext" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							}
            						}
            					}
            				}
            			},
            			"radioitem" :
            			{
            				"parent" :
            				{
            					"Radio" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/rdo_WF_Radio.png')"),
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/rdo_WF_Radio_S.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/rdo_WF_Radio_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/rdo_WF_Radio_D.png')")
            							},
            							"disabled_selected" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/rdo_WF_Radio_DS.png')")
            							}
            						}
            					}
            				}
            			},
            			"Sketch" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"Spin" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e2e2e2"),
            						"color" : nexacro.ColorObject("#222222")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a86cd")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d9d9d9")
            					}
            				}
            			},
            			"spinedit" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("1px 2px 0px 9px")
            							}
            						}
            					},
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"font" : nexacro.FontObject("normal 700 10pt/normal \"Noto Sans KR\""),
            												"color" : nexacro.ColorObject("#ffffff")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"font" : nexacro.FontObject("normal 700 10pt/normal \"Noto Sans KR\""),
            												"color" : nexacro.ColorObject("#ffffff")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"spinupbutton" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("1px 0px 0px 0px"),
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_O.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_P.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_D.png')")
            							}
            						}
            					},
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"padding" : nexacro.PaddingObject("0px 10px 0px 5px"),
            												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup.png')")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup_O.png')")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup_O.png')")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup_D.png')")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"padding" : nexacro.PaddingObject("0px 10px 0px 5px"),
            												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup.png')")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup_O.png')")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup_O.png')")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup_D.png')")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"spindownbutton" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 2px 0px"),
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_O.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_P.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_D.png')")
            							}
            						}
            					},
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"padding" : nexacro.PaddingObject("0px 10px 0px 5px"),
            												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown.png')")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown_O.png')")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown_O.png')")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown_D.png')")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"padding" : nexacro.PaddingObject("0px 10px 0px 5px"),
            												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown.png')")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown_O.png')")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown_O.png')")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown_D.png')")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Static" :
            			{
            				"self" :
            				{
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"StaticControl" :
            			{
            				"self" :
            				{
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"TextArea" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e2e2e2"),
            						"padding" : nexacro.PaddingObject("2px 5px"),
            						"color" : nexacro.ColorObject("#222222"),
            						"font" : nexacro.FontObject("normal 400 10pt/normal \"Noto Sans KR\"")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a86cd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a86cd")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d9d9d9")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#222222")
            					}
            				}
            			},
            			"TextAreaControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e2e2e2"),
            						"padding" : nexacro.PaddingObject("2px 5px"),
            						"color" : nexacro.ColorObject("#222222"),
            						"font" : nexacro.FontObject("normal 400 10pt/normal \"Noto Sans KR\"")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a86cd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a86cd")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d9d9d9")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#222222")
            					}
            				}
            			},
            			"WebBrowser" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5")
            					}
            				}
            			},
            			"WebBrowserControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5")
            					}
            				}
            			},
            			"extrabutton" :
            			{
            				"parent" :
            				{
            					"tabbuttonitem" :
            					{
            						"parent" :
            						{
            							"Tab" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            										"icon" : nexacro.UrlObject("URL('theme://images/btn_Tabextra_off.png')")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/btn_Tabextra_on.png')")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/btn_Tabextra_off.png')")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"head" :
            			{
            				"parent" :
            				{
            					"DatePickerControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("5px 0px 0px 0px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#cdcdcd")
            							}
            						}
            					}
            				}
            			},
            			"yearstatic" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("normal 14pt/normal \"Noto Sans KR\""),
            										"color" : nexacro.ColorObject("#ffffff"),
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#c7d4e2")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"monthstatic" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("normal 14pt/normal \"Noto Sans KR\""),
            										"color" : nexacro.ColorObject("#ffffff"),
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#c7d4e2")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"body" :
            			{
            				"parent" :
            				{
            					"DatePickerControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #125dae, 1px solid #697888, 1px solid #697888, 1px solid #697888")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #98a6b5")
            							}
            						}
            					},
            					"ListView" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none")
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					}
            				}
            			},
            			"weekband" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"disabled" :
            									{
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"weekitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#48afff")
            									},
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#ff7986")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#c7d4e2")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"dayitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#333333"),
            										"font" : nexacro.FontObject("normal 400 10pt/normal \"Noto Sans KR\"")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"focused" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"selected" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"today" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#269bee")
            									},
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#ff4c5e")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#cdcdcd")
            									},
            									"disabled_selected" :
            									{
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"VScrollBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #b1b1b1")
            					}
            				}
            			},
            			"HScrollBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #b1b1b1"),
            						"padding" : nexacro.PaddingObject("2px 2px 2px 2px")
            					}
            				}
            			},
            			"incbutton" :
            			{
            				"parent" :
            				{
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Vinc.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Vinc_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Vinc_D.png')")
            							}
            						}
            					},
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Hinc.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Hinc_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Hinc_D.png')")
            							}
            						}
            					}
            				}
            			},
            			"decbutton" :
            			{
            				"parent" :
            				{
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Vdec.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Vdec_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Vdec_D.png')")
            							}
            						}
            					},
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Hdec.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Hdec_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Hdec_D.png')")
            							}
            						}
            					}
            				}
            			},
            			"trackbar" :
            			{
            				"parent" :
            				{
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c8c8c8")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("1px solid #888888"),
            								"padding" : nexacro.PaddingObject("2px 2px 2px 2px")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #888888"),
            								"padding" : nexacro.PaddingObject("2px 2px 2px 2px")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("1px solid #888888"),
            								"padding" : nexacro.PaddingObject("2px 2px 2px 2px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #a8a8a8")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #d8d8d8")
            							}
            						}
            					},
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c8c8c8")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("1px solid #888888"),
            								"padding" : nexacro.PaddingObject("2px 2px 2px 2px")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #888888"),
            								"padding" : nexacro.PaddingObject("2px 2px 2px 2px")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("1px solid #888888"),
            								"padding" : nexacro.PaddingObject("2px 2px 2px 2px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #a8a8a8")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #d8d8d8")
            							}
            						}
            					},
            					"VScrollIndicatorControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("2px solid transparent")
            							},
            							"pushed" :
            							{
            							},
            							"mouseover" :
            							{
            							}
            						}
            					},
            					"HScrollIndicatorControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("2px solid transparent")
            							},
            							"pushed" :
            							{
            							},
            							"mouseover" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"progressbar" :
            			{
            				"parent" :
            				{
            					"StatusBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #afaeae, 1px solid #d2d0d0, 1px solid #d2d0d0, 1px solid #d2d0d0")
            							}
            						}
            					}
            				}
            			},
            			"resizegrip" :
            			{
            				"parent" :
            				{
            					"StatusBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_grip.png\")")
            							}
            						}
            					}
            				}
            			},
            			"TitleBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"font" : nexacro.FontObject("normal 700 12pt/normal \"Noto Sans KR\""),
            						"color" : nexacro.ColorObject("#ffffff"),
            						"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            						"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            					}
            				}
            			},
            			"minbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Min.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Min_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Min_D.png')")
            							}
            						}
            					}
            				}
            			},
            			"normalbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Normal.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Normal_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Normal_D.png')")
            							}
            						}
            					}
            				}
            			},
            			"maxbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Max.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Max_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Max_D.png')")
            							}
            						}
            					}
            				}
            			},
            			"closebutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Close.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Close_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Close_D.png')")
            							}
            						}
            					}
            				}
            			},
            			"StepControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("0px 0px 10px 0px")
            					}
            				}
            			},
            			"stepitem" :
            			{
            				"parent" :
            				{
            					"StepControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem_S.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem_S.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem_S.png')")
            							}
            						}
            					}
            				}
            			},
            			"ListView" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
            						"color" : nexacro.ColorObject("#666666")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
            						"color" : nexacro.ColorObject("#666666")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a86cd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a86cd")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"detail" :
            			{
            				"parent" :
            				{
            					"ListView" :
            					{
            						"self" :
            						{
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none")
            							},
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
            								"font" : nexacro.FontObject("normal 400 12pt/normal \"Noto Sans KR\""),
            								"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					}
            				}
            			},
            			"expandbar" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"ListView" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop.png')"),
            										"border" : nexacro.BorderObject("1px solid #c2c2c2")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #a0a0a0")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #a0a0a0")
            									},
            									"pushed" :
            									{
            									},
            									"selected" :
            									{
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#bbbbbb"),
            										"border" : nexacro.BorderObject("1px solid #d9d9d9")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"treeitemtext" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"cell" :
            							{
            								"class" :
            								[
            									{
            										"treeMenuBlack" :
            										{
            											"parent" :
            											{
            												"row" :
            												{
            													"parent" :
            													{
            														"body" :
            														{
            															"parent" :
            															{
            																"Grid" :
            																{
            																	"self" :
            																	{
            																		"enabled" :
            																		{
            																			"font" : nexacro.FontObject("normal 700 10pt/normal \"Noto Sans KR\""),
            																			"color" : nexacro.ColorObject("#002a7b"),
            																			"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            																		}
            																	}
            																}
            															}
            														}
            													}
            												}
            											}
            										}
            									},
            									{
            										"treeMenuBlue" :
            										{
            											"parent" :
            											{
            												"row" :
            												{
            													"parent" :
            													{
            														"body" :
            														{
            															"parent" :
            															{
            																"Grid" :
            																{
            																	"self" :
            																	{
            																		"enabled" :
            																		{
            																			"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            																			"color" : nexacro.ColorObject("#ffffff"),
            																			"letterSpacing" : nexacro.CSSValueObject("-0.2px")
            																		}
            																	}
            																}
            															}
            														}
            													}
            												}
            											}
            										}
            									},
            									{
            										"treeMenuDefault" :
            										{
            											"parent" :
            											{
            												"row" :
            												{
            													"parent" :
            													{
            														"body" :
            														{
            															"parent" :
            															{
            																"Grid" :
            																{
            																	"self" :
            																	{
            																		"enabled" :
            																		{
            																			"color" : nexacro.ColorObject("#444444")
            																		}
            																	}
            																}
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"celltreeitem" :
            			{
            				"parent" :
            				{
            					"cell" :
            					{
            						"class" :
            						[
            							{
            								"treeMenuDefault" :
            								{
            									"parent" :
            									{
            										"row" :
            										{
            											"parent" :
            											{
            												"body" :
            												{
            													"parent" :
            													{
            														"Grid" :
            														{
            															"self" :
            															{
            																"focused" :
            																{
            																	"color" : nexacro.ColorObject("#2d5dbb")
            																}
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"CheckBoxControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/che_none.png')"),
            						"iconPosition" : "left",
            						"color" : nexacro.ColorObject("#222222"),
            						"font" : nexacro.FontObject("normal 400 10pt/normal \"Noto Sans KR\""),
            						"textPadding" : nexacro.PaddingObject("0px 0px 1px 3px"),
            						"border" : nexacro.BorderObject("0px solid #000000 !important")
            					},
            					"disabled" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/che_disabled.png')"),
            						"border" : nexacro.BorderObject("0px solid #000000 !important")
            					},
            					"mouseover" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/che_mouseover.png')"),
            						"border" : nexacro.BorderObject("0px solid #000000 !important")
            					},
            					"focused" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/che_focused.png')"),
            						"border" : nexacro.BorderObject("0px solid #000000 !important")
            					},
            					"readonly" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/che_read.png')"),
            						"border" : nexacro.BorderObject("0px solid #000000 !important")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/che_selected.png')"),
            						"border" : nexacro.BorderObject("0px solid #000000 !important")
            					}
            				}
            			},
            			"comboedit" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"class" :
            						[
            							{
            								"comboalign" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"color" : nexacro.ColorObject("#222222")
            										},
            										"disabled" :
            										{
            											"color" : nexacro.ColorObject("#222222")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			}
		},
		{
            "includeStatusMap" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();
        imgcache[nexacro._getImageLocation("theme://images/titlebar_icon_nexacro17.ico")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calendar.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calendar_D.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spinup.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spinup_O.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spinup_P.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spinup_D.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spindown.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spindown_O.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spindown_P.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spindown_D.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/che_none.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/che_mouseover.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/che_read.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/che_selected.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/che_disabled.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_Drop.png")] = { width:9, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_Drop_O.png")] = { width:9, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_Drop_P.png")] = { width:9, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menuprev.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menuprev_O.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menuprev_D.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menunext.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menunext_O.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menunext_D.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Menu_O.png")] = { width:19, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev_O.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev_D.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext_O.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext_D.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Popupmenu_O.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popupexpand2.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev2.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev2_O.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev2_D.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext2.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext2_O.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext2_D.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box_F.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box_D.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_S.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_O.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_D.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_DS.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Tabextra_off.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Tabextra_on.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabprev.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabprev_O.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabprev_D.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabnext.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabnext_O.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabnext_D.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calprev.png")] = { width:6, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calprev_O.png")] = { width:6, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calnext.png")] = { width:6, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calnext_O.png")] = { width:6, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspinup.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspinup_O.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspinup_D.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspindown.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspindown_O.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspindown_D.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vinc.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vinc_O.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vinc_D.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vdec.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vdec_O.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vdec_D.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hinc.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hinc_O.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hinc_D.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hdec.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hdec_O.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hdec_D.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/img_grip.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TF_TitleIcon.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Min.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Min_O.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Min_D.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal_O.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal_D.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Max.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Max_O.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Max_D.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Close.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Close_O.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Close_D.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Stepitem.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Stepitem_S.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Grdexpand.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_delete.png")] = { width:18, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_newdoc.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_function.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_list.png")] = { width:18, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_save.png")] = { width:19, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_search.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_worker15.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_training.png")] = { width:17, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_help.png")] = { width:14, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_note.png")] = { width:12, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_print.png")] = { width:18, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_manual.png")] = { width:14, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_remote.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_logout.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_eraser.png")] = { width:15, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_clock.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_excel.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/che_focused.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_refresh.png")] = { width:14, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_addimage.png")] = { width:21, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_delete_image.png")] = { width:21, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_eldery.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_chart.png")] = { width:25, height:23 };
        		imgcache[nexacro._getImageLocation("theme://btn_Tabextra_off.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://btn_Tabextra_on.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/03body.png")] = { width:416, height:459 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_close_blue.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_close_red.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_close_white.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_dropg.png")] = { width:72, height:34 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_dropr.png")] = { width:72, height:34 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_menuleft.png")] = { width:32, height:32 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_menu_right.png")] = { width:32, height:32 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_pulseg.png")] = { width:72, height:34 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_pulser.png")] = { width:72, height:34 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popupexpand.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabextra.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabextra_S.png")] = { width:8, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Treecollapse.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Treeexpand.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_win1.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_win2.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_win3.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_win4.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_win5.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/che_disabledc.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box_DS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box_O.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box_S.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Popupmenu.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_cal.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_customer.png")] = { width:20, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diaper_uncont.png")] = { width:43, height:39 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_sta_battery.png")] = { width:90, height:90 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_sta_battery2.png")] = { width:90, height:90 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_sta_diaper.png")] = { width:90, height:90 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_sta_diaper2.png")] = { width:90, height:90 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_sta_diapercon.png")] = { width:90, height:90 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_sta_diapercon2.png")] = { width:90, height:90 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_user.png")] = { width:20, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_van.png")] = { width:16, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_worker18.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Grdimg.png")] = { width:12, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Htrackbar.png")] = { width:8, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Htrackbar_D.png")] = { width:8, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Menuimage.png")] = { width:210, height:50 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Menuitem2.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Nexacro.png")] = { width:108, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Popupcheck.png")] = { width:7, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Popupcheck2.png")] = { width:7, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Treecollapse.png")] = { width:14, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Treeexpand.png")] = { width:14, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Treeitem.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Vtrackbar.png")] = { width:5, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Vtrackbar_D.png")] = { width:5, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/logo.png")] = { width:120, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_PopItemImg.png")] = { width:8, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/pme1_chev.png")] = { width:18, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/ttl_indicator.png")] = { width:4, height:16 };
	};
}
)();
