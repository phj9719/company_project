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
            						"color" : nexacro.ColorObject("#000000"),
            						"font" : nexacro.FontObject("normal 500 15pt/normal \"Noto Sans KR\"")
            					}
            				}
            			},
            			"MainFrame" :
            			{
            				"self" :
            				{
            					"deactivate" :
            					{
            						"border" : nexacro.BorderObject("2px solid #64b5f6")
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
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("normal 700 14pt/normal \"Noto Sans KR\""),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/titlebar_icon.png\")"),
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
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
            						"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            					},
            					"deactivate" :
            					{
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
            								"border" : nexacro.BorderObject("1px solid transparent"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_min_N.png\")")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("1px solid transparent"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_min_P.png\")")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid transparent"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_min_O.png\")")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid transparent"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_min_D.png\")")
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
            								"border" : nexacro.BorderObject("1px solid transparent"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_max_N.png\")")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("1px solid transparent"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_max_P.png\")")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid transparent"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_max_O.png\")")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid transparent"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_max_D.png\")")
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
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_normal_N.png\")")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("1px solid transparent"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_normal_P.png\")")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid transparent"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_normal_O.png\")")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid transparent"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_normal_D.png\")")
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
            								"border" : nexacro.BorderObject("1px solid transparent"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_close_N.png\")")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("1px solid transparent"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_close_P.png\")")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid transparent"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_close_O.png\")")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid transparent"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_close_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"StatusBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e0e0e0"),
            						"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
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
            								"icon" : nexacro.UrlObject("url(\"theme://images/img_grip.png\")")
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
            								"border" : nexacro.BorderObject("5px solid transparent"),
            								"color" : nexacro.ColorObject("#000000")
            							}
            						}
            					}
            				}
            			},
            			"progressbartext" :
            			{
            				"parent" :
            				{
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
            										"font" : nexacro.FontObject("normal 700 8pt/normal \"Noto Sans KR\""),
            										"color" : nexacro.ColorObject("#ffffff")
            									}
            								}
            							}
            						}
            					},
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 700 8pt/normal \"Noto Sans KR\""),
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
            								"font" : nexacro.FontObject("normal 700 8pt/normal \"Noto Sans KR\""),
            								"color" : nexacro.ColorObject("#ffffff")
            							}
            						}
            					}
            				}
            			},
            			"Static" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"color" : nexacro.ColorObject("#333333"),
            						"font" : nexacro.FontObject("normal 500 15pt/normal \"Noto Sans KR\"")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#9a9a9a")
            					}
            				},
            				"class" :
            				[
            					{
            						"sta_title" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 700 18pt/normal \"Noto Sans KR\""),
            									"color" : nexacro.ColorObject("#082c71")
            								}
            							}
            						}
            					},
            					{
            						"sta_txt" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 500 14.5pt/normal \"Noto Sans KR\""),
            									"color" : nexacro.ColorObject("#7d7f97"),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								}
            							}
            						}
            					},
            					{
            						"sta1_mDataHForm1" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 700 15pt/normal \"Noto Sans KR\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"sta1_mDataHForm2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 700 15pt/normal \"Noto Sans KR\""),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none,1px solid #f3fbf3,0px none,0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta1_mDataHForm3" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 700 15pt/normal \"Noto Sans KR\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"sta1_mDataBForm1" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 500 13.5pt/normal \"Noto Sans KR\""),
            									"color" : nexacro.ColorObject("#7d7f97")
            								}
            							}
            						}
            					},
            					{
            						"sta1_mDataBForm2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 500 13.5pt/normal \"Noto Sans KR\""),
            									"color" : nexacro.ColorObject("#7d7f97"),
            									"border" : nexacro.BorderObject("0px none,1px solid #9ee2a9,0px none,0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta1_mDataBForm3" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 500 13.5pt/normal \"Noto Sans KR\""),
            									"color" : nexacro.ColorObject("#7d7f97"),
            									"border" : nexacro.BorderObject("0px none,0px none,1px solid #9ee2a9")
            								}
            							}
            						}
            					},
            					{
            						"sta1_mDataBForm4" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 500 13.5pt/normal \"Noto Sans KR\""),
            									"color" : nexacro.ColorObject("#7d7f97")
            								}
            							}
            						}
            					},
            					{
            						"sta2_mDataHForm1" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 700 15pt/normal \"Noto Sans KR\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"sta2_mDataHForm2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 700 15pt/normal \"Noto Sans KR\""),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none,1px solid #ffffff,0px none,0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta2_mDataHForm3" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 700 15pt/normal \"Noto Sans KR\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"sta2_mDataBForm1" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 500 14pt/normal \"Noto Sans KR\""),
            									"color" : nexacro.ColorObject("#7d7f97"),
            									"border" : nexacro.BorderObject("0px none,1px solid #cccccc,1px solid #cccccc,0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta2_mDataBForm2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 500 14pt/normal \"Noto Sans KR\""),
            									"color" : nexacro.ColorObject("#7d7f97"),
            									"border" : nexacro.BorderObject("0px none,1px solid #cccccc,0px none,0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta2_mDataBForm3" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 500 14pt/normal \"Noto Sans KR\""),
            									"color" : nexacro.ColorObject("#7d7f97")
            								}
            							}
            						}
            					},
            					{
            						"sta2_mDataBForm4" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 500 14pt/normal \"Noto Sans KR\""),
            									"color" : nexacro.ColorObject("#7d7f97"),
            									"border" : nexacro.BorderObject("0px none,1px solid #cccccc,0px none,0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta2_mDataBForm5" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 500 14pt/normal \"Noto Sans KR\""),
            									"color" : nexacro.ColorObject("#7d7f97")
            								}
            							}
            						}
            					},
            					{
            						"sta_title2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 700 16pt/normal \"Noto Sans KR\""),
            									"color" : nexacro.ColorObject("#082c71")
            								}
            							}
            						}
            					},
            					{
            						"sta_pop_title" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 700 18pt/normal \"Noto Sans KR\""),
            									"color" : nexacro.ColorObject("#082c71")
            								}
            							}
            						}
            					},
            					{
            						"sta_pop_txt" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 500 14.5pt/normal \"Noto Sans KR\""),
            									"color" : nexacro.ColorObject("#7d7f97"),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								}
            							}
            						}
            					}
            				]
            			},
            			"StaticControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"color" : nexacro.ColorObject("#333333"),
            						"font" : nexacro.FontObject("normal 500 15pt/normal \"Noto Sans KR\"")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#9a9a9a")
            					}
            				}
            			},
            			"Edit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #cccccc, 0px none"),
            						"padding" : nexacro.PaddingObject("0px 3px"),
            						"font" : nexacro.FontObject("normal 500 16pt/normal \"Noto Sans KR\""),
            						"color" : nexacro.ColorObject("#7d7f97")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #cccccc, 0px none"),
            						"color" : nexacro.ColorObject("#7d7f97")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #cccccc, 0px none"),
            						"color" : nexacro.ColorObject("#7d7f97")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #cccccc, 0px none")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#9a9a9a"),
            						"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #cccccc, 0px none")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#a9a9a9")
            					}
            				}
            			},
            			"MaskEdit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #c0c0c0, 0px none"),
            						"padding" : nexacro.PaddingObject("0px 3px 0px 3px"),
            						"color" : nexacro.ColorObject("#7d7f97"),
            						"font" : nexacro.FontObject("normal 500 16pt/normal \"Noto Sans KR\"")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #cccccc, 0px none"),
            						"color" : nexacro.ColorObject("#7d7f97")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #cccccc, 0px none"),
            						"color" : nexacro.ColorObject("#7d7f97")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#9a9a9a"),
            						"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #cccccc, 0px none")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#a9a9a9")
            					}
            				}
            			},
            			"TextArea" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #bdbdbd"),
            						"padding" : nexacro.PaddingObject("3px 3px 3px 3px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #1565c0")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc"),
            						"color" : nexacro.ColorObject("#999999")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c0c0c0"),
            						"color" : nexacro.ColorObject("#333333")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#a9a9a9")
            					}
            				}
            			},
            			"TextAreaControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #bdbdbd"),
            						"padding" : nexacro.PaddingObject("3px 3px 3px 3px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #1565c0")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc"),
            						"color" : nexacro.ColorObject("#999999")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c0c0c0"),
            						"color" : nexacro.ColorObject("#333333")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#a9a9a9")
            					}
            				}
            			},
            			"EditControl" :
            			{
            				"self" :
            				{
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#a9a9a9")
            					}
            				}
            			},
            			"MaskEditControl" :
            			{
            				"self" :
            				{
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#a9a9a9")
            					}
            				}
            			},
            			"Spin" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c0c0c0")
            					},
            					"readonly" :
            					{
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #136cc8")
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
            								"color" : nexacro.ColorObject("#9a9a9a")
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
            												"font" : nexacro.FontObject("normal 500 12pt/normal \"Noto Sans KR\""),
            												"color" : nexacro.ColorObject("#333333"),
            												"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            											},
            											"mouseover" :
            											{
            												"font" : nexacro.FontObject("normal 500 12pt/normal \"Noto Sans KR\""),
            												"color" : nexacro.ColorObject("#333333"),
            												"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            											},
            											"disabled" :
            											{
            												"color" : nexacro.ColorObject("#9a9a9a")
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
            												"font" : nexacro.FontObject("normal 500 12pt/normal \"Noto Sans KR\""),
            												"color" : nexacro.ColorObject("#333333"),
            												"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            											},
            											"mouseover" :
            											{
            												"font" : nexacro.FontObject("normal 500 12pt/normal \"Noto Sans KR\""),
            												"color" : nexacro.ColorObject("#333333"),
            												"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            											},
            											"disabled" :
            											{
            												"color" : nexacro.ColorObject("#9a9a9a")
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
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_P.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_N.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_D.png\")")
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
            												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_N.png\")")
            											},
            											"mouseover" :
            											{
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_P.png\")")
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
            												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_N.png\")")
            											},
            											"mouseover" :
            											{
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_P.png\")")
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
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_P.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_N.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_D.png\")")
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
            												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_N.png\")")
            											},
            											"mouseover" :
            											{
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_P.png\")")
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
            												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_N.png\")")
            											},
            											"mouseover" :
            											{
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_P.png\")")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"tabpage" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("2px solid #c9c9c9,0px none,0px none")
            							}
            						}
            					}
            				}
            			},
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
            								"font" : nexacro.FontObject("normal 700 16pt/normal \"Noto Sans KR\""),
            								"padding" : nexacro.PaddingObject("3px"),
            								"border" : nexacro.BorderObject("0px none,0px none,2px solid #cccccc")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none,0px none,4px solid #082c71"),
            								"color" : nexacro.ColorObject("#082c71")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("0px none,0px none,4px solid #082c71"),
            								"color" : nexacro.ColorObject("#082c71")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none,0px none,2px solid #082c71"),
            								"color" : nexacro.ColorObject("#082c71")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#cfcfcf")
            							}
            						}
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
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabExtra_N.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabExtra_O.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabExtra_D.png\")")
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
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cccccc"),
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabnext_N.png\")"),
            								"padding" : nexacro.PaddingObject("3px")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #e5e5e5"),
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabnext_N.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabnext_N.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabnext_N.png\")")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("1px solid #606060"),
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabnext_P.png\")")
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
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_next_N.png\")")
            									},
            									"pushed" :
            									{
            									},
            									"disabled" :
            									{
            									}
            								}
            							}
            						}
            					},
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_menunext_N.png\")"),
            								"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_menunext_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_menunext_D.png\")")
            							}
            						}
            					},
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenunext_N.png\")"),
            								"padding" : nexacro.PaddingObject("5px 0px 5px 0px")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenunext_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenunext_D.png\")")
            							}
            						}
            					},
            					"PopupMenuControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenunext_N.png\")"),
            								"padding" : nexacro.PaddingObject("5px 0px 5px 0px")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenunext_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenunext_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"prevbutton" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cccccc"),
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabprev_N.png\")"),
            								"padding" : nexacro.PaddingObject("3px")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #e5e5e5"),
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabprev_N.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabprev_N.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabprev_N.png\")")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("1px solid #606060"),
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabprev_P.png\")")
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
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_prev_N.png\")")
            									},
            									"pushed" :
            									{
            									},
            									"disabled" :
            									{
            									}
            								}
            							}
            						}
            					},
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_menuprev_N.png\")"),
            								"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_menuprev_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_menuprev_D.png\")")
            							}
            						}
            					},
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenuprev_N.png\")"),
            								"padding" : nexacro.PaddingObject("5px 0px 5px 0px")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenuprev_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenuprev_D.png\")")
            							}
            						}
            					},
            					"PopupMenuControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenuprev_N.png\")"),
            								"padding" : nexacro.PaddingObject("5px 0px 5px 0px")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenuprev_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenuprev_D.png\")")
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
            						"textPadding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            						"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_NN.png\")"),
            						"font" : nexacro.FontObject("normal 500 14.5pt/normal \"Noto Sans KR\""),
            						"color" : nexacro.ColorObject("#7d7f97"),
            						"letterSpacing" : nexacro.CSSValueObject("-1px")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_NS.png\")")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#9a9a9a"),
            						"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_DN.png\")")
            					},
            					"disabled_selected" :
            					{
            						"color" : nexacro.ColorObject("#9a9a9a"),
            						"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_DS.png\")")
            					}
            				}
            			},
            			"CheckBoxControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"textPadding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            						"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_NN.png\")"),
            						"font" : nexacro.FontObject("normal 500 14.5pt/normal \"Noto Sans KR\""),
            						"color" : nexacro.ColorObject("#7d7f97"),
            						"letterSpacing" : nexacro.CSSValueObject("-1px")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_NS.png\")")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#9a9a9a"),
            						"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_DN.png\")")
            					},
            					"disabled_selected" :
            					{
            						"color" : nexacro.ColorObject("#9a9a9a"),
            						"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_DS.png\")")
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
            								"color" : nexacro.ColorObject("#232323"),
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_Radio_NN.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_Radio_NS.png\")")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#9c9c9c"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_Radio_DN.png\")")
            							},
            							"disabled_selected" :
            							{
            								"color" : nexacro.ColorObject("#9c9c9c"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_Radio_DS.png\")")
            							}
            						}
            					}
            				}
            			},
            			"calendaredit" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 500 16pt/normal \"Noto Sans KR\""),
            								"color" : nexacro.ColorObject("#7d7f97")
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 500 16pt/normal \"Noto Sans KR\""),
            								"color" : nexacro.ColorObject("#7d7f97")
            							}
            						}
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
            								"icon" : nexacro.UrlObject("url(\"theme://images/ico_diary_cal.png\")")
            							},
            							"mouseover" :
            							{
            							}
            						},
            						"class" :
            						[
            							{
            								"calendar2" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"icon" : nexacro.UrlObject("url(\"theme://images/ico_visit_cal.png\")")
            										}
            									}
            								}
            							}
            						]
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/ico_diary_cal.png\")")
            							},
            							"mouseover" :
            							{
            							}
            						}
            					},
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_drop_N.png\")")
            							},
            							"mouseover" :
            							{
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_drop_D.png\")")
            							}
            						}
            					},
            					"ComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_drop_N.png\")")
            							},
            							"mouseover" :
            							{
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_drop_D.png\")")
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
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_D.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_N.png\")")
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_D.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_N.png\")")
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
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_D.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_N.png\")")
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_D.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_N.png\")")
            							}
            						}
            					}
            				}
            			},
            			"DatePickerControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e5e5e5"),
            						"color" : nexacro.ColorObject("#000000")
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
            								"font" : nexacro.FontObject("normal 700 14pt/normal \"Noto Sans KR\""),
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"Grid" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid transparent")
            							}
            						},
            						"class" :
            						[
            							{
            								"grid2" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid transparent")
            										}
            									}
            								}
            							},
            							{
            								"grd_grin" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid transparent")
            										}
            									}
            								}
            							}
            						]
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
            										"font" : nexacro.FontObject("normal 700 14pt/normal \"Noto Sans KR\""),
            										"color" : nexacro.ColorObject("#ffffff")
            									}
            								}
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
            										"font" : nexacro.FontObject("normal 700 14pt/normal \"Noto Sans KR\""),
            										"color" : nexacro.ColorObject("#ffffff")
            									}
            								}
            							}
            						}
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
            										"border" : nexacro.BorderObject("1px solid #cccccc")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #cccccc")
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
            										"border" : nexacro.BorderObject("1px solid #cccccc")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #cccccc")
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
            								"font" : nexacro.FontObject("normal 700 14pt/normal \"Noto Sans KR\""),
            								"color" : nexacro.ColorObject("#878787")
            							}
            						}
            					},
            					"Grid" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid transparent")
            							}
            						}
            					},
            					"ListView" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
            								"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\"")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
            								"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\"")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
            								"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
            								"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\"")
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
            										"font" : nexacro.FontObject("normal 500 8pt/normal \"Noto Sans KR\""),
            										"color" : nexacro.ColorObject("#878787")
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
            										"font" : nexacro.FontObject("normal 700 8pt/normal \"Noto Sans KR\""),
            										"color" : nexacro.ColorObject("#313131"),
            										"border" : nexacro.BorderObject("0px solid #0078d6")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #0b7ed7")
            									},
            									"selected" :
            									{
            										"border" : nexacro.BorderObject("1px solid #0078d6"),
            										"font" : nexacro.FontObject("normal 700 8pt/normal \"Noto Sans KR\""),
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#cccccc")
            									},
            									"today" :
            									{
            										"border" : nexacro.BorderObject("1px solid #0078d6")
            									},
            									"trailingday" :
            									{
            										"color" : nexacro.ColorObject("#999999")
            									}
            								}
            							}
            						}
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
            								"border" : nexacro.BorderObject("3px solid #f2f2f2"),
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vinc_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vinc_P.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vinc_O.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vinc_D.png\")")
            							}
            						}
            					},
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("3px solid #f2f2f2"),
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hinc_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hinc_P.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hinc_O.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hinc_D.png\")")
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
            								"border" : nexacro.BorderObject("3px solid #f2f2f2"),
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vdec_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vdec_P.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vdec_O.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vdec_D.png\")")
            							}
            						}
            					},
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("3px solid #f2f2f2"),
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hdec_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hdec_P.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hdec_O.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hdec_D.png\")")
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
            								"border" : nexacro.BorderObject("0px none, 3px solid transparent, 0px none, 3px solid transparent")
            							},
            							"pushed" :
            							{
            							},
            							"mouseover" :
            							{
            							}
            						}
            					},
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("3px solid transparent, 0px none, 3px solid transparent, 0px none")
            							},
            							"pushed" :
            							{
            							},
            							"mouseover" :
            							{
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
            			"Combo" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #cccccc, 0px none"),
            						"font" : nexacro.FontObject("normal 500 16pt/normal \"Noto Sans KR\""),
            						"color" : nexacro.ColorObject("#7d7f97"),
            						"letterSpacing" : nexacro.CSSValueObject("-0.5px")
            					},
            					"readonly" :
            					{
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#919191")
            					}
            				},
            				"class" :
            				[
            					{
            						"read" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"readonly" :
            								{
            								}
            							}
            						}
            					}
            				]
            			},
            			"ComboControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #cccccc, 0px none"),
            						"font" : nexacro.FontObject("normal 500 16pt/normal \"Noto Sans KR\""),
            						"color" : nexacro.ColorObject("#7d7f97"),
            						"letterSpacing" : nexacro.CSSValueObject("-0.5px")
            					},
            					"readonly" :
            					{
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#919191")
            					}
            				}
            			},
            			"comboedit" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#7d7f97"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 3px"),
            								"font" : nexacro.FontObject("normal 500 16pt/normal \"Noto Sans KR\"")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#cccccc")
            							}
            						}
            					},
            					"ComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#7d7f97"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 3px"),
            								"font" : nexacro.FontObject("normal 500 16pt/normal \"Noto Sans KR\"")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#cccccc")
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
            						"border" : nexacro.BorderObject("1px solid #c0c0c0")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc"),
            						"color" : nexacro.ColorObject("#9d9d9d")
            					}
            				}
            			},
            			"ListBoxControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c0c0c0")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc"),
            						"color" : nexacro.ColorObject("#9d9d9d")
            					}
            				}
            			},
            			"listboxitem" :
            			{
            				"parent" :
            				{
            					"ListBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 500 12pt/normal \"Noto Sans KR\""),
            								"color" : nexacro.ColorObject("#2f2f2f"),
            								"padding" : nexacro.PaddingObject("3px 3px 3px 3px")
            							},
            							"mouseover" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#969696")
            							},
            							"disabled_selected" :
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
            								"font" : nexacro.FontObject("normal 500 12pt/normal \"Noto Sans KR\""),
            								"color" : nexacro.ColorObject("#2f2f2f"),
            								"padding" : nexacro.PaddingObject("3px 3px 3px 3px")
            							},
            							"mouseover" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#969696")
            							},
            							"disabled_selected" :
            							{
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
            										"font" : nexacro.FontObject("normal 500 16pt/normal \"Noto Sans KR\""),
            										"color" : nexacro.ColorObject("#7d7f97")
            									}
            								}
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
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_Step_N.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/img_Step_S.png\")")
            							}
            						}
            					}
            				}
            			},
            			"Menu" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
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
            								"color" : nexacro.ColorObject("#000000"),
            								"padding" : nexacro.PaddingObject("0px 10px 0px 10px")
            							},
            							"selected" :
            							{
            							},
            							"mouseover" :
            							{
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
            						"border" : nexacro.BorderObject("1px solid #ebebeb")
            					}
            				}
            			},
            			"PopupMenuControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #ebebeb")
            					}
            				}
            			},
            			"popupmenuitem" :
            			{
            				"parent" :
            				{
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"selected" :
            							{
            							},
            							"mouseover" :
            							{
            							}
            						}
            					},
            					"PopupMenuControl" :
            					{
            						"self" :
            						{
            							"selected" :
            							{
            							},
            							"mouseover" :
            							{
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
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/img_popmenu_check_NS.png\")")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/img_popmenu_check_NS.png\")")
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
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#252525")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#252525")
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
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#7a7a7a")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#7a7a7a")
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
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/img_menuexpand_N.png\")")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/img_menuexpand_N.png\")")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
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
            			"ImageViewer" :
            			{
            				"self" :
            				{
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #90caf9")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e0e0e0")
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
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 500 16pt/normal \"Noto Sans KR\""),
            								"color" : nexacro.ColorObject("#212121")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					}
            				}
            			},
            			"Div" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"color" : nexacro.ColorObject("#212121"),
            						"font" : nexacro.FontObject("normal 500 15pt/normal \"Noto Sans KR\"")
            					},
            					"mouseover" :
            					{
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"PopupDiv" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"color" : nexacro.ColorObject("#212121"),
            						"font" : nexacro.FontObject("normal 500 15pt/normal \"Noto Sans KR\"")
            					},
            					"mouseover" :
            					{
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999")
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
            								"border" : nexacro.BorderObject("1px solid #cccccc"),
            								"padding" : nexacro.PaddingObject("0px 5px 0px 50px")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f2f2f2")
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
            								"border" : nexacro.BorderObject("1px solid #cccccc"),
            								"color" : nexacro.ColorObject("#212121"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_groupboxtit.png\")"),
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            								"padding" : nexacro.PaddingObject("0px 5px 0px 10px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#9f9f9f"),
            								"border" : nexacro.BorderObject("1px solid #f2f2f2"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_groupboxtit_D.png\")")
            							}
            						}
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
            										"border" : nexacro.BorderObject("1px solid #c0c0c0"),
            										"font" : nexacro.FontObject("normal 500 11pt/normal \"Noto Sans KR\""),
            										"color" : nexacro.ColorObject("#202020")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #cccccc"),
            										"color" : nexacro.ColorObject("#959595")
            									}
            								}
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
            										"font" : nexacro.FontObject("normal 500 12pt/normal \"Noto Sans KR\""),
            										"color" : nexacro.ColorObject("#ffffff"),
            										"textPadding" : nexacro.PaddingObject("0px 15px 0px 15px")
            									},
            									"mouseover" :
            									{
            										"font" : nexacro.FontObject("normal 500 12pt/normal \"Noto Sans KR\""),
            										"color" : nexacro.ColorObject("#ffffff"),
            										"textPadding" : nexacro.PaddingObject("0px 15px 0px 15px")
            									},
            									"pushed" :
            									{
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #cccccc"),
            										"color" : nexacro.ColorObject("#939393")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"FileDownload" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"font" : nexacro.FontObject("normal 500 12pt/normal \"Noto Sans KR\""),
            						"color" : nexacro.ColorObject("#ffffff"),
            						"textPadding" : nexacro.PaddingObject("0px 10px 0px 10px")
            					},
            					"focused" :
            					{
            						"font" : nexacro.FontObject("normal 500 12pt/normal \"Noto Sans KR\""),
            						"color" : nexacro.ColorObject("#ffffff"),
            						"textPadding" : nexacro.PaddingObject("0px 10px 0px 10px")
            					},
            					"mouseover" :
            					{
            					},
            					"pushed" :
            					{
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#939393")
            					}
            				}
            			},
            			"cell" :
            			{
            				"parent" :
            				{
            					"row" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid transparent,1px solid #ffffff"),
            												"color" : nexacro.ColorObject("#ffffff"),
            												"font" : nexacro.FontObject("normal 700 15pt/normal \"Noto Sans KR\"")
            											},
            											"selected" :
            											{
            												"border" : nexacro.BorderObject("1px solid transparent,1px solid #ffffff"),
            												"color" : nexacro.ColorObject("#ffffff"),
            												"font" : nexacro.FontObject("normal 700 15pt/normal \"Noto Sans KR\"")
            											}
            										},
            										"class" :
            										[
            											{
            												"grid2" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid transparent,1px solid #ffffff"),
            															"color" : nexacro.ColorObject("#ffffff"),
            															"font" : nexacro.FontObject("normal 700 15pt/normal \"Noto Sans KR\"")
            														},
            														"selected" :
            														{
            															"border" : nexacro.BorderObject("1px solid transparent,1px solid #ffffff"),
            															"color" : nexacro.ColorObject("#ffffff"),
            															"font" : nexacro.FontObject("normal 700 15pt/normal \"Noto Sans KR\"")
            														}
            													}
            												}
            											},
            											{
            												"grd_grin" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid transparent,1px solid #ffffff"),
            															"color" : nexacro.ColorObject("#ffffff"),
            															"font" : nexacro.FontObject("normal 700 15pt/normal \"Noto Sans KR\"")
            														},
            														"selected" :
            														{
            															"border" : nexacro.BorderObject("1px solid transparent,1px solid #ffffff"),
            															"color" : nexacro.ColorObject("#ffffff"),
            															"font" : nexacro.FontObject("15pt/normal \"Noto Sans KR\"")
            														}
            													}
            												}
            											}
            										]
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
            												"border" : nexacro.BorderObject("1px solid #e5e5e5"),
            												"color" : nexacro.ColorObject("#000000")
            											}
            										}
            									}
            								}
            							},
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
            												"border" : nexacro.BorderObject("1px solid #afc3e8"),
            												"color" : nexacro.ColorObject("#7d7f97"),
            												"font" : nexacro.FontObject("normal 500 14pt/normal \"Noto Sans KR\"")
            											},
            											"blinked" :
            											{
            												"color" : nexacro.ColorObject("#ffffff")
            											}
            										},
            										"class" :
            										[
            											{
            												"grid2" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #cccccc"),
            															"color" : nexacro.ColorObject("#7d7f97"),
            															"font" : nexacro.FontObject("normal 500 14pt/normal \"Noto Sans KR\"")
            														},
            														"blinked" :
            														{
            															"color" : nexacro.ColorObject("#ffffff")
            														}
            													}
            												}
            											},
            											{
            												"grd_grin" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #cccccc"),
            															"color" : nexacro.ColorObject("#7d7f97"),
            															"font" : nexacro.FontObject("normal 500 14pt/normal \"Noto Sans KR\"")
            														},
            														"blinked" :
            														{
            															"color" : nexacro.ColorObject("#ffffff")
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
            										"border" : nexacro.BorderObject("1px solid #f5f5f5"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #f5f5f5"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"readonly" :
            									{
            										"border" : nexacro.BorderObject("1px solid #f5f5f5"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #f5f5f5"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #ebebeb")
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
            										"border" : nexacro.BorderObject("1px solid #f5f5f5"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #f5f5f5"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"readonly" :
            									{
            										"border" : nexacro.BorderObject("1px solid #f5f5f5"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #f5f5f5"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #ebebeb")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"cellbutton" :
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
            									"head" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("1px solid transparent")
            													},
            													"selected" :
            													{
            														"border" : nexacro.BorderObject("1px solid transparent")
            													},
            													"focused" :
            													{
            														"border" : nexacro.BorderObject("1px solid transparent")
            													},
            													"mouseover" :
            													{
            														"border" : nexacro.BorderObject("1px solid #9f9f9f")
            													},
            													"pushed" :
            													{
            														"border" : nexacro.BorderObject("1px solid #666666")
            													},
            													"disabled" :
            													{
            														"color" : nexacro.ColorObject("#939393")
            													}
            												}
            											}
            										}
            									},
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
            														"border" : nexacro.BorderObject("1px solid #c0c0c0")
            													},
            													"selected" :
            													{
            														"border" : nexacro.BorderObject("1px solid #c0c0c0")
            													},
            													"focused" :
            													{
            														"border" : nexacro.BorderObject("1px solid #c0c0c0")
            													},
            													"mouseover" :
            													{
            														"border" : nexacro.BorderObject("1px solid #9f9f9f")
            													},
            													"pushed" :
            													{
            														"border" : nexacro.BorderObject("1px solid #666666")
            													},
            													"disabled" :
            													{
            														"color" : nexacro.ColorObject("#939393")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c0c0c0")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9f9f9f")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("1px solid #666666")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#939393")
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
            														"border" : nexacro.BorderObject("1px solid #f5f5f5"),
            														"color" : nexacro.ColorObject("#000000")
            													},
            													"disabled" :
            													{
            														"border" : nexacro.BorderObject("1px solid #f5f5f5"),
            														"color" : nexacro.ColorObject("#000000")
            													},
            													"mouseover" :
            													{
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
            			"cellexpandbutton" :
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
            														"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            														"icon" : nexacro.UrlObject("URL(\"theme://images/btn_GridExpand_N.png\")")
            													},
            													"selected" :
            													{
            														"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            														"icon" : nexacro.UrlObject("URL(\"theme://images/btn_GridExpand_N.png\")")
            													},
            													"focused" :
            													{
            														"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\""),
            														"icon" : nexacro.UrlObject("URL(\"theme://images/btn_GridExpand_N.png\")")
            													},
            													"mouseover" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/btn_GridExpand_P.png\")")
            													},
            													"pushed" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/btn_GridExpand_P.png\")")
            													},
            													"disabled" :
            													{
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
            			"celledit" :
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
            														"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #c0c0c0, 0px none")
            													},
            													"disabled" :
            													{
            														"color" : nexacro.ColorObject("#9a9a9a"),
            														"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
            													},
            													"focused" :
            													{
            														"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #1565c0, 0px none")
            													},
            													"readonly" :
            													{
            														"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
            													},
            													"mouseover" :
            													{
            														"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #1565c0, 0px none")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #c0c0c0, 0px none")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#9a9a9a"),
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #1565c0, 0px none")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #1565c0, 0px none")
            							}
            						}
            					}
            				}
            			},
            			"cellmaskedit" :
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
            														"border" : nexacro.BorderObject("1px solid #999999"),
            														"color" : nexacro.ColorObject("#000000"),
            														"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            													},
            													"disabled" :
            													{
            														"color" : nexacro.ColorObject("#9a9a9a"),
            														"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
            													},
            													"focused" :
            													{
            														"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #1565c0, 0px none")
            													},
            													"readonly" :
            													{
            														"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
            													},
            													"mouseover" :
            													{
            														"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #1565c0, 0px none")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #999999"),
            								"color" : nexacro.ColorObject("#000000"),
            								"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#9a9a9a"),
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #1565c0, 0px none")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #1565c0, 0px none")
            							}
            						}
            					}
            				}
            			},
            			"celltextarea" :
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
            														"border" : nexacro.BorderObject("1px solid #bdbdbd"),
            														"padding" : nexacro.PaddingObject("3px 3px 3px 3px")
            													},
            													"disabled" :
            													{
            														"color" : nexacro.ColorObject("#9a9a9a"),
            														"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
            													},
            													"focused" :
            													{
            														"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #1565c0, 0px none")
            													},
            													"readonly" :
            													{
            														"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
            													},
            													"mouseover" :
            													{
            														"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #1565c0, 0px none")
            													}
            												},
            												"class" :
            												[
            													{
            														"grid2" :
            														{
            															"self" :
            															{
            																"enabled" :
            																{
            																	"border" : nexacro.BorderObject("1px solid #bdbdbd"),
            																	"padding" : nexacro.PaddingObject("3px 3px 3px 3px")
            																}
            															}
            														}
            													}
            												]
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #bdbdbd"),
            								"padding" : nexacro.PaddingObject("3px 3px 3px 3px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#9a9a9a"),
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #1565c0, 0px none")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #1565c0, 0px none")
            							}
            						}
            					}
            				}
            			},
            			"treeitembutton" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
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
            															"expand" :
            															{
            																"icon" : nexacro.UrlObject("URL(\"theme://images/img_TreeCollapse.png\")")
            															},
            															"collapse" :
            															{
            																"icon" : nexacro.UrlObject("URL(\"theme://images/img_TreeExpand.png\")")
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
            					}
            				}
            			},
            			"treeitemimage" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
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
            															"leaf" :
            															{
            																"icon" : nexacro.UrlObject("URL(\"theme://images/img_TreeItem.png\")")
            															},
            															"collapse" :
            															{
            																"icon" : nexacro.UrlObject("URL(\"theme://images/img_TreeClose.png\")")
            															},
            															"expand" :
            															{
            																"icon" : nexacro.UrlObject("URL(\"theme://images/img_TreeOpen.png\")")
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
            					}
            				}
            			},
            			"celltreeline" :
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
            														"border" : nexacro.BorderObject("1px dotted #c7c7c7")
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
            										"border" : nexacro.BorderObject("2px solid #1565c0")
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
            						"border" : nexacro.BorderObject("1px solid #e0e0e0")
            					}
            				}
            			},
            			"PluginControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e0e0e0")
            					}
            				}
            			},
            			"WebBrowser" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e0e0e0")
            					}
            				}
            			},
            			"WebBrowserControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e0e0e0")
            					}
            				}
            			},
            			"Sketch" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e0e0e0")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#9a9a9a")
            					}
            				}
            			},
            			"ListView" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc"),
            						"color" : nexacro.ColorObject("#000000")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc"),
            						"color" : nexacro.ColorObject("#000000")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc"),
            						"color" : nexacro.ColorObject("#000000")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc"),
            						"color" : nexacro.ColorObject("#000000")
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
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
            								"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\"")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
            								"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
            								"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\"")
            							},
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
            								"font" : nexacro.FontObject("normal 500 10pt/normal \"Noto Sans KR\"")
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
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_drop_N.png\")"),
            										"border" : nexacro.BorderObject("1px solid #c0c0c0")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9f9f9f")
            									},
            									"pushed" :
            									{
            										"border" : nexacro.BorderObject("1px solid #666666")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#939393")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Button" :
            			{
            				"class" :
            				[
            					{
            						"btn_basic" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 700 16pt/normal \"Noto Sans KR\""),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("1px solid transparent")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"mMainMenu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#999999"),
            									"font" : nexacro.FontObject("normal 700 15pt/normal \"Noto Sans KR\""),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("10px 0px 0px"),
            									"border" : nexacro.BorderObject("1px solid transparent")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#234381")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#234381")
            								}
            							}
            						}
            					},
            					{
            						"btn_3month" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 700 15pt/normal \"Noto Sans KR\""),
            									"color" : nexacro.ColorObject("#c0cfec"),
            									"border" : nexacro.BorderObject("2px solid #c0cfec")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("2px solid #dddddd"),
            									"color" : nexacro.ColorObject("#dddddd")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#1d4898")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#1d4898")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#1d4898")
            								}
            							}
            						}
            					},
            					{
            						"btn_6month" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 700 15pt/normal \"Noto Sans KR\""),
            									"color" : nexacro.ColorObject("#c0cfec"),
            									"border" : nexacro.BorderObject("2px solid #c0cfec")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("2px solid #dddddd"),
            									"color" : nexacro.ColorObject("#dddddd")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#1d4898")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#1d4898")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#1d4898")
            								}
            							}
            						}
            					},
            					{
            						"btn_12month" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 700 15pt/normal \"Noto Sans KR\""),
            									"color" : nexacro.ColorObject("#c0cfec"),
            									"border" : nexacro.BorderObject("2px solid #c0cfec")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("2px solid #dddddd"),
            									"color" : nexacro.ColorObject("#dddddd")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#1d4898")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#1d4898")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#1d4898")
            								}
            							}
            						}
            					},
            					{
            						"btn_pop" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 700 14.5pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("-0.5px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_pop_no" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 700 14.5pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("-0.5px"),
            									"color" : nexacro.ColorObject("#7d7f97"),
            									"border" : nexacro.BorderObject("1px solid #cccccc,0px none,0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_pop_yes" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 700 14.5pt/normal \"Noto Sans KR\""),
            									"letterSpacing" : nexacro.CSSValueObject("-0.5px"),
            									"color" : nexacro.ColorObject("#3e4a61"),
            									"border" : nexacro.BorderObject("1px solid #cccccc,0px none,0px none,1px solid #cccccc")
            								}
            							}
            						}
            					},
            					{
            						"btn_agree" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 700 18pt/normal \"Noto Sans KR\"")
            								}
            							}
            						}
            					}
            				]
            			},
            			"tabbuttonitemtext" :
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
            										"font" : nexacro.FontObject("normal 700 16pt/normal \"Noto Sans KR\"")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#cfcfcf")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#082c71")
            									}
            								}
            							}
            						}
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
            								"border" : nexacro.BorderObject("1px solid #cccccc")
            							},
            							"focused" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"Grid" :
            			{
            				"class" :
            				[
            					{
            						"grid2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent")
            								}
            							}
            						}
            					},
            					{
            						"grd_grin" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent")
            								}
            							}
            						}
            					}
            				]
            			}
		},
		{
            "includeStatusMap" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();
        imgcache[nexacro._getImageLocation("theme://images/titlebar_icon_nexacro17.ico")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/titlebar_icon.png")] = { width:13, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_min_N.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_min_P.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_min_O.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_min_D.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_max_N.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_max_P.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_max_O.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_max_D.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_normal_N.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_normal_P.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_normal_O.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_normal_D.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_close_N.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_close_P.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_close_O.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_close_D.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/img_grip.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SpinUp_N.png")] = { width:8, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SpinUp_P.png")] = { width:8, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SpinUp_D.png")] = { width:8, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SpinDown_N.png")] = { width:8, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SpinDown_P.png")] = { width:8, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SpinDown_D.png")] = { width:8, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabExtra_N.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabExtra_O.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabExtra_D.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabnext_N.png")] = { width:4, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabprev_N.png")] = { width:4, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabnext_P.png")] = { width:4, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabprev_P.png")] = { width:4, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/img_check_NN.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_check_NS.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_check_DN.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_check_DS.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Radio_NN.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Radio_NS.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Radio_DN.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Radio_DS.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diary_cal.png")] = { width:22, height:23 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_next_N.png")] = { width:9, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_prev_N.png")] = { width:9, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_vinc_N.png")] = { width:9, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_vinc_P.png")] = { width:9, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_vinc_O.png")] = { width:9, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_vinc_D.png")] = { width:9, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_vdec_N.png")] = { width:9, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_vdec_P.png")] = { width:9, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_vdec_O.png")] = { width:9, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_vdec_D.png")] = { width:9, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_hinc_N.png")] = { width:10, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_hinc_P.png")] = { width:10, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_hinc_O.png")] = { width:10, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_hinc_D.png")] = { width:10, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_hdec_N.png")] = { width:10, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_hdec_P.png")] = { width:10, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_hdec_O.png")] = { width:10, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_hdec_D.png")] = { width:10, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_drop_N.png")] = { width:14, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_drop_D.png")] = { width:14, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Step_N.png")] = { width:20, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Step_S.png")] = { width:20, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_menunext_N.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_menunext_P.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_menunext_D.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_menuprev_N.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_menuprev_P.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_menuprev_D.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenuprev_N.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenuprev_P.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenuprev_D.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenunext_N.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenunext_P.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenunext_D.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/img_popmenu_check_NS.png")] = { width:12, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/img_menuexpand_N.png")] = { width:7, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/img_groupboxtit.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_groupboxtit_D.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_GridExpand_N.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_GridExpand_P.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeCollapse.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeExpand.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeItem.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeClose.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeOpen.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_visit_cal.png")] = { width:19, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/bg_diary_bc1.png")] = { width:78, height:133 };
        		imgcache[nexacro._getImageLocation("theme://images/bg_diary_bc2.png")] = { width:78, height:133 };
        		imgcache[nexacro._getImageLocation("theme://images/bg_diary_bc3.png")] = { width:78, height:133 };
        		imgcache[nexacro._getImageLocation("theme://images/bg_diary_bc4.png")] = { width:78, height:133 };
        		imgcache[nexacro._getImageLocation("theme://images/bg_diary_bc5.png")] = { width:78, height:133 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_360camera.png")] = { width:48, height:46 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_D.png")] = { width:15, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_N.png")] = { width:15, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_P.png")] = { width:15, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_chatbot.png")] = { width:46, height:46 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_close.png")] = { width:36, height:36 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_drop_P.png")] = { width:14, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_sear.png")] = { width:32, height:32 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabnext_D.png")] = { width:4, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabnext_O.png")] = { width:4, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabprev_D.png")] = { width:4, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabprev_O.png")] = { width:4, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/diary_profile.png")] = { width:100, height:100 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_back1.png")] = { width:16, height:29 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_back2.png")] = { width:16, height:29 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diary_detail.png")] = { width:8, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_file.png")] = { width:10, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_loginfailed.png")] = { width:92, height:92 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_loginsuccess.png")] = { width:92, height:92 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_mypage1.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_mypage2.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_mypage3.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_mypage_detail.png")] = { width:9, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_mypage_profile1.png")] = { width:54, height:54 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_mypage_profile2.png")] = { width:100, height:100 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_mypage_setting1.png")] = { width:22, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_mypage_setting2.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_notice_close.png")] = { width:24, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_notice_open.png")] = { width:24, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_visit_chev.png")] = { width:14, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_visit_pop1.png")] = { width:96, height:96 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_visit_pop2.png")] = { width:85, height:100 };
        		imgcache[nexacro._getImageLocation("theme://images/imv_profile_e.png")] = { width:46, height:46 };
        		imgcache[nexacro._getImageLocation("theme://images/intro_logo1.png")] = { width:126, height:32 };
        		imgcache[nexacro._getImageLocation("theme://images/intro_logo2.png")] = { width:157, height:32 };
        		imgcache[nexacro._getImageLocation("theme://images/intro_logo3.png")] = { width:98, height:32 };
        		imgcache[nexacro._getImageLocation("theme://images/menu1_off.png")] = { width:32, height:32 };
        		imgcache[nexacro._getImageLocation("theme://images/menu1_on.png")] = { width:32, height:32 };
        		imgcache[nexacro._getImageLocation("theme://images/menu2_off.png")] = { width:32, height:32 };
        		imgcache[nexacro._getImageLocation("theme://images/menu2_on.png")] = { width:32, height:32 };
        		imgcache[nexacro._getImageLocation("theme://images/menu3_off.png")] = { width:32, height:32 };
        		imgcache[nexacro._getImageLocation("theme://images/menu3_on.png")] = { width:32, height:32 };
        		imgcache[nexacro._getImageLocation("theme://images/menu4_off.png")] = { width:32, height:32 };
        		imgcache[nexacro._getImageLocation("theme://images/menu4_on.png")] = { width:32, height:32 };
        		imgcache[nexacro._getImageLocation("theme://images/pop_menu_icon.png")] = { width:14, height:14 };
	};
}
)();
